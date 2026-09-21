import React, { useState, useEffect } from 'react';
import { 
  Calendar, CheckCircle2, Clock, Award, 
  RotateCcw, Sparkles, Download, Upload, 
  ArrowRight, ShieldAlert, Zap, BookOpen, Volume2, Edit3, Mic, ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ErrorEntry {
  id: string;
  testName: string;
  questionNumber: number;
  dateLogged: string;
  userAnswer: string;
  correctAnswer: string;
  errorType: 'Acoustic / Scanning Slip' | 'Synonym Blindness' | 'Logic / Qualifier Trap';
  retested: boolean;
}

export const IeltsDailyDrillTracker: React.FC = () => {
  const [currentDay, setCurrentDay] = useState<number>(1);
  const [completedDays, setCompletedDays] = useState<{ [day: number]: boolean }>({});
  const [hoursLogged, setHoursLogged] = useState<number>(14);
  const [errorLog, setErrorLog] = useState<ErrorEntry[]>([
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

  // Load from LocalStorage
  useEffect(() => {
    try {
      const savedDays = localStorage.getItem('dh_ielts_completed_days');
      if (savedDays) setCompletedDays(JSON.parse(savedDays));
      const savedErrors = localStorage.getItem('dh_ielts_error_vault');
      if (savedErrors) setErrorLog(JSON.parse(savedErrors));
    } catch (e) {
      console.error(e);
    }
  }, []);

  const toggleDayCompletion = (day: number) => {
    const updated = { ...completedDays, [day]: !completedDays[day] };
    setCompletedDays(updated);
    localStorage.setItem('dh_ielts_completed_days', JSON.stringify(updated));

    if (updated[day]) {
      confetti({ particleCount: 30, spread: 50, origin: { y: 0.6 } });
      setHoursLogged(prev => prev + 2);
    }
  };

  const handleRetestError = (id: string) => {
    const updated = errorLog.map(e => e.id === id ? { ...e, retested: true } : e);
    setErrorLog(updated);
    localStorage.setItem('dh_ielts_error_vault', JSON.stringify(updated));
    confetti({ particleCount: 35, spread: 50, origin: { y: 0.6 } });
  };

  // Calculate Progress Stats
  const completedCount = Object.values(completedDays).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / 120) * 100);

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
    a.download = `IELTS-120-Day-Progress-Backup-${new Date().toISOString().slice(0,10)}.json`;
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
              <Calendar className="w-3.5 h-3.5" /> 120-Day Master Milestone Tracker
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold">
              Target: Band 8.5 - 9.0
            </span>
          </div>
          <button
            onClick={handleExportBackup}
            className="px-3.5 py-1.5 bg-white/10 hover:bg-white/20 text-teal-200 border border-white/20 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" /> 1-Click JSON Backup
          </button>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Daily Drill Progression & 1:2 Forensic Error Vault
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            Execute your 230-hour structured preparation across 120 days. Complete your daily skill quota, log missed questions into the Forensic Vault, and trigger automatic 48-hour re-tests until you achieve 100% accuracy.
          </p>
        </div>

        {/* Progress Bar & Key Metrics */}
        <div className="pt-3 space-y-2 max-w-2xl">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-teal-200">Overall Course Progress: {completedCount} / 120 Days Completed</span>
            <span className="text-amber-300 font-mono">{progressPercent}%</span>
          </div>
          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden border border-white/10">
            <div 
              className="h-full bg-gradient-to-r from-teal-400 to-amber-400 transition-all duration-500 rounded-full"
              style={{ width: `${Math.max(5, progressPercent)}%` }}
            />
          </div>
        </div>
      </div>

      {/* 4 TRAINING PHASES SELECTOR & CALENDAR */}
      <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <Clock className="w-4 h-4 text-teal-800" /> 120-Day Interactive Drill Schedule
          </div>
          <span className="text-xs text-slate-500 font-medium">Click any day to toggle completion</span>
        </div>

        {/* 4 Phase Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          
          <div className="p-4 bg-teal-50 rounded-2xl border border-teal-200 space-y-2">
            <div className="text-[10px] font-bold uppercase tracking-wider text-teal-800">Phase 1: Days 1–30</div>
            <div className="font-bold text-xs text-teal-950">Foundation & Receptive Rigor</div>
            <p className="text-[11px] text-slate-600">Eliminate acoustic traps & T/F/NG logic flaws. 1 Test daily.</p>
          </div>

          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 space-y-2">
            <div className="text-[10px] font-bold uppercase tracking-wider text-amber-800">Phase 2: Days 31–75</div>
            <div className="font-bold text-xs text-amber-950">Pressure Conditioning</div>
            <p className="text-[11px] text-slate-600">Listening at 1.15x speed. Full timed Writing Task 1 & 2 drafts.</p>
          </div>

          <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-200 space-y-2">
            <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-800">Phase 3: Days 76–105</div>
            <div className="font-bold text-xs text-indigo-950">Cambridge Simulations</div>
            <p className="text-[11px] text-slate-600">Full 3-hour authentic mock tests. Lock in 38-40/40 in L & R.</p>
          </div>

          <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-2">
            <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">Phase 4: Days 106–120</div>
            <div className="font-bold text-xs text-emerald-950">Peak Tapering & Mastery</div>
            <p className="text-[11px] text-slate-600">Full exam conditioning, speech flow radar & error log audit.</p>
          </div>

        </div>

        {/* 120-Day Interactive Day Grid */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-slate-700">Days 1 through 120 Interactive Grid:</div>
          <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-12 gap-2">
            {Array.from({ length: 120 }, (_, i) => i + 1).map(day => {
              const isDone = !!completedDays[day];
              return (
                <button
                  key={day}
                  onClick={() => toggleDayCompletion(day)}
                  className={`p-2 rounded-xl text-xs font-bold transition flex flex-col items-center justify-center cursor-pointer border ${
                    isDone 
                      ? 'bg-teal-900 text-white border-teal-950 shadow-xs' 
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  <span>D{day}</span>
                  <span className="text-[9px] mt-0.5">{isDone ? '✔' : '○'}</span>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* THE 1:2 FORENSIC ERROR LOG & 48-HR RE-TEST VAULT */}
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
                  <span className="text-xs font-bold text-slate-900">{err.testName} (Q#{err.questionNumber})</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200">
                    {err.errorType}
                  </span>
                </div>
                <div className="text-xs text-slate-600 flex items-center gap-3">
                  <span className="text-rose-700 font-mono">Your Answer: "{err.userAnswer}"</span>
                  <span className="text-emerald-800 font-bold font-mono">Correct: "{err.correctAnswer}"</span>
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
                    className="px-4 py-2 bg-rose-700 hover:bg-rose-800 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Mark Re-Tested & Cleared
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RECOMMENDED OFFICIAL PREPARATION PROGRAMS */}
      <div className="p-6 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300">
              Recommended Companion Programs
            </span>
            <h4 className="text-base font-black text-white">
              Official & Live IELTS Courses for Guaranteed Band 7.5–8.5
            </h4>
          </div>
          <span className="text-xs text-slate-400 font-medium">10 Minute School Programs</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex flex-col justify-between space-y-3">
            <div>
              <div className="font-bold text-teal-300 text-sm">IELTS LIVE Batch</div>
              <p className="text-[11px] text-slate-400 mt-1">Live classes, direct teacher feedback on Speaking & Writing, and peer study groups.</p>
            </div>
            <a
              href="https://10ms.io/hKLSB8"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-xl text-center text-xs flex items-center justify-center gap-1 transition"
            >
              <span>Join LIVE Batch</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex flex-col justify-between space-y-3">
            <div>
              <div className="font-bold text-amber-300 text-sm">Reading & Listening Mocks</div>
              <p className="text-[11px] text-slate-400 mt-1">Timed computer-delivered practice tests with automated scoring and error diagnostics.</p>
            </div>
            <a
              href="https://10ms.io/eKLSMe"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-center text-xs flex items-center justify-center gap-1 transition"
            >
              <span>Explore Mock Tests</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex flex-col justify-between space-y-3">
            <div>
              <div className="font-bold text-sky-300 text-sm">Complete Master Course</div>
              <p className="text-[11px] text-slate-400 mt-1">Self-paced video masterclasses covering all 4 modules from foundational to advanced Band 9.</p>
            </div>
            <a
              href="https://10ms.io/FKLSLS"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-center text-xs flex items-center justify-center gap-1 transition border border-white/10"
            >
              <span>View Master Course</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};
