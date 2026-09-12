import React from "react";
import { Globe, GraduationCap, BookOpen, CheckCircle2, Sparkles, Compass } from "lucide-react";
import { SOCIAL_LINKS } from "../data/portfolioData";
import type { ViewType } from "./Navbar";

interface HeroSectionProps {
  onNavigate?: (view: ViewType, toolId?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent, view: ViewType, toolId?: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(view, toolId);
    }
  };

  return (
    <section id="hero" className="pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden bg-slate-950">
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-cyan-600/12 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-emerald-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-semibold backdrop-blur-md shadow-lg shadow-cyan-950/30">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>China Delegate 2025 ? Malaysia Study Tour 2026 ? Foreign Policy & Fluency Lab</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Daloyar Hassan Shishir <br />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                Diplomatic Scholar & Educator
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              MA & BA in English from <span className="text-white font-semibold">SUST</span>, Young Leaders Program Fellow in <span className="text-emerald-400 font-semibold">China (2025)</span>, Development Model Study in <span className="text-cyan-400 font-semibold">Malaysia (2026)</span>, and Founder of <span className="text-emerald-400 font-semibold">Fluency Lab</span> & <span className="text-cyan-400 font-semibold">Strategic Foreign Policy Intelligence Desk</span>.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={(e) => handleNav(e, 'diplomacy')}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-600 via-teal-600 to-indigo-600 hover:opacity-95 text-white font-bold text-xs shadow-xl shadow-cyan-900/40 transition flex items-center gap-2 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-cyan-200" /> Diplomatic Hub (Think Tanks)
              </button>
              <button
                onClick={(e) => handleNav(e, 'fluency-lab')}
                className="px-5 py-3.5 rounded-2xl bg-emerald-950/80 hover:bg-emerald-900/90 text-emerald-300 border border-emerald-500/40 font-bold text-xs transition flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-950/50"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" /> Fluency Lab English
              </button>
              <button
                onClick={(e) => handleNav(e, 'tools')}
                className="px-5 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-bold text-xs transition flex items-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-slate-400" /> Career Tools
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-[#1877F2]/15 hover:bg-[#1877F2]/25 text-[#1877F2] border border-[#1877F2]/30 font-bold text-xs transition flex items-center gap-1.5"
              >
                <span className="font-black text-sm">f</span> Facebook Connect
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-[#0a66c2]/15 hover:bg-[#0a66c2]/25 text-[#0a66c2] border border-[#0a66c2]/30 font-bold text-xs transition flex items-center gap-1.5"
              >
                <span className="font-black text-sm">in</span> LinkedIn
              </a>
            </div>

            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="bg-slate-900/50 p-3 rounded-2xl border border-slate-800/60">
                <div className="text-2xl sm:text-3xl font-black text-cyan-400">25+</div>
                <div className="text-xs text-slate-400 font-medium">Think Tanks Monitored</div>
              </div>
              <div className="bg-slate-900/50 p-3 rounded-2xl border border-slate-800/60">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">5,000+</div>
                <div className="text-xs text-slate-400 font-medium">Students Mentored</div>
              </div>
              <div className="bg-slate-900/50 p-3 rounded-2xl border border-slate-800/60">
                <div className="text-2xl sm:text-3xl font-black text-indigo-400">7+ Yrs</div>
                <div className="text-xs text-slate-400 font-medium">Senior Lecturer @ UCC</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="relative rounded-3xl p-1.5 bg-gradient-to-b from-cyan-500/40 via-slate-800/50 to-emerald-500/40 shadow-2xl shadow-cyan-950/60 backdrop-blur-xl">
                <div className="bg-slate-950 rounded-[22px] overflow-hidden p-3 sm:p-4">
                  <div className="relative w-full aspect-[4/4.6] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 group shadow-inner">
                    <img
                      src="/shishir-photo.jpg"
                      alt="Daloyar Hassan Shishir - Diplomatic Scholar & English Educator"
                      className="w-full h-full object-cover object-[50%_15%] transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-cyan-500/50 text-cyan-400 text-[11px] font-bold flex items-center gap-1.5 shadow-xl">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> China Delegate 2025
                    </div>
                  </div>

                  <div className="mt-3.5 p-3.5 bg-slate-900/90 rounded-2xl border border-slate-800/90">
                    <div className="text-base font-black text-white flex items-center justify-between">
                      <span>Daloyar Hassan Shishir</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30">SUST Alumnus</span>
                    </div>
                    <p className="text-xs text-cyan-400 font-semibold mt-0.5">Diplomatic Scholar & Senior English Educator</p>
                  </div>

                  <div className="mt-3 space-y-2 text-xs">
                    <div className="p-2.5 bg-slate-900/70 rounded-xl border border-slate-800/80 flex items-center gap-2.5">
                      <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="text-slate-200">Malaysia Study Tour 2026 & China Delegate 2025</span>
                    </div>
                    <div className="p-2.5 bg-slate-900/70 rounded-xl border border-slate-800/80 flex items-center gap-2.5">
                      <GraduationCap className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-slate-200">MA & BA in English Literature, SUST</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
