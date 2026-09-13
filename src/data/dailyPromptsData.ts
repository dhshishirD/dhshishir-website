// Stage 4 Daily Spoken Fluency Prompts Data Bank
// Structured prompts designed for spontaneous spoken practice with guided frameworks and phonetic focus

export interface DailyPrompt {
  id: string;
  dayNumber: number;
  category: 'diplomacy_professional' | 'phonetic_target' | 'grammar_collocation' | 'critical_thinking' | 'storytelling';
  categoryLabel: string;
  title: string;
  cefrLevel: 'A2' | 'B1' | 'B2' | 'C1';
  promptQuestion: string;
  banglaContext: string;
  outlineGuide: {
    step1: string;
    step2: string;
    step3: string;
  };
  targetCollocations: { phrase: string; ipa: string; meaningBn: string }[];
  phoneticWatchouts: string[];
  recommendedDurationSec: number;
}

export const PROMPT_CATEGORIES = [
  { id: 'all', label: 'All Daily Prompts' },
  { id: 'diplomacy_professional', label: 'Diplomacy & Executive Briefings' },
  { id: 'phonetic_target', label: 'Phonetic Trap Drills' },
  { id: 'grammar_collocation', label: 'Grammar & Collocation Mastery' },
  { id: 'critical_thinking', label: 'Critical Thinking & Debates' },
  { id: 'storytelling', label: 'Storytelling & Personal Narrative' }
];

