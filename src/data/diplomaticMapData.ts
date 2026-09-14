export type LocationCategory = 
  | 'chokepoint' 
  | 'flashpoint' 
  | 'port' 
  | 'island_base' 
  | 'river_basin' 
  | 'diplomatic_hq'
  | 'energy_resource';

export type MapTheater = 
  | 'bay_of_bengal' 
  | 'indo_pacific' 
  | 'middle_east' 
  | 'europe_eurasia' 
  | 'americas' 
  | 'africa'
  | 'global';

export interface StrategicLocation {
  id: string;
  name: string;
  banglaName?: string;
  category: LocationCategory;
  categoryLabel: string;
  theater: MapTheater;
  theaterLabel: string;
  lat: number;
  lng: number;
  xPct: number;
  yPct: number;
  threatLevel: 'Critical Alert' | 'High Geopolitical Friction' | 'Strategic Anchor' | 'Diplomatic Center';
  significance: string;
  banglaSignificance: string;
  historicalContext: string;
  keyTreaties: string[];
  bangladeshRelevance: string;
  greatPowerDynamics: {
    us?: string;
    china?: string;
    india?: string;
    regional?: string;
    global?: string;
    [key: string]: string | undefined;
  };
  audioBriefingText: string;
  relatedDossierSlugs?: string[];
}

export interface MaritimeCorridor {
  id: string;
  name: string;
  description: string;
  pathD: string;
  color: string;
  flowSpeedSeconds: number;
}

export interface VoyageRouteOption {
  id: string;
  routeName: string;
  originNodeId: string;
  destinationNodeId: string;
  pathD: string;
  totalNauticalMiles: number;
  transitDaysAt15Knots: number;
  chokepointsEncountered: string[];
  riskRating: 'Low' | 'Moderate' | 'High' | 'Severe Contingency';
  strategicSummary: string;
}

export interface MapRadarQuestion {
  id: string;
  prompt: string;
  targetLocationId: string;
  clue: string;
  banglaClue: string;
}

