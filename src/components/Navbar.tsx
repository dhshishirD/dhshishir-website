import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Sparkles, User, LogOut, LayoutDashboard, Globe, 
  GraduationCap, Compass, Share2, Shield, Award, ChevronDown, 
  Wrench, BookOpen, FileText, PhoneCall
} from 'lucide-react';
import { supabase } from '../services/supabaseClient';
import { AuthModal } from './auth/AuthModal';
import { DiplomaticSoundscapes } from './common/DiplomaticSoundscapes';
import { LanguageSwitcher } from './common/LanguageSwitcher';
import { ShareModal } from './common/ShareModal';

export type ViewType = 'home' | 'fellowship' | 'diplomacy' | 'map' | 'fluency-lab' | 'ielts' | 'tools' | 'leadership' | 'blog' | 'contact' | 'dashboard' | 'admin';

interface NavbarProps {
  currentView?: ViewType;
  onNavigate?: (view: ViewType, toolId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView = 'home', onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'diplomacy' | 'english' | 'insights' | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleNavClick = (viewName: ViewType) => {
    if (onNavigate) {
      onNavigate(viewName);
    }
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const handleMouseEnter = (menu: 'diplomacy' | 'english' | 'insights') => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    if (onNavigate) onNavigate('home');
  };

  const isDiplomacyActive = currentView === 'fellowship' || currentView === 'diplomacy' || currentView === 'map';
  const isEnglishActive = currentView === 'ielts' || currentView === 'fluency-lab';
  const isInsightsActive = currentView === 'blog' || currentView === 'leadership' || currentView === 'contact';

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Brand Logo */}
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 group text-left cursor-pointer shrink-0"
            >
              <div className="w-10 h-10 rounded-2xl bg-teal-900 text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:scale-105 transition">
                শ
              </div>
              <div>
                <div className="text-lg font-extrabold tracking-tight text-slate-900 flex items-center gap-1.5">
                  dhshishir<span className="text-teal-800">.com</span>
                </div>
                <div className="text-[10px] sm:text-[11px] font-semibold text-slate-600 tracking-wider uppercase">
                  Daloyar Hassan Shishir
                </div>
              </div>
            </button>

            {/* Focused Desktop 4-Pillar Navigation */}
            <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
              
