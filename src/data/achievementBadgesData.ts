// Gamified Achievement Badges Dataset
// 16 Structured Tiers across English, IELTS, Diplomacy, and Executive Leadership

export type BadgeTier = 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond';
export type BadgeCategory = 'all' | 'ielts' | 'fluency' | 'diplomacy' | 'executive' | 'mastery';

export interface AchievementBadge {
  id: string;
  title: string;
  shortDesc: string;
  criteriaDesc: string;
  category: BadgeCategory;
  tier: BadgeTier;
  iconName: string;
  maxProgress: number;
  points: number;
}

export const ACHIEVEMENT_BADGES: AchievementBadge[] = [
  {
    id: 'cadence_pioneer',
    title: 'Cadence Pioneer',
    shortDesc: 'Acoustic Speech Shadowing Debut',
    criteriaDesc: 'Complete your first acoustic speech shadowing practice session in the English Fluency Lab.',
    category: 'fluency',
    tier: 'bronze',
    iconName: 'Mic',
    maxProgress: 1,
    points: 100
  },
  {
    id: 'unbroken_momentum',
    title: 'Unbroken Momentum',
    shortDesc: '7-Day Continuous Study Habit',
    criteriaDesc: 'Maintain a 7-day active learning streak across any portal preparation studio.',
    category: 'mastery',
    tier: 'gold',
    iconName: 'Flame',
    maxProgress: 7,
    points: 350
  },
  {
    id: 'collocation_duelist',
    title: 'Collocation Duelist',
    shortDesc: 'Band 9 Speed Arcade Master',
    criteriaDesc: 'Score 10+ correct collocations in the 60-Second Band 9 Speed Collocation Duel.',
    category: 'ielts',
    tier: 'silver',
    iconName: 'Zap',
    maxProgress: 10,
    points: 200
  },
  {
    id: 'lexicon_architect',
    title: 'Lexicon Architect',
    shortDesc: '25+ C1/C2 Words in Vault',
    criteriaDesc: 'Save and review 25 or more CEFR C1/C2 advanced vocabulary items in your Personal Vocab Vault.',
    category: 'fluency',
    tier: 'silver',
    iconName: 'BookOpen',
    maxProgress: 25,
    points: 250
  },
  {
    id: 'diplomatic_strategist',
    title: 'Diplomatic Strategist',
    shortDesc: '5 Strategic Dossiers Explored',
    criteriaDesc: 'Read and analyze 5 comprehensive strategic dossiers in the Foreign Policy & Geopolitics Desk.',
    category: 'diplomacy',
    tier: 'silver',
    iconName: 'Globe',
    maxProgress: 5,
    points: 250
  },
  {
    id: 'harvard_negotiator',
    title: 'Harvard Negotiator',
    shortDesc: 'BATNA / ZOPA Sandbox Mastery',
    criteriaDesc: 'Configure and test reservation values in the Harvard PON negotiation calculator.',
    category: 'executive',
    tier: 'silver',
    iconName: 'Briefcase',
    maxProgress: 1,
    points: 200
  },
  {
    id: 'forensic_juror',
    title: 'Forensic Juror',
    shortDesc: 'IELTS Reading T/F/NG Acumen',
    criteriaDesc: 'Score 100% on the Reading Forensic Courtroom Trial by correctly identifying truth qualifiers.',
    category: 'ielts',
    tier: 'gold',
    iconName: 'Scale',
    maxProgress: 1,
    points: 300
  },
  {
    id: 'task1_visualizer',
    title: 'Task 1 Visualizer',
    shortDesc: 'Interactive SVG Chart Morpher',
    criteriaDesc: 'Morph and generate 3 Band 8.5 reporting sentences using the Academic Task 1 Chart Morpher.',
    category: 'ielts',
    tier: 'bronze',
    iconName: 'BarChart3',
    maxProgress: 3,
    points: 150
  },
  {
    id: 'listening_ace',
    title: 'Listening Ace (Band 8.0+)',
    shortDesc: 'Cambridge Simulation Exam',
    criteriaDesc: 'Score Band 8.0 or higher (16/20+) on the Full 4-Section Listening Exam Simulator.',
    category: 'ielts',
    tier: 'gold',
    iconName: 'Headphones',
    maxProgress: 16,
    points: 400
  },
  {
    id: 'crisis_commander',
    title: 'Crisis Commander',
    shortDesc: '4 Branching Decision Trees Solved',
    criteriaDesc: 'Successfully navigate all 4 high-stakes branching crisis simulators in Executive Communication.',
    category: 'executive',
    tier: 'platinum',
    iconName: 'ShieldAlert',
    maxProgress: 4,
    points: 500
  },
  {
    id: 'fellowship_scholar',
    title: 'Fellowship Scholar',
    shortDesc: 'IR Academic Syllabus Progression',
    criteriaDesc: 'Complete 3 modules in the Open Master’s Fellowship in International Relations curriculum.',
    category: 'diplomacy',
    tier: 'gold',
    iconName: 'GraduationCap',
    maxProgress: 3,
    points: 350
  },
  {
    id: 'ocr_essay_analyst',
    title: 'OCR Essay Analyst',
    shortDesc: 'Handwritten Paper Essay Graded',
    criteriaDesc: 'Upload or paste an IELTS Task 2 handwritten essay and evaluate with the 4-Pillar Rubric Scanner.',
    category: 'ielts',
    tier: 'silver',
    iconName: 'FileSearch',
    maxProgress: 1,
    points: 200
  },
  {
    id: 'executive_masterclass_grad',
    title: 'Executive Masterclass Graduate',
    shortDesc: 'Capstone Exam Score 80%+',
    criteriaDesc: 'Pass the 10-Question Executive Communication Capstone Exam with Distinction (80%+ score).',
    category: 'executive',
    tier: 'platinum',
    iconName: 'Award',
    maxProgress: 8,
    points: 600
  },
  {
    id: 'maritime_geopolitician',
    title: 'Maritime Geopolitician',
    shortDesc: '10 Strategic Map Chokepoints',
    criteriaDesc: 'Inspect 10 critical SLOCs, straits, and naval corridors on the Interactive Diplomatic World Map.',
    category: 'diplomacy',
    tier: 'bronze',
    iconName: 'Compass',
    maxProgress: 10,
    points: 200
  },
  {
    id: 'roadmap_centurion',
    title: 'Roadmap Centurion',
    shortDesc: '30 Daily Roadmap Quotas Logged',
    criteriaDesc: 'Check off 30 daily skill quotas on the 120-Day IELTS Band 8.5-9.0 Daily Roadmap.',
    category: 'ielts',
    tier: 'platinum',
    iconName: 'CheckCircle2',
    maxProgress: 30,
    points: 500
  },
  {
    id: 'universal_polymath',
    title: 'Universal Polymath',
    shortDesc: '3+ Verifiable Digital Credentials',
    criteriaDesc: 'Earn 3 verified certificates across Executive Communication, IELTS, CEFR Fluency, or IR Fellowship.',
    category: 'mastery',
    tier: 'diamond',
    iconName: 'Sparkles',
    maxProgress: 3,
    points: 1000
  }
];

