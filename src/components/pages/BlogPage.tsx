import React, { useEffect } from 'react';
import { BlogSection } from '../BlogSection';
import { ArrowLeft, BookOpen } from 'lucide-react';

interface BlogPageProps {
  initialSlug?: string | null;
  onNavigateHome: () => void;
  onSelectPost?: (slug: string) => void;
  onNavigateTools?: (toolId?: string) => void;
  onNavigateFluency?: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ 
  initialSlug, 
  onNavigateHome,
  onSelectPost,
  onNavigateTools,
  onNavigateFluency
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (!initialSlug) {
      document.title = 'Strategic Insights, Articles & Policy Commentary | DH Shishir';
    }
  }, [initialSlug]);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <button
            onClick={onNavigateHome}
            className="text-xs text-teal-800 hover:text-teal-900 font-bold inline-flex items-center gap-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Main Homepage (dhshishir.com)
          </button>
          <div className="flex items-center gap-1.5 bg-teal-50 border border-teal-200 text-teal-900 text-xs px-3 py-1 rounded-full font-bold">
            <BookOpen className="w-3.5 h-3.5 text-teal-800" /> Research, Masterclasses & Guides
          </div>
        </div>
      </div>
      <BlogSection 
        initialSlug={initialSlug} 
        onNavigateHome={onNavigateHome}
        onSelectPost={onSelectPost}
        onNavigateTools={onNavigateTools}
        onNavigateFluency={onNavigateFluency}
      />
    </div>
  );
};
