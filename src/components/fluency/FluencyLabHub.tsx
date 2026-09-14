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

  const stages = [
    { id: 'stage1', number: 'STAGE 1', title: 'Placement', icon: CheckCircle2 },
    { id: 'stage2', number: 'STAGE 2', title: 'IPA & Drills', icon: BookOpen },
    { id: 'stage3', number: 'STAGE 3', title: 'Speak & Record', icon: Mic },
    { id: 'stage4', number: 'STAGE 4', title: 'Daily & IELTS', icon: Calendar },
    { id: 'stage5', number: 'STAGE 5', title: 'Speech Feedback', icon: Activity },
    { id: 'stage6', number: 'STAGE 6', title: 'Dashboard Loop', icon: RotateCcw },
    { id: 'stage7', number: 'STAGE 7', title: 'Certificate', icon: Award },
  ] as const;

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
          <p className="text-slate-600 text-sm sm:text-base">
            Continuous cycle: <span className="text-slate-900 font-bold">Diagnose → Learn → Drill → Speak & Record → Get Feedback → Repeat → Certify</span>.
          </p>
        </div>

        {/* User Persistent Profile Status Bar */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-teal-900 p-0.5 flex items-center justify-center shrink-0 shadow-xs">
              <div className="w-full h-full bg-teal-50 rounded-[14px] flex items-center justify-center font-black text-teal-900 text-lg">
                {profile.currentCefrLevel || 'B2'}
              </div>
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span>Profile: {profile.userAlias}</span>
                {profile.hasTakenPlacement && (
                  <span className="text-[10px] px-2 py-0.5 rounded bg-teal-50 text-teal-900 border border-teal-200 font-bold">
                    CEFR {profile.currentCefrLevel} Verified
                  </span>
                )}
              </div>
              <div className="text-xs text-slate-600 font-medium mt-0.5">
                {profile.hasTakenPlacement 
                  ? `Diagnosed Weak Areas: ${profile.flaggedWeakPatterns.length} pattern(s) identified` 
                  : 'Placement test calibrated. Select a stage below to continue your training.'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-3.5 py-2 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2 text-xs font-bold text-amber-800">
              <Flame className="w-4 h-4 text-amber-600" />
              <span>{profile.streakDays || 1} Day Streak</span>
            </div>
          </div>
        </div>

        {/* Sequential 7-Stage Navigation Bar with High Contrast Text */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
          {stages.map((st) => {
            const Icon = st.icon;
            const isActive = activeTab === st.id;
            return (
              <button
                key={st.id}
                onClick={() => setActiveTab(st.id as any)}
                className={`p-3.5 rounded-2xl border text-left transition cursor-pointer flex flex-col justify-between shadow-2xs ${
                  isActive
                    ? 'bg-teal-900 border-teal-900 text-white shadow-sm ring-2 ring-teal-200'
                    : 'bg-white border-slate-200 text-slate-800 hover:text-teal-900 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <div className={`text-[10px] font-bold tracking-wider uppercase mb-1 ${isActive ? 'text-teal-200 font-extrabold' : 'text-slate-500'}`}>
                  {st.number}
                </div>
                <div className="flex items-center gap-1.5 font-bold text-xs">
                  <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-teal-800'}`} />
                  <span className={isActive ? 'text-white font-extrabold' : 'text-slate-900 font-bold'}>{st.title}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage View Content Area */}
        <div className="transition-all duration-300">
          {activeTab === 'stage1' && (
            <DiagnosticQuiz onComplete={handleQuizCompleted} />
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
            <DashboardLoopHub onNavigateStage={(st) => setActiveTab(st as any)} />
          )}

          {activeTab === 'stage7' && (
            <ProgressCertificationSuite />
          )}
        </div>

      </div>
    </section>
  );
};
