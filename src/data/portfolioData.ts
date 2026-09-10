export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
  badge?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface InternationalDelegation {
  title: string;
  organizer: string;
  date: string;
  locations: string;
  description: string;
  topics: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'young-leaders-china',
    role: 'Young Leaders Program Delegate (Bangladesh Representative)',
    organization: 'Shanghai Institutes for International Studies & ACCWS',
    period: 'June 2025',
    location: 'Guangzhou, Shanghai & Beijing, China',
    type: 'International Delegation',
    badge: 'Global Fellowship',
    highlights: [
      'Competitively selected to represent Bangladesh in high-level policy dialogues on urban governance and sustainable development.',
      'Visited New Development Bank (NDB) headquarters in Shanghai for bilateral dialogues on development finance.',
      'Presented perspectives on South Asian youth mobilization and climate-adaptive community governance.'
    ]
  },
  {
    id: 'ucc-senior-lecturer',
    role: 'Senior Lecturer of English Language & Grammar',
    organization: 'University Coaching Center (UCC)',
    period: 'May 2019 - Present (7+ Years)',
    location: 'Bangladesh',
    type: 'Academic Teaching',
    badge: 'Teaching Excellence',
    highlights: [
      'Guided thousands of students to successfully crack public university admissions across Bangladesh (DU, SUST, JU, RU, CU).',
      'Specialized in English Grammar, Lexical Precision, Sentence Structure & Analytical Comprehension.',
      'Designed structured question-solving methodologies and admissions strategy modules.'
    ]
  },
  {
    id: 'uswa-president',
    role: 'President',
    organization: 'University Students’ Welfare Association (USWA)',
    period: 'Feb 2025 - Present',
    location: 'Sylhet & Jashore, Bangladesh',
    type: 'Executive Leadership',
    badge: 'Student Leadership',
    highlights: [
      'Directing a 31-member executive council coordinating welfare and academic support reaching 500+ students annually.',
      'Facilitating strategic collaborations among university alumni, local stakeholders, and youth representatives.'
    ]
  },
  {
    id: 'mangrove-president',
    role: 'President',
    organization: 'Mangrove Association SUST',
    period: 'Apr 2023 - Apr 2024',
    location: 'Shahjalal University of Science and Technology (SUST)',
    type: 'Regional Student Leadership',
    highlights: [
      'Led the largest regional student network (from Khulna Division) at SUST with 500+ student members and 70+ faculty advisors.',
      'Organized 10+ annual academic summits and cultural conventions, boosting active student engagement by 30%.'
    ]
  },
  {
    id: 'ced-trainer',
    role: 'Course Trainer (Spoken English)',
    organization: 'Career Education Development Foundation (CED Foundation)',
    period: 'August 2026',
    location: 'Bangladesh',
    type: 'Professional Training',
    highlights: [
      'Delivered intensive Spoken English masterclasses for the 10-Day Pre-College Skills Development Camp.',
      'Awarded Certificate of Appreciation for outstanding student training outcomes.'
    ]
  },
  {
    id: 'radium-director',
    role: 'Assistant Director',
    organization: 'Radium Engineering & Admission Coaching Centre',
    period: 'Dec 2021 - Dec 2023 (2 Years)',
    location: 'Sylhet, Bangladesh',
    type: 'Academic Operations',
    highlights: [
      'Managed daily operations and student support systems for an institution serving 1,200+ students annually.'
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'Master of Arts (MA) in English Language & Literature',
    institution: 'Shahjalal University of Science and Technology (SUST)',
    period: 'Jan 2024 – Jan 2025',
    details: 'Advanced studies in Applied Linguistics, Discourse Analysis, Literary Criticism, and Strategic English Communication.'
  },
  {
    degree: 'Bachelor of Arts (BA Hons) in English Language & Literature',
    institution: 'Shahjalal University of Science and Technology (SUST)',
    period: 'Jan 2019 – Dec 2023',
    details: 'Graduated with strong academic grounding in English Grammar, Phonetics, World Literature, and Public Speaking.'
  }
];

export const CERTIFICATIONS = [
  {
    title: 'Training Program for Young Leaders from Bangladesh to China',
    issuer: 'Shanghai Institutes for International Studies (SIIS)',
    date: 'Issued June 2025',
    skills: 'Public Diplomacy, Policy Dialogue, International Relations'
  },
  {
    title: 'Elevate Your Public Speaking Certification',
    issuer: 'Bohubrihi',
    date: 'Credential ID: 6721e028504e17e405dd7d52',
    skills: 'Public Speaking, Speech Architecture, Audience Engagement'
  },
  {
    title: 'Bangla Shahitya Angan National Award 2019',
    issuer: 'Bangla Shahitya Angan',
    date: 'Issued March 2019',
    skills: 'Creative Writing, Storytelling & Literature'
  }
];
