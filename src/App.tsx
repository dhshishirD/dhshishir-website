import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import type { ViewType } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ToolsSection } from './components/ToolsSection';
import { FluencyLabHub } from './components/fluency/FluencyLabHub';
import { BlogSection } from './components/BlogSection';
import { AboutContactSection } from './components/AboutContactSection';
import { Footer } from './components/Footer';
import { GlobalVocabVault } from './components/common/GlobalVocabVault';
import { lazy, Suspense } from 'react';

const StandaloneToolPage = lazy(() => import('./components/tools/StandaloneToolPage').then(m => ({ default: m.StandaloneToolPage })));
const LearnerDashboard = lazy(() => import('./components/dashboard/LearnerDashboard').then(m => ({ default: m.LearnerDashboard })));
const DiplomaticHub = lazy(() => import('./components/diplomacy/DiplomaticHub').then(m => ({ default: m.DiplomaticHub })));
const DossierDetailPage = lazy(() => import('./components/diplomacy/DossierDetailPage').then(m => ({ default: m.DossierDetailPage })));
const DiplomaticMapPage = lazy(() => import('./components/diplomacy/DiplomaticMapPage').then(m => ({ default: m.DiplomaticMapPage })));
const FluencyLabPage = lazy(() => import('./components/pages/FluencyLabPage').then(m => ({ default: m.FluencyLabPage })));
const LeadershipPage = lazy(() => import('./components/pages/LeadershipPage').then(m => ({ default: m.LeadershipPage })));
const BlogPage = lazy(() => import('./components/pages/BlogPage').then(m => ({ default: m.BlogPage })));
const BlogPostDetailPage = lazy(() => import('./components/pages/BlogPostDetailPage').then(m => ({ default: m.BlogPostDetailPage })));
const ContactPage = lazy(() => import('./components/pages/ContactPage').then(m => ({ default: m.ContactPage })));
const ToolsDirectoryPage = lazy(() => import('./components/pages/ToolsDirectoryPage').then(m => ({ default: m.ToolsDirectoryPage })));
const FellowshipPage = lazy(() => import('./components/pages/FellowshipPage').then(m => ({ default: m.FellowshipPage })));
const IeltsHubPage = lazy(() => import('./components/pages/IeltsHubPage').then(m => ({ default: m.IeltsHubPage })));
const OrganizationHubPage = lazy(() => import('./components/pages/OrganizationHubPage').then(m => ({ default: m.OrganizationHubPage })));
const AdminExecutiveDashboard = lazy(() => import('./components/admin/AdminExecutiveDashboard').then(m => ({ default: m.AdminExecutiveDashboard })));

const RouteLoadingSpinner = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3 bg-slate-50 text-slate-900 py-20">
    <div className="w-8 h-8 border-3 border-teal-200 border-t-teal-800 rounded-full animate-spin" />
    <span className="text-xs font-semibold text-slate-500 tracking-wider uppercase">Loading Resource...</span>
  </div>
);
import { supabase } from './services/supabaseClient';
import { syncLocalProfileToCloud } from './services/cloudProfileService';
import { Globe, ArrowRight, GraduationCap } from 'lucide-react';

