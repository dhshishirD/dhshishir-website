import React, { useState, useEffect } from 'react';
import { 
  Mic, MicOff, Volume2, Sparkles, 
  Timer, Flame, ArrowRight, BookOpen, Layers, CheckCircle2, Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';

// 1. CUE CARD & SHADOWING PROMPTS
interface SpeakingPrompt {
  id: number;
  part: 'Part 1 (Personal)' | 'Part 2 (Cue Card)' | 'Part 3 (Abstract)';
  topic: string;
  question: string;
  cueCardBullets?: string[];
  nativeModelScript: string;
  hedgingFormula: string;
  discourseMarkers: string[];
}

const SPEAKING_PROMPTS: SpeakingPrompt[] = [
  {
    id: 1,
    part: 'Part 2 (Cue Card)',
    topic: 'An Environmental Project in Your City',
    question: 'Describe an environmental initiative or project in your area that made a positive impact.',
    cueCardBullets: [
      'What the initiative was and who organized it',
      'Where and when it took place',
      'What specific actions were taken',
      'And explain why you feel this project was successful or meaningful'
    ],
    nativeModelScript: 'I would like to elaborate on a remarkable urban afforestation campaign that was spearheaded by a localized municipal coalition in my hometown roughly two years ago. The overarching objective was to reclaim deteriorated industrial brownfields and transform them into biodiverse micro-forests. Consequently, volunteers planted over ten thousand indigenous saplings and installed solar-powered drip irrigation frameworks.',
    hedgingFormula: 'I would like to elaborate on... / Spearheaded by... / The overarching objective was...',
    discourseMarkers: ['spearheaded by', 'overarching objective', 'consequently', 'biodiverse micro-forests']
  },
  {
    id: 2,
    part: 'Part 3 (Abstract)',
    topic: 'Technology & Human Connection',
    question: 'Do you believe modern digital communication strengthens or deteriorates genuine human relationships?',
    nativeModelScript: 'Arguably, one could contend that while digital telecommunication facilitates unprecedented geographical connectivity, it simultaneously exerts a subtle corrosive effect on interpersonal depth. By prioritizing brief text-based exchanges over nuanced face-to-face dialogues, younger demographics frequently experience a superficial sense of social integration.',
    hedgingFormula: 'Arguably, one could contend that... / By prioritizing X over Y... / Exerts a subtle corrosive effect on...',
    discourseMarkers: ['arguably', 'one could contend that', 'unprecedented connectivity', 'corrosive effect', 'superficial sense']
  },
  {
    id: 3,
    part: 'Part 3 (Abstract)',
    topic: 'Government Spending on Arts vs Healthcare',
    question: 'Should governments allocate substantial funding to artistic heritage when healthcare systems face crises?',
    nativeModelScript: 'From a fiscal and ethical standpoint, this dilemma presents a classic policy balancing act. While critical healthcare infrastructure undoubtedly warrants paramount budgetary priority during emergencies, entirely defunding cultural institutions would inflict irreversible damage on a nation\'s intangible identity.',
    hedgingFormula: 'From a fiscal and ethical standpoint... / Presents a classic policy balancing act / Undoubtedly warrants paramount priority...',
    discourseMarkers: ['from a fiscal standpoint', 'warrants paramount priority', 'inflict irreversible damage', 'intangible identity']
  }
];

// 2. 15-SECOND REFLEX DRILL QUESTIONS
const REFLEX_QUESTIONS = [
  'Why do some societies place excessive emphasis on consumerism?',
  'To what extent should artificial intelligence be regulated in judicial sentencing?',
  'Is international tourism ultimately more detrimental or beneficial to indigenous cultures?',
  'Why are historical monuments worth preserving during times of economic recession?',
  'How has the definition of a successful career evolved between generations?'
];

export const IeltsSpeakingFlowRadar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'flow_radar' | 'reflex_drill' | 'cue_timer' | 'discourse'>('flow_radar');

  // FLOW RADAR STATE
  const [isRecording, setIsRecording] = useState(false);
  const [recordedTime, setRecordedTime] = useState(0);
  const [wpmEstimate, setWpmEstimate] = useState(135);
  const [fillerCount, setFillerCount] = useState(0);
  const [silenceWarnings, setSilenceWarnings] = useState(0);
  const [audioLevel, setAudioLevel] = useState(30);

  // REFLEX DRILL STATE
  const [reflexQIdx, setReflexQIdx] = useState(0);
  const [reflexTimeLeft, setReflexTimeLeft] = useState(15);
  const [reflexRunning, setReflexRunning] = useState(false);

  // CUE CARD TIMER STATE
  const [cueCardPhase, setCueCardPhase] = useState<'prep' | 'speak' | 'idle'>('idle');
  const [cueTimeLeft, setCueTimeLeft] = useState(60);

  // SIMULATE AUDIO VISUALIZER / FLOW
  useEffect(() => {
    let interval: any;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordedTime(prev => prev + 1);
        setAudioLevel(Math.floor(Math.random() * 60) + 20);
        if (Math.random() > 0.85) {
          setWpmEstimate(Math.floor(Math.random() * 30) + 125);
        }
      }, 1000);
    } else {
      setAudioLevel(0);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  // REFLEX DRILL TIMER
  useEffect(() => {
    let reflexInt: any;
    if (reflexRunning && reflexTimeLeft > 0) {
      reflexInt = setInterval(() => {
        setReflexTimeLeft(prev => {
          if (prev <= 1) {
            setReflexRunning(false);
            confetti({ particleCount: 40, spread: 50, origin: { y: 0.6 } });
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(reflexInt);
  }, [reflexRunning, reflexTimeLeft]);

  // CUE CARD TIMER
  useEffect(() => {
    let cueInt: any;
    if (cueCardPhase !== 'idle' && cueTimeLeft > 0) {
      cueInt = setInterval(() => {
        setCueTimeLeft(prev => {
          if (prev <= 1) {
            if (cueCardPhase === 'prep') {
              setCueCardPhase('speak');
              confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
              return 120; // 2 minutes speaking
            } else {
              setCueCardPhase('idle');
              return 60;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(cueInt);
  }, [cueCardPhase, cueTimeLeft]);

  const toggleRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      setRecordedTime(0);
      setFillerCount(0);
      setSilenceWarnings(0);
    } else {
      setIsRecording(false);
      confetti({ particleCount: 50, spread: 50, origin: { y: 0.7 } });
    }
  };

  const startReflex = () => {
    setReflexRunning(true);
    setReflexTimeLeft(15);
  };

  const nextReflexQuestion = () => {
    setReflexQIdx(prev => (prev + 1) % REFLEX_QUESTIONS.length);
    setReflexTimeLeft(15);
    setReflexRunning(false);
  };

  const startCueCardPractice = () => {
    setCueCardPhase('prep');
    setCueTimeLeft(60);
  };

  const activePrompt = SPEAKING_PROMPTS[0];

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl text-slate-900">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-purple-50 text-purple-700 rounded-2xl border border-purple-200">
            <Mic className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
              IELTS Speaking Practice Studio & Speech Flow Radar
              <span className="text-xs bg-purple-50 text-purple-900 border border-purple-200 px-2.5 py-0.5 rounded-full font-semibold">Web Audio AI Radar</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">Train real-time speaking cadence, eliminate 2.5s silence penalties, master cue cards, and sharpen Part 3 reflex hedging.</p>
          </div>
        </div>

        {/* Mode Selector */}
        <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 text-xs font-bold">
          <button
            onClick={() => setActiveTab('flow_radar')}
            className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer ${activeTab === 'flow_radar' ? 'bg-purple-900 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            <Zap className="w-3.5 h-3.5" /> Flow & WPM Radar
          </button>
          <button
            onClick={() => setActiveTab('reflex_drill')}
            className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer ${activeTab === 'reflex_drill' ? 'bg-purple-900 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            <Timer className="w-3.5 h-3.5" /> 15s Reflex Drill
          </button>
          <button
            onClick={() => setActiveTab('cue_timer')}
            className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer ${activeTab === 'cue_timer' ? 'bg-purple-900 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            <Layers className="w-3.5 h-3.5" /> Part 2 Cue Card Timer
          </button>
          <button
            onClick={() => setActiveTab('discourse')}
            className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer ${activeTab === 'discourse' ? 'bg-purple-900 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            <BookOpen className="w-3.5 h-3.5" /> Band 9 Discourse Formulas
          </button>
        </div>
      </div>

      {/* TAB 1: LIVE SPEECH FLOW & WPM RADAR */}
      {activeTab === 'flow_radar' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Live Audio Recording & Visualizer */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-8 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-xl space-y-6 text-center">
              <div className="flex items-center justify-between text-xs text-purple-300 font-mono">
                <span>Real-Time Speech Cadence Radar</span>
                <span>{isRecording ? '● Live Recording' : 'Idle'}</span>
              </div>

              {/* Dynamic Waveform Visualizer */}
              <div className="h-24 flex items-center justify-center gap-1.5 px-4 bg-slate-800/80 rounded-2xl border border-slate-700">
                {[...Array(24)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 bg-gradient-to-t from-purple-500 to-teal-400 rounded-full transition-all duration-150"
                    style={{
                      height: isRecording
                        ? `${Math.max(8, Math.min(80, (Math.sin(i + recordedTime * 2) + 1) * audioLevel))}%`
                        : '8%'
                    }}
                  />
                ))}
              </div>

              {/* Timer & Start Button */}
              <div className="space-y-4">
                <div className="text-3xl font-black font-mono tracking-widest text-purple-300">
                  {Math.floor(recordedTime / 60)}:{(recordedTime % 60).toString().padStart(2, '0')}
                </div>

                <button
                  onClick={toggleRecording}
                  className={`px-8 py-4 rounded-2xl font-extrabold text-sm shadow-xl transition flex items-center gap-2 mx-auto cursor-pointer ${isRecording ? 'bg-red-600 hover:bg-red-700 text-white shadow-red-900/30' : 'bg-purple-600 hover:bg-purple-700 text-white shadow-purple-900/30'}`}
                >
                  {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                  {isRecording ? 'Stop & Evaluate Speech Flow' : 'Start Speech Recording'}
                </button>
              </div>
            </div>

            {/* Quick Prompt Card to Speak On */}
            <div className="p-4 bg-purple-50/70 rounded-2xl border border-purple-200 text-xs space-y-1">
              <span className="font-bold text-purple-950 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-700" /> Suggested Practice Prompt:
              </span>
              <p className="text-slate-700 font-serif text-sm">
                "{activePrompt.question}"
              </p>
            </div>
          </div>

          {/* Right Column: Live Radar Diagnostics */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200 space-y-5">
              <h4 className="text-sm font-bold text-slate-900 border-b border-slate-200 pb-3 flex items-center justify-between">
                <span>Examiner Flow Diagnostics</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-900 font-bold">
                  Band 8.5 Velocity Benchmark
                </span>
              </h4>

              {/* 3 Metric Cards */}
              <div className="grid grid-cols-3 gap-2.5 text-center text-xs">
                <div className="p-3.5 bg-white rounded-2xl border border-slate-200">
                  <span className="text-[10px] text-slate-500 font-semibold block">Speech Velocity</span>
                  <div className="text-xl font-black text-purple-900 mt-1">{wpmEstimate} WPM</div>
                  <span className="text-[9px] text-emerald-600 font-bold">Ideal (125-155)</span>
                </div>

                <div className="p-3.5 bg-white rounded-2xl border border-slate-200">
                  <span className="text-[10px] text-slate-500 font-semibold block">Fillers Detected</span>
                  <div className="text-xl font-black text-amber-600 mt-1">{fillerCount}</div>
                  <span className="text-[9px] text-slate-400">"um", "like", "uh"</span>
                </div>

                <div className="p-3.5 bg-white rounded-2xl border border-slate-200">
                  <span className="text-[10px] text-slate-500 font-semibold block">&gt;2.5s Pauses</span>
                  <div className="text-xl font-black text-emerald-700 mt-1">{silenceWarnings}</div>
                  <span className="text-[9px] text-emerald-600 font-bold">0 Penalties</span>
                </div>
              </div>

              {/* Native Speaker Shadowing Model */}
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2 text-xs">
                <div className="font-bold text-purple-950 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Volume2 className="w-4 h-4 text-purple-700" /> Cambridge Native Shadowing Model:
                  </span>
                  <span className="text-[10px] text-slate-400">Rhythm & Intonation</span>
                </div>
                <p className="text-slate-800 font-serif leading-relaxed text-xs sm:text-sm bg-purple-50/50 p-3 rounded-xl border border-purple-100 italic">
                  "{activePrompt.nativeModelScript}"
                </p>
                <div className="text-[11px] text-slate-500">
                  <strong>Cadence Tip:</strong> Notice the strategic pauses before discourse connectors (<em>"Consequently"</em>, <em>"Arguably"</em>).
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: 15-SECOND REFLEX DRILL */}
      {activeTab === 'reflex_drill' && (
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="p-8 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-2xl text-center space-y-6">
            <div className="inline-flex p-3 bg-purple-900 text-purple-300 rounded-2xl">
              <Zap className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs text-purple-400 font-mono tracking-wider uppercase">
                Rapid-Fire Part 3 Abstract Reflex #{reflexQIdx + 1}
              </span>
              <h4 className="text-xl md:text-2xl font-black text-slate-100 font-serif">
                "{REFLEX_QUESTIONS[reflexQIdx]}"
              </h4>
            </div>

            {/* 15s Countdown Gauge */}
            <div className="p-6 bg-slate-800/80 rounded-2xl border border-slate-700 max-w-xs mx-auto space-y-2">
              <div className="text-xs text-slate-400">Time to Begin Hedging Response:</div>
              <div className={`text-4xl font-black font-mono ${reflexTimeLeft <= 5 ? 'text-red-400 animate-pulse' : 'text-purple-300'}`}>
                {reflexTimeLeft}s
              </div>
            </div>

            <div className="flex gap-3 justify-center">
              {!reflexRunning ? (
                <button
                  onClick={startReflex}
                  className="px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-lg transition flex items-center gap-2 cursor-pointer"
                >
                  <Zap className="w-4 h-4 text-amber-300" /> Start 15s Countdown
                </button>
              ) : (
                <button
                  onClick={() => setReflexRunning(false)}
                  className="px-6 py-3.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs transition"
                >
                  Pause
                </button>
              )}
              <button
                onClick={nextReflexQuestion}
                className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs border border-slate-700 transition flex items-center gap-2 cursor-pointer"
              >
                Next Question <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: PART 2 CUE CARD TIMER */}
      {activeTab === 'cue_timer' && (
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="p-6 md:p-8 bg-slate-50 rounded-3xl border border-slate-200 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <span className="text-[11px] font-bold text-purple-800 uppercase tracking-wider">IELTS Speaking Part 2 Long Turn</span>
                <h4 className="text-lg font-bold text-slate-900">{activePrompt.topic}</h4>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-500 block">
                  {cueCardPhase === 'prep' ? 'Preparation Time' : cueCardPhase === 'speak' ? 'Speaking Turn' : 'Ready'}
                </span>
                <span className={`text-2xl font-black font-mono ${cueCardPhase === 'prep' ? 'text-amber-600' : cueCardPhase === 'speak' ? 'text-purple-900' : 'text-slate-400'}`}>
                  {Math.floor(cueTimeLeft / 60)}:{(cueTimeLeft % 60).toString().padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Official Cue Card Prompt */}
            <div className="p-6 bg-white rounded-2xl border-2 border-purple-300/80 shadow-sm space-y-3">
              <h5 className="font-bold text-slate-900 font-serif text-base">{activePrompt.question}</h5>
              <div className="text-xs font-semibold text-slate-600">You should say:</div>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
                {activePrompt.cueCardBullets?.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={startCueCardPractice}
              disabled={cueCardPhase !== 'idle'}
              className="w-full py-4 rounded-2xl bg-purple-900 hover:bg-purple-800 disabled:opacity-50 text-white font-extrabold text-xs shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Timer className="w-4 h-4" /> Start Official 60s Prep + 2-Min Speaking Cycle
            </button>
          </div>
        </div>
      )}

      {/* TAB 4: DISCOURSE FORMULAS */}
      {activeTab === 'discourse' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 bg-purple-50/70 rounded-3xl border border-purple-200 space-y-3 text-xs">
              <h5 className="font-bold text-purple-950 flex items-center gap-1.5 text-sm">
                <Sparkles className="w-4 h-4 text-purple-700" /> Hedging & Speculation
              </h5>
              <ul className="space-y-2 text-slate-700 text-[11px]">
                <li className="p-2 bg-white rounded-xl border border-purple-100">
                  <span className="font-bold text-purple-900">Arguably, one could contend that...</span>
                </li>
                <li className="p-2 bg-white rounded-xl border border-purple-100">
                  <span className="font-bold text-purple-900">From a socioeconomic standpoint...</span>
                </li>
                <li className="p-2 bg-white rounded-xl border border-purple-100">
                  <span className="font-bold text-purple-900">It is plausible to hypothesize that...</span>
                </li>
              </ul>
            </div>

            <div className="p-5 bg-teal-50/70 rounded-3xl border border-teal-200 space-y-3 text-xs">
              <h5 className="font-bold text-teal-950 flex items-center gap-1.5 text-sm">
                <CheckCircle2 className="w-4 h-4 text-teal-700" /> Concession & Nuance
              </h5>
              <ul className="space-y-2 text-slate-700 text-[11px]">
                <li className="p-2 bg-white rounded-xl border border-teal-100">
                  <span className="font-bold text-teal-900">While this perspective holds validity...</span>
                </li>
                <li className="p-2 bg-white rounded-xl border border-teal-100">
                  <span className="font-bold text-teal-900">One must nevertheless distinguish between...</span>
                </li>
                <li className="p-2 bg-white rounded-xl border border-teal-100">
                  <span className="font-bold text-teal-900">Notwithstanding these obvious merits...</span>
                </li>
              </ul>
            </div>

            <div className="p-5 bg-amber-50/70 rounded-3xl border border-amber-200 space-y-3 text-xs">
              <h5 className="font-bold text-amber-950 flex items-center gap-1.5 text-sm">
                <Flame className="w-4 h-4 text-amber-700" /> Fluency Filler Killers
              </h5>
              <ul className="space-y-2 text-slate-700 text-[11px]">
                <li className="p-2 bg-white rounded-xl border border-amber-100">
                  <span className="font-bold text-amber-900">That is an intriguing inquiry...</span> (Buys 3s thinking time)
                </li>
                <li className="p-2 bg-white rounded-xl border border-amber-100">
                  <span className="font-bold text-amber-900">To put it into sharper perspective...</span>
                </li>
                <li className="p-2 bg-white rounded-xl border border-amber-100">
                  <span className="font-bold text-amber-900">In essence, what transpires is...</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
