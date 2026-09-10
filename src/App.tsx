import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ToolsSection } from './components/ToolsSection';
import { CourseSection } from './components/CourseSection';
import { FluencyLabHub } from './components/fluency/FluencyLabHub';
import { CvServicesSection } from './components/CvServicesSection';
import { BlogSection } from './components/BlogSection';
import { AboutContactSection } from './components/AboutContactSection';
import { Footer } from './components/Footer';
import { StandaloneToolPage } from './components/tools/StandaloneToolPage';
import { LearnerDashboard } from './components/dashboard/LearnerDashboard';
import { supabase } from './services/supabaseClient';

export function App() {
  const [currentView, setCurrentView] = useState<'home' | 'courses' | 'tools' | 'dashboard'>('home');
  const [activeToolId, setActiveToolId] = useState<string>('cover-letter');
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.startsWith('#/courses') || hash === '#courses-directory') {
        setCurrentView('courses');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.startsWith('#/dashboard') || hash.startsWith('#/profile')) {
        setCurrentView('dashboard');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.startsWith('#/tools/')) {
        const toolId = hash.replace('#/tools/', '').trim();
        setActiveToolId(toolId || 'cover-letter');
        setCurrentView('tools');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.startsWith('#/tools')) {
        setActiveToolId('cover-letter');
        setCurrentView('tools');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      authListener.subscription.unsubscribe();
    };
  }, []);

  const navigateToTool = (toolId: string) => {
    window.location.hash = `#/tools/${toolId}`;
    setActiveToolId(toolId);
    setCurrentView('tools');
  };

  const navigateHome = () => {
    window.location.hash = '';
    setCurrentView('home');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-white font-sans antialiased">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      
      <main>
        {currentView === 'dashboard' ? (
          <LearnerDashboard
            user={user}
            onSignOut={() => {
              setUser(null);
              navigateHome();
            }}
            onNavigateStage={(_stage) => {
              navigateHome();
              setTimeout(() => {
                const elem = document.querySelector('#fluency-lab');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
          />
        ) : currentView === 'courses' ? (
          <div className="pt-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <button
                onClick={navigateHome}
                className="text-xs text-indigo-400 hover:text-indigo-300 font-bold mb-4 inline-flex items-center gap-1.5 cursor-pointer"
              >
                ← Back to Main Homepage (dhshishir.com)
              </button>
            </div>
            <CourseSection />
          </div>
        ) : currentView === 'tools' ? (
          <StandaloneToolPage
            toolId={activeToolId}
            onNavigateHome={navigateHome}
            onSelectTool={navigateToTool}
          />
        ) : (
          <>
            <HeroSection />
            <ExperienceSection />
            <FluencyLabHub />
            <ToolsSection onLaunchStandaloneTool={navigateToTool} />
            <CvServicesSection />
            <BlogSection />
            <AboutContactSection />
          </>
        )}
      </main>

      <Footer onOpenCourses={() => setCurrentView('courses')} />
    </div>
  );
}

export default App;
