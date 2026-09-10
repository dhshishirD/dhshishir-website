import React from 'react';
import { ArrowRight, Globe, Award, GraduationCap } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-emerald-600/15 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold backdrop-blur-md">
              <Globe className="w-4 h-4 text-emerald-400" />
              <span>Young Leaders Delegate (China 2025) • SHAKSU VP Candidate • SUST English</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Daloyar Hassan Shishir <br />
              <span className="gradient-text">Youth Leader & English Educator</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              MA & BA in English from <span className="text-white font-semibold">SUST</span>, 7+ years Senior Lecturer at <span className="text-white font-semibold">UCC</span>, Young Leaders Program Fellow in <span className="text-emerald-400 font-semibold">Shanghai & Beijing (China 2025)</span>, and Vice President (VP) Candidate at <span className="text-indigo-400 font-semibold">SHAKSU</span>.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#experience"
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 hover:scale-[1.02] text-white font-bold text-xs shadow-xl shadow-indigo-600/25 transition flex items-center gap-2"
              >
                <Award className="w-4 h-4" /> Leadership & Media Mentions
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-2xl bg-[#1877F2]/20 hover:bg-[#1877F2]/30 text-[#1877F2] border border-[#1877F2]/40 font-bold text-xs transition flex items-center gap-2"
              >
                <span className="font-black text-sm">f</span> Facebook
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-2xl bg-[#0a66c2]/20 hover:bg-[#0a66c2]/30 text-[#0a66c2] border border-[#0a66c2]/40 font-bold text-xs transition flex items-center gap-2"
              >
                <span className="font-black text-sm">in</span> LinkedIn
              </a>
            </div>

            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">7+ Yrs</div>
                <div className="text-xs text-slate-400 font-medium">Lecturer @ UCC</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">5,000+</div>
                <div className="text-xs text-slate-400 font-medium">Youth & Students Guided</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400">4+</div>
                <div className="text-xs text-slate-400 font-medium">National Media Outlets</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-gradient-to-b from-slate-800/90 to-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-700/80 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-emerald-500 p-1 flex items-center justify-center shrink-0">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-white font-black text-2xl">
                    DH
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Daloyar Hassan Shishir</h2>
                  <p className="text-xs text-emerald-400 font-medium">English Lecturer & Youth Leader</p>
                  <p className="text-[11px] text-slate-400">Shahjalal University of Science & Tech</p>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex items-center gap-3">
                  <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-slate-200">Young Leaders Delegate, Shanghai & Beijing (2025)</span>
                </div>
                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex items-center gap-3">
                  <GraduationCap className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="text-slate-200">SHAKSU VP Candidate • Durbar SUSTian Oikya</span>
                </div>
                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex items-center gap-3">
                  <Award className="w-4 h-4 text-blue-400 shrink-0" />
                  <span className="text-slate-200">Senior Lecturer @ UCC (7+ Years) • President USWA</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Sylhet & Jashore, Bangladesh</span>
                <a
                  href="#contact"
                  className="font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                >
                  Contact Shishir <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
