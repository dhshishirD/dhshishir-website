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
          <div className="inline-block px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
            English Language Learning Zone
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Practical English Study Guides
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
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
                  ? 'bg-emerald-600 text-white shadow-lg shadow-xs border border-emerald-400/40'
                  : 'bg-white text-slate-600 hover:text-slate-800 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 backdrop-blur-xl">
          <div className="mb-6 pb-4 border-b border-slate-200">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900">{activeResource.title}</h3>
            <p className="text-sm text-slate-600 mt-1">{activeResource.subtitle}</p>
            <p className="text-xs text-teal-800 mt-2 font-medium bg-white inline-block px-3 py-1 rounded-lg border border-emerald-900/40">
              💡 {activeResource.banglaContext}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeResource.examples.map((item, idx) => (
              <div key={idx} className="p-4 bg-white rounded-2xl border border-slate-200 space-y-2">
                {item.wrong && (
                  <div className="flex items-start gap-2 text-rose-800 font-bold text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span className="line-through font-medium">{item.wrong}</span>
                  </div>
                )}
                <div className="flex items-start gap-2 text-teal-800 text-sm font-bold">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{item.correct}</span>
                </div>
                <div className="text-xs text-slate-600 font-medium pl-6">
                  {item.banglaMeaning}
                </div>
                <div className="text-[11px] text-slate-600 bg-white p-2 rounded-xl border border-slate-200">
                  <span className="font-semibold text-teal-800">Explanation:</span> {item.tip}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-600 text-center sm:text-left">
              Want a comprehensive Spoken English course with Munzereen Shahid?
            </div>
            <a
              href="https://10minuteschool.com/skills/courses/ghore-boshe-spoken-english?aff=dhshishir"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-xl bg-white border border-slate-200 hover:opacity-95 text-slate-900 font-bold text-xs flex items-center gap-2 shadow-lg"
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
