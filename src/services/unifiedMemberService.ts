// Unified Member Telemetry & Learning Passport Service
// Single source of truth across IELTS, Fluency Lab, Executive Communication, Vocab Vault & Diplomacy

import { supabase } from './supabaseClient';
import { ACHIEVEMENT_BADGES } from '../data/achievementBadgesData';
import type { AchievementBadge } from '../data/achievementBadgesData';

export interface IeltsTestRecord {
  id: string;
  type: 'listening' | 'reading' | 'writing' | 'speaking' | 'duel';
  title: string;
  rawScore: number;
  maxScore: number;
  bandScore: number;
  percentage: number;
  completedAt: string;
  details?: Record<string, any>;
}

export interface ErrorVaultEntry {
  id: string;
  sourceTool: string;
  questionPrompt: string;
  userError: string;
  forensicCorrection: string;
  reviewStatus: 'needs_review' | 'mastered';
  loggedAt: string;
}

export interface IssuedCertificate {
  id: string;
  type: 'executive_communication' | 'ielts_vocab_mastery' | 'cefr_fluency_proficiency' | 'ir_diplomatic_fellowship';
  title: string;
  recipientName: string;
  issueDate: string;
  scoreOrLevel: string;
  verificationHash: string;
  verificationUrl: string;
  skillsVerified: string[];
}

export interface UnifiedMemberProfile {
  id: string;
  email?: string;
  fullName: string;
  avatarUrl?: string;
  bio?: string;
  targetGoal: 'ielts_band_8_5' | 'diplomacy_career' | 'global_scholarship' | 'corporate_leadership';
  targetIeltsBand: number;
  currentCefrLevel: string;
  streakDays: number;
  lastActiveDate: string;
  totalPoints: number;

  // 1. IELTS Telemetry
  ieltsHistory: IeltsTestRecord[];
  ieltsRoadmapDays: number[];
  ieltsErrorVault: ErrorVaultEntry[];
  collocationDuelHighScore: number;

  // 2. Fluency Lab Telemetry
  fluencyShadowingCount: number;
  flaggedWeakPatterns: string[];

  // 3. Executive Course Telemetry
  executiveCompletedModules: number[];
  executiveCrisisSolved: string[];
  executiveCapstoneScore: number | null;
  executiveCapstonePassed: boolean;

  // 4. Vocab Vault Telemetry
  vocabSavedCount: number;
  vocabMasteredCount: number;

  // 5. Diplomatic Telemetry
  diplomacyDossiersRead: string[];
  diplomacyMapLocationsVisited: string[];
  fellowshipModulesCompleted: number[];

  // 6. Badges & Certificates
  unlockedBadgeIds: string[];
  issuedCertificates: IssuedCertificate[];
}

const STORAGE_KEY = 'dhshishir_unified_member_v2';

// Default initial state
const DEFAULT_PROFILE: UnifiedMemberProfile = {
  id: 'guest_user',
  fullName: 'Learner Space',
  targetGoal: 'ielts_band_8_5',
  targetIeltsBand: 8.5,
  currentCefrLevel: 'B2',
  streakDays: 1,
  lastActiveDate: new Date().toISOString(),
  totalPoints: 100,

  ieltsHistory: [],
  ieltsRoadmapDays: [1, 2],
  ieltsErrorVault: [],
  collocationDuelHighScore: 0,

  fluencyShadowingCount: 0,
  flaggedWeakPatterns: [],

  executiveCompletedModules: [],
  executiveCrisisSolved: [],
  executiveCapstoneScore: null,
  executiveCapstonePassed: false,

  vocabSavedCount: 0,
  vocabMasteredCount: 0,

  diplomacyDossiersRead: [],
  diplomacyMapLocationsVisited: [],
  fellowshipModulesCompleted: [],

  unlockedBadgeIds: [],
  issuedCertificates: []
};

// Retrieve unified profile
export const getUnifiedMemberProfile = (): UnifiedMemberProfile => {
  if (typeof window === 'undefined') return DEFAULT_PROFILE;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROFILE;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_PROFILE, ...parsed };
  } catch (err) {
    console.error('Error reading unified member profile:', err);
    return DEFAULT_PROFILE;
  }
};

