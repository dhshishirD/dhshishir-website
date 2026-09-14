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
import { StandaloneToolPage } from './components/tools/StandaloneToolPage';
import { LearnerDashboard } from './components/dashboard/LearnerDashboard';
import { DiplomaticHub } from './components/diplomacy/DiplomaticHub';
import { DossierDetailPage } from './components/diplomacy/DossierDetailPage';
import { DiplomaticMapPage } from './components/diplomacy/DiplomaticMapPage';
import { FluencyLabPage } from './components/pages/FluencyLabPage';
import { LeadershipPage } from './components/pages/LeadershipPage';
import { BlogPage } from './components/pages/BlogPage';
import { ContactPage } from './components/pages/ContactPage';
import { ToolsDirectoryPage } from './components/pages/ToolsDirectoryPage';
import { FellowshipPage } from './components/pages/FellowshipPage';
import { supabase } from './services/supabaseClient';
import { syncLocalProfileToCloud } from './services/cloudProfileService';
import { Globe, ArrowRight, GraduationCap } from 'lucide-react';

export function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [isStandaloneTool, setIsStandaloneTool] = useState(false);
  const [activeToolId, setActiveToolId] = useState<string>('cover-letter');
  const [activeDossierSlug, setActiveDossierSlug] = useState<string | null>(null);
  const [activeBlogSlug, setActiveBlogSlug] = useState<string | null>(null);
  const [activeMapLocationId, setActiveMapLocationId] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);

  // Sync route with browser URL
  const updateRouteFromLocation = () => {
    const path = window.location.pathname.toLowerCase().replace(/\/+$/, '');
    const hash = window.location.hash.toLowerCase();

    // Check pathname first (clean URLs)
    if (path === '/fellowship' || path === '/ir-fellowship' || path === '/master-ir' || hash.startsWith('#/fellowship')) {
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
    } else if (path === '/fluency-lab' || path === '/english' || hash.startsWith('#/fluency-lab')) {
      setActiveDossierSlug(null);
      setCurrentView('fluency-lab');
      setIsStandaloneTool(false);
      document.title = 'Fluency Lab | Interactive Looped English Mastery System | DH Shishir';
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
    if (view === 'fellowship') {
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
    } else if (view === 'fluency-lab') {
      targetPath = '/fluency-lab';
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
                {currentView === 'map' ? (
          <DiplomaticMapPage
            initialLocationId={activeMapLocationId}
            onNavigateHome={() => navigateTo('home')}
            onNavigateDiplomacy={() => navigateTo('diplomacy')}
            onNavigateDossier={(slug) => navigateTo('diplomacy', slug)}
            onNavigateFellowship={() => navigateTo('fellowship')}
          />
        ) : currentView === 'fellowship' ? (
          <FellowshipPage
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
        ) : currentView === 'fluency-lab' ? (
          <FluencyLabPage
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
              onNavigateHome={() => navigateTo('home')}
              onLaunchTool={(id) => navigateTo('tools', id)}
            />
          )
        ) : currentView === 'leadership' ? (
          <LeadershipPage
            onNavigateHome={() => navigateTo('home')}
          />
        ) : currentView === 'blog' ? (
          <BlogPage
            initialSlug={activeBlogSlug}
            onNavigateHome={() => navigateTo('home')}
            onNavigateTools={(tId) => navigateTo('tools', tId)}
            onNavigateFluency={() => navigateTo('fluency-lab')}
          />
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
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;
