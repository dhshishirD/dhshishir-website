import React, { useState } from 'react';
import { AtsResumeChecker } from './tools/AtsResumeChecker';
import { IeltsScoreEstimator } from './tools/IeltsScoreEstimator';
import { SkillGapFinder } from './tools/SkillGapFinder';
import { CgpaConverter } from './tools/CgpaConverter';
import { FileText, Award, Compass, Calculator } from 'lucide-react';

export const ToolsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ats' | 'ielts' | 'skill' | 'cgpa'>('ats');

  const tabs = [
    { id: 'ats', label: 'ATS CV Diagnostic', icon: FileText },
    { id: 'ielts', label: 'IELTS Band Predictor', icon: Award },
    { id: 'skill', label: 'Skill-to-Course Matcher', icon: Compass },
    { id: 'cgpa', label: 'CGPA 4.0 Scale Converter', icon: Calculator },
  ];

  return (
    <section id="tools" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Free Interactive Career Tools
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Smart Self-Diagnostic Utilities
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Instantly evaluate your job readiness, calculate your study timeline, and match the best training courses.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl shadow-indigo-600/30 border border-indigo-400/40'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="transition-all duration-300">
          {activeTab === 'ats' && <AtsResumeChecker />}
          {activeTab === 'ielts' && <IeltsScoreEstimator />}
          {activeTab === 'skill' && <SkillGapFinder />}
          {activeTab === 'cgpa' && <CgpaConverter />}
        </div>

      </div>
    </section>
  );
};
