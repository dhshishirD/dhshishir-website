export interface CvServicePlan {
  id: string;
  name: string;
  price: string;
  tagline: string;
  badge?: string;
  features: string[];
  recommendedFor: string;
  ctaText: string;
}

export const CV_SERVICES_DATA: CvServicePlan[] = [
  {
    id: 'free-template',
    name: 'Standard ATS CV Template',
    price: 'Free ($0)',
    tagline: 'Clean, ATS-compliant Microsoft Word & PDF starter format.',
    features: [
      'Single/Two Column ATS Friendly Layout',
      'Standard Font Hierarchy (Calibri / Arial)',
      'Pre-formatted Sections (Summary, Skills, Exp, Edu)',
      'Instant Download in .DOCX & .PDF'
    ],
    recommendedFor: 'University Freshers & Entry-Level Job Seekers',
    ctaText: 'Download Free Template'
  },
  {
    id: 'pro-ats-review',
    name: 'Pro ATS Audit & Re-write',
    price: '? ???',
    badge: 'Most Popular',
    tagline: 'Complete overhaul of your CV with keyword optimization for your target job.',
    features: [
      'Comprehensive 25-Point ATS Metric Audit',
      'Action-Verb & Bullet Point Re-engineering',
      'Industry-Specific Keyword Enrichment',
      'Custom Tailored Cover Letter Template Included',
      'Delivery in both Editable DOCX & High-Res PDF within 48 Hours'
    ],
    recommendedFor: '1-5 Years Experienced Professionals & Career Switchers',
    ctaText: 'Book Pro CV Review'
  },
  {
    id: 'executive-career-suite',
    name: 'Executive Career Suite + LinkedIn',
    price: '? ?,???',
    badge: 'VIP Full Package',
    tagline: 'Executive Level CV + Cover Letter + Full LinkedIn Profile Optimization.',
    features: [
      'Executive Leadership Impact CV Crafting',
      'Full LinkedIn Profile Headline, About & Experience SEO',
      '30-Minute 1-on-1 Career Strategy Consultation with Shishir',
      'Unlimited Revisions for 14 Days',
      'Priority Delivery within 24 Hours'
    ],
    recommendedFor: 'Managers, Team Leads, Overseas Job Seekers & Executives',
    ctaText: 'Get VIP Career Suite'
  }
];
