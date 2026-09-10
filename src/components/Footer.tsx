import React from 'react';

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
              Personal brand and educational portal curated by Daloyar Hassan Shishir. Empowering learners with verified tools and career courses.
            </p>
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
            <h4 className="font-bold text-white mb-3">Transparency & Contact</h4>
            <p className="text-[11px] text-slate-500 mb-2">
              Affiliate Disclosure: Some course links contain affiliate tracking. We may earn a small commission at no additional cost to you.
            </p>
            <p className="text-[11px] text-slate-400 font-semibold">
              Email: contactwithshishir@gmail.com
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © {new Date().getFullYear()} dhshishir.com • All Rights Reserved by Daloyar Hassan Shishir.
          </div>
          <div className="flex items-center gap-1 text-slate-500">
            Crafted for high performance & AdSense readiness
          </div>
        </div>

      </div>
    </footer>
  );
};
