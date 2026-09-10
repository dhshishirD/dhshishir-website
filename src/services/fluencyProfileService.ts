import type { FluencyUserProfile, QuizResult, WeakPatternKey, WeakPatternInfo } from '../types/fluencyLab';

const PROFILE_STORAGE_KEY = 'fluency_lab_user_profile_v1';

export const WEAK_PATTERNS_MAP: Record<WeakPatternKey, WeakPatternInfo> = {
  v_b_confusion: {
    key: 'v_b_confusion',
    name: '/v/ vs /b/ Sound Distinction',
    banglaExplanation: 'বাংলায় ‘ভ’ বা ‘ব’ দিয়ে ইংরেজি /v/ উচ্চারণ করলে ভুল হয়। /v/ উচ্চারণে উপরের দাঁত নিচের ঠোঁট স্পর্শ করবে (Labiodental fricative)।',
    exampleTrap: 'Very (ভে-রি) / Berry (বে-রি)',
    correctUsage: 'Van vs Ban • Vote vs Boat • Very vs Berry'
  },
  th_dental_fricatives: {
    key: 'th_dental_fricatives',
    name: 'TH Sounds (/θ/ & /ð/)',
    banglaExplanation: 'বাংলা ‘থ’ বা ‘দ’ নয়, জিহ্বার ডগা ওপর-নিচের দাঁতের মাঝে রেখে বাতাস ছেড়ে /θ/ (Think) ও /ð/ (This) উচ্চারণ করতে হয়।',
    exampleTrap: 'Think (টিংক/থিঙ্ক) vs This (দিস)',
    correctUsage: 'Think, Thought, Thirty vs This, That, Together'
  },
  syllable_stress: {
    key: 'syllable_stress',
    name: 'Word & Syllable Stress Timing',
    banglaExplanation: 'ইংরেজি Stress-timed ভাষা। সঠিক Syllable-এ জোর না দিলে উচ্চারণ রোবোটিক বা ভুল শোনায়।',
    exampleTrap: 'PHO-to-graph vs pho-TOG-ra-phy',
    correctUsage: 'DE-ve-lop-ment ✗ ➔ de-VE-lop-ment ✓'
  },
  short_long_vowels: {
    key: 'short_long_vowels',
    name: 'Short /ɪ/ vs Long /iː/ Vowels',
    banglaExplanation: 'হ্রস্ব ই ও দীর্ঘ ঈ-এর মতো ইংরেজি Short /ɪ/ (Ship) এবং Long /iː/ (Sheep) শব্দের অর্থ বদলে দেয়।',
    exampleTrap: 'Ship (জাহাজ) vs Sheep (ভেড়া)',
    correctUsage: 'Sit vs Seat • Fit vs Feet • Live vs Leave'
  },
  consonant_clusters: {
    key: 'consonant_clusters',
    name: 'Consonant Clusters (sp, st, sk, pl)',
    banglaExplanation: 'শব্দের শুরুতে যুক্তবর্ণের আগে অতিরিক্ত ‘ই’ বা ‘আ’ যোগ করা (যেমন School কে Ischool বলা) পরিহার করতে হবে।',
    exampleTrap: 'School কে "ইসকুল" বা Station কে "ইস্টেশন" বলা',
    correctUsage: 'School, Skill, Special, Strategy (Clean burst)'
  },
  uncountable_nouns: {
    key: 'uncountable_nouns',
    name: 'Uncountable Noun Quantification',
    banglaExplanation: 'Advice, Information, Furniture ইত্যাদির পূর্বে সরাসরি a/an বা বহুবচনে -s যুক্ত করা যায় না।',
    exampleTrap: 'He gave me a good advice ✗',
    correctUsage: 'He gave me good advice OR a piece of advice ✓'
  },
  tense_harmony: {
    key: 'tense_harmony',
    name: 'Complex Tense Harmony & Conditionals',
    banglaExplanation: 'Past tense বা Conditional বাক্যে clause-এর মাঝে tense-এর সামঞ্জস্য রক্ষা করা আবশ্যক।',
    exampleTrap: 'If I was you ✗ / I have visited China last year ✗',
    correctUsage: 'If I were you ✓ / I visited China last year ✓'
  },
  prepositional_collocations: {
    key: 'prepositional_collocations',
    name: 'Prepositional Collocations & Verbs',
    banglaExplanation: 'Discuss, Prefer, Senior ইত্যাদির সাথে অতিরিক্ত বা ভুল Preposition ব্যবহার রোধ করা।',
    exampleTrap: 'Discuss about the issue ✗ / Senior than me ✗',
    correctUsage: 'Discuss the issue ✓ / Senior to me ✓ / Prefer tea to coffee ✓'
  }
};

export const getFluencyProfile = (): FluencyUserProfile => {
  try {
    const data = localStorage.getItem(PROFILE_STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Error reading fluency profile from localStorage', err);
  }

  // Default initial guest profile
  return {
    userAlias: 'Learner',
    hasTakenPlacement: false,
    flaggedWeakPatterns: [],
    history: [],
    streakDays: 1,
    lastActiveDate: new Date().toISOString()
  };
};

export const saveQuizResultToProfile = (result: QuizResult, userAlias?: string): FluencyUserProfile => {
  const currentProfile = getFluencyProfile();
  
  // Aggregate unique weak patterns
  const existingPatterns = new Set(currentProfile.flaggedWeakPatterns);
  result.flaggedWeakPatterns.forEach(p => existingPatterns.add(p));

  const updatedProfile: FluencyUserProfile = {
    ...currentProfile,
    userAlias: userAlias?.trim() || currentProfile.userAlias,
    hasTakenPlacement: true,
    currentCefrLevel: result.cefrLevel,
    latestScore: result.score,
    flaggedWeakPatterns: Array.from(existingPatterns),
    history: [result, ...currentProfile.history.slice(0, 9)], // keep last 10 attempts
    lastActiveDate: new Date().toISOString()
  };

  try {
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(updatedProfile));
  } catch (err) {
    console.error('Error saving fluency profile to localStorage', err);
  }

  return updatedProfile;
};

export const resetFluencyProfile = (): FluencyUserProfile => {
  localStorage.removeItem(PROFILE_STORAGE_KEY);
  return getFluencyProfile();
};
