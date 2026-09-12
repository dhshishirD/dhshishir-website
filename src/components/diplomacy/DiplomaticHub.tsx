import React, { useState, useEffect, useMemo } from 'react';
import { 
  Globe, Compass, Bookmark, BookmarkCheck, FileText, Search, Sparkles, 
  MessageSquare, Lock, Unlock, Filter, Plus, 
  Layers, Send, AlertCircle, RefreshCw, PenTool, ArrowUpRight,
  ShieldCheck, AlertTriangle, CheckCircle2, Copy, X,
  BarChart3, TrendingUp, Sliders
} from 'lucide-react';
import type { StrategicPillar, SourceTier, PolicyMemo, IntelItem } from '../../types/diplomacy';
import { 
  INITIAL_INTEL_FEED, DIPLOMACY_PILLARS_META, SOURCE_TIERS_META, 
  DEFAULT_POLICY_MEMOS, AI_QUERY_TEMPLATES 
} from '../../data/diplomacyData';
import { 
  getLocalBookmarks, toggleLocalBookmark, getLocalNotes, saveLocalNote,
  getLocalMemos, saveLocalMemo, generateDiplomaticQueryResponse, syncBookmarkToCloud
} from '../../services/diplomacyService';
import { AuthModal } from '../auth/AuthModal';
import { GeopoliticalRiskSimulator } from './GeopoliticalRiskSimulator';

interface DiplomaticHubProps {
  user: any;
  onNavigateHome?: () => void;
  onOpenDossierPage?: (slug: string) => void;
}

