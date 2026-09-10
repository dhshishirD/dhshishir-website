import React, { useState } from 'react';
import { ENGLISH_RESOURCES } from '../data/englishGuidesData';
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export const EnglishSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Common Mistakes');

  const categories = ['Common Mistakes', 'Spoken English', 'Business English', 'IELTS Cheatsheet'];
  const activeResource = ENGLISH_RESOURCES.find(r => r.category === activeCategory) || ENGLISH_RESOURCES[0];

  return (
    <section id="english" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            English Language Learning Zone
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Practical English Study Guides
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Designed specifically to overcome common challenges faced by Bangladeshi learners.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                activeCategory === cat
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 border border-emerald-400/40'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-6 md:p-8 backdrop-blur-xl">
          <div className="mb-6 pb-4 border-b border-slate-800">
            <h3 className="text-xl md:text-2xl font-bold text-white">{activeResource.title}</h3>
            <p className="text-sm text-slate-400 mt-1">{activeResource.subtitle}</p>
            <p className="text-xs text-emerald-400 mt-2 font-medium bg-emerald-950/40 inline-block px-3 py-1 rounded-lg border border-emerald-900/40">
              💡 {activeResource.banglaContext}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeResource.examples.map((item, idx) => (
              <div key={idx} className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800 space-y-2">
                {item.wrong && (
                  <div className="flex items-start gap-2 text-rose-400 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span className="line-through font-medium">{item.wrong}</span>
                  </div>
                )}
                <div className="flex items-start gap-2 text-emerald-400 text-sm font-bold">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{item.correct}</span>
                </div>
                <div className="text-xs text-slate-300 font-medium pl-6">
                  {item.banglaMeaning}
                </div>
                <div className="text-[11px] text-slate-400 bg-slate-900 p-2 rounded-xl border border-slate-800/80">
                  <span className="font-semibold text-indigo-400">Explanation:</span> {item.tip}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 text-center sm:text-left">
              Want a comprehensive Spoken English course with Munzereen Shahid?
            </div>
            <a
              href="https://10minuteschool.com/skills/courses/ghore-boshe-spoken-english?aff=dhshishir"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-95 text-white font-bold text-xs flex items-center gap-2 shadow-lg"
            >
              <span>Enroll Ghore Boshe Spoken English</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