export const STRATEGIC_LOCATIONS_DATA: StrategicLocation[] = [
  {
    "id": "matarbari-port",
    "name": "Matarbari Deep-Sea Port",
    "banglaName": "মাতারবাড়ি গভীর সমুদ্র বন্দর",
    "category": "port",
    "categoryLabel": "Deep-Sea Maritime Hub",
    "theater": "bay_of_bengal",
    "theaterLabel": "Bay of Bengal & South Asia",
    "lat": 21.7,
    "lng": 91.88,
    "xPct": 75.8,
    "yPct": 44.8,
    "threatLevel": "Strategic Anchor",
    "significance": "Bangladesh's premier 18.5-meter draft deep-sea port developed with Japanese JICA financing under the BIG-B initiative, accommodating 8,000+ TEU post-Panamax container vessels.",
    "banglaSignificance": "বাংলাদেশের প্রথম ১৮.৫ মিটার গভীরতার বাণিজ্যিক গভীর সমুদ্র বন্দর, যা জাপানের BIG-B উদ্যোগে নির্মিত এবং সরাসরি মাদার ভেসেল ভেড়ানোর সক্ষমতা প্রদান করে।",
    "historicalContext": "Historically, Bangladesh lacked deep-water berths, relying on costly feeder transshipments via Colombo and Singapore. Matarbari transforms the northern Bay of Bengal shipping architecture.",
    "keyTreaties": [
      "Bangladesh-Japan Strategic Partnership 2023",
      "Bay of Bengal Industrial Growth Belt (BIG-B)"
    ],
    "bangladeshRelevance": "Directly secures sovereign energy import terminals (LNG/Coal), slashes maritime freight costs by 30%, and anchors Bangladesh as the central transshipment gateway for NE India, Nepal, and Bhutan.",
    "greatPowerDynamics": {
      "us": "Endorses as an open and resilient Indo-Pacific commercial hub.",
      "china": "Closely tracks as a sovereign counter-weight to Kyaukpyu in Myanmar.",
      "india": "Anticipates multimodal transit connectivity for its landlocked Northeast states.",
      "regional": "Japan finances under its Free and Open Indo-Pacific (FOIP) masterplan."
    },
    "audioBriefingText": "Matarbari Deep-Sea Port in Cox's Bazar is Bangladesh's premier maritime anchor. With an 18.5-meter natural draft, it enables direct berthing for post-Panamax vessels, slashing trade logistics costs and turning Bangladesh into a regional transshipment powerhouse.",
    "relatedDossierSlugs": [
      "matarbari-deep-sea-port",
      "bay-of-bengal-security"
    ]
  },
  {
    "id": "chattogram-port",
    "name": "Port of Chattogram & Karnaphuli Tunnel",
    "banglaName": "চট্টগ্রাম বন্দর ও কর্ণফুলী টানেল",
    "category": "port",
    "categoryLabel": "Principal Commercial Gateway",
    "theater": "bay_of_bengal",
    "theaterLabel": "Bay of Bengal & South Asia",
    "lat": 22.31,
    "lng": 91.8,
    "xPct": 75.7,
    "yPct": 43.8,
    "threatLevel": "Strategic Anchor",
    "significance": "The historic maritime engine handling over 90% of Bangladesh's international seaborne containerized trade, integrated with South Asia's first underwater multi-lane tunnel (Bangabandhu Tunnel).",
    "banglaSignificance": "বাংলাদেশের প্রধান সামুদ্রিক লাইফলাইন, যা দেশের ৯০% এরও বেশি আন্তর্জাতিক কন্টেইনার বাণিজ্য পরিচালনা করে।",
    "historicalContext": "Referenced as Porto Grande by 16th-century Portuguese traders and documented in ancient Arab, Persian, and Chinese maritime chronicles as the trading hub of Bengal.",
    "keyTreaties": [
      "ACPT Transit Agreement (India-Bangladesh)",
      "Colombo Security Conclave Maritime Protocols"
    ],
    "bangladeshRelevance": "The core industrial backbone for Bangladesh's $47B+ readymade garment export sector and gateway for sub-regional transit.",
    "greatPowerDynamics": {
      "china": "Constructed the $1.1B Karnaphuli Tunnel.",
      "india": "Utilizes operational transit transshipment rights for Agartala/Assam cargo.",
      "us": "Advocates for port security compliance (ISPS Code) and supply chain transparency."
    },
    "audioBriefingText": "The Port of Chattogram handles over ninety percent of Bangladesh's seaborne trade. Enhanced by the Karnaphuli underwater tunnel, it serves as the ultimate economic engine for national industrialization.",
    "relatedDossierSlugs": [
      "bay-of-bengal-security"
    ]
  },
  {
    "id": "coxs-bazar-submarine-base",
    "name": "BNS Sheikh Hasina Submarine Base (Pekua)",
    "banglaName": "বানৌজা শেখ হাসিনা সাবমেরিন ঘাঁটি (পেকুয়া)",
    "category": "island_base",
    "categoryLabel": "Naval Deterrence Anchor",
    "theater": "bay_of_bengal",
    "theaterLabel": "Bay of Bengal & South Asia",
    "lat": 21.8,
    "lng": 91.95,
    "xPct": 75.9,
    "yPct": 45.2,
    "threatLevel": "Strategic Anchor",
    "significance": "Bangladesh's state-of-the-art permanent submarine and submarine-support base on Kutubdia Channel, providing subterranean and submarine berthing for the Bangladesh Navy's diesel-electric fleet.",
    "banglaSignificance": "পেকুয়ায় নির্মিত বাংলাদেশের সর্বাধুনিক সাবমেরিন নৌঘাঁটি, যা বঙ্গোপসাগরে নিজস্ব ডেটারেন্স এবং এক্সক্লুসিভ ইকোনমিক জোন পাহারা দেয়।",
    "historicalContext": "Commissioned in March 2023 under the Forces Goal 2030 modernization program to secure Bangladesh's sovereign 118,813 sq km exclusive economic zone.",
    "keyTreaties": [
      "UNCLOS Sovereign Rights Enforcement",
      "Forces Goal 2030 Defense Masterplan"
    ],
    "bangladeshRelevance": "Provides survivable 3D naval warfare capability, securing sea lines of communication and offshore oil/gas blocks against unauthorized incursions.",
    "greatPowerDynamics": {
      "china": "Engineered specialized submarine basin docks.",
      "india": "Monitors naval presence near Bay of Bengal sea lanes.",
      "us": "Encourages regional Maritime Domain Awareness (MDA) coordination."
    },
    "audioBriefingText": "BNS Sheikh Hasina at Pekua is Bangladesh's dedicated submarine base, ensuring sovereign three-dimensional naval deterrence and 24/7 security across the country's 118,000 square kilometer exclusive economic zone.",
    "relatedDossierSlugs": [
      "bay-of-bengal-security"
    ]
  },
  {
    "id": "payra-port",
    "name": "Payra Deep Sea Port & Power Hub",
    "banglaName": "পায়রা গভীর সমুদ্র বন্দর ও বিদ্যুৎ কেন্দ্র",
    "category": "port",
    "categoryLabel": "Southern Industrial Gateway",
    "theater": "bay_of_bengal",
    "theaterLabel": "Bay of Bengal & South Asia",
    "lat": 21.98,
    "lng": 90.28,
    "xPct": 75.2,
    "yPct": 44.5,
    "threatLevel": "Strategic Anchor",
    "significance": "Third major seaport of Bangladesh on the Rabnabad Channel, developed with deep-draft capital dredging to serve massive southern mega-power generation and industrial clusters.",
    "banglaSignificance": "দক্ষিণাঞ্চলের প্রধান সমুদ্র বন্দর ও পায়রা আল্ট্রা-সুপারক্রিটিক্যাল পাওয়ার প্ল্যান্ট হাব, যা জাতীয় গ্রিড ও শিল্পে শক্তি যোগায়।",
    "historicalContext": "Inaugurated for commercial bulk operations in 2016 to decongest Chattogram and stimulate industrialization in southwestern Bangladesh post-Padma Bridge.",
    "keyTreaties": [
      "Bangladesh Port Authority Acts",
      "Belgium Jan De Nul Capital Dredging Accord"
    ],
    "bangladeshRelevance": "Crucial coal and bulk raw material intake port for the 1,320 MW Payra power plant, anchoring southwestern export zones.",
    "greatPowerDynamics": {
      "china": "Financed and constructed major power infrastructure.",
      "regional": "European marine engineering firms executed capital dredging."
    },
    "audioBriefingText": "Payra Port on the Rabnabad Channel represents Bangladesh's southern industrial horizon, supporting major power generation hubs and expanding commercial maritime access.",
    "relatedDossierSlugs": [
      "bay-of-bengal-security"
    ]
  },
  {
    "id": "mongla-port",
    "name": "Port of Mongla & Sundarbans Eco-Corridor",
    "banglaName": "মোংলা বন্দর ও সুন্দরবন করিডোর",
    "category": "port",
    "categoryLabel": "Western Maritime Corridor",
    "theater": "bay_of_bengal",
    "theaterLabel": "Bay of Bengal & South Asia",
    "lat": 22.48,
    "lng": 89.6,
    "xPct": 74.8,
    "yPct": 44.2,
    "threatLevel": "Strategic Anchor",
    "significance": "Bangladesh's second busiest seaport, situated on the Pasur River and connected via direct railway and the Padma Bridge to Dhaka and northern transit corridors.",
    "banglaSignificance": "পশুর নদীর তীরে অবস্থিত দ্বিতীয় বৃহত্তম সমুদ্র বন্দর, যা নেপাল ও ভুটানের জন্য সবচেয়ে সাশ্রয়ী ট্রানজিট চ্যানেল।",
    "historicalContext": "Established in 1950 at Chalna and later shifted to Mongla. Upgraded with deep capital dredging and Indian Line of Credit funding.",
    "keyTreaties": [
      "Bangladesh-Nepal Transit Protocol",
      "Bangladesh-Bhutan Preferential Trade Agreement (PTA)"
    ],
    "bangladeshRelevance": "Most viable maritime gateway for landlocked Nepal and Bhutan to access global shipping lines under BBIN regional frameworks.",
    "greatPowerDynamics": {
      "india": "Active transit usage under bilateral coastal shipping and transit agreements.",
      "china": "Contracted for terminal upgrade projects."
    },
    "audioBriefingText": "Port of Mongla offers the most cost-effective maritime outlet for landlocked Himalayan nations, Nepal and Bhutan, linking regional commerce to the Bay of Bengal.",
    "relatedDossierSlugs": [
      "bay-of-bengal-security"
    ]
  },
  {
    "id": "siliguri-corridor",
    "name": "Siliguri Corridor (\"Chicken's Neck\")",
    "banglaName": "শিলিগুড়ি করিডোর (চিকেনস নেক)",
    "category": "flashpoint",
    "categoryLabel": "Geopolitical Land Chokepoint",
    "theater": "bay_of_bengal",
    "theaterLabel": "Bay of Bengal & South Asia",
    "lat": 26.71,
    "lng": 88.43,
    "xPct": 75.2,
    "yPct": 40.2,
    "threatLevel": "Critical Alert",
    "significance": "A hyper-narrow 22-kilometer land corridor in West Bengal connecting India's mainland to its eight landlocked Northeastern states, flanked by Nepal, Bhutan, and Bangladesh.",
    "banglaSignificance": "মাত্র ২২ কিমি প্রশস্ত কৌশলগত স্থল করিডোর, যা ভারতের মূল ভূখণ্ডকে উত্তর-পূর্বাঞ্চলীয় রাজ্যগুলোর সাথে যুক্ত করে। এটি চীন-ভারত উত্তেজনার প্রধান ফ্ল্যাশপয়েন্ট।",
    "historicalContext": "Formed during the 1947 Partition of Bengal. The Doklam standoff in 2017 underscored its extreme strategic vulnerability to potential Chinese interdiction from the Chumbi Valley.",
    "keyTreaties": [
      "1949 Indo-Bhutan Friendship Treaty",
      "BBIN Motor Vehicles Agreement"
    ],
    "bangladeshRelevance": "Bangladesh's sovereign territory and alternative multi-modal transit routes (Chattogram-Ashuganj-Akhaura) offer India its only viable geopolitical bypass to this high-risk chokepoint.",
    "greatPowerDynamics": {
      "india": "Heavily fortified military defensive posture; vital strategic security priority.",
      "china": "Military posture in the Chumbi Valley looms directly above the corridor."
    },
    "audioBriefingText": "The Siliguri Corridor is a narrow twenty-two kilometer strip of land that connects mainland India to its Northeast. It is one of Asia's most sensitive military vulnerabilities, where Bangladesh provides the natural geographical bypass.",
    "relatedDossierSlugs": [
      "regional-hedging-bangladesh",
      "bay-of-bengal-security"
    ]
  },
  {
    "id": "bimstec-dhaka",
    "name": "BIMSTEC Permanent Secretariat (Dhaka)",
    "banglaName": "বিমসটেক স্থায়ী সচিবালয় (ঢাকা)",
    "category": "diplomatic_hq",
    "categoryLabel": "Sub-Regional Diplomatic Headquarters",
    "theater": "bay_of_bengal",
    "theaterLabel": "Bay of Bengal & South Asia",
    "lat": 23.81,
    "lng": 90.41,
    "xPct": 76.0,
    "yPct": 42.5,
    "threatLevel": "Diplomatic Center",
    "significance": "The permanent diplomatic headquarters of the Bay of Bengal Initiative for Multi-Sectoral Technical and Economic Cooperation, uniting 1.7 billion people across South and Southeast Asia.",
    "banglaSignificance": "ঢাকায় অবস্থিত বিমসটেক স্থায়ী সচিবালয়, যা দক্ষিণ এশিয়া ও দক্ষিণ-পূর্ব এশিয়ার সংযোগকারী প্রধান বহুপাক্ষিক প্ল্যাটফর্ম।",
    "historicalContext": "Established following the 1997 Bangkok Declaration; Dhaka was selected as the permanent seat in 2014, reflecting Bangladesh's bridging diplomacy.",
    "keyTreaties": [
      "BIMSTEC Charter 2022",
      "BIMSTEC Master Plan for Transport Connectivity"
    ],
    "bangladeshRelevance": "Validates Bangladesh's central diplomatic role bridging SAARC and ASEAN economies without geopolitical paralysis.",
    "greatPowerDynamics": {
      "india": "Prioritizes BIMSTEC over stalled SAARC mechanisms.",
      "regional": "Thailand and Myanmar link ASEAN interests to the Bay."
    },
    "audioBriefingText": "The BIMSTEC Secretariat in Dhaka anchors multilateral cooperation for 1.7 billion citizens, cementing Bangladesh's role as the diplomatic bridge between South and Southeast Asia.",
    "relatedDossierSlugs": [
      "regional-hedging-bangladesh"
    ]
  },
  {
    "id": "saarc-kathmandu",
    "name": "SAARC Secretariat (Kathmandu)",
    "banglaName": "সার্ক সচিবালয় (কাঠমান্ডু)",
    "category": "diplomatic_hq",
    "categoryLabel": "South Asian Regional Headquarters",
    "theater": "bay_of_bengal",
    "theaterLabel": "Bay of Bengal & South Asia",
    "lat": 27.71,
    "lng": 85.32,
    "xPct": 74.8,
    "yPct": 40.0,
    "threatLevel": "Diplomatic Center",
    "significance": "Headquarters of the South Asian Association for Regional Cooperation, founded on the diplomatic vision of Bangladesh in 1985.",
    "banglaSignificance": "১৯৮৫ সালে বাংলাদেশের উদ্যোগে প্রতিষ্ঠিত সার্ক-এর সচিবালয়, যা দক্ষিণ এশিয়ার ঐতিহ্যবাহী আঞ্চলিক কূটনীতির কেন্দ্র।",
    "historicalContext": "Conceptualized by Bangladesh in 1980 to foster subcontinental trade and peace; currently constrained by India-Pakistan geopolitical stalemates.",
    "keyTreaties": [
      "SAARC Charter 1985",
      "SAFTA (South Asian Free Trade Area 2004)"
    ],
    "bangladeshRelevance": "A core pillar of Bangladesh's founding multilateral foreign policy doctrine (\"Friendship to all, malice towards none\").",
    "greatPowerDynamics": {
      "india": "Shifts diplomatic energy towards BIMSTEC and IORA.",
      "pakistan": "Advocates reviving summitry."
    },
    "audioBriefingText": "The SAARC Secretariat in Kathmandu represents Bangladesh's original 1985 vision for institutionalized South Asian regional cooperation and economic integration.",
    "relatedDossierSlugs": [
      "regional-hedging-bangladesh"
    ]
  },
  {
    "id": "lac-galwan",
    "name": "Line of Actual Control (Galwan & Ladakh)",
    "banglaName": "লাইন অব একচুয়াল কন্ট্রোল (গালওয়ান ও লাদাখ)",
    "category": "flashpoint",
    "categoryLabel": "Contested Himalayan Border",
    "theater": "bay_of_bengal",
    "theaterLabel": "Bay of Bengal & South Asia",
    "lat": 34.2,
    "lng": 78.2,
    "xPct": 72.8,
    "yPct": 33.5,
    "threatLevel": "Critical Alert",
    "significance": "The de facto 3,488-km Himalayan demarcation line separating Indian and Chinese military forces, site of fatal clashes in June 2020.",
    "banglaSignificance": "চীন ও ভারতের মধ্যকার বিতর্কিত পাহাড়ি সীমান্ত রেখা, যা এশিয়ার দুই পারমাণবিক শক্তির অন্যতম প্রধান সামরিক সংঘাতের স্থল।",
    "historicalContext": "Originating from the 1962 Sino-Indian War and undefined McMahon Line legacies; ongoing militarization with forward airbases, artillery, and tunnels.",
    "keyTreaties": [
      "1993 Peace and Tranquility Agreement",
      "1996 Confidence-Building Measures"
    ],
    "bangladeshRelevance": "Forces Bangladesh to maintain strict omnidirectional diplomatic hedging, preventing entanglement in Sino-Indian military rivalry.",
    "greatPowerDynamics": {
      "china": "Expands Western Theater Command infrastructure.",
      "india": "Deploys 50,000+ forward troops and accelerates border roads.",
      "us": "Provides real-time geospatial intelligence to New Delhi."
    },
    "audioBriefingText": "The Line of Actual Control in Ladakh is the nuclear-armed flashpoint between China and India. Tension here directly shapes South Asian security calculations and reinforces Bangladesh's omnidirectional hedging policy.",
    "relatedDossierSlugs": [
      "regional-hedging-bangladesh"
    ]
  },
  {
    "id": "siachen-glacier",
    "name": "Siachen Glacier & Saltoro Ridge",
    "banglaName": "সিয়াচেন হিমবাহ ও সালতোরো শৈলশিরা",
    "category": "flashpoint",
    "categoryLabel": "High-Altitude Nuclear Battlefield",
    "theater": "bay_of_bengal",
    "theaterLabel": "Bay of Bengal & South Asia",
    "lat": 35.42,
    "lng": 77.1,
    "xPct": 72.2,
    "yPct": 33.0,
    "threatLevel": "High Geopolitical Friction",
    "significance": "The highest active battlefield on Earth (over 6,000 meters above sea level), where Indian and Pakistani armies maintain permanent forward posts in sub-zero glaciers.",
    "banglaSignificance": "পৃথিবীর সর্বোচ্চ যুদ্ধক্ষেত্র, যেখানে ভারত ও পাকিস্তানের সেনাবাহিনী বরফাচ্ছন্ন শৃঙ্গে মুখোমুখি অবস্থান করছে।",
    "historicalContext": "Operation Meghdoot launched by India in 1984 seized the Saltoro Ridge to block Pakistani-Chinese territorial linkage north of NJ9842.",
    "keyTreaties": [
      "1949 Karachi Agreement",
      "1972 Simla Agreement (Un-demarcated beyond NJ9842)"
    ],
    "bangladeshRelevance": "Demonstrates the catastrophic economic cost of unresolved territorial conflicts in South Asia.",
    "greatPowerDynamics": {
      "india": "Holds tactical high ground on Saltoro Ridge.",
      "pakistan": "Maintains base posts along the western valleys."
    },
    "audioBriefingText": "Siachen Glacier is the highest military combat zone on Earth, illustrating the severe human and financial burdens of territorial gridlock in the subcontinent.",
    "relatedDossierSlugs": [
      "regional-hedging-bangladesh"
    ]
  },
  {
    "id": "kyaukpyu-port",
    "name": "Kyaukpyu Deep-Sea Port & SEZ (Myanmar)",
    "banglaName": "কিউকপিউ গভীর সমুদ্র বন্দর (মিয়ানমার)",
    "category": "port",
    "categoryLabel": "BRI Continental Energy Terminal",
    "theater": "bay_of_bengal",
    "theaterLabel": "Bay of Bengal & South Asia",
    "lat": 19.42,
    "lng": 93.55,
    "xPct": 77.2,
    "yPct": 46.2,
    "threatLevel": "High Geopolitical Friction",
    "significance": "China's strategic $1.3B deep-sea terminal and dual oil/gas pipeline terminus connecting the Bay of Bengal directly to Kunming (Yunnan Province), bypassing the Malacca Strait.",
    "banglaSignificance": "মায়ানমারের রাখাইনে অবস্থিত চীনের কৌশলগত বন্দর ও পাইপলাইন হাব, যা মালাক্কা প্রণালী বাইপাস করে সরাসরি ইউনান প্রদেশে তেল-গ্যাস পাঠায়।",
    "historicalContext": "Part of the China-Myanmar Economic Corridor (CMEC); operational gas and crude pipelines pump 22M tons of oil annually directly into southwest China.",
    "keyTreaties": [
      "China-Myanmar Economic Corridor Agreement (CMEC 2018)"
    ],
    "bangladeshRelevance": "Located immediately south of Bangladesh's maritime borders in Rakhine; mirrors Matarbari Port in great power competition dynamics.",
    "greatPowerDynamics": {
      "china": "Primary strategic energy pipeline terminal to alleviate Malacca Dilemma.",
      "us": "Expresses strategic and dual-use naval surveillance concerns.",
      "india": "Counters with development of nearby Sittwe Port under the Kaladan Project."
    },
    "audioBriefingText": "Kyaukpyu in Rakhine State is China's direct overland energy gateway from the Bay of Bengal into Yunnan, allowing crude tankers to bypass the crowded Strait of Malacca.",
    "relatedDossierSlugs": [
      "bay-of-bengal-security"
    ]
  },
  {
    "id": "sittwe-port",
    "name": "Sittwe Port & Kaladan Multi-Modal Project",
    "banglaName": "সিত্বে বন্দর ও কালাদান প্রজেক্ট (মিয়ানমার)",
    "category": "port",
    "categoryLabel": "Bilateral Transit Hub",
    "theater": "bay_of_bengal",
    "theaterLabel": "Bay of Bengal & South Asia",
    "lat": 20.14,
    "lng": 92.89,
    "xPct": 76.8,
    "yPct": 45.5,
    "threatLevel": "High Geopolitical Friction",
    "significance": "India-financed deepwater port at the mouth of the Kaladan River in Myanmar, designed to connect Kolkata Port to landlocked Mizoram via river and highway transit.",
    "banglaSignificance": "ভারতের কালাদান মাল্টি-মোডাল প্রজেক্টের অংশ, যা কলকাতা থেকে মিয়ানমার হয়ে মিজোরামে সংযোগ তৈরির লক্ষ্যে নির্মিত।",
    "historicalContext": "Operationalized in May 2023 by India to provide an alternative route to the Siliguri Corridor; currently impacted by Myanmar civil conflict and Arakan Army operations.",
    "keyTreaties": [
      "Kaladan Multi-Modal Transit Transport Framework 2008"
    ],
    "bangladeshRelevance": "Serves as an alternative transit route for India while highlighting Bangladesh's far superior geography and stability for regional trade.",
    "greatPowerDynamics": {
      "india": "Major infrastructure investment to anchor Act East connectivity.",
      "regional": "Caught in conflict dynamics between Myanmar Junta and ethnic Arakan Army."
    },
    "audioBriefingText": "Sittwe Port is India's multi-modal project linking Kolkata to the Northeast via Myanmar's Kaladan river, navigating complex local conflict terrain in Rakhine.",
    "relatedDossierSlugs": [
      "bay-of-bengal-security"
    ]
  },
  {
    "id": "andaman-nicobar",
    "name": "Andaman & Nicobar Tri-Services Command (Port Blair)",
    "banglaName": "আন্দামান ও নিকোবর ট্রাই-সার্ভিস কমান্ড (পোর্ট ব্লেয়ার)",
    "category": "island_base",
    "categoryLabel": "Strategic Chokepoint Fortress",
    "theater": "bay_of_bengal",
    "theaterLabel": "Bay of Bengal & South Asia",
    "lat": 11.66,
    "lng": 92.74,
    "xPct": 78.5,
    "yPct": 48.5,
    "threatLevel": "Strategic Anchor",
    "significance": "India's sole unified tri-services theater command sitting at the western mouth of the Malacca Strait, dominating the Six-Degree and Ten-Degree maritime channels.",
    "banglaSignificance": "মালাক্কা প্রণালীর মুখে অবস্থিত ভারতের যৌথ সামরিক কমান্ড, যা বঙ্গোপসাগর ও ভারত মহাসাগরের প্রধান আন্তর্জাতিক সমুদ্রপথ পর্যবেক্ষণ করে।",
    "historicalContext": "Established in 2001 post-Kargil War; heavily fortified with P-8I maritime patrol aircraft runways, radar arrays, and nuclear submarine berthing infrastructure.",
    "keyTreaties": [
      "Quad Maritime Domain Awareness Initiative",
      "Indo-French Logistics Sharing Agreement"
    ],
    "bangladeshRelevance": "Directly abuts Bangladesh's southern maritime approaches and international merchant shipping corridors.",
    "greatPowerDynamics": {
      "india": "Acts as the sentinel blocking PLA Navy entry into the Indian Ocean.",
      "us": "Coordinates joint naval reconnaissance and Quad drills."
    },
    "audioBriefingText": "The Andaman and Nicobar Command at Port Blair overlooks the Six-Degree Channel into Malacca, functioning as India's forward military bastion in the eastern Indian Ocean.",
    "relatedDossierSlugs": [
      "bay-of-bengal-security"
    ]
  },
  {
    "id": "hambantota-port",
    "name": "Hambantota International Port (Sri Lanka)",
    "banglaName": "হাম্বানটোটা আন্তর্জাতিক বন্দর (শ্রীলঙ্কা)",
    "category": "port",
    "categoryLabel": "Contested Indian Ocean Hub",
    "theater": "bay_of_bengal",
    "theaterLabel": "Bay of Bengal & South Asia",
    "lat": 6.12,
    "lng": 81.12,
    "xPct": 74.8,
    "yPct": 54.0,
    "threatLevel": "High Geopolitical Friction",
    "significance": "Deep-water port situated directly on the main East-West shipping line, leased for 99 years to China Merchants Port in 2017 amid controversial debt-equity restructuring.",
    "banglaSignificance": "শ্রীলঙ্কার দক্ষিণাঞ্চলীয় গভীর সমুদ্র বন্দর, যা ৯৯ বছরের জন্য চীনা প্রতিষ্ঠানের কাছে লিজ দেওয়ায় বৈশ্বিক ভূরাজনীতিতে আলোচিত।",
    "historicalContext": "Constructed with Chinese EXIM Bank loans; handed over in 2017 when Sri Lanka struggled with external sovereign debt maturities.",
    "keyTreaties": [
      "Sri Lanka-China Port Concession Agreement 2017"
    ],
    "bangladeshRelevance": "Provides vital macroeconomic lessons for Bangladesh on external debt management, project feasibility, and sovereign autonomy.",
    "greatPowerDynamics": {
      "china": "Manages commercial port operations and industrial zone.",
      "india": "Expresses deep security alarm over visits by Chinese space-tracking vessels (Yuan Wang 5)."
    },
    "audioBriefingText": "Hambantota Port in Sri Lanka sits directly on the world's busiest East-West shipping lane, serving as a global case study in port concessions and maritime competition.",
    "relatedDossierSlugs": [
      "bay-of-bengal-security"
    ]
  },
  {
    "id": "diego-garcia",
    "name": "Diego Garcia Naval Support Facility (BIOT)",
    "banglaName": "দিয়েগো গার্সিয়া নৌ ঘাঁটি",
    "category": "island_base",
    "categoryLabel": "Great Power Military Bastion",
    "theater": "bay_of_bengal",
    "theaterLabel": "Bay of Bengal & South Asia",
    "lat": -7.31,
    "lng": 72.42,
    "xPct": 71.5,
    "yPct": 62.0,
    "threatLevel": "Strategic Anchor",
    "significance": "Strategic British Indian Ocean Territory coral atoll leased to the United States military, operating long-range B-2/B-52 bomber runways, submarine tenders, and global SIGINT arrays.",
    "banglaSignificance": "ভারত মহাসাগরের কেন্দ্রে অবস্থিত প্রধান অ্যাংলো-আমেরিকান যৌথ বিমান ও নৌঘাঁটি, যা পুরো এশিয়া ও মধ্যপ্রাচ্যে দীর্ঘপাল্লার নজরদারি চালায়।",
    "historicalContext": "Chagos Archipelago residents were evicted in 1968-1973; 2019 ICJ Advisory Opinion declared the UK administration unlawful, leading to a 2024 sovereignty transfer accord with Mauritius while preserving the military base.",
    "keyTreaties": [
      "UK-US Defense Agreement 1966",
      "2019 ICJ Chagos Advisory Opinion",
      "UK-Mauritius Sovereignty Treaty 2024"
    ],
    "bangladeshRelevance": "Primary staging location for US military power projection across the Indian Ocean littoral.",
    "greatPowerDynamics": {
      "us": "Operates forward nuclear submarine and strategic bomber logistics.",
      "global": "Mauritius reasserts decolonized sovereignty with UN support."
    },
    "audioBriefingText": "Diego Garcia in the central Indian Ocean serves as the key strategic forward base for United States naval and long-range bomber operations across the Indo-Pacific.",
    "relatedDossierSlugs": [
      "bay-of-bengal-security"
    ]
  },
  {
    "id": "chabahar-port",
    "name": "Chabahar Port & INSTC Corridor (Iran)",
    "banglaName": "চাবাহার বন্দর ও আইএনএসটিসি (ইরান)",
    "category": "port",
    "categoryLabel": "INSTC Eurasian Transit Hub",
    "theater": "middle_east",
    "theaterLabel": "Middle East & Persian Gulf",
    "lat": 25.29,
    "lng": 60.64,
    "xPct": 69.8,
    "yPct": 36.0,
    "threatLevel": "High Geopolitical Friction",
    "significance": "Iran's only oceanic deepwater port on the Gulf of Oman, operated under a long-term Indian contract to access Afghanistan and Central Asia, bypassing Pakistan.",
    "banglaSignificance": "ইরানের একমাত্র গভীর সমুদ্র বন্দর, যা ভারতকে পাকিস্তান এড়িয়ে আফগানিস্তান ও মধ্য এশিয়ায় প্রবেশাধিকার দেয়।",
    "historicalContext": "Key anchor of the International North-South Transport Corridor (INSTC); secured a 10-year Indian management agreement in 2024 despite US secondary sanctions risks.",
    "keyTreaties": [
      "India-Iran-Afghanistan Trilateral Transit Agreement 2016",
      "India-Iran 10-Year Chabahar Accord 2024"
    ],
    "bangladeshRelevance": "Potential future western multimodal trade corridor into Central Asia and the Caucasus.",
    "greatPowerDynamics": {
      "india": "Invests heavily in the Shahid Beheshti terminal.",
      "us": "Monitors compliance under CAATSA sanctions frameworks.",
      "china": "Maintains comprehensive 25-year strategic cooperation with Tehran."
    },
    "audioBriefingText": "Chabahar Port provides India and Central Asian nations with an oceanic trade portal that bypasses overland bottlenecks, linking the Indian Ocean to Eurasia via the INSTC.",
    "relatedDossierSlugs": [
      "global-supply-chain-resilience"
    ]
  },
  {
    "id": "gwadar-port",
    "name": "Gwadar Deep-Sea Port (Pakistan - CPEC)",
    "banglaName": "গওয়াদার গভীর সমুদ্র বন্দর (পাকিস্তান - সিপেক)",
    "category": "port",
    "categoryLabel": "CPEC Flagship Terminal",
    "theater": "middle_east",
    "theaterLabel": "Middle East & Persian Gulf",
    "lat": 25.12,
    "lng": 62.32,
    "xPct": 71.2,
    "yPct": 36.8,
    "threatLevel": "High Geopolitical Friction",
    "significance": "The crown jewel of the $62B China-Pakistan Economic Corridor (CPEC) on the Arabian Sea, operated by China Overseas Port Holding Company (COPHC).",
    "banglaSignificance": "চীন-পাকিস্তান অর্থনৈতিক করিডোরের (সিপেক) প্রধান কেন্দ্র, যা কাশগর থেকে সরাসরি আরব সাগরে বাণিজ্যিক সংযোগ স্থাপন করে।",
    "historicalContext": "Purchased by Pakistan from Oman in 1958; transformed into a Chinese-built deep-sea port to bypass Indian Ocean bottlenecks and connect Xinjiang.",
    "keyTreaties": [
      "China-Pakistan Economic Corridor (CPEC) Framework 2015"
    ],
    "bangladeshRelevance": "Important regional comparative study for deep-sea port governance, security costs, and maritime industrialization.",
    "greatPowerDynamics": {
      "china": "Secures dual-use port infrastructure 400 miles from the Strait of Hormuz.",
      "us": "Observes potential naval submarine deployment capabilities."
    },
    "audioBriefingText": "Gwadar Port on the Arabian Sea is the marine anchor of the China-Pakistan Economic Corridor, providing western China with direct connectivity to Middle Eastern energy lanes.",
    "relatedDossierSlugs": [
      "global-supply-chain-resilience"
    ]
  },
  {
    "id": "malacca-strait",
    "name": "Strait of Malacca (Singapore/Malaysia/Indonesia)",
    "banglaName": "মালাক্কা প্রণালী",
    "category": "chokepoint",
    "categoryLabel": "Global Maritime Chokepoint #1",
    "theater": "indo_pacific",
    "theaterLabel": "Indo-Pacific & East Asia",
    "lat": 1.43,
    "lng": 102.89,
    "xPct": 80.5,
    "yPct": 57.0,
    "threatLevel": "Critical Alert",
    "significance": "The world's busiest shipping chokepoint (800 km long, narrowing to 2.8 km at Phillips Channel), carrying over 25% of global traded goods and 80% of East Asia's imported crude oil.",
    "banglaSignificance": "বিশ্বের সবচেয়ে গুরুত্বপূর্ণ বাণিজ্যিক সমুদ্র প্রণালী, যা দিয়ে পূর্ব এশিয়ার ৮০% তেল এবং বৈশ্বিক বাণিজ্যের ২৫% পরিবাহিত হয়। এটি চীনের মালাক্কা ডিলেমার কেন্দ্রবিন্দু।",
    "historicalContext": "Historically contested by the Srivijaya Empire, Portuguese, Dutch, and British. Today governed under UNCLOS transit passage regimes by the littoral states (Indonesia, Malaysia, Singapore).",
    "keyTreaties": [
      "UNCLOS 1982 (Transit Passage)",
      "Malacca Straits Patrol (MSP) Agreement"
    ],
    "bangladeshRelevance": "Bangladesh's export RMG cargoes to Japan, South Korea, China, and US West Coast navigate this exact waterway.",
    "greatPowerDynamics": {
      "china": "Preoccupied by the Malacca Dilemma (vulnerability of oil imports to naval blockades).",
      "us": "Maintains rotational naval deployment and littoral combat ships in Singapore.",
      "india": "Monitors the western entrance from the Andaman and Nicobar Command."
    },
    "audioBriefingText": "The Strait of Malacca connects the Indian and Pacific Oceans. Handling over ninety thousand vessels a year, any disruption here would paralyze global supply chains and energy trade.",
    "relatedDossierSlugs": [
      "bay-of-bengal-security",
      "global-supply-chain-resilience"
    ]
  },
  {
    "id": "hormuz-strait",
    "name": "Strait of Hormuz (Oman/Iran/UAE)",
    "banglaName": "হরমুজ প্রণালী",
    "category": "chokepoint",
    "categoryLabel": "Global Energy Arterial Chokepoint",
    "theater": "middle_east",
    "theaterLabel": "Middle East & Persian Gulf",
    "lat": 26.56,
    "lng": 56.25,
    "xPct": 67.2,
    "yPct": 36.5,
    "threatLevel": "Critical Alert",
    "significance": "The world's most critical oil transit chokepoint, through which 21 million barrels per day (21% of global petroleum consumption and vast LNG volumes) flow.",
    "banglaSignificance": "বিশ্বের প্রধান জ্বালানি করিডোর, যা দিয়ে প্রতিদিন প্রায় ২১ মিলিয়ন ব্যারেল তেল এবং বাংলাদেশের প্রধান এলএনজি সরবরাহ পরিবাহিত হয়।",
    "historicalContext": "Site of the 1980s Tanker War during the Iran-Iraq conflict; recurrent Iranian seizure of merchant tankers and naval drone confrontations.",
    "keyTreaties": [
      "UNCLOS 1982",
      "International Maritime Security Construct (IMSC / Operation Sentinel)"
    ],
    "bangladeshRelevance": "Vital energy security chokepoint: Bangladesh imports the majority of its crude petroleum and long-term LNG (from Qatar and Oman) through Hormuz.",
    "greatPowerDynamics": {
      "us": "Fifth Fleet (headquartered in Bahrain) guarantees freedom of navigation.",
      "iran": "Exercises asymmetric coastal missile, fast-attack boat, and naval mine leverage.",
      "china": "Consumes over 45% of oil exiting the Strait."
    },
    "audioBriefingText": "The Strait of Hormuz is the world's paramount oil artery. Twenty-one percent of global petroleum flows through this narrow passageway, making it vital for Bangladesh's LNG and energy supplies.",
    "relatedDossierSlugs": [
      "global-supply-chain-resilience"
    ]
  },
  {
    "id": "bab-el-mandeb",
    "name": "Bab el-Mandeb Strait & Red Sea (Yemen/Djibouti)",
    "banglaName": "বাব আল-মান্দাব প্রণালী ও লোহিত সাগর",
    "category": "chokepoint",
    "categoryLabel": "Red Sea Gate of Tears",
    "theater": "middle_east",
    "theaterLabel": "Middle East & Persian Gulf",
    "lat": 12.58,
    "lng": 43.33,
    "xPct": 63.8,
    "yPct": 43.5,
    "threatLevel": "Critical Alert",
    "significance": "A 29-km strategic chokepoint linking the Gulf of Aden to the Red Sea and Suez Canal, carrying 12% of global seaborne commerce and key European container traffic.",
    "banglaSignificance": "লোহিত সাগরের প্রবেশদ্বার, যা সুয়েজ খালের সাথে যুক্ত। হুথি ক্ষেপণাস্ত্র হামলার কারণে ২০২৪ সালে বিশ্ব বাণিজ্য ব্যাপকভাবে বিঘ্নিত হয়।",
    "historicalContext": "Known as the Gate of Tears in Arabic; 2023-2024 Houthi anti-ship missile and drone attacks forced global container lines to reroute around Africa.",
    "keyTreaties": [
      "Operation Prosperity Guardian (Multinational Coalition 2023)",
      "UNCLOS 1982"
    ],
    "bangladeshRelevance": "Rerouting Bangladesh garment shipments around the Cape of Good Hope adds 14-20 days transit time and increases container freight rates by 150-200%.",
    "greatPowerDynamics": {
      "us": "Leads naval coalition escort operations (Operation Prosperity Guardian).",
      "china": "Maintains its first overseas military support base in neighboring Djibouti.",
      "regional": "Djibouti hosts US, French, Japanese, and Chinese military bases."
    },
    "audioBriefingText": "Bab el-Mandeb controls entry into the Red Sea and Suez Canal. Security crises here directly inflate freight costs and delivery times for Bangladesh's garment exports to Europe.",
    "relatedDossierSlugs": [
      "global-supply-chain-resilience"
    ]
  },
  {
    "id": "suez-canal",
    "name": "Suez Canal (Egypt)",
    "banglaName": "সুয়েজ খাল (মিশর)",
    "category": "chokepoint",
    "categoryLabel": "Trans-Continental Maritime Canal",
    "theater": "middle_east",
    "theaterLabel": "Middle East & Persian Gulf",
    "lat": 30.58,
    "lng": 32.26,
    "xPct": 59.5,
    "yPct": 34.0,
    "threatLevel": "Critical Alert",
    "significance": "The 193-km sea-level waterway in Egypt connecting the Mediterranean to the Red Sea, facilitating 12% of global trade without transit around Africa.",
    "banglaSignificance": "মিশরের বিখ্যাত সমুদ্র খাল, যা ভূমধ্যসাগর ও লোহিত সাগরকে যুক্ত করে এশিয়া ও ইউরোপের মধ্যকার দূরত্ব ৭,০০০ কিমি কমিয়ে দিয়েছে।",
    "historicalContext": "Opened in 1869; nationalized by Gamal Abdel Nasser in 1956 triggering the Suez Crisis; expanded in 2015 to permit simultaneous two-way transit.",
    "keyTreaties": [
      "Convention of Constantinople 1888 (Guaranteed Free Passage)"
    ],
    "bangladeshRelevance": "The primary maritime highway carrying over $30B worth of annual apparel exports to European Union retail markets.",
    "greatPowerDynamics": {
      "egypt": "Sovereign toll revenues represent a major foreign exchange earner.",
      "global": "Essential artery for European and Asian manufacturing trade."
    },
    "audioBriefingText": "The Suez Canal connects the Mediterranean and Red Seas, eliminating seven thousand kilometers from the Asia-to-Europe sea voyage and serving as the primary corridor for Bangladesh's European exports.",
    "relatedDossierSlugs": [
      "global-supply-chain-resilience"
    ]
  },
  {
    "id": "panama-canal",
    "name": "Panama Canal & Neopanamax Locks",
    "banglaName": "পানামা খাল",
    "category": "chokepoint",
    "categoryLabel": "Trans-Oceanic Inter-Islet Canal",
    "theater": "americas",
    "theaterLabel": "Americas & Western Hemisphere",
    "lat": 9.08,
    "lng": -79.68,
    "xPct": 24.2,
    "yPct": 48.5,
    "threatLevel": "Strategic Anchor",
    "significance": "An 82-km engineering wonder crossing the Isthmus of Panama, connecting the Atlantic and Pacific Oceans and handling 6% of global seaborne maritime commerce.",
    "banglaSignificance": "আটলান্টিক ও প্রশান্ত মহাসাগরকে যুক্তকারী ৮২ কিমি খাল, যা আমেরিকার পূর্ব ও পশ্চিম উপকূলের মধ্যে দ্রুত বাণিজ্যের প্রধান পথ।",
    "historicalContext": "Constructed by the United States (opened 1914); sovereignty returned to Panama under the 1977 Torrijos-Carter Treaties; expanded with Neopanamax locks in 2016.",
    "keyTreaties": [
      "Torrijos-Carter Treaties 1977",
      "Treaty Concerning the Permanent Neutrality of the Panama Canal"
    ],
    "bangladeshRelevance": "Facilitates US agricultural, wheat, and LNG export shipments moving through Gulf ports to Asian energy and food consumers.",
    "greatPowerDynamics": {
      "us": "Guarantees permanent neutrality and commercial access.",
      "china": "Operates key container handling concessions at Balboa and Colon terminals."
    },
    "audioBriefingText": "The Panama Canal bridges the Atlantic and Pacific Oceans across Central America, serving as a cornerstone for American and trans-Pacific seaborne commodities.",
    "relatedDossierSlugs": [
      "global-supply-chain-resilience"
    ]
  },
  {
    "id": "bosphorus-dardanelles",
    "name": "Turkish Straits (Bosphorus & Dardanelles)",
    "banglaName": "তুর্কি প্রণালী (বসফরাস ও দার্দানেলিস)",
    "category": "chokepoint",
    "categoryLabel": "Black Sea Continental Gate",
    "theater": "europe_eurasia",
    "theaterLabel": "Europe & Eurasia",
    "lat": 41.11,
    "lng": 29.07,
    "xPct": 58.2,
    "yPct": 27.5,
    "threatLevel": "Critical Alert",
    "significance": "The sovereign Turkish waterways linking the Black Sea to the Mediterranean, controlling all naval and commercial maritime access for Russia, Ukraine, Romania, and Bulgaria.",
    "banglaSignificance": "কৃষ্ণসাগর থেকে ভূমধ্যসাগরে প্রবেশের একমাত্র পথ। ১৯৩৬ সালের মন্ট্রো কনভেনশন অনুসারে তুরস্ক এই প্রণালীর যুদ্ধজাহাজ চলাচল নিয়ন্ত্রণ করে।",
    "historicalContext": "Centuries of Russo-Ottoman wars; governed since 1936 by the Montreux Convention, giving Turkey the sovereign right to close the straits to belligerent warships during conflicts.",
    "keyTreaties": [
      "Montreux Convention Regarding the Regime of the Straits 1936"
    ],
    "bangladeshRelevance": "Directly impacts global grain and wheat shipping prices: Bangladesh imports significant wheat from Ukraine and Russia via the Bosphorus.",
    "greatPowerDynamics": {
      "turkey": "Strictly enforces Montreux neutrality, preventing Black Sea naval escalation.",
      "russia": "Vital commercial export funnel for agricultural and oil exports from Novorossiysk."
    },
    "audioBriefingText": "The Turkish Straits of Bosphorus and Dardanelles govern all naval passage between the Black Sea and the Mediterranean, regulated under the historic 1936 Montreux Convention.",
    "relatedDossierSlugs": [
      "global-supply-chain-resilience"
    ]
  },
  {
    "id": "taiwan-strait",
    "name": "Taiwan Strait & First Island Chain",
    "banglaName": "তাইওয়ান প্রণালী",
    "category": "flashpoint",
    "categoryLabel": "High-Tech Geopolitical Flashpoint",
    "theater": "indo_pacific",
    "theaterLabel": "Indo-Pacific & East Asia",
    "lat": 24.28,
    "lng": 119.54,
    "xPct": 86.8,
    "yPct": 38.5,
    "threatLevel": "Critical Alert",
    "significance": "A 160-km wide body of water separating Taiwan from mainland China, through which nearly half of the global container ship fleet and advanced semiconductor supply chains pass.",
    "banglaSignificance": "চীন ও তাইওয়ানের মধ্যকার প্রণালী, যা বিশ্বের ৬০% এর বেশি উন্নত মাইক্রোচিপ ও সেমিকন্ডাক্টর বাণিজ্যের কেন্দ্রবিন্দু।",
    "historicalContext": "Center of three historical Taiwan Strait Crises (1954, 1958, 1995-96) and ongoing live-fire military encirclement exercises by the PLA.",
    "keyTreaties": [
      "Taiwan Relations Act 1979 (US)",
      "US-China Three Joint Communiqués"
    ],
    "bangladeshRelevance": "A conflict in the Taiwan Strait would trigger an estimated $2.6 trillion global economic shock, devastating worldwide electronics and apparel markets.",
    "greatPowerDynamics": {
      "china": "Claims sovereignty and threatens reunification by force if necessary.",
      "us": "Maintains policy of strategic ambiguity while conducting FONOPs and arms transfers."
    },
    "audioBriefingText": "The Taiwan Strait is the most volatile maritime flashpoint in East Asia, carrying half the world's container ships and anchoring global semiconductor fabrication.",
    "relatedDossierSlugs": [
      "global-supply-chain-resilience"
    ]
  },
  {
    "id": "gibraltar-strait",
    "name": "Strait of Gibraltar (UK/Spain/Morocco)",
    "banglaName": "জিব্রাল্টার প্রণালী",
    "category": "chokepoint",
    "categoryLabel": "Mediterranean Atlantic Chokepoint",
    "theater": "europe_eurasia",
    "theaterLabel": "Europe & Eurasia",
    "lat": 35.96,
    "lng": -5.6,
    "xPct": 46.5,
    "yPct": 30.5,
    "threatLevel": "Strategic Anchor",
    "significance": "The 13-km wide maritime strait connecting the Atlantic Ocean to the Mediterranean Sea, carrying 300+ commercial vessels daily and separating Europe from Africa.",
    "banglaSignificance": "আটলান্টিক মহাসাগর ও ভূমধ্যসাগরের সংযোগকারী মাত্র ১৩ কিমি প্রশস্ত প্রণালী, যা ইউরোপ ও আফ্রিকাকে পৃথক করেছে।",
    "historicalContext": "British overseas territory since the 1713 Treaty of Utrecht; fortified naval stronghold controlling naval transit into Southern Europe and North Africa.",
    "keyTreaties": [
      "Treaty of Utrecht 1713",
      "UNCLOS 1982 Transit Passage"
    ],
    "bangladeshRelevance": "Passage point for merchant ships navigating between Northern European ports and Mediterranean hubs.",
    "greatPowerDynamics": {
      "uk": "Retains strategic military base and radar monitoring at Gibraltar Rock.",
      "spain": "Maintains territorial sovereignty claims over the territory."
    },
    "audioBriefingText": "The Strait of Gibraltar connects the Atlantic Ocean with the Mediterranean Sea, separating Europe from North Africa by just thirteen kilometers of strategic water.",
    "relatedDossierSlugs": [
      "global-supply-chain-resilience"
    ]
  },
  {
    "id": "sunda-lombok-straits",
    "name": "Sunda & Lombok Straits (Indonesia)",
    "banglaName": "সুন্দা ও লম্বক প্রণালী (ইন্দোনেশিয়া)",
    "category": "chokepoint",
    "categoryLabel": "Deep-Draft Malacca Bypass",
    "theater": "indo_pacific",
    "theaterLabel": "Indo-Pacific & East Asia",
    "lat": -8.3,
    "lng": 115.7,
    "xPct": 83.5,
    "yPct": 62.5,
    "threatLevel": "Strategic Anchor",
    "significance": "Indonesian archipelagic straits providing deep-water navigational channels for Very Large Crude Carriers (VLCCs) and submerged submarines that cannot clear the shallow Malacca Strait.",
    "banglaSignificance": "ইন্দোনেশিয়ার গভীর সমুদ্র প্রণালী, যা অত্যন্ত ভারী তেলের ট্যাংকার এবং পারমাণবিক সাবমেরিনের জন্য মালাক্কা প্রণালীর প্রধান বিকল্প পথ।",
    "historicalContext": "Part of Indonesian Archipelagic Sea Lanes (ALKI); critical during geopolitical blockades or shallow-water navigation emergencies.",
    "keyTreaties": [
      "UNCLOS 1982 Archipelagic Sea Lanes (ALKI Regimes)"
    ],
    "bangladeshRelevance": "Alternative shipping passage for bulk commodities and iron ore moving from Australia to Bangladesh.",
    "greatPowerDynamics": {
      "indonesia": "Exercises sovereign archipelagic regulatory authority.",
      "us": "Utilizes for submerged nuclear submarine transit between Pacific and Indian Oceans."
    },
    "audioBriefingText": "The Lombok and Sunda Straits offer ultra-deep navigational channels through the Indonesian archipelago, serving as the essential contingency bypass for the Strait of Malacca.",
    "relatedDossierSlugs": [
      "global-supply-chain-resilience"
    ]
  },
  {
    "id": "un-hq-newyork",
    "name": "United Nations Headquarters (New York)",
    "banglaName": "জাতিসংঘ সদর দপ্তর (নিউ ইয়র্ক)",
    "category": "diplomatic_hq",
    "categoryLabel": "Global Multilateral Epicentre",
    "theater": "americas",
    "theaterLabel": "Americas & Western Hemisphere",
    "lat": 40.75,
    "lng": -73.96,
    "xPct": 26.3,
    "yPct": 28.7,
    "threatLevel": "Diplomatic Center",
    "significance": "The premier multilateral diplomatic arena hosting the UN General Assembly, Security Council, and Secretary-General, coordinating international law and crisis diplomacy.",
    "banglaSignificance": "বিশ্ব কূটনীতির প্রধান কেন্দ্র। ১৯৭৪ সালের ১৭ সেপ্টেম্বর বঙ্গবন্ধু শেখ মুজিবুর রহমান এখানে প্রথম বাংলায় ঐতিহাসিক ভাষণ দেন।",
    "historicalContext": "Founded in 1945; Bangladesh admitted as the 136th member state in 1974. Bangabandhu delivered the historic first Bangla address outlining non-alignment and justice.",
    "keyTreaties": [
      "Charter of the United Nations 1945",
      "Universal Declaration of Human Rights 1948"
    ],
    "bangladeshRelevance": "The primary stage where Bangladesh leads as the #1 Uniformed Peacekeeper Contributor (UN TCC) and champions global climate vulnerability finance.",
    "greatPowerDynamics": {
      "global": "P5 veto balance (US, China, Russia, UK, France)."
    },
    "audioBriefingText": "The United Nations Headquarters in New York is the epicenter of global multilateral statecraft, where Bangladesh stands as the world's top uniformed peacekeeping contributing nation.",
    "relatedDossierSlugs": [
      "bangladesh-un-peacekeeping"
    ]
  },
  {
    "id": "geneva-unog",
    "name": "Palais des Nations & UN Geneva (UNOG)",
    "banglaName": "জাতিসংঘ জেনেভা দপ্তর ও প্যালেস অব নেশনস",
    "category": "diplomatic_hq",
    "categoryLabel": "Humanitarian & Trade Diplomatic Hub",
    "theater": "europe_eurasia",
    "theaterLabel": "Europe & Eurasia",
    "lat": 46.22,
    "lng": 6.14,
    "xPct": 50.2,
    "yPct": 25.5,
    "threatLevel": "Diplomatic Center",
    "significance": "The global diplomatic hub for humanitarian law, human rights, international trade negotiations (WTO, UNCTAD), and peace conferences.",
    "banglaSignificance": "বিশ্ব বাণিজ্য সংস্থা (WTO), জাতিসংঘ মানবাধিকার কাউন্সিল এবং আন্তর্জাতিক রেড ক্রসের প্রধান কেন্দ্র।",
    "historicalContext": "Former headquarters of the League of Nations; established in Switzerland owing to centuries of Swiss perpetual neutrality.",
    "keyTreaties": [
      "Geneva Conventions 1949",
      "Marrakesh Agreement Establishing the WTO 1994"
    ],
    "bangladeshRelevance": "Where Bangladesh negotiates post-LDC trade preference transitions, TRIPS medicine patent waivers, and humanitarian advocacy for Rohingya refugees.",
    "greatPowerDynamics": {
      "global": "Multilateral trade dispute settlement and humanitarian diplomacy."
    },
    "audioBriefingText": "UN Geneva and the Palais des Nations host crucial international negotiations on global trade rules at the WTO and humanitarian protections under the Geneva Conventions.",
    "relatedDossierSlugs": [
      "post-ldc-geoeconomic-transition"
    ]
  },
  {
    "id": "the-hague-icj",
    "name": "Peace Palace & International Court of Justice (The Hague)",
    "banglaName": "আন্তর্জাতিক ন্যায়বিচার আদালত (পিস প্যালেস, দ্য হেগ)",
    "category": "diplomatic_hq",
    "categoryLabel": "World Judicial Capital",
    "theater": "europe_eurasia",
    "theaterLabel": "Europe & Eurasia",
    "lat": 52.08,
    "lng": 4.29,
    "xPct": 49.2,
    "yPct": 21.8,
    "threatLevel": "Diplomatic Center",
    "significance": "The seat of international justice housing the International Court of Justice (ICJ), Permanent Court of Arbitration (PCA), and International Criminal Court (ICC).",
    "banglaSignificance": "আন্তর্জাতিক বিচারিক রাজধানী। এখানে দ্য গাম্বিয়া বনাম মিয়ানমার রোহিঙ্গা গণহত্যা মামলা পরিচালিত হচ্ছে।",
    "historicalContext": "Erected following the Hague Peace Conferences of 1899 and 1907; the judicial body resolving sovereign interstate disputes under international law.",
    "keyTreaties": [
      "Statute of the International Court of Justice",
      "Rome Statute of the ICC 1998",
      "1948 Genocide Convention"
    ],
    "bangladeshRelevance": "Crucial for Bangladesh's legal fight for Rohingya justice in The Gambia v. Myanmar genocide proceedings under the 1948 Genocide Convention.",
    "greatPowerDynamics": {
      "global": "Rule-based international legal arbitration vs. sovereign power politics."
    },
    "audioBriefingText": "The Peace Palace at The Hague houses the International Court of Justice, serving as the world capital of international law and judicial arbitration.",
    "relatedDossierSlugs": [
      "unclos-maritime-law-bangladesh"
    ]
  },
  {
    "id": "itlos-hamburg",
    "name": "International Tribunal for the Law of the Sea (ITLOS, Hamburg)",
    "banglaName": "আন্তর্জাতিক সমুদ্র আইন ট্রাইব্যুনাল (ইটলস, হামবুর্গ)",
    "category": "diplomatic_hq",
    "categoryLabel": "UNCLOS Maritime Delimitation Court",
    "theater": "europe_eurasia",
    "theaterLabel": "Europe & Eurasia",
    "lat": 53.55,
    "lng": 9.99,
    "xPct": 51.5,
    "yPct": 20.5,
    "threatLevel": "Diplomatic Center",
    "significance": "The independent judicial body established by UNCLOS to adjudicate disputes arising out of the interpretation and application of the Law of the Sea.",
    "banglaSignificance": "২০১২ সালে এই আদালতে ঐতিহাসিক রায়ের মাধ্যমে বাংলাদেশ মিয়ানমারের বিরুদ্ধে বঙ্গোপসাগরে নিজস্ব সমুদ্রসীমা জয় করে।",
    "historicalContext": "Established under Annex VI of the 1982 Convention; landmark verdict on March 14, 2012 in Bangladesh v. Myanmar delimited the maritime boundary in the Bay of Bengal.",
    "keyTreaties": [
      "UNCLOS 1982",
      "2012 ITLOS Bangladesh/Myanmar Judgment"
    ],
    "bangladeshRelevance": "Historic triumph where Bangladesh secured full sovereign rights over 118,813 sq km of waters, 200 nm EEZ, and continental shelf rights without firing a single shot.",
    "greatPowerDynamics": {
      "global": "Pinnacle benchmark of peaceful judicial resolution for maritime boundary disputes."
    },
    "audioBriefingText": "The International Tribunal for the Law of the Sea in Hamburg is where Bangladesh secured its historic 2012 legal victory against Myanmar, winning sovereign rights over 118,000 square kilometers of maritime territory.",
    "relatedDossierSlugs": [
      "unclos-maritime-law-bangladesh"
    ]
  },
  {
    "id": "brussels-nato-eu",
    "name": "NATO & European Union Headquarters (Brussels)",
    "banglaName": "ন্যাটো ও ইউরোপীয় ইউনিয়ন সদর দপ্তর (ব্রাসেলস)",
    "category": "diplomatic_hq",
    "categoryLabel": "Transatlantic & European Capital",
    "theater": "europe_eurasia",
    "theaterLabel": "Europe & Eurasia",
    "lat": 50.85,
    "lng": 4.35,
    "xPct": 49.5,
    "yPct": 22.5,
    "threatLevel": "Diplomatic Center",
    "significance": "The administrative heart of the European Union (European Commission, Council) and the military headquarters of the North Atlantic Treaty Organization (NATO).",
    "banglaSignificance": "ইউরোপীয় ইউনিয়ন ও ন্যাটোর সদর দপ্তর। ইইউ হলো বাংলাদেশের পোশাক রপ্তানির সর্ববৃহৎ গন্তব্য (EBA স্কিমের আওতায়)।",
    "historicalContext": "Formed through the 1949 North Atlantic Treaty and the 1957 Treaty of Rome; transformed Brussels into the diplomatic capital of the Western alliance.",
    "keyTreaties": [
      "North Atlantic Treaty 1949 (Article 5)",
      "Treaty on European Union (Maastricht 1992)",
      "EU Everything But Arms (EBA) Scheme"
    ],
    "bangladeshRelevance": "The EU is Bangladesh's largest single export destination; ongoing negotiations focus on securing GSP+ status following LDC graduation.",
    "greatPowerDynamics": {
      "us": "Dominant military security partner in NATO.",
      "eu": "World's largest single-market economic trading bloc."
    },
    "audioBriefingText": "Brussels is the capital of European governance and the Atlantic Alliance, where Bangladesh negotiates preferential market access with its largest trade partner.",
    "relatedDossierSlugs": [
      "post-ldc-geoeconomic-transition"
    ]
  },
  {
    "id": "vienna-iaea-opec",
    "name": "IAEA & OPEC Headquarters (Vienna)",
    "banglaName": "আইএইএ ও ওপেক সদর দপ্তর (ভিয়েনা)",
    "category": "diplomatic_hq",
    "categoryLabel": "Nuclear Non-Proliferation & Energy Capital",
    "theater": "europe_eurasia",
    "theaterLabel": "Europe & Eurasia",
    "lat": 48.21,
    "lng": 16.37,
    "xPct": 53.5,
    "yPct": 24.0,
    "threatLevel": "Diplomatic Center",
    "significance": "Host city to the International Atomic Energy Agency (nuclear safeguards oversight) and OPEC (Organization of the Petroleum Exporting Countries oil quotas).",
    "banglaSignificance": "পরমাণু নিরাপত্তা সংস্থা (IAEA) এবং তেল রপ্তানিকারক দেশগুলোর সংস্থা ওপেক-এর সদর দপ্তর। রূপপুর পারমাণবিক কেন্দ্রের নিরাপত্তা এই সংস্থার অধীনে।",
    "historicalContext": "Selected during the Cold War as a neutral bridge between East and West under Austrian state neutrality law of 1955.",
    "keyTreaties": [
      "Nuclear Non-Proliferation Treaty (NPT 1968)",
      "IAEA Safeguards Agreements"
    ],
    "bangladeshRelevance": "Regulates civil nuclear compliance and safety protocols for Bangladesh's Rooppur 2,400 MW Nuclear Power Plant.",
    "greatPowerDynamics": {
      "global": "Nuclear non-proliferation inspections (Iran/North Korea) and global petroleum supply management."
    },
    "audioBriefingText": "Vienna hosts both the International Atomic Energy Agency, overseeing nuclear safety for plants like Bangladesh's Rooppur, and OPEC, which steers global oil production.",
    "relatedDossierSlugs": [
      "global-supply-chain-resilience"
    ]
  },
  {
    "id": "asean-jakarta",
    "name": "ASEAN Secretariat (Jakarta)",
    "banglaName": "আসিয়ান সচিবালয় (জাকার্তা)",
    "category": "diplomatic_hq",
    "categoryLabel": "Southeast Asian Multilateral Secretariat",
    "theater": "indo_pacific",
    "theaterLabel": "Indo-Pacific & East Asia",
    "lat": -6.2,
    "lng": 106.84,
    "xPct": 81.5,
    "yPct": 62.0,
    "threatLevel": "Diplomatic Center",
    "significance": "Central diplomatic coordinating body of the 10-nation Association of Southeast Asian Nations, representing a $3.6 trillion combined economy.",
    "banglaSignificance": "১০টি দক্ষিণ-পূর্ব এশীয় দেশের অর্থনৈতিক জোট আসিয়ান-এর সচিবালয়। বাংলাদেশ এখানে সেক্টরাল ডায়ালগ পার্টনারশিপ অর্জনে আগ্রহী।",
    "historicalContext": "Founded in 1967 via the Bangkok Declaration to foster stability during the Cold War; known for consensus-based ASEAN Way diplomacy.",
    "keyTreaties": [
      "ASEAN Charter 2007",
      "Regional Comprehensive Economic Partnership (RCEP 2020)"
    ],
    "bangladeshRelevance": "Bangladesh actively pursues ASEAN Sectoral Dialogue Partner status to deepen trade and resolve the Myanmar refugee crisis.",
    "greatPowerDynamics": {
      "china": "ASEAN's largest trading partner; deep RCEP integration.",
      "us": "Expands strategic partnership and maritime security cooperation."
    },
    "audioBriefingText": "The ASEAN Secretariat in Jakarta represents Southeast Asia's dynamic economic bloc. Bangladesh actively pursues deeper institutional ties here as part of its Look East diplomacy.",
    "relatedDossierSlugs": [
      "regional-hedging-bangladesh"
    ]
  },
  {
    "id": "suwalki-gap",
    "name": "Suwałki Gap (Poland/Lithuania/Belarus/Kaliningrad)",
    "banglaName": "সুওয়ালকি গ্যাপ (পোল্যান্ড/লিথুয়ানিয়া)",
    "category": "flashpoint",
    "categoryLabel": "NATO's Most Vulnerable Corridor",
    "theater": "europe_eurasia",
    "theaterLabel": "Europe & Eurasia",
    "lat": 54.1,
    "lng": 23.34,
    "xPct": 56.5,
    "yPct": 19.5,
    "threatLevel": "Critical Alert",
    "significance": "A 65-km narrow strip of land along the Polish-Lithuanian border, separating Russian Kaliningrad exclave from Belarus. Considered NATO's most vulnerable military choke point.",
    "banglaSignificance": "ন্যাটোর সবচেয়ে সংবেদনশীল স্থল করিডোর, যা রাশিয়া দখল করলে বাল্টিক রাষ্ট্রগুলো (ইস্তোনিয়া, লাটভিয়া, লিথুয়ানিয়া) বাকি ইউরোপ থেকে বিচ্ছিন্ন হয়ে যাবে।",
    "historicalContext": "Identified as a critical strategic fault line post-Soviet collapse; heavily patrolled by NATO Enhanced Forward Presence battlegroups.",
    "keyTreaties": [
      "North Atlantic Treaty Article 5",
      "NATO Vilnius Summit Defense Plans 2023"
    ],
    "bangladeshRelevance": "Serves as an essential analytical case study for high-intensity land chokepoints, directly comparable to the Siliguri Corridor in South Asia.",
    "greatPowerDynamics": {
      "russia": "Maintains heavy missile and electronic warfare presence in Kaliningrad.",
      "nato": "Deploys multinational brigade combat teams in Poland and Lithuania."
    },
    "audioBriefingText": "The Suwałki Gap is a sixty-five kilometer corridor connecting Poland to Lithuania. In military strategy, it is NATO's most critical bottleneck, mirroring South Asia's Siliguri Corridor.",
    "relatedDossierSlugs": [
      "regional-hedging-bangladesh"
    ]
  },
  {
    "id": "korean-dmz",
    "name": "Korean Demilitarized Zone (38th Parallel)",
    "banglaName": "কোরীয় অসামরিক অঞ্চল (৩৮তম সমান্তরাল)",
    "category": "flashpoint",
    "categoryLabel": "Heavily Fortified Cold War Border",
    "theater": "indo_pacific",
    "theaterLabel": "Indo-Pacific & East Asia",
    "lat": 37.95,
    "lng": 126.67,
    "xPct": 88.8,
    "yPct": 30.5,
    "threatLevel": "Critical Alert",
    "significance": "A 250-km long, 4-km wide buffer zone dividing the Korean Peninsula between the Democratic People's Republic of Korea (North) and the Republic of Korea (South).",
    "banglaSignificance": "উত্তর ও দক্ষিণ কোরিয়াকে বিভক্তকারী বিশ্বের সবচেয়ে সামরিকায়িত সীমান্ত রেখা।",
    "historicalContext": "Established under the 1953 Korean Armistice Agreement following three years of war; technically the two Koreas remain in an armistice without a permanent peace treaty.",
    "keyTreaties": [
      "Korean Armistice Agreement 1953",
      "UN Command Military Armistice Commission"
    ],
    "bangladeshRelevance": "South Korea is a major direct investor and bilateral ODA development partner in Bangladesh (EPZs, infrastructure).",
    "greatPowerDynamics": {
      "us": "Maintains 28,500 troops under United States Forces Korea (USFK).",
      "north_korea": "Deploys massed artillery and nuclear-capable ballistic missiles."
    },
    "audioBriefingText": "The 38th Parallel Korean DMZ remains the world's most fortified Cold War border, where thousands of artillery pieces and nuclear forces stand in permanent readiness.",
    "relatedDossierSlugs": [
      "global-supply-chain-resilience"
    ]
  },
  {
    "id": "spratly-islands",
    "name": "Spratly Islands & Mischief Reef (South China Sea)",
    "banglaName": "স্প্রাটলি দ্বীপপুঞ্জ (দক্ষিণ চীন সাগর)",
    "category": "flashpoint",
    "categoryLabel": "Contested Maritime Archipelagic Basins",
    "theater": "indo_pacific",
    "theaterLabel": "Indo-Pacific & East Asia",
    "lat": 9.54,
    "lng": 115.53,
    "xPct": 84.5,
    "yPct": 48.0,
    "threatLevel": "Critical Alert",
    "significance": "Over 100 small islands and reefs claimed by China, Taiwan, Vietnam, the Philippines, Malaysia, and Brunei, militarized with artificial airstrips and missile shelters.",
    "banglaSignificance": "দক্ষিণ চীন সাগরের অন্যতম বিরোধপূর্ণ দ্বীপপুঞ্জ, যেখানে কৃত্রিম সামরিক দ্বীপ তৈরি করে চীন নিজেদের নাইন ড্যাশ লাইন দাবি জোরদার করছে।",
    "historicalContext": "2016 South China Sea PCA Arbitration ruled that China's historic rights claim within the Nine-Dash Line had no legal basis under UNCLOS.",
    "keyTreaties": [
      "UNCLOS 1982",
      "2016 South China Sea Permanent Court of Arbitration Award",
      "Declaration on the Conduct of Parties (DOC)"
    ],
    "bangladeshRelevance": "Reinforces the supreme importance of UNCLOS international law over unilateral maritime expansionism.",
    "greatPowerDynamics": {
      "china": "Constructed fortified military airbases at Fiery Cross, Subi, and Mischief Reefs.",
      "us": "Conducts regular naval Freedom of Navigation Operations (FONOPs)."
    },
    "audioBriefingText": "The Spratly Islands in the South China Sea are ground zero for maritime sovereignty disputes, where artificial military outposts face ongoing legal and naval challenges.",
    "relatedDossierSlugs": [
      "unclos-maritime-law-bangladesh"
    ]
  },
  {
    "id": "crimea-sevastopol",
    "name": "Crimea & Sevastopol Naval Base (Black Sea)",
    "banglaName": "ক্রিমিয়া ও সেভাস্টোপল নৌঘাঁটি",
    "category": "flashpoint",
    "categoryLabel": "Black Sea Strategic Bastion",
    "theater": "europe_eurasia",
    "theaterLabel": "Europe & Eurasia",
    "lat": 44.61,
    "lng": 33.52,
    "xPct": 60.5,
    "yPct": 25.5,
    "threatLevel": "Critical Alert",
    "significance": "Warm-water naval base on the Crimean Peninsula, headquarters of the Russian Black Sea Fleet, and central theater in the Russia-Ukraine War.",
    "banglaSignificance": "কৃষ্ণসাগরে রাশিয়ার প্রধান উষ্ণ পানির নৌঘাঁটি, যা ইউরেশীয় নিরাপত্তার অন্যতম বড় যুদ্ধক্ষেত্র।",
    "historicalContext": "Annexed by Catherine the Great in 1783; annexed by the Russian Federation in 2014; site of extensive maritime missile and naval drone combat.",
    "keyTreaties": [
      "1997 Black Sea Fleet Partition Treaty",
      "UNGA Resolution 68/262 (Territorial Integrity of Ukraine)"
    ],
    "bangladeshRelevance": "Black Sea disruptions created global fertilizer, sunflower oil, and wheat price spikes across South Asia.",
    "greatPowerDynamics": {
      "russia": "Projects naval and anti-ship cruise missile power across the Black Sea.",
      "ukraine": "Utilizes asymmetric USV sea drones and Western long-range missiles."
    },
    "audioBriefingText": "Sevastopol in Crimea is Russia's historic warm-water naval bastion, where ongoing naval drone warfare has reshaped modern Black Sea security.",
    "relatedDossierSlugs": [
      "global-supply-chain-resilience"
    ]
  },
  {
    "id": "ras-tanura-oil",
    "name": "Ras Tanura Crude Oil Super-Terminal (Saudi Arabia)",
    "banglaName": "রাস তানুরা তেল টার্মিনাল (সৌদি আরব)",
    "category": "energy_resource",
    "categoryLabel": "World's Largest Offshore Oil Port",
    "theater": "middle_east",
    "theaterLabel": "Middle East & Persian Gulf",
    "lat": 26.64,
    "lng": 50.16,
    "xPct": 65.5,
    "yPct": 37.0,
    "threatLevel": "Strategic Anchor",
    "significance": "Saudi Aramco's principal export port in the Persian Gulf, handling over 6.5 million barrels of crude oil per day (nearly 7% of total global oil demand).",
    "banglaSignificance": "বিশ্বের বৃহত্তম সমুদ্রবর্তী অপরিশোধিত তেল রপ্তানি টার্মিনাল, যেখান থেকে বাংলাদেশের ইস্টার্ন রিফাইনারির জন্য তেল আমদানি করা হয়।",
    "historicalContext": "Operating since 1939; primary target of regional missile and drone threats, necessitating sophisticated Patriot air defense shields.",
    "keyTreaties": [
      "OPEC+ Production Allocations",
      "Saudi-US Strategic Security Arrangements"
    ],
    "bangladeshRelevance": "Directly supplies Arabian Light crude for Bangladesh Petroleum Corporation (BPC) refineries.",
    "greatPowerDynamics": {
      "saudi_arabia": "World's leading swing oil producer.",
      "global": "Any disruption instantly spikes global Brent crude benchmark prices."
    },
    "audioBriefingText": "Ras Tanura in Saudi Arabia is the world's largest offshore crude oil export terminal, supplying vital petroleum shipments for Bangladesh and global energy grids.",
    "relatedDossierSlugs": [
      "global-supply-chain-resilience"
    ]
  },
  {
    "id": "katanga-cobalt-belt",
    "name": "Katanga Copper-Cobalt Belt (DR Congo)",
    "banglaName": "কাটাঙ্গা কপার ও কোবাল্ট বেল্ট (ডিআর কঙ্গো)",
    "category": "energy_resource",
    "categoryLabel": "Critical Clean-Energy Mineral Belt",
    "theater": "africa",
    "theaterLabel": "Africa & Southern Littorals",
    "lat": -11.66,
    "lng": 27.48,
    "xPct": 56.5,
    "yPct": 57.0,
    "threatLevel": "High Geopolitical Friction",
    "significance": "Depositories containing over 70% of the world's cobalt reserves and vast high-grade copper deposits, indispensable for EV lithium-ion batteries and global green energy transitions.",
    "banglaSignificance": "বিশ্বের ৭০% কোবাল্টের উৎস, যা বৈদ্যুতিক গাড়ি এবং আধুনিক লিথিয়াম ব্যাটারির জন্য অপরিহার্য।",
    "historicalContext": "Colonized under Belgian exploitation; today the focal battleground for Chinese vs. Western critical mineral supply chain control.",
    "keyTreaties": [
      "Minerals Security Partnership (MSP - US/EU/Japan/India)",
      "Lobito Atlantic Railway Corridor"
    ],
    "bangladeshRelevance": "Shapes the global cost structure of renewable solar batteries, electric transportation, and power grid storage components.",
    "greatPowerDynamics": {
      "china": "Owns and operates over 75% of commercial cobalt refining assets.",
      "us": "Finances the $1B Lobito Railway Corridor to export minerals to the Atlantic."
    },
    "audioBriefingText": "The Katanga Belt in Central Africa produces over seventy percent of the planet's cobalt, making it the supreme geoeconomic battleground for clean energy and battery supply chains.",
    "relatedDossierSlugs": [
      "global-supply-chain-resilience"
    ]
  },
  {
    "id": "cape-good-hope",
    "name": "Cape of Good Hope (South Africa)",
    "banglaName": "উত্তমাশা অন্তরীপ (দক্ষিণ আফ্রিকা)",
    "category": "chokepoint",
    "categoryLabel": "Global Trans-Oceanic Bypass",
    "theater": "africa",
    "theaterLabel": "Africa & Southern Littorals",
    "lat": -34.35,
    "lng": 18.49,
    "xPct": 54.5,
    "yPct": 78.0,
    "threatLevel": "Strategic Anchor",
    "significance": "The southern tip of the African continent, serving as the universal contingency maritime bypass when the Suez Canal or Red Sea is closed or contested.",
    "banglaSignificance": "আফ্রিকার দক্ষিণ প্রান্তের বিখ্যাত অন্তরীপ। লোহিত সাগর বা সুয়েজ খাল বন্ধ হলে এটিই এশিয়া-ইউরোপ বাণিজ্যের প্রধান বিকল্প পথ।",
    "historicalContext": "Discovered by Bartolomeu Dias in 1488, opening European oceanic trade with India and the East; regained prominence in 2024 during Red Sea crises.",
    "keyTreaties": [
      "UNCLOS 1982 High Seas Freedoms"
    ],
    "bangladeshRelevance": "Rerouting container vessels around the Cape adds 3,500 nautical miles and 10 to 14 days to European voyages.",
    "greatPowerDynamics": {
      "global": "The global oceanic escape route during Middle Eastern instability."
    },
    "audioBriefingText": "The Cape of Good Hope at Africa's southern tip is the timeless backup highway for global shipping whenever Middle Eastern canals face crisis or conflict.",
    "relatedDossierSlugs": [
      "global-supply-chain-resilience"
    ]
  },
  {
    "id": "addis-ababa-au",
    "name": "African Union Headquarters (Addis Ababa)",
    "banglaName": "আফ্রিকান ইউনিয়ন সদর দপ্তর (আদ্দিস আবাবা)",
    "category": "diplomatic_hq",
    "categoryLabel": "Pan-African Diplomatic Seat",
    "theater": "africa",
    "theaterLabel": "Africa & Southern Littorals",
    "lat": 9.01,
    "lng": 38.74,
    "xPct": 61.0,
    "yPct": 47.0,
    "threatLevel": "Diplomatic Center",
    "significance": "Headquarters of the 55-member state African Union, coordinating African continental economic integration, peace operations, and Global South multilateralism.",
    "banglaSignificance": "৫৫টি আফ্রিকান রাষ্ট্রের জোট আফ্রিকান ইউনিয়নের সচিবালয়, যেখানে বাংলাদেশ শান্তিরক্ষা ও কৃষি কূটনীতি পরিচালনা করে।",
    "historicalContext": "Founded as the OAU in 1963; new $200M headquarters gifted and constructed by China in 2012 as part of its Forum on China-Africa Cooperation (FOCAC).",
    "keyTreaties": [
      "African Continental Free Trade Area (AfCFTA)",
      "Constitutive Act of the African Union 2000"
    ],
    "bangladeshRelevance": "Prime diplomatic platform for Bangladesh contract farming diplomacy, commercial trade diversification, and UN peacekeeping cooperation in Africa.",
    "greatPowerDynamics": {
      "china": "Massive infrastructure, mining, and loan diplomacy under FOCAC.",
      "us": "Focuses on counter-terrorism and democratic governance partnerships."
    },
    "audioBriefingText": "The African Union Headquarters in Addis Ababa directs continental integration for fifty-five member states and anchors Bangladesh's expanding African diplomatic outreach.",
    "relatedDossierSlugs": [
      "bangladesh-un-peacekeeping"
    ]
  }
];

