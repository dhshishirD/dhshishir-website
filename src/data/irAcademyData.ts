import type { 
  Pillar, 
  GlossaryTerm, 
  CrisisScenario, 
  QuizQuestion 
} from '../types/irAcademy';

export const IR_FELLOWSHIP_TITLE = "Open Master's Fellowship in International Relations & Strategic Studies";
export const IR_FELLOWSHIP_CODE = "OMF-IRSS";

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: "Anarchy (International)",
    category: "IR Theory",
    pronunciationIpa: "/ˈæn.ər.ki/",
    definition: "The absence of a centralized global sovereign authority or overarching world government to enforce rules and mediate interstate disputes.",
    banglaMeaning: "আন্তর্জাতিক নৈরাজ্য — কেন্দ্রীয় বৈশ্বিক শাসনহীন অবস্থা যেখানে রাষ্ট্রসমূহ নিজস্ব শক্তিতে সার্বভৌমত্ব রক্ষা করে।",
    diplomaticContext: "In structural realism, anarchy compels states to rely on self-help, balance-of-power strategies, and military self-reliance to survive."
  },
  {
    term: "Security Dilemma",
    category: "IR Theory",
    pronunciationIpa: "/səˈkjʊə.rə.ti dɪˈlem.ə/",
    definition: "A condition where actions taken by one state to heighten its defensive security inherently induce fear and counter-mobilization in rival states, leading to unintended escalation.",
    banglaMeaning: "নিরাপত্তা সংকট (সিকিউরিটি ডিলেমা) — আত্মরক্ষার সামরিক প্রস্তুতিকে প্রতিপক্ষ আগ্রাসী তৎপরতা হিসেবে দেখে অস্ত্র প্রতিযোগিতায় লিপ্ত হওয়া।",
    diplomaticContext: "Conceptualized by John Herz and Robert Jervis, explaining how defensive armament triggers regional arms races."
  },
  {
    term: "Strategic Autonomy",
    category: "Security & Strategy",
    pronunciationIpa: "/strəˈtiː.dʒɪk ɔːˈtɒn.ə.mi/",
    definition: "The institutional capability of a sovereign nation to formulate and execute foreign and security policies based strictly on national interests without yielding to external hegemonic coercion.",
    banglaMeaning: "কৌশলগত স্বায়ত্তশাসন — কোনো পরাশক্তির সামরিক বা ভূ-রাজনৈতিক বলয়ের কাছে নতি স্বীকার না করে স্বাধীন পররাষ্ট্রনীতি পরিচালনা।",
    diplomaticContext: "A cornerstone doctrine for middle powers navigating multipolar competition between global superpowers."
  },
  {
    term: "Bangladesh First Doctrine",
    category: "Bangladesh Statecraft",
    pronunciationIpa: "/ˈbæŋ.ɡlə.dɛʃ fɜːst ˈdɒk.trɪn/",
    definition: "A post-2024 strategic foreign policy orientation asserting absolute sovereign equality, zero tolerance for border aggression, strict reciprocity in bilateral ties, and national interest primacy.",
    banglaMeaning: "বাংলাদেশ ফার্স্ট ডকট্রিন — ২০২৪-পরবর্তী পররাষ্ট্রনীতি যেখানে জাতীয় সার্বভৌমত্ব, সীমান্ত নিরাপত্তা, ও দ্বিপাক্ষিক সমমর্যাদাকে সর্বোচ্চ অগ্রাধিকার দেওয়া হয়।",
    diplomaticContext: "Emphasizes dignity-based statecraft, equitable transboundary water governance, and non-aligned multi-vector partnerships."
  },
  {
    term: "Cognitive Bias & Heuristics",
    category: "Political Psychology",
    pronunciationIpa: "/ˈkɒɡ.nɪ.tɪv ˈbaɪ.əs/",
    definition: "Systematic mental shortcuts and perceptual distortions that cause foreign policy leaders to misinterpret opponent intentions, dismiss contradictory intelligence, and escalate crises.",
    banglaMeaning: "জ্ঞানীয় পক্ষপাত ও হিউরিস্টিকস — মানসিক পূর্বধারণা ও সংকীর্ণ তথ্যের ভিত্তিতে বিশ্বনেতাদের ভুল কূটনৈতিক সিদ্ধান্ত গ্রহণ।",
    diplomaticContext: "Central to Harvard political psychology frameworks analyzing historic intelligence failures and war outbreaks."
  },
  {
    term: "Prospect Theory",
    category: "Political Psychology",
    pronunciationIpa: "/ˈprɒs.pɛkt ˈθɪə.ri/",
    definition: "Behavioral economic and decision theory showing that state leaders are risk-averse when protecting perceived gains, but highly risk-acceptant when facing perceived losses of territory or prestige.",
    banglaMeaning: "প্রসপেক্ট থিওরি — ক্ষতি বা মর্যাদা হানির মুখে রাষ্ট্রনায়কদের অপ্রয়োজনীয় সামরিক ঝুঁকি ও সংঘাত বৃদ্ধির মনস্তাত্ত্বিক প্রবণতা।",
    diplomaticContext: "Explains why regimes frequently double down on failing military interventions rather than accept political defeat."
  },
  {
    term: "Groupthink",
    category: "Political Psychology",
    pronunciationIpa: "/ˈɡruːp.θɪŋk/",
    definition: "A psychological phenomenon in cohesive cabinet advisory councils where the desire for conformity and consensus suppresses critical dissent, resulting in disastrous strategic decisions.",
    banglaMeaning: "গ্রুপথিঙ্ক — জাতীয় নিরাপত্তা কাউন্সিলে অন্ধ ঐকমত্যের কারণে ভিন্নমত ও সতর্কবার্তা দমন করে অপরিণামদর্শী সিদ্ধান্ত নেওয়া।",
    diplomaticContext: "Irving Janis identified groupthink as the root cause of the Bay of Pigs disaster and escalation in the Vietnam War."
  },
  {
    term: "Operational Code",
    category: "Political Psychology",
    pronunciationIpa: "/ˌɒp.ərˈeɪ.ʃən.əl koʊd/",
    definition: "A leader's core philosophical and instrumental belief system regarding the fundamental nature of political conflict, the predictability of history, and the utility of force.",
    banglaMeaning: "অপারেশনাল কোড — বিশ্বনেতাদের মৌলিক দার্শনিক দৃষ্টিভঙ্গি যা নির্ধারণ করে তারা বিশ্বরাজনীতিকে সহজাত সংঘাতময় নাকি সহযোগিতাপূর্ণ মনে করেন।",
    diplomaticContext: "Used by intelligence and diplomatic agencies to profile adversary decision-makers during high-stakes brinkmanship."
  },
  {
    term: "Omnidirectional Hedging",
    category: "Security & Strategy",
    pronunciationIpa: "/ˌɒm.nɪ.daɪˈrɛk.ʃən.əl ˈhɛdʒ.ɪŋ/",
    definition: "A sophisticated middle-power alignment strategy involving concurrent economic, security, and diplomatic diversification across multiple competing superpowers without entering binding formal alliances.",
    banglaMeaning: "সর্বমুখী হেজিং — কোনো একক পরাশক্তির ওপর নির্ভরশীল না হয়ে বহুমুখী অংশীদারিত্ব ও কূটনৈতিক ভারসাম্য বজায় রাখা।",
    diplomaticContext: "Employed by littoral middle powers in the Indo-Pacific to extract infrastructure capital while guarding sovereign deterrence."
  },
  {
    term: "Exclusive Economic Zone (EEZ)",
    category: "International Law",
    pronunciationIpa: "/ɪkˈskluː.sɪv ˌiː.kəˈnɒm.ɪk zoʊn/",
    definition: "A maritime zone extending up to 200 nautical miles from a coastal state's baseline, conferring sovereign exploration rights over marine living resources and seabed energy reserves under UNCLOS.",
    banglaMeaning: "একচেটিয়া অর্থনৈতিক অঞ্চল (ইইজেড) — উপকূলীয় রাষ্ট্রের সমুদ্রতীর থেকে ২০০ নটিক্যাল মাইল পর্যন্ত মৎস্য ও খনিজ সম্পদের ওপর সার্বভৌম অধিকার।",
    diplomaticContext: "Delimited peacefully by Bangladesh in landmark ITLOS (2012 Myanmar) and PCA (2014 India) verdicts."
  },
  {
    term: "Weaponized Interdependence",
    category: "Geoeconomics",
    pronunciationIpa: "/ˈwɛp.ən.aɪzd ˌɪn.tə.dɪˈpɛn.dəns/",
    definition: "The strategic exploitation of centralized global economic, communication, or energy networks (such as SWIFT, semiconductor supply chains, or transit pipelines) for geopolitical coercion.",
    banglaMeaning: "অস্ত্রায়িত আন্তঃনির্ভরশীলতা — সুইফট, সেমিকন্ডাক্টর বা ট্রানজিট করিডোরের মতো বৈশ্বিক নেটওয়ার্ককে রাজনৈতিক চাপের হাতিয়ার হিসেবে ব্যবহার।",
    diplomaticContext: "Demonstrated in Western sanctions regimes, critical mineral export controls, and unilateral energy cutoffs."
  },
  {
    term: "Two-Level Game Theory",
    category: "IR Theory",
    pronunciationIpa: "/tuː ˈlɛv.əl ɡeɪm/",
    definition: "Robert Putnam's model conceptualizing international diplomacy as simultaneous negotiations: Level I (interstate diplomatic bargaining) and Level II (domestic coalition ratification and public consensus).",
    banglaMeaning: "টু-লেভেল গেম থিওরি — পররাষ্ট্রনীতিতে যুগপৎ আন্তর্জাতিক দরকষাকষি এবং অভ্যন্তরীণ রাজনৈতিক অনুমোদন ও জনমতের মিথস্ক্রিয়া।",
    diplomaticContext: "Shows that a diplomatic agreement at the international table is void if domestic political constituencies refuse to ratify it."
  },
  {
    term: "Jus Cogens",
    category: "International Law",
    pronunciationIpa: "/juːs ˈkoʊ.dʒɛnz/",
    definition: "Peremptory norms of general international law from which no derogation is permitted by any state, including the absolute prohibitions on aggression, genocide, slavery, and torture.",
    banglaMeaning: "জুস কোজেন্স — আন্তর্জাতিক আইনের অলঙ্ঘনীয় মৌলিক বিধি যা কোনো চুক্তি বা রাষ্ট্রীয় আইন দ্বারা বাতিল করা যায় না।",
    diplomaticContext: "Formulates the legal bedrock of international accountability and universal jurisdiction before the ICJ and ICC."
  },
  {
    term: "Balance of Threat Theory",
    category: "IR Theory",
    pronunciationIpa: "/ˈbæl.əns ɒv θrɛt/",
    definition: "Stephen Walt's refinement of realism positing that states form balancing coalitions not merely against aggregate national power, but against the most proximate and perceived threatening states.",
    banglaMeaning: "ব্যালেন্স অব থ্রেট — রাষ্ট্রসমূহ কেবল সামগ্রিক শক্তির বিপরীতে নয়, বরং সবচেয়ে আগ্রাসী ও প্রত্যক্ষ হুমকির বিপরীতে সামরিক ভারসাম্য গড়ে তোলে।",
    diplomaticContext: "Explains regional alignment shifts when a rising neighbor demonstrates revisionist or coercive intent."
  },
  {
    term: "Blue Economy & Sea Power",
    category: "Bangladesh Statecraft",
    pronunciationIpa: "/bluː iˈkɒn.ə.mi/",
    definition: "The sustainable utilization of ocean resources for economic growth, encompassing deep-sea fishing, offshore hydrocarbon extraction, shipbuilding, port logistics, and maritime security surveillance.",
    banglaMeaning: "ব্লু ইকোনমি (নীল অর্থনীতি) ও সমুদ্রশক্তি — টেকসই সামুদ্রিক অর্থনীতি, গভীর সমুদ্র সম্পদ আহরণ এবং উপকূলীয় নৌ-প্রতিরক্ষা সক্ষমতা।",
    diplomaticContext: "Vital for national development following the acquisition of 118,813 sq km of sovereign maritime territory in the Bay of Bengal."
  }
];

