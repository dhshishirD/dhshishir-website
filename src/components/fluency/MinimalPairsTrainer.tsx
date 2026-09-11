import React, { useState, useEffect } from 'react';
import { MINIMAL_PAIRS_DATA, type MinimalPair } from '../../data/fluencyData';
import { playAudioWithFallback } from '../../utils/audioPlayer';
import { Volume2, Play, CheckCircle2, XCircle, RefreshCw, Flame, Sparkles, Award, ArrowRight, Layers, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

export const MinimalPairsTrainer: React.FC = () => {
  const categories = [
    { key: 'v_vs_b', label: '1. /v/ vs /b/' },
    { key: 'th_sounds', label: '2. TH Sounds (/θ/ & /ð/)' },
    { key: 'r_vs_l', label: '3. /r/ vs /l/' },
    { key: 'vowels', label: '4. Short vs Long Vowels' },
    { key: 'p_vs_f', label: '5. /p/ vs /f/' },
    { key: 's_vs_sh', label: '6. /s/ vs /ʃ/ (sh)' },
    { key: 'final_clusters', label: '7. Final Consonant Clusters' }
  ];

  const [activeCategory, setActiveCategory] = useState<string>('v_vs_b');
  const [mode, setMode] = useState<'study' | 'game'>('study');
  
  // Game state
  const [gameIndex, setGameIndex] = useState<number>(0);
  const [targetWord, setTargetWord] = useState<string>('');
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [gameScore, setGameScore] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [drillStreak, setDrillStreak] = useState<number>(0);

  const categoryPairs = MINIMAL_PAIRS_DATA.filter(p => p.categoryKey === activeCategory);
  const currentPair = categoryPairs[gameIndex] || categoryPairs[0];

  // Set up game question
  useEffect(() => {
    if (mode === 'game' && categoryPairs.length > 0 && gameIndex < categoryPairs.length) {
      const pair = categoryPairs[gameIndex];
      const chooseA = Math.random() > 0.5;
      const target = chooseA ? pair.wordA : pair.wordB;
      setTargetWord(target);
      setSelectedAnswer(null);
      setIsCorrect(null);
      // Auto-play question audio
      playAudioWithFallback(undefined, target, false);
    }
  }, [gameIndex, mode, activeCategory]);

  const handlePlaySingle = (word: string) => {
    playAudioWithFallback(undefined, word, false);
  };

  const handlePlayComparison = async (pair: MinimalPair) => {
    await playAudioWithFallback(undefined, pair.wordA, false);
    setTimeout(async () => {
      await playAudioWithFallback(undefined, pair.wordB, false);
    }, 600);
  };

  const handlePlayGameAudio = () => {
    if (targetWord) {
      playAudioWithFallback(undefined, targetWord, false);
    }
  };

  const handleAnswerPick = (pickedWord: string) => {
    if (selectedAnswer !== null) return; // Prevent double pick

    setSelectedAnswer(pickedWord);
    const correct = pickedWord === targetWord;
    setIsCorrect(correct);

    if (correct) {
      setGameScore(prev => prev + 1);
      setDrillStreak(prev => prev + 1);
    } else {
      setDrillStreak(0);
    }
  };

  const handleNextQuestion = () => {
    if (gameIndex + 1 < categoryPairs.length) {
      setGameIndex(prev => prev + 1);
    } else {
      setIsGameOver(true);
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    }
  };

  const handleRestartGame = () => {
    setGameIndex(0);
    setGameScore(0);
    setIsGameOver(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  const isClusterCategory = activeCategory === 'final_clusters';

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => {
              setActiveCategory(cat.key);
              handleRestartGame();
            }}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
              activeCategory === cat.key
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Mode Switcher: Study vs Ear Training Game */}
      <div className="flex items-center justify-between bg-slate-900/90 border border-slate-800 p-2 rounded-2xl max-w-md mx-auto">
        <button
          onClick={() => setMode('study')}
          className={`flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
            mode === 'study'
              ? 'bg-indigo-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Layers className="w-3.5 h-3.5" /> 1. Listen & Compare ({categoryPairs.length} Pairs)
        </button>
        <button
          onClick={() => {
            setMode('game');
            handleRestartGame();
          }}
          className={`flex-1 py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
            mode === 'game'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Award className="w-3.5 h-3.5" /> 2. Ear Discrimination Test
        </button>
      </div>

      {/* MODE 1: STUDY & LISTEN / COMPARE */}
      {mode === 'study' && (
        <div className="space-y-4">
          <div className="text-center space-y-1">
            <h3 className="text-base font-bold text-white flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              {categories.find(c => c.key === activeCategory)?.label} Drill Set
            </h3>
            <p className="text-xs text-slate-400">
              {isClusterCategory 
                ? 'Single-Word Cluster Preservation: Pay close attention to word-final consonant bursts without dropping endings.' 
                : 'Click individual words or "Compare" to hear how native speakers articulate the subtle phonetic contrast.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {categoryPairs.map((pair, index) => {
              // Special UI Pattern for Category 7: Consonant Cluster Preservation
              if (pair.isClusterDrop) {
                return (
                  <div
                    key={pair.id}
                    className="bg-slate-900/80 border border-indigo-500/20 hover:border-indigo-500/50 rounded-2xl p-4 transition space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 text-xs font-bold flex items-center justify-center">
                          {index + 1}
                        </span>
                        <span className="text-xs font-bold text-slate-400">Full Cluster Preservation</span>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                        {pair.phonemeA}
                      </span>
                    </div>

                    <div className="flex items-center justify-between bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                      <div>
                        <div className="text-lg font-black text-white flex items-center gap-2">
                          <span>{pair.wordA}</span>
                          <span className="text-xs font-normal text-emerald-400 font-mono">({pair.phonemeA})</span>
                        </div>
                        <div className="text-[11px] text-red-400/90 mt-0.5">
                          Common Error: Dropping into "{pair.wordB}"
                        </div>
                      </div>

                      <button
                        onClick={() => handlePlaySingle(pair.wordA)}
                        className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer shadow-md shadow-emerald-600/20"
                      >
                        <Volume2 className="w-3.5 h-3.5" /> Hear Target
                      </button>
                    </div>

                    {pair.clusterTip && (
                      <div className="text-xs text-slate-300 bg-indigo-950/30 p-2.5 rounded-lg border border-indigo-500/20 flex items-start gap-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{pair.clusterTip}</span>
                      </div>
                    )}
                  </div>
                );
              }

              // Standard 2-Choice Minimal Pair Card
              return (
                <div
                  key={pair.id}
                  className="bg-slate-900/70 border border-slate-800 hover:border-slate-700 rounded-2xl p-4 transition space-y-3"
                >
                  <div className="flex items-center justify-between border-b border-slate-800/60 pb-2">
                    <span className="text-xs font-bold text-slate-500">Pair #{index + 1}</span>
                    <button
                      onClick={() => handlePlayComparison(pair)}
                      className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 transition cursor-pointer"
                    >
                      <Play className="w-3 h-3" /> Play A vs B
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {/* Word A */}
                    <button
                      onClick={() => handlePlaySingle(pair.wordA)}
                      className="p-3 bg-slate-950/80 hover:bg-indigo-950/40 border border-slate-800 hover:border-indigo-500/40 rounded-xl text-left transition group cursor-pointer flex items-center justify-between"
                    >
                      <div>
                        <div className="text-base font-black text-white group-hover:text-emerald-300 transition">
                          {pair.wordA}
                        </div>
                        <div className="text-xs font-mono text-indigo-400 mt-0.5">
                          {pair.phonemeA}
                        </div>
                      </div>
                      <Volume2 className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transition" />
                    </button>

                    {/* Word B */}
                    <button
                      onClick={() => handlePlaySingle(pair.wordB)}
                      className="p-3 bg-slate-950/80 hover:bg-indigo-950/40 border border-slate-800 hover:border-indigo-500/40 rounded-xl text-left transition group cursor-pointer flex items-center justify-between"
                    >
                      <div>
                        <div className="text-base font-black text-white group-hover:text-emerald-300 transition">
                          {pair.wordB}
                        </div>
                        <div className="text-xs font-mono text-amber-400 mt-0.5">
                          {pair.phonemeB}
                        </div>
                      </div>
                      <Volume2 className="w-4 h-4 text-slate-600 group-hover:text-amber-400 transition" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* MODE 2: EAR DISCRIMINATION GAME */}
      {mode === 'game' && (
        <div className="max-w-xl mx-auto bg-gradient-to-b from-slate-900 to-indigo-950/50 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          {!isGameOver ? (
            <>
              {/* Question Header & Streak Tracker */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                    Question {gameIndex + 1} of {categoryPairs.length}
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    Listen & Identify Which Word Was Spoken
                  </h4>
                </div>

                <div className="flex items-center gap-2 px-3 py-1 bg-slate-950 rounded-xl border border-slate-800 text-xs font-bold text-amber-400">
                  <Flame className="w-4 h-4 text-amber-400 animate-bounce" />
                  <span>Streak: {drillStreak}</span>
                </div>
              </div>

              {/* Central Audio Playback Trigger */}
              <div className="text-center py-6 space-y-4">
                <button
                  onClick={handlePlayGameAudio}
                  className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 flex items-center justify-center shadow-xl shadow-emerald-500/30 transition transform hover:scale-105 active:scale-95 cursor-pointer"
                  title="Replay Audio"
                >
                  <Volume2 className="w-9 h-9" />
                </button>
                <div className="text-xs text-slate-400">
                  Click the button above to replay the word
                </div>
              </div>

              {/* 2-Choice Selection Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => handleAnswerPick(currentPair.wordA)}
                  disabled={selectedAnswer !== null}
                  className={`p-5 rounded-2xl border text-center transition font-black text-xl cursor-pointer ${
                    selectedAnswer === null
                      ? 'bg-slate-950/80 border-slate-800 text-white hover:border-indigo-500 hover:bg-slate-900'
                      : selectedAnswer === currentPair.wordA
                        ? isCorrect
                          ? 'bg-emerald-600/30 border-emerald-500 text-emerald-300'
                          : 'bg-red-600/30 border-red-500 text-red-300'
                        : currentPair.wordA === targetWord
                          ? 'bg-emerald-600/20 border-emerald-500/50 text-emerald-400'
                          : 'bg-slate-950/40 border-slate-800 text-slate-600'
                  }`}
                >
                  <div>{currentPair.wordA}</div>
                  <div className="text-xs font-mono font-normal opacity-60 mt-1">{currentPair.phonemeA}</div>
                </button>

                <button
                  onClick={() => handleAnswerPick(currentPair.wordB)}
                  disabled={selectedAnswer !== null}
                  className={`p-5 rounded-2xl border text-center transition font-black text-xl cursor-pointer ${
                    selectedAnswer === null
                      ? 'bg-slate-950/80 border-slate-800 text-white hover:border-indigo-500 hover:bg-slate-900'
                      : selectedAnswer === currentPair.wordB
                        ? isCorrect
                          ? 'bg-emerald-600/30 border-emerald-500 text-emerald-300'
                          : 'bg-red-600/30 border-red-500 text-red-300'
                        : currentPair.wordB === targetWord
                          ? 'bg-emerald-600/20 border-emerald-500/50 text-emerald-400'
                          : 'bg-slate-950/40 border-slate-800 text-slate-600'
                  }`}
                >
                  <div>{currentPair.wordB}</div>
                  <div className="text-xs font-mono font-normal opacity-60 mt-1">{currentPair.phonemeB}</div>
                </button>
              </div>

              {/* Feedback & Next Button */}
              {selectedAnswer !== null && (
                <div className="pt-2 space-y-4 animate-in fade-in duration-200">
                  <div className={`p-4 rounded-xl border flex items-center justify-between ${
                    isCorrect ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' : 'bg-red-500/10 border-red-500/30 text-red-300'
                  }`}>
                    <div className="flex items-center gap-2 font-bold text-sm">
                      {isCorrect ? <CheckCircle2 className="w-5 h-5 text-emerald-400" /> : <XCircle className="w-5 h-5 text-red-400" />}
                      <span>{isCorrect ? 'Correct! Sharp ear recognition.' : `Incorrect. The correct word was "${targetWord}".`}</span>
                    </div>

                    <button
                      onClick={() => handlePlayComparison(currentPair)}
                      className="text-xs font-bold underline cursor-pointer text-white flex items-center gap-1"
                    >
                      <RefreshCw className="w-3 h-3" /> Compare Both
                    </button>
                  </div>

                  <button
                    onClick={handleNextQuestion}
                    className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition cursor-pointer shadow-lg shadow-indigo-600/20"
                  >
                    <span>{gameIndex + 1 === categoryPairs.length ? 'See Final Score' : 'Next Pair'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          ) : (
            /* Game Over Scorecard */
            <div className="text-center py-6 space-y-6">
              <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-indigo-500 to-emerald-500 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center">
                  <Award className="w-10 h-10 text-emerald-400" />
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-black text-white">Round Completed!</h4>
                <p className="text-sm text-slate-400">
                  You scored <span className="font-bold text-emerald-400">{gameScore}</span> out of <span className="font-bold text-white">{categoryPairs.length}</span> in {categories.find(c => c.key === activeCategory)?.label}.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleRestartGame}
                  className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" /> Replay This Category
                </button>
                <button
                  onClick={() => setMode('study')}
                  className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <Layers className="w-4 h-4" /> Return to Study Mode
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
