import React, { useState } from 'react';
import { STRESSED_WORDS_DATA } from '../../data/fluencyData';
import { lookupPhonetics, type LookupResult } from '../../utils/phoneticLookup';
import { playAudioWithFallback } from '../../utils/audioPlayer';
import { Volume2, Search, ArrowRightLeft, Sparkles, Cpu } from 'lucide-react';

export const WordStressVisualizer: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'ALL' | 'A' | 'B' | 'C' | 'D' | 'E'>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [shiftModes, setShiftModes] = useState<Record<string, 'noun' | 'verb'>>({});

  const sections = [
    { key: 'ALL', label: 'All Studio Sections' },
    { key: 'A', label: 'Section A: Noun/Verb Shifts (30 Pairs)' },
    { key: 'B', label: 'Section B: Suffix Rules (-tion, -ic, -ity)' },
    { key: 'C', label: 'Section C: Academic & Professional' },
    { key: 'D', label: 'Section D: Compound Words' },
    { key: 'E', label: 'Section E: Prefix Shift & Tone Rules' }
  ];

  // Studio curated words filter
  const filteredStudioWords = STRESSED_WORDS_DATA.filter(item => {
    const matchesSection = activeSection === 'ALL' || item.section === activeSection;
    const matchesSearch = item.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.sectionName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSection && matchesSearch;
  });

  // Check if search query matches any word outside curated list (Unlimited Lookup Tier)
  const isSearchActive = searchQuery.trim().length > 1;
  const isExactStudioMatch = STRESSED_WORDS_DATA.some(w => w.word.toLowerCase() === searchQuery.trim().toLowerCase());
  const aiLookupResult: LookupResult | null = isSearchActive && !isExactStudioMatch
    ? lookupPhonetics(searchQuery)
    : null;

  const toggleShiftMode = (wordId: string) => {
    setShiftModes(prev => ({
      ...prev,
      [wordId]: prev[wordId] === 'verb' ? 'noun' : 'verb'
    }));
  };

  const handlePlayStressAudio = (word: string) => {
    playAudioWithFallback(undefined, word, false);
  };

  return (
    <div className="space-y-8">
      {/* Header & Two-Tier Search Box */}
      <div className="max-w-2xl mx-auto space-y-4 text-center">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Type ANY English word (e.g. technology, university, communication, record)..."
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

      {/* UNLIMITED LOOKUP TIER (AI / CMUDICT RESULT) */}
      {aiLookupResult && (
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-purple-950/60 via-slate-900 to-indigo-950/60 border border-purple-500/40 rounded-3xl p-6 shadow-2xl space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-purple-500/20 pb-3">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center gap-1">
                <Cpu className="w-3 h-3 text-purple-400" /> Unlimited AI Lookup Tier
              </span>
              <span className="text-xs text-slate-400">CMUDict Phonetic Engine</span>
            </div>
            <span className="text-xs font-mono text-purple-300">{aiLookupResult.ipa}</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-2xl font-black text-white capitalize">{aiLookupResult.word}</h4>
              <div className="text-xs text-slate-400 mt-1">
                Primary stress identified on syllable <span className="font-bold text-purple-300">#{aiLookupResult.stressedIndex + 1}</span>
              </div>
            </div>

            {/* Syllables pill view */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {aiLookupResult.syllables.map((syl, idx) => {
                const isStressed = idx === aiLookupResult.stressedIndex;
                return (
                  <span
                    key={idx}
                    className={`px-3.5 py-1.5 rounded-xl font-mono text-sm font-black transition ${
                      isStressed
                        ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/40 ring-2 ring-purple-400 scale-105'
                        : 'bg-slate-950 text-slate-400 border border-slate-800'
                    }`}
                  >
                    {syl}
                  </span>
                );
              })}
            </div>
          </div>

          <button
            onClick={() => handlePlayStressAudio(aiLookupResult.word)}
            className="w-full py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer shadow-md shadow-purple-600/20"
          >
            <Volume2 className="w-4 h-4" />
            <span>Hear AI Phonetic Pronunciation</span>
          </button>
        </div>
      )}

      {/* STUDIO TIER CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredStudioWords.map(item => {
          const isShift = item.isShiftPair;
          const currentMode = shiftModes[item.id] || 'noun';
          const isVerb = currentMode === 'verb';

          const activeSyllables = isVerb && item.verbVariant ? item.verbVariant.syllables : item.syllables;
          const activeStressedIndex = isVerb && item.verbVariant ? item.verbVariant.stressedIndex : item.stressedIndex;
          const activeMeaning = isVerb && item.verbVariant ? item.verbVariant.meaningBn : item.meaningBn;

          return (
            <div
              key={item.id}
              className="bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 rounded-3xl p-5 transition space-y-4 shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-3">
                {/* Card Header & Studio Verified Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/20 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-emerald-400" /> Studio Verified
                    </span>
                    <span className="text-[10px] text-slate-500">Sec {item.section}</span>
                  </div>

                  {isShift && (
                    <button
                      onClick={() => toggleShiftMode(item.id)}
                      className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/20 flex items-center gap-1.5 transition cursor-pointer"
                    >
                      <ArrowRightLeft className="w-3 h-3 text-indigo-400" />
                      <span>{isVerb ? 'Verb' : 'Noun'}</span>
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
                onClick={() => handlePlayStressAudio(item.word)}
                className="w-full py-2.5 bg-slate-950 hover:bg-emerald-600 text-slate-300 hover:text-white rounded-xl text-xs font-bold border border-slate-800 hover:border-emerald-500 flex items-center justify-center gap-2 transition cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5 text-emerald-400 group-hover:text-white" />
                <span>Hear Stressed Pronunciation</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