export const DiplomaticHub: React.FC<DiplomaticHubProps> = ({ user, onNavigateHome, onOpenDossierPage }) => {
  const [selectedPillar, setSelectedPillar] = useState<StrategicPillar>('all');
  const [selectedTier, setSelectedTier] = useState<SourceTier>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'stream' | 'bookmarks' | 'ai-advisor' | 'memos' | 'simulator'>('stream');
  
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [memos, setMemos] = useState<PolicyMemo[]>([]);
  
  const [selectedDossier, setSelectedDossier] = useState<IntelItem | null>(null);
  const [activeNoteIntelId, setActiveNoteIntelId] = useState<string | null>(null);
  const [currentNoteText, setCurrentNoteText] = useState('');
  
  const [aiQuery, setAiQuery] = useState('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  
  const [isCreatingMemo, setIsCreatingMemo] = useState(false);
  const [newMemoTitle, setNewMemoTitle] = useState('');
  const [newMemoPillar, setNewMemoPillar] = useState<StrategicPillar>('bay-of-bengal');
  const [newMemoSummary, setNewMemoSummary] = useState('');
  const [newMemoContent, setNewMemoContent] = useState('');
  const [newMemoRecommendations, setNewMemoRecommendations] = useState('');
  
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    setBookmarks(getLocalBookmarks());
    setNotes(getLocalNotes());
    const savedMemos = getLocalMemos();
    if (savedMemos.length === 0) {
      setMemos(DEFAULT_POLICY_MEMOS);
    } else {
      setMemos(savedMemos);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Diplomatic & Foreign Policy Intelligence Hub | DH Shishir';
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleToggleBookmark = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const updated = toggleLocalBookmark(id);
    setBookmarks(updated);
    const isSaved = updated.includes(id);
    if (user) {
      syncBookmarkToCloud(user.id, id, isSaved);
    }
    showToast(isSaved ? 'Dossier saved to Research Binder' : 'Removed from Research Binder');
  };

  const handleOpenNote = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveNoteIntelId(id);
    setCurrentNoteText(notes[id] || '');
  };

  const handleSaveNote = () => {
    if (!activeNoteIntelId) return;
    const updated = saveLocalNote(activeNoteIntelId, currentNoteText);
    setNotes(updated);
    setActiveNoteIntelId(null);
    showToast('Confidential diplomatic note updated');
  };

  const handleRunAiAnalysis = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!aiQuery.trim()) return;
    setIsAiLoading(true);
    setAiResponse(null);
    try {
      const resp = await generateDiplomaticQueryResponse(aiQuery, INITIAL_INTEL_FEED);
      setAiResponse(resp);
    } catch {
      setAiResponse('Failed to generate synthesis. Please try another query.');
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleSaveNewMemo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMemoTitle.trim() || !newMemoContent.trim()) return;
    
    const recsArray = newMemoRecommendations
      .split('\n')
      .map(r => r.trim())
      .filter(Boolean);

    const memo: PolicyMemo = {
      id: `memo-${Date.now()}`,
      title: newMemoTitle,
      pillar: newMemoPillar,
      summary: newMemoSummary || newMemoContent.slice(0, 140) + '...',
      content: newMemoContent,
      recommendations: recsArray.length > 0 ? recsArray : ['Continue diplomatic coordination at bilateral levels.'],
      status: 'published',
      author: user?.user_metadata?.full_name || 'Daloyar Hassan (Strategic Affairs Analyst)',
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0]
    };

    const updated = saveLocalMemo(memo);
    setMemos(updated);
    setIsCreatingMemo(false);
    setNewMemoTitle('');
    setNewMemoSummary('');
    setNewMemoContent('');
    setNewMemoRecommendations('');
    showToast('Ministerial Policy Memo drafted and saved successfully');
  };

  const handleCopyCitation = (item: IntelItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const citation = `Hassan, Daloyar. "${item.title}." ${item.source}, Published: ${item.publishedAt}. URL: https://dhshishir.com/diplomacy/${item.slug || item.id}`;
    navigator.clipboard.writeText(citation);
    showToast('Citation copied to clipboard');
  };

  const filteredFeed = useMemo(() => {
    return INITIAL_INTEL_FEED.filter(item => {
      if (selectedPillar !== 'all' && item.pillar !== selectedPillar) return false;
      if (selectedTier !== 'all' && item.sourceTier !== selectedTier) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesSummary = item.executiveSummary.toLowerCase().includes(q);
        const matchesBD = item.bangladeshSignificance.toLowerCase().includes(q);
        const matchesSource = item.source.toLowerCase().includes(q);
        const matchesTags = item.tags.some(t => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesSummary && !matchesBD && !matchesSource && !matchesTags) return false;
      }
      return true;
    });
  }, [selectedPillar, selectedTier, searchQuery]);

  const bookmarkedItems = useMemo(() => {
    return INITIAL_INTEL_FEED.filter(item => bookmarks.includes(item.id));
  }, [bookmarks]);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white">
      {toastMessage && (
        <div className="fixed bottom-8 right-8 z-50 bg-slate-900 border border-cyan-500/40 text-cyan-200 px-5 py-3 rounded-xl shadow-2xl shadow-cyan-950/80 flex items-center gap-3 animate-fade-in text-sm font-medium">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={() => {
          setIsAuthModalOpen(false);
          showToast('Welcome to Analyst Command Center');
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Breadcrumb & User Status */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            {onNavigateHome && (
              <button 
                onClick={onNavigateHome}
                className="hover:text-cyan-400 font-semibold transition cursor-pointer"
              >
                dhshishir.com
              </button>
            )}
            <span>/</span>
            <span className="text-cyan-400 font-bold">Foreign Policy & Diplomatic Intelligence Hub</span>
          </div>

          <div className="flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-2 bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs px-3 py-1.5 rounded-full font-medium shadow-sm">
                <Unlock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Analyst Command Center Active</span>
                <span className="text-slate-400">({user.email})</span>
              </div>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs px-3 py-1.5 rounded-full font-semibold transition cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Sign in for Private Memos & Notes</span>
              </button>
            )}
          </div>
        </div>

        {/* Hero Header */}
        <div className="py-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Globe className="w-3.5 h-3.5 text-cyan-400" /> Strategic Statecraft & Bangladesh Geopolitics
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Foreign Policy & Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">Intelligence Desk</span>
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Real-time strategic intelligence synthesizing <strong>25+ global think tanks</strong> (BIISS, BIPSS, CPD, ORF, IDSA, CSIS, Chatham House, Lowy Institute) and international relations datasets through the analytical lens of <strong>Bangladesh national interest, Bay of Bengal maritime security, post-LDC trade, and regional diplomacy</strong>.
          </p>

          {/* Strategic Metrics Ribbon */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5">
              <div className="text-xs font-semibold text-slate-400">Tracked Dossiers</div>
              <div className="text-xl font-extrabold text-cyan-400 mt-0.5">{INITIAL_INTEL_FEED.length} Analyzed</div>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5">
              <div className="text-xs font-semibold text-slate-400">Strategic Pillars</div>
              <div className="text-xl font-extrabold text-teal-400 mt-0.5">7 Core Domains</div>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5">
              <div className="text-xs font-semibold text-slate-400">Think Tank Bodies</div>
              <div className="text-xl font-extrabold text-indigo-400 mt-0.5">25+ Ingested</div>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3.5">
              <div className="text-xs font-semibold text-slate-400">Analysis Methodology</div>
              <div className="text-xl font-extrabold text-emerald-400 mt-0.5">100% Open Intel</div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800">
          <button
            onClick={() => setActiveTab('stream')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
              activeTab === 'stream'
                ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-lg shadow-cyan-900/40'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Daily Strategic Stream</span>
            <span className="bg-slate-950/60 px-2 py-0.5 rounded-full text-[11px] text-cyan-200">{filteredFeed.length}</span>
          </button>

          <button
            onClick={() => setActiveTab('bookmarks')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
              activeTab === 'bookmarks'
                ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-lg shadow-cyan-900/40'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            <span>Saved Research Binder</span>
            <span className="bg-slate-950/60 px-2 py-0.5 rounded-full text-[11px] text-cyan-200">{bookmarks.length}</span>
          </button>

          <button
            onClick={() => setActiveTab('ai-advisor')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
              activeTab === 'ai-advisor'
                ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-lg shadow-cyan-900/40'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span>AI Diplomatic Query Assistant</span>
          </button>

          <button
            onClick={() => setActiveTab('memos')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
              activeTab === 'memos'
                ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-lg shadow-cyan-900/40'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Policy Memos</span>
            <span className="bg-slate-950/60 px-2 py-0.5 rounded-full text-[11px] text-cyan-200">{memos.length}</span>
          </button>

          <button
            onClick={() => setActiveTab('simulator')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
              activeTab === 'simulator'
                ? 'bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-900/40'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Sliders className="w-4 h-4 text-cyan-300" />
            <span>Risk Simulator</span>
            <span className="bg-amber-500/20 border border-amber-500/40 px-2 py-0.5 rounded-full text-[10px] text-amber-300 font-extrabold">NEW</span>
          </button>
        </div>

        {/* TAB 1: DAILY STRATEGIC STREAM */}
        {activeTab === 'stream' && (
          <div className="space-y-6">
            {/* Search and Tier Filter */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-6 relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search by topic, think tank (BIISS, CSIS), or keyword (Teesta, Matarbari)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-900/90 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition"
                />
              </div>

              <div className="md:col-span-6">
                <select
                  value={selectedTier}
                  onChange={(e) => setSelectedTier(e.target.value as SourceTier)}
                  className="w-full bg-slate-900/90 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-cyan-500 transition cursor-pointer"
                >
                  {SOURCE_TIERS_META.map(tier => (
                    <option key={tier.id} value={tier.id} className="bg-slate-950 text-slate-100">
                      {tier.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Strategic Pillar Chips */}
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-cyan-400" /> Filter by Strategic Pillar
              </div>
              <div className="flex flex-wrap gap-2">
                {DIPLOMACY_PILLARS_META.map(pillar => {
                  const isActive = selectedPillar === pillar.id;
                  return (
                    <button
                      key={pillar.id}
                      onClick={() => setSelectedPillar(pillar.id as StrategicPillar)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer border ${
                        isActive
                          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-sm'
                          : 'bg-slate-900/70 text-slate-400 hover:text-slate-200 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <span>{pillar.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Intel Cards List */}
            {filteredFeed.length === 0 ? (
              <div className="p-12 text-center bg-slate-900/40 rounded-2xl border border-slate-800/80 my-8">
                <AlertCircle className="w-8 h-8 text-cyan-400 mx-auto mb-3 opacity-60" />
                <h3 className="text-base font-bold text-white">No intelligence dossiers match this query</h3>
                <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">Try clearing your search query or selecting All Strategic Pillars.</p>
                <button
                  onClick={() => { setSelectedPillar('all'); setSelectedTier('all'); setSearchQuery(''); }}
                  className="mt-4 px-4 py-2 bg-cyan-600/30 hover:bg-cyan-600/50 border border-cyan-500/40 text-cyan-200 text-xs font-bold rounded-xl transition cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5">
                {filteredFeed.map(item => {
                  const isSaved = bookmarks.includes(item.id);
                  const hasNote = Boolean(notes[item.id]);

                  return (
                    <div 
                      key={item.id}
                      onClick={() => setSelectedDossier(item)}
                      className="bg-slate-900/70 hover:bg-slate-900/95 border border-slate-800/80 hover:border-cyan-500/40 rounded-2xl p-5 sm:p-6 transition-all duration-200 shadow-xl shadow-slate-950/60 group cursor-pointer"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-extrabold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded-full">
                            {item.source}
                          </span>
                          <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                            item.impactLevel === 'High Strategic Significance'
                              ? 'bg-rose-500/10 text-rose-300 border-rose-500/20'
                              : item.impactLevel === 'Medium Impact'
                              ? 'bg-amber-500/10 text-amber-300 border-amber-500/20'
                              : 'bg-blue-500/10 text-blue-300 border-blue-500/20'
                          }`}>
                            ● {item.impactLevel}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 text-xs text-slate-400">
                          <span>{item.publishedAt}</span>
                          <span>•</span>
                          <span>{item.readTime}</span>
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition leading-snug">
                        {item.title}
                      </h3>

                      <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.executiveSummary}
                      </p>

                      <div className="mt-4 bg-gradient-to-r from-emerald-950/40 via-teal-950/30 to-slate-950/50 border-l-4 border-emerald-400 p-3.5 rounded-r-xl">
                        <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                          <Compass className="w-3.5 h-3.5 text-emerald-400" /> Significance for Bangladesh National Interest
                        </div>
                        <p className="text-xs sm:text-sm text-emerald-100 font-medium leading-relaxed">
                          {item.bangladeshSignificance}
                        </p>
                      </div>

                      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800/60">
                        <div className="flex flex-wrap items-center gap-1.5">
                          {item.tags.map(tag => (
                            <span key={tag} className="text-[11px] bg-slate-800/80 text-slate-400 px-2 py-0.5 rounded-md font-medium">
                              #{tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => handleOpenNote(item.id, e)}
                            className={`p-2 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer border ${
                              hasNote
                                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                                : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border-slate-700'
                            }`}
                            title="Add confidential diplomatic annotation"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">{hasNote ? 'Edit Note' : 'Note'}</span>
                          </button>

                          <button
                            onClick={(e) => handleToggleBookmark(item.id, e)}
                            className={`p-2 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer border ${
                              isSaved
                                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                                : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border-slate-700'
                            }`}
                            title={isSaved ? 'Remove from Binder' : 'Bookmark to Binder'}
                          >
                            {isSaved ? <BookmarkCheck className="w-3.5 h-3.5 text-cyan-400" /> : <Bookmark className="w-3.5 h-3.5 text-slate-400" />}
                            <span className="hidden sm:inline">{isSaved ? 'Saved' : 'Save'}</span>
                          </button>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (onOpenDossierPage) {
                                onOpenDossierPage(item.slug || item.id);
                              } else {
                                setSelectedDossier(item);
                              }
                            }}
                            className="px-3 py-1.5 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 border border-cyan-400/40 text-white shadow-md shadow-cyan-950/40 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                          >
                            <span>Read Academic Dossier</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-cyan-200" />
                          </button>
                        </div>
                      </div>

                      {notes[item.id] && (
                        <div className="mt-3 bg-amber-950/20 border border-amber-500/30 rounded-xl p-3 text-xs text-amber-200">
                          <span className="font-bold text-amber-400 uppercase tracking-wider text-[10px]">Confidential Note: </span>
                          <span>{notes[item.id]}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* TAB 2: RESEARCH BINDER */}
        {activeTab === 'bookmarks' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Bookmark className="w-5 h-5 text-cyan-400" /> Saved Research Binder
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Your curated repository of high-priority diplomatic dossiers, treaties, and think tank analyses.
                </p>
              </div>
              <span className="text-xs font-bold text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30">
                {bookmarkedItems.length} Saved Files
              </span>
            </div>

            {bookmarkedItems.length === 0 ? (
              <div className="p-12 text-center bg-slate-900/40 rounded-2xl border border-slate-800/80">
                <Bookmark className="w-8 h-8 text-slate-500 mx-auto mb-3" />
                <h3 className="text-base font-bold text-white">Your Research Binder is Empty</h3>
                <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                  Click the Save bookmark icon on any think tank analysis in the Daily Strategic Stream to organize it here.
                </p>
                <button
                  onClick={() => setActiveTab('stream')}
                  className="mt-4 px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold rounded-xl transition cursor-pointer"
                >
                  Explore Daily Stream
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {bookmarkedItems.map(item => (
                  <div key={item.id} className="bg-slate-900/80 border border-cyan-500/30 rounded-2xl p-5 shadow-lg">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                      <span className="text-cyan-400 font-extrabold">{item.source}</span>
                      <span>{item.publishedAt}</span>
                    </div>
                    <h4 className="text-base font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">{item.executiveSummary}</p>
                    
                    {notes[item.id] && (
                      <div className="mt-3 bg-amber-950/20 border border-amber-500/30 rounded-xl p-3 text-xs text-amber-200">
                        <span className="font-bold text-amber-400 text-[10px] uppercase">Your Note: </span>
                        <span>{notes[item.id]}</span>
                      </div>
                    )}

                    <div className="mt-3 flex items-center justify-between pt-3 border-t border-slate-800">
                      <button
                        onClick={(e) => handleOpenNote(item.id, e)}
                        className="text-xs text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 cursor-pointer"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>{notes[item.id] ? 'Edit Note' : 'Add Note'}</span>
                      </button>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => {
                            if (onOpenDossierPage) {
                              onOpenDossierPage(item.slug || item.id);
                            } else {
                              setSelectedDossier(item);
                            }
                          }}
                          className="text-xs text-cyan-400 hover:text-cyan-300 font-bold cursor-pointer flex items-center gap-1"
                        >
                          <span>Open Dossier</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </button>
                        <button
                          onClick={(e) => handleToggleBookmark(item.id, e)}
                          className="text-xs text-rose-400 hover:text-rose-300 font-semibold cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 3: AI DIPLOMATIC ADVISOR */}
        {activeTab === 'ai-advisor' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">AI Diplomatic Query Assistant</h2>
                  <p className="text-xs text-cyan-200">Cross-synthesize all 22+ ingested think tank papers for Bangladesh foreign policy advice</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Suggested Inquiries:</div>
                <div className="flex flex-wrap gap-2">
                  {AI_QUERY_TEMPLATES.map(prompt => (
                    <button
                      key={prompt}
                      onClick={() => { setAiQuery(prompt); }}
                      className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-cyan-300 text-xs px-3 py-1.5 rounded-lg transition cursor-pointer text-left"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleRunAiAnalysis} className="space-y-4">
                <div className="relative">
                  <textarea
                    rows={3}
                    value={aiQuery}
                    onChange={(e) => setAiQuery(e.target.value)}
                    placeholder="Ask any question on South Asian geopolitics, treaties, trade, or Bangladesh strategic interests..."
                    className="w-full bg-slate-950/80 border border-slate-700 rounded-2xl p-4 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition resize-none"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">Powered by Diplomatic Synthesis Engine</span>
                  <button
                    type="submit"
                    disabled={isAiLoading || !aiQuery.trim()}
                    className="px-6 py-2.5 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white font-bold text-xs sm:text-sm rounded-xl transition flex items-center gap-2 shadow-lg shadow-cyan-950 disabled:opacity-50 cursor-pointer"
                  >
                    {isAiLoading ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Synthesizing...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Run Diplomatic Analysis</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {aiResponse && (
                <div className="mt-6 bg-slate-950/90 border border-cyan-500/40 rounded-2xl p-6 text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line shadow-inner">
                  {aiResponse}
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 4: POLICY MEMOS */}
        {activeTab === 'memos' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-cyan-400" /> Ministerial Policy Memos & Briefings
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Compose, review, and export formal foreign policy briefing notes with actionable strategic recommendations.
                </p>
              </div>

              <button
                onClick={() => setIsCreatingMemo(!isCreatingMemo)}
                className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 cursor-pointer shadow-lg shadow-cyan-950"
              >
                <Plus className="w-4 h-4" />
                <span>{isCreatingMemo ? 'Close Studio' : 'Draft New Policy Memo'}</span>
              </button>
            </div>

            {isCreatingMemo && (
              <form onSubmit={handleSaveNewMemo} className="bg-slate-900 border border-cyan-500/40 rounded-2xl p-6 space-y-4 shadow-xl">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <PenTool className="w-4 h-4 text-cyan-400" /> New Foreign Policy Briefing Note
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Memo Subject / Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Strategic Imperatives for Bangladesh-Japan CEPA"
                      value={newMemoTitle}
                      onChange={(e) => setNewMemoTitle(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Strategic Pillar</label>
                    <select
                      value={newMemoPillar}
                      onChange={(e) => setNewMemoPillar(e.target.value as StrategicPillar)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-cyan-500 cursor-pointer"
                    >
                      {DIPLOMACY_PILLARS_META.filter(p => p.id !== 'all').map(p => (
                        <option key={p.id} value={p.id}>{p.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Executive Summary</label>
                  <input
                    type="text"
                    placeholder="1-2 sentences summarizing the core strategic takeaway..."
                    value={newMemoSummary}
                    onChange={(e) => setNewMemoSummary(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Strategic Background & Analysis *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide in-depth context, geopolitical stakes, and risk assessments..."
                    value={newMemoContent}
                    onChange={(e) => setNewMemoContent(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-cyan-500 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Actionable Recommendations (One per line)</label>
                  <textarea
                    rows={3}
                    placeholder="1. Expedite bilateral negotiations&#10;2. Coordinate with Ministry of Commerce&#10;3. Conduct maritime feasibility review"
                    value={newMemoRecommendations}
                    onChange={(e) => setNewMemoRecommendations(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-cyan-500 resize-none"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsCreatingMemo(false)}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-xl transition cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold rounded-xl transition cursor-pointer"
                  >
                    Save Policy Memo
                  </button>
                </div>
              </form>
            )}

            {memos.length === 0 && !isCreatingMemo ? (
              <div className="p-12 text-center bg-slate-900/40 rounded-2xl border border-slate-800/80">
                <FileText className="w-8 h-8 text-slate-500 mx-auto mb-3" />
                <h3 className="text-base font-bold text-white">No Policy Memos Drafted Yet</h3>
                <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                  Click Draft New Policy Memo above to write high-level diplomatic briefings and strategic recommendations.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5">
                {memos.map(memo => (
                  <div key={memo.id} className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-lg">
                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 mb-2">
                      <span className="text-cyan-400 font-extrabold uppercase tracking-wider bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded-full">
                        {memo.pillar}
                      </span>
                      <span>Author: {memo.author} • {memo.createdAt}</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mt-1">{memo.title}</h4>
                    <p className="text-xs text-slate-300 mt-2 font-medium italic border-l-2 border-cyan-500/50 pl-3">
                      {memo.summary}
                    </p>
                    <div className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed whitespace-pre-line bg-slate-950/60 p-4 rounded-xl border border-slate-800/60">
                      {memo.content}
                    </div>

                    {memo.recommendations && memo.recommendations.length > 0 && (
                      <div className="mt-4 bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-4">
                        <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Key Policy Recommendations:
                        </div>
                        <ul className="space-y-1.5">
                          {memo.recommendations.map((rec, i) => (
                            <li key={i} className="text-xs text-emerald-100 flex items-start gap-2">
                              <span className="text-emerald-400 font-bold">•</span>
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 5: GEOPOLITICAL RISK SIMULATOR */}
        {activeTab === 'simulator' && (
          <GeopoliticalRiskSimulator />
        )}

      </div>

      {/* FULL STRATEGIC BRIEFING DOSSIER MODAL */}
      {selectedDossier && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-slate-900 border border-cyan-500/40 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl my-auto text-left relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedDossier(null)}
              className="absolute top-5 right-5 p-2 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-full transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-xs font-extrabold text-cyan-400 bg-cyan-950/80 border border-cyan-500/30 px-3 py-1 rounded-full">
                {selectedDossier.source}
              </span>
              <span className="text-xs font-bold text-slate-300 bg-slate-800 px-3 py-1 rounded-full">
                {selectedDossier.publishedAt}
              </span>
              <span className="text-xs text-slate-400">{selectedDossier.readTime}</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
              {selectedDossier.title}
            </h2>

            {/* Strategic Overview */}
            <div className="mt-5 space-y-4">
              <div>
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <BarChart3 className="w-4 h-4 text-cyan-400" /> Executive Intelligence Summary
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                  {selectedDossier.executiveSummary}
                </p>
              </div>

              {/* Bangladesh National Interest Box */}
              <div className="bg-emerald-950/30 border border-emerald-500/40 rounded-2xl p-4 sm:p-5">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                  <Compass className="w-4 h-4 text-emerald-400" /> Significance for Bangladesh National Interest
                </div>
                <p className="text-xs sm:text-sm text-emerald-100 font-medium leading-relaxed">
                  {selectedDossier.bangladeshSignificance}
                </p>
              </div>

              {/* Strategic Risks & Opportunities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedDossier.strategicRisks && selectedDossier.strategicRisks.length > 0 && (
                  <div className="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-4">
                    <h5 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-400" /> Strategic Risks & Vulnerabilities
                    </h5>
                    <ul className="space-y-2">
                      {selectedDossier.strategicRisks.map((risk, i) => (
                        <li key={i} className="text-xs text-rose-100 flex items-start gap-2">
                          <span className="text-rose-400 font-bold">•</span>
                          <span>{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedDossier.strategicOpportunities && selectedDossier.strategicOpportunities.length > 0 && (
                  <div className="bg-teal-950/20 border border-teal-500/30 rounded-2xl p-4">
                    <h5 className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-teal-400" /> Strategic Opportunities & Levers
                    </h5>
                    <ul className="space-y-2">
                      {selectedDossier.strategicOpportunities.map((opp, i) => (
                        <li key={i} className="text-xs text-teal-100 flex items-start gap-2">
                          <span className="text-teal-400 font-bold">•</span>
                          <span>{opp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Policy Recommendations */}
              {selectedDossier.policyRecommendations && selectedDossier.policyRecommendations.length > 0 && (
                <div className="bg-indigo-950/20 border border-indigo-500/30 rounded-2xl p-4 sm:p-5">
                  <h5 className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-indigo-400" /> Actionable Recommendations for MoFA / ERD
                  </h5>
                  <ul className="space-y-2">
                    {selectedDossier.policyRecommendations.map((rec, i) => (
                      <li key={i} className="text-xs sm:text-sm text-indigo-100 flex items-start gap-2">
                        <span className="text-indigo-400 font-bold">✓</span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Actors */}
              <div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Key Stakeholders & Institutions:</div>
                <div className="flex flex-wrap gap-2">
                  {selectedDossier.keyActors.map(actor => (
                    <span key={actor} className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-lg border border-slate-700">
                      {actor}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => handleCopyCitation(selectedDossier, e)}
                  className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Citation</span>
                </button>

                <a
                  href={selectedDossier.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-slate-800 hover:bg-cyan-900/40 border border-slate-700 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 rounded-xl text-xs font-bold transition flex items-center gap-1.5"
                >
                  <span>Think Tank Source</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => handleOpenNote(selectedDossier.id, e)}
                  className="px-3.5 py-2 bg-amber-600/30 hover:bg-amber-600/50 border border-amber-500/40 text-amber-200 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{notes[selectedDossier.id] ? 'Edit Note' : 'Add Note'}</span>
                </button>

                <button
                  onClick={(e) => handleToggleBookmark(selectedDossier.id, e)}
                  className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer border border-slate-700"
                >
                  {bookmarks.includes(selectedDossier.id) ? (
                    <>
                      <BookmarkCheck className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Saved</span>
                    </>
                  ) : (
                    <>
                      <Bookmark className="w-3.5 h-3.5 text-slate-400" />
                      <span>Save</span>
                    </>
                  )}
                </button>

                {onOpenDossierPage && (
                  <button
                    onClick={() => {
                      const slug = selectedDossier.slug || selectedDossier.id;
                      setSelectedDossier(null);
                      onOpenDossierPage(slug);
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white font-bold rounded-xl text-xs shadow-lg shadow-cyan-950/60 transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Open Dedicated Dossier Page</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-cyan-200" />
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* CONFIDENTIAL ANNOTATION MODAL */}
      {activeNoteIntelId && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-amber-500/40 rounded-2xl max-w-lg w-full p-6 shadow-2xl">
            <h3 className="text-base font-bold text-white flex items-center gap-2 mb-2">
              <MessageSquare className="w-4 h-4 text-amber-400" /> Confidential Diplomatic Note
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Add your private analytical perspective, ministerial talking points, or follow-up actions.
            </p>
            <textarea
              rows={4}
              value={currentNoteText}
              onChange={(e) => setCurrentNoteText(e.target.value)}
              placeholder="e.g. Strategic implication: Bangladesh must request bilateral consultations before next BIMSTEC ministerial meeting..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-amber-500 resize-none mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setActiveNoteIntelId(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-xl cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveNote}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold rounded-xl cursor-pointer"
              >
                Save Annotation
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
