import React, { useState, useEffect } from 'react';
import { 
  Target, Sparkles, ArrowRight, UserPlus, LogIn, 
  CheckCircle2, Flame, Clock, Award, X, ChevronRight, Zap,
  LayoutDashboard, ShieldCheck
} from 'lucide-react';
import { supabase } from '../../services/supabaseClient';
import { getUnifiedMemberProfile } from '../../services/unifiedMemberService';
import type { UnifiedMemberProfile } from '../../services/unifiedMemberService';
import { ALL_120_DAYS_DATA } from '../../data/ieltsDailyDrillData';
import type { DailyDrillAction } from '../../data/ieltsDailyDrillData';

interface DailyMissionNotificationProps {
  user?: any;
  onOpenAuthModal?: () => void;
  onLaunchDayDrill?: (dayNumber: number) => void;
  onNavigateDashboard?: () => void;
}

export const DailyMissionNotification: React.FC<DailyMissionNotificationProps> = ({
  user,
  onOpenAuthModal,
  onLaunchDayDrill,
  onNavigateDashboard
}) => {
  const [profile, setProfile] = useState<UnifiedMemberProfile>(getUnifiedMemberProfile());
  const [isDismissed, setIsDismissed] = useState(false);
  const [signingInWithGoogle, setSigningInWithGoogle] = useState(false);

  useEffect(() => {
    const handleUpdate = (e: any) => {
      if (e.detail) setProfile(e.detail);
      else setProfile(getUnifiedMemberProfile());
    };

    window.addEventListener('dhshishir-telemetry-updated', handleUpdate);
    return () => {
      window.removeEventListener('dhshishir-telemetry-updated', handleUpdate);
    };
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      setSigningInWithGoogle(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin
        }
      });
      if (error) throw error;
    } catch (err) {
      console.error('Failed to sign in with Google:', err);
      if (onOpenAuthModal) onOpenAuthModal();
    } finally {
      setSigningInWithGoogle(false);
    }
  };

  // Determine user's next active day (first day not checked off)
  const completedDaysSet = new Set(profile.ieltsRoadmapDays || []);
  let nextActiveDayNumber = 1;
  for (let d = 1; d <= 120; d++) {
    if (!completedDaysSet.has(d)) {
      nextActiveDayNumber = d;
      break;
    }
  }

  const currentDayAction = ALL_120_DAYS_DATA.find(d => d.day === nextActiveDayNumber) || ALL_120_DAYS_DATA[0];
  const unlockedBadgesCount = (profile.unlockedBadges || []).length;
  const streakCount = profile.streakDays || 1;

  if (isDismissed) return null;

  return (
    <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-teal-900 text-white rounded-3xl p-4 sm:p-5 border border-teal-500/30 shadow-xl space-y-3 relative overflow-hidden transition-all duration-300">
      
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
        
        {/* Left: Mission Statement & Today's Skill Focus */}
        <div className="flex items-start sm:items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0 shadow-xs">
            <Target className="w-5 h-5 animate-pulse" />
          </div>

          <div className="space-y-0.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-400 text-slate-950">
                Today's Action Mission
              </span>
              <span className="text-xs font-black text-teal-200">
                Day {nextActiveDayNumber} of 120 • {currentDayAction.focusSkill} Focus
              </span>
              <span className="text-[10px] text-slate-400 flex items-center gap-1 font-mono">
                <Clock className="w-3 h-3 text-amber-300" /> {currentDayAction.estimatedMinutes} mins
              </span>
              {user && (
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Auto-Sync Active
                </span>
              )}
            </div>
            
            <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-1">
              {currentDayAction.title}
            </h4>
          </div>
        </div>

        {/* Right: Actions Cluster */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          
          {/* Launch Day Drill Button */}
          {onLaunchDayDrill && (
            <button
              onClick={() => onLaunchDayDrill(nextActiveDayNumber)}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl shadow-md transition flex items-center gap-1.5 cursor-pointer"
            >
              <Zap className="w-3.5 h-3.5 fill-slate-950" />
              <span>Start Day {nextActiveDayNumber} Drill</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}

          {/* If user is logged in: Dashboard Quick Link */}
          {user && onNavigateDashboard && (
            <button
              onClick={onNavigateDashboard}
              className="px-3.5 py-2 bg-white/10 hover:bg-white/20 text-teal-200 border border-teal-400/30 font-bold text-xs rounded-xl transition flex items-center gap-1.5 cursor-pointer"
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-teal-300" />
              <span>My Score Dashboard ({unlockedBadgesCount}/16 Badges)</span>
            </button>
          )}

          {/* Cloud Sign Up / Sync Value Prompt (for Guests) */}
          {!user && (
            <>
              <button
                onClick={handleGoogleSignIn}
                disabled={signingInWithGoogle}
                className="px-3.5 py-2 bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs rounded-xl transition flex items-center gap-2 cursor-pointer shadow-sm"
                title="Log in with Google to auto-sync scores to personal dashboard"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span>{signingInWithGoogle ? 'Connecting...' : 'Sync via Google'}</span>
              </button>

              {onOpenAuthModal && (
                <button
                  onClick={onOpenAuthModal}
                  className="px-3 py-2 bg-white/10 hover:bg-white/20 text-teal-200 border border-teal-400/30 font-bold text-xs rounded-xl transition flex items-center gap-1.5 cursor-pointer"
                  title="Sign in with Email"
                >
                  <LogIn className="w-3.5 h-3.5 text-amber-300" />
                  <span>Email Sign In</span>
                </button>
              )}
            </>
          )}

          {/* Dismiss Button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg transition"
            title="Dismiss notification"
          >
            <X className="w-4 h-4" />
          </button>

        </div>

      </div>

      {/* Cloud Sync Benefit Bar (Visible for guests) */}
      {!user && (
        <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-300">
          <div className="flex items-center gap-1.5 text-amber-300 font-medium">
            <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
            <span><strong>Personal Dashboard:</strong> Login via Google to auto-sync your test scores, track daily streaks & unlock 16 verifiable skill badges.</span>
          </div>
          <button
            onClick={handleGoogleSignIn}
            className="text-amber-400 hover:text-amber-300 font-bold underline cursor-pointer"
          >
            Login via Google & Auto-Sync Dashboard →
          </button>
        </div>
      )}

    </div>
  );
};
