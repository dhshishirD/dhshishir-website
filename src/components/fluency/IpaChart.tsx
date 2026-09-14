import React, { useState } from 'react';
import { IPA_PHONEMES_DATA, type IpaPhoneme } from '../../data/fluencyData';
import { playAudioWithFallback } from '../../utils/audioPlayer';
import { Volume2, Sparkles, HelpCircle, Mic } from 'lucide-react';

export const IpaChart: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePhoneme, setActivePhoneme] = useState<IpaPhoneme>(IPA_PHONEMES_DATA[0]);
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

  const handlePlayIsolatedSound = (phoneme: IpaPhoneme) => {
    setActivePhoneme(phoneme);
    // Tries to play studio recording phoneme-isolated-{symbol}.mp3 first, falls back to TTS
    const symbolSafe = phoneme.symbol.replace(/\//g, '').replace('ː', '-long');
    const audioUrl = `/audio/fluency/phonemes/phoneme-isolated-${symbolSafe}.mp3`;
    playAudioWithFallback(audioUrl, phoneme.symbol, true);
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
                ? 'bg-indigo-600 text-slate-900 shadow-md shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:text-slate-900 hover:border-slate-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Phoneme Grid Matrix (Left 7 Cols) */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 backdrop-blur-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-600 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-teal-800" /> Interactive Sound Matrix
            </h3>
            <span className="text-xs text-slate-600">{filteredPhonemes.length} Phonemes</span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5">
            {filteredPhonemes.map(phoneme => {
              const isSelected = activePhoneme.symbol === phoneme.symbol;
              return (
                <button
                  key={phoneme.symbol}
                  onClick={() => handlePlayIsolatedSound(phoneme)}
                  className={`p-3.5 rounded-2xl border text-center transition flex flex-col items-center justify-center gap-1 group cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-600 border-indigo-400 text-slate-900 shadow-lg shadow-xs scale-102'
                      : 'bg-white border-slate-200 text-slate-600 hover:border-slate-200 hover:bg-white'
                  }`}
                >
                  <span className={`text-xl sm:text-2xl font-black ${isSelected ? 'text-slate-900' : 'text-teal-800 group-hover:text-teal-900'}`}>
                    {phoneme.symbol}
                  </span>
                  <span className="text-[10px] font-medium text-slate-600 truncate max-w-full">
                    {phoneme.exampleWords[0]?.word}
                  </span>
                  <Volume2 className={`w-3.5 h-3.5 opacity-60 group-hover:opacity-100 ${isSelected ? 'text-slate-900' : 'text-teal-800'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Phoneme Detail & 3 Example Words Card (Right 5 Cols) */}
        <div className="lg:col-span-5 bg-white border border-slate-200 border border-teal-200 rounded-3xl p-6 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-md border border-teal-200">
                  {activePhoneme.categoryLabel}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-50 text-teal-800 border border-teal-200 flex items-center gap-1">
                  <Mic className="w-2.5 h-2.5" /> Studio Ready
                </span>
              </div>

              <h4 className="text-xl font-black text-slate-900 mt-1.5 flex items-center gap-2">
                <span className="text-teal-800 text-2xl font-mono">{activePhoneme.symbol}</span>
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">{activePhoneme.name}</p>
            </div>

            {/* Standalone Isolated Phoneme Sound Button */}
            <button
              onClick={() => handlePlayIsolatedSound(activePhoneme)}
              className="px-4 py-3 rounded-2xl bg-white border border-slate-200 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold flex flex-col items-center justify-center shadow-lg shadow-xs transition cursor-pointer"
              title="Play Isolated Phoneme Sound"
            >
              <Volume2 className="w-5 h-5" />
              <span className="text-[9px] font-black uppercase mt-0.5">Isolated Sound</span>
            </button>
          </div>

          {/* Bengali Contrast & Articulation Note */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-2">
            <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" /> বাঙালি শিক্ষার্থীদের জন্য উচ্চারণ নির্দেশিকা:
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-bangla">
              {activePhoneme.banglaContrast}
            </p>
          </div>

          {/* 3 Real Example Words with Click-to-Hear Audio */}
          <div className="space-y-2.5">
            <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              3 Example Words (Click to Hear):
            </div>
            
            <div className="space-y-2">
              {activePhoneme.exampleWords.map((item, index) => {
                const isItemPlaying = playingWord === item.word;
                return (
                  <div
                    key={index}
                    onClick={() => handlePlayWord(item.word)}
                    className="p-3 bg-white border border-slate-200 hover:border-teal-200/50 rounded-xl flex items-center justify-between group transition cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-teal-50 text-teal-800 border border-teal-200 flex items-center justify-center font-bold text-xs">
                        {index + 1}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 group-hover:text-teal-900 transition">
                          {item.word}
                        </div>
                        <div className="text-[11px] text-slate-600 font-mono">
                          {item.ipa} {item.meaningBn && <span className="text-slate-600 font-bangla">• {item.meaningBn}</span>}
                        </div>
                      </div>
                    </div>

                    <button
                      className={`p-2 rounded-lg transition ${
                        isItemPlaying 
                          ? 'bg-emerald-500 text-slate-950' 
                          : 'bg-white text-slate-600 group-hover:text-slate-900 group-hover:bg-indigo-600'
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
