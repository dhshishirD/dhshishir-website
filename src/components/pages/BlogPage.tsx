import React, { useEffect } from 'react';
import { BlogSection } from '../BlogSection';
import { ArrowLeft, BookOpen } from 'lucide-react';

interface BlogPageProps {
  onNavigateHome: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigateHome }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Strategic Insights, Articles & Policy Commentary | DH Shishir';
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <button
            onClick={onNavigateHome}
            className="text-xs text-indigo-400 hover:text-indigo-300 font-bold inline-flex items-center gap-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Main Homepage (dhshishir.com)
          </button>
          <div className="flex items-center gap-1.5 bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs px-3 py-1 rounded-full font-bold">
            <BookOpen className="w-3.5 h-3.5 text-blue-400" /> Research, Op-Eds & Articles
          </div>
        </div>
      </div>
      <BlogSection />
    </div>
  );
};