// Save unified profile and dispatch event
export const saveUnifiedMemberProfile = (updated: Partial<UnifiedMemberProfile>): UnifiedMemberProfile => {
  const current = getUnifiedMemberProfile();
  const merged: UnifiedMemberProfile = {
    ...current,
    ...updated,
    lastActiveDate: new Date().toISOString()
  };

  // Re-calculate badges and total points
  merged.unlockedBadgeIds = evaluateEarnedBadges(merged);
  merged.totalPoints = calculateTotalPoints(merged);

  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    window.dispatchEvent(new CustomEvent('dhshishir-telemetry-updated', { detail: merged }));
  }

  return merged;
};

// Calculate total gamified learning points
export const calculateTotalPoints = (profile: UnifiedMemberProfile): number => {
  let points = 100; // Base onboarding points

  // IELTS tests points
  points += (profile.ieltsHistory?.length || 0) * 150;
  points += (profile.ieltsRoadmapDays?.length || 0) * 25;
  points += (profile.collocationDuelHighScore || 0) * 30;

  // Fluency points
  points += (profile.fluencyShadowingCount || 0) * 50;

  // Executive course points
  points += (profile.executiveCompletedModules?.length || 0) * 100;
  points += (profile.executiveCrisisSolved?.length || 0) * 150;
  if (profile.executiveCapstonePassed) points += 500;

  // Vocab points
  points += (profile.vocabSavedCount || 0) * 15;
  points += (profile.vocabMasteredCount || 0) * 35;

  // Diplomacy points
  points += (profile.diplomacyDossiersRead?.length || 0) * 50;
  points += (profile.diplomacyMapLocationsVisited?.length || 0) * 20;
  points += (profile.fellowshipModulesCompleted?.length || 0) * 100;

  // Certificates bonus
  points += (profile.issuedCertificates?.length || 0) * 400;

  return points;
};

// Evaluate badge progress and unlocked state
export const evaluateEarnedBadges = (profile: UnifiedMemberProfile): string[] => {
  const unlocked = new Set<string>(profile.unlockedBadgeIds || []);

  if ((profile.fluencyShadowingCount || 0) >= 1) unlocked.add('cadence_pioneer');
  if ((profile.streakDays || 1) >= 7) unlocked.add('unbroken_momentum');
  if ((profile.collocationDuelHighScore || 0) >= 10) unlocked.add('collocation_duelist');
  if ((profile.vocabSavedCount || 0) >= 25) unlocked.add('lexicon_architect');
  if ((profile.diplomacyDossiersRead?.length || 0) >= 5) unlocked.add('diplomatic_strategist');
  if (profile.executiveCompletedModules?.includes(3)) unlocked.add('harvard_negotiator');
  if (profile.ieltsHistory?.some(t => t.type === 'reading' && t.percentage === 100)) unlocked.add('forensic_juror');
  if (profile.ieltsHistory?.some(t => t.type === 'writing')) unlocked.add('task1_visualizer');
  if (profile.ieltsHistory?.some(t => t.type === 'listening' && t.bandScore >= 8.0)) unlocked.add('listening_ace');
  if ((profile.executiveCrisisSolved?.length || 0) >= 4) unlocked.add('crisis_commander');
  if ((profile.fellowshipModulesCompleted?.length || 0) >= 3) unlocked.add('fellowship_scholar');
  if (profile.ieltsHistory?.some(t => t.type === 'writing')) unlocked.add('ocr_essay_analyst');
  if (profile.executiveCapstonePassed) unlocked.add('executive_masterclass_grad');
  if ((profile.diplomacyMapLocationsVisited?.length || 0) >= 10) unlocked.add('maritime_geopolitician');
  if ((profile.ieltsRoadmapDays?.length || 0) >= 30) unlocked.add('roadmap_centurion');
  if ((profile.issuedCertificates?.length || 0) >= 3) unlocked.add('universal_polymath');

  return Array.from(unlocked);
};