export const MARITIME_CORRIDORS: MaritimeCorridor[] = [
  {
    "id": "persian-gulf-malacca-asia",
    "name": "Global Energy Highway (Hormuz → Malacca → East Asia)",
    "description": "The world's most critical crude oil and LNG maritime lifeline transporting Middle Eastern energy to South Asia (Bangladesh) and East Asia.",
    "pathD": "M 672 365 Q 715 440 758 448 T 805 570 Q 820 520 868 385",
    "color": "#0d9488",
    "flowSpeedSeconds": 12
  },
  {
    "id": "bay-of-bengal-sloc",
    "name": "Bay of Bengal Trade & Feeder Corridor",
    "description": "Regional feeder and main artery connecting Chattogram, Matarbari, and Mongla to Singapore, Colombo, and Port Klang.",
    "pathD": "M 758 448 Q 760 510 748 540 T 805 570",
    "color": "#14b8a6",
    "flowSpeedSeconds": 8
  },
  {
    "id": "suez-asia-europe",
    "name": "Asia-Europe Trade Corridor (Suez → Malacca)",
    "description": "Primary global manufactured goods and apparel conduit connecting European consumers with Bangladesh and Asian production hubs.",
    "pathD": "M 495 225 Q 535 240 595 340 Q 638 435 748 540 T 805 570",
    "color": "#3b82f6",
    "flowSpeedSeconds": 15
  },
  {
    "id": "cape-route-bypass",
    "name": "Cape of Good Hope Emergency Bypass Route",
    "description": "Alternative long-haul oceanic shipping lane used when Red Sea or Suez passage is disrupted.",
    "pathD": "M 495 225 Q 465 305 465 500 Q 480 680 545 780 Q 640 750 748 540 T 805 570",
    "color": "#f59e0b",
    "flowSpeedSeconds": 22
  }
];