export const PILLARS_DATA: Pillar[] = [
  {
    id: 'pillar1_theories',
    termId: 'term1',
    termTitle: 'Term I: Foundations & Theoretical Paradigms',
    pillarNumber: 1,
    title: 'Theories of International Relations & Sovereign Statecraft',
    categoryBadge: 'Classical & Structural Theory',
    shortDescription: 'Master the foundational paradigms of world politics: Classical Realism, Structural Realism, Liberal Institutionalism, Constructivism, and Subaltern Realism.',
    academicObjective: 'Equip fellows with rigorous epistemological and ontological tools to systematically dissect state behavior, balance-of-power dynamics, and systemic anarchy.',
    competencyArea: 'Theoretical Modeling & Systemic Analysis',
    lectures: [
      {
        id: 'lec1_1',
        pillarId: 'pillar1_theories',
        lectureNumber: '1.1',
        title: 'Anarchy, Sovereignty & Classical Statecraft',
        subtitle: 'From the Melian Dialogue to Westphalian Order',
        readTimeMinutes: 18,
        overview: 'World politics operates within an anarchic international system—a realm devoid of a central global enforcement agency. This lecture examines the intellectual lineage of classical statecraft: Thucydides\' Melian Dialogue ("the strong do what they have the power to do and the weak accept what they have to accept"), Niccolò Machiavelli\'s doctrine of ragione di stato (reasons of state), and Thomas Hobbes\'s Leviathan state of nature applied to sovereign princes. We trace how the 1648 Peace of Westphalia codified the twin principles of territorial sovereignty (cuius regio, eius religio) and non-interference, creating the modern sovereign state system.',
        theoreticalFrameworks: [
          {
            name: 'Thucydidean Prudence & Power Asymmetry',
            concept: 'Interstate justice exists only between equals in power; between unequals, power dictates outcomes unless mitigated by diplomatic alliance.',
            application: 'Analyzing how small and middle powers navigate bilateral pressure from neighboring hegemons.'
          },
          {
            name: 'The Westphalian Sovereign Compact (1648)',
            concept: 'Legal equality of states, exclusive territorial jurisdiction, and the formal prohibition of external intervention in domestic sovereign governance.',
            application: 'Formulating legal defenses against extraterritorial political coercion in multilateral forums.'
          }
        ],
        statecraftCaseStudy: {
          title: 'The Melian Dialogue (416 BCE): The Perils of Strategic Wishful Thinking',
          historicalContext: 'During the Peloponnesian War, the Athenian armada besieged the neutral island state of Melos, demanding immediate capitulation and tribute.',
          strategicAnalysis: 'The Melians relied on moral justice and the speculative hope of Spartan rescue. The Athenians dismissed moral appeals, asserting that systemic power differentials govern survival. The Melians were annihilated.',
          lessonsForStatecraft: 'Diplomacy untethered from tangible national deterrence or credible alliance commitments invites strategic catastrophe. Morality cannot substitute for sovereign balance of power.'
        },
        banglaDiplomaticSummary: 'আন্তর্জাতিক ব্যবস্থা মৌলিকভাবেই নৈরাজ্যময়। থুসিডিডিসের মেলিয়ান সংলাপ থেকে শুরু করে ১৬৪৮ সালের ওয়েস্টফালিয়া শান্তি চুক্তি পর্যন্ত রাষ্ট্রচিন্তার মূল সত্য হলো—সার্বভৌম অস্তিত্ব টিকিয়ে রাখতে হলে নৈতিক আশ্বাসের চেয়ে বাস্তব সামরিক ও অর্থনৈতিক সক্ষমতাই প্রধান।',
        analyticalSeminarQuestions: [
          'How does the Westphalian principle of non-interference reconcile with contemporary unilateral sanctions and extraterritorial jurisdiction?',
          'Why do small states face acute survival dilemmas in an anarchic international structure, and how does diplomatic alignment mitigate this risk?'
        ],
        keyReadings: [
          {
            title: 'History of the Peloponnesian War (Book V: Melian Dialogue)',
            author: 'Thucydides',
            sourceType: 'Classic Text',
            coreConcept: 'Power asymmetry, strategic prudence, and the limits of moral appeals in war.'
          },
          {
            title: 'The Prince & The Discourses on Livy',
            author: 'Niccolò Machiavelli',
            sourceType: 'Classic Text',
            coreConcept: 'Virtù, fortuna, and the autonomy of statecraft from private morality.'
          }
        ]
      },
      {
        id: 'lec1_2',
        pillarId: 'pillar1_theories',
        lectureNumber: '1.2',
        title: 'Structural Realism: Polarities, Security Dilemmas & Power Shifts',
        subtitle: 'Defensive vs. Offensive Realism in a Multipolar World',
        readTimeMinutes: 22,
        overview: 'Moving beyond human nature, Structural Realism (Neorealism) posits that the distribution of material capabilities across an anarchic system dictates state behavior. Kenneth Waltz\'s Defensive Realism argues that systemic anarchy incentivizes states to seek an appropriate balance of power rather than maximize power indefinitely, as expansion triggers counter-balancing coalitions. Conversely, John Mearsheimer\'s Offensive Realism contends that states can never be certain of others\' future intentions and must relentlessly seek regional hegemony to ensure absolute security. We deconstruct how unipolar, bipolar, and multipolar architectures generate distinct stability profiles.',
        theoreticalFrameworks: [
          {
            name: 'Waltzian Defensive Realism & Balance of Power',
            concept: 'States are systemically punished for over-expansion. The primary state objective is security and survival, achieved through internal balancing (armament) or external balancing (alliances).',
            application: 'Explaining why emerging middle powers balance against overbearing regional hegemons.'
          },
          {
            name: 'Mearsheimer\'s Offensive Realism & Regional Hegemony',
            concept: 'Global hegemony is impossible due to the stopping power of water; therefore, great powers strive to become the sole hegemon in their home region while preventing peer competitors from dominating other regions.',
            application: 'Analyzing the Indo-Pacific geopolitical rivalry and naval containment strategies.'
          }
        ],
        statecraftCaseStudy: {
          title: 'The Security Dilemma & The Outbreak of World War I (1914)',
          historicalContext: 'The rigid alliance structure of the Triple Entente and Triple Alliance transformed a localized Balkan crisis into a systemic continental war.',
          strategicAnalysis: 'German naval expansion and railway mobilization timetables (Schlieffen Plan) were perceived by Britain and Russia as mortal existential threats, triggering preemptive mobilization cascades.',
          lessonsForStatecraft: 'When defensive preparations are indistinguishable from offensive capabilities, arms races and rigid alliances escalate crises beyond the political control of statesmen.'
        },
        banglaDiplomaticSummary: 'স্ট্রাকচারাল রিয়ালিজম প্রমাণ করে যে আন্তর্জাতিক কাঠামোই রাষ্ট্রের আচরণ নিয়ন্ত্রণ করে। কেনেথ ওয়াল্টজের ডিফেন্সিভ রিয়ালিজম ভারসাম্যের ওপর গুরুত্ব দেয়, আর মেয়ারশাইমারের অফেন্সিভ রিয়ালিজম আঞ্চলিক আধিপত্য প্রতিষ্ঠার অপরিহার্যতা ব্যাখ্যা করে।',
        analyticalSeminarQuestions: [
          'Is a multipolar international architecture inherently more prone to miscalculation and conflict than a bipolar balance of power?',
          'How does the stopping power of water influence naval grand strategy in the Indian Ocean and South China Sea?'
        ],
        keyReadings: [
          {
            title: 'Theory of International Politics',
            author: 'Kenneth N. Waltz',
            sourceType: 'Academic Journal',
            coreConcept: 'Systemic structure, distribution of capabilities, and balance of power dynamics.'
          },
          {
            title: 'The Tragedy of Great Power Politics',
            author: 'John J. Mearsheimer',
            sourceType: 'Academic Journal',
            coreConcept: 'Offensive realism, regional hegemony, and the inevitability of great power conflict.'
          }
        ]
      },
      {
        id: 'lec1_3',
        pillarId: 'pillar1_theories',
        lectureNumber: '1.3',
        title: 'Liberal Institutionalism, Interdependence & Regime Theory',
        subtitle: 'Cooperation under Anarchy and Institutional Locking',
        readTimeMinutes: 20,
        overview: 'Liberal Institutionalism (developed by Robert Keohane and Joseph Nye) demonstrates how formal institutions, international regimes, and economic interdependence mitigate the friction of international anarchy. By reducing transaction costs, establishing monitoring mechanisms, mitigating information asymmetries, and creating iterated games (the shadow of the future), multilateral institutions enable rational states to achieve mutually beneficial cooperation without a world government. We also interrogate the Democratic Peace Proposition (Kant) and the structural vulnerabilities of weaponized interdependence.',
        theoreticalFrameworks: [
          {
            name: 'Keohane\'s Neoliberal Institutionalism',
            concept: 'Institutions alter state payoffs, foster compliance through reputational costs, and transform zero-sum interactions into positive-sum absolute gains.',
            application: 'Utilizing multilateral trade bodies (WTO) and climate summits to advance national economic priorities.'
          },
          {
            name: 'Complex Interdependence & Soft Power (Nye)',
            concept: 'Multiple channels connect societies, interstate agendas lack clear hierarchies, and military force is ineffective for complex transnational bargaining.',
            application: 'Deploying cultural diplomacy, UN peacekeeping prestige, and climate leadership to build global soft power.'
          }
        ],
        statecraftCaseStudy: {
          title: 'The Bretton Woods Monetary Regime & The GATT/WTO Framework',
          historicalContext: 'Following the devastating economic nationalism of the 1930s, allied nations established rule-based institutions to govern global currency exchange and lower trade barriers.',
          strategicAnalysis: 'By locking member states into standardized dispute resolution and tariff schedules, the multilateral trade regime generated eight decades of unprecedented global commercial expansion.',
          lessonsForStatecraft: 'Small and middle powers derive maximal diplomatic leverage from rule-bound multilateral regimes where legal procedures constrain the unbridled exercise of raw hegemon power.'
        },
        banglaDiplomaticSummary: 'লিবারেল ইনস্টিটিউশনাল তত্ত্ব দেখায় যে আন্তর্জাতিক সংস্থা ও অর্থনৈতিক আন্তঃনির্ভরশীলতা তথ্য বিভ্রাট দূর করে এবং পারস্পরিক লাভের সুযোগ সৃষ্টি করে। নিয়মভিত্তিক বহুপাক্ষিক ব্যবস্থা ক্ষুদ্র ও মাঝারি রাষ্ট্রের জন্য রক্ষাকবচ হিসেবে কাজ করে।',
        analyticalSeminarQuestions: [
          'Can multilateral institutions survive when dominant hegemons choose to bypass or undermine rule-based dispute settlement mechanisms?',
          'How does the Democratic Peace thesis apply to contemporary hybrid and electoral regimes in the Global South?'
        ],
        keyReadings: [
          {
            title: 'After Hegemony: Cooperation and Discord in the World Political Economy',
            author: 'Robert O. Keohane',
            sourceType: 'Academic Journal',
            coreConcept: 'Regime theory, transaction costs, and iterated cooperation under anarchy.'
          },
          {
            title: 'Power and Interdependence',
            author: 'Robert O. Keohane & Joseph S. Nye',
            sourceType: 'Academic Journal',
            coreConcept: 'Vulnerability and sensitivity interdependence in world politics.'
          }
        ]
      }
    ],
    checkpointQuiz: {
      id: 'quiz_p1',
      pillarId: 'pillar1_theories',
      title: 'Pillar 1 Comprehensive Theoretical Mastery Examination',
      passingScorePercentage: 75,
      questions: [
        {
          id: 'q1_1',
          prompt: 'According to Kenneth Waltz\'s Structural Realism, what is the primary driving force behind state behavior in the international system?',
          options: [
            'The innate human lust for power and dominance (animus dominandi)',
            'The anarchic structure of the international system and distribution of material capabilities',
            'Domestic constitutional regimes and ideological party platforms',
            'International legal treaties codified by the United Nations'
          ],
          correctIndex: 1,
          academicRationale: 'Waltzian Neorealism explicitly locates the cause of state action at the systemic level (Third Image), where anarchy and material power distribution dictate state survival imperatives.',
          banglaExplanation: 'ওয়াল্টজের নিওরিয়ালিজম অনুসারে ব্যক্তি চরিত্র নয়, বরং আন্তর্জাতিক কাঠামোর নৈরাজ্য ও বস্তুগত সক্ষমতার বিন্যাসই রাষ্ট্রের আচরণ নিয়ন্ত্রণ করে।'
        },
        {
          id: 'q1_2',
          prompt: 'Which theoretical concept best explains why defensive military armament by one sovereign state is frequently perceived as an offensive existential threat by its neighboring rival?',
          options: [
            'The Democratic Peace Proposition',
            'The Security Dilemma (Herz/Jervis)',
            'Hegemonic Stability Theory',
            'Subaltern Realism'
          ],
          correctIndex: 1,
          academicRationale: 'The Security Dilemma explains how defensive measures by State A create uncertainty in State B, prompting counter-armament and spiral escalation.',
          banglaExplanation: 'সিকিউরিটি ডিলেমা ব্যাখ্যা করে কীভাবে এক রাষ্ট্রের আত্মরক্ষার প্রস্তুতি অন্য রাষ্ট্রের মনে নিরাপত্তাহীনতা তৈরি করে অস্ত্র প্রতিযোগিতার সৃষ্টি করে।'
        }
      ]
    }
  },
  {
    id: 'pillar3_polpsych_individual',
    termId: 'term2',
    termTitle: 'Term II: Political Psychology & Strategic Decisions',
    pillarNumber: 3,
    title: 'Cognitive Dimensions of Leadership & Foreign Policy Decisions',
    categoryBadge: 'Political Psychology & Cognitive Science',
    shortDescription: 'Deconstruct how cognitive biases, heuristic shortcuts, risk orientations (Prospect Theory), and operational codes drive high-stakes diplomatic and military decisions.',
    academicObjective: 'Master advanced psychological tools to evaluate state leader perceptions, miscalculations, historical analogies, and threat perceptions during international crises.',
    competencyArea: 'Psychological Profiling & Cognitive Decision Modeling',
    lectures: [
      {
        id: 'lec3_1',
        pillarId: 'pillar3_polpsych_individual',
        lectureNumber: '3.1',
        title: 'Bounded Rationality, Cognitive Biases & Information Bottlenecks',
        subtitle: 'Why the Rational Actor Model Fails in Geopolitical Crises',
        readTimeMinutes: 20,
        overview: 'Classical foreign policy analysis frequently assumes a unitary, rational decision-maker calculating costs and benefits. Herbert Simon\'s concept of Bounded Rationality revolutionized this field by demonstrating that human decision-makers have limited cognitive bandwidth, incomplete information, and operate under severe time constraints. Consequently, leaders do not "maximize" utility; they "satisfice"—selecting the first minimally acceptable option. We examine Robert Jervis\'s groundbreaking taxonomy of cognitive misperception: confirmation bias, fundamental attribution error (attributing our own aggressive actions to situational necessity while attributing the adversary\'s actions to inherent evil), and premature cognitive closure.',
        theoreticalFrameworks: [
          {
            name: 'Jervis\'s Fundamental Attribution Error in IR',
            concept: 'States attribute rival hostility to hostile, aggressive character traits while justifying their own military maneuvers as purely defensive responses to external threats.',
            application: 'Preventing spiral escalation during bilateral border standoffs and diplomatic crises.'
          },
          {
            name: 'Cognitive Consistency & Confirmation Bias',
            concept: 'Leaders actively seek and assimilate intelligence confirming their pre-existing belief systems while systematically rejecting or discrediting disconfirming evidence.',
            application: 'Auditing intelligence briefings to eliminate confirmation bias in national security councils.'
          }
        ],
        statecraftCaseStudy: {
          title: 'The Yom Kippur War Intelligence Failure (1973)',
          historicalContext: 'Despite accumulating concrete intelligence of Egyptian and Syrian troop buildups on Israel\'s borders, Israeli military intelligence (Aman) failed to issue a war warning.',
          strategicAnalysis: 'Intelligence leadership adhered to a rigid cognitive construct ("The Concept") that Egypt would never attack without long-range strike aircraft. Contradictory reports were rationalized away as mere military exercises.',
          lessonsForStatecraft: 'When an intelligence community becomes cognitively wedded to a preconceived model, overwhelming empirical warnings will be ignored until strategic surprise is achieved.'
        },
        banglaDiplomaticSummary: 'বাস্তব কূটনীতিতে কোনো রাষ্ট্রনায়কই সম্পূর্ণ যুক্তিবাদী নন; তারা সময় সংকট ও জ্ঞানীয় পক্ষপাতে আক্রান্ত হন। জেরভিসের কগনিটিভ মিসপারসেপশন তত্ত্ব দেখায় কীভাবে প্রতিপক্ষের আত্মরক্ষামূলক পদক্ষেপকে আগ্রাসী চক্রান্ত মনে করে সংঘাতের বিস্তার ঘটে।',
        analyticalSeminarQuestions: [
          'How does the Fundamental Attribution Error fuel arms races between nuclear-armed regional rivals?',
          'What institutional checks within a Foreign Ministry can prevent cognitive closure during fast-moving geopolitical confrontations?'
        ],
        keyReadings: [
          {
            title: 'Perception and Misperception in International Politics',
            author: 'Robert Jervis',
            sourceType: 'Academic Journal',
            coreConcept: 'Cognitive consistency, attribution error, and psychological deterrence failures.'
          }
        ]
      },
      {
        id: 'lec3_2',
        pillarId: 'pillar3_polpsych_individual',
        lectureNumber: '3.2',
        title: 'Prospect Theory: Risk Orientation & Loss Aversion in Statecraft',
        subtitle: 'Why States Take Catastrophic Gambles to Avoid Humiliation',
        readTimeMinutes: 22,
        overview: 'Developed by Daniel Kahneman and Amos Tversky, Prospect Theory demonstrates that humans evaluate outcomes not in terms of absolute wealth/power, but as gains or losses relative to an internalized reference point. The theory establishes two fundamental empirical laws of state behavior: (1) Loss Aversion—losses hurt roughly twice as intensely as equivalent gains bring satisfaction; and (2) Risk Asymmetry—leaders are risk-averse in the domain of gains, but highly risk-acceptant in the domain of losses. When a leader perceives that national territory, sovereign status, or regime survival is being lost, they will take reckless, low-probability military gambles to restore the status quo ante.',
        theoreticalFrameworks: [
          {
            name: 'Loss Aversion & Endowment Effect in Territorial Disputes',
            concept: 'States assign vastly higher strategic and emotional value to territory currently possessed than to territory they might acquire, defending it with extreme risk tolerance.',
            application: 'Predicting escalation thresholds in border demarcations and sovereign island disputes.'
          },
          {
            name: 'Sunk Cost Fallacy & Escalation of Commitment',
            concept: 'Once blood and treasure have been expended, leaders escalate military commitments rather than accept political humiliation, gambling on redemption.',
            application: 'Designing diplomatic off-ramps and face-saving exits for adversary leaders during protracted wars.'
          }
        ],
        statecraftCaseStudy: {
          title: 'The Argentine Decision to Invade the Falkland/Malvinas Islands (1982)',
          historicalContext: 'Facing severe domestic economic collapse and political delegitimation, the Argentine military junta launched a high-risk invasion of the British-controlled islands.',
          strategicAnalysis: 'Operating deep within the domain of losses (imminent regime collapse), the junta took a perilous strategic gamble, falsely assuming Britain would not dispatch an expeditionary armada.',
          lessonsForStatecraft: 'Leaders trapped in the domain of domestic political losses will disregard standard rational deterrence calculations, taking existential geopolitical risks to avert domestic overthrow.'
        },
        banglaDiplomaticSummary: 'প্রসপেক্ট থিওরি প্রমাণ করে যে রাষ্ট্রনায়করা লাভের চেয়ে ক্ষতির হাত থেকে বাঁচতে দ্বিগুণ ঝুঁকিপূর্ণ সামরিক জুয়া খেলতে প্রস্তুত থাকেন। সম্মানহানি বা ভূখণ্ড হারানোর ভয়ে নেতারা অনেক সময় ধ্বংসাত্মক সামরিক সংঘাত ডেকে আনেন।',
        analyticalSeminarQuestions: [
          'How can a diplomat construct a negotiation proposal that frames concessions within the adversary\'s domain of gains rather than domain of losses?',
          'Why do authoritarian regimes demonstrate heightened risk acceptance when confronted by popular democratic revolutions on their periphery?'
        ],
        keyReadings: [
          {
            title: 'Prospect Theory in International Relations: The Domain of Loss',
            author: 'Jack S. Levy',
            sourceType: 'Academic Journal',
            coreConcept: 'Application of Kahneman-Tversky framing effects to crisis decision-making and war.'
          }
        ]
      }
    ],
    checkpointQuiz: {
      id: 'quiz_p3',
      pillarId: 'pillar3_polpsych_individual',
      title: 'Pillar 3 Political Psychology & Decision Modeling Exam',
      passingScorePercentage: 75,
      questions: [
        {
          id: 'q3_1',
          prompt: 'According to Prospect Theory (Kahneman & Tversky), how do national decision-makers behave when they perceive themselves to be operating in the "Domain of Losses"?',
          options: [
            'They become ultra-cautious and immediately seek unconditional surrender',
            'They become highly risk-acceptant and willing to take dangerous gambles to recover their perceived loss',
            'They strictly follow standard econometric utility maximization formulas',
            'They completely delegate all foreign policy powers to international arbitral tribunals'
          ],
          correctIndex: 1,
          academicRationale: 'Prospect Theory proves that individuals and leaders are risk-seeking when facing perceived losses of territory, prestige, or regime security.',
          banglaExplanation: 'প্রসপেক্ট থিওরি অনুসারে ক্ষতির মুখে পড়লে রাষ্ট্রনেতারা অতি-ঝুঁকিপূর্ণ সামরিক ও কূটনৈতিক পদক্ষেপ গ্রহণ করতে দ্বিধাবোধ করেন না।'
        }
      ]
    }
  },
  {
    id: 'pillar8_regional_bangladesh',
    termId: 'term4',
    termTitle: 'Term IV: Regional Geopolitics & Middle-Power Statecraft',
    pillarNumber: 8,
    title: 'Middle-Power Statecraft & The Bangladesh Geopolitical Paradigm',
    categoryBadge: 'Littoral Diplomacy & Sovereign Statecraft',
    shortDescription: 'Comprehensive strategic masterclass on Bangladesh foreign policy: ITLOS/PCA maritime law, omnidirectional hedging, transboundary river governance, UN peacekeeping, and the post-2024 "Bangladesh First" doctrine.',
    academicObjective: 'Equip fellows with professional-grade diplomatic expertise on South Asian littoral balance-of-power, maritime security, regional connectivity, and sovereign strategic autonomy.',
    competencyArea: 'Regional Grand Strategy & Sovereign Diplomacy',
    lectures: [
      {
        id: 'lec8_1',
        pillarId: 'pillar8_regional_bangladesh',
        lectureNumber: '8.1',
        title: 'The Constitutional Architecture & Doctrinal Evolution of Foreign Policy',
        subtitle: 'From Article 25 to Strategic Non-Alignment in a Multipolar World',
        readTimeMinutes: 22,
        overview: 'Bangladesh\'s foreign policy is anchored in Article 25 of its Constitution, which enshrines sovereign equality, non-interference, respect for international law, and solidarity with oppressed peoples. The founding diplomatic maxim—"Friendship to all, malice towards none"—is not a passive pacifist slogan, but a dynamic, realist doctrine of Strategic Non-Alignment. We trace the diplomatic evolution: post-1971 recognition diplomacy across the United Nations and the Muslim world, navigating Cold War bipolarity, entering the Non-Aligned Movement (NAM), and evolving into a confident 21st-century middle power.',
        theoreticalFrameworks: [
          {
            name: 'Article 25 & Constitutional Non-Alignment',
            concept: 'Constitutional mandate forbidding participation in foreign military pacts while obligating active multilateral mediation and adherence to UN principles.',
            application: 'Formulating legal and diplomatic justifications for refusing external military alliance enlistment.'
          },
          {
            name: 'Omnidirectional Diplomatic Equilibrium',
            concept: 'Maintaining constructive, diversified strategic relations across competing power blocs (US, China, EU, India, Middle East, Japan) without becoming a client state.',
            application: 'Preserving national policy space and strategic autonomy during global polarity fragmentation.'
          }
        ],
        statecraftCaseStudy: {
          title: 'Securing Global Recognition & UN Membership (1971–1974)',
          historicalContext: 'Following the 1971 Liberation War, Bangladesh faced severe diplomatic containment, including early vetoes and diplomatic resistance from major power blocs.',
          strategicAnalysis: 'Through deft bilateral engagement, participation in the 1973 NAM Summit in Algiers, and the 1974 OIC Summit in Lahore, Bangladesh broke through diplomatic isolation, culminating in unanimous UN General Assembly admission in September 1974.',
          lessonsForStatecraft: 'Strategic statecraft in multilateral forums can rapidly dismantle bilateral diplomatic blockades and cement sovereign legitimacy.'
        },
        banglaDiplomaticSummary: 'বাংলাদেশের পররাষ্ট্রনীতির মূলভিত্তি সংবিধানের ২৫ অনুচ্ছেদ। সবার সাথে বন্ধুত্ব, কারো সাথে বৈরিতা নয়—নীতিটি নিষ্ক্রিয়তা নয়, বরং পরাশক্তিদের সামরিক বলয় থেকে মুক্ত থেকে জাতীয় স্বার্থে স্বাধীন কূটনীতি পরিচালনার কৌশলগত স্বায়ত্তশাসন।',
        analyticalSeminarQuestions: [
          'How does constitutional non-alignment protect a developing middle power from becoming a proxy battleground for great-power rivalries?',
          'In what ways did Bangladesh\'s admission to the OIC and NAM in 1974 reshape its international sovereign bargaining leverage?'
        ],
        keyReadings: [
          {
            title: 'The Constitution of the People\'s Republic of Bangladesh (Article 25)',
            author: 'Constituent Assembly of Bangladesh',
            sourceType: 'Treaty/Charter',
            coreConcept: 'Promotion of international peace, security, and sovereign equality.'
          }
        ]
      },
      {
        id: 'lec8_2',
        pillarId: 'pillar8_regional_bangladesh',
        lectureNumber: '8.2',
        title: 'Maritime Boundary Delimitation & The Blue Economy Jurisprudence',
        subtitle: 'The Landmark ITLOS (2012) and PCA (2014) Peaceful Dispute Settlements',
        readTimeMinutes: 24,
        overview: 'For decades, unresolved maritime boundaries in the Bay of Bengal hindered deep-sea exploration and sparked naval tensions with Myanmar and India. Rather than escalating militarily, Bangladesh pioneered an extraordinary masterclass in international law by invoking Part XV of the United Nations Convention on the Law of the Sea (UNCLOS). The International Tribunal for the Law of the Sea (ITLOS) in Hamburg (2012 against Myanmar) and the Permanent Court of Arbitration (PCA) in The Hague (2014 against India) delivered historic verdicts, awarding Bangladesh 118,813 sq km of maritime waters, a 200-nautical-mile EEZ, and sovereign seabed rights to the continental shelf.',
        theoreticalFrameworks: [
          {
            name: 'Equidistance vs. Equity/Angle-Bisector Principle',
            concept: 'The strict equidistance method unfairly concaved Bangladesh\'s coastline, cutting off its continental shelf access. Bangladesh successfully argued for the principle of equity to achieve an equitable solution under UNCLOS Article 74/83.',
            application: 'Deploying international jurisprudence to overcome geographic natural disadvantages in maritime delimitation.'
          },
          {
            name: 'The Blue Economy & Maritime Domain Awareness (MDA)',
            concept: 'Leveraging sovereign sea space for deep-sea hydrocarbon exploration, marine fisheries, sea-lane shipping security, and naval littoral surveillance.',
            application: 'Formulating national maritime security doctrines and protecting critical offshore infrastructure.'
          }
        ],
        statecraftCaseStudy: {
          title: 'The ITLOS Dispute Settlement (Bangladesh v. Myanmar, 2012)',
          historicalContext: 'In 2008, exploratory naval standoffs in disputed waters brought Bangladesh and Myanmar to the brink of military confrontation.',
          strategicAnalysis: 'Bangladesh internationalized the dispute before ITLOS, securing the world\'s first international judicial delimitation of the continental shelf beyond 200 nautical miles.',
          lessonsForStatecraft: 'Small and middle powers achieve their greatest strategic victories when anchoring national security in binding international legal dispute mechanisms rather than asymmetric bilateral coercion.'
        },
        banglaDiplomaticSummary: 'আইটিএলওএস (২০১২) ও পিসিএ (২০১৪) রায় আন্তর্জাতিক আইনের মাধ্যমে সমুদ্রসীমা নিষ্পত্তির এক অনন্য বৈশ্বিক দৃষ্টান্ত। এর ফলে বাংলাদেশ ১,১৮,৮১৩ বর্গকিলোমিটার টেরিটোরিয়াল সমুদ্র, ২০০ নটিক্যাল মাইল অর্থনৈতিক অঞ্চল এবং অবাধ মহীসোপানের ওপর সার্বভৌম অধিকার লাভ করে।',
        analyticalSeminarQuestions: [
          'How did Bangladesh\'s legal team successfully dismantle the strict equidistance formula in favor of the equity principle at ITLOS?',
          'What are the primary naval and intelligence challenges in establishing comprehensive Maritime Domain Awareness (MDA) across the Bay of Bengal?'
        ],
        keyReadings: [
          {
            title: 'Dispute Concerning Delimitation of the Maritime Boundary between Bangladesh and Myanmar (Judgment)',
            author: 'ITLOS Reports',
            sourceType: 'Treaty/Charter',
            coreConcept: 'UNCLOS delimitation beyond 200 NM, grey areas, and equitable principles.'
          }
        ]
      },
      {
        id: 'lec8_3',
        pillarId: 'pillar8_regional_bangladesh',
        lectureNumber: '8.3',
        title: 'The Post-2024 Foreign Policy Paradigm: Sovereign Autonomy & "Bangladesh First"',
        subtitle: 'Democratic Realignment, Anti-Aggression Deterrence, and Reciprocal Statecraft',
        readTimeMinutes: 26,
        overview: 'The July 2024 Uprising marked a profound structural paradigm shift in Bangladesh\'s foreign policy and national security doctrine. This lecture critically examines the transition from asymmetric bilateral accommodation toward assertive sovereign strategic autonomy. We deconstruct the "Bangladesh First" doctrine, the strategic re-calibration of neighborhood relations on the basis of absolute sovereign equality and dignity, zero tolerance for border killings, internationalized river basin hydro-diplomacy, and the democratic legitimization of foreign policy through popular domestic will (Putnam\'s Two-Level Game model).',
        theoreticalFrameworks: [
          {
            name: 'The "Bangladesh First" Strategic Doctrine',
            concept: 'Primacy of national security, territorial dignity, non-interference, economic self-reliance, and strict reciprocity in all bilateral diplomatic compacts.',
            application: 'Eliminating asymmetric political dependencies and asserting sovereign rights across regional forums.'
          },
          {
            name: 'Democratic Legitimization of Foreign Policy (Putnam Level II)',
            concept: 'Foreign policy decisions derive authority from domestic democratic consensus and public sovereignty, eliminating covert external patronage linkages.',
            application: 'Ensuring all international transit, trade, and defense agreements undergo rigorous public and parliamentary scrutiny.'
          },
          {
            name: 'Anti-Hegemonic Balancing & Deterrence Statecraft',
            concept: 'Developing credible national defense capabilities (Forces Goal) to deter border aggression and external political coercion while maintaining active diplomatic dialogue.',
            application: 'Protecting national borders, airspace, and maritime corridors from external encroachment.'
          }
        ],
        statecraftCaseStudy: {
          title: 'The Post-July 2024 Diplomatic Realignment',
          historicalContext: 'Following the historic July 2024 political revolution, Bangladesh undertook a comprehensive reset of its external diplomatic equations.',
          strategicAnalysis: 'The sovereign state asserted strict equality with immediate neighbors (demanding cessation of border killings and equitable water sharing) while simultaneously deepening strategic partnerships with the United Nations, Western democracies, the GCC, Turkey, Japan, and East Asia.',
          lessonsForStatecraft: 'A nation\'s international bargaining power is fundamentally anchored in its domestic democratic legitimacy. Without internal sovereign consensus, foreign policy degenerates into external clientelism.'
        },
        banglaDiplomaticSummary: '২০২৪-এর জুলাই বিপ্লব বাংলাদেশের পররাষ্ট্রনীতিতে মৌলিক রূপান্তর ঘটিয়েছে। বাংলাদেশ ফার্স্ট ডকট্রিনের আওতায় প্রতিবেশীদের সাথে সমমর্যাদা ও পারস্পরিকতার ভিত্তিতে সম্পর্ক পুনর্নির্ধারণ, সীমান্ত হত্যার জিরো টলারেন্স, এবং জাতীয় স্বার্থের সুরক্ষাই প্রধান অগ্রাধিকার।',
        analyticalSeminarQuestions: [
          'How does the Bangladesh First doctrine redefine bilateral statecraft with regional neighbors from asymmetric compliance to strict reciprocity?',
          'Apply Putnam\'s Two-Level Game Theory to explain why foreign policy agreements lacking domestic democratic legitimacy are inherently unstable.'
        ],
        keyReadings: [
          {
            title: 'Diplomacy and Domestic Politics: The Logic of Two-Level Games',
            author: 'Robert D. Putnam',
            sourceType: 'Academic Journal',
            coreConcept: 'Level I and Level II bargaining, win-sets, and democratic ratification.'
          }
        ]
      }
    ],
    checkpointQuiz: {
      id: 'quiz_p8',
      pillarId: 'pillar8_regional_bangladesh',
      title: 'Pillar 8 Bangladesh Geopolitical Paradigm Mastery Exam',
      passingScorePercentage: 75,
      questions: [
        {
          id: 'q8_1',
          prompt: 'What was the core legal principle successfully argued by Bangladesh at ITLOS (2012) and PCA (2014) to overcome the cut-off effect of its concave coastline in the Bay of Bengal?',
          options: [
            'The strict raw Equidistance line without geographical adjustment',
            'The Principle of Equity / Angle-Bisector adjustment to achieve an equitable delimitation under UNCLOS',
            'Historic Title dating back to the pre-colonial Mughal maritime doctrine',
            'Immediate unilateral declaration of a 500-mile military exclusion perimeter'
          ],
          correctIndex: 1,
          academicRationale: 'Bangladesh successfully argued that the concave coastline created a disproportionate cut-off effect, requiring the application of the Equity Principle to ensure access to the 200 NM EEZ and outer continental shelf.',
          banglaExplanation: 'বাংলাদেশ সফলভাবে প্রমাণ করে যে অবতল উপকূলরেখার কারণে সাধারণ সমদূরত্ব রেখা বাংলাদেশকে মহীসোপান বঞ্চিত করবে, ফলে আনক্লোস অনুযায়ী ন্যায়সঙ্গত বণ্টন (ইকুইটি নীতি) আবশ্যক।'
        },
        {
          id: 'q8_2',
          prompt: 'In post-2024 strategic analysis, how is the "Bangladesh First" doctrine fundamentally distinguished from past foreign policy orientations?',
          options: [
            'It advocates immediate withdrawal from all United Nations bodies and treaties',
            'It establishes absolute sovereign equality, zero tolerance for border violence, strict reciprocity in bilateral ties, and alignment with domestic democratic consensus',
            'It seeks formal military alliance membership in NATO or the Warsaw Pact',
            'It completely eliminates all foreign trade and converts the economy to autarky'
          ],
          correctIndex: 1,
          academicRationale: 'The Bangladesh First doctrine asserts sovereign strategic autonomy, zero tolerance for border killings, reciprocal equality in neighborhood ties, and foreign policy rooted in democratic legitimacy.',
          banglaExplanation: 'বাংলাদেশ ফার্স্ট ডকট্রিনের মূল লক্ষ্য সার্বভৌম সমমর্যাদা, সীমান্ত হত্যার অবসান, কঠোর পারস্পরিকতা এবং জনগণের গণতান্ত্রিক ইচ্ছার ভিত্তিতে পররাষ্ট্রনীতি পরিচালনা।'
        }
      ]
    }
  }
];

