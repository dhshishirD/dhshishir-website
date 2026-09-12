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
import { FluencyLabPage } from './components/pages/FluencyLabPage';
import { LeadershipPage } from './components/pages/LeadershipPage';
import { BlogPage } from './components/pages/BlogPage';
import { ContactPage } from './components/pages/ContactPage';
import { ToolsDirectoryPage } from './components/pages/ToolsDirectoryPage';
import { supabase } from './services/supabaseClient';
import { syncLocalProfileToCloud } from './services/cloudProfileService';
import { Globe, ArrowRight } from 'lucide-react';

export function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [isStandaloneTool, setIsStandaloneTool] = useState(false);
  const [activeToolId, setActiveToolId] = useState<string>('cover-letter');
  const [activeDossierSlug, setActiveDossierSlug] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);

  // Sync route with browser URL
  const updateRouteFromLocation = () => {
    const path = window.location.pathname.toLowerCase().replace(/\/+$/, '');
    const hash = window.location.hash.toLowerCase();

    // Check pathname first (clean URLs)
    if (path.startsWith('/diplomacy/') || hash.startsWith('#/diplomacy/')) {
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
    } else if (path === '/blog' || path === '/insights' || path === '/articles' || hash.startsWith('#/blog')) {
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
      document.title = 'Daloyar Hassan Shishir | Diplomatic Scholar, Fluency Lab & Career Innovation';
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
    if (view === 'diplomacy') {
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
      targetPath = '/blog';
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
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white font-sans antialiased">
      <Navbar currentView={currentView} onNavigate={navigateTo} />
      
      <main>
        {currentView === 'diplomacy' ? (
          activeDossierSlug ? (
            <DossierDetailPage
              slug={activeDossierSlug}
              user={user}
              onNavigateHome={() => navigateTo('home')}
              onNavigateDiplomacy={() => navigateTo('diplomacy')}
              onNavigateDossier={(slug) => navigateTo('diplomacy', slug)}
            />
          ) : (
            <DiplomaticHub
              user={user}
              onNavigateHome={() => navigateTo('home')}
              onOpenDossierPage={(slug) => navigateTo('diplomacy', slug)}
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
            onNavigateHome={() => navigateTo('home')}
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
            
            {/* Featured Diplomatic Hub Spotlight Banner on Homepage */}
            <section className="py-12 bg-gradient-to-r from-slate-950 via-cyan-950/30 to-slate-950 border-y border-cyan-500/20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-slate-900/90 border border-cyan-500/40 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-cyan-950/60">
                  <div className="space-y-2 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                      <Globe className="w-3.5 h-3.5 text-cyan-400" /> Strategic Intelligence Desk
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-white">
                      Explore the Diplomatic & Foreign Policy Intelligence Hub
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                      Live daily intelligence synthesizing 25+ global think tanks (BIISS, BIPSS, ORF, CSIS, Chatham House) with strategic impact analysis for Bangladesh.
                    </p>
                  </div>
                  <button
                    onClick={() => navigateTo('diplomacy')}
                    className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-600 via-teal-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm transition flex items-center gap-2 shrink-0 cursor-pointer shadow-xl shadow-cyan-900/40"
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
