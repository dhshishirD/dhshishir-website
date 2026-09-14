import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, User, LogOut, LayoutDashboard, Globe, GraduationCap } from 'lucide-react';
import { supabase } from '../services/supabaseClient';
import { AuthModal } from './auth/AuthModal';

export type ViewType = 'home' | 'fellowship' | 'diplomacy' | 'fluency-lab' | 'tools' | 'leadership' | 'blog' | 'contact' | 'dashboard';

interface NavbarProps {
  currentView?: ViewType;
  onNavigate?: (view: ViewType, toolId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView = 'home', onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

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
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    if (onNavigate) onNavigate('home');
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Brand Logo */}
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 group text-left cursor-pointer"
            >
              <img
                src="/logo.svg"
                alt="DH Shishir Monogram Emblem"
                className="w-10 h-10 rounded-2xl shadow-md group-hover:scale-105 transition object-contain border border-slate-200"
              />
              <div>
                <div className="text-lg font-extrabold tracking-tight text-slate-900 flex items-center gap-1.5">
                  dhshishir<span className="text-blue-700">.com</span>
                </div>
                <div className="text-[10px] sm:text-[11px] font-semibold text-slate-600 tracking-wider uppercase">
                  Daloyar Hassan Shishir
                </div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-2">
              <button
                onClick={() => handleNavClick('home')}
                className={`text-xs font-bold transition px-3 py-1.5 rounded-lg cursor-pointer ${
                  currentView === 'home' ? 'text-slate-950 bg-slate-100 font-extrabold' : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                }`}
              >
                Home
              </button>