// Get Badge Progress Map
export const getBadgeProgress = (badge: AchievementBadge, profile: UnifiedMemberProfile): { current: number; max: number; isUnlocked: boolean; pct: number } => {
  let current = 0;
  const isUnlocked = profile.unlockedBadgeIds?.includes(badge.id) || false;

  switch (badge.id) {
    case 'cadence_pioneer':
      current = profile.fluencyShadowingCount || 0;
      break;
    case 'unbroken_momentum':
      current = profile.streakDays || 1;
      break;
    case 'collocation_duelist':
      current = profile.collocationDuelHighScore || 0;
      break;
    case 'lexicon_architect':
      current = profile.vocabSavedCount || 0;
      break;
    case 'diplomatic_strategist':
      current = profile.diplomacyDossiersRead?.length || 0;
      break;
    case 'harvard_negotiator':
      current = profile.executiveCompletedModules?.includes(3) ? 1 : 0;
      break;
    case 'forensic_juror':
      current = profile.ieltsHistory?.some(t => t.type === 'reading' && t.percentage === 100) ? 1 : 0;
      break;
    case 'task1_visualizer':
      current = profile.ieltsHistory?.filter(t => t.type === 'writing').length || 0;
      break;
    case 'listening_ace':
      current = Math.max(0, ...(profile.ieltsHistory?.filter(t => t.type === 'listening').map(t => t.rawScore) || [0]));
      break;
    case 'crisis_commander':
      current = profile.executiveCrisisSolved?.length || 0;
      break;
    case 'fellowship_scholar':
      current = profile.fellowshipModulesCompleted?.length || 0;
      break;
    case 'ocr_essay_analyst':
      current = profile.ieltsHistory?.filter(t => t.type === 'writing').length || 0;
      break;
    case 'executive_masterclass_grad':
      current = profile.executiveCapstoneScore || 0;
      break;
    case 'maritime_geopolitician':
      current = profile.diplomacyMapLocationsVisited?.length || 0;
      break;
    case 'roadmap_centurion':
      current = profile.ieltsRoadmapDays?.length || 0;
      break;
    case 'universal_polymath':
      current = profile.issuedCertificates?.length || 0;
      break;
    default:
      current = isUnlocked ? badge.maxProgress : 0;
  }

  const cappedCurrent = Math.min(badge.maxProgress, current);
  const pct = Math.round((cappedCurrent / badge.maxProgress) * 100);

  return {
    current: cappedCurrent,
    max: badge.maxProgress,
    isUnlocked: isUnlocked || pct >= 100,
    pct: Math.min(100, pct)
  };
};

// 1. Record IELTS Test Result (Listening / Reading / Writing / Speaking / Duel)
export const recordIeltsTestResult = (record: Omit<IeltsTestRecord, 'id' | 'completedAt'>): IeltsTestRecord => {
  const current = getUnifiedMemberProfile();
  const newRecord: IeltsTestRecord = {
    ...record,
    id: `ielts_test_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    completedAt: new Date().toISOString()
  };

  const updatedHistory = [newRecord, ...(current.ieltsHistory || [])].slice(0, 50); // keep last 50
  let duelHighScore = current.collocationDuelHighScore || 0;
  if (record.type === 'duel' && record.rawScore > duelHighScore) {
    duelHighScore = record.rawScore;
  }

  saveUnifiedMemberProfile({
    ieltsHistory: updatedHistory,
    collocationDuelHighScore: duelHighScore
  });

  return newRecord;
};

// 2. Record 120-Day Roadmap Check
export const toggleRoadmapDay = (dayNumber: number): number[] => {
  const current = getUnifiedMemberProfile();
  const days = new Set(current.ieltsRoadmapDays || []);
  if (days.has(dayNumber)) {
    days.delete(dayNumber);
  } else {
    days.add(dayNumber);
  }
  const updated = Array.from(days).sort((a, b) => a - b);
  saveUnifiedMemberProfile({ ieltsRoadmapDays: updated });
  return updated;
};

// 3. Log Error to 1:2 Forensic Error Vault
export const logErrorToVault = (entry: Omit<ErrorVaultEntry, 'id' | 'loggedAt' | 'reviewStatus'>): ErrorVaultEntry => {
  const current = getUnifiedMemberProfile();
  const newEntry: ErrorVaultEntry = {
    ...entry,
    id: `err_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    reviewStatus: 'needs_review',
    loggedAt: new Date().toISOString()
  };

  const updated = [newEntry, ...(current.ieltsErrorVault || [])];
  saveUnifiedMemberProfile({ ieltsErrorVault: updated });
  return newEntry;
};

