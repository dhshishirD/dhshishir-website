import React, { useState, useEffect } from 'react';
import { 
  getFluencyProfile, 
  WEAK_PATTERNS_MAP 
} from '../../services/fluencyProfileService';
import type { FluencyUserProfile, WeakPatternKey } from '../../types/fluencyLab';
import { 
  RotateCcw, 
  Sparkles, 
  Flame, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  Compass, 
  BookOpen, 
  Mic, 
  Calendar, 
  Activity,
  Target
} from 'lucide-react';

interface DashboardLoopHubProps {
  onNavigateStage: (stage: string) => void;
}

export const DashboardLoopHub: React.FC<DashboardLoopHubProps> = ({ onNavigateStage }) => {
  const [profile, setProfile] = useState<FluencyUserProfile>(getFluencyProfile());

  useEffect(() => {
    setProfile(getFluencyProfile());
  }, []);

  const weakList = profile.flaggedWeakPatterns || [];
  const hasTakenTest = profile.hasTakenPlacement && Boolean(profile.currentCefrLevel);
  const historyList = profile.history || [];
  const latestScore = profile.latestScore || 0;
  const initialScore = historyList.length > 0 ? historyList[historyList.length - 1].score : latestScore;
  const progressDelta = historyList.length > 1 ? latestScore - initialScore : 0;

  // Streak Milestones
  const currentStreak = profile.streakDays || 1;
  const milestones = [
    { days: 3, label: '3-Day Bronze Habit' },
    { days: 7, label: '7-Day Silver Fluency' },
    { days: 14, label: '14-Day Gold Discipline' },
    { days: 30, label: '30-Day Diamond Master' }
  ];

  const nextMilestone = milestones.find(m => m.days > currentStreak) || milestones[milestones.length - 1];
  const prevMilestoneDays = milestones.filter(m => m.days <= currentStreak).pop()?.days || 0;
  const streakProgressPercent = Math.min(100, Math.round(((currentStreak - prevMilestoneDays) / (nextMilestone.days - prevMilestoneDays || 1)) * 100));

  return (
    <div className="space-y-8 max-w-5xl mx-auto">

      {/* Header Banner */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-900 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-teal-800" /> Stage 6 • Continuous Learning Loop
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Personal Diagnostic Dashboard & Loop
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
            Close the loop on your pronunciation flaws. Track your recalibrated CEFR trajectory, launch targeted drills for flagged sound traps, and maintain your practice momentum.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-4 py-2.5 bg-white rounded-2xl border border-slate-200 flex items-center gap-2 text-xs font-bold text-amber-400 shadow-inner">
            <Flame className="w-4 h-4 text-amber-400" />
            <span>{currentStreak} Day Streak</span>
          </div>
        </div>
      </div>

      {/* 6-Stage Loop Visualizer Progression Map */}
      <div className="p-6 bg-white rounded-3xl border border-slate-200 space-y-4 shadow-xl">
        <div className="flex items-center justify-between">
          <div className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <RotateCcw className="w-4 h-4 text-teal-800" />
            Interactive Looped Learning Cycle
          </div>
          <span className="text-[11px] text-slate-600 font-medium">Click any node to navigate</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          
          <button
            onClick={() => onNavigateStage('stage1')}
            className="p-3.5 bg-white hover:bg-slate-50 rounded-2xl border border-teal-200 text-left space-y-1 transition cursor-pointer"
          >
            <div className="text-[10px] font-bold text-teal-800">STAGE 1</div>
            <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-800 shrink-0" />
              <span>Diagnose</span>
            </div>
            <div className="text-[10px] text-slate-600">Placement Quiz</div>
          </button>

          <button
            onClick={() => onNavigateStage('stage2')}
            className="p-3.5 bg-white hover:bg-slate-50 rounded-2xl border border-teal-200 text-left space-y-1 transition cursor-pointer"
          >
            <div className="text-[10px] font-bold text-teal-800">STAGE 2</div>
            <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-teal-800 shrink-0" />
              <span>Learn & Drill</span>
            </div>
            <div className="text-[10px] text-slate-600">IPA & Minimal Pairs</div>
          </button>

          <button
            onClick={() => onNavigateStage('stage3')}
            className="p-3.5 bg-white hover:bg-slate-50 rounded-2xl border border-purple-500/40 text-left space-y-1 transition cursor-pointer"
          >
            <div className="text-[10px] font-bold text-teal-800">STAGE 3</div>
            <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
              <Mic className="w-3.5 h-3.5 text-teal-800 shrink-0" />
              <span>Speak & Take</span>
            </div>
            <div className="text-[10px] text-slate-600">Audio Comparison</div>
          </button>

          <button
            onClick={() => onNavigateStage('stage4')}
            className="p-3.5 bg-white hover:bg-slate-50 rounded-2xl border border-amber-500/40 text-left space-y-1 transition cursor-pointer"
          >
            <div className="text-[10px] font-bold text-amber-400">STAGE 4</div>
            <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Daily Practice</span>
            </div>
            <div className="text-[10px] text-slate-600">Prompts & IELTS</div>
          </button>

          <button
            onClick={() => onNavigateStage('stage5')}
            className="p-3.5 bg-white hover:bg-slate-50 rounded-2xl border border-teal-200 text-left space-y-1 transition cursor-pointer"
          >
            <div className="text-[10px] font-bold text-teal-800">STAGE 5</div>
            <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
              <Activity className="w-3.5 h-3.5 text-teal-800 shrink-0" />
              <span>Get Feedback</span>
            </div>
            <div className="text-[10px] text-slate-600">Speech Engine</div>
          </button>

          <div className="p-3.5 bg-white border border-slate-200 rounded-2xl border border-indigo-400 ring-1 ring-indigo-400/40 text-left space-y-1 shadow-lg">
            <div className="text-[10px] font-bold text-teal-900">STAGE 6</div>
            <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
              <RotateCcw className="w-3.5 h-3.5 text-teal-900 shrink-0" />
              <span>Repeat Loop</span>
            </div>
            <div className="text-[10px] text-teal-900 font-medium">Active Dashboard</div>
          </div>

        </div>
      </div>

      {/* Trajectory & Metric Snapshot Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        
        {/* CEFR Level Card */}
        <div className="p-6 bg-white rounded-3xl border border-slate-200 space-y-2">
          <div className="text-xs text-slate-600 font-medium">Verified CEFR Level</div>
          <div className="text-3xl font-black text-teal-800 flex items-center gap-2">
            <span>{hasTakenTest ? profile.currentCefrLevel : 'Pending'}</span>
            {hasTakenTest && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-50 text-teal-900 border border-teal-200">
                Calibrated
              </span>
            )}
          </div>
          <div className="text-xs text-slate-600">
            {hasTakenTest ? 'Standardized European Framework' : 'Take Stage 1 Quiz to calibrate'}
          </div>
        </div>

        {/* Accuracy Benchmark Delta */}
        <div className="p-6 bg-white rounded-3xl border border-slate-200 space-y-2">
          <div className="text-xs text-slate-600 font-medium">Accuracy Benchmark</div>
          <div className="text-3xl font-black text-slate-900 flex items-center gap-2">
            <span>{hasTakenTest ? `${latestScore} / 10` : '—'}</span>
            {progressDelta > 0 && (
              <span className="text-xs text-teal-800 font-bold flex items-center gap-0.5">
                <TrendingUp className="w-3.5 h-3.5" /> +{progressDelta} pts
              </span>
            )}
          </div>
          <div className="text-xs text-slate-600">
            {hasTakenTest ? `${(latestScore / 10) * 100}% Diagnostic accuracy` : 'No test score recorded'}
          </div>
        </div>

        {/* Active Weak Traps */}
        <div className="p-6 bg-white rounded-3xl border border-slate-200 space-y-2">
          <div className="text-xs text-slate-600 font-medium">Active Action Targets</div>
          <div className="text-3xl font-black text-amber-400 flex items-center gap-2">
            <span>{weakList.length}</span>
            <span className="text-xs text-slate-600 font-normal">sound patterns</span>
          </div>
          <div className="text-xs text-slate-600">
            Assigned for Stage 2 & Stage 3 calibration
          </div>
        </div>

      </div>

      {/* Dynamic Weak-Area Drill Launcher & Targeted Remediations */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Target className="w-4 h-4 text-amber-400" />
            Your Targeted Action Drills (Direct Stage Jump)
          </h3>
          <span className="text-xs text-slate-600">Auto-routed from your diagnosis</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {weakList.length > 0 ? (
            weakList.map((key) => {
              const info = WEAK_PATTERNS_MAP[key as WeakPatternKey];
              if (!info) return null;
              return (
                <div key={key} className="p-5 bg-white rounded-2xl border border-amber-500/30 space-y-3 shadow-lg flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-amber-400">
                      <span>{info.name}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-teal-50 text-amber-300 border border-amber-500/30">
                        Priority Target
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-bangla">
                      {info.banglaExplanation}
                    </p>
                    <div className="text-[11px] text-slate-600 bg-white p-2.5 rounded-xl border border-slate-200 font-mono">
                      Trap Example: {info.exampleTrap}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                    <button
                      onClick={() => onNavigateStage('stage2')}
                      className="text-xs text-teal-800 hover:text-teal-900 font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <span>Drill in Stage 2</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onNavigateStage('stage3')}
                      className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-slate-900 rounded-xl text-xs font-bold flex items-center gap-1 transition cursor-pointer"
                    >
                      <Mic className="w-3 h-3" />
                      <span>Record in Stage 3</span>
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="p-6 bg-white rounded-2xl border border-teal-200 text-center space-y-2 col-span-2">
              <CheckCircle2 className="w-8 h-8 text-teal-800 mx-auto" />
              <div className="text-sm font-bold text-slate-900">No Phonetic Flaws Flagged!</div>
              <p className="text-xs text-slate-600">You cleared placement checks with 100% clean articulation.</p>
            </div>
          )}
        </div>
      </div>

      {/* Streak Milestone Rewards & Habit Tracker */}
      <div className="p-6 bg-white rounded-3xl border border-slate-200 space-y-5 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
          <div>
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              Habit Momentum & Streak Milestones
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Consistent daily practice builds automatic neural pathways for clean pronunciation.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-amber-400 bg-teal-50 px-3 py-1 rounded-xl border border-amber-500/30">
              Next Goal: {nextMilestone.days} Days ({nextMilestone.label})
            </span>
          </div>
        </div>

        {/* Milestone Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-600 font-medium">
            <span>{currentStreak} Days Completed</span>
            <span>{nextMilestone.days - currentStreak} Days to {nextMilestone.label}</span>
          </div>
          <div className="w-full bg-white h-2.5 rounded-full overflow-hidden border border-slate-200">
            <div
              className="bg-teal-900 hover:bg-teal-800 h-full transition-all duration-300"
              style={{ width: `${streakProgressPercent}%` }}
            />
          </div>
        </div>

        {/* Milestone Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          {milestones.map((m, idx) => {
            const isUnlocked = currentStreak >= m.days;
            return (
              <div
                key={idx}
                className={`p-3.5 rounded-2xl border text-center space-y-1.5 transition ${
                  isUnlocked
                    ? 'bg-white border-amber-500/40 text-slate-900 shadow-lg'
                    : 'bg-white border-slate-200 text-slate-600 opacity-60'
                }`}
              >
                <div className="text-2xl">{isUnlocked ? '🏆' : '🔒'}</div>
                <div className="text-xs font-bold text-slate-900">{m.days} Days</div>
                <div className="text-[10px] text-slate-600">{m.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Placement Quiz Recalibration Action */}
      <div className="p-6 bg-white border border-slate-200 rounded-3xl border border-teal-200 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-2xl">
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-sm font-bold text-slate-900 flex items-center justify-center sm:justify-start gap-2">
            <Sparkles className="w-4 h-4 text-teal-800" />
            Recalibrate Your Diagnostic Benchmark
          </div>
          <p className="text-xs text-slate-600 max-w-lg">
            Ready to test if your weak areas have resolved? Retake the Stage 1 placement quiz to measure your updated CEFR score and accuracy gains.
          </p>
        </div>

        <button
          onClick={() => onNavigateStage('stage1')}
          className="px-6 py-3 bg-white border border-slate-200 hover:from-emerald-500 hover:to-indigo-500 text-slate-900 rounded-2xl text-xs font-bold flex items-center gap-2 shadow-lg shadow-xs transition transform active:scale-95 cursor-pointer whitespace-nowrap"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Retake Placement Quiz</span>
        </button>
      </div>

    </div>
  );
};