export const CRISIS_SCENARIOS: CrisisScenario[] = [
  {
    id: 'bay_of_bengal_standoff',
    title: 'The Bay of Bengal Maritime Standoff: Strategic Crisis Lab',
    theater: 'Bay of Bengal Deep Littoral & Matarbari Approach',
    threatLevel: 'Defcon 2',
    backgroundContext: 'Intelligence confirms an unannounced dual-carrier naval fleet of an external superpower has entered the Exclusive Economic Zone (EEZ) near the Swatch of No Ground, conducting electronic jamming of coastal radar stations. Simultaneously, neighboring naval gunboats have approached an offshore deep-sea energy drilling platform, claiming historic jurisdiction over Block SS-11.',
    missionObjective: 'As Chief National Security Advisor to the President, orchestrate a coordinated diplomatic, naval, and multilateral de-escalation strategy that defends sovereign maritime integrity without triggering armed conflict.',
    dilemmas: [
      {
        id: 'dil_1',
        stageNumber: 1,
        stageTitle: 'Immediate Response to Radar Jamming & EEZ Intrusion',
        urgentDilemma: 'The external naval task force is 18 nautical miles from Saint Martin\'s Island. Coastal radar is blind across a 40-mile arc. The Military High Command urges an immediate missile-lock warning, while the Foreign Ministry suggests a silent diplomatic note.',
        intelligenceBriefing: 'Naval intelligence reports the foreign carrier\'s electronic warfare suite is testing regional response times. Public panic is spreading on social media.',
        options: [
          {
            id: 'opt_1a',
            actionTitle: 'Launch Immediate Anti-Ship Missile Radar Lock-On',
            actionDescription: 'Activate coastal missile batteries and illuminate the foreign carrier with targeting radar while scrambling maritime patrol aircraft.',
            strategicDoctrine: 'Deterrence Escalation',
            projectedOutcomes: {
              sovereigntyImpact: 'High signal of sovereign resolve, but risks immediate preemptive counter-strike.',
              regionalStability: 'Severe escalation; stocks plummet and shipping insurance surcharges spike 400%.',
              geoeconomicCost: 'Immediate suspension of commercial maritime cargo in the littoral.'
            },
            scoreDelta: 65,
            evaluationRationale: 'Premature tactical escalation without open diplomatic signaling invites military miscalculation before international awareness is mobilized.'
          },
          {
            id: 'opt_1b',
            actionTitle: 'Execute Asymmetric Shadowing & High-Level Diplomatic Demarche',
            actionDescription: 'Deploy stealth guided-missile corvettes to shadow the fleet at a safe standoff distance, broadcast UNCLOS Article 56 sovereign warnings, and summon the ambassador for an urgent demarche.',
            strategicDoctrine: 'Asymmetric Hedging',
            projectedOutcomes: {
              sovereigntyImpact: 'Maintains undisputed sovereign claim while recording real-time video evidence of the violation.',
              regionalStability: 'Keeps escalation within controllable diplomatic parameters.',
              geoeconomicCost: 'Commercial shipping remains orderly.'
            },
            scoreDelta: 95,
            evaluationRationale: 'Masterful statecraft: demonstrates physical naval presence and legal deterrence while establishing an immediate diplomatic off-ramp.'
          },
          {
            id: 'opt_1c',
            actionTitle: 'Total Operational Silence and Private Backchannel Appeal',
            actionDescription: 'Instruct naval units to stay in port to avoid provoking the foreign fleet, hoping they exit the EEZ within 24 hours.',
            strategicDoctrine: 'Diplomatic De-escalation',
            projectedOutcomes: {
              sovereigntyImpact: 'Catastrophic loss of sovereign credibility; establishes a dangerous precedent of acquiescence.',
              regionalStability: 'Temporary quiet, but invites further gray-zone incursions.',
              geoeconomicCost: 'Demoralizes defense forces and invites domestic unrest.'
            },
            scoreDelta: 30,
            evaluationRationale: 'Appeasement in the face of gray-zone encroachment violates basic structural deterrence and undermines sovereign statehood.'
          }
        ]
      }
    ]
  }
];

