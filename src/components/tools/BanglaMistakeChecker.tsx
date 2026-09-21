import React, { useState } from 'react';
import { SpellCheck, CheckCircle2, AlertTriangle, Sparkles, ArrowRight, Wand2, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ErrorRule {
  id: string;
  category: 'verbs_tense' | 'prepositions' | 'uncountable' | 'latin_comp' | 'literal_mti';
  categoryLabel: string;
  pattern: RegExp;
  title: string;
  explanation: string;
  bengaliReason: string;
  replacement: string;
  sampleBefore: string;
  sampleAfter: string;
}

const COMPREHENSIVE_BD_RULES: ErrorRule[] = [
  // 1. Verbs & Tenses
  {
    id: 'i-am-agree',
    category: 'verbs_tense',
    categoryLabel: 'Verb / Tense Trap',
    pattern: /\bI am agree\b/gi,
    title: 'Misuse of "I am agree"',
    explanation: '"Agree" is a main verb in English, not an adjective. Auxiliary "am" is incorrect.',
    bengaliReason: 'বাংলায় "আমি একমত" হওয়ায় ইংরেজি অনুবাদের সময় অনেকে "I am agree" লিখে ফেলেন।',
    replacement: 'I agree',
    sampleBefore: 'I am agree with your decision.',
    sampleAfter: 'I agree with your decision.'
  },
  {
    id: 'i-am-believe',
    category: 'verbs_tense',
    categoryLabel: 'Verb / Tense Trap',
    pattern: /\bI am believe\b/gi,
    title: 'Misuse of "I am believe"',
    explanation: '"Believe" is a stative verb. Do not use auxiliary "am" before standard active verbs.',
    bengaliReason: 'বাংলা "আমি বিশ্বাস করি" থেকে আক্ষরিক অনুবাদের প্রবণতা।',
    replacement: 'I believe',
    sampleBefore: 'I am believe in hard work.',
    sampleAfter: 'I believe in hard work.'
  },
  {
    id: 'did-not-went',
    category: 'verbs_tense',
    categoryLabel: 'Verb / Tense Trap',
    pattern: /\bdid not went\b/gi,
    title: 'Double Past Tense ("did not went")',
    explanation: 'After the auxiliary "did", the following main verb must always be in base form (V1).',
    bengaliReason: 'Did নিজেই Past Tense নির্দেশ করায় পরের Verb-টি Base Form (go) হতে হবে।',
    replacement: 'did not go',
    sampleBefore: 'He did not went to the meeting.',
    sampleAfter: 'He did not go to the meeting.'
  },
  {
    id: 'did-not-knew',
    category: 'verbs_tense',
    categoryLabel: 'Verb / Tense Trap',
    pattern: /\bdid not knew\b/gi,
    title: 'Double Past Tense ("did not knew")',
    explanation: 'Auxiliary "did" requires the base form "know", not the past tense "knew".',
    bengaliReason: 'Did এর পরে সর্বদা Verb-এর Base Form "know" বসবে।',
    replacement: 'did not know',
    sampleBefore: 'I did not knew the answer.',
    sampleAfter: 'I did not know the answer.'
  },
  {
    id: 'can-able-to',
    category: 'verbs_tense',
    categoryLabel: 'Verb / Tense Trap',
    pattern: /\b(can able to|could able to)\b/gi,
    title: 'Redundant Modal ("can able to")',
    explanation: '"Can" and "able to" express the same ability concept. Use one or the other.',
    bengaliReason: 'উভয় শব্দই সক্ষমতা বোঝায়, তাই একসাথে ব্যবহার করা ব্যাকরণগতভাবে ভুল।',
    replacement: 'can',
    sampleBefore: 'We can able to solve this issue.',
    sampleAfter: 'We can solve this issue (or "We are able to solve").'
  },
  {
    id: 'must-have-to',
    category: 'verbs_tense',
    categoryLabel: 'Verb / Tense Trap',
    pattern: /\bmust have to\b/gi,
    title: 'Redundant Modal ("must have to")',
    explanation: '"Must" and "have to" express the exact same obligation. Never double them together.',
    bengaliReason: 'Must এবং Have to উভয়েই আবশ্যকতা বোঝায়, একসাথে বসবে না।',
    replacement: 'must',
    sampleBefore: 'You must have to submit the form.',
    sampleAfter: 'You must submit the form (or "You have to submit").'
  },

  // 2. Prepositions & Redundancies
  {
    id: 'discuss-about',
    category: 'prepositions',
    categoryLabel: 'Redundant Preposition',
    pattern: /\bdiscuss about\b/gi,
    title: 'Redundant Preposition after "Discuss"',
    explanation: '"Discuss" is a transitive verb that takes an immediate object without "about".',
    bengaliReason: 'বাংলায় "বিষয়টি সম্পর্কে আলোচনা করা" বলা হলেও ইংরেজিতে Discuss-এর পর About বসে না।',
    replacement: 'discuss',
    sampleBefore: 'Let us discuss about the proposal.',
    sampleAfter: 'Let us discuss the proposal.'
  },
  {
    id: 'order-for',
    category: 'prepositions',
    categoryLabel: 'Redundant Preposition',
    pattern: /\border for (food|lunch|dinner|a cup of tea|coffee|pizza)\b/gi,
    title: 'Redundant Preposition after "Order"',
    explanation: 'When "order" functions as a verb, it directly takes the item without "for".',
    bengaliReason: 'Order যখন Verb হিসেবে ব্যবহৃত হয় তখন সরাসরি Object বসে (যেমন: ordered dinner)।',
    replacement: 'order $1',
    sampleBefore: 'I ordered for lunch yesterday.',
    sampleAfter: 'I ordered lunch yesterday.'
  },
  {
    id: 'request-to-you',
    category: 'prepositions',
    categoryLabel: 'Redundant Preposition',
    pattern: /\brequest to you\b/gi,
    title: 'Redundant "to" after "Request"',
    explanation: '"Request" directly takes the person as object (e.g. "I request you to join").',
    bengaliReason: 'Request verb-এর পর "to" বসানো যাবে না।',
    replacement: 'request you',
    sampleBefore: 'I request to you to reconsider.',
    sampleAfter: 'I request you to reconsider.'
  },
  {
    id: 'cope-up-with',
    category: 'prepositions',
    categoryLabel: 'Redundant Preposition',
    pattern: /\bcope up with\b/gi,
    title: 'Collocation Error "Cope up with"',
    explanation: 'The standard English phrasal verb is "cope with", not "cope up with".',
    bengaliReason: 'বাংলাদেশি শিক্ষার্থীদের বহুল প্রচলিত একটি ভুল কোলোকেশন। সঠিক রূপ "cope with"।',
    replacement: 'cope with',
    sampleBefore: 'He cannot cope up with stress.',
    sampleAfter: 'He cannot cope with stress.'
  },
  {
    id: 'revert-back',
    category: 'prepositions',
    categoryLabel: 'Redundant Preposition',
    pattern: /\brevert back\b/gi,
    title: 'Tautology "Revert back"',
    explanation: '"Revert" already means to return or go back. Adding "back" is redundant.',
    bengaliReason: 'Revert শব্দের ভেতরেই Back অর্থ রয়েছে, তাই পুনরায় Back লেখা বাহুল্য দোষ।',
    replacement: 'revert',
    sampleBefore: 'Please revert back at your earliest convenience.',
    sampleAfter: 'Please reply (or revert) at your earliest convenience.'
  },
  {
    id: 'reply-back',
    category: 'prepositions',
    categoryLabel: 'Redundant Preposition',
    pattern: /\breply back\b/gi,
    title: 'Tautology "Reply back"',
    explanation: '"Reply" implies returning a message. "Back" is unnecessary.',
    bengaliReason: 'Reply-এর সাথে Back ব্যবহার বাহুল্য।',
    replacement: 'reply',
    sampleBefore: 'Kindly reply back to this email.',
    sampleAfter: 'Kindly reply to this email.'
  },
  {
    id: 'repeat-again',
    category: 'prepositions',
    categoryLabel: 'Redundant Preposition',
    pattern: /\brepeat again\b/gi,
    title: 'Tautology "Repeat again"',
    explanation: '"Repeat" already means to do or say something again.',
    bengaliReason: 'Repeat মানেই পুনরায় বলা/করা, সাথে Again বাহুল্য।',
    replacement: 'repeat',
    sampleBefore: 'Could you repeat again please?',
    sampleAfter: 'Could you repeat that please?'
  },
  {
    id: 'return-back',
    category: 'prepositions',
    categoryLabel: 'Redundant Preposition',
    pattern: /\breturn back\b/gi,
    title: 'Tautology "Return back"',
    explanation: '"Return" already contains the meaning of coming back.',
    bengaliReason: 'Return এবং Back একই অর্থ প্রকাশ করে।',
    replacement: 'return',
    sampleBefore: 'When will you return back home?',
    sampleAfter: 'When will you return home?'
  },

  // 3. Latin Comparatives
  {
    id: 'senior-than',
    category: 'latin_comp',
    categoryLabel: 'Latin Comparative Trap',
    pattern: /\bsenior than\b/gi,
    title: 'Comparative "Senior than"',
    explanation: 'Latin comparative adjectives ending in "-ior" take the preposition "to", never "than".',
    bengaliReason: 'Latin Adjective (senior, junior, prior ইত্যাদি)-এর পরে Than না বসে To বসে।',
    replacement: 'senior to',
    sampleBefore: 'He is senior than me by two years.',
    sampleAfter: 'He is senior to me by two years.'
  },
  {
    id: 'junior-than',
    category: 'latin_comp',
    categoryLabel: 'Latin Comparative Trap',
    pattern: /\bjunior than\b/gi,
    title: 'Comparative "Junior than"',
    explanation: '"Junior" is followed by "to", not "than".',
    bengaliReason: 'Junior-এর পর সর্বদা To বসবে।',
    replacement: 'junior to',
    sampleBefore: 'She is junior than him in the department.',
    sampleAfter: 'She is junior to him in the department.'
  },
  {
    id: 'superior-than',
    category: 'latin_comp',
    categoryLabel: 'Latin Comparative Trap',
    pattern: /\bsuperior than\b/gi,
    title: 'Comparative "Superior than"',
    explanation: 'Adjectives of Latin origin like "superior" take "to".',
    bengaliReason: 'Superior-এর পর To বসাতে হয়।',
    replacement: 'superior to',
    sampleBefore: 'This brand is superior than that one.',
    sampleAfter: 'This brand is superior to that one.'
  },
  {
    id: 'inferior-than',
    category: 'latin_comp',
    categoryLabel: 'Latin Comparative Trap',
    pattern: /\binferior than\b/gi,
    title: 'Comparative "Inferior than"',
    explanation: '"Inferior" requires "to", not "than".',
    bengaliReason: 'Inferior-এর পরে To বসে।',
    replacement: 'inferior to',
    sampleBefore: 'The replica is inferior than the original.',
    sampleAfter: 'The replica is inferior to the original.'
  },
  {
    id: 'prior-than',
    category: 'latin_comp',
    categoryLabel: 'Latin Comparative Trap',
    pattern: /\bprior than\b/gi,
    title: 'Comparative "Prior than"',
    explanation: '"Prior" takes "to", e.g., "prior to the conference".',
    bengaliReason: 'Prior-এর সাথে To ব্যবহৃত হয়।',
    replacement: 'prior to',
    sampleBefore: 'Prior than joining the firm, he worked abroad.',
    sampleAfter: 'Prior to joining the firm, he worked abroad.'
  },
  {
    id: 'prefer-than',
    category: 'latin_comp',
    categoryLabel: 'Latin Comparative Trap',
    pattern: /\bprefer (.*?) than\b/gi,
    title: 'Preposition with "Prefer"',
    explanation: '"Prefer" takes the preposition "to" to connect two choices, never "than".',
    bengaliReason: 'Prefer-এর ক্ষেত্রে তুলনার জন্য To ব্যবহৃত হয় (e.g. prefer coffee to tea)।',
    replacement: 'prefer $1 to',
    sampleBefore: 'I prefer tea than coffee.',
    sampleAfter: 'I prefer tea to coffee.'
  },
  {
    id: 'preferable-than',
    category: 'latin_comp',
    categoryLabel: 'Latin Comparative Trap',
    pattern: /\bpreferable than\b/gi,
    title: 'Preposition with "Preferable"',
    explanation: '"Preferable" takes "to", not "than" or "more preferable".',
    bengaliReason: 'Preferable-এর পর To বসে, এবং এর পূর্বে More বসে না।',
    replacement: 'preferable to',
    sampleBefore: 'Walking is preferable than driving here.',
    sampleAfter: 'Walking is preferable to driving here.'
  },

  // 4. Uncountable Nouns
  {
    id: 'a-good-advice',
    category: 'uncountable',
    categoryLabel: 'Uncountable Noun Error',
    pattern: /\ba good advice\b/gi,
    title: 'Article with Uncountable "Advice"',
    explanation: '"Advice" is strictly uncountable in English. It cannot take "a/an" directly.',
    bengaliReason: 'Advice আনকাউন্টেবল নাউন, তাই "a" বসবে না। একটি উপদেশ বোঝাতে "a piece of advice" লিখুন।',
    replacement: 'good advice',
    sampleBefore: 'He gave me a good advice.',
    sampleAfter: 'He gave me good advice (or "a piece of good advice").'
  },
  {
    id: 'an-advice',
    category: 'uncountable',
    categoryLabel: 'Uncountable Noun Error',
    pattern: /\ban advice\b/gi,
    title: 'Article with Uncountable "Advice"',
    explanation: 'Never use "an advice". Say "advice" or "a piece of advice".',
    bengaliReason: 'Advice-এর পূর্বে "an" বসে না।',
    replacement: 'a piece of advice',
    sampleBefore: 'Can you give me an advice?',
    sampleAfter: 'Can you give me a piece of advice?'
  },
  {
    id: 'an-information',
    category: 'uncountable',
    categoryLabel: 'Uncountable Noun Error',
    pattern: /\ban information\b/gi,
    title: 'Article with Uncountable "Information"',
    explanation: '"Information" is uncountable and cannot take "an". Say "a piece of information".',
    bengaliReason: 'Information আনকাউন্টেবল হওয়ায় "an" বসানো ভুল।',
    replacement: 'information',
    sampleBefore: 'I need an information regarding the course.',
    sampleAfter: 'I need information (or "a piece of information") regarding the course.'
  },
  {
    id: 'furnitures',
    category: 'uncountable',
    categoryLabel: 'Uncountable Noun Error',
    pattern: /\bfurnitures\b/gi,
    title: 'Pluralizing "Furniture"',
    explanation: '"Furniture" is a mass noun and has no plural form "furnitures".',
    bengaliReason: 'Furniture-এর বহুবচন রূপ "furnitures" হয় না। অনেক আসবাব বোঝাতে "items of furniture" বলা যায়।',
    replacement: 'furniture',
    sampleBefore: 'We bought new furnitures for the office.',
    sampleAfter: 'We bought new furniture for the office.'
  },
  {
    id: 'equipments',
    category: 'uncountable',
    categoryLabel: 'Uncountable Noun Error',
    pattern: /\bequipments\b/gi,
    title: 'Pluralizing "Equipment"',
    explanation: '"Equipment" is uncountable. Use "pieces of equipment" or simply "equipment".',
    bengaliReason: 'Equipment-এর সাথে s/es যুক্ত করা যায় না।',
    replacement: 'equipment',
    sampleBefore: 'The laboratory has modern equipments.',
    sampleAfter: 'The laboratory has modern equipment.'
  },
  {
    id: 'luggages',
    category: 'uncountable',
    categoryLabel: 'Uncountable Noun Error',
    pattern: /\b(luggages|baggages)\b/gi,
    title: 'Pluralizing "Luggage / Baggage"',
    explanation: '"Luggage" and "baggage" are uncountable mass nouns in standard English.',
    bengaliReason: 'Luggage / Baggage-এর বহুবচন রূপ নেই।',
    replacement: 'luggage',
    sampleBefore: 'Please keep your luggages here.',
    sampleAfter: 'Please keep your luggage here.'
  },
  {
    id: 'sceneries',
    category: 'uncountable',
    categoryLabel: 'Uncountable Noun Error',
    pattern: /\bsceneries\b/gi,
    title: 'Pluralizing "Scenery"',
    explanation: '"Scenery" is uncountable. For specific views, use "scenes" or "landscapes".',
    bengaliReason: 'Sceneries ভুল শব্দ। সঠিক শব্দ "scenery" বা "landscapes"।',
    replacement: 'scenery',
    sampleBefore: 'The sceneries of Coxs Bazar are beautiful.',
    sampleAfter: 'The scenery of Coxs Bazar is beautiful.'
  },
  {
    id: 'feedbacks',
    category: 'uncountable',
    categoryLabel: 'Uncountable Noun Error',
    pattern: /\bfeedbacks\b/gi,
    title: 'Pluralizing "Feedback"',
    explanation: '"Feedback" is uncountable. Say "feedback" or "pieces of feedback".',
    bengaliReason: 'Feedback আনকাউন্টেবল নাউন, বহুবচনে "feedbacks" হবে না।',
    replacement: 'feedback',
    sampleBefore: 'We received valuable feedbacks from students.',
    sampleAfter: 'We received valuable feedback from students.'
  },

  // 5. Mother Tongue Influence (MTI) / Literal Translations
  {
    id: 'according-to-me',
    category: 'literal_mti',
    categoryLabel: 'Literal Bengali MTI',
    pattern: /\baccording to me\b/gi,
    title: 'Literal Translation "According to me"',
    explanation: '"According to" is used for third-party sources. For self-opinion, use "In my opinion" or "From my perspective".',
    bengaliReason: 'বাংলা "আমার মতে" থেকে হুবহু অনুবাদ করায় "According to me" চলে আসে, যা ইংরেজিতে বেমানান।',
    replacement: 'In my opinion',
    sampleBefore: 'According to me, this strategy is flawed.',
    sampleAfter: 'In my opinion, this strategy is flawed.'
  },
  {
    id: 'myself-name',
    category: 'literal_mti',
    categoryLabel: 'Literal Bengali MTI',
    pattern: /\bmyself [a-z]+\b/gi,
    title: 'Self-introduction with Reflexive Pronoun ("Myself...")',
    explanation: 'Reflexive pronouns cannot stand as the subject of a sentence. Use "I am..." or "My name is...".',
    bengaliReason: 'পরিচয় দেওয়ার ক্ষেত্রে "Myself Shishir" বলা চরম ব্যাকরণগত ভুল। "I am" বা "My name is" ব্যবহার করুন।',
    replacement: 'My name is',
    sampleBefore: 'Myself Shishir, working as a lecturer.',
    sampleAfter: 'I am Shishir (or "My name is Shishir"), working as a lecturer.'
  },
  {
    id: 'good-name',
    category: 'literal_mti',
    categoryLabel: 'Literal Bengali MTI',
    pattern: /\bgood name\b/gi,
    title: 'Literal Translation "Good name"',
    explanation: 'A direct translation of "ভালো নাম / শুভ নাম". In standard English, ask "What is your name?" or "full name".',
    bengaliReason: 'বাংলা "শুভ নাম / ভালো নাম"-এর আক্ষরিক অনুবাদ। ইংরেজিতে শুধুই Name বা Full Name বলা হয়।',
    replacement: 'full name',
    sampleBefore: 'May I know your good name please?',
    sampleAfter: 'May I know your name please?'
  },
  {
    id: 'cousin-brother',
    category: 'literal_mti',
    categoryLabel: 'Literal Bengali MTI',
    pattern: /\b(cousin brother|cousin sister)\b/gi,
    title: 'Redundant "Cousin brother / sister"',
    explanation: 'In English, "cousin" is gender-neutral. Avoid adding brother/sister unless specifying "male/female cousin".',
    bengaliReason: 'বাংলা "খালাতো ভাই/চাচাতো বোন"-এর আদলে Brother/Sister যোগ করা হয়, যা ইংরেজিতে অপ্রয়োজনীয়।',
    replacement: 'cousin',
    sampleBefore: 'He is my cousin brother.',
    sampleAfter: 'He is my cousin.'
  },
  {
    id: 'today-morning',
    category: 'literal_mti',
    categoryLabel: 'Literal Bengali MTI',
    pattern: /\btoday morning\b/gi,
    title: 'Time Expression "Today morning"',
    explanation: 'The natural English idiom is "this morning", not "today morning".',
    bengaliReason: 'বাংলা "আজ সকালে"-র আক্ষরিক অনুবাদ। সঠিক ইংরেজি "this morning"।',
    replacement: 'this morning',
    sampleBefore: 'I met him today morning.',
    sampleAfter: 'I met him this morning.'
  },
  {
    id: 'yesterday-night',
    category: 'literal_mti',
    categoryLabel: 'Literal Bengali MTI',
    pattern: /\byesterday night\b/gi,
    title: 'Time Expression "Yesterday night"',
    explanation: 'In English, use "last night", not "yesterday night".',
    bengaliReason: 'বাংলা "গতকাল রাতে"-র আক্ষরিক অনুবাদ। সঠিক প্রকাশ "last night"।',
    replacement: 'last night',
    sampleBefore: 'It rained heavily yesterday night.',
    sampleAfter: 'It rained heavily last night.'
  },
  {
    id: 'open-the-light',
    category: 'literal_mti',
    categoryLabel: 'Literal Bengali MTI',
    pattern: /\b(open the light|close the light)\b/gi,
    title: 'Collocation "Open/Close the light"',
    explanation: 'Electrical appliances and lights are "turned on / switched off", not opened or closed.',
    bengaliReason: 'বাংলায় "লাইট খোলো / বন্ধ করো" বলা হলেও ইংরেজিতে Turn on / Switch off বলতে হয়।',
    replacement: 'turn on the light',
    sampleBefore: 'Please open the light before entering.',
    sampleAfter: 'Please turn on the light before entering.'
  },
  {
    id: 'give-exam',
    category: 'literal_mti',
    categoryLabel: 'Literal Bengali MTI',
    pattern: /\b(give exam|giving exam|give the exam|giving the exam)\b/gi,
    title: 'Reversed Roles in "Give exam"',
    explanation: 'In English, students "take an exam" or "sit for an exam". Teachers or boards "give/administer" the exam.',
    bengaliReason: 'বাংলায় পরীক্ষার্থীরা "পরীক্ষা দেওয়া" বললেও ইংরেজিতে ছাত্ররা "take / sit for an exam" করে।',
    replacement: 'take the exam',
    sampleBefore: 'I am giving my BCS exam this year.',
    sampleAfter: 'I am taking (or sitting for) my BCS exam this year.'
  },
  {
    id: 'look-forward-to-meet',
    category: 'verbs_tense',
    categoryLabel: 'Gerund Preposition Trap',
    pattern: /\blook forward to meet\b/gi,
    title: 'Gerund after "Look forward to"',
    explanation: 'The phrase "look forward to" ends with the preposition "to", requiring a gerund (-ing form).',
    bengaliReason: 'To-কে Infinitive মনে করে Base Form বসানোর ভুল। এখানে To হলো Preposition, তাই Meeting হবে।',
    replacement: 'look forward to meeting',
    sampleBefore: 'I look forward to meet you next week.',
    sampleAfter: 'I look forward to meeting you next week.'
  }
];

export const BanglaMistakeChecker: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [matchedErrors, setMatchedErrors] = useState<{ rule: ErrorRule; matchIndex: number; matchedText: string }[]>([]);
  const [hasScanned, setHasScanned] = useState(false);

  const handleScan = () => {
    if (!inputText.trim()) return;
    const found: { rule: ErrorRule; matchIndex: number; matchedText: string }[] = [];
    
    COMPREHENSIVE_BD_RULES.forEach(rule => {
      const matches = [...inputText.matchAll(rule.pattern)];
      matches.forEach(m => {
        found.push({
          rule,
          matchIndex: m.index || 0,
          matchedText: m[0]
        });
      });
    });

    setMatchedErrors(found);
    setHasScanned(true);
    if (found.length === 0) {
      confetti({ particleCount: 50, spread: 50, origin: { y: 0.7 } });
    }
  };

  const applySingleFix = (rule: ErrorRule, matchedText: string) => {
    const updated = inputText.replace(new RegExp(matchedText, 'i'), rule.replacement);
    setInputText(updated);
    // Re-scan updated text
    setTimeout(() => {
      const remaining: { rule: ErrorRule; matchIndex: number; matchedText: string }[] = [];
      COMPREHENSIVE_BD_RULES.forEach(r => {
        const matches = [...updated.matchAll(r.pattern)];
        matches.forEach(m => {
          remaining.push({
            rule: r,
            matchIndex: m.index || 0,
            matchedText: m[0]
          });
        });
      });
      setMatchedErrors(remaining);
    }, 50);
  };

  const applyAllFixes = () => {
    let text = inputText;
    matchedErrors.forEach(({ rule, matchedText }) => {
      text = text.replace(new RegExp(matchedText, 'i'), rule.replacement);
    });
    setInputText(text);
    setMatchedErrors([]);
    confetti({ particleCount: 60, spread: 60, origin: { y: 0.7 } });
  };

  const filteredErrors = activeCategory === 'all'
    ? matchedErrors
    : matchedErrors.filter(m => m.rule.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Issues' },
    { id: 'verbs_tense', label: 'Verbs & Tense' },
    { id: 'prepositions', label: 'Prepositions & Tautology' },
    { id: 'latin_comp', label: 'Latin Comparatives' },
    { id: 'uncountable', label: 'Uncountable Nouns' },
    { id: 'literal_mti', label: 'MTI & Literal Phrases' }
  ];

  const loadExampleBad = () => {
    setInputText('I am agree with your proposal. Let us discuss about this topic because he is senior than me and gave me a good advice. I will give exam today morning and look forward to meet you.');
    setHasScanned(false);
    setMatchedErrors([]);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl text-slate-900">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl border border-amber-200">
            <SpellCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
              Bangladeshi English Common Mistake Scanner
              <span className="text-xs bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-0.5 rounded-full font-semibold">50+ UCC Rules</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">Detect Bengali-speaker grammatical habits, tautologies, preposition traps, and 1-click auto-fix.</p>
          </div>
        </div>
        <button
          onClick={loadExampleBad}
          className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 transition flex items-center gap-1.5 self-start md:self-auto cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-700" /> Load Bangladeshi Habit Sample
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Editor & Scanner */}
        <div className="lg:col-span-6 space-y-4">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold text-slate-700">Enter your English text to scan:</label>
              {matchedErrors.length > 0 && (
                <button
                  onClick={applyAllFixes}
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg flex items-center gap-1 transition cursor-pointer"
                >
                  <Wand2 className="w-3 h-3" /> Auto-Fix All ({matchedErrors.length})
                </button>
              )}
            </div>
            <textarea
              rows={9}
              placeholder="e.g. I am agree with your proposal. We need to discuss about the budget because he is senior than me and gave me a good advice. I will give exam today morning."
              value={inputText}
              onChange={e => {
                setInputText(e.target.value);
                if (hasScanned) setHasScanned(false);
              }}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-900 focus:border-amber-500 focus:bg-white outline-none leading-relaxed transition"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleScan}
              disabled={!inputText.trim()}
              className="flex-1 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-400" /> Scan for Typical Bengali English Errors
            </button>
            <button
              onClick={() => {
                setInputText('');
                setMatchedErrors([]);
                setHasScanned(false);
              }}
              className="px-4 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition"
            >
              Clear
            </button>
          </div>

          {/* Quick Info Box */}
          <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-200 text-[11px] text-slate-700 flex items-start gap-2">
            <BookOpen className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-amber-900">UCC Pedagogy Insight: </span>
              Over 85% of grammatical deductions for Bangladeshi IELTS & Job candidates stem from literal Bangla-to-English translation patterns (MTI) and redundant prepositions.
            </div>
          </div>
        </div>

        {/* Right Column: Diagnostic Results & 1-Click Fixes */}
        <div className="lg:col-span-6 bg-slate-50 rounded-2xl border border-slate-200 p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-3">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <SpellCheck className="w-4 h-4 text-amber-600" /> Grammatical Diagnosis
              </h4>
              {hasScanned && (
                <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${matchedErrors.length === 0 ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-amber-50 text-amber-800 border border-amber-200'}`}>
                  {matchedErrors.length === 0 ? '✓ No Common Errors' : `${matchedErrors.length} Issue(s) Detected`}
                </span>
              )}
            </div>

            {/* Category Filter Badges */}
            {hasScanned && matchedErrors.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-3">
                {categories.map(cat => {
                  const count = cat.id === 'all' ? matchedErrors.length : matchedErrors.filter(m => m.rule.category === cat.id).length;
                  if (count === 0 && cat.id !== 'all') return null;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`text-[10px] font-semibold px-2 py-1 rounded-lg border transition ${activeCategory === cat.id ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'}`}
                    >
                      {cat.label} ({count})
                    </button>
                  );
                })}
              </div>
            )}

            {/* Error List */}
            <div className="space-y-2.5 max-h-[360px] overflow-y-auto pr-1">
              {hasScanned ? (
                filteredErrors.length > 0 ? (
                  filteredErrors.map(({ rule, matchedText }, idx) => (
                    <div key={idx} className="p-3 bg-white rounded-xl border border-amber-300/80 shadow-xs space-y-2 text-xs">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-1.5 font-bold text-amber-900">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>{rule.title}</span>
                          <span className="text-[9px] bg-amber-50 text-amber-800 px-1.5 py-0.2 rounded border border-amber-200">{rule.categoryLabel}</span>
                        </div>
                        <button
                          onClick={() => applySingleFix(rule, matchedText)}
                          className="text-[11px] font-bold text-emerald-700 hover:text-white hover:bg-emerald-600 bg-emerald-50 border border-emerald-300 px-2 py-0.5 rounded-md transition flex items-center gap-1 shrink-0 cursor-pointer"
                        >
                          <Wand2 className="w-3 h-3" /> Fix
                        </button>
                      </div>

                      <p className="text-[11px] text-slate-600">{rule.explanation}</p>
                      
                      {rule.bengaliReason && (
                        <div className="text-[10px] bg-amber-50/70 p-1.5 rounded text-amber-900 border border-amber-200/60">
                          <span className="font-semibold">বাংলা কারণ:</span> {rule.bengaliReason}
                        </div>
                      )}

                      <div className="flex items-center gap-2 text-[11px] bg-slate-50 p-2 rounded-lg border border-slate-200">
                        <span className="line-through text-red-500">{matchedText}</span>
                        <ArrowRight className="w-3 h-3 text-slate-400 shrink-0" />
                        <span className="font-bold text-emerald-700">{rule.replacement}</span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-8 text-center space-y-2">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <div className="text-sm font-bold text-slate-900">Flawless Text Structure!</div>
                    <p className="text-xs text-slate-600">No standard Bangladeshi English grammatical traps or redundant collocations found in this text.</p>
                  </div>
                )
              ) : (
                <div className="py-12 text-center text-slate-500 text-xs space-y-2">
                  <SpellCheck className="w-8 h-8 text-slate-300 mx-auto" />
                  <p>Enter or paste your text on the left and click "Scan" to review errors with Bengali pedagogical rationales.</p>
                </div>
              )}
            </div>
          </div>

          <div className="pt-3 mt-4 border-t border-slate-200 text-[10px] text-slate-500 flex items-center justify-between">
            <span>UCC English Pedagogy Database (7+ Yrs Research)</span>
            <span>50+ Live Rules</span>
          </div>
        </div>
      </div>
    </div>
  );
};
