import React, { useState, useEffect, useRef } from 'react';
import { 
  SPEAK_PRACTICE_DATA 
} from '../../data/speakPracticeData';
import type { SpeakTarget } from '../../data/speakPracticeData';
import { 
  getFluencyProfile 
} from '../../services/fluencyProfileService';
import { syncLocalProfileToCloud } from '../../services/cloudProfileService';
import { supabase } from '../../services/supabaseClient';
import type { WeakPatternKey } from '../../types/fluencyLab';
import confetti from 'canvas-confetti';
import { 
  Activity, 
  Sparkles, 
  Mic, 
  Square, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Info, 
  ChevronRight, 
  ChevronLeft,
  ArrowRight,
  RefreshCw
} from 'lucide-react';

interface WordAlignment {
  targetWord: string;
  transcribedWord: string | null;
  status: 'matched' | 'mismatched' | 'missing';
  associatedFlaw?: WeakPatternKey;
}

export const SpeechFeedbackEngine: React.FC = () => {
  const [currentTargetIndex, setCurrentTargetIndex] = useState<number>(0);
  const [isListening, setIsListening] = useState<boolean>(false);
  const [transcribedText, setTranscribedText] = useState<string>('');
  const [alignmentResult, setAlignmentResult] = useState<WordAlignment[] | null>(null);
  const [matchScore, setMatchScore] = useState<number | null>(null);
  const [isBrowserSupported, setIsBrowserSupported] = useState<boolean>(true);
  const [recognitionError, setRecognitionError] = useState<string | null>(null);
  const [isLoopbackSaved, setIsLoopbackSaved] = useState<boolean>(false);

  const recognitionRef = useRef<any>(null);
  const currentTarget: SpeakTarget = SPEAK_PRACTICE_DATA[currentTargetIndex] || SPEAK_PRACTICE_DATA[0];

  useEffect(() => {
    // Check Web Speech Recognition API availability
    const SpeechRecognitionAPI = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognitionAPI) {
      setIsBrowserSupported(false);
    }
  }, []);

  useEffect(() => {
    resetState();
  }, [currentTargetIndex]);

  const resetState = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort();
      } catch (_) {}
    }
    setIsListening(false);
    setTranscribedText('');
    setAlignmentResult(null);
    setMatchScore(null);
    setRecognitionError(null);
    setIsLoopbackSaved(false);
  };

  const startListening = () => {
    const SpeechRecognitionAPI = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognitionAPI) {
      setIsBrowserSupported(false);
      return;
    }

    setRecognitionError(null);
    setTranscribedText('');
    setAlignmentResult(null);
    setMatchScore(null);
    setIsLoopbackSaved(false);

    try {
      const recognition = new SpeechRecognitionAPI();
      recognition.lang = 'en-US';
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setTranscribedText(transcript);
        analyzeSpeechAlignment(transcript, currentTarget.targetSentence);
      };

      recognition.onerror = (event: any) => {
        console.warn('Speech recognition error:', event.error);
        setIsListening(false);
        if (event.error === 'not-allowed') {
          setRecognitionError('Microphone access was denied. Please enable microphone permissions in your browser.');
        } else if (event.error === 'no-speech') {
          setRecognitionError('No clear speech was detected. Please speak closer to your microphone and try again.');
        } else {
          setRecognitionError(`Recognition issue: ${event.error}. You can retry or use Stage 3 by-ear comparison.`);
        }
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err: any) {
      console.error('Failed to initialize speech recognition', err);
      setIsListening(false);
      setRecognitionError('Could not start Web Speech Recognition. Please verify browser permissions.');
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (_) {}
    }
    setIsListening(false);
  };

  // Word-Level Alignment Algorithm
  const analyzeSpeechAlignment = (spoken: string, target: string) => {
    const cleanWord = (w: string) => w.toLowerCase().replace(/[^a-z0-9]/g, '');
    const targetWords = target.split(/\s+/).filter(Boolean);
    const spokenWords = spoken.split(/\s+/).filter(Boolean);

    const alignment: WordAlignment[] = [];
    let matchedCount = 0;

    targetWords.forEach((rawTarget, idx) => {
      const cleanTarget = cleanWord(rawTarget);
      const rawSpoken = spokenWords[idx] || null;
      const cleanSpoken = rawSpoken ? cleanWord(rawSpoken) : null;

      if (cleanSpoken === cleanTarget) {
        alignment.push({
          targetWord: rawTarget,
          transcribedWord: rawSpoken,
          status: 'matched'
        });
        matchedCount++;
      } else if (cleanSpoken) {
        // Mismatched substitution
        const flaw = detectAssociatedFlaw(cleanTarget, cleanSpoken);
        alignment.push({
          targetWord: rawTarget,
          transcribedWord: rawSpoken,
          status: 'mismatched',
          associatedFlaw: flaw
        });
      } else {
        // Dropped / omitted word
        alignment.push({
          targetWord: rawTarget,
          transcribedWord: null,
          status: 'missing'
        });
      }
    });

    const score = Math.round((matchedCount / targetWords.length) * 100);
    setAlignmentResult(alignment);
    setMatchScore(score);

    if (score >= 80) {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const detectAssociatedFlaw = (target: string, spoken: string): WeakPatternKey | undefined => {
    // /v/ vs /b/ detection
    if ((target.includes('v') && spoken.includes('b')) || (target.includes('b') && spoken.includes('v'))) {
      return 'v_b_confusion';
    }
    // TH sound detection
    if (target.includes('th') && (spoken.startsWith('t') || spoken.startsWith('d') || spoken.startsWith('s'))) {
      return 'th_dental_fricatives';
    }
    // Consonant cluster omission
    if (target.endsWith('sks') || target.endsWith('kts') || target.endsWith('pts')) {
      return 'consonant_clusters';
    }
    return undefined;
  };

  // Loopback to Stage 1: Add flagged flaws to user profile
  const handleLoopbackSync = async () => {
    if (!alignmentResult) return;

    const detectedFlaws: WeakPatternKey[] = [];
    alignmentResult.forEach(item => {
      if (item.associatedFlaw) {
        detectedFlaws.push(item.associatedFlaw);
      }
    });

    if (detectedFlaws.length > 0) {
      const currentProfile = getFluencyProfile();
      const updatedFlaws = Array.from(new Set([...currentProfile.flaggedWeakPatterns, ...detectedFlaws]));
      const updatedProfile = {
        ...currentProfile,
        flaggedWeakPatterns: updatedFlaws,
        lastActiveDate: new Date().toISOString()
      };
      localStorage.setItem('fluency_lab_user_profile_v1', JSON.stringify(updatedProfile));

      // Sync to cloud if user is authenticated
      const { data: authData } = await supabase.auth.getUser();
      if (authData?.user) {
        await syncLocalProfileToCloud(authData.user.id, authData.user.email);
      }
    }

    setIsLoopbackSaved(true);
  };

  const handleNext = () => {
    if (currentTargetIndex < SPEAK_PRACTICE_DATA.length - 1) {
      setCurrentTargetIndex(prev => prev + 1);
    } else {
      setCurrentTargetIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentTargetIndex > 0) {
      setCurrentTargetIndex(prev => prev - 1);
    } else {
      setCurrentTargetIndex(SPEAK_PRACTICE_DATA.length - 1);
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">

      {/* Header Banner */}
      <div className="bg-white border border-slate-200 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <Activity className="w-3.5 h-3.5" /> Stage 5 • Automated Speech Feedback
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Word-Level Speech Recognition & Loopback
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
            Automated speech analysis powered by browser Web Speech API. Compares your spoken utterance against the target text to detect word omissions and substitutions.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-500 font-mono">
            Zero-Cost Engine
          </span>
        </div>
      </div>

      {/* Accuracy Honesty & Browser Notice */}
      <div className="p-4 bg-white rounded-2xl border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
        <Info className="w-4 h-4 text-teal-800 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <div className="font-bold text-slate-900 flex items-center gap-2">
            <span>Accuracy Transparency Notice</span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-teal-50 text-teal-900 border border-teal-200 font-mono">
              Word-Level Transcription Match
            </span>
          </div>
          <p className="text-slate-500 leading-relaxed">
            This module evaluates whether spoken words were transcribed accurately by the browser speech engine. It highlights word-level mismatches rather than acoustic/phonetic wave scoring.
          </p>
        </div>
      </div>

      {/* Browser Support Fallback Banner if unsupported */}
      {!isBrowserSupported && (
        <div className="p-5 bg-amber-950/40 rounded-2xl border border-amber-500/30 space-y-2 text-xs text-amber-200">
          <div className="font-bold text-amber-300 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            Web Speech Recognition Not Available in This Browser
          </div>
          <p className="text-amber-200/90 leading-relaxed">
            Your current browser or iOS Safari configuration does not support speech recognition. You can still practice all pronunciation drills in <strong>Stage 3 (Speak & Record Studio)</strong> using the high-fidelity by-ear comparison player.
          </p>
        </div>
      )}

      {/* Main Feedback Workspace */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-8 shadow-2xl backdrop-blur-xl">

        {/* Target Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded-lg bg-teal-50 text-teal-900 font-mono text-xs font-bold border border-teal-200">
              Target {currentTargetIndex + 1} of {SPEAK_PRACTICE_DATA.length}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              {currentTarget.categoryLabel}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 bg-white hover:bg-slate-100 text-slate-600 rounded-xl border border-slate-200 transition cursor-pointer"
              title="Previous Target"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-white hover:bg-slate-100 text-slate-600 rounded-xl border border-slate-200 transition cursor-pointer"
              title="Next Target"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Target Sentence Card */}
        <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-4 text-center md:text-left shadow-inner">
          <div className="text-xs font-bold uppercase tracking-wider text-teal-800 flex items-center justify-center md:justify-start gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Target Utterance
          </div>

          <div className="text-xl sm:text-2xl font-black text-slate-900 leading-relaxed">
            {currentTarget.targetSentence}
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-xs text-slate-500">
            <span className="font-mono bg-white px-2.5 py-1 rounded border border-slate-200">
              Focus: <span className="text-teal-900 font-bold">{currentTarget.focusSound}</span>
            </span>
            <span className="font-mono bg-white px-2.5 py-1 rounded border border-slate-200">
              IPA: <span className="text-teal-900">{currentTarget.ipa}</span>
            </span>
          </div>
        </div>

        {/* Live Speech Recognition Action Card */}
        <div className="p-6 bg-white rounded-2xl border border-slate-200 flex flex-col items-center justify-center text-center space-y-4">
          {isListening ? (
            <div className="space-y-3">
              <div className="w-14 h-14 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-400 flex items-center justify-center mx-auto animate-pulse">
                <Mic className="w-7 h-7" />
              </div>
              <div className="text-sm font-bold text-rose-400 font-mono animate-pulse">
                LISTENING TO YOUR SPEECH...
              </div>
              <p className="text-xs text-slate-500">Speak the target sentence clearly into your microphone.</p>
              <button
                onClick={stopListening}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-700 text-rose-300 rounded-xl text-xs font-bold flex items-center gap-2 mx-auto cursor-pointer"
              >
                <Square className="w-3.5 h-3.5 fill-rose-400" />
                <span>Stop Listening</span>
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <button
                onClick={startListening}
                disabled={!isBrowserSupported}
                className="px-6 py-3.5 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 disabled:opacity-50 text-slate-900 rounded-2xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-xs transition transform active:scale-95 cursor-pointer mx-auto"
              >
                <Mic className="w-4 h-4" />
                <span>Speak & Analyze With Speech Engine</span>
              </button>
              <p className="text-xs text-slate-500">Press the button and read the target phrase aloud.</p>
            </div>
          )}

          {recognitionError && (
            <div className="p-3.5 bg-rose-950/60 border border-rose-500/30 rounded-xl text-rose-300 text-xs flex items-start gap-2 max-w-md text-left">
              <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <div>{recognitionError}</div>
            </div>
          )}
        </div>

        {/* Word-by-Word Alignment Results */}
        {alignmentResult && (
          <div className="space-y-6 pt-4 border-t border-slate-200">
            
            {/* Score & Verdict Bar */}
            <div className="p-5 bg-white rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs text-slate-500 font-medium">Word Alignment Accuracy</div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 flex items-center gap-2">
                  <span className={matchScore && matchScore >= 80 ? 'text-teal-800' : matchScore && matchScore >= 50 ? 'text-amber-400' : 'text-rose-400'}>
                    {matchScore}%
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full font-bold border border-slate-200 bg-white text-slate-600">
                    {matchScore && matchScore >= 80 ? 'High Word Match' : matchScore && matchScore >= 50 ? 'Partial Word Match' : 'Substantial Misses'}
                  </span>
                </div>
              </div>

              <div className="text-xs text-slate-500 text-center sm:text-right">
                <div>Transcribed by engine:</div>
                <div className="text-slate-800 font-mono italic mt-0.5">"{transcribedText}"</div>
              </div>
            </div>

            {/* Word Alignment Cards */}
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Word-by-Word Match Breakdown
              </div>

              <div className="flex flex-wrap gap-2.5">
                {alignmentResult.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border flex flex-col items-center justify-center min-w-[90px] text-center transition ${
                      item.status === 'matched'
                        ? 'bg-emerald-950/40 border-teal-200 text-teal-900'
                        : item.status === 'mismatched'
                        ? 'bg-amber-950/40 border-amber-500/50 text-amber-300 shadow-md shadow-xs'
                        : 'bg-rose-950/40 border-rose-500/40 text-rose-300'
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-900">{item.targetWord}</div>
                    <div className="text-[10px] font-mono mt-1">
                      {item.status === 'matched' && (
                        <span className="text-teal-800 flex items-center gap-0.5">
                          <CheckCircle2 className="w-3 h-3" /> Exact
                        </span>
                      )}
                      {item.status === 'mismatched' && (
                        <span className="text-amber-400">
                          Heard: "{item.transcribedWord}"
                        </span>
                      )}
                      {item.status === 'missing' && (
                        <span className="text-rose-400 flex items-center gap-0.5">
                          <XCircle className="w-3 h-3" /> Missed
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Loopback Diagnostic Feedback Card */}
            {alignmentResult.some(i => i.associatedFlaw) && (
              <div className="p-5 bg-gradient-to-r from-amber-950/40 via-purple-950/30 to-slate-950 rounded-2xl border border-amber-500/30 space-y-3 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4" />
                    Diagnostic Flaw Detected in Speech
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-teal-50 text-amber-300 font-bold border border-amber-500/30">
                    Loopback Target
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-bangla">
                  আপনার উচ্চারণে সম্ভাব্য ফোনেটিক ত্রুটি ধরা পড়েছে। এটি প্রোফাইলে যুক্ত করে পরবর্তী ড্রিলসমূহে প্রাধান্য দেওয়া যেতে পারে।
                </p>

                <div className="flex items-center justify-between pt-2">
                  <div className="text-xs text-slate-500">
                    {isLoopbackSaved ? (
                      <span className="text-teal-800 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" /> Added to Your Diagnostic Weak Areas!
                      </span>
                    ) : (
                      <span>Sync this identified flaw into your Stage 1 & Dashboard profile?</span>
                    )}
                  </div>

                  {!isLoopbackSaved && (
                    <button
                      onClick={handleLoopbackSync}
                      className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer shadow-lg shadow-xs"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Sync to Diagnostic Targets</span>
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Next Action */}
            <div className="flex items-center justify-end pt-3">
              <button
                onClick={handleNext}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-slate-900 rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
              >
                <span>Next Target Phrase</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

      </div>

    </div>
  );
};
