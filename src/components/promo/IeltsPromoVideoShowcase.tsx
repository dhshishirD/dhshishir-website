import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, Pause, RotateCcw, Volume2, VolumeX, Maximize, CheckCircle2, 
  Sparkles, Award, Globe, Mic, BookOpen, PenTool, Headphones, 
  ArrowRight, ShieldCheck, TrendingUp, Users, PlayCircle, Video, Download
} from 'lucide-react';

interface Scene {
  id: number;
  title: string;
  subtitle: string;
  duration: number; // in seconds
  voiceover: string;
  badge: string;
  renderVisual: (progress: number) => React.ReactNode;
}

export function IeltsPromoVideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0); // 0 to 100
  const [isVoiceoverEnabled, setIsVoiceoverEnabled] = useState(true);
  const [isCleanRecordMode, setIsCleanRecordMode] = useState(false);
  const [activeTab, setActiveTab] = useState<'video' | 'script' | 'record-guide'>('video');

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    }
  }, []);

  const scenes: Scene[] = [
    {
      id: 1,
      title: "Master IELTS & Global Statecraft for Free",
      subtitle: "Why spend thousands of dollars on coaching when you can practice on Bangladesh's premier interactive academic portal?",
      duration: 7,
      badge: "THE REVOLUTION",
      voiceover: "Welcome to dhshishir.com — the world's most advanced, 100% free interactive platform for IELTS preparation, academic diplomacy, and strategic communication.",
      renderVisual: (progress) => (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white overflow-hidden">
          {/* Animated background rings */}
          <div className="absolute w-96 h-96 rounded-full border border-teal-500/20 animate-ping pointer-events-none" />
          <div className="absolute w-[500px] h-[500px] rounded-full border border-indigo-500/10 animate-pulse pointer-events-none" />
          
          <div className="z-10 text-center max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-semibold uppercase tracking-widest animate-bounce">
              <Sparkles className="w-3.5 h-3.5" /> 100% Free • Open Access • AI-Powered
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-teal-300 bg-clip-text text-transparent">
              Target IELTS Band 8.5+ & Diplomatic Mastery
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              No subscriptions. No paywalls. Built for ambitious students, scholars, and future diplomats worldwide.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              {['AI Speech Recognition', 'Band 9 Essay Examiner', '20+ Master IR Lectures', 'Verifiable Credentials'].map((pill, idx) => (
                <div 
                  key={idx} 
                  className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-slate-200 shadow-sm flex items-center gap-1.5"
                  style={{ opacity: Math.min(1, (progress / 100) * 2 - (idx * 0.2)) }}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                  {pill}
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Real-Time AI Speech & Pronunciation Lab",
      subtitle: "Speak into your microphone and get instant feedback on Fluency, Lexical Resource, Pronunciation, and Grammatical Range.",
      duration: 8,
      badge: "SPEAKING MODULE",
      voiceover: "Practice real IELTS Speaking cues with our live Web Speech Recognition engine. Speak naturally and get immediate Band 8.5 scoring breakdown.",
      renderVisual: (progress) => (
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-6 p-8 bg-slate-950 text-white">
          {/* Virtual Mic Mockup */}
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-900/90 border border-teal-500/30 shadow-2xl w-full max-w-xs text-center space-y-4">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 animate-pulse">
                <Mic className="w-10 h-10" />
              </div>
              <div className="absolute -bottom-1 -right-1 px-2 py-0.5 rounded bg-red-500 text-[10px] font-bold text-white uppercase tracking-wider animate-pulse">
                LIVE REC
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-400">Listening to candidate speech...</div>
              <div className="text-sm font-semibold text-teal-300 mt-1">"The geopolitical implications of maritime..."</div>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
              <div className="bg-teal-400 h-full rounded-full transition-all duration-300" style={{ width: `${Math.min(100, progress * 1.2)}%` }} />
            </div>
          </div>

          {/* Real-time Band Score Card */}
          <div className="flex flex-col justify-center space-y-3 w-full max-w-sm">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex justify-between items-center text-xs text-slate-400">
                <span>Predicted IELTS Band</span>
                <span className="font-bold text-amber-400 text-base">Band 8.5 / 9.0</span>
              </div>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between"><span>Fluency & Coherence</span><span className="text-teal-400 font-semibold">8.5</span></div>
                <div className="flex justify-between"><span>Lexical Resource</span><span className="text-teal-400 font-semibold">9.0</span></div>
                <div className="flex justify-between"><span>Grammar & Accuracy</span><span className="text-teal-400 font-semibold">8.0</span></div>
                <div className="flex justify-between"><span>Pronunciation</span><span className="text-teal-400 font-semibold">8.5</span></div>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-teal-950/40 border border-teal-800/40 text-xs text-teal-200">
              💡 <strong>AI Tip:</strong> Excellent use of idiomatic cohesion. Pacing is steady at 138 words per minute.
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "All 4 Skills Covered: Writing, Reading & Listening",
      subtitle: "Full-length mock tests, Band 9 sample answers, Academic Reading speed drills, and audio accent simulations.",
      duration: 8,
      badge: "FULL 4-SKILL SUITE",
      voiceover: "Master all four skills. Analyze Band 9 task 1 and task 2 essays, practice Academic reading speed drills, and expand your vocabulary with our smart vault.",
      renderVisual: (progress) => (
        <div className="w-full h-full grid grid-cols-2 gap-4 p-8 bg-slate-950 text-white">
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
            <div className="flex items-center gap-2 text-teal-400 text-sm font-bold">
              <PenTool className="w-4 h-4" /> Writing Examiner
            </div>
            <p className="text-xs text-slate-300">Live paragraph-by-paragraph breakdown with formal academic vocabulary suggestions.</p>
            <div className="text-[10px] text-slate-500 font-mono">Task 1 & Task 2 Evaluator</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
            <div className="flex items-center gap-2 text-indigo-400 text-sm font-bold">
              <BookOpen className="w-4 h-4" /> Reading Drills
            </div>
            <p className="text-xs text-slate-300">True/False/Not Given logic traps, Headings matching, and high-speed skimming timers.</p>
            <div className="text-[10px] text-slate-500 font-mono">Academic Passages</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
            <div className="flex items-center gap-2 text-amber-400 text-sm font-bold">
              <Headphones className="w-4 h-4" /> Listening Accent Lab
            </div>
            <p className="text-xs text-slate-300">British, Australian, American, and Canadian accent practice with real-time transcripts.</p>
            <div className="text-[10px] text-slate-500 font-mono">Sections 1 to 4</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
            <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold">
              <Sparkles className="w-4 h-4" /> 1,200+ Vocab Vault
            </div>
            <p className="text-xs text-slate-300">Contextual collocations, C1/C2 academic words with audio pronunciation.</p>
            <div className="text-[10px] text-slate-500 font-mono">Smart Cloud Sync</div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Diplomatic Simulators & Master's IR Course",
      subtitle: "Elevate your strategic thinking with our Bilateral Negotiation Simulator and 20-lecture IR Course Reader.",
      duration: 8,
      badge: "ACADEMIC DIPLOMACY",
      voiceover: "Go beyond English exams. Experience real-world bilateral negotiations, maritime boundary crisis simulations, and deep geopolitical treatises.",
      renderVisual: (progress) => (
        <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-tr from-slate-950 via-slate-900 to-teal-950 text-white text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold border border-indigo-400/30">
            <Globe className="w-3.5 h-3.5" /> Interactive Geopolitical Simulators
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white max-w-xl">
            Test Your Statecraft in High-Stakes Crisis Scenarios
          </h2>
          <div className="grid grid-cols-3 gap-3 w-full max-w-lg pt-2">
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center">
              <div className="text-lg font-extrabold text-teal-400">20+</div>
              <div className="text-[11px] text-slate-400">IR Master Lectures</div>
            </div>
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center">
              <div className="text-lg font-extrabold text-indigo-400">10+</div>
              <div className="text-[11px] text-slate-400">Interactive Tools</div>
            </div>
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center">
              <div className="text-lg font-extrabold text-amber-400">100%</div>
              <div className="text-[11px] text-slate-400">Free Open Access</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Verifiable SHA-256 Certificates & Cloud Progress",
      subtitle: "Login with Google to track your mock scores, save vocabulary, and earn cryptographically verifiable credentials.",
      duration: 7,
      badge: "VERIFIED CREDENTIALS",
      voiceover: "Earn verifiable certificates of completion with unique cryptographic hashes, shareable on LinkedIn and CVs.",
      renderVisual: (progress) => (
        <div className="w-full h-full flex items-center justify-center p-8 bg-slate-950 text-white">
          <div className="relative p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/40 shadow-2xl max-w-md w-full text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-xs uppercase tracking-widest font-semibold text-amber-400">Certificate of Diplomatic & IELTS Fluency</div>
            <div className="text-lg font-bold text-white">Candidate: Master of Arts in IR (OMF-IRSS)</div>
            <div className="p-2 rounded bg-slate-950 font-mono text-[10px] text-slate-400 border border-slate-800 break-all">
              Verification Hash: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
            </div>
            <div className="flex justify-center items-center gap-1.5 text-xs text-teal-400 font-semibold">
              <ShieldCheck className="w-4 h-4" /> Verified by dhshishir.com Registry
            </div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Start Your Journey Today at dhshishir.com",
      subtitle: "Join thousands of learners worldwide. No credit card required. Free forever.",
      duration: 8,
      badge: "JOIN TODAY",
      voiceover: "Start your journey today at dhshishir.com. Build your confidence, pass your IELTS exam with flying colors, and unlock global opportunities.",
      renderVisual: (progress) => (
        <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-b from-slate-950 via-slate-900 to-teal-950 text-white text-center space-y-5">
          <div className="w-16 h-16 rounded-2xl bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-400 shadow-xl animate-pulse">
            <Globe className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              dhshishir.com
            </h2>
            <p className="text-teal-300 font-medium text-sm md:text-base">
              Bangladesh's Premier Academic & IELTS Preparation Portal
            </p>
          </div>
          <div className="pt-2">
            <a 
              href="https://dhshishir.com" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 text-slate-950 font-bold text-sm shadow-lg shadow-teal-500/20 hover:scale-105 transition-all"
            >
              Start Free Practice Now <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="text-[11px] text-slate-400">
            Available on Desktop, Tablet & Mobile • No Credit Card Required
          </div>
        </div>
      )
    }
  ];

  const currentScene = scenes[currentSceneIndex];

  // Handle Scene Progression & Speech Narration
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      if (synthRef.current) synthRef.current.cancel();
      return;
    }

    // Voice narration
    if (isVoiceoverEnabled && synthRef.current) {
      synthRef.current.cancel();
      const utterance = new SpeechSynthesisUtterance(currentScene.voiceover);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      synthRef.current.speak(utterance);
    }

    const intervalMs = 50;
    const totalTicks = (currentScene.duration * 1000) / intervalMs;
    let tick = 0;

    timerRef.current = setInterval(() => {
      tick++;
      const progress = (tick / totalTicks) * 100;
      setSceneProgress(progress);

      if (tick >= totalTicks) {
        if (currentSceneIndex < scenes.length - 1) {
          setCurrentSceneIndex(prev => prev + 1);
          setSceneProgress(0);
        } else {
          setIsPlaying(false);
          setCurrentSceneIndex(0);
          setSceneProgress(0);
        }
      }
    }, intervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentSceneIndex, isVoiceoverEnabled]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const restartVideo = () => {
    setCurrentSceneIndex(0);
    setSceneProgress(0);
    setIsPlaying(true);
  };

  const jumpToScene = (index: number) => {
    setCurrentSceneIndex(index);
    setSceneProgress(0);
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-8 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl text-slate-100">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Video className="w-4 h-4 text-teal-400" /> IELTS & Platform Official Promotional Video
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs">
          <button 
            onClick={() => setActiveTab('video')}
            className={`px-3 py-1 rounded font-medium transition-colors ${activeTab === 'video' ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
          >
            🎬 Animated Player
          </button>
          <button 
            onClick={() => setActiveTab('script')}
            className={`px-3 py-1 rounded font-medium transition-colors ${activeTab === 'script' ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
          >
            📜 Video Script (EN/BD)
          </button>
          <button 
            onClick={() => setActiveTab('record-guide')}
            className={`px-3 py-1 rounded font-medium transition-colors ${activeTab === 'record-guide' ? 'bg-teal-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'}`}
          >
            🎥 Recording Guide
          </button>
        </div>
      </div>

      {activeTab === 'video' && (
        <div>
          {/* Main Video Viewport (16:9 Aspect Ratio) */}
          <div className="relative aspect-video w-full bg-black overflow-hidden group">
            {/* Render Current Scene Visual */}
            {currentScene.renderVisual(sceneProgress)}

            {/* Clean Record Mode Watermark Indicator */}
            {isCleanRecordMode && (
              <button 
                onClick={() => setIsCleanRecordMode(false)}
                className="absolute top-4 right-4 px-3 py-1 bg-black/60 hover:bg-black/90 border border-slate-700 rounded text-[11px] text-slate-300 z-50 backdrop-blur"
              >
                Exit Clean Recording Mode (Press Esc)
              </button>
            )}

            {/* Play Overlay if Paused and Not in Record Mode */}
            {!isPlaying && !isCleanRecordMode && (
              <div className="absolute inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-30">
                <button 
                  onClick={togglePlay}
                  className="w-20 h-20 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform pl-1"
                >
                  <Play className="w-8 h-8 fill-slate-950" />
                </button>
              </div>
            )}

            {/* Bottom Control Bar */}
            {!isCleanRecordMode && (
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 z-40 space-y-2">
                {/* Timeline Progress Bar */}
                <div className="w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden flex gap-1">
                  {scenes.map((s, idx) => {
                    let fillPercent = 0;
                    if (idx < currentSceneIndex) fillPercent = 100;
                    else if (idx === currentSceneIndex) fillPercent = sceneProgress;
                    return (
                      <div 
                        key={idx} 
                        onClick={() => jumpToScene(idx)}
                        className="h-full bg-slate-700 hover:bg-slate-600 cursor-pointer flex-1 rounded-full overflow-hidden"
                      >
                        <div className="bg-teal-400 h-full transition-all duration-75" style={{ width: `${fillPercent}%` }} />
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={togglePlay}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                    </button>
                    <button 
                      onClick={restartVideo}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                      title="Restart Video"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => setIsVoiceoverEnabled(!isVoiceoverEnabled)}
                      className={`p-1.5 rounded-lg border transition-colors flex items-center gap-1.5 ${isVoiceoverEnabled ? 'bg-teal-500/20 border-teal-500/40 text-teal-300' : 'bg-slate-800 border-slate-700 text-slate-400'}`}
                      title="Toggle AI Voiceover"
                    >
                      {isVoiceoverEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                      <span className="text-[10px]">{isVoiceoverEnabled ? 'Voice ON' : 'Voice Muted'}</span>
                    </button>
                    <span className="text-slate-400 font-mono">
                      Scene {currentSceneIndex + 1} / {scenes.length}: <strong>{currentScene.badge}</strong>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a 
                      href="/downloads/dhshishir-ielts-promotional-video-1080p.mp4" 
                      download="dhshishir-ielts-promotional-video-1080p.mp4"
                      className="px-2.5 py-1 rounded-md bg-gradient-to-r from-teal-400 to-emerald-500 text-slate-950 font-extrabold flex items-center gap-1.5 text-[11px] shadow-md hover:scale-105 transition-all"
                      title="Download 1080p Full HD MP4 Video with Professional English Voiceover"
                    >
                      <Download className="w-3.5 h-3.5" /> Download 1080p MP4
                    </a>
                    <button 
                      onClick={() => setIsCleanRecordMode(true)}
                      className="px-2.5 py-1 rounded-md bg-rose-600 hover:bg-rose-500 text-white font-semibold flex items-center gap-1.5 text-[11px] shadow-sm transition-all"
                      title="Hide all UI controls for high quality screen recording"
                    >
                      <Video className="w-3.5 h-3.5" /> Clean Record Mode
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Scene Playlist Selector */}
          <div className="p-4 bg-slate-950/50 border-t border-slate-800 grid grid-cols-2 md:grid-cols-6 gap-2">
            {scenes.map((scene, idx) => (
              <button
                key={scene.id}
                onClick={() => jumpToScene(idx)}
                className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between ${currentSceneIndex === idx ? 'bg-teal-950/40 border-teal-500/50 text-teal-300 shadow-md' : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'}`}
              >
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Scene 0{idx + 1}</div>
                <div className="text-xs font-semibold line-clamp-1 mt-1 text-slate-200">{scene.badge}</div>
                <div className="text-[10px] text-slate-500 mt-1">{scene.duration}s</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'script' && (
        <div className="p-6 bg-slate-950 space-y-6 text-sm">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-lg font-bold text-white">Broadcast Video Script (English & Bengali Translation)</h3>
            <p className="text-xs text-slate-400">Use this exact script for TikTok, YouTube Shorts, Facebook Video Ads, and Reels.</p>
          </div>

          <div className="space-y-6">
            {scenes.map((scene, idx) => (
              <div key={scene.id} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 text-xs font-bold font-mono">
                    SCENE 0{idx + 1} ({scene.duration}s) • {scene.badge}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">On-Screen: {scene.title}</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">🎙️ English Voiceover:</div>
                  <p className="text-slate-200 mt-1 font-medium italic">"{scene.voiceover}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'record-guide' && (
        <div className="p-6 bg-slate-950 space-y-6 text-sm">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="text-lg font-bold text-white">How to Record This Video in 4K MP4 for Social Media</h3>
            <p className="text-xs text-slate-400">Step-by-step instructions for exporting this video for YouTube, Facebook, and TikTok.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="text-teal-400 font-bold flex items-center gap-2 text-sm">
                <span>1.</span> Windows Game Bar (Free)
              </div>
              <p className="text-xs text-slate-300">Press <kbd className="px-1.5 py-0.5 bg-slate-800 rounded font-mono text-[11px]">Win + G</kbd> or <kbd className="px-1.5 py-0.5 bg-slate-800 rounded font-mono text-[11px]">Win + Alt + R</kbd> to record high definition video directly from your screen with audio.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="text-indigo-400 font-bold flex items-center gap-2 text-sm">
                <span>2.</span> OBS Studio (Recommended)
              </div>
              <p className="text-xs text-slate-300">Set window capture on your browser, click <strong>"Clean Screen Record Mode"</strong> on the video player above, and press Record for broadcast 60 FPS output.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="text-amber-400 font-bold flex items-center gap-2 text-sm">
                <span>3.</span> Loom or Clipchamp
              </div>
              <p className="text-xs text-slate-300">Use Loom or Windows Clipchamp to record browser tab and export directly to MP4 with 1080p resolution.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
