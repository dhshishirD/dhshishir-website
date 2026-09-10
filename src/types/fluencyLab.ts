export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export type WeakPatternKey = 
  | 'v_b_confusion' 
  | 'th_dental_fricatives' 
  | 'syllable_stress' 
  | 'short_long_vowels' 
  | 'consonant_clusters' 
  | 'uncountable_nouns' 
  | 'tense_harmony' 
  | 'prepositional_collocations';

export interface WeakPatternInfo {
  key: WeakPatternKey;
  name: string;
  banglaExplanation: string;
  exampleTrap: string;
  correctUsage: string;
}

export interface DiagnosticQuestion {
  id: number;
  type: 'reading' | 'listening' | 'speaking_readiness';
  category: string;
  promptText: string;
  banglaPromptSubtitle?: string;
  audioSpeechText?: string; // Text to synthesize via Web Speech API or audio clip
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
  associatedWeakPattern: WeakPatternKey;
  explanationBangla: string;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  cefrLevel: CEFRLevel;
  levelTitle: string;
  levelDescription: string;
  percentage: number;
  flaggedWeakPatterns: WeakPatternKey[];
  readingScore: number;
  listeningScore: number;
  speakingScore: number;
  completedAt: string;
}

export interface FluencyUserProfile {
  userAlias: string;
  hasTakenPlacement: boolean;
  currentCefrLevel?: CEFRLevel;
  latestScore?: number;
  flaggedWeakPatterns: WeakPatternKey[];
  history: QuizResult[];
  streakDays: number;
  lastActiveDate: string;
}
