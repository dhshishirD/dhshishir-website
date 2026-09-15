import React, { useState, useEffect, useMemo } from 'react';
import { 
  fetchExecutiveDashboardData, 
  exportLearnersToCSV,
  type ExecutiveStats, 
  type LearnerRecord, 
  type ToolTelemetryStat, 
  TOP_READ_CONTENT 
} from '../../services/adminAnalyticsService';
import { 
  Users, 
  BookOpen, 
  Clock, 
  TrendingUp, 
  Search, 
  Filter, 
  GraduationCap, 
  Sparkles, 
  ShieldCheck, 
  RefreshCw, 
  Lock, 
  KeyRound, 
  ArrowLeft,
  X,
  FileSpreadsheet,
  Activity,
  BarChart3,
  Layers
} from 'lucide-react';

interface AdminExecutiveDashboardProps {
  onNavigateHome: () => void;
  onNavigateFellowship: () => void;
  onNavigateFluency: () => void;
}

export const AdminExecutiveDashboard: React.FC<AdminExecutiveDashboardProps> = ({
  onNavigateHome,
  onNavigateFellowship,
  onNavigateFluency
}) => {
  // Executive Lock State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('dh_executive_auth') === 'true';
  });
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');

  // Dashboard Telemetry Data
  const [stats, setStats] = useState<ExecutiveStats | null>(null);
  const [learners, setLearners] = useState<LearnerRecord[]>([]);
  const [tools, setTools] = useState<ToolTelemetryStat[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters & Tabs
  const [activeTab, setActiveTab] = useState<'overview' | 'fellowship' | 'fluency' | 'directory' | 'tools'>('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProgramFilter, setSelectedProgramFilter] = useState('all');
  const [selectedLearner, setSelectedLearner] = useState<LearnerRecord | null>(null);

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  const loadData = async () => {
    setLoading(true);
    const data = await fetchExecutiveDashboardData();
    setStats(data.stats);
    setLearners(data.learners);
    setTools(data.tools);
    setLoading(false);
  };

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanKey = passcode.trim().toLowerCase();
    // Authorized Executive Passkeys: July24, 36July, 36july24, shishir
    if (
      cleanKey === 'july24' || 
      cleanKey === '36july' || 
      cleanKey === '36july24' || 
      cleanKey === 'july2024' || 
      cleanKey === 'shishir'
    ) {
      setIsAuthenticated(true);
      sessionStorage.setItem('dh_executive_auth', 'true');
      setAuthError('');
    } else {
      setAuthError('Invalid Executive Master Key. Access Denied.');
    }
  };

  const filteredLearners = useMemo(() => {
    return learners.filter(l => {
      const matchesSearch = l.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            l.email.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesProgram = selectedProgramFilter === 'all' || 
                             l.enrolledPrograms.some(p => p.toLowerCase().includes(selectedProgramFilter.toLowerCase()));
      return matchesSearch && matchesProgram;
    });
  }, [learners, searchQuery, selectedProgramFilter]);

  // If locked, render Executive Security Gate
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-slate-800/90 backdrop-blur-xl border border-slate-700/80 rounded-3xl p-8 shadow-2xl space-y-6 text-center">
          <div className="w-16 h-16 rounded-3xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center mx-auto text-teal-400 shadow-inner">
            <Lock className="w-8 h-8" />
          </div>

          <div>
            <h2 className="text-2xl font-black tracking-tight text-white">Executive Command Access</h2>
            <p className="text-xs text-slate-400 mt-1">
              Restricted portal for Daloyar Hassan Shishir to monitor platform telemetry, enrolled scholars & progress.
            </p>
          </div>

          <form onSubmit={handleUnlock} className="space-y-4">
            <div className="space-y-1.5 text-left">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Executive Master Key</label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter Master Security Key"
                  className="w-full pl-10 pr-4 py-3 bg-slate-950/60 border border-slate-700 rounded-2xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition"
                  autoFocus
                />
              </div>
              {authError && <p className="text-xs text-rose-400 font-bold mt-1">{authError}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-2xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-lg shadow-teal-900/30 flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Unlock Admin Panel</span>
            </button>
          </form>

          <button
            onClick={onNavigateHome}
            className="text-xs text-slate-400 hover:text-white transition flex items-center justify-center gap-1.5 mx-auto cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Return to Public Portal
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20 pt-20">
      
      {/* Top Admin Navigation Header */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-900 text-white flex items-center justify-center font-black text-base shadow-sm">
              👑
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-black text-slate-900 leading-none">
                  Executive Command & Admin Panel
                </h1>
                <span className="px-2 py-0.5 rounded-full bg-teal-50 border border-teal-200 text-teal-900 text-[10px] font-extrabold uppercase">
                  Live Master
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Daloyar Hassan Shishir | Real-Time Platform Telemetry & Learner Directory
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={loadData}
              disabled={loading}
              className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
              title="Refresh Data"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>

            <button
              onClick={() => exportLearnersToCSV(learners)}
              className="px-3.5 py-2 rounded-xl bg-teal-900 hover:bg-teal-950 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition cursor-pointer"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-teal-300" />
              <span>Export CSV</span>
            </button>

            <button
              onClick={onNavigateHome}
              className="px-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-bold transition cursor-pointer"
            >
              View Site
            </button>
          </div>

        </div>

        {/* Tab Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 overflow-x-auto py-2 border-t border-slate-100">
          {[
            { id: 'overview', label: 'Overview KPIs', icon: BarChart3 },
            { id: 'fellowship', label: 'IR Fellowship (OMF-IRSS)', icon: GraduationCap },
            { id: 'fluency', label: 'Fluency Lab English', icon: Sparkles },
            { id: 'directory', label: 'Learner Directory', icon: Users },
            { id: 'tools', label: 'Tool Telemetry', icon: Layers }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-teal-900 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        
        {/* KPI Summary Cards */}
        {stats && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-xs space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-500 font-bold uppercase tracking-wider">
                <span>Total Learners</span>
                <Users className="w-4 h-4 text-teal-800" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900">
                {stats.totalLearners}
              </div>
              <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600">
                <TrendingUp className="w-3 h-3" /> +{stats.weeklyGrowthRate}% this week
              </div>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-xs space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-500 font-bold uppercase tracking-wider">
                <span>Total Study Hours</span>
                <Clock className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900">
                {stats.totalStudyHours} hrs
              </div>
              <div className="text-[11px] text-slate-500 font-medium">
                {stats.activeToday} active learners today
              </div>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-xs space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-500 font-bold uppercase tracking-wider">
                <span>AI Tool Runs</span>
                <Activity className="w-4 h-4 text-indigo-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900">
                {stats.totalToolExecutions.toLocaleString()}
              </div>
              <div className="text-[11px] text-slate-500 font-medium">
                ATS, SOP, IELTS, Interviews
              </div>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-xs space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-500 font-bold uppercase tracking-wider">
                <span>IR Fellowship Enrolled</span>
                <GraduationCap className="w-4 h-4 text-amber-500" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900">
                {stats.irFellowsEnrolled}
              </div>
              <div className="text-[11px] font-bold text-teal-800">
                Avg CEFR: {stats.avgCefrLevel}
              </div>
            </div>
          </div>
        )}

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left: Program Breakdown */}
            <div className="lg:col-span-2 space-y-6">
              
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-teal-800" /> Academic Programs Status
                  </h3>
                  <span className="text-xs text-slate-500">Live Cohort Tracking</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-200/80 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-teal-950">Open Master's Fellowship in IR</span>
                      <span className="px-2 py-0.5 rounded-full bg-teal-900 text-white text-[10px] font-extrabold">{stats?.irFellowsEnrolled} Fellows</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      5 Strategic Pillars, Crisis Sim & Grand Exam. Candidates advancing through UNCLOS & Bay of Bengal modules.
                    </p>
                    <button
                      onClick={onNavigateFellowship}
                      className="text-xs font-bold text-teal-800 hover:text-teal-950 inline-flex items-center gap-1 cursor-pointer pt-1"
                    >
                      Open Fellowship Portal →
                    </button>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">Fluency Lab English Mastery</span>
                      <span className="px-2 py-0.5 rounded-full bg-slate-900 text-white text-[10px] font-extrabold">{stats?.fluencyLabEnrolled} Learners</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Looped phonetic shadowing, CEFR diagnostic tests & grammatical habit loops.
                    </p>
                    <button
                      onClick={onNavigateFluency}
                      className="text-xs font-bold text-slate-800 hover:text-slate-950 inline-flex items-center gap-1 cursor-pointer pt-1"
                    >
                      Open Fluency Lab →
                    </button>
                  </div>
                </div>
              </div>

              {/* Tool Execution Leaderboard */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-indigo-600" /> Career & AI Tool Usage Telemetry
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">Ranked by Total Runs</span>
                </div>

                <div className="space-y-3">
                  {tools.slice(0, 5).map((t, idx) => (
                    <div key={t.toolId} className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-700">
                          {idx + 1}
                        </span>
                        <div>
                          <div className="text-xs font-bold text-slate-900">{t.toolName}</div>
                          <div className="text-[10px] text-slate-500">{t.category}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-black text-teal-900">{t.usageCount} executions</div>
                        <div className="text-[10px] text-emerald-600 font-semibold">+{t.weeklyTrend}% this week</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Content & Reading Engagement */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-teal-800" /> Top Read Intelligence & Guides
                </h3>

                <div className="space-y-3">
                  {TOP_READ_CONTENT.map((item, i) => (
                    <div key={i} className="p-3 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-extrabold text-teal-800 uppercase tracking-wider">{item.type}</span>
                        <span className="text-[10px] text-slate-500">{item.avgTime} avg</span>
                      </div>
                      <div className="text-xs font-bold text-slate-900 line-clamp-2">{item.title}</div>
                      <div className="text-[11px] text-slate-500 font-semibold">{item.reads.toLocaleString()} readers</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Learner Directory */}
        {(activeTab === 'directory' || activeTab === 'fellowship' || activeTab === 'fluency') && (
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            
            {/* Search & Filter Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="Search scholars by name or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-teal-700 transition"
                />
              </div>

              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-slate-400" />
                <select
                  value={selectedProgramFilter}
                  onChange={(e) => setSelectedProgramFilter(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-700 focus:outline-none cursor-pointer"
                >
                  <option value="all">All Programs</option>
                  <option value="IR">Open Master's Fellowship</option>
                  <option value="Fluency">Fluency Lab</option>
                  <option value="Career">Career Track</option>
                </select>
              </div>
            </div>

            {/* Learner Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-50 text-[11px] uppercase tracking-wider text-slate-500 font-extrabold">
                  <tr>
                    <th className="py-3 px-4 rounded-l-xl">Scholar / Candidate</th>
                    <th className="py-3 px-3">Enrolled Tracks</th>
                    <th className="py-3 px-3">CEFR / Score</th>
                    <th className="py-3 px-3">IR Pillars</th>
                    <th className="py-3 px-3">Study Hours</th>
                    <th className="py-3 px-3">Streak</th>
                    <th className="py-3 px-3">Last Active</th>
                    <th className="py-3 px-4 rounded-r-xl text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredLearners.map((learner) => (
                    <tr key={learner.id} className="hover:bg-slate-50/80 transition">
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-slate-900">{learner.name}</div>
                        <div className="text-[11px] text-slate-500">{learner.email}</div>
                      </td>
                      <td className="py-3.5 px-3">
                        <div className="flex flex-wrap gap-1">
                          {learner.enrolledPrograms.map((prog, idx) => (
                            <span key={idx} className="bg-teal-50 border border-teal-200 text-teal-900 px-2 py-0.5 rounded-md text-[10px] font-bold">
                              {prog}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-3.5 px-3 font-semibold">
                        <span className="font-bold text-teal-900">{learner.currentCefrLevel}</span> ({learner.diagnosticScore}%)
                      </td>
                      <td className="py-3.5 px-3 font-semibold">
                        {learner.irPillarsCompleted}/5 Pillars
                      </td>
                      <td className="py-3.5 px-3 font-semibold text-slate-900">
                        {learner.studyHours}h
                      </td>
                      <td className="py-3.5 px-3">
                        <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 font-bold text-[10px]">
                          🔥 {learner.streakDays}d
                        </span>
                      </td>
                      <td className="py-3.5 px-3 text-slate-500 text-[11px]">
                        {learner.lastActive}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => setSelectedLearner(learner)}
                          className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-[11px] font-bold transition cursor-pointer"
                        >
                          Dossier ↗
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        )}

        {/* Tab 3: Tools Telemetry Full View */}
        {activeTab === 'tools' && (
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-slate-900">Comprehensive Tool Telemetry & Execution Analytics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tools.map((tool) => (
                <div key={tool.toolId} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-slate-900">{tool.toolName}</div>
                    <div className="text-[11px] text-slate-500">{tool.category} • Tool ID: <code className="font-mono">{tool.toolId}</code></div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-black text-teal-900">{tool.usageCount} Runs</div>
                    <div className="text-[10px] text-emerald-600 font-bold">+{tool.weeklyTrend}% weekly velocity</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Individual Student Dossier Drawer / Modal */}
      {selectedLearner && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl space-y-5 animate-in fade-in zoom-in-95">
            
            <button
              onClick={() => setSelectedLearner(null)}
              className="absolute top-5 right-5 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-600 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3.5 pb-4 border-b border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-teal-900 text-white font-black text-lg flex items-center justify-center">
                {selectedLearner.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900">{selectedLearner.name}</h3>
                <p className="text-xs text-slate-500">{selectedLearner.email} • ID: {selectedLearner.id}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-[10px] uppercase font-bold text-slate-400">CEFR Proficiency</div>
                <div className="text-base font-black text-teal-900 mt-0.5">{selectedLearner.currentCefrLevel} ({selectedLearner.diagnosticScore}%)</div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-[10px] uppercase font-bold text-slate-400">Total Study Hours</div>
                <div className="text-base font-black text-slate-900 mt-0.5">{selectedLearner.studyHours} Hours</div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-[10px] uppercase font-bold text-slate-400">IR Fellowship Progress</div>
                <div className="text-base font-black text-slate-900 mt-0.5">{selectedLearner.irPillarsCompleted}/5 Pillars Completed</div>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="text-[10px] uppercase font-bold text-slate-400">Daily Study Streak</div>
                <div className="text-base font-black text-amber-600 mt-0.5">🔥 {selectedLearner.streakDays} Days</div>
              </div>
            </div>

            {selectedLearner.notes && (
              <div className="p-3.5 rounded-2xl bg-teal-50/70 border border-teal-200 text-xs text-teal-950">
                <div className="font-extrabold uppercase text-[10px] text-teal-800 tracking-wider mb-1">Academic & Advisor Notes</div>
                {selectedLearner.notes}
              </div>
            )}

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedLearner(null)}
                className="px-5 py-2.5 rounded-xl bg-teal-900 text-white font-bold text-xs cursor-pointer hover:bg-teal-950 transition"
              >
                Close Dossier
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
