import { useState } from 'react';
import { BLOG_POSTS, type BlogPost } from '../data/blogPostsData';
import { Clock, ArrowRight, X } from 'lucide-react';
import { AdSenseSlot } from './AdSenseSlot';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-wider">
            Career Articles & Guidelines
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Insights, Guides & Tutorials
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            In-depth strategies to accelerate your professional growth and academic preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              className="bg-slate-900/80 rounded-3xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition group"
            >
              <div>
                <div className="h-48 overflow-hidden bg-slate-950">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="font-semibold text-emerald-400">{post.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                  </div>

                  <h3 className="text-base font-bold text-white line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-3">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <AdSenseSlot slotId="3489102834" label="Sponsored Content" />

        {selectedPost && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-5 right-5 p-2 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-300 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">{selectedPost.category}</span>
                <h2 className="text-2xl font-black text-white">{selectedPost.title}</h2>
                <div className="text-xs text-slate-400">{selectedPost.date} • {selectedPost.readTime}</div>

                <div className="text-sm text-slate-300 space-y-4 leading-relaxed whitespace-pre-line border-t border-slate-800 pt-4">
                  {selectedPost.content}
                </div>

                <div className="pt-6 border-t border-slate-800 flex justify-end">
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold cursor-pointer"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
