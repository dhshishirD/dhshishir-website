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

  // Executive Branded Document Generator (Printable PDF & Word .DOC)
  const generateBrandedHtml = (title: string, subtitle: string, bodyContent: string) => {
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${title} | DH Shishir Knowledge Portal</title>
  <style>
    @page { size: A4; margin: 20mm; }
    body {
      font-family: 'Segoe UI', Arial, sans-serif;
      color: #0f172a;
      background: #ffffff;
      line-height: 1.6;
      margin: 0;
      padding: 24px;
    }
    .header {
      border-bottom: 3px solid #0f766e;
      padding-bottom: 16px;
      margin-bottom: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .brand-title {
      font-size: 22px;
      font-weight: 900;
      color: #0f172a;
      letter-spacing: -0.5px;
    }
    .brand-subtitle {
      font-size: 11px;
      font-weight: 700;
      color: #0f766e;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-top: 2px;
    }
    .badge {
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      color: #166534;
      font-size: 11px;
      font-weight: 800;
      padding: 4px 10px;
      border-radius: 999px;
    }
    .doc-title {
      font-size: 20px;
      font-weight: 800;
      color: #0f172a;
      margin: 16px 0 6px 0;
    }
    .doc-desc {
      font-size: 13px;
      color: #475569;
      margin-bottom: 20px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 16px 0;
      font-size: 12px;
    }
    th {
      background: #0f766e;
      color: #ffffff;
      text-align: left;
      padding: 10px 12px;
      font-weight: 700;
    }
    td {
      padding: 10px 12px;
      border-bottom: 1px solid #e2e8f0;
      vertical-align: top;
    }
    tr:nth-child(even) {
      background: #f8fafc;
    }
    .callout {
      background: #f0fdfa;
      border-left: 4px solid #0f766e;
      padding: 14px 16px;
      border-radius: 0 8px 8px 0;
      margin: 16px 0;
      font-size: 13px;
    }
    .callout-title {
      font-weight: 800;
      color: #0f766e;
      margin-bottom: 4px;
    }
    .tag {
      display: inline-block;
      background: #e0f2fe;
      color: #0369a1;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 10px;
      font-weight: 700;
      margin-right: 4px;
    }
    .footer {
      margin-top: 40px;
      border-top: 1px solid #e2e8f0;
      padding-top: 16px;
      font-size: 11px;
      color: #64748b;
      display: flex;
      justify-content: space-between;
    }
    @media print {
      body { padding: 0; }
      .no-print { display: none; }
    }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <div class="brand-title">DH SHISHIR KNOWLEDGE PORTAL</div>
      <div class="brand-subtitle">Daloyar Hassan Shishir | Diplomatic Enthusiast, Policy Analyst & English Educator</div>
    </div>
    <div class="badge">Band 8.5+ Official Resource</div>
  </div>

  <h1 class="doc-title">${title}</h1>
  <div class="doc-desc">${subtitle}</div>

  ${bodyContent}

  <div class="footer">
    <div>Official Learning Resource | <a href="https://dhshishir.com/ielts" style="color: #0f766e; text-decoration: none;">dhshishir.com/ielts</a></div>
    <div>Dhaka, Bangladesh • Community: @ieltsenglishfluency</div>
  </div>
</body>
</html>`;
  };

  const handleOpenPrintable = (title: string, subtitle: string, bodyContent: string) => {
    const fullHtml = generateBrandedHtml(title, subtitle, bodyContent);
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(fullHtml);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
      }, 500);
    }
  };

  const handleDownloadWordDoc = (filename: string, title: string, subtitle: string, bodyContent: string) => {
    const fullHtml = generateBrandedHtml(title, subtitle, bodyContent);
    const blob = new Blob(['\ufeff', fullHtml], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename.endsWith('.doc') ? filename : `${filename}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Pre-compiled Document Contents
  const COLLOCATIONS_DOC_BODY = `
    <table>
      <thead>
        <tr>
          <th style="width: 25%;">Academic Collocation</th>
          <th style="width: 15%;">Band 5.5 vs 8.5 Upgrade</th>
          <th style="width: 30%;">Meaning & Context</th>
          <th style="width: 30%;">Examiner Example Sentence</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Address the underlying dilemma</strong></td>
          <td><span style="color: #dc2626;">❌ Fix the problem</span><br><span style="color: #166534; font-weight: bold;">✅ Address dilemma</span></td>
          <td>Solve or confront the root cause of a complex structural issue.</td>
          <td><em>"Policymakers must <strong>address the underlying dilemma</strong> before imposing arbitrary fiscal tariffs."</em></td>
        </tr>
        <tr>
          <td><strong>Yield a transformative outcome</strong></td>
          <td><span style="color: #dc2626;">❌ Make big change</span><br><span style="color: #166534; font-weight: bold;">✅ Yield outcome</span></td>
          <td>Produce an overwhelmingly positive and profound structural transformation.</td>
          <td><em>"Subregional renewable energy integration will <strong>yield a transformative outcome</strong> for South Asian industrial grids."</em></td>
        </tr>
        <tr>
          <td><strong>Unprecedented exponential surge</strong></td>
          <td><span style="color: #dc2626;">❌ Big fast increase</span><br><span style="color: #166534; font-weight: bold;">✅ Exponential surge</span></td>
          <td>A massive and rapid upward trend never seen before (Task 1).</td>
          <td><em>"The solar adoption metric witnessed an <strong>unprecedented exponential surge</strong> between 2020 and 2026."</em></td>
        </tr>
        <tr>
          <td><strong>Mitigate adverse ecological repercussions</strong></td>
          <td><span style="color: #dc2626;">❌ Stop bad effects</span><br><span style="color: #166534; font-weight: bold;">✅ Mitigate repercussions</span></td>
          <td>Reduce or lessen harmful environmental consequences.</td>
          <td><em>"Stringent regulatory standards are critical to <strong>mitigate adverse ecological repercussions</strong> in vulnerable coastal belts."</em></td>
        </tr>
        <tr>
          <td><strong>Impart pivotal strategic insights</strong></td>
          <td><span style="color: #dc2626;">❌ Give important info</span><br><span style="color: #166534; font-weight: bold;">✅ Impart insights</span></td>
          <td>Provide deeply valuable, high-level analysis or knowledge.</td>
          <td><em>"The foreign policy dossier <strong>imparts pivotal strategic insights</strong> into maritime choke-point security."</em></td>
        </tr>
        <tr>
          <td><strong>Exercise fiscal prudence</strong></td>
          <td><span style="color: #dc2626;">❌ Spend money carefully</span><br><span style="color: #166534; font-weight: bold;">✅ Fiscal prudence</span></td>
          <td>Manage money and budget with great care and discipline.</td>
          <td><em>"Developing economies must <strong>exercise fiscal prudence</strong> during global inflationary cycles."</em></td>
        </tr>
        <tr>
          <td><strong>Formulate a robust hypothesis</strong></td>
          <td><span style="color: #dc2626;">❌ Make a strong idea</span><br><span style="color: #166534; font-weight: bold;">✅ Formulate hypothesis</span></td>
          <td>Create a strong, well-reasoned scientific explanation.</td>
          <td><em>"Researchers <strong>formulated a robust hypothesis</strong> regarding cross-border climate migration patterns."</em></td>
        </tr>
        <tr>
          <td><strong>Exhibit marked volatility</strong></td>
          <td><span style="color: #dc2626;">❌ Go up and down</span><br><span style="color: #166534; font-weight: bold;">✅ Marked volatility</span></td>
          <td>Show noticeable, continuous up-and-down fluctuations.</td>
          <td><em>"Hydrocarbon commodity prices <strong>exhibited marked volatility</strong> across the second quarter."</em></td>
        </tr>
      </tbody>
    </table>
    <div class="callout">
      <div class="callout-title">💡 Cambridge Examiner Pro-Tip:</div>
      To score Band 8.5+ in Lexical Resource, you must use collocations with precise syntactic appropriateness rather than inserting isolated, obscure vocabulary words.
    </div>
  `;

  const TASK1_DOC_BODY = `
    <div class="callout">
      <div class="callout-title">🎯 The 5 Golden Preposition Rules for Task 1:</div>
      Mastering prepositions prevents standard grammatical errors that pull Task 1 Grammar scores down to Band 6.0.
    </div>

    <table>
      <thead>
        <tr>
          <th style="width: 20%;">Preposition</th>
          <th style="width: 30%;">Grammar Function</th>
          <th style="width: 50%;">Band 8.5+ Model Sentence</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>BY</strong></td>
          <td>Indicates the <em>margin / difference</em> between start and end.</td>
          <td><em>"Outbound garment exports increased <strong>by 15%</strong> (rising from $40M to $46M)."</em></td>
        </tr>
        <tr>
          <td><strong>TO</strong></td>
          <td>Indicates the <em>final arrival endpoint</em>.</td>
          <td><em>"Renewable power capacity expanded steadily, climbing <strong>to 85 gigawatts</strong> by 2025."</em></td>
        </tr>
        <tr>
          <td><strong>OF</strong></td>
          <td>Used directly after nominal trend nouns (growth, drop).</td>
          <td><em>"The industrial sector registered a marked contraction <strong>of 12 million units</strong>."</em></td>
        </tr>
        <tr>
          <td><strong>AT</strong></td>
          <td>Indicates a static level, starting point, or peak plateau.</td>
          <td><em>"The national unemployment rate stood <strong>at 4.5%</strong> before stabilizing."</em></td>
        </tr>
        <tr>
          <td><strong>BETWEEN ... AND</strong></td>
          <td>Time boundaries (Never write 'between ... to').</td>
          <td><em>"<strong>Between 2015 and 2025</strong>, solar adoption exhibited exponential gains."</em></td>
        </tr>
      </tbody>
    </table>

    <div class="callout">
      <div class="callout-title">📝 The 2-Sentence Band 9 Overview Formula:</div>
      <em>"Overall, it is manifest that while [Category A] experienced a sustained upward trajectory, [Category B] underwent a marked contraction. Additionally, [Category A] remained the preeminent contributor throughout the surveyed span."</em>
    </div>
  `;

  const SPEAKING_DOC_BODY = `
    <div class="callout">
      <div class="callout-title">🎙️ Speaking Part 2 & Part 3 Fluency & Discourse Architecture:</div>
      Eliminate hesitation, unnatural silence, and repetition with native discourse connectors.
    </div>

    <table>
      <thead>
        <tr>
          <th style="width: 30%;">Speaking Stage</th>
          <th style="width: 30%;">Avoid (Band 5.5)</th>
          <th style="width: 40%;">Band 9 Native Alternatives</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Perspective & Opinion</strong></td>
          <td><em>"In my opinion...", "I think..."</em></td>
          <td>
            • <em>"From where I stand, it seems abundantly clear that..."</em><br>
            • <em>"As far as I can gather, prevailing consensus suggests..."</em><br>
            • <em>"If you look at the broader socioeconomic picture..."</em>
          </td>
        </tr>
        <tr>
          <td><strong>Thinking Fillers (2-Sec Buffer)</strong></td>
          <td><em>"Ummm... errr... [silence]"</em></td>
          <td>
            • <em>"That is a multifaceted question, but examining the evidence..."</em><br>
            • <em>"To be completely candid, looking at the practical reality..."</em><br>
            • <em>"That depends heavily on context, however generally speaking..."</em>
          </td>
        </tr>
        <tr>
          <td><strong>Nuance & Counterpoint (Part 3)</strong></td>
          <td><em>"On the other hand...", "But also..."</em></td>
          <td>
            • <em>"While there is validity to that premise, one cannot overlook..."</em><br>
            • <em>"Notwithstanding the immediate benefits, the long-term fallout..."</em><br>
            • <em>"Had proactive measures been taken, this could have been mitigated..."</em>
          </td>
        </tr>
      </tbody>
    </table>
  `;

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
                {/* Resource 1: Band 9 Collocations Handbook */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-teal-800" />
                      <h5 className="font-bold text-slate-900 text-xs">Band 9 Academic Collocations Master Handbook</h5>
                    </div>
                    <p className="text-[11px] text-slate-500">Curated Lexical Upgrades with definitions, Band 5.5➔8.5 contrasts, and Cambridge model sentences.</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleOpenPrintable(
                        'IELTS Band 9 Academic Collocations Master Handbook',
                        'Essential Lexical Resource Upgrades & Examiner Models | Daloyar Hassan Shishir',
                        COLLOCATIONS_DOC_BODY
                      )}
                      className="px-3.5 py-2 bg-teal-900 hover:bg-teal-800 text-white rounded-xl font-bold text-xs transition flex items-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5 text-teal-300" /> Print / Save PDF
                    </button>
                    <button
                      onClick={() => handleDownloadWordDoc(
                        'IELTS-Band-9-Collocations-Handbook',
                        'IELTS Band 9 Academic Collocations Master Handbook',
                        'Essential Lexical Resource Upgrades & Examiner Models | Daloyar Hassan Shishir',
                        COLLOCATIONS_DOC_BODY
                      )}
                      className="px-3.5 py-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-xl font-bold text-xs transition flex items-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      <FileText className="w-3.5 h-3.5 text-blue-600" /> Word (.DOC)
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
                    <p className="text-[11px] text-slate-500">Master preposition rules (by vs to vs of), dynamic trend verbs, and Band 9 overview formulas.</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    <button
                      onClick={() => setShowTask1Modal(true)}
                      className="px-3 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-xl font-bold text-xs transition flex items-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 text-teal-800" /> View Matrix
                    </button>
                    <button
                      onClick={() => handleOpenPrintable(
                        'IELTS Academic Task 1: Preposition & Reporting Matrix',
                        'Golden Preposition Rules, Dynamic Verbs & Overview Blueprint | Daloyar Hassan Shishir',
                        TASK1_DOC_BODY
                      )}
                      className="px-3.5 py-2 bg-teal-900 hover:bg-teal-800 text-white rounded-xl font-bold text-xs transition flex items-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5 text-teal-300" /> Print / Save PDF
                    </button>
                    <button
                      onClick={() => handleDownloadWordDoc(
                        'IELTS-Task-1-Preposition-Reporting-Matrix',
                        'IELTS Academic Task 1: Preposition & Reporting Matrix',
                        'Golden Preposition Rules, Dynamic Verbs & Overview Blueprint | Daloyar Hassan Shishir',
                        TASK1_DOC_BODY
                      )}
                      className="px-3.5 py-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-xl font-bold text-xs transition flex items-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      <FileText className="w-3.5 h-3.5 text-blue-600" /> Word (.DOC)
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
                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleOpenPrintable(
                        'IELTS Speaking Band 9: Discourse Markers & Fluency Architecture',
                        'Native Thinking Fillers & Argumentation Connectors | Daloyar Hassan Shishir',
                        SPEAKING_DOC_BODY
                      )}
                      className="px-3.5 py-2 bg-teal-900 hover:bg-teal-800 text-white rounded-xl font-bold text-xs transition flex items-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5 text-teal-300" /> Print / Save PDF
                    </button>
                    <button
                      onClick={() => handleDownloadWordDoc(
                        'IELTS-Speaking-Band-9-Discourse-Markers',
                        'IELTS Speaking Band 9: Discourse Markers & Fluency Architecture',
                        'Native Thinking Fillers & Argumentation Connectors | Daloyar Hassan Shishir',
                        SPEAKING_DOC_BODY
                      )}
                      className="px-3.5 py-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-xl font-bold text-xs transition flex items-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      <FileText className="w-3.5 h-3.5 text-blue-600" /> Word (.DOC)
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
