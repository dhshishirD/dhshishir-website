import React, { useState, useEffect } from 'react';
import { supabase } from '../../services/supabaseClient';
import { fetchCloudProfile, fetchCloudQuizHistory } from '../../services/cloudProfileService';
import type { CloudProfile } from '../../services/cloudProfileService';
import { WEAK_PATTERNS_MAP } from '../../services/fluencyProfileService';
import type { WeakPatternKey } from '../../types/fluencyLab';
import { Flame, Calendar, LogOut, RotateCcw, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface LearnerDashboardProps {
  user: any;
  onSignOut: () => void;
  onNavigateStage: (stage: string) => void;
}

export const LearnerDashboard: React.FC<LearnerDashboardProps> = ({
  user,
  onSignOut,
  onNavigateStage
}) => {
  const [profile, setProfile] = useState<CloudProfile | null>(null);
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    loadCloudData();
  }, [user]);

  const loadCloudData = async () => {
    if (user?.id) {
      const p = await fetchCloudProfile(user.id);
      const h = await fetchCloudQuizHistory(user.id);
      setProfile(p);
      setHistory(h);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    onSignOut();
  };

  const weakList = profile?.flagged_weak_patterns || [];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* User Profile Header Card */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5 text-center md:text-left">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-emerald-500 p-0.5 flex items-center justify-center shrink-0 shadow-lg">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-black text-2xl text-emerald-400">
                {profile?.current_cefr_level || 'B2'}
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start">
                <h2 className="text-xl sm:text-2xl font-black text-white">
                  {profile?.full_name || user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Learner Space'}
                </h2>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                  Cloud Verified Student
                </span>
              </div>
              <p className="text-xs text-slate-400">{user?.email}</p>
              <div className="text-[11px] text-slate-500 flex items-center gap-1">
                <Calendar className="w-3 h-3" /> Member since {new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="px-4 py-2.5 bg-slate-950 rounded-2xl border border-slate-800 flex items-center gap-2 text-xs font-bold text-amber-400">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>{profile?.streak_days || 1} Day Streak</span>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-2xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" /> Sign Out
            </button>
          </div>
        </div>

        {/* Level & Diagnostic Snapshot */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="p-5 bg-slate-900/80 rounded-2xl border border-slate-800 space-y-1">
            <div className="text-xs text-slate-400 font-medium">Placement CEFR Level</div>
            <div className="text-3xl font-black text-emerald-400">{profile?.current_cefr_level || 'B2'}</div>
            <div className="text-[11px] text-slate-500">Upper Intermediate Proficiency</div>
          </div>

          <div className="p-5 bg-slate-900/80 rounded-2xl border border-slate-800 space-y-1">
            <div className="text-xs text-slate-400 font-medium">Latest Score</div>
            <div className="text-3xl font-black text-white">{profile?.latest_score || 7} / 10</div>
            <div className="text-[11px] text-slate-500">70% Accuracy Benchmark</div>
          </div>

          <div className="p-5 bg-slate-900/80 rounded-2xl border border-slate-800 space-y-1">
            <div className="text-xs text-slate-400 font-medium">Active Action Targets</div>
            <div className="text-3xl font-black text-amber-400">{weakList.length || 3}</div>
            <div className="text-[11px] text-slate-500">Assigned for Stage 2 & 3 drills</div>
          </div>
        </div>

        {/* Personalized Weak Areas & Action Drills */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              Your Personal Weak Areas & Targeted Drills
            </h3>
            <span className="text-xs text-slate-400">Synced from your placement quiz</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {weakList.length > 0 ? (
              weakList.map((key) => {
                const info = WEAK_PATTERNS_MAP[key as WeakPatternKey];
                if (!info) return null;
                return (
                  <div key={key} className="p-5 bg-slate-900/90 rounded-2xl border border-amber-500/30 space-y-3">
                    <div className="flex items-center justify-between text-xs font-bold text-amber-400">
                      <span>{info.name}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">Target Assigned</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {info.banglaExplanation}
                    </p>
                    <div className="text-[11px] text-slate-400 bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                      <span className="text-slate-500 font-semibold">Trap: </span>
                      <span className="text-slate-300 font-mono">{info.exampleTrap}</span>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="p-6 bg-slate-900 rounded-2xl border border-emerald-500/30 text-center space-y-2 col-span-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <div className="text-sm font-bold text-white">No Phonetic Flaws Flagged!</div>
                <p className="text-xs text-slate-400">You cleared placement checks with clean articulation.</p>
              </div>
            )}
          </div>
        </div>

        {/* Placement Quiz History Log */}
        <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Diagnostic History & Cloud Records
            </h3>
            <button
              onClick={() => onNavigateStage('stage1')}
              className="text-xs text-indigo-400 hover:text-indigo-300 font-bold flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Retake Placement Quiz
            </button>
          </div>

          {history.length > 0 ? (
            <div className="space-y-2.5">
              {history.map((record, idx) => (
                <div key={idx} className="p-3.5 bg-slate-950 rounded-xl border border-slate-800/80 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-white flex items-center gap-2">
                      <span>Placement Score: {record.score}/{record.total_questions} ({record.percentage}%)</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-bold">
                        CEFR {record.cefr_level}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      Reading: {record.reading_score} • Listening: {record.listening_score} • Speaking: {record.speaking_score}
                    </div>
                  </div>
                  <div className="text-slate-500 text-[11px]">
                    {new Date(record.completed_at).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 bg-slate-950 rounded-xl text-center text-xs text-slate-500">
              No previous test history found in cloud. Take the Stage 1 quiz to record your baseline score.
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
