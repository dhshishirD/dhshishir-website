import React, { useEffect, useState } from 'react';
import { IeltsTopicVocabStudio } from '../ielts/IeltsTopicVocabStudio';
import { ArrowLeft, BookOpen, Share2, Award } from 'lucide-react';
import { CloudSyncBanner } from '../common/CloudSyncBanner';
import { ShareModal } from '../common/ShareModal';

interface IeltsVocabPageProps {
  user?: any;
  onNavigateHome: () => void;
  onNavigateIeltsHub?: () => void;
  onOpenAuthModal?: () => void;
}

export const IeltsVocabPage: React.FC<IeltsVocabPageProps> = ({
  user,
  onNavigateHome,
  onNavigateIeltsHub,
  onOpenAuthModal
}) => {
  const [isShareOpen, setIsShareOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'IELTS Band 9 Topic-Wise Vocabulary Studio & Collocation Decks | DH Shishir';
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        
        {/* Navigation Breadcrumb Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateHome}
              className="text-xs text-slate-600 hover:text-slate-900 font-bold inline-flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Homepage
            </button>
            {onNavigateIeltsHub && (
              <>
                <span className="text-slate-300">/</span>
                <button
                  onClick={onNavigateIeltsHub}
                  className="text-xs text-amber-800 hover:text-amber-900 font-bold inline-flex items-center gap-1 cursor-pointer"
                >
                  <Award className="w-3.5 h-3.5" /> IELTS Master Hub
                </button>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsShareOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-950 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-3 py-1 rounded-full transition cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-amber-700" />
              <span>Share Lexicon</span>
            </button>
            <div className="hidden sm:flex items-center gap-1.5 bg-white border border-amber-200 text-amber-950 text-xs px-3 py-1 rounded-full font-bold">
              <BookOpen className="w-3.5 h-3.5 text-amber-600" /> 10 Academic Topics
            </div>
          </div>
        </div>

        {/* Cloud Sync Reminder Banner */}
        <div data-nosnippet>
          <CloudSyncBanner
            user={user}
            contextText="Log in to bookmark C1/C2 collocations, sync vocabulary flashcards & track daily Leitner spaced repetition review."
            onOpenAuthModal={onOpenAuthModal}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <IeltsTopicVocabStudio 
          onNavigateIeltsHub={onNavigateIeltsHub}
          onNavigateHome={onNavigateHome}
        />
      </div>

      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        title="IELTS Academic Band 9 Topic-Wise Vocabulary Studio & Collocation Decks | DH Shishir"
        url="https://dhshishir.com/ielts/vocabulary-studio"
        summary="Master 150+ CEFR C1/C2 academic vocabulary words, audio pronunciation, Band 5 vs Band 9 comparative models & 1-click Anki decks."
        category="IELTS Preparation"
      />
    </div>
  );
};
