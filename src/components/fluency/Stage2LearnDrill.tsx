import React, { useState } from 'react';
import { IpaChart } from './IpaChart';
import { MinimalPairsTrainer } from './MinimalPairsTrainer';
import { WordStressVisualizer } from './WordStressVisualizer';
import { getFluencyProfile } from '../../services/fluencyProfileService';
import { Layers, Sparkles, BookOpen, Volume2, Target } from 'lucide-react';

export const Stage2LearnDrill: React.FC = () => {
  const [subTab, setSubTab] = useState<'ipa' | 'minimal_pairs' | 'word_stress'>('minimal_pairs');
  const profile = getFluencyProfile();
  const weakCount = profile.flaggedWeakPatterns.length;

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Stage 2 Header & Adaptive Recommendation */}
      <div className="bg-white border border-teal-200 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-900 text-xs font-bold uppercase tracking-wider border border-teal-200">
              <Sparkles className="w-3.5 h-3.5 text-teal-800" /> Stage 2: Learn & Drill Engine
            </div>
            <h3 className="text-2xl font-black text-slate-900 font-serif-title">
              Phonetic Calibration & Ear Training
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl font-normal">
              Master the exact consonant contrasts, vowel lengths, and stress shifts that give you clear, native-sounding English.
            </p>
          </div>

          {weakCount > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3.5 flex items-center gap-3 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs shrink-0">
                <Target className="w-5 h-5 text-amber-700" />
              </div>
              <div>
                <div className="text-xs font-bold text-amber-900">Calibrated for Your Profile:</div>
                <div className="text-[11px] text-amber-800 font-medium">
                  {weakCount} weak sound traps flagged in Stage 1. Prioritize these drill sets below!
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 3 Sub-Modules Navigation Tabs with High Contrast */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
          <button
            onClick={() => setSubTab('ipa')}
            className={`p-4 rounded-2xl border text-left transition cursor-pointer flex items-center gap-3 shadow-2xs ${
              subTab === 'ipa'
                ? 'bg-teal-900 border-teal-900 text-white shadow-sm'
                : 'bg-white border-slate-200 text-slate-800 hover:text-teal-900 hover:bg-slate-50'
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
              subTab === 'ipa' ? 'bg-teal-800 text-white' : 'bg-teal-50 text-teal-900'
            }`}>
              <Volume2 className="w-5 h-5" />
            </div>
            <div>
              <div className={`text-[10px] font-bold uppercase tracking-wider ${subTab === 'ipa' ? 'text-teal-200' : 'text-slate-600'}`}>Module A</div>
              <div className={`text-sm font-bold ${subTab === 'ipa' ? 'text-white' : 'text-slate-900'}`}>Interactive IPA Chart</div>
            </div>
          </button>

          <button
            onClick={() => setSubTab('minimal_pairs')}
            className={`p-4 rounded-2xl border text-left transition cursor-pointer flex items-center gap-3 shadow-2xs ${
              subTab === 'minimal_pairs'
                ? 'bg-teal-900 border-teal-900 text-white shadow-sm'
                : 'bg-white border-slate-200 text-slate-800 hover:text-teal-900 hover:bg-slate-50'
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
              subTab === 'minimal_pairs' ? 'bg-teal-800 text-white' : 'bg-teal-50 text-teal-900'
            }`}>
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className={`text-[10px] font-bold uppercase tracking-wider ${subTab === 'minimal_pairs' ? 'text-teal-200' : 'text-slate-600'}`}>Module B</div>
              <div className={`text-sm font-bold ${subTab === 'minimal_pairs' ? 'text-white' : 'text-slate-900'}`}>70 Minimal Pairs Trainer</div>
            </div>
          </button>

          <button
            onClick={() => setSubTab('word_stress')}
            className={`p-4 rounded-2xl border text-left transition cursor-pointer flex items-center gap-3 shadow-2xs ${
              subTab === 'word_stress'
                ? 'bg-teal-900 border-teal-900 text-white shadow-sm'
                : 'bg-white border-slate-200 text-slate-800 hover:text-teal-900 hover:bg-slate-50'
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
              subTab === 'word_stress' ? 'bg-teal-800 text-white' : 'bg-teal-50 text-teal-900'
            }`}>
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className={`text-[10px] font-bold uppercase tracking-wider ${subTab === 'word_stress' ? 'text-teal-200' : 'text-slate-600'}`}>Module C</div>
              <div className={`text-sm font-bold ${subTab === 'word_stress' ? 'text-white' : 'text-slate-900'}`}>Word Stress Visualizer</div>
            </div>
          </button>
        </div>
      </div>

      {/* Sub-Module Active View */}
      {subTab === 'ipa' && <IpaChart />}
      {subTab === 'minimal_pairs' && <MinimalPairsTrainer />}
      {subTab === 'word_stress' && <WordStressVisualizer />}
    </div>
  );
};
