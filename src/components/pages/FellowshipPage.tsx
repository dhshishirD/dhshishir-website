import React, { useState } from 'react';
import { IrFellowshipHub } from '../irAcademy/IrFellowshipHub';
import { ArrowLeft, GraduationCap, Share2 } from 'lucide-react';
import { CloudSyncBanner } from '../common/CloudSyncBanner';
import { ShareModal } from '../common/ShareModal';

interface FellowshipPageProps {
  user?: any;
  onNavigateHome: () => void;
  onOpenAuthModal?: () => void;
}

export const FellowshipPage: React.FC<FellowshipPageProps> = ({ 
  user,
  onNavigateHome,
  onOpenAuthModal
}) => {
  const [isShareOpen, setIsShareOpen] = useState(false);

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      {/* Top Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 px-3.5 py-2 rounded-xl transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsShareOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-900 bg-teal-50 hover:bg-teal-100 border border-teal-200 px-3.5 py-2 rounded-xl transition cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-teal-800" />
              <span>Share & Refer Fellowship</span>
            </button>

            <div className="hidden sm:flex items-center gap-2 text-xs text-teal-800 font-mono bg-white px-3 py-2 rounded-xl border border-slate-200">
              <GraduationCap className="w-4 h-4" />
              <span>OMF-IRSS</span>
            </div>
          </div>
        </div>

        {/* Cloud Sync & Google Login Auto-Save Reminder */}
        <CloudSyncBanner 
          user={user} 
          contextText="Log in with Google to permanently track your completed lectures, checkpoint quiz scores, and academic fellowship certificates."
          onOpenAuthModal={onOpenAuthModal}
        />
      </div>

      <IrFellowshipHub />

      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        title="Open Master's Fellowship in International Relations & Strategic Studies (OMF-IRSS)"
        url="https://dhshishir.com/fellowship"
        summary="Tuition-free self-paced master's fellowship covering classical statecraft, UNCLOS maritime law, and post-2024 foreign policy paradigms."
        category="Academic Fellowship"
      />
    </div>
  );
};
