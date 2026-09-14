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
    "term": "Anarchy (International)",
    "category": "IR Theory",
    "pronunciationIpa": "/ˈæn.ər.ki/",
    "definition": "The absence of a centralized global sovereign authority or overarching world government to enforce rules and mediate interstate disputes.",
    "banglaMeaning": "আন্তর্জাতিক নৈরাজ্য — কেন্দ্রীয় বৈশ্বিক শাসনহীন অবস্থা যেখানে রাষ্ট্রসমূহ নিজস্ব শক্তিতে সার্বভৌমত্ব রক্ষা করে।",
    "diplomaticContext": "In structural realism, anarchy compels states to rely on self-help, balance-of-power strategies, and military self-reliance to survive."
  },
  {
    "term": "Security Dilemma",
    "category": "IR Theory",
    "pronunciationIpa": "/səˈkjʊə.rə.ti dɪˈlem.ə/",
    "definition": "A condition where actions taken by one state to heighten its defensive security inherently induce fear and counter-mobilization in rival states, leading to unintended escalation.",
    "banglaMeaning": "নিরাপত্তা সংকট (সিকিউরিটি ডিলেমা) — আত্মরক্ষার সামরিক প্রস্তুতিকে প্রতিপক্ষ আগ্রাসী তৎপরতা হিসেবে দেখে অস্ত্র প্রতিযোগিতায় লিপ্ত হওয়া।",
    "diplomaticContext": "Conceptualized by John Herz and Robert Jervis, explaining how defensive armament triggers regional arms races."
  },
  {
    "term": "Strategic Autonomy",
    "category": "Security & Strategy",
    "pronunciationIpa": "/strəˈtiː.dʒɪk ɔːˈtɒn.ə.mi/",
    "definition": "The institutional capability of a sovereign nation to formulate and execute foreign and security policies based strictly on national interests without yielding to external hegemonic coercion.",
    "banglaMeaning": "কৌশলগত স্বায়ত্তশাসন — কোনো পরাশক্তির সামরিক বা ভূ-রাজনৈতিক বলয়ের কাছে নতি স্বীকার না করে স্বাধীন পররাষ্ট্রনীতি পরিচালনা।",
    "diplomaticContext": "A cornerstone doctrine for middle powers navigating multipolar competition between global superpowers."
  },
  {
    "term": "Bangladesh First Doctrine",
    "category": "Bangladesh Statecraft",
    "pronunciationIpa": "/ˈbæŋ.ɡlə.dɛʃ fɜːst ˈdɒk.trɪn/",
    "definition": "A post-2024 strategic foreign policy orientation asserting absolute sovereign equality, zero tolerance for border aggression, strict reciprocity in bilateral ties, and national interest primacy.",
    "banglaMeaning": "বাংলাদেশ ফার্স্ট ডকট্রিন — ২০২৪-পরবর্তী পররাষ্ট্রনীতি যেখানে জাতীয় সার্বভৌমত্ব, সীমান্ত নিরাপত্তা, ও দ্বিপাক্ষিক সমমর্যাদাকে সর্বোচ্চ অগ্রাধিকার দেওয়া হয়।",
    "diplomaticContext": "Emphasizes dignity-based statecraft, equitable transboundary water governance, and non-aligned multi-vector partnerships."
  },
  {
    "term": "Cognitive Bias & Heuristics",
    "category": "Political Psychology",
    "pronunciationIpa": "/ˈkɒɡ.nɪ.tɪv ˈbaɪ.əs/",
    "definition": "Systematic mental shortcuts and perceptual distortions that cause foreign policy leaders to misinterpret opponent intentions, dismiss contradictory intelligence, and escalate crises.",
    "banglaMeaning": "জ্ঞানীয় পক্ষপাত ও হিউরিস্টিকস — মানসিক পূর্বধারণা ও সংকীর্ণ তথ্যের ভিত্তিতে বিশ্বনেতাদের ভুল কূটনৈতিক সিদ্ধান্ত গ্রহণ।",
    "diplomaticContext": "Central to Harvard political psychology frameworks analyzing historic intelligence failures and war outbreaks."
  },
  {
    "term": "Prospect Theory",
    "category": "Political Psychology",
    "pronunciationIpa": "/ˈprɒs.pɛkt ˈθɪə.ri/",
    "definition": "Behavioral economic and decision theory showing that state leaders are risk-averse when protecting perceived gains, but highly risk-acceptant when facing perceived losses of territory or prestige.",
    "banglaMeaning": "প্রসপেক্ট থিওরি — ক্ষতি বা মর্যাদা হানির মুখে রাষ্ট্রনায়কদের অপ্রয়োজনীয় সামরিক ঝুঁকি ও সংঘাত বৃদ্ধির মনস্তাত্ত্বিক প্রবণতা।",
    "diplomaticContext": "Explains why regimes frequently double down on failing military interventions rather than accept political defeat."
  },
  {
    "term": "Groupthink",
    "category": "Political Psychology",
    "pronunciationIpa": "/ˈɡruːp.θɪŋk/",
    "definition": "A psychological phenomenon in cohesive cabinet advisory councils where the desire for conformity and consensus suppresses critical dissent, resulting in disastrous strategic decisions.",
    "banglaMeaning": "গ্রুপথিঙ্ক — জাতীয় নিরাপত্তা কাউন্সিলে অন্ধ ঐকমত্যের কারণে ভিন্নমত ও সতর্কবার্তা দমন করে অপরিণামদর্শী সিদ্ধান্ত নেওয়া।",
    "diplomaticContext": "Irving Janis identified groupthink as the root cause of the Bay of Pigs disaster and escalation in the Vietnam War."
  },
  {
    "term": "Operational Code",
    "category": "Political Psychology",
    "pronunciationIpa": "/ˌɒp.ərˈeɪ.ʃən.əl koʊd/",
    "definition": "A leader's core philosophical and instrumental belief system regarding the fundamental nature of political conflict, the predictability of history, and the utility of force.",
    "banglaMeaning": "অপারেশনাল কোড — বিশ্বনেতাদের মৌলিক দার্শনিক দৃষ্টিভঙ্গি যা নির্ধারণ করে তারা বিশ্বরাজনীতিকে সহজাত সংঘাতময় নাকি সহযোগিতাপূর্ণ মনে করেন।",
    "diplomaticContext": "Used by intelligence and diplomatic agencies to profile adversary decision-makers during high-stakes brinkmanship."
  },
  {
    "term": "Omnidirectional Hedging",
    "category": "Security & Strategy",
    "pronunciationIpa": "/ˌɒm.nɪ.daɪˈrɛk.ʃən.əl ˈhɛdʒ.ɪŋ/",
    "definition": "A sophisticated middle-power alignment strategy involving concurrent economic, security, and diplomatic diversification across multiple competing superpowers without entering binding formal alliances.",
    "banglaMeaning": "সর্বমুখী হেজিং — কোনো একক পরাশক্তির ওপর নির্ভরশীল না হয়ে বহুমুখী অংশীদারিত্ব ও কূটনৈতিক ভারসাম্য বজায় রাখা।",
    "diplomaticContext": "Employed by littoral middle powers in the Indo-Pacific to extract infrastructure capital while guarding sovereign deterrence."
  },
  {
    "term": "Exclusive Economic Zone (EEZ)",
    "category": "International Law",
    "pronunciationIpa": "/ɪkˈskluː.sɪv ˌiː.kəˈnɒm.ɪk zoʊn/",
    "definition": "A maritime zone extending up to 200 nautical miles from a coastal state's baseline, conferring sovereign exploration rights over marine living resources and seabed energy reserves under UNCLOS.",
    "banglaMeaning": "একচেটিয়া অর্থনৈতিক অঞ্চল (ইইজেড) — উপকূলীয় রাষ্ট্রের সমুদ্রতীর থেকে ২০০ নটিক্যাল মাইল পর্যন্ত মৎস্য ও খনিজ সম্পদের ওপর সার্বভৌম অধিকার।",
    "diplomaticContext": "Delimited peacefully by Bangladesh in landmark ITLOS (2012 Myanmar) and PCA (2014 India) verdicts."
  },
  {
    "term": "Weaponized Interdependence",
    "category": "Geoeconomics",
    "pronunciationIpa": "/ˈwɛp.ən.aɪzd ˌɪn.tə.dɪˈpɛn.dəns/",
    "definition": "The strategic exploitation of centralized global economic, communication, or energy networks (such as SWIFT, semiconductor supply chains, or transit pipelines) for geopolitical coercion.",
    "banglaMeaning": "অস্ত্রায়িত আন্তঃনির্ভরশীলতা — সুইফট, সেমিকন্ডাক্টর বা ট্রানজিট করিডোরের মতো বৈশ্বিক নেটওয়ার্ককে রাজনৈতিক চাপের হাতিয়ার হিসেবে ব্যবহার।",
    "diplomaticContext": "Demonstrated in Western sanctions regimes, critical mineral export controls, and unilateral energy cutoffs."
  },
  {
    "term": "Two-Level Game Theory",
    "category": "IR Theory",
    "pronunciationIpa": "/tuː ˈlɛv.əl ɡeɪm/",
    "definition": "Robert Putnam's model conceptualizing international diplomacy as simultaneous negotiations: Level I (interstate diplomatic bargaining) and Level II (domestic coalition ratification and public consensus).",
    "banglaMeaning": "টু-লেভেল গেম থিওরি — পররাষ্ট্রনীতিতে যুগপৎ আন্তর্জাতিক দরকষাকষি এবং অভ্যন্তরীণ রাজনৈতিক অনুমোদন ও জনমতের মিথস্ক্রিয়া।",
    "diplomaticContext": "Shows that a diplomatic agreement at the international table is void if domestic political constituencies refuse to ratify it."
  },
  {
    "term": "Jus Cogens",
    "category": "International Law",
    "pronunciationIpa": "/juːs ˈkoʊ.dʒɛnz/",
    "definition": "Peremptory norms of general international law from which no derogation is permitted by any state, including the absolute prohibitions on aggression, genocide, slavery, and torture.",
    "banglaMeaning": "জুস কোজেন্স — আন্তর্জাতিক আইনের অলঙ্ঘনীয় মৌলিক বিধি যা কোনো চুক্তি বা রাষ্ট্রীয় আইন দ্বারা বাতিল করা যায় না।",
    "diplomaticContext": "Formulates the legal bedrock of international accountability and universal jurisdiction before the ICJ and ICC."
  },
  {
    "term": "Balance of Threat Theory",
    "category": "IR Theory",
    "pronunciationIpa": "/ˈbæl.əns ɒv θrɛt/",
    "definition": "Stephen Walt's refinement of realism positing that states form balancing coalitions not merely against aggregate national power, but against the most proximate and perceived threatening states.",
    "banglaMeaning": "ব্যালেন্স অব থ্রেট — রাষ্ট্রসমূহ কেবল সামগ্রিক শক্তির বিপরীতে নয়, বরং সবচেয়ে আগ্রাসী ও প্রত্যক্ষ হুমকির বিপরীতে সামরিক ভারসাম্য গড়ে তোলে।",
    "diplomaticContext": "Explains regional alignment shifts when a rising neighbor demonstrates revisionist or coercive intent."
  },
  {
    "term": "Blue Economy & Sea Power",
    "category": "Bangladesh Statecraft",
    "pronunciationIpa": "/bluː iˈkɒn.ə.mi/",
    "definition": "The sustainable utilization of ocean resources for economic growth, encompassing deep-sea fishing, offshore hydrocarbon extraction, shipbuilding, port logistics, and maritime security surveillance.",
    "banglaMeaning": "ব্লু ইকোনমি (নীল অর্থনীতি) ও সমুদ্রশক্তি — টেকসই সামুদ্রিক অর্থনীতি, গভীর সমুদ্র সম্পদ আহরণ এবং উপকূলীয় নৌ-প্রতিরক্ষা সক্ষমতা।",
    "diplomaticContext": "Vital for national development following the acquisition of 118,813 sq km of sovereign maritime territory in the Bay of Bengal."
  }
];

