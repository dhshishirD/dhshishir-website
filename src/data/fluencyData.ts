// Structured from Fluency Lab Minimal Pairs (70 pairs), IPA Sound Matrix, and Word Stress List (~270 words)

export interface IpaPhoneme {
  symbol: string;
  name: string;
  category: 'short_vowels' | 'long_vowels' | 'diphthongs' | 'consonants_voiced' | 'consonants_voiceless';
  categoryLabel: string;
  banglaContrast: string;
  exampleWords: { word: string; ipa: string; meaningBn?: string }[];
}

export interface MinimalPair {
  id: string;
  categoryKey: string;
  categoryLabel: string;
  wordA: string;
  phonemeA: string;
  wordB: string;
  phonemeB: string;
  audioA?: string;
  audioB?: string;
  isClusterDrop?: boolean; // For category 7 single-word cluster preservation UI
  clusterTip?: string;
  notes?: string;
}

export interface StressedWord {
  id: string;
  word: string;
  section: 'A' | 'B' | 'C' | 'D' | 'E';
  sectionName: string;
  syllables: string[];
  stressedIndex: number; // 0-based
  partOfSpeech?: 'noun' | 'verb' | 'adjective' | 'general';
  isShiftPair?: boolean;
  verbVariant?: {
    syllables: string[];
    stressedIndex: number;
    meaningBn?: string;
  };
  meaningBn?: string;
}

