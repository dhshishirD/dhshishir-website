import type { FellowshipProfile } from '../types/irAcademy';

const STORAGE_KEY = 'dhshishir_ir_fellowship_profile_v1';

export const getDefaultFellowshipProfile = (): FellowshipProfile => {
  const generatedId = 'IR-' + Math.random().toString(36).substring(2, 9).toUpperCase();
  return {
    fellowId: generatedId,
    userAlias: 'Fellow Candidate',
    enrolledDate: new Date().toISOString().split('T')[0],
    lastActiveDate: new Date().toISOString().split('T')[0],
    completedLectureIds: [],
    passedCheckpointPillarIds: [],
    checkpointScores: {},
    crisisSimulationPassed: false,
    crisisSimulationScore: 0,
    grandExamScore: 0,
    grandExamPassed: false,
    isCompleted: false,
    trackType: 'in_progress'
  };
};

export const getFellowshipProfile = (): FellowshipProfile => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const initial = getDefaultFellowshipProfile();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
      return initial;
    }
    const parsed = JSON.parse(raw);
    return {
      ...getDefaultFellowshipProfile(),
      ...parsed
    };
  } catch (err) {
    console.error('Error loading IR fellowship profile from localStorage:', err);
    return getDefaultFellowshipProfile();
  }
};

export const saveFellowshipProfile = (profile: FellowshipProfile): void => {
  try {
    const updated = {
      ...profile,
      lastActiveDate: new Date().toISOString().split('T')[0]
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Error saving IR fellowship profile to localStorage:', err);
  }
};

export const markLectureAsCompleted = (lectureId: string): FellowshipProfile => {
  const current = getFellowshipProfile();
  if (!current.completedLectureIds.includes(lectureId)) {
    current.completedLectureIds.push(lectureId);
    saveFellowshipProfile(current);
  }
  return current;
};

export const recordCheckpointScore = (pillarId: string, score: number, passed: boolean): FellowshipProfile => {
  const current = getFellowshipProfile();
  current.checkpointScores[pillarId] = score;
  if (passed && !current.passedCheckpointPillarIds.includes(pillarId)) {
    current.passedCheckpointPillarIds.push(pillarId);
  }
  saveFellowshipProfile(current);
  return current;
};

export const recordCrisisSimulationResult = (score: number, passed: boolean): FellowshipProfile => {
  const current = getFellowshipProfile();
  current.crisisSimulationScore = score;
  current.crisisSimulationPassed = passed;
  saveFellowshipProfile(current);
  return current;
};

export const recordGrandExamResult = (scorePercentage: number, passed: boolean): FellowshipProfile => {
  const current = getFellowshipProfile();
  current.grandExamScore = scorePercentage;
  current.grandExamPassed = passed;

  if (passed) {
    current.isCompleted = true;
    if (scorePercentage >= 90) {
      current.trackType = 'honors';
      current.letterGrade = 'A+';
      current.gpa = 4.0;
    } else if (scorePercentage >= 80) {
      current.trackType = 'honors';
      current.letterGrade = 'A';
      current.gpa = 3.75;
    } else if (scorePercentage >= 70) {
      current.trackType = 'honors';
      current.letterGrade = 'B+';
      current.gpa = 3.5;
    } else {
      current.trackType = 'audit';
      current.letterGrade = 'Audit Pass';
      current.gpa = 3.0;
    }

    if (!current.credentialId) {
      current.credentialId = `OMF-IRSS-${new Date().getFullYear()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
      current.issuedDate = new Date().toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    }
  }

  saveFellowshipProfile(current);
  return current;
};

export const updateFellowAlias = (alias: string): FellowshipProfile => {
  const current = getFellowshipProfile();
  current.userAlias = alias.trim() || 'Fellow Candidate';
  saveFellowshipProfile(current);
  return current;
};
