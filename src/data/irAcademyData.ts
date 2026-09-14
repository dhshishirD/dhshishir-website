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
    "term": "Lawfare",
    "category": "International Law",
    "pronunciationIpa": "/ˈlɔː.feər/",
    "definition": "The strategic deployment of international legal treaties, judicial tribunals, and legal regimes as an instrument of statecraft to constrain adversaries and defend sovereign rights without kinetic war.",
    "banglaMeaning": "ল'ফেয়ার (আইনভিত্তিক কৌশল) — বন্দুকের বদলে আন্তর্জাতিক ট্রাইব্যুনাল ও আইনি চুক্তিকে পরাশক্তির বিরুদ্ধে সুরক্ষার হাতিয়ার হিসেবে প্রয়োগ।",
    "diplomaticContext": "Effectively demonstrated in Bangladesh's Bay of Bengal maritime boundary demarcations at ITLOS and PCA."
  },
  {
    "term": "Thucydides Trap",
    "category": "IR Theory",
    "pronunciationIpa": "/θjuːˈsɪd.ɪ.diːz træp/",
    "definition": "A structural dynamic identified by Graham Allison where a rising power threatens to displace an established ruling hegemon, historically resulting in war.",
    "banglaMeaning": "থুসিডিডিস ট্র্যাপ — উদীয়মান শক্তির উত্থানে বিদ্যমান পরাশক্তির অস্তিত্বের ভয় থেকে যুদ্ধের সূত্রপাত হওয়া।",
    "diplomaticContext": "The dominant theoretical prism used by scholars to analyze 21st-century US-China structural rivalry in the Western Pacific."
  },
  {
    "term": "Two-Level Games",
    "category": "Diplomatic Statecraft & Decision Systems",
    "pronunciationIpa": "/tuː ˈlɛv.əl ɡeɪmz/",
    "definition": "Robert Putnam's model conceptualizing international diplomacy as concurrent bargaining between international statesmen (Level I) and their domestic political ratifying bodies (Level II).",
    "banglaMeaning": "টু-লেভেল গেম — আন্তর্জাতিক টেবিলে চুক্তি করার পাশাপাশি নিজ দেশের অভ্যন্তরীণ রাজনৈতিক অনুমোদন আদায়ের দ্বৈত দরকষাকষি।",
    "diplomaticContext": "Explains why domestic political instability often scuttles otherwise rational transboundary water and trade treaties."
  },
  {
    "term": "Riparian Sovereignty & Transboundary Watercourses",
    "category": "Bangladesh Statecraft",
    "pronunciationIpa": "/raɪˈpeə.ri.ən ˈsɒv.rɪn.ti/",
    "definition": "The legal and diplomatic governance of international rivers flowing across multiple sovereign borders, governed by the UN 1997 Watercourses Convention principle of equitable and reasonable utilization.",
    "banglaMeaning": "আন্তঃসীমান্ত নদী শাসন — উজানের দেশ কর্তৃক একতরফা পানি প্রত্যাহার না করে ভাটির দেশের অধিকার রক্ষা করে ন্যায়সঙ্গত বণ্টন।",
    "diplomaticContext": "Crucial for Bangladesh regarding the 54 shared transboundary rivers including the Teesta, Ganges, and Brahmaputra."
  },
  {
    "term": "Stopping Power of Water",
    "category": "Security & Strategy",
    "pronunciationIpa": "/ˈstɒp.ɪŋ ˈpaʊ.ər ɒv ˈwɔː.tər/",
    "definition": "John Mearsheimer's geopolitical axiom that oceans and major water bodies severely limit the power-projection capability of land armies across continents.",
    "banglaMeaning": "পানির প্রতিবন্ধক শক্তি — মহাসাগরের বিশাল বিস্তার স্থলবাহিনীর অন্য মহাদেশে সম্পূর্ণ সামরিক বিজয় অর্জন অসম্ভব করে তোলে।",
    "diplomaticContext": "Explains why the United States operates as an offshore balancer rather than a direct territorial occupier in Asia."
  },
  {
    "term": "Geoeconomics",
    "category": "Geoeconomics",
    "pronunciationIpa": "/ˌdʒiː.oʊ.iː.kəˈnɒm.ɪks/",
    "definition": "The use of economic instruments (such as investment funds, trade tariffs, sanctions, and infrastructure credit) to promote and defend national sovereign interests and geopolitical power.",
    "banglaMeaning": "ভূ-অর্থনীতি — অর্থনৈতিক সামর্থ্য, বিনিয়োগ ও বাণিজ্যকে কৌশলগত প্রভাব ও জাতীয় স্বার্থ রক্ষার হাতিয়ার হিসেবে ব্যবহার।",
    "diplomaticContext": "Underpins the Belt and Road Initiative (BRI), US CHIPS Act, and regional deep-sea port development."
  },
  {
    "term": "Nuclear Deterrence & Second-Strike Capability",
    "category": "Security & Strategy",
    "pronunciationIpa": "/ˈnjuː.kliː.ər dɪˈtɛr.əns/",
    "definition": "A defense posture where a state possesses sufficient surviving nuclear weapons to inflict unacceptable retaliatory damage after absorbing a full-scale surprise first strike.",
    "banglaMeaning": "পারমাণবিক নিবৃত্তিকরণ ও সেকেন্ড-স্ট্রাইক সক্ষমতা — শত্রুর প্রথম হামলার পরও বিধ্বংসী পাল্টা আঘাত হানার সক্ষমতা যা যুদ্ধ শুরু করা অসম্ভব করে।",
    "diplomaticContext": "Maintains the precarious strategic balance between India and Pakistan in South Asia."
  },
  {
    "term": "Constructivism (IR)",
    "category": "IR Theory",
    "pronunciationIpa": "/kənˈstrʌk.tɪ.vɪ.zəm/",
    "definition": "An IR paradigm asserting that international structures are social constructs shaped by shared ideas, identities, cultural norms, and discourse rather than purely material power.",
    "banglaMeaning": "গঠনবাদ (কনস্ট্রাকটিভিজম) — আলেকজান্ডার ওয়েন্ডটের তত্ত্ব যেখানে বলা হয় আন্তর্জাতিক সম্পর্ক নিছক অস্ত্রের দ্বারা নয়, বরং রাষ্ট্রের বিশ্বাস ও পরিচয়ের দ্বারা নির্মিত।",
    "diplomaticContext": "Summarized by Alexander Wendt's famous maxim: 'Anarchy is what states make of it.'"
  },
  {
    "term": "Choke Point Diplomacy",
    "category": "Security & Strategy",
    "pronunciationIpa": "/tʃoʊk pɔɪnt dɪˈploʊ.mə.si/",
    "definition": "Strategic maneuvering and naval positioning around narrow geographic maritime straits (e.g., Malacca, Hormuz, Bab-el-Mandeb) critical to global energy and trade flows.",
    "banglaMeaning": "চোখ পয়েন্ট কূটনীতি — মালাক্কা বা হরমুজের মতো সংকীর্ণ সামুদ্রিক প্রণালী নিয়ন্ত্রণের মাধ্যমে বিশ্ববাণিজ্য ও জ্বালানি নিরাপত্তা প্রভাবিত করার কৌশল।",
    "diplomaticContext": "Central to Bay of Bengal littoral security and energy transit lines linking the Gulf to East Asia."
  }
];

