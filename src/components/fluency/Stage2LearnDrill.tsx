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
      <div className="bg-gradient-to-r from-indigo-950/60 via-slate-900 to-emerald-950/40 border border-indigo-500/30 rounded-3xl p-6 shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider border border-indigo-500/30">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Stage 2: Learn & Drill Engine
            </div>
            <h3 className="text-2xl font-black text-white">
              Phonetic Calibration & Ear Training
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Master the exact consonant contrasts, vowel lengths, and stress shifts that give you clear, native-sounding English.
            </p>
          </div>

          {weakCount > 0 && (
            <div className="bg-slate-950/80 border border-amber-500/30 rounded-2xl p-3.5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0">
                <Target className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-amber-300">Calibrated for Your Profile:</div>
                <div className="text-[11px] text-slate-400">
                  {weakCount} weak sound traps flagged in Stage 1. Prioritize these drill sets below!
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 3 Sub-Modules Navigation Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
          <button
            onClick={() => setSubTab('ipa')}
            className={`p-4 rounded-2xl border text-left transition cursor-pointer flex items-center gap-3 ${
              subTab === 'ipa'
                ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-600/30'
                : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
              subTab === 'ipa' ? 'bg-white/20 text-white' : 'bg-slate-900 text-indigo-400'
            }`}>
              <Volume2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider opacity-80">Module A</div>
              <div className="text-sm font-black text-white">Interactive IPA Chart</div>
            </div>
          </button>

          <button
            onClick={() => setSubTab('minimal_pairs')}
            className={`p-4 rounded-2xl border text-left transition cursor-pointer flex items-center gap-3 ${
              subTab === 'minimal_pairs'
                ? 'bg-emerald-600 border-emerald-400 text-white shadow-lg shadow-emerald-600/30'
                : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
              subTab === 'minimal_pairs' ? 'bg-white/20 text-white' : 'bg-slate-900 text-emerald-400'
            }`}>
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider opacity-80">Module B</div>
              <div className="text-sm font-black text-white">70 Minimal Pairs Trainer</div>
            </div>
          </button>

          <button
            onClick={() => setSubTab('word_stress')}
            className={`p-4 rounded-2xl border text-left transition cursor-pointer flex items-center gap-3 ${
              subTab === 'word_stress'
                ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-600/30'
                : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
              subTab === 'word_stress' ? 'bg-white/20 text-white' : 'bg-slate-900 text-indigo-400'
            }`}>
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider opacity-80">Module C</div>
              <div className="text-sm font-black text-white">Word Stress Visualizer</div>
            </div>
          </button>
        </div>
      </div>

      {/* Render Active Sub-Module */}
      <div className="transition-all duration-300">
        {subTab === 'ipa' && <IpaChart />}
        {subTab === 'minimal_pairs' && <MinimalPairsTrainer />}
        {subTab === 'word_stress' && <WordStressVisualizer />}
      </div>
    </div>
  );
};
