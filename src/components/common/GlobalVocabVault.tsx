import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, Sparkles, Volume2, Plus, Check, X, 
  Trash2, Download, Search, Filter, RotateCw, 
  Award, ChevronRight, Brain, Layers, ExternalLink, BookmarkCheck
} from 'lucide-react';
import { 
  getSavedVocabWords, 
  saveVocabWord, 
  removeSavedVocabWord, 
  updateWordMastery, 
  lookupWordIntelligence, 
  CURATED_VOCAB_DICTIONARY
} from '../../services/vocabVaultService';
import type { VocabWord } from '../../services/vocabVaultService';
import confetti from 'canvas-confetti';

export const GlobalVocabVault: React.FC = () => {
  const [savedWords, setSavedWords] = useState<VocabWord[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModalTab, setActiveModalTab] = useState<'words' | 'flashcards' | 'sentence' | 'explore'>('words');
  
  // In-text selection popup states
  const [selectedWordData, setSelectedWordData] = useState<any | null>(null);
  const [popupPos, setPopupPos] = useState<{ x: number; y: number } | null>(null);
  const [isSavedInPopup, setIsSavedInPopup] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Search & Filter in Modal
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCefr, setFilterCefr] = useState<string>('all');
  const [filterMastery, setFilterMastery] = useState<string>('all');

  // Flashcards state
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  // Sentence Builder state
  const [sentenceTargetWord, setSentenceTargetWord] = useState<VocabWord | null>(null);
  const [userSentenceInput, setUserSentenceInput] = useState('');
  const [sentenceFeedback, setSentenceFeedback] = useState<string | null>(null);

  const popupRef = useRef<HTMLDivElement | null>(null);

  // Load and subscribe to LocalStorage updates
  useEffect(() => {
    setSavedWords(getSavedVocabWords());

    const handleVaultUpdate = (e: any) => {
      setSavedWords(e.detail || getSavedVocabWords());
    };

    window.addEventListener('vocab-vault-updated', handleVaultUpdate);
    return () => {
      window.removeEventListener('vocab-vault-updated', handleVaultUpdate);
    };
  }, []);

  // Global In-Text Double-Click & Selection Listener
  useEffect(() => {
    const handleMouseUp = (e: MouseEvent) => {
      // If clicking inside popup or modal, do nothing
      if (popupRef.current && popupRef.current.contains(e.target as Node)) {
        return;
      }

      const selection = window.getSelection();
      if (!selection || selection.isCollapsed) {
        // Clear popup if selection is dismissed
        if (popupPos && !popupRef.current?.contains(e.target as Node)) {
          setSelectedWordData(null);
          setPopupPos(null);
        }
        return;
      }

      const rawText = selection.toString().trim();
      // Only process single clean words (2 to 30 characters)
      if (rawText.length >= 2 && rawText.length <= 30 && /^[a-zA-Z-]+$/.test(rawText)) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();

        // Calculate intelligence
        const intel = lookupWordIntelligence(rawText);
        const isAlreadySaved = getSavedVocabWords().some(w => w.word.toLowerCase() === rawText.toLowerCase());

        setSelectedWordData(intel);
        setIsSavedInPopup(isAlreadySaved);

        // Position popup centered above selection
        const popupX = Math.max(10, Math.min(window.innerWidth - 320, rect.left + rect.width / 2 - 150));
        const popupY = rect.top > 200 ? rect.top - 170 : rect.bottom + 10;

        setPopupPos({
          x: popupX,
          y: popupY + window.scrollY
        });
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [popupPos]);

  // Audio Pronunciation using Browser Web Speech API
  const handleSpeak = (text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-GB';
    utterance.rate = 0.9;
    setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  // 1-Click Save from floating popup
  const handleSaveFromPopup = () => {
    if (!selectedWordData) return;
    saveVocabWord(selectedWordData);
    setIsSavedInPopup(true);
    confetti({ particleCount: 25, spread: 45, origin: { y: 0.8 } });
  };

  // Filtered saved words list
  const filteredWords = savedWords.filter(w => {
    const matchQuery = w.word.toLowerCase().includes(searchQuery.toLowerCase()) || 
                       w.bengaliMeaning.includes(searchQuery) ||
                       w.definition.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCefr = filterCefr === 'all' || w.cefrLevel === filterCefr;
    const matchMastery = filterMastery === 'all' || w.masteryLevel === filterMastery;
    return matchQuery && matchCefr && matchMastery;
  });

  // Export to Anki / JSON
  const handleExportJson = () => {
    const dataStr = JSON.stringify(savedWords, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dhshishir_vocab_vault_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Validate Sentence in Sentence Builder
  const handleValidateSentence = () => {
    if (!sentenceTargetWord || !userSentenceInput.trim()) return;
    const target = sentenceTargetWord.word.toLowerCase();
    const input = userSentenceInput.toLowerCase();

    if (!input.includes(target)) {
      setSentenceFeedback(`⚠️ Please include the exact target word "${sentenceTargetWord.word}" in your sentence.`);
      return;
    }

    if (userSentenceInput.trim().split(/\s+/).length < 6) {
      setSentenceFeedback(`⚠️ Try writing an expanded executive sentence with at least 6-8 words.`);
      return;
    }

    setSentenceFeedback(`🎉 Excellent! You have actively synthesized "${sentenceTargetWord.word}" into a structured sentence.`);
    updateWordMastery(sentenceTargetWord.id, 'mastered');
    confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
  };

  return (
    <>
      {/* 1. GLOBAL FLOATING IN-TEXT INTELLIGENCE POPUP */}
      {selectedWordData && popupPos && (
        <div
          ref={popupRef}
          style={{ top: `${popupPos.y}px`, left: `${popupPos.x}px` }}
          className="fixed z-50 w-76 sm:w-84 bg-slate-950/95 backdrop-blur-md text-white rounded-2xl border border-teal-500/40 shadow-2xl p-4 animate-in fade-in zoom-in-95 duration-150 space-y-2.5"
        >
          {/* Header with Word, CEFR & Audio */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-2">
              <span className="text-base font-black text-white capitalize">{selectedWordData.word}</span>
              <span className="text-[10px] font-mono text-slate-400">{selectedWordData.phonetic}</span>
              <span className="px-1.5 py-0.2 rounded bg-teal-500/20 text-teal-300 border border-teal-400/30 text-[9px] font-bold">
                {selectedWordData.cefrLevel}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => handleSpeak(selectedWordData.word)}
                className="p-1 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition cursor-pointer"
                title="Pronounce Word"
              >
                <Volume2 className={`w-3.5 h-3.5 ${isSpeaking ? 'text-teal-400 animate-pulse' : ''}`} />
              </button>
              <button
                onClick={() => {
                  setSelectedWordData(null);
                  setPopupPos(null);
                }}
                className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Bengali Meaning */}
          <div className="text-xs text-amber-300 font-medium">
            🇧🇩 {selectedWordData.bengaliMeaning}
          </div>

          {/* Definition */}
          <div className="text-[11px] text-slate-300 leading-relaxed line-clamp-2">
            {selectedWordData.definition}
          </div>

          {/* Collocation preview */}
          {selectedWordData.collocations?.length > 0 && (
            <div className="text-[10px] text-slate-400 font-mono line-clamp-1">
              Collocation: <span className="text-teal-300 font-semibold">{selectedWordData.collocations[0]}</span>
            </div>
          )}

          {/* Action Bar */}
          <div className="flex items-center justify-between pt-1 border-t border-white/10 gap-2">
            <button
              onClick={() => {
                setSelectedWordData(null);
                setPopupPos(null);
                setIsModalOpen(true);
              }}
              className="text-[10px] text-slate-400 hover:text-teal-300 font-bold flex items-center gap-1 transition cursor-pointer"
            >
              <BookOpen className="w-3 h-3" />
              <span>Open Vault</span>
            </button>

            <button
              onClick={handleSaveFromPopup}
              disabled={isSavedInPopup}
              className={`px-3 py-1.5 rounded-xl text-[11px] font-bold flex items-center gap-1 transition cursor-pointer ${
                isSavedInPopup
                  ? 'bg-emerald-600 text-white cursor-default'
                  : 'bg-teal-700 hover:bg-teal-600 text-white shadow-md'
              }`}
            >
              {isSavedInPopup ? <Check className="w-3 h-3 text-white" /> : <Plus className="w-3 h-3" />}
              <span>{isSavedInPopup ? 'Saved in Vault' : 'Save to Vault'}</span>
            </button>
          </div>
        </div>
      )}

      {/* 2. FLOATING BOTTOM-RIGHT QUICK VAULT BADGE */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-3.5 py-2.5 bg-slate-950 hover:bg-teal-950 text-white rounded-2xl border border-teal-500/30 shadow-2xl flex items-center gap-2 transition-all transform hover:scale-105 cursor-pointer group"
          title="Open Personal IELTS & Diplomatic Vocabulary Vault"
        >
          <div className="relative">
            <BookOpen className="w-4 h-4 text-teal-400 group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1.5 -right-1.5 w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          </div>
          <span className="text-xs font-bold text-slate-200">Vocab Vault</span>
          <span className="px-1.5 py-0.2 rounded-full bg-teal-500/30 text-teal-300 border border-teal-400/40 text-[10px] font-mono font-bold">
            {savedWords.length}
          </span>
        </button>
      </div>

      {/* 3. FULL INTERACTIVE VOCAB VAULT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="p-5 sm:p-6 bg-gradient-to-r from-slate-950 via-slate-900 to-teal-950 text-white flex items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-400" /> IELTS Band 8.5 & C1/C2 Lexicon
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {savedWords.length} Saved Words
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-black text-white">
                  Personal IELTS & Diplomatic Vocabulary Vault
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleExportJson}
                  className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white rounded-xl text-xs font-bold transition flex items-center gap-1 cursor-pointer"
                  title="Export to Anki / JSON"
                >
                  <Download className="w-3.5 h-3.5 text-teal-400" />
                  <span className="hidden sm:inline">Export</span>
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Navigation Tabs */}
            <div className="flex flex-wrap items-center gap-2 px-6 pt-3 border-b border-slate-200 bg-slate-50">
              <button
                onClick={() => setActiveModalTab('words')}
                className={`px-4 py-2.5 rounded-t-2xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer border-t border-x ${
                  activeModalTab === 'words'
                    ? 'bg-white text-teal-950 border-slate-200 shadow-xs'
                    : 'bg-transparent text-slate-600 hover:text-slate-900 border-transparent'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-teal-800" /> 1. My Saved Words ({savedWords.length})
              </button>

              <button
                onClick={() => setActiveModalTab('flashcards')}
                className={`px-4 py-2.5 rounded-t-2xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer border-t border-x ${
                  activeModalTab === 'flashcards'
                    ? 'bg-white text-teal-950 border-slate-200 shadow-xs'
                    : 'bg-transparent text-slate-600 hover:text-slate-900 border-transparent'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-amber-600" /> 2. Spaced Flashcards
              </button>

              <button
                onClick={() => setActiveModalTab('sentence')}
                className={`px-4 py-2.5 rounded-t-2xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer border-t border-x ${
                  activeModalTab === 'sentence'
                    ? 'bg-white text-teal-950 border-slate-200 shadow-xs'
                    : 'bg-transparent text-slate-600 hover:text-slate-900 border-transparent'
                }`}
              >
                <Brain className="w-3.5 h-3.5 text-sky-600" /> 3. Sentence Builder
              </button>

              <button
                onClick={() => setActiveModalTab('explore')}
                className={`px-4 py-2.5 rounded-t-2xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer border-t border-x ${
                  activeModalTab === 'explore'
                    ? 'bg-white text-teal-950 border-slate-200 shadow-xs'
                    : 'bg-transparent text-slate-600 hover:text-slate-900 border-transparent'
                }`}
              >
                <Award className="w-3.5 h-3.5 text-emerald-600" /> 4. Explore 60+ C1/C2 Dictionary
              </button>
            </div>

            {/* Modal Body Content Area */}
            <div className="p-6 overflow-y-auto flex-1 space-y-6">

              {/* TAB 1: MY SAVED WORDS LIST */}
              {activeModalTab === 'words' && (
                <div className="space-y-4">
                  {/* Search and Filter bar */}
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <div className="relative flex-1 w-full">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search your saved vocabulary, collocations, or Bengali meanings..."
                        className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 text-xs text-slate-900 bg-slate-50 focus:bg-white"
                      />
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <select
                        value={filterCefr}
                        onChange={(e) => setFilterCefr(e.target.value)}
                        className="px-3 py-2 rounded-xl border border-slate-200 text-xs bg-slate-50 text-slate-700 font-bold"
                      >
                        <option value="all">All CEFR (B2/C1/C2)</option>
                        <option value="B2">B2 Level</option>
                        <option value="C1">C1 Level</option>
                        <option value="C2">C2 Mastery</option>
                      </select>

                      <select
                        value={filterMastery}
                        onChange={(e) => setFilterMastery(e.target.value)}
                        className="px-3 py-2 rounded-xl border border-slate-200 text-xs bg-slate-50 text-slate-700 font-bold"
                      >
                        <option value="all">All Mastery</option>
                        <option value="new">New</option>
                        <option value="learning">Learning</option>
                        <option value="mastered">Mastered</option>
                      </select>
                    </div>
                  </div>

                  {/* Word Cards */}
                  {filteredWords.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {filteredWords.map((item) => (
                        <div key={item.id} className="p-4 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200 space-y-2.5 transition">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="text-sm font-black text-slate-900 capitalize">{item.word}</h3>
                                <span className="text-[10px] font-mono text-slate-500">{item.phonetic}</span>
                                <span className="px-1.5 py-0.2 rounded bg-teal-100 text-teal-900 text-[9px] font-bold">
                                  {item.cefrLevel}
                                </span>
                              </div>
                              <div className="text-xs text-amber-800 font-bold mt-0.5">
                                {item.bengaliMeaning}
                              </div>
                            </div>

                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => handleSpeak(item.word)}
                                className="p-1.5 rounded-lg bg-white hover:bg-teal-50 text-slate-600 hover:text-teal-900 border border-slate-200 transition cursor-pointer"
                                title="Listen"
                              >
                                <Volume2 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => removeSavedVocabWord(item.id)}
                                className="p-1.5 rounded-lg bg-white hover:bg-rose-50 text-slate-400 hover:text-rose-600 border border-slate-200 transition cursor-pointer"
                                title="Remove"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>

                          <p className="text-xs text-slate-600 leading-relaxed">
                            {item.definition}
                          </p>

                          {item.collocations?.length > 0 && (
                            <div className="flex flex-wrap gap-1">
                              {item.collocations.map((c, ci) => (
                                <span key={ci} className="text-[10px] px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200 font-mono">
                                  +{c}
                                </span>
                              ))}
                            </div>
                          )}

                          <div className="p-2 bg-white rounded-xl border border-slate-200 text-[11px] text-slate-700 font-serif italic">
                            "{item.exampleSentence}"
                          </div>

                          <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-200">
                            <span className="capitalize">Status: <strong className="text-teal-800">{item.masteryLevel}</strong></span>
                            <button
                              onClick={() => {
                                setSentenceTargetWord(item);
                                setActiveModalTab('sentence');
                              }}
                              className="text-teal-800 hover:text-teal-900 font-bold flex items-center gap-1 cursor-pointer"
                            >
                              <span>Write Sentence</span>
                              <ChevronRight className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-10 text-center bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                      <BookOpen className="w-8 h-8 text-slate-400 mx-auto" />
                      <h4 className="text-sm font-bold text-slate-800">No Saved Words Found</h4>
                      <p className="text-xs text-slate-500 max-w-md mx-auto">
                        Highlight or double-click any word while reading any article, diplomatic dossier, or blog post to instantly save it here! Or browse pre-curated terms in Tab 4.
                      </p>
                      <button
                        onClick={() => setActiveModalTab('explore')}
                        className="px-4 py-2 bg-teal-900 hover:bg-teal-800 text-white rounded-xl text-xs font-bold transition cursor-pointer"
                      >
                        Explore 60+ Curated Power Words
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: SPACED REPETITION FLASHCARDS */}
              {activeModalTab === 'flashcards' && (
                <div className="max-w-xl mx-auto space-y-6">
                  {savedWords.length > 0 ? (
                    (() => {
                      const currentCard = savedWords[currentCardIndex % savedWords.length];
                      return (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between text-xs text-slate-500 font-bold">
                            <span>Card {currentCardIndex + 1} of {savedWords.length}</span>
                            <span className="px-2 py-0.5 rounded bg-teal-50 text-teal-900 border border-teal-200">
                              {currentCard.cefrLevel} Level
                            </span>
                          </div>

                          {/* Flip Card Container */}
                          <div
                            onClick={() => setIsCardFlipped(!isCardFlipped)}
                            className="min-h-[260px] p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950 text-white shadow-xl border border-teal-500/30 flex flex-col items-center justify-center text-center cursor-pointer transition-transform hover:scale-[1.01] space-y-4 relative"
                          >
                            <div className="text-[10px] uppercase font-bold tracking-wider text-teal-300">
                              {isCardFlipped ? 'Word Details & Meaning' : 'Click to Flip Card'}
                            </div>

                            {!isCardFlipped ? (
                              <div className="space-y-2">
                                <h2 className="text-3xl font-black capitalize text-white tracking-wide">
                                  {currentCard.word}
                                </h2>
                                <div className="text-xs font-mono text-slate-400">{currentCard.phonetic}</div>
                                <div className="text-xs text-amber-300 font-medium">Click to reveal Bengali meaning & sentence</div>
                              </div>
                            ) : (
                              <div className="space-y-3 animate-in fade-in duration-200">
                                <div className="text-xl font-black text-amber-300">
                                  {currentCard.bengaliMeaning}
                                </div>
                                <p className="text-xs text-slate-200 max-w-md leading-relaxed">
                                  {currentCard.definition}
                                </p>
                                {currentCard.collocations?.length > 0 && (
                                  <div className="text-xs font-mono text-teal-300">
                                    Collocation: "{currentCard.collocations[0]}"
                                  </div>
                                )}
                                <div className="text-xs text-slate-300 italic font-serif bg-black/30 p-2 rounded-xl border border-white/10">
                                  "{currentCard.exampleSentence}"
                                </div>
                              </div>
                            )}

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSpeak(currentCard.word);
                              }}
                              className="absolute bottom-4 right-4 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-teal-300 transition cursor-pointer"
                            >
                              <Volume2 className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Leitner Grading Buttons */}
                          <div className="grid grid-cols-3 gap-2.5 pt-2">
                            <button
                              onClick={() => {
                                updateWordMastery(currentCard.id, 'new');
                                setIsCardFlipped(false);
                                setCurrentCardIndex((prev) => (prev + 1) % savedWords.length);
                              }}
                              className="p-3 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-900 border border-rose-200 font-bold text-xs transition cursor-pointer text-center"
                            >
                              🔴 Need Review
                            </button>

                            <button
                              onClick={() => {
                                updateWordMastery(currentCard.id, 'learning');
                                setIsCardFlipped(false);
                                setCurrentCardIndex((prev) => (prev + 1) % savedWords.length);
                              }}
                              className="p-3 rounded-2xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 font-bold text-xs transition cursor-pointer text-center"
                            >
                              🟡 Learning
                            </button>

                            <button
                              onClick={() => {
                                updateWordMastery(currentCard.id, 'mastered');
                                setIsCardFlipped(false);
                                setCurrentCardIndex((prev) => (prev + 1) % savedWords.length);
                                confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 } });
                              }}
                              className="p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 font-bold text-xs transition cursor-pointer text-center"
                            >
                              🟢 Mastered!
                            </button>
                          </div>
                        </div>
                      );
                    })()
                  ) : (
                    <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                      <p className="text-xs text-slate-500">Save words into your vault first to start Flashcards.</p>
                      <button
                        onClick={() => setActiveModalTab('explore')}
                        className="px-4 py-2 bg-teal-900 text-white rounded-xl text-xs font-bold cursor-pointer"
                      >
                        Explore Dictionary
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: IELTS SENTENCE BUILDER */}
              {activeModalTab === 'sentence' && (
                <div className="max-w-2xl mx-auto space-y-5">
                  <div className="space-y-1">
                    <h3 className="text-sm font-black text-slate-900">
                      IELTS Band 8.5 & Diplomatic Sentence Synthesizer
                    </h3>
                    <p className="text-xs text-slate-500">
                      Active synthesis is the fastest way to lock vocabulary into permanent memory.
                    </p>
                  </div>

                  {/* Word Selector */}
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                    <label className="block text-xs font-bold text-slate-700">Target Word to Synthesize:</label>
                    <div className="flex flex-wrap gap-1.5">
                      {savedWords.slice(0, 8).map((w) => (
                        <button
                          key={w.id}
                          onClick={() => {
                            setSentenceTargetWord(w);
                            setSentenceFeedback(null);
                          }}
                          className={`text-xs px-3 py-1 rounded-xl font-bold transition cursor-pointer ${
                            sentenceTargetWord?.id === w.id
                              ? 'bg-teal-900 text-white shadow-sm'
                              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {w.word} ({w.cefrLevel})
                        </button>
                      ))}
                    </div>
                  </div>

                  {sentenceTargetWord ? (
                    <div className="space-y-4">
                      <div className="p-4 bg-teal-50/80 rounded-2xl border border-teal-200 space-y-1">
                        <div className="text-xs font-bold text-teal-950 capitalize">
                          Target: {sentenceTargetWord.word} — <span className="text-amber-800">{sentenceTargetWord.bengaliMeaning}</span>
                        </div>
                        <div className="text-[11px] text-slate-600">
                          Collocations: {sentenceTargetWord.collocations.join(', ')}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-slate-800">
                          Type your executive sentence below:
                        </label>
                        <textarea
                          value={userSentenceInput}
                          onChange={(e) => setUserSentenceInput(e.target.value)}
                          rows={3}
                          placeholder={`Write a sentence using "${sentenceTargetWord.word}"...`}
                          className="w-full p-4 rounded-2xl border border-slate-300 font-serif text-xs text-slate-900 focus:ring-2 focus:ring-teal-700 bg-white"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-slate-500">
                          Words: {userSentenceInput.trim() ? userSentenceInput.trim().split(/\s+/).length : 0}
                        </span>
                        <button
                          onClick={handleValidateSentence}
                          className="px-6 py-2.5 bg-teal-900 hover:bg-teal-800 text-white rounded-xl text-xs font-bold transition cursor-pointer shadow-md"
                        >
                          Check & Validate Synthesis
                        </button>
                      </div>

                      {sentenceFeedback && (
                        <div className={`p-4 rounded-2xl text-xs border leading-relaxed ${
                          sentenceFeedback.startsWith('🎉') 
                            ? 'bg-emerald-50 text-emerald-900 border-emerald-200' 
                            : 'bg-amber-50 text-amber-900 border-amber-200'
                        }`}>
                          {sentenceFeedback}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="p-6 text-center text-xs text-slate-500 bg-slate-50 rounded-2xl border border-slate-200">
                      Select a word from the pills above to begin drafting your sentence.
                    </div>
                  )}
                </div>
              )}

              {/* TAB 4: EXPLORE 60+ CURATED C1/C2 DICTIONARY */}
              {activeModalTab === 'explore' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-black text-slate-900">Curated C1/C2 Geopolitical & Academic Dictionary</h3>
                      <p className="text-xs text-slate-500">1-click add high-impact vocabulary into your personal vault.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {Object.entries(CURATED_VOCAB_DICTIONARY).map(([key, item]) => {
                      const isAlreadySaved = savedWords.some(w => w.word.toLowerCase() === key.toLowerCase());
                      return (
                        <div key={key} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-black text-slate-900 capitalize">{item.word}</span>
                              <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-teal-100 text-teal-800">
                                {item.cefrLevel}
                              </span>
                            </div>
                            <div className="text-[11px] font-bold text-amber-800 mt-0.5">
                              {item.bengaliMeaning}
                            </div>
                            <p className="text-[10px] text-slate-600 line-clamp-2 mt-1 leading-relaxed">
                              {item.definition}
                            </p>
                          </div>

                          <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                            <button
                              onClick={() => handleSpeak(item.word)}
                              className="p-1 rounded text-slate-500 hover:text-slate-900 cursor-pointer"
                            >
                              <Volume2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => {
                                saveVocabWord(item as any);
                                confetti({ particleCount: 20, spread: 40, origin: { y: 0.7 } });
                              }}
                              disabled={isAlreadySaved}
                              className={`px-2.5 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1 transition cursor-pointer ${
                                isAlreadySaved
                                  ? 'bg-emerald-100 text-emerald-800 cursor-default'
                                  : 'bg-teal-800 hover:bg-teal-900 text-white'
                              }`}
                            >
                              {isAlreadySaved ? <BookmarkCheck className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                              <span>{isAlreadySaved ? 'In Vault' : 'Add'}</span>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      )}
    </>
  );
};