export const PILLARS_DATA: Pillar[] = [
  {
    "id": "pillar1_theories",
    "termId": "term1",
    "termTitle": "Term I: Foundations & Theoretical Paradigms",
    "pillarNumber": 1,
    "title": "International Relations Theories & Structural Anarchy",
    "categoryBadge": "Theoretical Paradigms & Systemic Structure",
    "shortDescription": "Master the intellectual foundations of world politics, Classical Realism, Neorealism, Liberal Institutionalism, and Constructivism.",
    "academicObjective": "Analyze how systemic anarchy, material polarity, and international norms dictate state survival imperatives and balance-of-power dynamics.",
    "competencyArea": "Structural Analysis & Grand Theoretical Modeling",
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
        },
        {
          "id": "q1_2",
          "prompt": "Why does John Mearsheimer argue in 'The Tragedy of Great Power Politics' that global hegemony is fundamentally impossible?",
          "options": [
            "Because international treaties forbid world conquest",
            "Due to the 'Stopping Power of Water'—oceans make cross-continental military conquest impractical",
            "Because all states eventually transition into pacifist democracies",
            "Because space satellites have eliminated all ground military conflicts"
          ],
          "correctIndex": 1,
          "academicRationale": "Mearsheimer demonstrates that massive water expanses prevent any state from conquering and occupying across oceans, confining great powers to regional hegemony.",
          "banglaExplanation": "মেয়ারশাইমার দেখিয়েছেন সমুদ্রের বিশাল বাধা অতিক্রম করে অন্য মহাদেশ সম্পূর্ণ দখল করা অসম্ভব, তাই পরাশক্তিরা কেবল নিজ অঞ্চলে আধিপত্য প্রতিষ্ঠা করতে পারে।"
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
      "title": "Pillar 2 Foreign Policy Analysis Examination",
      "passingScorePercentage": 75,
      "questions": [
        {
          "id": "q2_1",
          "prompt": "In Graham Allison's Model III (Bureaucratic Politics), what aphorism captures how cabinet officials formulate foreign policy stances?",
          "options": [
            "Power corrupts, and absolute power corrupts absolutely",
            "Where you stand depends on where you sit",
            "In war, truth is the first casualty",
            "Diplomacy is the art of letting someone else have your way"
          ],
          "correctIndex": 1,
          "academicRationale": "Miles's Law ('Where you stand depends on where you sit') underpins Allison's Model III, showing that departmental interests dictate policy preferences.",
          "banglaExplanation": "অ্যালিসনের মডেল ৩-এ বলা হয় একজন কর্মকর্তা কোন দপ্তরের দায়িত্বে আছেন তার ওপর নির্ভর করে তিনি কোন নীতি সমর্থন করবেন।"
        }
      ]
    }
  },
  {
    "id": "pillar3_polpsych_individual",
    "termId": "term2",
    "termTitle": "Term II: Psychological & Advisory Statecraft",
    "pillarNumber": 3,
    "title": "Political Psychology & Cognitive Biases in Statecraft",
    "categoryBadge": "Cognitive Psychology & Strategic Misperception",
    "shortDescription": "Understand how cognitive biases, prospect theory, historical analogies, and stress distort high-stakes foreign policy decisions.",
    "academicObjective": "Examine Robert Jervis's perception theory, Kahneman-Tversky prospect theory, and psychological deterrence failures.",
    "competencyArea": "Decision Psychology & Cognitive Intelligence",
    "lectures": [
      {
        "id": "lec3_1",
        "pillarId": "pillar3_polpsych_individual",
        "lectureNumber": "3.1",
        "title": "Robert Jervis on Perception and Misperception in International Politics",
        "subtitle": "Cognitive Consistency, Wishful Thinking, and Deterrence Failures",
        "readTimeMinutes": 24,
        "overview": "Statesmen do not react to the objective world, but to their subjective perception of it. Robert Jervis proved decision-makers suffer from confirmation bias, the fundamental attribution error, and worst-case scenario overestimation.",
        "theoreticalFrameworks": [
          {
            "name": "Cognitive Consistency & Confirmation Bias",
            "concept": "Leaders fit incoming intelligence into pre-existing belief systems, dismissing discordant facts as deception while treating conforming rumors as verified truth.",
            "application": "Auditing intelligence briefings to prevent strategic surprise."
          },
          {
            "name": "Fundamental Attribution Error in Statecraft",
            "concept": "Attributing adversary actions to deep malevolent intent while viewing one's own provocative moves as purely defensive and self-evidently benign.",
            "application": "Mitigating accidental spiral escalation during border incidents."
          }
        ],
        "statecraftCaseStudy": {
          "title": "Operation Barbarossa (1941): Stalin's Cognitive Trap",
          "historicalContext": "Despite over 80 specific intelligence warnings detailing Hitler's invasion plans, Stalin refused to mobilize Soviet border forces.",
          "strategicAnalysis": "Stalin was convinced the intelligence was British disinformation intended to provoke a war between Germany and the USSR.",
          "lessonsForStatecraft": "Rigid psychological models blind even absolute autocrats to impending existential attacks."
        },
        "banglaDiplomaticSummary": "রাষ্ট্রনায়করা বাস্তব পৃথিবীর চেয়ে তাদের মস্তিষ্কের ধারণার ওপর ভিত্তি করে সিদ্ধান্ত নেন। জারভিসের পারসেপশন থিওরি দেখায় কীভাবে বিশ্বাসগত গোঁড়ামি জাতীয় বিপর্যয় ডেকে আনে।",
        "analyticalSeminarQuestions": [
          "How can foreign ministry intelligence bureaus build institutional red-teams to break cognitive confirmation bias?",
          "Why do rival states perceive each other's defensive deployments as offensive preparations?"
        ],
        "keyReadings": [
          {
            "title": "Perception and Misperception in International Politics",
            "author": "Robert Jervis",
            "sourceType": "Academic Journal",
            "coreConcept": "Cognitive biases and misperception in war outbreaks."
          }
        ]
      }
    ],
    "checkpointQuiz": {
      "id": "quiz_p3",
      "pillarId": "pillar3_polpsych_individual",
      "title": "Pillar 3 Cognitive Statecraft Examination",
      "passingScorePercentage": 75,
      "questions": [
        {
          "id": "q3_1",
          "prompt": "According to Kahneman and Tversky's Prospect Theory, how do political leaders react when confronted with perceived territorial or prestige losses?",
          "options": [
            "They become hyper-rational and immediately compromise",
            "They become highly risk-acceptant, frequently gambling on dangerous escalation to avoid confirming the loss",
            "They universally surrender to avoid all further financial costs",
            "They disband their military forces"
          ],
          "correctIndex": 1,
          "academicRationale": "Prospect Theory demonstrates the domain of losses induces risk-seeking behavior, causing leaders to double down on failing strategies.",
          "banglaExplanation": "প্রসপেক্ট থিওরি অনুযায়ী ক্ষতি বা মর্যাদা হানির মুখে রাষ্ট্রনায়করা পরাজয় স্বীকার না করে আরও বিপজ্জনক সামরিক ঝুঁকি নিতে দ্বিধা করেন না।"
        }
      ]
    }
  },
  {
    "id": "pillar4_polpsych_group",
    "termId": "term2",
    "termTitle": "Term II: Psychological & Advisory Statecraft",
    "pillarNumber": 4,
    "title": "Advisory Systems, Groupthink & Crisis Management",
    "categoryBadge": "Advisory Councils & Crisis Dynamics",
    "shortDescription": "Analyze how small-group dynamics, Irving Janis's Groupthink, and National Security Council structures shape strategic decision-making.",
    "academicObjective": "Evaluate institutional mechanisms for Devil's Advocacy, red-teaming, and cognitive debiasing during geopolitical crises.",
    "competencyArea": "Cabinet Advisory Systems & Crisis Leadership",
    "lectures": [
      {
        "id": "lec4_1",
        "pillarId": "pillar4_polpsych_group",
        "lectureNumber": "4.1",
        "title": "Irving Janis's Groupthink & Cabinet Decision Failures",
        "subtitle": "Illusions of Invulnerability, Self-Censorship, and the Bay of Pigs",
        "readTimeMinutes": 20,
        "overview": "When national leadership councils become highly cohesive and isolated from independent critique, concurrence-seeking overrides realistic appraisal of alternatives. We analyze the 8 symptoms of Groupthink identified by Irving Janis and examine how formal National Security Council processes can institutionalize dissent.",
        "theoreticalFrameworks": [
          {
            "name": "Janis's Groupthink Symptoms",
            "concept": "Illusion of invulnerability, collective rationalization, belief in inherent morality, stereotyping out-groups, self-censorship, and mindguards.",
            "application": "Restructuring national security advisory boards with independent red-teams."
          },
          {
            "name": "Multiple Advocacy Framework (Alexander George)",
            "concept": "The Chief Executive deliberately structures the advisory system so that competing bureaucratic agencies present fully developed adversarial arguments.",
            "application": "Preventing single-agency dominance in defense procurement and strategic pacts."
          }
        ],
        "statecraftCaseStudy": {
          "title": "The Bay of Pigs Invasion (1961): Textbook Groupthink",
          "historicalContext": "President Kennedy and a tight circle of top advisors approved a flawed CIA plan to land 1,400 Cuban exiles without air cover.",
          "strategicAnalysis": "Advisors who harbored serious doubts practiced self-censorship, assuming everyone else was confident. The invasion collapsed in 72 hours.",
          "lessonsForStatecraft": "Consensus without rigorous institutionalized debate is the most dangerous hazard in high-stakes security statecraft."
        },
        "banglaDiplomaticSummary": "গ্রুপথিঙ্ক এমন এক মনস্তাত্ত্বিক ফাঁদ যেখানে শীর্ষ উপদেষ্টারা মতবিরোধ গোপন রেখে অন্ধ ঐকমত্য তৈরি করেন, যার ফলে কিউবায় বে অব পিগসের মতো মারাত্মক বিপর্যয় ঘটে।",
        "analyticalSeminarQuestions": [
          "How can a Prime Minister or President prevent cabinet members from acting as sycophantic 'mindguards'?",
          "What institutional rules distinguish productive multiple advocacy from paralyzing bureaucratic deadlock?"
        ],
        "keyReadings": [
          {
            "title": "Victims of Groupthink: A Psychological Study of Foreign-Policy Decisions",
            "author": "Irving L. Janis",
            "sourceType": "Classic Text",
            "coreConcept": "Group dynamics and structural failures in advisory councils."
          }
        ]
      }
    ],
    "checkpointQuiz": {
      "id": "quiz_p4",
      "pillarId": "pillar4_polpsych_group",
      "title": "Pillar 4 Advisory Systems & Groupthink Examination",
      "passingScorePercentage": 75,
      "questions": [
        {
          "id": "q4_1",
          "prompt": "Which institutional mechanism did Alexander George recommend to inoculate national security advisory councils against Groupthink?",
          "options": [
            "Banning all military officers from cabinet meetings",
            "Multiple Advocacy and institutionalized Devil's Advocacy",
            "Relying entirely on anonymous online opinion polls",
            "Restricting foreign policy decisions to a single hereditary monarch"
          ],
          "correctIndex": 1,
          "academicRationale": "Multiple advocacy ensures that diverse, competing viewpoints and structured devil's advocates rigorously critique policy options before approval.",
          "banglaExplanation": "আলেকজান্ডার জর্জ দেখিয়েছেন যে মাল্টিপল অ্যাডভোকেসি ও প্রাতিষ্ঠানিক ভিন্নমতের মাধ্যমে অন্ধ ঐকমত্য ভেঙে সঠিক সিদ্ধান্ত নেওয়া সম্ভব।"
        }
      ]
    }
  },
  {
    "id": "pillar5_security_strategy",
    "termId": "term3",
    "termTitle": "Term III: Security, Strategy & International Law",
    "pillarNumber": 5,
    "title": "Grand Strategy, Nuclear Deterrence & Maritime Hegemony",
    "categoryBadge": "Grand Strategy & Maritime Security",
    "shortDescription": "Master the principles of grand strategy, Thomas Schelling's arms and influence, Mahanian naval theory, and Indian Ocean security architectures.",
    "academicObjective": "Analyze nuclear stability-instability paradoxes, sea lines of communication (SLOCs), and middle-power asymmetric deterrence.",
    "competencyArea": "Military Strategy, Maritime Security & Deterrence Architecture",
    "lectures": [
      {
        "id": "lec5_1",
        "pillarId": "pillar5_security_strategy",
        "lectureNumber": "5.1",
        "title": "Mahan, Corbett & Naval Geostrategy in the Indian Ocean",
        "subtitle": "Sea Control, Choke Points, and Bay of Bengal Maritime Security",
        "readTimeMinutes": 22,
        "overview": "Alfred Thayer Mahan argued that national greatness is tied to command of the sea through decisive battle fleets. Julian Corbett refined this by emphasizing sea denial, commercial interdiction, and joint land-sea operations. This lecture applies these classical theories to the contemporary Indo-Pacific and Bay of Bengal maritime theater.",
        "theoreticalFrameworks": [
          {
            "name": "Mahanian Command of the Sea vs. Corbettian Sea Denial",
            "concept": "Command of the sea requires capital fleets to control oceanic transit; Sea Denial relies on submarines, anti-ship missiles, and mines to deny adversary access.",
            "application": "Structuring littoral coastal defense doctrines for emerging middle powers."
          },
          {
            "name": "Thomas Schelling's Strategic Coercion & Brinkmanship",
            "concept": "The manipulation of the shared risk of war ('the threat that leaves something to chance') as a bargaining instrument in asymmetric deterrence.",
            "application": "Deterring gray-zone maritime incursions without escalating to hot war."
          }
        ],
        "statecraftCaseStudy": {
          "title": "The 1971 Indian Ocean Naval Crisis: Task Force 74",
          "historicalContext": "During the 1971 Bangladesh Liberation War, the US dispatched the USS Enterprise task force into the Bay of Bengal, countered by Soviet nuclear-armed submarines.",
          "strategicAnalysis": "A classic demonstration of gunboat diplomacy and superpower naval counter-balancing in a regional conflict theater.",
          "lessonsForStatecraft": "Littoral nations must cultivate domestic naval deterrence and diplomatic agility to avoid becoming helpless pawns in great-power naval standoffs."
        },
        "banglaDiplomaticSummary": "মাহান ও কর্বেটের নৌ-কৌশল তত্ত্ব বঙ্গোপসাগরের ভূ-রাজনীতির মূল ভিত্তি। উপকূলীয় দেশ হিসেবে বাংলাদেশকে মাহানিয়ান আধিপত্যের বিরুদ্ধে কর্বেটিয়ান 'সি ডিনায়াল' এবং কোস্টাল ডিফেন্স গড়ে তুলতে হবে।",
        "analyticalSeminarQuestions": [
          "Why is Corbett's concept of 'Sea Denial' more cost-effective for a middle power than Mahanian fleet-on-fleet 'Command of the Sea'?",
          "How does the Malacca Strait choke point shape Chinese and Indian naval grand strategies?"
        ],
        "keyReadings": [
          {
            "title": "Some Principles of Maritime Strategy",
            "author": "Julian S. Corbett",
            "sourceType": "Classic Text",
            "coreConcept": "Sea denial, commerce protection, and joint maritime-land operations."
          }
        ]
      }
    ],
    "checkpointQuiz": {
      "id": "quiz_p5",
      "pillarId": "pillar5_security_strategy",
      "title": "Pillar 5 Grand Strategy & Maritime Security Examination",
      "passingScorePercentage": 75,
      "questions": [
        {
          "id": "q5_1",
          "prompt": "What is the strategic distinction between Mahan's 'Command of the Sea' and Corbett's 'Sea Denial'?",
          "options": [
            "Mahan emphasizes land-based tanks while Corbett focuses on cavalry",
            "Command of the sea aims for total oceanic control via decisive fleet battles, while Sea Denial aims to prevent an adversary from safely utilizing sea lanes",
            "Corbett rejected all naval forces in favor of economic boycotts",
            "Mahan argued that navies should only engage in peaceful tourist cruises"
          ],
          "correctIndex": 1,
          "academicRationale": "Corbett demonstrated that weaker or littoral navies can successfully achieve Sea Denial (via submarines, mines, and shore missiles) without needing an expensive battle fleet to achieve total Command.",
          "banglaExplanation": "মাহান চেয়েছিলেন বিশাল নৌবহর দিয়ে সমুদ্রের পূর্ণ নিয়ন্ত্রণ; অন্যদিকে কর্বেট দেখিয়েছেন উপকূলীয় দেশ মিসাইল ও সাবমেরিন দিয়ে শত্রুর সমুদ্র ব্যবহার আটকে দিতে পারে (সি ডিনায়াল)।"
        }
      ]
    }
  },
  {
    "id": "pillar6_intl_law",
    "termId": "term3",
    "termTitle": "Term III: Security, Strategy & International Law",
    "pillarNumber": 6,
    "title": "Public International Law, UNCLOS & Sovereign Lawfare",
    "categoryBadge": "International Jurisprudence & Lawfare",
    "shortDescription": "Understand the UN Charter, UNCLOS maritime regimes, sovereign immunity, and how middle powers use international courts for sovereign defense.",
    "academicObjective": "Analyze the ICJ, ITLOS, PCA arbitrations, transboundary water treaties, and international humanitarian law.",
    "competencyArea": "International Legal Regimes & Sovereign Lawfare",
    "lectures": [
      {
        "id": "lec6_1",
        "pillarId": "pillar6_intl_law",
        "lectureNumber": "6.1",
        "title": "UNCLOS & Maritime Delimitation: The Bangladesh Bay of Bengal Precedent",
        "subtitle": "ITLOS (2012 Myanmar) & PCA (2014 India) Landmark Jurisprudence",
        "readTimeMinutes": 22,
        "overview": "How a developing middle power leveraged binding international dispute resolution mechanisms to secure 118,813 sq km of maritime waters, an undisputed 200 NM Exclusive Economic Zone, and sovereign rights over the outer continental shelf without firing a single shot.",
        "theoreticalFrameworks": [
          {
            "name": "UNCLOS Equitable Maritime Delimitation Doctrine",
            "concept": "Equidistance lines must be adjusted for special circumstances (concave coastlines) to prevent cut-off effects that deprive coastal states of their legitimate EEZ.",
            "application": "Defending sovereign offshore hydrocarbon and living marine resources."
          },
          {
            "name": "Strategic Lawfare by Developing States",
            "concept": "Using compulsory dispute resolution under UNCLOS Part XV to neutralize power asymmetries and compel larger neighboring states into legal parity.",
            "application": "Resolving transboundary disputes through codified multilateral treaties."
          }
        ],
        "statecraftCaseStudy": {
          "title": "Bangladesh v. Myanmar (ITLOS 2012) & Bangladesh v. India (PCA 2014)",
          "historicalContext": "For four decades, bilateral maritime negotiations were deadlocked, blocking offshore energy exploration.",
          "strategicAnalysis": "Bangladesh initiated compulsory arbitration under UNCLOS Annex VII. ITLOS and PCA recognized the concavity of the Bangladesh coast, rejecting strict equidistance and granting full access to the outer continental shelf.",
          "lessonsForStatecraft": "Small and middle powers can achieve historic sovereign victories over larger powers when combining international legal mastery with firm diplomatic resolve."
        },
        "banglaDiplomaticSummary": "আন্তর্জাতিক সমুদ্র আইন (আনক্লস) এবং ২০১২ (আইটিএলওএস) ও ২০১৪ (পিসিএ) রায়ের মাধ্যমে বাংলাদেশ কোনো সংঘাত ছাড়া ১,১৮,৮১৩ বর্গকিলোমিটার সমুদ্রসীমা ও মহীসোপানের ওপর নিরঙ্কুশ সার্বভৌম অধিকার প্রতিষ্ঠা করেছে।",
        "analyticalSeminarQuestions": [
          "How did the ITLOS 2012 ruling redefine global jurisprudence regarding the delimitation of the continental shelf beyond 200 nautical miles?",
          "Why is compulsory dispute settlement under UNCLOS Part XV the most potent shield for developing coastal states?"
        ],
        "keyReadings": [
          {
            "title": "Dispute concerning delimitation of the maritime boundary between Bangladesh and Myanmar (Judgment)",
            "author": "ITLOS Reports",
            "sourceType": "Treaty/Charter",
            "coreConcept": "Maritime delimitation, concavity of coastline, and outer continental shelf rights."
          }
        ]
      }
    ],
    "checkpointQuiz": {
      "id": "quiz_p6",
      "pillarId": "pillar6_intl_law",
      "title": "Pillar 6 International Law & UNCLOS Examination",
      "passingScorePercentage": 75,
      "questions": [
        {
          "id": "q6_1",
          "prompt": "Why did the International Tribunal for the Law of the Sea (ITLOS) adjust the strict equidistance line in the 2012 Bangladesh-Myanmar dispute?",
          "options": [
            "To grant Myanmar sovereign control over all islands",
            "To correct the 'cut-off effect' caused by the concave shape of Bangladesh's coastline and ensure an equitable solution",
            "Because Bangladesh agreed to pay a cash settlement",
            "Because UNCLOS only applies to Atlantic Ocean states"
          ],
          "correctIndex": 1,
          "academicRationale": "ITLOS recognized that a concave coastline creates an inequitable cut-off effect under strict equidistance, requiring an angle adjustment to produce an equitable delimitation.",
          "banglaExplanation": "বাংলাদেশের উপকূল অবতল (ভেতরের দিকে বাঁকা) হওয়ায় সাধারণ সমদূরত্ব পদ্ধতি প্রয়োগ করলে বাংলাদেশ সমুদ্রবঞ্চিত হতো; আদালত এটি দূর করতে কোণ পরিবর্তন করে ন্যায়সঙ্গত সমাধান দেয়।"
        }
      ]
    }
  },
  {
    "id": "pillar7_ipe_geoeconomics",
    "termId": "term4",
    "termTitle": "Term IV: Geoeconomics & Regional Strategy",
    "pillarNumber": 7,
    "title": "Geoeconomics, Supply Chains & Weaponized Interdependence",
    "categoryBadge": "Geoeconomics & Trade Statecraft",
    "shortDescription": "Analyze how superpowers use SWIFT financial networks, trade tariffs, semiconductor controls, and infrastructure credit as instruments of coercion.",
    "academicObjective": "Examine Henry Farrell & Abraham Newman's weaponized interdependence, debt-trap statecraft, and trade diversification for middle powers.",
    "competencyArea": "Geoeconomics & Strategic Trade Policy",
    "lectures": [
      {
        "id": "lec7_1",
        "pillarId": "pillar7_ipe_geoeconomics",
        "lectureNumber": "7.1",
        "title": "Weaponized Interdependence & Global Hub-and-Spoke Networks",
        "subtitle": "SWIFT, Pan-Hub Chokepoints, and Sanctions Regimes",
        "readTimeMinutes": 20,
        "overview": "Farrell and Newman showed that globalization did not create a decentralized web, but an asymmetric hub-and-spoke network where central nodes (like dollar clearing and SWIFT) can be weaponized for surveillance and coercion.",
        "theoreticalFrameworks": [
          {
            "name": "Panopticon and Chokepoint Effects",
            "concept": "The Panopticon effect allows hub states to monitor global information flows; the Chokepoint effect allows them to sever adversaries from essential global networks.",
            "application": "Formulating economic resilience against secondary financial sanctions."
          },
          {
            "name": "Strategic Supply Chain Friend-Shoring",
            "concept": "Restructuring industrial supply chains to friendly partner states to avoid dependency on single geopolitical rivals.",
            "application": "Positioning national manufacturing as a trusted global supply chain alternative."
          }
        ],
        "statecraftCaseStudy": {
          "title": "The 2022 Central Bank Sanctions & SWIFT Disconnection of Russia",
          "historicalContext": "Following the Ukraine invasion, Western nations froze $300 billion in Russian sovereign reserves and severed major Russian banks from SWIFT.",
          "strategicAnalysis": "Demonstrated the unprecedented coercive power of central financial hubs, accelerating global interest in currency diversification and local-currency trade settlements.",
          "lessonsForStatecraft": "Foreign reserve management must balance liquidity, safety, and sovereign geopolitical risk across multiple global currencies and gold."
        },
        "banglaDiplomaticSummary": "বিশ্বায়ন সমান্তরাল জাল নয়, বরং পরাশক্তিদের নিয়ন্ত্রিত কেন্দ্রভিত্তিক ব্যবস্থা। সুইফট ও ডলার নেটওয়ার্ককে রাজনৈতিক হাতিয়ার হিসেবে ব্যবহারের মুখে মধ্যম শক্তির দেশগুলোকে বাণিজ্যে বহুমুখীকরণ করতে হবে।",
        "analyticalSeminarQuestions": [
          "How can emerging market economies insulate their foreign exchange reserves against weaponized financial chokepoints?",
          "What are the structural risks of over-reliance on single-source infrastructure financing?"
        ],
        "keyReadings": [
          {
            "title": "Weaponized Interdependence: How Global Economic Networks Shape State Coercion",
            "author": "Henry Farrell & Abraham L. Newman",
            "sourceType": "Academic Journal",
            "coreConcept": "Hub-and-spoke networks, chokepoint effect, and economic coercion."
          }
        ]
      }
    ],
    "checkpointQuiz": {
      "id": "quiz_p7",
      "pillarId": "pillar7_ipe_geoeconomics",
      "title": "Pillar 7 Geoeconomics & Supply Chains Examination",
      "passingScorePercentage": 75,
      "questions": [
        {
          "id": "q7_1",
          "prompt": "According to Farrell and Newman, what is the 'Chokepoint Effect' in weaponized interdependence?",
          "options": [
            "Building traffic jams in foreign capital cities",
            "The capacity of a state with jurisdiction over a central network hub (e.g. SWIFT or dollar clearing) to cut off an adversary's access to that network",
            "A military blockade of an airport using barbed wire",
            "A sudden shutdown of international sports tournaments"
          ],
          "correctIndex": 1,
          "academicRationale": "The Chokepoint effect describes how sovereign control over a centralized network hub enables a state to sever access for geopolitical leverage.",
          "banglaExplanation": "চোখপয়েন্ট প্রভাব হলো সুইফট বা ডলারের মতো কেন্দ্রীয় বৈশ্বিক নেটওয়ার্কের নিয়ন্ত্রণ নিয়ে শত্রুকে বিশ্ব অর্থনীতি থেকে বিচ্ছিন্ন করার ক্ষমতা।"
        }
      ]
    }
  },
  {
    "id": "pillar8_regional_bangladesh",
    "termId": "term4",
    "termTitle": "Term IV: Geoeconomics & Regional Strategy",
    "pillarNumber": 8,
    "title": "Bangladesh Grand Strategy, Neighborhood Statecraft & Indo-Pacific Balancing",
    "categoryBadge": "Bangladesh Grand Strategy & Regional Geopolitics",
    "shortDescription": "Formulate a forward-looking grand strategy for Bangladesh: sovereign equality, Teesta transboundary water diplomacy, Bay of Bengal security, and multi-vector hedging.",
    "academicObjective": "Analyze the post-2024 strategic transformation of Bangladesh foreign policy, SAARC revival, BIMSTEC integration, and maritime statecraft.",
    "competencyArea": "Bangladesh National Security Architecture & Regional Diplomacy",
    "lectures": [
      {
        "id": "lec8_1",
        "pillarId": "pillar8_regional_bangladesh",
        "lectureNumber": "8.1",
        "title": "The Post-2024 Strategic Realignment: The 'Bangladesh First' Doctrine",
        "subtitle": "Sovereign Equality, Dignity-Based Diplomacy, and Multipolar Balancing",
        "readTimeMinutes": 25,
        "overview": "The historic 2024 transformation in Bangladesh fundamentally reconfigured its foreign policy architecture. Moving away from asymmetric subservience, the new 'Bangladesh First' doctrine asserts absolute sovereign dignity, zero tolerance for border violence, strict reciprocity in bilateral ties, transboundary water rights under international law, and balanced multi-vector engagement across the US, China, India, EU, and the Islamic World.",
        "theoreticalFrameworks": [
          {
            "name": "The Bangladesh First Sovereign Doctrine",
            "concept": "Foreign policy grounded in national interest primacy, democratic domestic mandate, sovereign equality, and strict reciprocity in neighborhood relations.",
            "application": "Negotiating equitable transboundary river agreements and transit treaties."
          },
          {
            "name": "Omnidirectional Strategic Hedging",
            "concept": "Maximizing developmental investments from all great powers while refusing to enter exclusive military blocs that compromise sovereign autonomy.",
            "application": "Balancing infrastructure cooperation across China (BRI), Japan (BIG-B), and Western trade partnerships."
          }
        ],
        "statecraftCaseStudy": {
          "title": "Transboundary Water Governance: The Teesta & 54 Common Rivers",
          "historicalContext": "Bangladesh shares 54 transboundary rivers with India. The Teesta River Treaty has remained stalled for over a decade, causing severe dry-season desiccation in northern Bangladesh.",
          "strategicAnalysis": "A modern statecraft approach combines bilateral negotiations under the 1997 UN Watercourses Convention principles with the comprehensive domestic Teesta River Comprehensive Management Project to secure year-round agricultural water security.",
          "lessonsForStatecraft": "Water security is sovereign national security; diplomatic persistence must be paired with domestic infrastructure resilience."
        },
        "banglaDiplomaticSummary": "২০২৪-পরবর্তী বাংলাদেশের পররাষ্ট্রনীতির ভিত্তি হলো 'বাংলাদেশ ফার্স্ট ডকট্রিন'। সীমান্ত হত্যার অবসান, তিস্তাসহ ৫৪টি অভিন্ন নদীর ন্যায্য হিস্যা, এবং সার্বভৌম মর্যাদার ভিত্তিতে কোনো পরাশক্তির কাছে নত না হয়ে স্বাধীন কূটনৈতিক ভারসাম্য রক্ষা করা।",
        "analyticalSeminarQuestions": [
          "How does the 'Bangladesh First' doctrine redefine bilateral relations with neighboring countries on the basis of mutual respect and strict reciprocity?",
          "Why is the revitalization of SAARC and the strengthening of BIMSTEC essential for Bangladesh's role as a bridge between South and Southeast Asia?"
        ],
        "keyReadings": [
          {
            "title": "Bangladesh Foreign Policy & The Geopolitics of the Bay of Bengal",
            "author": "Daloyar Hassan Shishir",
            "sourceType": "Policy Report",
            "coreConcept": "Sovereign dignity, multi-vector hedging, and transboundary water governance."
          }
        ]
      }
    ],
    "checkpointQuiz": {
      "id": "quiz_p8",
      "pillarId": "pillar8_regional_bangladesh",
      "title": "Pillar 8 Bangladesh Grand Strategy Examination",
      "passingScorePercentage": 75,
      "questions": [
        {
          "id": "q8_1",
          "prompt": "What is the core operational principle of the post-2024 'Bangladesh First' foreign policy doctrine?",
          "options": [
            "Entering a formal military pact that surrenders port sovereignty to a foreign power",
            "Absolute sovereign equality, zero tolerance for border violence, strict reciprocity in bilateral relations, and multi-vector strategic hedging",
            "Severing all diplomatic missions worldwide",
            "Unilateral concession of all river water rights"
          ],
          "correctIndex": 1,
          "academicRationale": "The Bangladesh First doctrine is founded on sovereign equality, dignity-based diplomacy, reciprocal accountability, and multi-vector strategic autonomy.",
          "banglaExplanation": "বাংলাদেশ ফার্স্ট ডকট্রিনের মূল লক্ষ্য হলো সার্বভৌম সমমর্যাদা, সীমান্ত হত্যার অবসান, কঠোর পারস্পরিকতা এবং স্বাধীন পররাষ্ট্রনীতি রক্ষা।"
        }
      ]
    }
  }
];