              {/* Pillar 1: Home */}
              <button
                onClick={() => handleNavClick('home')}
                className={`text-xs font-bold transition px-3 py-2 rounded-xl cursor-pointer ${
                  currentView === 'home' 
                    ? 'text-teal-950 bg-teal-50/80 font-extrabold' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Home
              </button>

              {/* Pillar 2: Diplomacy & IR (Dropdown) */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('diplomacy')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'diplomacy' ? null : 'diplomacy')}
                  className={`text-xs font-bold transition px-3 py-2 rounded-xl flex items-center gap-1.5 cursor-pointer border ${
                    isDiplomacyActive
                      ? 'bg-teal-900 text-white border-teal-900 shadow-xs'
                      : 'bg-white text-slate-700 hover:text-teal-950 hover:bg-slate-50 border-slate-200'
                  }`}
                >
                  <Globe className={`w-3.5 h-3.5 ${isDiplomacyActive ? 'text-teal-200' : 'text-teal-800'}`} />
                  <span>Diplomacy & IR</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'diplomacy' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'diplomacy' && (
                  <div className="absolute top-full left-0 mt-1.5 w-80 bg-white rounded-2xl border border-slate-200 shadow-xl p-2.5 space-y-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <button
                      onClick={() => handleNavClick('fellowship')}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-teal-50/70 flex items-start gap-3 transition cursor-pointer group"
                    >
                      <div className="p-2 rounded-lg bg-teal-50 text-teal-800 group-hover:bg-teal-900 group-hover:text-white transition">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-900 group-hover:text-teal-950">IR Master's Fellowship</span>
                          <span className="text-[9px] font-black px-1.5 py-0.5 rounded-full bg-teal-100 text-teal-800 uppercase">OPEN</span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">Curriculum, syllabus & research admissions</p>
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick('diplomacy')}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-teal-50/70 flex items-start gap-3 transition cursor-pointer group"
                    >
                      <div className="p-2 rounded-lg bg-teal-50 text-teal-800 group-hover:bg-teal-900 group-hover:text-white transition">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-900 group-hover:text-teal-950">Diplomatic & Policy Hub</span>
                          <span className="text-[9px] font-black px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-700 uppercase">INTEL</span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">Strategic dossiers & think tank analysis</p>
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick('map')}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-teal-50/70 flex items-start gap-3 transition cursor-pointer group"
                    >
                      <div className="p-2 rounded-lg bg-teal-50 text-teal-800 group-hover:bg-teal-900 group-hover:text-white transition">
                        <Compass className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-900 group-hover:text-teal-950">Diplomatic World Map</span>
                          <span className="text-[9px] font-black px-1.5 py-0.5 rounded-full bg-teal-100 text-teal-800 uppercase">MAP</span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">Strategic sea lanes & global chokepoints</p>
                      </div>
                    </button>
                  </div>
                )}
              </div>

              {/* Pillar 3: IELTS & English (Dropdown) */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('english')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'english' ? null : 'english')}
                  className={`text-xs font-bold transition px-3 py-2 rounded-xl flex items-center gap-1.5 cursor-pointer border ${
                    isEnglishActive
                      ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-xs'
                      : 'bg-amber-50/60 text-amber-950 hover:bg-amber-100/70 border-amber-200/80'
                  }`}
                >
                  <Award className={`w-3.5 h-3.5 ${isEnglishActive ? 'text-slate-950' : 'text-amber-700'}`} />
                  <span>IELTS & English</span>
                  <span className={`text-[9px] font-black px-1.5 py-0.2 rounded-full uppercase ${isEnglishActive ? 'bg-slate-950 text-amber-300' : 'bg-amber-200 text-amber-950'}`}>Band 8.5</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'english' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'english' && (
                  <div className="absolute top-full left-0 mt-1.5 w-80 bg-white rounded-2xl border border-slate-200 shadow-xl p-2.5 space-y-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <button
                      onClick={() => handleNavClick('ielts')}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-amber-50/70 flex items-start gap-3 transition cursor-pointer group"
                    >
                      <div className="p-2 rounded-lg bg-amber-100 text-amber-900 group-hover:bg-amber-500 group-hover:text-slate-950 transition">
                        <Award className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-900 group-hover:text-amber-950">IELTS Master Hub</span>
                          <span className="text-[9px] font-black px-1.5 py-0.5 rounded-full bg-amber-200 text-amber-900 uppercase">FREE</span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">6 interactive engines, study roadmap & Anki</p>
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick('fluency-lab')}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-teal-50/70 flex items-start gap-3 transition cursor-pointer group"
                    >
                      <div className="p-2 rounded-lg bg-teal-50 text-teal-800 group-hover:bg-teal-900 group-hover:text-white transition">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-900 group-hover:text-teal-950">English Fluency Lab</span>
                          <span className="text-[9px] font-black px-1.5 py-0.5 rounded-full bg-teal-100 text-teal-800 uppercase">FREE AUDIO</span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">Online speaking course & acoustic shadowing</p>
                      </div>
                    </button>
                  </div>
                )}
              </div>

              {/* Pillar 4: Tools Suite */}
              <button
                onClick={() => handleNavClick('tools')}
                className={`text-xs font-bold transition px-3 py-2 rounded-xl flex items-center gap-1.5 cursor-pointer border ${
                  currentView === 'tools' 
                    ? 'text-teal-950 bg-teal-50 border-teal-200 font-extrabold' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 border-transparent'
                }`}
              >
                <Wrench className="w-3.5 h-3.5 text-slate-500" />
                <span>Tools Suite</span>
              </button>

              {/* Pillar 5: Insights & Bio (Dropdown) */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('insights')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === 'insights' ? null : 'insights')}
                  className={`text-xs font-bold transition px-3 py-2 rounded-xl flex items-center gap-1.5 cursor-pointer border ${
                    isInsightsActive
                      ? 'bg-teal-900 text-white border-teal-900 shadow-xs'
                      : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-50 border-slate-200'
                  }`}
                >
                  <BookOpen className={`w-3.5 h-3.5 ${isInsightsActive ? 'text-teal-200' : 'text-slate-500'}`} />
                  <span>Insights & Bio</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'insights' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'insights' && (
                  <div className="absolute top-full right-0 mt-1.5 w-72 bg-white rounded-2xl border border-slate-200 shadow-xl p-2.5 space-y-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <button
                      onClick={() => handleNavClick('blog')}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 flex items-start gap-3 transition cursor-pointer group"
                    >
                      <div className="p-2 rounded-lg bg-slate-100 text-slate-700 group-hover:bg-teal-900 group-hover:text-white transition">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs font-bold text-slate-900 block group-hover:text-teal-950">Strategic Articles</span>
                        <p className="text-[11px] text-slate-500 mt-0.5">Policy analysis, SOPs & language insights</p>
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick('leadership')}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 flex items-start gap-3 transition cursor-pointer group"
                    >
                      <div className="p-2 rounded-lg bg-slate-100 text-slate-700 group-hover:bg-teal-900 group-hover:text-white transition">
                        <Shield className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs font-bold text-slate-900 block group-hover:text-teal-950">Leadership & Bio</span>
                        <p className="text-[11px] text-slate-500 mt-0.5">Global delegations, research & track record</p>
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick('contact')}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 flex items-start gap-3 transition cursor-pointer group"
                    >
                      <div className="p-2 rounded-lg bg-slate-100 text-slate-700 group-hover:bg-teal-900 group-hover:text-white transition">
                        <PhoneCall className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs font-bold text-slate-900 block group-hover:text-teal-950">Contact & Advisory</span>
                        <p className="text-[11px] text-slate-500 mt-0.5">Consultations & speaking inquiries</p>
                      </div>
                    </button>
                  </div>
                )}
              </div>

            </nav>

            {/* Right Utility Cluster */}
            <div className="flex items-center gap-2">
              
              {/* Ambient Soundscapes Focus */}
              <DiplomaticSoundscapes className="hidden md:flex" />

              {/* Language Switcher */}
              <LanguageSwitcher />

              {/* Share Button */}
              <button
                onClick={() => setIsShareModalOpen(true)}
                className="hidden xl:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-50 hover:bg-teal-50 text-slate-700 hover:text-teal-900 border border-slate-200 text-xs font-bold transition cursor-pointer"
                title="Share Portal, Tools & Fellowship"
              >
                <Share2 className="w-3.5 h-3.5 text-teal-800" />
                <span>Share</span>
              </button>

              {/* User Auth Action Button */}
              <div className="hidden sm:flex items-center gap-2">
                {user ? (
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleNavClick('dashboard')}
                      className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-teal-50 hover:bg-teal-100 border border-teal-200 text-teal-950 text-xs font-bold transition cursor-pointer shadow-2xs"
                    >
                      <LayoutDashboard className="w-3.5 h-3.5 text-teal-800" />
                      <span>Dashboard</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('admin')}
                      className="p-2 rounded-xl bg-slate-100 hover:bg-teal-50 border border-slate-200 text-slate-700 hover:text-teal-900 transition cursor-pointer"
                      title="Executive Admin Panel"
                    >
                      <Shield className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleSignOut}
                      className="p-2 rounded-xl bg-slate-100 hover:bg-rose-50 border border-slate-200 hover:border-rose-300 text-slate-600 hover:text-rose-600 transition cursor-pointer"
                      title="Sign Out"
                    >
                      <LogOut className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsAuthModalOpen(true)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-teal-900 hover:bg-teal-800 text-white font-bold text-xs shadow-xs transition cursor-pointer"
                  >
                    <User className="w-3.5 h-3.5" />
                    <span>Sign In</span>
                  </button>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-950 transition cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-slate-800" />}
              </button>

            </div>

          </div>
        </div>

        {/* Clean Structured Mobile Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-6 space-y-5 shadow-xl max-h-[85vh] overflow-y-auto">
            
            {/* Quick Home */}
            <button
              onClick={() => handleNavClick('home')}
              className="w-full text-left py-2.5 px-3.5 rounded-xl text-sm font-bold text-slate-900 bg-slate-100/70 hover:bg-slate-200 transition cursor-pointer"
            >
              Home & Global Overview
            </button>

            {/* Group 1: Academic & Diplomacy */}
            <div className="space-y-1.5">
              <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-3 pb-1">
                Academic & Diplomatic Affairs
              </div>
              <button
                onClick={() => handleNavClick('fellowship')}
                className="w-full text-left py-2.5 px-3.5 rounded-xl text-xs font-bold text-teal-950 bg-teal-50/70 border border-teal-200 flex items-center justify-between transition cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="w-4 h-4 text-teal-800" />
                  <span>IR Master's Fellowship</span>
                </div>
                <span className="bg-teal-800 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase">OPEN</span>
              </button>

              <button
                onClick={() => handleNavClick('diplomacy')}
                className="w-full text-left py-2 px-3.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center justify-between transition cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-teal-800" />
                  <span>Diplomatic & Policy Hub</span>
                </div>
                <span className="bg-slate-100 text-slate-600 text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase">INTEL</span>
              </button>

              <button
                onClick={() => handleNavClick('map')}
                className="w-full text-left py-2 px-3.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-2.5 transition cursor-pointer"
              >
                <Compass className="w-4 h-4 text-teal-800" />
                <span>Diplomatic World Map</span>
              </button>
            </div>

            {/* Group 2: IELTS & English Mastery */}
            <div className="space-y-1.5">
              <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-3 pb-1">
                English & IELTS Preparation
              </div>
              <button
                onClick={() => handleNavClick('ielts')}
                className="w-full text-left py-2.5 px-3.5 rounded-xl text-xs font-bold text-amber-950 bg-amber-50 border border-amber-200 flex items-center justify-between transition cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-amber-700" />
                  <span>IELTS Master Hub</span>
                </div>
                <span className="bg-amber-400 text-slate-950 text-[9px] font-black px-2 py-0.5 rounded-full uppercase">Band 8.5</span>
              </button>

              <button
                onClick={() => handleNavClick('fluency-lab')}
                className="w-full text-left py-2 px-3.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center justify-between transition cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-teal-800" />
                  <span>English Fluency Lab</span>
                </div>
                <span className="bg-teal-50 text-teal-900 border border-teal-200 text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase">COURSE</span>
              </button>
            </div>

            {/* Group 3: Productivity & Insights */}
            <div className="space-y-1.5">
              <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-3 pb-1">
                Productivity & Publications
              </div>
              <button
                onClick={() => handleNavClick('tools')}
                className="w-full text-left py-2 px-3.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-2.5 transition cursor-pointer"
              >
                <Wrench className="w-4 h-4 text-slate-500" />
                <span>Career & Productivity Tools Suite</span>
              </button>

              <button
                onClick={() => handleNavClick('blog')}
                className="w-full text-left py-2 px-3.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-2.5 transition cursor-pointer"
              >
                <FileText className="w-4 h-4 text-slate-500" />
                <span>Strategic Insights & Articles</span>
              </button>

              <button
                onClick={() => handleNavClick('leadership')}
                className="w-full text-left py-2 px-3.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-2.5 transition cursor-pointer"
              >
                <Shield className="w-4 h-4 text-slate-500" />
                <span>Leadership & Bio</span>
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-left py-2 px-3.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-2.5 transition cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-slate-500" />
                <span>Contact & Speaking Advisory</span>
              </button>
            </div>

            {/* Group 4: Auth & Account */}
            <div className="pt-4 border-t border-slate-200 space-y-2">
              {user ? (
                <>
                  <button
                    onClick={() => handleNavClick('dashboard')}
                    className="w-full py-2.5 rounded-xl bg-teal-50 border border-teal-200 text-teal-900 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <LayoutDashboard className="w-4 h-4" /> Personal Dashboard
                  </button>
                  <button
                    onClick={handleSignOut}
                    className="w-full py-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" /> Sign Out
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    setIsAuthModalOpen(true);
                    setIsOpen(false);
                  }}
                  className="w-full py-3 rounded-xl bg-teal-900 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <User className="w-4 h-4" /> Sign In / Create Account
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        onSuccess={(u) => {
          setUser(u);
          setIsAuthModalOpen(false);
        }}
      />

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        title="Daloyar Hassan Shishir | Diplomatic Knowledge, Career Tools & English Fluency Portal"
        url="https://dhshishir.com"
        summary="Access geopolitical intelligence dossiers, interactive world map chokepoints, free AI career tools, and the Open Master's Fellowship."
        category="Knowledge Portal"
      />
    </>
  );
};
