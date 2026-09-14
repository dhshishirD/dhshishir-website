import type { GlossaryTerm } from '../types/irAcademy';

export interface ExtendedGlossaryTerm extends GlossaryTerm {
  id: string;
  aliases?: string[];
  mapLocationId?: string;
  significanceLevel?: 'Critical' | 'High' | 'Standard';
}

export const MASTER_DIPLOMATIC_GLOSSARY: ExtendedGlossaryTerm[] = [
  // 1. CHOKEPOINTS & GEOGRAPHY
  {
    id: 'strait-of-malacca',
    term: 'Strait of Malacca',
    category: 'Security & Strategy',
    pronunciationIpa: '/streɪt əv məˈlækə/',
    definition: 'A narrow, 580-mile stretch of water between the Malay Peninsula and the Indonesian island of Sumatra, serving as the primary shipping channel between the Indian and Pacific Oceans.',
    banglaMeaning: 'মালাক্কা প্রণালী — ভারত মহাসাগর ও প্রশান্ত মহাসাগরের সংযোগকারী বিশ্বের অন্যতম প্রধান ভূ-কৌশলগত সামুদ্রিক চ্যানেল।',
    diplomaticContext: 'Carries over 25% of all global traded goods and 80% of China\'s crude oil imports ("Malacca Dilemma"). Critical for Bangladesh\'s maritime trade routes to East and Southeast Asia.',
    mapLocationId: 'strait-of-malacca',
    significanceLevel: 'Critical'
  },
  {
    id: 'strait-of-hormuz',
    term: 'Strait of Hormuz',
    category: 'Security & Strategy',
    pronunciationIpa: '/streɪt əv hɔːrˈmuːz/',
    definition: 'The world\'s most critical maritime oil transit chokepoint between Oman and Iran, connecting the Persian Gulf with the Gulf of Oman and Arabian Sea.',
    banglaMeaning: 'হরমুজ প্রণালী — পারস্য উপসাগরের প্রবেশদ্বার এবং বিশ্বের প্রধান তেল ও এলএনজি সরবরাহ পথ।',
    diplomaticContext: 'Transits approximately 21 million barrels of petroleum per day (~21% of global petroleum consumption). Key energy security determinant for Bangladesh\'s LNG and oil imports.',
    mapLocationId: 'strait-of-hormuz',
    significanceLevel: 'Critical'
  },
  {
    id: 'bab-el-mandeb',
    term: 'Bab-el-Mandeb',
    category: 'Security & Strategy',
    pronunciationIpa: '/ˌbæb ɛl ˈmændɛb/',
    definition: 'A strategic maritime strait connecting the Red Sea to the Gulf of Aden and the Indian Ocean, flanked by Yemen, Djibouti, and Eritrea.',
    banglaMeaning: 'বাব এল-মান্দেব প্রণালী — লোহিত সাগর ও এডেন উপসাগরের সংযোগকারী সুয়েজ খালের প্রবেশদ্বার।',
    diplomaticContext: 'Vital chokepoint for European-Asian trade via the Suez Canal. Subject to asymmetric anti-ship missile attacks and maritime security operations.',
    mapLocationId: 'bab-el-mandeb',
    significanceLevel: 'Critical'
  },
  {
    id: 'siliguri-corridor',
    term: 'Siliguri Corridor',
    aliases: ["Chicken's Neck", "Siliguri"],
    category: 'Bangladesh Statecraft',
    pronunciationIpa: '/ˌsɪlɪˈɡʊəri ˈkɒrɪdɔːr/',
    definition: 'A narrow 22-kilometer-wide strip of land in West Bengal connecting India\'s mainland to its eight northeastern states, bordered by Bangladesh, Nepal, and Bhutan.',
    banglaMeaning: 'শিলিগুড়ি করিডোর (চিকেনস নেক) — ভারতের মূল ভূখণ্ডের সাথে উত্তর-পূর্ব রাজ্যগুলোর সংযোগকারী কৌশলগত সংকীর্ণ ভূখণ্ড।',
    diplomaticContext: 'India\'s most sensitive geopolitical vulnerability; proximity to the Doklam plateau makes it a prime flashpoint in Sino-Indian military balancing, giving Bangladesh immense geographical leverage.',
    mapLocationId: 'siliguri-corridor',
    significanceLevel: 'Critical'
  },
  {
    id: 'teesta-basin',
    term: 'Teesta River Basin',
    aliases: ['Teesta River', 'Teesta'],
    category: 'Bangladesh Statecraft',
    pronunciationIpa: '/ˈtiːstə ˈrɪvər ˈbeɪsən/',
    definition: 'A major transboundary river flowing from Sikkim through West Bengal into the Brahmaputra (Jamuna) in Bangladesh, subject to contentious bilateral water-sharing diplomacy.',
    banglaMeaning: 'তিস্তা নদী অববাহিকা — বাংলাদেশ ও ভারতের মধ্যে বহুল আলোচিত অভিন্ন নদী ও পানি বণ্টন কূটনীতি।',
    diplomaticContext: 'Crucial for northern Bangladesh\'s agricultural security and irrigation; central focus of post-2024 hydrological sovereignty negotiations and the Teesta Comprehensive Management Project.',
    mapLocationId: 'teesta-basin',
    significanceLevel: 'Critical'
  },
  {
    id: 'matarbari-port',
    term: 'Matarbari Deep Sea Port',
    aliases: ['Matarbari Port', 'Matarbari'],
    category: 'Bangladesh Statecraft',
    pronunciationIpa: '/mɑːtɑːrˈbɑːri diːp siː pɔːrt/',
    definition: 'Bangladesh\'s first deep-sea port located in Cox\'s Bazar district with an 18.5m draft, developed with Japanese JICA financing under the BIG-B initiative.',
    banglaMeaning: 'মাতারবাড়ি গভীর সমুদ্র বন্দর — বাংলাদেশের প্রথম গভীর সমুদ্র বন্দর ও বঙ্গোপসাগরের কৌশলগত বাণিজ্যিক হাব।',
    diplomaticContext: 'Transforms Bangladesh from a coastal feeder dependent into a regional maritime hub capable of berthing post-Panamax container vessels and anchoring Bay of Bengal supply chains.',
    mapLocationId: 'matarbari-port',
    significanceLevel: 'Critical'
  },
  {
    id: 'suwalki-gap',
    term: 'Suwalki Gap',
    category: 'Security & Strategy',
    pronunciationIpa: '/suːˈvɑːlki ɡæp/',
    definition: 'A narrow 65-kilometer strip of land along the Polish-Lithuanian border connecting Belarus to the Russian exclave of Kaliningrad.',
    banglaMeaning: 'সুওয়ালকি গ্যাপ — পোল্যান্ড ও লিথুয়ানিয়ার মধ্যবর্তী ন্যাটো ও রাশিয়ার অন্যতম প্রধান সামরিক ফ্ল্যাশপয়েন্ট।',
    diplomaticContext: 'Considered NATO\'s most vulnerable border in Europe; a Russian military push could sever the Baltic States from the rest of the NATO alliance.',
    mapLocationId: 'suwalki-gap',
    significanceLevel: 'High'
  },
  {
    id: 'taiwan-strait',
    term: 'Taiwan Strait',
    category: 'Security & Strategy',
    pronunciationIpa: '/ˈtaɪˈwɑːn streɪt/',
    definition: 'A 180-kilometer-wide strait separating the island of Taiwan from the Asian mainland, bridging the East and South China Seas.',
    banglaMeaning: 'তাইওয়ান প্রণালী — পূর্ব এশিয়ার প্রধান সামরিক ও সেমিকন্ডাক্টর সরবরাহ ফ্ল্যাশপয়েন্ট।',
    diplomaticContext: 'Epicenter of US-China strategic deterrence, freedom of navigation operations (FONOPs), and global semiconductor supply security.',
    mapLocationId: 'taiwan-strait',
    significanceLevel: 'Critical'
  },

  // 2. INTERNATIONAL LAW & INSTITUTIONS
  {
    id: 'unclos',
    term: 'UNCLOS',
    aliases: ['United Nations Convention on the Law of the Sea', 'Law of the Sea'],
    category: 'International Law',
    pronunciationIpa: '/ˈʌnklɒs/',
    definition: 'The 1982 comprehensive international treaty establishing legal frameworks for all marine and maritime activities, sovereign rights, maritime zones, and seabed resources.',
    banglaMeaning: 'আনক্লস — জাতিসংঘের সমুদ্র আইন কনভেনশন ১৯৮২, যা সমুদ্রসীমা ও সামুদ্রিক সম্পদের আন্তর্জাতিক আইনি কাঠামো।',
    diplomaticContext: 'Provided the institutional basis for Bangladesh\'s historic maritime boundary victories at ITLOS against Myanmar (2012) and the PCA against India (2014), securing 118,813 sq km of Exclusive Economic Zone.',
    significanceLevel: 'Critical'
  },
  {
    id: 'eez',
    term: 'Exclusive Economic Zone (EEZ)',
    aliases: ['EEZ', 'Exclusive Economic Zone'],
    category: 'International Law',
    pronunciationIpa: '/ɪkˈskluːsɪv ˌiːkəˈnɒmɪk zoʊn/',
    definition: 'An area of the sea in which a sovereign coastal state has special sovereign exploration and exploitation rights over marine resources, extending up to 200 nautical miles from the baseline.',
    banglaMeaning: 'এক্সক্লুসিভ ইকোনমিক জোন (ইইজেড) — উপকূলীয় রাষ্ট্রের ২০০ নটিক্যাল মাইল পর্যন্ত সামুদ্রিক সম্পদের একচ্ছত্র অর্থনৈতিক অঞ্চল।',
    diplomaticContext: 'Grants coastal states exclusive rights over fisheries, oil and gas exploration, seabed minerals, and wind energy installations while preserving freedom of navigation for other states.',
    significanceLevel: 'Critical'
  },
  {
    id: 'itlos',
    term: 'ITLOS',
    aliases: ['International Tribunal for the Law of the Sea'],
    category: 'International Law',
    pronunciationIpa: '/ˈɪtlɒs/',
    definition: 'An independent judicial body established in Hamburg by UNCLOS to adjudicate disputes arising out of the interpretation and application of the Convention.',
    banglaMeaning: 'ইটলস — জাতিসংঘের সমুদ্র আইন বিষয়ক আন্তর্জাতিক ট্রাইব্যুনাল (হামবুর্গ)।',
    diplomaticContext: 'Delivered the landmark March 2012 judgment delimiting the maritime boundary between Bangladesh and Myanmar in the Bay of Bengal.',
    significanceLevel: 'High'
  },
  {
    id: 'jus-cogens',
    term: 'Jus Cogens',
    category: 'International Law',
    pronunciationIpa: '/ˌjʊs ˈkoʊdʒɛnz/',
    definition: 'Peremptory norms of general international law accepted and recognized by the international community as a norm from which no derogation is permitted.',
    banglaMeaning: 'জুস কোজেনস — আন্তর্জাতিক আইনের অলঙ্ঘনীয় মৌলিক নীতি (যেমন গণহত্যা, দাসত্ব ও আক্রমণ নিষিদ্ধকরণ)।',
    diplomaticContext: 'Overrides conflicting treaties; fundamental basis for universal jurisdiction and prosecutions of crimes against humanity and genocide (e.g. Rohingya at ICJ).',
    significanceLevel: 'High'
  },

  // 3. IR THEORIES & PARADIGMS
  {
    id: 'thucydides-trap',
    term: 'Thucydides Trap',
    category: 'IR Theory',
    pronunciationIpa: '/θjuːˈsɪdɪdiːz træp/',
    definition: 'A term popularized by Graham Allison describing the structural stress that occurs when a rising power threatens to displace an established hegemon, historically leading to war.',
    banglaMeaning: 'থুসিডাইডিস ট্র্যাপ — উদীয়মান শক্তির উত্থানে বিদ্যমান পরাশক্তির সাথে অবশ্যম্ভাবী সংঘাতের কাঠামোগত প্রবণতা।',
    diplomaticContext: 'Primary theoretical model applied to analyzing contemporary US-China systemic rivalry in the Western Pacific and Indo-Pacific.',
    significanceLevel: 'Critical'
  },
  {
    id: 'security-dilemma',
    term: 'Security Dilemma',
    category: 'IR Theory',
    pronunciationIpa: '/sɪˈkjʊərɪti dɪˈlɛmə/',
    definition: 'A structural condition where defensive actions taken by one state to increase its own security inadvertently decrease the perceived security of other states, leading to spirals of escalation.',
    banglaMeaning: 'নিরাপত্তা সংকট (সিকিউরিটি ডিলেমা) — আত্মরক্ষামূলক পদক্ষেপের ফলে অপর রাষ্ট্রের মধ্যে ভীতি ও পাল্টা অস্ত্র প্রতিযোগিতার সৃষ্টি।',
    diplomaticContext: 'Explains arms racing between India and Pakistan, as well as the militarization of the South China Sea and naval buildups in the Bay of Bengal.',
    significanceLevel: 'Critical'
  },
  {
    id: 'omnidirectional-hedging',
    term: 'Omnidirectional Hedging',
    aliases: ['Strategic Hedging', 'Hedging'],
    category: 'Security & Strategy',
    pronunciationIpa: '/ˌɒmnɪdəˈrɛkʃənl ˈhɛdʒɪŋ/',
    definition: 'A grand strategic posture where a middle or small power simultaneously engages multiple competing great powers across diplomatic, economic, and security dimensions without entering formal alliances.',
    banglaMeaning: 'সর্বমুখী কৌশলগত হেজিং — কোনো এক পরাশক্তির বলয়ে না গিয়ে একাধিক শক্তির সাথে সুষম সম্পর্ক রক্ষা করার নীতি।',
    diplomaticContext: 'The core operational doctrine of post-2024 Bangladesh foreign policy ("Friendship to all, malice towards none") balancing ties with the US, China, India, Japan, and the EU.',
    significanceLevel: 'Critical'
  },
  {
    id: 'bandwagoning',
    term: 'Bandwagoning',
    category: 'IR Theory',
    pronunciationIpa: '/ˈbændˌwæɡənɪŋ/',
    definition: 'A strategy in international relations where a state aligns with a stronger, threatening power in hopes of sharing the spoils of victory or avoiding aggression.',
    banglaMeaning: 'ব্যান্ডওয়াগনিং — শক্তিশালী আক্রমণাত্মক পরাশক্তির সাথে মিত্রতা স্থাপন করে নিজের অস্তিত্ব রক্ষার কৌশল।',
    diplomaticContext: 'Contrasted with balancing; explains the choices of small frontline states confronting dominant regional hegemons.',
    significanceLevel: 'High'
  },
  {
    id: 'balance-of-power',
    term: 'Balance of Power',
    category: 'IR Theory',
    pronunciationIpa: '/ˈbæləns əv ˈpaʊər/',
    definition: 'A core realist concept wherein national survival is maintained through an equilibrium of power among rival sovereign states preventing any single hegemon from dominating.',
    banglaMeaning: 'ক্ষমতার ভারসাম্য (ব্যালেন্স অব পাওয়ার) — কোনো একক পরাশক্তির আধিপত্য রুখতে শক্তি ভারসাম্যের বাস্তববাদী নীতি।',
    diplomaticContext: 'Guides Indo-Pacific alliances such as the Quad, AUKUS, and regional middle-power coalitions.',
    significanceLevel: 'Critical'
  },
  {
    id: 'complex-interdependence',
    term: 'Complex Interdependence',
    category: 'IR Theory',
    pronunciationIpa: '/ˈkɒmplɛks ˌɪntərdɪˈpɛndəns/',
    definition: 'A liberal institutionalist theory developed by Keohane and Nye arguing that multiple channels of contact, trans-governmental connections, and economic integration diminish the utility of military force.',
    banglaMeaning: 'জটিল পারস্পরিক নির্ভরতা — দেশসমূহের মধ্যে বহুমাত্রিক বাণিজ্য ও যোগাযোগের কারণে সামরিক সংঘাত হ্রাস পাওয়ার তত্ত্ব।',
    diplomaticContext: 'Framework for evaluating whether globalized supply chains prevent hot war between major powers despite geopolitical tensions.',
    significanceLevel: 'High'
  },

  // 4. MULTILATERAL BODIES & INITIATIVES
  {
    id: 'bimstec',
    term: 'BIMSTEC',
    aliases: ['Bay of Bengal Initiative for Multi-Sectoral Technical and Economic Cooperation'],
    category: 'Bangladesh Statecraft',
    pronunciationIpa: '/ˈbɪmstɛk/',
    definition: 'Regional organization of seven South and Southeast Asian nations lying in littoral and adjacent areas of the Bay of Bengal, with its permanent Secretariat headquartered in Dhaka.',
    banglaMeaning: 'বিমসটেক — বঙ্গোপসাগর অঞ্চলের ৭টি দেশের অর্থনৈতিক ও কৌশলগত সহযোগিতা জোট (সদর দপ্তর: ঢাকা)।',
    diplomaticContext: 'Acts as Bangladesh\'s primary institutional bridge to Southeast Asia (ASEAN), providing trade and energy connectivity bypassing stalled SAARC mechanisms.',
    mapLocationId: 'bimstec-hq',
    significanceLevel: 'Critical'
  },
  {
    id: 'quad',
    term: 'The Quad',
    aliases: ['Quadrilateral Security Dialogue', 'Quad'],
    category: 'Security & Strategy',
    pronunciationIpa: '/ðə kwɒd/',
    definition: 'A strategic diplomatic and security dialogue between the United States, Japan, India, and Australia aimed at maintaining a "Free and Open Indo-Pacific" (FOIP).',
    banglaMeaning: 'কোয়াড (চতুর্মুখী নিরাপত্তা সংলাপ) — যুক্তরাষ্ট্র, জাপান, ভারত ও অস্ট্রেলিয়ার কৌশলগত ইন্দো-প্যাসিফিক জোট।',
    diplomaticContext: 'Drives maritime domain awareness, critical technology supply chains, and counter-balancing against Chinese naval expansion in the Indian Ocean.',
    significanceLevel: 'Critical'
  },
  {
    id: 'aukus',
    term: 'AUKUS',
    category: 'Security & Strategy',
    pronunciationIpa: '/ˈɔːkəs/',
    definition: 'A trilateral security partnership between Australia, the United Kingdom, and the United States providing Australia with conventionally armed, nuclear-powered submarines.',
    banglaMeaning: 'অকাস — অস্ট্রেলিয়া, যুক্তরাজ্য ও যুক্তরাষ্ট্রের পারমাণবিক সাবমেরিন ও প্রযুক্তিগত ত্রিদেশীয় নিরাপত্তা জোট।',
    diplomaticContext: 'Significantly alters the undersea military balance in the Indo-Pacific and adjacent Indian Ocean shipping lanes.',
    significanceLevel: 'High'
  },
  {
    id: 'rcep',
    term: 'RCEP',
    aliases: ['Regional Comprehensive Economic Partnership'],
    category: 'Geoeconomics',
    pronunciationIpa: '/ˈɑːr sɛp/',
    definition: 'A free trade agreement among Asia-Pacific nations (ASEAN 10 plus China, Japan, South Korea, Australia, New Zealand), forming the world\'s largest trading bloc.',
    banglaMeaning: 'আরসিইপি — এশিয়া-প্রশান্ত মহাসাগরীয় অঞ্চলের বৃহত্তম মুক্ত বাণিজ্য চুক্তি।',
    diplomaticContext: 'A prime target for post-LDC graduation Bangladesh to secure preferential market access across East and Southeast Asia.',
    significanceLevel: 'High'
  },
  {
    id: 'nine-dash-line',
    term: 'Nine-Dash Line',
    category: 'Security & Strategy',
    pronunciationIpa: '/naɪn dæʃ laɪn/',
    definition: 'A historical maritime demarcation line used by China to assert sovereign territorial and maritime claims over approximately 90% of the South China Sea.',
    banglaMeaning: 'নাইন-ড্যাশ লাইন — দক্ষিণ চীন সাগরের ৯০% এলাকায় চীনের ঐতিহাসিক সার্বভৌমত্ব দাবির সীমারেখা।',
    diplomaticContext: 'Declared legally invalid by the Permanent Court of Arbitration (PCA) in 2016 in the Philippines v. China arbitration under UNCLOS.',
    mapLocationId: 'south-china-sea',
    significanceLevel: 'Critical'
  },

  // 5. GEOECONOMICS & BLUE ECONOMY
  {
    id: 'blue-economy',
    term: 'Blue Economy',
    category: 'Geoeconomics',
    pronunciationIpa: '/bluː ɪˈkɒnəmi/',
    definition: 'The sustainable use of ocean resources for economic growth, improved livelihoods, and jobs while preserving the health of ocean ecosystems.',
    banglaMeaning: 'ব্লু ইকোনমি (নীল অর্থনীতি) — সামুদ্রিক সম্পদ, মৎস্য, অফশোর গ্যাস ও নবায়নযোগ্য শক্তির টেকসই অর্থনৈতিক ব্যবহার।',
    diplomaticContext: 'A cornerstone of Bangladesh\'s post-2024 economic diversification strategy across offshore hydrocarbons, deep-sea fisheries, shipbuilding, and maritime tourism.',
    significanceLevel: 'Critical'
  },
  {
    id: 'geoeconomics',
    term: 'Geoeconomics',
    category: 'Geoeconomics',
    pronunciationIpa: '/ˌdʒiːoʊˌiːkəˈnɒmɪks/',
    definition: 'The use of economic instruments (trade sanctions, investment corridors, currency swaps, supply chain controls) to achieve geopolitical objectives.',
    banglaMeaning: 'জিওইকোনমিক্স (ভূ-অর্থনীতি) — ভূ-রাজনৈতিক স্বার্থ হাসিলে অর্থনৈতিক হাতিয়ার ও বাণিজ্যের ব্যবহার।',
    diplomaticContext: 'Seen in US sanctions regimes, China\'s Belt and Road investments, and the weaponization of critical mineral supply chains.',
    significanceLevel: 'Critical'
  },
  {
    id: 'gray-zone-warfare',
    term: 'Gray Zone Warfare',
    category: 'Security & Strategy',
    pronunciationIpa: '/ɡreɪ zoʊn ˈwɔːrfɛər/',
    definition: 'Coercive statecraft and covert actions that operate above peacetime diplomacy but below the threshold of conventional armed conflict.',
    banglaMeaning: 'গ্রে-জোন ওয়ারফেয়ার — প্রচলিত যুদ্ধের সীমার নিচে সাইবার হামলা, ভুল তথ্য ও অর্থনৈতিক ব্ল্যাকমেইলের মাধ্যমে আগ্রাসন।',
    diplomaticContext: 'Employed via maritime militia in the South China Sea, cyber espionage, and infrastructure coercion.',
    significanceLevel: 'High'
  },
  {
    id: 'strategic-autonomy',
    term: 'Strategic Autonomy',
    category: 'Security & Strategy',
    pronunciationIpa: '/strəˈtiːdʒɪk ɔːˈtɒnəmi/',
    definition: 'The capacity of a state to pursue its national interests and adopt independent foreign policy decisions without being constrained by foreign powers or alliances.',
    banglaMeaning: 'কৌশলগত স্বায়ত্তশাসন — কোনো বিদেশী শক্তির চাপে না পড়ে স্বাধীন পররাষ্ট্রনীতি বাস্তবায়নের রাষ্ট্রীয় সক্ষমতা।',
    diplomaticContext: 'The overarching objective of Bangladesh sovereign diplomacy, allowing agile multilateral engagements with all major geopolitical blocs.',
    significanceLevel: 'Critical'
  }
];
