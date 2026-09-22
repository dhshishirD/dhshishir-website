import React from "react";
import { 
  Globe, GraduationCap, Sparkles, Compass, Tv, Briefcase, 
  ArrowRight, ShieldCheck, CheckCircle2 
} from "lucide-react";
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

  const scrollToMedia = (e: React.MouseEvent) => {
    e.preventDefault();
    const mediaEl = document.getElementById('media-presence');
    if (mediaEl) {
      mediaEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden bg-white border-b border-slate-200">
      {/* Subtle Ambient Tint */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-teal-50/80 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-900 text-xs font-bold shadow-2xs">
              <Globe className="w-4 h-4 text-teal-800" />
              <span>China Delegate 2025 • Malaysia Study Tour 2026 • 16+ Precision AI Tools</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.14]">
              Delowar Hassan Shishir <br />
              <span className="text-teal-900 font-serif-title">
                Diplomatic Analyst, AI Education Architect & Public Speaker
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              MA & BA in English from <span className="text-slate-900 font-bold">SUST</span>, Young Leaders Fellow in <span className="text-teal-900 font-bold">China (2025)</span>, Development Model Study in <span className="text-teal-900 font-bold">Malaysia (2026)</span>, and Founder of <span className="text-teal-900 font-bold">IELTS AI Master Hub</span> & <span className="text-teal-900 font-bold">Diplomatic Intelligence Desk</span>.
            </p>

            {/* Quick Action Navigation Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={(e) => handleNav(e, 'ielts')}
                className="px-6 py-3.5 rounded-2xl bg-teal-900 hover:bg-teal-800 text-white font-bold text-xs sm:text-sm shadow-xs transition flex items-center gap-2 cursor-pointer"
              >
                <GraduationCap className="w-4 h-4 text-teal-200" />
                <span>IELTS AI Hub (16 Tools)</span>
              </button>

              <button
                onClick={(e) => handleNav(e, 'diplomacy')}
                className="px-5 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-xs sm:text-sm shadow-2xs transition flex items-center gap-2 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-teal-800" /> 
                <span>Diplomatic Intelligence Desk</span>
              </button>

              <button
                onClick={scrollToMedia}
                className="px-5 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-teal-300 font-bold text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <Tv className="w-4 h-4 text-teal-400" />
                <span>National Media & Press</span>
              </button>
            </div>

            {/* Social Connect + Global Dossiers */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <button
                onClick={(e) => handleNav(e, 'organizations')}
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 font-bold text-xs transition flex items-center gap-1.5 cursor-pointer"
              >
                <Briefcase className="w-3.5 h-3.5 text-teal-800" /> 24+ Organization Dossiers
              </button>
              <button
                onClick={(e) => handleNav(e, 'fellowship')}
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 font-bold text-xs transition flex items-center gap-1.5 cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-teal-800" /> Open Fellowship (OMF-IRSS)
              </button>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 font-bold text-xs transition flex items-center gap-1.5"
              >
                <span className="font-black text-sm text-[#1877F2]">f</span> Facebook
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 font-bold text-xs transition flex items-center gap-1.5"
              >
                <span className="font-black text-sm text-[#0a66c2]">in</span> LinkedIn
              </a>
            </div>

            {/* Credibility Stats */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto lg:mx-0">
              <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-2xs text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-black text-teal-900">16+</div>
                <div className="text-[11px] text-slate-600 font-semibold">Free AI Simulators</div>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-2xs text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-black text-teal-900">25+</div>
                <div className="text-[11px] text-slate-600 font-semibold">Think Tanks Monitored</div>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-2xs text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-black text-teal-900">24+</div>
                <div className="text-[11px] text-slate-600 font-semibold">Global UN/NGO Dossiers</div>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-2xs text-center sm:text-left">
                <div className="text-xl sm:text-2xl font-black text-teal-900">National</div>
                <div className="text-[11px] text-slate-600 font-semibold">TV & Media Coverage</div>
              </div>
            </div>
          </div>

          {/* Right Visual Image Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 sm:w-80 md:w-96 aspect-4/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
              <img
                src="/shishir-photo-focused.jpg"
                alt="Delowar Hassan Shishir"
                className="w-full h-full object-cover object-top transition duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/shishir-photo.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/90 text-slate-950 font-black text-xs uppercase tracking-wider backdrop-blur-xs w-fit mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified Public Leader
                </div>
                <h3 className="text-xl font-black leading-tight">Delowar Hassan Shishir</h3>
                <p className="text-xs text-teal-200 font-medium">Shahjalal University of Science & Technology (SUST)</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
