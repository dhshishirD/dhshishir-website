import type { DiagnosticQuestion } from '../types/fluencyLab';

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  // 1. Reading / Prepositional Collocations
  {
    id: 1,
    type: 'reading',
    category: 'Grammar & Collocation',
    promptText: 'Select the grammatically accurate sentence:',
    banglaPromptSubtitle: 'সঠিক Preposition ও বাক্য গঠন নির্বাচন করুন:',
    options: [
      { id: 'a', text: 'We need to discuss about the university admission circular.', isCorrect: false },
      { id: 'b', text: 'We need to discuss the university admission circular.', isCorrect: true },
      { id: 'c', text: 'We need to discuss on the university admission circular.', isCorrect: false },
      { id: 'd', text: 'We are discussing about university admission circular.', isCorrect: false }
    ],
    associatedWeakPattern: 'prepositional_collocations',
    explanationBangla: '"Discuss" একটি Transitive verb, এরপরে "about" বা "on" বসে না। সরাসরি Object বসে।'
  },

  // 2. Listening / Auditory Discrimination (/v/ vs /b/)
  {
    id: 2,
    type: 'listening',
    category: 'Listening Discrimination (/v/ vs /b/)',
    promptText: 'Listen to the audio clip and identify which word was spoken:',
    banglaPromptSubtitle: 'অডিওটি শুনে সঠিক শব্দটি চিহ্নিত করুন (/v/ বনাম /b/):',
    audioSpeechText: 'Please make sure you cast your vote before evening.',
    options: [
      { id: 'a', text: 'boat (নৌকা)', isCorrect: false },
      { id: 'b', text: 'vote (ভোট/মতামত)', isCorrect: true },
      { id: 'c', text: 'bought (কিনেছিল)', isCorrect: false },
      { id: 'd', text: 'bolt (খিল)', isCorrect: false }
    ],
    associatedWeakPattern: 'v_b_confusion',
    explanationBangla: 'অডিওতে বলা হয়েছে "Vote" (/voʊt/), যেখানে উপরের দাঁত নিচের ঠোঁট স্পর্শ করে। "Boat" (/boʊt/) উভয় ঠোঁট বন্ধ করে উচ্চারিত হয়।'
  },

  // 3. Reading / Syllable Stress
  {
    id: 3,
    type: 'reading',
    category: 'Word & Syllable Stress',
    promptText: 'Which syllable carries the primary stress in the word "DEVELOPMENT"?',
    banglaPromptSubtitle: '"DEVELOPMENT" শব্দটিতে কোন অংশে মূল জোর (Primary Stress) পড়ে?',
    options: [
      { id: 'a', text: 'DE-vel-op-ment (1st Syllable)', isCorrect: false },
      { id: 'b', text: 'de-VE-lop-ment (2nd Syllable)', isCorrect: true },
      { id: 'c', text: 'de-vel-OP-ment (3rd Syllable)', isCorrect: false },
      { id: 'd', text: 'de-vel-op-MENT (4th Syllable)', isCorrect: false }
    ],
    associatedWeakPattern: 'syllable_stress',
    explanationBangla: 'Development শব্দের সঠিক উচ্চারণ /dɪˈvel.əp.mənt/, যেখানে ২য় syllable "VEL"-এ জোর পড়ে।'
  },

  // 4. Listening / Vowel Length Distinction (/ɪ/ vs /iː/)
  {
    id: 4,
    type: 'listening',
    category: 'Listening Discrimination (Short vs Long Vowel)',
    promptText: 'Listen to the sentence. Which word did the speaker use?',
    banglaPromptSubtitle: 'অডিও শুনে হ্রস্ব বা দীর্ঘ স্বরধ্বনি (Short vs Long Vowel) নির্ণয় করুন:',
    audioSpeechText: 'They decided to leave the old house immediately.',
    options: [
      { id: 'a', text: 'live (বাস করা - Short /ɪ/)', isCorrect: false },
      { id: 'b', text: 'leave (ত্যাগ করা - Long /iː/)', isCorrect: true },
      { id: 'c', text: 'leaf (পাতা)', isCorrect: false },
      { id: 'd', text: 'lift (উত্তোলন করা)', isCorrect: false }
    ],
    associatedWeakPattern: 'short_long_vowels',
    explanationBangla: 'বলা হয়েছে "Leave" (/liːv/ - দীর্ঘ স্বরধ্বনি)। "Live" (/lɪv/) হলে হ্রস্ব স্বরধ্বনি হতো।'
  },

  // 5. Reading / Uncountable Nouns
  {
    id: 5,
    type: 'reading',
    category: 'Structural Syntax & Nouns',
    promptText: 'Identify the error-free sentence for a formal recommendation:',
    banglaPromptSubtitle: 'সঠিক Uncountable Noun ব্যবহার চিহ্নিত করুন:',
    options: [
      { id: 'a', text: 'The senior instructor gave me a very helpful advice for the IELTS exam.', isCorrect: false },
      { id: 'b', text: 'The senior instructor gave me very helpful advice for the IELTS exam.', isCorrect: true },
      { id: 'c', text: 'The senior instructor gave me many helpful advices for the IELTS exam.', isCorrect: false },
      { id: 'd', text: 'The senior instructor gave me an advice for the IELTS exam.', isCorrect: false }
    ],
    associatedWeakPattern: 'uncountable_nouns',
    explanationBangla: '"Advice" Uncountable noun। এর পূর্বে "a" বসে না এবং বহুবচনে "advices" হয় না।'
  },

  // 6. Listening / TH Consonant Sound (/θ/ vs /t/ or /s/)
  {
    id: 6,
    type: 'listening',
    category: 'Listening Discrimination (TH Sounds)',
    promptText: 'Listen carefully. Which key word is articulated in the phrase?',
    banglaPromptSubtitle: 'অডিওতে উচ্চারিত সঠিক শব্দটি চিহ্নিত করুন (/θ/ সাউন্ড):',
    audioSpeechText: 'I really think we should explore new international opportunities.',
    options: [
      { id: 'a', text: 'tink (অপ্রচলিত)', isCorrect: false },
      { id: 'b', text: 'sink (ডুবে যাওয়া)', isCorrect: false },
      { id: 'c', text: 'think (চিন্তা করা - Dental /θ/)', isCorrect: true },
      { id: 'd', text: 'thing (বস্তু)', isCorrect: false }
    ],
    associatedWeakPattern: 'th_dental_fricatives',
    explanationBangla: '"Think" (/θɪŋk/) উচ্চারণে জিহ্বা দাঁতের ফাঁকে রেখে ঘর্ষণ তৈরি করতে হয়, যা বাংলা ‘ত’ বা ‘স’ থেকে আলাদা।'
  },

  // 7. Reading / Tense Harmony & Past Time Markers
  {
    id: 7,
    type: 'reading',
    category: 'Tense Consistency & Time Markers',
    promptText: 'Which sentence correctly expresses a completed past event?',
    banglaPromptSubtitle: 'নির্দিষ্ট অতীত সময় নির্দেশক শব্দের সঠিক Tense নির্বাচন করুন:',
    options: [
      { id: 'a', text: 'I have visited Malaysia for leadership study last year.', isCorrect: false },
      { id: 'b', text: 'I visited Malaysia for leadership study last year.', isCorrect: true },
      { id: 'c', text: 'I had visited Malaysia for leadership study last year.', isCorrect: false },
      { id: 'd', text: 'I am visiting Malaysia for leadership study last year.', isCorrect: false }
    ],
    associatedWeakPattern: 'tense_harmony',
    explanationBangla: 'বাক্যে নির্দিষ্ট অতীত সময় নির্দেশক (Last year, yesterday, in 2025) থাকলে Present Perfect নয়, Simple Past Tense হয়।'
  },

  // 8. Speaking Readiness / Consonant Clusters
  {
    id: 8,
    type: 'speaking_readiness',
    category: 'Pronunciation & Initial Clusters',
    promptText: 'When saying words like "Strategy", "Skill", or "Special", what is the accurate pronunciation habit?',
    banglaPromptSubtitle: 'যুক্তবর্ণযুক্ত শব্দের শুরুতে সঠিক উচ্চারণ কৌশল কী?',
    options: [
      { id: 'a', text: 'Adding an "i" sound before the cluster (e.g. Is-trategy, Is-kill)', isCorrect: false },
      { id: 'b', text: 'Starting directly with the crisp /s/ friction without any preceding vowel sound', isCorrect: true },
      { id: 'c', text: 'Dropping the /s/ sound completely', isCorrect: false },
      { id: 'd', text: 'Pronouncing /s/ as a heavy Bengali "sh" (শ) sound always', isCorrect: false }
    ],
    associatedWeakPattern: 'consonant_clusters',
    explanationBangla: 'বাঙালি শিক্ষার্থীদের একটি সাধারণ ভুল হলো S-যুক্ত শব্দের আগে অতিরিক্ত "ই" বা "আ" যোগ করা। সরাসরি /s/ ঘর্ষণ দিয়ে শব্দ শুরু করতে হয়।'
  },

  // 9. Speaking Readiness / Conversational Flow & Pause Management
  {
    id: 9,
    type: 'speaking_readiness',
    category: 'Spoken Fluency & Linking',
    promptText: 'To sound natural in IELTS or formal interviews, how should words be connected in speech?',
    banglaPromptSubtitle: 'স্বাভাবিক স্পোকেন ফ্লুয়েন্সির জন্য শব্দ কীভাবে সংযুক্ত করা উচিত?',
    options: [
      { id: 'a', text: 'Stopping completely between each single word with robotic separation', isCorrect: false },
      { id: 'b', text: 'Linking consonant endings smoothly to beginning vowel sounds (Connected Speech)', isCorrect: true },
      { id: 'c', text: 'Speaking as fast as possible without paying attention to meaning', isCorrect: false },
      { id: 'd', text: 'Using long pauses with "uhhh... emmm" after every two words', isCorrect: false }
    ],
    associatedWeakPattern: 'syllable_stress',
    explanationBangla: 'Connected Speech-এ এক শব্দের শেষ Consonant পরের শব্দের Vowel-এর সাথে মসৃণভাবে যুক্ত হয় (যেমন: "hold on" শোনায় "hol-don")।'
  },

  // 10. Reading / Comparative Adjectives (Latin origin)
  {
    id: 10,
    type: 'reading',
    category: 'Comparative Syntax',
    promptText: 'Select the correct professional workplace phrasing:',
    banglaPromptSubtitle: 'সঠিক তুলনামূলক বাক্য নির্বাচন করুন:',
    options: [
      { id: 'a', text: 'He has worked here for 7 years and is senior than me.', isCorrect: false },
      { id: 'b', text: 'He has worked here for 7 years and is senior to me.', isCorrect: true },
      { id: 'c', text: 'He has worked here for 7 years and is more senior than me.', isCorrect: false },
      { id: 'd', text: 'He has worked here for 7 years and is senior from me.', isCorrect: false }
    ],
    associatedWeakPattern: 'prepositional_collocations',
    explanationBangla: 'Senior, Junior, Superior, Inferior, Prior ইত্যাদি Latin Adjective-এর পরে "than" নয়, "to" বসে।'
  }
];