// 4. Record Executive Course Progression
export const recordExecutiveCourseProgress = (payload: {
  moduleId?: number;
  crisisId?: string;
  capstoneScore?: number;
}): void => {
  const current = getUnifiedMemberProfile();
  const modules = new Set(current.executiveCompletedModules || []);
  const crises = new Set(current.executiveCrisisSolved || []);

  if (payload.moduleId) modules.add(payload.moduleId);
  if (payload.crisisId) crises.add(payload.crisisId);

  const isPassed = (payload.capstoneScore !== undefined ? payload.capstoneScore >= 8 : current.executiveCapstonePassed);

  saveUnifiedMemberProfile({
    executiveCompletedModules: Array.from(modules),
    executiveCrisisSolved: Array.from(crises),
    executiveCapstoneScore: payload.capstoneScore !== undefined ? payload.capstoneScore : current.executiveCapstoneScore,
    executiveCapstonePassed: isPassed
  });
};

// 5. Issue and Save Verifiable Certificate
export const issueUnifiedCertificate = (certData: {
  type: IssuedCertificate['type'];
  title: string;
  recipientName: string;
  scoreOrLevel: string;
  skillsVerified: string[];
}): IssuedCertificate => {
  const current = getUnifiedMemberProfile();
  const hash = `DHS-CERT-2026-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
  const certId = `cert_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
  
  const newCert: IssuedCertificate = {
    id: certId,
    type: certData.type,
    title: certData.title,
    recipientName: certData.recipientName || current.fullName,
    issueDate: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }),
    scoreOrLevel: certData.scoreOrLevel,
    verificationHash: hash,
    verificationUrl: `https://dhshishir.com/verify?id=${hash}`,
    skillsVerified: certData.skillsVerified
  };

  const existingIdx = (current.issuedCertificates || []).findIndex(c => c.type === certData.type);
  let updatedCertList: IssuedCertificate[];
  if (existingIdx >= 0) {
    updatedCertList = [...current.issuedCertificates];
    updatedCertList[existingIdx] = newCert;
  } else {
    updatedCertList = [newCert, ...(current.issuedCertificates || [])];
  }

  saveUnifiedMemberProfile({
    issuedCertificates: updatedCertList
  });

  return newCert;
};

// 6. Record Diplomatic Action
export const recordDiplomaticVisit = (type: 'dossier' | 'map' | 'fellowship', id: string | number): void => {
  const current = getUnifiedMemberProfile();
  if (type === 'dossier') {
    const set = new Set(current.diplomacyDossiersRead || []);
    set.add(String(id));
    saveUnifiedMemberProfile({ diplomacyDossiersRead: Array.from(set) });
  } else if (type === 'map') {
    const set = new Set(current.diplomacyMapLocationsVisited || []);
    set.add(String(id));
    saveUnifiedMemberProfile({ diplomacyMapLocationsVisited: Array.from(set) });
  } else if (type === 'fellowship') {
    const set = new Set(current.fellowshipModulesCompleted || []);
    set.add(Number(id));
    saveUnifiedMemberProfile({ fellowshipModulesCompleted: Array.from(set) });
  }
};

// 7. Sync Local Telemetry with Cloud Supabase
export const syncUnifiedMemberWithCloud = async (userId: string, email?: string, fullName?: string) => {
  if (!userId) return null;
  const local = getUnifiedMemberProfile();

  try {
    const { data: profile, error } = await supabase
      .from('profiles')
      .upsert({
        id: userId,
        email: email || local.email,
        full_name: fullName || local.fullName,
        current_cefr_level: local.currentCefrLevel,
        latest_score: local.ieltsHistory?.[0]?.rawScore || 0,
        flagged_weak_patterns: local.flaggedWeakPatterns || [],
        streak_days: local.streakDays || 1,
        last_active_date: new Date().toISOString()
      })
      .select()
      .single();

    if (error) {
      console.warn('Could not sync profile to cloud:', error.message);
    }
    return profile;
  } catch (err) {
    console.warn('Cloud sync error:', err);
    return null;
  }
};