export const VOYAGE_ROUTE_OPTIONS: VoyageRouteOption[] = [
  {
    "id": "route-energy-hormuz-matarbari",
    "routeName": "Middle East LNG / Crude Voyage to Bangladesh",
    "originNodeId": "ras-tanura-oil",
    "destinationNodeId": "matarbari-port",
    "pathD": "M 655 370 Q 672 365 712 400 Q 735 430 758 448",
    "totalNauticalMiles": 3450,
    "transitDaysAt15Knots": 9.6,
    "chokepointsEncountered": [
      "Strait of Hormuz",
      "Arabian Sea Open Transit",
      "Bay of Bengal Approach"
    ],
    "riskRating": "Moderate",
    "strategicSummary": "Critical energy lifeline carrying 100% of Bangladesh's spot and long-term LNG cargoes from Qatar and Oman into Matarbari terminals."
  },
  {
    "id": "route-rmg-chattogram-rotterdam-suez",
    "routeName": "Bangladesh RMG Export Highway to Europe (Via Suez)",
    "originNodeId": "chattogram-port",
    "destinationNodeId": "brussels-nato-eu",
    "pathD": "M 757 438 Q 748 540 638 435 Q 595 340 502 255 Q 495 225 495 225",
    "totalNauticalMiles": 7800,
    "transitDaysAt15Knots": 21.6,
    "chokepointsEncountered": [
      "Bay of Bengal",
      "Bab el-Mandeb (Red Sea)",
      "Suez Canal",
      "Strait of Gibraltar"
    ],
    "riskRating": "High",
    "strategicSummary": "Direct route for $30B+ garment exports to the EU. Highly vulnerable to Houthi missile activity in the southern Red Sea."
  },
  {
    "id": "route-rmg-chattogram-europe-cape",
    "routeName": "Bangladesh RMG Contingency Route (Via Cape of Good Hope)",
    "originNodeId": "chattogram-port",
    "destinationNodeId": "brussels-nato-eu",
    "pathD": "M 757 438 Q 748 540 640 750 Q 545 780 465 500 Q 465 305 495 225",
    "totalNauticalMiles": 11400,
    "transitDaysAt15Knots": 31.7,
    "chokepointsEncountered": [
      "Bay of Bengal",
      "Cape of Good Hope (Stormy High Seas)",
      "English Channel"
    ],
    "riskRating": "Moderate",
    "strategicSummary": "Avoids Middle East military strikes but adds 3,600 nautical miles, 10+ extra sailing days, and 150% container freight surcharges."
  },
  {
    "id": "route-asia-malacca-shanghai",
    "routeName": "Bay of Bengal to East Asia Semiconductor & Raw Material Lane",
    "originNodeId": "matarbari-port",
    "destinationNodeId": "taiwan-strait",
    "pathD": "M 758 448 Q 780 520 805 570 Q 840 500 868 385",
    "totalNauticalMiles": 3200,
    "transitDaysAt15Knots": 8.9,
    "chokepointsEncountered": [
      "Six-Degree Channel (Andaman)",
      "Strait of Malacca (Singapore)",
      "South China Sea / Taiwan Strait"
    ],
    "riskRating": "High",
    "strategicSummary": "Essential corridor for industrial fabric, cotton, electronic components, and machinery moving between East Asia and Bangladesh."
  }
];

