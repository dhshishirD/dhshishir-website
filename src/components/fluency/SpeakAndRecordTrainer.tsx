import React, { useState, useRef, useEffect } from 'react';
import { 
  SPEAK_PRACTICE_DATA, 
  SPEAK_PRACTICE_CATEGORIES 
} from '../../data/speakPracticeData';
import type { SpeakTarget } from '../../data/speakPracticeData';
import { AudioRecorder } from './AudioRecorder';
import { recordDailyPractice, getFluencyProfile } from '../../services/fluencyProfileService';
import { syncLocalProfileToCloud } from '../../services/cloudProfileService';
import { supabase } from '../../services/supabaseClient';
import confetti from 'canvas-confetti';
import { 
  Mic, 
  Volume2, 
  Play, 
  Pause, 
  CheckCircle2, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  Award, 
  Flame, 
  Sliders, 
  Info,
  Layers,
  ArrowRight
} from 'lucide-react';

export const SpeakAndRecordTrainer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);
  const [recordedDuration, setRecordedDuration] = useState<number>(0);
  
  // Reference Audio Player State
  const [isReferencePlaying, setIsReferencePlaying] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [referenceProgress, setReferenceProgress] = useState<number>(0);
  const synthRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Learner Audio Player State
  const [isLearnerPlaying, setIsLearnerPlaying] = useState<boolean>(false);
  const [learnerProgress, setLearnerProgress] = useState<number>(0);
  const learnerAudioRef = useRef<HTMLAudioElement | null>(null);

  // A/B Comparison Sequential Playing State
  const [isAbComparing, setIsAbComparing] = useState<boolean>(false);

  // Self-Assessment Checklist
  const [checklist, setChecklist] = useState({
    stress: false,
    articulation: false,
    vowels: false,
    rhythm: false
  });
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [streakCount, setStreakCount] = useState<number>(getFluencyProfile().streakDays || 1);

  // Filtered target list
  const filteredTargets: SpeakTarget[] = selectedCategory === 'all'
    ? SPEAK_PRACTICE_DATA
    : SPEAK_PRACTICE_DATA.filter(t => t.categoryKey === selectedCategory);

  const currentTarget: SpeakTarget = filteredTargets[currentIndex] || filteredTargets[0];

  useEffect(() => {
    // Reset recording and checklist when target changes
    resetCurrentDrill();
  }, [currentIndex, selectedCategory]);

  const resetCurrentDrill = () => {
    stopAllAudio();
    setRecordedAudioUrl(null);
    setRecordedDuration(0);
    setChecklist({
      stress: false,
      articulation: false,
      vowels: false,
      rhythm: false
    });
    setIsCompleted(false);
  };

  const stopAllAudio = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsReferencePlaying(false);
    setReferenceProgress(0);

    if (learnerAudioRef.current) {
      learnerAudioRef.current.pause();
      learnerAudioRef.current.currentTime = 0;
    }
    setIsLearnerPlaying(false);
    setLearnerProgress(0);
    setIsAbComparing(false);
  };

  // Play Studio / Reference Audio
  const playReferenceAudio = (speed: number = playbackSpeed, onEndedCallback?: () => void) => {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported on this browser.');
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(currentTarget.targetSentence);
    utterance.rate = speed;
    utterance.pitch = 1.0;
    utterance.lang = 'en-US';

    // Try finding standard high quality natural voice
    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang.startsWith('en-US') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Daniel')))
      || voices.find(v => v.lang.startsWith('en'));
    if (enVoice) utterance.voice = enVoice;

    setIsReferencePlaying(true);
    setReferenceProgress(0);

    const progressInterval = setInterval(() => {
      setReferenceProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    utterance.onend = () => {
      clearInterval(progressInterval);
      setIsReferencePlaying(false);
      setReferenceProgress(100);
      setTimeout(() => setReferenceProgress(0), 400);
      if (onEndedCallback) onEndedCallback();
    };

    utterance.onerror = () => {
      clearInterval(progressInterval);
      setIsReferencePlaying(false);
      setReferenceProgress(0);
    };

    synthRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  // Play Learner Recorded Audio
  const playLearnerAudio = (onEndedCallback?: () => void) => {
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
      if (onEndedCallback) onEndedCallback();
    };

    audio.onerror = () => {
      setIsLearnerPlaying(false);
      setLearnerProgress(0);
    };

    audio.play().catch(err => {
      console.warn('Audio playback failed', err);
      setIsLearnerPlaying(false);
    });
  };

  // A/B Compare Mode (Plays Reference -> pauses 500ms -> plays Learner Take)
  const handleAbComparison = () => {
    if (!recordedAudioUrl) return;
    stopAllAudio();
    setIsAbComparing(true);

    playReferenceAudio(playbackSpeed, () => {
      setTimeout(() => {
        if (recordedAudioUrl) {
          playLearnerAudio(() => {
            setIsAbComparing(false);
          });
        } else {
          setIsAbComparing(false);
        }
      }, 500);
    });
  };

  const handleRecordingComplete = (_blob: Blob, url: string, duration: number) => {
    setRecordedAudioUrl(url);
    setRecordedDuration(duration);
  };

  const toggleCheck = (key: keyof typeof checklist) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const checkedCount = Object.values(checklist).filter(Boolean).length;

  const handleCompleteDrill = async () => {
    setIsCompleted(true);
    
    // Increment daily practice streak
    const updated = recordDailyPractice();
    setStreakCount(updated.streakDays);

    // Sync cloud profile if authenticated
    const { data: authData } = await supabase.auth.getUser();
    if (authData?.user) {
      await syncLocalProfileToCloud(authData.user.id, authData.user.email);
    }

    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.6 }
    });
  };

  const handleNextTarget = () => {
    if (currentIndex < filteredTargets.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrevTarget = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setCurrentIndex(filteredTargets.length - 1);
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Stage 3 • Speak & Record Studio
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Listen, Record & Contrast Comparison
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
            Record your voice against verified studio models. Compare pronunciation nuances, stress rhythm, and consonant articulation side-by-side.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-4 py-2.5 bg-slate-950 rounded-2xl border border-slate-800 flex items-center gap-2 text-xs font-bold text-amber-400 shadow-inner">
            <Flame className="w-4 h-4 text-amber-400" />
            <span>{streakCount} Day Practice Streak</span>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-800">
        <button
          onClick={() => { setSelectedCategory('all'); setCurrentIndex(0); }}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
            selectedCategory === 'all'
              ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
              : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
          }`}
        >
          All Drills ({SPEAK_PRACTICE_DATA.length})
        </button>
        {SPEAK_PRACTICE_CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => { setSelectedCategory(cat.id); setCurrentIndex(0); }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {cat.label} ({cat.count})
          </button>
        ))}
      </div>

      {/* Main Practice Workspace Card */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-8 shadow-2xl backdrop-blur-xl">

        {/* Target Navigation & Meta */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 font-mono text-xs font-bold border border-indigo-500/30">
              Drill {currentIndex + 1} of {filteredTargets.length}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              {currentTarget.categoryLabel}
            </span>
            <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
              currentTarget.difficulty === 'Beginner' ? 'bg-emerald-500/20 text-emerald-300' :
              currentTarget.difficulty === 'Intermediate' ? 'bg-amber-500/20 text-amber-300' :
              'bg-rose-500/20 text-rose-300'
            }`}>
              {currentTarget.difficulty}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevTarget}
              className="p-2 bg-slate-950 hover:bg-slate-800 text-slate-300 rounded-xl border border-slate-800 transition cursor-pointer"
              title="Previous Drill"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNextTarget}
              className="p-2 bg-slate-950 hover:bg-slate-800 text-slate-300 rounded-xl border border-slate-800 transition cursor-pointer"
              title="Next Drill"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Prompt Card: Target Text & IPA & Stress */}
        <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 space-y-4 shadow-inner text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center justify-center md:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Target Phonetic Phrase
            </div>
            <div className="font-mono text-xs text-slate-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800 inline-block">
              IPA: <span className="text-indigo-300">{currentTarget.ipa}</span>
            </div>
          </div>

          {/* Large Display Sentence */}
          <div className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-relaxed tracking-wide">
            {currentTarget.targetSentence}
          </div>

          {/* Syllable Stress Visualizer if available */}
          {currentTarget.syllables && currentTarget.syllables.length > 0 && (
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-2">
              <span className="text-xs text-slate-500 font-medium">Syllable Timing:</span>
              <div className="flex items-center gap-1.5">
                {currentTarget.syllables.map((syl, idx) => {
                  const isStressed = idx === currentTarget.stressedIndex;
                  return (
                    <div
                      key={idx}
                      className={`px-3 py-1 rounded-xl text-xs font-mono font-bold uppercase transition ${
                        isStressed
                          ? 'bg-amber-400 text-slate-950 ring-2 ring-amber-300 shadow-md shadow-amber-400/30 scale-105'
                          : 'bg-slate-900 text-slate-400 border border-slate-800'
                      }`}
                    >
                      {syl} {isStressed && 'ˈ'}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Bengali Articulation Trap & Guidance */}
          <div className="p-3.5 bg-indigo-950/40 rounded-xl border border-indigo-500/20 flex items-start gap-2.5 text-xs text-indigo-200 text-left">
            <Info className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
            <div className="leading-relaxed font-bangla">
              <span className="font-bold text-indigo-300">উচ্চারণ সতর্কতা ও টিপস: </span>
              {currentTarget.banglaContrastTip}
            </div>
          </div>
        </div>

        {/* Dual Audio Workspace: Studio Reference vs Learner Recording */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* 1. Studio Reference Audio Card */}
          <div className="p-6 bg-slate-950/70 rounded-2xl border border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Volume2 className="w-4 h-4" /> 1. Native Model Clip
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/30">
                  Studio Reference
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Listen carefully to vowel duration and stressed syllable peak.
              </p>
            </div>

            {/* Reference Progress Bar */}
            <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
              <div
                className="bg-indigo-500 h-full transition-all duration-150"
                style={{ width: `${referenceProgress}%` }}
              />
            </div>

            {/* Reference Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                onClick={() => playReferenceAudio(playbackSpeed)}
                disabled={isReferencePlaying || isAbComparing}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition cursor-pointer"
              >
                {isReferencePlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isReferencePlaying ? 'Playing Model...' : 'Play Reference'}</span>
              </button>

              {/* Speed Switcher */}
              <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-[11px] font-bold">
                <button
                  onClick={() => setPlaybackSpeed(1.0)}
                  className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                    playbackSpeed === 1.0 ? 'bg-indigo-500 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  1.0x Normal
                </button>
                <button
                  onClick={() => setPlaybackSpeed(0.8)}
                  className={`px-2.5 py-1 rounded-lg transition cursor-pointer ${
                    playbackSpeed === 0.8 ? 'bg-indigo-500 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  0.8x Slow
                </button>
              </div>
            </div>
          </div>

          {/* 2. Learner Recording Card */}
          <div className="p-6 bg-slate-950/70 rounded-2xl border border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Mic className="w-4 h-4" /> 2. Your Audio Take
                </span>
                <span className={`text-[10px] px-2 py-0.5 rounded font-bold border ${
                  recordedAudioUrl
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                    : 'bg-slate-800 text-slate-500 border-slate-700'
                }`}>
                  {recordedAudioUrl ? 'Take Recorded' : 'Awaiting Take'}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Record your voice speaking the phrase with proper stress.
              </p>
            </div>

            {/* Audio Recorder Module */}
            <AudioRecorder
              onRecordingComplete={handleRecordingComplete}
              onClearRecording={() => setRecordedAudioUrl(null)}
              isRecordingDisabled={isReferencePlaying || isAbComparing}
            />

            {/* Learner Playback Controls */}
            {recordedAudioUrl && (
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="bg-emerald-400 h-full transition-all duration-100"
                    style={{ width: `${learnerProgress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => playLearnerAudio()}
                    disabled={isLearnerPlaying || isAbComparing}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
                  >
                    {isLearnerPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{isLearnerPlaying ? 'Playing Take...' : 'Play Your Take'}</span>
                  </button>
                  <span className="text-[11px] font-mono text-slate-400">
                    Duration: {recordedDuration}s
                  </span>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* 3. A/B Toggle & Comparison Bar */}
        {recordedAudioUrl && (
          <div className="p-5 bg-gradient-to-r from-indigo-950/60 via-purple-950/40 to-slate-950 rounded-2xl border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-sm font-bold text-white flex items-center justify-center sm:justify-start gap-2">
                <Layers className="w-4 h-4 text-purple-400" />
                A/B By-Ear Contrast Comparison
              </div>
              <p className="text-xs text-slate-400">
                Listen sequentially to hear the gap between the native reference and your recording.
              </p>
            </div>

            <button
              onClick={handleAbComparison}
              disabled={isAbComparing || isReferencePlaying || isLearnerPlaying}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-50 text-white rounded-2xl font-bold text-xs flex items-center gap-2 shadow-lg shadow-purple-900/40 transition transform active:scale-95 cursor-pointer"
            >
              <Sliders className="w-4 h-4" />
              <span>{isAbComparing ? 'Comparing (Model ➔ You)...' : 'Run Sequential A/B Compare'}</span>
            </button>
          </div>
        )}

        {/* 4. Formative Self-Assessment Checklist */}
        {recordedAudioUrl && (
          <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Self-Assessment Checklist
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Evaluate your take honestly by ear against the studio standard.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className={`text-xs px-3 py-1 rounded-xl font-bold border ${
                  checkedCount === 4 ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' :
                  checkedCount >= 2 ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' :
                  'bg-slate-800 text-slate-400 border-slate-700'
                }`}>
                  {checkedCount === 4 ? '✨ Mastered Take!' :
                   checkedCount >= 2 ? '👍 Good Articulation' :
                   '🔄 Needs Another Take'} ({checkedCount}/4)
                </span>
              </div>
            </div>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              
              <button
                type="button"
                onClick={() => toggleCheck('stress')}
                className={`p-4 rounded-xl border text-left flex items-start gap-3 transition cursor-pointer ${
                  checklist.stress
                    ? 'bg-emerald-950/50 border-emerald-500/60 text-white'
                    : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className={`w-5 h-5 rounded-md border mt-0.5 flex items-center justify-center shrink-0 ${
                  checklist.stress ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'border-slate-700 bg-slate-950'
                }`}>
                  {checklist.stress && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-white">Syllable Stress Peak</div>
                  <div className="text-[11px] text-slate-400">Did you emphasize the correct stressed syllable with higher pitch and duration?</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => toggleCheck('articulation')}
                className={`p-4 rounded-xl border text-left flex items-start gap-3 transition cursor-pointer ${
                  checklist.articulation
                    ? 'bg-emerald-950/50 border-emerald-500/60 text-white'
                    : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className={`w-5 h-5 rounded-md border mt-0.5 flex items-center justify-center shrink-0 ${
                  checklist.articulation ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'border-slate-700 bg-slate-950'
                }`}>
                  {checklist.articulation && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-white">Target Sound Distinction</div>
                  <div className="text-[11px] text-slate-400">Was the focus contrast ({currentTarget.focusSound}) clean without Bengali phonetic substitution?</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => toggleCheck('vowels')}
                className={`p-4 rounded-xl border text-left flex items-start gap-3 transition cursor-pointer ${
                  checklist.vowels
                    ? 'bg-emerald-950/50 border-emerald-500/60 text-white'
                    : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className={`w-5 h-5 rounded-md border mt-0.5 flex items-center justify-center shrink-0 ${
                  checklist.vowels ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'border-slate-700 bg-slate-950'
                }`}>
                  {checklist.vowels && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-white">Vowel Length & Crispness</div>
                  <div className="text-[11px] text-slate-400">Were short vowels crisp and relaxed, and long vowels clearly sustained?</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => toggleCheck('rhythm')}
                className={`p-4 rounded-xl border text-left flex items-start gap-3 transition cursor-pointer ${
                  checklist.rhythm
                    ? 'bg-emerald-950/50 border-emerald-500/60 text-white'
                    : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className={`w-5 h-5 rounded-md border mt-0.5 flex items-center justify-center shrink-0 ${
                  checklist.rhythm ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'border-slate-700 bg-slate-950'
                }`}>
                  {checklist.rhythm && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-white">Pacing & Natural Rhythm</div>
                  <div className="text-[11px] text-slate-400">Did the sentence sound fluid and natural without robotic pauses?</div>
                </div>
              </button>

            </div>

            {/* Complete & Next Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <div className="text-xs text-slate-400">
                {isCompleted ? (
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> Practice logged to daily streak!
                  </span>
                ) : (
                  <span>Check off your self-evaluation to log your daily practice point.</span>
                )}
              </div>

              <div className="flex items-center gap-3">
                {!isCompleted ? (
                  <button
                    onClick={handleCompleteDrill}
                    disabled={checkedCount === 0}
                    className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-emerald-900/30 transition cursor-pointer"
                  >
                    <Award className="w-4 h-4" />
                    <span>Log Drill & Update Streak</span>
                  </button>
                ) : (
                  <button
                    onClick={handleNextTarget}
                    className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-indigo-900/30 transition cursor-pointer"
                  >
                    <span>Next Drill</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

          </div>
        )}

      </div>

    </div>
  );
};
