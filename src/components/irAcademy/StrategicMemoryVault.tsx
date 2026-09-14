import React, { useState } from 'react';
import { MEMORY_VAULT_DATA } from '../../data/memoryVaultData';
import { 
  Volume2, 
  Filter, 
  Brain,
  ThumbsUp
} from 'lucide-react';
import { speakText } from '../../utils/audioPlayer';

export const StrategicMemoryVault: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [flippedCardIds, setFlippedCardIds] = useState<string[]>([]);
  const [masteredCardIds, setMasteredCardIds] = useState<string[]>([]);

  const categories = [
    'All',
    'IR Thinkers & Theories',
    'Seminal Treaties & Accords',
    'Chokepoints & Flashpoints',
    'Diplomatic Doctrines'
  ];

  const filteredCards = MEMORY_VAULT_DATA.filter(c => {
    return selectedCategory === 'All' || c.category === selectedCategory;
  });

  const toggleFlip = (id: string) => {
    setFlippedCardIds(prev => 
      prev.includes(id) ? prev.filter(cId => cId !== id) : [...prev, id]
    );
  };

  const toggleMastered = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setMasteredCardIds(prev => 
      prev.includes(id) ? prev.filter(cId => cId !== id) : [...prev, id]
    );
  };

  const handlePronounce = (text: string, e: React.MouseEvent) => {
    e.stopPropagation();
    speakText(text, true);
  };

  const masteryPercent = Math.round((masteredCardIds.length / (MEMORY_VAULT_DATA.length || 1)) * 100);

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header Banner Card */}
      <div className="p-6 sm:p-8 bg-white border border-slate-200 rounded-3xl space-y-4 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-teal-50 text-teal-900 text-xs font-bold border border-teal-200">
            <Brain className="w-3.5 h-3.5 text-teal-800" /> Interactive Diplomatic Memory Vault
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-950 font-serif-title">
            3D Diplomatic Flashcards & Spaced Repetition Drill
          </h2>
          <p className="text-xs text-slate-600 max-w-xl leading-relaxed">
            Master seminal international treaties, classical realist models, geographic chokepoints, and statecraft doctrines with interactive flip-card active recall.
          </p>
        </div>

        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center shrink-0 w-full md:w-auto">
          <div className="text-[10px] font-bold text-slate-500 uppercase">Mastery Progress</div>
          <div className="text-2xl font-black text-teal-900">{masteredCardIds.length} / {MEMORY_VAULT_DATA.length}</div>
          <div className="text-[10px] text-teal-800 font-bold font-mono">{masteryPercent}% Memorized</div>
        </div>
      </div>

      {/* Category Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1 shrink-0 pl-1">
          <Filter className="w-3.5 h-3.5 text-teal-800" /> Filter:
        </span>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
              selectedCategory === cat
                ? 'bg-teal-900 text-white font-bold shadow-2xs'
                : 'bg-white text-slate-700 hover:text-teal-900 border border-slate-200 hover:bg-teal-50/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3D Flashcards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCards.map(card => {
          const isFlipped = flippedCardIds.includes(card.id);
          const isMastered = masteredCardIds.includes(card.id);

          return (
            <div
              key={card.id}
              onClick={() => toggleFlip(card.id)}
              className={`p-6 rounded-3xl border transition-all duration-300 min-h-[280px] flex flex-col justify-between cursor-pointer text-left relative shadow-2xs hover:shadow-md ${
                isFlipped
                  ? 'bg-teal-950 text-white border-teal-800'
                  : 'bg-white text-slate-900 border-slate-200 hover:border-teal-300'
              }`}
            >
              {/* Card Top Category & Actions */}
              <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100/20">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  isFlipped ? 'bg-teal-900 text-teal-200 border border-teal-700' : 'bg-teal-50 text-teal-900 border border-teal-200'
                }`}>
                  {card.category}
                </span>

                <div className="flex items-center gap-1">
                  <button
                    onClick={(e) => handlePronounce(card.termOrTitle, e)}
                    className={`p-1.5 rounded-lg transition cursor-pointer ${
                      isFlipped ? 'hover:bg-teal-900 text-teal-300' : 'hover:bg-slate-100 text-slate-600'
                    }`}
                    title="Pronounce"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={(e) => toggleMastered(card.id, e)}
                    className={`p-1.5 rounded-lg transition cursor-pointer ${
                      isMastered 
                        ? 'text-amber-400 bg-amber-950/50' 
                        : isFlipped ? 'text-slate-400 hover:text-white' : 'text-slate-400 hover:text-teal-900'
                    }`}
                    title={isMastered ? 'Marked as Mastered' : 'Mark as Mastered'}
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Card Middle Content (Front vs Back) */}
              {!isFlipped ? (
                <div className="space-y-3 my-auto py-4">
                  <div>
                    <h3 className="text-xl font-black font-serif-title text-slate-950 tracking-tight">
                      {card.termOrTitle}
                    </h3>
                    {card.pronunciationIpa && (
                      <div className="text-xs font-mono text-teal-800 font-semibold">{card.pronunciationIpa}</div>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {card.frontSummary}
                  </p>
                </div>
              ) : (
                <div className="space-y-2.5 my-auto py-2 text-xs text-slate-200">
                  <p className="leading-relaxed text-[11px] bg-teal-900/60 p-2.5 rounded-xl border border-teal-800">
                    <strong className="text-teal-300">Core Rule: </strong>{card.backDeepDive.coreDefinition}
                  </p>
                  <p className="text-[11px] font-bangla text-teal-200 font-medium">
                    {card.backDeepDive.banglaMeaning}
                  </p>
                  <div className="text-[10px] text-slate-300">
                    <strong className="text-teal-400">Application: </strong>{card.backDeepDive.diplomaticApplication}
                  </div>
                </div>
              )}

              {/* Card Bottom Hint */}
              <div className={`flex items-center justify-between text-[10px] font-semibold pt-2 border-t ${
                isFlipped ? 'border-teal-900 text-teal-300' : 'border-slate-100 text-slate-400'
              }`}>
                <span>{isFlipped ? '✓ Click to Flip Back' : '↻ Click to Reveal Deep Dive'}</span>
                <span className="font-mono">{card.backDeepDive.seminalThinkerOrYear}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
