import React, { useEffect, useState } from 'react';
import { FluencyLabHub } from '../fluency/FluencyLabHub';
import { ArrowLeft, Sparkles, Share2 } from 'lucide-react';
import { CloudSyncBanner } from '../common/CloudSyncBanner';
import { ShareModal } from '../common/ShareModal';

interface FluencyLabPageProps {
  user?: any;
  onNavigateHome: () => void;
  onOpenAuthModal?: () => void;
}

export const FluencyLabPage: React.FC<FluencyLabPageProps> = ({ 
  user,
  onNavigateHome,
  onOpenAuthModal
}) => {
  const [isShareOpen, setIsShareOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Fluency Lab | Interactive Looped English Mastery System | DH Shishir';
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 gap-3">
          <button
            onClick={onNavigateHome}
            className="text-xs text-teal-800 hover:text-teal-900 font-bold inline-flex items-center gap-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Main Homepage (dhshishir.com)
          </button>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsShareOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-900 bg-teal-50 hover:bg-teal-100 border border-teal-200 px-3 py-1 rounded-full transition cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-teal-800" />
              <span>Share Fluency Lab</span>
            </button>
            <div className="hidden sm:flex items-center gap-1.5 bg-white border border-teal-200 text-teal-900 text-xs px-3 py-1 rounded-full font-bold">
              <Sparkles className="w-3.5 h-3.5 text-teal-800" /> Fluency Lab Suite Active
            </div>
          </div>
        </div>

        {/* Cloud Sync & Auto-Save Reminder */}
        <CloudSyncBanner
          user={user}
          contextText="Log in with Google in 1-click to auto-save your CEFR diagnostic scores, phonetic shadowing loops & daily study streak."
          onOpenAuthModal={onOpenAuthModal}
        />
      </div>
      <FluencyLabHub />

      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        title="Fluency Lab: Looped English Mastery System by Daloyar Hassan Shishir"
        url="https://dhshishir.com/fluency-lab"
        summary="A neuro-linguistic, 3-stage iterative English speaking system with CEFR diagnostic tests, phonetic shadowing, and habit loop tracking."
        category="English Mastery"
      />
    </div>
  );
};
