import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, Mic, Play, Pause, RotateCcw, Volume2, 
  CheckCircle2, AlertTriangle, ArrowRight, BookOpen, 
  Activity, Award, Layers, Sliders, Check
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ChunkLesson {
  id: string;
  title: string;
  category: 'daily' | 'corporate' | 'ielts';
  level: 'Intermediate (B2)' | 'Advanced (C1)' | 'Mastery (C2)';
  rawText: string;
  chunkedTokens: { text: string; pauseType: 'micro' | 'boundary' | 'none'; color: string }[];
  audioModelPaceWpm: number;
  pedagogicalTip: string;
}

const CHUNK_LESSONS: ChunkLesson[] = [
  {
    id: 'lesson-1',
    title: 'Executive Meeting Briefing & Milestone Update',
    category: 'corporate',
    level: 'Advanced (C1)',
    rawText: 'Over the last quarter our operational team spearheaded three major initiatives achieving a 28 percent increase in workflow efficiency.',
    chunkedTokens: [
      { text: 'Over the last quarter,', pauseType: 'micro', color: 'bg-teal-100 text-teal-900 border-teal-300' },
      { text: 'our operational team', pauseType: 'none', color: 'bg-amber-100 text-amber-900 border-amber-300' },
      { text: 'spearheaded three major initiatives,', pauseType: 'micro', color: 'bg-sky-100 text-sky-900 border-sky-300' },
      { text: 'achieving a 28 percent increase', pauseType: 'none', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
      { text: 'in workflow efficiency.', pauseType: 'boundary', color: 'bg-purple-100 text-purple-900 border-purple-300' },
    ],
    audioModelPaceWpm: 95,
    pedagogicalTip: 'Notice the micro-pause after the time introductory phrase "Over the last quarter," before diving into the subject-verb core.'
  },
  {
    id: 'lesson-2',
    title: 'IELTS Speaking Part 3: Geopolitical Diplomacy & Climate Treaties',
    category: 'ielts',
    level: 'Mastery (C2)',
    rawText: 'In the contemporary international landscape multilateral diplomacy remains the sole viable mechanism for mitigating global ecological emergencies.',
    chunkedTokens: [
      { text: 'In the contemporary international landscape,', pauseType: 'micro', color: 'bg-teal-100 text-teal-900 border-teal-300' },
      { text: 'multilateral diplomacy', pauseType: 'none', color: 'bg-amber-100 text-amber-900 border-amber-300' },
      { text: 'remains the sole viable mechanism', pauseType: 'micro', color: 'bg-sky-100 text-sky-900 border-sky-300' },
      { text: 'for mitigating', pauseType: 'none', color: 'bg-rose-100 text-rose-900 border-rose-300' },
      { text: 'global ecological emergencies.', pauseType: 'boundary', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
    ],
    audioModelPaceWpm: 105,
    pedagogicalTip: 'Band 8.5+ speakers never say words one-by-one; they package complex noun phrases ("multilateral diplomacy") together.'
  },
  {
    id: 'lesson-3',
    title: 'Job Interview STAR: Conflict Resolution & Team Alignment',
    category: 'corporate',
    level: 'Advanced (C1)',
    rawText: 'When our cross-functional teams faced conflicting deliverables I convened a structured alignment workshop to renegotiate delivery deadlines.',
    chunkedTokens: [
      { text: 'When our cross-functional teams', pauseType: 'none', color: 'bg-amber-100 text-amber-900 border-amber-300' },
      { text: 'faced conflicting deliverables,', pauseType: 'micro', color: 'bg-rose-100 text-rose-900 border-rose-300' },
      { text: 'I convened a structured alignment workshop', pauseType: 'micro', color: 'bg-teal-100 text-teal-900 border-teal-300' },
      { text: 'to renegotiate delivery deadlines.', pauseType: 'boundary', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
    ],
    audioModelPaceWpm: 90,
    pedagogicalTip: 'The dependent clause ("faced conflicting deliverables,") requires a soft rise in intonation and a distinct micro-pause.'
  },
  {
    id: 'lesson-4',
    title: 'Daily Conversational Rhythm: Discussing Travel & Cultural Heritage',
    category: 'daily',
    level: 'Intermediate (B2)',
    rawText: 'Whenever I visit historic monuments I love exploring local architectural details that tell stories about ancient civilizations.',
    chunkedTokens: [
      { text: 'Whenever I visit historic monuments,', pauseType: 'micro', color: 'bg-teal-100 text-teal-900 border-teal-300' },
      { text: 'I love exploring', pauseType: 'none', color: 'bg-amber-100 text-amber-900 border-amber-300' },
      { text: 'local architectural details', pauseType: 'micro', color: 'bg-sky-100 text-sky-900 border-sky-300' },
      { text: 'that tell stories', pauseType: 'none', color: 'bg-purple-100 text-purple-900 border-purple-300' },
      { text: 'about ancient civilizations.', pauseType: 'boundary', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
    ],
    audioModelPaceWpm: 100,
    pedagogicalTip: 'Keep "that tell stories" and "about ancient civilizations" flowing smoothly without abrupt stops inside the prepositional phrase.'
  }
];

export const ChunkingCadenceStudio: React.FC = () => {
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<'all' | 'corporate' | 'ielts' | 'daily'>('all');
  const [targetWpm, setTargetWpm] = useState(95);
  const [isMetronomeActive, setIsMetronomeActive] = useState(false);
  const [activeChunkIndex, setActiveChunkIndex] = useState<number | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Practice Interactive Drill state
  const [drillSlashes, setDrillSlashes] = useState<number[]>([]);
  const [drillFeedback, setDrillFeedback] = useState<string | null>(null);

  // Recording State
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const activeLesson = CHUNK_LESSONS[selectedLessonIndex] || CHUNK_LESSONS[0];

  // Metronome Timer
  useEffect(() => {
    let interval: any = null;

    if (isMetronomeActive) {
      // Calculate beat duration based on WPM and average words per chunk (~4 words)
      const secondsPerBeat = (60 / targetWpm) * 3.2; 
      const intervalMs = secondsPerBeat * 1000;

      let currentStep = 0;
      setActiveChunkIndex(0);

      interval = setInterval(() => {
        currentStep = (currentStep + 1) % activeLesson.chunkedTokens.length;
        setActiveChunkIndex(currentStep);

        // Optional Web Audio synth beep
        if (soundEnabled && typeof window !== 'undefined' && (window as any).AudioContext) {
          try {
            const ctx = new ((window as any).AudioContext || (window as any).webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.frequency.value = currentStep === 0 ? 880 : 440;
            gain.gain.value = 0.05;
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.06);
          } catch (e) {
            // Audio context blocked or unsupported
          }
        }
      }, intervalMs);
    } else {
      setActiveChunkIndex(null);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isMetronomeActive, targetWpm, activeLesson, soundEnabled]);

  // Audio Playback of Model Speaker via Web Speech API
  const handlePlayModelSpeaker = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    // Construct text with natural punctuation pauses
    const fullSpoken = activeLesson.chunkedTokens.map(c => {
      return c.pauseType === 'micro' ? `${c.text}, ` : c.pauseType === 'boundary' ? `${c.text}. ` : `${c.text} `;
    }).join('');

    const utterance = new SpeechSynthesisUtterance(fullSpoken);
    utterance.lang = 'en-GB';
    utterance.rate = targetWpm / 115;
    window.speechSynthesis.speak(utterance);
  };

  // Voice Recording
  const handleStartRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;
      audioChunksRef.current = [];

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };

      recorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setRecordedAudioUrl(audioUrl);
      };

      recorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error('Microphone error:', err);
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 } });
    }
  };

  // Words for Interactive Drill
  const rawWords = activeLesson.rawText.split(/\s+/);

  const toggleSlashPosition = (index: number) => {
    if (drillSlashes.includes(index)) {
      setDrillSlashes(drillSlashes.filter(i => i !== index));
    } else {
      setDrillSlashes([...drillSlashes, index]);
    }
    setDrillFeedback(null);
  };

  const handleCheckDrill = () => {
    // Expected boundary approximations
    if (drillSlashes.length >= 2 && drillSlashes.length <= 6) {
      setDrillFeedback(`🎉 Great intuition! You placed ${drillSlashes.length} natural thought-group pauses, breaking the robotic word-by-word flow.`);
      confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
    } else {
      setDrillFeedback(`💡 You placed ${drillSlashes.length} pauses. Try aiming for 3–4 natural chunk boundaries in this sentence.`);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* HEADER BANNER */}
      <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 text-white rounded-3xl border border-teal-500/30 shadow-2xl space-y-4 relative overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> English Thought-Group & Chunking Studio
          </span>
          <span className="text-xs font-mono text-slate-400">
            Band 8.5+ Speech Cadence & Rhythm Engine
          </span>
        </div>

        <div className="space-y-2 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Native English "Chunking & Speech Cadence" Master Studio
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Eliminate robotic "word-by-word" monotony. Master the linguistic science of <strong>Thought Groups (Chunking)</strong>, micro-pauses (<code className="text-amber-300 font-bold font-mono">/</code>), and rhythmic speech cadence practiced by top diplomats and IELTS Band 9 speakers.
          </p>
        </div>
      </div>

      {/* LESSON SELECTION TABS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {CHUNK_LESSONS.map((lesson, idx) => {
          const isSelected = selectedLessonIndex === idx;
          return (
            <button
              key={lesson.id}
              onClick={() => {
                setSelectedLessonIndex(idx);
                setIsMetronomeActive(false);
                setDrillSlashes([]);
                setDrillFeedback(null);
                setRecordedAudioUrl(null);
              }}
              className={`p-4 rounded-2xl border text-left transition cursor-pointer flex flex-col justify-between space-y-3 ${
                isSelected
                  ? 'bg-teal-900 border-teal-400 text-white shadow-lg ring-2 ring-teal-300/30'
                  : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                  isSelected ? 'bg-teal-400 text-slate-950 font-black' : 'bg-slate-100 text-slate-600'
                }`}>
                  Lesson #{idx + 1}
                </span>
                <span className={`text-[10px] font-bold ${isSelected ? 'text-teal-200' : 'text-teal-800'}`}>
                  {lesson.level}
                </span>
              </div>
              <div className="text-xs font-bold line-clamp-2">{lesson.title}</div>
              <div className={`text-[11px] flex items-center gap-1 ${isSelected ? 'text-amber-300' : 'text-slate-500'}`}>
                <Activity className="w-3 h-3" /> Target Pace: {lesson.audioModelPaceWpm} WPM
              </div>
            </button>
          );
        })}
      </div>

      {/* CORE WORKSPACE: THOUGHT-GROUP VISUALIZER & CADENCE METRONOME */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Visual Thought Groups (8 Cols) */}
        <div className="lg:col-span-8 p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800">
                Visual Thought-Group Map (Color-Coded Chunks)
              </span>
              <h3 className="text-base font-black text-slate-900 mt-0.5">
                {activeLesson.title}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePlayModelSpeaker}
                className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <Volume2 className="w-3.5 h-3.5 text-teal-400" />
                <span>Hear Native Cadence</span>
              </button>
            </div>
          </div>

          {/* COLOR-CODED CHUNKS CONTAINER */}
          <div className="p-6 sm:p-8 bg-slate-900 text-white rounded-2xl shadow-inner space-y-4">
            <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400 flex items-center justify-between">
              <span>Thought Groups with Pause Indicators:</span>
              <span className="text-amber-300 font-mono">/ = Micro Pause (0.2s) | // = Boundary Pause (0.5s)</span>
            </div>

            {/* Chunks flow */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 leading-loose">
              {activeLesson.chunkedTokens.map((chunk, ci) => {
                const isBeatActive = activeChunkIndex === ci;
                return (
                  <div key={ci} className="flex items-center gap-1.5">
                    <span
                      className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold border transition-all duration-200 ${chunk.color} ${
                        isBeatActive 
                          ? 'ring-4 ring-amber-400 scale-105 shadow-xl font-black' 
                          : 'opacity-90 hover:opacity-100'
                      }`}
                    >
                      [{chunk.text}]
                    </span>

                    {chunk.pauseType === 'micro' && (
                      <span className="px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 text-xs font-mono font-black border border-amber-400/40" title="Micro Pause">
                        /
                      </span>
                    )}

                    {chunk.pauseType === 'boundary' && (
                      <span className="px-1.5 py-0.5 rounded bg-rose-400/20 text-rose-300 text-xs font-mono font-black border border-rose-400/40" title="Sentence Boundary Pause">
                        //
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pedagogical Tip Box */}
          <div className="p-4 bg-teal-50 rounded-2xl border border-teal-200 flex items-start gap-3">
            <BookOpen className="w-4 h-4 text-teal-800 shrink-0 mt-0.5" />
            <div className="text-xs text-teal-950 space-y-0.5 leading-relaxed">
              <strong className="block font-bold">Executive Cadence Directive:</strong>
              <span>{activeLesson.pedagogicalTip}</span>
            </div>
          </div>

          {/* INTERACTIVE DRILL: INSERT SLASH MARKERS */}
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Hands-On Drill: Place Natural Slash Markers ( / )
              </h4>
              <span className="text-[11px] text-slate-500">Click between words to insert pauses</span>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-300 flex flex-wrap items-center gap-1 text-xs sm:text-sm font-serif leading-loose">
              {rawWords.map((word, wi) => (
                <React.Fragment key={wi}>
                  <span className="font-semibold text-slate-900">{word}</span>
                  {wi < rawWords.length - 1 && (
                    <button
                      onClick={() => toggleSlashPosition(wi)}
                      className={`px-1 py-0.5 rounded font-mono text-xs font-bold transition cursor-pointer mx-0.5 ${
                        drillSlashes.includes(wi)
                          ? 'bg-amber-500 text-slate-950 shadow-xs'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-400'
                      }`}
                    >
                      {drillSlashes.includes(wi) ? ' / ' : ' • '}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="flex items-center justify-between pt-1">
              <button
                onClick={handleCheckDrill}
                className="px-4 py-2 bg-teal-900 hover:bg-teal-800 text-white rounded-xl text-xs font-bold transition cursor-pointer"
              >
                Validate My Chunking Pauses
              </button>

              {drillSlashes.length > 0 && (
                <button
                  onClick={() => {
                    setDrillSlashes([]);
                    setDrillFeedback(null);
                  }}
                  className="text-xs text-slate-500 hover:text-slate-800 font-bold cursor-pointer"
                >
                  Reset Slashes
                </button>
              )}
            </div>

            {drillFeedback && (
              <div className="p-3 bg-white rounded-xl border border-teal-200 text-xs text-teal-950 leading-relaxed font-medium">
                {drillFeedback}
              </div>
            )}
          </div>

        </div>

        {/* Right Column: Metronome Controls & Voice Recorder (4 Cols) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* CADENCE METRONOME CONTROL BOX */}
          <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-5">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
                Pacing Control
              </span>
              <h4 className="text-sm font-black text-slate-900">
                Audio-Visual Cadence Metronome
              </h4>
              <p className="text-xs text-slate-500">
                Synchronizes visual chunk highlights with real-time speech WPM beats.
              </p>
            </div>

            {/* Tempo Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-slate-600">Speech Pace:</span>
                <span className="text-teal-900 font-mono font-black text-sm">{targetWpm} WPM</span>
              </div>
              <input
                type="range"
                min={65}
                max={135}
                step={5}
                value={targetWpm}
                onChange={(e) => setTargetWpm(Number(e.target.value))}
                className="w-full accent-teal-800 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400">
                <span>65 WPM (Slow)</span>
                <span>95 WPM (Optimal)</span>
                <span>135 WPM (Fast)</span>
              </div>
            </div>

            {/* Metronome Start / Stop Button */}
            <div className="space-y-2 pt-2">
              <button
                onClick={() => setIsMetronomeActive(!isMetronomeActive)}
                className={`w-full py-3.5 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer shadow-md ${
                  isMetronomeActive
                    ? 'bg-rose-600 hover:bg-rose-700 text-white'
                    : 'bg-teal-900 hover:bg-teal-800 text-white'
                }`}
              >
                {isMetronomeActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isMetronomeActive ? 'Stop Metronome Pulse' : 'Start Cadence Metronome'}</span>
              </button>

              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-[11px] font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Metronome Audio Beeps: <strong>{soundEnabled ? 'ON' : 'OFF'}</strong></span>
              </button>
            </div>
          </div>

          {/* VOICE RECORDING & SHADOWING STUDIO */}
          <div className="p-6 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-xl space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300">
                Shadowing Studio
              </span>
              <h4 className="text-sm font-black text-white">
                Record & Inspect Your Chunking
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Read the thought groups aloud with the metronome beat, record your voice, and listen back.
              </p>
            </div>

            {/* Record Trigger Button */}
            <div className="space-y-3 pt-2">
              {!isRecording ? (
                <button
                  onClick={handleStartRecording}
                  className="w-full py-3 bg-red-600 hover:bg-red-500 text-white rounded-2xl font-bold text-xs transition flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <Mic className="w-4 h-4" />
                  <span>Start Voice Recording</span>
                </button>
              ) : (
                <button
                  onClick={handleStopRecording}
                  className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-2xl font-black text-xs transition flex items-center justify-center gap-2 cursor-pointer shadow-lg animate-pulse"
                >
                  <Pause className="w-4 h-4" />
                  <span>Stop & Save Recording</span>
                </button>
              )}

              {recordedAudioUrl && (
                <div className="p-3 bg-white/10 rounded-2xl border border-white/15 space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                    Your Recorded Voice:
                  </div>
                  <audio controls src={recordedAudioUrl} className="w-full h-8" />
                </div>
              )}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