export function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [isStandaloneTool, setIsStandaloneTool] = useState(false);
  const [activeToolId, setActiveToolId] = useState<string>('cover-letter');
  const [activeIeltsToolId, setActiveIeltsToolId] = useState<string | null>(null);
  const [activeDossierSlug, setActiveDossierSlug] = useState<string | null>(null);
  const [activeBlogSlug, setActiveBlogSlug] = useState<string | null>(null);
  const [activeMapLocationId, setActiveMapLocationId] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);

  // Sync route with browser URL
  const updateRouteFromLocation = () => {
    const path = window.location.pathname.toLowerCase().replace(/\/+$/, '');
    const hash = window.location.hash.toLowerCase();

    // Check pathname first (clean URLs)
    if (path === '/organizations' || path === '/career-pathways' || path === '/career-hub' || path === '/scholarships' || path === '/un-jobs' || path === '/ngo-jobs' || hash.startsWith('#/organizations') || hash.startsWith('#/scholarships')) {
      setActiveDossierSlug(null);
      setCurrentView('organizations');
      setIsStandaloneTool(false);
      document.title = 'Global Organization Strategic Dossiers, 100% Verified Careers & Scholarships Hub | DH Shishir';
    } else if (path === '/fellowship' || path === '/ir-fellowship' || path === '/master-ir' || hash.startsWith('#/fellowship')) {
      setActiveDossierSlug(null);
      setCurrentView('fellowship');
      setIsStandaloneTool(false);
      document.title = "Open Master's Fellowship in International Relations & Strategic Studies | DH Shishir";
    } else if (path === '/diplomatic-map' || path === '/map' || path === '/diplomaticmap' || hash.startsWith('#/diplomatic-map') || hash.startsWith('#/map')) {
      const locParam = new URLSearchParams(window.location.search).get('location');
      setActiveMapLocationId(locParam || null);
      setActiveDossierSlug(null);
      setCurrentView('map');
      setIsStandaloneTool(false);
      document.title = 'Interactive Diplomatic & Geopolitical World Map | Strategic Sea Lanes & Global Chokepoints | DH Shishir';
    } else if (path.startsWith('/diplomacy/') || hash.startsWith('#/diplomacy/')) {
      const slug = path.replace('/diplomacy/', '') || hash.replace('#/diplomacy/', '');
      setActiveDossierSlug(slug);
      setCurrentView('diplomacy');
      setIsStandaloneTool(false);
    } else if (path === '/diplomacy' || path === '/policy' || path === '/intel' || hash.startsWith('#/diplomacy')) {
      setActiveDossierSlug(null);
      setCurrentView('diplomacy');
      setIsStandaloneTool(false);
      document.title = 'Diplomatic & Foreign Policy Intelligence Hub | DH Shishir';
    } else if (path.startsWith('/ielts/') || hash.startsWith('#/ielts/')) {
      const toolId = path.replace('/ielts/', '') || hash.replace('#/ielts/', '');
      setActiveIeltsToolId(toolId || 'writing-scanner');
      setActiveDossierSlug(null);
      setCurrentView('ielts');
      setIsStandaloneTool(false);
      const titleMap: { [key: string]: string } = {
        'writing-scanner': 'IELTS Handwritten Essay OCR Scanner & Rubric Grader | DH Shishir',
        'listening-simulator': 'IELTS 4-Section Listening Exam Simulator (1.0x-1.25x) | DH Shishir',
        'reading-lab': 'IELTS Split-Screen Academic Reading Lab & T/F/NG Logic | DH Shishir',
        'daily-drill-tracker': '120-Day IELTS Band 8.5-9.0 Daily Roadmap & Error Vault | DH Shishir',
        'speaking-radar': 'IELTS Speaking Flow & WPM Cadence Radar | DH Shishir',
        'task1-morpher': 'IELTS Academic Task 1 Chart Morpher & Sentence Sandbox | DH Shishir',
        'collocation-duel': 'IELTS Band 9 Collocation Speed Arcade | DH Shishir',
        'tfng-court': 'IELTS Reading T/F/NG Forensic Courtroom | DH Shishir',
      };
      document.title = titleMap[toolId] || 'IELTS Band 8.5 Master Preparation Hub | DH Shishir';
    } else if (path === '/ielts' || path === '/ielts-hub' || path === '/ielts-prep' || hash.startsWith('#/ielts')) {
      setActiveIeltsToolId(null);
      setActiveDossierSlug(null);
      setCurrentView('ielts');
      setIsStandaloneTool(false);
      document.title = 'IELTS Master Preparation Hub | Band 8.5+ Free Dynamic Simulators & Roadmap | DH Shishir';
    } else if (path === '/english-fluency-lab' || path === '/fluency-lab' || path === '/english' || hash.startsWith('#/english-fluency-lab') || hash.startsWith('#/fluency-lab')) {
      setActiveDossierSlug(null);
      setCurrentView('fluency-lab');
      setIsStandaloneTool(false);
      document.title = 'English Fluency Lab | Free English Speaking Course Online & Practice | DH Shishir';
    } else if (path.startsWith('/tools/') || hash.startsWith('#/tools/')) {
      setActiveDossierSlug(null);
      const toolId = path.replace('/tools/', '') || hash.replace('#/tools/', '');
      setActiveToolId(toolId || 'cover-letter');
      setCurrentView('tools');
      setIsStandaloneTool(true);
      document.title = `${toolId.toUpperCase()} | Free Career & Productivity Tools | DH Shishir`;
    } else if (path === '/tools' || hash.startsWith('#/tools')) {
      setActiveDossierSlug(null);
      setCurrentView('tools');
      setIsStandaloneTool(false);
      document.title = 'Free Career & Productivity Tools Suite | DH Shishir';
    } else if (path === '/leadership' || path === '/experience' || hash.startsWith('#/leadership')) {
      setActiveDossierSlug(null);
      setCurrentView('leadership');
      setIsStandaloneTool(false);
      document.title = 'Global Leadership, Delegations & Bio | DH Shishir';
    } else if (path.startsWith('/blog/') || hash.startsWith('#/blog/')) {
      const slug = path.replace('/blog/', '') || hash.replace('#/blog/', '');
      setActiveBlogSlug(slug);
      setActiveDossierSlug(null);
      setCurrentView('blog');
      setIsStandaloneTool(false);
    } else if (path === '/blog' || path === '/insights' || path === '/articles' || hash.startsWith('#/blog')) {
      setActiveBlogSlug(null);
      setActiveDossierSlug(null);
      setCurrentView('blog');
      setIsStandaloneTool(false);
      document.title = 'Strategic Insights, Articles & Policy Commentary | DH Shishir';
    } else if (path === '/contact' || path === '/about' || hash.startsWith('#/contact')) {
      setActiveDossierSlug(null);
      setCurrentView('contact');
      setIsStandaloneTool(false);
      document.title = 'Contact, Advisory & Speaking Inquiries | DH Shishir';
    } else if (path === '/dashboard' || path === '/profile' || hash.startsWith('#/dashboard')) {
      setActiveDossierSlug(null);
      setCurrentView('dashboard');
      setIsStandaloneTool(false);
      document.title = 'Personal Command & Learning Dashboard | DH Shishir';
    } else if (path === '/command' || path === '/executive-command' || path === '/shishir-command' || hash.startsWith('#/command')) {
      setActiveDossierSlug(null);
      setActiveBlogSlug(null);
      setCurrentView('admin');
      setIsStandaloneTool(false);
      document.title = 'Executive Command & Intelligence Center | DH Shishir';
    } else {
      setActiveDossierSlug(null);
      setCurrentView('home');
      setIsStandaloneTool(false);
      document.title = 'Daloyar Hassan Shishir | Diplomatic Enthusiast, Policy Analyst & English Educator';
    }
  };

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      if (data.user) {
        syncLocalProfileToCloud(data.user.id, data.user.email, data.user.user_metadata?.full_name);
      }
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        syncLocalProfileToCloud(session.user.id, session.user.email, session.user.user_metadata?.full_name);
      }
    });

    updateRouteFromLocation();
    window.addEventListener('popstate', updateRouteFromLocation);
    window.addEventListener('hashchange', updateRouteFromLocation);

    return () => {
      window.removeEventListener('popstate', updateRouteFromLocation);
      window.removeEventListener('hashchange', updateRouteFromLocation);
      authListener.subscription.unsubscribe();
    };
  }, []);

  const navigateTo = (view: ViewType, subParam?: string) => {
    let targetPath = '/';
    if (view === 'organizations') {
      targetPath = '/organizations';
      setActiveDossierSlug(null);
    } else if (view === 'fellowship') {
      targetPath = '/fellowship';
      setActiveDossierSlug(null);
        } else if (view === 'map') {
      targetPath = subParam ? `/diplomatic-map?location=${subParam}` : '/diplomatic-map';
      setActiveMapLocationId(subParam || null);
      setActiveDossierSlug(null);
    } else if (view === 'diplomacy') {
      targetPath = subParam ? `/diplomacy/${subParam}` : '/diplomacy';
      if (subParam) setActiveDossierSlug(subParam);
      else setActiveDossierSlug(null);
    } else if (view === 'ielts') {
      targetPath = '/ielts';
      setActiveDossierSlug(null);
    } else if (view === 'fluency-lab') {
      targetPath = '/english-fluency-lab';
      setActiveDossierSlug(null);
    } else if (view === 'tools') {
      targetPath = subParam ? `/tools/${subParam}` : '/tools';
      setActiveDossierSlug(null);
    } else if (view === 'leadership') {
      targetPath = '/leadership';
      setActiveDossierSlug(null);
    } else if (view === 'blog') {
      targetPath = subParam ? `/blog/${subParam}` : '/blog';
      if (subParam) setActiveBlogSlug(subParam);
      else setActiveBlogSlug(null);
      setActiveDossierSlug(null);
    } else if (view === 'contact') {
      targetPath = '/contact';
      setActiveDossierSlug(null);
    } else if (view === 'dashboard') {
      targetPath = '/dashboard';
      setActiveDossierSlug(null);
    } else if (view === 'admin') {
      targetPath = '/command';
      setActiveDossierSlug(null);
      setActiveBlogSlug(null);
    } else {
      setActiveDossierSlug(null);
    }

    window.history.pushState(null, '', targetPath);
    if (view === 'tools' && subParam) {
      setActiveToolId(subParam);
      setIsStandaloneTool(true);
    } else {
      setIsStandaloneTool(false);
    }
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-amber-100 selection:text-amber-900 font-sans antialiased">
      <Navbar currentView={currentView} onNavigate={navigateTo} />
      
      <main>
        <Suspense fallback={<RouteLoadingSpinner />}>
        {currentView === 'organizations' ? (
          <OrganizationHubPage
            user={user}
            onNavigateHome={() => navigateTo('home')}
            onNavigateToAtsWithTrack={(_trackPayload) => {
              navigateTo('tools', 'ats-resume');
            }}
          />
        ) : currentView === 'map' ? (
          <DiplomaticMapPage
            initialLocationId={activeMapLocationId}
            onNavigateHome={() => navigateTo('home')}
            onNavigateDiplomacy={() => navigateTo('diplomacy')}
            onNavigateDossier={(slug) => navigateTo('diplomacy', slug)}
            onNavigateFellowship={() => navigateTo('fellowship')}
          />
        ) : currentView === 'fellowship' ? (
          <FellowshipPage
            user={user}
            onNavigateHome={() => navigateTo('home')}
          />
        ) : currentView === 'diplomacy' ? (
          activeDossierSlug ? (
            <DossierDetailPage
              slug={activeDossierSlug}
              user={user}
              onNavigateHome={() => navigateTo('home')}
              onNavigateDiplomacy={() => navigateTo('diplomacy')}
              onNavigateDossier={(slug) => navigateTo('diplomacy', slug)}
              onNavigateToMap={(locId) => navigateTo('map', locId)}
            />
          ) : (
            <DiplomaticHub
              user={user}
              onNavigateHome={() => navigateTo('home')}
              onOpenDossierPage={(slug) => navigateTo('diplomacy', slug)}
              onNavigateToMap={(locId) => navigateTo('map', locId)}
            />
          )
        ) : currentView === 'ielts' ? (
          <IeltsHubPage initialToolId={activeIeltsToolId || undefined} />
        ) : currentView === 'fluency-lab' ? (
          <FluencyLabPage
            user={user}
            onNavigateHome={() => navigateTo('home')}
          />
        ) : currentView === 'tools' ? (
          isStandaloneTool ? (
            <StandaloneToolPage
              toolId={activeToolId}
              onNavigateHome={() => navigateTo('home')}
              onSelectTool={(id) => navigateTo('tools', id)}
            />
          ) : (
            <ToolsDirectoryPage
              user={user}
              onNavigateHome={() => navigateTo('home')}
              onLaunchTool={(id) => navigateTo('tools', id)}
            />
          )
        ) : currentView === 'leadership' ? (
          <LeadershipPage
            onNavigateHome={() => navigateTo('home')}
          />
        ) : currentView === 'blog' ? (
          activeBlogSlug ? (
            <BlogPostDetailPage
              slug={activeBlogSlug}
              onNavigateHome={() => navigateTo('home')}
              onNavigateBlog={() => navigateTo('blog')}
              onNavigatePost={(slug) => navigateTo('blog', slug)}
              onNavigateTools={(tId) => navigateTo('tools', tId)}
              onNavigateFluency={() => navigateTo('fluency-lab')}
            />
          ) : (
            <BlogPage
              initialSlug={null}
              onNavigateHome={() => navigateTo('home')}
              onSelectPost={(slug) => navigateTo('blog', slug)}
              onNavigateTools={(tId) => navigateTo('tools', tId)}
              onNavigateFluency={() => navigateTo('fluency-lab')}
            />
          )
        ) : currentView === 'contact' ? (
          <ContactPage
            onNavigateHome={() => navigateTo('home')}
          />
        ) : currentView === 'dashboard' ? (
          <LearnerDashboard
            user={user}
            onSignOut={() => {
              setUser(null);
              navigateTo('home');
            }}
            onNavigateStage={(_stage) => {
              navigateTo('fluency-lab');
            }}
          />
        ) : currentView === 'admin' ? (
          <AdminExecutiveDashboard
            onNavigateHome={() => navigateTo('home')}
            onNavigateFellowship={() => navigateTo('fellowship')}
            onNavigateFluency={() => navigateTo('fluency-lab')}
          />
        ) : (
          /* UNIFIED HOMEPAGE OVERVIEW */
          <>
            <HeroSection onNavigate={navigateTo} />
            
            {/* Featured IR Fellowship Academic Spotlight Banner on Homepage */}
            <section className="py-12 bg-white border border-slate-200 border-y border-teal-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white border border-teal-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
                  <div className="space-y-2 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-900 text-xs font-bold uppercase tracking-wider">
                      <GraduationCap className="w-3.5 h-3.5 text-amber-400" /> Open Master's Fellowship (OMF-IRSS)
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                      Open Master's Fellowship in International Relations & Strategic Studies
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
                      Master classical statecraft, cognitive political psychology, UNCLOS maritime law, and the post-2024 Bangladesh sovereign foreign policy paradigm. Earn verifiable credentials and academic transcripts.
                    </p>
                  </div>
                  <button
                    onClick={() => navigateTo('fellowship')}
                    className="px-6 py-3.5 rounded-2xl bg-teal-900 hover:bg-teal-800 text-white font-bold text-xs sm:text-sm transition flex items-center gap-2 shrink-0 cursor-pointer shadow-xs"
                  >
                    <span>Enter Master's Academy</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </section>

            {/* Featured Diplomatic Hub Spotlight Banner on Homepage */}
            <section className="py-12 bg-slate-50 border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
                  <div className="space-y-2 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
                      <Globe className="w-3.5 h-3.5 text-teal-900" /> Strategic Intelligence Desk
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                      Explore the Diplomatic & Foreign Policy Intelligence Hub
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
                      Live daily intelligence synthesizing 25+ global think tanks (BIISS, BIPSS, ORF, CSIS, Chatham House) with strategic impact analysis for Bangladesh.
                    </p>
                  </div>
                  <button
                    onClick={() => navigateTo('diplomacy')}
                    className="px-6 py-3.5 rounded-2xl bg-teal-900 hover:bg-teal-800 text-white font-bold text-xs sm:text-sm transition flex items-center gap-2 shrink-0 cursor-pointer shadow-xs"
                  >
                    <span>Launch Diplomatic Desk</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </section>

            <ExperienceSection />
            <FluencyLabHub />
            <ToolsSection onLaunchStandaloneTool={(id) => navigateTo('tools', id)} />
            <BlogSection />
            <AboutContactSection />
          </>
        )}
        </Suspense>
      </main>

      <Footer onNavigate={navigateTo} />
      <GlobalVocabVault />
    </div>
  );
}

export default App;
