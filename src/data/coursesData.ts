export interface Course {
  id: string;
  title: string;
  provider: '10 Minute School' | 'Shikho' | 'Bohubrihi' | 'Ostad' | 'Coursera';
  category: 'English' | 'Career & Corporate' | 'Tech & Freelancing' | 'Govt & BCS' | 'Academic';
  instructor: string;
  originalPrice: number;
  discountPrice: number;
  rating: number;
  studentsCount: string;
  features: string[];
  affiliateUrl: string;
  promoCode?: string;
  badge?: string;
  image: string;
}

export const COURSES_DATA: Course[] = [
  {
    id: '10ms-spoken-english',
    title: 'Ghore Boshe Spoken English (??? ??? Spoken English)',
    provider: '10 Minute School',
    category: 'English',
    instructor: 'Munzereen Shahid (Oxford Alumna)',
    originalPrice: 1250,
    discountPrice: 950,
    rating: 4.9,
    studentsCount: '150,000+',
    features: ['80+ Video Lectures', 'Daily Conversation Formulas', 'Downloadable PDF Notes', 'Quizzes & Certificate'],
    affiliateUrl: 'https://10minuteschool.com/skills/courses/ghore-boshe-spoken-english?aff=dhshishir',
    promoCode: 'SHISHIR10',
    badge: 'Bestseller #1',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: '10ms-ielts-course',
    title: 'IELTS Course by Munzereen Shahid',
    provider: '10 Minute School',
    category: 'English',
    instructor: 'Munzereen Shahid',
    originalPrice: 3500,
    discountPrice: 2800,
    rating: 4.9,
    studentsCount: '65,000+',
    features: ['Complete 4 Modules (L, R, W, S)', '50+ Mock Tests', 'Band 7+ Essay Strategies', 'Speaking Mock Guidance'],
    affiliateUrl: 'https://10minuteschool.com/skills/courses/ielts-course-by-munzereen-shahid?aff=dhshishir',
    promoCode: 'SHISHIR10',
    badge: 'Top Rated',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: '10ms-corporate-excel',
    title: 'Microsoft Excel: Beginner to Advanced Masterclass',
    provider: '10 Minute School',
    category: 'Career & Corporate',
    instructor: 'Corporate Specialists',
    originalPrice: 1500,
    discountPrice: 1050,
    rating: 4.8,
    studentsCount: '90,000+',
    features: ['VLOOKUP, XLOOKUP, Pivot Tables', 'Automated Dashboards', 'Real Business Datasets', 'Formula Cheatsheets'],
    affiliateUrl: 'https://10minuteschool.com/skills/courses/microsoft-excel?aff=dhshishir',
    promoCode: 'SHISHIR10',
    badge: 'Must For Jobs',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: '10ms-powerpoint-presentation',
    title: 'PowerPoint & Presentation Mastery',
    provider: '10 Minute School',
    category: 'Career & Corporate',
    instructor: 'Sadman Sadik',
    originalPrice: 1200,
    discountPrice: 850,
    rating: 4.8,
    studentsCount: '45,000+',
    features: ['Slide Design Principles', 'Public Speaking Psychology', 'Pitch Deck Creation', '100+ Free Templates'],
    affiliateUrl: 'https://10minuteschool.com/skills/courses/powerpoint-presentation?aff=dhshishir',
    promoCode: 'SHISHIR10',
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: '10ms-kids-english',
    title: 'English for Kids (????????? ?????? ??????)',
    provider: '10 Minute School',
    category: 'English',
    instructor: '10MS Junior Faculty',
    originalPrice: 1000,
    discountPrice: 750,
    rating: 4.9,
    studentsCount: '35,000+',
    features: ['Animated Video Stories', 'Phonics & Pronunciation', 'Fun Interactive Worksheets', 'Parent-Child Activity Guides'],
    affiliateUrl: 'https://10minuteschool.com/skills/courses/english-for-kids?aff=dhshishir',
    promoCode: 'SHISHIR10',
    badge: 'For Kids',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: '10ms-bcs-preli',
    title: 'BCS Preliminary Complete Master Course',
    provider: '10 Minute School',
    category: 'Govt & BCS',
    instructor: 'Cadre Mentors & Top Faculty',
    originalPrice: 4500,
    discountPrice: 3500,
    rating: 4.9,
    studentsCount: '80,000+',
    features: ['All 10 Subjects Covered', '200+ Live/Recorded Classes', 'Subject-wise Model Tests', 'Cadre Mentorship Sessions'],
    affiliateUrl: 'https://10minuteschool.com/skills/courses/bcs-preli?aff=dhshishir',
    promoCode: 'SHISHIR10',
    badge: 'Career Gamechanger',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'bohubrihi-fullstack-web',
    title: 'Full Stack Web Development Career Track (MERN)',
    provider: 'Bohubrihi',
    category: 'Tech & Freelancing',
    instructor: 'Industry Lead Engineers',
    originalPrice: 18000,
    discountPrice: 14500,
    rating: 4.8,
    studentsCount: '12,000+',
    features: ['HTML, CSS, React, Node.js, MongoDB', '12+ Real World Projects', 'Job Placement Support', '1-on-1 Code Reviews'],
    affiliateUrl: 'https://bohubrihi.com/courses/full-stack-web-development/?ref=dhshishir',
    promoCode: 'SHISHIRWEB',
    badge: 'High Salary Career',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'ostad-digital-marketing',
    title: 'Data-Driven Digital Marketing Career Bootcamp',
    provider: 'Ostad',
    category: 'Tech & Freelancing',
    instructor: 'Top Agency Heads',
    originalPrice: 9500,
    discountPrice: 7500,
    rating: 4.7,
    studentsCount: '18,000+',
    features: ['Meta Ads, Google Ads & GA4', 'SEO & Content Funnels', 'Live Budget Running', 'Freelance Client Hunting'],
    affiliateUrl: 'https://ostad.app/course/digital-marketing?aff=dhshishir',
    promoCode: 'SHISHIRDM',
    badge: 'Freelancing',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&auto=format&fit=crop&q=80'
  }
];
