import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, User, LogOut, LayoutDashboard, Globe } from 'lucide-react';
import { supabase } from '../services/supabaseClient';
import { AuthModal } from './auth/AuthModal';

export type ViewType = 'home' | 'diplomacy' | 'fluency-lab' | 'tools' | 'leadership' | 'blog' | 'contact' | 'dashboard';

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
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
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
                className="w-10 h-10 rounded-2xl shadow-lg shadow-indigo-600/30 group-hover:scale-105 transition object-contain"
              />
              <div>
                <div className="text-lg font-extrabold tracking-tight text-white flex items-center gap-1.5">
                  dhshishir<span className="text-cyan-400">.com</span>
                </div>
                <div className="text-[10px] sm:text-[11px] font-medium text-slate-400 tracking-wider uppercase">
                  Daloyar Hassan Shishir
                </div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-4">
              <button
                onClick={() => handleNavClick('home')}
                className={`text-xs font-bold transition px-2.5 py-1.5 rounded-lg cursor-pointer ${
                  currentView === 'home' ? 'text-white bg-slate-800/80' : 'text-slate-300 hover:text-white'
                }`}
              >
                Home
              </button>

              <button
                onClick={() => handleNavClick('diplomacy')}
                className={`text-xs font-bold transition px-3 py-1.5 rounded-full flex items-center gap-1.5 cursor-pointer border ${
                  currentView === 'diplomacy'
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-sm shadow-cyan-950'
                    : 'bg-cyan-950/40 text-cyan-400 hover:text-cyan-300 border-cyan-500/30 hover:bg-cyan-950/70'
                }`}
              >
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span>Diplomatic Hub</span>
                <span className="bg-cyan-400 text-slate-950 text-[9px] font-black px-1.5 py-0.2 rounded-full uppercase">Intel</span>
              </button>

              <button
                onClick={() => handleNavClick('fluency-lab')}
                className={`text-xs font-bold transition px-3 py-1.5 rounded-full flex items-center gap-1.5 cursor-pointer border ${
                  currentView === 'fluency-lab'
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm shadow-emerald-950'
                    : 'bg-emerald-950/40 text-emerald-400 hover:text-emerald-300 border-emerald-500/30 hover:bg-emerald-950/70'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Fluency Lab</span>
              </button>

              <button
                onClick={() => handleNavClick('tools')}
                className={`text-xs font-bold transition px-2.5 py-1.5 rounded-lg cursor-pointer ${
                  currentView === 'tools' ? 'text-white bg-slate-800/80' : 'text-slate-300 hover:text-white'
                }`}
              >
                Career Tools
              </button>

              <button
                onClick={() => handleNavClick('leadership')}
                className={`text-xs font-bold transition px-2.5 py-1.5 rounded-lg cursor-pointer ${
                  currentView === 'leadership' ? 'text-white bg-slate-800/80' : 'text-slate-300 hover:text-white'
                }`}
              >
                Leadership & Bio
              </button>

              <button
                onClick={() => handleNavClick('blog')}
                className={`text-xs font-bold transition px-2.5 py-1.5 rounded-lg cursor-pointer ${
                  currentView === 'blog' ? 'text-white bg-slate-800/80' : 'text-slate-300 hover:text-white'
                }`}
              >
                Insights
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className={`text-xs font-bold transition px-2.5 py-1.5 rounded-lg cursor-pointer ${
                  currentView === 'contact' ? 'text-white bg-slate-800/80' : 'text-slate-300 hover:text-white'
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
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-bold transition cursor-pointer"
                  >
                    <LayoutDashboard className="w-4 h-4 text-cyan-400" />
                    <span>Dashboard</span>
                  </button>
                  <button
                    onClick={handleSignOut}
                    className="p-2 rounded-xl bg-slate-900 hover:bg-rose-950/40 border border-slate-800 hover:border-rose-500/40 text-slate-400 hover:text-rose-400 transition cursor-pointer"
                    title="Sign Out"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white font-bold text-xs shadow-lg shadow-cyan-950 transition cursor-pointer"
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
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition cursor-pointer"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="xl:hidden bg-slate-950 border-b border-slate-800 px-4 py-6 space-y-3">
            <button
              onClick={() => handleNavClick('home')}
              className="w-full text-left py-2 px-3 rounded-lg text-sm font-bold text-slate-300 hover:bg-slate-900 hover:text-white transition cursor-pointer"
            >
              Home & Overview
            </button>

            <button
              onClick={() => handleNavClick('diplomacy')}
              className="w-full text-left py-2 px-3 rounded-lg text-sm font-bold text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between transition cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>Diplomatic & Foreign Policy Hub</span>
              </div>
              <span className="bg-cyan-400 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full">LIVE</span>
            </button>

            <button
              onClick={() => handleNavClick('fluency-lab')}
              className="w-full text-left py-2 px-3 rounded-lg text-sm font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-2 transition cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Fluency Lab Hub</span>
            </button>

            <button
              onClick={() => handleNavClick('tools')}
              className="w-full text-left py-2 px-3 rounded-lg text-sm font-bold text-slate-300 hover:bg-slate-900 hover:text-white transition cursor-pointer"
            >
              Career & Productivity Tools
            </button>

            <button
              onClick={() => handleNavClick('leadership')}
              className="w-full text-left py-2 px-3 rounded-lg text-sm font-bold text-slate-300 hover:bg-slate-900 hover:text-white transition cursor-pointer"
            >
              Leadership & Bio
            </button>

            <button
              onClick={() => handleNavClick('blog')}
              className="w-full text-left py-2 px-3 rounded-lg text-sm font-bold text-slate-300 hover:bg-slate-900 hover:text-white transition cursor-pointer"
            >
              Strategic Insights & Articles
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-left py-2 px-3 rounded-lg text-sm font-bold text-slate-300 hover:bg-slate-900 hover:text-white transition cursor-pointer"
            >
              Contact & Advisory
            </button>

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
              {user ? (
                <>
                  <button
                    onClick={() => handleNavClick('dashboard')}
                    className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-bold flex items-center justify-center gap-2"
                  >
                    <LayoutDashboard className="w-4 h-4" /> Personal Dashboard
                  </button>
                  <button
                    onClick={handleSignOut}
                    className="w-full py-2.5 rounded-xl bg-rose-950/40 border border-rose-500/30 text-rose-400 text-xs font-bold flex items-center justify-center gap-2"
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
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg"
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