export const IPA_PHONEMES_DATA: IpaPhoneme[] = [
  // Short Vowels
  {
    symbol: '/ɪ/',
    name: 'Near-close Near-front Vowel',
    category: 'short_vowels',
    categoryLabel: 'Short Vowels',
    banglaContrast: 'হ্রস্ব ‘ই’-এর মতো সংক্ষিপ্ত ও শিথিল (Relaxed)।',
    exampleWords: [
      { word: 'ship', ipa: '/ʃɪp/', meaningBn: 'জাহাজ' },
      { word: 'sit', ipa: '/sɪt/', meaningBn: 'বসা' },
      { word: 'bit', ipa: '/bɪt/', meaningBn: 'টুকরো' }
    ]
  },
  {
    symbol: '/e/',
    name: 'Close-mid Front Vowel',
    category: 'short_vowels',
    categoryLabel: 'Short Vowels',
    banglaContrast: 'বাংলা ‘এ’-এর সমতুল্য স্পষ্ট সংক্ষিপ্ত স্বর।',
    exampleWords: [
      { word: 'bed', ipa: '/bed/', meaningBn: 'বিছানা' },
      { word: 'men', ipa: '/men/', meaningBn: 'পুরুষেরা' },
      { word: 'pen', ipa: '/pen/', meaningBn: 'কলম' }
    ]
  },
  {
    symbol: '/æ/',
    name: 'Near-open Front Vowel',
    category: 'short_vowels',
    categoryLabel: 'Short Vowels',
    banglaContrast: 'বাংলা ‘অ্যা’ (যেমন ‘ম্যান’)। মুখ বেশি খুলতে হয়।',
    exampleWords: [
      { word: 'bad', ipa: '/bæd/', meaningBn: 'খারাপ' },
      { word: 'man', ipa: '/mæn/', meaningBn: 'মানুষ' },
      { word: 'cat', ipa: '/kæt/', meaningBn: 'বিড়াল' }
    ]
  },
  {
    symbol: '/ʌ/',
    name: 'Open-mid Back Vowel',
    category: 'short_vowels',
    categoryLabel: 'Short Vowels',
    banglaContrast: 'বাংলা ‘আ’ ও ‘অ’-এর মাঝামাঝি চটজলদি উচ্চারণ।',
    exampleWords: [
      { word: 'cup', ipa: '/kʌp/', meaningBn: 'কাপ' },
      { word: 'cut', ipa: '/kʌt/', meaningBn: 'কাটা' },
      { word: 'sun', ipa: '/sʌn/', meaningBn: 'সূর্য' }
    ]
  },
  {
    symbol: '/ʊ/',
    name: 'Near-close Near-back Vowel',
    category: 'short_vowels',
    categoryLabel: 'Short Vowels',
    banglaContrast: 'হ্রস্ব ‘উ’। ঠোঁট গোল কিন্তু খুব শক্ত নয়।',
    exampleWords: [
      { word: 'full', ipa: '/fʊl/', meaningBn: 'পূর্ণ' },
      { word: 'pull', ipa: '/pʊl/', meaningBn: 'টানা' },
      { word: 'book', ipa: '/bʊk/', meaningBn: 'বই' }
    ]
  },
  {
    symbol: '/ə/',
    name: 'Schwa (The Most Common English Sound)',
    category: 'short_vowels',
    categoryLabel: 'Short Vowels',
    banglaContrast: 'সর্বাধিক ব্যবহৃত আনস্ট্রেসড শব্দাংশ। খুবই হালকা ও শিথিল।',
    exampleWords: [
      { word: 'about', ipa: '/əˈbaʊt/', meaningBn: 'সম্পর্কে' },
      { word: 'teacher', ipa: '/ˈtiːtʃə/', meaningBn: 'শিক্ষক' },
      { word: 'banana', ipa: '/bəˈnɑːnə/', meaningBn: 'কলা' }
    ]
  },

  // Long Vowels
  {
    symbol: '/iː/',
    name: 'Close Front Long Vowel',
    category: 'long_vowels',
    categoryLabel: 'Long Vowels',
    banglaContrast: 'দীর্ঘ ‘ঈ’। ঠোঁট দুই পাশে টেনে দীর্ঘ সময় ধরে বলা।',
    exampleWords: [
      { word: 'sheep', ipa: '/ʃiːp/', meaningBn: 'ভেড়া' },
      { word: 'seat', ipa: '/siːt/', meaningBn: 'আসন' },
      { word: 'feel', ipa: '/fiːl/', meaningBn: 'অনুভব' }
    ]
  },
  {
    symbol: '/uː/',
    name: 'Close Back Long Vowel',
    category: 'long_vowels',
    categoryLabel: 'Long Vowels',
    banglaContrast: 'দীর্ঘ ‘ঊ’। ঠোঁট সামনের দিকে গোল ও টানটান করা।',
    exampleWords: [
      { word: 'fool', ipa: '/fuːl/', meaningBn: 'বোকা' },
      { word: 'pool', ipa: '/puːl/', meaningBn: 'পুকুর/পুল' },
      { word: 'moon', ipa: '/muːn/', meaningBn: 'চাঁদ' }
    ]
  },
  {
    symbol: '/ɑː/',
    name: 'Open Back Long Vowel',
    category: 'long_vowels',
    categoryLabel: 'Long Vowels',
    banglaContrast: 'দীর্ঘ ‘আ’। মুখ সম্পূর্ণ উন্মুক্ত করে গভীর উচ্চারণ।',
    exampleWords: [
      { word: 'car', ipa: '/kɑː/', meaningBn: 'গাড়ি' },
      { word: 'bath', ipa: '/bɑːθ/', meaningBn: 'গোসল' },
      { word: 'heart', ipa: '/hɑːt/', meaningBn: 'হৃদয়' }
    ]
  },
  {
    symbol: '/ɔː/',
    name: 'Open-mid Back Long Vowel',
    category: 'long_vowels',
    categoryLabel: 'Long Vowels',
    banglaContrast: 'দীর্ঘ ‘অ’ বা ‘ও’। যেমন Door বা More।',
    exampleWords: [
      { word: 'door', ipa: '/dɔː/', meaningBn: 'দরজা' },
      { word: 'walk', ipa: '/wɔːk/', meaningBn: 'হাঁটা' },
      { word: 'call', ipa: '/kɔːl/', meaningBn: 'ডাকা' }
    ]
  },
  {
    symbol: '/ɜː/',
    name: 'Open-mid Central Long Vowel',
    category: 'long_vowels',
    categoryLabel: 'Long Vowels',
    banglaContrast: 'দীর্ঘ মাঝের স্বর। যেমন Bird, Learn, Girl।',
    exampleWords: [
      { word: 'bird', ipa: '/bɜːd/', meaningBn: 'পাখি' },
      { word: 'learn', ipa: '/lɜːn/', meaningBn: 'শেখা' },
      { word: 'word', ipa: '/wɜːd/', meaningBn: 'শব্দ' }
    ]
  },

  // Diphthongs
  {
    symbol: '/aɪ/',
    name: 'Price Diphthong',
    category: 'diphthongs',
    categoryLabel: 'Diphthongs',
    banglaContrast: '‘আই’ যৌগিক স্বর (আ ➔ ই)।',
    exampleWords: [
      { word: 'time', ipa: '/taɪm/', meaningBn: 'সময়' },
      { word: 'right', ipa: '/raɪt/', meaningBn: 'সঠিক' },
      { word: 'fine', ipa: '/faɪn/', meaningBn: 'সুন্দর' }
    ]
  },
  {
    symbol: '/eɪ/',
    name: 'Face Diphthong',
    category: 'diphthongs',
    categoryLabel: 'Diphthongs',
    banglaContrast: '‘এই’ যৌগিক স্বর (এ ➔ ই)।',
    exampleWords: [
      { word: 'day', ipa: '/deɪ/', meaningBn: 'দিন' },
      { word: 'make', ipa: '/meɪk/', meaningBn: 'তৈরি করা' },
      { word: 'say', ipa: '/seɪ/', meaningBn: 'বলা' }
    ]
  },
  {
    symbol: '/aʊ/',
    name: 'Mouth Diphthong',
    category: 'diphthongs',
    categoryLabel: 'Diphthongs',
    banglaContrast: '‘আউ’ যৌগিক স্বর (আ ➔ উ)।',
    exampleWords: [
      { word: 'now', ipa: '/naʊ/', meaningBn: 'এখন' },
      { word: 'mouth', ipa: '/maʊθ/', meaningBn: 'মুখ' },
      { word: 'house', ipa: '/haʊs/', meaningBn: 'বাড়ি' }
    ]
  },
  {
    symbol: '/əʊ/',
    name: 'Goat Diphthong',
    category: 'diphthongs',
    categoryLabel: 'Diphthongs',
    banglaContrast: '‘ওউ’ যৌগিক স্বর (ও ➔ উ)।',
    exampleWords: [
      { word: 'go', ipa: '/ɡəʊ/', meaningBn: 'যাওয়া' },
      { word: 'vote', ipa: '/vəʊt/', meaningBn: 'ভোট' },
      { word: 'home', ipa: '/həʊm/', meaningBn: 'বাড়ি' }
    ]
  },

  // Consonants (Voiced)
  {
    symbol: '/v/',
    name: 'Voiced Labiodental Fricative',
    category: 'consonants_voiced',
    categoryLabel: 'Voiced Consonants',
    banglaContrast: 'উপরের দাঁত নিচের ঠোঁট স্পর্শ করবে। বাংলা ‘ভ’ বা ‘ব’ নয়!',
    exampleWords: [
      { word: 'van', ipa: '/væn/', meaningBn: 'ভ্যান' },
      { word: 'vote', ipa: '/vəʊt/', meaningBn: 'ভোট' },
      { word: 'very', ipa: '/ˈveri/', meaningBn: 'খুব' }
    ]
  },
  {
    symbol: '/ð/',
    name: 'Voiced Dental Fricative (Soft TH)',
    category: 'consonants_voiced',
    categoryLabel: 'Voiced Consonants',
    banglaContrast: 'জিহ্বা দাঁতের মাঝখানে রেখে ভাইব্রেশন সহ বাতাস ছাড়া। বাংলা ‘দ’ নয়।',
    exampleWords: [
      { word: 'this', ipa: '/ðɪs/', meaningBn: 'এই' },
      { word: 'that', ipa: '/ðæt/', meaningBn: 'ওই' },
      { word: 'breathe', ipa: '/briːð/', meaningBn: 'শ্বাস নেওয়া' }
    ]
  },
  {
    symbol: '/z/',
    name: 'Voiced Alveolar Fricative',
    category: 'consonants_voiced',
    categoryLabel: 'Voiced Consonants',
    banglaContrast: 'মৌমাছির গুঞ্জনের মতো ‘জ্’ ভাইব্রেশন। বাংলা ‘য’ বা ‘জ’ নয়।',
    exampleWords: [
      { word: 'zoo', ipa: '/zuː/', meaningBn: 'চিড়িয়াখানা' },
      { word: 'lazy', ipa: '/ˈleɪzi/', meaningBn: 'অলস' },
      { word: 'buzz', ipa: '/bʌz/', meaningBn: 'গুঞ্জন' }
    ]
  },
  {
    symbol: '/r/',
    name: 'Voiced Postalveolar Approximant',
    category: 'consonants_voiced',
    categoryLabel: 'Voiced Consonants',
    banglaContrast: 'জিহ্বা তালুতে ঠেকবে না, পেছনের দিকে বাঁকানো থাকবে।',
    exampleWords: [
      { word: 'right', ipa: '/raɪt/', meaningBn: 'সঠিক' },
      { word: 'road', ipa: '/rəʊd/', meaningBn: 'রাস্তা' },
      { word: 'rice', ipa: '/raɪs/', meaningBn: 'চাল' }
    ]
  },

  // Consonants (Voiceless)
  {
    symbol: '/θ/',
    name: 'Voiceless Dental Fricative (Hard TH)',
    category: 'consonants_voiceless',
    categoryLabel: 'Voiceless Consonants',
    banglaContrast: 'জিহ্বার ডগা ওপর-নিচের দাঁতের মাঝে রেখে বাতাস ফুঁকে দেওয়া। বাংলা ‘থ’ বা ‘ট’ নয়।',
    exampleWords: [
      { word: 'think', ipa: '/θɪŋk/', meaningBn: 'চিন্তা করা' },
      { word: 'thank', ipa: '/θæŋk/', meaningBn: 'ধন্যবাদ' },
      { word: 'three', ipa: '/θriː/', meaningBn: 'তিন' }
    ]
  },
  {
    symbol: '/ʃ/',
    name: 'Voiceless Postalveolar Fricative (SH)',
    category: 'consonants_voiceless',
    categoryLabel: 'Voiceless Consonants',
    banglaContrast: 'তালব্য ‘শ’। ঠোঁট গোল করে মসৃণ বাতাস ছাড়া।',
    exampleWords: [
      { word: 'ship', ipa: '/ʃɪp/', meaningBn: 'জাহাজ' },
      { word: 'she', ipa: '/ʃiː/', meaningBn: 'সে (মহিলা)' },
      { word: 'clash', ipa: '/klæʃ/', meaningBn: 'সংঘর্ষ' }
    ]
  },
  {
    symbol: '/s/',
    name: 'Voiceless Alveolar Fricative',
    category: 'consonants_voiceless',
    categoryLabel: 'Voiceless Consonants',
    banglaContrast: 'দন্ত্য ‘স্’। দাঁত বন্ধ রেখে হিসহিস শব্দ।',
    exampleWords: [
      { word: 'sip', ipa: '/sɪp/', meaningBn: 'চুমুক' },
      { word: 'see', ipa: '/siː/', meaningBn: 'দেখা' },
      { word: 'class', ipa: '/klɑːs/', meaningBn: 'শ্রেণি' }
    ]
  },
  {
    symbol: '/p/',
    name: 'Voiceless Bilabial Plosive (Aspirated)',
    category: 'consonants_voiceless',
    categoryLabel: 'Voiceless Consonants',
    banglaContrast: 'শব্দের শুরুতে বাতাস বিস্ফোরিত হয়ে বের হবে (Aspirated /pʰ/)।',
    exampleWords: [
      { word: 'pan', ipa: '/pæn/', meaningBn: 'কড়াই' },
      { word: 'pen', ipa: '/pen/', meaningBn: 'কলম' },
      { word: 'pin', ipa: '/pɪn/', meaningBn: 'পিন' }
    ]
  },
  {
    symbol: '/f/',
    name: 'Voiceless Labiodental Fricative',
    category: 'consonants_voiceless',
    categoryLabel: 'Voiceless Consonants',
    banglaContrast: 'উপরের দাঁত নিচের ঠোঁট স্পর্শ করবে। বাংলা দুই ঠোঁটের ‘ফ’ নয়।',
    exampleWords: [
      { word: 'fan', ipa: '/fæn/', meaningBn: 'পাখা' },
      { word: 'fit', ipa: '/fɪt/', meaningBn: 'উপযুক্ত' },
      { word: 'fine', ipa: '/faɪn/', meaningBn: 'সুন্দর' }
    ]
  }
];