export const PILLARS_DATA: Pillar[] = [
  {
    "id": "pillar1_theories",
    "termId": "term1",
    "termTitle": "Term I: Foundations & Theoretical Paradigms",
    "pillarNumber": 1,
    "title": "Theories of International Relations & Sovereign Statecraft",
    "categoryBadge": "Classical & Structural Theory",
    "shortDescription": "Master the foundational paradigms of world politics: Classical Realism, Structural Realism, Liberal Institutionalism, Constructivism, and Subaltern Realism.",
    "academicObjective": "Equip fellows with rigorous epistemological tools to systematically dissect state behavior, balance-of-power dynamics, and systemic anarchy.",
    "competencyArea": "Theoretical Modeling & Systemic Analysis",
    "lectures": [
      {
        "id": "lec1_1",
        "pillarId": "pillar1_theories",
        "lectureNumber": "1.1",
        "title": "Anarchy, Sovereignty & Classical Statecraft",
        "subtitle": "From the Melian Dialogue to Westphalian Order",
        "readTimeMinutes": 18,
        "overview": "World politics operates within an anarchic international system—a realm devoid of a central global enforcement agency. This lecture examines the intellectual lineage of classical statecraft: Thucydides' Melian Dialogue, Niccolò Machiavelli's doctrine of ragione di stato, and Thomas Hobbes's Leviathan state of nature. We trace how the 1648 Peace of Westphalia codified the twin principles of territorial sovereignty and non-interference, creating the modern sovereign state system.",
        "theoreticalFrameworks": [
          {
            "name": "Thucydidean Prudence & Power Asymmetry",
            "concept": "Interstate justice exists only between equals in power; between unequals, power dictates outcomes unless mitigated by diplomatic alliance.",
            "application": "Analyzing how small and middle powers navigate bilateral pressure from neighboring hegemons."
          },
          {
            "name": "The Westphalian Sovereign Compact (1648)",
            "concept": "Legal equality of states, exclusive territorial jurisdiction, and the formal prohibition of external intervention in domestic sovereign governance.",
            "application": "Formulating legal defenses against extraterritorial political coercion in multilateral forums."
          }
        ],
        "statecraftCaseStudy": {
          "title": "The Melian Dialogue (416 BCE): The Perils of Strategic Wishful Thinking",
          "historicalContext": "During the Peloponnesian War, the Athenian armada besieged the neutral island state of Melos, demanding immediate capitulation and tribute.",
          "strategicAnalysis": "The Melians relied on moral justice and the speculative hope of Spartan rescue. The Athenians dismissed moral appeals, asserting that systemic power differentials govern survival. The Melians were annihilated.",
          "lessonsForStatecraft": "Diplomacy untethered from tangible national deterrence or credible alliance commitments invites strategic catastrophe. Morality cannot substitute for sovereign balance of power."
        },
        "banglaDiplomaticSummary": "আন্তর্জাতিক ব্যবস্থা মৌলিকভাবেই নৈরাজ্যময়। থুসিডিডিসের মেলিয়ান সংলাপ থেকে শুরু করে ১৬৪৮ সালের ওয়েস্টফালিয়া শান্তি চুক্তি পর্যন্ত রাষ্ট্রচিন্তার মূল সত্য হলো—সার্বভৌম অস্তিত্ব টিকিয়ে রাখতে হলে নৈতিক আশ্বাসের চেয়ে বাস্তব সামরিক ও অর্থনৈতিক সক্ষমতাই প্রধান।",
        "analyticalSeminarQuestions": [
          "How does the Westphalian principle of non-interference reconcile with contemporary unilateral sanctions and extraterritorial jurisdiction?",
          "Why do small states face acute survival dilemmas in an anarchic international structure, and how does diplomatic alignment mitigate this risk?"
        ],
        "keyReadings": [
          {
            "title": "History of the Peloponnesian War (Book V: Melian Dialogue)",
            "author": "Thucydides",
            "sourceType": "Classic Text",
            "coreConcept": "Power asymmetry, strategic prudence, and the limits of moral appeals in war."
          }
        ]
      },
      {
        "id": "lec1_2",
        "pillarId": "pillar1_theories",
        "lectureNumber": "1.2",
        "title": "Structural Realism: Polarities, Security Dilemmas & Power Shifts",
        "subtitle": "Defensive vs. Offensive Realism in a Multipolar World",
        "readTimeMinutes": 22,
        "overview": "Structural Realism posits that systemic structure dictates state behavior. Kenneth Waltz's Defensive Realism argues that anarchy incentivizes states to maintain an appropriate balance of power. Conversely, John Mearsheimer's Offensive Realism contends that states must relentlessly seek regional hegemony to ensure absolute survival.",
        "theoreticalFrameworks": [
          {
            "name": "Waltzian Defensive Realism & Balance of Power",
            "concept": "States are systemically punished for over-expansion. The primary objective is security achieved through internal or external balancing.",
            "application": "Explaining why emerging middle powers balance against overbearing regional hegemons."
          },
          {
            "name": "Mearsheimer's Offensive Realism & Regional Hegemony",
            "concept": "Global hegemony is impossible due to the stopping power of water; therefore, great powers strive for regional hegemony while preventing peer competitors.",
            "application": "Analyzing the Indo-Pacific geopolitical rivalry and naval containment strategies."
          }
        ],
        "statecraftCaseStudy": {
          "title": "The Security Dilemma & The Outbreak of World War I (1914)",
          "historicalContext": "The rigid alliance structure of the Triple Entente and Triple Alliance transformed a localized Balkan crisis into a systemic continental war.",
          "strategicAnalysis": "German naval expansion and railway mobilization timetables were perceived by Britain and Russia as mortal threats, triggering preemptive mobilization cascades.",
          "lessonsForStatecraft": "When defensive preparations are indistinguishable from offensive capabilities, arms races and rigid alliances escalate crises beyond political control."
        },
        "banglaDiplomaticSummary": "স্ট্রাকচারাল রিয়ালিজম প্রমাণ করে যে আন্তর্জাতিক কাঠামোই রাষ্ট্রের আচরণ নিয়ন্ত্রণ করে। কেনেথ ওয়াল্টজের ডিফেন্সিভ রিয়ালিজম ভারসাম্যের ওপর গুরুত্ব দেয়, আর মেয়ারশাইমারের অফেন্সিভ রিয়ালিজম আঞ্চলিক আধিপত্য প্রতিষ্ঠার অপরিহার্যতা ব্যাখ্যা করে।",
        "analyticalSeminarQuestions": [
          "Is a multipolar international architecture inherently more prone to miscalculation than a bipolar balance of power?",
          "How does the stopping power of water influence naval grand strategy in the Indian Ocean?"
        ],
        "keyReadings": [
          {
            "title": "Theory of International Politics",
            "author": "Kenneth N. Waltz",
            "sourceType": "Academic Journal",
            "coreConcept": "Systemic structure, distribution of capabilities, and balance of power dynamics."
          }
        ]
      }
    ],
    "checkpointQuiz": {
      "id": "quiz_p1",
      "pillarId": "pillar1_theories",
      "title": "Pillar 1 Theoretical Mastery Examination",
      "passingScorePercentage": 75,
      "questions": [
        {
          "id": "q1_1",
          "prompt": "According to Kenneth Waltz's Structural Realism, what is the primary driving force behind state behavior in the international system?",
          "options": [
            "The innate human lust for power and dominance (animus dominandi)",
            "The anarchic structure of the international system and distribution of material capabilities",
            "Domestic constitutional regimes and ideological party platforms",
            "International legal treaties codified by the United Nations"
          ],
          "correctIndex": 1,
          "academicRationale": "Waltzian Neorealism explicitly locates the cause of state action at the systemic level (Third Image), where anarchy and material power distribution dictate state survival imperatives.",
          "banglaExplanation": "ওয়াল্টজের নিওরিয়ালিজম অনুসারে ব্যক্তি চরিত্র নয়, বরং আন্তর্জাতিক কাঠামোর নৈরাজ্য ও বস্তুগত সক্ষমতার বিন্যাসই রাষ্ট্রের আচরণ নিয়ন্ত্রণ করে।"
        }
      ]
    }
  },
  {
    "id": "pillar2_fpa",
    "termId": "term1",
    "termTitle": "Term I: Foundations & Theoretical Paradigms",
    "pillarNumber": 2,
    "title": "Foreign Policy Analysis & Comparative Diplomatic Systems",
    "categoryBadge": "Diplomatic Statecraft & Decision Systems",
    "shortDescription": "Analyze the domestic, bureaucratic, and systemic determinants of state foreign policy, Two-Level Games, and small/middle power strategic autonomy.",
    "academicObjective": "Master Graham Allison's decision models, Putnam's Two-Level Games, and the machinery of modern diplomatic negotiation.",
    "competencyArea": "Foreign Policy Architecture & Bilateral Statecraft",
    "lectures": [
      {
        "id": "lec2_1",
        "pillarId": "pillar2_fpa",
        "lectureNumber": "2.1",
        "title": "Levels of Analysis & Graham Allison's Decision Models",
        "subtitle": "Rational Actor, Organizational Process, and Bureaucratic Politics",
        "readTimeMinutes": 20,
        "overview": "Graham Allison's study of the Cuban Missile Crisis proved foreign policy is shaped by Model I (Rational Actor), Model II (Organizational SOPs), and Model III (Bureaucratic Politics) where where you stand depends on where you sit.",
        "theoreticalFrameworks": [
          {
            "name": "Allison's Model III: Bureaucratic Bargaining",
            "concept": "Foreign policy decisions represent compromises, coalitions, and triumphs of competing bureaucratic actors (Defense vs Foreign Ministry vs Intelligence).",
            "application": "Deconstructing inter-agency coordination friction in national security policy."
          },
          {
            "name": "Robert Putnam's Two-Level Game Theory",
            "concept": "Diplomats bargain concurrently at the international table (Level I) and with domestic political constituencies (Level II) required to ratify the accord.",
            "application": "Ensuring international transit and trade agreements have robust domestic democratic win-sets."
          }
        ],
        "statecraftCaseStudy": {
          "title": "The Cuban Missile Crisis (1962): EXCOMM Decision Dynamics",
          "historicalContext": "Soviet nuclear missiles deployed in Cuba triggered a 13-day existential standoff between Washington and Moscow.",
          "strategicAnalysis": "President Kennedy resisted military air-strike advice by creating a naval quarantine and trading Jupiter missiles in Turkey via secret backchannels.",
          "lessonsForStatecraft": "Effective leaders deliberately structure advisory councils to cultivate devil's advocacy and avoid premature military escalation."
        },
        "banglaDiplomaticSummary": "পররাষ্ট্রনীতি একক কোনো ব্যক্তির সিদ্ধান্তে চলে না; এটি আমলাতান্ত্রিক দরকষাকষি এবং আন্তর্জাতিক ও অভ্যন্তরীণ রাজনীতির মিথস্ক্রিয়া (পুটনামের টু-লেভেল গেম)।",
        "analyticalSeminarQuestions": [
          "How do Standard Operating Procedures (SOPs) constrain a state's diplomatic flexibility during sudden geopolitical shocks?",
          "Why do international agreements collapse when negotiators miscalculate their domestic Level II win-sets?"
        ],
        "keyReadings": [
          {
            "title": "Essence of Decision: Explaining the Cuban Missile Crisis",
            "author": "Graham T. Allison & Philip Zelikow",
            "sourceType": "Academic Journal",
            "coreConcept": "Three conceptual models of crisis decision-making."
          }
        ]
      }
    ],
    "checkpointQuiz": {
      "id": "quiz_p2",
      "pillarId": "pillar2_fpa",
      "title": "Pillar 2 Foreign Policy Analysis Exam",
      "passingScorePercentage": 75,
      "questions": [
        {
          "id": "q2_1",
          "prompt": "In Graham Allison's Bureaucratic Politics Model (Model III), foreign policy decisions are primarily explained as:",
          "options": [
            "Flawless economic cost-benefit calculations executed by a single leader",
            "Outcomes of intense bargaining, compromise, and power struggles among competing government agencies and ministers",
            "Divine interventions mandated by international religious bodies",
            "Random events dictated entirely by astrological cycles"
          ],
          "correctIndex": 1,
          "academicRationale": "Model III posits that policy is the pulling and hauling of players positioned in competitive bureaucratic arenas.",
          "banglaExplanation": "মডেল ৩ অনুযায়ী পররাষ্ট্রনীতি হলো সরকারের বিভিন্ন মন্ত্রণালয় ও নিরাপত্তা সংস্থার অভ্যন্তরীণ দরকষাকষি ও সমঝোতার ফসল।"
        }
      ]
    }
  },
  {
    "id": "pillar3_polpsych_individual",
    "termId": "term2",
    "termTitle": "Term II: Political Psychology & Strategic Decisions",
    "pillarNumber": 3,
    "title": "Cognitive Dimensions of Leadership & Foreign Policy Decisions",
    "categoryBadge": "Political Psychology & Cognitive Science",
    "shortDescription": "Deconstruct how cognitive biases, heuristic shortcuts, risk orientations (Prospect Theory), and operational codes drive high-stakes diplomatic and military decisions.",
    "academicObjective": "Master advanced psychological tools to evaluate state leader perceptions, miscalculations, historical analogies, and threat perceptions during international crises.",
    "competencyArea": "Psychological Profiling & Cognitive Decision Modeling",
    "lectures": [
      {
        "id": "lec3_1",
        "pillarId": "pillar3_polpsych_individual",
        "lectureNumber": "3.1",
        "title": "Bounded Rationality, Cognitive Biases & Information Bottlenecks",
        "subtitle": "Why the Rational Actor Model Fails in Geopolitical Crises",
        "readTimeMinutes": 20,
        "overview": "Herbert Simon's Bounded Rationality and Robert Jervis's taxonomy of misperception show that leaders satisfice and operate under severe cognitive limits, confirmation biases, and premature closure.",
        "theoreticalFrameworks": [
          {
            "name": "Jervis's Fundamental Attribution Error in IR",
            "concept": "States attribute rival hostility to hostile character traits while justifying their own military maneuvers as purely defensive responses.",
            "application": "Preventing spiral escalation during bilateral border standoffs."
          },
          {
            "name": "Prospect Theory: Risk Asymmetry",
            "concept": "Leaders are risk-averse in the domain of gains, but highly risk-acceptant in the domain of losses.",
            "application": "Designing face-saving diplomatic off-ramps for adversary regimes."
          }
        ],
        "statecraftCaseStudy": {
          "title": "The Yom Kippur War Intelligence Failure (1973)",
          "historicalContext": "Despite concrete intelligence of troop buildups, Israeli intelligence failed to issue a war warning due to cognitive commitment to 'The Concept'.",
          "strategicAnalysis": "Contradictory empirical data was rationalized away until strategic surprise occurred.",
          "lessonsForStatecraft": "When an intelligence agency becomes wedded to a preconceived cognitive model, clear empirical warnings will be systematically dismissed."
        },
        "banglaDiplomaticSummary": "বাস্তব কূটনীতিতে রাষ্ট্রনায়করা জ্ঞানীয় পক্ষপাতে আক্রান্ত হন। জেরভিসের কগনিটিভ মিসপারসেপশন তত্ত্ব দেখায় কীভাবে প্রতিপক্ষের আত্মরক্ষামূলক পদক্ষেপকে আগ্রাসী চক্রান্ত মনে করে সংঘাতের বিস্তার ঘটে।",
        "analyticalSeminarQuestions": [
          "How does the Fundamental Attribution Error fuel arms races between nuclear-armed rivals?",
          "What institutional mechanisms in a Foreign Ministry can eliminate confirmation bias?"
        ],
        "keyReadings": [
          {
            "title": "Perception and Misperception in International Politics",
            "author": "Robert Jervis",
            "sourceType": "Academic Journal",
            "coreConcept": "Cognitive consistency, attribution error, and deterrence failures."
          }
        ]
      }
    ],
    "checkpointQuiz": {
      "id": "quiz_p3",
      "pillarId": "pillar3_polpsych_individual",
      "title": "Pillar 3 Political Psychology Exam",
      "passingScorePercentage": 75,
      "questions": [
        {
          "id": "q3_1",
          "prompt": "According to Prospect Theory (Kahneman & Tversky), how do national decision-makers behave when operating in the 'Domain of Losses'?",
          "options": [
            "They become ultra-cautious and immediately seek unconditional surrender",
            "They become highly risk-acceptant and willing to take dangerous gambles to recover perceived loss",
            "They strictly follow standard econometric utility maximization formulas",
            "They completely delegate all powers to international tribunals"
          ],
          "correctIndex": 1,
          "academicRationale": "Prospect Theory proves that leaders are risk-seeking when facing perceived losses of territory, prestige, or regime security.",
          "banglaExplanation": "প্রসপেক্ট থিওরি অনুসারে ক্ষতির মুখে পড়লে রাষ্ট্রনেতারা অতি-ঝুঁকিপূর্ণ সামরিক পদক্ষেপ গ্রহণ করতে দ্বিধাবোধ করেন না।"
        }
      ]
    }
  },
  {
    "id": "pillar5_security_strategy",
    "termId": "term3",
    "termTitle": "Term III: Strategic Studies & Global Security",
    "pillarNumber": 5,
    "title": "Grand Strategy, Warfare & Modern Security Architecture",
    "categoryBadge": "Strategic Studies & Military Doctrine",
    "shortDescription": "Master Clausewitzian strategy, nuclear deterrence, second-strike capability, hybrid/grey-zone warfare, and maritime choke-point defense.",
    "academicObjective": "Equip fellows with professional strategic doctrine tools spanning conventional deterrence, asymmetric warfare, and naval statecraft.",
    "competencyArea": "Grand Strategy & Defense Deterrence",
    "lectures": [
      {
        "id": "lec5_1",
        "pillarId": "pillar5_security_strategy",
        "lectureNumber": "5.1",
        "title": "Evolution of Strategic Thought & Clausewitzian Philosophy",
        "subtitle": "War as the Continuation of Politics by Other Means",
        "readTimeMinutes": 22,
        "overview": "Carl von Clausewitz's On War established that war is never an autonomous act, but 'the continuation of political intercourse with the addition of other means.' We deconstruct the Clausewitzian Trinity and modern Anti-Access/Area-Denial (A2/AD) littoral defense.",
        "theoreticalFrameworks": [
          {
            "name": "The Clausewitzian Trinity",
            "concept": "Dynamic equilibrium between primordial violence (the people), uncertainty and genius (military command), and political purpose (the government).",
            "application": "Ensuring military operations remain strictly subordinate to diplomatic and political objectives."
          },
          {
            "name": "Nuclear Deterrence & Second-Strike Stability",
            "concept": "Credible, survivable second-strike retaliatory capability ensures Mutually Assured Destruction (MAD), deterring first-strike aggression.",
            "application": "Evaluating strategic stability in regional nuclear deterrence equations."
          }
        ],
        "statecraftCaseStudy": {
          "title": "Littoral Asymmetric Deterrence in Contested Waters",
          "historicalContext": "Mahanian sea power dictates that control over narrow maritime straits grants decisive geopolitical leverage.",
          "strategicAnalysis": "Littoral nations develop Anti-Access/Area-Denial (A2/AD) capabilities to deter superpower naval intrusion.",
          "lessonsForStatecraft": "A smaller coastal state can successfully deter vast carrier battle groups by mastering littoral geography and coastal missile batteries."
        },
        "banglaDiplomaticSummary": "ক্লজভিটসের মতে যুদ্ধ হলো অন্য মাধ্যমে রাজনীতির ধারাবাহিকতা। বঙ্গোপসাগরের মতো কৌশলগত জলসীমায় উপকূলীয় ক্ষেপণাস্ত্র প্রতিরক্ষা (A2/AD) অপরিহার্য।",
        "analyticalSeminarQuestions": [
          "How does the concept of Grey-Zone Warfare challenge conventional definitions of armed attack?",
          "What are the core components required for a middle power to establish credible littoral Anti-Access/Area-Denial?"
        ],
        "keyReadings": [
          {
            "title": "On War (Vom Kriege)",
            "author": "Carl von Clausewitz",
            "sourceType": "Classic Text",
            "coreConcept": "Friction, the remarkable trinity, and war as political instrument."
          }
        ]
      }
    ],
    "checkpointQuiz": {
      "id": "quiz_p5",
      "pillarId": "pillar5_security_strategy",
      "title": "Pillar 5 Grand Strategy & Security Exam",
      "passingScorePercentage": 75,
      "questions": [
        {
          "id": "q5_1",
          "prompt": "According to Carl von Clausewitz, what is the foundational relationship between war and politics?",
          "options": [
            "War is an autonomous activity that operates completely divorced from civil political objectives",
            "War is a mere continuation of political intercourse with the addition of other means",
            "Politics ceases entirely the moment the first shot is fired in combat",
            "Military generals must have supreme constitutional veto power over elected heads of state"
          ],
          "correctIndex": 1,
          "academicRationale": "Clausewitz's central maxim is that military violence must always serve political purposes.",
          "banglaExplanation": "ক্লজভিটসের বিখ্যাত নীতি হলো—যুদ্ধ কোনো বিচ্ছিন্ন ঘটনা নয়, বরং অন্যান্য উপায়ে রাজনৈতিক লক্ষ্য অর্জনের ধারাবাহিকতা।"
        }
      ]
    }
  },
  {
    "id": "pillar6_intl_law",
    "termId": "term3",
    "termTitle": "Term III: Strategic Studies & Global Security",
    "pillarNumber": 6,
    "title": "Public International Law, Treaties & Multilateral Governance",
    "categoryBadge": "International Jurisprudence & UN Law",
    "shortDescription": "Master the legal architecture of the international system: UN Charter Article 2(4), Article 51 self-defense, UNCLOS maritime rights, and ICJ/ICC jurisdiction.",
    "academicObjective": "Provide fellows with graduate-level competence in international treaties, customary international law, and judicial dispute resolution.",
    "competencyArea": "International Law & Treaty Statecraft",
    "lectures": [
      {
        "id": "lec6_1",
        "pillarId": "pillar6_intl_law",
        "lectureNumber": "6.1",
        "title": "The UN Charter Framework: Use of Force & Collective Security",
        "subtitle": "Article 2(4) Prohibition, Article 51 Self-Defense, and Chapter VII Enforcement",
        "readTimeMinutes": 22,
        "overview": "Public international law is anchored in the UN Charter (1945). Article 2(4) establishes a universal prohibition on the threat or use of force. The only two exceptions are Article 51 Self-Defense and Chapter VII Security Council Authorization.",
        "theoreticalFrameworks": [
          {
            "name": "Article 2(4) & Sovereign Territorial Inviolability",
            "concept": "The absolute legal ban on armed aggression, territorial conquest, and political coercion in interstate relations.",
            "application": "Drafting legal resolutions condemning unilateral military incursions before the UN General Assembly."
          },
          {
            "name": "UNCLOS (1982) Maritime Regimes",
            "concept": "Zonal maritime order: 12 NM Territorial Sea, 24 NM Contiguous Zone, 200 NM EEZ, and the Continental Shelf.",
            "application": "Protecting national offshore fishing, energy blocks, and submarine cable corridors."
          }
        ],
        "statecraftCaseStudy": {
          "title": "The ICJ Nicaragua Case (1986): Paramilitary Activities & Use of Force",
          "historicalContext": "Nicaragua brought suit against the United States at the ICJ for mining harbors and funding Contra rebel forces.",
          "strategicAnalysis": "The ICJ ruled that training and arming rebels constituted an unlawful threat or use of force violating customary international law.",
          "lessonsForStatecraft": "International judicial rulings establish enduring legal precedents that dismantle the legitimacy of aggressive covert operations."
        },
        "banglaDiplomaticSummary": "জাতিসংঘ সনদের ২(৪) অনুচ্ছেদ যেকোনো রাষ্ট্রের আঞ্চলিক অখণ্ডতার বিরুদ্ধে বলপ্রয়োগ নিষিদ্ধ করেছে। আত্মরক্ষা (৫১ অনুচ্ছেদ) এবং নিরাপত্তা পরিষদের অনুমতি ব্যতীত যেকোনো আগ্রাসন বেআইনি।",
        "analyticalSeminarQuestions": [
          "How does customary international law define the threshold of an Armed Attack under UN Charter Article 51 in the era of cyber strikes?",
          "What are the institutional limitations of the International Court of Justice when permanent UNSC members invoke political vetoes?"
        ],
        "keyReadings": [
          {
            "title": "Charter of the United Nations and Statute of the International Court of Justice",
            "author": "United Nations",
            "sourceType": "Treaty/Charter",
            "coreConcept": "Article 2(4), Article 51, and Chapter VII collective security powers."
          }
        ]
      }
    ],
    "checkpointQuiz": {
      "id": "quiz_p6",
      "pillarId": "pillar6_intl_law",
      "title": "Pillar 6 International Law Mastery Exam",
      "passingScorePercentage": 75,
      "questions": [
        {
          "id": "q6_1",
          "prompt": "Under the United Nations Charter, what are the ONLY two lawful exceptions to the general prohibition on the threat or use of force in interstate relations (Article 2(4))?",
          "options": [
            "Unilateral preemptive economic strikes and covert espionage operations",
            "Individual or collective self-defense in response to an armed attack (Article 51), and military enforcement authorized by the UN Security Council under Chapter VII",
            "Regime-change invasions organized by regional economic trade blocs",
            "Maritime naval blockades aimed at collecting foreign sovereign debt"
          ],
          "correctIndex": 1,
          "academicRationale": "The UN Charter permits military force only under Article 51 (self-defense) or via UNSC Chapter VII mandate.",
          "banglaExplanation": "জাতিসংঘ সনদের অধীনে বলপ্রয়োগের একমাত্র বৈধ ক্ষেত্র দুটি: ৫১ অনুচ্ছেদ অনুযায়ী আত্মরক্ষা, অথবা নিরাপত্তা পরিষদের সপ্তম অধ্যায় অনুযায়ী অনুমোদন।"
        }
      ]
    }
  },
  {
    "id": "pillar7_ipe_geoeconomics",
    "termId": "term4",
    "termTitle": "Term IV: Regional Geopolitics & Middle-Power Statecraft",
    "pillarNumber": 7,
    "title": "International Political Economy, Geoeconomics & Trade Statecraft",
    "categoryBadge": "Geoeconomics & Global Finance",
    "shortDescription": "Analyze the Bretton Woods institutions, dollar hegemony, supply-chain weaponization, sanctions statecraft, and trade corridors in a multipolar order.",
    "academicObjective": "Master the interaction of wealth and power, currency architecture, sovereign debt, and geoeconomic leverage.",
    "competencyArea": "Geoeconomic Strategy & Trade Statecraft",
    "lectures": [
      {
        "id": "lec7_1",
        "pillarId": "pillar7_ipe_geoeconomics",
        "lectureNumber": "7.1",
        "title": "International Monetary Architecture & Weaponized Interdependence",
        "subtitle": "From Bretton Woods to Dollar Hegemony and Global Sanctions",
        "readTimeMinutes": 22,
        "overview": "International Political Economy examines how political power shapes economic systems. We analyze Farrell & Newman's concept of Weaponized Interdependence—how hub-and-spoke networks (SWIFT, semiconductor supply chains) are utilized for targeted coercion.",
        "theoreticalFrameworks": [
          {
            "name": "Weaponized Interdependence (Farrell & Newman)",
            "concept": "Asymmetric network structures create panopticon and chokepoint effects that states exploit for geopolitical advantage.",
            "application": "Diversifying cross-border payment rails and securing semiconductor/energy supply lines."
          },
          {
            "name": "Geoeconomic Hedging & LDC Graduation Trade Strategy",
            "concept": "Transitioning from non-reciprocal tariff preferences (GSP/EBA) toward bilateral Free Trade Agreements (FTAs) and regional economic integration.",
            "application": "Formulating post-graduation trade resilience policies for developing middle powers."
          }
        ],
        "statecraftCaseStudy": {
          "title": "The Freezing of Central Bank Sovereign Reserves & SWIFT Disconnection (2022)",
          "historicalContext": "Following the 2022 escalation, Western nations froze over $300 billion in sovereign foreign exchange reserves and disconnected major banks from SWIFT.",
          "strategicAnalysis": "This triggered accelerated de-dollarization initiatives, local-currency settlement mechanisms, and gold reserve accumulation worldwide.",
          "lessonsForStatecraft": "Excessive reliance on a single foreign currency exposes a nation's sovereign reserves to immediate extraterritorial freeze."
        },
        "banglaDiplomaticSummary": "আন্তর্জাতিক অর্থনৈতিক ব্যবস্থা ভূ-রাজনীতির গভীর হাতিয়ার। বৈশ্বিক রিজার্ভ মুদ্রা ও সুইফট নেটওয়ার্কের ওপর অতি-নির্ভরশীলতা এড়াতে মুদ্রা বৈচিত্র্যকরণ এবং দ্বিপাক্ষিক বাণিজ্য চুক্তি (এফটিএ) জরুরি।",
        "analyticalSeminarQuestions": [
          "How does Weaponized Interdependence alter traditional balance-of-power calculations in global trade?",
          "What strategic measures must a graduating LDC economy take to safeguard export competitiveness?"
        ],
        "keyReadings": [
          {
            "title": "Weaponized Interdependence: How Global Economic Networks Shape State Coercion",
            "author": "Henry Farrell & Abraham L. Newman",
            "sourceType": "Academic Journal",
            "coreConcept": "Panopticon and chokepoint hubs in globalized networks."
          }
        ]
      }
    ],
    "checkpointQuiz": {
      "id": "quiz_p7",
      "pillarId": "pillar7_ipe_geoeconomics",
      "title": "Pillar 7 Geoeconomics Mastery Exam",
      "passingScorePercentage": 75,
      "questions": [
        {
          "id": "q7_1",
          "prompt": "Henry Farrell and Abraham Newman's concept of 'Weaponized Interdependence' demonstrates that globalized economic networks create coercive state leverage through which two structural mechanisms?",
          "options": [
            "Universal currency parity and mandatory gold standard repatriation",
            "Panopticon effect (surveillance of information flows) and Chokepoint effect (denial of access to centralized nodal hubs like SWIFT)",
            "Strict adherence to traditional mercantilist tariff barriers from the 17th century",
            "Compulsory agricultural price-fixing enforced by the WTO"
          ],
          "correctIndex": 1,
          "academicRationale": "Farrell and Newman identify the Panopticon and Chokepoint effects as the twin mechanisms of weaponized network centrality.",
          "banglaExplanation": "অস্ত্রায়িত আন্তঃনির্ভরশীলতার দুটি প্রধান দিক হলো প্যানঅপটিকন (তথ্য নজরদারি) এবং চোকপয়েন্ট (সুইফট বা ডলার ক্লিয়ারিং হাউসের মতো কেন্দ্রীয় হাব থেকে বিচ্ছিন্ন করা)।"
        }
      ]
    }
  },
  {
    "id": "pillar8_regional_bangladesh",
    "termId": "term4",
    "termTitle": "Term IV: Regional Geopolitics & Middle-Power Statecraft",
    "pillarNumber": 8,
    "title": "Middle-Power Statecraft & The Bangladesh Geopolitical Paradigm",
    "categoryBadge": "Littoral Diplomacy & Sovereign Statecraft",
    "shortDescription": "Comprehensive strategic masterclass on Bangladesh foreign policy: ITLOS/PCA maritime law, omnidirectional hedging, transboundary river governance, UN peacekeeping, and the post-2024 'Bangladesh First' doctrine.",
    "academicObjective": "Equip fellows with professional-grade diplomatic expertise on South Asian littoral balance-of-power, maritime security, regional connectivity, and sovereign strategic autonomy.",
    "competencyArea": "Regional Grand Strategy & Sovereign Diplomacy",
    "lectures": [
      {
        "id": "lec8_1",
        "pillarId": "pillar8_regional_bangladesh",
        "lectureNumber": "8.1",
        "title": "The Constitutional Architecture & Doctrinal Evolution of Foreign Policy",
        "subtitle": "From Article 25 to Strategic Non-Alignment in a Multipolar World",
        "readTimeMinutes": 22,
        "overview": "Bangladesh's foreign policy is anchored in Article 25 of its Constitution, enshrining sovereign equality, non-interference, and peaceful dispute resolution.",
        "theoreticalFrameworks": [
          {
            "name": "Article 25 & Constitutional Non-Alignment",
            "concept": "Constitutional mandate forbidding foreign military pacts while obligating active multilateral mediation.",
            "application": "Formulating legal and diplomatic justifications for strategic autonomy."
          },
          {
            "name": "The 'Bangladesh First' Strategic Doctrine (Post-2024)",
            "concept": "Primacy of national security, territorial dignity, non-interference, economic self-reliance, and strict reciprocity in all bilateral diplomatic compacts.",
            "application": "Asserting sovereign equality, zero tolerance for border violence, and equitable transboundary hydro-diplomacy."
          }
        ],
        "statecraftCaseStudy": {
          "title": "The ITLOS Dispute Settlement (Bangladesh v. Myanmar, 2012)",
          "historicalContext": "Faced with naval standoffs over offshore energy blocks, Bangladesh invoked UNCLOS Part XV compulsory dispute resolution at ITLOS.",
          "strategicAnalysis": "Secured the first international judicial delimitation of the continental shelf beyond 200 nautical miles, awarding sovereign rights over 118,813 sq km of waters.",
          "lessonsForStatecraft": "Small and middle powers achieve their greatest strategic victories when anchoring national security in binding international legal dispute mechanisms."
        },
        "banglaDiplomaticSummary": "বাংলাদেশের পররাষ্ট্রনীতি সংবিধানের ২৫ অনুচ্ছেদ এবং ২০২৪-পরবর্তী 'বাংলাদেশ ফার্স্ট' ডকট্রিনের ওপর প্রতিষ্ঠিত—যার মূল লক্ষ্য জাতীয় সার্বভৌমত্ব, সীমান্ত নিরাপত্তা, ও সমমর্যাদার ভিত্তিতে স্বাধীন পররাষ্ট্রনীতি পরিচালনা।",
        "analyticalSeminarQuestions": [
          "How does the Bangladesh First doctrine redefine bilateral statecraft with regional neighbors from asymmetric compliance to strict reciprocity?",
          "How did Bangladesh's legal team successfully deploy the equity principle at ITLOS to overcome its concave coastline?"
        ],
        "keyReadings": [
          {
            "title": "The Constitution of Bangladesh (Article 25) & ITLOS Reports (2012)",
            "author": "Government of Bangladesh & ITLOS",
            "sourceType": "Treaty/Charter",
            "coreConcept": "Sovereign equality, maritime boundary law, and peaceful dispute resolution."
          }
        ]
      }
    ],
    "checkpointQuiz": {
      "id": "quiz_p8",
      "pillarId": "pillar8_regional_bangladesh",
      "title": "Pillar 8 Bangladesh Geopolitical Paradigm Exam",
      "passingScorePercentage": 75,
      "questions": [
        {
          "id": "q8_1",
          "prompt": "What was the core legal principle successfully argued by Bangladesh at ITLOS (2012) to overcome the cut-off effect of its concave coastline in the Bay of Bengal?",
          "options": [
            "The strict raw Equidistance line without geographical adjustment",
            "The Principle of Equity / Angle-Bisector adjustment to achieve an equitable delimitation under UNCLOS",
            "Historic Title dating back to the pre-colonial Mughal maritime doctrine",
            "Immediate unilateral declaration of a 500-mile military exclusion perimeter"
          ],
          "correctIndex": 1,
          "academicRationale": "Bangladesh successfully argued that the concave coastline created a disproportionate cut-off effect, requiring the application of the Equity Principle to ensure access to the 200 NM EEZ and outer continental shelf.",
          "banglaExplanation": "বাংলাদেশ সফলভাবে প্রমাণ করে যে অবতল উপকূলরেখার কারণে সাধারণ সমদূরত্ব রেখা বাংলাদেশকে মহীসোপান বঞ্চিত করবে, ফলে আনক্লোস অনুযায়ী ন্যায়সঙ্গত বণ্টন (ইকুইটি নীতি) আবশ্যক।"
        }
      ]
    }
  }
];

