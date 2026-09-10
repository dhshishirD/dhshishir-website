import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ToolsSection } from './components/ToolsSection';
import { CourseSection } from './components/CourseSection';
import { EnglishSection } from './components/EnglishSection';
import { CvServicesSection } from './components/CvServicesSection';
import { BlogSection } from './components/BlogSection';
import { AboutContactSection } from './components/AboutContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [currentView, setCurrentView] = useState<'home' | 'courses' | 'tools'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.startsWith('#/courses') || hash === '#courses-directory') {
        setCurrentView('courses');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash.startsWith('#/tools-hub')) {
        setCurrentView('tools');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-white font-sans antialiased">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      
      <main>
        {currentView === 'courses' ? (
          <div className="pt-24 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <button
                onClick={() => {
                  window.location.hash = '';
                  setCurrentView('home');
                }}
                className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold mb-4 inline-flex items-center gap-1.5"
              >
                ← Back to Main Homepage
              </button>
            </div>
            <CourseSection />
          </div>
        ) : (
          <>
            <HeroSection />
            <ExperienceSection />
            <ToolsSection />
            <EnglishSection />
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
