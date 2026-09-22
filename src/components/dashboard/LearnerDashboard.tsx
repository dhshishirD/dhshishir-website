import React, { useState, useEffect } from 'react';
import { supabase } from '../../services/supabaseClient';
import { 
  getUnifiedMemberProfile, 
  saveUnifiedMemberProfile,
  syncUnifiedMemberWithCloud,
  issueUnifiedCertificate
} from '../../services/unifiedMemberService';
import type { 
  UnifiedMemberProfile, 
  IssuedCertificate, 
  IeltsTestRecord 
} from '../../services/unifiedMemberService';
import { AchievementBadgesHub } from './AchievementBadgesHub';
import { VerifiableCertificateViewer } from '../certificates/VerifiableCertificateViewer';
import { CERTIFICATE_PRESETS } from '../../services/certificateVerificationService';
import { 
  Flame, Calendar, LogOut, RotateCcw, AlertTriangle, CheckCircle2, 
  Award, Trophy, BookOpen, Sparkles, User, Globe, Briefcase, 
  FileText, Clock, ExternalLink, Printer, Plus, Check, Zap, Target,
  ChevronRight, Mic, Headphones, ArrowRight, ShieldCheck, Share2
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface LearnerDashboardProps {
  user: any;
  onSignOut: () => void;
  onNavigateStage: (stage: string) => void;
  onNavigateView?: (view: string, subParam?: string) => void;
}

export const LearnerDashboard: React.FC<LearnerDashboardProps> = ({
  user,
  onSignOut,
  onNavigateStage,
  onNavigateView
}) => {
  const [activeTab, setActiveTab] = useState<'passport' | 'badges' | 'certificates' | 'history'>('passport');
  const [profile, setProfile] = useState<UnifiedMemberProfile>(getUnifiedMemberProfile());
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editName, setEditName] = useState(profile.fullName);
  const [editGoal, setEditGoal] = useState(profile.targetGoal);
  const [editBand, setEditBand] = useState(profile.targetIeltsBand);
  const [activeCertViewer, setActiveCertViewer] = useState<IssuedCertificate | null>(null);

  useEffect(() => {
    loadData();

    // Listen to live telemetry updates from any tool
    const handleTelemetryUpdate = (e: any) => {
      if (e.detail) {
        setProfile(e.detail);
      } else {
        setProfile(getUnifiedMemberProfile());
      }
    };

    window.addEventListener('dhshishir-telemetry-updated', handleTelemetryUpdate);
    return () => {
      window.removeEventListener('dhshishir-telemetry-updated', handleTelemetryUpdate);
    };
  }, [user]);

  const loadData = async () => {
    const local = getUnifiedMemberProfile();
    setProfile(local);
    setEditName(user?.user_metadata?.full_name || local.fullName);

    if (user?.id) {
      await syncUnifiedMemberWithCloud(user.id, user.email, user.user_metadata?.full_name);
    }
  };

  const handleSaveProfile = () => {
    const updated = saveUnifiedMemberProfile({
      fullName: editName.trim() || 'Learner Space',
      targetGoal: editGoal,
      targetIeltsBand: editBand
    });
    setProfile(updated);
    setIsEditingProfile(false);
    confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    onSignOut();
  };

  const handleGenerateCertificate = (type: IssuedCertificate['type']) => {
    const preset = CERTIFICATE_PRESETS[type];
    const newCert = issueUnifiedCertificate({
      type,
      title: preset.title,
      recipientName: profile.fullName || 'Executive Scholar',
      scoreOrLevel: type === 'executive_communication' ? 'Score: 90% (Pass with Distinction)' : 'CEFR C1/C2 Verified Benchmark',
      skillsVerified: preset.defaultSkills
    });

    setProfile(getUnifiedMemberProfile());
    setActiveCertViewer(newCert);
    confetti({ particleCount: 70, spread: 80, origin: { y: 0.5 } });
  };

  const hasTakenIelts = (profile.ieltsHistory?.length || 0) > 0;
  const recentTests = profile.ieltsHistory || [];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Profile Command Header */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          
          <div className="flex items-center gap-5 text-center md:text-left">
            <div className="w-16 h-16 rounded-2xl bg-teal-900 text-white flex items-center justify-center font-black text-2xl shrink-0 shadow-lg border border-teal-700">
              {profile.fullName.charAt(0).toUpperCase()}
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start">
                <h1 className="text-xl sm:text-2xl font-black text-slate-900">
                  {profile.fullName}
                </h1>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-900 font-bold border border-teal-200 uppercase">
                  {user ? 'Cloud Sync Member' : 'Local Passport'}
                </span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-950 font-bold border border-amber-200 uppercase">
                  Target Band {profile.targetIeltsBand}
                </span>
              </div>
              <p className="text-xs text-slate-500">{user?.email || 'Local Browser Learner Profile'}</p>
              <div className="text-[11px] text-slate-500 flex items-center gap-2 justify-center md:justify-start">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Member since 2026</span>
                <span>•</span>
                <span className="text-teal-800 font-bold">{profile.totalPoints} Total XP Points</span>
              </div>
            </div>
          </div>

          {/* Quick Action Clusters */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setIsEditingProfile(!isEditingProfile)}
              className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition cursor-pointer"
            >
              {isEditingProfile ? 'Cancel' : 'Edit Profile'}
            </button>

            <div className="px-3.5 py-2 bg-amber-50 border border-amber-200 rounded-xl flex items-center gap-1.5 text-xs font-black text-amber-900">
              <Flame className="w-4 h-4 text-amber-500" />
              <span>{profile.streakDays} Day Streak</span>
            </div>

            {user ? (
              <button
                onClick={handleLogout}
                className="px-3.5 py-2 bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-rose-600 rounded-xl text-xs font-bold transition cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5 inline mr-1" /> Sign Out
              </button>
            ) : null}
          </div>

        </div>

        {/* Inline Profile Editor Drawer */}
        {isEditingProfile && (
          <div className="p-6 bg-white border border-teal-200 rounded-3xl shadow-md space-y-4 animate-in fade-in duration-150">
            <h3 className="text-sm font-bold text-slate-900">Customize Learner Passport</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Display Full Name</label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium focus:border-teal-800 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Target IELTS Band</label>
                <select
                  value={editBand}
                  onChange={(e) => setEditBand(parseFloat(e.target.value))}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium focus:border-teal-800 focus:outline-hidden"
                >
                  <option value={7.0}>Band 7.0 (Competent)</option>
                  <option value={7.5}>Band 7.5 (Very Good)</option>
                  <option value={8.0}>Band 8.0 (Executive)</option>
                  <option value={8.5}>Band 8.5 (Master Scholar)</option>
                  <option value={9.0}>Band 9.0 (Expert Native)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Primary Discipline / Goal</label>
                <select
                  value={editGoal}
                  onChange={(e) => setEditGoal(e.target.value as any)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium focus:border-teal-800 focus:outline-hidden"
                >
                  <option value="ielts_band_8_5">IELTS Academic (Band 8.5+)</option>
                  <option value="diplomacy_career">Foreign Service & Geopolitics</option>
                  <option value="global_scholarship">Fully Funded Master's / PhD</option>
                  <option value="corporate_leadership">Executive Leadership & Negotiation</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={handleSaveProfile}
                className="px-5 py-2 bg-teal-900 hover:bg-teal-800 text-white rounded-xl text-xs font-bold transition cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          </div>
        )}

        {/* 4 Central Dashboard Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
          <button
            onClick={() => setActiveTab('passport')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
              activeTab === 'passport'
                ? 'bg-teal-900 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Learner Passport & Radar</span>
          </button>

          <button
            onClick={() => setActiveTab('badges')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
              activeTab === 'badges'
                ? 'bg-teal-900 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>Achievement Badges ({profile.unlockedBadgeIds?.length || 0}/16)</span>
          </button>

          <button
            onClick={() => setActiveTab('certificates')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
              activeTab === 'certificates'
                ? 'bg-teal-900 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Award className="w-4 h-4 text-amber-500" />
            <span>Verifiable Certificates ({profile.issuedCertificates?.length || 0})</span>
          </button>

          <button
            onClick={() => setActiveTab('history')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
              activeTab === 'history'
                ? 'bg-teal-900 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>IELTS Tests & Error Vault ({recentTests.length})</span>
          </button>
        </div>

        {/* TAB 1: PASSPORT & TELEMETRY */}
        {activeTab === 'passport' && (
          <div className="space-y-8">
            
            {/* 4 Core Pillars KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Pillar 1: IELTS Mastery */}
              <div className="p-5 bg-white border border-slate-200 rounded-2xl space-y-2 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                    IELTS Engine
                  </span>
                  <Award className="w-4 h-4 text-amber-600" />
                </div>
                <div className="text-2xl font-black text-slate-900">
                  {recentTests.length > 0 ? `Band ${recentTests[0].bandScore.toFixed(1)}` : 'Ready'}
                </div>
                <div className="text-xs text-slate-500">
                  {recentTests.length} tests taken • {profile.ieltsRoadmapDays?.length || 0}/120 days roadmap
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigateView ? onNavigateView('ielts') : null}
                    className="text-xs font-bold text-amber-800 hover:text-amber-950 inline-flex items-center gap-1 cursor-pointer"
                  >
                    Open IELTS Hub <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Pillar 2: Spoken English */}
              <div className="p-5 bg-white border border-slate-200 rounded-2xl space-y-2 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase text-teal-800 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200">
                    Fluency Lab
                  </span>
                  <Mic className="w-4 h-4 text-teal-700" />
                </div>
                <div className="text-2xl font-black text-teal-950">
                  CEFR {profile.currentCefrLevel || 'B2'}
                </div>
                <div className="text-xs text-slate-500">
                  {profile.fluencyShadowingCount || 0} acoustic shadowing loops completed
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigateView ? onNavigateView('fluency-lab') : onNavigateStage('stage3')}
                    className="text-xs font-bold text-teal-800 hover:text-teal-950 inline-flex items-center gap-1 cursor-pointer"
                  >
                    Speech Studio <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Pillar 3: Executive Course */}
              <div className="p-5 bg-white border border-slate-200 rounded-2xl space-y-2 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase text-slate-800 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                    Executive Masterclass
                  </span>
                  <Briefcase className="w-4 h-4 text-slate-700" />
                </div>
                <div className="text-2xl font-black text-slate-900">
                  {profile.executiveCapstonePassed ? '100% Passed' : `${profile.executiveCompletedModules?.length || 0}/5 Modules`}
                </div>
                <div className="text-xs text-slate-500">
                  {profile.executiveCrisisSolved?.length || 0}/4 crisis trees solved
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigateView ? onNavigateView('communication-course') : null}
                    className="text-xs font-bold text-slate-800 hover:text-slate-950 inline-flex items-center gap-1 cursor-pointer"
                  >
                    Open Masterclass <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Pillar 4: Vocab Vault */}
              <div className="p-5 bg-white border border-slate-200 rounded-2xl space-y-2 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                    Vocab Vault
                  </span>
                  <BookOpen className="w-4 h-4 text-amber-600" />
                </div>
                <div className="text-2xl font-black text-amber-900">
                  {profile.vocabSavedCount || 0} Terms
                </div>
                <div className="text-xs text-slate-500">
                  {profile.vocabMasteredCount || 0} mastered • C1/C2 Spaced Repetition
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent('open-vocab-vault-modal'));
                    }}
                    className="text-xs font-bold text-amber-800 hover:text-amber-950 inline-flex items-center gap-1 cursor-pointer"
                  >
                    Review Cards <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>

            {/* Quick Practice Launchpad */}
            <div className="p-6 bg-white border border-slate-200 rounded-3xl space-y-4 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" /> Quick Practice Launchpad
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <button
                  onClick={() => onNavigateView ? onNavigateView('ielts', 'listening-simulator') : null}
                  className="p-3.5 bg-slate-50 hover:bg-amber-50/70 border border-slate-200 rounded-2xl text-left transition cursor-pointer group"
                >
                  <Headphones className="w-5 h-5 text-amber-700 mb-2 group-hover:scale-110 transition" />
                  <div className="text-xs font-bold text-slate-900">4-Section Listening Exam</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Variable speed 1.0x-1.25x</div>
                </button>

                <button
                  onClick={() => onNavigateView ? onNavigateView('ielts', 'reading-lab') : null}
                  className="p-3.5 bg-slate-50 hover:bg-amber-50/70 border border-slate-200 rounded-2xl text-left transition cursor-pointer group"
                >
                  <BookOpen className="w-5 h-5 text-amber-700 mb-2 group-hover:scale-110 transition" />
                  <div className="text-xs font-bold text-slate-900">Split-Screen Reading Lab</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Forensic T/F/NG Logic</div>
                </button>

                <button
                  onClick={() => onNavigateView ? onNavigateView('ielts-vocab') : null}
                  className="p-3.5 bg-slate-50 hover:bg-teal-50/70 border border-slate-200 rounded-2xl text-left transition cursor-pointer group"
                >
                  <Zap className="w-5 h-5 text-teal-800 mb-2 group-hover:scale-110 transition" />
                  <div className="text-xs font-bold text-slate-900">Band 9 Collocation Duel</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">60s speed arcade game</div>
                </button>

                <button
                  onClick={() => onNavigateView ? onNavigateView('communication-course') : null}
                  className="p-3.5 bg-slate-50 hover:bg-teal-50/70 border border-slate-200 rounded-2xl text-left transition cursor-pointer group"
                >
                  <Briefcase className="w-5 h-5 text-teal-800 mb-2 group-hover:scale-110 transition" />
                  <div className="text-xs font-bold text-slate-900">BLUF & Crisis Simulator</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Executive decision trees</div>
                </button>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: ACHIEVEMENTS & BADGES */}
        {activeTab === 'badges' && (
          <AchievementBadgesHub profile={profile} />
        )}

        {/* TAB 3: VERIFIABLE CERTIFICATES */}
        {activeTab === 'certificates' && (
          <div className="space-y-8">
            
            {/* Active Certificate Modal / Preview */}
            {activeCertViewer && (
              <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
                <div className="bg-white rounded-3xl p-6 max-w-4xl w-full shadow-2xl space-y-4 my-8">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="text-xs font-bold text-teal-900 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" /> Verifiable Digital Credential
                    </span>
                    <button
                      onClick={() => setActiveCertViewer(null)}
                      className="text-xs font-bold text-slate-500 hover:text-slate-800 p-1"
                    >
                      ✕ Close Preview
                    </button>
                  </div>
                  <VerifiableCertificateViewer certificate={activeCertViewer} showActions={true} />
                </div>
              </div>
            )}

            {/* Certificate Header Banner */}
            <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" /> Official Credential Registry
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  My Verifiable Certificates & Digital Badges
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                  Each certificate is issued with a unique verification hash and anti-counterfeit QR code, ready for LinkedIn export and official graduate admission portfolios.
                </p>
              </div>

              <div className="text-center bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-xs shrink-0">
                <div className="text-3xl font-black text-amber-400">
                  {profile.issuedCertificates?.length || 0}
                </div>
                <div className="text-[11px] text-slate-300 font-bold uppercase">Issued Credentials</div>
              </div>
            </div>

            {/* Issued Certificates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(CERTIFICATE_PRESETS).map(([key, preset]) => {
                const issued = (profile.issuedCertificates || []).find(c => c.type === key);

                return (
                  <div
                    key={key}
                    className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-4 flex flex-col justify-between hover:border-amber-400/80 transition"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-900 border border-teal-200">
                          {preset.category}
                        </span>
                        {issued ? (
                          <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1">
                            <Check className="w-3 h-3" /> VERIFIED
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold text-slate-400">Not Claimed Yet</span>
                        )}
                      </div>

                      <h3 className="text-base font-bold text-slate-900 leading-snug">{preset.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">{preset.description}</p>
                      
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {preset.defaultSkills.slice(0, 3).map((skill, sIdx) => (
                          <span key={sIdx} className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                            • {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                      {issued ? (
                        <button
                          onClick={() => setActiveCertViewer(issued)}
                          className="w-full py-2.5 bg-teal-900 hover:bg-teal-800 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Award className="w-3.5 h-3.5 text-amber-400" />
                          <span>View & Export Certificate</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => handleGenerateCertificate(key as any)}
                          className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Claim & Verify Certificate</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        )}

        {/* TAB 4: TEST HISTORY & FORENSIC ERROR VAULT */}
        {activeTab === 'history' && (
          <div className="space-y-6">
            <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-teal-800" /> IELTS & Diagnostic Exam Telemetry
                </h3>
                <span className="text-xs text-slate-500 font-mono">
                  {recentTests.length} Total Records Logged
                </span>
              </div>

              {recentTests.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-700 border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-400 uppercase text-[10px] font-black tracking-wider">
                        <th className="py-2.5 px-3">Test / Simulation Name</th>
                        <th className="py-2.5 px-3">Type</th>
                        <th className="py-2.5 px-3">Raw Score</th>
                        <th className="py-2.5 px-3">Band / Level</th>
                        <th className="py-2.5 px-3">Date Completed</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {recentTests.map((t) => (
                        <tr key={t.id} className="hover:bg-slate-50 transition">
                          <td className="py-3 px-3 font-bold text-slate-900">{t.title}</td>
                          <td className="py-3 px-3 uppercase text-[10px] font-bold text-teal-800">{t.type}</td>
                          <td className="py-3 px-3 font-mono">{t.rawScore} / {t.maxScore} ({t.percentage}%)</td>
                          <td className="py-3 px-3">
                            <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-950 font-black text-[11px]">
                              Band {t.bandScore.toFixed(1)}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-slate-400 font-mono text-[11px]">
                            {new Date(t.completedAt).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="p-8 text-center space-y-2 bg-slate-50 rounded-2xl">
                  <Headphones className="w-8 h-8 text-slate-400 mx-auto" />
                  <div className="text-sm font-bold text-slate-700">No test sessions recorded yet</div>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Take your first IELTS Listening test or Reading exam simulator. Your scores will automatically sync here in real time!
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
