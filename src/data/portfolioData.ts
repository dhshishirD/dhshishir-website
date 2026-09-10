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

export interface MediaMention {
  id: string;
  outlet: string;
  title: string;
  url: string;
  category: string;
  dateBadge: string;
}

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/dhshishir0/",
  linkedin: "https://www.linkedin.com/in/daloyar-hassan1/",
};

export const MEDIA_MENTIONS: MediaMention[] = [
  {
    id: "prothom-alo",
    outlet: "Prothom Alo (প্রথম আলো)",
    title: "শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ের ইংরেজি বিভাগের শিক্ষার্থী দেলোয়ার হাসান শিশির",
    url: "https://www.prothomalo.com/bangladesh/district/n5ggyur619",
    category: "National Daily",
    dateBadge: "Featured News"
  },
  {
    id: "daily-campus",
    outlet: "The Daily Campus",
    title: "শাকসু নির্বাচনে দুর্বার সাস্টিয়ান ঐক্য প্যানেলের ভিপি (সহ-সভাপতি) প্রার্থী হিসেবে আলোচনা",
    url: "https://thedailycampus.com/engineering-university/230711",
    category: "Campus Journalism",
    dateBadge: "SUCSU Election"
  },
  {
    id: "naya-diganta",
    outlet: "Daily Naya Diganta (নয়া দিগন্ত)",
    title: "শাবিপ্রবি শিক্ষার্থী দেলোয়ার হাসান শিশিরের শিক্ষা ও ক্যাম্পাস কার্যক্রম",
    url: "https://dailynayadiganta.com/bangladesh/education-campus/5BiZDXWi26N8",
    category: "National Media",
    dateBadge: "Campus & Education"
  },
  {
    id: "dhruba-news",
    outlet: "Dhruba News",
    title: "সাস্টিয়ান তরুণ নেতৃত্ব ও শিক্ষামূলক উদ্যোগের স্বীকৃতি",
    url: "https://www.dhrubanews.com/details/study/1653",
    category: "News Portal",
    dateBadge: "Youth Leadership"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "malaysia-study-tour",
    role: "Leadership Visiting Fellow — Study of Malaysian Development Model",
    organization: "International Study Tour",
    period: "August 2026",
    location: "Kuala Lumpur & Putrajaya, Malaysia",
    type: "International Policy Study",
    badge: "International Exposure",
    highlights: [
      "Conducted on-site studies on Malaysia's rapid infrastructure evolution, smart urban governance, and institutional models (Perdana Putra, Putrajaya, Merdeka Square).",
      "Analyzed strategic bilateral policy opportunities between Bangladesh and Malaysia beyond labor export, focusing on higher education exchange, technology transfer, and regional economic partnerships."
    ]
  },
  {
    id: "sucsu-vp-candidate",
    role: "Vice President (VP / সহ-সভাপতি) Candidate",
    organization: "Shahjalal University Central Students Union (SUCSU / শাকসু)",
    period: "Campus Leadership",
    location: "Shahjalal University of Science and Technology (SUST)",
    type: "Student Union Representation",
    badge: "SUCSU VP Candidate",
    highlights: [
      "Nominated as the Vice President (VP) candidate from the 'দুর্বার সাস্টিয়ান ঐক্য' (Durbar SUSTian Oikya) panel for the SUCSU (শাকসু) central student union elections.",
      "Advocated for student welfare reforms, merit-based campus governance, and student representation.",
      "Election status: Postponed before the day of voting."
    ]
  },
  {
    id: "young-leaders-china",
    role: "Young Leaders Program Delegate (Bangladesh Representative)",
    organization: "Shanghai Institutes for International Studies & ACCWS",
    period: "June 2025",
    location: "Guangzhou, Shanghai & Beijing, China",
    type: "International Delegation",
    badge: "Global Fellowship",
    highlights: [
      "Competitively selected to represent Bangladesh in high-level policy dialogues on urban governance and sustainable development.",
      "Visited New Development Bank (NDB) headquarters in Shanghai for bilateral dialogues on development finance.",
      "Presented perspectives on South Asian youth mobilization and climate-adaptive community governance."
    ]
  },
  {
    id: "ucc-senior-lecturer",
    role: "Senior Lecturer of English Language & Grammar",
    organization: "University Coaching Center (UCC)",
    period: "May 2019 - Present (7+ Years)",
    location: "Bangladesh",
    type: "Academic Teaching",
    badge: "Teaching Excellence",
    highlights: [
      "Guided thousands of students to successfully crack public university admissions across Bangladesh (DU, SUST, JU, RU, CU).",
      "Specialized in English Grammar, Lexical Precision, Sentence Structure & Analytical Comprehension.",
      "Designed structured question-solving methodologies and admissions strategy modules."
    ]
  },
  {
    id: "uswa-president",
    role: "President",
    organization: "University Students Welfare Association (USWA)",
    period: "Feb 2025 - Present",
    location: "Sylhet & Jashore, Bangladesh",
    type: "Executive Leadership",
    badge: "Student Leadership",
    highlights: [
      "Directing a 31-member executive council coordinating welfare and academic support reaching 500+ students annually.",
      "Facilitating strategic collaborations among university alumni, local stakeholders, and youth representatives."
    ]
  },
  {
    id: "mangrove-president",
    role: "President",
    organization: "Mangrove Association SUST",
    period: "Apr 2023 - Apr 2024",
    location: "Shahjalal University of Science and Technology (SUST)",
    type: "Regional Student Leadership",
    highlights: [
      "Led the largest regional student network (from Khulna Division) at SUST with 500+ student members and 70+ faculty advisors.",
      "Organized 10+ annual academic summits and cultural conventions, boosting active student engagement by 30%."
    ]
  },
  {
    id: "ced-trainer",
    role: "Course Trainer (Spoken English)",
    organization: "Career Education Development Foundation (CED Foundation)",
    period: "August 2026",
    location: "Bangladesh",
    type: "Professional Training",
    highlights: [
      "Delivered intensive Spoken English masterclasses for the 10-Day Pre-College Skills Development Camp.",
      "Awarded Certificate of Appreciation for outstanding student training outcomes."
    ]
  },
  {
    id: "radium-director",
    role: "Assistant Director",
    organization: "Radium Engineering & Admission Coaching Centre",
    period: "Dec 2021 - Dec 2023 (2 Years)",
    location: "Sylhet, Bangladesh",
    type: "Academic Operations",
    highlights: [
      "Managed daily operations and student support systems for an institution serving 1,200+ students annually."
    ]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Master of Arts (MA) in English Language & Literature",
    institution: "Shahjalal University of Science and Technology (SUST)",
    period: "Jan 2024 – Jan 2025",
    details: "Advanced studies in Applied Linguistics, Discourse Analysis, Literary Criticism, and Strategic English Communication."
  },
  {
    degree: "Bachelor of Arts (BA Hons) in English Language & Literature",
    institution: "Shahjalal University of Science and Technology (SUST)",
    period: "Jan 2019 – Dec 2023",
    details: "Graduated with strong academic grounding in English Grammar, Phonetics, World Literature, and Public Speaking."
  }
];

export const CERTIFICATIONS = [
  {
    title: "Leadership Visiting & Development Model Study in Malaysia",
    issuer: "International Study Tour, Malaysia",
    date: "August 2026",
    skills: "Governance, Sustainable Infrastructure, Bilateral Policy"
  },
  {
    title: "Training Program for Young Leaders from Bangladesh to China",
    issuer: "Shanghai Institutes for International Studies (SIIS)",
    date: "Issued June 2025",
    skills: "Public Diplomacy, Policy Dialogue, International Relations"
  },
  {
    title: "Elevate Your Public Speaking Certification",
    issuer: "Bohubrihi",
    date: "Credential ID: 6721e028504e17e405dd7d52",
    skills: "Public Speaking, Speech Architecture, Audience Engagement"
  },
  {
    title: "Bangla Shahitya Angan National Award 2019",
    issuer: "Bangla Shahitya Angan",
    date: "Issued March 2019",
    skills: "Creative Writing, Storytelling & Literature"
  }
];