export const CRISIS_SCENARIOS: CrisisScenario[] = [
  {
    "id": "bay_of_bengal_standoff",
    "title": "The Bay of Bengal Maritime Standoff: Strategic Crisis Lab",
    "theater": "Bay of Bengal Deep Littoral & Matarbari Approach",
    "threatLevel": "Defcon 2",
    "backgroundContext": "Intelligence confirms an unannounced dual-carrier naval fleet of an external superpower has entered the Exclusive Economic Zone (EEZ) near the Swatch of No Ground, conducting electronic jamming of coastal radar stations. Simultaneously, neighboring naval gunboats have approached an offshore deep-sea energy drilling platform, claiming historic jurisdiction over Block SS-11.",
    "missionObjective": "As Chief National Security Advisor to the President, orchestrate a coordinated diplomatic, naval, and multilateral de-escalation strategy that defends sovereign maritime integrity without triggering armed conflict.",
    "dilemmas": [
      {
        "id": "dil_1",
        "stageNumber": 1,
        "stageTitle": "Immediate Response to Radar Jamming & EEZ Intrusion",
        "urgentDilemma": "The external naval task force is 18 nautical miles from Saint Martin's Island. Coastal radar is blind across a 40-mile arc. The Military High Command urges an immediate missile-lock warning, while the Foreign Ministry suggests a silent diplomatic note.",
        "intelligenceBriefing": "Naval intelligence reports the foreign carrier's electronic warfare suite is testing regional response times. Public panic is spreading on social media.",
        "options": [
          {
            "id": "opt_1a",
            "actionTitle": "Launch Immediate Anti-Ship Missile Radar Lock-On",
            "actionDescription": "Activate coastal missile batteries and illuminate the foreign carrier with targeting radar while scrambling maritime patrol aircraft.",
            "strategicDoctrine": "Deterrence Escalation",
            "projectedOutcomes": {
              "sovereigntyImpact": "High signal of sovereign resolve, but risks immediate preemptive counter-strike.",
              "regionalStability": "Severe escalation; stocks plummet and shipping insurance surcharges spike 400%.",
              "geoeconomicCost": "Immediate suspension of commercial maritime cargo in the littoral."
            },
            "scoreDelta": 65,
            "evaluationRationale": "Premature tactical escalation without open diplomatic signaling invites military miscalculation before international awareness is mobilized."
          },
          {
            "id": "opt_1b",
            "actionTitle": "Execute Asymmetric Shadowing & High-Level Diplomatic Demarche",
            "actionDescription": "Deploy stealth guided-missile corvettes to shadow the fleet at a safe standoff distance, broadcast UNCLOS Article 56 sovereign warnings, and summon the ambassador for an urgent demarche.",
            "strategicDoctrine": "Asymmetric Hedging",
            "projectedOutcomes": {
              "sovereigntyImpact": "Maintains undisputed sovereign claim while recording real-time video evidence of the violation.",
              "regionalStability": "Keeps escalation within controllable diplomatic parameters.",
              "geoeconomicCost": "Commercial shipping remains orderly."
            },
            "scoreDelta": 95,
            "evaluationRationale": "Masterful statecraft: demonstrates physical naval presence and legal deterrence while establishing an immediate diplomatic off-ramp."
          },
          {
            "id": "opt_1c",
            "actionTitle": "Total Operational Silence and Private Backchannel Appeal",
            "actionDescription": "Instruct naval units to stay in port to avoid provoking the foreign fleet, hoping they exit the EEZ within 24 hours.",
            "strategicDoctrine": "Diplomatic De-escalation",
            "projectedOutcomes": {
              "sovereigntyImpact": "Catastrophic loss of sovereign credibility; establishes a dangerous precedent of acquiescence.",
              "regionalStability": "Temporary quiet, but invites further gray-zone incursions.",
              "geoeconomicCost": "Demoralizes defense forces and invites domestic unrest."
            },
            "scoreDelta": 30,
            "evaluationRationale": "Appeasement in the face of gray-zone encroachment violates basic structural deterrence and undermines sovereign statehood."
          }
        ]
      },
      {
        "id": "dil_2",
        "stageNumber": 2,
        "stageTitle": "Multilateral Legal Mobilization & Crisis De-escalation",
        "urgentDilemma": "The foreign naval force claims it was exercising high-seas freedom of navigation under UNCLOS Article 58, but satellite telemetry reveals military hydrographic seabed mapping within our Continental Shelf.",
        "intelligenceBriefing": "UN Security Council members are convening in New York. The foreign power offers to halt military exercises if granted long-term dual-use docking access at a deep-sea port.",
        "options": [
          {
            "id": "opt_2a",
            "actionTitle": "Concede Dual-Use Port Access in Exchange for Immediate Withdrawal",
            "actionDescription": "Sign a provisional memorandum granting foreign naval logistics rights at the deep-sea port to resolve the immediate crisis.",
            "strategicDoctrine": "Diplomatic De-escalation",
            "projectedOutcomes": {
              "sovereigntyImpact": "Permanent compromise of sovereign autonomy; triggers immediate counter-balancing from rival superpowers.",
              "regionalStability": "Turns national territory into a contested frontline for great power war.",
              "geoeconomicCost": "Immediate loss of independent port sovereignty."
            },
            "scoreDelta": 25,
            "evaluationRationale": "Trading sovereign port infrastructure under coercive military intimidation destroys long-term strategic autonomy."
          },
          {
            "id": "opt_2b",
            "actionTitle": "File Emergency UNCLOS Annex VII Dispute & Internationalize Before UNGA",
            "actionDescription": "Formally submit an urgent notification under UNCLOS Part XV for illegal seabed hydrography, convene an emergency briefing for all diplomatic missions in Dhaka, and demand immediate international arbitral inspection.",
            "strategicDoctrine": "Multilateral Mediation",
            "projectedOutcomes": {
              "sovereigntyImpact": "Solidifies legal title; mobilizes global diplomatic opinion and international law in support of sovereign rights.",
              "regionalStability": "Forces the intruder into the international diplomatic spotlight, compelling quiet withdrawal.",
              "geoeconomicCost": "Protects commercial deep-sea energy contracts."
            },
            "scoreDelta": 98,
            "evaluationRationale": "Superb application of lawfare and multilateral statecraft: leverages binding international legal regimes to neutralize physical power asymmetry."
          }
        ]
      }
    ]
  }
];

