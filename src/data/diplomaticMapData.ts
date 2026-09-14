export type LocationCategory = 
  | 'chokepoint' 
  | 'flashpoint' 
  | 'port' 
  | 'island_base' 
  | 'river_basin' 
  | 'diplomatic_hq';

export type MapTheater = 
  | 'bay_of_bengal' 
  | 'indo_pacific' 
  | 'middle_east' 
  | 'europe_eurasia' 
  | 'americas' 
  | 'global';

export interface StrategicLocation {
  id: string;
  name: string;
  category: LocationCategory;
  categoryLabel: string;
  theater: MapTheater;
  theaterLabel: string;
  lat: number;
  lng: number;
  // Normalized percentage coordinates for SVG World Map (0-100% X and Y)
  xPct: number;
  yPct: number;
  threatLevel: 'Critical Alert' | 'High Geopolitical Friction' | 'Strategic Anchor' | 'Diplomatic Center';
  significance: string;
  historicalContext: string;
  keyTreaties: string[];
  bangladeshRelevance: string;
  greatPowerDynamics: {
    us?: string;
    china?: string;
    india?: string;
    regional?: string;
    global?: string;
  };
  relatedDossierSlugs?: string[];
}

export interface MaritimeCorridor {
  id: string;
  name: string;
  description: string;
  pathD: string; // SVG path data
  color: string;
  flowSpeedSeconds: number;
}