export const MINIMAL_PAIRS_DATA: MinimalPair[] = [
  // 1. /v/ vs /b/
  { id: 'vb-01', categoryKey: 'v_vs_b', categoryLabel: '/v/ vs /b/', wordA: 'van', phonemeA: '/v/', wordB: 'ban', phonemeB: '/b/' },
  { id: 'vb-02', categoryKey: 'v_vs_b', categoryLabel: '/v/ vs /b/', wordA: 'vet', phonemeA: '/v/', wordB: 'bet', phonemeB: '/b/' },
  { id: 'vb-03', categoryKey: 'v_vs_b', categoryLabel: '/v/ vs /b/', wordA: 'vote', phonemeA: '/v/', wordB: 'boat', phonemeB: '/b/' },
  { id: 'vb-04', categoryKey: 'v_vs_b', categoryLabel: '/v/ vs /b/', wordA: 'vest', phonemeA: '/v/', wordB: 'best', phonemeB: '/b/' },
  { id: 'vb-05', categoryKey: 'v_vs_b', categoryLabel: '/v/ vs /b/', wordA: 'vine', phonemeA: '/v/', wordB: 'bine', phonemeB: '/b/' },
  { id: 'vb-06', categoryKey: 'v_vs_b', categoryLabel: '/v/ vs /b/', wordA: 'very', phonemeA: '/v/', wordB: 'berry', phonemeB: '/b/' },
  { id: 'vb-07', categoryKey: 'v_vs_b', categoryLabel: '/v/ vs /b/', wordA: 'vase', phonemeA: '/v/', wordB: 'base', phonemeB: '/b/' },
  { id: 'vb-08', categoryKey: 'v_vs_b', categoryLabel: '/v/ vs /b/', wordA: 'curve', phonemeA: '/v/', wordB: 'curb', phonemeB: '/b/' },
  { id: 'vb-09', categoryKey: 'v_vs_b', categoryLabel: '/v/ vs /b/', wordA: 'marvel', phonemeA: '/v/', wordB: 'marble', phonemeB: '/b/' },
  { id: 'vb-10', categoryKey: 'v_vs_b', categoryLabel: '/v/ vs /b/', wordA: 'cover', phonemeA: '/v/', wordB: 'cobber', phonemeB: '/b/' },

  // 2. /θ/ and /ð/ (th sounds) vs /t/, /d/, /s/, /z/
  { id: 'th-01', categoryKey: 'th_sounds', categoryLabel: 'TH Sounds (/θ/ & /ð/)', wordA: 'think', phonemeA: '/θ/', wordB: 'sink', phonemeB: '/s/' },
  { id: 'th-02', categoryKey: 'th_sounds', categoryLabel: 'TH Sounds (/θ/ & /ð/)', wordA: 'thin', phonemeA: '/θ/', wordB: 'tin', phonemeB: '/t/' },
  { id: 'th-03', categoryKey: 'th_sounds', categoryLabel: 'TH Sounds (/θ/ & /ð/)', wordA: 'thank', phonemeA: '/θ/', wordB: 'tank', phonemeB: '/t/' },
  { id: 'th-04', categoryKey: 'th_sounds', categoryLabel: 'TH Sounds (/θ/ & /ð/)', wordA: 'three', phonemeA: '/θ/', wordB: 'tree', phonemeB: '/t/' },
  { id: 'th-05', categoryKey: 'th_sounds', categoryLabel: 'TH Sounds (/θ/ & /ð/)', wordA: 'bath', phonemeA: '/θ/', wordB: 'bat', phonemeB: '/t/' },
  { id: 'th-06', categoryKey: 'th_sounds', categoryLabel: 'TH Sounds (/θ/ & /ð/)', wordA: 'mouth', phonemeA: '/θ/', wordB: 'mouse', phonemeB: '/s/' },
  { id: 'th-07', categoryKey: 'th_sounds', categoryLabel: 'TH Sounds (/θ/ & /ð/)', wordA: 'this', phonemeA: '/ð/', wordB: 'dis', phonemeB: '/d/' },
  { id: 'th-08', categoryKey: 'th_sounds', categoryLabel: 'TH Sounds (/ð/ & /ð/)', wordA: 'that', phonemeA: '/ð/', wordB: 'dat', phonemeB: '/d/' },
  { id: 'th-09', categoryKey: 'th_sounds', categoryLabel: 'TH Sounds (/ð/ & /ð/)', wordA: 'then', phonemeA: '/ð/', wordB: 'den', phonemeB: '/d/' },
  { id: 'th-10', categoryKey: 'th_sounds', categoryLabel: 'TH Sounds (/θ/ & /ð/)', wordA: 'breathe', phonemeA: '/ð/', wordB: 'breeze', phonemeB: '/z/' },

  // 3. /r/ vs /l/
  { id: 'rl-01', categoryKey: 'r_vs_l', categoryLabel: '/r/ vs /l/', wordA: 'right', phonemeA: '/r/', wordB: 'light', phonemeB: '/l/' },
  { id: 'rl-02', categoryKey: 'r_vs_l', categoryLabel: '/r/ vs /l/', wordA: 'road', phonemeA: '/r/', wordB: 'load', phonemeB: '/l/' },
  { id: 'rl-03', categoryKey: 'r_vs_l', categoryLabel: '/r/ vs /l/', wordA: 'rice', phonemeA: '/r/', wordB: 'lice', phonemeB: '/l/' },
  { id: 'rl-04', categoryKey: 'r_vs_l', categoryLabel: '/r/ vs /l/', wordA: 'correct', phonemeA: '/r/', wordB: 'collect', phonemeB: '/l/' },
  { id: 'rl-05', categoryKey: 'r_vs_l', categoryLabel: '/r/ vs /l/', wordA: 'pray', phonemeA: '/r/', wordB: 'play', phonemeB: '/l/' },
  { id: 'rl-06', categoryKey: 'r_vs_l', categoryLabel: '/r/ vs /l/', wordA: 'free', phonemeA: '/r/', wordB: 'flee', phonemeB: '/l/' },
  { id: 'rl-07', categoryKey: 'r_vs_l', categoryLabel: '/r/ vs /l/', wordA: 'grow', phonemeA: '/r/', wordB: 'glow', phonemeB: '/l/' },
  { id: 'rl-08', categoryKey: 'r_vs_l', categoryLabel: '/r/ vs /l/', wordA: 'crime', phonemeA: '/r/', wordB: 'climb', phonemeB: '/l/' },
  { id: 'rl-09', categoryKey: 'r_vs_l', categoryLabel: '/r/ vs /l/', wordA: 'rock', phonemeA: '/r/', wordB: 'lock', phonemeB: '/l/' },
  { id: 'rl-10', categoryKey: 'r_vs_l', categoryLabel: '/r/ vs /l/', wordA: 'arrive', phonemeA: '/r/', wordB: 'alive', phonemeB: '/l/' },

  // 4. Short vs long vowels
  { id: 'vl-01', categoryKey: 'vowels', categoryLabel: 'Short vs Long Vowels', wordA: 'ship', phonemeA: '/ɪ/', wordB: 'sheep', phonemeB: '/iː/' },
  { id: 'vl-02', categoryKey: 'vowels', categoryLabel: 'Short vs Long Vowels', wordA: 'sit', phonemeA: '/ɪ/', wordB: 'seat', phonemeB: '/iː/' },
  { id: 'vl-03', categoryKey: 'vowels', categoryLabel: 'Short vs Long Vowels', wordA: 'bit', phonemeA: '/ɪ/', wordB: 'beat', phonemeB: '/iː/' },
  { id: 'vl-04', categoryKey: 'vowels', categoryLabel: 'Short vs Long Vowels', wordA: 'live', phonemeA: '/ɪ/', wordB: 'leave', phonemeB: '/iː/' },
  { id: 'vl-05', categoryKey: 'vowels', categoryLabel: 'Short vs Long Vowels', wordA: 'fill', phonemeA: '/ɪ/', wordB: 'feel', phonemeB: '/iː/' },
  { id: 'vl-06', categoryKey: 'vowels', categoryLabel: 'Short vs Long Vowels', wordA: 'full', phonemeA: '/ʊ/', wordB: 'fool', phonemeB: '/uː/' },
  { id: 'vl-07', categoryKey: 'vowels', categoryLabel: 'Short vs Long Vowels', wordA: 'pull', phonemeA: '/ʊ/', wordB: 'pool', phonemeB: '/uː/' },
  { id: 'vl-08', categoryKey: 'vowels', categoryLabel: 'Short vs Long Vowels', wordA: 'bad', phonemeA: '/æ/', wordB: 'bed', phonemeB: '/e/' },
  { id: 'vl-09', categoryKey: 'vowels', categoryLabel: 'Short vs Long Vowels', wordA: 'man', phonemeA: '/æ/', wordB: 'men', phonemeB: '/e/' },
  { id: 'vl-10', categoryKey: 'vowels', categoryLabel: 'Short vs Long Vowels', wordA: 'cat', phonemeA: '/æ/', wordB: 'cut', phonemeB: '/ʌ/' },

  // 5. /p/ vs /f/
  { id: 'pf-01', categoryKey: 'p_vs_f', categoryLabel: '/p/ vs /f/', wordA: 'pan', phonemeA: '/p/', wordB: 'fan', phonemeB: '/f/' },
  { id: 'pf-02', categoryKey: 'p_vs_f', categoryLabel: '/p/ vs /f/', wordA: 'pin', phonemeA: '/p/', wordB: 'fin', phonemeB: '/f/' },
  { id: 'pf-03', categoryKey: 'p_vs_f', categoryLabel: '/p/ vs /f/', wordA: 'pull', phonemeA: '/p/', wordB: 'full', phonemeB: '/f/' },
  { id: 'pf-04', categoryKey: 'p_vs_f', categoryLabel: '/p/ vs /f/', wordA: 'cup', phonemeA: '/p/', wordB: 'cuff', phonemeB: '/f/' },
  { id: 'pf-05', categoryKey: 'p_vs_f', categoryLabel: '/p/ vs /f/', wordA: 'pear', phonemeA: '/p/', wordB: 'fear', phonemeB: '/f/' },
  { id: 'pf-06', categoryKey: 'p_vs_f', categoryLabel: '/p/ vs /f/', wordA: 'pit', phonemeA: '/p/', wordB: 'fit', phonemeB: '/f/' },
  { id: 'pf-07', categoryKey: 'p_vs_f', categoryLabel: '/p/ vs /f/', wordA: 'pool', phonemeA: '/p/', wordB: 'fool', phonemeB: '/f/' },
  { id: 'pf-08', categoryKey: 'p_vs_f', categoryLabel: '/p/ vs /f/', wordA: 'pine', phonemeA: '/p/', wordB: 'fine', phonemeB: '/f/' },
  { id: 'pf-09', categoryKey: 'p_vs_f', categoryLabel: '/p/ vs /f/', wordA: 'copy', phonemeA: '/p/', wordB: 'coffee', phonemeB: '/f/' },
  { id: 'pf-10', categoryKey: 'p_vs_f', categoryLabel: '/p/ vs /f/', wordA: 'leap', phonemeA: '/p/', wordB: 'leaf', phonemeB: '/f/' },

  // 6. /s/ vs /ʃ/ (sh)
  { id: 'ssh-01', categoryKey: 's_vs_sh', categoryLabel: '/s/ vs /ʃ/ (sh)', wordA: 'sip', phonemeA: '/s/', wordB: 'ship', phonemeB: '/ʃ/' },
  { id: 'ssh-02', categoryKey: 's_vs_sh', categoryLabel: '/s/ vs /ʃ/ (sh)', wordA: 'sock', phonemeA: '/s/', wordB: 'shock', phonemeB: '/ʃ/' },
  { id: 'ssh-03', categoryKey: 's_vs_sh', categoryLabel: '/s/ vs /ʃ/ (sh)', wordA: 'sore', phonemeA: '/s/', wordB: 'shore', phonemeB: '/ʃ/' },
  { id: 'ssh-04', categoryKey: 's_vs_sh', categoryLabel: '/s/ vs /ʃ/ (sh)', wordA: 'seat', phonemeA: '/s/', wordB: 'sheet', phonemeB: '/ʃ/' },
  { id: 'ssh-05', categoryKey: 's_vs_sh', categoryLabel: '/s/ vs /ʃ/ (sh)', wordA: 'sell', phonemeA: '/s/', wordB: 'shell', phonemeB: '/ʃ/' },
  { id: 'ssh-06', categoryKey: 's_vs_sh', categoryLabel: '/s/ vs /ʃ/ (sh)', wordA: 'see', phonemeA: '/s/', wordB: 'she', phonemeB: '/ʃ/' },
  { id: 'ssh-07', categoryKey: 's_vs_sh', categoryLabel: '/s/ vs /ʃ/ (sh)', wordA: 'sign', phonemeA: '/s/', wordB: 'shine', phonemeB: '/ʃ/' },
  { id: 'ssh-08', categoryKey: 's_vs_sh', categoryLabel: '/s/ vs /ʃ/ (sh)', wordA: 'mass', phonemeA: '/s/', wordB: 'mash', phonemeB: '/ʃ/' },
  { id: 'ssh-09', categoryKey: 's_vs_sh', categoryLabel: '/s/ vs /ʃ/ (sh)', wordA: 'class', phonemeA: '/s/', wordB: 'clash', phonemeB: '/ʃ/' },
  { id: 'ssh-10', categoryKey: 's_vs_sh', categoryLabel: '/s/ vs /ʃ/ (sh)', wordA: 'gas', phonemeA: '/s/', wordB: 'gash', phonemeB: '/ʃ/' },

  // 7. Word-final consonant clusters (Single-Word Cluster Preservation UI)
  {
    id: 'fc-01',
    categoryKey: 'final_clusters',
    categoryLabel: 'Final Consonant Clusters',
    wordA: 'asked',
    phonemeA: '/æskt/',
    wordB: 'ask',
    phonemeB: '(dropped -ed)',
    isClusterDrop: true,
    clusterTip: 'Don’t drop the final /-kt/ sound! Pronounce both /k/ and /t/ cleanly: "ah-skt".'
  },
  {
    id: 'fc-02',
    categoryKey: 'final_clusters',
    categoryLabel: 'Final Consonant Clusters',
    wordA: 'desks',
    phonemeA: '/desks/',
    wordB: 'desk',
    phonemeB: '(dropped -s)',
    isClusterDrop: true,
    clusterTip: 'Keep both /k/ and /s/ active at the end: "des-ks".'
  },
  {
    id: 'fc-03',
    categoryKey: 'final_clusters',
    categoryLabel: 'Final Consonant Clusters',
    wordA: 'fact',
    phonemeA: '/fækt/',
    wordB: 'fac',
    phonemeB: '(dropped -t)',
    isClusterDrop: true,
    clusterTip: 'Pronounce the final crisp /t/ stop after /k/.'
  },
  {
    id: 'fc-04',
    categoryKey: 'final_clusters',
    categoryLabel: 'Final Consonant Clusters',
    wordA: 'next',
    phonemeA: '/nekst/',
    wordB: 'nex',
    phonemeB: '(dropped -t)',
    isClusterDrop: true,
    clusterTip: 'Ensure the final /t/ is released cleanly after /ks/.'
  },
  {
    id: 'fc-05',
    categoryKey: 'final_clusters',
    categoryLabel: 'Final Consonant Clusters',
    wordA: 'friend',
    phonemeA: '/frend/',
    wordB: 'fren',
    phonemeB: '(dropped -d)',
    isClusterDrop: true,
    clusterTip: 'Hold the /n/ and release the final voiced /d/ clearly.'
  },
  {
    id: 'fc-06',
    categoryKey: 'final_clusters',
    categoryLabel: 'Final Consonant Clusters',
    wordA: 'world',
    phonemeA: '/wɜːld/',
    wordB: 'worl',
    phonemeB: '(dropped -d)',
    isClusterDrop: true,
    clusterTip: 'Pronounce /r/ + /l/ + /d/ smoothly without skipping the /d/.'
  },
  {
    id: 'fc-07',
    categoryKey: 'final_clusters',
    categoryLabel: 'Final Consonant Clusters',
    wordA: 'told',
    phonemeA: '/təʊld/',
    wordB: 'tol',
    phonemeB: '(dropped -d)',
    isClusterDrop: true,
    clusterTip: 'Make sure the /l/ glides directly into the final /d/.'
  },
  {
    id: 'fc-08',
    categoryKey: 'final_clusters',
    categoryLabel: 'Final Consonant Clusters',
    wordA: 'walked',
    phonemeA: '/wɔːkt/',
    wordB: 'walk',
    phonemeB: '(dropped -ed)',
    isClusterDrop: true,
    clusterTip: 'The "-ed" after voiceless /k/ sounds like /t/: "wawk-t".'
  },
  {
    id: 'fc-09',
    categoryKey: 'final_clusters',
    categoryLabel: 'Final Consonant Clusters',
    wordA: 'stopped',
    phonemeA: '/stɒpt/',
    wordB: 'stop',
    phonemeB: '(dropped -ed)',
    isClusterDrop: true,
    clusterTip: 'The "-ed" after /p/ becomes /t/: "stop-t".'
  },
  {
    id: 'fc-10',
    categoryKey: 'final_clusters',
    categoryLabel: 'Final Consonant Clusters',
    wordA: 'looked',
    phonemeA: '/lʊkt/',
    wordB: 'look',
    phonemeB: '(dropped -ed)',
    isClusterDrop: true,
    clusterTip: 'Crisp /kt/ finish: "look-t".'
  }
];

