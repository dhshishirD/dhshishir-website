import React, { useState } from 'react';
import { IPA_PHONEMES_DATA, type IpaPhoneme } from '../../data/fluencyData';
import { playAudioWithFallback } from '../../utils/audioPlayer';
import { Volume2, Sparkles, HelpCircle } from 'lucide-react';

export const IpaChart: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePhoneme, setActivePhoneme] = useState<IpaPhoneme>(IPA_PHONEMES_DATA[0]);
  // isPlaying state
  const [playingWord, setPlayingWord] = useState<string | null>(null);

  const categories = [
    { key: 'all', label: 'All Phonemes' },
    { key: 'short_vowels', label: 'Short Vowels' },
    { key: 'long_vowels', label: 'Long Vowels' },
    { key: 'diphthongs', label: 'Diphthongs' },
    { key: 'consonants_voiced', label: 'Voiced Consonants' },
    { key: 'consonants_voiceless', label: 'Voiceless Consonants' }
  ];

  const filteredPhonemes = selectedCategory === 'all'
    ? IPA_PHONEMES_DATA
    : IPA_PHONEMES_DATA.filter(p => p.category === selectedCategory);

  const handlePlayPhoneme = async (phoneme: IpaPhoneme) => {
    setActivePhoneme(phoneme);
    
    // Plays the phoneme sound or representative sample
    const sampleWord = phoneme.exampleWords[0]?.word || phoneme.symbol;
    await playAudioWithFallback(undefined, sampleWord, true);
    
  };

  const handlePlayWord = async (word: string) => {
    setPlayingWord(word);
    await playAudioWithFallback(undefined, word, false);
    setPlayingWord(null);
  };

  return (
    <div className="space-y-8">
      {/* Category Filter Navigation */}
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
              selectedCategory === cat.key
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Phoneme Grid Matrix (Left 7 Cols) */}
        <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-3xl p-5 sm:p-6 backdrop-blur-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" /> Interactive Sound Matrix
            </h3>
            <span className="text-xs text-slate-500">{filteredPhonemes.length} Phonemes</span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
            {filteredPhonemes.map(phoneme => {
              const isSelected = activePhoneme.symbol === phoneme.symbol;
              return (
                <button
                  key={phoneme.symbol}
                  onClick={() => handlePlayPhoneme(phoneme)}
                  className={`p-3.5 rounded-2xl border text-center transition flex flex-col items-center justify-center gap-1 group cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-600/40 scale-102'
                      : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  <span className={`text-xl sm:text-2xl font-black ${isSelected ? 'text-white' : 'text-emerald-400 group-hover:text-emerald-300'}`}>
                    {phoneme.symbol}
                  </span>
                  <span className="text-[10px] font-medium text-slate-400 truncate max-w-full">
                    {phoneme.exampleWords[0]?.word}
                  </span>
                  <Volume2 className={`w-3.5 h-3.5 opacity-60 group-hover:opacity-100 ${isSelected ? 'text-white' : 'text-indigo-400'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Phoneme Detail & 3 Example Words Card (Right 5 Cols) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-indigo-950/40 border border-indigo-500/30 rounded-3xl p-6 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
                {activePhoneme.categoryLabel}
              </span>
              <h4 className="text-xl font-black text-white mt-1.5 flex items-center gap-2">
                <span className="text-emerald-400 text-2xl font-mono">{activePhoneme.symbol}</span>
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">{activePhoneme.name}</p>
            </div>

            <button
              onClick={() => handlePlayPhoneme(activePhoneme)}
              className="w-12 h-12 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold flex items-center justify-center shadow-lg shadow-emerald-500/20 transition cursor-pointer"
              title="Play Phoneme Sound"
            >
              <Volume2 className="w-5 h-5" />
            </button>
          </div>

          {/* Bengali Contrast & Articulation Note */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 space-y-2">
            <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" /> বাঙালি শিক্ষার্থীদের জন্য উচ্চারণ নির্দেশিকা:
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-bangla">
              {activePhoneme.banglaContrast}
            </p>
          </div>

          {/* 3 Real Example Words with Click-to-Hear Audio */}
          <div className="space-y-2.5">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              3 Example Words (Click to Hear):
            </div>
            
            <div className="space-y-2">
              {activePhoneme.exampleWords.map((item, index) => {
                const isItemPlaying = playingWord === item.word;
                return (
                  <div
                    key={index}
                    onClick={() => handlePlayWord(item.word)}
                    className="p-3 bg-slate-950/60 border border-slate-800/80 hover:border-emerald-500/50 rounded-xl flex items-center justify-between group transition cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center font-bold text-xs">
                        {index + 1}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition">
                          {item.word}
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono">
                          {item.ipa} {item.meaningBn && <span className="text-slate-500 font-bangla">• {item.meaningBn}</span>}
                        </div>
                      </div>
                    </div>

                    <button
                      className={`p-2 rounded-lg transition ${
                        isItemPlaying 
                          ? 'bg-emerald-500 text-slate-950' 
                          : 'bg-slate-900 text-slate-400 group-hover:text-white group-hover:bg-indigo-600'
                      }`}
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
