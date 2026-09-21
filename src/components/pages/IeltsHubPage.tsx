import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Mic, BarChart3, Scale, Zap, Award, 
  Sparkles, Download, ArrowRight, Clock, Compass
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { IeltsCollocationDuel } from '../tools/IeltsCollocationDuel';
import { IeltsTask1ChartMorpher } from '../tools/IeltsTask1ChartMorpher';
import { IeltsTfngCourtroom } from '../tools/IeltsTfngCourtroom';
import { IeltsSpeakingFlowRadar } from '../tools/IeltsSpeakingFlowRadar';
import { IeltsWritingAnalyzer } from '../tools/IeltsWritingAnalyzer';
import { IeltsSpeakingSimulator } from '../tools/IeltsSpeakingSimulator';
import { IeltsScoreEstimator } from '../tools/IeltsScoreEstimator';
import { AdSenseBanner } from '../common/AdSenseBanner';

export const IeltsHubPage: React.FC = () => {
  const [activeMainTab, setActiveMainTab] = useState<'tools' | 'roadmap' | 'masterclass' | 'resources'>('tools');
  const [selectedToolId, setSelectedToolId] = useState<string>('collocation-duel');

  // ROADMAP GENERATOR STATE
  const [targetBand, setTargetBand] = useState<number>(7.5);
  const [examTimeline, setExamTimeline] = useState<'1month' | '2months' | '3months'>('2months');
  const [currentLevel, setCurrentLevel] = useState<'intermediate' | 'upper_intermediate' | 'advanced'>('upper_intermediate');
  const [generatedPlan, setGeneratedPlan] = useState(false);

  useEffect(() => {
    document.title = 'IELTS Band 8.5 Master Preparation Hub | Free Interactive Practice & Simulators | DH Shishir';
  }, []);

  const toolsList = [
    {
      id: 'collocation-duel',
      name: 'Band 9 Collocation Duel',
      tagline: '60s Speed arcade & Band 5➔9 sentence morphing dial',
      icon: Zap,
      badge: 'Speed Arcade',
      component: IeltsCollocationDuel
    },
    {
      id: 'task1-morpher',
      name: 'Academic Task 1 Chart Morpher',
      tagline: 'Interactive SVG sandbox & live sentence generator',
      icon: BarChart3,
      badge: 'SVG Sandbox',
      component: IeltsTask1ChartMorpher
    },
    {
      id: 'tfng-court',
      name: 'Reading T/F/NG Forensic Court',
      tagline: 'Forensic evidence courtroom & qualifier microscope',
      icon: Scale,
      badge: 'Reading Logic',
      component: IeltsTfngCourtroom
    },
    {
      id: 'speaking-radar',
      name: 'Speaking Flow & WPM Radar',
      tagline: 'Live speech cadence visualizer & 15s reflex drill',
      icon: Mic,
      badge: 'AI Audio Radar',
      component: IeltsSpeakingFlowRadar
    },
    {
      id: 'writing-analyzer',
      name: 'Writing Task 2 Evaluator',
      tagline: '4-pillar rubric analyzer & AWL lexical density scanner',
      icon: BookOpen,
      badge: '4-Pillar Rubric',
      component: IeltsWritingAnalyzer
    },
    {
      id: 'speaking-cue-timer',
      name: 'Speaking Part 2 Cue Timer',
      tagline: 'Official 60s prep + 2-minute speaking countdown',
      icon: Clock,
      badge: 'Exam Timer',
      component: IeltsSpeakingSimulator
    },
    {
      id: 'score-estimator',
      name: 'Band Score Calculator',
      tagline: 'Instant raw-to-band score conversion for Academic & GT',
      icon: Award,
      badge: 'Score Converter',
      component: IeltsScoreEstimator
    }
  ];

  const activeTool = toolsList.find(t => t.id === selectedToolId) || toolsList[0];
  const ActiveToolComponent = activeTool.component;

  const handleGenerateRoadmap = () => {
    setGeneratedPlan(true);
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* HERO SECTION */}
        <div className="p-8 md:p-12 bg-gradient-to-br from-teal-950 via-slate-900 to-teal-900 text-white rounded-3xl shadow-2xl relative overflow-hidden space-y-6">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3.5 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> 100% Free Global Academic Hub
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold">
              Cambridge & IDP Aligned
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-semibold">
              UCC Senior Lecturer (7+ Yrs Pedagogy)
            </span>
          </div>

          <div className="space-y-3 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              IELTS Band 8.5+ Master Preparation Hub
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Master the Cambridge IELTS exam with free, interactive diagnostic engines, SVG graph sandboxes, real-time speech cadence radars, and forensic reading logic gates. No paywalls, no login barriers.
            </p>
          </div>

          {/* Key Metric Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 max-w-4xl">
            <div className="p-3.5 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-xs">
              <div className="text-2xl font-black text-teal-300">6 Engines</div>
              <div className="text-[11px] text-slate-300">Interactive Simulators</div>
            </div>
            <div className="p-3.5 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-xs">
              <div className="text-2xl font-black text-amber-300">300+ Pairs</div>
              <div className="text-[11px] text-slate-300">Band 9 Collocations</div>
            </div>
            <div className="p-3.5 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-xs">
              <div className="text-2xl font-black text-emerald-300">100% Free</div>
              <div className="text-[11px] text-slate-300">No Subscription</div>
            </div>
            <div className="p-3.5 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-xs">
              <div className="text-2xl font-black text-sky-300">Anki Vault</div>
              <div className="text-[11px] text-slate-300">1-Click Deck Exports</div>
            </div>
          </div>
        </div>

        {/* MAIN MODULE NAVIGATION TABS */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4">
          <button
            onClick={() => setActiveMainTab('tools')}
            className={`px-5 py-3 rounded-2xl text-xs font-bold flex items-center gap-2 transition cursor-pointer ${
              activeMainTab === 'tools'
                ? 'bg-teal-900 text-white shadow-md'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Zap className="w-4 h-4" /> 1. Interactive Practice Simulators (6)
          </button>
          <button
            onClick={() => setActiveMainTab('roadmap')}
            className={`px-5 py-3 rounded-2xl text-xs font-bold flex items-center gap-2 transition cursor-pointer ${
              activeMainTab === 'roadmap'
                ? 'bg-teal-900 text-white shadow-md'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Compass className="w-4 h-4" /> 2. Band 8.5 Study Roadmap Generator
          </button>
          <button
            onClick={() => setActiveMainTab('masterclass')}
            className={`px-5 py-3 rounded-2xl text-xs font-bold flex items-center gap-2 transition cursor-pointer ${
              activeMainTab === 'masterclass'
                ? 'bg-teal-900 text-white shadow-md'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" /> 3. Examiner Masterclass Guides
          </button>
          <button
            onClick={() => setActiveMainTab('resources')}
            className={`px-5 py-3 rounded-2xl text-xs font-bold flex items-center gap-2 transition cursor-pointer ${
              activeMainTab === 'resources'
                ? 'bg-teal-900 text-white shadow-md'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Download className="w-4 h-4" /> 4. Free Anki Decks & Vault
          </button>
        </div>

        {/* TAB 1: INTERACTIVE SIMULATORS SUITE */}
        {activeMainTab === 'tools' && (
          <div className="space-y-6">
            {/* Tool Selector Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
              {toolsList.map(tool => {
                const Icon = tool.icon;
                const isSelected = selectedToolId === tool.id;
                return (
                  <button
                    key={tool.id}
                    onClick={() => setSelectedToolId(tool.id)}
                    className={`p-3.5 rounded-2xl border-2 text-left transition cursor-pointer space-y-1.5 ${
                      isSelected
                        ? 'bg-teal-950 text-white border-teal-500 shadow-lg'
                        : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className={`p-2 rounded-xl ${isSelected ? 'bg-teal-800 text-teal-200' : 'bg-slate-100 text-slate-700'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${isSelected ? 'bg-teal-800 text-teal-100' : 'bg-slate-100 text-slate-600'}`}>
                        {tool.badge}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-xs leading-tight line-clamp-1">{tool.name}</div>
                      <div className={`text-[10px] line-clamp-1 mt-0.5 ${isSelected ? 'text-teal-200' : 'text-slate-500'}`}>
                        {tool.tagline}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Embedded Tool Component */}
            <div className="mt-6">
              <ActiveToolComponent />
            </div>

            {/* In-Page Responsive Ad Unit */}
            <AdSenseBanner slot="7890123456" className="max-w-4xl mx-auto" />
          </div>
        )}

        {/* TAB 2: BAND 8.5 ROADMAP GENERATOR */}
        {activeMainTab === 'roadmap' && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-xl space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-teal-800" /> Personalized IELTS Band 8.5 Milestone Planner
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Configure your target band and preparation timeframe to synthesize a week-by-week study plan with daily skill quotas.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold">
                <div>
                  <label className="block text-slate-600 mb-1.5">Target Overall Band Score:</label>
                  <select
                    value={targetBand}
                    onChange={e => setTargetBand(parseFloat(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 outline-none"
                  >
                    <option value={6.5}>Band 6.5 (Standard Graduate Minimum)</option>
                    <option value={7.0}>Band 7.0 (Top US/UK Universities)</option>
                    <option value={7.5}>Band 7.5 (Top Tier Graduate Admission)</option>
                    <option value={8.0}>Band 8.0 (Teaching / High Scholarship)</option>
                    <option value={8.5}>Band 8.5 (Mastery Tier)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-600 mb-1.5">Available Timeframe:</label>
                  <select
                    value={examTimeline}
                    onChange={e => setExamTimeline(e.target.value as any)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 outline-none"
                  >
                    <option value="1month">1 Month (Intensive Sprint - 3 hrs/day)</option>
                    <option value="2months">2 Months (Balanced Pace - 2 hrs/day)</option>
                    <option value="3months">3 Months (Deep Foundational - 1.5 hrs/day)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-600 mb-1.5">Current English Proficiency:</label>
                  <select
                    value={currentLevel}
                    onChange={e => setCurrentLevel(e.target.value as any)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 outline-none"
                  >
                    <option value="intermediate">Intermediate (B1 / Band 5.5-6.0)</option>
                    <option value="upper_intermediate">Upper Intermediate (B2 / Band 6.5)</option>
                    <option value="advanced">Advanced (C1 / Band 7.0-7.5)</option>
                  </select>
                </div>
              </div>

              <button
                onClick={handleGenerateRoadmap}
                className="w-full py-4 rounded-2xl bg-teal-900 hover:bg-teal-800 text-white font-extrabold text-xs shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" /> Synthesize Personalized Milestone Roadmap
              </button>
            </div>

            {generatedPlan && (
              <div className="p-8 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-2xl space-y-6 animate-fadeIn">
                <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-xs text-teal-400 font-mono">TARGET: BAND {targetBand.toFixed(1)}</span>
                    <h4 className="text-xl font-bold text-white mt-0.5">Your Custom 4-Week Milestone Blueprint</h4>
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold">
                    {examTimeline.replace('months', ' Months').replace('month', ' Month')} Sprint
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-2">
                    <div className="font-bold text-teal-300 flex items-center gap-1.5">
                      <Zap className="w-4 h-4" /> Week 1–2: Lexical Resource & T/F/NG Logic
                    </div>
                    <ul className="space-y-1.5 text-slate-300 text-[11px]">
                      <li>• Complete 5 rounds daily in the <strong>Band 9 Collocation Duel</strong>.</li>
                      <li>• Solve 3 <strong>T/F/NG Forensic Court</strong> cases daily focusing on quantifier traps.</li>
                      <li>• Memorize 25 Academic Word List (AWL) collocations from our Anki vault.</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-2">
                    <div className="font-bold text-amber-300 flex items-center gap-1.5">
                      <BarChart3 className="w-4 h-4" /> Week 3–4: Task 1 Synthesis & Speaking Reflexes
                    </div>
                    <ul className="space-y-1.5 text-slate-300 text-[11px]">
                      <li>• Practice 20 minutes daily on the <strong>Task 1 Chart Morpher</strong> sandbox.</li>
                      <li>• Complete the <strong>15-Second Part 3 Reflex Drill</strong> for 10 abstract topics.</li>
                      <li>• Record 2 full Cue Cards on the <strong>Speaking Flow Radar</strong> targeting 135 WPM.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: EXAMINER MASTERCLASS ARTICLES */}
        {activeMainTab === 'masterclass' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200">
                  Speaking Band 9.0
                </span>
                <h4 className="font-bold text-slate-900 text-base">
                  IELTS Speaking Band 9 Complete Guide: Examiner Transcripts & Idioms
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Real examiner transcripts, idiomatic discourse markers, natural fluency fillers, and strategic 1-minute cue card note-taking blueprints.
                </p>
              </div>
              <a
                href="/blog/ielts-speaking-band-9-complete-guide-exam-transcripts-idioms"
                className="text-xs font-bold text-teal-800 hover:text-teal-900 flex items-center gap-1 pt-2"
              >
                Read Complete Masterclass <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                  Writing & SOP
                </span>
                <h4 className="font-bold text-slate-900 text-base">
                  Statement of Purpose (SOP) for Top US Universities
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Field-tested Statement of Purpose frameworks, paragraph progression formulas, and narrative hooks for competitive graduate school admissions.
                </p>
              </div>
              <a
                href="/blog/statement-of-purpose-sop-us-universities-winning-templates"
                className="text-xs font-bold text-teal-800 hover:text-teal-900 flex items-center gap-1 pt-2"
              >
                Read Complete Masterclass <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-50 text-purple-800 border border-purple-200">
                  Lexical Resource
                </span>
                <h4 className="font-bold text-slate-900 text-base">
                  500+ High-Frequency Academic Collocations Handbook
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The definitive handbook of high-frequency academic collocations, syntactic pairings, false friends, and sentence templates for non-native test-takers.
                </p>
              </div>
              <a
                href="/blog/academic-collocations-handbook-ielts-higher-studies-gre"
                className="text-xs font-bold text-teal-800 hover:text-teal-900 flex items-center gap-1 pt-2"
              >
                Read Complete Masterclass <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* TAB 4: FREE ANKI DECKS & RESOURCE VAULT */}
        {activeMainTab === 'resources' && (
          <div className="max-w-3xl mx-auto space-y-4 text-xs">
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <Download className="w-4 h-4 text-teal-800" /> Free Candidate Downloadables
                </div>
                <span className="text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded-full font-bold">
                  Instant Access
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between gap-4">
                  <div>
                    <h5 className="font-bold text-slate-900 text-xs">Band 9 Academic Collocations Anki Deck</h5>
                    <p className="text-[11px] text-slate-500">250+ Flashcards with definitions, C1/C2 context, and example sentences.</p>
                  </div>
                  <a
                    href="#/tools/ielts-collocation-duel"
                    className="px-4 py-2 bg-teal-900 hover:bg-teal-800 text-white rounded-xl font-bold text-xs transition whitespace-nowrap"
                  >
                    Export from Vault
                  </a>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between gap-4">
                  <div>
                    <h5 className="font-bold text-slate-900 text-xs">Task 1 Preposition & Reporting Matrix</h5>
                    <p className="text-[11px] text-slate-500">Cheat sheet covering dynamic verbs, percentages, and overview rules.</p>
                  </div>
                  <a
                    href="#/tools/ielts-task1-chart-morpher"
                    className="px-4 py-2 bg-teal-900 hover:bg-teal-800 text-white rounded-xl font-bold text-xs transition whitespace-nowrap"
                  >
                    View Matrix
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
