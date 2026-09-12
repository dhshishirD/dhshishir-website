export type SourceTier = 
  | 'all'
  | 'bd-strategic'
  | 'regional-think-tank'
  | 'global-think-tank'
  | 'ir-journals'
  | 'global-media-multilateral';

export type StrategicPillar = 
  | 'all'
  | 'bay-of-bengal'
  | 'power-balancing'
  | 'trade-ldc'
  | 'climate-diplomacy'
  | 'rohingya-security'
  | 'regional-multilateralism'
  | 'defense-peacekeeping';

export type ImpactLevel = 'High Strategic Significance' | 'Medium Impact' | 'Global Systemic Trend';

export interface IntelItem {
  id: string;
  title: string;
  source: string; // e.g. "BIISS", "CSIS", "ORF", "The Diplomat", "Foreign Affairs", "Reuters"
  sourceTier: 'bd-strategic' | 'regional-think-tank' | 'global-think-tank' | 'ir-journals' | 'global-media-multilateral';
  publishedAt: string;
  pillar: 'bay-of-bengal' | 'power-balancing' | 'trade-ldc' | 'climate-diplomacy' | 'rohingya-security' | 'regional-multilateralism' | 'defense-peacekeeping';
  impactLevel: ImpactLevel;
  executiveSummary: string;
  bangladeshSignificance: string;
  strategicRisks?: string[];
  strategicOpportunities?: string[];
  policyRecommendations?: string[];
  keyActors: string[];
  originalUrl: string;
  readTime: string;
  tags: string[];
}

export interface DiplomaticBookmark {
  id: string;
  intelId: string;
  userId?: string;
  savedAt: string;
  note?: string;
  tags?: string[];
}

export interface PolicyMemo {
  id: string;
  title: string;
  pillar: StrategicPillar;
  summary: string;
  content: string;
  recommendations: string[];
  status: 'draft' | 'published';
  author: string;
  createdAt: string;
  updatedAt: string;
}