export const MAP_RADAR_QUESTIONS: MapRadarQuestion[] = [
  {
    "id": "q1",
    "prompt": "Locate Bangladesh's premier 18.5-meter draft deep-sea port developed under Japan's BIG-B initiative.",
    "targetLocationId": "matarbari-port",
    "clue": "Situated in Cox's Bazar district on the Bay of Bengal coast.",
    "banglaClue": "কক্সবাজার জেলার মাতারবাড়িতে অবস্থিত দেশের প্রথম গভীর সমুদ্র বন্দর।"
  },
  {
    "id": "q2",
    "prompt": "Identify the world's busiest energy chokepoint through which 21% of global petroleum and Bangladesh's LNG flow.",
    "targetLocationId": "hormuz-strait",
    "clue": "Narrow waterway separating Iran from the Arabian Peninsula.",
    "banglaClue": "ইরান ও ওমানের মধ্যকার প্রধান তেল পরিবহন প্রণালী।"
  },
  {
    "id": "q3",
    "prompt": "Pinpoint the historic court in Hamburg where Bangladesh won its landmark 2012 maritime boundary judgment against Myanmar.",
    "targetLocationId": "itlos-hamburg",
    "clue": "The independent judicial body created under UNCLOS Annex VI.",
    "banglaClue": "জার্মানির হামবুর্গে অবস্থিত সমুদ্র আইন ট্রাইব্যুনাল।"
  },
  {
    "id": "q4",
    "prompt": "Find the narrow 22-km \"Chicken's Neck\" land corridor connecting mainland India to its eight Northeast states.",
    "targetLocationId": "siliguri-corridor",
    "clue": "Flanked by Nepal, Bhutan, and Bangladesh in northern West Bengal.",
    "banglaClue": "ভারতের মূল ভূখণ্ডের সাথে উত্তর-পূর্ব রাজ্যগুলোর সংযোগকারী শিলিগুড়ি করিডোর।"
  },
  {
    "id": "q5",
    "prompt": "Locate the global chokepoint carrying 80% of East Asia's oil imports, central to the \"Malacca Dilemma\".",
    "targetLocationId": "malacca-strait",
    "clue": "Separates Sumatra (Indonesia) from Peninsular Malaysia and Singapore.",
    "banglaClue": "সিঙ্গাপুর ও মালয়েশিয়ার মধ্যবর্তী প্রধান বাণিজ্যিক প্রণালী।"
  },
  {
    "id": "q6",
    "prompt": "Identify the permanent multilateral diplomatic headquarters located in Dhaka uniting 1.7 billion Bay of Bengal citizens.",
    "targetLocationId": "bimstec-dhaka",
    "clue": "Sub-regional body bridging SAARC and ASEAN members.",
    "banglaClue": "ঢাকায় অবস্থিত বিমসটেক স্থায়ী সচিবালয়।"
  },
  {
    "id": "q7",
    "prompt": "Find the southern Red Sea chokepoint (\"Gate of Tears\") impacted by 2024 maritime missile strikes.",
    "targetLocationId": "bab-el-mandeb",
    "clue": "Narrow strait between Djibouti and Yemen.",
    "banglaClue": "ইয়েমেন ও জিবুতির মধ্যকার বাব আল-মান্দাব প্রণালী।"
  },
  {
    "id": "q8",
    "prompt": "Locate the world judicial capital in The Hague housing the International Court of Justice and Peace Palace.",
    "targetLocationId": "the-hague-icj",
    "clue": "Seat of international justice in the Netherlands.",
    "banglaClue": "নেদারল্যান্ডসের দ্য হেগ শহরে অবস্থিত পিস প্যালেস।"
  },
  {
    "id": "q9",
    "prompt": "Identify China's deep-sea port in Rakhine State connecting the Bay of Bengal directly to Kunming via oil/gas pipelines.",
    "targetLocationId": "kyaukpyu-port",
    "clue": "Key terminal of the China-Myanmar Economic Corridor (CMEC).",
    "banglaClue": "মায়ানমারের রাখাইন রাজ্যে চীনের নির্মিত কিউকপিউ বন্দর।"
  },
  {
    "id": "q10",
    "prompt": "Pinpoint the coral atoll military base in the central Indian Ocean operating US long-range bomber and naval assets.",
    "targetLocationId": "diego-garcia",
    "clue": "British Indian Ocean Territory atoll subject to ICJ decolonization rulings.",
    "banglaClue": "ভারত মহাসাগরের কেন্দ্রে অবস্থিত দিয়েগো গার্সিয়া সামরিক ঘাঁটি।"
  }
];
