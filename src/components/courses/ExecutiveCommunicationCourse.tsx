import React, { useState, useEffect, useMemo } from 'react';
import { 
  Building2, Globe, Shield, Sparkles, Search, Filter, 
  ExternalLink, Download, FileText, ArrowRight, CheckCircle2, 
  Clock, Award, Briefcase, BookOpen, ChevronRight, HelpCircle, 
  Layers, MapPin, DollarSign, Calendar, Users, Zap, Check, Share2,
  GraduationCap, RefreshCw, Send, AlertTriangle, Play, ThumbsUp,
  Sliders, MessageSquare, Printer, Copy, RotateCcw
} from 'lucide-react';
import { 
  COMMUNICATION_MODULES, 
  CRISIS_SCENARIOS, 
  CAPSTONE_QUESTIONS
} from '../../data/executiveCommunicationData';
import type {
  CourseModule,
  CrisisScenario,
  CapstoneQuestion
} from '../../data/executiveCommunicationData';
import { ShareModal } from '../common/ShareModal';
import confetti from 'canvas-confetti';

interface ExecutiveCommunicationCourseProps {
  user?: any;
  onNavigateHome?: () => void;
}

export const ExecutiveCommunicationCourse: React.FC<ExecutiveCommunicationCourseProps> = ({
  user,
  onNavigateHome
}) => {
  const [activeModuleId, setActiveModuleId] = useState<string>('module-1-executive-writing');
  const [completedModules, setCompletedModules] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('dhs_exec_comm_completed');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Module 1 Interactive State (BLUF Transformer)
  const [blufInput, setBlufInput] = useState<string>(
    "Hi team, just wanted to touch base regarding the coastal resilience project. We have been reviewing various vendor options and having multiple meetings with regional stakeholders over the past three months. Due to several unforeseen logistical bottlenecks and inflation in raw material costs, we might experience a minor budgetary shortfall. We are thinking it might be a good idea if we could potentially request an additional $350,000 reallocation from the contingency reserve, although we understand if this is difficult. Let me know what you think when you have time."
  );
  const [blufOutput, setBlufOutput] = useState<string>('');

  // Module 2 Interactive State (RACI Matrix Builder)
  const [raciRows, setRaciRows] = useState<{ milestone: string; pmo: string; ministry: string; unhcr: string; contractor: string }[]>([
    { milestone: '1. Finalize Project Charter & Budget', pmo: 'A', ministry: 'C', unhcr: 'I', contractor: 'I' },
    { milestone: '2. Environmental Impact Clearance (EIA)', pmo: 'R', ministry: 'A', unhcr: 'C', contractor: 'I' },
    { milestone: '3. Procurement of Geotextile Embankments', pmo: 'R', ministry: 'I', unhcr: 'A', contractor: 'R' },
    { milestone: '4. Civil Engineering Quality Inspection', pmo: 'C', ministry: 'I', unhcr: 'I', contractor: 'A' }
  ]);

  // Module 3 Interactive State (BATNA / ZOPA Calculator)
  const [buyerMax, setBuyerMax] = useState<number>(850000);
  const [sellerMin, setSellerMin] = useState<number>(720000);

  // Module 4 Interactive State (Crisis Simulator)
  const [selectedCrisisIndex, setSelectedCrisisIndex] = useState<number>(0);
  const [chosenBranchId, setChosenBranchId] = useState<string | null>(null);

  // Module 5 Interactive State (PREP Builder)
  const [prepPoint, setPrepPoint] = useState('We must approve the $350K contingency fund today.');
  const [prepReason, setPrepReason] = useState('Delays beyond Friday will trigger a 3-week monsoon shipping shutdown.');
  const [prepExample, setPrepExample] = useState('Last year’s 48-hour delay incurred $1.2M in flood damages across 4 unions.');
  const [prepRestate, setPrepRestate] = useState('Therefore, signing the reallocation memo immediately protects 40km of vulnerable embankment.');

  // Capstone Exam State
  const [userAnswers, setUserAnswers] = useState<{ [questionId: number]: number }>({});
  const [examSubmitted, setExamSubmitted] = useState<boolean>(false);
  const [examScore, setExamScore] = useState<number>(0);
  const [certificateName, setCertificateName] = useState<string>(user?.user_metadata?.full_name || 'Executive Scholar');
  const [certificateHash, setCertificateHash] = useState<string>('');

  // Share Modal State
  const [shareData, setShareData] = useState<{ isOpen: boolean; title: string; url: string; summary: string; category: string } | null>(null);

  // Sync completion with LocalStorage
  useEffect(() => {
    localStorage.setItem('dhs_exec_comm_completed', JSON.stringify(completedModules));
  }, [completedModules]);

  const toggleModuleComplete = (modId: string) => {
    if (completedModules.includes(modId)) {
      setCompletedModules(completedModules.filter(id => id !== modId));
    } else {
      setCompletedModules([...completedModules, modId]);
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    }
  };

  const progressPercent = Math.round((completedModules.length / COMMUNICATION_MODULES.length) * 100);

  // Active Module lookup
  const currentModule = useMemo(() => {
    return COMMUNICATION_MODULES.find(m => m.id === activeModuleId) || COMMUNICATION_MODULES[0];
  }, [activeModuleId]);

  // Transform to BLUF
  const handleTransformBluf = () => {
    setBlufOutput(
      `SUBJECT: [ACTION REQUIRED] Reallocation of $350K Contingency Reserve by Friday 5 PM\n\n` +
      `BLUF (Bottom Line Up Front):\n` +
      `Request approval to reallocate $350,000 from the Coastal Resilience Contingency Reserve by Friday, Oct 24 at 5:00 PM to offset inflation in geotextile tube procurement and prevent a 3-week construction shutdown.\n\n` +
      `KEY DRIVERS:\n` +
      `1. Fiscal Impact: $350K is fully funded within existing reserve envelope; zero net increase to overall program budget.\n` +
      `2. Operational Imperative: Securing procurement contracts before Nov 1 avoids monsoon shipping halts across 4 coastal unions.\n` +
      `3. Stakeholder Alignment: Ministry of Environment and Regional Engineering Directorate have reviewed and validated technical specs.\n\n` +
      `REQUIRED NEXT STEP:\n` +
      `Please sign the attached 1-Page Allocation Memo by Friday 5 PM.`
    );
    confetti({ particleCount: 40, spread: 50 });
  };

  // Grade Capstone Exam
  const handleGradeExam = () => {
    let score = 0;
    CAPSTONE_QUESTIONS.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswerIndex) {
        score += 10;
      }
    });
    setExamScore(score);
    setExamSubmitted(true);
    if (score >= 80) {
      const randomHash = 'DHS-EXEC-' + Math.random().toString(36).substring(2, 9).toUpperCase();
      setCertificateHash(randomHash);
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.5 } });
    }
  };

  // 1-Click Download Executive Toolkit (.doc)
  const handleDownloadToolkit = () => {
    const docHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Executive Communication, Negotiation & Coordination Master Toolkit | DH Shishir</title>
  <style>
    @page { size: letter; margin: 0.8in; }
    body { font-family: 'Calibri', Arial, sans-serif; color: #0f172a; line-height: 1.5; font-size: 11pt; }
    .header { border-bottom: 2pt solid #0f172a; padding-bottom: 10pt; text-align: center; margin-bottom: 20pt; }
    .title { font-size: 20pt; font-weight: bold; text-transform: uppercase; margin: 0; color: #0f172a; }
    .subtitle { font-size: 11pt; color: #475569; margin-top: 4pt; }
    .section-title { font-size: 14pt; font-weight: bold; border-bottom: 1pt solid #cbd5e1; padding-bottom: 4pt; margin-top: 18pt; margin-bottom: 8pt; color: #0f172a; }
    .box { background-color: #f8fafc; border: 1pt solid #cbd5e1; padding: 10pt; margin-bottom: 12pt; border-radius: 6pt; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 12pt; font-size: 10pt; }
    th, td { border: 1pt solid #94a3b8; padding: 6pt 8pt; text-align: left; }
    th { background-color: #f1f5f9; font-weight: bold; }
  </style>
</head>
<body>
  <div class="header">
    <div class="title">Executive Communication & Coordination Toolkit</div>
    <div class="subtitle">Standardized Frameworks, Decision Memos, RACI Matrices & Negotiation Blueprints • DH Shishir Masterclass</div>
  </div>

  <div class="section-title">1. Standard 1-Page Executive Decision Memo Template</div>
  <div class="box">
    <p><strong>TO:</strong> [Decision Maker Title / Name]</p>
    <p><strong>FROM:</strong> [Your Name & Title]</p>
    <p><strong>DATE:</strong> [Date]</p>
    <p><strong>SUBJECT:</strong> [DECISION REQUIRED] [Clear 6-Word Topic]</p>
    <hr style="border: 0.5pt solid #cbd5e1; margin: 8pt 0;" />
    <p><strong>1. BOTTOM LINE UP FRONT (BLUF):</strong><br/>State the requested decision in 2 sentences. Specify the exact fiscal/resource amount and hard deadline.</p>
    <p><strong>2. STRATEGIC CONTEXT & RATIONALE:</strong><br/>Why must this decision be made now? What external or operational driver creates urgency?</p>
    <p><strong>3. OPTIONS & RISK ANALYSIS:</strong><br/>Option A (Recommended), Option B (Alternative), Option C (Status Quo / Risk of inaction).</p>
    <p><strong>4. RECOMMENDATION & NEXT ACTIONS:</strong><br/>Clear sign-off line and single accountable owner for execution.</p>
  </div>

  <div class="section-title">2. RACI Stakeholder Governance Framework</div>
  <table>
    <tr><th>Milestone / Activity</th><th>Project Lead (PMO)</th><th>Ministry Partner</th><th>Lead UN/INGO</th><th>Sub-Contractor</th></tr>
    <tr><td>1. Project Charter & Budget Sign-off</td><td>Accountable (A)</td><td>Consulted (C)</td><td>Informed (I)</td><td>Informed (I)</td></tr>
    <tr><td>2. Environmental Impact Clearance</td><td>Responsible (R)</td><td>Accountable (A)</td><td>Consulted (C)</td><td>Informed (I)</td></tr>
    <tr><td>3. Emergency Procurement Execution</td><td>Responsible (R)</td><td>Informed (I)</td><td>Accountable (A)</td><td>Responsible (R)</td></tr>
    <tr><td>4. Quality Audit & Sign-off</td><td>Consulted (C)</td><td>Informed (I)</td><td>Informed (I)</td><td>Accountable (A)</td></tr>
  </table>

  <div class="section-title">3. Harvard PON 7-Element Negotiation Preparation Sheet</div>
  <div class="box">
    <p><strong>1. Underlying Interests:</strong> What are their fundamental needs, fears, and institutional constraints?</p>
    <p><strong>2. BATNA (Walk-Away):</strong> What is our concrete alternative if no agreement is signed?</p>
    <p><strong>3. ZOPA (Reservation Range):</strong> What is our minimum acceptable outcome vs their maximum willingness?</p>
    <p><strong>4. Value-Expanding Logrolls:</strong> What low-cost concessions can we trade for high-value terms (timelines, scope, public credits)?</p>
    <p><strong>5. Objective Standards:</strong> What independent benchmarks (audits, market rates, UN regulations) validate our proposal?</p>
  </div>
</body>
</html>`;

    const blob = new Blob(['\ufeff', docHtml], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Executive_Communication_Toolkit_DH_Shishir.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-10 text-slate-900 animate-in fade-in duration-300">
      
      {/* 1. TOP HERO BANNER */}
      <div className="p-6 sm:p-10 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 text-white rounded-3xl shadow-2xl relative overflow-hidden space-y-6 border border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Executive Masterclass
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold flex items-center gap-1">
              <Shield className="w-3.5 h-3.5" /> Verifiable Certificate Track
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadToolkit}
              className="px-3.5 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer border border-white/20"
            >
              <Download className="w-3.5 h-3.5 text-teal-300" />
              <span>Download Executive Toolkit (.doc)</span>
            </button>
          </div>
        </div>

        <div className="space-y-2 max-w-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
            Executive Communication, Diplomatic Negotiation & Coordination Masterclass
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Master high-stakes executive writing (BLUF & Pyramid Principle), cross-functional RACI governance, Harvard PON principled bargaining, and non-violent crisis de-escalation with real-world interactive simulators.
          </p>
        </div>

        {/* PROGRESS TRACKER BAR */}
        <div className="pt-3 border-t border-white/10 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-300 font-bold">Course Progression: {completedModules.length} of {COMMUNICATION_MODULES.length} Modules Completed</span>
            <span className="font-mono font-black text-teal-300">{progressPercent}% Completed</span>
          </div>
          <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden border border-white/10">
            <div 
              className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

      </div>

      {/* 2. MODULE NAVIGATION TABS */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {COMMUNICATION_MODULES.map(m => {
          const isActive = activeModuleId === m.id;
          const isDone = completedModules.includes(m.id);
          return (
            <button
              key={m.id}
              onClick={() => setActiveModuleId(m.id)}
              className={`p-3 rounded-2xl text-left border transition cursor-pointer flex flex-col justify-between gap-2 ${
                isActive
                  ? 'bg-teal-900 text-white border-teal-900 shadow-md ring-2 ring-teal-500/30'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                  isActive ? 'bg-teal-800 text-teal-200' : 'bg-slate-100 text-slate-600'
                }`}>
                  Mod {m.moduleNumber}
                </span>
                {isDone && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
              </div>
              <div className="text-xs font-bold line-clamp-2">{m.title}</div>
            </button>
          );
        })}

        {/* Capstone Tab Button */}
        <button
          onClick={() => setActiveModuleId('capstone-exam')}
          className={`p-3 rounded-2xl text-left border transition cursor-pointer flex flex-col justify-between gap-2 ${
            activeModuleId === 'capstone-exam'
              ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md ring-2 ring-amber-400/40 font-black'
              : 'bg-amber-50 text-amber-950 hover:bg-amber-100 border-amber-200 font-bold'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-amber-200 text-amber-950">
              Exam
            </span>
            <Award className="w-4 h-4 text-amber-700" />
          </div>
          <div className="text-xs font-black">🎓 Capstone & Certification</div>
        </button>
      </div>

      {/* 3. ACTIVE MODULE CONTENT & INTERACTIVE LABS */}
      {activeModuleId !== 'capstone-exam' && (
        <div className="space-y-8">
          
          {/* Module Header Card */}
          <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-900 border border-teal-200 text-xs font-bold uppercase">
                  Module {currentModule.moduleNumber}: {currentModule.thematicFocus}
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1 font-mono">
                  <Clock className="w-3.5 h-3.5 text-slate-400" /> {currentModule.estimatedMinutes} mins
                </span>
              </div>

              <button
                onClick={() => toggleModuleComplete(currentModule.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer border ${
                  completedModules.includes(currentModule.id)
                    ? 'bg-emerald-500 text-white border-emerald-500 shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{completedModules.includes(currentModule.id) ? 'Completed (Undo)' : 'Mark Module Complete'}</span>
              </button>
            </div>

            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">{currentModule.title}</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{currentModule.subtitle}</p>
            </div>

            {/* Learning Objectives Box */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
              <div className="font-bold text-slate-900 uppercase text-[10px] tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-800" /> Key Learning Objectives:
              </div>
              <ul className="space-y-1 text-slate-700 list-disc pl-4 text-[11px] sm:text-xs">
                {currentModule.learningObjectives.map((obj, oi) => (
                  <li key={oi}>{obj}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Theoretical Foundations & Key Principles */}
          <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-1">
              <div className="text-[10px] font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" /> Core Executive Framework
              </div>
              <h3 className="text-lg font-black text-slate-900">{currentModule.coreTheory.frameworkName}</h3>
              <p className="text-xs text-slate-500">Origin: <strong>{currentModule.coreTheory.origin}</strong></p>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-teal-50/50 p-4 rounded-2xl border border-teal-200/60">
              {currentModule.coreTheory.summary}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentModule.coreTheory.keyPrinciples.map((principle, pri) => (
                <div key={pri} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-bold text-slate-900">{principle.title}</h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed">{principle.explanation}</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-[10px] font-bold text-teal-900">
                    Rule: <span className="text-slate-700 font-medium">{principle.practicalRule}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* INTERACTIVE LAB FOR ACTIVE MODULE */}
          <div className="p-6 sm:p-8 bg-white rounded-3xl border border-teal-500/30 shadow-md space-y-6 ring-1 ring-teal-500/20">
            
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-900 text-white text-[10px] font-bold uppercase">
                  <Zap className="w-3 h-3 text-amber-300" /> Interactive Executive Simulation Lab
                </div>
                <h3 className="text-base sm:text-lg font-black text-slate-900">{currentModule.interactiveExercise.title}</h3>
              </div>
              <p className="text-xs text-slate-500 max-w-md">{currentModule.interactiveExercise.instructions}</p>
            </div>

            {/* MODULE 1 LAB: BLUF TRANSFORMER */}
            {currentModule.id === 'module-1-executive-writing' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-800 flex items-center justify-between">
                    <span>Weak / Rambling Draft Input:</span>
                    <button 
                      onClick={() => setBlufInput("Hi team, just checking in regarding the audit report. We have been discussing this with multiple stakeholders and it looks like there are some delays due to budget issues. Can we meet to talk about it next week maybe?")}
                      className="text-[10px] text-teal-800 hover:underline cursor-pointer"
                    >
                      Load Sample 2
                    </button>
                  </label>
                  <textarea
                    rows={8}
                    value={blufInput}
                    onChange={(e) => setBlufInput(e.target.value)}
                    className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <button
                    onClick={handleTransformBluf}
                    className="w-full py-3 bg-teal-900 hover:bg-teal-800 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Zap className="w-4 h-4 text-amber-300" />
                    <span>⚡ Morph to Executive BLUF Decision Memo</span>
                  </button>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-800 flex items-center justify-between">
                    <span>Transformed Executive BLUF Output:</span>
                    {blufOutput && (
                      <button 
                        onClick={() => {
                          navigator.clipboard.writeText(blufOutput);
                          alert('Copied to clipboard!');
                        }}
                        className="text-[10px] text-teal-800 hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <Copy className="w-3 h-3" /> Copy Memo
                      </button>
                    )}
                  </label>
                  <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 min-h-[200px] text-xs font-mono text-slate-800 whitespace-pre-wrap leading-relaxed">
                    {blufOutput || 'Click "Morph to Executive BLUF Decision Memo" to see the transformed executive structure...'}
                  </div>
                </div>
              </div>
            )}

            {/* MODULE 2 LAB: RACI MATRIX BUILDER */}
            {currentModule.id === 'module-2-raci-coordination' && (
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse border border-slate-200">
                    <thead>
                      <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                        <th className="p-3 font-bold">Project Milestone / Activity</th>
                        <th className="p-3 font-bold text-center">PMO Lead</th>
                        <th className="p-3 font-bold text-center">Ministry</th>
                        <th className="p-3 font-bold text-center">UN Lead</th>
                        <th className="p-3 font-bold text-center">Sub-Contractor</th>
                      </tr>
                    </thead>
                    <tbody>
                      {raciRows.map((row, ri) => (
                        <tr key={ri} className="border-b border-slate-100 hover:bg-slate-50">
                          <td className="p-3 font-medium text-slate-900">{row.milestone}</td>
                          {['pmo', 'ministry', 'unhcr', 'contractor'].map((key) => {
                            const val = (row as any)[key];
                            return (
                              <td key={key} className="p-3 text-center">
                                <select
                                  value={val}
                                  onChange={(e) => {
                                    const updated = [...raciRows];
                                    (updated[ri] as any)[key] = e.target.value;
                                    setRaciRows(updated);
                                  }}
                                  className={`p-1.5 rounded-lg font-bold text-xs border cursor-pointer ${
                                    val === 'A' ? 'bg-amber-100 text-amber-900 border-amber-300' :
                                    val === 'R' ? 'bg-teal-100 text-teal-900 border-teal-300' :
                                    val === 'C' ? 'bg-sky-100 text-sky-900 border-sky-300' :
                                    'bg-slate-100 text-slate-700 border-slate-300'
                                  }`}
                                >
                                  <option value="R">R (Responsible)</option>
                                  <option value="A">A (Accountable)</option>
                                  <option value="C">C (Consulted)</option>
                                  <option value="I">I (Informed)</option>
                                </select>
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl text-[11px] text-slate-600 flex items-center justify-between">
                  <span>💡 <strong>RACI Validation Check:</strong> Exactly one (A) Accountable per milestone is recommended.</span>
                  <button
                    onClick={() => alert('RACI matrix validated! Ready for export.')}
                    className="px-3 py-1.5 bg-teal-900 text-white rounded-lg font-bold text-[11px]"
                  >
                    Validate Governance
                  </button>
                </div>
              </div>
            )}

            {/* MODULE 3 LAB: BATNA / ZOPA CALCULATOR */}
            {currentModule.id === 'module-3-principled-negotiation' && (
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-900 flex justify-between">
                      <span>Buyer Maximum Reservation Price:</span>
                      <span className="font-mono text-teal-900 font-bold">${buyerMax.toLocaleString()}</span>
                    </label>
                    <input 
                      type="range" 
                      min={600000} 
                      max={1000000} 
                      step={10000} 
                      value={buyerMax}
                      onChange={(e) => setBuyerMax(Number(e.target.value))}
                      className="w-full accent-teal-800 cursor-pointer" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-900 flex justify-between">
                      <span>Seller Minimum Walk-Away Price:</span>
                      <span className="font-mono text-amber-900 font-bold">${sellerMin.toLocaleString()}</span>
                    </label>
                    <input 
                      type="range" 
                      min={600000} 
                      max={1000000} 
                      step={10000} 
                      value={sellerMin}
                      onChange={(e) => setSellerMin(Number(e.target.value))}
                      className="w-full accent-amber-600 cursor-pointer" 
                    />
                  </div>
                </div>

                <div className={`p-4 rounded-2xl border text-xs leading-relaxed ${
                  buyerMax >= sellerMin 
                    ? 'bg-emerald-50 text-emerald-950 border-emerald-300' 
                    : 'bg-rose-50 text-rose-950 border-rose-300'
                }`}>
                  {buyerMax >= sellerMin ? (
                    <div>
                      <strong>🟢 Positive ZOPA (Zone of Possible Agreement) Exists!</strong> Range: <strong>${sellerMin.toLocaleString()}</strong> to <strong>${buyerMax.toLocaleString()}</strong> (Surplus: ${(buyerMax - sellerMin).toLocaleString()}). Both parties have viable economic ground to close the contract without activating BATNAs.
                    </div>
                  ) : (
                    <div>
                      <strong>🔴 Negative ZOPA (Bargaining Impasse)!</strong> Deficit of <strong>${(sellerMin - buyerMax).toLocaleString()}</strong>. Pure financial bargaining will fail. You must introduce asymmetrical logrolling (non-monetary trades: warranty period, IP rights, delivery speed) to bridge the gap.
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* MODULE 4 LAB: CRISIS BRANCHING DECISION TREE */}
            {currentModule.id === 'module-4-crisis-de-escalation' && (
              <div className="space-y-5">
                <div className="flex flex-wrap gap-2">
                  {CRISIS_SCENARIOS.map((sc, sci) => (
                    <button
                      key={sc.id}
                      onClick={() => {
                        setSelectedCrisisIndex(sci);
                        setChosenBranchId(null);
                      }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border ${
                        selectedCrisisIndex === sci
                          ? 'bg-teal-900 text-white border-teal-900'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      Scenario {sci + 1}: {sc.title.slice(0, 30)}...
                    </button>
                  ))}
                </div>

                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                  <h4 className="text-sm font-black text-slate-900">{CRISIS_SCENARIOS[selectedCrisisIndex].title}</h4>
                  <p className="text-xs text-slate-700 leading-relaxed">{CRISIS_SCENARIOS[selectedCrisisIndex].context}</p>
                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950 font-bold">
                    ⚠️ Dilemma: {CRISIS_SCENARIOS[selectedCrisisIndex].initialDilemma}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">Select Your Executive Action:</div>
                  <div className="grid grid-cols-1 gap-3">
                    {CRISIS_SCENARIOS[selectedCrisisIndex].branches.map(branch => {
                      const isSelected = chosenBranchId === branch.optionId;
                      return (
                        <button
                          key={branch.optionId}
                          onClick={() => setChosenBranchId(branch.optionId)}
                          className={`p-4 rounded-2xl text-left border transition cursor-pointer ${
                            isSelected
                              ? 'bg-teal-50 border-teal-500 shadow-sm ring-1 ring-teal-500'
                              : 'bg-white hover:bg-slate-50 border-slate-200'
                          }`}
                        >
                          <div className="text-xs font-bold text-slate-900">{branch.choiceText}</div>
                          {isSelected && (
                            <div className="mt-3 pt-3 border-t border-slate-200 space-y-2 text-xs animate-in fade-in duration-200">
                              <div className="flex items-center justify-between">
                                <span className="font-bold text-slate-800">Consequence Analysis:</span>
                                <span className={`text-[11px] font-black px-2 py-0.5 rounded-full ${
                                  branch.diplomaticScore >= 80 ? 'bg-emerald-100 text-emerald-900' : 'bg-rose-100 text-rose-900'
                                }`}>
                                  Diplomatic Score: {branch.diplomaticScore}/100
                                </span>
                              </div>
                              <p className="text-slate-600">{branch.consequence}</p>
                              <div className="p-2.5 rounded-xl bg-slate-100 text-[11px] text-slate-700">
                                <strong>Instructor Feedback:</strong> {branch.expertFeedback}
                              </div>
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* MODULE 5 LAB: PREP BUILDER */}
            {currentModule.id === 'module-5-verbal-briefing' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2 p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <label className="text-xs font-bold text-slate-900">1. Point (Core Assertion):</label>
                  <input
                    type="text"
                    value={prepPoint}
                    onChange={(e) => setPrepPoint(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white border border-slate-200 text-xs"
                  />
                  <label className="text-xs font-bold text-slate-900">2. Reason (Underlying Logic):</label>
                  <input
                    type="text"
                    value={prepReason}
                    onChange={(e) => setPrepReason(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white border border-slate-200 text-xs"
                  />
                  <label className="text-xs font-bold text-slate-900">3. Example (Data / Evidence):</label>
                  <input
                    type="text"
                    value={prepExample}
                    onChange={(e) => setPrepExample(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white border border-slate-200 text-xs"
                  />
                  <label className="text-xs font-bold text-slate-900">4. Point (Restate Thesis):</label>
                  <input
                    type="text"
                    value={prepRestate}
                    onChange={(e) => setPrepRestate(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white border border-slate-200 text-xs"
                  />
                </div>

                <div className="p-5 bg-teal-900 text-white rounded-2xl flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-teal-300">
                      Spoken Brief Preview (60-Second Target):
                    </div>
                    <p className="text-xs leading-relaxed text-slate-200 font-sans">
                      "{prepPoint} {prepReason} For example, {prepExample} {prepRestate}"
                    </p>
                  </div>
                  <div className="p-3 bg-white/10 rounded-xl text-[11px] text-teal-200 flex items-center justify-between">
                    <span>⏱️ Spoken Duration: ~38 seconds</span>
                    <span className="font-bold text-emerald-300">Passes Executive Brevity</span>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      )}

      {/* 4. CAPSTONE EXAM & VERIFIABLE CERTIFICATE SECTION */}
      {activeModuleId === 'capstone-exam' && (
        <div className="space-y-8">
          
          <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-950 border border-amber-300 text-xs font-bold uppercase">
              <Award className="w-3.5 h-3.5 text-amber-700" /> Executive Capstone Assessment
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              10-Question Executive Communication & Negotiation Comprehensive Exam
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Complete all 10 real-world scenario questions. Score 80% or higher to unlock your verifiable, high-resolution Digital Certificate of Completion signed by the Diplomatic & Strategic Communications Desk.
            </p>
          </div>

          {/* Exam Questions */}
          <div className="space-y-5">
            {CAPSTONE_QUESTIONS.map(q => {
              const selectedOpt = userAnswers[q.id];
              const isCorrect = selectedOpt === q.correctAnswerIndex;
              return (
                <div key={q.id} className="p-6 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-teal-900">Question {q.id} of 10</span>
                    {examSubmitted && (
                      <span className={`font-black px-2 py-0.5 rounded-full text-[10px] ${
                        isCorrect ? 'bg-emerald-100 text-emerald-900' : 'bg-rose-100 text-rose-900'
                      }`}>
                        {isCorrect ? '✓ Correct (+10)' : '✗ Incorrect (0)'}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-500 italic bg-slate-50 p-3 rounded-xl border border-slate-200">
                    Scenario: {q.scenario}
                  </p>

                  <h4 className="text-sm font-black text-slate-900">{q.question}</h4>

                  <div className="space-y-2 pt-1">
                    {q.options.map((opt, oi) => (
                      <label
                        key={oi}
                        className={`flex items-start gap-3 p-3 rounded-xl border text-xs cursor-pointer transition ${
                          selectedOpt === oi
                            ? 'bg-teal-50 border-teal-500 text-teal-950 font-bold'
                            : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                        }`}
                      >
                        <input
                          type="radio"
                          name={`q-${q.id}`}
                          checked={selectedOpt === oi}
                          onChange={() => setUserAnswers({ ...userAnswers, [q.id]: oi })}
                          disabled={examSubmitted}
                          className="mt-0.5 accent-teal-800"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>

                  {examSubmitted && (
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-700 mt-2">
                      <strong>Rationale:</strong> {q.rationale}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Submit Exam Button */}
          {!examSubmitted ? (
            <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm text-center space-y-3">
              <button
                onClick={handleGradeExam}
                disabled={Object.keys(userAnswers).length < 10}
                className="px-8 py-3.5 bg-teal-900 hover:bg-teal-800 disabled:opacity-50 text-white rounded-2xl text-sm font-black transition cursor-pointer shadow-md"
              >
                Submit Capstone Exam ({Object.keys(userAnswers).length}/10 Answered)
              </button>
            </div>
          ) : (
            <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-xl space-y-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl sm:text-4xl font-black text-slate-900">
                  Your Final Score: <span className={examScore >= 80 ? 'text-emerald-800' : 'text-amber-800'}>{examScore}%</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600">
                  {examScore >= 80 
                    ? '🎉 Congratulations! You have successfully passed the Executive Capstone with Distinction.' 
                    : 'You scored below the 80% threshold. Review the rationales and retry the exam to earn certification.'}
                </p>
              </div>

              {examScore >= 80 ? (
                /* VERIFIABLE DIGITAL CERTIFICATE OF COMPLETION */
                <div className="p-6 sm:p-10 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 text-white rounded-3xl border-4 border-amber-400/40 shadow-2xl relative overflow-hidden space-y-6 text-left max-w-3xl mx-auto">
                  
                  <div className="flex items-center justify-between border-b border-white/15 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-sm">
                        শ
                      </div>
                      <div>
                        <div className="text-sm font-black">dhshishir.com</div>
                        <div className="text-[10px] text-teal-300 uppercase tracking-wider">Executive Academy</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-mono text-slate-400">CERTIFICATE ID</div>
                      <div className="text-xs font-mono font-bold text-amber-300">{certificateHash}</div>
                    </div>
                  </div>

                  <div className="text-center space-y-2 py-4">
                    <div className="text-xs uppercase tracking-widest text-amber-300 font-bold">Certificate of Completion & Distinction</div>
                    <div className="text-2xl sm:text-3xl font-serif italic text-white">This is proudly presented to</div>
                    <div className="text-2xl sm:text-3xl font-black tracking-tight text-amber-200 border-b border-amber-400/30 pb-2 inline-block px-6">
                      {certificateName}
                    </div>
                    <p className="text-xs text-slate-300 max-w-xl mx-auto pt-2 leading-relaxed">
                      For successfully completing the rigorous 5-module curriculum and achieving an 80%+ Distinction in <strong>Executive Communication, Diplomatic Negotiation & Multi-Stakeholder Coordination</strong>.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/15 text-xs text-slate-400">
                    <div>
                      <div>Date of Issue: <strong>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</strong></div>
                      <div>Verification: <strong>https://dhshishir.com/verify</strong></div>
                    </div>
                    <div className="text-right">
                      <div className="font-serif italic text-white text-sm">Daloyar Hassan Shishir</div>
                      <div className="text-[10px] text-slate-400 uppercase">Diplomatic & Strategic Desk Lead</div>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={() => window.print()}
                      className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Print / Save as PDF Certificate</span>
                    </button>
                    <button
                      onClick={() => {
                        const url = `https://dhshishir.com/courses/executive-communication?cert=${certificateHash}`;
                        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
                      }}
                      className="px-4 py-2 bg-[#0a66c2] hover:bg-[#004182] text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Share to LinkedIn</span>
                    </button>
                  </div>

                </div>
              ) : (
                <button
                  onClick={() => {
                    setExamSubmitted(false);
                    setUserAnswers({});
                  }}
                  className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5 inline mr-1.5" />
                  <span>Retry Capstone Assessment</span>
                </button>
              )}
            </div>
          )}

        </div>
      )}

      {/* JSON-LD FOR COURSE SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Executive Communication, Diplomatic Negotiation & Coordination Masterclass",
            "description": "Interactive executive course covering BLUF writing, Pyramid Principle, RACI matrix coordination, Harvard PON principled bargaining, and crisis decision simulation.",
            "provider": {
              "@type": "Person",
              "name": "Daloyar Hassan Shishir"
            }
          })
        }}
      />

    </div>
  );
};