export const CRISIS_SCENARIOS: CrisisScenario[] = [
  {
    "id": "scenario_maritime_standoff",
    "title": "Bay of Bengal & Saint Martin's Sovereign Maritime Standoff",
    "theater": "Bay of Bengal Littoral & Swatch of No Ground",
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
  },
  {
    "id": "scenario_teesta_hydro_crisis",
    "title": "Teesta Transboundary Hydro-Standoff & Upstream Diversion Emergency",
    "theater": "Teesta River Basin & Northern Agricultural Corridor",
    "threatLevel": "Defcon 3",
    "backgroundContext": "During peak Boro rice irrigation season, upstream barrage operators abruptly shut discharge gates, reducing river flow entering Bangladesh from 5,000 cusecs to under 300 cusecs. Simultaneously, a foreign power offers an emergency $1.2B unilateral infrastructure grant with strict security conditions attached.",
    "missionObjective": "Formulate a high-level diplomatic, economic, and transboundary water security strategy that restores river flow and initiates long-term river restoration without triggering regional economic retaliations.",
    "dilemmas": [
      {
        "id": "dil_t1",
        "stageNumber": 1,
        "stageTitle": "Addressing Acute River Desiccation and Farmer Distress",
        "urgentDilemma": "Northern farming districts face catastrophic crop failures within 10 days. Mass demonstrations are forming along the border. The Foreign Ministry must decide how to confront the upstream government.",
        "intelligenceBriefing": "Hydrological monitoring stations show upstream barrages are diverting 92% of dry-season flow into irrigation canals without prior Joint Rivers Commission (JRC) notification.",
        "options": [
          {
            "id": "opt_t1a",
            "actionTitle": "Convene Emergency JRC Ministerial Meeting with UN Watercourses Convention Citation",
            "actionDescription": "Formally invoke the 1997 UN Watercourses Convention principles of 'Equitable and Reasonable Utilization' and 'No Significant Harm', demanding immediate release of minimum ecological base-flow while dispatching emergency subsidized irrigation pumps to affected farmers.",
            "strategicDoctrine": "Multilateral Mediation",
            "projectedOutcomes": {
              "sovereigntyImpact": "Establishes a firm international legal basis without burning bilateral diplomatic channels.",
              "regionalStability": "Keeps negotiations within structured institutional river mechanisms.",
              "geoeconomicCost": "Saves the domestic rice crop while maintaining trade flows."
            },
            "scoreDelta": 96,
            "evaluationRationale": "Exemplary water diplomacy: anchors transboundary river claims in established international law while immediately mitigating domestic agricultural distress."
          },
          {
            "id": "opt_t1b",
            "actionTitle": "Unilateral Border Closure and Total Trade Embargo",
            "actionDescription": "Shut all land customs ports and halt bilateral trade until water is released.",
            "strategicDoctrine": "Deterrence Escalation",
            "projectedOutcomes": {
              "sovereigntyImpact": "Aggressive posture, but triggers retaliatory essential commodity embargoes.",
              "regionalStability": "Severe bilateral crisis with immense inflation in essential food items.",
              "geoeconomicCost": "Devastating economic disruption for domestic businesses."
            },
            "scoreDelta": 40,
            "evaluationRationale": "Self-defeating economic escalation that punishes domestic consumers without providing an institutional mechanism to release river water."
          }
        ]
      },
      {
        "id": "dil_t2",
        "stageNumber": 2,
        "stageTitle": "Financing the Comprehensive Teesta River Basin Project",
        "urgentDilemma": "Two rival superpowers offer competing financing packages for dredging, embankments, and water reservoirs along the 115 km Teesta stretch in Bangladesh. Superpower A offers a fast bilateral loan with exclusive rights, while Superpower B warns of grave geopolitical friction if Superpower A is selected.",
        "intelligenceBriefing": "Economic analysts confirm that accepting either unilateral package will anger the other superpower. A multilateral consortium led by the Asian Infrastructure Investment Bank (AIIB), Asian Development Bank (ADB), and domestic bond financing is proposed as an alternative.",
        "options": [
          {
            "id": "opt_t2a",
            "actionTitle": "Structure a Multi-Donor Co-Financed Sovereign Reservoir Project",
            "actionDescription": "Structure the Teesta project under a sovereign consortium (ADB, AIIB, World Bank, and National Sovereign Green Bonds) ensuring technical contracts are awarded via open transparent international competitive bidding.",
            "strategicDoctrine": "Omnidirectional Hedging",
            "projectedOutcomes": {
              "sovereigntyImpact": "Preserves absolute sovereign autonomy and shields national infrastructure from great-power proxy fights.",
              "regionalStability": "Neutralizes geopolitical zero-sum rivalry by engaging multilateral development institutions.",
              "geoeconomicCost": "High fiscal transparency and long-term concessional financing rates."
            },
            "scoreDelta": 98,
            "evaluationRationale": "Masterclass in omnidirectional hedging and geoeconomic statecraft: delivers vital national infrastructure without becoming indebted or geopolitically subservient to any single hegemon."
          },
          {
            "id": "opt_t2b",
            "actionTitle": "Accept the Fastest Unilateral Strategic Offer Under Secret Terms",
            "actionDescription": "Sign a fast-track closed-door agreement with the single highest bidder, accepting their military surveillance radars along the riverbank.",
            "strategicDoctrine": "Deterrence Escalation",
            "projectedOutcomes": {
              "sovereigntyImpact": "Severe loss of sovereign independence; invites immediate sanctions and military counter-moves.",
              "regionalStability": "Turns northern Bangladesh into a frontline contested zone.",
              "geoeconomicCost": "Heavy sovereign debt liability."
            },
            "scoreDelta": 20,
            "evaluationRationale": "Fatal violation of non-aligned statecraft: trades long-term national security for short-term project speed."
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
  },
  {
    "id": "ge_7",
    "prompt": "According to Irving Janis's Groupthink framework, what symptom describes when cabinet members actively suppress their own critical doubts to maintain an illusion of consensus?",
    "options": [
      "Direct Self-Censorship",
      "Mahanian Sea Control",
      "Structural Realist Anarchy",
      "Weaponized Interdependence"
    ],
    "correctIndex": 0,
    "academicRationale": "Janis identifies self-censorship as a prime symptom where individuals minimize the importance of their own doubts to avoid breaking group cohesion.",
    "banglaExplanation": "গ্রুপথিঙ্কের একটি প্রধান লক্ষণ হলো সেলফ-সেন্সরশিপ, যেখানে উপদেষ্টারা দলের ঐকমত্য ভাঙার ভয়ে নিজেদের দ্বিধা ও যৌক্তিক আপত্তি গোপন রাখেন।"
  },
  {
    "id": "ge_8",
    "prompt": "In Julian Corbett's maritime strategy doctrine, why is 'Sea Denial' especially critical for middle and coastal powers?",
    "options": [
      "Because it allows a coastal state to deny an adversary the safe use of sea lanes using coastal defenses and submarines without needing an expensive global carrier fleet",
      "Because Corbett believed all maritime trade should be permanently banned",
      "Because it eliminates the need for any domestic territorial border forces",
      "Because international law forbids coastal navies from operating patrol craft"
    ],
    "correctIndex": 0,
    "academicRationale": "Corbett demonstrated that coastal powers can deny maritime access to superior navies through asymmetric coastal and submarine deterrence.",
    "banglaExplanation": "কর্বেট দেখিয়েছেন যে দুর্বল বা মধ্যম শক্তির দেশগুলো সাবমেরিন ও কোস্টাল মিসাইল দিয়ে পরাশক্তির নৌবহরকে সমুদ্র ব্যবহারে বাধা দিতে পারে (সি ডিনায়াল)।"
  },
  {
    "id": "ge_9",
    "prompt": "In Farrell & Newman's 'Weaponized Interdependence', what is the 'Panopticon Effect'?",
    "options": [
      "The ability of a hub state to observe and gather strategic intelligence from global information/financial communications passing through its centralized nodes",
      "The physical construction of medieval naval watchtowers",
      "A complete ban on foreign language instruction in universities",
      "An automated system that replaces all diplomatic ambassadors with satellites"
    ],
    "correctIndex": 0,
    "academicRationale": "The Panopticon effect describes how states with jurisdiction over global communications hubs can monitor transactions and gain informational dominance.",
    "banglaExplanation": "প্যানঅপটিকন প্রভাব হলো বৈশ্বিক তথ্য বা আর্থিক নেটওয়ার্কের কেন্দ্র নিয়ন্ত্রণকারী রাষ্ট্রের তথ্য নজরদারি ও গোয়েন্দা সুবিধা অর্জনের ক্ষমতা।"
  },
  {
    "id": "ge_10",
    "prompt": "Under the 1997 UN Watercourses Convention, what two fundamental customary principles govern transboundary river basins?",
    "options": [
      "Absolute Territorial Sovereignty (Harmon Doctrine) and unilateral dam construction",
      "Equitable and Reasonable Utilization, and the Obligation Not to Cause Significant Harm",
      "Mandatory privatization of all freshwater aquifers to multinational corporations",
      "Immediate diversion of 100% of river flows to the uppermost riparian state"
    ],
    "correctIndex": 1,
    "academicRationale": "Articles 5 and 7 of the 1997 Convention establish equitable utilization and the prevention of significant harm as core pillars of international water law.",
    "banglaExplanation": "১৯৯৭ সালের জাতিসংঘ পানিসম্পদ কনভেনশনের মূল ভিত্তি হলো আন্তর্জাতিক নদীর ন্যায়সঙ্গত ও যুক্তিসঙ্গত ব্যবহার এবং ভাটির দেশের উল্লেখযোগ্য ক্ষতি না করার বাধ্যবাধকতা।"
  },
  {
    "id": "ge_11",
    "prompt": "What distinguishes 'Omnidirectional Hedging' from entering a formal collective defense military alliance?",
    "options": [
      "Hedging maintains multi-vector economic and security partnerships across multiple superpowers while avoiding legally binding mutual defense obligations that limit sovereign autonomy",
      "Hedging requires declaring war on all neighboring states simultaneously",
      "Hedging bans all foreign direct investment in national infrastructure",
      "Alliances never involve military troops or equipment"
    ],
    "correctIndex": 0,
    "academicRationale": "Omnidirectional hedging allows middle powers to extract developmental gains and security partnerships from multiple powers without becoming captive to one.",
    "banglaExplanation": "সর্বমুখী হেজিং হলো কোনো এক পরাশক্তির সামরিক বলয়ে বন্দি না হয়ে বহুমুখী অর্থনৈতিক ও কৌশলগত অংশীদারিত্বের মাধ্যমে সার্বভৌম স্বায়ত্তশাসন রক্ষা করা।"
  },
  {
    "id": "ge_12",
    "prompt": "In Graham Allison's analysis of the 1962 Cuban Missile Crisis, how did President Kennedy resolve the crisis without triggering a nuclear exchange?",
    "options": [
      "Launching an immediate unannounced nuclear first strike against Moscow",
      "Implementing a naval quarantine and utilizing secret diplomatic backchannels to trade Jupiter missiles in Turkey for Soviet missile withdrawal from Cuba",
      "Conceding total military defeat and resigning from office",
      "Surrendering the Panama Canal to Soviet naval forces"
    ],
    "correctIndex": 1,
    "academicRationale": "Kennedy combined a measured naval quarantine (Model I) with backchannel diplomacy (Model III) to provide an honorable diplomatic exit for Khrushchev.",
    "banglaExplanation": "কেনেডি সরাসরি বিমান হামলার বদলে নৌ-অবরোধ এবং গোপন কূটনৈতিক বার্তার মাধ্যমে তুরস্কে থাকা মার্কিন মিসাইল প্রত্যাহারের বিনিময়ে সংকট সমাধান করেন।"
  }
];
