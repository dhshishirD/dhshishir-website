import React, { useState, useEffect } from 'react';
import { DiagnosticQuiz } from './DiagnosticQuiz';
import { Stage2LearnDrill } from './Stage2LearnDrill';
import { getFluencyProfile } from '../../services/fluencyProfileService';
import type { FluencyUserProfile } from '../../types/fluencyLab';
import { Sparkles, Lock, CheckCircle2, Flame, BookOpen } from 'lucide-react';

export const FluencyLabHub: React.FC = () => {
  const [profile, setProfile] = useState<FluencyUserProfile>(getFluencyProfile());
  const [activeTab, setActiveTab] = useState<'stage1' | 'stage2' | 'stage3' | 'stage4' | 'stage5' | 'stage6'>('stage2');

  useEffect(() => {
    setProfile(getFluencyProfile());
  }, []);

  const handleQuizCompleted = () => {
    setProfile(getFluencyProfile());
  };

  return (
    <section id="fluency-lab" className="py-20 relative bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Hub Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Fluency Lab • Spoken English Hub
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Interactive Looped Learning System
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Continuous cycle: <span className="text-slate-200 font-semibold">Diagnose → Learn → Drill → Speak & Record → Get Feedback → Repeat</span>.
          </p>
        </div>

        {/* User Persistent Profile Status Bar */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950/50 to-slate-900 rounded-2xl p-5 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-emerald-500 p-0.5 flex items-center justify-center shrink-0">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-black text-emerald-400 text-base">
                {profile.currentCefrLevel || '?'}
              </div>
            </div>
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <span>Profile: {profile.userAlias}</span>
                {profile.hasTakenPlacement && (
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    CEFR {profile.currentCefrLevel} Verified
                  </span>
                )}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {profile.hasTakenPlacement 
                  ? `Diagnosed Weak Areas: ${profile.flaggedWeakPatterns.length} pattern(s) identified` 
                  : 'Placement test pending. Complete Stage 1 quiz below to calibrate your learning path.'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3.5 py-2 bg-slate-950 rounded-xl border border-slate-800 flex items-center gap-2 text-xs font-bold text-amber-400">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>{profile.streakDays} Day Streak</span>
            </div>
          </div>
        </div>

        {/* Sequential 6-Stage Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          
          {/* Stage 1 - Active */}
          <button
            onClick={() => setActiveTab('stage1')}
            className={`p-3 rounded-2xl border text-left transition cursor-pointer ${
              activeTab === 'stage1'
                ? 'bg-emerald-950/60 border-emerald-500 text-white shadow-lg shadow-emerald-950/40'
                : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            <div className="text-[10px] font-bold text-emerald-400 uppercase">Stage 1 (Live)</div>
            <div className="text-xs font-bold mt-0.5 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Placement Quiz
            </div>
          </button>

          {/* Stage 2 - Active & Unlocked */}
          <button
            onClick={() => setActiveTab('stage2')}
            className={`p-3 rounded-2xl border text-left transition cursor-pointer ${
              activeTab === 'stage2'
                ? 'bg-indigo-950/70 border-indigo-500 text-white shadow-lg shadow-indigo-950/40 ring-1 ring-indigo-400'
                : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
            }`}
          >
            <div className="text-[10px] font-bold text-indigo-400 uppercase">Stage 2 (Live)</div>
            <div className="text-xs font-bold mt-0.5 flex items-center gap-1 text-white">
              <BookOpen className="w-3.5 h-3.5 text-indigo-400" /> IPA & Minimal Pairs
            </div>
          </button>

          {/* Stage 3 */}
          <div className="p-3 rounded-2xl border border-slate-800/80 bg-slate-950/60 text-slate-500 text-left">
            <div className="text-[10px] font-bold text-slate-600 uppercase">Stage 3 (Next)</div>
            <div className="text-xs font-medium mt-0.5 flex items-center gap-1 text-slate-400">
              <Lock className="w-3 h-3 text-slate-600" /> Speak & Record
            </div>
          </div>

          {/* Stage 4 */}
          <div className="p-3 rounded-2xl border border-slate-800/80 bg-slate-950/60 text-slate-500 text-left">
            <div className="text-[10px] font-bold text-slate-600 uppercase">Stage 4</div>
            <div className="text-xs font-medium mt-0.5 flex items-center gap-1 text-slate-400">
              <Lock className="w-3 h-3 text-slate-600" /> Daily Prompts
            </div>
          </div>

          {/* Stage 5 */}
          <div className="p-3 rounded-2xl border border-slate-800/80 bg-slate-950/60 text-slate-500 text-left">
            <div className="text-[10px] font-bold text-slate-600 uppercase">Stage 5</div>
            <div className="text-xs font-medium mt-0.5 flex items-center gap-1 text-slate-400">
              <Lock className="w-3 h-3 text-slate-600" /> Speech Feedback
            </div>
          </div>

          {/* Stage 6 */}
          <div className="p-3 rounded-2xl border border-slate-800/80 bg-slate-950/60 text-slate-500 text-left">
            <div className="text-[10px] font-bold text-slate-600 uppercase">Stage 6</div>
            <div className="text-xs font-medium mt-0.5 flex items-center gap-1 text-slate-400">
              <Lock className="w-3 h-3 text-slate-600" /> Dashboard Loop
            </div>
          </div>

        </div>

        {/* Active Stage Viewport */}
        <div className="transition-all duration-300">
          {activeTab === 'stage1' && (
            <DiagnosticQuiz
              initialUserAlias={profile.userAlias}
              onComplete={handleQuizCompleted}
            />
          )}

          {activeTab === 'stage2' && (
            <Stage2LearnDrill />
          )}
        </div>

      </div>
    </section>
  );
};