export const DAILY_PROMPTS_DATA: DailyPrompt[] = [
  // 1. Diplomacy & Executive Briefing
  {
    id: 'dp-01',
    dayNumber: 1,
    category: 'diplomacy_professional',
    categoryLabel: 'Diplomacy & Executive Briefings',
    title: 'Regional Climate Adaptation Briefing',
    cefrLevel: 'B2',
    promptQuestion: 'Brief a diplomatic committee on why regional coastal adaptation requires immediate cross-border financial collaboration.',
    banglaContext: 'উপকূলীয় জলবায়ু সুরক্ষায় আঞ্চলিক সহযোগিতা কেন জরুরি—সে বিষয়ে একটি সংক্ষিপ্ত ১-২ মিনিটের পলিসি ব্রিফিং উপস্থাপন করুন।',
    outlineGuide: {
      step1: 'Context: State the rising sea levels and economic stakes for coastal populations.',
      step2: 'Analysis: Explain why national budgets alone cannot absorb catastrophic storm surges without shared regional funds.',
      step3: 'Recommendation: Propose a multilateral financing mechanism with clear timelines.'
    },
    targetCollocations: [
      { phrase: 'sustainable development', ipa: '/səˈsteɪnəbl dɪˈveləpmənt/', meaningBn: 'টেকসই উন্নয়ন' },
      { phrase: 'mitigate systemic risk', ipa: '/ˈmɪtɪɡeɪt sɪˈstemɪk rɪsk/', meaningBn: 'পদ্ধতিগত ঝুঁকি হ্রাস করা' },
      { phrase: 'multilateral framework', ipa: '/ˌmʌltiˈlætərəl ˈfreɪmwɜːk/', meaningBn: 'বহুপাক্ষিক কাঠামো' },
      { phrase: 'preliminary assessment', ipa: '/prɪˈlɪmɪnəri əˈsesmənt/', meaningBn: 'প্রাথমিক মূল্যায়ন' }
    ],
    phoneticWatchouts: [
      'Stress development on 2nd syllable: de-VE-lop-ment (not DE-ve-lop-ment).',
      'Articulate the /v/ in "development" and "valuable" with upper teeth against lower lip.',
      'Produce clear dental /θ/ in "three" and "multilateral framework".'
    ],
    recommendedDurationSec: 90
  },
  {
    id: 'dp-02',
    dayNumber: 2,
    category: 'diplomacy_professional',
    categoryLabel: 'Diplomacy & Executive Briefings',
    title: 'Trade Corridor Strategic Assessment',
    cefrLevel: 'C1',
    promptQuestion: 'Evaluate the economic advantages and potential supply chain bottlenecks of a newly proposed regional trade corridor.',
    banglaContext: 'একটি নতুন প্রস্তাবিত আঞ্চলিক বাণিজ্য করিডোরের সুবিধা ও সম্ভাব্য প্রতিবন্ধকতা বিশ্লেষণ করুন।',
    outlineGuide: {
      step1: 'Introduction: Highlight the strategic importance of modern transit infrastructure.',
      step2: 'Evaluation: Balance reduced transport costs against customs delays and geopolitical tensions.',
      step3: 'Conclusion: Summarize the essential conditions needed for commercial viability.'
    },
    targetCollocations: [
      { phrase: 'strategic priority', ipa: '/strəˈtiːdʒɪk praɪˈɒrəti/', meaningBn: 'কৌশলগত অগ্রাধিকার' },
      { phrase: 'supply chain resilience', ipa: '/səˈplaɪ tʃeɪn rɪˈzɪliəns/', meaningBn: 'সরবরাহ শৃঙ্খলের স্থিতিস্থাপকতা' },
      { phrase: 'bilateral protocol', ipa: '/baɪˈlætərəl ˈprəʊtəkɒl/', meaningBn: 'দ্বিপাক্ষিক প্রটোকল' },
      { phrase: 'facilitate transit', ipa: '/fəˈsɪlɪteɪt ˈtrænzɪt/', meaningBn: 'ট্রানজিট সহজতর করা' }
    ],
    phoneticWatchouts: [
      'Watch /v/ vs /b/ in "viability", "bilateral", and "evaluate".',
      'Maintain stress on strategic: stra-TE-gic.',
      'Avoid inserting vowels before "strategic" (say /stræ-/, not "is-tra-").'
    ],
    recommendedDurationSec: 90
  },

  // 2. Phonetic Target Prompts
  {
    id: 'dp-03',
    dayNumber: 3,
    category: 'phonetic_target',
    categoryLabel: 'Phonetic Trap Drills',
    title: 'Defending a Renewable Energy Venture (/v/ vs /b/)',
    cefrLevel: 'B1',
    promptQuestion: 'Explain why your company is investing in a high-voltage solar venture rather than traditional fossil fuel boilers.',
    banglaContext: 'সোলার প্রজেক্ট ও ভোল্টেজ সংক্রান্ত বিষয়ে /v/ ও /b/ ধ্বনির পরিষ্কার পার্থক্য বজায় রেখে কথা বলুন।',
    outlineGuide: {
      step1: 'Opening: Contrast the long-term value of solar ventures versus fuel boilers.',
      step2: 'Comparison: Discuss investment returns, grid variability, and environmental benefits.',
      step3: 'Closing: Reiterate why viable green energy builds a better future.'
    },
    targetCollocations: [
      { phrase: 'valuable venture', ipa: '/ˈvæljuəbl ˈventʃər/', meaningBn: 'মূল্যবান উদ্যোগ' },
      { phrase: 'battery storage', ipa: '/ˈbætəri ˈstɔːrɪdʒ/', meaningBn: 'ব্যাটারি সংরক্ষণ' },
      { phrase: 'viable alternative', ipa: '/ˈvaɪəbl ɔːlˈtɜːnətɪv/', meaningBn: 'টেকসই বিকল্প' },
      { phrase: 'voltage regulation', ipa: '/ˈvəʊltɪdʒ ˌreɡjuˈleɪʃən/', meaningBn: 'ভোল্টেজ নিয়ন্ত্রণ' }
    ],
    phoneticWatchouts: [
      'Clean /v/ (teeth on lip): Valuable, Venture, Viable, Voltage.',
      'Clean /b/ (lips together): Battery, Boilers, Better, Building.',
      'Do not substitute Bengali ‘ভ’ for /v/.'
    ],
    recommendedDurationSec: 60
  },
  {
    id: 'dp-04',
    dayNumber: 4,
    category: 'phonetic_target',
    categoryLabel: 'Phonetic Trap Drills',
    title: 'The Scientific Theory of Thought (TH Sounds /θ/ & /ð/)',
    cefrLevel: 'B2',
    promptQuestion: 'Explain the difference between deep theoretical thinking and practical routine habits.',
    banglaContext: 'তাত্ত্বিক চিন্তা ও ব্যবহারিক অভ্যাসের তুলনা করুন—/θ/ (Think) ও /ð/ (This) ধ্বনিগুলোর নিখুঁত প্রয়োগে।',
    outlineGuide: {
      step1: 'Define: Explain what theoretical thinking involves and why it requires methodical research.',
      step2: 'Contrast: Contrast this with daily thoughtless routines.',
      step3: 'Synthesis: Explain how both paths lead together toward authentic discovery.'
    },
    targetCollocations: [
      { phrase: 'theoretical framework', ipa: '/ˌθɪəˈretɪkl ˈfreɪmwɜːk/', meaningBn: 'তাত্ত্বিক কাঠামো' },
      { phrase: 'methodical thinking', ipa: '/mɪˈθɒdɪkl ˈθɪŋkɪŋ/', meaningBn: 'পদ্ধতিগত চিন্তাভাবনা' },
      { phrase: 'breathe through challenges', ipa: '/briːð θruː ˈtʃælɪndʒɪz/', meaningBn: 'ধৈর্যের সাথে মোকাবিলা করা' },
      { phrase: 'together with colleagues', ipa: '/təˈɡeðər wɪð ˈkɒliːɡz/', meaningBn: 'সহকর্মীদের সাথে একত্রে' }
    ],
    phoneticWatchouts: [
      'Voiceless /θ/: Theory, Theoretical, Thought, Methodical, Through.',
      'Voiced /ð/: This, That, Together, Breathe, With.',
      'Do not replace /θ/ with "t" or "th-bangla", or /ð/ with "d".'
    ],
    recommendedDurationSec: 75
  },

  // 3. Grammar & Collocation Mastery
  {
    id: 'dp-05',
    dayNumber: 5,
    category: 'grammar_collocation',
    categoryLabel: 'Grammar & Collocation Mastery',
    title: 'Consulting Feedback & Career Advice (Uncountable Nouns)',
    cefrLevel: 'B1',
    promptQuestion: 'Describe a significant piece of advice or feedback you received that transformed your professional workflow.',
    banglaContext: 'আপনার পাওয়া একটি সেরা উপদেশ বা ফিডব্যাকের গল্প বলুন—Uncountable Noun-এর সঠিক ব্যাকরণ সহকারে।',
    outlineGuide: {
      step1: 'Introduction: Introduce the mentor who offered you invaluable advice.',
      step2: 'Details: Share the specific guidance and information they provided.',
      step3: 'Impact: Explain how implementing this feedback improved your productivity.'
    },
    targetCollocations: [
      { phrase: 'a piece of advice', ipa: '/ə piːs əv ədˈvaɪs/', meaningBn: 'একটি উপদেশ' },
      { phrase: 'actionable feedback', ipa: '/ˈækʃənəbl ˈfiːdbæk/', meaningBn: 'কার্যকর প্রতিক্রিয়া' },
      { phrase: 'invaluable information', ipa: '/ɪnˈvæljuəbl ˌɪnfəˈmeɪʃən/', meaningBn: 'অমূল্য তথ্য' },
      { phrase: 'prefer strategy to guesswork', ipa: '/prɪˈfɜː ˈstrætədʒi tuː ˈɡeswɜːk/', meaningBn: 'অনুমানের চেয়ে কৌশল পছন্দ করা' }
    ],
    phoneticWatchouts: [
      'Never say "an advice" or "advices". Use "a piece of advice" or "advice".',
      'Never say "informations". Use "information".',
      'Use "prefer X to Y" (not "prefer X than Y").'
    ],
    recommendedDurationSec: 60
  },
  {
    id: 'dp-06',
    dayNumber: 6,
    category: 'grammar_collocation',
    categoryLabel: 'Grammar & Collocation Mastery',
    title: 'Hypothetical Negotiation Scenarios (Conditionals & Tense Harmony)',
    cefrLevel: 'B2',
    promptQuestion: 'If you were leading an international negotiation team tomorrow, what key strategy would you employ to achieve consensus?',
    banglaContext: 'আপনি কাল একটি আন্তর্জাতিক সমঝোতা দলের নেতৃত্ব দিলে কী কৌশল নিতেন? (If I were you... I would...)',
    outlineGuide: {
      step1: 'Hypothesis: State what you would do if you were appointed team lead.',
      step2: 'Strategy: Explain how you would address conflicting demands if deadlock occurred.',
      step3: 'Outcome: Conclude on what outcome you would aim to deliver.'
    },
    targetCollocations: [
      { phrase: 'if I were in charge', ipa: '/ɪf aɪ wɜːr ɪn tʃɑːdʒ/', meaningBn: 'যদি আমি দায়িত্বে থাকতাম' },
      { phrase: 'reach a consensus', ipa: '/riːtʃ ə kənˈsensəs/', meaningBn: 'ঐকমত্যে পৌঁছানো' },
      { phrase: 'diplomatic tact', ipa: '/ˌdɪpləˈmætɪk tækt/', meaningBn: 'কূটনৈতিক বিচক্ষণতা' },
      { phrase: 'discuss the proposal', ipa: '/dɪˈskʌs ðə prəˈpəʊzl/', meaningBn: 'প্রস্তাবটি আলোচনা করা' }
    ],
    phoneticWatchouts: [
      'Use "If I were..." for hypothetical conditions (not "If I was").',
      'Say "discuss the proposal" (never "discuss about").',
      'Preserve past modal harmony: "If they offered, we would accept".'
    ],
    recommendedDurationSec: 75
  },

  // 4. Critical Thinking & Debates
  {
    id: 'dp-07',
    dayNumber: 7,
    category: 'critical_thinking',
    categoryLabel: 'Critical Thinking & Debates',
    title: 'Artificial Intelligence & Human Expertise',
    cefrLevel: 'B2',
    promptQuestion: 'Does autonomous AI augment human decision-making or risk eroding foundational critical thinking skills? Present your stance.',
    banglaContext: 'কৃত্রিম বুদ্ধিমত্তা মানুষের দক্ষতাকে সমৃদ্ধ করে নাকি দুর্বল করে? যুক্তি দিয়ে আপনার অবস্থান তুলে ধরুন।',
    outlineGuide: {
      step1: 'Thesis: Clearly state your position on AI adoption in analytical fields.',
      step2: 'Arguments: Present two concrete reasons supported by real-world examples.',
      step3: 'Counter-argument & Conclusion: Acknowledge the opposing view and offer a balanced synthesis.'
    },
    targetCollocations: [
      { phrase: 'augment human judgment', ipa: '/ɔːɡˈment ˈhjuːmən ˈdʒʌdʒmənt/', meaningBn: 'মানুষের বিচারবুদ্ধি বৃদ্ধি করা' },
      { phrase: 'critical deliberation', ipa: '/ˈkrɪtɪkl dɪˌlɪbəˈreɪʃən/', meaningBn: 'গভীর পর্যালোচনা' },
      { phrase: 'unintended consequence', ipa: '/ˌʌnɪnˈtendɪd ˈkɒnsɪkwəns/', meaningBn: 'অনাকাঙ্ক্ষিত পরিণতি' },
      { phrase: 'technological innovation', ipa: '/ˌteknəˈlɒdʒɪkl ˌɪnəˈveɪʃən/', meaningBn: 'প্রযুক্তিগত উদ্ভাবন' }
    ],
    phoneticWatchouts: [
      'Stress in-no-VA-tion (-tion penultimate stress).',
      'Stress de-li-be-RA-tion.',
      'Pronounce "judgment" without intrusive vowels.'
    ],
    recommendedDurationSec: 90
  },
  {
    id: 'dp-08',
    dayNumber: 8,
    category: 'critical_thinking',
    categoryLabel: 'Critical Thinking & Debates',
    title: 'Urban Mobility: Mass Transit vs Private Vehicles',
    cefrLevel: 'B1',
    promptQuestion: 'Argue why developing clean electric mass transit should take priority over expanding multi-lane highways in megacities.',
    banglaContext: 'মেগাসিটিতে হাইওয়ে সম্প্রসারণের চেয়ে ইলেকট্রিক গণপরিবহন বাড়ানো কেন বেশি জরুরি? ব্যাখ্যা করুন।',
    outlineGuide: {
      step1: 'Stance: Propose that public transit is the only viable long-term solution for dense cities.',
      step2: 'Evidence: Compare carbon emissions, commuter stress, and land utilization.',
      step3: 'Vision: Describe what a livable transit-oriented city looks like.'
    },
    targetCollocations: [
      { phrase: 'mass transit network', ipa: '/mæs ˈtrænzɪt ˈnetwɜːk/', meaningBn: 'গণপরিবহন নেটওয়ার্ক' },
      { phrase: 'traffic congestion', ipa: '/ˈtræfɪk kənˈdʒestʃən/', meaningBn: 'যানজট' },
      { phrase: 'urban planning', ipa: '/ˈɜːbən ˈplænɪŋ/', meaningBn: 'নগর পরিকল্পনা' },
      { phrase: 'environmental sustainability', ipa: '/ɪnˌvaɪrənˈmentl səˌsteɪnəˈbɪləti/', meaningBn: 'পরিবেশগত স্থায়িত্ব' }
    ],
    phoneticWatchouts: [
      'Stress con-GES-tion on 2nd syllable.',
      'Stress sus-tai-na-BI-li-ty.',
      'Watch /v/ in "environmental" and "viable".'
    ],
    recommendedDurationSec: 75
  },

  // 5. Storytelling & Personal Narrative
  {
    id: 'dp-09',
    dayNumber: 9,
    category: 'storytelling',
    categoryLabel: 'Storytelling & Personal Narrative',
    title: 'A Moment of Overcoming Unexpected Adversity',
    cefrLevel: 'B1',
    promptQuestion: 'Recount an instance where a sudden unforeseen challenge arose during an important project, and describe how you navigated through it.',
    banglaContext: 'কোনো গুরুত্বপূর্ণ কাজে হঠাৎ বড় কোনো বাধা এলে আপনি কীভাবে তা সমাধান করেছিলেন—সেই অভিজ্ঞতা বর্ণনা করুন।',
    outlineGuide: {
      step1: 'Setting & Conflict: Establish the background and what sudden problem occurred.',
      step2: 'Action Taken: Describe the quick decisions and coordinated actions you took.',
      step3: 'Lesson Learned: Reflect on how this experience strengthened your resilience.'
    },
    targetCollocations: [
      { phrase: 'unexpected obstacle', ipa: '/ˌʌnɪkˈspektɪd ˈɒbstəkl/', meaningBn: 'অনাকাঙ্ক্ষিত বাধা' },
      { phrase: 'stay composed under pressure', ipa: '/steɪ kəmˈpəʊzd ˈʌndər ˈpreʃər/', meaningBn: 'চাপের মুখে শান্ত থাকা' },
      { phrase: 'collaborative effort', ipa: '/kəˈlæbərətɪv ˈefət/', meaningBn: 'যৌথ প্রচেষ্টা' },
      { phrase: 'valuable learning curve', ipa: '/ˈvæljuəbl ˈlɜːnɪŋ kɜːv/', meaningBn: 'মূল্যবান শিক্ষার অভিজ্ঞতা' }
    ],
    phoneticWatchouts: [
      'Clean final clusters: ob-sta-cle, un-ex-pec-ted.',
      'Clear /v/ in "valuable learning curve".',
      'Smooth connected speech: "stay composed under pressure".'
    ],
    recommendedDurationSec: 90
  },
  {
    id: 'dp-10',
    dayNumber: 10,
    category: 'storytelling',
    categoryLabel: 'Storytelling & Personal Narrative',
    title: 'The Book or Idea That Shifted Your Perspective',
    cefrLevel: 'B2',
    promptQuestion: 'Talk about a book, lecture, or philosophical concept that fundamentally reshaped how you view leadership or human progress.',
    banglaContext: 'কোন বইটি বা ধারণাটি আপনার দৃষ্টিভঙ্গি গভীরভাবে বদলে দিয়েছিল? তা বুঝিয়ে বলুন।',
    outlineGuide: {
      step1: 'Introduction: Name the work/idea and when you first encountered it.',
      step2: 'Core Insight: Explain the key breakthrough or perspective it introduced.',
      step3: 'Application: Share how you apply this principle in your daily life or work.'
    },
    targetCollocations: [
      { phrase: 'profound insight', ipa: '/prəˈfaʊnd ˈɪnsaɪt/', meaningBn: 'গভীর অন্তর্দৃষ্টি' },
      { phrase: 'paradigm shift', ipa: '/ˈpærədaɪm ʃɪft/', meaningBn: 'দৃষ্টিভঙ্গির মৌলিক পরিবর্তন' },
      { phrase: 'intellectual curiosity', ipa: '/ˌɪntəˈlektʃuəl ˌkjʊəriˈɒsəti/', meaningBn: 'বৌদ্ধিক কৌতূহল' },
      { phrase: 'transform perspective', ipa: '/trænsˈfɔːm pəˈspektɪv/', meaningBn: 'দৃষ্টিভঙ্গি রূপান্তরিত করা' }
    ],
    phoneticWatchouts: [
      'Pronounce "paradigm" as /ˈpærədaɪm/ (silent g).',
      'Stress in-tel-LEC-tu-al.',
      'Clear /p/ in "perspective" and "profound".'
    ],
    recommendedDurationSec: 90
  }
];
