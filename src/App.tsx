import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ToolsSection } from './components/ToolsSection';
import { CourseSection } from './components/CourseSection';
import { EnglishSection } from './components/EnglishSection';
import { CvServicesSection } from './components/CvServicesSection';
import { BlogSection } from './components/BlogSection';
import { AboutContactSection } from './components/AboutContactSection';
import { Footer } from './components/Footer';
import { AdSenseSlot } from './components/AdSenseSlot';

export function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-white font-sans antialiased">
      <Navbar />
      <main>
        <HeroSection />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdSenseSlot slotId="1092837465" label="Top Sponsor" />
        </div>

        <ToolsSection />
        <CourseSection />
        <EnglishSection />
        <CvServicesSection />
        <BlogSection />
        <AboutContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
