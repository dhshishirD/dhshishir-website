import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Globe, Compass, Bookmark, BookmarkCheck, Share2, 
  Copy, FileText, CheckCircle2, AlertTriangle, 
  TrendingUp, ExternalLink, Calendar, Clock, BookOpen, 
  Printer, ArrowUpRight, Award, Layers, MonitorPlay,
  ChevronLeft, ChevronRight, Shield, BarChart3,
  Sliders, Target, Scale, Sun, Moon, Coffee, Download,
  X
} from 'lucide-react';
import { INITIAL_INTEL_FEED } from '../../data/diplomacyData';
import { getLocalBookmarks, toggleLocalBookmark, syncBookmarkToCloud } from '../../services/diplomacyService';

interface DossierDetailPageProps {
  slug: string;
  user: any;
  onNavigateHome: () => void;
  onNavigateDiplomacy: () => void;
  onNavigateDossier: (slug: string) => void;
}

type ReaderTheme = 'dark' | 'warm' | 'light';
type FontStyle = 'sans' | 'serif';
type FontSize = 'sm' | 'md' | 'lg' | 'xl';

export const DossierDetailPage: React.FC<DossierDetailPageProps> = ({
  slug,
  user,
  onNavigateHome,
  onNavigateDiplomacy,
  onNavigateDossier
}) => {
  const dossier = INITIAL_INTEL_FEED.find(item => item.slug === slug || item.id === slug) || INITIAL_INTEL_FEED[0];
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);
  const [selectedCitationStyle, setSelectedCitationStyle] = useState<'APA' | 'Harvard' | 'Chicago'>('APA');
  const [viewMode, setViewMode] = useState<'reading' | 'presentation'>('reading');
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  // Reader Comfort Suite State
  const [theme, setTheme] = useState<ReaderTheme>(() => {
    return (localStorage.getItem('dossier_reader_theme') as ReaderTheme) || 'dark';
  });
  const [fontStyle, setFontStyle] = useState<FontStyle>(() => {
    return (localStorage.getItem('dossier_font_style') as FontStyle) || 'sans';
  });
  const [fontSize, setFontSize] = useState<FontSize>(() => {
    return (localStorage.getItem('dossier_font_size') as FontSize) || 'md';
  });
  const [scrollProgress, setScrollProgress] = useState(0);

  const TOTAL_SLIDES = 5;

  useEffect(() => {
    setBookmarks(getLocalBookmarks());
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = `${dossier.title} | Strategic Intelligence Dossier | Daloyar Hassan`;

    // Inject Schema.org ScholarlyArticle JSON-LD
    const scriptId = 'dossier-schema-ld';
    let existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      existingScript = document.createElement('script');
      existingScript.id = scriptId;
      existingScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(existingScript);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "ScholarlyArticle",
      "headline": dossier.title,
      "description": dossier.executiveSummary,
      "author": {
        "@type": "Person",
        "name": "Daloyar Hassan",
        "jobTitle": "Foreign Policy & Strategic Affairs Analyst",
        "url": "https://dhshishir.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Foreign Policy & Strategic Intelligence Desk",
        "url": "https://dhshishir.com/diplomacy"
      },
      "datePublished": dossier.publishedAt,
      "mainEntityOfPage": `https://dhshishir.com/diplomacy/${dossier.slug || dossier.id}`,
      "keywords": dossier.tags.join(', ')
    };

    existingScript.textContent = JSON.stringify(schemaData);

    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, [dossier]);

  // Scroll Progress Listener
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation for presentation mode
  useEffect(() => {
    if (viewMode !== 'presentation') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        setActiveSlide(prev => (prev < TOTAL_SLIDES - 1 ? prev + 1 : prev));
      } else if (e.key === 'ArrowLeft') {
        setActiveSlide(prev => (prev > 0 ? prev - 1 : prev));
      } else if (e.key === 'Escape') {
        setViewMode('reading');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode]);

  const handleThemeChange = (newTheme: ReaderTheme) => {
    setTheme(newTheme);
    localStorage.setItem('dossier_reader_theme', newTheme);
  };

  const handleFontChange = (newFont: FontStyle) => {
    setFontStyle(newFont);
    localStorage.setItem('dossier_font_style', newFont);
  };

  const handleSizeChange = (newSize: FontSize) => {
    setFontSize(newSize);
    localStorage.setItem('dossier_font_size', newSize);
  };

  const isSaved = bookmarks.includes(dossier.id);

  const handleToggleSave = () => {
    const updated = toggleLocalBookmark(dossier.id);
    setBookmarks(updated);
    if (user) {
      syncBookmarkToCloud(user.id, dossier.id, !isSaved);
    }
  };

  const getCitation = (style: 'APA' | 'Harvard' | 'Chicago') => {
    const year = new Date(dossier.publishedAt).getFullYear() || 2026;
    const title = dossier.title;
    const url = `https://dhshishir.com/diplomacy/${dossier.slug || dossier.id}`;

    if (style === 'APA') {
      return `Hassan, D. (${year}). ${title}. Strategic Foreign Policy & Diplomatic Intelligence Desk. Retrieved from ${url}`;
    } else if (style === 'Harvard') {
      return `Hassan, Daloyar, ${year}. ${title}. [online] Strategic Foreign Policy & Diplomatic Intelligence Desk. Available at: <${url}> [Accessed ${new Date().toLocaleDateString('en-GB')}].`;
    } else {
      return `Hassan, Daloyar. "${title}." Strategic Foreign Policy & Diplomatic Intelligence Desk, ${dossier.publishedAt}. ${url}.`;
    }
  };

  const handleCopyCitation = () => {
    const text = getCitation(selectedCitationStyle);
    navigator.clipboard.writeText(text);
    setCopiedFormat(selectedCitationStyle);
    setTimeout(() => setCopiedFormat(null), 3000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: dossier.title,
        text: dossier.executiveSummary,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Dossier URL copied to clipboard');
    }
  };

  const handlePrintBriefing = () => {
    window.print();
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const relatedDossiers = INITIAL_INTEL_FEED.filter(
    item => item.id !== dossier.id && item.pillar === dossier.pillar
  ).slice(0, 3);

  const slides = [
    {
      title: 'Executive Strategic Briefing',
      subtitle: 'Genesis, Stakeholders & Bangladesh National Interest'
    },
    {
      title: 'Great Power Alignment Matrix',
      subtitle: 'Triangular Strategic Postures (US, China, India)'
    },
    {
      title: 'Vulnerabilities & Economic Impact',
      subtitle: 'Quantitative Impact, Strategic Risks & Opportunities'
    },
    {
      title: 'Ministerial Policy Directives',
      subtitle: 'Actionable Directives for MoFA, ERD & Line Ministries'
    },
    {
      title: 'Primary Citations & Academic Citation',
      subtitle: 'Scholarly References & 1-Click Citation Generator'
    }
  ];

  // Dynamic classes based on Reader Comfort preferences
  const themeContainerClass = 
    theme === 'warm' 
      ? 'bg-[#fbf7ee] text-[#2c2825]' 
      : theme === 'light' 
      ? 'bg-[#f8fafc] text-[#0f172a]' 
      : 'bg-slate-950 text-slate-100';

  const cardBgClass = 
    theme === 'warm' 
      ? 'bg-[#f4eedf] border-[#e2d5bd]' 
      : theme === 'light' 
      ? 'bg-white border-slate-200 shadow-sm' 
      : 'bg-slate-900/90 border-slate-800';

  const textProseClass = `${fontStyle === 'serif' ? 'font-serif leading-relaxed' : 'font-sans leading-relaxed'} ${
    fontSize === 'sm' ? 'text-xs sm:text-sm' :
    fontSize === 'md' ? 'text-sm sm:text-base' :
    fontSize === 'lg' ? 'text-base sm:text-lg' :
    'text-lg sm:text-xl'
  }`;

  return (
    <div className={`pt-20 pb-28 min-h-screen transition-colors duration-200 ${themeContainerClass}`}>
      
      {/* Top Fixed Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-slate-800/30 no-print">
        <div 
          className="h-full bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* ========================================================================= */}
      {/* PRINT-ONLY OFFICIAL MINISTERIAL LETTERHEAD */}
      {/* ========================================================================= */}
      <div className="hidden print:block mb-8 border-b-2 border-slate-900 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10pt] font-black uppercase tracking-widest text-slate-800">
              FOREIGN POLICY & STRATEGIC INTELLIGENCE DESK • DHSHISHIR.COM
            </div>
            <div className="text-[14pt] font-black tracking-tight text-slate-950 mt-0.5">
              MINISTERIAL STRATEGIC POLICY BRIEFING
            </div>
            <div className="text-[8pt] text-slate-600 mt-0.5">
              Lead Strategic Affairs Analyst: <strong>Daloyar Hassan</strong> | Primary Reference: {dossier.source}
            </div>
          </div>
          <div className="text-right text-[8pt] font-mono text-slate-700">
            <div><strong>REF:</strong> FP-DESK/BD/2026/DOSSIER-{dossier.id.toUpperCase()}</div>
            <div><strong>CLASSIFICATION:</strong> RESTRICTED / OSINT</div>
            <div><strong>DATE:</strong> {dossier.publishedAt}</div>
          </div>
        </div>
      </div>

      {/* Top Academic Breadcrumb Navigation */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 mb-4 no-print">
        <div className={`flex flex-wrap items-center justify-between gap-4 pb-3 border-b text-xs ${
          theme === 'warm' ? 'border-[#e4dac4]' : theme === 'light' ? 'border-slate-200' : 'border-slate-800/80'
        }`}>
          <div className="flex items-center gap-2 opacity-80">
            <button onClick={onNavigateHome} className="hover:text-cyan-500 font-semibold transition cursor-pointer">
              dhshishir.com
            </button>
            <span>/</span>
            <button onClick={onNavigateDiplomacy} className="hover:text-cyan-500 font-semibold transition cursor-pointer">
              diplomacy
            </button>
            <span>/</span>
            <span className="font-bold text-cyan-600 dark:text-cyan-400 truncate max-w-[180px] sm:max-w-xs">{dossier.slug || dossier.id}</span>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle: Reading vs Executive Presentation Deck */}
            <div className={`flex items-center p-1 rounded-xl border ${
              theme === 'warm' ? 'bg-[#ede5d3] border-[#ded3be]' : theme === 'light' ? 'bg-slate-100 border-slate-200' : 'bg-slate-900 border-slate-800'
            }`}>
              <button
                onClick={() => setViewMode('reading')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold text-xs transition cursor-pointer ${
                  viewMode === 'reading'
                    ? 'bg-cyan-600 text-white shadow-sm'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Academic Paper</span>
              </button>
              <button
                onClick={() => {
                  setViewMode('presentation');
                  setActiveSlide(0);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold text-xs transition cursor-pointer ${
                  viewMode === 'presentation'
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-sm'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <MonitorPlay className="w-3.5 h-3.5" />
                <span>Executive Slide Deck</span>
              </button>
            </div>

            <button
              onClick={onNavigateDiplomacy}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-semibold transition cursor-pointer text-xs ${
                theme === 'warm' ? 'bg-[#ede5d3] hover:bg-[#e4dac4] border-[#ded3be]' : theme === 'light' ? 'bg-white hover:bg-slate-100 border-slate-300' : 'bg-slate-900 hover:bg-slate-800 border-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Desk</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* READER COMFORT TOOLBAR (Only in Reading Mode) */}
      {/* ========================================================================= */}
      {viewMode === 'reading' && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 no-print">
          <div className={`p-3 rounded-2xl border flex flex-wrap items-center justify-between gap-3 text-xs shadow-sm ${
            theme === 'warm' ? 'bg-[#f4eedf] border-[#e2d5bd]' : theme === 'light' ? 'bg-white border-slate-200' : 'bg-slate-900/80 border-slate-800'
          }`}>
            
            {/* Theme Selector: Dark / Warm Paper / Light */}
            <div className="flex items-center gap-1.5">
              <span className="font-bold opacity-60 mr-1 flex items-center gap-1">
                Theme:
              </span>
              <button
                onClick={() => handleThemeChange('dark')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
                  theme === 'dark' 
                    ? 'bg-slate-950 text-cyan-400 border border-cyan-500/40 shadow-sm' 
                    : 'opacity-70 hover:opacity-100'
                }`}
                title="Deep Command Center Dark Mode"
              >
                <Moon className="w-3.5 h-3.5" />
                <span>Dark</span>
              </button>
              <button
                onClick={() => handleThemeChange('warm')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
                  theme === 'warm' 
                    ? 'bg-[#eadecc] text-[#2c2825] border border-[#c9bcaa] shadow-sm font-extrabold' 
                    : 'opacity-70 hover:opacity-100'
                }`}
                title="Warm Parchment / Editorial Sepia (Zero Eye Strain)"
              >
                <Coffee className="w-3.5 h-3.5 text-amber-700" />
                <span>Warm Paper</span>
              </button>
              <button
                onClick={() => handleThemeChange('light')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg font-bold transition cursor-pointer ${
                  theme === 'light' 
                    ? 'bg-slate-200 text-slate-900 border border-slate-300 shadow-sm font-extrabold' 
                    : 'opacity-70 hover:opacity-100'
                }`}
                title="Clean Editorial Day Mode"
              >
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                <span>Light</span>
              </button>
            </div>

            {/* Typography Font: Sans vs Academic Serif */}
            <div className="flex items-center gap-1.5">
              <span className="font-bold opacity-60 mr-1 flex items-center gap-1">
                Font:
              </span>
              <button
                onClick={() => handleFontChange('sans')}
                className={`px-2.5 py-1 rounded-lg font-sans font-bold transition cursor-pointer ${
                  fontStyle === 'sans'
                    ? 'bg-cyan-600 text-white shadow-sm'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                Sans
              </button>
              <button
                onClick={() => handleFontChange('serif')}
                className={`px-2.5 py-1 rounded-lg font-serif font-bold transition cursor-pointer ${
                  fontStyle === 'serif'
                    ? 'bg-cyan-600 text-white shadow-sm'
                    : 'opacity-70 hover:opacity-100'
                }`}
                title="Academic Book Serif"
              >
                Serif
              </button>
            </div>

            {/* Font Size Scaling: A- / A / A+ */}
            <div className="flex items-center gap-1">
              <span className="font-bold opacity-60 mr-1">Size:</span>
              {(['sm', 'md', 'lg', 'xl'] as const).map(sz => (
                <button
                  key={sz}
                  onClick={() => handleSizeChange(sz)}
                  className={`px-2 py-0.5 rounded-md font-bold transition cursor-pointer text-xs ${
                    fontSize === sz
                      ? 'bg-cyan-600 text-white'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  {sz === 'sm' ? 'A-' : sz === 'md' ? 'A' : sz === 'lg' ? 'A+' : 'A++'}
                </button>
              ))}
            </div>

            {/* Quick Section Jump Navigator */}
            <div className="hidden md:flex items-center gap-1.5">
              <button
                onClick={() => scrollToSection('sec-overview')}
                className="opacity-70 hover:opacity-100 hover:text-cyan-500 transition cursor-pointer"
              >
                Overview
              </button>
              <span>•</span>
              <button
                onClick={() => scrollToSection('sec-genesis')}
                className="opacity-70 hover:opacity-100 hover:text-cyan-500 transition cursor-pointer"
              >
                Genesis
              </button>
              <span>•</span>
              <button
                onClick={() => scrollToSection('sec-greatpowers')}
                className="opacity-70 hover:opacity-100 hover:text-cyan-500 transition cursor-pointer"
              >
                Great Powers
              </button>
              <span>•</span>
              <button
                onClick={() => scrollToSection('sec-vulnerabilities')}
                className="opacity-70 hover:opacity-100 hover:text-cyan-500 transition cursor-pointer"
              >
                Vulnerabilities
              </button>
              <span>•</span>
              <button
                onClick={() => scrollToSection('sec-directives')}
                className="opacity-70 hover:opacity-100 hover:text-cyan-500 transition cursor-pointer"
              >
                Directives
              </button>
              <span>•</span>
              <button
                onClick={() => scrollToSection('sec-citations')}
                className="opacity-70 hover:opacity-100 hover:text-cyan-500 transition cursor-pointer font-bold"
              >
                Cite
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* PRESENTATION MODE: EXECUTIVE SLIDE DECK VIEW */}
      {/* ========================================================================= */}
      {viewMode === 'presentation' && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 animate-fade-in no-print">
          
          {/* Deck Header Bar */}
          <div className="bg-slate-900/95 border border-cyan-500/30 rounded-t-3xl p-4 sm:p-6 flex flex-wrap items-center justify-between gap-4 shadow-2xl text-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                <MonitorPlay className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span>Executive Slide Deck</span>
                  <span>•</span>
                  <span>Slide {activeSlide + 1} of {TOTAL_SLIDES}</span>
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-white">
                  {slides[activeSlide].title}
                </h3>
              </div>
            </div>

            {/* Slide Navigation Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveSlide(prev => Math.max(0, prev - 1))}
                disabled={activeSlide === 0}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-white transition cursor-pointer border border-slate-700"
                title="Previous Slide (Left Arrow)"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-cyan-300">
                {activeSlide + 1} / {TOTAL_SLIDES}
              </div>

              <button
                onClick={() => setActiveSlide(prev => Math.min(TOTAL_SLIDES - 1, prev + 1))}
                disabled={activeSlide === TOTAL_SLIDES - 1}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-white transition cursor-pointer border border-slate-700"
                title="Next Slide (Right Arrow)"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setViewMode('reading')}
                className="ml-2 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300 transition cursor-pointer border border-slate-700"
              >
                Exit Deck
              </button>
            </div>
          </div>

          {/* Slide Progress Step Indicators */}
          <div className="grid grid-cols-5 gap-1 bg-slate-950 px-4 py-2 border-x border-cyan-500/20">
            {slides.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  activeSlide === idx
                    ? 'bg-gradient-to-r from-cyan-400 to-teal-400 shadow-lg shadow-cyan-500/50'
                    : idx < activeSlide
                    ? 'bg-cyan-700/60'
                    : 'bg-slate-800'
                }`}
                title={`Jump to: ${s.title}`}
              />
            ))}
          </div>

          {/* Slide Stage Container */}
          <div className="bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950 border border-t-0 border-cyan-500/30 rounded-b-3xl p-6 sm:p-10 shadow-2xl min-h-[520px] flex flex-col justify-between text-slate-100">
            
            {/* SLIDE 0: TITLE & EXECUTIVE OVERVIEW */}
            {activeSlide === 0 && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-bold">
                    🏛️ {dossier.source}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-bold">
                    ● {dossier.impactLevel}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold">
                    Strategic Pillar: {dossier.pillar.toUpperCase()}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                  {dossier.title}
                </h1>

                {/* Presentation Metric Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
                  <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Strategic Urgency</div>
                    <div className="text-lg font-black text-rose-400 mt-1 flex items-center gap-1.5">
                      <Target className="w-4 h-4" /> Priority High
                    </div>
                  </div>
                  <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Diplomatic Posture</div>
                    <div className="text-lg font-black text-cyan-400 mt-1 flex items-center gap-1.5">
                      <Scale className="w-4 h-4" /> Multi-Vector
                    </div>
                  </div>
                  <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Macro Horizon</div>
                    <div className="text-lg font-black text-teal-400 mt-1 flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4" /> 2026 – 2030
                    </div>
                  </div>
                  <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Lead Analyst</div>
                    <div className="text-base font-extrabold text-white mt-1">
                      Daloyar Hassan
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-emerald-950/60 via-teal-950/40 to-slate-900 border-l-4 border-emerald-400 p-5 rounded-r-2xl">
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-emerald-400" /> Core Significance for Bangladesh National Interest
                  </div>
                  <p className="text-sm sm:text-base text-emerald-100 font-medium leading-relaxed">
                    {dossier.bangladeshSignificance}
                  </p>
                </div>

                <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <span className="font-bold text-white">Executive Context: </span>
                  {dossier.executiveSummary}
                </div>
              </div>
            )}

            {/* SLIDE 1: GREAT POWER MATRIX */}
            {activeSlide === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full mb-2">
                    <Scale className="w-3.5 h-3.5" /> Triangular Geopolitical Equilibrium
                  </div>
                  <h2 className="text-2xl font-black text-white">
                    Great Power Strategic Postures & Competing Interests
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Comparative evaluation of Washington, Beijing, and New Delhi's strategic objectives regarding Bangladesh.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Washington */}
                  <div className="bg-slate-950/90 border border-blue-500/30 rounded-2xl p-5 shadow-xl flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-2 mb-3 border-b border-blue-500/20">
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                          🇺🇸 Washington (US Posture)
                        </span>
                        <span className="text-[10px] bg-blue-950/80 text-blue-300 border border-blue-500/30 px-2 py-0.5 rounded-full font-bold">
                          Indo-Pacific
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {dossier.detailedAnalysis?.greatPowerInterests?.us || 
                         'Prioritizes freedom of navigation in the Bay of Bengal, maritime domain awareness, and ensuring open commercial sea lanes under UNCLOS principles.'}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-blue-300 font-medium">
                      🎯 Primary Lever: Trade Access & Maritime Security
                    </div>
                  </div>

                  {/* Beijing */}
                  <div className="bg-slate-950/90 border border-rose-500/30 rounded-2xl p-5 shadow-xl flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-2 mb-3 border-b border-rose-500/20">
                        <span className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                          🇨🇳 Beijing (China Posture)
                        </span>
                        <span className="text-[10px] bg-rose-950/80 text-rose-300 border border-rose-500/30 px-2 py-0.5 rounded-full font-bold">
                          BRI & Infrastructure
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {dossier.detailedAnalysis?.greatPowerInterests?.china || 
                         'Monitors regional transport connectivity relative to the Belt and Road Initiative (BRI) and the China-Myanmar Economic Corridor (CMEC) access.'}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-rose-300 font-medium">
                      🎯 Primary Lever: Concessionary Capital & Multilateral Loans
                    </div>
                  </div>

                  {/* New Delhi */}
                  <div className="bg-slate-950/90 border border-amber-500/30 rounded-2xl p-5 shadow-xl flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-2 mb-3 border-b border-amber-500/20">
                        <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                          🇮🇳 New Delhi (India Posture)
                        </span>
                        <span className="text-[10px] bg-amber-950/80 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full font-bold">
                          Neighborhood First
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {dossier.detailedAnalysis?.greatPowerInterests?.india || 
                         'Focuses on transit connectivity for its landlocked Northeast states (Seven Sisters), cross-border security coordination, and coastal radar integration.'}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-amber-300 font-medium">
                      🎯 Primary Lever: Regional Transit & Security Interoperability
                    </div>
                  </div>
                </div>

                <div className="bg-slate-950 border border-slate-800 p-4 rounded-2xl text-xs text-slate-300 flex items-center gap-3">
                  <Shield className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>
                    <strong>Analyst Assessment by Daloyar Hassan:</strong> Maintaining equidistant institutional diplomacy prevents sovereign policy entrapment while maximizing concessionary infrastructure financing.
                  </span>
                </div>
              </div>
            )}

            {/* SLIDE 2: VULNERABILITIES & ECONOMIC IMPACT */}
            {activeSlide === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-950/60 border border-rose-500/30 px-3 py-1 rounded-full mb-2">
                    <BarChart3 className="w-3.5 h-3.5" /> Economic & Strategic Exposure
                  </div>
                  <h2 className="text-2xl font-black text-white">
                    Strategic Vulnerabilities & Macroeconomic Impact
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Quantitative and qualitative risk indicators for foreign exchange, trade diversion, and sovereignty.
                  </p>
                </div>

                <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 text-slate-200 text-sm sm:text-base leading-relaxed">
                  {dossier.detailedAnalysis?.vulnerabilitiesAndEconomicImpact || dossier.bangladeshSignificance}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Risks */}
                  <div className="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-5 shadow-lg">
                    <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-rose-400" /> Key Strategic Risks & Vulnerabilities
                    </h4>
                    <ul className="space-y-2.5">
                      {(dossier.strategicRisks || [
                        'External balance of payments exposure.',
                        'Geopolitical friction among major powers.',
                        'Trade policy cliff effects.'
                      ]).map((risk, i) => (
                        <li key={i} className="text-xs sm:text-sm text-rose-100 flex items-start gap-2">
                          <span className="text-rose-400 font-bold">•</span>
                          <span>{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Opportunities */}
                  <div className="bg-teal-950/20 border border-teal-500/30 rounded-2xl p-5 shadow-lg">
                    <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-teal-400" /> Strategic Opportunities & Levers
                    </h4>
                    <ul className="space-y-2.5">
                      {(dossier.strategicOpportunities || [
                        'Expanding bilateral trade corridors.',
                        'Attracting high-value FDI clusters.',
                        'Establishing regional supply chain leadership.'
                      ]).map((opp, i) => (
                        <li key={i} className="text-xs sm:text-sm text-teal-100 flex items-start gap-2">
                          <span className="text-teal-400 font-bold">•</span>
                          <span>{opp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* SLIDE 3: MINISTERIAL POLICY DIRECTIVES */}
            {activeSlide === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-300 bg-indigo-950/60 border border-indigo-500/30 px-3 py-1 rounded-full mb-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" /> Executive Directives
                  </div>
                  <h2 className="text-2xl font-black text-white">
                    Actionable Directives for MoFA, ERD & Line Ministries
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Structured recommendations for inter-ministerial execution and diplomatic implementation.
                  </p>
                </div>

                <div className="space-y-3.5">
                  {(dossier.detailedAnalysis?.policyDirectives || dossier.policyRecommendations || [
                    'Establish dedicated bilateral consultation taskforces.',
                    'Accelerate regulatory reforms and compliance mechanisms.',
                    'Coordinate with regional multilateral secretariats.'
                  ]).map((directive, idx) => (
                    <div key={idx} className="bg-slate-950/90 border border-indigo-500/30 hover:border-cyan-500/40 rounded-2xl p-4 sm:p-5 flex items-start gap-4 transition shadow-lg">
                      <div className="w-8 h-8 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-300 font-black text-sm shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider mb-1">
                          Strategic Policy Action #{idx + 1}
                        </div>
                        <p className="text-xs sm:text-sm text-slate-100 font-medium leading-relaxed">
                          {directive}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl text-xs text-slate-400 flex items-center justify-between">
                  <span>Target Implementing Bodies: <strong>MoFA, ERD, Ministry of Commerce, Port Authorities</strong></span>
                  <span className="text-cyan-400 font-bold">Execution Horizon: Q1–Q4 2026/27</span>
                </div>
              </div>
            )}

            {/* SLIDE 4: CITATIONS & ACADEMIC ACCREDITATION */}
            {activeSlide === 4 && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full mb-2">
                    <Award className="w-3.5 h-3.5 text-cyan-400" /> Academic Accreditation & Literature
                  </div>
                  <h2 className="text-2xl font-black text-white">
                    Primary Literature Sources & Citation Generator
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Formal academic citations attributed to <strong>Daloyar Hassan</strong>.
                  </p>
                </div>

                {/* Citation Generator Box */}
                <div className="bg-slate-950 border border-cyan-500/40 rounded-2xl p-5 shadow-2xl">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-cyan-400" /> Academic Citation Format (Author: Daloyar Hassan)
                    </div>
                    
                    <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
                      {(['APA', 'Harvard', 'Chicago'] as const).map(style => (
                        <button
                          key={style}
                          onClick={() => setSelectedCitationStyle(style)}
                          className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                            selectedCitationStyle === style
                              ? 'bg-cyan-600 text-white shadow'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          {style}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-200 font-mono leading-relaxed select-all">
                    {getCitation(selectedCitationStyle)}
                  </div>

                  <div className="flex justify-end mt-3">
                    <button
                      onClick={handleCopyCitation}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 cursor-pointer shadow-lg shadow-cyan-950"
                    >
                      {copiedFormat ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedFormat ? `Copied ${copiedFormat} Citation!` : `Copy ${selectedCitationStyle} Citation`}</span>
                    </button>
                  </div>
                </div>

                {/* Author Accreditation Card */}
                <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-950/40 border border-cyan-500/30 rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center text-white font-black text-base shadow-lg">
                      DH
                    </div>
                    <div>
                      <div className="text-base font-extrabold text-white">Daloyar Hassan</div>
                      <div className="text-xs text-cyan-400 font-medium">Lead Foreign Policy & Strategic Affairs Analyst</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">dhshishir.com/diplomacy • Open Strategic Intelligence</div>
                    </div>
                  </div>

                  <button
                    onClick={() => setViewMode('reading')}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl border border-slate-700 transition"
                  >
                    Read Full Academic Paper →
                  </button>
                </div>
              </div>
            )}

            {/* Slide Footer Toolbar */}
            <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span>Use <strong>← / →</strong> Arrow Keys or Click Step Buttons to Navigate</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleToggleSave}
                  className={`px-3 py-1.5 rounded-xl font-semibold transition cursor-pointer border ${
                    isSaved
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
                  }`}
                >
                  {isSaved ? '✓ Saved in Research Binder' : '+ Save to Binder'}
                </button>
                <button
                  onClick={handleShare}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white font-semibold transition cursor-pointer"
                >
                  Share Link
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* STANDARD ACADEMIC READING MODE */}
      {/* ========================================================================= */}
      {viewMode === 'reading' && (
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
          
          {/* Document Header & Metadata Badge */}
          <header className="space-y-4 mb-8">
            <div className="flex flex-wrap items-center gap-2 no-print">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold tracking-wide ${
                theme === 'warm' 
                  ? 'bg-[#ede5d3] text-amber-900 border-[#ded3be]' 
                  : theme === 'light' 
                  ? 'bg-slate-100 text-slate-800 border-slate-300' 
                  : 'bg-cyan-950/80 border-cyan-500/40 text-cyan-300'
              }`}>
                <Globe className="w-3.5 h-3.5" /> {dossier.source}
              </span>
              <span className="px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-500 dark:text-rose-300 text-xs font-bold">
                ● {dossier.impactLevel}
              </span>
              <span className={`px-3 py-1 rounded-full border text-xs font-medium ${
                theme === 'warm' 
                  ? 'bg-[#ede5d3] text-[#554d3f] border-[#ded3be]' 
                  : theme === 'light' 
                  ? 'bg-slate-100 text-slate-600 border-slate-200' 
                  : 'bg-slate-900 border-slate-800 text-slate-400'
              }`}>
                Strategic Pillar: {dossier.pillar.toUpperCase()}
              </span>
            </div>

            <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight ${
              theme === 'warm' ? 'text-[#1c1815]' : theme === 'light' ? 'text-slate-900' : 'text-white'
            }`}>
              {dossier.title}
            </h1>

            {/* Author & Publication Bylines with Daloyar Hassan */}
            <div className={`flex flex-wrap items-center justify-between gap-4 py-3.5 border-y text-xs ${
              theme === 'warm' ? 'border-[#e4dac4] text-[#6d6352]' : theme === 'light' ? 'border-slate-200 text-slate-500' : 'border-slate-800/80 text-slate-400'
            }`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-600 via-teal-600 to-indigo-600 flex items-center justify-center text-white font-black text-sm shadow-md">
                  DH
                </div>
                <div>
                  <div className={`font-extrabold text-sm tracking-tight ${
                    theme === 'warm' ? 'text-[#1c1815]' : theme === 'light' ? 'text-slate-900' : 'text-white'
                  }`}>
                    Daloyar Hassan
                  </div>
                  <div className="text-[11px] text-cyan-600 dark:text-cyan-400 font-medium">Strategic Affairs Analyst & Foreign Policy Lead</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 opacity-60" />
                  <span>Published: {dossier.publishedAt}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 opacity-60" />
                  <span>{dossier.readTime}</span>
                </div>
              </div>
            </div>
          </header>

          {/* Action Toolbar */}
          <div className={`flex flex-wrap items-center justify-between gap-3 mb-8 p-3 rounded-2xl border no-print ${
            theme === 'warm' ? 'bg-[#f4eedf] border-[#e2d5bd]' : theme === 'light' ? 'bg-white border-slate-200 shadow-sm' : 'bg-slate-900/60 border-slate-800/80'
          }`}>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setIsPdfModalOpen(true)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold transition cursor-pointer shadow-md shadow-emerald-950/40"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Policy Briefing PDF</span>
              </button>

              <button
                onClick={() => {
                  setViewMode('presentation');
                  setActiveSlide(0);
                }}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white text-xs font-bold transition cursor-pointer shadow-sm"
              >
                <MonitorPlay className="w-3.5 h-3.5" />
                <span>Slide Deck</span>
              </button>

              <button
                onClick={handleToggleSave}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border ${
                  isSaved
                    ? 'bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 border-cyan-500/40 shadow-sm'
                    : theme === 'warm' 
                    ? 'bg-[#ede5d3] hover:bg-[#e4dac4] text-[#443c2f] border-[#ded3be]'
                    : theme === 'light'
                    ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                    : 'bg-slate-800 text-slate-300 hover:text-white border-slate-700'
                }`}
              >
                {isSaved ? <BookmarkCheck className="w-4 h-4 text-cyan-500" /> : <Bookmark className="w-4 h-4 opacity-70" />}
                <span>{isSaved ? 'Saved' : 'Save'}</span>
              </button>

              <button
                onClick={handleShare}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border ${
                  theme === 'warm'
                    ? 'bg-[#ede5d3] hover:bg-[#e4dac4] text-[#443c2f] border-[#ded3be]'
                    : theme === 'light'
                    ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                    : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300 hover:text-white'
                }`}
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </button>

              <button
                onClick={handlePrintBriefing}
                className={`hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border ${
                  theme === 'warm'
                    ? 'bg-[#ede5d3] hover:bg-[#e4dac4] text-[#443c2f] border-[#ded3be]'
                    : theme === 'light'
                    ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                    : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300 hover:text-white'
                }`}
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>
            </div>

            <a
              href={dossier.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-cyan-600 dark:text-cyan-400 hover:underline font-bold px-3 py-1.5 rounded-xl border border-cyan-500/30 transition"
            >
              <span>Think Tank Source</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Presentation Metric Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 no-print">
            <div className={`p-3.5 rounded-2xl border ${cardBgClass}`}>
              <div className="text-[11px] font-bold opacity-60 uppercase tracking-wider">Strategic Priority</div>
              <div className="text-base font-extrabold text-rose-500 dark:text-rose-400 mt-1 flex items-center gap-1">
                <Target className="w-3.5 h-3.5" /> Immediate / High
              </div>
            </div>
            <div className={`p-3.5 rounded-2xl border ${cardBgClass}`}>
              <div className="text-[11px] font-bold opacity-60 uppercase tracking-wider">Diplomatic Equilibrium</div>
              <div className="text-base font-extrabold text-cyan-600 dark:text-cyan-400 mt-1 flex items-center gap-1">
                <Scale className="w-3.5 h-3.5" /> Non-Aligned Hedging
              </div>
            </div>
            <div className={`p-3.5 rounded-2xl border ${cardBgClass}`}>
              <div className="text-[11px] font-bold opacity-60 uppercase tracking-wider">Strategic Horizon</div>
              <div className="text-base font-extrabold text-teal-600 dark:text-teal-400 mt-1 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> 2026 – 2030
              </div>
            </div>
            <div className={`p-3.5 rounded-2xl border ${cardBgClass}`}>
              <div className="text-[11px] font-bold opacity-60 uppercase tracking-wider">Author Credibility</div>
              <div className="text-sm font-extrabold mt-1">
                Daloyar Hassan
              </div>
            </div>
          </div>

          {/* Section: Executive Summary & National Interest Callout */}
          <section id="sec-overview" className="mb-10 space-y-4 scroll-mt-24 page-break-avoid">
            <div className={`p-6 rounded-2xl border ${cardBgClass}`}>
              <h3 className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" /> Executive Intelligence Summary
              </h3>
              <p className={`font-normal ${textProseClass}`}>
                {dossier.executiveSummary}
              </p>
            </div>

            <div className={`p-5 rounded-r-2xl border-l-4 border-emerald-500 shadow-sm ${
              theme === 'warm' ? 'bg-[#edf5ec] text-[#1c3823]' : theme === 'light' ? 'bg-emerald-50 text-emerald-950' : 'bg-gradient-to-r from-emerald-950/60 via-teal-950/40 to-slate-950/70 text-emerald-100'
            }`}>
              <h3 className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Compass className="w-4 h-4" /> Significance for Bangladesh National Interest
              </h3>
              <p className={`font-medium ${textProseClass}`}>
                {dossier.bangladeshSignificance}
              </p>
            </div>
          </section>

          {/* Section 1: Strategic Background & Genesis */}
          <section id="sec-genesis" className="mb-10 scroll-mt-24 page-break-avoid">
            <div className={`flex items-center gap-2 mb-3 pb-2 border-b ${
              theme === 'warm' ? 'border-[#e2d5bd]' : theme === 'light' ? 'border-slate-200' : 'border-slate-800'
            }`}>
              <span className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center text-xs font-bold">1</span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                Strategic Background & Historical Genesis
              </h2>
            </div>
            <div className={`space-y-4 ${textProseClass}`}>
              <p>
                {dossier.detailedAnalysis?.backgroundAndGenesis || dossier.executiveSummary}
              </p>
            </div>
          </section>

          {/* Section 2: Great Power Interests Matrix */}
          <section id="sec-greatpowers" className="mb-10 scroll-mt-24 page-break-avoid">
            <div className={`flex items-center gap-2 mb-4 pb-2 border-b ${
              theme === 'warm' ? 'border-[#e2d5bd]' : theme === 'light' ? 'border-slate-200' : 'border-slate-800'
            }`}>
              <span className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center text-xs font-bold">2</span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                Great Power Interests & Strategic Postures
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className={`p-5 rounded-2xl border flex flex-col justify-between ${
                theme === 'warm' ? 'bg-[#f4eedf] border-blue-300/80' : theme === 'light' ? 'bg-white border-blue-200 shadow-sm' : 'bg-slate-900/80 border-slate-800'
              }`}>
                <div>
                  <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    🇺🇸 Washington (US Posture)
                  </div>
                  <p className={`leading-relaxed ${textProseClass}`}>
                    {dossier.detailedAnalysis?.greatPowerInterests?.us || 
                     'Prioritizes freedom of navigation in the Bay of Bengal, maritime domain awareness, and ensuring open commercial sea lanes under UNCLOS principles.'}
                  </p>
                </div>
                <div className="mt-4 pt-2.5 border-t border-blue-500/20 text-[11px] text-blue-600 dark:text-blue-300 font-semibold">
                  Focus: Democratic Supply Chains & Sea Lanes
                </div>
              </div>

              <div className={`p-5 rounded-2xl border flex flex-col justify-between ${
                theme === 'warm' ? 'bg-[#f4eedf] border-rose-300/80' : theme === 'light' ? 'bg-white border-rose-200 shadow-sm' : 'bg-slate-900/80 border-slate-800'
              }`}>
                <div>
                  <div className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    🇨🇳 Beijing (China Posture)
                  </div>
                  <p className={`leading-relaxed ${textProseClass}`}>
                    {dossier.detailedAnalysis?.greatPowerInterests?.china || 
                     'Monitors regional transport connectivity relative to the Belt and Road Initiative (BRI) and the China-Myanmar Economic Corridor (CMEC) access.'}
                  </p>
                </div>
                <div className="mt-4 pt-2.5 border-t border-rose-500/20 text-[11px] text-rose-600 dark:text-rose-300 font-semibold">
                  Focus: Belt and Road Mega-Infrastructure & Yuan Clearing
                </div>
              </div>

              <div className={`p-5 rounded-2xl border flex flex-col justify-between ${
                theme === 'warm' ? 'bg-[#f4eedf] border-amber-300/80' : theme === 'light' ? 'bg-white border-amber-200 shadow-sm' : 'bg-slate-900/80 border-slate-800'
              }`}>
                <div>
                  <div className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    🇮🇳 New Delhi (India Posture)
                  </div>
                  <p className={`leading-relaxed ${textProseClass}`}>
                    {dossier.detailedAnalysis?.greatPowerInterests?.india || 
                     'Focuses on transit connectivity for its landlocked Northeast states (Seven Sisters), cross-border security coordination, and coastal radar integration.'}
                  </p>
                </div>
                <div className="mt-4 pt-2.5 border-t border-amber-500/20 text-[11px] text-amber-600 dark:text-amber-300 font-semibold">
                  Focus: Northeast Transit & Sub-regional Energy Grid
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Vulnerabilities & Economic Impact */}
          <section id="sec-vulnerabilities" className="mb-10 scroll-mt-24 page-break-avoid">
            <div className={`flex items-center gap-2 mb-4 pb-2 border-b ${
              theme === 'warm' ? 'border-[#e2d5bd]' : theme === 'light' ? 'border-slate-200' : 'border-slate-800'
            }`}>
              <span className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center text-xs font-bold">3</span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                Strategic Vulnerabilities & Macroeconomic Impact for Bangladesh
              </h2>
            </div>

            <div className={`mb-4 ${textProseClass}`}>
              <p>
                {dossier.detailedAnalysis?.vulnerabilitiesAndEconomicImpact || dossier.bangladeshSignificance}
              </p>
            </div>

            {/* Strategic Scenario Comparative Matrix Table */}
            <div className={`my-6 p-5 rounded-2xl border ${cardBgClass} page-break-avoid`}>
              <h4 className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Sliders className="w-4 h-4" /> Strategic Policy Scenarios Matrix
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className={`border-b opacity-70 ${
                      theme === 'warm' ? 'border-[#dfd3bc]' : theme === 'light' ? 'border-slate-200' : 'border-slate-800'
                    }`}>
                      <th className="py-2.5 pr-4 font-bold">Policy Scenario</th>
                      <th className="py-2.5 px-4 font-bold">Sovereignty Impact</th>
                      <th className="py-2.5 px-4 font-bold">Economic Projection</th>
                      <th className="py-2.5 pl-4 font-bold">Risk Score</th>
                    </tr>
                  </thead>
                  <tbody className={`divide-y ${
                    theme === 'warm' ? 'divide-[#dfd3bc]' : theme === 'light' ? 'divide-slate-100' : 'divide-slate-800/60'
                  }`}>
                    <tr>
                      <td className="py-3 pr-4 font-bold text-teal-600 dark:text-teal-300">Proactive Multi-Vector Diplomacy</td>
                      <td className="py-3 px-4">Maximum Strategic Autonomy & Non-Alignment</td>
                      <td className="py-3 px-4">+1.5% GDP via Diversified FDI & Trade</td>
                      <td className="py-3 pl-4 text-emerald-600 dark:text-emerald-400 font-bold">Low Friction (Optimal)</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-bold text-amber-600 dark:text-amber-400">Policy Inertia / Bureaucratic Drift</td>
                      <td className="py-3 px-4">Erosion of Negotiating Leverage in BIMSTEC/WTO</td>
                      <td className="py-3 px-4">Export Tariff Cliff Risks Post-2026</td>
                      <td className="py-3 pl-4 text-amber-600 dark:text-amber-400 font-bold">Moderate Exposure</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-bold text-rose-600 dark:text-rose-400">Exclusive Geopolitical Alignment</td>
                      <td className="py-3 px-4">Heightened Diplomatic Pressure & Secondary Scrutiny</td>
                      <td className="py-3 px-4">Supply Chain Vulnerability & Export Retaliation</td>
                      <td className="py-3 pl-4 text-rose-600 dark:text-rose-400 font-bold">Critical Risk</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Risks vs Opportunities Dual Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 page-break-avoid">
              {dossier.strategicRisks && dossier.strategicRisks.length > 0 && (
                <div className={`p-5 rounded-2xl border ${
                  theme === 'warm' ? 'bg-[#fcf0ee] border-rose-200 text-rose-950' : theme === 'light' ? 'bg-rose-50 border-rose-200 text-rose-950' : 'bg-rose-950/20 border-rose-500/30'
                }`}>
                  <h4 className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-rose-500" /> Key Strategic Risks & Vulnerabilities
                  </h4>
                  <ul className="space-y-2">
                    {dossier.strategicRisks.map((risk, i) => (
                      <li key={i} className={`flex items-start gap-2 ${textProseClass}`}>
                        <span className="text-rose-500 font-bold">•</span>
                        <span>{risk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {dossier.strategicOpportunities && dossier.strategicOpportunities.length > 0 && (
                <div className={`p-5 rounded-2xl border ${
                  theme === 'warm' ? 'bg-[#eef8f5] border-teal-200 text-teal-950' : theme === 'light' ? 'bg-teal-50 border-teal-200 text-teal-950' : 'bg-teal-950/20 border-teal-500/30'
                }`}>
                  <h4 className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-teal-500" /> Strategic Opportunities & Levers
                  </h4>
                  <ul className="space-y-2">
                    {dossier.strategicOpportunities.map((opp, i) => (
                      <li key={i} className={`flex items-start gap-2 ${textProseClass}`}>
                        <span className="text-teal-500 font-bold">•</span>
                        <span>{opp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>

          {/* Section 4: Actionable Ministerial Policy Directives */}
          <section id="sec-directives" className="mb-10 scroll-mt-24 page-break-avoid">
            <div className={`flex items-center gap-2 mb-4 pb-2 border-b ${
              theme === 'warm' ? 'border-[#e2d5bd]' : theme === 'light' ? 'border-slate-200' : 'border-slate-800'
            }`}>
              <span className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center text-xs font-bold">4</span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                Actionable Policy Directives for MoFA, ERD & Line Ministries
              </h2>
            </div>

            <div className={`p-6 rounded-2xl border space-y-4 ${cardBgClass}`}>
              {(dossier.detailedAnalysis?.policyDirectives || dossier.policyRecommendations || [
                'Establish dedicated bilateral consultation taskforces.',
                'Accelerate regulatory reforms and compliance mechanisms.',
                'Coordinate with regional multilateral secretariats.'
              ]).map((directive, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-bold shrink-0 mt-0.5 shadow-sm text-xs">
                    {idx + 1}
                  </div>
                  <div className={`font-medium ${textProseClass}`}>
                    {directive}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Academic Citations & Citation Generator */}
          <section id="sec-citations" className="mb-12 scroll-mt-24 page-break-avoid">
            <div className={`flex items-center gap-2 mb-4 pb-2 border-b ${
              theme === 'warm' ? 'border-[#e2d5bd]' : theme === 'light' ? 'border-slate-200' : 'border-slate-800'
            }`}>
              <span className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center text-xs font-bold">5</span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                Primary Citations & Think Tank Sources
              </h2>
            </div>

            {/* Citations List */}
            <div className={`p-6 rounded-2xl border mb-6 space-y-3 ${cardBgClass}`}>
              {(dossier.detailedAnalysis?.academicCitations || [
                {
                  title: `${dossier.source} Official Policy Paper on South Asian Strategic Architecture`,
                  authorOrBody: dossier.source,
                  publication: 'International Strategic Studies Series',
                  year: '2026',
                  url: dossier.originalUrl
                }
              ]).map((cite, i) => (
                <div key={i} className={`flex items-start gap-2.5 text-xs pb-3 border-b last:border-0 last:pb-0 ${
                  theme === 'warm' ? 'border-[#e2d5bd]' : theme === 'light' ? 'border-slate-100' : 'border-slate-800/60'
                }`}>
                  <FileText className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    <span className="font-bold">{cite.authorOrBody} ({cite.year}).</span>{' '}
                    <span className="italic">{cite.title}.</span>{' '}
                    <span className="opacity-70">{cite.publication}.</span>{' '}
                    {cite.url && (
                      <a href={cite.url} target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline inline-flex items-center gap-0.5">
                        <span>[Source Link]</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Citation Generator */}
            <div className={`p-5 rounded-2xl border shadow-lg no-print ${
              theme === 'warm' ? 'bg-[#f4eedf] border-[#dfd3bc]' : theme === 'light' ? 'bg-white border-slate-200' : 'bg-slate-900 border-cyan-500/40'
            }`}>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-cyan-600 dark:text-cyan-400" /> Academic Citation Generator (Author: Daloyar Hassan)
                </div>
                
                <div className={`flex items-center gap-1 p-1 rounded-xl border ${
                  theme === 'warm' ? 'bg-[#ede5d3] border-[#ded3be]' : theme === 'light' ? 'bg-slate-100 border-slate-200' : 'bg-slate-950 border-slate-800'
                }`}>
                  {(['APA', 'Harvard', 'Chicago'] as const).map(style => (
                    <button
                      key={style}
                      onClick={() => setSelectedCitationStyle(style)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                        selectedCitationStyle === style
                          ? 'bg-cyan-600 text-white shadow'
                          : 'opacity-70 hover:opacity-100'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              <div className={`p-4 rounded-xl border text-xs sm:text-sm font-mono leading-relaxed select-all ${
                theme === 'warm' ? 'bg-[#ede5d3] border-[#ded3be] text-[#2c2825]' : theme === 'light' ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-slate-950 border-slate-800 text-slate-200'
              }`}>
                {getCitation(selectedCitationStyle)}
              </div>

              <div className="flex justify-end mt-3">
                <button
                  onClick={handleCopyCitation}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  {copiedFormat ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedFormat ? `Copied ${copiedFormat} Citation!` : `Copy ${selectedCitationStyle} Citation`}</span>
                </button>
              </div>
            </div>
          </section>

          {/* Professorial Author Accreditation Profile Card */}
          <section className={`mb-12 p-6 sm:p-7 rounded-3xl border shadow-lg ${
            theme === 'warm' ? 'bg-[#ede5d3] border-[#ded3be]' : theme === 'light' ? 'bg-slate-100 border-slate-200' : 'bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 border-slate-800'
          }`}>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center text-white font-black text-xl shadow-md">
                  DH
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-black">Daloyar Hassan</h4>
                  <div className="text-xs text-cyan-600 dark:text-cyan-400 font-semibold">Foreign Policy & Strategic Affairs Analyst</div>
                  <p className="text-xs opacity-80 mt-1 max-w-xl leading-relaxed">
                    Lead researcher synthesizing open-source geopolitical data, think tank papers (BIISS, CSIS, Chatham House, ORF), and Bay of Bengal maritime strategy.
                  </p>
                </div>
              </div>

              <button
                onClick={handleShare}
                className={`px-4 py-2 rounded-xl text-xs font-bold border transition flex items-center gap-1.5 cursor-pointer no-print ${
                  theme === 'warm' ? 'bg-[#f4eedf] hover:bg-white border-[#ded3be]' : theme === 'light' ? 'bg-white hover:bg-slate-50 border-slate-300 shadow-sm' : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-200'
                }`}
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Research Dossier</span>
              </button>
            </div>
          </section>

          {/* Key Actors Tag Cloud */}
          <section className={`mb-12 pt-6 border-t no-print ${
            theme === 'warm' ? 'border-[#e2d5bd]' : theme === 'light' ? 'border-slate-200' : 'border-slate-800'
          }`}>
            <div className="text-xs font-bold opacity-60 uppercase tracking-wider mb-3">
              Primary Stakeholders & Intergovernmental Bodies:
            </div>
            <div className="flex flex-wrap gap-2">
              {dossier.keyActors.map(actor => (
                <span key={actor} className={`text-xs px-3 py-1.5 rounded-xl font-medium border ${
                  theme === 'warm' ? 'bg-[#f4eedf] border-[#ded3be]' : theme === 'light' ? 'bg-white border-slate-200 text-slate-700' : 'bg-slate-900 border-slate-800 text-slate-300'
                }`}>
                  {actor}
                </span>
              ))}
            </div>
          </section>

          {/* Related Dossiers in Same Strategic Pillar */}
          {relatedDossiers.length > 0 && (
            <section className={`pt-8 border-t no-print ${
              theme === 'warm' ? 'border-[#e2d5bd]' : theme === 'light' ? 'border-slate-200' : 'border-slate-800'
            }`}>
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-cyan-600 dark:text-cyan-400" /> Related Strategic Dossiers
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedDossiers.map(rel => (
                  <div
                    key={rel.id}
                    onClick={() => onNavigateDossier(rel.slug || rel.id)}
                    className={`p-4 rounded-2xl border transition cursor-pointer flex flex-col justify-between group shadow-sm ${
                      theme === 'warm' ? 'bg-[#f4eedf] hover:bg-[#ede5d3] border-[#ded3be]' : theme === 'light' ? 'bg-white hover:bg-slate-50 border-slate-200' : 'bg-slate-900/80 hover:bg-slate-900 border-slate-800 hover:border-cyan-500/40'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-extrabold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider block mb-1">
                        {rel.source}
                      </span>
                      <h4 className="text-xs font-bold group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition line-clamp-2">
                        {rel.title}
                      </h4>
                    </div>
                    <div className={`mt-3 text-[11px] opacity-70 flex items-center justify-between pt-2 border-t ${
                      theme === 'warm' ? 'border-[#ded3be]' : theme === 'light' ? 'border-slate-100' : 'border-slate-800/60'
                    }`}>
                      <span>{rel.publishedAt}</span>
                      <span className="text-cyan-600 dark:text-cyan-400 font-bold group-hover:translate-x-0.5 transition">Read Brief →</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

        </article>
      )}

      {/* ========================================================================= */}
      {/* MINISTERIAL POLICY BRIEFING PDF EXPORT MODAL */}
      {/* ========================================================================= */}
      {isPdfModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto no-print">
          <div className="bg-slate-900 border border-emerald-500/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl animate-fade-in text-slate-100 my-8">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">Ministerial Briefing PDF Generator</h3>
                  <p className="text-xs text-emerald-300 font-medium">Official Government & Think Tank Publication Format</p>
                </div>
              </div>
              <button
                onClick={() => setIsPdfModalOpen(false)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Document Preview Card */}
            <div className="bg-white text-slate-950 p-6 rounded-2xl border border-slate-300 shadow-inner text-xs font-sans space-y-3 mb-6">
              <div className="flex items-center justify-between border-b pb-2 text-[9px] font-mono text-slate-600">
                <span className="font-bold text-slate-900 uppercase">PEOPLE'S REPUBLIC OF BANGLADESH • STRATEGIC BRIEF</span>
                <span>REF: FP-DESK/{dossier.id.toUpperCase()}</span>
              </div>
              <h4 className="text-sm font-black text-slate-950 leading-snug">
                {dossier.title}
              </h4>
              <div className="text-[10px] text-slate-700 flex items-center gap-3">
                <span><strong>Author:</strong> Daloyar Hassan</span>
                <span>•</span>
                <span><strong>Source:</strong> {dossier.source}</span>
                <span>•</span>
                <span><strong>Date:</strong> {dossier.publishedAt}</span>
              </div>
              <div className="bg-slate-100 p-3 rounded-lg border text-[11px] text-slate-800 leading-relaxed">
                <span className="font-bold">Executive Summary: </span>
                {dossier.executiveSummary}
              </div>
              <div className="text-[10px] text-emerald-800 font-semibold bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
                ✓ Includes Great Power Alignment Matrix (US, China, India)
                <br />
                ✓ Includes Actionable Policy Directives for MoFA & ERD
                <br />
                ✓ Includes Academic Citations & Official Document Verification
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setIsPdfModalOpen(false)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-xl cursor-pointer"
              >
                Cancel
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setIsPdfModalOpen(false);
                    setTimeout(() => window.print(), 300);
                  }}
                  className="px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-emerald-950 transition flex items-center gap-2 cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print or Save to PDF Now</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
