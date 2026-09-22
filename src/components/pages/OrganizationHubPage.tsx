import React, { useEffect, useState } from 'react';
import { OrganizationDossierHub } from '../diplomacy/OrganizationDossierHub';
import { ArrowLeft, Building2, Share2, Sparkles } from 'lucide-react';
import { CloudSyncBanner } from '../common/CloudSyncBanner';
import { ShareModal } from '../common/ShareModal';

interface OrganizationHubPageProps {
  user?: any;
  onNavigateHome: () => void;
  onNavigateToAtsWithTrack?: (trackPayload: { title: string; orgName: string; keywords: string[]; sampleDescription: string }) => void;
  onOpenAuthModal?: () => void;
}

export const OrganizationHubPage: React.FC<OrganizationHubPageProps> = ({
  user,
  onNavigateHome,
  onNavigateToAtsWithTrack,
  onOpenAuthModal
}) => {
  const [isShareOpen, setIsShareOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Global Organization Strategic Dossiers & 100% Verified Career Pathways Hub | DH Shishir';
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        
        {/* Navigation Breadcrumb Bar */}
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
              <span>Share Gateway</span>
            </button>
            <div className="hidden sm:flex items-center gap-1.5 bg-white border border-teal-200 text-teal-900 text-xs px-3 py-1 rounded-full font-bold">
              <Building2 className="w-3.5 h-3.5 text-teal-800" /> 28+ Global Organizations Verified
            </div>
          </div>
        </div>

        {/* Cloud Sync Reminder Banner */}
        <div data-nosnippet>
          <CloudSyncBanner
            user={user}
            contextText="Log in to bookmark verified UN jobs, download customized institutional dossiers & auto-sync your target career circulars."
            onOpenAuthModal={onOpenAuthModal}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <OrganizationDossierHub 
          onSelectTrackForAts={onNavigateToAtsWithTrack}
          onNavigateHome={onNavigateHome}
        />
      </div>

      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        title="Global Organization Strategic Dossiers & 100% Verified Career Pathways Hub | DH Shishir"
        url="https://dhshishir.com/organizations"
        summary="Comprehensive dossiers on 28+ international organizations & think tanks with 100% verified UN jobs, WFP careers, and NGO vacancies."
        category="Diplomacy & Careers"
      />
    </div>
  );
};