export const STRESSED_WORDS_DATA: StressedWord[] = [
  // SECTION A: 30 Noun vs Verb 2-Syllable Stress Shifts
  {
    id: 'secA-01',
    word: 'record',
    section: 'A',
    sectionName: 'Noun vs Verb Stress Shifts (2-Syllable)',
    syllables: ['RE', 'cord'],
    stressedIndex: 0,
    partOfSpeech: 'noun',
    isShiftPair: true,
    meaningBn: 'নথি / রেকর্ড (Noun)',
    verbVariant: {
      syllables: ['re', 'CORD'],
      stressedIndex: 1,
      meaningBn: 'রেকর্ড করা (Verb)'
    }
  },
  {
    id: 'secA-02',
    word: 'object',
    section: 'A',
    sectionName: 'Noun vs Verb Stress Shifts (2-Syllable)',
    syllables: ['OB', 'ject'],
    stressedIndex: 0,
    partOfSpeech: 'noun',
    isShiftPair: true,
    meaningBn: 'বস্তু (Noun)',
    verbVariant: {
      syllables: ['ob', 'JECT'],
      stressedIndex: 1,
      meaningBn: 'আপত্তি করা (Verb)'
    }
  },
  {
    id: 'secA-03',
    word: 'present',
    section: 'A',
    sectionName: 'Noun vs Verb Stress Shifts (2-Syllable)',
    syllables: ['PRE', 'sent'],
    stressedIndex: 0,
    partOfSpeech: 'noun',
    isShiftPair: true,
    meaningBn: 'উপহার / বর্তমান (Noun)',
    verbVariant: {
      syllables: ['pre', 'SENT'],
      stressedIndex: 1,
      meaningBn: 'উপস্থাপন করা (Verb)'
    }
  },
  {
    id: 'secA-04',
    word: 'produce',
    section: 'A',
    sectionName: 'Noun vs Verb Stress Shifts (2-Syllable)',
    syllables: ['PRO', 'duce'],
    stressedIndex: 0,
    partOfSpeech: 'noun',
    isShiftPair: true,
    meaningBn: 'কৃষিজাত পণ্য (Noun)',
    verbVariant: {
      syllables: ['pro', 'DUCE'],
      stressedIndex: 1,
      meaningBn: 'উৎপাদন করা (Verb)'
    }
  },
  {
    id: 'secA-05',
    word: 'project',
    section: 'A',
    sectionName: 'Noun vs Verb Stress Shifts (2-Syllable)',
    syllables: ['PRO', 'ject'],
    stressedIndex: 0,
    partOfSpeech: 'noun',
    isShiftPair: true,
    meaningBn: 'প্রকল্প (Noun)',
    verbVariant: {
      syllables: ['pro', 'JECT'],
      stressedIndex: 1,
      meaningBn: 'প্রক্ষেপণ / পূর্বাভাস দেওয়া (Verb)'
    }
  },
  {
    id: 'secA-06',
    word: 'contract',
    section: 'A',
    sectionName: 'Noun vs Verb Stress Shifts (2-Syllable)',
    syllables: ['CON', 'tract'],
    stressedIndex: 0,
    partOfSpeech: 'noun',
    isShiftPair: true,
    meaningBn: 'চুক্তি (Noun)',
    verbVariant: {
      syllables: ['con', 'TRACT'],
      stressedIndex: 1,
      meaningBn: 'সংকুচিত হওয়া (Verb)'
    }
  },
  {
    id: 'secA-07',
    word: 'desert',
    section: 'A',
    sectionName: 'Noun vs Verb Stress Shifts (2-Syllable)',
    syllables: ['DE', 'sert'],
    stressedIndex: 0,
    partOfSpeech: 'noun',
    isShiftPair: true,
    meaningBn: 'মরুভূমি (Noun)',
    verbVariant: {
      syllables: ['de', 'SERT'],
      stressedIndex: 1,
      meaningBn: 'পরিত্যাগ করা (Verb)'
    }
  },
  {
    id: 'secA-08',
    word: 'conflict',
    section: 'A',
    sectionName: 'Noun vs Verb Stress Shifts (2-Syllable)',
    syllables: ['CON', 'flict'],
    stressedIndex: 0,
    partOfSpeech: 'noun',
    isShiftPair: true,
    meaningBn: 'সংঘাত (Noun)',
    verbVariant: {
      syllables: ['con', 'FLICT'],
      stressedIndex: 1,
      meaningBn: 'দ্বন্দ্ব তৈরি হওয়া (Verb)'
    }
  },
  {
    id: 'secA-09',
    word: 'increase',
    section: 'A',
    sectionName: 'Noun vs Verb Stress Shifts (2-Syllable)',
    syllables: ['IN', 'crease'],
    stressedIndex: 0,
    partOfSpeech: 'noun',
    isShiftPair: true,
    meaningBn: 'বৃদ্ধি (Noun)',
    verbVariant: {
      syllables: ['in', 'CREASE'],
      stressedIndex: 1,
      meaningBn: 'বৃদ্ধি পাওয়া (Verb)'
    }
  },
  {
    id: 'secA-10',
    word: 'decrease',
    section: 'A',
    sectionName: 'Noun vs Verb Stress Shifts (2-Syllable)',
    syllables: ['DE', 'crease'],
    stressedIndex: 0,
    partOfSpeech: 'noun',
    isShiftPair: true,
    meaningBn: 'হ্রাস (Noun)',
    verbVariant: {
      syllables: ['de', 'CREASE'],
      stressedIndex: 1,
      meaningBn: 'কমে যাওয়া (Verb)'
    }
  },
  {
    id: 'secA-11',
    word: 'permit',
    section: 'A',
    sectionName: 'Noun vs Verb Stress Shifts (2-Syllable)',
    syllables: ['PER', 'mit'],
    stressedIndex: 0,
    partOfSpeech: 'noun',
    isShiftPair: true,
    meaningBn: 'অনুমতিপত্র (Noun)',
    verbVariant: {
      syllables: ['per', 'MIT'],
      stressedIndex: 1,
      meaningBn: 'অনুমতি দেওয়া (Verb)'
    }
  },
  {
    id: 'secA-12',
    word: 'suspect',
    section: 'A',
    sectionName: 'Noun vs Verb Stress Shifts (2-Syllable)',
    syllables: ['SUS', 'pect'],
    stressedIndex: 0,
    partOfSpeech: 'noun',
    isShiftPair: true,
    meaningBn: 'সন্দেহভাজন ব্যক্তি (Noun)',
    verbVariant: {
      syllables: ['sus', 'PECT'],
      stressedIndex: 1,
      meaningBn: 'সন্দেহ করা (Verb)'
    }
  },

  // SECTION B: Suffix Stress Rules (-tion, -ic, -ity, -graphy)
  {
    id: 'secB-01',
    word: 'education',
    section: 'B',
    sectionName: 'Suffix Rules (-tion, -ic, -ity)',
    syllables: ['ed', 'u', 'CA', 'tion'],
    stressedIndex: 2,
    partOfSpeech: 'general',
    meaningBn: 'শিক্ষা'
  },
  {
    id: 'secB-02',
    word: 'economic',
    section: 'B',
    sectionName: 'Suffix Rules (-tion, -ic, -ity)',
    syllables: ['e', 'co', 'NOM', 'ic'],
    stressedIndex: 2,
    partOfSpeech: 'general',
    meaningBn: 'অর্থনৈতিক'
  },
  {
    id: 'secB-03',
    word: 'photography',
    section: 'B',
    sectionName: 'Suffix Rules (-tion, -ic, -ity)',
    syllables: ['pho', 'TOG', 'ra', 'phy'],
    stressedIndex: 1,
    partOfSpeech: 'general',
    meaningBn: 'আলোকচিত্রশিল্প'
  },
  {
    id: 'secB-04',
    word: 'photograph',
    section: 'B',
    sectionName: 'Suffix Rules (-tion, -ic, -ity)',
    syllables: ['PHO', 'to', 'graph'],
    stressedIndex: 0,
    partOfSpeech: 'general',
    meaningBn: 'ছবি / আলোকচিত্র'
  },
  {
    id: 'secB-05',
    word: 'photographic',
    section: 'B',
    sectionName: 'Suffix Rules (-tion, -ic, -ity)',
    syllables: ['pho', 'to', 'GRAPH', 'ic'],
    stressedIndex: 2,
    partOfSpeech: 'general',
    meaningBn: 'আলোকচিত্র সংক্রান্ত'
  },
  {
    id: 'secB-06',
    word: 'curiosity',
    section: 'B',
    sectionName: 'Suffix Rules (-tion, -ic, -ity)',
    syllables: ['cu', 'ri', 'OS', 'i', 'ty'],
    stressedIndex: 2,
    partOfSpeech: 'general',
    meaningBn: 'কৌতূহল'
  },
  {
    id: 'secB-07',
    word: 'decision',
    section: 'B',
    sectionName: 'Suffix Rules (-tion, -ic, -ity)',
    syllables: ['de', 'CI', 'sion'],
    stressedIndex: 1,
    partOfSpeech: 'general',
    meaningBn: 'সিদ্ধান্ত'
  },

  // SECTION C: Common Multisyllabic Academic & Professional Words
  {
    id: 'secC-01',
    word: 'development',
    section: 'C',
    sectionName: 'Academic & Professional Words',
    syllables: ['de', 'VEL', 'op', 'ment'],
    stressedIndex: 1,
    partOfSpeech: 'general',
    meaningBn: 'উন্নয়ন'
  },
  {
    id: 'secC-02',
    word: 'comfortable',
    section: 'C',
    sectionName: 'Academic & Professional Words',
    syllables: ['COMF', 'ort', 'a', 'ble'],
    stressedIndex: 0,
    partOfSpeech: 'general',
    meaningBn: 'আরামদায়ক'
  },
  {
    id: 'secC-03',
    word: 'environment',
    section: 'C',
    sectionName: 'Academic & Professional Words',
    syllables: ['en', 'VI', 'ron', 'ment'],
    stressedIndex: 1,
    partOfSpeech: 'general',
    meaningBn: 'পরিবেশ'
  },
  {
    id: 'secC-04',
    word: 'certificate',
    section: 'C',
    sectionName: 'Academic & Professional Words',
    syllables: ['cer', 'TIF', 'i', 'cate'],
    stressedIndex: 1,
    partOfSpeech: 'general',
    meaningBn: 'সনদপত্র'
  },
  {
    id: 'secC-05',
    word: 'democracy',
    section: 'C',
    sectionName: 'Academic & Professional Words',
    syllables: ['de', 'MOC', 'ra', 'cy'],
    stressedIndex: 1,
    partOfSpeech: 'general',
    meaningBn: 'গণতন্ত্র'
  },

  // SECTION D: Compound Words (Noun vs Verb/Prepositional)
  {
    id: 'secD-01',
    word: 'blackboard',
    section: 'D',
    sectionName: 'Compound Words',
    syllables: ['BLACK', 'board'],
    stressedIndex: 0,
    partOfSpeech: 'general',
    meaningBn: 'ব্ল্যাকবোর্ড'
  },
  {
    id: 'secD-02',
    word: 'greenhouse',
    section: 'D',
    sectionName: 'Compound Words',
    syllables: ['GREEN', 'house'],
    stressedIndex: 0,
    partOfSpeech: 'general',
    meaningBn: 'কাঁচের ঘর'
  },
  {
    id: 'secD-03',
    word: 'understand',
    section: 'D',
    sectionName: 'Compound Words',
    syllables: ['un', 'der', 'STAND'],
    stressedIndex: 2,
    partOfSpeech: 'general',
    meaningBn: 'বোঝা'
  },

  // SECTION E: Prefix Shift & Tone Rules
  {
    id: 'secE-01',
    word: 'important',
    section: 'E',
    sectionName: 'Prefix Shift & Tone Rules',
    syllables: ['im', 'POR', 'tant'],
    stressedIndex: 1,
    partOfSpeech: 'general',
    meaningBn: 'গুরুত্বপূর্ণ'
  },
  {
    id: 'secE-02',
    word: 'impossible',
    section: 'E',
    sectionName: 'Prefix Shift & Tone Rules',
    syllables: ['im', 'POS', 'si', 'ble'],
    stressedIndex: 1,
    partOfSpeech: 'general',
    meaningBn: 'অসম্ভব'
  },
  {
    id: 'secE-03',
    word: 'international',
    section: 'E',
    sectionName: 'Prefix Shift & Tone Rules',
    syllables: ['in', 'ter', 'NA', 'tion', 'al'],
    stressedIndex: 2,
    partOfSpeech: 'general',
    meaningBn: 'আন্তর্জাতিক'
  }
];
