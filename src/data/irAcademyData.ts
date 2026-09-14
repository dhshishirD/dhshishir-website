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
    "termTitle": "\ud83c\udfdb\ufe0f TERM I: FOUNDATIONS OF WORLD POLITICS & THEORETICAL PARADIGMS",
    "pillarNumber": 1,
    "title": "Theories of International Relations & Sovereign Statecraft",
    "categoryBadge": "Theoretical Paradigms & Sovereign Statecraft",
    "shortDescription": "Master classical realism, structural neorealism, liberal institutionalism, constructivism, and post-colonial/subaltern paradigms.",
    "academicObjective": "Analyze how systemic anarchy, material polarity, institutional regimes, intersubjective norms, and dependency structures dictate interstate power dynamics.",
    "competencyArea": "Structural Analysis & Grand Theoretical Modeling",
    "lectures": [
      {
        "id": "lec1_1",
        "pillarId": "pillar1_theories",
        "lectureNumber": "1.1",
        "title": "The Anarchic System & Classical Statecraft",
        "subtitle": "Thucydidean Realism, Machiavellian Prudence, Hobbesian State of Nature & Westphalian Sovereignty",
        "readTimeMinutes": 20,
        "overview": "World politics operates within an anarchic international system devoid of a central global enforcement agency. This lecture traces classical statecraft through Thucydides' Melian Dialogue, Machiavelli's ragione di stato, and Hobbes's Leviathan state of nature, culminating in the 1648 Peace of Westphalia which codified territorial sovereignty, legal equality of states, and non-interference.",
        "theoreticalFrameworks": [
          {
            "name": "Thucydidean Power Asymmetry",
            "concept": "The strong do what they have the power to do and the weak accept what they have to accept; morality cannot substitute for tangible deterrence.",
            "application": "Small and middle powers managing coercive bilateral pressure from regional superpowers."
          },
          {
            "name": "Westphalian Sovereign Compact (1648)",
            "concept": "Absolute territorial jurisdiction, legal sovereign equality, and prohibition of extraterritorial intervention.",
            "application": "Defending national sovereignty in multilateral forums against foreign political dictates."
          }
        ],
        "statecraftCaseStudy": {
          "title": "The Melian Dialogue (416 BCE)",
          "historicalContext": "During the Peloponnesian War, the Athenian armada besieged the neutral island of Melos demanding immediate submission.",
          "strategicAnalysis": "The Melians relied on abstract justice and hoped for Spartan rescue. Athens annihilated Melos, proving that neutrality without deterrence invites conquest.",
          "lessonsForStatecraft": "Diplomatic neutrality must be backed by credible national defense and tangible alliance commitments."
        },
        "banglaDiplomaticSummary": "\u0986\u09a8\u09cd\u09a4\u09b0\u09cd\u099c\u09be\u09a4\u09bf\u0995 \u09ac\u09cd\u09af\u09ac\u09b8\u09cd\u09a5\u09be \u09b8\u09cd\u09ac\u09ad\u09be\u09ac\u09a4\u0987 \u09a8\u09c8\u09b0\u09be\u099c\u09cd\u09af\u09ae\u09af\u09bc\u0964 \u09a5\u09c1\u09b8\u09bf\u09a1\u09bf\u09a1\u09bf\u09b8\u09c7\u09b0 \u09ae\u09c7\u09b2\u09bf\u09af\u09bc\u09be\u09a8 \u09b8\u0982\u09b2\u09be\u09aa \u09a5\u09c7\u0995\u09c7 \u0993\u09af\u09bc\u09c7\u09b8\u09cd\u099f\u09ab\u09be\u09b2\u09bf\u09af\u09bc\u09be\u09b0 \u099a\u09c1\u0995\u09cd\u09a4\u09bf \u09aa\u09b0\u09cd\u09af\u09a8\u09cd\u09a4 \u09ae\u09c2\u09b2 \u09b8\u09a4\u09cd\u09af \u09b9\u09b2\u09cb\u2014\u09b8\u09be\u09b0\u09cd\u09ac\u09ad\u09cc\u09ae \u0985\u09b8\u09cd\u09a4\u09bf\u09a4\u09cd\u09ac\u09c7\u09b0 \u099c\u09a8\u09cd\u09af \u09a8\u09c8\u09a4\u09bf\u0995 \u0986\u09b6\u09cd\u09ac\u09be\u09b8\u09c7\u09b0 \u099a\u09c7\u09af\u09bc\u09c7 \u09ac\u09be\u09b8\u09cd\u09a4\u09ac \u09b8\u09be\u09ae\u09b0\u09bf\u0995 \u09b8\u0995\u09cd\u09b7\u09ae\u09a4\u09be\u0987 \u09aa\u09cd\u09b0\u09a7\u09be\u09a8\u0964",
        "analyticalSeminarQuestions": [
          "How does the Westphalian principle of non-interference reconcile with contemporary unilateral sanctions?",
          "Why do small states face acute survival dilemmas in an anarchic structure?"
        ],
        "keyReadings": [
          {
            "title": "History of the Peloponnesian War",
            "author": "Thucydides",
            "sourceType": "Classic Text",
            "coreConcept": "Power asymmetry and strategic prudence."
          }
        ]
      },
      {
        "id": "lec1_2",
        "pillarId": "pillar1_theories",
        "lectureNumber": "1.2",
        "title": "Structural Realism & The Balance of Power",
        "subtitle": "Offensive vs. Defensive Realism (Mearsheimer vs. Waltz), Polarities & Power Transitions",
        "readTimeMinutes": 22,
        "overview": "Kenneth Waltz's Defensive Realism posits that systemic anarchy encourages states to maintain balance of power to ensure survival. Conversely, John Mearsheimer's Offensive Realism contends that states must relentlessly seek regional hegemony. We examine polarity dynamics (unipolar, bipolar, multipolar), security dilemmas, and Graham Allison's Thucydides Trap.",
        "theoreticalFrameworks": [
          {
            "name": "Waltzian Defensive Realism & Balancing",
            "concept": "States balance internally (military buildup) or externally (alliances) to prevent any single hegemon from dominating.",
            "application": "Middle powers balancing against overbearing regional hegemons."
          },
          {
            "name": "Mearsheimer's Offensive Realism & Stopping Power of Water",
            "concept": "Global hegemony is impossible across oceans; great powers pursue regional hegemony while acting as offshore balancers.",
            "application": "US-China maritime naval rivalry in the Indo-Pacific."
          }
        ],
        "statecraftCaseStudy": {
          "title": "The 1914 Security Dilemma & Outbreak of WWI",
          "historicalContext": "Rigid alliance commitments and railway mobilization timetables turned a localized Balkan assassination into continental catastrophe.",
          "strategicAnalysis": "Defensive mobilizations were indistinguishable from offensive preparations, creating irreversible spiral escalation.",
          "lessonsForStatecraft": "When defensive military capabilities are perceived as offensive preparations, arms races escape political control."
        },
        "banglaDiplomaticSummary": "\u0995\u09be\u09a0\u09be\u09ae\u09cb\u0997\u09a4 \u09ac\u09be\u09b8\u09cd\u09a4\u09ac\u09ac\u09be\u09a6 \u09a6\u09c7\u0996\u09be\u09af\u09bc \u09af\u09c7 \u0986\u09a8\u09cd\u09a4\u09b0\u09cd\u099c\u09be\u09a4\u09bf\u0995 \u09ac\u09bf\u09a8\u09cd\u09af\u09be\u09b8\u0987 \u09b0\u09be\u09b7\u09cd\u099f\u09cd\u09b0\u09c7\u09b0 \u0986\u099a\u09b0\u09a3 \u09a8\u09bf\u09af\u09bc\u09a8\u09cd\u09a4\u09cd\u09b0\u09a3 \u0995\u09b0\u09c7\u0964 \u0995\u09c7\u09a8\u09c7\u09a5 \u0993\u09af\u09bc\u09be\u09b2\u09cd\u099f\u099c\u09c7\u09b0 \u09a1\u09bf\u09ab\u09c7\u09a8\u09cd\u09b8\u09bf\u09ad \u09b0\u09bf\u09af\u09bc\u09be\u09b2\u09bf\u099c\u09ae \u09ad\u09be\u09b0\u09b8\u09be\u09ae\u09cd\u09af\u0995\u09c7 \u09ae\u09c2\u09b2 \u09ae\u09a8\u09c7 \u0995\u09b0\u09c7, \u0986\u09b0 \u09ae\u09c7\u09af\u09bc\u09be\u09b0\u09b6\u09be\u0987\u09ae\u09be\u09b0\u09c7\u09b0 \u0985\u09ab\u09c7\u09a8\u09cd\u09b8\u09bf\u09ad \u09b0\u09bf\u09af\u09bc\u09be\u09b2\u09bf\u099c\u09ae \u0986\u099e\u09cd\u099a\u09b2\u09bf\u0995 \u0986\u09a7\u09bf\u09aa\u09a4\u09cd\u09af\u09c7\u09b0 \u0985\u09aa\u09b0\u09bf\u09b9\u09be\u09b0\u09cd\u09af\u09a4\u09be \u09aa\u09cd\u09b0\u09ae\u09be\u09a3 \u0995\u09b0\u09c7\u0964",
        "analyticalSeminarQuestions": [
          "Is a multipolar international architecture inherently more prone to miscalculation than bipolarity?",
          "How does the stopping power of water influence naval strategy in the Bay of Bengal?"
        ],
        "keyReadings": [
          {
            "title": "Theory of International Politics",
            "author": "Kenneth N. Waltz",
            "sourceType": "Academic Journal",
            "coreConcept": "Systemic polarity and balance of power."
          }
        ]
      },
      {
        "id": "lec1_3",
        "pillarId": "pillar1_theories",
        "lectureNumber": "1.3",
        "title": "Liberal Institutionalism & Interdependence",
        "subtitle": "Complex Interdependence (Keohane & Nye), International Regimes & Democratic Peace",
        "readTimeMinutes": 20,
        "overview": "Robert Keohane and Joseph Nye demonstrated that transnational linkages, trade interdependence, and international regimes (UN, WTO, IMF) mitigate structural anarchy by reducing transaction costs, sharing information, and facilitating iterated reciprocity. We critique the Democratic Peace Proposition and the limits of institutionalism during great power friction.",
        "theoreticalFrameworks": [
          {
            "name": "Complex Interdependence & Multiple Channels",
            "concept": "Interstate, transgovernmental, and transnational ties diminish the utility of military force in high-interdependence theaters.",
            "application": "Regional economic integration and multilateral trade regimes."
          },
          {
            "name": "Iterated Tit-for-Tat Cooperation (Axelrod)",
            "concept": "Cooperation emerges under anarchy when states have a shadow of the future and commit to reciprocal enforcement.",
            "application": "Transboundary environmental and water treaty compliance."
          }
        ],
        "statecraftCaseStudy": {
          "title": "The Post-WWII Bretton Woods & GATT Architecture",
          "historicalContext": "Post-1945 multilateral institutions built rules-based global trade and financial stability under US hegemony.",
          "strategicAnalysis": "Institutional lock-in allowed multilateral cooperation to persist even as raw US relative material dominance declined ('After Hegemony').",
          "lessonsForStatecraft": "Multilateral institutional regimes provide middle powers with rule-based protections against unconstrained raw power."
        },
        "banglaDiplomaticSummary": "\u09b2\u09bf\u09ac\u09be\u09b0\u09c7\u09b2 \u09aa\u09cd\u09b0\u09be\u09a4\u09bf\u09b7\u09cd\u09a0\u09be\u09a8\u09bf\u0995\u09a4\u09be\u09ac\u09be\u09a6 \u09aa\u09cd\u09b0\u09ae\u09be\u09a3 \u0995\u09b0\u09c7 \u09af\u09c7 \u09ac\u09c8\u09b6\u09cd\u09ac\u09bf\u0995 \u09b8\u0982\u09b8\u09cd\u09a5\u09be (\u099c\u09be\u09a4\u09bf\u09b8\u0982\u0998, \u09ac\u09bf\u09b6\u09cd\u09ac \u09ac\u09be\u09a3\u09bf\u099c\u09cd\u09af \u09b8\u0982\u09b8\u09cd\u09a5\u09be) \u0993 \u0985\u09b0\u09cd\u09a5\u09a8\u09c8\u09a4\u09bf\u0995 \u09aa\u09be\u09b0\u09b8\u09cd\u09aa\u09b0\u09bf\u0995 \u09a8\u09bf\u09b0\u09cd\u09ad\u09b0\u09a4\u09be \u0986\u09a8\u09cd\u09a4\u09b0\u09cd\u099c\u09be\u09a4\u09bf\u0995 \u09a8\u09c8\u09b0\u09be\u099c\u09cd\u09af\u09c7\u09b0 \u09ae\u09a7\u09cd\u09af\u09c7\u0993 \u099f\u09c7\u0995\u09b8\u0987 \u09b8\u09b9\u09af\u09cb\u0997\u09bf\u09a4\u09be \u09a4\u09c8\u09b0\u09bf \u0995\u09b0\u09a4\u09c7 \u09aa\u09be\u09b0\u09c7\u0964",
        "analyticalSeminarQuestions": [
          "Can international institutions survive the withdrawal of their original hegemonic patron?",
          "Why does complex economic interdependence sometimes increase strategic vulnerability instead of guaranteeing peace?"
        ],
        "keyReadings": [
          {
            "title": "After Hegemony: Cooperation and Discord in the World Political Economy",
            "author": "Robert O. Keohane",
            "sourceType": "Classic Text",
            "coreConcept": "Regimes, information sharing, and institutional cooperation."
          }
        ]
      },
      {
        "id": "lec1_4",
        "pillarId": "pillar1_theories",
        "lectureNumber": "1.4",
        "title": "Constructivism, Identity & Norm Diffusion",
        "subtitle": "Social Construction of Anarchy (Wendt), Strategic Culture & Intersubjective Meanings",
        "readTimeMinutes": 22,
        "overview": "Alexander Wendt demonstrated that 'anarchy is what states make of it.' Constructivism analyzes how state identities, historical memories, strategic cultures, and international norms (like the nuclear taboo or territorial integrity norm) shape national interests and redefine what is considered legitimate statecraft.",
        "theoreticalFrameworks": [
          {
            "name": "Wendtian Cultures of Anarchy (Hobbesian, Lockean, Kantian)",
            "concept": "Interstate relationships are structured as enemy (Hobbesian), rival (Lockean), or friend (Kantian) through iterated social interaction.",
            "application": "Transforming hostile regional rivalries into institutional security communities."
          },
          {
            "name": "Norm Life Cycle & Cascades (Finnemore & Sikkink)",
            "concept": "Norm emergence by entrepreneurs leads to a tipping point/cascade and eventual internalization into domestic legal systems.",
            "application": "Global climate governance and sovereign human rights norms."
          }
        ],
        "statecraftCaseStudy": {
          "title": "The Evolution of the Nuclear Taboo (1945\u2013Present)",
          "historicalContext": "Since Nagasaki, nuclear weapons have not been used in warfare despite acute military crises.",
          "strategicAnalysis": "Thomas Schelling and Nina Tannenwald showed that a powerful normative and moral prohibition delegitimized nuclear first-use.",
          "lessonsForStatecraft": "Normative constraints and reputational legitimacy are potent structural boundaries in grand strategy."
        },
        "banglaDiplomaticSummary": "\u0997\u09a0\u09a8\u09ac\u09be\u09a6 \u0985\u09a8\u09c1\u09b8\u09be\u09b0\u09c7 \u09ac\u09bf\u09b6\u09cd\u09ac\u09b0\u09be\u099c\u09a8\u09c0\u09a4\u09bf \u09a8\u09bf\u099b\u0995 \u0985\u09b8\u09cd\u09a4\u09cd\u09b0\u09c7\u09b0 \u09a6\u09cd\u09ac\u09be\u09b0\u09be \u09a8\u09af\u09bc, \u09ac\u09b0\u0982 \u0990\u09a4\u09bf\u09b9\u09be\u09b8\u09bf\u0995 \u09aa\u09b0\u09bf\u099a\u09af\u09bc, \u0995\u09cc\u09b6\u09b2\u0997\u09a4 \u09b8\u0982\u09b8\u09cd\u0995\u09c3\u09a4\u09bf \u098f\u09ac\u0982 \u0986\u09a8\u09cd\u09a4\u09b0\u09cd\u099c\u09be\u09a4\u09bf\u0995 \u09ae\u09c2\u09b2\u09cd\u09af\u09ac\u09cb\u09a7\u09c7\u09b0 \u09ae\u09bf\u09a5\u09b8\u09cd\u0995\u09cd\u09b0\u09bf\u09af\u09bc\u09be\u09af\u09bc \u09b0\u09c2\u09aa \u09a8\u09c7\u09af\u09bc (\u0993\u09af\u09bc\u09c7\u09a8\u09cd\u09a1\u099f\u09c7\u09b0 \u09b8\u09be\u09ae\u09be\u099c\u09bf\u0995 \u09a4\u09a4\u09cd\u09a4\u09cd\u09ac)\u0964",
        "analyticalSeminarQuestions": [
          "How does a nation's historical trauma shape its enduring strategic culture?",
          "Can an established international norm collapse under aggressive revisionist challenge?"
        ],
        "keyReadings": [
          {
            "title": "Social Theory of International Politics",
            "author": "Alexander Wendt",
            "sourceType": "Academic Journal",
            "coreConcept": "Intersubjective identities and cultures of anarchy."
          }
        ]
      },
      {
        "id": "lec1_5",
        "pillarId": "pillar1_theories",
        "lectureNumber": "1.5",
        "title": "Critical, Structural & Post-Colonial Perspectives",
        "subtitle": "Dependency Theory, Core-Periphery Exploitation, Subaltern Realism & Non-Western IR",
        "readTimeMinutes": 22,
        "overview": "Mainstream Western IR often assumes equal sovereign units while ignoring imperial legacies. This lecture explores Dependency Theory (Frank, Wallerstein), Mohammed Ayoob's Subaltern Realism, and non-Western IR traditions (Kautilya's Arthashastra, Ibn Khaldun's Asabiyyah) to analyze internal regime security and global structural inequality.",
        "theoreticalFrameworks": [
          {
            "name": "Subaltern Realism (Mohammed Ayoob)",
            "concept": "Third World states prioritize internal regime security, state-building, and border consolidation over external balance of power.",
            "application": "Analyzing post-colonial state vulnerabilities and border management."
          },
          {
            "name": "World Systems Core-Periphery Paradigm (Wallerstein)",
            "concept": "Global capitalism reproduces unequal exchange between the industrial core, semi-periphery, and raw-material periphery.",
            "application": "Strategies for middle powers escaping raw-material and low-value supply chain traps."
          }
        ],
        "statecraftCaseStudy": {
          "title": "Decolonization & The Bandung Conference (1955)",
          "historicalContext": "29 Asian and African states convened in Bandung to reject Cold War alignment and assert Afro-Asian solidarity.",
          "strategicAnalysis": "Bandung birthed the Non-Aligned Movement (NAM), establishing the Ten Principles of peaceful coexistence and anti-imperial solidarity.",
          "lessonsForStatecraft": "Solidarity among developing nations provides collective diplomatic leverage against great power bloc politics."
        },
        "banglaDiplomaticSummary": "\u0989\u09a4\u09cd\u09a4\u09b0-\u0994\u09aa\u09a8\u09bf\u09ac\u09c7\u09b6\u09bf\u0995 \u0993 \u09b8\u09ae\u09be\u09b2\u09cb\u099a\u09a8\u09be\u09ae\u09c2\u09b2\u0995 \u09a4\u09a4\u09cd\u09a4\u09cd\u09ac \u09a6\u09c7\u0996\u09be\u09af\u09bc \u0995\u09c0\u09ad\u09be\u09ac\u09c7 \u09b8\u09be\u09ae\u09cd\u09b0\u09be\u099c\u09cd\u09af\u09ac\u09be\u09a6\u09c0 \u0995\u09be\u09a0\u09be\u09ae\u09cb \u0993 \u0985\u09ad\u09cd\u09af\u09a8\u09cd\u09a4\u09b0\u09c0\u09a3 \u0985\u09b8\u09cd\u09a5\u09bf\u09a4\u09bf\u09b6\u09c0\u09b2\u09a4\u09be \u09a4\u09c3\u09a4\u09c0\u09af\u09bc \u09ac\u09bf\u09b6\u09cd\u09ac\u09c7\u09b0 \u09a8\u09bf\u09b0\u09be\u09aa\u09a4\u09cd\u09a4\u09be\u0995\u09c7 \u09aa\u09cd\u09b0\u09ad\u09be\u09ac\u09bf\u09a4 \u0995\u09b0\u09c7 (\u0986\u0987\u09af\u09bc\u09c1\u09ac\u09c7\u09b0 \u09b8\u09be\u09ac\u0985\u09b2\u09cd\u099f\u09be\u09b0\u09cd\u09a8 \u09b0\u09bf\u09af\u09bc\u09be\u09b2\u09bf\u099c\u09ae)\u0964",
        "analyticalSeminarQuestions": [
          "Why is internal state-making often the primary security challenge for post-colonial middle powers?",
          "How can non-Western IR traditions enrich modern strategic diplomacy?"
        ],
        "keyReadings": [
          {
            "title": "The Third World Security Predicament",
            "author": "Mohammed Ayoob",
            "sourceType": "Academic Journal",
            "coreConcept": "Subaltern realism and internal state consolidation."
          }
        ]
      }
    ],
    "checkpointQuiz": {
      "id": "quiz_p1",
      "pillarId": "pillar1_theories",
      "title": "Seminar Checkpoint 1: Analytical Critique \u2014 Re-evaluating Hegemonic Stability Theory in a Fragmenting Global Order",
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
          "banglaExplanation": "\u0993\u09af\u09bc\u09be\u09b2\u09cd\u099f\u099c\u09c7\u09b0 \u09a8\u09bf\u0993\u09b0\u09bf\u09af\u09bc\u09be\u09b2\u09bf\u099c\u09ae \u0985\u09a8\u09c1\u09b8\u09be\u09b0\u09c7 \u09ac\u09cd\u09af\u0995\u09cd\u09a4\u09bf \u099a\u09b0\u09bf\u09a4\u09cd\u09b0 \u09a8\u09af\u09bc, \u09ac\u09b0\u0982 \u0986\u09a8\u09cd\u09a4\u09b0\u09cd\u099c\u09be\u09a4\u09bf\u0995 \u0995\u09be\u09a0\u09be\u09ae\u09cb\u09b0 \u09a8\u09c8\u09b0\u09be\u099c\u09cd\u09af \u0993 \u09ac\u09b8\u09cd\u09a4\u09c1\u0997\u09a4 \u09b8\u0995\u09cd\u09b7\u09ae\u09a4\u09be\u09b0 \u09ac\u09bf\u09a8\u09cd\u09af\u09be\u09b8\u0987 \u09b0\u09be\u09b7\u09cd\u099f\u09cd\u09b0\u09c7\u09b0 \u0986\u099a\u09b0\u09a3 \u09a8\u09bf\u09af\u09bc\u09a8\u09cd\u09a4\u09cd\u09b0\u09a3 \u0995\u09b0\u09c7\u0964"
        },
        {
          "id": "q1_2",
          "prompt": "What did Alexander Wendt mean by the famous constructivist dictum 'Anarchy is what states make of it'?",
          "options": [
            "Anarchy automatically forces all states into total nuclear warfare",
            "The nature of international anarchy is socially constructed by the shared identities, perceptions, and practices of states",
            "Anarchy does not exist because world government is already established",
            "Anarchy is purely a financial banking system"
          ],
          "correctIndex": 1,
          "academicRationale": "Wendt argues anarchy does not have a fixed material logic; social interaction determines whether states view each other as enemies, rivals, or friends.",
          "banglaExplanation": "\u0993\u09af\u09bc\u09c7\u09a8\u09cd\u09a1\u099f \u09a6\u09c7\u0996\u09bf\u09af\u09bc\u09c7\u099b\u09c7\u09a8 \u09af\u09c7 \u09a8\u09c8\u09b0\u09be\u099c\u09cd\u09af \u0995\u09cb\u09a8\u09cb \u0985\u09aa\u09b0\u09bf\u09ac\u09b0\u09cd\u09a4\u09a8\u09c0\u09af\u09bc \u09b6\u09a4\u09cd\u09b0\u09c1\u09a4\u09be \u09a8\u09af\u09bc; \u09b0\u09be\u09b7\u09cd\u099f\u09cd\u09b0\u09c7\u09b0 \u09ac\u09bf\u09b6\u09cd\u09ac\u09be\u09b8, \u0986\u099a\u09b0\u09a3 \u0993 \u09aa\u09be\u09b0\u09b8\u09cd\u09aa\u09b0\u09bf\u0995 \u09aa\u09b0\u09bf\u099a\u09af\u09bc\u09c7\u09b0 \u09ae\u09be\u09a7\u09cd\u09af\u09ae\u09c7\u0987 \u09b8\u09ae\u09cd\u09aa\u09b0\u09cd\u0995\u09c7\u09b0 \u09a7\u09b0\u09a8 \u09a4\u09c8\u09b0\u09bf \u09b9\u09af\u09bc\u0964"
        }
      ]
    }
  },
  {
    "id": "pillar2_fpa",
    "termId": "term1",
    "termTitle": "\ud83c\udfdb\ufe0f TERM I: FOUNDATIONS OF WORLD POLITICS & THEORETICAL PARADIGMS",
    "pillarNumber": 2,
    "title": "Foreign Policy Analysis & Comparative Diplomatic Systems",
    "categoryBadge": "Foreign Policy Decision Systems",
    "shortDescription": "Analyze the domestic, bureaucratic, and systemic determinants of foreign policy, Graham Allison's decision models, Two-Level Games, and middle-power diplomacy.",
    "academicObjective": "Master levels of analysis, bureaucratic bargaining, domestic political coalitions, embassy statecraft, and small/middle power strategic autonomy.",
    "competencyArea": "Foreign Policy Architecture & Bilateral Statecraft",
    "lectures": [
      {
        "id": "lec2_1",
        "pillarId": "pillar2_fpa",
        "lectureNumber": "2.1",
        "title": "Levels of Analysis in Foreign Policy",
        "subtitle": "Systemic, Domestic, Bureaucratic & Individual Determinants (Waltz's Three Images & Allison's Decision Models)",
        "readTimeMinutes": 20,
        "overview": "Foreign Policy Analysis bridges the gap between abstract systemic theory and concrete state action. We dissect Kenneth Waltz's Three Images (Individual, State, International System) and Graham Allison's three seminal decision models (Rational Actor, Organizational Behavior SOPs, Bureaucratic Politics).",
        "theoreticalFrameworks": [
          {
            "name": "Allison's Model II (Organizational Process)",
            "concept": "Decisions are standard operating procedures (SOPs) executed by pre-existing organizational routines rather than optimized grand choices.",
            "application": "Auditing military and diplomatic crisis readiness protocols."
          },
          {
            "name": "Allison's Model III (Bureaucratic Politics)",
            "concept": "Foreign policy outcomes reflect compromises and political bargaining among competing departmental chiefs ('Where you stand depends on where you sit').",
            "application": "Resolving inter-agency friction between Defense, Foreign Affairs, and Intelligence ministries."
          }
        ],
        "statecraftCaseStudy": {
          "title": "EXCOMM Decision Dynamics in the Cuban Missile Crisis (1962)",
          "historicalContext": "When Soviet nuclear missiles were discovered in Cuba, President Kennedy convened EXCOMM to deliberate military vs diplomatic responses.",
          "strategicAnalysis": "Air Force chiefs pushed for preemptive air strikes (Model I/II), while diplomatic advisors crafted the naval blockade and backchannel Turkish missile trade (Model III).",
          "lessonsForStatecraft": "Leaders must structure advisory councils to cultivate devil's advocacy and prevent single-agency operational lock-in."
        },
        "banglaDiplomaticSummary": "\u09aa\u09b0\u09b0\u09be\u09b7\u09cd\u099f\u09cd\u09b0\u09a8\u09c0\u09a4\u09bf \u09ac\u09bf\u09b6\u09cd\u09b2\u09c7\u09b7\u09a3 \u09a6\u09c7\u0996\u09be\u09af\u09bc \u0995\u09c0\u09ad\u09be\u09ac\u09c7 \u09ac\u09cd\u09af\u0995\u09cd\u09a4\u09bf, \u0986\u09ae\u09b2\u09be\u09a4\u09a8\u09cd\u09a4\u09cd\u09b0 \u098f\u09ac\u0982 \u0986\u09a8\u09cd\u09a4\u09b0\u09cd\u099c\u09be\u09a4\u09bf\u0995 \u0995\u09be\u09a0\u09be\u09ae\u09cb\u09b0 \u09ae\u09bf\u09a5\u09b8\u09cd\u0995\u09cd\u09b0\u09bf\u09af\u09bc\u09be\u09af\u09bc \u09b0\u09be\u09b7\u09cd\u099f\u09cd\u09b0\u09c7\u09b0 \u09b8\u09bf\u09a6\u09cd\u09a7\u09be\u09a8\u09cd\u09a4 \u0997\u09c3\u09b9\u09c0\u09a4 \u09b9\u09af\u09bc (\u0985\u09cd\u09af\u09be\u09b2\u09bf\u09b8\u09a8\u09c7\u09b0 \u09e9\u099f\u09bf \u09a1\u09bf\u09b8\u09bf\u09b6\u09a8 \u09ae\u09a1\u09c7\u09b2)\u0964",
        "analyticalSeminarQuestions": [
          "How do Standard Operating Procedures (SOPs) constrain diplomatic flexibility in fast-moving crises?",
          "Why is the rational actor model insufficient to explain contradictory foreign policy decisions?"
        ],
        "keyReadings": [
          {
            "title": "Essence of Decision: Explaining the Cuban Missile Crisis",
            "author": "Graham T. Allison & Philip Zelikow",
            "sourceType": "Academic Journal",
            "coreConcept": "Three conceptual models of crisis decision-making."
          }
        ]
      },
      {
        "id": "lec2_2",
        "pillarId": "pillar2_fpa",
        "lectureNumber": "2.2",
        "title": "Domestic Politics, Public Opinion & Interest Coalitions",
        "subtitle": "The Two-Level Game Framework, Legislative-Executive Friction & Media Impact (Putnam)",
        "readTimeMinutes": 22,
        "overview": "Foreign policy is never purely external. Robert Putnam's Two-Level Game framework conceptualizes diplomacy as simultaneous bargaining across Level I (interstate negotiating table) and Level II (domestic ratifying constituencies). We explore the role of public opinion, parliamentary oversight, and media dynamics.",
        "theoreticalFrameworks": [
          {
            "name": "Putnam's Win-Set Concept",
            "concept": "The set of all possible Level I international agreements that would gain the necessary majority ratification at Level II domestic politics.",
            "application": "Designing transboundary river, transit, and trade pacts that have durable domestic support."
          },
          {
            "name": "The CNN / Social Media Effect",
            "concept": "24/7 real-time broadcast and viral digital media force rapid emotional reactions from leaders, compressing deliberation time.",
            "application": "Managing strategic communications during border skirmishes and hostage crises."
          }
        ],
        "statecraftCaseStudy": {
          "title": "The Collapse of the 2011 Teesta Water Sharing Agreement",
          "historicalContext": "A finalized draft agreement on the Teesta River was scheduled for signing in Dhaka in September 2011.",
          "strategicAnalysis": "Opposition from the provincial West Bengal government (Level II) fractured the central government's Level I negotiating position, scuttling the treaty at the last hour.",
          "lessonsForStatecraft": "International treaties fail when chief negotiators ignore or miscalculate domestic sub-federal and legislative win-sets."
        },
        "banglaDiplomaticSummary": "\u09aa\u09c1\u099f\u09a8\u09be\u09ae\u09c7\u09b0 \u099f\u09c1-\u09b2\u09c7\u09ad\u09c7\u09b2 \u0997\u09c7\u09ae \u0985\u09a8\u09c1\u09af\u09be\u09af\u09bc\u09c0 \u09af\u09c7\u0995\u09cb\u09a8\u09cb \u0986\u09a8\u09cd\u09a4\u09b0\u09cd\u099c\u09be\u09a4\u09bf\u0995 \u099a\u09c1\u0995\u09cd\u09a4\u09bf \u0995\u09be\u09b0\u09cd\u09af\u0995\u09b0 \u09b9\u09a4\u09c7 \u09b9\u09b2\u09c7 \u09a4\u09be \u0985\u09ad\u09cd\u09af\u09a8\u09cd\u09a4\u09b0\u09c0\u09a3 \u09b0\u09be\u099c\u09a8\u09c8\u09a4\u09bf\u0995 \u0985\u09a8\u09c1\u09ae\u09cb\u09a6\u09a8 (\u0989\u0987\u09a8-\u09b8\u09c7\u099f) \u09b2\u09be\u09ad \u0995\u09b0\u09a4\u09c7 \u09b9\u09ac\u09c7, \u09af\u09be \u09a4\u09bf\u09b8\u09cd\u09a4\u09be \u099a\u09c1\u0995\u09cd\u09a4\u09bf\u09b0 \u0995\u09cd\u09b7\u09c7\u09a4\u09cd\u09b0\u09c7 \u09b8\u09cd\u09aa\u09b7\u09cd\u099f\u09ad\u09be\u09ac\u09c7 \u09aa\u09cd\u09b0\u09ae\u09be\u09a3\u09bf\u09a4\u0964",
        "analyticalSeminarQuestions": [
          "How can diplomats expand their domestic Level II win-sets without compromising sovereign national interests?",
          "How does public domestic nationalism constrain diplomatic compromise during territorial disputes?"
        ],
        "keyReadings": [
          {
            "title": "Diplomacy and Domestic Politics: The Logic of Two-Level Games",
            "author": "Robert D. Putnam",
            "sourceType": "Academic Journal",
            "coreConcept": "Level I and Level II bargaining and win-set dynamics."
          }
        ]
      },
      {
        "id": "lec2_3",
        "pillarId": "pillar2_fpa",
        "lectureNumber": "2.3",
        "title": "Diplomatic Machinery & Bilateral Statecraft",
        "subtitle": "Foreign Ministries, Vienna Convention, Embassy Statecraft, Communiqu\u00e9s & Backchannel Diplomacy",
        "readTimeMinutes": 20,
        "overview": "This lecture examines the physical and institutional apparatus of statecraft: diplomatic immunities under the 1961 Vienna Convention on Diplomatic Relations, the drafting of joint communiqu\u00e9s, demarches, Track 1.5/Track 2 diplomacy, and the use of secret backchannels during high-stakes brinkmanship.",
        "theoreticalFrameworks": [
          {
            "name": "The Vienna Convention Diplomatic Regime (1961)",
            "concept": "Inviolability of diplomatic missions, diplomatic pouch protections, and absolute immunity from criminal jurisdiction.",
            "application": "Safeguarding national envoys and communications in hostile sovereign territory."
          },
          {
            "name": "Track 1.5 and Track 2 Backchanneling",
            "concept": "Unofficial, non-binding dialogues between retired diplomats, academics, and intelligence officials to test compromise formulas without public political fallout.",
            "application": "De-escalating frozen interstate conflicts."
          }
        ],
        "statecraftCaseStudy": {
          "title": "Kissinger's 1971 Secret Backchannel Mission to Beijing",
          "historicalContext": "Using Pakistan as an intermediary, Henry Kissinger conducted a secret trip to Beijing to negotiate the historic US-China rapprochement.",
          "strategicAnalysis": "Bypassed standard State Department bureaucracy to execute a structural balance-of-power realignment against the Soviet Union.",
          "lessonsForStatecraft": "Strategic secrecy and trusted backchannels are indispensable for historic diplomatic breakthroughs."
        },
        "banglaDiplomaticSummary": "\u0995\u09c2\u099f\u09a8\u09c8\u09a4\u09bf\u0995 \u09af\u09a8\u09cd\u09a4\u09cd\u09b0\u09aa\u09be\u09a4\u09bf\u09b0 \u09b8\u09a0\u09bf\u0995 \u09aa\u09b0\u09bf\u099a\u09be\u09b2\u09a8\u09be, \u09ad\u09bf\u09af\u09bc\u09c7\u09a8\u09be \u0995\u09a8\u09ad\u09c7\u09a8\u09b6\u09a8 \u09e7\u09ef\u09ec\u09e7-\u098f\u09b0 \u0986\u0987\u09a8\u09bf \u09b8\u09c1\u09b0\u0995\u09cd\u09b7\u09be \u098f\u09ac\u0982 \u0997\u09cb\u09aa\u09a8 \u09ac\u09cd\u09af\u09be\u0995\u099a\u09cd\u09af\u09be\u09a8\u09c7\u09b2 \u0995\u09c2\u099f\u09a8\u09c0\u09a4\u09bf \u099c\u099f\u09bf\u09b2 \u09ad\u09c2-\u09b0\u09be\u099c\u09a8\u09c8\u09a4\u09bf\u0995 \u09b8\u0982\u0995\u099f\u09c7 \u0990\u09a4\u09bf\u09b9\u09be\u09b8\u09bf\u0995 \u09b8\u09be\u09ab\u09b2\u09cd\u09af \u098f\u09a8\u09c7 \u09a6\u09bf\u09a4\u09c7 \u09aa\u09be\u09b0\u09c7\u0964",
        "analyticalSeminarQuestions": [
          "What are the risks of over-relying on secret backchannels at the expense of professional foreign service institutions?",
          "How has digital communication transformed the traditional role of resident ambassadors?"
        ],
        "keyReadings": [
          {
            "title": "Diplomacy",
            "author": "Henry Kissinger",
            "sourceType": "Classic Text",
            "coreConcept": "Diplomatic history, balance of power, and statecraft machinery."
          }
        ]
      },
      {
        "id": "lec2_4",
        "pillarId": "pillar2_fpa",
        "lectureNumber": "2.4",
        "title": "Small and Middle Power Diplomacy",
        "subtitle": "Hedging, Balancing, Bandwagoning & Strategic Autonomy Strategies for Non-Hegemonic States",
        "readTimeMinutes": 22,
        "overview": "Small and middle powers face acute vulnerabilities in a competitive international system. This lecture explores the strategic toolkit of non-hegemonic states: hard balancing vs soft balancing, bandwagoning, omnidirectional hedging, niche diplomacy, and the institutional pursuit of strategic autonomy.",
        "theoreticalFrameworks": [
          {
            "name": "Omnidirectional Strategic Hedging",
            "concept": "Simultaneously cultivating economic, military, and diplomatic partnerships with competing superpowers without formal exclusive alignment.",
            "application": "Littoral Indo-Pacific states balancing ties between Washington, Beijing, New Delhi, and Tokyo."
          },
          {
            "name": "Niche Diplomacy & Norm Entrepreneurship",
            "concept": "Focusing diplomatic resources on specific global issues (e.g. UN Peacekeeping, climate justice, maritime law) to amplify international prestige and leverage.",
            "application": "Bangladesh's global leadership in climate vulnerability advocacy and UN Peacekeeping operations."
          }
        ],
        "statecraftCaseStudy": {
          "title": "Singapore's Grand Strategy of Dynamic Omnidirectional Hedging",
          "historicalContext": "As a tiny sovereign city-state in Southeast Asia, Singapore engineered a sophisticated multi-vector balance of power.",
          "strategicAnalysis": "Maintains deep military logistics ties with the US while remaining China's largest foreign investor and an active ASEAN anchor.",
          "lessonsForStatecraft": "Small states survive not by weakness, but by becoming indispensable to all major powers through impeccable strategic clarity."
        },
        "banglaDiplomaticSummary": "\u0995\u09cd\u09b7\u09c1\u09a6\u09cd\u09b0 \u0993 \u09ae\u09a7\u09cd\u09af\u09ae \u09b6\u0995\u09cd\u09a4\u09bf\u09b0 \u09a6\u09c7\u09b6\u0997\u09c1\u09b2\u09cb\u09b0 \u09aa\u09b0\u09b0\u09be\u09b7\u09cd\u099f\u09cd\u09b0\u09a8\u09c0\u09a4\u09bf\u09b0 \u099a\u09be\u09ac\u09bf\u0995\u09be\u09a0\u09bf \u09b9\u09b2\u09cb \u0995\u09cb\u09a8\u09cb \u098f\u0995\u0995 \u09b6\u0995\u09cd\u09a4\u09bf\u09b0 \u09ac\u09b2\u09af\u09bc\u09c7 \u09ac\u09a8\u09cd\u09a6\u09bf \u09a8\u09be \u09b9\u09af\u09bc\u09c7 \u09ac\u09b9\u09c1\u09ae\u09c1\u0996\u09c0 \u09b9\u09c7\u099c\u09bf\u0982, \u09b8\u09ae\u09ae\u09b0\u09cd\u09af\u09be\u09a6\u09be\u09b0 \u0995\u09cc\u09b6\u09b2\u0997\u09a4 \u09b8\u09cd\u09ac\u09be\u09af\u09bc\u09a4\u09cd\u09a4\u09b6\u09be\u09b8\u09a8 \u098f\u09ac\u0982 \u09a8\u09bf\u09b6 \u09a1\u09bf\u09aa\u09cd\u09b2\u09cb\u09ae\u09cd\u09af\u09be\u09b8\u09bf \u09aa\u09b0\u09bf\u099a\u09be\u09b2\u09a8\u09be \u0995\u09b0\u09be\u0964",
        "analyticalSeminarQuestions": [
          "Under what conditions does hedging collapse into dangerous forced alignment?",
          "How can middle powers leverage multilateral organizations to constrain regional hegemons?"
        ],
        "keyReadings": [
          {
            "title": "Small States in World Politics",
            "author": "Jeanne A.K. Hey",
            "sourceType": "Academic Journal",
            "coreConcept": "Middle power constraints and asymmetric diplomatic strategies."
          }
        ]
      }
    ],
    "checkpointQuiz": {
      "id": "quiz_p2",
      "pillarId": "pillar2_fpa",
      "title": "Seminar Checkpoint 2: Foreign Policy Audit \u2014 Evaluating Strategic Autonomy in Middle-Power Foreign Policy",
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
          "banglaExplanation": "\u0985\u09cd\u09af\u09be\u09b2\u09bf\u09b8\u09a8\u09c7\u09b0 \u09ae\u09a1\u09c7\u09b2 \u09e9-\u098f \u09ac\u09b2\u09be \u09b9\u09af\u09bc \u098f\u0995\u099c\u09a8 \u0995\u09b0\u09cd\u09ae\u0995\u09b0\u09cd\u09a4\u09be \u0995\u09cb\u09a8 \u09a6\u09aa\u09cd\u09a4\u09b0\u09c7\u09b0 \u09a6\u09be\u09af\u09bc\u09bf\u09a4\u09cd\u09ac\u09c7 \u0986\u099b\u09c7\u09a8 \u09a4\u09be\u09b0 \u0993\u09aa\u09b0 \u09a8\u09bf\u09b0\u09cd\u09ad\u09b0 \u0995\u09b0\u09c7 \u09a4\u09bf\u09a8\u09bf \u0995\u09cb\u09a8 \u09a8\u09c0\u09a4\u09bf \u09b8\u09ae\u09b0\u09cd\u09a5\u09a8 \u0995\u09b0\u09ac\u09c7\u09a8\u0964"
        },
        {
          "id": "q2_2",
          "prompt": "Under Robert Putnam's Two-Level Game Theory, what is a 'Win-Set'?",
          "options": [
            "The total number of medals won by diplomats at the Olympics",
            "The set of all possible international (Level I) agreements that would gain the necessary ratification in domestic politics (Level II)",
            "A military secret code used by naval ships",
            "A list of all foreign embassies in a capital city"
          ],
          "correctIndex": 1,
          "academicRationale": "Putnam defines a win-set as the collection of Level I international bargains that domestic Level II ratifying coalitions will accept.",
          "banglaExplanation": "\u09aa\u09c1\u099f\u09a8\u09be\u09ae\u09c7\u09b0 \u09b8\u0982\u099c\u09cd\u099e\u09be\u09af\u09bc \u0989\u0987\u09a8-\u09b8\u09c7\u099f \u09b9\u09b2\u09cb \u0986\u09a8\u09cd\u09a4\u09b0\u09cd\u099c\u09be\u09a4\u09bf\u0995 \u099a\u09c1\u0995\u09cd\u09a4\u09bf\u09b0 \u09b8\u09c7\u0987 \u0985\u0982\u09b6 \u09af\u09be \u09a8\u09bf\u099c \u09a6\u09c7\u09b6\u09c7\u09b0 \u0985\u09ad\u09cd\u09af\u09a8\u09cd\u09a4\u09b0\u09c0\u09a3 \u09b0\u09be\u099c\u09a8\u09c8\u09a4\u09bf\u0995 \u09b6\u0995\u09cd\u09a4\u09bf \u0985\u09a8\u09c1\u09ae\u09cb\u09a6\u09a8 \u0995\u09b0\u09a4\u09c7 \u09b0\u09be\u099c\u09bf \u09a5\u09be\u0995\u09c7\u0964"
        }
      ]
    }
  },
  {
    "id": "pillar3_polpsych_individual",
    "termId": "term2",
    "termTitle": "\ud83e\udde0 TERM II: POLITICAL PSYCHOLOGY & FOREIGN POLICY DECISION-MAKING",
    "pillarNumber": 3,
    "title": "Cognitive Dimensions of Leadership & State Decisions",
    "categoryBadge": "Cognitive Psychology & Leadership",
    "shortDescription": "Understand how cognitive limits, prospect theory, confirmation biases, and historical analogies distort high-stakes foreign policy decisions.",
    "academicObjective": "Examine bounded rationality, Kahneman-Tversky prospect theory, Alexander George's operational code, and psychological deterrence failures.",
    "competencyArea": "Decision Psychology & Cognitive Intelligence",
    "lectures": [
      {
        "id": "lec3_1",
        "pillarId": "pillar3_polpsych_individual",
        "lectureNumber": "3.1",
        "title": "The Rational Actor Model vs. Bounded Rationality",
        "subtitle": "Cognitive Limits, Satisficing Behavior & Information Bottlenecks under Uncertainty (Herbert Simon)",
        "readTimeMinutes": 20,
        "overview": "Classical economics assumes leaders maximize utility with perfect information. Herbert Simon's Bounded Rationality proves that cognitive processing limits, incomplete information, and time pressures force decision-makers to 'satisfice'\u2014selecting the first minimally acceptable option rather than the optimal grand strategy.",
        "theoreticalFrameworks": [
          {
            "name": "Herbert Simon's Bounded Rationality & Satisficing",
            "concept": "Decision-makers simplify complex environments into manageable mental heuristics, settling for 'good enough' solutions.",
            "application": "Auditing national security crisis briefings to avoid truncated search for options."
          },
          {
            "name": "Information Processing Bottlenecks",
            "concept": "During rapid military crises, senior executives suffer cognitive overload, filtering out vital intelligence.",
            "application": "Structuring specialized intelligence synthesis desks."
          }
        ],
        "statecraftCaseStudy": {
          "title": "The 1973 Yom Kippur War Intelligence Failure",
          "historicalContext": "Israeli military intelligence (Aman) possessed extensive raw indicators of Egyptian and Syrian mobilizations.",
          "strategicAnalysis": "Bound to 'The Concept' (the fixed assumption that Egypt would never attack without long-range strike aircraft), analysts dismissed contradictory raw data until war began.",
          "lessonsForStatecraft": "Rigid cognitive models cause leaders to rationalize away overwhelming warning indicators."
        },
        "banglaDiplomaticSummary": "\u09b9\u09be\u09b0\u09ac\u09be\u09b0\u09cd\u099f \u09b8\u09be\u0987\u09ae\u09a8\u09c7\u09b0 \u09ac\u09be\u0989\u09a8\u09cd\u09a1\u09c7\u09a1 \u09b0\u09cd\u09af\u09be\u09b6\u09a8\u09be\u09b2\u09bf\u099f\u09bf \u09aa\u09cd\u09b0\u09ae\u09be\u09a3 \u0995\u09b0\u09c7 \u09af\u09c7 \u09a4\u09a5\u09cd\u09af\u09c7\u09b0 \u0985\u09aa\u09cd\u09b0\u09a4\u09c1\u09b2\u09a4\u09be \u0993 \u09ae\u09be\u09a8\u09b8\u09bf\u0995 \u09b8\u09c0\u09ae\u09be\u09ac\u09a6\u09cd\u09a7\u09a4\u09be\u09b0 \u0995\u09be\u09b0\u09a3\u09c7 \u09a8\u09c7\u09a4\u09be\u09b0\u09be \u09b8\u09b0\u09cd\u09ac\u09cb\u09a4\u09cd\u09a4\u09ae \u09b8\u09bf\u09a6\u09cd\u09a7\u09be\u09a8\u09cd\u09a4\u09c7\u09b0 \u09ac\u09a6\u09b2\u09c7 \u09a4\u09be\u09ce\u0995\u09cd\u09b7\u09a3\u09bf\u0995 '\u09b8\u09a8\u09cd\u09a4\u09cb\u09b7\u099c\u09a8\u0995' \u09b8\u09bf\u09a6\u09cd\u09a7\u09be\u09a8\u09cd\u09a4\u09c7 \u09aa\u09cc\u0981\u099b\u09be\u09a8\u0964",
        "analyticalSeminarQuestions": [
          "How can national intelligence agencies institutionalize alternative hypothesis testing to combat bounded rationality?",
          "Why do leaders continue to believe disproven strategic assumptions during military crises?"
        ],
        "keyReadings": [
          {
            "title": "Models of Man: Social and Rational",
            "author": "Herbert A. Simon",
            "sourceType": "Classic Text",
            "coreConcept": "Bounded rationality and satisficing behavior."
          }
        ]
      },
      {
        "id": "lec3_2",
        "pillarId": "pillar3_polpsych_individual",
        "lectureNumber": "3.2",
        "title": "Cognitive Biases, Heuristics & Historical Analogies",
        "subtitle": "Confirmation Bias, Fundamental Attribution Error, Wishful Thinking & Munich vs. Vietnam Analogies",
        "readTimeMinutes": 24,
        "overview": "Robert Jervis proved decision-makers suffer from systematic perceptual distortions: confirmation bias, wishful thinking, and the fundamental attribution error. Yuen Foong Khong demonstrated that leaders rely on historical analogies (e.g. 'Munich 1938' = never appease; 'Vietnam 1965' = avoid quagmires) which often lead to catastrophic misdiagnoses of new crises.",
        "theoreticalFrameworks": [
          {
            "name": "Fundamental Attribution Error in Statecraft",
            "concept": "Viewing adversary provocations as manifestations of permanent evil character while viewing one's own military moves as purely defensive and benign.",
            "application": "Preventing accidental military escalation cycles."
          },
          {
            "name": "Analogical Explanation Framework (Khong)",
            "concept": "Analogies define the problem, assess the stakes, provide prescriptive remedies, and evaluate moral legitimacy.",
            "application": "Auditing foreign policy rhetoric against false historical parallels."
          }
        ],
        "statecraftCaseStudy": {
          "title": "The 2003 Iraq War & The Munich/Suez Analogy Trap",
          "historicalContext": "US and British decision-makers framed Saddam Hussein explicitly through the lens of 1930s European appeasement.",
          "strategicAnalysis": "The rigid 'Munich analogy' blinded leadership to the regional balance of power and catastrophic post-invasion sectarian fracturing.",
          "lessonsForStatecraft": "Misapplied historical analogies produce disastrous military interventions by blinding leaders to unique local realities."
        },
        "banglaDiplomaticSummary": "\u099c\u09be\u09b0\u09ad\u09bf\u09b8\u09c7\u09b0 \u0995\u0997\u09a8\u09bf\u099f\u09bf\u09ad \u09ac\u09be\u09af\u09bc\u09be\u09b8 \u098f\u09ac\u0982 \u0987\u09a4\u09bf\u09b9\u09be\u09b8 \u09a5\u09c7\u0995\u09c7 \u09ad\u09c1\u09b2 \u09b6\u09bf\u0995\u09cd\u09b7\u09be \u09a8\u09c7\u0993\u09af\u09bc\u09be\u09b0 \u09aa\u09cd\u09b0\u09ac\u09a3\u09a4\u09be (\u09ae\u09bf\u0989\u09a8\u09bf\u0996 \u09ac\u09be \u09ad\u09bf\u09af\u09bc\u09c7\u09a4\u09a8\u09be\u09ae \u09a4\u09c1\u09b2\u09a8\u09be) \u09ac\u09bf\u09b6\u09cd\u09ac\u09a8\u09c7\u09a4\u09be\u09a6\u09c7\u09b0 \u09ad\u09c1\u09b2 \u09af\u09c1\u09a6\u09cd\u09a7\u09c7 \u099c\u09a1\u09bc\u09bf\u09af\u09bc\u09c7 \u09aa\u09a1\u09bc\u09be\u09b0 \u09aa\u09cd\u09b0\u09a7\u09be\u09a8 \u09ae\u09a8\u09b8\u09cd\u09a4\u09be\u09a4\u09cd\u09a4\u09cd\u09ac\u09bf\u0995 \u0995\u09be\u09b0\u09a3\u0964",
        "analyticalSeminarQuestions": [
          "Why is the 'Munich 1938' analogy so frequently abused by hawkish foreign policy leaders?",
          "How can diplomats distinguish between genuine conciliatory signals and strategic deception?"
        ],
        "keyReadings": [
          {
            "title": "Analogies at War",
            "author": "Yuen Foong Khong",
            "sourceType": "Academic Journal",
            "coreConcept": "Cognitive schemas and the misuse of historical analogies."
          }
        ]
      },
      {
        "id": "lec3_3",
        "pillarId": "pillar3_polpsych_individual",
        "lectureNumber": "3.3",
        "title": "Prospect Theory & Risk Orientation in Statecraft",
        "subtitle": "Domain of Gains vs. Domain of Losses, Status-Quo Bias & Risk Acceptance (Kahneman & Tversky)",
        "readTimeMinutes": 22,
        "overview": "Daniel Kahneman and Amos Tversky's Prospect Theory showed that human decision-makers evaluate outcomes relative to a subjective reference point rather than absolute wealth. Leaders are risk-averse when protecting perceived gains, but become highly risk-acceptant (gambling on dangerous escalation) when facing perceived losses of territory, prestige, or regime survival.",
        "theoreticalFrameworks": [
          {
            "name": "Loss Aversion & The Sunk Cost Trap",
            "concept": "Losses hurt roughly twice as much as equivalent gains feel good; leaders escalate failing military commitments to avoid confirming a loss.",
            "application": "Evaluating exit strategies for military interventions."
          },
          {
            "name": "Status Quo Bias & Reference Point Framing",
            "concept": "Leaders quickly normalize recent gains into their new baseline reference point, treating any reversal as an intolerable direct attack.",
            "application": "Explaining sudden military crises following diplomatic boundary shifts."
          }
        ],
        "statecraftCaseStudy": {
          "title": "The 1982 Falklands/Malvinas War Escalation",
          "historicalContext": "Facing domestic collapse, the Argentine junta invaded the Falkland Islands to recapture historic territory.",
          "strategicAnalysis": "Framed in the 'domain of losses', British Prime Minister Margaret Thatcher accepted immense naval military risks 8,000 miles from home to reverse the loss.",
          "lessonsForStatecraft": "When both sides frame a territorial dispute in the domain of losses, armed conflict becomes almost impossible to prevent."
        },
        "banglaDiplomaticSummary": "\u09aa\u09cd\u09b0\u09b8\u09aa\u09c7\u0995\u09cd\u099f \u09a5\u09bf\u0993\u09b0\u09bf \u09a6\u09c7\u0996\u09be\u09af\u09bc \u09af\u09c7 \u0995\u09cd\u09b7\u09a4\u09bf \u09ac\u09be \u09ae\u09b0\u09cd\u09af\u09be\u09a6\u09be \u09b9\u09be\u09a8\u09bf\u09b0 \u09ae\u09c1\u0996\u09c7 \u09b0\u09be\u09b7\u09cd\u099f\u09cd\u09b0\u09a8\u09be\u09af\u09bc\u0995\u09b0\u09be \u09aa\u09b0\u09be\u099c\u09af\u09bc \u09b8\u09cd\u09ac\u09c0\u0995\u09be\u09b0 \u09a8\u09be \u0995\u09b0\u09c7 \u0986\u09b0\u0993 \u099a\u09b0\u09ae \u09ac\u09bf\u09aa\u099c\u09cd\u099c\u09a8\u0995 \u09b8\u09be\u09ae\u09b0\u09bf\u0995 \u099d\u09c1\u0981\u0995\u09bf \u09a8\u09bf\u09a4\u09c7 \u0989\u09a6\u09cd\u09af\u09a4 \u09b9\u09a8\u0964",
        "analyticalSeminarQuestions": [
          "Why do political regimes find it nearly impossible to execute a strategic military withdrawal when framed in the domain of losses?",
          "How can diplomats re-frame negotiations to shift an adversary from the domain of losses to the domain of gains?"
        ],
        "keyReadings": [
          {
            "title": "Prospect Theory in International Relations",
            "author": "Jack S. Levy",
            "sourceType": "Academic Journal",
            "coreConcept": "Loss aversion, reference points, and crisis escalation."
          }
        ]
      },
      {
        "id": "lec3_4",
        "pillarId": "pillar3_polpsych_individual",
        "lectureNumber": "3.4",
        "title": "Operational Code & Leader Personality Profiling",
        "subtitle": "Nathan Leites, Alexander George's Philosophical/Instrumental Codes & World Leader Profiling",
        "readTimeMinutes": 22,
        "overview": "A statesman's Operational Code constitutes their fundamental belief system regarding the nature of politics: Is the political universe essentially one of harmony or conflict? How predictable is the future? What is the utility of force? We analyze Nathan Leites and Alexander George's Operational Code constructs and psychological profiling techniques.",
        "theoreticalFrameworks": [
          {
            "name": "Alexander George's Operational Code Construct",
            "concept": "5 Philosophical beliefs (nature of politics, predictability, control) and 5 Instrumental beliefs (strategy, tactics, risk calculation).",
            "application": "Constructing predictive behavioral profiles of adversary chief executives."
          },
          {
            "name": "Leadership Trait Analysis (Margaret Hermann)",
            "concept": "Measuring conceptual complexity, belief in ability to control events, and task vs. relationship orientation from unscripted public speech.",
            "application": "Tailoring bilateral summit negotiating strategies to specific head-of-state personalities."
          }
        ],
        "statecraftCaseStudy": {
          "title": "Profiling the Soviet Politburo: Leites's 'The Operational Code of the Politburo'",
          "historicalContext": "During the early Cold War, RAND analyst Nathan Leites decoded the Bolshevik operational doctrine.",
          "strategicAnalysis": "Proved Soviet leaders operated on strict 'push to the limit, but retreat when encountering firm resistance' logic, guiding US containment strategy.",
          "lessonsForStatecraft": "Understanding an adversary's operational code prevents both unwarranted appeasement and dangerous miscalculated escalation."
        },
        "banglaDiplomaticSummary": "\u0985\u09aa\u09be\u09b0\u09c7\u09b6\u09a8\u09be\u09b2 \u0995\u09cb\u09a1 \u09ac\u09bf\u09b6\u09cd\u09b2\u09c7\u09b7\u09a3 \u0995\u09b0\u09c7 \u09ac\u09bf\u09b6\u09cd\u09ac\u09a8\u09c7\u09a4\u09be\u09a6\u09c7\u09b0 \u09ae\u09cc\u09b2\u09bf\u0995 \u09ae\u09a8\u09b8\u09cd\u09a4\u09be\u09a4\u09cd\u09a4\u09cd\u09ac\u09bf\u0995 \u09a6\u09c3\u09b7\u09cd\u099f\u09bf\u09ad\u0999\u09cd\u0997\u09bf \u0993 \u09b8\u0982\u0998\u09be\u09a4 \u09aa\u09b0\u09bf\u099a\u09be\u09b2\u09a8\u09be\u09b0 \u09a7\u09b0\u09a8 \u09ac\u09cb\u099d\u09be \u09af\u09be\u09af\u09bc, \u09af\u09be \u09b6\u09c0\u09b0\u09cd\u09b7 \u09ac\u09c8\u09a0\u0995\u09c7\u09b0 \u09a6\u09b0\u0995\u09b7\u09be\u0995\u09b7\u09bf\u09a4\u09c7 \u0985\u09a4\u09cd\u09af\u09a8\u09cd\u09a4 \u0995\u09be\u09b0\u09cd\u09af\u0995\u09b0\u0964",
        "analyticalSeminarQuestions": [
          "How does a leader's operational code influence their interpretation of ambiguous military signaling?",
          "Can an entrenched leader's operational code fundamentally change in response to geopolitical shocks?"
        ],
        "keyReadings": [
          {
            "title": "The 'Operational Code': A Neglected Approach to the Study of Political Leaders",
            "author": "Alexander L. George",
            "sourceType": "Academic Journal",
            "coreConcept": "Philosophical and instrumental belief systems in statecraft."
          }
        ]
      }
    ],
    "checkpointQuiz": {
      "id": "quiz_p3",
      "pillarId": "pillar3_polpsych_individual",
      "title": "Seminar Checkpoint 3: Psychological Deconstruction \u2014 Cognitive Bias Mapping of a Historic Escalation Crisis",
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
          "banglaExplanation": "\u09aa\u09cd\u09b0\u09b8\u09aa\u09c7\u0995\u09cd\u099f \u09a5\u09bf\u0993\u09b0\u09bf \u0985\u09a8\u09c1\u09af\u09be\u09af\u09bc\u09c0 \u0995\u09cd\u09b7\u09a4\u09bf \u09ac\u09be \u09ae\u09b0\u09cd\u09af\u09be\u09a6\u09be \u09b9\u09be\u09a8\u09bf\u09b0 \u09ae\u09c1\u0996\u09c7 \u09b0\u09be\u09b7\u09cd\u099f\u09cd\u09b0\u09a8\u09be\u09af\u09bc\u0995\u09b0\u09be \u09aa\u09b0\u09be\u099c\u09af\u09bc \u09b8\u09cd\u09ac\u09c0\u0995\u09be\u09b0 \u09a8\u09be \u0995\u09b0\u09c7 \u0986\u09b0\u0993 \u09ac\u09bf\u09aa\u099c\u09cd\u099c\u09a8\u0995 \u09b8\u09be\u09ae\u09b0\u09bf\u0995 \u099d\u09c1\u0981\u0995\u09bf \u09a8\u09bf\u09a4\u09c7 \u09a6\u09cd\u09ac\u09bf\u09a7\u09be \u0995\u09b0\u09c7\u09a8 \u09a8\u09be\u0964"
        },
        {
          "id": "q3_2",
          "prompt": "What is the 'Fundamental Attribution Error' in foreign policy analysis?",
          "options": [
            "A math calculation error in the defense budget",
            "Attributing adversary actions to deep malevolent character traits while viewing one's own moves as purely defensive reactions to circumstance",
            "Translating a diplomatic note into the wrong foreign language",
            "Failing to invite an ambassador to a state dinner"
          ],
          "correctIndex": 1,
          "academicRationale": "Fundamental Attribution Error causes states to interpret opponent actions as proof of inherent aggression while assuming their own motives are self-evidently defensive.",
          "banglaExplanation": "\u09ab\u09be\u09a8\u09cd\u09a1\u09be\u09ae\u09c7\u09a8\u09cd\u099f\u09be\u09b2 \u0985\u09cd\u09af\u09be\u099f\u09cd\u09b0\u09bf\u09ac\u09bf\u0989\u09b6\u09a8 \u098f\u09b0\u09b0 \u09b9\u09b2\u09cb \u09aa\u09cd\u09b0\u09a4\u09bf\u09aa\u0995\u09cd\u09b7\u09c7\u09b0 \u0995\u09be\u099c\u0995\u09c7 \u09b6\u09a4\u09cd\u09b0\u09c1\u09ad\u09be\u09ac\u09be\u09aa\u09a8\u09cd\u09a8 \u09b8\u09cd\u09ac\u09ad\u09be\u09ac\u09c7\u09b0 \u09aa\u09cd\u09b0\u09ae\u09be\u09a3 \u09ae\u09a8\u09c7 \u0995\u09b0\u09be \u098f\u09ac\u0982 \u09a8\u09bf\u099c\u09c7\u09b0 \u09aa\u09a6\u0995\u09cd\u09b7\u09c7\u09aa\u0995\u09c7 \u098f\u0995\u09be\u09a8\u09cd\u09a4\u0987 \u0986\u09a4\u09cd\u09ae\u09b0\u0995\u09cd\u09b7\u09be\u09ae\u09c2\u09b2\u0995 \u09ac\u09b2\u09c7 \u09ac\u09bf\u09ac\u09c7\u099a\u09a8\u09be \u0995\u09b0\u09be\u0964"
        }
      ]
    }
  },
  {
    "id": "pillar4_polpsych_group",
    "termId": "term2",
    "termTitle": "\ud83e\udde0 TERM II: POLITICAL PSYCHOLOGY & FOREIGN POLICY DECISION-MAKING",
    "pillarNumber": 4,
    "title": "Group Dynamics, Bureaucracy & Crisis Psychology",
    "categoryBadge": "Advisory Councils & Crisis Dynamics",
    "shortDescription": "Analyze how small-group dynamics, Irving Janis's Groupthink, bureaucratic politics, extreme stress, and collective emotion shape foreign policy.",
    "academicObjective": "Evaluate institutional mechanisms for Devil's Advocacy, Multiple Advocacy, crisis management under time compression, and honor/grievance dynamics.",
    "competencyArea": "Cabinet Advisory Systems & Crisis Leadership",
    "lectures": [
      {
        "id": "lec4_1",
        "pillarId": "pillar4_polpsych_group",
        "lectureNumber": "4.1",
        "title": "Groupthink & Pathologies of Advisory Councils",
        "subtitle": "Irving Janis's 8 Symptoms, Concurrence-Seeking, Self-Censorship & Preventive Mechanisms (Devil's Advocacy)",
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
        "banglaDiplomaticSummary": "\u0997\u09cd\u09b0\u09c1\u09aa\u09a5\u09bf\u0999\u09cd\u0995 \u098f\u09ae\u09a8 \u098f\u0995 \u09ae\u09a8\u09b8\u09cd\u09a4\u09be\u09a4\u09cd\u09a4\u09cd\u09ac\u09bf\u0995 \u09ab\u09be\u0981\u09a6 \u09af\u09c7\u0996\u09be\u09a8\u09c7 \u09b6\u09c0\u09b0\u09cd\u09b7 \u0989\u09aa\u09a6\u09c7\u09b7\u09cd\u099f\u09be\u09b0\u09be \u09ae\u09a4\u09ac\u09bf\u09b0\u09cb\u09a7 \u0997\u09cb\u09aa\u09a8 \u09b0\u09c7\u0996\u09c7 \u0985\u09a8\u09cd\u09a7 \u0990\u0995\u09ae\u09a4\u09cd\u09af \u09a4\u09c8\u09b0\u09bf \u0995\u09b0\u09c7\u09a8, \u09af\u09be\u09b0 \u09ab\u09b2\u09c7 \u0995\u09bf\u0989\u09ac\u09be\u09af\u09bc \u09ac\u09c7 \u0985\u09ac \u09aa\u09bf\u0997\u09b8\u09c7\u09b0 \u09ae\u09a4\u09cb \u09ae\u09be\u09b0\u09be\u09a4\u09cd\u09ae\u0995 \u09ac\u09bf\u09aa\u09b0\u09cd\u09af\u09af\u09bc \u0998\u099f\u09c7\u0964",
        "analyticalSeminarQuestions": [
          "How can a Prime Minister or President prevent cabinet members from acting as sycophantic 'mindguards'?",
          "What institutional rules distinguish productive multiple advocacy from paralyzing bureaucratic deadlock?"
        ],
        "keyReadings": [
          {
            "title": "Victims of Groupthink",
            "author": "Irving L. Janis",
            "sourceType": "Classic Text",
            "coreConcept": "Group dynamics and structural failures in advisory councils."
          }
        ]
      },
      {
        "id": "lec4_2",
        "pillarId": "pillar4_polpsych_group",
        "lectureNumber": "4.2",
        "title": "Bureaucratic Politics & 'Where You Stand Depends on Where You Sit'",
        "subtitle": "Departmental Turf Battles, Standard Operating Procedures (SOPs) & Inter-Agency Friction",
        "readTimeMinutes": 22,
        "overview": "Foreign policy decisions are rarely the output of a single unitary mind. Graham Allison and Morton Halperin demonstrated that state action is the result of bureaucratic pulling and hauling between ministries (Foreign Affairs, Defense, Finance, Intelligence) competing for budget, prestige, and institutional autonomy.",
        "theoreticalFrameworks": [
          {
            "name": "Halperin's Bureaucratic Politics Model",
            "concept": "Agencies formulate policy stances designed to protect their organizational essence, budget allocations, and jurisdiction.",
            "application": "Navigating defense procurement disputes between armed service branches."
          },
          {
            "name": "Organizational Routine Lock-In",
            "concept": "Agencies can only execute operations for which they have pre-existing training and doctrine, severely limiting the executive's policy options.",
            "application": "Developing flexible asymmetric crisis response capabilities."
          }
        ],
        "statecraftCaseStudy": {
          "title": "The 1980 Operation Eagle Claw Desert One Disaster",
          "historicalContext": "The US attempted a complex multi-service helicopter rescue of hostages in Tehran, which failed catastrophically in the Iranian desert.",
          "strategicAnalysis": "Inter-service rivalry led to fragmented command structures, incompatible communications, and failure of joint operations.",
          "lessonsForStatecraft": "Unified joint command structures are essential to overcome paralyzing inter-agency bureaucratic rivalries."
        },
        "banglaDiplomaticSummary": "\u0986\u09ae\u09b2\u09be\u09a4\u09be\u09a8\u09cd\u09a4\u09cd\u09b0\u09bf\u0995 \u09b0\u09be\u099c\u09a8\u09c0\u09a4\u09bf\u09a4\u09c7 \u09aa\u09cd\u09b0\u09a4\u09bf\u099f\u09bf \u09ae\u09a8\u09cd\u09a4\u09cd\u09b0\u09a3\u09be\u09b2\u09af\u09bc \u09a8\u09bf\u099c\u09b8\u09cd\u09ac \u09ac\u09be\u099c\u09c7\u099f \u0993 \u0995\u09b0\u09cd\u09a4\u09c3\u09a4\u09cd\u09ac \u09b0\u0995\u09cd\u09b7\u09be\u09af\u09bc \u09ac\u09cd\u09af\u09b8\u09cd\u09a4 \u09a5\u09be\u0995\u09c7, \u09af\u09be \u099c\u09be\u09a4\u09c0\u09af\u09bc \u09a8\u09bf\u09b0\u09be\u09aa\u09a4\u09cd\u09a4\u09be \u09b8\u09bf\u09a6\u09cd\u09a7\u09be\u09a8\u09cd\u09a4\u09c7\u09b0 \u0997\u09a4\u09bf \u0993 \u0995\u09be\u09b0\u09cd\u09af\u0995\u09be\u09b0\u09bf\u09a4\u09be\u0995\u09c7 \u09ae\u09be\u09b0\u09be\u09a4\u09cd\u09ae\u0995\u09ad\u09be\u09ac\u09c7 \u09ac\u09cd\u09af\u09be\u09b9\u09a4 \u0995\u09b0\u09c7\u0964",
        "analyticalSeminarQuestions": [
          "How can a National Security Advisor break inter-service rivalries between the Army, Navy, and Air Force?",
          "Why do foreign ministries often clash with military intelligence agencies during diplomatic negotiations?"
        ],
        "keyReadings": [
          {
            "title": "Bureaucratic Politics and Foreign Policy",
            "author": "Morton H. Halperin",
            "sourceType": "Academic Journal",
            "coreConcept": "Organizational interests and bureaucratic games."
          }
        ]
      },
      {
        "id": "lec4_3",
        "pillarId": "pillar4_polpsych_group",
        "lectureNumber": "4.3",
        "title": "Stress, Fatigue & Crisis Decision-Making",
        "subtitle": "Time Compression, Perceptual Narrowing, Sleep Deprivation & Decision Degradation in War Cabinets (Holsti)",
        "readTimeMinutes": 20,
        "overview": "Ole Holsti's crisis research showed that acute geopolitical crises induce severe psychological stress characterized by time compression, sleep deprivation, physical exhaustion, and perceptual narrowing (tunnel vision). Decision-makers focus exclusively on immediate survival while ignoring long-term second-order consequences.",
        "theoreticalFrameworks": [
          {
            "name": "Holsti's Crisis Stress Model",
            "concept": "As perceived threat and time pressure increase, cognitive tolerance for ambiguity declines, alternatives examined drop, and reliance on crude stereotypes surges.",
            "application": "Mandating cognitive rest protocols and rotational advisory teams in national command centers."
          },
          {
            "name": "Perceptual Narrowing (Tunnel Vision)",
            "concept": "Stress severely restricts the visual and cognitive field, causing leaders to overlook diplomatic de-escalation off-ramps.",
            "application": "Creating formal checklists of de-escalation channels during military alerts."
          }
        ],
        "statecraftCaseStudy": {
          "title": "The July 1914 Crisis: Exhaustion in the European Chanceries",
          "historicalContext": "In the weeks following the Sarajevo assassination, European monarchs, chancellors, and foreign ministers worked under frantic around-the-clock telegram pressure.",
          "strategicAnalysis": "Physical exhaustion and panic fueled fatalistic beliefs that war was inevitable, causing leaders to abdicate diplomacy to military railway timetables.",
          "lessonsForStatecraft": "Crisis decision mechanisms must be designed to withstand severe time compression without triggering panic reactions."
        },
        "banglaDiplomaticSummary": "\u099a\u09b0\u09ae \u09b8\u0982\u0995\u099f \u0993 \u09b8\u09ae\u09af\u09bc\u09b8\u09cd\u09ac\u09b2\u09cd\u09aa\u09a4\u09be\u09b0 \u09ae\u09c1\u0996\u09c7 \u09b0\u09be\u09b7\u09cd\u099f\u09cd\u09b0\u09a8\u09be\u09af\u09bc\u0995\u09a6\u09c7\u09b0 \u09ae\u09b8\u09cd\u09a4\u09bf\u09b7\u09cd\u0995 \u0995\u09cd\u09b2\u09be\u09a8\u09cd\u09a4 \u09b9\u09af\u09bc\u09c7 \u09aa\u09a1\u09bc\u09c7 (\u09b9\u09cb\u09b2\u09b8\u09cd\u099f\u09bf\u09b0 \u0995\u09cd\u09b0\u09be\u0987\u09b8\u09bf\u09b8 \u09b8\u09cd\u099f\u09cd\u09b0\u09c7\u09b8 \u09ae\u09a1\u09c7\u09b2), \u09ab\u09b2\u09c7 \u09a4\u09be\u09b0\u09be \u09a6\u09c0\u09b0\u09cd\u0998\u09ae\u09c7\u09af\u09bc\u09be\u09a6\u09c0 \u09aa\u09b0\u09bf\u09a3\u09a4\u09bf \u09a8\u09be \u09ad\u09c7\u09ac\u09c7 \u09ad\u09c1\u09b2 \u09b8\u09bf\u09a6\u09cd\u09a7\u09be\u09a8\u09cd\u09a4\u09c7 \u0989\u09aa\u09a8\u09c0\u09a4 \u09b9\u09a8\u0964",
        "analyticalSeminarQuestions": [
          "How can modern war cabinets structure cognitive rotations to prevent fatigue-induced strategic blunders?",
          "How does hypersonic missile technology exacerbate crisis time compression for national command authorities?"
        ],
        "keyReadings": [
          {
            "title": "Crisis, Escalation, War",
            "author": "Ole R. Holsti",
            "sourceType": "Academic Journal",
            "coreConcept": "Stress, cognitive narrowing, and crisis decision-making."
          }
        ]
      },
      {
        "id": "lec4_4",
        "pillarId": "pillar4_polpsych_group",
        "lectureNumber": "4.4",
        "title": "Emotion, Honor, Hubris & National Humiliation",
        "subtitle": "Prestige Politics, Collective Historical Trauma, Fear & Grievance in Foreign Policy Escalation",
        "readTimeMinutes": 22,
        "overview": "Realism often assumes cold rational calculation, but history proves that non-material emotional drivers\u2014national honor, fear of humiliation, collective historical trauma, and strategic hubris\u2014frequently overpower economic and military logic, driving states into ruinous revisionist conflicts.",
        "theoreticalFrameworks": [
          {
            "name": "Richard Ned Lebow's Psychology of Honor and Standing",
            "concept": "Interstate conflict is frequently motivated not by appetite or security fear, but by the pursuit of standing, prestige, and vindication of national honor.",
            "application": "Understanding why nations fight over barren islands and prestige symbols."
          },
          {
            "name": "Collective Historical Trauma & Grievance Mobilization",
            "concept": "Regimes mobilize historical narratives of past victimhood ('Century of Humiliation') to justify aggressive foreign policy revisionism.",
            "application": "Analyzing revisionist great-power nationalism and border disputes."
          }
        ],
        "statecraftCaseStudy": {
          "title": "The 1870 Franco-Prussian War & The Ems Dispatch",
          "historicalContext": "Otto von Bismarck edited a diplomatic telegram (the Ems Dispatch) to make it appear that the Prussian King had insulted the French Ambassador.",
          "strategicAnalysis": "French domestic outrage over wounded national honor forced Emperor Napoleon III into declaring a disastrous war for which France was unprepared.",
          "lessonsForStatecraft": "Skillful adversaries weaponize public honor and emotional humiliation to provoke catastrophic military overextension."
        },
        "banglaDiplomaticSummary": "\u099c\u09be\u09a4\u09c0\u09af\u09bc \u09ae\u09b0\u09cd\u09af\u09be\u09a6\u09be, \u0985\u09aa\u09ae\u09be\u09a8\u09c7\u09b0 \u09aa\u09cd\u09b0\u09a4\u09bf\u09b6\u09cb\u09a7 \u0993 \u0990\u09a4\u09bf\u09b9\u09be\u09b8\u09bf\u0995 \u0995\u09cd\u09b7\u09cb\u09ad \u0985\u09a8\u09c7\u0995 \u09b8\u09ae\u09af\u09bc \u0985\u09b0\u09cd\u09a5\u09a8\u09c8\u09a4\u09bf\u0995 \u09af\u09c1\u0995\u09cd\u09a4\u09bf\u09b0 \u099a\u09c7\u09af\u09bc\u09c7\u0993 \u09ac\u09c7\u09b6\u09bf \u09b6\u0995\u09cd\u09a4\u09bf\u09b6\u09be\u09b2\u09c0 \u09b9\u09af\u09bc\u09c7 \u09b0\u09be\u09b7\u09cd\u099f\u09cd\u09b0\u0995\u09c7 \u09af\u09c1\u09a6\u09cd\u09a7\u09c7 \u09a8\u09be\u09ae\u09bf\u09af\u09bc\u09c7 \u09a6\u09c7\u09af\u09bc (\u09b2\u09c7\u09ac\u09cb\u09b0 \u0985\u09a8\u09be\u09b0 \u0985\u09cd\u09af\u09be\u09a8\u09cd\u09a1 \u09b8\u09cd\u099f\u09cd\u09af\u09be\u09a8\u09cd\u09a1\u09bf\u0982 \u09a5\u09bf\u0993\u09b0\u09bf)\u0964",
        "analyticalSeminarQuestions": [
          "Why is diplomatic 'face-saving' an essential component of peaceful conflict resolution?",
          "How do domestic populist movements leverage collective trauma to constrain pragmatic foreign diplomacy?"
        ],
        "keyReadings": [
          {
            "title": "A Cultural Theory of International Relations",
            "author": "Richard Ned Lebow",
            "sourceType": "Classic Text",
            "coreConcept": "Honor, standing, and emotional drivers of war."
          }
        ]
      }
    ],
    "checkpointQuiz": {
      "id": "quiz_p4",
      "pillarId": "pillar4_polpsych_group",
      "title": "Seminar Checkpoint 4: Crisis Cabinet Simulation \u2014 Analyzing Decision Breakdown under Severe Time Compression",
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
          "banglaExplanation": "\u0986\u09b2\u09c7\u0995\u099c\u09be\u09a8\u09cd\u09a1\u09be\u09b0 \u099c\u09b0\u09cd\u099c \u09a6\u09c7\u0996\u09bf\u09af\u09bc\u09c7\u099b\u09c7\u09a8 \u09af\u09c7 \u09ae\u09be\u09b2\u09cd\u099f\u09bf\u09aa\u09b2 \u0985\u09cd\u09af\u09be\u09a1\u09ad\u09cb\u0995\u09c7\u09b8\u09bf \u0993 \u09aa\u09cd\u09b0\u09be\u09a4\u09bf\u09b7\u09cd\u09a0\u09be\u09a8\u09bf\u0995 \u09ad\u09bf\u09a8\u09cd\u09a8\u09ae\u09a4\u09c7\u09b0 \u09ae\u09be\u09a7\u09cd\u09af\u09ae\u09c7 \u0985\u09a8\u09cd\u09a7 \u0990\u0995\u09ae\u09a4\u09cd\u09af \u09ad\u09c7\u0999\u09c7 \u09b8\u09a0\u09bf\u0995 \u09b8\u09bf\u09a6\u09cd\u09a7\u09be\u09a8\u09cd\u09a4 \u09a8\u09c7\u0993\u09af\u09bc\u09be \u09b8\u09ae\u09cd\u09ad\u09ac\u0964"
        },
        {
          "id": "q4_2",
          "prompt": "According to Ole Holsti's research, what happens to cognitive decision-making when cabinet leaders experience extreme crisis stress and time compression?",
          "options": [
            "Their cognitive capacity expands and they examine significantly more options",
            "Perceptual narrowing (tunnel vision) occurs, alternatives evaluated drop, and reliance on crude stereotypes surges",
            "They completely forget their native language",
            "They automatically achieve world peace"
          ],
          "correctIndex": 1,
          "academicRationale": "Holsti demonstrated that severe stress causes perceptual narrowing, leading decision-makers to overlook diplomatic off-ramps and focus on immediate worst-case fears.",
          "banglaExplanation": "\u09b9\u09cb\u09b2\u09b8\u09cd\u099f\u09bf\u09b0 \u0997\u09ac\u09c7\u09b7\u09a3\u09be\u09af\u09bc \u09a6\u09c7\u0996\u09be \u09af\u09be\u09af\u09bc \u09a4\u09c0\u09ac\u09cd\u09b0 \u09ae\u09be\u09a8\u09b8\u09bf\u0995 \u099a\u09be\u09aa\u09c7 \u09a8\u09c7\u09a4\u09be\u09a6\u09c7\u09b0 \u09ae\u09be\u09a8\u09b8\u09bf\u0995 \u09a6\u09c3\u09b7\u09cd\u099f\u09bf \u09b8\u0982\u0995\u09c0\u09b0\u09cd\u09a3 (\u099f\u09be\u09a8\u09c7\u09b2 \u09ad\u09bf\u09b6\u09a8) \u09b9\u09af\u09bc\u09c7 \u09af\u09be\u09af\u09bc \u098f\u09ac\u0982 \u09a4\u09be\u09b0\u09be \u09ac\u09bf\u0995\u09b2\u09cd\u09aa \u09aa\u09a5\u0997\u09c1\u09b2\u09cb \u09ac\u09bf\u09ac\u09c7\u099a\u09a8\u09be \u0995\u09b0\u09a4\u09c7 \u09ac\u09cd\u09af\u09b0\u09cd\u09a5 \u09b9\u09a8\u0964"
        }
      ]
    }
  },
  {
    "id": "pillar5_security_strategy",
    "termId": "term3",
    "termTitle": "\ud83d\udee1\ufe0f TERM III: STRATEGIC STUDIES, GLOBAL SECURITY & INTERNATIONAL LAW",
    "pillarNumber": 5,
    "title": "Grand Strategy, Warfare & Modern Security Architecture",
    "categoryBadge": "Grand Strategy & Global Security",
    "shortDescription": "Master the evolution of strategic thought, nuclear deterrence, hybrid/grey-zone warfare, maritime choke points, and AI/cyber warfare.",
    "academicObjective": "Analyze Clausewitzian friction, Schelling's arms and influence, Corbettian sea denial, Herman Kahn's escalation ladders, and autonomous cyber doctrines.",
    "competencyArea": "Military Strategy, Maritime Security & Deterrence Architecture",
    "lectures": [
      {
        "id": "lec5_1",
        "pillarId": "pillar5_security_strategy",
        "lectureNumber": "5.1",
        "title": "The Evolution of Strategic Thought",
        "subtitle": "Sun Tzu, Clausewitz, Jomini, Mahan & Liddell Hart on the Nature of Strategy, Friction & Political War",
        "readTimeMinutes": 22,
        "overview": "Strategy is the art of creating power to achieve political objectives. This lecture analyzes the foundational strategic canons: Sun Tzu's deception and winning without fighting, Carl von Clausewitz's 'war as the continuation of politics by other means' and the fog/friction of war, Jomini's scientific lines of operations, and Liddell Hart's indirect approach.",
        "theoreticalFrameworks": [
          {
            "name": "Clausewitzian Trinity & Friction",
            "concept": "War is governed by Passion (people), Chance/Creativity (commander/army), and Reason/Policy (government); friction turns simple actions into immense difficulties.",
            "application": "Aligning military campaigns strictly with clear political end-states."
          },
          {
            "name": "Liddell Hart's Indirect Approach",
            "concept": "Dislocating the enemy psychologically and physically prior to battle rather than seeking direct attrition clashes.",
            "application": "Middle-power asymmetric defense strategies against superior foes."
          }
        ],
        "statecraftCaseStudy": {
          "title": "The 1971 Bangladesh Liberation War: Multi-Domain Indirect Strategy",
          "historicalContext": "The joint operational campaign by the Mukti Bahini and allied forces liberated Bangladesh in 13 days.",
          "strategicAnalysis": "Combined guerrilla disruption of interior lines (indirect approach) with high-speed amphibious/airborne bypass of fortified border strongpoints.",
          "lessonsForStatecraft": "Asymmetric popular resistance combined with indirect maneuver paralyzes conventional occupying forces."
        },
        "banglaDiplomaticSummary": "\u09b8\u09be\u09a8 \u099c\u09c1, \u0995\u09cd\u09b2\u099c\u09ad\u09bf\u099f\u09b8 \u098f\u09ac\u0982 \u09b2\u09bf\u09a1\u09c7\u09b2 \u09b9\u09be\u09b0\u09cd\u099f\u09c7\u09b0 \u0995\u09cc\u09b6\u09b2\u0997\u09a4 \u09a4\u09a4\u09cd\u09a4\u09cd\u09ac \u09b6\u09c7\u0996\u09be\u09af\u09bc \u09af\u09c7 \u09af\u09c1\u09a6\u09cd\u09a7 \u09a8\u09bf\u099b\u0995 \u09b0\u0995\u09cd\u09a4\u09aa\u09be\u09a4 \u09a8\u09af\u09bc \u09ac\u09b0\u0982 \u09b0\u09be\u099c\u09a8\u09c8\u09a4\u09bf\u0995 \u09b2\u0995\u09cd\u09b7\u09cd\u09af \u0985\u09b0\u09cd\u099c\u09a8\u09c7\u09b0 \u09ae\u09be\u09a7\u09cd\u09af\u09ae; \u09aa\u09cd\u09b0\u09a4\u09cd\u09af\u0995\u09cd\u09b7 \u09b8\u0982\u0998\u09b0\u09cd\u09b7\u09c7\u09b0 \u099a\u09c7\u09af\u09bc\u09c7 \u09aa\u09b0\u09cb\u0995\u09cd\u09b7 \u0995\u09cc\u09b6\u09b2\u0987 \u09ac\u09c7\u09b6\u09bf \u09ab\u09b2\u09aa\u09cd\u09b0\u09b8\u09c2\u0964",
        "analyticalSeminarQuestions": [
          "How does Clausewitz's concept of 'friction' explain the failure of complex military campaign plans?",
          "Why is Sun Tzu's doctrine of 'subduing the enemy without fighting' the highest form of grand strategy?"
        ],
        "keyReadings": [
          {
            "title": "On War",
            "author": "Carl von Clausewitz",
            "sourceType": "Classic Text",
            "coreConcept": "War as policy, the trinity, and friction."
          }
        ]
      },
      {
        "id": "lec5_2",
        "pillarId": "pillar5_security_strategy",
        "lectureNumber": "5.2",
        "title": "Nuclear Deterrence, Arms Control & Strategic Stability",
        "subtitle": "Mutually Assured Destruction (MAD), First-Strike vs. Second-Strike, Herman Kahn's Escalation Ladder & Counter-Proliferation",
        "readTimeMinutes": 24,
        "overview": "The nuclear revolution fundamentally transformed statecraft: weapons are no longer designed to win wars, but to prevent them from occurring. We analyze Thomas Schelling's coercive diplomacy, Herman Kahn's 44-rung Escalation Ladder, First-Strike vs. Second-Strike survivability (SSBN nuclear triads), counter-force vs counter-value targeting, and the South Asian nuclear matrix (India-Pakistan-China).",
        "theoreticalFrameworks": [
          {
            "name": "Schelling's Strategic Deterrence & Brinkmanship",
            "concept": "Deterrence is the threat of pain to compel restraint; brinkmanship is 'the threat that leaves something to chance.'",
            "application": "Establishing credible red lines during border crises."
          },
          {
            "name": "The Stability-Instability Paradox (Glenn Snyder)",
            "concept": "Strategic nuclear stability at the high end incentivizes low-level proxy wars and cross-border skirmishes at the conventional end.",
            "application": "Analyzing South Asian sub-conventional conflicts."
          }
        ],
        "statecraftCaseStudy": {
          "title": "The 1999 Kargil Conflict: Testing the Stability-Instability Paradox",
          "historicalContext": "One year after both India and Pakistan conducted overt nuclear tests, armed conflict erupted along the Line of Control in Kargil.",
          "strategicAnalysis": "Nuclear deterrence prevented a full-scale systemic war, but Pakistan calculated its nuclear shield would prevent India from opening a second front across the international border.",
          "lessonsForStatecraft": "Nuclear weapons do not abolish warfare; they compress conflict into dangerous sub-conventional gray zones."
        },
        "banglaDiplomaticSummary": "\u09aa\u09be\u09b0\u09ae\u09be\u09a3\u09ac\u09bf\u0995 \u09a8\u09bf\u09ac\u09c3\u09a4\u09cd\u09a4\u09bf\u0995\u09b0\u09a3 \u098f\u09ac\u0982 \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1-\u09b8\u09cd\u099f\u09cd\u09b0\u09be\u0987\u0995 \u09b8\u0995\u09cd\u09b7\u09ae\u09a4\u09be \u09b8\u09b0\u09be\u09b8\u09b0\u09bf \u09ae\u09b9\u09be\u09af\u09c1\u09a6\u09cd\u09a7 \u0986\u099f\u0995\u09c7 \u09a6\u09bf\u09b2\u09c7\u0993 '\u09b8\u09cd\u099f\u09cd\u09af\u09be\u09ac\u09bf\u09b2\u09bf\u099f\u09bf-\u0987\u09a8\u09b8\u09cd\u099f\u09cd\u09af\u09be\u09ac\u09bf\u09b2\u09bf\u099f\u09bf \u09aa\u09cd\u09af\u09be\u09b0\u09be\u09a1\u0995\u09cd\u09b8'-\u098f\u09b0 \u0995\u09be\u09b0\u09a3\u09c7 \u09a8\u09bf\u09ae\u09cd\u09a8\u09ae\u09be\u09a4\u09cd\u09b0\u09be\u09b0 \u09aa\u09cd\u09b0\u0995\u09cd\u09b8\u09bf \u09af\u09c1\u09a6\u09cd\u09a7 \u0993 \u09b8\u0982\u0998\u09be\u09a4 \u09ac\u09be\u09a1\u09bc\u09bf\u09af\u09bc\u09c7 \u09a6\u09c7\u09af\u09bc\u0964",
        "analyticalSeminarQuestions": [
          "Why is a secure, survivable Second-Strike Capability (SSBN submarines) essential for strategic crisis stability?",
          "How does hypersonic glide technology threaten the existing global nuclear balance?"
        ],
        "keyReadings": [
          {
            "title": "Arms and Influence",
            "author": "Thomas C. Schelling",
            "sourceType": "Classic Text",
            "coreConcept": "Coercion, deterrence, and commitment strategies."
          }
        ]
      },
      {
        "id": "lec5_3",
        "pillarId": "pillar5_security_strategy",
        "lectureNumber": "5.3",
        "title": "Asymmetric, Hybrid & Grey-Zone Warfare",
        "subtitle": "Non-Contact Operations, Proxy Conflicts, Salami-Slicing Tactics, Weaponized Interdependence & Private Military Actors",
        "readTimeMinutes": 22,
        "overview": "Modern conflict rarely takes the form of declared symmetric interstate war. Revisionist states employ Gray-Zone strategies\u2014coercive statecraft that stays deliberately below the threshold of conventional armed conflict to avoid triggering treaty alliances (Article 5). We dissect 'salami-slicing' tactics, maritime militias, cyber sabotage, weaponized disinformation, and proxy warfare.",
        "theoreticalFrameworks": [
          {
            "name": "Gray-Zone Salami Slicing Tactics",
            "concept": "Accumulating minor, incremental revisions to the territorial or security status quo where no individual action justifies armed retaliation.",
            "application": "Defending offshore EEZ borders and transboundary river basins."
          },
          {
            "name": "Gerasimov Hybrid Warfare Doctrine",
            "concept": "The ratio of non-military to military measures in modern warfare is 4:1 (economic, informational, legal, cyber, and special forces).",
            "application": "Building whole-of-nation resilience against foreign subversion."
          }
        ],
        "statecraftCaseStudy": {
          "title": "Maritime Gray-Zone Expansion in the South China Sea",
          "historicalContext": "Deployment of paramilitary Maritime Militia fishing fleets and artificial island reclamation.",
          "strategicAnalysis": "Encroached upon neighboring EEZs without firing shots, paralyzing conventional naval responses.",
          "lessonsForStatecraft": "Coastal middle powers must develop maritime constabulary and legal lawfare instruments to counter gray-zone encroachment."
        },
        "banglaDiplomaticSummary": "\u0997\u09cd\u09b0\u09c7-\u099c\u09cb\u09a8 \u0993 \u09b9\u09be\u0987\u09ac\u09cd\u09b0\u09bf\u09a1 \u09af\u09c1\u09a6\u09cd\u09a7 \u098f\u09ae\u09a8 \u098f\u0995 \u0995\u09cc\u09b6\u09b2 \u09af\u09c7\u0996\u09be\u09a8\u09c7 \u09b8\u09b0\u09be\u09b8\u09b0\u09bf \u09af\u09c1\u09a6\u09cd\u09a7 \u0998\u09cb\u09b7\u09a3\u09be \u09a8\u09be \u0995\u09b0\u09c7 \u09b8\u09be\u0987\u09ac\u09be\u09b0 \u09b9\u09be\u09ae\u09b2\u09be, \u09ad\u09c1\u09af\u09bc\u09be \u09a4\u09a5\u09cd\u09af \u098f\u09ac\u0982 \u09b8\u09be\u09ae\u09b0\u09bf\u0995 \u09ae\u09bf\u09b2\u09bf\u09b6\u09bf\u09af\u09bc\u09be\u09b0 \u09ae\u09be\u09a7\u09cd\u09af\u09ae\u09c7 \u09a7\u09be\u09aa\u09c7 \u09a7\u09be\u09aa\u09c7 \u09b8\u09be\u09b0\u09cd\u09ac\u09ad\u09cc\u09ae\u09a4\u09cd\u09ac \u0995\u09cd\u09b7\u09c1\u09a3\u09cd\u09a3 \u0995\u09b0\u09be \u09b9\u09af\u09bc\u0964",
        "analyticalSeminarQuestions": [
          "How can a middle power deter gray-zone encroachments without escalating into conventional armed defeat?",
          "What is the role of private military companies (PMCs) in modern geopolitical proxy conflicts?"
        ],
        "keyReadings": [
          {
            "title": "Hybrid Warfare",
            "author": "Williamson Murray & Peter R. Mansoor",
            "sourceType": "Academic Journal",
            "coreConcept": "Asymmetric, hybrid, and irregular warfare."
          }
        ]
      },
      {
        "id": "lec5_4",
        "pillarId": "pillar5_security_strategy",
        "lectureNumber": "5.4",
        "title": "Maritime Strategy & Choke-Point Geopolitics",
        "subtitle": "Sea Lines of Communication (SLOCs), Exclusive Economic Zones (EEZ), Maritime Corridors & Naval Modernization",
        "readTimeMinutes": 22,
        "overview": "Over 80% of global trade and 90% of energy transit travels by sea. Julian Corbett demonstrated that control of Sea Lines of Communication (SLOCs) and maritime choke points (Strait of Malacca, Hormuz, Bab-el-Mandeb) dictates national survival. We analyze naval modernization, anti-access/area-denial (A2/AD) coastal defense, and the Bay of Bengal littoral balance of power.",
        "theoreticalFrameworks": [
          {
            "name": "Julian Corbett's Sea Denial Doctrine",
            "concept": "Weaker littoral navies do not need expensive carrier fleets; they can deny oceanic transit to adversaries via missile corvettes, submarines, and coastal batteries.",
            "application": "Formulating Bangladesh Navy's 'Forces Goal 2030' littoral defense architecture."
          },
          {
            "name": "Choke Point Vulnerability & The Malacca Dilemma",
            "concept": "Dependence on narrow maritime straits allows adversary navies to strangle national energy and trade supply lines.",
            "application": "Developing deep-sea ports (Matarbari, Payra) to secure maritime resilience."
          }
        ],
        "statecraftCaseStudy": {
          "title": "The Bay of Bengal Maritime Security Corridor & Matarbari Port",
          "historicalContext": "The Bay of Bengal connects the Indian Ocean to East Asian trade highways.",
          "strategicAnalysis": "Developing Bangladesh's Matarbari deep-sea port provides strategic commercial access to landlocked Northeast India, Nepal, and Bhutan while maintaining open sea lines.",
          "lessonsForStatecraft": "Strategic port infrastructure transforms geographical location into enduring geoeconomic leverage."
        },
        "banglaDiplomaticSummary": "\u09b8\u09ae\u09c1\u09a6\u09cd\u09b0 \u09ac\u09be\u09a3\u09bf\u099c\u09cd\u09af \u0993 \u099c\u09cd\u09ac\u09be\u09b2\u09be\u09a8\u09bf \u09a8\u09bf\u09b0\u09be\u09aa\u09a4\u09cd\u09a4\u09be\u09b0 \u0995\u09c7\u09a8\u09cd\u09a6\u09cd\u09b0\u09ac\u09bf\u09a8\u09cd\u09a6\u09c1 \u09b9\u09b2\u09cb \u09b8\u09be\u09ae\u09c1\u09a6\u09cd\u09b0\u09bf\u0995 \u099a\u09cb\u0996 \u09aa\u09af\u09bc\u09c7\u09a8\u09cd\u099f\u0964 \u0995\u09b0\u09cd\u09ac\u09c7\u099f\u09c7\u09b0 '\u09b8\u09bf \u09a1\u09bf\u09a8\u09be\u09af\u09bc\u09be\u09b2' \u09a4\u09a4\u09cd\u09a4\u09cd\u09ac \u0985\u09a8\u09c1\u09af\u09be\u09af\u09bc\u09c0 \u0989\u09aa\u0995\u09c2\u09b2\u09c0\u09af\u09bc \u09aa\u09cd\u09b0\u09a4\u09bf\u09b0\u0995\u09cd\u09b7\u09be \u0993 \u0997\u09ad\u09c0\u09b0 \u09b8\u09ae\u09c1\u09a6\u09cd\u09b0 \u09ac\u09a8\u09cd\u09a6\u09b0 \u09a8\u09bf\u09b0\u09cd\u09ae\u09be\u09a3 \u099c\u09be\u09a4\u09c0\u09af\u09bc \u09a8\u09bf\u09b0\u09be\u09aa\u09a4\u09cd\u09a4\u09be\u09b0 \u0985\u09aa\u09b0\u09bf\u09b9\u09be\u09b0\u09cd\u09af \u0985\u0999\u09cd\u0997\u0964",
        "analyticalSeminarQuestions": [
          "Why is Corbettian Sea Denial more fiscally and strategically viable for developing coastal nations than Mahanian fleet expansion?",
          "How does the militarization of the Andaman and Nicobar Islands impact Bay of Bengal sea lines?"
        ],
        "keyReadings": [
          {
            "title": "Some Principles of Maritime Strategy",
            "author": "Julian S. Corbett",
            "sourceType": "Classic Text",
            "coreConcept": "Sea denial, trade protection, and maritime lines of operation."
          }
        ]
      },
      {
        "id": "lec5_5",
        "pillarId": "pillar5_security_strategy",
        "lectureNumber": "5.5",
        "title": "Cybersecurity, Critical Infrastructure & Autonomous Weapons",
        "subtitle": "Cyber Statecraft, Offensive Cyber Doctrines, Algorithmic Deterrence & AI-Enabled Warfare",
        "readTimeMinutes": 20,
        "overview": "Cyberspace and Artificial Intelligence constitute the fifth domain of warfare. This lecture explores offensive cyber operations (Stuxnet, ransomware sabotage of power grids), algorithmic deterrence, attribution challenges, the weaponization of autonomous drone swarms, and the absence of established arms control treaties in digital warfare.",
        "theoreticalFrameworks": [
          {
            "name": "Cyber Attribution Dilemma & Active Defense",
            "concept": "The difficulty of definitively proving the sovereign origin of a cyber attack reduces traditional deterrence credibility.",
            "application": "Building sovereign critical infrastructure cyber air-gaps and rapid incident response teams."
          },
          {
            "name": "Autonomous Weapons & Algorithmic Escalation",
            "concept": "AI-driven targeting systems operate at machine speeds, compressing crisis decision-making and raising risks of inadvertent war.",
            "application": "Negotiating global ethical conventions on Human-in-the-Loop (HITL) weapons systems."
          }
        ],
        "statecraftCaseStudy": {
          "title": "Operation Olympic Games (Stuxnet 2010)",
          "historicalContext": "A sophisticated cyber weapon damaged Iranian nuclear centrifuges at Natanz without physical air strikes.",
          "strategicAnalysis": "Demonstrated that digital code can produce kinetic destruction on sovereign critical infrastructure.",
          "lessonsForStatecraft": "National sovereignty now requires absolute cyber defense of electrical grids, central banking systems, and ports."
        },
        "banglaDiplomaticSummary": "\u09b8\u09be\u0987\u09ac\u09be\u09b0 \u09b8\u09cd\u09aa\u09c7\u09b8 \u0993 \u0995\u09c3\u09a4\u09cd\u09b0\u09bf\u09ae \u09ac\u09c1\u09a6\u09cd\u09a7\u09bf\u09ae\u09a4\u09cd\u09a4\u09be \u09af\u09c1\u09a6\u09cd\u09a7\u09c7\u09b0 \u09a8\u09a4\u09c1\u09a8 \u09ab\u09cd\u09b0\u09a8\u09cd\u099f\u09b2\u09be\u0987\u09a8\u0964 \u09ac\u09bf\u09a6\u09cd\u09af\u09c1\u09ce \u0997\u09cd\u09b0\u09bf\u09a1, \u09ac\u09cd\u09af\u09be\u0982\u0995 \u098f\u09ac\u0982 \u09b8\u09ae\u09c1\u09a6\u09cd\u09b0 \u09ac\u09a8\u09cd\u09a6\u09b0\u09c7\u09b0 \u09b8\u09be\u0987\u09ac\u09be\u09b0 \u09b8\u09c1\u09b0\u0995\u09cd\u09b7\u09be \u098f\u0996\u09a8 \u0995\u09cd\u09b7\u09c7\u09aa\u09a3\u09be\u09b8\u09cd\u09a4\u09cd\u09b0 \u09aa\u09cd\u09b0\u09a4\u09bf\u09b0\u0995\u09cd\u09b7\u09be\u09b0 \u09ae\u09a4\u09cb\u0987 \u09b8\u09ae\u09be\u09a8 \u0997\u09c1\u09b0\u09c1\u09a4\u09cd\u09ac\u09aa\u09c2\u09b0\u09cd\u09a3\u0964",
        "analyticalSeminarQuestions": [
          "Can classical nuclear deterrence concepts (like MAD) apply to offensive cyber warfare?",
          "What are the strategic dangers of delegating military kill-chains to autonomous AI algorithms?"
        ],
        "keyReadings": [
          {
            "title": "Cyber War Will Not Take Place",
            "author": "Thomas Rid",
            "sourceType": "Academic Journal",
            "coreConcept": "Cyber sabotage, espionage, and the limits of cyber warfare."
          }
        ]
      }
    ],
    "checkpointQuiz": {
      "id": "quiz_p5",
      "pillarId": "pillar5_security_strategy",
      "title": "Seminar Checkpoint 5: Strategic Threat Assessment \u2014 Formulating a National Maritime Deterrence Doctrine",
      "passingScorePercentage": 75,
      "questions": [
        {
          "id": "q5_1",
          "prompt": "What is the strategic distinction between Alfred Thayer Mahan's 'Command of the Sea' and Julian Corbett's 'Sea Denial'?",
          "options": [
            "Mahan emphasizes land-based tanks while Corbett focuses on cavalry",
            "Command of the sea aims for total oceanic control via decisive fleet battles, while Sea Denial aims to prevent an adversary from safely utilizing sea lanes",
            "Corbett rejected all naval forces in favor of economic boycotts",
            "Mahan argued that navies should only engage in peaceful tourist cruises"
          ],
          "correctIndex": 1,
          "academicRationale": "Corbett demonstrated that weaker or littoral navies can successfully achieve Sea Denial (via submarines, mines, and shore missiles) without needing an expensive battle fleet to achieve total Command.",
          "banglaExplanation": "\u09ae\u09be\u09b9\u09be\u09a8 \u099a\u09c7\u09af\u09bc\u09c7\u099b\u09bf\u09b2\u09c7\u09a8 \u09ac\u09bf\u09b6\u09be\u09b2 \u09a8\u09cc\u09ac\u09b9\u09b0 \u09a6\u09bf\u09af\u09bc\u09c7 \u09b8\u09ae\u09c1\u09a6\u09cd\u09b0\u09c7\u09b0 \u09aa\u09c2\u09b0\u09cd\u09a3 \u09a8\u09bf\u09af\u09bc\u09a8\u09cd\u09a4\u09cd\u09b0\u09a3; \u0985\u09a8\u09cd\u09af\u09a6\u09bf\u0995\u09c7 \u0995\u09b0\u09cd\u09ac\u09c7\u099f \u09a6\u09c7\u0996\u09bf\u09af\u09bc\u09c7\u099b\u09c7\u09a8 \u0989\u09aa\u0995\u09c2\u09b2\u09c0\u09af\u09bc \u09a6\u09c7\u09b6 \u09ae\u09bf\u09b8\u09be\u0987\u09b2 \u0993 \u09b8\u09be\u09ac\u09ae\u09c7\u09b0\u09bf\u09a8 \u09a6\u09bf\u09af\u09bc\u09c7 \u09b6\u09a4\u09cd\u09b0\u09c1\u09b0 \u09b8\u09ae\u09c1\u09a6\u09cd\u09b0 \u09ac\u09cd\u09af\u09ac\u09b9\u09be\u09b0 \u0986\u099f\u0995\u09c7 \u09a6\u09bf\u09a4\u09c7 \u09aa\u09be\u09b0\u09c7 (\u09b8\u09bf \u09a1\u09bf\u09a8\u09be\u09af\u09bc\u09be\u09b2)\u0964"
        },
        {
          "id": "q5_2",
          "prompt": "What is Glenn Snyder's 'Stability-Instability Paradox' in nuclear deterrence?",
          "options": [
            "Nuclear weapons make all conventional weapons completely vanish from the planet",
            "Strategic nuclear stability between two superpowers eliminates total war at the high end, but paradoxically makes low-level conventional skirmishes and proxy conflicts safer and more likely",
            "Nuclear power plants always cause financial bankruptcy",
            "A treaty that requires all countries to build equal numbers of tanks"
          ],
          "correctIndex": 1,
          "academicRationale": "Snyder showed that because neither side dares to escalate to mutual nuclear destruction, states feel emboldened to engage in localized proxy wars below the nuclear threshold.",
          "banglaExplanation": "\u09b8\u09cd\u09a8\u09be\u0987\u09a1\u09be\u09b0\u09c7\u09b0 \u09aa\u09cd\u09af\u09be\u09b0\u09be\u09a1\u0995\u09cd\u09b8 \u09a6\u09c7\u0996\u09be\u09af\u09bc \u09af\u09c7 \u09aa\u09be\u09b0\u09ae\u09be\u09a3\u09ac\u09bf\u0995 \u09af\u09c1\u09a6\u09cd\u09a7\u09c7\u09b0 \u09ad\u09af\u09bc\u09c7 \u09a6\u09c7\u09b6\u0997\u09c1\u09b2\u09cb \u09b8\u09b0\u09be\u09b8\u09b0\u09bf \u09ae\u09b9\u09be\u09af\u09c1\u09a6\u09cd\u09a7\u09c7 \u09af\u09be\u09af\u09bc \u09a8\u09be \u09a0\u09bf\u0995\u0987, \u09a4\u09ac\u09c7 \u098f\u0987 \u09a8\u09bf\u09b0\u09be\u09aa\u09a4\u09cd\u09a4\u09be\u09b0 \u09b8\u09c1\u09af\u09cb\u0997 \u09a8\u09bf\u09af\u09bc\u09c7 \u099b\u09cb\u099f\u0996\u09be\u099f\u09cb \u09b8\u09c0\u09ae\u09be\u09a8\u09cd\u09a4 \u09b8\u0982\u0998\u09be\u09a4 \u0993 \u09aa\u09cd\u09b0\u0995\u09cd\u09b8\u09bf \u09af\u09c1\u09a6\u09cd\u09a7\u09c7 \u09b2\u09bf\u09aa\u09cd\u09a4 \u09b9\u09af\u09bc\u0964"
        }
      ]
    }
  },
  {
    "id": "pillar6_intl_law",
    "termId": "term3",
    "termTitle": "\ud83d\udee1\ufe0f TERM III: STRATEGIC STUDIES, GLOBAL SECURITY & INTERNATIONAL LAW",
    "pillarNumber": 6,
    "title": "Public International Law, Human Rights & Multilateral Governance",
    "categoryBadge": "International Jurisprudence & Lawfare",
    "shortDescription": "Understand public international law sources, UN Charter use of force, UNCLOS maritime delimitation, ICJ/ICC tribunals, and statecraft lawfare.",
    "academicObjective": "Analyze customary law, jus cogens, Geneva Conventions, UN Security Council Chapter VII veto politics, and ITLOS/PCA maritime jurisprudence.",
    "competencyArea": "International Legal Regimes & Sovereign Lawfare",
    "lectures": [
      {
        "id": "lec6_1",
        "pillarId": "pillar6_intl_law",
        "lectureNumber": "6.1",
        "title": "Sources & Enforcement of Public International Law",
        "subtitle": "Treaties, Customary International Law (Opinio Juris), Jus Cogens & ICJ Jurisdiction (Statute Art. 38)",
        "readTimeMinutes": 22,
        "overview": "Public International Law (PIL) provides the formal normative architecture of the interstate system. This lecture analyzes the four formal sources under ICJ Statute Article 38 (Treaties, Custom, General Principles, Judicial Decisions/Teachings), the formation of Customary International Law (State Practice + Opinio Juris), peremptory norms (Jus Cogens), and the consent-based jurisdiction of the ICJ.",
        "theoreticalFrameworks": [
          {
            "name": "Customary International Law & Opinio Juris",
            "concept": "General, consistent state practice accepted as legal obligation; binds states even without a signed treaty.",
            "application": "Asserting international transboundary water and maritime rights."
          },
          {
            "name": "Jus Cogens (Peremptory Norms)",
            "concept": "Non-derogable core legal norms (prohibition of aggression, genocide, slavery, torture) that invalidate conflicting treaties.",
            "application": "Challenging coercive bilateral treaties forced by great powers."
          }
        ],
        "statecraftCaseStudy": {
          "title": "Nicaragua v. United States (ICJ 1986)",
          "historicalContext": "Nicaragua sued the US for mining its harbors and financing Contra rebels.",
          "strategicAnalysis": "The ICJ ruled the US violated customary international law on non-use of force and sovereign non-intervention.",
          "lessonsForStatecraft": "Small states can secure landmark legal victories against superpowers in international judicial forums."
        },
        "banglaDiplomaticSummary": "\u0986\u09a8\u09cd\u09a4\u09b0\u09cd\u099c\u09be\u09a4\u09bf\u0995 \u0986\u0987\u09a8\u09c7\u09b0 \u0989\u09ce\u09b8 (\u099a\u09c1\u0995\u09cd\u09a4\u09bf, \u0995\u09be\u09b8\u09cd\u099f\u09ae\u09be\u09b0\u09bf \u09b2 \u098f\u09ac\u0982 \u099c\u09c1\u09b8 \u0995\u09cb\u099c\u09c7\u09a8\u09b8) \u098f\u09ac\u0982 \u0986\u09a8\u09cd\u09a4\u09b0\u09cd\u099c\u09be\u09a4\u09bf\u0995 \u0986\u09a6\u09be\u09b2\u09a4\u09c7\u09b0 (\u0986\u0987\u09b8\u09bf\u099c\u09c7) \u09b0\u09be\u09af\u09bc \u0995\u09cd\u09b7\u09c1\u09a6\u09cd\u09b0 \u09b0\u09be\u09b7\u09cd\u099f\u09cd\u09b0\u09c7\u09b0 \u099c\u09a8\u09cd\u09af \u09aa\u09b0\u09be\u09b6\u0995\u09cd\u09a4\u09bf\u09b0 \u09ac\u09bf\u09b0\u09c1\u09a6\u09cd\u09a7\u09c7 \u0985\u09a8\u09cd\u09af\u09a4\u09ae \u09aa\u09cd\u09b0\u09a7\u09be\u09a8 \u0986\u0987\u09a8\u09bf \u09a2\u09be\u09b2\u0964",
        "analyticalSeminarQuestions": [
          "Why is 'Opinio Juris' required in addition to physical state practice to establish customary international law?",
          "How can a state utilize ICJ advisory opinions to amplify diplomatic campaigns?"
        ],
        "keyReadings": [
          {
            "title": "Principles of Public International Law",
            "author": "Ian Brownlie / James Crawford",
            "sourceType": "Classic Text",
            "coreConcept": "Sources, state responsibility, and international tribunals."
          }
        ]
      },
      {
        "id": "lec6_2",
        "pillarId": "pillar6_intl_law",
        "lectureNumber": "6.2",
        "title": "Use of Force (Jus ad Bellum) & International Humanitarian Law (Jus in Bello)",
        "subtitle": "UN Charter Article 2(4), Article 51 Self-Defense, Geneva Conventions, Proportionality & Distinction",
        "readTimeMinutes": 22,
        "overview": "International law strictly regulates when states may go to war (Jus ad Bellum) and how war must be conducted (Jus in Bello). We dissect UN Charter Article 2(4) prohibition of force, Article 51 individual/collective self-defense exceptions, the Caroline Doctrine on preemptive defense, and the 1949 Geneva Conventions principles (Military Necessity, Distinction, Proportionality, Humanity).",
        "theoreticalFrameworks": [
          {
            "name": "The Caroline Test of Imminent Self-Defense (1837)",
            "concept": "Self-defense requires 'a necessity of self-defense, instant, overwhelming, leaving no choice of means, and no moment for deliberation.'",
            "application": "Evaluating legal claims of anticipatory self-defense."
          },
          {
            "name": "Core Principles of IHL (Geneva Conventions)",
            "concept": "Strict distinction between combatants and civilians; absolute prohibition on disproportionate collateral damage.",
            "application": "Drafting operational rules of engagement (ROE) for national armed forces."
          }
        ],
        "statecraftCaseStudy": {
          "title": "The 2003 Invasion of Iraq: The Legality of Unilateral Preemption",
          "historicalContext": "The US-led coalition invaded Iraq without explicit UN Security Council authorization under Chapter VII.",
          "strategicAnalysis": "Widely regarded by international legal scholars as a violation of UN Charter Article 2(4), eroding the post-WWII collective security framework.",
          "lessonsForStatecraft": "Unilateral military action outside UN Charter mechanisms causes long-term erosion of international legal order."
        },
        "banglaDiplomaticSummary": "\u099c\u09be\u09a4\u09bf\u09b8\u0982\u0998 \u09b8\u09a8\u09a6\u09c7\u09b0 \u0985\u09a8\u09c1\u099a\u09cd\u099b\u09c7\u09a6 \u09e8(\u09ea) \u0985\u09a8\u09c1\u09af\u09be\u09af\u09bc\u09c0 \u09af\u09c1\u09a6\u09cd\u09a7 \u09b8\u09ae\u09cd\u09aa\u09c2\u09b0\u09cd\u09a3 \u09a8\u09bf\u09b7\u09bf\u09a6\u09cd\u09a7, \u0995\u09c7\u09ac\u09b2 \u0985\u09a8\u09c1\u099a\u09cd\u099b\u09c7\u09a6 \u09eb\u09e7-\u098f\u09b0 \u0986\u09a4\u09cd\u09ae\u09b0\u0995\u09cd\u09b7\u09be \u098f\u09ac\u0982 \u09a8\u09bf\u09b0\u09be\u09aa\u09a4\u09cd\u09a4\u09be \u09aa\u09b0\u09bf\u09b7\u09a6\u09c7\u09b0 \u0985\u09a8\u09c1\u09ae\u09cb\u09a6\u09a8 \u099b\u09be\u09a1\u09bc\u09be; \u099c\u09c7\u09a8\u09c7\u09ad\u09be \u0995\u09a8\u09ad\u09c7\u09a8\u09b6\u09a8 \u09b8\u09be\u09a7\u09be\u09b0\u09a3 \u09a8\u09be\u0997\u09b0\u09bf\u0995\u09a6\u09c7\u09b0 \u09b8\u09c1\u09b0\u0995\u09cd\u09b7\u09be\u09af\u09bc \u09ac\u09be\u09a7\u09cd\u09af \u0995\u09b0\u09c7\u0964",
        "analyticalSeminarQuestions": [
          "Does the rise of non-state terrorist actors and cyber weapons require updating the 1837 Caroline Test?",
          "How does International Humanitarian Law enforce accountability for deliberate civilian targeting?"
        ],
        "keyReadings": [
          {
            "title": "The Use of Force in International Law",
            "author": "Christine Gray",
            "sourceType": "Academic Journal",
            "coreConcept": "Jus ad bellum, self-defense, and Security Council mandates."
          }
        ]
      },
      {
        "id": "lec6_3",
        "pillarId": "pillar6_intl_law",
        "lectureNumber": "6.3",
        "title": "The United Nations System & Collective Security Architecture",
        "subtitle": "UNSC Structure, Voting Dynamics, Chapter VII Enforcement Powers, Veto Politics & UNSC Reform",
        "readTimeMinutes": 20,
        "overview": "The United Nations represents the premier multilateral forum. This lecture examines the design of the UN Charter, the power dynamics between the General Assembly and Security Council, Chapter VI peaceful dispute settlement vs Chapter VII binding sanctions and military enforcement, P5 veto politics, and the structural debates surrounding UNSC expansion.",
        "theoreticalFrameworks": [
          {
            "name": "UN Charter Chapter VII Enforcement Powers",
            "concept": "Articles 39-42 empower the UNSC to identify threats to peace and authorize mandatory economic sanctions or military force.",
            "application": "Navigating international sanctions regimes and embargoes."
          },
          {
            "name": "Uniting for Peace Resolution (UNGA Res 377A)",
            "concept": "Empowers the General Assembly to recommend collective measures when the Security Council is paralyzed by P5 veto.",
            "application": "Mobilizing multilateral majorities during great power gridlock."
          }
        ],
        "statecraftCaseStudy": {
          "title": "The Rohingya Humanitarian Crisis & UNSC Veto Politics",
          "historicalContext": "Myanmar's military carried out mass atrocities and ethnic cleansing against the Rohingya in Rakhine State in 2017.",
          "strategicAnalysis": "P5 veto alignments repeatedly blocked binding Chapter VII sanctions in the Security Council, shifting the diplomatic battle to the ICJ (The Gambia v. Myanmar) and the UNGA.",
          "lessonsForStatecraft": "When the Security Council is veto-paralyzed, middle powers must mobilize international judicial courts and General Assembly coalitions."
        },
        "banglaDiplomaticSummary": "\u099c\u09be\u09a4\u09bf\u09b8\u0982\u0998 \u09a8\u09bf\u09b0\u09be\u09aa\u09a4\u09cd\u09a4\u09be \u09aa\u09b0\u09bf\u09b7\u09a6\u09c7\u09b0 \u09ad\u09c7\u099f\u09cb \u09b0\u09be\u099c\u09a8\u09c0\u09a4\u09bf\u09b0 \u0995\u09be\u09b0\u09a3\u09c7 \u0985\u09a8\u09c7\u0995 \u09b8\u09ae\u09af\u09bc \u0995\u09be\u09b0\u09cd\u09af\u0995\u09b0 \u09ac\u09cd\u09af\u09ac\u09b8\u09cd\u09a5\u09be \u09a8\u09c7\u0993\u09af\u09bc\u09be \u09b8\u09ae\u09cd\u09ad\u09ac \u09b9\u09af\u09bc \u09a8\u09be; \u09a4\u09ac\u09c7 \u09b8\u09be\u09a7\u09be\u09b0\u09a3 \u09aa\u09b0\u09bf\u09b7\u09a6 \u098f\u09ac\u0982 \u0986\u09a8\u09cd\u09a4\u09b0\u09cd\u099c\u09be\u09a4\u09bf\u0995 \u0986\u09a6\u09be\u09b2\u09a4\u09c7\u09b0 \u09ae\u09be\u09a7\u09cd\u09af\u09ae\u09c7 \u0986\u0987\u09a8\u09bf \u099c\u09ac\u09be\u09ac\u09a6\u09bf\u09b9\u09bf\u09a4\u09be \u09a8\u09bf\u09b6\u09cd\u099a\u09bf\u09a4 \u0995\u09b0\u09be \u09af\u09be\u09af\u09bc\u0964",
        "analyticalSeminarQuestions": [
          "Why has comprehensive UN Security Council structural reform remained deadlocked for decades?",
          "How can small states leverage UN General Assembly coalitions to bypass Security Council inaction?"
        ],
        "keyReadings": [
          {
            "title": "The Oxford Handbook on the United Nations",
            "author": "Thomas G. Weiss & Sam Daws",
            "sourceType": "Classic Text",
            "coreConcept": "UN Charter architecture, peace operations, and reform."
          }
        ]
      },
      {
        "id": "lec6_4",
        "pillarId": "pillar6_intl_law",
        "lectureNumber": "6.4",
        "title": "International Criminal Jurisprudence & Global Regimes",
        "subtitle": "International Criminal Court (Rome Statute), Universal Jurisdiction, Sanctions & Refugee Conventions",
        "readTimeMinutes": 22,
        "overview": "International Criminal Law enforces individual criminal accountability for the gravest atrocities: Genocide, Crimes Against Humanity, War Crimes, and the Crime of Aggression. We examine the Rome Statute of the ICC, the principle of Complementarity, the 1948 Genocide Convention, and the 1951 Refugee Convention regarding non-refoulement.",
        "theoreticalFrameworks": [
          {
            "name": "ICC Principle of Complementarity",
            "concept": "The ICC acts only when domestic national courts are unwilling or genuinely unable to prosecute grave international crimes.",
            "application": "Evaluating jurisdictional thresholds for international criminal indictments."
          },
          {
            "name": "The Principle of Non-Refoulement (1951 Convention)",
            "concept": "Prohibits returning refugees to a territory where their life or freedom would be threatened on account of race, religion, or nationality.",
            "application": "Managing international humanitarian law obligations during mass refugee influxes."
          }
        ],
        "statecraftCaseStudy": {
          "title": "The ICJ Genocide Case: The Gambia v. Myanmar (2020 Order)",
          "historicalContext": "The Gambia brought Myanmar before the ICJ under the 1948 Genocide Convention for atrocities against the Rohingya.",
          "strategicAnalysis": "The ICJ unanimously issued binding Provisional Measures ordering Myanmar to prevent genocidal acts and preserve evidence.",
          "lessonsForStatecraft": "Universal jurisdiction and multilateral legal treaties enable third-party states to enforce humanitarian accountability globally."
        },
        "banglaDiplomaticSummary": "\u0986\u09a8\u09cd\u09a4\u09b0\u09cd\u099c\u09be\u09a4\u09bf\u0995 \u0985\u09aa\u09b0\u09be\u09a7 \u0986\u09a6\u09be\u09b2\u09a4 (\u0986\u0987\u09b8\u09bf\u09b8\u09bf), \u099c\u09c7\u09a8\u09c7\u09ad\u09be \u0993 \u099c\u09c7\u09a8\u09cb\u09b8\u09be\u0987\u09a1 \u0995\u09a8\u09ad\u09c7\u09a8\u09b6\u09a8 \u09ac\u09bf\u09b6\u09cd\u09ac\u09ac\u09cd\u09af\u09be\u09aa\u09c0 \u09ae\u09be\u09a8\u09ac\u09a4\u09be\u09ac\u09bf\u09b0\u09cb\u09a7\u09c0 \u0985\u09aa\u09b0\u09be\u09a7\u09c7\u09b0 \u09ac\u09bf\u099a\u09be\u09b0 \u09a8\u09bf\u09b6\u09cd\u099a\u09bf\u09a4 \u0995\u09b0\u09c7 \u098f\u09ac\u0982 \u09b0\u09be\u09b7\u09cd\u099f\u09cd\u09b0\u0997\u09c1\u09b2\u09cb\u0995\u09c7 \u09ae\u09be\u09a8\u09ac\u09bf\u0995 \u0986\u0987\u09a8 \u09ae\u09be\u09a8\u09a4\u09c7 \u09ac\u09be\u09a7\u09cd\u09af \u0995\u09b0\u09c7\u0964",
        "analyticalSeminarQuestions": [
          "How does the principle of complementarity protect sovereign national judicial authority?",
          "What are the enforcement limitations of ICC arrest warrants against sitting heads of state?"
        ],
        "keyReadings": [
          {
            "title": "An Introduction to International Criminal Law",
            "author": "Robert Cryer et al.",
            "sourceType": "Academic Journal",
            "coreConcept": "Rome Statute, universal jurisdiction, and international crimes."
          }
        ]
      }
    ],
    "checkpointQuiz": {
      "id": "quiz_p6",
      "pillarId": "pillar6_intl_law",
      "title": "Seminar Checkpoint 6: Legal Briefing \u2014 Analyzing Jurisdictional Thresholds and State Compliance in Maritime Delimitation Disputes",
      "passingScorePercentage": 75,
      "questions": [
        {
          "id": "q6_1",
          "prompt": "Under UN Charter Article 2(4) and customary international law, which of the following acts constitutes an unlawful threat or use of force?",
          "options": [
            "Filing a peaceful maritime dispute before the International Tribunal for the Law of the Sea (ITLOS)",
            "Arming, financing, and training insurgent paramilitary forces to destabilize a foreign sovereign government (as affirmed in ICJ Nicaragua 1986)",
            "Conducting peaceful bilateral tariff reduction negotiations under WTO rules",
            "Delivering diplomatic notes of protest through accredited ambassadors"
          ],
          "correctIndex": 1,
          "academicRationale": "The ICJ ruled in Nicaragua (1986) that arming and financing insurgents constitutes an unlawful use of force and intervention.",
          "banglaExplanation": "\u0986\u0987\u09b8\u09bf\u099c\u09c7 \u09a8\u09bf\u0995\u09be\u09b0\u09be\u0997\u09c1\u09af\u09bc\u09be (\u09e7\u09ef\u09ee\u09ec) \u09ae\u09be\u09ae\u09b2\u09be\u09af\u09bc \u09b0\u09be\u09af\u09bc \u09a6\u09c7\u09af\u09bc \u09af\u09c7 \u0985\u09a8\u09cd\u09af \u0995\u09cb\u09a8\u09cb \u09a6\u09c7\u09b6\u09c7\u09b0 \u09b8\u09b0\u0995\u09be\u09b0 \u0989\u09ce\u0996\u09be\u09a4\u09c7 \u09ac\u09bf\u09a6\u09cd\u09b0\u09cb\u09b9\u09c0\u09a6\u09c7\u09b0 \u0985\u09b0\u09cd\u09a5 \u0993 \u0985\u09b8\u09cd\u09a4\u09cd\u09b0 \u09a6\u09c7\u0993\u09af\u09bc\u09be \u09ac\u09c7\u0986\u0987\u09a8\u09bf \u09ac\u09b2\u09aa\u09cd\u09b0\u09af\u09bc\u09cb\u0997 \u0993 \u09b9\u09b8\u09cd\u09a4\u0995\u09cd\u09b7\u09c7\u09aa\u0964"
        },
        {
          "id": "q6_2",
          "prompt": "What is the principle of 'Non-Refoulement' in international refugee and humanitarian law?",
          "options": [
            "Mandatory taxation of foreign tourists",
            "The absolute prohibition against expelling or returning refugees to a territory where their life or freedom would be threatened",
            "A rule requiring all diplomats to speak French",
            "The right of a state to seize foreign bank accounts"
          ],
          "correctIndex": 1,
          "academicRationale": "Non-refoulement (1951 Refugee Convention Article 33) is a foundational customary international law norm protecting individuals from being returned to persecution.",
          "banglaExplanation": "\u09a8\u09a8-\u09b0\u09bf\u09ab\u09be\u0989\u09b2\u09ae\u09c7\u09a8\u09cd\u099f \u09b9\u09b2\u09cb \u0986\u09a8\u09cd\u09a4\u09b0\u09cd\u099c\u09be\u09a4\u09bf\u0995 \u0986\u0987\u09a8\u09c7\u09b0 \u0985\u09b2\u0999\u09cd\u0998\u09a8\u09c0\u09af\u09bc \u09a8\u09c0\u09a4\u09bf \u09af\u09be \u0995\u09cb\u09a8\u09cb \u09b6\u09b0\u09a3\u09be\u09b0\u09cd\u09a5\u09c0\u0995\u09c7 \u098f\u09ae\u09a8 \u09a6\u09c7\u09b6\u09c7 \u09ab\u09c7\u09b0\u09a4 \u09aa\u09be\u09a0\u09be\u09a8\u09cb \u09a8\u09bf\u09b7\u09bf\u09a6\u09cd\u09a7 \u0995\u09b0\u09c7 \u09af\u09c7\u0996\u09be\u09a8\u09c7 \u09a4\u09be\u09b0 \u099c\u09c0\u09ac\u09a8 \u09ac\u09be \u09b8\u09cd\u09ac\u09be\u09a7\u09c0\u09a8\u09a4\u09be \u09b9\u09c1\u09ae\u0995\u09bf\u09b0 \u09ae\u09c1\u0996\u09c7 \u09aa\u09a1\u09bc\u09ac\u09c7\u0964"
        }
      ]
    }
  },
  {
    "id": "pillar7_ipe_geoeconomics",
    "termId": "term4",
    "termTitle": "\ud83c\udf10 TERM IV: INTERNATIONAL POLITICAL ECONOMY & REGIONAL GEOPOLITICS",
    "pillarNumber": 7,
    "title": "International Political Economy, Geoeconomics & Trade Statecraft",
    "categoryBadge": "Geoeconomics & Trade Statecraft",
    "shortDescription": "Analyze global political economy paradigms, dollar hegemony, SWIFT weaponization, multilateral trade architecture (WTO, RCEP), and critical minerals.",
    "academicObjective": "Master Mercantilist/Liberal/Structuralist paradigms, Bretton Woods, supply chain friend-shoring, and energy/climate geopolitics.",
    "competencyArea": "Geoeconomics & Strategic Trade Policy",
    "lectures": [
      {
        "id": "lec7_1",
        "pillarId": "pillar7_ipe_geoeconomics",
        "lectureNumber": "7.1",
        "title": "Paradigms of Global Political Economy",
        "subtitle": "Mercantilism/Economic Nationalism, Liberal Globalism & Structuralist/Marxist Critiques of Capital Accumulation",
        "readTimeMinutes": 20,
        "overview": "International Political Economy (IPE) studies the mutual interaction of states (power) and markets (wealth). This lecture compares the three core paradigms: Mercantilism/Realism (Alexander Hamilton, Friedrich List: wealth serves power), Liberalism (Adam Smith, David Ricardo: free trade and absolute gains), and Structuralism (Marx, Wallerstein: unequal exchange and capital accumulation).",
        "theoreticalFrameworks": [
          {
            "name": "Economic Nationalism & Strategic Industrial Policy",
            "concept": "Trade surpluses, infant-industry protection, and domestic technological mastery are essential for national sovereignty.",
            "application": "Designing national industrial export subsidies and semiconductor incentives."
          },
          {
            "name": "Ricardian Comparative Advantage vs. Strategic Trade Theory",
            "concept": "Free trade maximizes aggregate global output, but strategic trade policy allows states to capture high-value technological rents.",
            "application": "Upgrading manufacturing from low-wage garments to high-tech pharmaceuticals and electronics."
          }
        ],
        "statecraftCaseStudy": {
          "title": "The Post-2018 US-China Tariff & Tech War",
          "historicalContext": "The United States imposed sweeping Section 301 tariffs on Chinese imports and restricted advanced AI semiconductor exports.",
          "strategicAnalysis": "Marked the structural return of economic mercantilism, ending three decades of unconstrained liberal globalization.",
          "lessonsForStatecraft": "Global markets are subordinate to great power security competition; middle powers must prepare for fractured supply chains."
        },
        "banglaDiplomaticSummary": "\u0986\u09a8\u09cd\u09a4\u09b0\u09cd\u099c\u09be\u09a4\u09bf\u0995 \u09b0\u09be\u099c\u09a8\u09c8\u09a4\u09bf\u0995 \u0985\u09b0\u09cd\u09a5\u09a8\u09c0\u09a4\u09bf \u09a6\u09c7\u0996\u09be\u09af\u09bc \u09af\u09c7 \u09ac\u09be\u099c\u09be\u09b0 \u0993 \u09b0\u09be\u09b7\u09cd\u099f\u09cd\u09b0 \u09aa\u09b0\u09b8\u09cd\u09aa\u09b0\u09c7\u09b0 \u09b8\u09be\u09a5\u09c7 \u09af\u09c1\u0995\u09cd\u09a4\u0964 \u09ae\u09be\u09b0\u0995\u09c7\u09a8\u09cd\u099f\u09be\u0987\u09b2\u09bf\u099c\u09ae \u09ac\u09be \u0985\u09b0\u09cd\u09a5\u09a8\u09c8\u09a4\u09bf\u0995 \u099c\u09be\u09a4\u09c0\u09af\u09bc\u09a4\u09be\u09ac\u09be\u09a6 \u099c\u09be\u09a4\u09c0\u09af\u09bc \u09b6\u0995\u09cd\u09a4\u09bf\u09b0 \u099c\u09a8\u09cd\u09af \u09b6\u09bf\u09b2\u09cd\u09aa \u09b8\u09c1\u09b0\u0995\u09cd\u09b7\u09be\u0995\u09c7 \u09b8\u09ac\u099a\u09c7\u09af\u09bc\u09c7 \u09ac\u09c7\u09b6\u09bf \u0997\u09c1\u09b0\u09c1\u09a4\u09cd\u09ac \u09a6\u09c7\u09af\u09bc\u0964",
        "analyticalSeminarQuestions": [
          "Why is unconstrained free trade rarely practiced by major powers during geopolitical transitions?",
          "How can emerging middle powers protect infant industries without violating WTO rules?"
        ],
        "keyReadings": [
          {
            "title": "The Political Economy of International Relations",
            "author": "Robert Gilpin",
            "sourceType": "Classic Text",
            "coreConcept": "States, markets, and global economic hegemony."
          }
        ]
      },
      {
        "id": "lec7_2",
        "pillarId": "pillar7_ipe_geoeconomics",
        "lectureNumber": "7.2",
        "title": "International Monetary Architecture & Dollar Hegemony",
        "subtitle": "The Bretton Woods System, Post-1971 Floating Currencies, IMF Adjustment, Foreign Reserves & De-Dollarization",
        "readTimeMinutes": 22,
        "overview": "The international monetary architecture underpins global power. We trace the 1944 Bretton Woods system, Nixon's 1971 gold decoupling, the petrodollar recycling system, the role of the IMF and World Bank in sovereign debt management, Farrell & Newman's Weaponized Interdependence (SWIFT sanctions), and contemporary de-dollarization and bilateral local-currency settlement dynamics.",
        "theoreticalFrameworks": [
          {
            "name": "The Dollar's 'Exorbitant Privilege' (Giscard d'Estaing)",
            "concept": "The US can print the global reserve currency to finance structural current-account deficits and project global power.",
            "application": "Managing sovereign foreign exchange reserve exposure."
          },
          {
            "name": "Weaponized Interdependence & Chokepoint Sanctions",
            "concept": "Controlling centralized financial clearing nodes (SWIFT, CHIPS) allows hub states to cut adversaries off from global commerce.",
            "application": "Diversifying national reserves into multi-currency baskets and physical gold."
          }
        ],
        "statecraftCaseStudy": {
          "title": "The 2022 Central Bank Sanctions & G7 Freezing of Russian Reserves",
          "historicalContext": "Following the Ukraine war, Western powers froze $300 billion in Russian sovereign central bank assets.",
          "strategicAnalysis": "Crossed a historic threshold by weaponizing the sovereign reserve currency system, accelerating Global South interest in BRICS alternative payment channels.",
          "lessonsForStatecraft": "Sovereign reserves stored in foreign jurisdictions carry acute geopolitical counterparty risks."
        },
        "banglaDiplomaticSummary": "\u09a1\u09b2\u09be\u09b0\u09c7\u09b0 \u09ac\u09c8\u09b6\u09cd\u09ac\u09bf\u0995 \u0986\u09a7\u09bf\u09aa\u09a4\u09cd\u09af \u098f\u09ac\u0982 \u09b8\u09c1\u0987\u09ab\u099f \u09ac\u09cd\u09af\u09be\u0982\u0995\u09bf\u0982 \u09ac\u09cd\u09af\u09ac\u09b8\u09cd\u09a5\u09be\u09b0 \u0985\u09b8\u09cd\u09a4\u09cd\u09b0\u09be\u09af\u09bc\u09a8 \u09aa\u09cd\u09b0\u09ae\u09be\u09a3 \u0995\u09b0\u09c7\u099b\u09c7 \u09af\u09c7 \u09ac\u09bf\u09a6\u09c7\u09b6\u09bf \u09ae\u09c1\u09a6\u09cd\u09b0\u09be\u09b0 \u09b0\u09bf\u099c\u09be\u09b0\u09cd\u09ad \u09b8\u09c1\u09b0\u0995\u09cd\u09b7\u09be\u09af\u09bc \u09ac\u09b9\u09c1\u09ae\u09c1\u0996\u09c0\u0995\u09b0\u09a3 \u0993 \u09a6\u09cd\u09ac\u09bf\u09aa\u09be\u0995\u09cd\u09b7\u09bf\u0995 \u09ae\u09c1\u09a6\u09cd\u09b0\u09be \u09a8\u09bf\u09b7\u09cd\u09aa\u09a4\u09cd\u09a4\u09bf \u0985\u09a4\u09cd\u09af\u09a8\u09cd\u09a4 \u099c\u09b0\u09c1\u09b0\u09bf\u0964",
        "analyticalSeminarQuestions": [
          "What are the structural obstacles preventing rapid global de-dollarization?",
          "How can developing states manage IMF structural adjustment conditionality while protecting domestic social safety nets?"
        ],
        "keyReadings": [
          {
            "title": "Exorbitant Privilege: The Rise and Fall of the Dollar",
            "author": "Barry Eichengreen",
            "sourceType": "Academic Journal",
            "coreConcept": "Dollar hegemony, reserve currencies, and international monetary order."
          }
        ]
      },
      {
        "id": "lec7_3",
        "pillarId": "pillar7_ipe_geoeconomics",
        "lectureNumber": "7.3",
        "title": "Multilateral Trade, Tariffs & Economic Statecraft",
        "subtitle": "GATT/WTO Architecture, Regional FTAs (RCEP, CPTPP), Supply-Chain Resilience & Targeted Sanctions",
        "readTimeMinutes": 22,
        "overview": "This lecture examines the architecture of global trade governance: Most Favored Nation (MFN) and National Treatment rules under the WTO, the paralysis of the WTO Appellate Body, the rise of mega-regional trade agreements (RCEP, CPTPP), and the strategic restructuring of global manufacturing through 'friend-shoring' and near-shoring.",
        "theoreticalFrameworks": [
          {
            "name": "WTO Non-Discrimination Principles (MFN & National Treatment)",
            "concept": "Treating all foreign trading partners equally and treating foreign goods no less favorably than domestic goods once imported.",
            "application": "Defending national export goods against arbitrary discriminatory tariffs."
          },
          {
            "name": "Strategic Supply Chain 'Friend-Shoring'",
            "concept": "Relocating critical manufacturing supply chains to politically aligned partner states to reduce vulnerability to adversary coercion.",
            "application": "Positioning national industrial parks as trusted alternative manufacturing hubs."
          }
        ],
        "statecraftCaseStudy": {
          "title": "The Regional Comprehensive Economic Partnership (RCEP 2020)",
          "historicalContext": "15 Asia-Pacific nations signed the world's largest free trade agreement, covering 30% of global GDP.",
          "strategicAnalysis": "Created a unified rule-of-origin framework across Asia, accelerating regional supply chain integration independent of US participation.",
          "lessonsForStatecraft": "Joining regional mega-FTAs is critical for export-oriented economies to avoid tariff exclusion."
        },
        "banglaDiplomaticSummary": "\u09ac\u09bf\u09b6\u09cd\u09ac \u09ac\u09be\u09a3\u09bf\u099c\u09cd\u09af \u09b8\u0982\u09b8\u09cd\u09a5\u09be\u09b0 \u09b8\u09cd\u09a5\u09ac\u09bf\u09b0\u09a4\u09be\u09b0 \u09ae\u09c1\u0996\u09c7 \u0986\u09b0\u09b8\u09bf\u0987\u09aa\u09bf \u0993 \u09b8\u09bf\u09aa\u09bf\u099f\u09bf\u09aa\u09bf\u09aa\u09bf\u09b0 \u09ae\u09a4\u09cb \u0986\u099e\u09cd\u099a\u09b2\u09bf\u0995 \u09ae\u09c1\u0995\u09cd\u09a4 \u09ac\u09be\u09a3\u09bf\u099c\u09cd\u09af \u099a\u09c1\u0995\u09cd\u09a4\u09bf \u098f\u09ac\u0982 \u09b8\u09be\u09aa\u09cd\u09b2\u09be\u0987 \u099a\u09c7\u0987\u09a8\u09c7\u09b0 '\u09ab\u09cd\u09b0\u09c7\u09a8\u09cd\u09a1-\u09b6\u09cb\u09b0\u09bf\u0982' \u09ac\u09bf\u09b6\u09cd\u09ac\u09ac\u09be\u09a3\u09bf\u099c\u09cd\u09af\u09c7\u09b0 \u09a8\u09a4\u09c1\u09a8 \u09a6\u09bf\u0995 \u09a8\u09bf\u09b0\u09cd\u09a7\u09be\u09b0\u09a3 \u0995\u09b0\u099b\u09c7\u0964",
        "analyticalSeminarQuestions": [
          "How can a developing country navigate the transition from LDC trade preferences to reciprocal Free Trade Agreements?",
          "Why is the WTO Appellate Body impasse damaging to small trading nations?"
        ],
        "keyReadings": [
          {
            "title": "The World Trade Organization: Law, Practice, and Policy",
            "author": "Mitsuo Matsushita et al.",
            "sourceType": "Classic Text",
            "coreConcept": "WTO law, dispute settlement, and regional trade pacts."
          }
        ]
      },
      {
        "id": "lec7_4",
        "pillarId": "pillar7_ipe_geoeconomics",
        "lectureNumber": "7.4",
        "title": "Energy Security, Critical Minerals & Climate Geopolitics",
        "subtitle": "Hydrocarbon Politics, Transition Mineral Cartels (Lithium, Rare Earths), Climate Diplomacy (UNFCCC/COP) & Green Protectionism",
        "readTimeMinutes": 22,
        "overview": "The global energy transition is creating new geopolitical winners and losers. We analyze OPEC+ market maneuvering, the geopolitics of liquefied natural gas (LNG) maritime supply chains, Chinese dominance in critical transition minerals (rare earths, lithium, cobalt, nickel processing), UNFCCC/COP climate finance statecraft (Loss and Damage Fund), and EU Carbon Border Adjustment Mechanisms (CBAM).",
        "theoreticalFrameworks": [
          {
            "name": "Critical Mineral Asymmetric Chokepoints",
            "concept": "Monopolization of upstream mining and refining of battery/semiconductor minerals creates acute coercive geopolitical leverage.",
            "application": "Securing long-term bilateral mineral access agreements."
          },
          {
            "name": "Climate Justice & Common But Differentiated Responsibilities (CBDR)",
            "concept": "Developed nations bear historical responsibility for greenhouse emissions; developing nations must receive concessional climate finance and technology transfer.",
            "application": "Leading the Climate Vulnerable Forum (CVF) multilateral negotiations."
          }
        ],
        "statecraftCaseStudy": {
          "title": "European Energy Realignment Following the 2022 Nord Stream Cutoff",
          "historicalContext": "The sudden termination of Russian pipeline natural gas forced Europe into a rapid pivot to maritime LNG imports.",
          "strategicAnalysis": "Demonstrated the catastrophic danger of single-source energy dependency, triggering global price shocks for developing LNG importers.",
          "lessonsForStatecraft": "Energy security requires absolute fuel source diversification, strategic reserves, and domestic renewable expansion."
        },
        "banglaDiplomaticSummary": "\u099c\u09cd\u09ac\u09be\u09b2\u09be\u09a8\u09bf \u09a8\u09bf\u09b0\u09be\u09aa\u09a4\u09cd\u09a4\u09be \u098f\u09ac\u0982 \u09b2\u09bf\u09a5\u09bf\u09af\u09bc\u09be\u09ae \u0993 \u09b0\u09c7\u09af\u09bc\u09be\u09b0 \u0986\u09b0\u09cd\u09a5\u09c7\u09b0 \u09ae\u09a4\u09cb \u0996\u09a8\u09bf\u099c\u09c7\u09b0 \u09ad\u09c2-\u09b0\u09be\u099c\u09a8\u09c0\u09a4\u09bf \u09ac\u09bf\u09b6\u09cd\u09ac\u09b6\u0995\u09cd\u09a4\u09bf \u09a8\u09bf\u09b0\u09cd\u09a7\u09be\u09b0\u09a3 \u0995\u09b0\u099b\u09c7; \u099c\u09b2\u09ac\u09be\u09af\u09bc\u09c1 \u0995\u09c2\u099f\u09a8\u09c0\u09a4\u09bf\u09a4\u09c7 \u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6 \u09b8\u09bf\u09ad\u09bf\u098f\u09ab \u099c\u09cb\u099f\u09c7\u09b0 \u09ae\u09be\u09a7\u09cd\u09af\u09ae\u09c7 \u09a8\u09cd\u09af\u09be\u09af\u09cd\u09af \u09b9\u09bf\u09b8\u09cd\u09af\u09be \u09a6\u09be\u09ac\u09bf \u0995\u09b0\u099b\u09c7\u0964",
        "analyticalSeminarQuestions": [
          "How will EU Carbon Border Adjustment Mechanisms (CBAM) impact manufacturing exports from developing countries?",
          "Why is critical mineral refining a more potent geopolitical chokepoint than raw mineral mining?"
        ],
        "keyReadings": [
          {
            "title": "The New Map: Energy, Climate, and the Clash of Nations",
            "author": "Daniel Yergin",
            "sourceType": "Classic Text",
            "coreConcept": "Energy security, renewables transition, and shale geopolitics."
          }
        ]
      }
    ],
    "checkpointQuiz": {
      "id": "quiz_p7",
      "pillarId": "pillar7_ipe_geoeconomics",
      "title": "Seminar Checkpoint 7: Geoeconomic Impact Analysis \u2014 Assessing the Strategic Vulnerability of Critical Supply Chains",
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
          "banglaExplanation": "\u099a\u09cb\u0996\u09aa\u09af\u09bc\u09c7\u09a8\u09cd\u099f \u09aa\u09cd\u09b0\u09ad\u09be\u09ac \u09b9\u09b2\u09cb \u09b8\u09c1\u0987\u09ab\u099f \u09ac\u09be \u09a1\u09b2\u09be\u09b0\u09c7\u09b0 \u09ae\u09a4\u09cb \u0995\u09c7\u09a8\u09cd\u09a6\u09cd\u09b0\u09c0\u09af\u09bc \u09ac\u09c8\u09b6\u09cd\u09ac\u09bf\u0995 \u09a8\u09c7\u099f\u0993\u09af\u09bc\u09be\u09b0\u09cd\u0995\u09c7\u09b0 \u09a8\u09bf\u09af\u09bc\u09a8\u09cd\u09a4\u09cd\u09b0\u09a3 \u09a8\u09bf\u09af\u09bc\u09c7 \u09b6\u09a4\u09cd\u09b0\u09c1\u0995\u09c7 \u09ac\u09bf\u09b6\u09cd\u09ac \u0985\u09b0\u09cd\u09a5\u09a8\u09c0\u09a4\u09bf \u09a5\u09c7\u0995\u09c7 \u09ac\u09bf\u099a\u09cd\u099b\u09bf\u09a8\u09cd\u09a8 \u0995\u09b0\u09be\u09b0 \u0995\u09cd\u09b7\u09ae\u09a4\u09be\u0964"
        },
        {
          "id": "q7_2",
          "prompt": "What does the UNFCCC principle of 'Common But Differentiated Responsibilities' (CBDR) establish in global climate diplomacy?",
          "options": [
            "All countries must pay equal cash taxes regardless of their economic size",
            "While all states share a duty to address climate change, developed countries bear primary responsibility due to historical greenhouse emissions and must provide climate financing",
            "Developing countries must dismantle all their factories immediately",
            "Only island nations are permitted to build solar panels"
          ],
          "correctIndex": 1,
          "academicRationale": "CBDR recognizes that developed nations historically caused the vast majority of atmospheric greenhouse accumulation and have greater financial capacity to assist developing states.",
          "banglaExplanation": "\u09b8\u09bf\u09ac\u09bf\u09a1\u09bf\u0986\u09b0 \u09a8\u09c0\u09a4\u09bf \u0985\u09a8\u09c1\u09b8\u09be\u09b0\u09c7 \u099c\u09b2\u09ac\u09be\u09af\u09bc\u09c1 \u09aa\u09b0\u09bf\u09ac\u09b0\u09cd\u09a4\u09a8\u09c7\u09b0 \u099c\u09a8\u09cd\u09af \u0990\u09a4\u09bf\u09b9\u09be\u09b8\u09bf\u0995\u09ad\u09be\u09ac\u09c7 \u0989\u09a8\u09cd\u09a8\u09a4 \u09a6\u09c7\u09b6\u0997\u09c1\u09b2\u09cb \u09ac\u09c7\u09b6\u09bf \u09a6\u09be\u09af\u09bc\u09c0, \u09a4\u09be\u0987 \u0995\u09cd\u09b7\u09a4\u09bf\u0997\u09cd\u09b0\u09b8\u09cd\u09a4 \u0989\u09a8\u09cd\u09a8\u09af\u09bc\u09a8\u09b6\u09c0\u09b2 \u09a6\u09c7\u09b6\u0997\u09c1\u09b2\u09cb\u0995\u09c7 \u09a4\u09be\u09a6\u09c7\u09b0 \u0995\u09cd\u09b7\u09a4\u09bf\u09aa\u09c2\u09b0\u09a3 \u0993 \u0985\u09b0\u09cd\u09a5\u09be\u09af\u09bc\u09a8 \u09a6\u09c7\u0993\u09af\u09bc\u09be \u09ac\u09be\u09a7\u09cd\u09af\u09a4\u09be\u09ae\u09c2\u09b2\u0995\u0964"
        }
      ]
    }
  },
  {
    "id": "pillar8_regional_bangladesh",
    "termId": "term4",
    "termTitle": "\ud83c\udf10 TERM IV: INTERNATIONAL POLITICAL ECONOMY & REGIONAL GEOPOLITICS",
    "pillarNumber": 8,
    "title": "Regional Security Architecture, Indo-Pacific & Southern Asian Geopolitics",
    "categoryBadge": "Regional Security & Southern Asian Statecraft",
    "shortDescription": "Formulate a rigorous strategic architecture for Bangladesh and Southern Asia: Indo-Pacific balancing, SAARC/BIMSTEC, Bay of Bengal connectivity, and middle-power hedging.",
    "academicObjective": "Analyze Great Power balance across maritime littorals, the Siliguri Corridor, transboundary water governance (Teesta), and small-state omnidirectional statecraft.",
    "competencyArea": "Bangladesh National Security Architecture & Regional Diplomacy",
    "lectures": [
      {
        "id": "lec8_1",
        "pillarId": "pillar8_regional_bangladesh",
        "lectureNumber": "8.1",
        "title": "The Indo-Pacific Paradigm & Great Power Balance",
        "subtitle": "Geostrategic Concepts of the Indo-Pacific, Minilateral Security Groupings (Quad, AUKUS) & Maritime Littoral Competition",
        "readTimeMinutes": 22,
        "overview": "The geopolitical center of gravity has shifted to the Indo-Pacific. This lecture examines the transition from 'Asia-Pacific' to 'Indo-Pacific', the emergence of US-led minilaterals (Quad, AUKUS, IPEF), China's Belt and Road Initiative (BRI) and Global Security Initiative (GSI), and how littoral middle powers guard sovereign autonomy in a contested maritime theater.",
        "theoreticalFrameworks": [
          {
            "name": "Indo-Pacific Free and Open Maritime Order",
            "concept": "Ensuring freedom of navigation, unimpeded commerce, and adherence to international law (UNCLOS) across oceanic waterways.",
            "application": "Formulating Bangladesh's Indo-Pacific Outlook (IPO) emphasizing peace and economic connectivity."
          },
          {
            "name": "Minilateralism vs. Inclusive Multilateralism",
            "concept": "Small flexible coalitions of the willing (Quad, AUKUS) replacing large consensus-based institutions (ASEAN, SAARC).",
            "application": "Engaging issue-based multilateral cooperation without joining formal military blocs."
          }
        ],
        "statecraftCaseStudy": {
          "title": "Bangladesh's Indo-Pacific Outlook (IPO 2023)",
          "historicalContext": "Navigating intense competing pressures from the US Indo-Pacific Strategy and China's Belt and Road Initiative.",
          "strategicAnalysis": "Dhaka released a 15-point Outlook based on non-alignment, UNCLOS compliance, regional connectivity, and shared prosperity, explicitly rejecting exclusive military alliances.",
          "lessonsForStatecraft": "Publishing clear strategic outlooks prevents superpowers from misinterpreting a middle power's non-aligned posture."
        },
        "banglaDiplomaticSummary": "\u0987\u09a8\u09cd\u09a6\u09cb-\u09aa\u09cd\u09af\u09be\u09b8\u09bf\u09ab\u09bf\u0995 \u0985\u099e\u09cd\u099a\u09b2\u09c7 \u0995\u09cb\u09af\u09bc\u09be\u09a1 \u0993 \u0985\u0995\u09c1\u09b8\u09c7\u09b0 \u09ae\u09a4\u09cb \u099c\u09cb\u099f \u098f\u09ac\u0982 \u099a\u09c0\u09a8\u09c7\u09b0 \u09ac\u09bf\u0986\u09b0\u0986\u0987-\u098f\u09b0 \u09ae\u09a7\u09cd\u09af\u0995\u09be\u09b0 \u09aa\u09cd\u09b0\u09a4\u09bf\u09af\u09cb\u0997\u09bf\u09a4\u09be\u09b0 \u09ae\u09be\u099d\u09c7 \u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6\u09c7\u09b0 \u0987\u09a8\u09cd\u09a6\u09cb-\u09aa\u09cd\u09af\u09be\u09b8\u09bf\u09ab\u09bf\u0995 \u0986\u0989\u099f\u09b2\u09c1\u0995 (\u0986\u0987\u09aa\u09bf\u0993) \u09b8\u09cd\u09ac\u09be\u09a7\u09c0\u09a8 \u09ad\u09be\u09b0\u09b8\u09be\u09ae\u09cd\u09af \u09b0\u0995\u09cd\u09b7\u09be\u09b0 \u0989\u09ce\u0995\u09c3\u09b7\u09cd\u099f \u0989\u09a6\u09be\u09b9\u09b0\u09a3\u0964",
        "analyticalSeminarQuestions": [
          "How does the concept of the 'Indo-Pacific' redefine the strategic importance of the Bay of Bengal?",
          "Why do minilateral security groupings create anxieties for traditional consensus-based regional bodies?"
        ],
        "keyReadings": [
          {
            "title": "The Indo-Pacific Empire",
            "author": "Rory Medcalf",
            "sourceType": "Classic Text",
            "coreConcept": "Indo-Pacific geopolitics, maritime containment, and regional middle powers."
          }
        ]
      },
      {
        "id": "lec8_2",
        "pillarId": "pillar8_regional_bangladesh",
        "lectureNumber": "8.2",
        "title": "South Asian Security Dynamics & Strategic Realities",
        "subtitle": "India-Pakistan Nuclear Rivalry, Strategic Corridors, Himalayan Territorial Friction & Connectivity Challenges",
        "readTimeMinutes": 24,
        "overview": "South Asia is one of the world's most densely populated and militarized regions. We dissect the structural realities of South Asian security: India-Pakistan nuclear and cross-border tensions, China-India Himalayan border disputes (Galwan/Doklam), the vulnerability of the 22-km Siliguri Corridor ('Chicken's Neck'), and the collapse of regional trade integration.",
        "theoreticalFrameworks": [
          {
            "name": "The Siliguri Corridor ('Chicken's Neck') Geopolitical Pivot",
            "concept": "A narrow 22-kilometer land bridge connecting mainland India to its eight northeastern states, bordered by Nepal, Bhutan, and Bangladesh.",
            "application": "Leveraging geographic transit corridors as reciprocal diplomatic assets."
          },
          {
            "name": "Cross-Border Hydro-Hegemony (Mark Zeitoun)",
            "concept": "Upper riparian states utilizing geographic elevation and dam infrastructure to control downstream water flows for political leverage.",
            "application": "Enforcing international water law and multi-lateral basin agreements."
          }
        ],
        "statecraftCaseStudy": {
          "title": "The 2017 Doklam Standoff & Regional Buffer Geopolitics",
          "historicalContext": "Chinese road construction near the tri-junction with Bhutan triggered a 73-day military standoff with Indian troops.",
          "strategicAnalysis": "Highlighted the acute sensitivity surrounding the Siliguri Corridor and the vital buffer role of smaller Himalayan and littoral states.",
          "lessonsForStatecraft": "Geographic proximity to strategic great-power choke points requires heightened diplomatic vigilance and deterrence."
        },
        "banglaDiplomaticSummary": "\u09a6\u0995\u09cd\u09b7\u09bf\u09a3 \u098f\u09b6\u09bf\u09af\u09bc\u09be\u09b0 \u09ad\u09c2-\u09b0\u09be\u099c\u09a8\u09c0\u09a4\u09bf \u09ad\u09be\u09b0\u09a4-\u09aa\u09be\u0995\u09bf\u09b8\u09cd\u09a4\u09be\u09a8 \u09aa\u09be\u09b0\u09ae\u09be\u09a3\u09ac\u09bf\u0995 \u09ac\u09c8\u09b0\u09bf\u09a4\u09be, \u09b6\u09bf\u09b2\u09bf\u0997\u09c1\u09a1\u09bc\u09bf \u0995\u09b0\u09bf\u09a1\u09cb\u09b0 (\u099a\u09bf\u0995\u09c7\u09a8\u09b8 \u09a8\u09c7\u0995) \u098f\u09ac\u0982 \u099a\u09c0\u09a8-\u09ad\u09be\u09b0\u09a4 \u09b8\u09c0\u09ae\u09be\u09a8\u09cd\u09a4 \u0989\u09a4\u09cd\u09a4\u09c7\u099c\u09a8\u09be\u09b0 \u09a6\u09cd\u09ac\u09be\u09b0\u09be \u0997\u09ad\u09c0\u09b0\u09ad\u09be\u09ac\u09c7 \u09aa\u09cd\u09b0\u09ad\u09be\u09ac\u09bf\u09a4, \u09af\u09be \u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6\u09c7\u09b0 \u09ad\u09cc\u0997\u09cb\u09b2\u09bf\u0995 \u09ae\u09b0\u09cd\u09af\u09be\u09a6\u09be\u0995\u09c7 \u0985\u09a4\u09cd\u09af\u09a8\u09cd\u09a4 \u0997\u09c1\u09b0\u09c1\u09a4\u09cd\u09ac\u09aa\u09c2\u09b0\u09cd\u09a3 \u0995\u09b0\u09c7 \u09a4\u09c1\u09b2\u09c7\u099b\u09c7\u0964",
        "analyticalSeminarQuestions": [
          "Why is the Siliguri Corridor considered the most sensitive geographic choke point in South Asian defense planning?",
          "How can regional hydro-hegemony be transformed into cooperative transboundary river basin management?"
        ],
        "keyReadings": [
          {
            "title": "Does South Asia Exist? Prospects for Regional Integration",
            "author": "Swarna Rajagopalan",
            "sourceType": "Academic Journal",
            "coreConcept": "South Asian security dynamics, borderlands, and regional identity."
          }
        ]
      },
      {
        "id": "lec8_3",
        "pillarId": "pillar8_regional_bangladesh",
        "lectureNumber": "8.3",
        "title": "The Bay of Bengal as a Strategic Theater",
        "subtitle": "Maritime Connectivity, Littoral Balance of Power, Port Infrastructure Developments & Deep-Sea Resources",
        "readTimeMinutes": 22,
        "overview": "The Bay of Bengal is re-emerging as the central maritime crossroads connecting South Asia to Southeast Asia. This lecture explores maritime trade routes, deep-sea exploration, offshore gas blocks, and the geopolitical competition surrounding regional port developments: Matarbari (Japan-funded deep-sea port), Payra, Sittwe (Myanmar/India), and Hambantota (Sri Lanka).",
        "theoreticalFrameworks": [
          {
            "name": "The Blue Economy Paradigm",
            "concept": "Sustainable utilization of ocean resources for economic growth, livelihood, and maritime energy while preserving coastal ecosystems.",
            "application": "Developing offshore deep-sea hydrocarbon blocks and sustainable marine fisheries."
          },
          {
            "name": "String of Pearls vs. Free and Open Indo-Pacific Ports",
            "concept": "Strategic competition between commercial/military dual-use port infrastructure investments across the Indian Ocean rim.",
            "application": "Ensuring national port infrastructure remains strictly commercial and under sovereign national control."
          }
        ],
        "statecraftCaseStudy": {
          "title": "Matarbari Port Development: Bangladesh's First Deep-Sea Port",
          "historicalContext": "Construction of an 18.5-meter draft deep-sea commercial port at Matarbari, Cox's Bazar, supported by JICA.",
          "strategicAnalysis": "Enables large container mother vessels to dock directly in Bangladesh, creating an economic transit hub for regional landlocked neighbors.",
          "lessonsForStatecraft": "Transforming maritime coastline into world-class port infrastructure cements long-term regional economic leadership."
        },
        "banglaDiplomaticSummary": "\u09ac\u0999\u09cd\u0997\u09cb\u09aa\u09b8\u09be\u0997\u09b0\u09c7\u09b0 \u09ac\u09cd\u09b2\u09c1-\u0987\u0995\u09cb\u09a8\u09ae\u09bf \u098f\u09ac\u0982 \u09ae\u09be\u09a4\u09be\u09b0\u09ac\u09be\u09a1\u09bc\u09c0 \u0997\u09ad\u09c0\u09b0 \u09b8\u09ae\u09c1\u09a6\u09cd\u09b0 \u09ac\u09a8\u09cd\u09a6\u09b0 \u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6\u0995\u09c7 \u09a6\u0995\u09cd\u09b7\u09bf\u09a3 \u0993 \u09a6\u0995\u09cd\u09b7\u09bf\u09a3-\u09aa\u09c2\u09b0\u09cd\u09ac \u098f\u09b6\u09bf\u09af\u09bc\u09be\u09b0 \u09ae\u09a7\u09cd\u09af\u09c7 \u09ac\u09be\u09a3\u09bf\u099c\u09cd\u09af\u09bf\u0995 \u0993 \u09ad\u09c2-\u0995\u09cc\u09b6\u09b2\u0997\u09a4 \u09b8\u0982\u09af\u09cb\u0997 \u09b8\u09c7\u09a4\u09c1 \u09b9\u09bf\u09b8\u09c7\u09ac\u09c7 \u09aa\u09cd\u09b0\u09a4\u09bf\u09b7\u09cd\u09a0\u09bf\u09a4 \u0995\u09b0\u099b\u09c7\u0964",
        "analyticalSeminarQuestions": [
          "How does Matarbari deep-sea port alter Bangladesh's strategic bargaining power in South Asian trade?",
          "What are the environmental and security challenges of deep-sea hydrocarbon exploration in the Bay of Bengal?"
        ],
        "keyReadings": [
          {
            "title": "Bay of Bengal: Maritime Geopolitics and Strategic Future of South Asia",
            "author": "Daloyar Hassan Shishir",
            "sourceType": "Policy Report",
            "coreConcept": "Blue economy, deep-sea ports, and Bay of Bengal maritime security."
          }
        ]
      },
      {
        "id": "lec8_4",
        "pillarId": "pillar8_regional_bangladesh",
        "lectureNumber": "8.4",
        "title": "Small State Diplomacy in a Contested Littoral",
        "subtitle": "Hedging, Balancing Sovereign Interests, Multi-Vector Foreign Policy & Regional Cooperation Frameworks (SAARC, BIMSTEC, IORA)",
        "readTimeMinutes": 25,
        "overview": "The culmination of the fellowship: synthesizing grand strategy for Bangladesh in the 21st century. We analyze the post-2024 'Bangladesh First' foreign policy doctrine\u2014asserting sovereign equality, zero tolerance for border violence, strict reciprocity in bilateral ties, diplomatic resolution of the Rohingya refugee crisis, revitalizing SAARC, deepening BIMSTEC and Indian Ocean Rim Association (IORA) integration, and executing non-aligned multi-vector statecraft.",
        "theoreticalFrameworks": [
          {
            "name": "The Post-2024 'Bangladesh First' Doctrine",
            "concept": "A dignity-based foreign policy rooted in democratic domestic consensus, absolute sovereign equality, and strict reciprocity in neighborhood relations.",
            "application": "Negotiating transboundary water treaties (Teesta, Ganges) and cross-border transit accords."
          },
          {
            "name": "Regional Institutional Architecture: SAARC & BIMSTEC",
            "concept": "Revitalizing SAARC for South Asian political dialogue while leveraging BIMSTEC as the physical bridge to ASEAN markets.",
            "application": "Promoting regional trade, energy grid interconnections, and visa-free academic mobility."
          }
        ],
        "statecraftCaseStudy": {
          "title": "The Post-2024 Sovereign Reset & Transboundary River Diplomacy",
          "historicalContext": "Following the 2024 political transformation, Bangladesh reasserted its rights over 54 shared transboundary rivers and border security equality.",
          "strategicAnalysis": "Combined bilateral negotiations under the 1997 UN Watercourses Convention with the domestic Teesta River Comprehensive Management Project to secure dry-season irrigation independence.",
          "lessonsForStatecraft": "Dignity-based statecraft paired with domestic infrastructure resilience earns enduring international respect."
        },
        "banglaDiplomaticSummary": "\u09e8\u09e6\u09e8\u09ea-\u09aa\u09b0\u09ac\u09b0\u09cd\u09a4\u09c0 '\u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6 \u09ab\u09be\u09b0\u09cd\u09b8\u09cd\u099f \u09a1\u0995\u099f\u09cd\u09b0\u09bf\u09a8'-\u098f\u09b0 \u09b2\u0995\u09cd\u09b7\u09cd\u09af \u09b9\u09b2\u09cb \u09b8\u09be\u09b0\u09cd\u09ac\u09ad\u09cc\u09ae \u09b8\u09ae\u09ae\u09b0\u09cd\u09af\u09be\u09a6\u09be, \u09b8\u09c0\u09ae\u09be\u09a8\u09cd\u09a4 \u09b9\u09a4\u09cd\u09af\u09be\u09b0 \u0985\u09ac\u09b8\u09be\u09a8, \u09a4\u09bf\u09b8\u09cd\u09a4\u09be\u09b8\u09b9 \u09eb\u09ea\u099f\u09bf \u09a8\u09a6\u09c0\u09b0 \u09a8\u09cd\u09af\u09be\u09af\u09cd\u09af \u09b9\u09bf\u09b8\u09cd\u09af\u09be, \u09b8\u09be\u09b0\u09cd\u0995 \u09aa\u09c1\u09a8\u09b0\u09c1\u099c\u09cd\u099c\u09c0\u09ac\u09a8 \u098f\u09ac\u0982 \u09ac\u09bf\u09ae\u09b8\u099f\u09c7\u0995\u09c7\u09b0 \u09ae\u09be\u09a7\u09cd\u09af\u09ae\u09c7 \u09a6\u0995\u09cd\u09b7\u09bf\u09a3 \u0993 \u09a6\u0995\u09cd\u09b7\u09bf\u09a3-\u09aa\u09c2\u09b0\u09cd\u09ac \u098f\u09b6\u09bf\u09af\u09bc\u09be\u09b0 \u09b6\u0995\u09cd\u09a4\u09bf\u09b6\u09be\u09b2\u09c0 \u09b8\u09c7\u09a4\u09c1 \u09b9\u09bf\u09b8\u09c7\u09ac\u09c7 \u0986\u09ac\u09bf\u09b0\u09cd\u09ad\u09c2\u09a4 \u09b9\u0993\u09af\u09bc\u09be\u0964",
        "analyticalSeminarQuestions": [
          "How can Bangladesh balance its diplomatic and trade ties with Washington, Beijing, New Delhi, and Brussels without becoming vulnerable to coercion?",
          "What practical institutional reforms are necessary to revitalize SAARC as a functional regional body?"
        ],
        "keyReadings": [
          {
            "title": "Bangladesh Grand Strategy: Sovereign Autonomy, Bay of Bengal Geopolitics & Foreign Policy in a Multipolar Age",
            "author": "Daloyar Hassan Shishir",
            "sourceType": "Policy Report",
            "coreConcept": "The Bangladesh First doctrine, river diplomacy, and multipolar balance."
          }
        ]
      }
    ],
    "checkpointQuiz": {
      "id": "quiz_p8",
      "pillarId": "pillar8_regional_bangladesh",
      "title": "Seminar Checkpoint 8: Regional Policy Paper \u2014 Constructing a Comprehensive Maritime Strategy for the Bay of Bengal",
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
          "banglaExplanation": "\u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6 \u09ab\u09be\u09b0\u09cd\u09b8\u09cd\u099f \u09a1\u0995\u099f\u09cd\u09b0\u09bf\u09a8\u09c7\u09b0 \u09ae\u09c2\u09b2 \u09b2\u0995\u09cd\u09b7\u09cd\u09af \u09b9\u09b2\u09cb \u09b8\u09be\u09b0\u09cd\u09ac\u09ad\u09cc\u09ae \u09b8\u09ae\u09ae\u09b0\u09cd\u09af\u09be\u09a6\u09be, \u09b8\u09c0\u09ae\u09be\u09a8\u09cd\u09a4 \u09b9\u09a4\u09cd\u09af\u09be\u09b0 \u0985\u09ac\u09b8\u09be\u09a8, \u0995\u09a0\u09cb\u09b0 \u09aa\u09be\u09b0\u09b8\u09cd\u09aa\u09b0\u09bf\u0995\u09a4\u09be \u098f\u09ac\u0982 \u09b8\u09cd\u09ac\u09be\u09a7\u09c0\u09a8 \u09aa\u09b0\u09b0\u09be\u09b7\u09cd\u099f\u09cd\u09b0\u09a8\u09c0\u09a4\u09bf \u09b0\u0995\u09cd\u09b7\u09be\u0964"
        },
        {
          "id": "q8_2",
          "prompt": "Why is the revitalization of SAARC (South Asian Association for Regional Cooperation) essential for regional diplomacy?",
          "options": [
            "To permanently ban all internet access across Asia",
            "To provide a vital multilateral platform for all South Asian sovereign nations to engage in structured dialogue, economic integration, and regional dispute reduction",
            "Because SAARC only exists to manage cricket matches",
            "To replace the United Nations entirely"
          ],
          "correctIndex": 1,
          "academicRationale": "SAARC provides the only institutional table where all 8 South Asian nations can meet as sovereign equals to deliberate regional challenges, trade, and climate issues.",
          "banglaExplanation": "\u09b8\u09be\u09b0\u09cd\u0995 \u09aa\u09c1\u09a8\u09b0\u09c1\u099c\u09cd\u099c\u09c0\u09ac\u09a8 \u09a6\u0995\u09cd\u09b7\u09bf\u09a3 \u098f\u09b6\u09bf\u09af\u09bc\u09be\u09b0 \u09ee\u099f\u09bf \u09a6\u09c7\u09b6\u09c7\u09b0 \u09b8\u09ae\u09ae\u09b0\u09cd\u09af\u09be\u09a6\u09be\u09b0 \u09b8\u0982\u09b2\u09be\u09aa, \u0986\u099e\u09cd\u099a\u09b2\u09bf\u0995 \u09ac\u09be\u09a3\u09bf\u099c\u09cd\u09af \u0993 \u09b8\u0982\u0995\u099f \u09b8\u09ae\u09be\u09a7\u09be\u09a8\u09c7\u09b0 \u099c\u09a8\u09cd\u09af \u0985\u09a4\u09cd\u09af\u09a8\u09cd\u09a4 \u0997\u09c1\u09b0\u09c1\u09a4\u09cd\u09ac\u09aa\u09c2\u09b0\u09cd\u09a3\u0964"
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
