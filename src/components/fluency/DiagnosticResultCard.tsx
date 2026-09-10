import React from 'react';
import type { QuizResult } from '../../types/fluencyLab';
import { WEAK_PATTERNS_MAP } from '../../services/fluencyProfileService';
import { CheckCircle, AlertTriangle, RotateCcw, Sparkles } from 'lucide-react';

interface DiagnosticResultCardProps {
  result: QuizResult;
  userAlias: string;
  onRetake: () => void;
  onExploreDrills?: () => void;
}

export const DiagnosticResultCard: React.FC<DiagnosticResultCardProps> = ({
  result,
  userAlias,
  onRetake
}) => {
  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl text-white space-y-8 animate-in fade-in duration-300">
      
      {/* Header Level Showcase */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-800">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/30">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Official Diagnostic Report Card
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Placement Level: <span className="text-emerald-400">{result.cefrLevel} — {result.levelTitle}</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            {result.levelDescription}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center p-5 bg-slate-950 rounded-2xl border border-slate-800 min-w-[150px] text-center shadow-lg">
          <div className="text-4xl font-black bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
            {result.score}/{result.totalQuestions}
          </div>
          <div className="text-xs text-slate-400 font-semibold mt-1">
            {result.percentage}% Accuracy
          </div>
          <span className="text-[10px] mt-1.5 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
            Saved to Profile
          </span>
        </div>
      </div>

      {/* Sub-Score Category Breakdown */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800/80">
          <div className="text-xs text-slate-400 font-medium">Reading & Syntax</div>
          <div className="text-xl font-bold text-white mt-1">{result.readingScore} / 4</div>
          <div className="text-[11px] text-slate-500 mt-1">Tense harmony, collocations, nouns</div>
        </div>

        <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800/80">
          <div className="text-xs text-slate-400 font-medium">Listening Discrimination</div>
          <div className="text-xl font-bold text-emerald-400 mt-1">{result.listeningScore} / 3</div>
          <div className="text-[11px] text-slate-500 mt-1">/v/ vs /b/, TH sounds, vowels</div>
        </div>

        <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800/80">
          <div className="text-xs text-slate-400 font-medium">Spoken Readiness & Stress</div>
          <div className="text-xl font-bold text-indigo-400 mt-1">{result.speakingScore} / 3</div>
          <div className="text-[11px] text-slate-500 mt-1">Syllable stress & connected speech</div>
        </div>
      </div>

      {/* Diagnosed Weak Patterns Spotlight */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            Diagnosed Weak Phonemes & Habits ({result.flaggedWeakPatterns.length})
          </h4>
          <span className="text-xs text-slate-500">Auto-assigned for Stage 2 & 3 drills</span>
        </div>

        {result.flaggedWeakPatterns.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {result.flaggedWeakPatterns.map((key) => {
              const info = WEAK_PATTERNS_MAP[key];
              if (!info) return null;
              return (
                <div key={key} className="p-4 bg-slate-950 rounded-2xl border border-amber-500/30 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-amber-400">
                    <span>{info.name}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-medium">Action Needed</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {info.banglaExplanation}
                  </p>
                  <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
                    <span className="text-slate-500 font-semibold">Common trap: </span>
                    <span className="text-slate-300 font-mono">{info.exampleTrap}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-6 bg-slate-950 rounded-2xl border border-emerald-500/30 text-center space-y-2">
            <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto" />
            <div className="text-sm font-bold text-white">Flawless Pronunciation & Syntax Foundation!</div>
            <p className="text-xs text-slate-400">You cleared all diagnostic checks without triggering standard phonetic traps.</p>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={onRetake}
          className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Retake Diagnostic Placement Quiz
        </button>

        <div className="text-xs text-slate-400 text-center sm:text-right">
          <span>Profile active for: </span>
          <span className="text-emerald-400 font-bold">{userAlias}</span>
        </div>
      </div>

    </div>
  );
};
