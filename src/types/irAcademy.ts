export type TermId = 'term1' | 'term2' | 'term3' | 'term4' | 'capstone';

export type PillarId = 
  | 'pillar1_theories'
  | 'pillar2_fpa'
  | 'pillar3_polpsych_individual'
  | 'pillar4_polpsych_group'
  | 'pillar5_security_strategy'
  | 'pillar6_intl_law'
  | 'pillar7_ipe_geoeconomics'
  | 'pillar8_regional_bangladesh'
  | 'pillar9_crisis_simulation'
  | 'pillar10_capstone_exam';

export interface ReadingItem {
  title: string;
  author: string;
  sourceType: 'Classic Text' | 'Academic Journal' | 'Treaty/Charter' | 'Policy Report';
  coreConcept: string;
}

export interface Lecture {
  id: string;
  pillarId: PillarId;
  lectureNumber: string;
  title: string;
  subtitle: string;
  readTimeMinutes: number;
  overview: string;
  theoreticalFrameworks: {
    name: string;
    concept: string;
    application: string;
  }[];
  statecraftCaseStudy: {
    title: string;
    historicalContext: string;
    strategicAnalysis: string;
    lessonsForStatecraft: string;
  };
  banglaDiplomaticSummary: string;
  analyticalSeminarQuestions: string[];
  keyReadings: ReadingItem[];
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  academicRationale: string;
  banglaExplanation: string;
}

export interface CheckpointQuiz {
  id: string;
  pillarId: PillarId;
  title: string;
  passingScorePercentage: number;
  questions: QuizQuestion[];
}

export interface Pillar {
  id: PillarId;
  termId: TermId;
  termTitle: string;
  pillarNumber: number;
  title: string;
  categoryBadge: string;
  shortDescription: string;
  academicObjective: string;
  competencyArea: string;
  lectures: Lecture[];
  checkpointQuiz: CheckpointQuiz;
}

export interface CrisisOption {
  id: string;
  actionTitle: string;
  actionDescription: string;
  strategicDoctrine: 'Deterrence Escalation' | 'Diplomatic De-escalation' | 'Multilateral Mediation' | 'Asymmetric Hedging';
  projectedOutcomes: {
    sovereigntyImpact: string;
    regionalStability: string;
    geoeconomicCost: string;
  };
  scoreDelta: number;
  evaluationRationale: string;
}

export interface CrisisDilemma {
  id: string;
  stageNumber: number;
  stageTitle: string;
  intelligenceBriefing: string;
  urgentDilemma: string;
  options: CrisisOption[];
}

export interface CrisisScenario {
  id: string;
  title: string;
  theater: string;
  threatLevel: 'Defcon 3' | 'Defcon 2' | 'Defcon 1';
  backgroundContext: string;
  missionObjective: string;
  dilemmas: CrisisDilemma[];
}

export interface GlossaryTerm {
  term: string;
  category: 'IR Theory' | 'Security & Strategy' | 'Political Psychology' | 'Geoeconomics' | 'International Law' | 'Bangladesh Statecraft';
  pronunciationIpa?: string;
  definition: string;
  banglaMeaning: string;
  diplomaticContext: string;
}

export interface FellowshipProfile {
  fellowId: string;
  userAlias: string;
  enrolledDate: string;
  lastActiveDate: string;
  completedLectureIds: string[];
  passedCheckpointPillarIds: string[];
  checkpointScores: Record<string, number>;
  crisisSimulationPassed: boolean;
  crisisSimulationScore: number;
  grandExamScore: number;
  grandExamPassed: boolean;
  isCompleted: boolean;
  trackType: 'honors' | 'audit' | 'in_progress';
  letterGrade?: 'A+' | 'A' | 'B+' | 'B' | 'Audit Pass';
  gpa?: number;
  credentialId?: string;
  issuedDate?: string;
}
