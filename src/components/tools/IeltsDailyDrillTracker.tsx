import React, { useState, useEffect } from 'react';
import { 
  Calendar, CheckCircle2, Clock, Award, 
  RotateCcw, Sparkles, Download, Upload, 
  ArrowRight, ShieldAlert, Zap, BookOpen, Volume2, Edit3, Mic, 
  ExternalLink, ChevronRight, HelpCircle, Check, X, Filter, Target,
  Play, BarChart3, AlertTriangle, BookmarkPlus
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { 
  ALL_120_DAYS_DATA, 
  PHASE_METADATA 
} from '../../data/ieltsDailyDrillData';
import type { DailyDrillAction } from '../../data/ieltsDailyDrillData';
import { 
  getUnifiedMemberProfile, 
  saveUnifiedMemberProfile,
  toggleRoadmapDay,
  logErrorToVault
} from '../../services/unifiedMemberService';

interface IeltsDailyDrillTrackerProps {
  onSelectTool?: (toolId: string) => void;
}

export const IeltsDailyDrillTracker: React.FC<IeltsDailyDrillTrackerProps> = ({ onSelectTool }) => {
  const [selectedPhase, setSelectedPhase] = useState<1 | 2 | 3 | 4 | 'all'>('all');
  const [activeDayAction, setActiveDayAction] = useState<DailyDrillAction | null>(null);
  const [completedDays, setCompletedDays] = useState<{ [day: number]: boolean }>({});
  const [hoursLogged, setHoursLogged] = useState<number>(24);
  const [activeGuideTab, setActiveGuideTab] = useState<'roadmap' | 'guide' | 'sprints' | 'errors'>('roadmap');
  
  // Custom Sprint Filter (120 Days, 60 Days, 30 Days)
  const [sprintMode, setSprintMode] = useState<'120_full' | '60_fast' | '30_express'>('120_full');

  // Error Log State
  const [errorLog, setErrorLog] = useState<any[]>([
    {
      id: 'err-1',
      testName: 'Listening Simulation 1',
      questionNumber: 3,
      dateLogged: '2026-09-20',
      userAnswer: '65',
      correctAnswer: '48',
      errorType: 'Acoustic / Scanning Slip',
      retested: false
    },
    {
      id: 'err-2',
      testName: 'Reading Lab Passage 1',
      questionNumber: 3,
      dateLogged: '2026-09-21',
      userAnswer: 'FALSE',
      correctAnswer: 'NOT GIVEN',
      errorType: 'Logic / Qualifier Trap',
      retested: false
    }
  ]);

  // Load from Unified Member Service & LocalStorage
  useEffect(() => {
    const profile = getUnifiedMemberProfile();
    const daysMap: { [day: number]: boolean } = {};
    (profile.ieltsRoadmapDays || []).forEach(d => {
      daysMap[d] = true;
    });
    setCompletedDays(daysMap);

    if (profile.ieltsErrorVault && profile.ieltsErrorVault.length > 0) {
      setErrorLog(profile.ieltsErrorVault);
    }
  }, []);

  const handleDayClick = (dayNumber: number) => {
    const action = ALL_120_DAYS_DATA.find(d => d.day === dayNumber);
    if (action) {
      setActiveDayAction(action);
    }
  };

  const handleToggleCompletion = (dayNumber: number) => {
    const updatedDays = toggleRoadmapDay(dayNumber);
    const daysMap: { [day: number]: boolean } = {};
    updatedDays.forEach(d => { daysMap[d] = true; });
    setCompletedDays(daysMap);

    if (daysMap[dayNumber]) {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
      setHoursLogged(prev => prev + 2);
    }
  };

  const handleRetestError = (id: string) => {
    const updated = errorLog.map(e => e.id === id ? { ...e, retested: true } : e);
    setErrorLog(updated);
    saveUnifiedMemberProfile({ ieltsErrorVault: updated });
    confetti({ particleCount: 35, spread: 50, origin: { y: 0.6 } });
  };

  // Launch target tool directly
  const handleLaunchTool = (toolId?: string) => {
    if (toolId && onSelectTool) {
      setActiveDayAction(null);
      onSelectTool(toolId);
    }
  };

  // Filter days by phase or sprint
  const filteredDays = ALL_120_DAYS_DATA.filter(action => {
    if (sprintMode === '30_express' && action.day > 30) return false;
    if (sprintMode === '60_fast' && action.day > 60) return false;
    if (selectedPhase !== 'all' && action.phase !== selectedPhase) return false;
    return true;
  });

  const completedCount = Object.values(completedDays).filter(Boolean).length;
  const maxSprintDays = sprintMode === '30_express' ? 30 : sprintMode === '60_fast' ? 60 : 120;
  const progressPercent = Math.round((completedCount / maxSprintDays) * 100);

  // 1-Click JSON Backup Export
  const handleExportBackup = () => {
    const data = {
      completedDays,
      hoursLogged,
      errorLog,
      exportDate: new Date().toISOString(),
      candidate: 'Daloyar Hassan Shishir'
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `IELTS-120-Day-Progress-Backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      
      {/* HEADER PROGRESS BANNER */}
      <div className="p-6 sm:p-8 bg-gradient-to-br from-teal-950 via-slate-900 to-teal-900 text-white rounded-3xl shadow-xl relative overflow-hidden space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" /> 120-Day Action Roadmap & User Guide
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold">
              Target: Band 8.5 – 9.0
            </span>
          </div>
          <button
            onClick={handleExportBackup}
            className="px-3.5 py-1.5 bg-white/10 hover:bg-white/20 text-teal-200 border border-white/20 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" /> Backup Plan (.JSON)
          </button>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Structured Daily Action Plan & 1:2 Forensic Error Vault
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            Eliminate random practice. Every single day gives you an explicit 90-minute task breakdown with 1-click launchers for the Listening Simulator, Split-Screen Reading Lab, Task 1 Morpher, and Collocation Duel.
          </p>
        </div>

        {/* Progress Bar & Key Metrics */}
        <div className="pt-3 space-y-2 max-w-2xl">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-teal-200">
              Completed Quotas: {completedCount} / {maxSprintDays} Days ({progressPercent}%)
            </span>
            <span className="text-amber-300 font-mono">{hoursLogged} Study Hours Logged</span>
          </div>
          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden border border-white/10">
            <div 
              className="h-full bg-gradient-to-r from-teal-400 via-amber-400 to-emerald-400 transition-all duration-500 rounded-full"
              style={{ width: `${Math.min(100, Math.max(5, progressPercent))}%` }}
            />
          </div>
        </div>
      </div>

      {/* NAVIGATION TABS: ROADMAP / FEATURE GUIDE / SPRINTS / ERROR VAULT */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
        <button
          onClick={() => setActiveGuideTab('roadmap')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
            activeGuideTab === 'roadmap'
              ? 'bg-teal-900 text-white shadow-xs'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>Interactive 120-Day Grid</span>
        </button>

        <button
          onClick={() => setActiveGuideTab('guide')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
            activeGuideTab === 'guide'
              ? 'bg-teal-900 text-white shadow-xs'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <HelpCircle className="w-4 h-4 text-amber-500" />
          <span>Complete Feature Guide & How to Start</span>
        </button>

        <button
          onClick={() => setActiveGuideTab('sprints')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
            activeGuideTab === 'sprints'
              ? 'bg-teal-900 text-white shadow-xs'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <Zap className="w-4 h-4 text-amber-500" />
          <span>Sprint Fast-Tracks (30/60/120 Days)</span>
        </button>

        <button
          onClick={() => setActiveGuideTab('errors')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
            activeGuideTab === 'errors'
              ? 'bg-teal-900 text-white shadow-xs'
              : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          <ShieldAlert className="w-4 h-4 text-rose-600" />
          <span>1:2 Forensic Error Vault ({errorLog.filter(e => !e.retested).length})</span>
        </button>
      </div>

      {/* TAB 1: INTERACTIVE 120-DAY GRID & PHASE TABS */}
      {activeGuideTab === 'roadmap' && (
        <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-6">
          
          {/* Phase Filter Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Target className="w-4 h-4 text-teal-800" /> Click Any Day for Full Action Directive & Tool Launchers
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Every square contains verified daily objectives, step-by-step quotas, and Band 9 examiner tips.
              </p>
            </div>

            {/* Phase Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => setSelectedPhase('all')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer border ${
                  selectedPhase === 'all'
                    ? 'bg-teal-900 text-white border-teal-900'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                }`}
              >
                All 120 Days
              </button>
              <button
                onClick={() => setSelectedPhase(1)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer border ${
                  selectedPhase === 1
                    ? 'bg-teal-900 text-white border-teal-900'
                    : 'bg-teal-50 text-teal-900 hover:bg-teal-100 border-teal-200'
                }`}
              >
                Phase 1 (D1–30)
              </button>
              <button
                onClick={() => setSelectedPhase(2)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer border ${
                  selectedPhase === 2
                    ? 'bg-amber-600 text-white border-amber-600'
                    : 'bg-amber-50 text-amber-900 hover:bg-amber-100 border-amber-200'
                }`}
              >
                Phase 2 (D31–75)
              </button>
              <button
                onClick={() => setSelectedPhase(3)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer border ${
                  selectedPhase === 3
                    ? 'bg-indigo-700 text-white border-indigo-700'
                    : 'bg-indigo-50 text-indigo-900 hover:bg-indigo-100 border-indigo-200'
                }`}
              >
                Phase 3 (D76–105)
              </button>
              <button
                onClick={() => setSelectedPhase(4)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer border ${
                  selectedPhase === 4
                    ? 'bg-emerald-700 text-white border-emerald-700'
                    : 'bg-emerald-50 text-emerald-900 hover:bg-emerald-100 border-emerald-200'
                }`}
              >
                Phase 4 (D106–120)
              </button>
            </div>
          </div>

          {/* 4 Phase Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div 
              onClick={() => setSelectedPhase(1)}
              className={`p-4 rounded-2xl border transition cursor-pointer ${
                selectedPhase === 1 ? 'bg-teal-100/70 border-teal-400 shadow-sm' : 'bg-teal-50/60 border-teal-200/80 hover:bg-teal-100/50'
              }`}
            >
              <div className="text-[10px] font-bold uppercase tracking-wider text-teal-800">Phase 1: Days 1–30</div>
              <div className="font-bold text-xs text-teal-950">Foundation & Receptive Rigor</div>
              <p className="text-[11px] text-slate-600 mt-1">Acoustic distractor elimination & Reading T/F/NG logic gates.</p>
            </div>

            <div 
              onClick={() => setSelectedPhase(2)}
              className={`p-4 rounded-2xl border transition cursor-pointer ${
                selectedPhase === 2 ? 'bg-amber-100/70 border-amber-400 shadow-sm' : 'bg-amber-50/60 border-amber-200/80 hover:bg-amber-100/50'
              }`}
            >
              <div className="text-[10px] font-bold uppercase tracking-wider text-amber-800">Phase 2: Days 31–75</div>
              <div className="font-bold text-xs text-amber-950">Pressure Conditioning</div>
              <p className="text-[11px] text-slate-600 mt-1">1.15x speed listening reflex, Task 1 chart morpher & essay OCR.</p>
            </div>

            <div 
              onClick={() => setSelectedPhase(3)}
              className={`p-4 rounded-2xl border transition cursor-pointer ${
                selectedPhase === 3 ? 'bg-indigo-100/70 border-indigo-400 shadow-sm' : 'bg-indigo-50/60 border-indigo-200/80 hover:bg-indigo-100/50'
              }`}
            >
              <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-800">Phase 3: Days 76–105</div>
              <div className="font-bold text-xs text-indigo-950">Cambridge Full Simulations</div>
              <p className="text-[11px] text-slate-600 mt-1">Full 3-hour authentic mock exams. Lock in 38-40/40 in L & R.</p>
            </div>

            <div 
              onClick={() => setSelectedPhase(4)}
              className={`p-4 rounded-2xl border transition cursor-pointer ${
                selectedPhase === 4 ? 'bg-emerald-100/70 border-emerald-400 shadow-sm' : 'bg-emerald-50/60 border-emerald-200/80 hover:bg-emerald-100/50'
              }`}
            >
              <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">Phase 4: Days 106–120</div>
              <div className="font-bold text-xs text-emerald-950">Peak Tapering & Cadence</div>
              <p className="text-[11px] text-slate-600 mt-1">Speaking Flow Radar cadence polish & verified certification.</p>
            </div>
          </div>

          {/* Interactive Day Grid */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <span>Interactive Day Grid ({filteredDays.length} Days Displayed):</span>
              <span className="text-[11px] text-slate-500 font-normal">Click any square to open action directive</span>
            </div>
            
            <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-12 gap-2">
              {filteredDays.map(action => {
                const isDone = !!completedDays[action.day];
                const phaseColor = action.phase === 1 
                  ? 'hover:border-teal-500' 
                  : action.phase === 2 
                  ? 'hover:border-amber-500' 
                  : action.phase === 3 
                  ? 'hover:border-indigo-500' 
                  : 'hover:border-emerald-500';

                return (
                  <button
                    key={action.day}
                    onClick={() => handleDayClick(action.day)}
                    className={`p-2.5 rounded-2xl text-xs font-bold transition flex flex-col items-center justify-center cursor-pointer border shadow-2xs group relative ${
                      isDone 
                        ? 'bg-teal-900 text-white border-teal-950 shadow-xs' 
                        : `bg-white hover:bg-slate-50 text-slate-800 border-slate-200 ${phaseColor}`
                    }`}
                  >
                    <span className="text-xs font-black">D{action.day}</span>
                    <span className={`text-[10px] mt-0.5 font-bold ${isDone ? 'text-amber-300' : 'text-slate-400'}`}>
                      {isDone ? '✔' : action.focusSkill.slice(0, 3)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      )}

      {/* TAB 2: COMPLETE FEATURE GUIDE & HOW TO START */}
      {activeGuideTab === 'guide' && (
        <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-8">
          <div className="space-y-2">
            <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" /> IELTS Band 8.5+ Complete Feature Blueprint & Workflow
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
              This portal is engineered to eliminate passive study. Here is the step-by-step master workflow showing how each interactive engine works together to guarantee Band 8.5+.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Tool 1: Listening Simulator */}
            <div className="p-5 bg-teal-50/50 border border-teal-200 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase text-teal-900 bg-teal-100 px-2.5 py-0.5 rounded-md">
                  Step 1 • Listening Rigor
                </span>
                <Volume2 className="w-4 h-4 text-teal-800" />
              </div>
              <h4 className="text-sm font-black text-slate-900">4-Section Multi-Speed Listening Exam</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Take full Cambridge-style listening tests with variable playback speed (1.0x, 1.15x, 1.25x). Analyzes distractor traps in real time and automatically converts raw scores into verified Band scores.
              </p>
              <button
                onClick={() => handleLaunchTool('listening-simulator')}
                className="text-xs font-bold text-teal-800 hover:text-teal-950 inline-flex items-center gap-1 cursor-pointer"
              >
                Launch Listening Simulator →
              </button>
            </div>

            {/* Tool 2: Split-Screen Reading Lab */}
            <div className="p-5 bg-amber-50/50 border border-amber-200 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-md">
                  Step 2 • Reading Logic
                </span>
                <BookOpen className="w-4 h-4 text-amber-800" />
              </div>
              <h4 className="text-sm font-black text-slate-900">Split-Screen Reading Lab & T/F/NG Gate</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Highlight passage evidence in 3 colors and solve True/False/Not Given questions using strict mathematical set-theory logic. Eliminates plausible assumption traps.
              </p>
              <button
                onClick={() => handleLaunchTool('reading-lab')}
                className="text-xs font-bold text-amber-800 hover:text-amber-950 inline-flex items-center gap-1 cursor-pointer"
              >
                Launch Reading Lab →
              </button>
            </div>

            {/* Tool 3: Task 1 Morpher & Essay Scanner */}
            <div className="p-5 bg-indigo-50/50 border border-indigo-200 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase text-indigo-900 bg-indigo-100 px-2.5 py-0.5 rounded-md">
                  Step 3 • Writing Mastery
                </span>
                <BarChart3 className="w-4 h-4 text-indigo-800" />
              </div>
              <h4 className="text-sm font-black text-slate-900">Task 1 SVG Morpher & Handwritten OCR Scanner</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Drag SVG line/bar chart nodes to master preposition rules (by, to, at, of), and upload photos of your handwritten Task 2 paper essay for instant 4-pillar rubric grading.
              </p>
              <button
                onClick={() => handleLaunchTool('task1-morpher')}
                className="text-xs font-bold text-indigo-800 hover:text-indigo-950 inline-flex items-center gap-1 cursor-pointer"
              >
                Launch Task 1 Morpher →
              </button>
            </div>

            {/* Tool 4: Collocation Duel & Speaking Radar */}
            <div className="p-5 bg-emerald-50/50 border border-emerald-200 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase text-emerald-900 bg-emerald-100 px-2.5 py-0.5 rounded-md">
                  Step 4 • Lexicon & Flow
                </span>
                <Mic className="w-4 h-4 text-emerald-800" />
              </div>
              <h4 className="text-sm font-black text-slate-900">Band 9 Collocation Duel & Speaking Flow Radar</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Play 60-second speed collocations to build instant Band 9 phrasing reflex under time pressure, and record speaking practice with live Words-Per-Minute cadence radars.
              </p>
              <button
                onClick={() => handleLaunchTool('collocation-duel')}
                className="text-xs font-bold text-emerald-800 hover:text-emerald-950 inline-flex items-center gap-1 cursor-pointer"
              >
                Launch Collocation Duel →
              </button>
            </div>

          </div>
        </div>
      )}

      {/* TAB 3: SPRINT FAST-TRACKS (30/60/120 DAYS) */}
      {activeGuideTab === 'sprints' && (
        <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="space-y-1">
            <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" /> Choose Your Preparation Timeline
            </h3>
            <p className="text-xs text-slate-500">
              Select how much time you have before test day to filter your daily schedule accordingly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* 30-Day Express */}
            <div 
              onClick={() => {
                setSprintMode('30_express');
                setActiveGuideTab('roadmap');
              }}
              className={`p-5 rounded-2xl border-2 transition cursor-pointer space-y-3 ${
                sprintMode === '30_express' ? 'bg-amber-50/60 border-amber-500' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase text-amber-900 bg-amber-100 px-2 py-0.5 rounded">30 Days</span>
                <span className="text-xs font-bold text-amber-800">Express Sprint</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">High-Intensity Crash Track</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Focus strictly on eliminating high-frequency acoustic distractors, T/F/NG qualifier traps, and Band 9 academic collocations.
              </p>
              <div className="text-xs font-bold text-amber-900">Select 30-Day Track →</div>
            </div>

            {/* 60-Day Fast Track */}
            <div 
              onClick={() => {
                setSprintMode('60_fast');
                setActiveGuideTab('roadmap');
              }}
              className={`p-5 rounded-2xl border-2 transition cursor-pointer space-y-3 ${
                sprintMode === '60_fast' ? 'bg-teal-50/60 border-teal-600' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase text-teal-900 bg-teal-100 px-2 py-0.5 rounded">60 Days</span>
                <span className="text-xs font-bold text-teal-800">Fast-Track Intensive</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">Balanced Rigor & Output</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Combines Receptive Rigor with 1.15x speed listening, full Task 1 chart morphing, and handwritten essay evaluations.
              </p>
              <div className="text-xs font-bold text-teal-900">Select 60-Day Track →</div>
            </div>

            {/* 120-Day Full Mastery */}
            <div 
              onClick={() => {
                setSprintMode('120_full');
                setActiveGuideTab('roadmap');
              }}
              className={`p-5 rounded-2xl border-2 transition cursor-pointer space-y-3 ${
                sprintMode === '120_full' ? 'bg-indigo-50/60 border-indigo-600' : 'bg-slate-50 border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase text-indigo-900 bg-indigo-100 px-2 py-0.5 rounded">120 Days</span>
                <span className="text-xs font-bold text-indigo-800">Recommended Masterclass</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">230-Hour Band 8.5-9.0 Master Blueprint</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Complete 4-phase pedagogical progression covering Cambridge mock simulations, 1:2 Error Vault audits, and peak cadence tapering.
              </p>
              <div className="text-xs font-bold text-indigo-900">Select 120-Day Track →</div>
            </div>

          </div>
        </div>
      )}

      {/* TAB 4: 1:2 FORENSIC ERROR LOG & 48-HR RE-TEST VAULT */}
      {activeGuideTab === 'errors' && (
        <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div>
              <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-600" /> 1:2 Forensic Error Vault & 48-Hour Re-Test Lab
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Every missed question is logged here. Re-attempt within 48 hours to eliminate root-cause habits.
              </p>
            </div>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
              {errorLog.filter(e => !e.retested).length} Active Incomplete Traps
            </span>
          </div>

          <div className="space-y-3">
            {errorLog.map(err => (
              <div 
                key={err.id}
                className={`p-4 rounded-2xl border transition flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  err.retested ? 'bg-emerald-50/50 border-emerald-200' : 'bg-rose-50/50 border-rose-200'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900">{err.testName || err.sourceTool}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200">
                      {err.errorType || 'Logic Trap'}
                    </span>
                  </div>
                  <div className="text-xs text-slate-600 flex flex-wrap items-center gap-3">
                    <span className="text-rose-700 font-mono">Your Missed Answer: "{err.userAnswer || err.userError}"</span>
                    <span className="text-emerald-800 font-bold font-mono">Forensic Correction: "{err.correctAnswer || err.forensicCorrection}"</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {err.retested ? (
                    <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> 100% Mastered
                    </span>
                  ) : (
                    <button
                      onClick={() => handleRetestError(err.id)}
                      className="px-3.5 py-1.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 shadow-xs"
                    >
                      <RotateCcw className="w-3 h-3" /> Re-Test Question
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* INTERACTIVE DAY ACTION DIRECTIVE MODAL & DRAWER */}
      {activeDayAction && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl space-y-6 animate-in fade-in zoom-in-95 duration-150 my-8">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-900 border border-teal-200 text-xs font-black uppercase">
                  {activeDayAction.phaseTitle}
                </span>
                <span className="text-xs font-mono font-bold text-slate-500">
                  {activeDayAction.estimatedMinutes} Mins Allocated
                </span>
              </div>
              <button
                onClick={() => setActiveDayAction(null)}
                className="text-slate-400 hover:text-slate-800 font-bold text-xs p-1"
              >
                ✕ Close
              </button>
            </div>

            {/* Day Title & Focus Skill */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-black text-slate-900">
                  {activeDayAction.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeDayAction.objectives.map((obj, i) => (
                  <div key={i} className="text-xs text-slate-600 flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-800 shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Task Quotas Checklist with Direct Launchers */}
            <div className="space-y-3 p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Daily Skill Quotas (1-Click Practice Launchers):
              </div>
              
              <div className="space-y-2.5">
                {activeDayAction.tasks.map((task) => (
                  <div 
                    key={task.id}
                    className="p-3 bg-white border border-slate-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-2xs"
                  >
                    <div className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-teal-100 text-teal-900 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                        •
                      </span>
                      <span className="text-xs text-slate-800 font-medium">{task.description}</span>
                    </div>

                    {task.toolId && (
                      <button
                        onClick={() => handleLaunchTool(task.toolId)}
                        className="px-3 py-1.5 bg-teal-900 hover:bg-teal-800 text-white rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer shrink-0 shadow-xs"
                      >
                        <Play className="w-3 h-3 text-amber-400 fill-amber-400" />
                        <span>{task.toolLabel || 'Launch Tool'}</span>
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Examiner Secret Tip & Trap Warning Box */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 bg-amber-50/70 border border-amber-200 rounded-xl space-y-1">
                <div className="text-[10px] font-black uppercase text-amber-900 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-500" /> Band 9 Examiner Secret Tip
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">{activeDayAction.examinerTip}</p>
              </div>

              <div className="p-3.5 bg-rose-50/70 border border-rose-200 rounded-xl space-y-1">
                <div className="text-[10px] font-black uppercase text-rose-900 flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3 text-rose-500" /> Common Trap to Avoid
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">{activeDayAction.commonTrap}</p>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                onClick={() => handleToggleCompletion(activeDayAction.day)}
                className={`w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                  completedDays[activeDayAction.day]
                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                    : 'bg-teal-900 hover:bg-teal-800 text-white'
                }`}
              >
                <CheckCircle2 className="w-4 h-4 text-amber-300" />
                <span>{completedDays[activeDayAction.day] ? 'Completed (Click to Undo)' : 'Mark Day Completed (+25 XP)'}</span>
              </button>

              <button
                onClick={() => setActiveDayAction(null)}
                className="w-full sm:w-auto px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition cursor-pointer"
              >
                Close Directive
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
