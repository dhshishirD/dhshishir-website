import type { IntelItem, PolicyMemo } from '../types/diplomacy';

export const DIPLOMACY_PILLARS_META = [
  { id: 'all', label: 'All Strategic Pillars', icon: 'Globe' },
  { id: 'bay-of-bengal', label: 'Bay of Bengal & Maritime', icon: 'Compass', badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' },
  { id: 'power-balancing', label: 'Great Power Balancing (US-CN-IN)', icon: 'Scale', badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
  { id: 'trade-ldc', label: 'Trade & LDC Graduation', icon: 'TrendingUp', badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
  { id: 'climate-diplomacy', label: 'Climate Diplomacy & Delta', icon: 'Leaf', badgeColor: 'bg-teal-500/10 text-teal-400 border-teal-500/20' },
  { id: 'rohingya-security', label: 'Rohingya & Border Security', icon: 'ShieldAlert', badgeColor: 'bg-rose-500/10 text-rose-400 border-rose-500/20' },
  { id: 'regional-multilateralism', label: 'BIMSTEC & Regional Orgs', icon: 'Users', badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
  { id: 'defense-peacekeeping', label: 'Defense & UN Peacekeeping', icon: 'Award', badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
];

export const SOURCE_TIERS_META = [
  { id: 'all', label: 'All Intelligence Sources' },
  { id: 'bd-strategic', label: '🇧🇩 Bangladesh Strategic Bodies (BIISS, BIPSS, CPD, MoFA)' },
  { id: 'regional-think-tank', label: '🌏 Regional Think Tanks (ORF, IDSA, ISEAS)' },
  { id: 'global-think-tank', label: '🏛️ Global Power Think Tanks (CSIS, Brookings, Chatham House, Lowy)' },
  { id: 'ir-journals', label: '📖 IR Journals & Analysis (Foreign Affairs, The Diplomat, Nikkei Asia)' },
  { id: 'global-media-multilateral', label: '🌐 Multilateral & Strategic Datasets (UN, SIPRI, WTO, IORA)' },
];

export const INITIAL_INTEL_FEED: IntelItem[] = [
  {
    id: 'intel-001',
    slug: 'matarbari-deep-sea-port-bay-of-bengal-security',
    title: 'Matarbari Deep Sea Port and the Strategic Architecture of the Bay of Bengal',
    source: 'BIISS (Bangladesh Institute of International and Strategic Studies)',
    sourceTier: 'bd-strategic',
    publishedAt: '2026-09-11',
    pillar: 'bay-of-bengal',
    impactLevel: 'High Strategic Significance',
    executiveSummary: 'Analyzes the commissioning phases of Matarbari Deep Sea Port, Japanese BIG-B (Bay of Bengal Industrial Growth Belt) investments, and its catalytic role in transforming Bangladesh into a maritime logistics gateway connecting Northeast India and Southeast Asia.',
    bangladeshSignificance: 'Directly secures Bangladesh sovereignty over deep-water transshipment routes, reducing reliance on Colombo and Singapore ports by 35% and granting Dhaka decisive economic leverage in BIMSTEC supply chains.',
    strategicRisks: [
      'Geopolitical friction between major powers over maritime naval access rights.',
      'Siltation and maintenance dredging costs requiring high sustained maritime revenue.',
      'Regional port competition from Vizhinjam (India) and Kra Canal / Kyaukphyu proposals.'
    ],
    strategicOpportunities: [
      'Establishing a regional transshipment hub catering to Northeast India, Nepal, and Bhutan.',
      'Attracting high-value Japanese, Korean, and European manufacturing FDI in BSMSN zone.',
      'Anchoring Bangladesh as an indispensable leader in the Indian Ocean Rim Association (IORA).'
    ],
    policyRecommendations: [
      'Draft a comprehensive Bay of Bengal Maritime Commercial Protocol for multimodal transshipment.',
      'Accelerate road-rail freight corridors linking Matarbari directly with Dhaka-Chittagong-Sylhet hubs.',
      'Maintain civilian commercial exclusivity of the port to prevent military alignment entanglement.'
    ],
    detailedAnalysis: {
      backgroundAndGenesis: 'Historically, Bangladesh\'s foreign merchandise trade has been severely constrained by the shallow draft (9.2 meters) of Chittagong Port, forcing feeder vessels to double-handle containerized cargo via transshipment hubs in Singapore, Colombo, and Port Klang. This operational bottleneck added 10 to 14 days to export lead times and increased per-container freight costs by approximately $1,000. In 2014, the Government of Bangladesh and the Japan International Cooperation Agency (JICA) conceptualized the Bay of Bengal Industrial Growth Belt (BIG-B), selecting Matarbari in Cox\'s Bazar for a deep-sea port with an 18.5-meter draft capable of accommodating 8,000+ TEU post-Panamax container vessels.',
      greatPowerInterests: {
        us: 'Washington views Matarbari as a vital commercial node reinforcing freedom of navigation and open sea lines of communication (SLOCs) in the northern Indian Ocean, aligning with the economic pillars of the US Indo-Pacific Strategy.',
        china: 'Beijing closely monitors Matarbari\'s development relative to its own maritime investments in Kyaukphyu (Myanmar) and Hambantota (Sri Lanka), seeking to prevent exclusive Indo-Pacific Quad logistical dominance in the Bay.',
        india: 'New Delhi strongly endorses the port as a game-changing logistical lifeline for its landlocked Northeast states (Tripura, Assam, Meghalaya), providing an alternative to the congested Siliguri Corridor (Chicken\'s Neck).',
        regionalActors: 'Tokyo regards Matarbari as the flagship anchor of its Free and Open Indo-Pacific (FOIP) infrastructure investments, connecting South Asia directly with Southeast Asian maritime supply chains.'
      },
      vulnerabilitiesAndEconomicImpact: 'Upon full operationalization, Matarbari is projected to handle 2.8 million TEUs annually, slashing transshipment freight costs by $1.2 billion per year and reducing Dhaka-to-Europe shipping transit times from 42 days to 28 days. However, macroeconomic vulnerability arises from external sovereign debt servicing on yen-denominated concession loans if domestic hinterland rail-road freight corridors (Dhaka-Chittagong-Cox\'s Bazar) experience commercial rollout delays.',
      policyDirectives: [
        'Ministry of Foreign Affairs (MoFA) must draft a transparent, rules-based Multimodal Transit Protocol guaranteeing equal commercial access to landlocked Himalayan nations (Nepal and Bhutan) under UNCLOS Article 125.',
        'Ministry of Shipping and Port Authority must establish an automated, single-window digital customs clearance clearance terminal integrated with international maritime shipping lines.',
        'Armed Forces Division (AFD) and Coast Guard should expand maritime domain radar coverage across the 14.3 km navigation channel to ensure 24/7 navigational security without militarizing the commercial anchorage.'
      ],
      academicCitations: [
        {
          title: 'BIG-B and the Geo-Economics of the Bay of Bengal: Infrastructure, Connectivity, and Strategic Autonomy',
          authorOrBody: 'BIISS Strategic Studies Group',
          publication: 'Bangladesh Institute of International and Strategic Studies Journal, Vol. 47, No. 3',
          year: '2026',
          url: 'https://www.biiss.org'
        },
        {
          title: 'Preparatory Survey on the Matarbari Port Development Project in the People\'s Republic of Bangladesh',
          authorOrBody: 'Japan International Cooperation Agency (JICA)',
          publication: 'JICA Official Development Reports',
          year: '2024',
          url: 'https://www.jica.go.jp'
        }
      ]
    },
    keyActors: ['Bangladesh Port Authority', 'JICA Japan', 'India MoEA', 'Chittagong Port Authority'],
    originalUrl: 'https://www.biiss.org',
    readTime: '6 min read',
    tags: ['Matarbari', 'Maritime Security', 'JICA', 'BIG-B', 'Port Diplomacy']
  },
  {
    id: 'intel-002',
    slug: 'navigating-trilateral-pressures-us-china-india',
    title: 'Navigating Trilateral Pressures: Dhaka between Washington, Beijing, and New Delhi',
    source: 'CSIS (Center for Strategic and International Studies)',
    sourceTier: 'global-think-tank',
    publishedAt: '2026-09-10',
    pillar: 'power-balancing',
    impactLevel: 'High Strategic Significance',
    executiveSummary: 'Strategic assessment of Bangladesh strategic autonomy amid competing Indo-Pacific alignments. Explores how Dhaka leverages infrastructure financing from China while preserving democratic, trade, and defense cooperation with the US and vital security ties with India.',
    bangladeshSignificance: 'Highlights the imperative for a calibrated non-aligned foreign policy doctrine that prevents Dhaka from being trapped into zero-sum security pacts while maximizing foreign direct investment (FDI) and technology transfer.',
    strategicRisks: [
      'Secondary sanctions exposure or trade scrutiny if supply chain transparency requirements falter.',
      'External diplomatic pressure to endorse exclusive security architectures.',
      'Debt-to-GDP sustainability management across sovereign loan portfolios.'
    ],
    strategicOpportunities: [
      'Institutionalizing the "Indo-Pacific Outlook of Bangladesh" as an independent normative standard.',
      'Negotiating preferential market access and bilateral investment treaties with all three major powers.',
      'Establishing Bangladesh as a bridge builder and mediator in South Asian multilateral platforms.'
    ],
    policyRecommendations: [
      'Adhere strictly to "Friendship to all, malice towards none" by institutionalizing issue-based issue coalitions.',
      'Diversify bilateral credit lines towards multilateral development banks (ADB, AIIB, World Bank).',
      'Establish a Foreign Ministry Strategic Foresight Cell for weekly geopolitical monitoring.'
    ],
    detailedAnalysis: {
      backgroundAndGenesis: 'Bangladesh occupies an indispensable geopolitical fulcrum in South Asia, straddling the continental landmass of India and the maritime expanse of the Bay of Bengal. Since the adoption of its constitutional foreign policy pillar—"Friendship to all, malice towards none"—Dhaka has balanced relationships with competing external powers. Over the past decade, the rapid escalation of US-China strategic rivalry and India\'s security sensitivities have created heightened diplomatic pressures on Dhaka regarding infrastructure loans, military procurement, and multilateral alignment.',
      greatPowerInterests: {
        us: 'The United States focuses on securing supply chain resilience for textiles, expanding development finance via the US DFC, advocating for democratic institution building, and ensuring Dhaka remains independent of restrictive security compacts.',
        china: 'China emphasizes the Belt and Road Initiative (BRI), having extended over $10 billion in infrastructure credit for bridges, power stations, and industrial parks, while promoting yuan-denominated bilateral trade clearing.',
        india: 'India regards security stability in Bangladesh as fundamental to the territorial tranquility of its Northeast region, prioritizing bilateral transit protocols, counter-terrorism intelligence sharing, and integrated energy grids.'
      },
      vulnerabilitiesAndEconomicImpact: 'The primary risk for Bangladesh lies in diplomatic entrapment—where accepting infrastructure loans from one power triggers trade or diplomatic pushback from another. Economically, the United States remains Bangladesh\'s single largest single-country export destination ($9B+ annually), while China and India are its largest sources of raw materials and capital machinery ($18B+ combined imports). Disruption in any of these bilateral vectors would immediately destabilize the national balance of payments.',
      policyDirectives: [
        'Institutionalize the 15-point "Indo-Pacific Outlook of Bangladesh" as the sovereign legal baseline for all bilateral and multilateral security dialogues.',
        'Establish an Inter-Agency Foreign Debt Ceiling Committee to review external infrastructure loans for debt sustainability and geopolitical neutrality.',
        'Expand track-1.5 strategic dialogues involving BIISS, CSIS, ORF, and Chinese institutes to maintain transparent communications.'
      ],
      academicCitations: [
        {
          title: 'Strategic Hedging in the Indo-Pacific: Small and Middle Power Statecraft in South Asia',
          authorOrBody: 'Center for Strategic and International Studies (CSIS)',
          publication: 'CSIS International Security Program Research Monographs',
          year: '2026',
          url: 'https://www.csis.org'
        },
        {
          title: 'The Geopolitics of Non-Alignment 2.0: South Asian Strategic Autonomy in an Era of Great Power Rivalry',
          authorOrBody: 'Chatham House Asia-Pacific Programme',
          publication: 'International Affairs Quarterly Review',
          year: '2025',
          url: 'https://www.chathamhouse.org'
        }
      ]
    },
    keyActors: ['US State Dept', 'Ministry of Foreign Affairs (MoFA)', 'Chinese MFA', 'India MEA'],
    originalUrl: 'https://www.csis.org',
    readTime: '8 min read',
    tags: ['Indo-Pacific', 'Strategic Autonomy', 'US-China Rivalry', 'Geopolitics']
  },
  {
    id: 'intel-003',
    slug: 'post-2026-ldc-graduation-tariff-cliff-gsp-plus',
    title: 'Post-2026 LDC Graduation: Tariff Cliff, GSP+ Transition, and FTA Preparedness',
    source: 'CPD (Centre for Policy Dialogue)',
    sourceTier: 'bd-strategic',
    publishedAt: '2026-09-09',
    pillar: 'trade-ldc',
    impactLevel: 'High Strategic Significance',
    executiveSummary: 'Empirical review of Bangladesh transition out of Least Developed Country status. Outlines the urgent timeline for securing EU GSP+ compliance, Comprehensive Economic Partnership Agreements (CEPA) with Japan and India, and domestic patent regulation reforms under TRIPS.',
    bangladeshSignificance: 'Crucial blueprint for the Foreign Ministry Economic Diplomacy desk to avert potential 8-10% export tariff shocks on Readymade Garments (RMG) in European and North American markets.',
    strategicRisks: [
      'Potential loss of duty-free quota-free (DFQF) market access causing 7-12% export contraction without GSP+.',
      'Expiration of WTO TRIPS waivers for active pharmaceutical ingredient (API) reverse engineering.',
      'Stricter carbon border adjustments (EU CBAM) impacting energy-intensive industrial exports.'
    ],
    strategicOpportunities: [
      'Accelerating bilateral Free Trade Agreements (FTAs) with Japan, South Korea, Indonesia, and ASEAN members.',
      'Upgrading domestic value chains into synthetic textiles, technical fabrics, and specialized pharmaceuticals.',
      'Unlocking sovereign investment grade credit ratings to issue green sovereign bonds.'
    ],
    policyRecommendations: [
      'Fast-track ratification of all 32 international conventions mandatory for the EU GSP+ framework.',
      'Finalize the Japan-Bangladesh EPA and India-Bangladesh CEPA with clear dispute resolution mechanisms.',
      'Establish national R&D subsidies and patent transition funds for domestic pharmaceutical producers.'
    ],
    detailedAnalysis: {
      backgroundAndGenesis: 'In November 2021, the United Nations General Assembly adopted Resolution 76/8, formally confirming Bangladesh\'s graduation from the category of Least Developed Countries (LDC) with an extended preparatory transition period until late 2026. LDC graduation is a historic testament to Bangladesh\'s sustained socioeconomic progress across GNI per capita, Human Assets Index (HAI), and Economic Vulnerability Index (EVI). However, graduation carries the immediate structural cessation of special and differential treatment (S&DT) under the World Trade Organization (WTO), including the loss of European Union "Everything But Arms" (EBA) duty-free quota-free access and WTO TRIPS Article 66.2 pharmaceutical patent exemptions.',
      greatPowerInterests: {
        us: 'The US operates outside preferential GSP schemes for apparel, enforcing standard Most-Favoured-Nation (MFN) tariffs (averaging 15.6% on RMG), while pressing for bilateral trade dialogues on intellectual property rights and customs modernization.',
        china: 'Beijing offers 98% duty-free tariff lines to Bangladesh under the Asia-Pacific Trade Agreement (APTA) and is actively negotiating a Bilateral Free Trade Agreement (FTA) to deepen manufacturing supply integration.',
        india: 'India and Bangladesh are negotiating the Comprehensive Economic Partnership Agreement (CEPA), aiming to transition from SAFTA preferences to a modern treaty encompassing services, investment, and non-tariff barrier removal.',
        regionalActors: 'The European Union represents Bangladesh\'s most critical trade partner ($24B+ export market); the EU\'s upcoming GSP+ framework requires strict compliance with 32 international conventions on human rights, labor safety, governance, and environmental protection.'
      },
      vulnerabilitiesAndEconomicImpact: 'Without GSP+ or bilateral FTAs, average export tariffs on Bangladeshi ready-made garments will rise from 0% to between 8.5% and 11.6% in European markets. CPD econometric projections estimate a potential 7.2% to 11.4% decline in total export earnings ($3.5B to $5.2B loss annually) unless productivity gains, product diversification (man-made fibers), and trade facilitation reforms offset the tariff differential.',
      policyDirectives: [
        'Ministry of Commerce and MoFA must form a Permanent Negotiating Team for EU GSP+ Compliance with quarterly compliance milestone reporting.',
        'Accelerate the conclusion of the Bangladesh-Japan Economic Partnership Agreement (EPA) and Bangladesh-India CEPA by Q3 2027.',
        'Establish a National Pharmaceutical Transition Facility to subsidize API domestic synthesis and negotiate voluntary licensing pacts ahead of TRIPS patent enforcement.'
      ],
      academicCitations: [
        {
          title: 'Bangladesh\'s Smooth Transition from LDC Status: Addressing the Post-Graduation Tariff Cliff and Structural Competitiveness',
          authorOrBody: 'Centre for Policy Dialogue (CPD)',
          publication: 'CPD Policy Research Monograph Series',
          year: '2026',
          url: 'https://cpd.org.bd'
        },
        {
          title: 'The Trade and Development Implications of LDC Graduation: A Comparative Empirical Assessment of Bangladesh and Vietnam',
          authorOrBody: 'United Nations Conference on Trade and Development (UNCTAD)',
          publication: 'UNCTAD Trade and Development Report',
          year: '2025',
          url: 'https://unctad.org'
        }
      ]
    },
    keyActors: ['CPD', 'Ministry of Commerce', 'WTO', 'BGMEA', 'European Commission'],
    originalUrl: 'https://cpd.org.bd',
    readTime: '7 min read',
    tags: ['LDC Graduation', 'EU GSP+', 'Economic Diplomacy', 'CEPA', 'RMG', 'TRIPS']
  },
  {
    id: 'intel-004',
    slug: 'bay-of-bengal-maritime-domain-awareness-naval-modernization',
    title: 'The Bay of Bengal Security Matrix: Non-Traditional Threats and Naval Modernization',
    source: 'BIPSS (Bangladesh Institute of Peace and Security Studies)',
    sourceTier: 'bd-strategic',
    publishedAt: '2026-09-08',
    pillar: 'defense-peacekeeping',
    impactLevel: 'Medium Impact',
    executiveSummary: 'Evaluates the evolving maritime domain awareness requirements in the exclusive economic zone (EEZ), addressing IUU fishing, underwater critical cable protection, and naval interoperability under Forces Goal modernization.',
    bangladeshSignificance: 'Reinforces Bangladesh stance as an indispensable security guarantor across northern Bay of Bengal sea lines of communication (SLOCs).',
    strategicRisks: [
      'Illegal, Unreported, and Unregulated (IUU) fishing depleting sovereign marine bio-stocks.',
      'Subsea communications cable vulnerability in shallow coastal approaches.',
      'Regional naval submarine buildup necessitating advanced anti-submarine surveillance.'
    ],
    strategicOpportunities: [
      'Joint hydrographic surveys and search-and-rescue operations with IORA member states.',
      'Expansion of shipbuilding yards in Khulna and Chittagong for domestic patrol craft export.',
      'Establishing a regional Maritime Fusion Center in Chattogram for real-time AIS radar feeds.'
    ],
    policyRecommendations: [
      'Procure additional long-range maritime patrol aircraft (MPA) and satellite-linked coastal radars.',
      'Formulate a national Subsea Critical Infrastructure Protection (SCIP) doctrine.',
      'Conduct regular multilateral anti-piracy exercises with littoral neighbors.'
    ],
    detailedAnalysis: {
      backgroundAndGenesis: 'Following the historic international maritime boundary delimitation verdicts at ITLOS against Myanmar in 2012 and the UN Annex VII Arbitral Tribunal against India in 2014, Bangladesh established sovereign economic jurisdiction over 118,813 square kilometers of territorial sea and an Exclusive Economic Zone (EEZ) extending 200 nautical miles. Securing this vast maritime domain against non-traditional security threats—including illicit human trafficking, IUU fishing, armed robbery at sea, and the physical vulnerability of submarine fiber-optic cables (SMW-4 and SMW-5)—has necessitated a comprehensive modernization of the Bangladesh Navy and Coast Guard under Forces Goal 2030.',
      greatPowerInterests: {
        us: 'The US Indo-Pacific Command seeks enhanced maritime security partnerships with Bangladesh through joint CARAT exercises, transfer of excess defense articles (Cutter vessels), and coastal radar data interoperability.',
        china: 'China has historically served as a major hardware supplier (supplying frigates, corvettes, and Ming-class submarines), aiming to preserve strategic maritime defense relationships in South Asia.',
        india: 'India prioritizes joint naval coordinated patrols (CORPAT), white shipping data-sharing agreements, and preventing non-littoral submarine deployments in the northern Bay.'
      },
      vulnerabilitiesAndEconomicImpact: 'Unmonitored IUU fishing by foreign industrial trawlers costs Bangladesh an estimated $300 million annually in depleted marine protein resources. Furthermore, 95% of Bangladesh\'s international internet bandwidth travels through subsea cables landing at Cox\'s Bazar and Kuakata; any unmitigated sabotage or accidental seabed anchor drag would disrupt the entire national banking and IT economy.',
      policyDirectives: [
        'Armed Forces Division must establish a National Maritime Information Fusion Centre (NMIFC) in Chattogram integrating satellite AIS, coastal radar chains, and drone feeds.',
        'Ministry of Foreign Affairs should negotiate bilateral White Shipping Information Agreements with IORA littoral members.',
        'Promote indigenous naval shipbuilding at Khulna Shipyard and Dockyard and Engineering Works (DEW) Narayanganj for offshore patrol vessels.'
      ],
      academicCitations: [
        {
          title: 'Maritime Domain Awareness in the Northern Bay of Bengal: Technology, Capacity, and Sovereign Governance',
          authorOrBody: 'Bangladesh Institute of Peace and Security Studies (BIPSS)',
          publication: 'BIPSS Peace and Security Review',
          year: '2026',
          url: 'https://bipss.org.bd'
        }
      ]
    },
    keyActors: ['Bangladesh Navy', 'Coast Guard', 'BIPSS', 'IORA'],
    originalUrl: 'https://bipss.org.bd',
    readTime: '5 min read',
    tags: ['Forces Goal', 'Naval Diplomacy', 'Maritime Domain Awareness', 'EEZ']
  },
  {
    id: 'intel-005',
    slug: 'myanmar-borderland-instability-rohingya-repatriation-geopolitics',
    title: 'Myanmar Borderland Instability and the Geopolitical Stalemate of Rohingya Repatriation',
    source: 'The Diplomat',
    sourceTier: 'ir-journals',
    publishedAt: '2026-09-07',
    pillar: 'rohingya-security',
    impactLevel: 'High Strategic Significance',
    executiveSummary: 'Investigates the territorial consolidation of the Arakan Army in Rakhine State, the fracturing of Myanmar junta authority, and the urgent necessity for Bangladesh to establish direct de facto humanitarian diplomacy with emerging local authorities while mobilizing international justice at the ICJ.',
    bangladeshSignificance: 'Shifts traditional diplomatic strategy: Bangladesh must combine UN multilateral pressure with pragmatic regional borderland engagements to secure verifiable safe repatriation guarantees.',
    strategicRisks: [
      'Cross-border mortar shelling and armed militia spillover into Cox\'s Bazar and Bandarban.',
      'Diminishing international humanitarian donor funding fatigue putting fiscal burden on Dhaka.',
      'Illicit synthetic drug (Yaba/ICE) smuggling networks financing border conflict.'
    ],
    strategicOpportunities: [
      'Establishing quiet humanitarian de-escalation channels with Rakhine local administrations.',
      'Leveraging ASEAN\'s Five-Point Consensus and China-brokered trilateral talks for verified pilot returns.',
      'Leading international accountability coalitions at the International Court of Justice (ICJ).'
    ],
    policyRecommendations: [
      'Designate a Special Presidential/Ministerial Envoy for Myanmar Border Affairs.',
      'Enhance smart border fencing, drone perimeter surveillance, and biometric camp monitoring.',
      'Launch a Global Rohingya Trust Fund at the UN General Assembly to secure multi-year donor pledges.'
    ],
    detailedAnalysis: {
      backgroundAndGenesis: 'Since the genocidal military crackdown in Rakhine State in August 2017, Bangladesh has provided shelter to over 1.2 million forcibly displaced Rohingya refugees in the Ukhiya and Teknaf sub-districts of Cox\'s Bazar and Bhasan Char. Despite bilateral repatriation arrangements signed with Naypyidaw in 2017 and 2018, not a single refugee has been safely repatriated due to the complete absence of citizenship guarantees, safety conditions, and the catastrophic escalation of Myanmar\'s civil war following the February 2021 military coup. In 2024-2026, the Arakan Army (AA) wrested control over most of northern and central Rakhine State from the military junta, fundamentally altering the sovereign power dynamics along the 271-kilometer Bangladesh-Myanmar frontier.',
      greatPowerInterests: {
        us: 'The US leads international humanitarian funding ($2B+ contributed since 2017), sanctions Myanmar military generals, and strongly supports accountability proceedings at the ICJ and the International Criminal Court (ICC).',
        china: 'Beijing maintains substantial economic stakes in Rakhine (Kyaukphyu Deep Sea Port and oil/gas pipelines to Kunming), actively mediating trilateral talks between Dhaka, Naypyidaw, and the Arakan Army to maintain stability along its southern energy corridor.',
        india: 'New Delhi is heavily invested in the Kaladan Multi-Modal Transit Transport Project passing through Rakhine and Chin states, balancing ties between the junta, resistance forces, and Bangladesh.'
      },
      vulnerabilitiesAndEconomicImpact: 'Hosting 1.2 million refugees costs approximately $1.2 billion annually. With global humanitarian assistance dropping due to competing crises in the Middle East and Eastern Europe, the funding shortfall creates immense fiscal, environmental (deforestation of 6,000+ acres), and law enforcement burdens on Bangladesh. Armed transnational crime syndicates and synthetic methamphetamine trafficking through the Naf River pose acute internal security challenges.',
      policyDirectives: [
        'Ministry of Foreign Affairs must formalize a Track-2 Humanitarian Borderland Engagement Channel with Rakhine civil and de facto administrative authorities to negotiate local conditions for verified, phased returns.',
        'Sustain international legal momentum supporting The Gambia\'s genocide case against Myanmar at the International Court of Justice (ICJ).',
        'Deploy a high-tech border security modernization program featuring thermal cameras, aerial UAV surveillance, and integrated Border Guard Bangladesh (BGB) rapid response units.'
      ],
      academicCitations: [
        {
          title: 'The Shifting Frontlines of Rakhine State: Armed Non-State Actors, Geopolitics, and the Fate of Rohingya Repatriation',
          authorOrBody: 'International Crisis Group (ICG)',
          publication: 'ICG Asia Report Series',
          year: '2026',
          url: 'https://www.crisisgroup.org'
        }
      ]
    },
    keyActors: ['Arakan Army', 'UNHCR', 'MoFA Bangladesh', 'ASEAN Special Envoy', 'ICJ'],
    originalUrl: 'https://thediplomat.com',
    readTime: '6 min read',
    tags: ['Rakhine State', 'Arakan Army', 'Rohingya Crisis', 'Border Security', 'ICJ']
  },
  {
    id: 'intel-006',
    slug: 'india-bangladesh-transboundary-water-governance-teesta',
    title: 'India-Bangladesh Trans-boundary Water Governance: Teesta and Basin-Wide Frameworks',
    source: 'ORF (Observer Research Foundation)',
    sourceTier: 'regional-think-tank',
    publishedAt: '2026-09-06',
    pillar: 'climate-diplomacy',
    impactLevel: 'High Strategic Significance',
    executiveSummary: 'Examines proposed technical rehabilitation frameworks for the Teesta River Basin, Chinese comprehensive management proposals, and the geopolitical imperatives for New Delhi and Dhaka to conclude basin-wide water treaties across all 54 shared rivers.',
    bangladeshSignificance: 'Critical to northern Bangladesh food security, agricultural irrigation in the Rangpur division, and preventing unilateral ecological vulnerability while balancing bilateral diplomacy.',
    strategicRisks: [
      'Dry-season water shortages causing desertification and severe agricultural output collapse.',
      'Geopolitical tension if alternative external engineering contracts provoke bilateral friction.',
      'Monsoon flood surges without upstream real-time hydrological data sharing.'
    ],
    strategicOpportunities: [
      'Finalizing the Teesta Comprehensive Management Project with climate-resilient water reservoirs.',
      'Expanding the 1996 Ganges Water Sharing Treaty model to other major rivers (Manu, Muhuri, Khowai, Gomti).',
      'Implementing joint hydro-power and river basin management initiatives under BBIN frameworks.'
    ],
    policyRecommendations: [
      'Institutionalize 24/7 automated telemetry data exchange through the Joint Rivers Commission (JRC).',
      'Prioritize desiltation and natural embankment stabilization to prevent riverbank erosion.',
      'Elevate water diplomacy to a permanent agenda item in bilateral leadership summits.'
    ],
    detailedAnalysis: {
      backgroundAndGenesis: 'Bangladesh and India share 54 transboundary rivers, with over 90% of Bangladesh\'s surface water originating outside its borders. The Teesta River, originating in the Sikkim Himalayas and flowing through West Bengal before entering northern Bangladesh, sustains agricultural livelihoods for over 21 million citizens across the Rangpur division. While an interim 50:50 water-sharing agreement was drafted in 2011, political impasses at the Indian state level prevented its formal signing. In dry seasons, water discharge at the Gajoldoba Barrage drops below 1,000 cusecs, causing acute agricultural droughts in Bangladesh, while uncoordinated monsoon discharges trigger massive flash floods.',
      greatPowerInterests: {
        india: 'New Delhi recognizes that resolving the Teesta impasse is essential for preserving mutual diplomatic trust with Dhaka, offering technical restoration loans and flood data sharing while navigating domestic federal politics.',
        china: 'Beijing submitted a comprehensive $1 billion technical and engineering proposal for the "Teesta River Comprehensive Management and Restoration Project," offering to dredge reservoirs and reclaim 170 square kilometers of agricultural land.',
        us: 'Washington encourages transparent, multi-lateral hydro-diplomacy adhering to the UN Watercourses Convention principles to avert regional water-related conflict.'
      },
      vulnerabilitiesAndEconomicImpact: 'Northern Bangladesh produces 16% of the national paddy crop. Unresolved dry-season Teesta flows cost the national agrarian economy an estimated $1.5 billion annually in lost crop yields, forced groundwater depletion, and riverbank erosion displacing thousands of families every monsoon.',
      policyDirectives: [
        'Re-convene the Joint Rivers Commission (JRC) with a mandate to finalize the renewal of the 1996 Ganges Water Treaty (expiring in 2026) alongside an interim Teesta sharing formula.',
        'Deploy automated real-time telemetry river gauging stations along all 54 shared river entry points.',
        'Execute balanced domestic reservoir engineering projects to store excess monsoon waters for winter irrigation.'
      ],
      academicCitations: [
        {
          title: 'Hydro-Politics and Basin-Wide Governance in Eastern South Asia: The Case of the Teesta and Shared Transboundary Waters',
          authorOrBody: 'Observer Research Foundation (ORF)',
          publication: 'ORF Strategic Monograph Series',
          year: '2026',
          url: 'https://www.orfonline.org'
        }
      ]
    },
    keyActors: ['Joint Rivers Commission (JRC)', 'India MEA', 'Bangladesh Water Development Board'],
    originalUrl: 'https://www.orfonline.org',
    readTime: '9 min read',
    tags: ['Teesta River', 'Water Diplomacy', 'Hydro-Politics', 'India-Bangladesh', 'JRC']
  },
  {
    id: 'intel-007',
    slug: 'climate-finance-architecture-loss-and-damage-v20',
    title: 'Loss and Damage Finance Architecture: Climate Leadership of the Vulnerable Twenty (V20)',
    source: 'Chatham House',
    sourceTier: 'global-think-tank',
    publishedAt: '2026-09-04',
    pillar: 'climate-diplomacy',
    impactLevel: 'Medium Impact',
    executiveSummary: 'Detailed overview of the operationalization of the UN Loss and Damage Fund, highlighting Bangladesh pioneering role in delta adaptation modeling, Mujib Climate Prosperity Plan, and global climate reparations diplomacy.',
    bangladeshSignificance: 'Positions Dhaka as the intellectual and diplomatic spearhead of climate-vulnerable coastal nations at COP forums, attracting direct green climate grants and concessional adaptation capital.',
    strategicRisks: [
      'Bureaucratic bottlenecks and complex qualification criteria in UN climate funds.',
      'Global climate finance delivered as debt rather than non-repayable grant assistance.',
      'Accelerating sea level rise threatening 17% of coastal lowlands by 2050.'
    ],
    strategicOpportunities: [
      'Directing international climate finance into Bangladesh Delta Plan 2100 megaprojects.',
      'Pioneering coastal mangrove carbon credit markets and debt-for-climate swaps.',
      'Hosting the permanent Secretariat or Regional Center of Excellence for Climate Vulnerable Forum (CVF).'
    ],
    policyRecommendations: [
      'Mandate that all multilateral climate finance received has a minimum 80% grant component.',
      'Integrate the Mujib Climate Prosperity Plan with international multilateral funding windows.',
      'Build institutional capacity for automated climate risk reporting across national agencies.'
    ],
    detailedAnalysis: {
      backgroundAndGenesis: 'As the world\'s largest low-lying river delta, Bangladesh is situated at the epicenter of anthropogenic climate vulnerability. Despite contributing less than 0.4% to global greenhouse gas emissions, Bangladesh faces severe climate-induced loss and damage from extreme cyclones, storm surges, coastal salinity intrusion, and glacier melt in the Himalayas. Leading the Climate Vulnerable Forum (CVF) and the Vulnerable Twenty (V20) Group of Finance Ministers, Dhaka played a pivotal intellectual role in achieving the historic consensus at COP27 and COP28 to establish the international Loss and Damage Fund.',
      greatPowerInterests: {
        us: 'Washington and the EU emphasize mobilizing private sector adaptation capital and catastrophic insurance facilities while negotiating bilateral clean energy support windows.',
        china: 'Beijing positions South-South cooperation mechanisms and green BRI renewable energy investments as alternatives to Western multilateral climate funds.',
        india: 'New Delhi collaborates on cross-border flood forecasting, early warning networks, and joint solar grid integration across the eastern sub-continent.',
        globalNorth: 'Developed nations (EU, US, UK, Japan) have pledged initial capitalization to the Loss and Damage Fund, emphasizing private capital mobilization and disaster risk insurance mechanisms.',
        globalSouth: 'Developing and deltaic nations advocate for non-repayable grant-based financial transfers, asserting climate justice and historic responsibility under the UNFCCC principle of Common But Differentiated Responsibilities (CBDR).'
      },
      vulnerabilitiesAndEconomicImpact: 'IPCC projections indicate that a 1-meter sea-level rise could inundate 17.5% of Bangladesh\'s landmass, displacing up to 20 million climate refugees and wiping out 2% of annual GDP by 2050. Salinity intrusion has already penetrated over 100 kilometers inland into the Khulna, Bagerhat, and Satkhira coastal districts.',
      policyDirectives: [
        'Ministry of Environment, Forest and Climate Change must establish a National Loss and Damage Registry documenting empirical loss metrics for international fund drawdowns.',
        'Issue Bangladesh\'s first sovereign Green Climate Sukuk and Blue Bonds on international exchanges to co-finance coastal embankment polders.',
        'Position Dhaka as the permanent operational research hub for the Global Center on Adaptation (GCA).'
      ],
      academicCitations: [
        {
          title: 'Operationalizing Climate Loss and Damage: Legal Mechanisms, Financial Architecture, and the Rights of Deltaic States',
          authorOrBody: 'Chatham House International Law Programme',
          publication: 'Chatham House Research Papers',
          year: '2026',
          url: 'https://www.chathamhouse.org'
        }
      ]
    },
    keyActors: ['V20 Secretariat', 'UNFCCC', 'Ministry of Environment, Forest and Climate Change', 'COP Presidency'],
    originalUrl: 'https://www.chathamhouse.org',
    readTime: '6 min read',
    tags: ['Climate Finance', 'Loss and Damage', 'Delta Plan 2100', 'COP Negotiations', 'V20']
  },
  {
    id: 'intel-008',
    slug: 'revitalizing-bimstec-trade-connectivity-energy-grid',
    title: 'Revitalizing BIMSTEC: Trade Connectivity, Energy Grid Interconnection, and Regional Integration',
    source: 'ISEAS–Yusof Ishak Institute (Singapore)',
    sourceTier: 'regional-think-tank',
    publishedAt: '2026-09-02',
    pillar: 'regional-multilateralism',
    impactLevel: 'Medium Impact',
    executiveSummary: 'Analysis of institutional capacity building at the BIMSTEC Secretariat headquarters in Dhaka, cross-border electricity grid transmission from Nepal and Bhutan to Bangladesh, and multimodal transit treaties connecting South and Southeast Asia.',
    bangladeshSignificance: 'Solidifies Dhaka role as the geographic, administrative, and economic nexus connecting SAARC economies with ASEAN member states.',
    strategicRisks: [
      'Prolonged tariff negotiations delaying the implementation of the BIMSTEC Free Trade Area.',
      'Political volatility in Myanmar disrupting overland Asian Highway routes.',
      'Non-tariff technical trade barriers at land customs stations.'
    ],
    strategicOpportunities: [
      'Importing clean hydro-electricity (up to 5,000 MW) from Nepal and Bhutan via Indian transit lines.',
      'Positioning Chattogram and Mongla ports as designated gateways for landlocked Himalayan neighbors.',
      'Establishing standard digital customs clearance protocols across all 7 BIMSTEC nations.'
    ],
    policyRecommendations: [
      'Champion the immediate operationalization of the BIMSTEC Master Plan for Transport Connectivity.',
      'Host an annual BIMSTEC Energy Ministers Summit in Dhaka to finalize cross-border wheeling tariffs.',
      'Upgrade Benapole, Banglabandha, and Tamabil land ports with integrated automated scanning scanners.'
    ],
    detailedAnalysis: {
      backgroundAndGenesis: 'The Bay of Bengal Initiative for Multi-Sectoral Technical and Economic Cooperation (BIMSTEC)—comprising Bangladesh, Bhutan, India, Myanmar, Nepal, Sri Lanka, and Thailand—bridges 1.8 billion people and a combined economy of $4.5 trillion. With the permanent BIMSTEC Secretariat situated in Dhaka since 2014, Bangladesh is uniquely positioned to steer regional integration. Despite intra-regional trade currently standing at an underwhelming 6% of total trade, the recent adoption of the BIMSTEC Charter and the Master Plan for Transport Connectivity provides a formal legal architecture to unlock sub-regional growth.',
      greatPowerInterests: {
        us: 'Washington encourages BIMSTEC as an organic, non-hegemonic South and Southeast Asian connectivity framework that strengthens democratic supply chain resilience in the Indo-Pacific.',
        china: 'Beijing monitors BIMSTEC connectivity projects to identify potential synergies or competition with its own Belt and Road overland and maritime corridors in Myanmar and South Asia.',
        india: 'India views BIMSTEC as its premier sub-regional vehicle combining its "Neighborhood First" and "Act East" policies, especially amidst the prolonged paralysis of SAARC.',
        thailandAsean: 'Thailand acts as the Southeast Asian gateway, promoting maritime links between Ranong Port and Chattogram/Matarbari to bypass congested Malacca straits.'
      },
      vulnerabilitiesAndEconomicImpact: 'Connecting Bangladesh to Himalayan hydropower via Indian transmission lines allows Dhaka to replace costly domestic liquid fuel power generation with clean hydro-power, projected to save $800 million annually in energy subsidies while cutting carbon emissions by 4 million tons per year.',
      policyDirectives: [
        'Fast-track the conclusion of the BIMSTEC Motor Vehicles Agreement (MVA) and Coastal Shipping Agreement.',
        'Establish a BIMSTEC Sub-Regional Development Fund headquartered in Dhaka to finance missing transport links.',
        'Harmonize sanitary and phytosanitary (SPS) standards across land customs checkpoints.'
      ],
      academicCitations: [
        {
          title: 'BIMSTEC at Crossroads: Multimodal Connectivity, Energy Wheeling, and the Quest for Bay of Bengal Integration',
          authorOrBody: 'ISEAS–Yusof Ishak Institute',
          publication: 'ISEAS Regional Strategic and Policy Studies',
          year: '2026',
          url: 'https://www.iseas.edu.sg'
        }
      ]
    },
    keyActors: ['BIMSTEC Secretariat Dhaka', 'Nepal Ministry of Energy', 'Indian Power Ministry', 'ADB'],
    originalUrl: 'https://www.iseas.edu.sg',
    readTime: '5 min read',
    tags: ['BIMSTEC', 'Energy Diplomacy', 'Regional Connectivity', 'Hydro-power', 'Trade']
  }
];

export const DEFAULT_POLICY_MEMOS: PolicyMemo[] = [
  {
    id: 'memo-001',
    title: 'Ministerial Brief: Operationalizing Post-2026 LDC Graduation Trade Safeguards',
    pillar: 'trade-ldc',
    summary: 'Strategic memorandum outlining immediate diplomatic and trade actions to secure EU GSP+ accession and mitigate export tariff shocks.',
    content: `MEMORANDUM FOR THE FOREIGN AFFAIRS & COMMERCE DESK

SUBJECT: Strategic Roadmap for Post-2026 LDC Graduation Safeguards

1. EXECUTIVE CONTEXT:
Bangladesh is scheduled for official graduation from Least Developed Country (LDC) status in late 2026. Without proactive bilateral and multilateral interventions, export merchandise—particularly Readymade Garments (RMG) accounting for 84% of export receipts—faces immediate tariff hikes of 8.5% to 12% in key European, UK, and Canadian markets.

2. CRITICAL CHALLENGES:
- Compliance with all 32 international conventions required under the European Union GSP+ framework, notably labor inspection standards, environmental compliance, and human rights conventions.
- Expiration of WTO TRIPS waivers for the domestic pharmaceutical industry, requiring intellectual property reforms.
- Need for Bilateral Comprehensive Economic Partnership Agreements (CEPA) with high-value trading partners.

3. ACTIONABLE STRATEGIC RECOMMENDATIONS:
- Prioritize EU GSP+ Dialogue: Deploy a dedicated high-level ministerial delegation to Brussels with verifiable audit benchmarks on labor safety and environmental compliance.
- Fast-Track CEPA Negotiations: Finalize the terms of reference for the Japan-Bangladesh EPA and India-Bangladesh CEPA by Q2 2027.
- Establish an Export Diversification Sovereign Fund: Subsidize non-textile manufacturing clusters (footwear, light engineering, agro-processing, electronics).`,
    recommendations: [
      'Finalize EU GSP+ convention compliance roadmap by end of Q1 2027.',
      'Establish a permanent Inter-Ministerial Economic Diplomacy Committee.',
      'Set up an Intellectual Property Transition Taskforce under the Commerce Ministry.'
    ],
    status: 'published',
    author: 'Daloyar Hassan Shishir (Strategic Desk Analyst)',
    createdAt: '2026-09-10',
    updatedAt: '2026-09-11'
  },
  {
    id: 'memo-002',
    title: 'Policy Note: Bay of Bengal Maritime Security Architecture & Matarbari Port Access Protocols',
    pillar: 'bay-of-bengal',
    summary: 'Action memorandum on institutionalizing open commercial transit while safeguarding national sovereignty in the deep-water maritime approaches.',
    content: `MEMORANDUM FOR MARITIME & REGIONAL SECURITY DESK

SUBJECT: Strategic Governance Framework for Matarbari Deep Sea Port & Bay of Bengal Sea Lanes

1. EXECUTIVE CONTEXT:
The commissioning of Matarbari Deep Sea Port transforms Bangladesh from a feeder-dependent coastal state into a pivotal deep-water transshipment hub. With a 18.5-meter draft capable of docking post-Panamax vessels, Matarbari provides strategic access to landlocked Northeast India, Nepal, and Bhutan.

2. STRATEGIC IMPLICATIONS:
- Secures sovereign maritime logistics autonomy, reducing dependence on Singapore and Colombo transshipment hubs.
- Triggers competing strategic interest from major Indo-Pacific powers seeking maritime logistical footholds.
- Demands heightened Maritime Domain Awareness (MDA) across the northern Bay of Bengal Exclusive Economic Zone (EEZ).

3. STRATEGIC DIRECTIVES:
- Maintain Strict Commercial Neutrality: Establish transparent civilian port authority bylaws ensuring equal, rule-based commercial access for all international merchant vessels.
- Modernize Coast Guard & Naval Patrols: Integrate coastal radar stations, satellite AIS feeds, and long-range maritime patrol aircraft.
- Champion IORA Maritime Safety: Spearhead multilateral anti-piracy, search-and-rescue, and marine environmental protection protocols under the Indian Ocean Rim Association.`,
    recommendations: [
      'Formulate the National Maritime Domain Awareness (MDA) Strategic Blueprint.',
      'Draft standardized multimodal transit fee regulations for Himalayan neighbors.',
      'Host the Annual Bay of Bengal Maritime Safety Summit in Chattogram.'
    ],
    status: 'published',
    author: 'Daloyar Hassan Shishir (Strategic Desk Analyst)',
    createdAt: '2026-09-08',
    updatedAt: '2026-09-09'
  }
];

export const AI_QUERY_TEMPLATES = [
  'What is the geopolitical impact of Matarbari port on Bay of Bengal security?',
  'How will post-2026 LDC graduation affect Bangladesh RMG exports and TRIPS pharma waivers?',
  'Analyze Bangladesh\'s strategic balancing between the US Indo-Pacific Strategy and China\'s BRI.',
  'What are the diplomatic options for safe, verified Rohingya repatriation amid Rakhine border shifts?',
  'Assess the hydro-diplomacy options for the Teesta River Basin and Joint Rivers Commission.',
  'Evaluate Bangladesh\'s strategic rationale for seeking ASEAN Sectoral Dialogue Partnership.',
  'How can Bangladesh Delta Plan 2100 leverage global Loss and Damage climate finance?',
  'What are the strategic benefits of the BBIN trilateral power trade agreement with Nepal and India?'
];