export const STRATEGIC_LOCATIONS_DATA: StrategicLocation[] = [
  // 1. BAY OF BENGAL & SOUTH ASIA
  {
    id: 'matarbari-port',
    name: 'Matarbari Deep-Sea Port',
    category: 'port',
    categoryLabel: 'Deep-Sea Maritime Hub',
    theater: 'bay_of_bengal',
    theaterLabel: 'Bay of Bengal & South Asia',
    lat: 21.70,
    lng: 91.88,
    xPct: 75.5,
    yPct: 44.8,
    threatLevel: 'Strategic Anchor',
    significance: 'Bangladesh\'s flagship 18.5-meter deep-sea port designed to berth post-Panamax vessels, developed with Japanese JICA financing under the BIG-B initiative.',
    historicalContext: 'Historically, Bangladesh lacked deep-water facilities, relying on feeder vessels through Singapore and Colombo. Matarbari transforms regional transshipment architecture.',
    keyTreaties: ['Bangladesh-Japan Strategic Partnership 2023', 'Bay of Bengal Industrial Growth Belt (BIG-B)'],
    bangladeshRelevance: 'Directly secures sovereign energy import terminals, reduces freight costs by 30%, and anchors Bangladesh as the central maritime gateway for landlocked NE India, Nepal, and Bhutan.',
    greatPowerDynamics: {
      us: 'Endorses under Indo-Pacific economic corridor frameworks.',
      china: 'Monitors as a counter-weight to Kyaukpyu port in Myanmar.',
      india: 'Anticipates transit cargo access for its landlocked Northeast states.',
      regional: 'Japan provides long-term concessionary ODA financing.'
    },
    relatedDossierSlugs: ['matarbari-deep-sea-port', 'bay-of-bengal-security']
  },
  {
    id: 'siliguri-corridor',
    name: "Siliguri Corridor ('Chicken's Neck')",
    category: 'flashpoint',
    categoryLabel: 'Strategic Terrestrial Corridor',
    theater: 'bay_of_bengal',
    theaterLabel: 'Bay of Bengal & South Asia',
    lat: 26.72,
    lng: 88.43,
    xPct: 74.6,
    yPct: 39.8,
    threatLevel: 'Critical Alert',
    significance: 'A 22-kilometer wide bottleneck connecting India\'s mainland to its eight northeastern states, wedged tightly between Bangladesh, Nepal, and Bhutan.',
    historicalContext: 'Created during the 1947 partition of Bengal. In the 1962 Sino-Indian War and 2017 Doklam standoff, its proximity to Chinese military deployments highlighted extreme vulnerability.',
    keyTreaties: ['Indo-Bhutan Treaty of Friendship 2007', 'India-Bangladesh Transit Protocol 2015'],
    bangladeshRelevance: 'Grants Bangladesh profound geopolitical leverage as India\'s primary geographic alternative for multimodal transit to the Northeast (Seven Sisters).',
    greatPowerDynamics: {
      china: 'Maintains PLA garrisons near the Chumbi Valley overlooking the corridor.',
      india: 'Deploys 33 Corps and missile defense to secure the lifeline.',
      us: 'Views the corridor as a critical vulnerable node in South Asian balance of power.'
    },
    relatedDossierSlugs: ['siliguri-corridor-geopolitics']
  },
  {
    id: 'teesta-basin',
    name: 'Teesta River Basin',
    category: 'river_basin',
    categoryLabel: 'Transboundary River System',
    theater: 'bay_of_bengal',
    theaterLabel: 'Bay of Bengal & South Asia',
    lat: 25.80,
    lng: 89.20,
    xPct: 74.8,
    yPct: 40.7,
    threatLevel: 'High Geopolitical Friction',
    significance: 'Vital 414-km transboundary river flowing from Sikkim through West Bengal into Bangladesh, sustaining 21 million agricultural livelihoods in Rangpur division.',
    historicalContext: 'Bilateral water-sharing negotiations stalled since 2011 due to West Bengal domestic politics. In 2020-2024, China proposed a $1B comprehensive dredging and reservoir development project.',
    keyTreaties: ['1983 Ad-hoc Water Sharing Accord', 'UN Watercourses Convention 1997 principles'],
    bangladeshRelevance: 'Core test of hydrological sovereignty, food security, and balanced diplomacy between New Delhi and Beijing.',
    greatPowerDynamics: {
      china: 'Offers comprehensive engineering and reservoir financing.',
      india: 'Urges bilateral management to prevent Chinese engineering presence near Siliguri.'
    },
    relatedDossierSlugs: ['teesta-hydro-diplomacy']
  },
  {
    id: 'st-martins-island',
    name: "St. Martin's Island & Swatch of No Ground",
    category: 'island_base',
    categoryLabel: 'Sovereign Island Outpost',
    theater: 'bay_of_bengal',
    theaterLabel: 'Bay of Bengal & South Asia',
    lat: 20.62,
    lng: 92.32,
    xPct: 75.7,
    yPct: 45.9,
    threatLevel: 'High Geopolitical Friction',
    significance: 'Bangladesh\'s southernmost sovereign coral island and adjacent submarine canyon in the Bay of Bengal, proximate to Myanmar\'s Rakhine naval theater.',
    historicalContext: 'Sovereignty confirmed in 1974 Land Boundary Agreement and 2012 ITLOS delimitation. Subject to recurring regional rumors regarding external naval radar interest.',
    keyTreaties: ['1974 Indira-Mujib Land Boundary Agreement', 'ITLOS Maritime Boundary Delimitation 2012'],
    bangladeshRelevance: 'Acts as the baseline anchor for Bangladesh\'s 200-nautical-mile Exclusive Economic Zone and offshore hydrocarbon exploration blocks.',
    greatPowerDynamics: {
      us: 'Categorically denies seeking military bases on the island.',
      china: 'Monitors maritime traffic moving towards Kyaukpyu deep-sea port.',
      regional: 'Myanmar Navy regularly conducts patrols across the Naf River border.'
    },
    relatedDossierSlugs: ['bay-of-bengal-security']
  },
  {
    id: 'bimstec-hq',
    name: 'BIMSTEC Secretariat Headquarters',
    category: 'diplomatic_hq',
    categoryLabel: 'Multilateral Diplomatic HQ',
    theater: 'bay_of_bengal',
    theaterLabel: 'Bay of Bengal & South Asia',
    lat: 23.73,
    lng: 90.41,
    xPct: 75.1,
    yPct: 42.8,
    threatLevel: 'Diplomatic Center',
    significance: 'Permanent headquarters of the 7-nation Bay of Bengal regional integration body located in Gulshan, Dhaka, established in 2014.',
    historicalContext: 'Formed in 1997 through the Bangkok Declaration to link South Asia with Southeast Asia, revitalized as SAARC integration stalled.',
    keyTreaties: ['BIMSTEC Charter 2022', 'BIMSTEC Master Plan for Transport Connectivity 2022'],
    bangladeshRelevance: 'Anchors Dhaka as the diplomatic capital of the Bay of Bengal littoral, driving regional trade and energy grid interconnections.',
    greatPowerDynamics: {
      india: 'Champions BIMSTEC as the primary regional forum bypassing Pakistan.',
      regional: 'Bridges ASEAN nations (Thailand, Myanmar) with South Asia.'
    },
    relatedDossierSlugs: ['bimstec-institutional-evolution']
  },

  // 2. INDO-PACIFIC & MARITIME CHOKEPOINTS
  {
    id: 'strait-of-malacca',
    name: 'Strait of Malacca',
    category: 'chokepoint',
    categoryLabel: 'Global Maritime Chokepoint',
    theater: 'indo_pacific',
    theaterLabel: 'Indo-Pacific & East Asia',
    lat: 2.50,
    lng: 101.50,
    xPct: 78.4,
    yPct: 59.8,
    threatLevel: 'Critical Alert',
    significance: 'World\'s most congested trade corridor, transiting ~100,000 vessels annually and over 25% of all global seaborne commerce.',
    historicalContext: 'Centuries-old trade route controlling the spice and modern hydrocarbon corridors between the Indian Ocean and East Asia ("Malacca Dilemma").',
    keyTreaties: ['UNCLOS 1982 Straits Used for International Navigation', 'Malacca Straits Patrols (MSP) Framework'],
    bangladeshRelevance: 'Primary maritime export route for Bangladesh\'s garment and manufactured exports bound for East Asian and North American Pacific ports.',
    greatPowerDynamics: {
      us: 'Conducts routine freedom of navigation operations from Singapore facilities.',
      china: 'Faces intense energy vulnerability (80% of oil imports transit this strait).',
      india: 'Dominates western approaches via the Andaman and Nicobar Command.'
    },
    relatedDossierSlugs: ['malacca-dilemma-analysis']
  },
  {
    id: 'taiwan-strait',
    name: 'Taiwan Strait',
    category: 'flashpoint',
    categoryLabel: 'High-Tech & Security Flashpoint',
    theater: 'indo_pacific',
    theaterLabel: 'Indo-Pacific & East Asia',
    lat: 24.50,
    lng: 119.50,
    xPct: 83.2,
    yPct: 42.0,
    threatLevel: 'Critical Alert',
    significance: '180-km wide maritime corridor separating Taiwan from mainland China, carrying 50% of the world\'s container ships and dominating 90% of advanced semiconductor manufacturing (TSMC).',
    historicalContext: 'Epicenter of three historic crises (1954, 1958, 1995) and escalating Fourth Crisis cross-strait military exercises post-2022.',
    keyTreaties: ['Three US-China Joint Communiqués', 'Taiwan Relations Act 1979', 'UNCLOS 1982'],
    bangladeshRelevance: 'A Taiwan Strait conflict would devastate global shipping, increase fuel import costs by 150%, and crash garment trade routes.',
    greatPowerDynamics: {
      us: 'Maintains strategic ambiguity and conducts regular FONOP naval transits.',
      china: 'Claims sovereignty and enforces anti-access/area-denial (A2/AD) capabilities.'
    },
    relatedDossierSlugs: ['taiwan-cross-strait-dynamics']
  },
  {
    id: 'south-china-sea',
    name: 'South China Sea (Spratly & Paracel Islands)',
    category: 'flashpoint',
    categoryLabel: 'Contested Maritime Theater',
    theater: 'indo_pacific',
    theaterLabel: 'Indo-Pacific & East Asia',
    lat: 12.00,
    lng: 114.00,
    xPct: 81.8,
    yPct: 52.3,
    threatLevel: 'Critical Alert',
    significance: 'Resource-rich semi-enclosed sea transiting $3.4 trillion in annual ship-borne trade, subject to overlapping claims by China, Vietnam, Philippines, Malaysia, and Brunei.',
    historicalContext: 'China constructed heavily fortified artificial island airfields (Mischief, Fiery Cross, Subi Reefs) asserting the Nine-Dash Line, rejected by the 2016 PCA award.',
    keyTreaties: ['PCA South China Sea Arbitration Ruling 2016', 'ASEAN-China Declaration on the Conduct of Parties (DOC) 2002'],
    bangladeshRelevance: 'Bangladesh upholds UNCLOS freedom of navigation as a vital legal precedent for the international rule of law in semi-enclosed seas.',
    greatPowerDynamics: {
      us: 'Executes regular Carrier Strike Group FONOP patrols.',
      china: 'Maintains Coast Guard and maritime militia dominance across Scarborough Shoal and Second Thomas Shoal.'
    },
    relatedDossierSlugs: ['south-china-sea-unclos']
  },
  {
    id: 'andaman-nicobar',
    name: 'Andaman & Nicobar Tri-Service Command',
    category: 'island_base',
    categoryLabel: 'Strategic Island Command',
    theater: 'bay_of_bengal',
    theaterLabel: 'Bay of Bengal & South Asia',
    lat: 11.66,
    lng: 92.74,
    xPct: 75.8,
    yPct: 52.6,
    threatLevel: 'Strategic Anchor',
    significance: 'Archipelago of 572 islands overlooking the Six Degree Channel and the western entrance to the Strait of Malacca, hosting India\'s only unified Tri-Service Command.',
    historicalContext: 'Transformed from a colonial outpost into India\'s primary forward power projection hub into Southeast Asia under Act East policy.',
    keyTreaties: ['UNCLOS 1982', 'India-Indonesia Maritime Boundary Agreement 1974'],
    bangladeshRelevance: 'Directly bounds Bangladesh\'s southern maritime approaches, influencing Bay of Bengal maritime domain awareness and undersea surveillance.',
    greatPowerDynamics: {
      india: 'Expanding runways, radar networks, and P-8I anti-submarine warfare patrols.',
      us: 'Coordinates intelligence sharing via COMCASA and LEMOA agreements.'
    },
    relatedDossierSlugs: ['bay-of-bengal-security']
  },
  {
    id: 'kyaukpyu-port',
    name: 'Kyaukpyu Deep-Sea Port & CMEC',
    category: 'port',
    categoryLabel: 'Geoeconomic Energy Terminal',
    theater: 'bay_of_bengal',
    theaterLabel: 'Bay of Bengal & South Asia',
    lat: 19.42,
    lng: 93.55,
    xPct: 76.0,
    yPct: 47.1,
    threatLevel: 'High Geopolitical Friction',
    significance: 'Chinese-backed deep-water port in Rakhine State, Myanmar, serving as the terminal for oil and gas pipelines leading directly to Kunming, Yunnan (CMEC).',
    historicalContext: 'Developed under China\'s Belt and Road to bypass the Strait of Malacca by providing direct land access to the Bay of Bengal.',
    keyTreaties: ['China-Myanmar Economic Corridor (CMEC) Agreement 2018'],
    bangladeshRelevance: 'Proximate to Bangladesh\'s southeastern maritime border; instability in Rakhine State affects Rohingya repatriation and regional coastal security.',
    greatPowerDynamics: {
      china: 'Constructs port and special economic zone despite civil war in Myanmar.',
      india: 'Operates competing Sittwe Port under the Kaladan Multi-Modal Transit project.'
    },
    relatedDossierSlugs: ['rohingya-crisis-security']
  },

  // 3. MIDDLE EAST & HORN OF AFRICA
  {
    id: 'strait-of-hormuz',
    name: 'Strait of Hormuz',
    category: 'chokepoint',
    categoryLabel: 'Global Energy Chokepoint',
    theater: 'middle_east',
    theaterLabel: 'Middle East & Horn of Africa',
    lat: 26.56,
    lng: 56.25,
    xPct: 66.2,
    yPct: 40.0,
    threatLevel: 'Critical Alert',
    significance: 'Narrow waterway between Iran and Oman transiting ~21 million barrels of petroleum per day (~21% of global petroleum consumption and 1/3 of total LNG exports).',
    historicalContext: 'Site of the Tanker War (1984-1988) and recurring maritime seizures during US-Iran nuclear escalations.',
    keyTreaties: ['UNCLOS 1982 Transit Passage Regime', 'Oman-Iran Maritime Boundary 1974'],
    bangladeshRelevance: 'Critical lifeline for Bangladesh\'s national energy security: supplies over 70% of crude oil and long-term LNG cargoes (QatarEnergy/Oman).',
    greatPowerDynamics: {
      us: 'Naval Fifth Fleet headquarters in Bahrain enforces maritime escort operations.',
      china: 'Heavily reliant on Persian Gulf crude for domestic industrial economy.'
    },
    relatedDossierSlugs: ['hormuz-energy-corridors']
  },
  {
    id: 'bab-el-mandeb',
    name: 'Bab-el-Mandeb & Red Sea Corridor',
    category: 'chokepoint',
    categoryLabel: 'Maritime Chokepoint & Crisis Zone',
    theater: 'middle_east',
    theaterLabel: 'Middle East & Horn of Africa',
    lat: 12.58,
    lng: 43.33,
    xPct: 62.8,
    yPct: 51.8,
    threatLevel: 'Critical Alert',
    significance: 'Strait connecting the Red Sea to the Gulf of Aden, handling 12% of global trade and 30% of global container traffic headed to the Suez Canal.',
    historicalContext: 'Flanked by Yemen and Djibouti; in 2023-2024, Houthi anti-ship ballistic missile and drone attacks forced global container lines to reroute around Africa\'s Cape of Good Hope.',
    keyTreaties: ['UNCLOS 1982', 'Operation Prosperity Guardian Coalition Framework 2023'],
    bangladeshRelevance: 'Rerouting around Africa increased freight container rates from Chittagong to Europe by over 200%, delaying garment delivery schedules.',
    greatPowerDynamics: {
      us: 'Leads multinational maritime interception taskforces.',
      regional: 'Djibouti hosts military installations for the US, China, France, Japan, and Italy.'
    },
    relatedDossierSlugs: ['red-sea-disruptions-trade']
  },
  {
    id: 'suez-canal',
    name: 'Suez Canal',
    category: 'chokepoint',
    categoryLabel: 'Artificial Maritime Canal',
    theater: 'middle_east',
    theaterLabel: 'Middle East & Horn of Africa',
    lat: 30.58,
    lng: 32.26,
    xPct: 59.9,
    yPct: 36.8,
    threatLevel: 'Critical Alert',
    significance: '193-km artificial waterway through Egypt connecting the Mediterranean Sea to the Red Sea, eliminating the 7,000-km circumnavigation of Africa.',
    historicalContext: 'Opened in 1869; nationalized in 1956 prompting the Suez Crisis. Blocked in 2021 by the Ever Given container ship, freezing $9.6 billion in daily trade.',
    keyTreaties: ['Constantinople Convention 1888 (Free Navigation Regime)'],
    bangladeshRelevance: 'Primary maritime artery for Bangladesh\'s $30+ billion annual Ready-Made Garment (RMG) exports to the European Union.',
    greatPowerDynamics: {
      regional: 'Egypt relies on canal transit dues ($9B+ annually) for foreign exchange reserves.'
    },
    relatedDossierSlugs: ['suez-european-export-lanes']
  },
  {
    id: 'djibouti-hub',
    name: 'Djibouti Multilateral Military Hub',
    category: 'island_base',
    categoryLabel: 'Multinational Logistics Base',
    theater: 'middle_east',
    theaterLabel: 'Middle East & Horn of Africa',
    lat: 11.82,
    lng: 42.59,
    xPct: 62.6,
    yPct: 52.4,
    threatLevel: 'Strategic Anchor',
    significance: 'Strategic city-state at the Bab-el-Mandeb hosting military bases of competing global powers including the US (Camp Lemonnier), China (first overseas PLA support base), France, and Japan.',
    historicalContext: 'Former French Somaliland; transformed its geographic location into a geopolitical leasing economy and anti-piracy hub.',
    keyTreaties: ['Bilateral Defense Leasing Accords with US, China, France'],
    bangladeshRelevance: 'Serves as an operational refueling port for Bangladesh Navy UNIFIL peacekeeping frigates deployed to the Mediterranean and Lebanon.',
    greatPowerDynamics: {
      us: 'Maintains 4,000 personnel for counter-terror operations in the Horn of Africa.',
      china: 'Supports PLAN counter-piracy flotillas and Indian Ocean naval presence.'
    },
    relatedDossierSlugs: ['horn-of-africa-geopolitics']
  },

  // 4. EUROPE & EURASIA
  {
    id: 'suwalki-gap',
    name: 'Suwalki Gap',
    category: 'flashpoint',
    categoryLabel: 'NATO-Russia Border Bottleneck',
    theater: 'europe_eurasia',
    theaterLabel: 'Europe & Eurasia',
    lat: 54.10,
    lng: 23.35,
    xPct: 57.6,
    yPct: 18.0,
    threatLevel: 'Critical Alert',
    significance: 'A 65-km land corridor along the Polish-Lithuanian border, pinched between the heavily militarized Russian exclave of Kaliningrad and Belarus.',
    historicalContext: 'Identified by military strategists as NATO\'s most exposed frontier; a Russian offensive could cut off Estonia, Latvia, and Lithuania from continental Europe.',
    keyTreaties: ['North Atlantic Treaty (Article 5 Collective Defense) 1949'],
    bangladeshRelevance: 'Key analytical model in IR Fellowship curriculum for studying deterrent credibility, conventional tripwire defense, and asymmetric geographical vulnerability.',
    greatPowerDynamics: {
      us: 'Maintains enhanced Forward Presence (eFP) multinational battlegroups.',
      regional: 'Russia deploys Iskander nuclear-capable missiles in Kaliningrad.'
    },
    relatedDossierSlugs: ['nato-eastern-flank-deterrence']
  },
  {
    id: 'bosphorus-strait',
    name: 'Turkish Straits (Bosphorus & Dardanelles)',
    category: 'chokepoint',
    categoryLabel: 'Black Sea Maritime Gateway',
    theater: 'europe_eurasia',
    theaterLabel: 'Europe & Eurasia',
    lat: 41.11,
    lng: 29.07,
    xPct: 59.1,
    yPct: 28.5,
    threatLevel: 'High Geopolitical Friction',
    significance: 'Narrow straits in Istanbul connecting the Black Sea to the Sea of Marmara and Mediterranean, governing all naval and grain transit from Russia, Ukraine, and Romania.',
    historicalContext: 'Governed by the 1936 Montreux Convention, granting Turkey the power to close the straits to belligerent warships during wartime (invoked during Russia-Ukraine war in 2022).',
    keyTreaties: ['Montreux Convention Regarding the Regime of the Straits 1936', 'UN Black Sea Grain Initiative 2022'],
    bangladeshRelevance: 'Guarantees wheat and fertilizer import corridors from Ukraine and Russia directly to Chittagong port, securing domestic food security.',
    greatPowerDynamics: {
      regional: 'Turkey leverages sovereign control to mediate grain and humanitarian negotiations.'
    },
    relatedDossierSlugs: ['black-sea-grain-security']
  },
  {
    id: 'icj-hague',
    name: 'International Court of Justice (The Hague)',
    category: 'diplomatic_hq',
    categoryLabel: 'Global Judicial Institution',
    theater: 'europe_eurasia',
    theaterLabel: 'Europe & Eurasia',
    lat: 52.08,
    lng: 4.29,
    xPct: 52.5,
    yPct: 19.6,
    threatLevel: 'Diplomatic Center',
    significance: 'The principal judicial organ of the United Nations situated in the Peace Palace, The Hague, adjudicating disputes between sovereign states.',
    historicalContext: 'Established in 1945 by the UN Charter, succeeding the Permanent Court of International Justice.',
    keyTreaties: ['Statute of the International Court of Justice 1945', 'Genocide Convention 1948'],
    bangladeshRelevance: 'Key forum for the Gambia v. Myanmar genocide case regarding the Rohingya crisis, where Bangladesh provides vital evidentiary data and legal advocacy.',
    greatPowerDynamics: {
      global: 'Interprets jus cogens norms and universal international law.'
    },
    relatedDossierSlugs: ['rohingya-icj-genocide-case']
  },

  // 5. AMERICAS & GLOBAL
  {
    id: 'panama-canal',
    name: 'Panama Canal',
    category: 'chokepoint',
    categoryLabel: 'Trans-Oceanic Canal',
    theater: 'americas',
    theaterLabel: 'Americas & Global',
    lat: 9.08,
    lng: -79.68,
    xPct: 24.6,
    yPct: 54.6,
    threatLevel: 'Strategic Anchor',
    significance: '82-km canal connecting the Atlantic and Pacific Oceans across the Isthmus of Panama, handling 6% of global seaborne commerce.',
    historicalContext: 'Constructed by the US (opened 1914); expanded with Neopanamax locks in 2016. Droughts in Lake Gatun periodically restrict daily vessel transits.',
    keyTreaties: ['Torrijos-Carter Treaties 1977 (Handover to Panama in 1999)'],
    bangladeshRelevance: 'Key transit corridor for US agricultural exports, LNG supplies, and grain shipments moving to Asian markets.',
    greatPowerDynamics: {
      us: 'Treaty guarantee of permanent canal neutrality.',
      china: 'Operates container terminals at Balboa and Cristobal ports.'
    },
    relatedDossierSlugs: ['global-supply-chain-resilience']
  },
  {
    id: 'un-hq-newyork',
    name: 'United Nations Headquarters (New York)',
    category: 'diplomatic_hq',
    categoryLabel: 'Global Diplomatic Headquarters',
    theater: 'americas',
    theaterLabel: 'Americas & Global',
    lat: 40.75,
    lng: -73.96,
    xPct: 26.3,
    yPct: 28.7,
    threatLevel: 'Diplomatic Center',
    significance: 'The epicentre of global multilateral diplomacy, international treaty ratification, and peacekeeping mandates, hosting the General Assembly and Security Council.',
    historicalContext: 'Established in 1945 post-WWII; Bangladesh became the 136th member state on September 17, 1974, with Bangabandhu Sheikh Mujibur Rahman delivering the first Bangla address to the UNGA.',
    keyTreaties: ['Charter of the United Nations 1945', 'Universal Declaration of Human Rights 1948'],
    bangladeshRelevance: 'Primary platform where Bangladesh serves as the world\'s top Uniformed Peacekeeping Contributor (UN TCC) and champions climate finance for vulnerable LDCs.',
    greatPowerDynamics: {
      global: 'UNSC P5 veto politics (US, China, Russia, UK, France).'
    },
    relatedDossierSlugs: ['bangladesh-un-peacekeeping']
  }
];

