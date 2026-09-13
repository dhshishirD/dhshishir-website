import React, { useState, useEffect, useRef } from 'react';
import { 
  DAILY_PROMPTS_DATA, 
  PROMPT_CATEGORIES,
  IELTS_CUE_CARDS_DATA
} from '../../data/dailyPromptsData';
import type { DailyPrompt, IeltsCueCard } from '../../data/dailyPromptsData';
import { AudioRecorder } from './AudioRecorder';
import { recordDailyPractice, getFluencyProfile } from '../../services/fluencyProfileService';
import { syncLocalProfileToCloud } from '../../services/cloudProfileService';
import { supabase } from '../../services/supabaseClient';
import confetti from 'canvas-confetti';
import { 
  Calendar, 
  Sparkles, 
  Flame, 
  Timer, 
  Play, 
  Pause, 
  CheckCircle2, 
  AlertTriangle, 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw,
  Volume2,
  Lightbulb,
  ShieldCheck,
  ArrowRight,
  ListOrdered,
  GraduationCap,
  Shuffle,
  FileText
} from 'lucide-react';

export const DailyPromptsHub: React.FC = () => {
  // Mode selection: 'daily_prompt' | 'ielts_cue_card'
  const [activeMode, setActiveMode] = useState<'daily_prompt' | 'ielts_cue_card'>('daily_prompt');

  // Daily Prompt State
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentPromptIndex, setCurrentPromptIndex] = useState<number>(0);

  // IELTS Cue Card State
  const [currentIeltsIndex, setCurrentIeltsIndex] = useState<number>(0);
  const [cueCardNotes, setCueCardNotes] = useState<string>('');

  // Universal Prep & Speak Timer State
  const [prepTimeRemaining, setPrepTimeRemaining] = useState<number>(30);
  const [isPrepActive, setIsPrepActive] = useState<boolean>(false);
  const prepIntervalRef = useRef<any>(null);

  // Active Flow Step: 'prep' | 'record' | 'review'
  const [activeStep, setActiveStep] = useState<'prep' | 'record' | 'review'>('prep');

  // Recorded Audio State
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);
  const [recordedDuration, setRecordedDuration] = useState<number>(0);
  const [isLearnerPlaying, setIsLearnerPlaying] = useState<boolean>(false);
  const [learnerProgress, setLearnerProgress] = useState<number>(0);
  const learnerAudioRef = useRef<HTMLAudioElement | null>(null);

  // Self-Reflection Rubric Checkbox States
  const [rubric, setRubric] = useState({
    outlineCovered: false,
    collocationsUsed: false,
    cleanPhonetics: false,
    fluencyPacing: false
  });
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [streakCount, setStreakCount] = useState<number>(getFluencyProfile().streakDays || 1);

  // Filtered Daily Prompts
  const filteredPrompts: DailyPrompt[] = selectedCategory === 'all'
    ? DAILY_PROMPTS_DATA
    : DAILY_PROMPTS_DATA.filter(p => p.category === selectedCategory);

  const currentPrompt: DailyPrompt = filteredPrompts[currentPromptIndex] || filteredPrompts[0];
  const currentCueCard: IeltsCueCard = IELTS_CUE_CARDS_DATA[currentIeltsIndex] || IELTS_CUE_CARDS_DATA[0];

  useEffect(() => {
    resetPromptSession();
  }, [currentPromptIndex, selectedCategory, currentIeltsIndex, activeMode]);

  useEffect(() => {
    return () => {
      if (prepIntervalRef.current) clearInterval(prepIntervalRef.current);
      stopAudio();
    };
  }, []);

  const resetPromptSession = () => {
    stopAudio();
    if (prepIntervalRef.current) clearInterval(prepIntervalRef.current);
    setIsPrepActive(false);
    setPrepTimeRemaining(activeMode === 'ielts_cue_card' ? 60 : 30);
    setActiveStep('prep');
    setRecordedAudioUrl(null);
    setRecordedDuration(0);
    setRubric({
      outlineCovered: false,
      collocationsUsed: false,
      cleanPhonetics: false,
      fluencyPacing: false
    });
    setIsCompleted(false);
  };

  const stopAudio = () => {
    if (learnerAudioRef.current) {
      learnerAudioRef.current.pause();
      learnerAudioRef.current.currentTime = 0;
    }
    setIsLearnerPlaying(false);
    setLearnerProgress(0);
  };

  // Preparation Timer Controls
  const startPrepTimer = () => {
    setIsPrepActive(true);
    if (prepIntervalRef.current) clearInterval(prepIntervalRef.current);

    prepIntervalRef.current = setInterval(() => {
      setPrepTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(prepIntervalRef.current);
          setIsPrepActive(false);
          setActiveStep('record');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const skipPrepToRecord = () => {
    if (prepIntervalRef.current) clearInterval(prepIntervalRef.current);
    setIsPrepActive(false);
    setActiveStep('record');
  };

  const handleRecordingComplete = (_blob: Blob, url: string, duration: number) => {
    setRecordedAudioUrl(url);
    setRecordedDuration(duration);
    setActiveStep('review');
  };

  const toggleRubric = (key: keyof typeof rubric) => {
    setRubric(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const checkedCount = Object.values(rubric).filter(Boolean).length;

  const playRecordedTake = () => {
    if (!recordedAudioUrl) return;

    if (learnerAudioRef.current) {
      learnerAudioRef.current.pause();
      learnerAudioRef.current.currentTime = 0;
    }

    const audio = new Audio(recordedAudioUrl);
    learnerAudioRef.current = audio;
    setIsLearnerPlaying(true);

    audio.ontimeupdate = () => {
      if (audio.duration) {
        setLearnerProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio.onended = () => {
      setIsLearnerPlaying(false);
      setLearnerProgress(0);
    };

    audio.onerror = () => {
      setIsLearnerPlaying(false);
      setLearnerProgress(0);
    };

    audio.play().catch(err => {
      console.warn('Audio playback error', err);
      setIsLearnerPlaying(false);
    });
  };

  const handleCompleteDailyPrompt = async () => {
    setIsCompleted(true);

    // Increment daily streak
    const updated = recordDailyPractice();
    setStreakCount(updated.streakDays);

    // Sync to Supabase cloud if user is signed in
    const { data: authData } = await supabase.auth.getUser();
    if (authData?.user) {
      await syncLocalProfileToCloud(authData.user.id, authData.user.email);
    }

    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  const handleNextPrompt = () => {
    if (activeMode === 'daily_prompt') {
      if (currentPromptIndex < filteredPrompts.length - 1) {
        setCurrentPromptIndex(prev => prev + 1);
      } else {
        setCurrentPromptIndex(0);
      }
    } else {
      handleRandomIeltsCard();
    }
  };

  const handlePrevPrompt = () => {
    if (currentPromptIndex > 0) {
      setCurrentPromptIndex(prev => prev - 1);
    } else {
      setCurrentPromptIndex(filteredPrompts.length - 1);
    }
  };

  const handleRandomIeltsCard = () => {
    let nextIdx = Math.floor(Math.random() * IELTS_CUE_CARDS_DATA.length);
    if (nextIdx === currentIeltsIndex && IELTS_CUE_CARDS_DATA.length > 1) {
      nextIdx = (nextIdx + 1) % IELTS_CUE_CARDS_DATA.length;
    }
    setCurrentIeltsIndex(nextIdx);
    setCueCardNotes('');
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950/30 to-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Stage 4 • Spoken Fluency & IELTS Hub
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Daily Prompts & IELTS Cue Card Studio
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
            Bridge the gap to spontaneous spoken English. Practice daily thematic topics or simulate real-world IELTS Speaking Part 2 exams with structured 1-min prep and 2-min delivery.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-4 py-2.5 bg-slate-950 rounded-2xl border border-slate-800 flex items-center gap-2 text-xs font-bold text-amber-400 shadow-inner">
            <Flame className="w-4 h-4 text-amber-400" />
            <span>{streakCount} Day Practice Streak</span>
          </div>
        </div>
      </div>

      {/* Mode Switcher Tabs: Daily Prompts vs IELTS Part 2 */}
      <div className="flex items-center gap-3 p-1.5 bg-slate-900/90 rounded-2xl border border-slate-800 max-w-md">
        <button
          onClick={() => setActiveMode('daily_prompt')}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
            activeMode === 'daily_prompt'
              ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>Daily Prompts ({DAILY_PROMPTS_DATA.length})</span>
        </button>

        <button
          onClick={() => setActiveMode('ielts_cue_card')}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
            activeMode === 'ielts_cue_card'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <GraduationCap className="w-4 h-4" />
          <span>IELTS Part 2 Cue Cards ({IELTS_CUE_CARDS_DATA.length})</span>
        </button>
      </div>

      {/* MODE A: DAILY PROMPTS CATEGORY NAVIGATOR */}
      {activeMode === 'daily_prompt' && (
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-800">
          {PROMPT_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => { setSelectedCategory(cat.id); setCurrentPromptIndex(0); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* MAIN WORKSPACE CARD */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-8 shadow-2xl backdrop-blur-xl">

        {/* TOP BAR: META & NAVIGATION */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
          {activeMode === 'daily_prompt' ? (
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold border border-emerald-500/30 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> Day {currentPrompt.dayNumber} Challenge
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {currentPrompt.categoryLabel}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded font-bold bg-indigo-500/20 text-indigo-300 uppercase">
                CEFR {currentPrompt.cefrLevel}
              </span>
            </div>
          ) : (
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-2.5 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 font-mono text-xs font-bold border border-indigo-500/30 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5" /> IELTS Topic #{currentCueCard.topicNumber}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {currentCueCard.category}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded font-bold bg-amber-500/20 text-amber-300 uppercase">
                Official Part 2 Format
              </span>
            </div>
          )}

          <div className="flex items-center gap-2">
            {activeMode === 'daily_prompt' ? (
              <>
                <button
                  onClick={handlePrevPrompt}
                  className="p-2 bg-slate-950 hover:bg-slate-800 text-slate-300 rounded-xl border border-slate-800 transition cursor-pointer"
                  title="Previous Challenge"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-slate-400">
                  {currentPromptIndex + 1} / {filteredPrompts.length}
                </span>
                <button
                  onClick={handleNextPrompt}
                  className="p-2 bg-slate-950 hover:bg-slate-800 text-slate-300 rounded-xl border border-slate-800 transition cursor-pointer"
                  title="Next Challenge"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            ) : (
              <button
                onClick={handleRandomIeltsCard}
                className="px-3.5 py-2 bg-slate-950 hover:bg-slate-800 text-indigo-300 hover:text-white rounded-xl border border-slate-800 transition text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-md"
              >
                <Shuffle className="w-3.5 h-3.5" />
                <span>Generate Random Cue Card</span>
              </button>
            )}
          </div>
        </div>

        {/* CONTENT PRESENTATION */}
        {activeMode === 'daily_prompt' ? (
          /* MODE A: DAILY PROMPT BANNER */
          <div className="space-y-6">
            <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 space-y-4 shadow-inner">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> {currentPrompt.title}
              </div>

              <div className="text-lg sm:text-xl md:text-2xl font-black text-white leading-snug">
                "{currentPrompt.promptQuestion}"
              </div>

              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-300 font-bangla leading-relaxed">
                <span className="font-bold text-slate-400">বাংলা প্রসঙ্গ: </span>
                {currentPrompt.banglaContext}
              </div>
            </div>

            {/* Blueprint & Collocations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* 3-Step Blueprint */}
              <div className="p-5 bg-slate-950/70 rounded-2xl border border-slate-800 space-y-3.5">
                <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                  <ListOrdered className="w-4 h-4" /> 3-Part Spoken Blueprint
                </div>
                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800/80 space-y-1">
                    <span className="text-indigo-400 font-bold">1. Opening & Thesis:</span>
                    <p className="text-slate-400">{currentPrompt.outlineGuide.step1}</p>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800/80 space-y-1">
                    <span className="text-indigo-400 font-bold">2. Analysis & Evidence:</span>
                    <p className="text-slate-400">{currentPrompt.outlineGuide.step2}</p>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800/80 space-y-1">
                    <span className="text-indigo-400 font-bold">3. Actionable Conclusion:</span>
                    <p className="text-slate-400">{currentPrompt.outlineGuide.step3}</p>
                  </div>
                </div>
              </div>

              {/* Collocations & Traps */}
              <div className="space-y-4">
                <div className="p-5 bg-slate-950/70 rounded-2xl border border-slate-800 space-y-3">
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Lightbulb className="w-4 h-4" /> Recommended Power Collocations
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentPrompt.targetCollocations.map((col, idx) => (
                      <div key={idx} className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 space-y-0.5">
                        <div className="text-xs font-bold text-white">{col.phrase}</div>
                        <div className="text-[10px] font-mono text-indigo-300">{col.ipa}</div>
                        <div className="text-[11px] text-slate-400 font-bangla">{col.meaningBn}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-amber-950/30 rounded-2xl border border-amber-500/20 space-y-2">
                  <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Phonetic & Grammar Trap Warnings</span>
                  </div>
                  <ul className="text-xs text-amber-200/90 space-y-1 pl-4 list-disc">
                    {currentPrompt.phoneticWatchouts.map((w, idx) => (
                      <li key={idx}>{w}</li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        ) : (
          /* MODE B: IELTS PART 2 CUE CARD */
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-br from-slate-950 via-indigo-950/20 to-slate-950 rounded-2xl border border-indigo-500/30 space-y-5 shadow-2xl">
              
              <div className="flex items-center justify-between pb-3 border-b border-indigo-500/20">
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                  <FileText className="w-4 h-4" /> IELTS Candidate Task Card (Part 2)
                </div>
                <div className="text-[11px] font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
                  1 Min Prep • 2 Min Speaking
                </div>
              </div>

              <div className="text-lg sm:text-xl font-black text-white">
                {currentCueCard.cueCardPrompt}
              </div>

              <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800 space-y-2.5">
                <div className="text-xs font-bold text-indigo-300 uppercase tracking-wider">You should say:</div>
                <ul className="space-y-2 text-xs text-slate-200 pl-2">
                  {currentCueCard.bulletPoints.map((bp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Power Vocabulary & Examiner Strategy */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 space-y-2">
                  <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> High-Band Lexical Resources
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {currentCueCard.powerVocabulary.map((voc, idx) => (
                      <div key={idx} className="p-2 bg-slate-950 rounded-lg border border-slate-800/80">
                        <div className="text-xs font-bold text-white">{voc.word}</div>
                        <div className="text-[10px] text-slate-400 font-bangla">{voc.meaningBn}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-800 space-y-2">
                  <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5" /> Examiner Fluency Tip
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {currentCueCard.speakingTips}
                  </p>
                </div>
              </div>

            </div>

            {/* Candidate Scratchpad for 1-Min Notes */}
            <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-indigo-400" /> Candidate 1-Minute Note-Taking Scratchpad
              </div>
              <textarea
                value={cueCardNotes}
                onChange={(e) => setCueCardNotes(e.target.value)}
                placeholder="Jot down bullet points, key keywords, or narrative dates during your 1-minute prep time..."
                className="w-full h-20 bg-slate-900 rounded-xl border border-slate-800 p-3 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 font-mono resize-none"
              />
            </div>
          </div>
        )}

        {/* INTERACTIVE PRACTICE STAGE: PREP ➔ RECORD ➔ REVIEW */}
        <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 space-y-6">

          {activeStep === 'prep' && (
            <div className="text-center space-y-4 py-4">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mx-auto">
                <Timer className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white">
                  {activeMode === 'ielts_cue_card' ? '1-Minute IELTS Candidate Preparation' : '30-Second Mental Outline'}
                </h3>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  {activeMode === 'ielts_cue_card'
                    ? 'Take 60 seconds to structure your narrative and jot down vocabulary in the scratchpad.'
                    : 'Take 30 seconds to structure your thoughts using the 3-part blueprint.'}
                </p>
              </div>

              <div className="text-4xl font-black font-mono text-indigo-400 py-2">
                00:{prepTimeRemaining < 10 ? `0${prepTimeRemaining}` : prepTimeRemaining}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                {!isPrepActive ? (
                  <button
                    onClick={startPrepTimer}
                    className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Start {activeMode === 'ielts_cue_card' ? '60s' : '30s'} Prep Timer</span>
                  </button>
                ) : (
                  <button
                    onClick={() => { if (prepIntervalRef.current) clearInterval(prepIntervalRef.current); setIsPrepActive(false); }}
                    className="px-5 py-2.5 bg-slate-800 text-slate-300 rounded-xl text-xs font-bold flex items-center gap-2 cursor-pointer"
                  >
                    <Pause className="w-3.5 h-3.5" />
                    <span>Pause Timer</span>
                  </button>
                )}

                <button
                  onClick={skipPrepToRecord}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg shadow-emerald-600/30 transition cursor-pointer"
                >
                  <span>Ready to Speak Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {activeStep === 'record' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Spoken Challenge Active
                  </div>
                  <div className="text-xs text-slate-400">
                    Recommended length: <span className="text-white font-mono">{activeMode === 'ielts_cue_card' ? '120 seconds (2 mins)' : `${currentPrompt.recommendedDurationSec} seconds`}</span>
                  </div>
                </div>
                <button
                  onClick={() => setActiveStep('prep')}
                  className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" /> Back to Notes
                </button>
              </div>

              <AudioRecorder
                onRecordingComplete={handleRecordingComplete}
                onClearRecording={() => setRecordedAudioUrl(null)}
              />
            </div>
          )}

          {activeStep === 'review' && recordedAudioUrl && (
            <div className="space-y-6">
              
              {/* Playback & Duration */}
              <div className="p-5 bg-slate-900 rounded-xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <Volume2 className="w-4 h-4 text-emerald-400" />
                    Your Recorded Spoken Take ({recordedDuration}s)
                  </span>
                  <button
                    onClick={() => setActiveStep('record')}
                    className="text-xs text-indigo-400 hover:text-indigo-300 font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" /> Re-record Take
                  </button>
                </div>

                <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="bg-emerald-400 h-full transition-all duration-100"
                    style={{ width: `${learnerProgress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={playRecordedTake}
                    disabled={isLearnerPlaying}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                  >
                    {isLearnerPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{isLearnerPlaying ? 'Playing Your Speech...' : 'Listen to Your Speech'}</span>
                  </button>
                </div>
              </div>

              {/* Self-Reflection Rubric */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-indigo-400" /> Self-Reflection Rubric
                  </h4>
                  <span className={`text-xs px-2.5 py-0.5 rounded font-bold border ${
                    checkedCount === 4 ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' :
                    checkedCount >= 2 ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' :
                    'bg-slate-800 text-slate-400 border-slate-700'
                  }`}>
                    {checkedCount}/4 Criteria Met
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => toggleRubric('outlineCovered')}
                    className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition cursor-pointer ${
                      rubric.outlineCovered ? 'bg-emerald-950/40 border-emerald-500/50 text-white' : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded border mt-0.5 flex items-center justify-center shrink-0 ${
                      rubric.outlineCovered ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'border-slate-700'
                    }`}>
                      {rubric.outlineCovered && <CheckCircle2 className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <div className="text-xs font-medium text-slate-200">
                      {activeMode === 'ielts_cue_card'
                        ? 'Addressed all 4 bullet points on the task card'
                        : 'Covered all 3 blueprint stages (Opening, Analysis, Conclusion)'}
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleRubric('collocationsUsed')}
                    className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition cursor-pointer ${
                      rubric.collocationsUsed ? 'bg-emerald-950/40 border-emerald-500/50 text-white' : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded border mt-0.5 flex items-center justify-center shrink-0 ${
                      rubric.collocationsUsed ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'border-slate-700'
                    }`}>
                      {rubric.collocationsUsed && <CheckCircle2 className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <div className="text-xs font-medium text-slate-200">
                      Successfully incorporated target power vocabulary & collocations
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleRubric('cleanPhonetics')}
                    className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition cursor-pointer ${
                      rubric.cleanPhonetics ? 'bg-emerald-950/40 border-emerald-500/50 text-white' : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded border mt-0.5 flex items-center justify-center shrink-0 ${
                      rubric.cleanPhonetics ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'border-slate-700'
                    }`}>
                      {rubric.cleanPhonetics && <CheckCircle2 className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <div className="text-xs font-medium text-slate-200">
                      Avoided phonetic trap substitutions (/v/ vs /b/, TH sounds, stress)
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleRubric('fluencyPacing')}
                    className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition cursor-pointer ${
                      rubric.fluencyPacing ? 'bg-emerald-950/40 border-emerald-500/50 text-white' : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded border mt-0.5 flex items-center justify-center shrink-0 ${
                      rubric.fluencyPacing ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'border-slate-700'
                    }`}>
                      {rubric.fluencyPacing && <CheckCircle2 className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <div className="text-xs font-medium text-slate-200">
                      Spoke fluidly for {activeMode === 'ielts_cue_card' ? '1.5 - 2 minutes' : 'full duration'} with minimal hesitation
                    </div>
                  </button>
                </div>
              </div>

              {/* Complete & Submit Action */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
                <div className="text-xs text-slate-400">
                  {isCompleted ? (
                    <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> Practice Logged & Streak Advanced!
                    </span>
                  ) : (
                    <span>Check off your self-reflection to claim your daily practice badge.</span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  {!isCompleted ? (
                    <button
                      onClick={handleCompleteDailyPrompt}
                      disabled={checkedCount === 0}
                      className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-emerald-900/30 transition cursor-pointer"
                    >
                      <Award className="w-4 h-4" />
                      <span>Submit Take & Advance Streak</span>
                    </button>
                  ) : (
                    <button
                      onClick={handleNextPrompt}
                      className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-indigo-900/30 transition cursor-pointer"
                    >
                      <span>Next Practice Topic</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
};