export const GRAND_EXAM_QUESTIONS: QuizQuestion[] = [
  {
    id: 'ge_1',
    prompt: 'According to John Mearsheimer\'s Offensive Realism, why is global hegemony fundamentally unattainable for any single great power in the modern era?',
    options: [
      'The moral authority and legal sanctions of the United Nations Security Council',
      'The "Stopping Power of Water" (oceans and seas make projecting overwhelming land-invasion power across continents impossible)',
      'The universal spread of democratic constitutional systems',
      'The complete eradication of nationalism in globalized societies'
    ],
    correctIndex: 1,
    academicRationale: 'Mearsheimer argues oceans make continental conquest impractical, confining great powers to regional hegemony.',
    banglaExplanation: 'মেয়ারশাইমার দেখিয়েছেন যে সমুদ্রের বিশাল দূরত্ব পার হয়ে অন্য মহাদেশ পুরোপুরি দখল করা অসম্ভব, ফলে কোনো পরাশক্তিই বিশ্বব্যাপী একক আধিপত্য প্রতিষ্ঠা করতে পারে না।'
  },
  {
    id: 'ge_2',
    prompt: 'In Robert Jervis\'s political psychology framework, what psychological mechanism causes statesmen to interpret an adversary\'s conciliatory gestures as deceptive ruses while viewing their hostile signals as definitive proof of aggression?',
    options: [
      'Cognitive Consistency and Confirmation Bias',
      'The Democratic Peace Syndrome',
      'Waltzian Structural Polarity',
      'The Absolute Gains Optimization Model'
    ],
    correctIndex: 0,
    academicRationale: 'Confirmation bias leads decision-makers to assimilate hostile signals that match their existing enemy image while rationalizing away conciliatory gestures.',
    banglaExplanation: 'কগনিটিভ কনসিস্টেন্সি ও কনফার্মেশন বায়াসের কারণে শত্রু রাষ্ট্রের ভালো উদ্যোগকে ভন্ডামি এবং কঠোর পদক্ষেপকে আগ্রাসী চক্রান্ত হিসেবে দেখা হয়।'
  },
  {
    id: 'ge_3',
    prompt: 'How did Bangladesh\'s landmark 2012 ITLOS verdict against Myanmar transform global maritime jurisprudence regarding the continental shelf?',
    options: [
      'It completely abolished the concept of the 200-nautical-mile Exclusive Economic Zone',
      'It established the first-ever international judicial delimitation of the continental shelf beyond 200 nautical miles, affirming coastal state seabed rights based on natural prolongation',
      'It declared the Bay of Bengal an international closed lake exempt from UNCLOS',
      'It mandated equal joint-ownership of all offshore oil fields by all SAARC member nations'
    ],
    correctIndex: 1,
    academicRationale: 'The 2012 ITLOS judgment was the first in international legal history to delimit the outer continental shelf beyond 200 NM.',
    banglaExplanation: '২০১২ সালের আইটিএলওএস রায় ছিল আন্তর্জাতিক আইনের ইতিহাসে প্রথম ঘটনা যেখানে ২০০ নটিক্যাল মাইলের বাইরের মহীসোপানের ওপর উপকূলীয় রাষ্ট্রের অধিকার আনুষ্ঠানিকভাবে নির্ধারণ করা হয়।'
  },
  {
    id: 'ge_4',
    prompt: 'Under Robert Putnam\'s Two-Level Game Theory of international diplomacy, what determines the likelihood of a successfully negotiated international agreement taking effect?',
    options: [
      'The military expenditure ratio between the negotiating chief executives',
      'The size and overlap of the domestic "Win-Sets" (Level II domestic constituencies capable of ratifying the Level I diplomatic agreement)',
      'The total number of embassies maintained in Geneva and New York',
      'The linguistic fluency of the primary ambassador in classical Latin'
    ],
    correctIndex: 1,
    academicRationale: 'Putnam demonstrates that international agreements succeed only when Level I diplomatic terms fall within the overlapping domestic Level II win-sets of both nations.',
    banglaExplanation: 'পুটনামের টু-লেভেল গেম অনুযায়ী যেকোনো আন্তর্জাতিক চুক্তি তখনই কার্যকর হয় যখন তা উভয় দেশের অভ্যন্তরীণ রাজনৈতিক ও সামাজিক অনুমোদন (উইন-সেট) লাভ করে।'
  }
];
