import React, { useState } from 'react';
import { DIAGNOSTIC_QUESTIONS } from '../../data/diagnosticQuizData';
import type { QuizResult, CEFRLevel, WeakPatternKey } from '../../types/fluencyLab';
import { saveQuizResultToProfile } from '../../services/fluencyProfileService';
import { DiagnosticResultCard } from './DiagnosticResultCard';
import { Volume2, ArrowRight, User } from 'lucide-react';
import confetti from 'canvas-confetti';

interface DiagnosticQuizProps {
  initialUserAlias?: string;
  onComplete?: (result: QuizResult) => void;
}

export const DiagnosticQuiz: React.FC<DiagnosticQuizProps> = ({
  initialUserAlias = 'Learner',
  onComplete
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [userAlias, setUserAlias] = useState(initialUserAlias);

  const currentQuestion = DIAGNOSTIC_QUESTIONS[currentIndex];
  const progressPercent = Math.round(((currentIndex + 1) / DIAGNOSTIC_QUESTIONS.length) * 100);

  // Synthesize speech using Web Speech API for listening questions
  const playQuestionAudio = (text?: string) => {
    if (!text) return;
    
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.88;
      utterance.lang = 'en-US';

      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(v => v.lang.includes('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha')));
      if (preferredVoice) utterance.voice = preferredVoice;

      setIsPlayingAudio(true);
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);

      window.speechSynthesis.speak(utterance);
    } else {
      alert('Audio synthesis is not supported on this browser. Text: "' + text + '"');
    }
  };

  const handleSelectOption = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleNext = () => {
    if (!selectedOption) return;

    const newAnswers = { ...answers, [currentQuestion.id]: selectedOption };
    setAnswers(newAnswers);
    setSelectedOption(null);

    if (currentIndex < DIAGNOSTIC_QUESTIONS.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      finishQuiz(newAnswers);
    }
  };

  const finishQuiz = (finalAnswers: Record<number, string>) => {
    let score = 0;
    let readingScore = 0;
    let listeningScore = 0;
    let speakingScore = 0;
    const weakPatterns: WeakPatternKey[] = [];

    DIAGNOSTIC_QUESTIONS.forEach((q) => {
      const chosenOptId = finalAnswers[q.id];
      const correctOpt = q.options.find(o => o.isCorrect);
      
      if (chosenOptId === correctOpt?.id) {
        score += 1;
        if (q.type === 'reading') readingScore += 1;
        if (q.type === 'listening') listeningScore += 1;
        if (q.type === 'speaking_readiness') speakingScore += 1;
      } else {
        if (!weakPatterns.includes(q.associatedWeakPattern)) {
          weakPatterns.push(q.associatedWeakPattern);
        }
      }
    });

    const percentage = Math.round((score / DIAGNOSTIC_QUESTIONS.length) * 100);

    let cefrLevel: CEFRLevel = 'A1';
    let levelTitle = 'Starter / Beginner';
    let levelDescription = 'Basic familiarity with foundational words. Needs targeted phonetic drills on consonant distinction and core grammar formulas.';

    if (score >= 9) {
      cefrLevel = 'C1';
      levelTitle = 'Advanced / Fluent';
      levelDescription = 'Near-native comprehension of subtle English phonetic contrasts, complex tense harmony, and sophisticated conversational rhythm.';
    } else if (score >= 7) {
      cefrLevel = 'B2';
      levelTitle = 'Upper Intermediate';
      levelDescription = 'Confident communicative grasp. Occasional minor slip-ups on subtle prepositions or secondary syllable stress.';
    } else if (score >= 5) {
      cefrLevel = 'B1';
      levelTitle = 'Intermediate';
      levelDescription = 'Solid functional foundation. Needs focused practice on /v/ vs /b/, vowel length contrast, and uncountable noun collocations.';
    } else if (score >= 3) {
      cefrLevel = 'A2';
      levelTitle = 'Elementary';
      levelDescription = 'Developing comprehension. Benefits significantly from minimal pair audio drills and Bengali-English common error elimination.';
    }

    const result: QuizResult = {
      score,
      totalQuestions: DIAGNOSTIC_QUESTIONS.length,
      cefrLevel,
      levelTitle,
      levelDescription,
      percentage,
      flaggedWeakPatterns: weakPatterns,
      readingScore,
      listeningScore,
      speakingScore,
      completedAt: new Date().toISOString()
    };

    saveQuizResultToProfile(result, userAlias);
    setQuizResult(result);
    setIsCompleted(true);

    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 }
    });

    if (onComplete) {
      onComplete(result);
    }
  };

  const handleRetake = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setAnswers({});
    setIsCompleted(false);
    setQuizResult(null);
  };

  if (isCompleted && quizResult) {
    return (
      <DiagnosticResultCard
        result={quizResult}
        userAlias={userAlias}
        onRetake={handleRetake}
      />
    );
  }

  return (
    <div className="bg-slate-900/85 border border-slate-800 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl text-white space-y-6">
      
      {/* Top Header & Progress */}
      <div className="space-y-3 pb-4 border-b border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
              Stage 1: Diagnostic Placement Quiz
            </span>
            <span className="text-slate-400">
              Question {currentIndex + 1} of {DIAGNOSTIC_QUESTIONS.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <User className="w-3.5 h-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Your Name (Optional)"
              value={userAlias}
              onChange={e => setUserAlias(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-emerald-400 font-medium focus:border-indigo-500 outline-none w-36"
            />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 h-full rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="space-y-5">
        <div className="space-y-1.5">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-400">
            {currentQuestion.category}
          </div>
          <h3 className="text-lg sm:text-xl font-black text-white leading-relaxed">
            {currentQuestion.promptText}
          </h3>
          {currentQuestion.banglaPromptSubtitle && (
            <p className="text-xs text-slate-400">
              {currentQuestion.banglaPromptSubtitle}
            </p>
          )}
        </div>

        {/* Audio Trigger for Listening Questions */}
        {currentQuestion.type === 'listening' && currentQuestion.audioSpeechText && (
          <div className="p-4 bg-slate-950 rounded-2xl border border-indigo-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                <Volume2 className="w-5 h-5 animate-pulse" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-white">Auditory Discrimination Audio Clip</div>
                <div className="text-slate-400 text-[11px]">Click play to listen to native acoustic pronunciation</div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => playQuestionAudio(currentQuestion.audioSpeechText)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 shadow-lg transition cursor-pointer ${
                isPlayingAudio
                  ? 'bg-amber-600 text-white animate-pulse'
                  : 'bg-gradient-to-r from-indigo-600 to-emerald-600 hover:opacity-95 text-white'
              }`}
            >
              <Volume2 className="w-4 h-4" />
              {isPlayingAudio ? 'Playing Audio...' : 'Play Audio Clip'}
            </button>
          </div>
        )}

        {/* Multiple Choice Options */}
        <div className="space-y-2.5">
          {currentQuestion.options.map((opt) => {
            const isSelected = selectedOption === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => handleSelectOption(opt.id)}
                className={`w-full p-4 rounded-2xl text-left text-xs sm:text-sm font-medium transition flex items-center justify-between cursor-pointer border ${
                  isSelected
                    ? 'bg-gradient-to-r from-indigo-950 to-slate-900 border-indigo-500 text-white shadow-lg shadow-indigo-950/50'
                    : 'bg-slate-950/80 hover:bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                <span>{opt.text}</span>
                <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] shrink-0 ml-3 ${
                  isSelected ? 'border-emerald-400 bg-emerald-500/20 text-emerald-400 font-bold' : 'border-slate-700 text-slate-600'
                }`}>
                  {isSelected ? '✓' : ''}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Action Button */}
      <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
        <span className="text-[11px] text-slate-500">
          {selectedOption ? 'Ready to continue' : 'Select an answer to proceed'}
        </span>

        <button
          type="button"
          onClick={handleNext}
          disabled={!selectedOption}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-95 disabled:opacity-40 text-white font-bold text-xs shadow-lg shadow-emerald-950/40 transition flex items-center gap-2 cursor-pointer"
        >
          <span>{currentIndex === DIAGNOSTIC_QUESTIONS.length - 1 ? 'Finish & Generate CEFR Report' : 'Next Question'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
