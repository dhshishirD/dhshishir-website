import React, { useState } from 'react';
import { Sparkles, ShieldCheck, ArrowRight, X } from 'lucide-react';
import { supabase } from '../../services/supabaseClient';

interface CloudSyncBannerProps {
  user?: any;
  contextText?: string;
  onOpenAuthModal?: () => void;
}

export const CloudSyncBanner: React.FC<CloudSyncBannerProps> = ({
  user,
  contextText = 'Save your completed lectures, quiz scores, diagnostic reports & study streaks to your permanent account.',
  onOpenAuthModal
}) => {
  const [isDismissed, setIsDismissed] = useState(false);

  // If user is already logged in, no need for the guest sync banner
  if (user || isDismissed) return null;

  const handleGoogleQuickLogin = async () => {
    try {
      await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin
        }
      });
    } catch (err) {
      console.error('Google OAuth error:', err);
      if (onOpenAuthModal) onOpenAuthModal();
    }
  };

  return (
    <div className="my-6 p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-teal-900 to-slate-900 text-white shadow-md relative overflow-hidden border border-teal-800/50">
      
      {/* Background ambient glow */}
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
        
        <div className="flex items-start gap-3.5 max-w-xl">
          <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shrink-0 mt-0.5">
            <Sparkles className="w-5 h-5 text-teal-300" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm sm:text-base font-extrabold tracking-tight text-white">
                Don't Lose Your Study Progress
              </h4>
              <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Auto-Save
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              {contextText}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
          <button
            onClick={handleGoogleQuickLogin}
            className="flex-1 sm:flex-none px-4 py-2.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 text-xs font-black flex items-center justify-center gap-2 shadow-sm hover:scale-[1.02] transition cursor-pointer"
          >
            {/* Google Icon */}
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Log in with Google</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
          </button>

          <button
            onClick={() => setIsDismissed(true)}
            className="p-2 text-slate-400 hover:text-white rounded-xl transition cursor-pointer"
            title="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