export const TIER_CONFIG: Record<BadgeTier, { label: string; bgClass: string; textClass: string; borderClass: string; glowClass: string }> = {
  bronze: {
    label: 'Bronze Tier',
    bgClass: 'bg-amber-900/10',
    textClass: 'text-amber-700',
    borderClass: 'border-amber-700/30',
    glowClass: 'shadow-amber-900/20'
  },
  silver: {
    label: 'Silver Tier',
    bgClass: 'bg-slate-400/10',
    textClass: 'text-slate-700',
    borderClass: 'border-slate-400/40',
    glowClass: 'shadow-slate-500/20'
  },
  gold: {
    label: 'Gold Tier',
    bgClass: 'bg-amber-400/15',
    textClass: 'text-amber-600',
    borderClass: 'border-amber-400/50',
    glowClass: 'shadow-amber-500/25'
  },
  platinum: {
    label: 'Platinum Tier',
    bgClass: 'bg-teal-500/15',
    textClass: 'text-teal-700',
    borderClass: 'border-teal-500/50',
    glowClass: 'shadow-teal-500/25'
  },
  diamond: {
    label: 'Diamond Tier',
    bgClass: 'bg-purple-500/15',
    textClass: 'text-purple-700',
    borderClass: 'border-purple-500/50',
    glowClass: 'shadow-purple-500/30'
  }
};
