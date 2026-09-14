import React from 'react';
import { 
  X, 
  Volume2, 
  MapPin, 
  BookOpen, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import type { ExtendedGlossaryTerm } from '../../data/diplomaticGlossaryData';
import { speakText } from '../../utils/audioPlayer';
import { useLocalization, resolveLocalizedText } from '../../services/localizationService';

interface GlossaryTermModalProps {
  term: ExtendedGlossaryTerm | null;
  onClose: () => void;
  onNavigateToMap?: (locationId: string) => void;
}

export const GlossaryTermModal: React.FC<GlossaryTermModalProps> = ({
  term,
  onClose,
  onNavigateToMap
}) => {
  const { lang, currentMeta } = useLocalization();
  if (!term) return null;

  const handlePronounce = () => {
    speakText(term.term, true);
  };

  const handleGoToMap = () => {
    if (term.mapLocationId && onNavigateToMap) {
      onNavigateToMap(term.mapLocationId);
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white border border-teal-200 rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl space-y-4 relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-900 border border-teal-200">
              {term.category}
            </span>
            {term.significanceLevel && (
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                term.significanceLevel === 'Critical' 
                  ? 'bg-rose-50 text-rose-800 border border-rose-200' 
                  : 'bg-slate-100 text-slate-700 border border-slate-200'
              }`}>
                {term.significanceLevel}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition cursor-pointer"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Title & Pronunciation */}
        <div className="space-y-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-xl sm:text-2xl font-black text-slate-950 font-serif-title">
              {term.term}
            </h3>
            <button
              onClick={handlePronounce}
              className="p-2 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-900 border border-teal-200 transition cursor-pointer flex items-center gap-1 text-xs font-bold"
              title="Listen to native pronunciation"
            >
              <Volume2 className="w-4 h-4" />
              <span className="text-[11px] hidden sm:inline">Pronounce</span>
            </button>
          </div>
          {term.pronunciationIpa && (
            <div className="text-xs font-mono text-teal-800 font-semibold">
              {term.pronunciationIpa}
            </div>
          )}
        </div>

        {/* Core Definition */}
        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-teal-800" /> Diplomatic Definition
          </div>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
            {term.definition}
          </p>
        </div>

        {/* Localized Semantic Explanation */}
        {(() => {
          const locInfo = resolveLocalizedText(lang, term.banglaMeaning, term.definition);
          return (
            <div className="p-3.5 bg-teal-50/50 rounded-2xl border border-teal-200 space-y-1">
              <div className="text-[11px] font-bold uppercase tracking-wider text-teal-900 flex items-center gap-1.5">
                <span>{currentMeta.flag}</span>
                <span>{locInfo.languageLabel}</span>
              </div>
              <p className={`text-xs sm:text-sm text-slate-900 font-medium leading-relaxed ${lang === 'bn' ? 'font-bangla' : ''}`} dir={locInfo.isRtl ? 'rtl' : 'ltr'}>
                {locInfo.text}
              </p>
            </div>
          );
        })()}

        {/* Strategic & Statecraft Context */}
        <div className="space-y-1">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-800" /> Strategic & Statecraft Application
          </div>
          <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200">
            {term.diplomaticContext}
          </p>
        </div>

        {/* Footer actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          {term.mapLocationId ? (
            <button
              onClick={handleGoToMap}
              className="w-full sm:w-auto px-4 py-2.5 bg-teal-900 hover:bg-teal-800 text-white font-bold rounded-xl text-xs transition flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-teal-200" />
              <span>Explore on Diplomatic Map 🗺️</span>
            </button>
          ) : (
            <div className="text-[11px] text-slate-500 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-teal-800" />
              <span>Diplomatic Knowledge Base</span>
            </div>
          )}

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition cursor-pointer"
          >
            Dismiss
          </button>
        </div>

      </div>
    </div>
  );
};