export const GRAND_EXAM_QUESTIONS: QuizQuestion[] = [
  {
    "id": "ge_1",
    "prompt": "According to John Mearsheimer's Offensive Realism, why is global hegemony fundamentally unattainable for any single great power in the modern era?",
    "options": [
      "The moral authority and legal sanctions of the United Nations Security Council",
      "The 'Stopping Power of Water' (oceans make projecting land-invasion power across continents impossible)",
      "The universal spread of democratic constitutional systems",
      "The complete eradication of nationalism in globalized societies"
    ],
    "correctIndex": 1,
    "academicRationale": "Mearsheimer argues oceans make continental conquest impractical, confining great powers to regional hegemony.",
    "banglaExplanation": "মেয়ারশাইমার দেখিয়েছেন যে সমুদ্রের বিশাল দূরত্ব পার হয়ে অন্য মহাদেশ পুরোপুরি দখল করা অসম্ভব।"
  },
  {
    "id": "ge_2",
    "prompt": "In Robert Jervis's political psychology framework, what psychological mechanism causes statesmen to interpret an adversary's conciliatory gestures as deceptive ruses while viewing hostile signals as definitive proof of aggression?",
    "options": [
      "Cognitive Consistency and Confirmation Bias",
      "The Democratic Peace Syndrome",
      "Waltzian Structural Polarity",
      "The Absolute Gains Optimization Model"
    ],
    "correctIndex": 0,
    "academicRationale": "Confirmation bias leads decision-makers to assimilate hostile signals matching their existing enemy image.",
    "banglaExplanation": "কগনিটিভ কনসিস্টেন্সি ও কনফার্মেশন বায়াসের কারণে শত্রু রাষ্ট্রের ভালো উদ্যোগকে ভন্ডামি এবং কঠোর পদক্ষেপকে আগ্রাসী চক্রান্ত হিসেবে দেখা হয়।"
  },
  {
    "id": "ge_3",
    "prompt": "How did Bangladesh's landmark 2012 ITLOS verdict against Myanmar transform global maritime jurisprudence regarding the continental shelf?",
    "options": [
      "It completely abolished the concept of the 200-nautical-mile Exclusive Economic Zone",
      "It established the first-ever international judicial delimitation of the continental shelf beyond 200 nautical miles, affirming coastal state seabed rights based on natural prolongation",
      "It declared the Bay of Bengal an international closed lake exempt from UNCLOS",
      "It mandated equal joint-ownership of all offshore oil fields by all SAARC member nations"
    ],
    "correctIndex": 1,
    "academicRationale": "The 2012 ITLOS judgment was the first in international legal history to delimit the outer continental shelf beyond 200 NM.",
    "banglaExplanation": "২০১২ সালের আইটিএলওএস রায় ছিল আন্তর্জাতিক আইনের ইতিহাসে প্রথম ঘটনা যেখানে ২০০ নটিক্যাল মাইলের বাইরের মহীসোপানের ওপর উপকূলীয় রাষ্ট্রের অধিকার নির্ধারণ করা হয়।"
  },
  {
    "id": "ge_4",
    "prompt": "Under Robert Putnam's Two-Level Game Theory of international diplomacy, what determines the likelihood of a successfully negotiated international agreement taking effect?",
    "options": [
      "The military expenditure ratio between the negotiating chief executives",
      "The size and overlap of the domestic 'Win-Sets' (Level II domestic constituencies capable of ratifying the Level I diplomatic agreement)",
      "The total number of embassies maintained in Geneva and New York",
      "The linguistic fluency of the primary ambassador in classical Latin"
    ],
    "correctIndex": 1,
    "academicRationale": "Putnam demonstrates that international agreements succeed only when Level I diplomatic terms fall within the overlapping domestic Level II win-sets.",
    "banglaExplanation": "পুটনামের টু-লেভেল গেম অনুযায়ী যেকোনো আন্তর্জাতিক চুক্তি তখনই কার্যকর হয় যখন তা উভয় দেশের অভ্যন্তরীণ রাজনৈতিক অনুমোদন (উইন-সেট) লাভ করে।"
  },
  {
    "id": "ge_5",
    "prompt": "Under UN Charter Article 2(4) and customary international law, which of the following acts constitutes an unlawful threat or use of force?",
    "options": [
      "Filing a peaceful maritime dispute before the International Tribunal for the Law of the Sea (ITLOS)",
      "Arming, financing, and training insurgent paramilitary forces to destabilize a foreign sovereign government (as affirmed in ICJ Nicaragua 1986)",
      "Conducting peaceful bilateral tariff reduction negotiations under WTO rules",
      "Delivering diplomatic notes of protest through accredited ambassadors"
    ],
    "correctIndex": 1,
    "academicRationale": "The ICJ ruled in Nicaragua (1986) that arming and financing insurgents constitutes an unlawful use of force and intervention.",
    "banglaExplanation": "আইসিজে নিকারাগুয়া (১৯৮৬) মামলায় রায় দেয় যে অন্য কোনো দেশের সরকার উৎখাতে বিদ্রোহীদের অর্থ ও অস্ত্র দেওয়া বেআইনি বলপ্রয়োগ ও হস্তক্ষেপ।"
  },
  {
    "id": "ge_6",
    "prompt": "In the post-2024 strategic realignment of Bangladesh foreign policy, what is the central operational premise of the 'Bangladesh First' doctrine?",
    "options": [
      "Immediate severance of all diplomatic relations with neighboring nations",
      "Absolute sovereign equality, zero tolerance for border violence, strict reciprocity in bilateral ties, and alignment with domestic democratic will",
      "Joining a formal superpower military alliance with mandatory forward missile deployments",
      "Converting all national ports into private extraterritorial enclaves"
    ],
    "correctIndex": 1,
    "academicRationale": "The Bangladesh First doctrine asserts sovereign strategic autonomy, zero tolerance for border killings, and reciprocal equality in neighborhood ties.",
    "banglaExplanation": "বাংলাদেশ ফার্স্ট ডকট্রিনের মূল লক্ষ্য হলো সার্বভৌম সমমর্যাদা, সীমান্ত হত্যার অবসান, কঠোর পারস্পরিকতা এবং জনগণের গণতান্ত্রিক ইচ্ছার ভিত্তিতে পররাষ্ট্রনীতি পরিচালনা।"
  }
];
