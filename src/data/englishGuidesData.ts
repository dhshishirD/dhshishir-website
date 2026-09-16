export interface EnglishResource {
  id: string;
  category: 'Spoken English' | 'Common Mistakes' | 'Business English' | 'IELTS Cheatsheet';
  title: string;
  globalTitle?: string;
  subtitle: string;
  globalSubtitle?: string;
  banglaContext: string;
  globalContext: string;
  examples: {
    wrong?: string;
    correct: string;
    banglaMeaning: string;
    englishMeaning: string;
    tip: string;
    globalTip: string;
  }[];
  downloadFileName?: string;
}

export const ENGLISH_RESOURCES: EnglishResource[] = [
  {
    id: 'common-mistakes-bd',
    category: 'Common Mistakes',
    title: 'Top 10 English Mistakes Made by Non-Native Speakers',
    globalTitle: 'Top 10 Non-Native Grammatical Pitfalls & Native Corrections',
    subtitle: 'Fix direct mother-tongue translation habits and false syntactic patterns.',
    globalSubtitle: 'Eliminate transfer errors and adopt natural syntactic conventions.',
    banglaContext: 'বাংলা থেকে সরাসরি অনুবাদ করার কারণে যেসব ব্যাকরণগত ভুল সচরাচর ঘটে থাকে',
    globalContext: 'Common syntactic interference and L1 translation errors observed in non-native writing.',
    examples: [
      {
        wrong: 'I am agree with you.',
        correct: 'I agree with you.',
        banglaMeaning: 'আমি আপনার সাথে একমত।',
        englishMeaning: 'I share the same opinion or perspective with you.',
        tip: '"Agree" নিজেই একটি verb, তাই এর সাথে "am" ব্যবহার করা যাবে না।',
        globalTip: '"Agree" is an active intransitive verb, not an adjective. Auxiliary "am" is incorrect.'
      },
      {
        wrong: 'He did not went there.',
        correct: 'He did not go there.',
        banglaMeaning: 'সে সেখানে যায়নি।',
        englishMeaning: 'He did not travel to that location.',
        tip: 'Did/Did not এর পর সর্বদা verb-এর Base Form (V1) বসে।',
        globalTip: 'Auxiliary "did / did not" already marks the past tense; the main verb must remain in base form (V1).'
      },
      {
        wrong: 'Give me a paper.',
        correct: 'Give me a piece of paper.',
        banglaMeaning: 'আমাকে এক টুকরো কাগজ দিন।',
        englishMeaning: 'Provide me with a single sheet of paper.',
        tip: 'Paper একটি uncountable noun। একক নির্দেশ করতে "a piece of paper" বলতে হয়।',
        globalTip: '"Paper" (material) is an uncountable mass noun. Use the partitive quantifier "a sheet / piece of paper".'
      },
      {
        wrong: 'Discuss about the matter.',
        correct: 'Discuss the matter.',
        banglaMeaning: 'বিষয়টি নিয়ে আলোচনা করুন।',
        englishMeaning: 'Deliberate or analyze the specific topic.',
        tip: '"Discuss" এর পর সরাসরি object বসে, কোনো preposition (about) লাগে না।',
        globalTip: '"Discuss" is a transitive verb that takes a direct object without preposition "about".'
      },
      {
        wrong: 'He is my cousin brother.',
        correct: 'He is my cousin.',
        banglaMeaning: 'সে আমার চাচাতো/খালাতো ভাই।',
        englishMeaning: 'He is the child of my aunt or uncle.',
        tip: 'ইংরেজিতে শুধুই "Cousin" বলতে হয়, cousin brother/sister বলা অশুদ্ধ।',
        globalTip: 'Standard English uses "cousin" for any gender; "cousin brother/sister" is a redundant literal construct.'
      }
    ]
  },
  {
    id: 'daily-spoken-formulas',
    category: 'Spoken English',
    title: 'Essential Daily Conversation Phrases & Smart Formulas',
    globalTitle: 'High-Frequency Spoken English Formulas & Sentence Patterns',
    subtitle: 'Formula-based spoken structures to speak fluently without hesitation.',
    globalSubtitle: 'Acoustic conversational templates for rapid, unhesitating spoken fluency.',
    banglaContext: 'দৈনন্দিন জীবনে সাবলীল ইংরেজি বলার জন্য অতি প্রয়োজনীয় স্মার্ট ফর্মুলা',
    globalContext: 'Spontaneous spoken formulas for professional dialogue and casual social discourse.',
    examples: [
      {
        correct: 'How about having a cup of coffee?',
        banglaMeaning: 'এক কাপ কফি খেলে কেমন হয়?',
        englishMeaning: 'Proposing a brief informal coffee meeting or break.',
        tip: 'Structure: How about + (verb+ing)? কোনো প্রস্তাব দেওয়ার জন্য দারুণ গঠন।',
        globalTip: 'Formula: "How about + gerund (verb-ing)?" Used for polite, informal proposals and collaborative ideas.'
      },
      {
        correct: 'I feel like taking a long walk.',
        banglaMeaning: 'আমার অনেকক্ষণ হাঁটতে ইচ্ছে করছে।',
        englishMeaning: 'Expressing a strong spontaneous inclination to go for a walk.',
        tip: 'Structure: Feel like + (verb+ing)। কোনো কিছু করার তীব্র ইচ্ছা প্রকাশে ব্যবহৃত হয়।',
        globalTip: 'Formula: "Feel like + gerund (verb-ing)". Expresses an immediate inclination or desire.'
      },
      {
        correct: 'I am supposed to attend the meeting at 3 PM.',
        banglaMeaning: 'আমার বিকাল ৩টায় মিটিংয়ে থাকার কথা রয়েছে।',
        englishMeaning: 'I have a scheduled obligation or expectation to join the meeting at 3 PM.',
        tip: 'Structure: Be supposed to + verb। কোনো কাজ নিয়মানুযায়ী করার কথা থাকলে প্রযোজ্য।',
        globalTip: 'Formula: "Be supposed to + base verb". Denotes obligation, scheduled expectation, or standard protocol.'
      },
      {
        correct: 'There is no point in arguing with him.',
        banglaMeaning: 'তার সাথে তর্ক করে কোনো লাভ নেই।',
        englishMeaning: 'Engaging in an argument will produce zero constructive outcome.',
        tip: 'Structure: There is no point in + (verb+ing)। অনর্থক কাজের ক্ষেত্রে ব্যবহৃত হয়।',
        globalTip: 'Formula: "There is no point in + gerund". Idiomatic phrase highlighting futility or unproductive effort.'
      }
    ]
  },
  {
    id: 'corporate-email-templates',
    category: 'Business English',
    title: 'Professional Corporate Email & Workplace Phrases',
    globalTitle: 'Executive Business English & High-Stakes Workplace Communication',
    subtitle: 'Sound polite, confident, and professional in official communications.',
    globalSubtitle: 'Diplomatic discourse markers and corporate email conventions for international teams.',
    banglaContext: 'কর্পোরেট কমিউনিকেশন ও ইমেইল লেখার আন্তর্জাতিক মানসম্পন্ন প্রফেশনাল এক্সপ্রেশন',
    globalContext: 'Executive-level workplace phrases that balance assertiveness with diplomatic courtesy.',
    examples: [
      {
        wrong: 'Please reply fast as you can.',
        correct: 'I would appreciate your prompt response at your earliest convenience.',
        banglaMeaning: 'যত দ্রুত সম্ভব আপনার মতামত জানালে উপকৃত হব।',
        englishMeaning: 'Polite and professional request for a timely response.',
        tip: 'অফিসিয়াল যোগাযোগে "Fast" পরিহার করে "Prompt response" কিংবা "At your earliest convenience" ব্যবহার করুন।',
        globalTip: 'Replaces demanding imperatives with diplomatic conditional phrasing ("I would appreciate... at your earliest convenience").'
      },
      {
        wrong: 'See the attached file.',
        correct: 'Please find attached the requested document for your review.',
        banglaMeaning: 'আপনার পর্যালোচনার জন্য প্রয়োজনীয় ফাইলটি সংযুক্ত করা হলো।',
        englishMeaning: 'Formal notification that the requested file has been attached.',
        tip: 'প্রফেশনাল ইমেইলে এটি অত্যন্ত মার্জিত ও স্ট্যান্ডার্ড কাঠামো।',
        globalTip: 'Standard business convention for document delivery, ensuring clarity and professional polish.'
      },
      {
        wrong: 'Sorry for late reply.',
        correct: 'Thank you for your patience; apologies for the delayed response.',
        banglaMeaning: 'দেরিতে উত্তর দেওয়ার জন্য আন্তরিকভাবে দুঃখিত এবং ধৈর্যের জন্য ধন্যবাদ।',
        englishMeaning: 'Acknowledging a delay while projecting professional gratitude and composure.',
        tip: 'নেতিবাচক অনুশোচনার চেয়ে ইতিবাচক ধন্যবাদ জ্ঞাপন করপোরেট সংস্কৃতিতে অধিক সমাদৃত।',
        globalTip: 'Prefers positive gratitude ("Thank you for your patience") over defensive apologies in executive correspondence.'
      }
    ]
  },
  {
    id: 'ielts-band7-vocabulary',
    category: 'IELTS Cheatsheet',
    title: 'IELTS Band 7+ Lexical Resource Power Vocabulary',
    globalTitle: 'Academic & Lexical Resource Power Collocations (Band 8.0 - 9.0)',
    subtitle: 'High-scoring academic synonyms to boost your IELTS Writing & Speaking score.',
    globalSubtitle: 'Advanced academic collocations and lexical precision for high-stakes examinations.',
    banglaContext: 'IELTS রাইটিং ও স্পিকিংয়ে সাধারণ শব্দের পরিবর্তে উচ্চমানের ব্যান্ড ৭+ শব্দভাণ্ডার',
    globalContext: 'Elevate lexical precision and task coherence in academic essays and research publications.',
    examples: [
      {
        wrong: 'Very important / Necessary',
        correct: 'Paramount / Crucial / Imperative',
        banglaMeaning: 'অত্যন্ত গুরুত্বপূর্ণ বা অপরিহার্য',
        englishMeaning: 'Of supreme importance; indispensable or vital.',
        tip: 'Example: Education plays a paramount role in societal progress.',
        globalTip: 'Replaces generic intensifiers ("very important") with precise C1/C2 academic adjectives.'
      },
      {
        wrong: 'A lot of problems',
        correct: 'A plethora of challenges / Myriad obstacles',
        banglaMeaning: 'অগণিত বা বহুমুখী প্রতিবন্ধকতা',
        englishMeaning: 'An abundance of complex difficulties or systemic barriers.',
        tip: 'Example: Developing nations confront a plethora of economic challenges.',
        globalTip: 'Replaces conversational quantifiers with nuanced nouns denoting scale and complexity.'
      },
      {
        wrong: 'Good result / Advantage',
        correct: 'Beneficial outcome / Substantial merit',
        banglaMeaning: 'ইতিবাচক ফলাফল বা সুদূরপ্রসারী সুবিধা',
        englishMeaning: 'A constructive or advantageous long-term consequence.',
        tip: 'Example: The policy yielded substantial merits for rural communities.',
        globalTip: 'Signals analytical sophistication in argumentative and evaluative academic prose.'
      }
    ]
  }
];
