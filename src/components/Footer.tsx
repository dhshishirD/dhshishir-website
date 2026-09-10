import React from "react";
import { SOCIAL_LINKS } from "../data/portfolioData";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="text-lg font-black text-white">
              dhshishir<span className="text-emerald-400">.com</span>
            </div>
            <p className="text-xs text-slate-400">
              Official personal portfolio & educational portal of Daloyar Hassan Shishir (দেলোয়ার হাসান শিশির).
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-[#1877F2] font-black hover:scale-105 transition"
              >
                f
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-[#0a66c2] font-black hover:scale-105 transition"
              >
                in
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-3">Free Tools</h4>
            <ul className="space-y-2">
              <li><a href="#tools" className="hover:text-emerald-400">ATS CV Readiness Checker</a></li>
              <li><a href="#tools" className="hover:text-emerald-400">IELTS Band Score Predictor</a></li>
              <li><a href="#tools" className="hover:text-emerald-400">Skill-to-Course Matcher</a></li>
              <li><a href="#tools" className="hover:text-emerald-400">CGPA 4.0 Scale Converter</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-3">Top Courses</h4>
            <ul className="space-y-2">
              <li><a href="#courses" className="hover:text-emerald-400">Ghore Boshe Spoken English</a></li>
              <li><a href="#courses" className="hover:text-emerald-400">10MS IELTS Course</a></li>
              <li><a href="#courses" className="hover:text-emerald-400">Microsoft Excel Masterclass</a></li>
              <li><a href="#courses" className="hover:text-emerald-400">BCS Preliminary Course</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-3">Official Social & Contact</h4>
            <p className="text-[11px] text-slate-400 mb-1">
              WhatsApp: +880 1627-714636
            </p>
            <p className="text-[11px] text-slate-400 mb-2">
              Facebook: fb.com/dhshishir0
            </p>
            <p className="text-[10px] text-slate-500">
              Affiliate Disclosure: Some course links contain affiliate tracking.
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © {new Date().getFullYear()} dhshishir.com • All Rights Reserved by Daloyar Hassan Shishir.
          </div>
          <div className="flex items-center gap-1 text-slate-500">
            Featured on Prothom Alo, The Daily Campus, Daily Naya Diganta & Dhruba News
          </div>
        </div>

      </div>
    </footer>
  );
};
