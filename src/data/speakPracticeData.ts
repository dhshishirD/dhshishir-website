// Stage 3 Speak & Record Practice Bank
// Directly linked to Minimal Pairs contrasts and Word Stress syllabification

export interface SpeakTarget {
  id: string;
  categoryKey: string;
  categoryLabel: string;
  title: string;
  focusSound: string;
  ipa: string;
  targetSentence: string;
  highlightWords: string[];
  banglaContrastTip: string;
  syllables?: string[];
  stressedIndex?: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export const SPEAK_PRACTICE_CATEGORIES = [
  { id: 'v_vs_b', label: '/v/ vs /b/ Distinction', count: 6 },
  { id: 'th_sounds', label: 'TH Sounds (/θ/ & /ð/)', count: 6 },
  { id: 'r_vs_l', label: '/r/ vs /l/ Approximant', count: 6 },
  { id: 'vowels', label: 'Vowel Length Contrasts', count: 6 },
  { id: 'p_vs_f', label: 'Aspirated /p/ vs /f/', count: 6 },
  { id: 's_vs_sh', label: '/s/ vs /ʃ/ Fricatives', count: 6 },
  { id: 'clusters', label: 'Final Consonant Clusters', count: 5 },
  { id: 'stress_shifts', label: 'Noun vs Verb Stress Shifts', count: 6 },
  { id: 'multisyllable_stress', label: 'Multi-Syllable Rhythm', count: 5 }
];

export const SPEAK_PRACTICE_DATA: SpeakTarget[] = [
  // 1. /v/ vs /b/
  {
    id: 'sp-vb-01',
    categoryKey: 'v_vs_b',
    categoryLabel: '/v/ vs /b/ Distinction',
    title: 'Van vs Ban',
    focusSound: '/v/ vs /b/',
    ipa: '/væn/ vs /bæn/',
    targetSentence: 'The delivery van drove past the new government ban.',
    highlightWords: ['van', 'ban'],
    banglaContrastTip: 'উপরের দাঁত নিচের ঠোঁট স্পর্শ করে ভাইব্রেশন দিয়ে /v/ বলুন। বাংলা দুই ঠোঁটের ‘ব’ বা ‘ভ’ নয়।',
    difficulty: 'Beginner'
  },
  {
    id: 'sp-vb-02',
    categoryKey: 'v_vs_b',
    categoryLabel: '/v/ vs /b/',
    title: 'Veil vs Bail',
    focusSound: '/v/ vs /b/',
    ipa: '/veɪl/ vs /beɪl/',
    targetSentence: 'She adjusted her silk veil after paying the court bail.',
    highlightWords: ['veil', 'bail'],
    banglaContrastTip: 'Veil উচ্চারণে উপরের দাঁত নিচের ঠোঁটে লাগবে। Bail উচ্চারণে দুই ঠোঁট চেপে বাতাস ছাড়ুন।',
    difficulty: 'Beginner'
  },
  {
    id: 'sp-vb-03',
    categoryKey: 'v_vs_b',
    categoryLabel: '/v/ vs /b/',
    title: 'Vent vs Bent',
    focusSound: '/v/ vs /b/',
    ipa: '/vent/ vs /bent/',
    targetSentence: 'The exhaust vent was bent by the storm.',
    highlightWords: ['vent', 'bent'],
    banglaContrastTip: 'Vent শব্দে ফ্রিকশন (/v/) এবং Bent শব্দে প্লসিভ বাস্ট (/b/) নিশ্চিত করুন।',
    difficulty: 'Intermediate'
  },
  {
    id: 'sp-vb-04',
    categoryKey: 'v_vs_b',
    categoryLabel: '/v/ vs /b/',
    title: 'Very vs Berry',
    focusSound: '/v/ vs /b/',
    ipa: '/ˈveri/ vs /ˈberi/',
    targetSentence: 'It was a very sweet wild berry from the garden.',
    highlightWords: ['very', 'berry'],
    banglaContrastTip: 'Very কে কখনোই "বেরি" বলবেন না। দাঁত-ঠোঁটের ঘর্ষণ স্পষ্ট রাখুন।',
    difficulty: 'Beginner'
  },
  {
    id: 'sp-vb-05',
    categoryKey: 'v_vs_b',
    categoryLabel: '/v/ vs /b/',
    title: 'Vote vs Boat',
    focusSound: '/v/ vs /b/',
    ipa: '/vəʊt/ vs /bəʊt/',
    targetSentence: 'Citizens will vote before crossing the river on the boat.',
    highlightWords: ['vote', 'boat'],
    banglaContrastTip: 'Vote শুরু হবে /v/ দিয়ে, আর Boat শুরু হবে দুই ঠোঁটের /b/ দিয়ে।',
    difficulty: 'Intermediate'
  },
  {
    id: 'sp-vb-06',
    categoryKey: 'v_vs_b',
    categoryLabel: '/v/ vs /b/',
    title: 'Marvel vs Marble',
    focusSound: '/v/ vs /b/ (Medial)',
    ipa: '/ˈmɑːvəl/ vs /ˈmɑːbəl/',
    targetSentence: 'We marvel at the ancient palace built of solid marble.',
    highlightWords: ['marvel', 'marble'],
    banglaContrastTip: 'শব্দের মাঝে -v- এবং -b- এর পার্থক্য পরিষ্কার বজায় রাখুন।',
    difficulty: 'Advanced'
  },

  // 2. TH Sounds (/θ/ & /ð/)
  {
    id: 'sp-th-01',
    categoryKey: 'th_sounds',
    categoryLabel: 'TH Sounds (/θ/ & /ð/)',
    title: 'Think vs Sink',
    focusSound: '/θ/ vs /s/',
    ipa: '/θɪŋk/ vs /sɪŋk/',
    targetSentence: 'I think the metal anchor will sink to the ocean floor.',
    highlightWords: ['think', 'sink'],
    banglaContrastTip: 'Think-এ জিহ্বা দুই দাঁতের মাঝে থাকবে (/θ/)। Sink-এ দাঁত বন্ধ রেখে হিসহিস শব্দ (/s/)।',
    difficulty: 'Beginner'
  },
  {
    id: 'sp-th-02',
    categoryKey: 'th_sounds',
    categoryLabel: 'TH Sounds (/θ/ & /ð/)',
    title: 'Three vs Tree',
    focusSound: '/θr/ vs /tr/',
    ipa: '/θriː/ vs /triː/',
    targetSentence: 'Three red birds were resting on the tall tree.',
    highlightWords: ['three', 'tree'],
    banglaContrastTip: 'Three কে "ট্রি" বা "থ্রি" না বলে জিহ্বার ডগায় ফুঁ দিয়ে /θriː/ বলুন।',
    difficulty: 'Beginner'
  },
  {
    id: 'sp-th-03',
    categoryKey: 'th_sounds',
    categoryLabel: 'TH Sounds (/θ/ & /ð/)',
    title: 'This, That, and These',
    focusSound: 'Voiced /ð/',
    ipa: '/ðɪs/ • /ðæt/ • /ðiːz/',
    targetSentence: 'This document explains that theory and these diplomatic facts.',
    highlightWords: ['this', 'that', 'these', 'theory'],
    banglaContrastTip: 'বাংলা ‘দ’ নয়, জিহ্বা দাঁতের স্পর্শে ভাইব্রেশন সহ বাতাস ছাড়ুন (/ð/)।',
    difficulty: 'Intermediate'
  },
  {
    id: 'sp-th-04',
    categoryKey: 'th_sounds',
    categoryLabel: 'TH Sounds (/θ/ & /ð/)',
    title: 'Breathe vs Breeze',
    focusSound: '/ð/ vs /z/',
    ipa: '/briːð/ vs /briːz/',
    targetSentence: 'Take a moment to breathe the cool evening breeze.',
    highlightWords: ['breathe', 'breeze'],
    banglaContrastTip: 'Breathe শেষ হয় দাঁতের মাঝের /ð/ দিয়ে, আর Breeze শেষ হয় মৌমাছির মতো /z/ ভাইব্রেশনে।',
    difficulty: 'Advanced'
  },
  {
    id: 'sp-th-05',
    categoryKey: 'th_sounds',
    categoryLabel: 'TH Sounds (/θ/ & /ð/)',
    title: 'Thirty-Three Thousand',
    focusSound: 'Consecutive /θ/',
    ipa: '/ˈθɜːti θriː ˈθaʊzənd/',
    targetSentence: 'Thirty-three thousand voters arrived on Thursday.',
    highlightWords: ['thirty-three', 'thousand', 'thursday'],
    banglaContrastTip: 'পরপর /θ/ ধ্বনিগুলোতে জিহ্বা দাঁতের ফাঁকে রাখার ছন্দ ধরে রাখুন।',
    difficulty: 'Advanced'
  },
  {
    id: 'sp-th-06',
    categoryKey: 'th_sounds',
    categoryLabel: 'TH Sounds (/θ/ & /ð/)',
    title: 'Smooth Rhythm',
    focusSound: '/ð/ & /θ/',
    ipa: '/smuːð/ • /ˈrɪðəm/',
    targetSentence: 'Smooth communication requires natural rhythm and proper breath.',
    highlightWords: ['smooth', 'rhythm', 'breath'],
    banglaContrastTip: 'Smooth এবং Rhythm-এ Voiced /ð/ এবং Breath-এ Voiceless /θ/ সঠিক রাখুন।',
    difficulty: 'Advanced'
  },

  // 3. /r/ vs /l/
  {
    id: 'sp-rl-01',
    categoryKey: 'r_vs_l',
    categoryLabel: '/r/ vs /l/ Approximant',
    title: 'Right vs Light',
    focusSound: '/r/ vs /l/',
    ipa: '/raɪt/ vs /laɪt/',
    targetSentence: 'Turn right at the green traffic light.',
    highlightWords: ['right', 'light'],
    banglaContrastTip: 'Right-এ জিহ্বা তালুতে স্পর্শ করবে না (Retroflex)। Light-এ জিহ্বা ওপরের দাঁতের পেছনে লাগবে।',
    difficulty: 'Beginner'
  },
  {
    id: 'sp-rl-02',
    categoryKey: 'r_vs_l',
    categoryLabel: '/r/ vs /l/ Approximant',
    title: 'Pray vs Play',
    focusSound: '/pr/ vs /pl/',
    ipa: '/preɪ/ vs /pleɪ/',
    targetSentence: 'They pray for peace before they play the match.',
    highlightWords: ['pray', 'play'],
    banglaContrastTip: 'Pray-তে ঠোঁট গোল করে র-এর দিকে যান, Play-তে জিহ্বা তালুতে স্পষ্ট ঠেকান।',
    difficulty: 'Beginner'
  },
  {
    id: 'sp-rl-03',
    categoryKey: 'r_vs_l',
    categoryLabel: '/r/ vs /l/ Approximant',
    title: 'Correct vs Collect',
    focusSound: '/r/ vs /l/ (Medial)',
    ipa: '/kəˈrekt/ vs /kəˈlekt/',
    targetSentence: 'Please correct the report and collect the signature.',
    highlightWords: ['correct', 'collect'],
    banglaContrastTip: 'Correct-এ মাঝের /r/ জিহ্বা বাঁকিয়ে, Collect-এ /l/ জিহ্বার ডগা উপরে লাগিয়ে স্পষ্ট করুন।',
    difficulty: 'Intermediate'
  },
  {
    id: 'sp-rl-04',
    categoryKey: 'r_vs_l',
    categoryLabel: '/r/ vs /l/ Approximant',
    title: 'Road vs Load',
    focusSound: '/r/ vs /l/',
    ipa: '/rəʊd/ vs /ləʊd/',
    targetSentence: 'The cargo truck carried a heavy load along the mountain road.',
    highlightWords: ['road', 'load'],
    banglaContrastTip: 'Road এবং Load এর সূচনামূলক ধ্বনি যাতে মিশে না যায়।',
    difficulty: 'Beginner'
  },
  {
    id: 'sp-rl-05',
    categoryKey: 'r_vs_l',
    categoryLabel: '/r/ vs /l/ Approximant',
    title: 'Grow vs Glow',
    focusSound: '/ɡr/ vs /ɡl/',
    ipa: '/ɡrəʊ/ vs /ɡləʊ/',
    targetSentence: 'Young seedlings grow fast under the soft warm glow.',
    highlightWords: ['grow', 'glow'],
    banglaContrastTip: 'Grow-তে মসৃণ ঘূর্ণন, Glow-তে স্পষ্ট ল্যাটারাল এল উচ্চারণ করুন।',
    difficulty: 'Intermediate'
  },
  {
    id: 'sp-rl-06',
    categoryKey: 'r_vs_l',
    categoryLabel: '/r/ vs /l/ Approximant',
    title: 'Arrive vs Alive',
    focusSound: '/r/ vs /l/',
    ipa: '/əˈraɪv/ vs /əˈlaɪv/',
    targetSentence: 'All passengers arrive safe and alive.',
    highlightWords: ['arrive', 'alive'],
    banglaContrastTip: 'Arrive-এ জিহ্বার পেছনের সংকোচন, Alive-এ সামনের সংযোগ স্পষ্ট রাখুন।',
    difficulty: 'Intermediate'
  },

  // 4. Vowel Length Contrasts
  {
    id: 'sp-vl-01',
    categoryKey: 'vowels',
    categoryLabel: 'Vowel Length Contrasts',
    title: 'Ship vs Sheep',
    focusSound: 'Short /ɪ/ vs Long /iː/',
    ipa: '/ʃɪp/ vs /ʃiːp/',
    targetSentence: 'The merchant ship carried white sheep across the sea.',
    highlightWords: ['ship', 'sheep'],
    banglaContrastTip: 'Ship-এ স্বর অত্যন্ত সংক্ষিপ্ত ও শিথিল (/ɪ/), Sheep-এ ঠোঁট প্রসারিত করে দীর্ঘ ঈ (/iː/)।',
    difficulty: 'Beginner'
  },
  {
    id: 'sp-vl-02',
    categoryKey: 'vowels',
    categoryLabel: 'Vowel Length Contrasts',
    title: 'Sit vs Seat',
    focusSound: 'Short /ɪ/ vs Long /iː/',
    ipa: '/sɪt/ vs /siːt/',
    targetSentence: 'Please sit down and reserve your front-row seat.',
    highlightWords: ['sit', 'seat'],
    banglaContrastTip: 'Sit-কে দ্রুত বলুন, Seat-কে টেনে পরিষ্কার দীর্ঘ স্বর দিন।',
    difficulty: 'Beginner'
  },
  {
    id: 'sp-vl-03',
    categoryKey: 'vowels',
    categoryLabel: 'Vowel Length Contrasts',
    title: 'Pull vs Pool',
    focusSound: 'Short /ʊ/ vs Long /uː/',
    ipa: '/pʊl/ vs /puːl/',
    targetSentence: 'Do not pull the safety rope near the swimming pool.',
    highlightWords: ['pull', 'pool'],
    banglaContrastTip: 'Pull-এ ঠোঁট শিথিল হ্রস্ব উ (/ʊ/), Pool-এ ঠোঁট গোল করে দীর্ঘ ঊ (/uː/)।',
    difficulty: 'Intermediate'
  },
  {
    id: 'sp-vl-04',
    categoryKey: 'vowels',
    categoryLabel: 'Vowel Length Contrasts',
    title: 'Live vs Leave',
    focusSound: 'Short /ɪ/ vs Long /iː/',
    ipa: '/lɪv/ vs /liːv/',
    targetSentence: 'Where you live determines when you leave for office.',
    highlightWords: ['live', 'leave'],
    banglaContrastTip: 'Live (বাস করা) /lɪv/ বনাম Leave (ত্যাগ করা) /liːv/ পরিষ্কার আলাদা রাখুন।',
    difficulty: 'Intermediate'
  },
  {
    id: 'sp-vl-05',
    categoryKey: 'vowels',
    categoryLabel: 'Vowel Length Contrasts',
    title: 'Bad vs Bed',
    focusSound: '/æ/ vs /e/',
    ipa: '/bæd/ vs /bed/',
    targetSentence: 'It is bad posture to read lying flat on the bed.',
    highlightWords: ['bad', 'bed'],
    banglaContrastTip: 'Bad-এ মুখ বেশি হাঁ হবে (অ্যা /æ/), Bed-এ মুখ অর্ধেক খোলা থাকবে (এ /e/)।',
    difficulty: 'Intermediate'
  },
  {
    id: 'sp-vl-06',
    categoryKey: 'vowels',
    categoryLabel: 'Vowel Length Contrasts',
    title: 'Cat vs Cut',
    focusSound: '/æ/ vs /ʌ/',
    ipa: '/kæt/ vs /kʌt/',
    targetSentence: 'The playful cat tried to cut the cardboard box.',
    highlightWords: ['cat', 'cut'],
    banglaContrastTip: 'Cat-এ ছড়ানো অ্যা (/æ/), Cut-এ গলার ভেতর থেকে ছোট আ/আহ (/ʌ/)।',
    difficulty: 'Beginner'
  },

  // 5. Aspirated /p/ vs /f/
  {
    id: 'sp-pf-01',
    categoryKey: 'p_vs_f',
    categoryLabel: 'Aspirated /p/ vs /f/',
    title: 'Pan vs Fan',
    focusSound: '/p/ vs /f/',
    ipa: '/pæn/ vs /fæn/',
    targetSentence: 'Place the cooking pan directly under the ceiling fan.',
    highlightWords: ['pan', 'fan'],
    banglaContrastTip: 'Pan-এ দুই ঠোঁট ফেটে বাতাস বের হবে (Aspirated /pʰ/)। Fan-এ উপরের দাঁত নিচের ঠোঁটে ঘষবে (/f/)।',
    difficulty: 'Beginner'
  },
  {
    id: 'sp-pf-02',
    categoryKey: 'p_vs_f',
    categoryLabel: 'Aspirated /p/ vs /f/',
    title: 'Pin vs Fin',
    focusSound: '/p/ vs /f/',
    ipa: '/pɪn/ vs /fɪn/',
    targetSentence: 'Attach the silver pin near the dolphin fin logo.',
    highlightWords: ['pin', 'fin'],
    banglaContrastTip: 'বাংলা দুই ঠোঁটের ‘ফ’ ইংরেজি /f/ নয়। দাঁত-ঠোঁটের স্পর্শ আবশ্যক।',
    difficulty: 'Beginner'
  },
  {
    id: 'sp-pf-03',
    categoryKey: 'p_vs_f',
    categoryLabel: 'Aspirated /p/ vs /f/',
    title: 'Copy vs Coffee',
    focusSound: '/p/ vs /f/ (Medial)',
    ipa: '/ˈkɒpi/ vs /ˈkɒfi/',
    targetSentence: 'Print a clean copy before enjoying hot coffee.',
    highlightWords: ['copy', 'coffee'],
    banglaContrastTip: 'Copy-তে ঠোঁটের সংযোগ (/p/), Coffee-তে দাঁত-ঠোঁটের বাতাস (/f/)।',
    difficulty: 'Intermediate'
  },
  {
    id: 'sp-pf-04',
    categoryKey: 'p_vs_f',
    categoryLabel: 'Aspirated /p/ vs /f/',
    title: 'Paper Portfolio',
    focusSound: 'Initial Aspirated /pʰ/',
    ipa: '/ˈpeɪpər pɔːtˈfəʊliəʊ/',
    targetSentence: 'Please prepare the complete paper portfolio.',
    highlightWords: ['please', 'prepare', 'paper', 'portfolio'],
    banglaContrastTip: 'Paper-এর দুটি ‘p’-তেই বাতাস বিস্ফোরিত হবে। বাংলা ‘প’ নয়।',
    difficulty: 'Intermediate'
  },
  {
    id: 'sp-pf-05',
    categoryKey: 'p_vs_f',
    categoryLabel: 'Aspirated /p/ vs /f/',
    title: 'Pear vs Fear',
    focusSound: '/p/ vs /f/',
    ipa: '/peər/ vs /fɪər/',
    targetSentence: 'He ate a fresh pear without any fear.',
    highlightWords: ['pear', 'fear'],
    banglaContrastTip: 'Pear-এ ঠোঁটের বাস্ট, Fear-এ বাতাস ছাড়ুন।',
    difficulty: 'Beginner'
  },
  {
    id: 'sp-pf-06',
    categoryKey: 'p_vs_f',
    categoryLabel: 'Aspirated /p/ vs /f/',
    title: 'Profile Performance',
    focusSound: '/pr/ & /f/',
    ipa: '/ˈprəʊfaɪl pəˈfɔːməns/',
    targetSentence: 'A professional profile boosts your career performance.',
    highlightWords: ['professional', 'profile', 'performance'],
    banglaContrastTip: 'P এবং F ধ্বনিগুলোর দ্রুত রূপান্তর নির্ভুলভাবে চর্চা করুন।',
    difficulty: 'Advanced'
  },

  // 6. /s/ vs /ʃ/
  {
    id: 'sp-ssh-01',
    categoryKey: 's_vs_sh',
    categoryLabel: '/s/ vs /ʃ/ Fricatives',
    title: 'Sip vs Ship',
    focusSound: '/s/ vs /ʃ/',
    ipa: '/sɪp/ vs /ʃɪp/',
    targetSentence: 'Take a quiet sip as you look at the cargo ship.',
    highlightWords: ['sip', 'ship'],
    banglaContrastTip: 'Sip-এ দন্ত্য ‘স্’ (দাঁত বন্ধ)। Ship-এ তালব্য ‘শ্’ (ঠোঁট গোল)।',
    difficulty: 'Beginner'
  },
  {
    id: 'sp-ssh-02',
    categoryKey: 's_vs_sh',
    categoryLabel: '/s/ vs /ʃ/ Fricatives',
    title: 'Seat vs Sheet',
    focusSound: '/s/ vs /ʃ/',
    ipa: '/siːt/ vs /ʃiːt/',
    targetSentence: 'Cover the car seat with a protective plastic sheet.',
    highlightWords: ['seat', 'sheet'],
    banglaContrastTip: 'Seat-এ ‘স’ এবং Sheet-এ ‘শ’ পরিষ্কারভাবে আলাদা রাখুন।',
    difficulty: 'Beginner'
  },
  {
    id: 'sp-ssh-03',
    categoryKey: 's_vs_sh',
    categoryLabel: '/s/ vs /ʃ/ Fricatives',
    title: 'She Sells Seashells',
    focusSound: 'Alternating /s/ & /ʃ/',
    ipa: '/ʃiː selz ˈsiːʃelz/',
    targetSentence: 'She sells seashells by the sunny seashore.',
    highlightWords: ['she', 'sells', 'seashells', 'seashore'],
    banglaContrastTip: 'ক্লাসিক টাং-টুইস্টার: /ʃiː/ ➔ /selz/ ➔ /ˈsiːʃelz/ রূপান্তরে ঠোঁটের ভঙ্গি দ্রুত পরিবর্তন করুন।',
    difficulty: 'Advanced'
  },
  {
    id: 'sp-ssh-04',
    categoryKey: 's_vs_sh',
    categoryLabel: '/s/ vs /ʃ/ Fricatives',
    title: 'Class vs Clash',
    focusSound: '/s/ vs /ʃ/ (Final)',
    ipa: '/klɑːs/ vs /klæʃ/',
    targetSentence: 'The lecture class avoided any political clash.',
    highlightWords: ['class', 'clash'],
    banglaContrastTip: 'শব্দের শেষে Class (/s/) এবং Clash (/ʃ/) পরিষ্কার রাখুন।',
    difficulty: 'Intermediate'
  },
  {
    id: 'sp-ssh-05',
    categoryKey: 's_vs_sh',
    categoryLabel: '/s/ vs /ʃ/ Fricatives',
    title: 'Sign vs Shine',
    focusSound: '/s/ vs /ʃ/',
    ipa: '/saɪn/ vs /ʃaɪn/',
    targetSentence: 'Follow the neon sign that begins to shine at night.',
    highlightWords: ['sign', 'shine'],
    banglaContrastTip: 'Sign-এ সূক্ষ্ম হিসহিস শব্দ, Shine-এ গভীর বাতাস।',
    difficulty: 'Beginner'
  },
  {
    id: 'sp-ssh-06',
    categoryKey: 's_vs_sh',
    categoryLabel: '/s/ vs /ʃ/ Fricatives',
    title: 'Special Strategy',
    focusSound: '/sp/ & /str/',
    ipa: '/ˈspeʃəl ˈstrætədʒi/',
    targetSentence: 'Special advisors designed a sustainable strategic mission.',
    highlightWords: ['special', 'strategic', 'mission'],
    banglaContrastTip: 'Special-এ /ʃ/, Strategic-এ /s/ এর অবস্থান ঠিক রাখুন।',
    difficulty: 'Advanced'
  },

  // 7. Final Consonant Clusters
  {
    id: 'sp-cl-01',
    categoryKey: 'clusters',
    categoryLabel: 'Final Consonant Clusters',
    title: 'Desks and Masks',
    focusSound: '/sks/',
    ipa: '/desks/ • /mɑːsks/',
    targetSentence: 'Place your papers on the desks and wear your protective masks.',
    highlightWords: ['desks', 'masks'],
    banglaContrastTip: '-sks গুচ্ছে k ধ্বনি বাদ দিয়ে "ডেসিস" বা "মাসিস" বলবেন না। Des-k-s প্রতিটি ধ্বনি উচ্চারণ করুন।',
    difficulty: 'Intermediate'
  },
  {
    id: 'sp-cl-02',
    categoryKey: 'clusters',
    categoryLabel: 'Final Consonant Clusters',
    title: 'Facts and Texts',
    focusSound: '/kts/ & /ksts/',
    ipa: '/fækts/ • /teksts/',
    targetSentence: 'Verify the historical facts before sending the diplomatic texts.',
    highlightWords: ['facts', 'texts'],
    banglaContrastTip: 'Fac-t-s এবং Tex-t-s এর শেষ -ts যেন স্পষ্ট শোনা যায়।',
    difficulty: 'Advanced'
  },
  {
    id: 'sp-cl-03',
    categoryKey: 'clusters',
    categoryLabel: 'Final Consonant Clusters',
    title: 'Asked and Tasked',
    focusSound: '/skt/',
    ipa: '/ɑːskt/ • /tɑːskt/',
    targetSentence: 'The officer asked questions and tasked the special team.',
    highlightWords: ['asked', 'tasked'],
    banglaContrastTip: 'Asked-কে "আস্কড" বা "আক্সট" না বলে s ➔ k ➔ t ক্রমানুসারে বলুন।',
    difficulty: 'Advanced'
  },
  {
    id: 'sp-cl-04',
    categoryKey: 'clusters',
    categoryLabel: 'Final Consonant Clusters',
    title: 'Accepts and Respects',
    focusSound: '/pts/',
    ipa: '/əkˈsepts/ • /rɪˈspekts/',
    targetSentence: 'She accepts the invitation and respects the protocol.',
    highlightWords: ['accepts', 'respects'],
    banglaContrastTip: 'শব্দের শেষে -pts এবং -kts ক্লাস্টার পরিষ্কার সমাপ্ত করুন।',
    difficulty: 'Intermediate'
  },
  {
    id: 'sp-cl-05',
    categoryKey: 'clusters',
    categoryLabel: 'Final Consonant Clusters',
    title: 'Months and Lengths',
    focusSound: '/nθs/ & /ŋθs/',
    ipa: '/mʌnθs/ • /leŋθs/',
    targetSentence: 'For three months, the scholars measured wave lengths.',
    highlightWords: ['months', 'lengths'],
    banglaContrastTip: 'n ➔ θ ➔ s ক্লাস্টারে জিহ্বা দাঁত থেকে টেনে মসৃণভাবে ‘স’-তে আনুন।',
    difficulty: 'Advanced'
  },

  // 8. Noun vs Verb Stress Shifts
  {
    id: 'sp-st-01',
    categoryKey: 'stress_shifts',
    categoryLabel: 'Noun vs Verb Stress Shifts',
    title: 'RE-cord (Noun) vs re-CORD (Verb)',
    focusSound: 'Syllable Stress Shift',
    ipa: 'Noun: /ˈrek.ɔːd/ • Verb: /rɪˈkɔːd/',
    targetSentence: 'Please reCORD the official REcord of today’s diplomatic meeting.',
    highlightWords: ['record'],
    banglaContrastTip: 'Noun হলে ১ম Syllable (RE-cord), Verb হলে ২য় Syllable (re-CORD) জোরালো ও দীর্ঘ হবে।',
    syllables: ['re', 'cord'],
    stressedIndex: 0,
    difficulty: 'Intermediate'
  },
  {
    id: 'sp-st-02',
    categoryKey: 'stress_shifts',
    categoryLabel: 'Noun vs Verb Stress Shifts',
    title: 'PRE-sent (Noun) vs pre-SENT (Verb)',
    focusSound: 'Syllable Stress Shift',
    ipa: 'Noun: /ˈprez.ənt/ • Verb: /prɪˈzent/',
    targetSentence: 'I will preSENT this beautiful PREsent to the guest.',
    highlightWords: ['present'],
    banglaContrastTip: 'PRE-sent (উপহার) বনাম pre-SENT (উপস্থাপন করা) এ স্ট্রেস এবং ভাওয়েল পরিবর্তিত হয়।',
    syllables: ['pre', 'sent'],
    stressedIndex: 0,
    difficulty: 'Intermediate'
  },
  {
    id: 'sp-st-03',
    categoryKey: 'stress_shifts',
    categoryLabel: 'Noun vs Verb Stress Shifts',
    title: 'CON-flict (Noun) vs con-FLICT (Verb)',
    focusSound: 'Syllable Stress Shift',
    ipa: 'Noun: /ˈkɒn.flɪkt/ • Verb: /kənˈflɪkt/',
    targetSentence: 'Personal interests often conFLICT with the resolution of CONflict.',
    highlightWords: ['conflict'],
    banglaContrastTip: 'Noun-এ ১ম সিলেবলে জোর (CON-flict), Verb-এ ২য় সিলেবলে জোর ও ১ম সিলেবল schwa /ə/ (con-FLICT)।',
    syllables: ['con', 'flict'],
    stressedIndex: 0,
    difficulty: 'Intermediate'
  },
  {
    id: 'sp-st-04',
    categoryKey: 'stress_shifts',
    categoryLabel: 'Noun vs Verb Stress Shifts',
    title: 'OB-ject (Noun) vs ob-JECT (Verb)',
    focusSound: 'Syllable Stress Shift',
    ipa: 'Noun: /ˈɒb.dʒɪkt/ • Verb: /əbˈdʒekt/',
    targetSentence: 'The lawyer will obJECT to introducing that mysterious OBject.',
    highlightWords: ['object'],
    banglaContrastTip: 'OB-ject (বস্তু) বনাম ob-JECT (আপত্তি করা)।',
    syllables: ['ob', 'ject'],
    stressedIndex: 0,
    difficulty: 'Intermediate'
  },
  {
    id: 'sp-st-05',
    categoryKey: 'stress_shifts',
    categoryLabel: 'Noun vs Verb Stress Shifts',
    title: 'CON-tract (Noun) vs con-TRACT (Verb)',
    focusSound: 'Syllable Stress Shift',
    ipa: 'Noun: /ˈkɒn.trækt/ • Verb: /kənˈtrækt/',
    targetSentence: 'Sign the legal CONtract before muscles conTRACT under stress.',
    highlightWords: ['contract'],
    banglaContrastTip: 'CON-tract (চুক্তি) বনাম con-TRACT (সংকুচিত হওয়া)।',
    syllables: ['con', 'tract'],
    stressedIndex: 0,
    difficulty: 'Advanced'
  },
  {
    id: 'sp-st-06',
    categoryKey: 'stress_shifts',
    categoryLabel: 'Noun vs Verb Stress Shifts',
    title: 'IM-port (Noun) vs im-PORT (Verb)',
    focusSound: 'Syllable Stress Shift',
    ipa: 'Noun: /ˈɪm.pɔːt/ • Verb: /ɪmˈpɔːt/',
    targetSentence: 'National IMport policies govern what goods we imPORT.',
    highlightWords: ['import'],
    banglaContrastTip: 'IM-port (আমদানি পণ্য) বনাম im-PORT (আমদানি করা)।',
    syllables: ['im', 'port'],
    stressedIndex: 0,
    difficulty: 'Intermediate'
  },

  // 9. Multi-Syllable Rhythm
  {
    id: 'sp-ms-01',
    categoryKey: 'multisyllable_stress',
    categoryLabel: 'Multi-Syllable Rhythm',
    title: 'PHO-to-graph vs pho-TOG-ra-phy',
    focusSound: 'Stress Shift on Suffixation',
    ipa: '/ˈfəʊ.tə.ɡrɑːf/ ➔ /fəˈtɒɡ.rə.fi/',
    targetSentence: 'He took an artistic PHOtograph while studying phoTOGraphy.',
    highlightWords: ['photograph', 'photography'],
    banglaContrastTip: 'Suffix ‘-y’ যুক্ত হলে স্ট্রেস ১ম সিলেবল থেকে ২য় সিলেবলে চলে যায়: PHO-to-graph ➔ pho-TOG-ra-phy।',
    syllables: ['pho', 'tog', 'ra', 'phy'],
    stressedIndex: 1,
    difficulty: 'Advanced'
  },
  {
    id: 'sp-ms-02',
    categoryKey: 'multisyllable_stress',
    categoryLabel: 'Multi-Syllable Rhythm',
    title: 'de-VE-lop-ment',
    focusSound: '2nd Syllable Stress',
    ipa: '/dɪˈvel.əp.mənt/',
    targetSentence: 'Sustainable national deVEloopment requires education and research.',
    highlightWords: ['development'],
    banglaContrastTip: 'বাঙালি শিক্ষার্থীদের সাধারণ ভুল: DE-ve-lop-ment বলা। সঠিক স্ট্রেস ২য় সিলেবলে: de-VE-lop-ment।',
    syllables: ['de', 'vel', 'op', 'ment'],
    stressedIndex: 1,
    difficulty: 'Intermediate'
  },
  {
    id: 'sp-ms-03',
    categoryKey: 'multisyllable_stress',
    categoryLabel: 'Multi-Syllable Rhythm',
    title: 'eco-NO-mic vs e-CO-no-my',
    focusSound: 'Rhythmic Alternation',
    ipa: '/ˌiː.kəˈnɒm.ɪk/ vs /ɪˈkɒn.ə.mi/',
    targetSentence: 'A thriving national eCOnomy drives ecoNOmic stability.',
    highlightWords: ['economy', 'economic'],
    banglaContrastTip: 'e-CO-no-my (২য় সিলেবল) বনাম eco-NO-mic (৩য় সিলেবল)।',
    syllables: ['e', 'co', 'nom', 'ic'],
    stressedIndex: 2,
    difficulty: 'Advanced'
  },
  {
    id: 'sp-ms-04',
    categoryKey: 'multisyllable_stress',
    categoryLabel: 'Multi-Syllable Rhythm',
    title: 'di-plo-MA-tic Cor-res-pon-dence',
    focusSound: 'Penultimate Stress (-ic)',
    ipa: '/ˌdɪp.ləˈmæt.ɪk ˌkɒr.ɪˈspɒn.dəns/',
    targetSentence: 'DiploMAtic correspondence follows strict international norms.',
    highlightWords: ['diplomatic', 'correspondence'],
    banglaContrastTip: '-ic যুক্ত শব্দের স্ট্রেস সর্বদা তার ঠিক আগের সিলেবলে হয়: diplo-MA-tic।',
    syllables: ['di', 'plo', 'ma', 'tic'],
    stressedIndex: 2,
    difficulty: 'Advanced'
  },
  {
    id: 'sp-ms-05',
    categoryKey: 'multisyllable_stress',
    categoryLabel: 'Multi-Syllable Rhythm',
    title: 'in-for-MA-tion Tech-no-lo-gy',
    focusSound: 'Penultimate Stress (-tion)',
    ipa: '/ˌɪn.fəˈmeɪ.ʃən tekˈnɒl.ə.dʒi/',
    targetSentence: 'InforMAtion techNOlogy accelerates scientific discovery.',
    highlightWords: ['information', 'technology'],
    banglaContrastTip: '-tion যুক্ত শব্দে স্ট্রেস ঠিক পূর্ববর্তী সিলেবলে: in-for-MA-tion।',
    syllables: ['in', 'for', 'ma', 'tion'],
    stressedIndex: 2,
    difficulty: 'Intermediate'
  }
];
