import React, { useState, useEffect } from 'react';
import { DiagnosticQuiz } from './DiagnosticQuiz';
import { Stage2LearnDrill } from './Stage2LearnDrill';
import { SpeakAndRecordTrainer } from './SpeakAndRecordTrainer';
import { DailyPromptsHub } from './DailyPromptsHub';
import { SpeechFeedbackEngine } from './SpeechFeedbackEngine';
import { DashboardLoopHub } from './DashboardLoopHub';
import { ProgressCertificationSuite } from './ProgressCertificationSuite';
import { getFluencyProfile } from '../../services/fluencyProfileService';
import type { FluencyUserProfile } from '../../types/fluencyLab';
import { 
  Sparkles, 
  CheckCircle2, 
  Flame, 
  BookOpen, 
  Mic, 
  Calendar, 
  Activity, 
  RotateCcw, 
  Award 
} from 'lucide-react';

export const FluencyLabHub: React.FC = () => {
  const [profile, setProfile] = useState<FluencyUserProfile>(getFluencyProfile());
  const [activeTab, setActiveTab] = useState<'stage1' | 'stage2' | 'stage3' | 'stage4' | 'stage5' | 'stage6' | 'stage7'>('stage6');

  useEffect(() => {
    setProfile(getFluencyProfile());
  }, [activeTab]);

  const handleQuizCompleted = () => {
    setProfile(getFluencyProfile());
    setActiveTab('stage6');
  };

  const handleNavigateStage = (stage: string) => {
    if (['stage1', 'stage2', 'stage3', 'stage4', 'stage5', 'stage6', 'stage7'].includes(stage)) {
      setActiveTab(stage as 'stage1' | 'stage2' | 'stage3' | 'stage4' | 'stage5' | 'stage6' | 'stage7');
    }
  };

  return (
    <section id="fluency-lab" className="py-20 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Hub Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-800" /> Fluency Lab • Spoken English Hub
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Interactive Looped Learning System
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Continuous cycle: <span className="text-slate-800 font-semibold">Diagnose → Learn → Drill → Speak & Record → Get Feedback → Repeat → Certify</span>.
          </p>
        </div>

        {/* User Persistent Profile Status Bar */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 border border-slate-200 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-teal-900 p-0.5 flex items-center justify-center shrink-0">
              <div className="w-full h-full bg-teal-50 rounded-[14px] flex items-center justify-center font-black text-teal-900 text-base">
                {profile.currentCefrLevel || '?'}
              </div>
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span>Profile: {profile.userAlias}</span>
                {profile.hasTakenPlacement && (
                  <span className="text-[10px] px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200">
                    CEFR {profile.currentCefrLevel} Verified
                  </span>
                )}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {profile.hasTakenPlacement 
                  ? `Diagnosed Weak Areas: ${profile.flaggedWeakPatterns.length} pattern(s) identified` 
                  : 'Placement test pending. Complete Stage 1 quiz below to calibrate your learning path.'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3.5 py-2 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2 text-xs font-bold text-amber-400">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>{profile.streakDays} Day Streak</span>
            </div>
          </div>
        </div>

        {/* Sequential 7-Stage Navigation Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          
          {/* Stage 1 */}
          <button
            onClick={() => setActiveTab('stage1')}
            className={`p-3 rounded-2xl border text-left transition cursor-pointer ${
              activeTab === 'stage1' ? 'bg-teal-900 text-white shadow-xs font-bold ring-2 ring-teal-200' : 'bg-white text-slate-700 hover:text-teal-900 hover:bg-slate-50 border border-slate-200 font-medium'
            }`}
          >
            <div className="text-[10px] font-bold text-teal-800 uppercase">Stage 1</div>
            <div className="text-xs font-bold mt-0.5 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-800 shrink-0" /> Placement
            </div>
          </button>

          {/* Stage 2 */}
          <button
            onClick={() => setActiveTab('stage2')}
            className={`p-3 rounded-2xl border text-left transition cursor-pointer ${
              activeTab === 'stage2' ? 'bg-teal-900 text-white shadow-xs font-bold ring-2 ring-teal-200' : 'bg-white text-slate-700 hover:text-teal-900 hover:bg-slate-50 border border-slate-200 font-medium'
            }`}
          >
            <div className="text-[10px] font-bold text-teal-800 uppercase">Stage 2</div>
            <div className="text-xs font-bold mt-0.5 flex items-center gap-1 text-slate-900">
              <BookOpen className="w-3.5 h-3.5 text-teal-800 shrink-0" /> IPA & Drills
            </div>
          </button>

          {/* Stage 3 */}
          <button
            onClick={() => setActiveTab('stage3')}
            className={`p-3 rounded-2xl border text-left transition cursor-pointer ${
              activeTab === 'stage3' ? 'bg-teal-900 text-white shadow-xs font-bold ring-2 ring-teal-200' : 'bg-white text-slate-700 hover:text-teal-900 hover:bg-slate-50 border border-slate-200 font-medium'
            }`}
          >
            <div className="text-[10px] font-bold text-purple-400 uppercase">Stage 3</div>
            <div className="text-xs font-bold mt-0.5 flex items-center gap-1 text-slate-900">
              <Mic className="w-3.5 h-3.5 text-purple-400 shrink-0" /> Speak & Record
            </div>
          </button>

          {/* Stage 4 */}
          <button
            onClick={() => setActiveTab('stage4')}
            className={`p-3 rounded-2xl border text-left transition cursor-pointer ${
              activeTab === 'stage4' ? 'bg-teal-900 text-white shadow-xs font-bold ring-2 ring-teal-200' : 'bg-white text-slate-700 hover:text-teal-900 hover:bg-slate-50 border border-slate-200 font-medium'
            }`}
          >
            <div className="text-[10px] font-bold text-amber-400 uppercase">Stage 4</div>
            <div className="text-xs font-bold mt-0.5 flex items-center gap-1 text-slate-900">
              <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" /> Daily & IELTS
            </div>
          </button>

          {/* Stage 5 */}
          <button
            onClick={() => setActiveTab('stage5')}
            className={`p-3 rounded-2xl border text-left transition cursor-pointer ${
              activeTab === 'stage5' ? 'bg-teal-900 text-white shadow-xs font-bold ring-2 ring-teal-200' : 'bg-white text-slate-700 hover:text-teal-900 hover:bg-slate-50 border border-slate-200 font-medium'
            }`}
          >
            <div className="text-[10px] font-bold text-teal-800 uppercase">Stage 5</div>
            <div className="text-xs font-bold mt-0.5 flex items-center gap-1 text-slate-900">
              <Activity className="w-3.5 h-3.5 text-teal-800 shrink-0" /> Speech Feedback
            </div>
          </button>

          {/* Stage 6 */}
          <button
            onClick={() => setActiveTab('stage6')}
            className={`p-3 rounded-2xl border text-left transition cursor-pointer ${
              activeTab === 'stage6' ? 'bg-teal-900 text-white shadow-xs font-bold ring-2 ring-teal-200' : 'bg-white text-slate-700 hover:text-teal-900 hover:bg-slate-50 border border-slate-200 font-medium'
            }`}
          >
            <div className="text-[10px] font-bold text-teal-900 uppercase">Stage 6</div>
            <div className="text-xs font-bold mt-0.5 flex items-center gap-1 text-slate-900">
              <RotateCcw className="w-3.5 h-3.5 text-teal-800 shrink-0" /> Dashboard Loop
            </div>
          </button>

          {/* Stage 7 */}
          <button
            onClick={() => setActiveTab('stage7')}
            className={`p-3 rounded-2xl border text-left transition cursor-pointer ${
              activeTab === 'stage7' ? 'bg-teal-900 text-white shadow-xs font-bold ring-2 ring-teal-200' : 'bg-white text-slate-700 hover:text-teal-900 hover:bg-slate-50 border border-slate-200 font-medium'
            }`}
          >
            <div className="text-[10px] font-bold text-teal-900 uppercase">Stage 7</div>
            <div className="text-xs font-bold mt-0.5 flex items-center gap-1 text-slate-900">
              <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" /> Certificate
            </div>
          </button>

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

          {activeTab === 'stage3' && (
            <SpeakAndRecordTrainer />
          )}

          {activeTab === 'stage4' && (
            <DailyPromptsHub />
          )}

          {activeTab === 'stage5' && (
            <SpeechFeedbackEngine />
          )}

          {activeTab === 'stage6' && (
            <DashboardLoopHub onNavigateStage={handleNavigateStage} />
          )}

          {activeTab === 'stage7' && (
            <ProgressCertificationSuite />
          )}
        </div>

      </div>
    </section>
  );
};
