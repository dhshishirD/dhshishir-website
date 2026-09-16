import React, { useState, useEffect } from 'react';
import { BLOG_POSTS, type BlogPost } from '../../data/blogPostsData';
import { 
  ArrowLeft, Clock, Calendar, Share2, Check, BookOpen, 
  Tag, Sparkles, ChevronRight, ArrowRight 
} from 'lucide-react';
import { AdSenseSlot } from '../AdSenseSlot';
import { logRealContentView } from '../../services/adminAnalyticsService';

interface BlogPostDetailPageProps {
  slug: string;
  onNavigateHome: () => void;
  onNavigateBlog: () => void;
  onNavigatePost: (slug: string) => void;
  onNavigateTools?: (toolId?: string) => void;
  onNavigateFluency?: () => void;
}

export const BlogPostDetailPage: React.FC<BlogPostDetailPageProps> = ({
  slug,
  onNavigateHome,
  onNavigateBlog,
  onNavigatePost,
  onNavigateTools,
  onNavigateFluency
}) => {
  const post: BlogPost = BLOG_POSTS.find(p => p.slug === slug || p.id === slug) || BLOG_POSTS[0];
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (post) {
      document.title = `${post.title} | DH Shishir`;
      logRealContentView(post.slug);

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
        "dateModified": "2026-09-16",
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
    }

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (totalScroll / windowHeight) * 100)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug, post]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://dhshishir.com/blog/${post.slug}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const relatedPosts = BLOG_POSTS.filter(p => p.slug !== post.slug && (p.category === post.category || p.category === 'English Mastery')).slice(0, 3);

  // Markdown Content Parser
  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');
    let inCodeBlock = false;
    let codeContent: string[] = [];
    const elements: React.ReactNode[] = [];

    let inTable = false;
    let tableRows: string[][] = [];

    const flushTable = (keyIdx: number) => {
      if (tableRows.length > 0) {
        const headerRow = tableRows[0];
        const bodyRows = tableRows.slice(1);
        elements.push(
          <div key={`table-${keyIdx}`} className="my-6 overflow-x-auto rounded-2xl border border-slate-200 shadow-xs bg-white">
            <table className="w-full text-left text-xs sm:text-sm text-slate-800">
              <thead className="bg-slate-100/80 text-slate-900 font-bold border-b border-slate-200">
                <tr>
                  {headerRow.map((cell, cIdx) => (
                    <th key={cIdx} className="px-4 py-3 whitespace-nowrap">{cell.trim()}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {bodyRows.map((row, rIdx) => (
                  <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-4 py-3 leading-relaxed">{cell.trim()}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
      }
      inTable = false;
    };

    lines.forEach((line, idx) => {
      if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
        const cells = line.split('|').slice(1, -1);
        if (cells.every(c => c.trim().match(/^:?-+:?$/))) {
          return;
        }
        inTable = true;
        tableRows.push(cells);
        return;
      } else if (inTable) {
        flushTable(idx);
      }

      if (line.startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <div key={`code-${idx}`} className="relative my-4 rounded-2xl bg-slate-900 text-slate-100 p-4 sm:p-5 font-mono text-xs sm:text-sm overflow-x-auto border border-slate-800 shadow-md">
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
        elements.push(
          <h1 key={idx} className="text-2xl sm:text-4xl font-black text-slate-900 mt-8 mb-4 tracking-tight leading-tight">
            {line.replace('# ', '')}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={idx} className="text-xl sm:text-2xl font-bold text-slate-900 mt-8 mb-3 pb-2 border-b border-slate-200 tracking-tight">
            {line.replace('## ', '')}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={idx} className="text-lg sm:text-xl font-bold text-teal-900 mt-6 mb-2">
            {line.replace('### ', '')}
          </h3>
        );
      } else if (line.startsWith('> ')) {
        elements.push(
          <blockquote key={idx} className="my-4 pl-4 sm:pl-5 border-l-4 border-teal-700 italic text-slate-700 bg-teal-50/60 py-3 rounded-r-2xl text-sm sm:text-base leading-relaxed">
            {line.replace('> ', '')}
          </blockquote>
        );
      } else if (line.startsWith('* ') || line.startsWith('- ')) {
        elements.push(
          <li key={idx} className="ml-5 list-disc text-slate-700 text-sm sm:text-base leading-relaxed my-1.5">
            {line.replace(/^[\*\-]\s+/, '')}
          </li>
        );
      } else if (line.startsWith('👉 **') || line.includes('/tools/') || line.includes('/fluency-lab')) {
        elements.push(
          <div key={idx} className="my-6 p-4 sm:p-5 rounded-2xl bg-teal-50 border border-teal-200 text-teal-950 text-sm sm:text-base font-semibold flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
            <span>{line.replace('👉 ', '')}</span>
            <button 
              onClick={() => {
                if (line.includes('/tools/sop-generator') && onNavigateTools) onNavigateTools('sop-generator');
                else if (line.includes('/tools/ats-checker') && onNavigateTools) onNavigateTools('ats-checker');
                else if (line.includes('/tools/ielts-planner') && onNavigateTools) onNavigateTools('ielts-planner');
                else if (line.includes('/fluency-lab') && onNavigateFluency) onNavigateFluency();
              }}
              className="px-5 py-2 rounded-xl bg-teal-900 text-white text-xs sm:text-sm font-bold shrink-0 hover:bg-teal-950 transition cursor-pointer flex items-center gap-1.5 shadow-xs"
            >
              <span>Launch Live Tool</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        );
      } else if (line.trim() === '---') {
        elements.push(<hr key={idx} className="my-8 border-slate-200" />);
      } else if (line.trim().length > 0) {
        elements.push(<p key={idx} className="text-slate-700 text-sm sm:text-base leading-relaxed my-3">{line}</p>);
      }
    });

    if (inTable) {
      flushTable(lines.length);
    }

    return elements;
  };

  return (
    <div className="pt-20 pb-24 min-h-screen bg-slate-50 text-slate-900">
      
      {/* Top Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-teal-600 via-emerald-500 to-amber-500 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Breadcrumb & Navigation Bar */}
      <div className="bg-white border-b border-slate-200 py-3 sticky top-16 z-30 shadow-xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-600 truncate">
            <button onClick={onNavigateHome} className="hover:text-teal-800 font-bold cursor-pointer">Home</button>
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            <button onClick={onNavigateBlog} className="hover:text-teal-800 font-bold cursor-pointer">Blog</button>
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            <span className="text-slate-900 font-bold truncate max-w-[200px] sm:max-w-xs">{post.title}</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopyLink}
              className="p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
              title="Copy link to article"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5 text-slate-600" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Share'}</span>
            </button>
            <button
              onClick={onNavigateBlog}
              className="p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-900 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">All Articles</span>
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
        
        {/* Category & Read Time Badges */}
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-900 text-xs font-black uppercase tracking-wider">
            {post.category}
          </span>
          <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" /> {post.readTime}
          </span>
          <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-slate-400" /> {post.date}
          </span>
        </div>

        {/* Masterclass Title */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
          {post.title}
        </h1>

        {/* Author Bio Banner */}
        <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200 shadow-xs mb-8">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-teal-800 to-emerald-600 flex items-center justify-center text-white font-black text-base shadow-sm">
              DH
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Daloyar Hassan Shishir (দেলোয়ার হাসান শিশির)</div>
              <div className="text-xs text-teal-800 font-medium">Diplomatic Enthusiast, Policy Analyst & English Educator</div>
            </div>
          </div>
          <a
            href="/leadership"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-teal-800 transition"
          >
            Author Bio <ChevronRight className="w-3 h-3" />
          </a>
        </div>

        {/* Featured Cover Image */}
        {post.coverImage && (
          <div className="w-full h-64 sm:h-96 rounded-3xl overflow-hidden mb-8 shadow-sm bg-slate-100 border border-slate-200">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Executive Summary Callout */}
        <div className="p-5 sm:p-6 rounded-3xl bg-white border border-teal-200/80 shadow-xs mb-8 text-slate-800 text-sm sm:text-base leading-relaxed">
          <div className="text-xs font-black uppercase tracking-wider text-teal-900 mb-2 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-teal-700" /> Executive Masterclass Overview
          </div>
          <p className="italic font-medium text-slate-700">{post.summary}</p>
        </div>

        {/* Main Article Content */}
        <article className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs prose-slate max-w-none">
          {renderFormattedContent(post.content)}
        </article>

        {/* Target Keywords / Tags */}
        {post.keywords && post.keywords.length > 0 && (
          <div className="mt-8 p-6 rounded-3xl bg-white border border-slate-200">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-teal-800" /> Indexed Keywords & Research Topics
            </div>
            <div className="flex flex-wrap gap-2">
              {post.keywords.map((kw, i) => (
                <span key={i} className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1.5 rounded-xl border border-slate-200/60">
                  #{kw}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* AdSense Placement */}
        <div className="my-8">
          <AdSenseSlot slotId="3489102834" label="Academic & Research Resources" />
        </div>

        {/* Related Masterclasses */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-teal-800" /> Continue Reading Next
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedPosts.map((rPost) => (
                <div
                  key={rPost.id}
                  onClick={() => onNavigatePost(rPost.slug)}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-teal-300 hover:shadow-md transition cursor-pointer flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-md">
                      {rPost.category}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-teal-800 transition line-clamp-2">
                      {rPost.title}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {rPost.summary}
                    </p>
                  </div>
                  <div className="pt-4 text-xs font-bold text-teal-800 flex items-center gap-1">
                    <span>Read Guide</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
};
