import React, { useState, useEffect } from 'react';
import { Mic, Play, Pause, RotateCcw, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CueCard {
  id: string;
  topic: string;
  subPoints: string[];
  tips: string;
}

const CUE_CARDS: CueCard[] = [
  {
    id: '1',
    topic: 'Describe an international city or place you would like to visit in the future.',
    subPoints: ['Where this place is located', 'How you know about this place', 'What you would do there', 'And explain why you would choose this place over others.'],
    tips: 'Use descriptive adjectives (e.g. state-of-the-art infrastructure, cultural heritage, vibrant metropolis) and varied conditional tenses.'
  },
  {
    id: '2',
    topic: 'Describe a memorable speech or lecture you attended.',
    subPoints: ['Who gave the speech', 'When and where it took place', 'What the main theme was', 'And explain how it impacted your perspective.'],
    tips: 'Focus on emotive language and signposting (e.g. "What resonated most with me was...", "To put it into perspective...").'
  },
  {
    id: '3',
    topic: 'Describe an environmental initiative or project you find important.',
    subPoints: ['What the initiative is', 'Who organizes it', 'What actions are involved', 'And explain why it is vital for future generations.'],
    tips: 'Incorporate climate and sustainable governance vocabulary (e.g. renewable energy, ecological balance, community mobilization).'
  },
  {
    id: '4',
    topic: 'Describe a person who inspired you to achieve a difficult goal.',
    subPoints: ['Who this person is', 'What they achieved', 'How they supported or influenced you', 'And explain what lessons you learned from them.'],
    tips: 'Highlight personal growth, resilience, mentorship, and leadership character traits.'
  }
];

export const IeltsSpeakingSimulator: React.FC = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(60); // 1-minute prep default
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState<'prep' | 'speak'>('prep');

  useEffect(() => {
    let interval: any = null;
    if (isRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      if (mode === 'prep') {
        setMode('speak');
        setTimerSeconds(120); // 2 minutes speaking
      } else {
        setIsRunning(false);
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
      }
    }
    return () => clearInterval(interval);
  }, [isRunning, timerSeconds, mode]);

  const card = CUE_CARDS[currentCardIndex];

  const nextCard = () => {
    setCurrentCardIndex((prev) => (prev + 1) % CUE_CARDS.length);
    resetTimer('prep');
  };

  const resetTimer = (newMode: 'prep' | 'speak' = 'prep') => {
    setIsRunning(false);
    setMode(newMode);
    setTimerSeconds(newMode === 'prep' ? 60 : 120);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl text-white">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
        <div className="p-3 bg-red-500/20 text-red-400 rounded-2xl border border-red-500/30">
          <Mic className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            IELTS Speaking Part 2 Cue Card Simulator
            <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-medium">Real Exam Timer</span>
          </h3>
          <p className="text-sm text-slate-400">Practice official IELTS Part 2 cue cards with automated 1-minute preparation and 2-minute speaking timers.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-7 bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Cue Card #{currentCardIndex + 1} of {CUE_CARDS.length}
              </span>
              <button
                onClick={nextCard}
                className="text-xs text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" /> Next Random Topic
              </button>
            </div>

            <h4 className="text-lg font-black text-white leading-snug">
              {card.topic}
            </h4>

            <div className="space-y-2 pt-2 border-t border-slate-800/80">
              <div className="text-xs font-semibold text-slate-300">You should say:</div>
              <ul className="space-y-2 text-xs text-slate-300">
                {card.subPoints.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800/80 text-[11px] text-slate-400">
            <span className="font-bold text-emerald-400">Examiner Tip: </span>
            {card.tips}
          </div>
        </div>

        <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col items-center justify-center text-center space-y-6">
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
              {mode === 'prep' ? '1-Min Preparation Phase' : '2-Min Speaking Phase'}
            </div>
            <div className={`text-5xl font-black font-mono ${mode === 'prep' ? 'text-amber-400' : 'text-emerald-400'}`}>
              {formatTime(timerSeconds)}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className={`px-6 py-3 rounded-xl font-bold text-xs flex items-center gap-2 shadow-lg transition cursor-pointer ${
                isRunning
                  ? 'bg-amber-600 hover:bg-amber-500 text-white'
                  : 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white'
              }`}
            >
              {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isRunning ? 'Pause Timer' : 'Start Preparation'}
            </button>
            <button
              onClick={() => resetTimer('prep')}
              className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition cursor-pointer"
              title="Reset Timer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          <div className="text-[11px] text-slate-500 max-w-xs">
            {mode === 'prep'
              ? 'Use the 1 minute to jot down 3-4 bullet keywords. Do not write full sentences.'
              : 'Speak continuously until the timer finishes. Maintain natural rhythm and tone.'}
          </div>
        </div>
      </div>
    </div>
  );
};
