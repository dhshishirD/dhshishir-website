export interface EnglishResource {
  id: string;
  category: 'Spoken English' | 'Common Mistakes' | 'Business English' | 'IELTS Cheatsheet';
  title: string;
  subtitle: string;
  banglaContext: string;
  examples: { wrong?: string; correct: string; banglaMeaning: string; tip: string }[];
  downloadFileName?: string;
}

export const ENGLISH_RESOURCES: EnglishResource[] = [
  {
    id: 'common-mistakes-bd',
    category: 'Common Mistakes',
    title: 'Top 10 English Mistakes Made by Bangladeshi Speakers',
    subtitle: 'Fix these common Bangla-to-English translation habits immediately.',
    banglaContext: 'বাংলা থেকে সরাসরি অনুবাদ করার কারণে যেসব ব্যাকরণগত ভুল সচরাচর ঘটে থাকে',
    examples: [
      {
        wrong: 'I am agree with you.',
        correct: 'I agree with you.',
        banglaMeaning: 'আমি আপনার সাথে একমত।',
        tip: '"Agree" নিজেই একটি verb, তাই এর সাথে "am" ব্যবহার করা যাবে না।'
      },
      {
        wrong: 'He did not went there.',
        correct: 'He did not go there.',
        banglaMeaning: 'সে সেখানে যায়নি।',
        tip: 'Did/Did not এর পর সর্বদা verb-এর Base Form (V1) বসে।'
      },
      {
        wrong: 'Give me a paper.',
        correct: 'Give me a piece of paper.',
        banglaMeaning: 'আমাকে এক টুকরো কাগজ দিন।',
        tip: 'Paper একটি uncountable noun। একক নির্দেশ করতে "a piece of paper" বলতে হয়।'
      },
      {
        wrong: 'Discuss about the matter.',
        correct: 'Discuss the matter.',
        banglaMeaning: 'বিষয়টি নিয়ে আলোচনা করুন।',
        tip: '"Discuss" এর পর সরাসরি object বসে, কোনো preposition (about) লাগে না।'
      },
      {
        wrong: 'He is my cousin brother.',
        correct: 'He is my cousin.',
        banglaMeaning: 'সে আমার চাচাতো/খালাতো ভাই।',
        tip: 'ইংরেজিতে শুধুই "Cousin" বলতে হয়, cousin brother/sister বলা অশুদ্ধ।'
      }
    ]
  },
  {
    id: 'daily-spoken-formulas',
    category: 'Spoken English',
    title: 'Essential Daily Conversation Phrases & Smart Formulas',
    subtitle: 'Formula-based spoken structures to speak fluently without hesitation.',
    banglaContext: 'দৈনন্দিন জীবনে সাবলীল ইংরেজি বলার জন্য অতি প্রয়োজনীয় স্মার্ট ফর্মুলা',
    examples: [
      {
        correct: 'How about having a cup of coffee?',
        banglaMeaning: 'এক কাপ কফি খেলে কেমন হয়?',
        tip: 'Structure: How about + (verb+ing)? কোনো প্রস্তাব দেওয়ার জন্য দারুণ গঠন।'
      },
      {
        correct: 'I feel like taking a long walk.',
        banglaMeaning: 'আমার অনেকক্ষণ হাঁটতে ইচ্ছে করছে।',
        tip: 'Structure: Feel like + (verb+ing)। কোনো কিছু করার তীব্র ইচ্ছা প্রকাশে ব্যবহৃত হয়।'
      },
      {
        correct: 'I am supposed to attend the meeting at 3 PM.',
        banglaMeaning: 'আমার বিকাল ৩টায় মিটিংয়ে থাকার কথা রয়েছে।',
        tip: 'Structure: Be supposed to + verb। কোনো কাজ নিয়মানুযায়ী করার কথা থাকলে প্রযোজ্য।'
      },
      {
        correct: 'There is no point in arguing with him.',
        banglaMeaning: 'তার সাথে তর্ক করে কোনো লাভ নেই।',
        tip: 'Structure: There is no point in + (verb+ing)। অনর্থক কাজের ক্ষেত্রে ব্যবহৃত হয়।'
      }
    ]
  },
  {
    id: 'corporate-email-templates',
    category: 'Business English',
    title: 'Professional Corporate Email & Workplace Phrases',
    subtitle: 'Sound polite, confident, and professional in official communications.',
    banglaContext: 'কর্পোরেট কমিউনিকেশন ও ইমেইল লেখার আন্তর্জাতিক মানসম্পন্ন প্রফেশনাল এক্সপ্রেশন',
    examples: [
      {
        wrong: 'Please reply fast as you can.',
        correct: 'I would appreciate your prompt response at your earliest convenience.',
        banglaMeaning: 'যত দ্রুত সম্ভব আপনার মতামত জানালে উপকৃত হব।',
        tip: 'অফিসিয়াল যোগাযোগে "Fast" পরিহার করে "Prompt response" কিংবা "At your earliest convenience" ব্যবহার করুন।'
      },
      {
        wrong: 'See the attached file.',
        correct: 'Please find attached the requested document for your review.',
        banglaMeaning: 'আপনার পর্যালোচনার জন্য প্রয়োজনীয় ফাইলটি সংযুক্ত করা হলো।',
        tip: 'প্রফেশনাল ইমেইলে এটি অত্যন্ত মার্জিত ও স্ট্যান্ডার্ড কাঠামো।'
      },
      {
        wrong: 'Sorry for late reply.',
        correct: 'Thank you for your patience; apologies for the delayed response.',
        banglaMeaning: 'দেরিতে উত্তর দেওয়ার জন্য আন্তরিকভাবে দুঃখিত এবং ধৈর্যের জন্য ধন্যবাদ।',
        tip: 'নেতিবাচক অনুশোচনার চেয়ে ইতিবাচক ধন্যবাদ জ্ঞাপন করপোরেট সংস্কৃতিতে অধিক সমাদৃত।'
      }
    ]
  },
  {
    id: 'ielts-band7-vocabulary',
    category: 'IELTS Cheatsheet',
    title: 'IELTS Band 7+ Lexical Resource Power Vocabulary',
    subtitle: 'High-scoring academic synonyms to boost your IELTS Writing & Speaking score.',
    banglaContext: 'IELTS রাইটিং ও স্পিকিংয়ে সাধারণ শব্দের পরিবর্তে উচ্চমানের ব্যান্ড ৭+ শব্দভাণ্ডার',
    examples: [
      {
        wrong: 'Very important / Necessary',
        correct: 'Paramount / Crucial / Imperative',
        banglaMeaning: 'অত্যন্ত গুরুত্বপূর্ণ বা অপরিহার্য',
        tip: 'Example: Education plays a paramount role in societal progress.'
      },
      {
        wrong: 'A lot of problems',
        correct: 'A plethora of challenges / Myriad obstacles',
        banglaMeaning: 'অগণিত বা বহুমুখী প্রতিবন্ধকতা',
        tip: 'Example: Developing nations confront a plethora of economic challenges.'
      },
      {
        wrong: 'Good result / Advantage',
        correct: 'Beneficial outcome / Substantial merit',
        banglaMeaning: 'ইতিবাচক ফলাফল বা সুদূরপ্রসারী সুবিধা',
        tip: 'Example: The policy yielded substantial merits for rural communities.'
      }
    ]
  }
];
