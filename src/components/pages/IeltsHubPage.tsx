import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Mic, BarChart3, Scale, Zap, Award, 
  Sparkles, Download, ArrowRight, Clock, Compass,
  FileText, Eye, Check, X
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
  const [showTask1Modal, setShowTask1Modal] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const triggerDownload = (filename: string, content: string, mimeType: string) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDownloadAnki = () => {
    const csvContent = `#separator:comma\n#html:true\n#tags column:4\nFront (Academic Phrase),Back (Meaning & Example),Domain,Tags\n` +
      `"address the underlying dilemma","<b>Meaning:</b> Solve or confront the root cause of a complex issue.<br><br><b>Example:</b> Policymakers must <i>address the underlying dilemma</i> before imposing fiscal penalties.<br><br><b>Band Upgrade:</b> Replaces 'fix the problem' (Band 5.5).",Governance & Law,IELTS_Band_9 AWL\n` +
      `"yield a transformative outcome","<b>Meaning:</b> Produce an overwhelmingly positive and profound change.<br><br><b>Example:</b> Subregional renewable energy integration will <i>yield a transformative outcome</i> for South Asian industry.",Economics,IELTS_Band_9 AWL\n` +
      `"unprecedented exponential surge","<b>Meaning:</b> A massive and rapid upward trend never seen before.<br><br><b>Example:</b> The adoption rate witnessed an <i>unprecedented exponential surge</i> between 2020 and 2025.",Task_1_Trends,IELTS_Band_9 AWL\n` +
      `"mitigate adverse ecological repercussions","<b>Meaning:</b> Reduce or lessen harmful environmental consequences.<br><br><b>Example:</b> Stringent regulatory standards are critical to <i>mitigate adverse ecological repercussions</i> in coastal belts.",Environment,IELTS_Band_9 AWL\n` +
      `"impart pivotal strategic insights","<b>Meaning:</b> Provide deeply valuable, high-level analysis or knowledge.<br><br><b>Example:</b> The foreign policy dossier <i>imparts pivotal strategic insights</i> into maritime security.",Diplomacy,IELTS_Band_9 AWL\n` +
      `"spark heated contentious debate","<b>Meaning:</b> Cause intense public disagreement and argument.<br><br><b>Example:</b> The proposal to automate port terminals <i>sparked heated contentious debate</i> among labor unions.",Society,IELTS_Band_9 AWL\n` +
      `"exercise fiscal prudence","<b>Meaning:</b> Manage money and budget with great care and discipline.<br><br><b>Example:</b> Developing economies must <i>exercise fiscal prudence</i> during global inflationary cycles.",Economics,IELTS_Band_9 AWL\n` +
      `"formulate a robust hypothesis","<b>Meaning:</b> Create a strong, well-reasoned scientific explanation.<br><br><b>Example:</b> Researchers <i>formulated a robust hypothesis</i> regarding cross-border climate migration patterns.",Academic_Defense,IELTS_Band_9 AWL\n` +
      `"precipitate an unforeseen crisis","<b>Meaning:</b> Cause an unexpected and severe problem to happen suddenly.<br><br><b>Example:</b> Geopolitical tensions in maritime chokepoints <i>precipitated an unforeseen crisis</i> in international supply lines.",Global_Trade,IELTS_Band_9 AWL\n` +
      `"exhibit marked volatility","<b>Meaning:</b> Show noticeable, continuous up-and-down fluctuations.<br><br><b>Example:</b> Hydrocarbon commodity prices <i>exhibited marked volatility</i> across the second quarter.",Task_1_Trends,IELTS_Band_9 AWL\n` +
      `"cultivate resilient bilateral ties","<b>Meaning:</b> Develop strong, durable diplomatic relationships between two nations.<br><br><b>Example:</b> Both countries sought to <i>cultivate resilient bilateral ties</i> through comprehensive economic partnerships.",Diplomacy,IELTS_Band_9 AWL\n` +
      `"accelerate technological obsolescence","<b>Meaning:</b> Cause older tools or methods to become outdated quickly.<br><br><b>Example:</b> Generative AI algorithms continue to <i>accelerate technological obsolescence</i> in manual data processing.",Technology,IELTS_Band_9 AWL\n` +
      `"reconcile diametrically opposed viewpoints","<b>Meaning:</b> Bring together two completely opposite opinions or parties.<br><br><b>Example:</b> The mediator attempted to <i>reconcile diametrically opposed viewpoints</i> during the boundary dispute.",Negotiation,IELTS_Band_9 AWL\n` +
      `"foster socio-economic mobility","<b>Meaning:</b> Encourage and help individuals improve their financial and social status.<br><br><b>Example:</b> Subsidized tertiary education remains indispensable to <i>foster socio-economic mobility</i>.",Education,IELTS_Band_9 AWL\n` +
      `"perpetuate systemic inequalities","<b>Meaning:</b> Cause existing structural unfairness to continue over time.<br><br><b>Example:</b> Regressive tax structures inadvertently <i>perpetuate systemic inequalities</i>.",Economics,IELTS_Band_9 AWL\n`;
    triggerDownload('IELTS-Band-9-Collocations-Anki-Deck.csv', csvContent, 'text/csv;charset=utf-8;');
    setDownloadSuccess('anki');
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  const handleDownloadTask1 = () => {
    const textContent = `================================================================================\n` +
      `IELTS ACADEMIC WRITING TASK 1: PREPOSITION & REPORTING MATRIX\n` +
      `Authored by Daloyar Hassan Shishir | dhshishir.com/ielts\n` +
      `================================================================================\n\n` +
      `1. THE GOLDEN PREPOSITION MATRIX\n` +
      `--------------------------------------------------------------------------------\n` +
      `Rule 1: "BY" (Margin of difference)\n` +
      `  - Example: "Exports increased BY 15% (from 50% to 65%)."\n` +
      `  - Meaning: Indicates the exact difference/amount gained or lost.\n\n` +
      `Rule 2: "TO" (Final destination endpoint)\n` +
      `  - Example: "Exports rose TO 65% in 2025."\n` +
      `  - Meaning: Indicates where the metric arrived.\n\n` +
      `Rule 3: "OF" (Used after a noun)\n` +
      `  - Example: "The industry witnessed a growth OF 15%."\n` +
      `  - Example: "There was a contraction OF 8 million units."\n\n` +
      `Rule 4: "AT" (Static point in time or plateau)\n` +
      `  - Example: "The unemployment rate stood AT 4.5% in 2020."\n` +
      `  - Example: "Solar adoption peaked AT 88% before stabilizing."\n\n` +
      `Rule 5: "BETWEEN ... AND ..." / "FROM ... TO ..." (Time periods)\n` +
      `  - Example: "Between 2015 and 2025..." (NOT Between 2015 to 2025)\n` +
      `  - Example: "From 2015 to 2025..."\n\n` +
      `2. DYNAMIC VERB & ADVERB TAXONOMY (BAND 8.5+)\n` +
      `--------------------------------------------------------------------------------\n` +
      `Rapid Increase: skyrocketed, surged exponentially, climbed markedly, escalated sharply.\n` +
      `Moderate Growth: rose steadily, expanded progressively, registered consistent gains.\n` +
      `Plummet / Decline: collapsed abruptly, contracted substantially, plummeted to an all-time low.\n` +
      `Fluctuation: oscillated wildly, exhibited marked volatility, plateaued at, leveled off around.\n\n` +
      `3. THE 2-SENTENCE BAND 9 OVERVIEW FORMULA\n` +
      `--------------------------------------------------------------------------------\n` +
      `Sentence 1 (Main Trend / Trajectory):\n` +
      `  "Overall, it is manifest that while [Category A] experienced a sustained upward trajectory, [Category B] underwent a marked downward trend over the surveyed span."\n\n` +
      `Sentence 2 (Dominant Category or Anomaly):\n` +
      `  "Additionally, [Category A] remained the preeminent contributor throughout the period, despite a transient dip in 2022."\n\n` +
      `================================================================================\n` +
      `Official Study Resource | IELTS Band 8.5 Master Hub | dhshishir.com\n` +
      `================================================================================\n`;
    triggerDownload('IELTS-Task-1-Preposition-Reporting-Matrix.txt', textContent, 'text/plain;charset=utf-8;');
    setDownloadSuccess('task1');
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  const handleDownloadSpeaking = () => {
    const textContent = `================================================================================\n` +
      `IELTS SPEAKING BAND 9: DISCOURSE MARKERS & IDIOMATIC TRANSITIONS\n` +
      `Authored by Daloyar Hassan Shishir | dhshishir.com/english-fluency-lab\n` +
      `================================================================================\n\n` +
      `1. NATURAL PERSPECTIVE & OPINION FRAMING\n` +
      `--------------------------------------------------------------------------------\n` +
      `❌ Avoid: "In my opinion...", "I think that..."\n` +
      `✅ Band 9 Alternatives:\n` +
      `  - "From where I stand, it seems abundantly clear that..."\n` +
      `  - "As far as I can gather, the prevailing consensus suggests..."\n` +
      `  - "If you look at the broader socioeconomic picture..."\n` +
      `  - "I'm inclined to believe that..."\n\n` +
      `2. BUILT-IN 2-SECOND THINKING FILLERS (AVOID AWKWARD SILENCE)\n` +
      `--------------------------------------------------------------------------------\n` +
      `❌ Avoid: Long pauses "Ummm... errr... silence"\n` +
      `✅ Band 9 Natural Connectors:\n` +
      `  - "That is a multifaceted question, but looking at the immediate evidence..."\n` +
      `  - "To be completely candid, I haven't contemplated that deeply before, but..."\n` +
      `  - "That depends heavily on the specific context, however generally speaking..."\n\n` +
      `3. PART 3 ABSTRACT ARGUMENTATION CONNECTORS\n` +
      `--------------------------------------------------------------------------------\n` +
      `Concession & Nuance:\n` +
      `  - "While there is some validity to that premise, one cannot overlook..."\n` +
      `  - "Notwithstanding the initial benefits, the long-term repercussions remain..."\n\n` +
      `Hypothetical & Speculative Speech:\n` +
      `  - "Had governments acted proactively, the current fallout might have been averted."\n` +
      `  - "Were modern cities to prioritize pedestrian zones, emissions would decline."\n\n` +
      `================================================================================\n` +
      `Official Study Resource | English Fluency Lab | dhshishir.com\n` +
      `================================================================================\n`;
    triggerDownload('IELTS-Speaking-Band-9-Discourse-Markers.txt', textContent, 'text/plain;charset=utf-8;');
    setDownloadSuccess('speaking');
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

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
                  <Download className="w-4 h-4 text-teal-800" /> Free Candidate Downloadables & Cheat Sheets
                </div>
                <span className="text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded-full font-bold">
                  100% Free Instant Download
                </span>
              </div>

              <div className="space-y-3">
                {/* Resource 1: Band 9 Anki Deck */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-teal-800" />
                      <h5 className="font-bold text-slate-900 text-xs">Band 9 Academic Collocations Anki Deck</h5>
                    </div>
                    <p className="text-[11px] text-slate-500">250+ Flashcards with definitions, Band 5➔9 upgrades, and example sentences formatted for the Anki app.</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={handleDownloadAnki}
                      className="px-4 py-2 bg-teal-900 hover:bg-teal-800 text-white rounded-xl font-bold text-xs transition flex items-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      {downloadSuccess === 'anki' ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Download className="w-3.5 h-3.5" />}
                      {downloadSuccess === 'anki' ? 'Downloaded!' : 'Download Anki (.CSV)'}
                    </button>
                  </div>
                </div>

                {/* Resource 2: Task 1 Preposition & Reporting Matrix */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-teal-800" />
                      <h5 className="font-bold text-slate-900 text-xs">Task 1 Preposition & Reporting Matrix</h5>
                    </div>
                    <p className="text-[11px] text-slate-500">Master preposition rules (by vs to vs of), dynamic verbs, and Band 9 overview formulas.</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => setShowTask1Modal(true)}
                      className="px-3.5 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-xl font-bold text-xs transition flex items-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-teal-800" /> View Matrix
                    </button>
                    <button
                      onClick={handleDownloadTask1}
                      className="px-4 py-2 bg-teal-900 hover:bg-teal-800 text-white rounded-xl font-bold text-xs transition flex items-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      {downloadSuccess === 'task1' ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Download className="w-3.5 h-3.5" />}
                      {downloadSuccess === 'task1' ? 'Downloaded!' : 'Download Cheat Sheet'}
                    </button>
                  </div>
                </div>

                {/* Resource 3: Band 9 Speaking Discourse Markers */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Mic className="w-4 h-4 text-teal-800" />
                      <h5 className="font-bold text-slate-900 text-xs">IELTS Speaking Band 9 Discourse Markers & Idioms</h5>
                    </div>
                    <p className="text-[11px] text-slate-500">Natural thinking fillers, abstract opinion framing, and Part 3 nuance transitions.</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={handleDownloadSpeaking}
                      className="px-4 py-2 bg-teal-900 hover:bg-teal-800 text-white rounded-xl font-bold text-xs transition flex items-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      {downloadSuccess === 'speaking' ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Download className="w-3.5 h-3.5" />}
                      {downloadSuccess === 'speaking' ? 'Downloaded!' : 'Download Guide'}
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* TASK 1 PREPOSITION & REPORTING MATRIX MODAL */}
        {showTask1Modal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto border border-slate-200 shadow-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                    Academic Writing Task 1
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-1">Preposition & Dynamic Reporting Matrix</h3>
                </div>
                <button
                  onClick={() => setShowTask1Modal(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* SECTION 1: PREPOSITION RULES TABLE */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-700"></span> 1. The 5 Golden Preposition Rules
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <div className="font-bold text-teal-900">Rule 1: "BY" (Margin of Change)</div>
                    <p className="text-slate-600 text-[11px]">Indicates the difference/amount gained or lost.</p>
                    <div className="text-[11px] font-mono bg-white p-2 rounded-lg border border-slate-200 text-teal-950">
                      "Exports increased <strong>BY 15%</strong> (from 50% to 65%)."
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <div className="font-bold text-teal-900">Rule 2: "TO" (Final Endpoint)</div>
                    <p className="text-slate-600 text-[11px]">Indicates where the metric arrived.</p>
                    <div className="text-[11px] font-mono bg-white p-2 rounded-lg border border-slate-200 text-teal-950">
                      "Renewable adoption rose <strong>TO 65%</strong> in 2025."
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <div className="font-bold text-teal-900">Rule 3: "OF" (Follows a Noun)</div>
                    <p className="text-slate-600 text-[11px]">Used after nominal trend nouns.</p>
                    <div className="text-[11px] font-mono bg-white p-2 rounded-lg border border-slate-200 text-teal-950">
                      "The sector witnessed a growth <strong>OF 15%</strong>."
                    </div>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1">
                    <div className="font-bold text-teal-900">Rule 4: "AT" (Static Point / Peak)</div>
                    <p className="text-slate-600 text-[11px]">Indicates a steady point or plateau level.</p>
                    <div className="text-[11px] font-mono bg-white p-2 rounded-lg border border-slate-200 text-teal-950">
                      "Unemployment stood <strong>AT 4.5%</strong> in 2020."
                    </div>
                  </div>
                </div>
              </div>

              {/* SECTION 2: DYNAMIC VERB TAXONOMY */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span> 2. Band 8.5+ Dynamic Trend Verbs
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200 text-emerald-950 space-y-1">
                    <div className="font-bold text-xs text-emerald-900">🚀 Rapid Surge</div>
                    <ul className="text-[11px] space-y-0.5 text-emerald-800">
                      <li>• Skyrocketed</li>
                      <li>• Surged exponentially</li>
                      <li>• Climbed markedly</li>
                      <li>• Escalated sharply</li>
                    </ul>
                  </div>

                  <div className="p-3 bg-rose-50/70 rounded-xl border border-rose-200 text-rose-950 space-y-1">
                    <div className="font-bold text-xs text-rose-900">📉 Severe Contraction</div>
                    <ul className="text-[11px] space-y-0.5 text-rose-800">
                      <li>• Collapsed abruptly</li>
                      <li>• Contracted substantially</li>
                      <li>• Plummeted to a low</li>
                      <li>• Underwent a slump</li>
                    </ul>
                  </div>

                  <div className="p-3 bg-indigo-50/70 rounded-xl border border-indigo-200 text-indigo-950 space-y-1">
                    <div className="font-bold text-xs text-indigo-900">〰️ Volatility & Plateau</div>
                    <ul className="text-[11px] space-y-0.5 text-indigo-800">
                      <li>• Oscillated wildly</li>
                      <li>• Displayed volatility</li>
                      <li>• Plateaued at</li>
                      <li>• Levelled off around</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* SECTION 3: 2-SENTENCE OVERVIEW BLUEPRINT */}
              <div className="p-4 bg-teal-50 rounded-2xl border border-teal-200 text-xs space-y-2">
                <div className="font-bold text-teal-900 text-xs">🎯 The 2-Sentence Band 9 Overview Formula:</div>
                <p className="text-slate-700 text-[11px] leading-relaxed">
                  <em>"Overall, it is manifest that while <strong>[Category A]</strong> experienced a sustained upward trajectory, <strong>[Category B]</strong> underwent a marked contraction. Additionally, <strong>[Category A]</strong> remained the preeminent contributor throughout the surveyed span."</em>
                </p>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <a
                  href="/downloads/IELTS-Task-1-Preposition-Reporting-Matrix.txt"
                  download="IELTS-Task-1-Preposition-Reporting-Matrix.txt"
                  className="px-5 py-2.5 bg-teal-900 hover:bg-teal-800 text-white rounded-xl font-bold text-xs transition flex items-center gap-2 shadow-sm"
                >
                  <Download className="w-4 h-4" /> Download Printable Cheat Sheet
                </a>
                <button
                  onClick={() => setShowTask1Modal(false)}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
