import React from 'react';
import { Sparkles, BookOpen, Wrench, CheckCircle, ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-emerald-600/15 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Daloyar Hassan Shishir • Career & Education Mentor</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Master Skills, Ace English & <br className="hidden sm:inline" />
              <span className="gradient-text">Build Your Dream Career</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Welcome to <span className="text-white font-semibold">dhshishir.com</span>. Your all-in-one portal for curated <span className="text-emerald-400 font-semibold">10 Minute School courses</span>, free interactive tools (ATS CV checker, IELTS score estimator), and English study guidelines designed for Bangladeshi students and job seekers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#tools"
                className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 hover:scale-[1.02] text-white font-bold text-sm shadow-xl shadow-indigo-600/25 transition flex items-center gap-2"
              >
                <Wrench className="w-4 h-4" /> Try Free Tools
              </a>
              <a
                href="#courses"
                className="px-7 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm transition flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-emerald-400" /> Explore Top Courses
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">100+</div>
                <div className="text-xs text-slate-400 font-medium">Curated BD Courses</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">100%</div>
                <div className="text-xs text-slate-400 font-medium">Free Career Tools</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400">10k+</div>
                <div className="text-xs text-slate-400 font-medium">Learners Guided</div>
              </div>
            </div>
          </div>

          {/* Right Hero Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-gradient-to-b from-slate-800/90 to-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-700/80 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-emerald-500 p-1 flex items-center justify-center">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-white font-black text-2xl">
                    DS
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Daloyar Hassan Shishir</h2>
                  <p className="text-xs text-emerald-400 font-medium">Career Consultant & Educator</p>
                  <p className="text-[11px] text-slate-400">contactwithshishir@gmail.com</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs text-slate-200">Official 10 Minute School Affiliate Partner</span>
                </div>
                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0" />
                  <span className="text-xs text-slate-200">ATS Resume Writing & Review Specialist</span>
                </div>
                <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 shrink-0" />
                  <span className="text-xs text-slate-200">Spoken English & IELTS Self-Study Mentor</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-center">
                <a
                  href="#contact"
                  className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center justify-center gap-1"
                >
                  Learn more about Shishir's mission <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
