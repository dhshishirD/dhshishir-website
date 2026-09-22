import React from 'react';
import { 
  GraduationCap, Globe, Briefcase, ArrowRight, Sparkles, 
  FileText, Mic, BookOpen, Headphones, ShieldCheck, Zap,
  CheckCircle2, Compass, Award, ExternalLink
} from 'lucide-react';
import type { ViewType } from './Navbar';

interface FlagshipEcosystemSectionProps {
  onNavigate: (view: ViewType, subParam?: string) => void;
}

export const FlagshipEcosystemSection: React.FC<FlagshipEcosystemSectionProps> = ({ onNavigate }) => {
  return (
    <section id="flagship-ecosystems" className="py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-900 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-teal-800" />
            <span>Comprehensive Strategic Ecosystems</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Flagship Platforms & <span className="text-teal-900">Precision AI Engines</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From official Cambridge IELTS handwritten OCR grading to daily foreign policy intelligence and UN/NGO career pathways—discover our 100% free, research-grade public tools.
          </p>
        </div>

        {/* 3 Mega Flagship Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* CARD 1: IELTS BAND 8.5+ ECOSYSTEM */}
          <div className="bg-white border-2 border-teal-100 hover:border-teal-400 rounded-3xl p-7 shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-200 text-teal-900 flex items-center justify-center shadow-2xs">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-900 text-[11px] font-black uppercase tracking-wider">
                  16 AI Tools Included
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-slate-900 group-hover:text-teal-900 transition">
                  IELTS Band 8.5+ Preparation Hub
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  The complete all-in-one free simulation suite with real paper OCR essay scanning, acoustic speech radar, and forensic reading/listening labs.
                </p>
              </div>

              {/* Tool Feature Bullets */}
              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Handwritten Essay OCR:</strong> Snap photo & get instant Cambridge 4-pillar band feedback</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>AI Speech Radar:</strong> Live WPM cadence, acoustic fluency, & Part 1-3 simulator</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Task 1 Chart Morpher:</strong> Dynamic data visualization & Band 9 sentence sandbox</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Collocation Arcade:</strong> C1/C2 speed duel & 120-Day Daily Roadmap tracker</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                onClick={() => onNavigate('ielts')}
                className="w-full py-3.5 px-4 rounded-2xl bg-teal-900 hover:bg-teal-800 text-white font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Launch IELTS Preparation Hub</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* CARD 2: DIPLOMATIC DESK & ORGANIZATION DOSSIERS */}
          <div className="bg-white border-2 border-slate-200 hover:border-slate-400 rounded-3xl p-7 shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center shadow-2xs">
                  <Globe className="w-7 h-7 text-teal-900" />
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-[11px] font-black uppercase tracking-wider">
                  25+ Think Tanks & 24+ Dossiers
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-slate-900 group-hover:text-teal-900 transition">
                  Diplomatic Desk & Organization Dossiers
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Real-time geopolitical intelligence syntheses, strategic chokepoint maps, and deep career/scholarship dossiers for 24+ global agencies.
                </p>
              </div>

              {/* Feature Bullets */}
              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Global Think Tank Intel:</strong> Daily strategic briefing on South Asia & Indo-Pacific</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>24+ Organization Dossiers:</strong> UN, World Bank, ADB, JICA, Chevening pathways</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Geopolitical Map:</strong> Interactive maritime sea lanes & Malacca/Hormuz chokepoints</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Crisis Risk Simulator:</strong> Scenario forecasting & international law analysis</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => onNavigate('diplomacy')}
                className="flex-1 py-3.5 px-3 rounded-2xl bg-teal-900 hover:bg-teal-800 text-white font-bold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>Diplomatic Desk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('organizations')}
                className="flex-1 py-3.5 px-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Global Dossiers</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* CARD 3: EXECUTIVE CAREER & ATS SUITE */}
          <div className="bg-white border-2 border-slate-200 hover:border-slate-400 rounded-3xl p-7 shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-center justify-center shadow-2xs">
                  <Briefcase className="w-7 h-7 text-teal-900" />
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-black uppercase tracking-wider">
                  Career Suite & Masterclass
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-black text-slate-900 group-hover:text-teal-900 transition">
                  Executive Career & Communication Hub
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Precision ATS resume auditing, executive negotiation courses, Bengali error checker, and verified BCS & global job trackers.
                </p>
              </div>

              {/* Feature Bullets */}
              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <div className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>ATS Resume Checker:</strong> 120-metric keyword matching & Harvard/Oxford formatting</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Bangla Mistake Checker:</strong> Official Bangla Academy orthography & syntax corrector</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Executive Course:</strong> Multi-stakeholder coordination, diplomatic memos, & crisis talks</span>
                </div>
                <div className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>Cover Letter Generator:</strong> AI-powered tailored narrative constructor</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => onNavigate('tools', 'ats-resume')}
                className="flex-1 py-3.5 px-3 rounded-2xl bg-teal-900 hover:bg-teal-800 text-white font-bold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>ATS Checker</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('communication-course')}
                className="flex-1 py-3.5 px-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Executive Course</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
