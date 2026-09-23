import React, { useState, useMemo, useEffect } from 'react';
import { 
  Building2, Globe, Shield, Sparkles, Search, Filter, 
  ExternalLink, Download, FileText, ArrowRight, CheckCircle2, 
  Clock, Award, Briefcase, BookOpen, ChevronRight, HelpCircle, 
  Layers, MapPin, DollarSign, Calendar, Users, Zap, Check, Share2,
  GraduationCap, Volume2, BookmarkPlus, Play, RefreshCw, Trophy,
  Flame, Copy, CheckCheck
} from 'lucide-react';
import { 
  IELTS_VOCAB_TOPICS, 
  TOPIC_VOCAB_ITEMS, 
  exportTopicToAnkiTsv
} from '../../data/ieltsTopicVocabData';
import type { 
  TopicVocabItem, 
  VocabTopic
} from '../../data/ieltsTopicVocabData';
import { 
  getSavedVocabWords, 
  saveVocabWord 
} from '../../services/vocabVaultService';
import confetti from 'canvas-confetti';

interface IeltsTopicVocabStudioProps {
  onNavigateIeltsHub?: () => void;
  onNavigateHome?: () => void;
}

export const IeltsTopicVocabStudio: React.FC<IeltsTopicVocabStudioProps> = ({
  onNavigateIeltsHub,
  onNavigateHome
}) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [savedWords, setSavedWords] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'vault' | 'collocation_game' | 'anki_guide'>('vault');

  // Load existing saved words from Vocab Vault store
  useEffect(() => {
    const existing = getSavedVocabWords();
    setSavedWords(existing.map(w => w.word.toLowerCase()));

    const handleVaultUpdate = (e: any) => {
      const updated = e.detail || getSavedVocabWords();
      setSavedWords(updated.map((w: any) => w.word.toLowerCase()));
    };
    window.addEventListener('vocab-vault-updated', handleVaultUpdate);
    return () => window.removeEventListener('vocab-vault-updated', handleVaultUpdate);
  }, []);

  // Collocation Speed Game State
  const [gameScore, setGameScore] = useState<number>(0);
  const [gameActive, setGameActive] = useState<boolean>(false);
  const [gameTimeLeft, setGameTimeLeft] = useState<number>(45);
  const [currentGameIndex, setCurrentGameIndex] = useState<number>(0);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  // Filtered Vocabulary Items
  const filteredItems = useMemo(() => {
    return TOPIC_VOCAB_ITEMS.filter(item => {
      const matchesTopic = selectedTopicId === 'all' || item.topicId === selectedTopicId;
      const matchesSearch = item.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.collocationPairs.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesLevel = selectedLevel === 'all' || item.cefrLevel === selectedLevel;
      return matchesTopic && matchesSearch && matchesLevel;
    });
  }, [selectedTopicId, searchQuery, selectedLevel]);

  // Web Speech Audio Playback
  const playAudio = (word: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.rate = 0.85; // Slightly slower for clear C1/C2 acoustic modeling
      utterance.lang = 'en-GB';
      window.speechSynthesis.speak(utterance);
    }
  };

  // Save Word to Personal Vocab Vault
  const handleSaveToVault = (item: TopicVocabItem) => {
    const cleanPos = (item.partOfSpeech.toLowerCase().includes('verb') ? 'verb'
      : item.partOfSpeech.toLowerCase().includes('adj') ? 'adjective'
      : item.partOfSpeech.toLowerCase().includes('adv') ? 'adverb'
      : item.partOfSpeech.toLowerCase().includes('phrase') ? 'phrase'
      : 'noun') as 'noun' | 'verb' | 'adjective' | 'adverb' | 'phrase';

    saveVocabWord({
      word: item.word,
      phonetic: item.ipa,
      partOfSpeech: cleanPos,
      cefrLevel: (item.cefrLevel as 'B2' | 'C1' | 'C2') || 'C1',
      definition: item.definition,
      bengaliMeaning: `আইইএলটিএস উচ্চমানের শব্দ (${item.word})`,
      collocations: item.collocationPairs,
      formalSynonyms: item.collocationPairs.slice(0, 3),
      exampleSentence: item.band9Sentence,
      category: 'academic'
    });
    setSavedWords(prev => [...prev, item.id, item.word.toLowerCase()]);
    confetti({ particleCount: 35, spread: 50, origin: { y: 0.7 } });
  };

  // 1-Click Anki TSV Download
  const handleDownloadAnkiTsv = () => {
    const tsvContent = exportTopicToAnkiTsv(selectedTopicId === 'all' ? undefined : selectedTopicId);
    const blob = new Blob([tsvContent], { type: 'text/tab-separated-values;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `IELTS_Band9_Lexicon_${selectedTopicId.toUpperCase()}.tsv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // 1-Click Word Dossier (.doc) Download
  const handleDownloadWordDoc = () => {
    const docHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>IELTS Academic Band 9 Topic-Wise Lexicon Dossier | DH Shishir</title>
  <style>
    @page { size: letter; margin: 0.8in; }
    body { font-family: 'Calibri', Arial, sans-serif; color: #0f172a; line-height: 1.45; font-size: 10pt; }
    .header { border-bottom: 2pt solid #0f172a; padding-bottom: 8pt; text-align: center; margin-bottom: 16pt; }
    .title { font-size: 18pt; font-weight: bold; text-transform: uppercase; color: #0f172a; }
    .item-card { border: 1pt solid #cbd5e1; padding: 8pt; margin-bottom: 10pt; border-radius: 4pt; page-break-inside: avoid; }
    .word-title { font-size: 12pt; font-weight: bold; color: #0f172a; }
    .ipa { color: #0d9488; font-family: 'Times New Roman', serif; }
  </style>
</head>
<body>
  <div class="header">
    <div class="title">IELTS Band 9 Topic-Wise Lexical Dossier</div>
    <p>CEFR C1/C2 Academic Vocabulary, Collocations & Writing Task 2 Model Sentences • DH Shishir Master Hub</p>
  </div>

  ${filteredItems.map(item => `
    <div class="item-card">
      <div class="word-title">${item.word} <span class="ipa">${item.ipa}</span> [${item.cefrLevel} • ${item.partOfSpeech}]</div>
      <p><strong>Definition:</strong> ${item.definition}</p>
      <p><strong>Collocation Pairs:</strong> ${item.collocationPairs.join(', ')}</p>
      <p><strong>Band 5 vs Band 9:</strong> ${item.band5Contrast}</p>
      <p><strong>Band 9 Context Model:</strong> <i>"${item.band9Sentence}"</i></p>
    </div>
  `).join('')}
</body>
</html>`;

    const blob = new Blob(['\ufeff', docHtml], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `IELTS_Band9_Lexicon_${selectedTopicId.toUpperCase()}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-10 text-slate-900 animate-in fade-in duration-300">
      
      {/* 1. TOP HERO BANNER */}
      <div className="p-6 sm:p-10 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 text-white rounded-3xl shadow-2xl relative overflow-hidden space-y-6 border border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-400" /> IELTS Band 9 Special Vocabulary Studio
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> 10 Thematic C1/C2 Decks
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadAnkiTsv}
              className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-sm"
              title="Download Anki .tsv Flashcard Deck"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Anki Deck (.tsv)</span>
            </button>
            <button
              onClick={handleDownloadWordDoc}
              className="px-3.5 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer border border-white/20"
              title="Download Printable Word Document"
            >
              <FileText className="w-3.5 h-3.5 text-teal-300" />
              <span className="hidden sm:inline">Export Dossier (.doc)</span>
            </button>
          </div>
        </div>

        <div className="space-y-2 max-w-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
            IELTS Academic Band 9 Topic-Wise Vocabulary & Collocation Studio
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Eliminate lexical resource penalties in IELTS Writing Task 2 and Speaking. Master <strong>150+ high-yield CEFR C1/C2 collocations, phonetic audio models, and Band 5 vs Band 9 comparative syntax morphers</strong> across all 10 core exam themes.
          </p>
        </div>

        {/* SEARCH & FILTERS BAR */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search words, collocations, definitions, or exam topics (e.g., anthropogenic, sprawl, gig economy)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/10 text-white placeholder-slate-400 border border-white/15 focus:outline-none focus:ring-2 focus:ring-amber-400 text-xs sm:text-sm backdrop-blur-md"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {['all', 'C1', 'C2'].map(lvl => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer border ${
                  selectedLevel === lvl
                    ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-sm'
                    : 'bg-white/10 text-slate-300 border-white/10 hover:bg-white/20'
                }`}
              >
                {lvl === 'all' ? 'All CEFR' : lvl}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* 2. MODE TABS: VOCAB VAULT / COLLOCATION SPEED GAME / ANKI GUIDE */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('vault')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 transition cursor-pointer ${
              activeTab === 'vault'
                ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4 text-amber-900" />
            <span>1. Thematic Lexicon Studio ({filteredItems.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('collocation_game')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 transition cursor-pointer ${
              activeTab === 'collocation_game'
                ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Zap className="w-4 h-4 text-amber-600" />
            <span>2. ⚡ Speed Collocation Duel</span>
            <span className="px-1.5 py-0.2 rounded-full bg-emerald-400 text-slate-950 font-black text-[9px] uppercase">
              ARCADE
            </span>
          </button>

          <button
            onClick={() => setActiveTab('anki_guide')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 transition cursor-pointer ${
              activeTab === 'anki_guide'
                ? 'bg-amber-500 text-slate-950 shadow-md font-black'
                : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-sky-600" />
            <span>3. Anki Spaced Repetition Guide</span>
          </button>
        </div>

        <div className="text-xs font-mono text-slate-500">
          Showing <strong>{filteredItems.length}</strong> Band 9 expressions
        </div>
      </div>

      {/* 3. 10 TOPIC SELECTION PILLS */}
      {activeTab === 'vault' && (
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTopicId('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer border ${
                selectedTopicId === 'all'
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-white text-slate-700 hover:text-slate-900 border-slate-200'
              }`}
            >
              All 10 Academic Topics
            </button>

            {IELTS_VOCAB_TOPICS.map(topic => (
              <button
                key={topic.id}
                onClick={() => setSelectedTopicId(topic.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer border flex items-center gap-1.5 ${
                  selectedTopicId === topic.id
                    ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-xs font-black'
                    : 'bg-white text-slate-700 hover:text-slate-900 border-slate-200'
                }`}
              >
                <span>{topic.title}</span>
                <span className="text-[10px] opacity-70">({topic.ieltsFrequency})</span>
              </button>
            ))}
          </div>

          {/* VOCABULARY CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredItems.map(item => {
              const isSaved = savedWords.includes(item.id) || savedWords.includes(item.word.toLowerCase());
              return (
                <div key={item.id} className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between hover:border-amber-400 transition">
                  
                  {/* Top Bar: Word, IPA, Audio & CEFR */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${
                          item.cefrLevel === 'C2' 
                            ? 'bg-amber-100 text-amber-950 border-amber-300' 
                            : 'bg-teal-50 text-teal-900 border-teal-200'
                        }`}>
                          CEFR {item.cefrLevel}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 uppercase">
                          {item.partOfSpeech}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => playAudio(item.word)}
                          className="p-1.5 rounded-lg bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-900 transition cursor-pointer"
                          title="Listen to Native English Pronunciation"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => handleSaveToVault(item)}
                          className={`p-1.5 rounded-lg transition cursor-pointer ${
                            isSaved 
                              ? 'bg-emerald-500 text-white' 
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                          }`}
                          title="Save to Personal Vocab Vault"
                        >
                          {isSaved ? <CheckCheck className="w-3.5 h-3.5" /> : <BookmarkPlus className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-black text-slate-900 tracking-tight">{item.word}</h3>
                      <p className="text-xs font-serif text-teal-800">{item.ipa}</p>
                    </div>

                    <p className="text-xs text-slate-700 leading-relaxed pt-1">
                      {item.definition}
                    </p>
                  </div>

                  {/* Collocation Pairs */}
                  <div className="space-y-1 pt-2 border-t border-slate-100">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-600" /> High-Scoring Collocation Pairs:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {item.collocationPairs.map((pair, pi) => (
                        <span key={pi} className="text-[11px] px-2 py-0.5 bg-amber-50 text-amber-950 border border-amber-200 rounded-lg font-medium">
                          +{pair}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Band 5 vs Band 9 Morphing Box */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs">
                    <div className="text-[10px] font-bold text-slate-500 line-through">
                      {item.band5Contrast}
                    </div>
                    <div className="text-[11px] text-slate-900 font-serif italic leading-relaxed">
                      <strong>Band 9 Model:</strong> "{item.band9Sentence}"
                    </div>
                  </div>

                  {/* IELTS Task 2 Topic Context */}
                  <div className="text-[10px] text-slate-500 flex items-center gap-1">
                    <HelpCircle className="w-3 h-3 text-slate-400 shrink-0" />
                    <span className="truncate">Prompt: {item.task2TopicPrompt}</span>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: SPEED COLLOCATION ARCADE */}
      {activeTab === 'collocation_game' && (
        <div className="p-6 sm:p-10 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-6 text-center max-w-2xl mx-auto">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-bold uppercase">
              <Zap className="w-3.5 h-3.5 text-amber-700" /> 60-Second Lexical Reflex Arcade
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              IELTS Band 9 Collocation Speed Duel
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Match high-level academic adjectives and nouns under time pressure. Elevate your lexical retrieval speed for IELTS Speaking Part 3 and Writing Task 2.
            </p>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-4">
            <div className="text-sm font-bold text-slate-700">Question: Which noun correctly pairs with:</div>
            <div className="text-2xl font-black text-teal-950 font-serif">"Anthropogenic..."</div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                { text: 'Greenhouse Gas Emissions', isCorrect: true },
                { text: 'Computer Software Code', isCorrect: false },
                { text: 'Personal Breakfast Habits', isCorrect: false },
                { text: 'Mountain Rock Gravity', isCorrect: false }
              ].map((choice, ci) => (
                <button
                  key={ci}
                  onClick={() => {
                    if (choice.isCorrect) {
                      setGameScore(prev => prev + 10);
                      setFeedbackMessage('🎉 Correct! Anthropogenic Greenhouse Gas Emissions is a Band 9 Collocation.');
                      confetti({ particleCount: 30, spread: 40 });
                    } else {
                      setFeedbackMessage('❌ Incorrect. Try again!');
                    }
                  }}
                  className="p-3 bg-white hover:bg-teal-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 transition cursor-pointer"
                >
                  {choice.text}
                </button>
              ))}
            </div>

            {feedbackMessage && (
              <div className="p-3 rounded-xl bg-teal-50 text-teal-900 text-xs font-bold animate-in fade-in">
                {feedbackMessage}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-slate-500">
            <span>Score: <strong className="text-teal-900">{gameScore} pts</strong></span>
            <span>Arcade Mode Active</span>
          </div>
        </div>
      )}

      {/* TAB 3: ANKI SPACED REPETITION GUIDE */}
      {activeTab === 'anki_guide' && (
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-6 max-w-3xl mx-auto">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-900 border border-sky-200 text-xs font-bold uppercase">
              <GraduationCap className="w-3.5 h-3.5 text-sky-700" /> Spaced Repetition Mastery
            </div>
            <h3 className="text-xl font-black text-slate-900">
              How to Import IELTS Band 9 TSV Decks into Anki Mobile & Desktop
            </h3>
          </div>

          <div className="space-y-4 text-xs text-slate-700 leading-relaxed">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <strong>Step 1: Export TSV File</strong>
              <p>Click the <strong>"Export Anki Deck (.tsv)"</strong> button in the top right banner to download the tab-separated deck for your selected topic.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <strong>Step 2: Open Anki Desktop (Windows/Mac)</strong>
              <p>Open Anki ➔ Select <strong>File</strong> ➔ <strong>Import</strong> ➔ Select the downloaded `.tsv` file.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <strong>Step 3: Enable HTML Formatting</strong>
              <p>Ensure the checkbox <strong>"Allow HTML in fields"</strong> is enabled. Map Field 1 to Front and Field 2 to Back.</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
              <strong>Step 4: Sync to AnkiMobile / AnkiDroid</strong>
              <p>Click <strong>Sync</strong> to study your C1/C2 collocations on your phone using the Leitner spaced repetition memory algorithm.</p>
            </div>
          </div>

          <div className="pt-2 text-center">
            <button
              onClick={handleDownloadAnkiTsv}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs transition cursor-pointer"
            >
              <Download className="w-4 h-4 inline mr-1.5" />
              <span>Download Complete 10-Topic Anki Deck (.tsv)</span>
            </button>
          </div>
        </div>
      )}

      {/* JSON-LD SCHEMA FOR VOCABULARY COURSE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "IELTS Academic Band 9 Topic-Wise Vocabulary Studio & Collocation Decks",
            "description": "Master 150+ CEFR C1/C2 collocations, phonetic audio models, and Band 5 vs Band 9 comparative syntax morphers across all 10 core IELTS exam themes.",
            "provider": {
              "@type": "Person",
              "name": "Daloyar Hassan Shishir"
            }
          })
        }}
      />

    </div>
  );
};
