import React from "react";
import { Globe, GraduationCap, CheckCircle2, Sparkles, Compass } from "lucide-react";
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
    <section id="hero" className="pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200">
      {/* Subtle Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-blue-100/60 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-amber-100/50 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300/80 text-amber-900 text-xs font-bold shadow-xs">
              <Globe className="w-4 h-4 text-amber-700" />
              <span>China Delegate 2025 • Malaysia Study Tour 2026 • Strategic Foreign Policy & Fluency Lab</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.14]">
              Daloyar Hassan Shishir <br />
              <span className="text-blue-900 font-serif-title">
                Diplomatic Enthusiast, Policy Analyst & English Educator
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              MA & BA in English from <span className="text-slate-900 font-bold">SUST</span>, Young Leaders Program Fellow in <span className="text-amber-800 font-bold">China (2025)</span>, Development Model Study in <span className="text-blue-800 font-bold">Malaysia (2026)</span>, and Founder of <span className="text-emerald-800 font-bold">Fluency Lab</span> & <span className="text-blue-900 font-bold">Strategic Foreign Policy Intelligence Desk</span>.
            </p>

            {/* Quick Action Navigation Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={(e) => handleNav(e, 'fellowship')}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 hover:from-blue-800 hover:to-indigo-800 text-white font-bold text-xs shadow-md transition flex items-center gap-2 cursor-pointer"
              >
                <GraduationCap className="w-4 h-4 text-amber-400" />
                <span>IR Master's Fellowship</span>
              </button>

              <button
                onClick={(e) => handleNav(e, 'diplomacy')}
                className="px-5 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-xs shadow-xs transition flex items-center gap-2 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-blue-700" /> Diplomatic Hub (Think Tanks)
              </button>

              <button
                onClick={(e) => handleNav(e, 'fluency-lab')}
                className="px-5 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-xs transition flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-emerald-600" /> Fluency Lab English
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2] border border-[#1877F2]/30 font-bold text-xs transition flex items-center gap-1.5"
              >
                <span className="font-black text-sm">f</span> Facebook Connect
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-[#0a66c2]/10 hover:bg-[#0a66c2]/20 text-[#0a66c2] border border-[#0a66c2]/30 font-bold text-xs transition flex items-center gap-1.5"
              >
                <span className="font-black text-sm">in</span> LinkedIn
              </a>
            </div>

            {/* Credibility Stats */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
                <div className="text-2xl sm:text-3xl font-black text-amber-700">25+</div>
                <div className="text-xs text-slate-600 font-semibold">Think Tanks Monitored</div>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
                <div className="text-2xl sm:text-3xl font-black text-emerald-700">5,000+</div>
                <div className="text-xs text-slate-600 font-semibold">Students Mentored</div>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
                <div className="text-2xl sm:text-3xl font-black text-blue-800">7+ Yrs</div>
                <div className="text-xs text-slate-600 font-semibold">Senior Lecturer @ UCC</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-amber-200/50 via-slate-100 to-blue-200/50 shadow-xl border border-slate-200">
                <div className="bg-white rounded-[22px] overflow-hidden p-3 sm:p-4">
                  <div className="relative w-full aspect-[4/4.6] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 group shadow-inner">
                    <img
                      src="/shishir-photo.jpg"
                      alt="Daloyar Hassan Shishir - Diplomatic Enthusiast, Policy Analyst & English Educator"
                      className="w-full h-full object-cover object-[50%_15%] transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-amber-300 text-amber-900 text-[11px] font-bold flex items-center gap-1.5 shadow-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" /> China Delegate 2025
                    </div>
                  </div>

                  <div className="mt-3.5 p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                    <div className="text-base font-black text-slate-900 flex items-center justify-between">
                      <span>Daloyar Hassan Shishir</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold border border-amber-300">SUST Alumnus</span>
                    </div>
                    <p className="text-xs text-blue-900 font-bold mt-0.5">Diplomatic Enthusiast, Policy Analyst & English Educator</p>
                  </div>

                  <div className="mt-3 space-y-2 text-xs">
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2.5">
                      <Globe className="w-4 h-4 text-amber-700 shrink-0" />
                      <span className="text-slate-700 font-medium">Malaysia Study Tour 2026 & China Delegate 2025</span>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2.5">
                      <GraduationCap className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span className="text-slate-700 font-medium">MA & BA in English Literature, SUST</span>
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
