import React, { useEffect, useState } from 'react';
import { ToolsSection } from '../ToolsSection';
import { ArrowLeft, Sparkles, Share2 } from 'lucide-react';
import { ShareModal } from '../common/ShareModal';
import { CloudSyncBanner } from '../common/CloudSyncBanner';

interface ToolsDirectoryPageProps {
  user?: any;
  onNavigateHome: () => void;
  onLaunchTool: (toolId: string) => void;
  onOpenAuthModal?: () => void;
}

export const ToolsDirectoryPage: React.FC<ToolsDirectoryPageProps> = ({ 
  user,
  onNavigateHome, 
  onLaunchTool,
  onOpenAuthModal
}) => {
  const [isShareOpen, setIsShareOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Free Career & Productivity Tools Suite | DH Shishir';
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
              <span>Share Tools Suite</span>
            </button>
            <div className="hidden sm:flex items-center gap-1.5 bg-white border border-teal-200 text-teal-900 text-xs px-3 py-1 rounded-full font-bold">
              <Sparkles className="w-3.5 h-3.5 text-teal-800" /> Career & Productivity Suite
            </div>
          </div>
        </div>

        {/* Cloud Sync & Auto-Save Reminder */}
        <CloudSyncBanner
          user={user}
          contextText="Log in with Google to auto-save your generated ATS resumes, Statements of Purpose (SOP) & custom salary negotiation scripts."
          onOpenAuthModal={onOpenAuthModal}
        />
      </div>
      <ToolsSection onLaunchStandaloneTool={onLaunchTool} />

      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        title="Free AI Career, ATS & Academic Productivity Tools Suite"
        url="https://dhshishir.com/tools"
        summary="A suite of 10+ free AI tools including ATS Resume Checker, SOP Generator, IELTS Planner, and Salary Negotiation Simulator by Daloyar Hassan Shishir."
        category="Career Tools"
      />
    </div>
  );
};