              {/* IR Fellowship Link */}
              <button
                onClick={() => handleNavClick('fellowship')}
                className={`text-xs font-bold transition px-3.5 py-1.5 rounded-full flex items-center gap-1.5 cursor-pointer border ${
                  currentView === 'fellowship'
                    ? 'bg-blue-50 text-blue-900 border-blue-300 shadow-xs'
                    : 'bg-slate-50 text-slate-700 hover:text-blue-900 border-slate-200 hover:bg-blue-50/60'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5 text-blue-700" />
                <span>IR Fellowship</span>
                <span className="bg-amber-500 text-slate-950 text-[9px] font-black px-1.5 py-0.2 rounded-full uppercase">Master's</span>
              </button>

              <button
                onClick={() => handleNavClick('diplomacy')}
                className={`text-xs font-bold transition px-3.5 py-1.5 rounded-full flex items-center gap-1.5 cursor-pointer border ${
                  currentView === 'diplomacy'
                    ? 'bg-cyan-50 text-cyan-900 border-cyan-300 shadow-xs'
                    : 'bg-slate-50 text-slate-700 hover:text-cyan-900 border-slate-200 hover:bg-cyan-50/60'
                }`}
              >
                <Globe className="w-3.5 h-3.5 text-cyan-700" />
                <span>Diplomatic Hub</span>
                <span className="bg-cyan-600 text-white text-[9px] font-black px-1.5 py-0.2 rounded-full uppercase">Intel</span>
              </button>

              <button
                onClick={() => handleNavClick('fluency-lab')}
                className={`text-xs font-bold transition px-3.5 py-1.5 rounded-full flex items-center gap-1.5 cursor-pointer border ${
                  currentView === 'fluency-lab'
                    ? 'bg-emerald-50 text-emerald-900 border-emerald-300 shadow-xs'
                    : 'bg-slate-50 text-slate-700 hover:text-emerald-900 border-slate-200 hover:bg-emerald-50/60'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Fluency Lab</span>
              </button>

              <button
                onClick={() => handleNavClick('tools')}
                className={`text-xs font-bold transition px-3 py-1.5 rounded-lg cursor-pointer ${
                  currentView === 'tools' ? 'text-slate-950 bg-slate-100 font-extrabold' : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                }`}
              >
                Career Tools
              </button>

              <button
                onClick={() => handleNavClick('leadership')}
                className={`text-xs font-bold transition px-3 py-1.5 rounded-lg cursor-pointer ${
                  currentView === 'leadership' ? 'text-slate-950 bg-slate-100 font-extrabold' : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                }`}
              >
                Leadership & Bio
              </button>

              <button
                onClick={() => handleNavClick('blog')}
                className={`text-xs font-bold transition px-3 py-1.5 rounded-lg cursor-pointer ${
                  currentView === 'blog' ? 'text-slate-950 bg-slate-100 font-extrabold' : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                }`}
              >
                Insights
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className={`text-xs font-bold transition px-3 py-1.5 rounded-lg cursor-pointer ${
                  currentView === 'contact' ? 'text-slate-950 bg-slate-100 font-extrabold' : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                }`}
              >
                Contact
              </button>
            </nav>

            {/* User Auth Action Button */}
            <div className="hidden lg:flex items-center gap-3">
              {user ? (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleNavClick('dashboard')}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-900 text-xs font-bold transition cursor-pointer"
                  >
                    <LayoutDashboard className="w-4 h-4 text-blue-700" />
                    <span>Dashboard</span>
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
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs shadow-md transition cursor-pointer"
                >
                  <User className="w-3.5 h-3.5" />
                  <span>Sign In / Join</span>
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center gap-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-950 transition cursor-pointer"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 py-6 space-y-3 shadow-lg">
            <button
              onClick={() => handleNavClick('home')}
              className="w-full text-left py-2 px-3 rounded-lg text-sm font-bold text-slate-800 hover:bg-slate-100 transition cursor-pointer"
            >
              Home & Overview
            </button>

            <button
              onClick={() => handleNavClick('fellowship')}
              className="w-full text-left py-2 px-3 rounded-lg text-sm font-bold text-blue-900 bg-blue-50 border border-blue-200 flex items-center justify-between transition cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-blue-700" />
                <span>IR Master's Fellowship</span>
              </div>
              <span className="bg-amber-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full">OPEN</span>
            </button>

            <button
              onClick={() => handleNavClick('diplomacy')}
              className="w-full text-left py-2 px-3 rounded-lg text-sm font-bold text-cyan-900 bg-cyan-50 border border-cyan-200 flex items-center justify-between transition cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-700" />
                <span>Diplomatic & Foreign Policy Hub</span>
              </div>
              <span className="bg-cyan-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full">LIVE</span>
            </button>

            <button
              onClick={() => handleNavClick('fluency-lab')}
              className="w-full text-left py-2 px-3 rounded-lg text-sm font-bold text-emerald-900 bg-emerald-50 border border-emerald-200 flex items-center gap-2 transition cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Fluency Lab Hub</span>
            </button>

            <button
              onClick={() => handleNavClick('tools')}
              className="w-full text-left py-2 px-3 rounded-lg text-sm font-bold text-slate-800 hover:bg-slate-100 transition cursor-pointer"
            >
              Career & Productivity Tools
            </button>

            <button
              onClick={() => handleNavClick('leadership')}
              className="w-full text-left py-2 px-3 rounded-lg text-sm font-bold text-slate-800 hover:bg-slate-100 transition cursor-pointer"
            >
              Leadership & Bio
            </button>

            <button
              onClick={() => handleNavClick('blog')}
              className="w-full text-left py-2 px-3 rounded-lg text-sm font-bold text-slate-800 hover:bg-slate-100 transition cursor-pointer"
            >
              Strategic Insights & Articles
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-left py-2 px-3 rounded-lg text-sm font-bold text-slate-800 hover:bg-slate-100 transition cursor-pointer"
            >
              Contact & Advisory
            </button>

            <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
              {user ? (
                <>
                  <button
                    onClick={() => handleNavClick('dashboard')}
                    className="w-full py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-blue-900 text-xs font-bold flex items-center justify-center gap-2"
                  >
                    <LayoutDashboard className="w-4 h-4" /> Personal Dashboard
                  </button>
                  <button
                    onClick={handleSignOut}
                    className="w-full py-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center justify-center gap-2"
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
                  className="w-full py-2.5 rounded-xl bg-blue-900 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md"
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
    </>
  );
};
