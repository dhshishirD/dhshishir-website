import React, { useState } from 'react';
import { 
  FileText, 
  BookOpen, 
  Mic, 
  SpellCheck, 
  Award, 
  Calculator, 
  Compass, 
  ArrowLeft, 
  Share2, 
  Check, 
  ExternalLink 
} from 'lucide-react';
import { CoverLetterGenerator } from './CoverLetterGenerator';
import { IeltsWritingAnalyzer } from './IeltsWritingAnalyzer';
import { IeltsSpeakingSimulator } from './IeltsSpeakingSimulator';
import { BanglaMistakeChecker } from './BanglaMistakeChecker';
import { BcsRoadmapTracker } from './BcsRoadmapTracker';
import { AtsResumeChecker } from './AtsResumeChecker';
import { IeltsScoreEstimator } from './IeltsScoreEstimator';
import { CgpaConverter } from './CgpaConverter';
import { SkillGapFinder } from './SkillGapFinder';
import { SOCIAL_LINKS } from '../../data/portfolioData';

export interface ToolDef {
  id: string;
  name: string;
  tagline: string;
  category: 'Career & Jobs' | 'IELTS & English' | 'Academic & BCS';
  icon: any;
  badge: string;
  component: React.ComponentType;
}

export const ALL_TOOLS: ToolDef[] = [
  {
    id: 'cover-letter',
    name: 'AI Cover Letter Generator',
    tagline: 'Generate tailored, ATS-compliant cover letters for corporate, NGO, bank, and tech job circulars in Bangladesh.',
    category: 'Career & Jobs',
    icon: FileText,
    badge: 'High Search Traffic',
    component: CoverLetterGenerator
  },
  {
    id: 'ats-resume',
    name: 'ATS CV Readiness Diagnostic',
    tagline: 'Audit your CV layout, section headings, and keywords to pass automated corporate hiring filters.',
    category: 'Career & Jobs',
    icon: FileText,
    badge: 'Top Bookmarked',
    component: AtsResumeChecker
  },
  {
    id: 'ielts-writing',
    name: 'IELTS Writing Task 2 Evaluator',
    tagline: 'Live word count tracker, paragraph balance checker, cohesive devices counter, and estimated band rating.',
    category: 'IELTS & English',
    icon: BookOpen,
    badge: 'IELTS Viral Tool',
    component: IeltsWritingAnalyzer
  },
  {
    id: 'ielts-speaking',
    name: 'IELTS Speaking Part 2 Simulator',
    tagline: 'Real 1-minute preparation and 2-minute speaking countdown timer with official recent cue cards.',
    category: 'IELTS & English',
    icon: Mic,
    badge: 'Real Exam Timer',
    component: IeltsSpeakingSimulator
  },
  {
    id: 'bangla-mistake-checker',
    name: 'Bangladeshi English Error Scanner',
    tagline: 'Instant diagnostic for typical Bengali-speaker grammatical habits, false collocations, and preposition errors.',
    category: 'IELTS & English',
    icon: SpellCheck,
    badge: 'UCC 7+ Yrs Pedagogy',
    component: BanglaMistakeChecker
  },
  {
    id: 'ielts-calculator',
    name: 'IELTS Band Score Calculator',
    tagline: 'Calculate overall IELTS band score from raw scores in Academic and General Training modules.',
    category: 'IELTS & English',
    icon: Award,
    badge: 'Instant Conversion',
    component: IeltsScoreEstimator
  },
  {
    id: 'bcs-roadmap',
    name: 'BCS Preparation & Syllabus Tracker',
    tagline: 'Track 200 marks Preliminary & Written preparation matrix with Cadre-specific strategic guidelines.',
    category: 'Academic & BCS',
    icon: Award,
    badge: '47th/48th BCS Ready',
    component: BcsRoadmapTracker
  },
  {
    id: 'cgpa-converter',
    name: 'University CGPA 4.0 Scale Converter',
    tagline: 'Multi-semester weighted CGPA and percentage conversion mapped to SUST, DU, and private university scales.',
    category: 'Academic & BCS',
    icon: Calculator,
    badge: 'University Scale',
    component: CgpaConverter
  },
  {
    id: 'skill-gap',
    name: 'Career Skill Gap & Course Matcher',
    tagline: 'Identify missing skills for your dream career and get tailored roadmap recommendations.',
    category: 'Career & Jobs',
    icon: Compass,
    badge: 'Career Navigator',
    component: SkillGapFinder
  }
];

interface StandaloneToolPageProps {
  toolId?: string;
  onNavigateHome: () => void;
  onSelectTool: (id: string) => void;
}

export const StandaloneToolPage: React.FC<StandaloneToolPageProps> = ({
  toolId,
  onNavigateHome,
  onSelectTool
}) => {
  const [copiedShare, setCopiedShare] = useState(false);
  const activeTool = ALL_TOOLS.find(t => t.id === toolId) || ALL_TOOLS[0];
  const ToolComponent = activeTool.component;

  const handleShare = () => {
    const url = `${window.location.origin}/#/tools/${activeTool.id}`;
    navigator.clipboard.writeText(url);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2500);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation & Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <button
            onClick={onNavigateHome}
            className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 transition cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Main Homepage (dhshishir.com)
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-bold text-slate-200 border border-slate-700/80 flex items-center gap-2 transition cursor-pointer"
            >
              {copiedShare ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              {copiedShare ? 'Tool Link Copied!' : 'Share This Tool'}
            </button>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#1877F2]/20 hover:bg-[#1877F2]/30 text-[#1877F2] border border-[#1877F2]/40 text-xs font-bold flex items-center gap-1.5 transition"
            >
              <span className="font-black">f</span> Follow Shishir
            </a>
          </div>
        </div>

        {/* Quick Tool Selector Pills */}
        <div className="space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Available Free Interactive Tools:
          </div>
          <div className="flex flex-wrap gap-2">
            {ALL_TOOLS.map(t => {
              const Icon = t.icon;
              const isCurrent = t.id === activeTool.id;
              return (
                <button
                  key={t.id}
                  onClick={() => onSelectTool(t.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition cursor-pointer ${
                    isCurrent
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-indigo-950/50 border border-indigo-400/40'
                      : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{t.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dedicated Tool Active Area */}
        <div className="transition-all duration-300">
          <ToolComponent />
        </div>

        {/* Organic Lead-In & Creator Attribution */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Curated by Delowar Hassan Shishir (দেলোয়ার হাসান শিশির)
            </div>
            <h4 className="text-lg font-bold text-white">
              Need 1-on-1 Guidance for IELTS, Admission English, or ATS CV Review?
            </h4>
            <p className="text-xs text-slate-400 max-w-xl">
              Senior Lecturer at UCC (7+ years), China 2025 Delegate, Malaysia 2026 Fellow, and SUST English Alumnus. Connect directly for personal mentoring.
            </p>
          </div>
          <a
            href={SOCIAL_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 text-white font-bold text-xs shadow-xl transition whitespace-nowrap flex items-center gap-2"
          >
            Connect on Facebook <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};
