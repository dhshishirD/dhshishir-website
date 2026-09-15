import React, { useState, useEffect } from 'react';
import { BLOG_POSTS, type BlogPost } from '../data/blogPostsData';
import { Clock, ArrowRight, X, Sparkles, Share2, Check, BookOpen, Tag } from 'lucide-react';
import { AdSenseSlot } from './AdSenseSlot';
import { logRealContentView } from '../services/adminAnalyticsService';

interface BlogSectionProps {
  initialSlug?: string | null;
  onNavigateHome?: () => void;
  onNavigateTools?: (toolId?: string) => void;
  onNavigateFluency?: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ 
  initialSlug,
  onNavigateTools,
  onNavigateFluency
}) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(() => {
    if (initialSlug) {
      return BLOG_POSTS.find(p => p.slug === initialSlug || p.id === initialSlug) || null;
    }
    return null;
  });

  const [copied, setCopied] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    if (initialSlug) {
      const found = BLOG_POSTS.find(p => p.slug === initialSlug || p.id === initialSlug);
      if (found) {
        setSelectedPost(found);
        logRealContentView(found.slug);
      }
    }
  }, [initialSlug]);

  const handleOpenPost = (post: BlogPost) => {
    setSelectedPost(post);
    logRealContentView(post.slug);
    window.history.pushState(null, '', `/blog/${post.slug}`);
    document.title = `${post.title} | DH Shishir`;

    // Inject Schema.org Article JSON-LD
    const existingScript = document.getElementById('blog-post-schema');
    if (existingScript) existingScript.remove();

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title,
      "description": post.summary,
      "image": post.coverImage,
      "datePublished": "2026-09-15",
      "dateModified": "2026-09-15",
      "author": {
        "@type": "Person",
        "name": "Daloyar Hassan Shishir",
        "jobTitle": "Diplomatic Enthusiast, Policy Analyst & English Educator",
        "url": "https://dhshishir.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "DH Shishir Knowledge Portal",
        "logo": {
          "@type": "ImageObject",
          "url": "https://dhshishir.com/favicon.svg"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://dhshishir.com/blog/${post.slug}`
      },
      "keywords": post.keywords ? post.keywords.join(', ') : post.category
    };

    const script = document.createElement('script');
    script.id = 'blog-post-schema';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);
  };

  const handleClosePost = () => {
    setSelectedPost(null);
    window.history.pushState(null, '', '/blog');
    document.title = 'Strategic Insights, Articles & Policy Commentary | DH Shishir';
    const existingScript = document.getElementById('blog-post-schema');
    if (existingScript) existingScript.remove();
  };

  const handleCopyLink = (slug: string) => {
    navigator.clipboard.writeText(`https://dhshishir.com/blog/${slug}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const categories = ['all', 'Admissions & Scholarships', 'English Mastery', 'Career Guide'];

  const filteredPosts = activeCategory === 'all' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(p => p.category === activeCategory);

  // Helper to render markdown sections nicely
  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');
    let inCodeBlock = false;
    let codeContent: string[] = [];

    const elements: React.ReactNode[] = [];

    lines.forEach((line, idx) => {
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <div key={`code-${idx}`} className="relative my-4 rounded-2xl bg-slate-900 text-slate-100 p-4 font-mono text-xs overflow-x-auto border border-slate-800 shadow-md">
              <pre>{codeContent.join('\n')}</pre>
            </div>
          );
          codeContent = [];
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeContent.push(line);
        return;
      }

      if (line.startsWith('# ')) {
        elements.push(<h1 key={idx} className="text-2xl sm:text-3xl font-black text-slate-900 mt-6 mb-3 tracking-tight">{line.replace('# ', '')}</h1>);
      } else if (line.startsWith('## ')) {
        elements.push(<h2 key={idx} className="text-xl sm:text-2xl font-bold text-slate-900 mt-6 mb-3 pb-1 border-b border-slate-200">{line.replace('## ', '')}</h2>);
      } else if (line.startsWith('### ')) {
        elements.push(<h3 key={idx} className="text-lg font-bold text-teal-900 mt-4 mb-2">{line.replace('### ', '')}</h3>);
      } else if (line.startsWith('> ')) {
        elements.push(
          <blockquote key={idx} className="my-3 pl-4 border-l-4 border-teal-700 italic text-slate-700 bg-teal-50/50 py-2 rounded-r-xl text-sm">
            {line.replace('> ', '')}
          </blockquote>
        );
      } else if (line.startsWith('* ') || line.startsWith('- ')) {
        elements.push(
          <li key={idx} className="ml-5 list-disc text-slate-700 text-sm leading-relaxed my-1">
            {line.replace(/^[\*\-]\s+/, '')}
          </li>
        );
      } else if (line.startsWith('👉 **') || line.includes('/tools/') || line.includes('/fluency-lab')) {
        elements.push(
          <div key={idx} className="my-5 p-4 rounded-2xl bg-teal-50 border border-teal-200 text-teal-950 text-sm font-semibold flex items-center justify-between gap-3 shadow-xs">
            <span>{line.replace('👉 ', '')}</span>
            <button 
              onClick={() => {
                if (line.includes('/tools/sop-generator') && onNavigateTools) onNavigateTools('sop-generator');
                else if (line.includes('/tools/ats-checker') && onNavigateTools) onNavigateTools('ats-checker');
                else if (line.includes('/tools/ielts-planner') && onNavigateTools) onNavigateTools('ielts-planner');
                else if (line.includes('/fluency-lab') && onNavigateFluency) onNavigateFluency();
              }}
              className="px-4 py-1.5 rounded-xl bg-teal-900 text-white text-xs font-bold shrink-0 hover:bg-teal-950 transition cursor-pointer"
            >
              Open Tool ↗
            </button>
          </div>
        );
      } else if (line.trim() === '---') {
        elements.push(<hr key={idx} className="my-6 border-slate-200" />);
      } else if (line.trim().length > 0) {
        elements.push(<p key={idx} className="text-slate-700 text-sm leading-relaxed my-2.5">{line}</p>);
      }
    });

    return elements;
  };

  return (
    <section id="blog" className="py-12 relative bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-800" /> High-Yield Guides, Admissions & Policy Articles
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Strategic Insights & Guides
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Field-tested frameworks for US university admissions, IELTS Band 9 mastery, and high-stakes foreign policy analysis.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-teal-900 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {cat === 'all' ? 'All Categories' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-slate-300 shadow-xs hover:shadow-md transition group"
            >
              <div>
                <div className="h-48 overflow-hidden bg-slate-100 relative">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-extrabold text-teal-950 border border-teal-200/50 shadow-xs">
                    {post.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-teal-800" /> {post.readTime}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 line-clamp-2 leading-snug group-hover:text-teal-900 transition">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>

                  {post.keywords && post.keywords.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {post.keywords.slice(0, 3).map((kw, i) => (
                        <span key={i} className="inline-flex items-center gap-1 text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                          <Tag className="w-2.5 h-2.5 text-slate-400" /> {kw}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => handleOpenPost(post)}
                  className="w-full py-2.5 rounded-xl bg-teal-900 hover:bg-teal-950 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition cursor-pointer"
                >
                  <span>Read Full Masterclass</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <AdSenseSlot slotId="3489102834" label="Sponsored Educational Resources" />

        {/* Full Post Modal / Reader View */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <div className="bg-white border border-slate-200 rounded-3xl max-w-3xl w-full p-6 sm:p-10 relative max-h-[90vh] overflow-y-auto shadow-2xl">
              
              {/* Header Actions */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold text-teal-900 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                    {selectedPost.category}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {selectedPost.readTime}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopyLink(selectedPost.slug)}
                    className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition cursor-pointer text-xs flex items-center gap-1.5 px-3"
                    title="Copy Permanent SEO Link"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4 text-slate-600" />}
                    <span className="text-xs font-bold">{copied ? 'Copied Link' : 'Share'}</span>
                  </button>

                  <button
                    onClick={handleClosePost}
                    className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-700 cursor-pointer transition"
                    title="Close Reader"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Cover Image Banner */}
              <div className="h-56 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 bg-slate-100 shadow-xs">
                <img
                  src={selectedPost.coverImage}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title & Metadata */}
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
                {selectedPost.title}
              </h1>

              <div className="flex items-center gap-3 text-xs text-slate-500 mt-2 mb-6">
                <span className="font-semibold text-slate-800">By Daloyar Hassan Shishir</span>
                <span>•</span>
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5 text-teal-700" /> Research & Academic Guide</span>
              </div>

              {/* Formatted Markdown Content */}
              <div className="border-t border-slate-200 pt-6">
                {renderFormattedContent(selectedPost.content)}
              </div>

              {/* Footer Modal Actions */}
              <div className="pt-8 mt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  Permanent Link: <code className="bg-slate-100 px-2 py-1 rounded text-teal-900 font-mono">https://dhshishir.com/blog/{selectedPost.slug}</code>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => handleCopyLink(selectedPost.slug)}
                    className="flex-1 sm:flex-none px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-xs transition cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                    <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
                  </button>
                  <button
                    onClick={handleClosePost}
                    className="flex-1 sm:flex-none px-6 py-2.5 bg-teal-900 hover:bg-teal-950 text-white font-bold rounded-xl text-xs transition cursor-pointer"
                  >
                    Done Reading
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
