import React, { useState } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentView?: 'home' | 'courses' | 'tools';
  setCurrentView?: (view: 'home' | 'courses' | 'tools') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView = 'home', setCurrentView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (viewName: 'home' | 'courses' | 'tools', hashTarget?: string) => {
    if (setCurrentView) {
      setCurrentView(viewName);
    }
    setIsOpen(false);
    if (hashTarget) {
      setTimeout(() => {
        const elem = document.querySelector(hashTarget);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home', '#hero')}
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-emerald-500 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-600/30 group-hover:scale-105 transition">
              S
            </div>
            <div>
              <div className="text-lg font-extrabold tracking-tight text-white flex items-center gap-1.5">
                dhshishir<span className="text-emerald-400">.com</span>
              </div>
              <div className="text-[11px] font-medium text-slate-400 tracking-wider uppercase">
                Daloyar Hassan Shishir
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => handleNavClick('home', '#hero')}
              className={`text-xs font-semibold transition ${currentView === 'home' ? 'text-emerald-400' : 'text-slate-300 hover:text-emerald-400'}`}
            >
              Home & Bio
            </button>
            <button
              onClick={() => handleNavClick('home', '#experience')}
              className="text-xs font-semibold text-slate-300 hover:text-emerald-400 transition"
            >
              Global Leadership & Press
            </button>
            <button
              onClick={() => handleNavClick('home', '#tools')}
              className="text-xs font-semibold text-slate-300 hover:text-emerald-400 transition flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3 text-indigo-400" /> Career & Student Tools
            </button>
            <button
              onClick={() => handleNavClick('home', '#english')}
              className="text-xs font-semibold text-slate-300 hover:text-emerald-400 transition"
            >
              English Academy
            </button>
            <button
              onClick={() => handleNavClick('home', '#cv-services')}
              className="text-xs font-semibold text-slate-300 hover:text-emerald-400 transition"
            >
              CV Solutions
            </button>
            <button
              onClick={() => handleNavClick('home', '#blog')}
              className="text-xs font-semibold text-slate-300 hover:text-emerald-400 transition"
            >
              Articles
            </button>
            <button
              onClick={() => handleNavClick('home', '#contact')}
              className="text-xs font-semibold text-slate-300 hover:text-emerald-400 transition"
            >
              Connect
            </button>
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('home', '#contact')}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 hover:opacity-90 text-white font-bold text-xs shadow-lg shadow-indigo-900/30 transition flex items-center gap-2"
            >
              Connect with Shishir <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-2 pb-6 space-y-2">
          <button
            onClick={() => handleNavClick('home', '#hero')}
            className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-slate-200 hover:bg-slate-900 hover:text-emerald-400 transition"
          >
            Home & Bio
          </button>
          <button
            onClick={() => handleNavClick('home', '#experience')}
            className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-slate-200 hover:bg-slate-900 hover:text-emerald-400 transition"
          >
            Global Leadership & Press
          </button>
          <button
            onClick={() => handleNavClick('home', '#tools')}
            className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-slate-200 hover:bg-slate-900 hover:text-emerald-400 transition"
          >
            Career & Student Tools
          </button>
          <button
            onClick={() => handleNavClick('home', '#english')}
            className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-slate-200 hover:bg-slate-900 hover:text-emerald-400 transition"
          >
            English Academy
          </button>
          <button
            onClick={() => handleNavClick('home', '#cv-services')}
            className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-slate-200 hover:bg-slate-900 hover:text-emerald-400 transition"
          >
            CV Solutions
          </button>
          <button
            onClick={() => handleNavClick('home', '#blog')}
            className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-slate-200 hover:bg-slate-900 hover:text-emerald-400 transition"
          >
            Articles
          </button>
          <button
            onClick={() => handleNavClick('home', '#contact')}
            className="w-full text-left px-4 py-3 rounded-xl text-base font-semibold text-slate-200 hover:bg-slate-900 hover:text-emerald-400 transition"
          >
            Connect
          </button>
        </div>
      )}
    </header>
  );
};
