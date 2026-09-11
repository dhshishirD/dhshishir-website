import React, { useState } from 'react';
import { STRESSED_WORDS_DATA, type StressedWord } from '../../data/fluencyData';
import { playAudioWithFallback } from '../../utils/audioPlayer';
import { Volume2, Search, ArrowRightLeft } from 'lucide-react';

export const WordStressVisualizer: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'ALL' | 'A' | 'B' | 'C' | 'D' | 'E'>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  // playing state
  // Store toggled shift states (wordId -> 'noun' | 'verb')
  const [shiftModes, setShiftModes] = useState<Record<string, 'noun' | 'verb'>>({});

  const sections = [
    { key: 'ALL', label: 'All Sections' },
    { key: 'A', label: 'Section A: Noun/Verb Shifts (30 Pairs)' },
    { key: 'B', label: 'Section B: Suffix Rules (-tion, -ic, -ity)' },
    { key: 'C', label: 'Section C: Academic & Professional Words' },
    { key: 'D', label: 'Section D: Compound Words' },
    { key: 'E', label: 'Section E: Prefix Shift & Tone Rules' }
  ];

  const filteredWords = STRESSED_WORDS_DATA.filter(item => {
    const matchesSection = activeSection === 'ALL' || item.section === activeSection;
    const matchesSearch = item.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.sectionName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSection && matchesSearch;
  });

  const toggleShiftMode = (wordId: string) => {
    setShiftModes(prev => ({
      ...prev,
      [wordId]: prev[wordId] === 'verb' ? 'noun' : 'verb'
    }));
  };

  const handlePlayStressAudio = async (item: StressedWord) => {
    
    // isVerb
    
    // In actual studio audio this plays specific noun or verb MP3
    // In fallback speech it pronounces the word clearly
    await playAudioWithFallback(undefined, item.word, false);
    
  };

  return (
    <div className="space-y-8">
      {/* Header & Search Bar */}
      <div className="max-w-2xl mx-auto space-y-4 text-center">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Search word (e.g., record, education, development, object)..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-white focus:border-indigo-500 outline-none shadow-lg placeholder:text-slate-500"
          />
        </div>

        {/* Section Filter Pills */}
        <div className="flex flex-wrap gap-2 justify-center">
          {sections.map(sec => (
            <button
              key={sec.key}
              onClick={() => setActiveSection(sec.key as any)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeSection === sec.key
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {sec.label}
            </button>
          ))}
        </div>
      </div>

      {/* Word Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredWords.map(item => {
          const isShift = item.isShiftPair;
          const currentMode = shiftModes[item.id] || 'noun';
          const isVerb = currentMode === 'verb';

          const activeSyllables = isVerb && item.verbVariant ? item.verbVariant.syllables : item.syllables;
          const activeStressedIndex = isVerb && item.verbVariant ? item.verbVariant.stressedIndex : item.stressedIndex;
          const activeMeaning = isVerb && item.verbVariant ? item.verbVariant.meaningBn : item.meaningBn;

          return (
            <div
              key={item.id}
              className="bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 rounded-3xl p-5 transition space-y-4 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Card Header & Section Tag */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-950 px-2.5 py-0.5 rounded-md border border-slate-800">
                    Sec {item.section}
                  </span>

                  {isShift && (
                    <button
                      onClick={() => toggleShiftMode(item.id)}
                      className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/20 flex items-center gap-1.5 transition cursor-pointer"
                    >
                      <ArrowRightLeft className="w-3 h-3 text-indigo-400" />
                      <span>Switch: {isVerb ? 'Verb' : 'Noun'}</span>
                    </button>
                  )}
                </div>

                {/* Word Title & Meaning */}
                <div>
                  <h4 className="text-xl font-black text-white capitalize flex items-center gap-2">
                    <span>{item.word}</span>
                    {isShift && (
                      <span className={`text-xs px-2 py-0.5 rounded font-bold uppercase ${
                        isVerb ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      }`}>
                        {isVerb ? 'Verb' : 'Noun'}
                      </span>
                    )}
                  </h4>
                  {activeMeaning && (
                    <div className="text-xs text-slate-400 mt-0.5 font-bangla">
                      {activeMeaning}
                    </div>
                  )}
                </div>

                {/* Visual Syllable Breakdown with Stressed Syllable Highlighting */}
                <div className="flex items-center gap-1.5 flex-wrap pt-1">
                  {activeSyllables.map((syl, sIdx) => {
                    const isStressed = sIdx === activeStressedIndex;
                    return (
                      <span
                        key={sIdx}
                        className={`px-3 py-1.5 rounded-xl font-mono text-sm transition font-black ${
                          isStressed
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-md shadow-emerald-500/30 scale-105 ring-2 ring-emerald-400'
                            : 'bg-slate-950 text-slate-400 border border-slate-800'
                        }`}
                      >
                        {syl}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Audio Play Trigger */}
              <button
                onClick={() => handlePlayStressAudio(item)}
                className="w-full py-2.5 bg-slate-950 hover:bg-indigo-600 text-slate-300 hover:text-white rounded-xl text-xs font-bold border border-slate-800 hover:border-indigo-500 flex items-center justify-center gap-2 transition cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Hear Stressed Pronunciation</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
