import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLocalization } from '../../services/localizationService';
import type { SupportedLanguage } from '../../services/localizationService';

export const LanguageSwitcher: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { lang, changeLanguage, currentMeta, supportedLanguages } = useLocalization();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: SupportedLanguage) => {
    changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs font-bold transition cursor-pointer shadow-2xs"
        title="Switch Interface & Explanation Language (Auto-Detected)"
      >
        <span className="text-sm">{currentMeta.flag}</span>
        <span className="hidden sm:inline font-sans">{currentMeta.nativeName}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl border border-slate-200 shadow-xl py-2 z-50 animate-fade-in text-slate-900">
          <div className="px-3 py-1.5 border-b border-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Globe className="w-3 h-3 text-teal-800" />
            <span>Select Your Language</span>
          </div>

          <div className="max-h-64 overflow-y-auto p-1 space-y-0.5">
            {supportedLanguages.map(item => {
              const isSelected = item.code === lang;
              return (
                <button
                  key={item.code}
                  onClick={() => handleSelect(item.code)}
                  className={`w-full px-3 py-2 rounded-xl text-xs text-left flex items-center justify-between transition cursor-pointer ${
                    isSelected
                      ? 'bg-teal-50 text-teal-950 font-bold border border-teal-200'
                      : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">{item.flag}</span>
                    <div>
                      <div className="font-semibold">{item.nativeName}</div>
                      <div className="text-[10px] text-slate-400">{item.name}</div>
                    </div>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-teal-800" />}
                </button>
              );
            })}
          </div>

          <div className="px-3 py-1.5 border-t border-slate-100 text-[10px] text-slate-400 italic text-center">
            Auto-detects your geo-locale & device language
          </div>
        </div>
      )}
    </div>
  );
};