// Master Maritime Corridors / Sea Lines of Communication (SLOC)
export const MARITIME_CORRIDORS: MaritimeCorridor[] = [
  {
    id: 'persian-gulf-malacca-asia',
    name: 'Energy Highway (Hormuz → Malacca → East Asia)',
    description: 'The world\'s most critical crude oil and LNG maritime lifeline transporting Middle Eastern energy to South and East Asia.',
    pathD: 'M 662 400 Q 710 480 755 448 T 784 598 Q 800 550 832 420',
    color: '#0d9488',
    flowSpeedSeconds: 12
  },
  {
    id: 'bay-of-bengal-sloc',
    name: 'Bay of Bengal Trade & Feeder Corridor',
    description: 'Regional feeder artery connecting Chittagong, Matarbari, and Mongla to Singapore, Colombo, and Port Klang.',
    pathD: 'M 755 448 Q 758 520 784 598',
    color: '#14b8a6',
    flowSpeedSeconds: 8
  },
  {
    id: 'suez-asia-europe',
    name: 'Asia-Europe Trade Corridor (Suez → Malacca)',
    description: 'Primary global manufactured goods conduit connecting Europe with Asian production hubs.',
    pathD: 'M 525 196 Q 560 280 599 368 Q 628 518 784 598',
    color: '#3b82f6',
    flowSpeedSeconds: 15
  }
];
