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
    keyActors: ['Bangladesh Port Authority', 'JICA Japan', 'India MoEA', 'Chittagong Port Authority'],
    originalUrl: 'https://www.biiss.org',
    readTime: '6 min read',
    tags: ['Matarbari', 'Maritime Security', 'JICA', 'BIG-B', 'Port Diplomacy']
  },
  {
    id: 'intel-002',
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
    keyActors: ['US State Dept', 'Ministry of Foreign Affairs (MoFA)', 'Chinese MFA', 'India MEA'],
    originalUrl: 'https://www.csis.org',
    readTime: '8 min read',
    tags: ['Indo-Pacific', 'Strategic Autonomy', 'US-China Rivalry', 'Geopolitics']
  },
  {
    id: 'intel-003',
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
    keyActors: ['CPD', 'Ministry of Commerce', 'WTO', 'BGMEA', 'European Commission'],
    originalUrl: 'https://cpd.org.bd',
    readTime: '7 min read',
    tags: ['LDC Graduation', 'EU GSP+', 'Economic Diplomacy', 'CEPA', 'RMG', 'TRIPS']
  },
  {
    id: 'intel-004',
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
    keyActors: ['Bangladesh Navy', 'Coast Guard', 'BIPSS', 'IORA'],
    originalUrl: 'https://bipss.org.bd',
    readTime: '5 min read',
    tags: ['Forces Goal', 'Naval Diplomacy', 'Maritime Domain Awareness', 'EEZ']
  },
  {
    id: 'intel-005',
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
    keyActors: ['Arakan Army', 'UNHCR', 'MoFA Bangladesh', 'ASEAN Special Envoy', 'ICJ'],
    originalUrl: 'https://thediplomat.com',
    readTime: '6 min read',
    tags: ['Rakhine State', 'Arakan Army', 'Rohingya Crisis', 'Border Security', 'ICJ']
  },
  {
    id: 'intel-006',
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
    keyActors: ['Joint Rivers Commission (JRC)', 'India MEA', 'Bangladesh Water Development Board'],
    originalUrl: 'https://www.orfonline.org',
    readTime: '9 min read',
    tags: ['Teesta River', 'Water Diplomacy', 'Hydro-Politics', 'India-Bangladesh', 'JRC']
  },
  {
    id: 'intel-007',
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
    keyActors: ['V20 Secretariat', 'UNFCCC', 'Ministry of Environment, Forest and Climate Change', 'COP Presidency'],
    originalUrl: 'https://www.chathamhouse.org',
    readTime: '6 min read',
    tags: ['Climate Finance', 'Loss and Damage', 'Delta Plan 2100', 'COP Negotiations', 'V20']
  },
  {
    id: 'intel-008',
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
    keyActors: ['BIMSTEC Secretariat Dhaka', 'Nepal Ministry of Energy', 'Indian Power Ministry', 'ADB'],
    originalUrl: 'https://www.iseas.edu.sg',
    readTime: '5 min read',
    tags: ['BIMSTEC', 'Energy Diplomacy', 'Regional Connectivity', 'Hydro-power', 'Trade']
  },
  {
    id: 'intel-009',
    title: 'South Asian Defense Expenditure and Arms Procurement Trends: A Comparative Overview',
    source: 'SIPRI (Stockholm International Peace Research Institute)',
    sourceTier: 'global-media-multilateral',
    publishedAt: '2026-08-30',
    pillar: 'defense-peacekeeping',
    impactLevel: 'Global Systemic Trend',
    executiveSummary: 'Annual statistical report detailing military spending across South Asia, diversification of defense hardware suppliers (Turkey, UK, France, Italy, China), and UN Peacekeeping deployment statistics.',
    bangladeshSignificance: 'Documents Bangladesh status as a top troop-contributing country (TCC) to UN Peacekeeping missions, a core pillar of international diplomatic soft power and bilateral military diplomacy.',
    strategicRisks: [
      'Geopolitical supply chain disruptions affecting replacement parts for legacy defense systems.',
      'Defense budget inflation constraining domestic social infrastructure allocations.',
      'Evolving cyber warfare and electronic spectrum vulnerabilities across armed forces commands.'
    ],
    strategicOpportunities: [
      'Deepening defense cooperation agreements with NATO and European partners for advanced surveillance gear.',
      'Establishing joint co-production defense maintenance facilities within Bangladesh.',
      'Expanding elite female peacekeeper deployments to enhance international leadership recognition.'
    ],
    policyRecommendations: [
      'Maintain an open-architecture supplier policy to prevent strategic lock-in to any single vendor.',
      'Invest heavily in national cyber defense commands and specialized EW (electronic warfare) education.',
      'Leverage UN peacekeeping leadership to advocate for permanent South Asian representation in UN DPKO.'
    ],
    keyActors: ['UN DPKO', 'Armed Forces Division (AFD)', 'SIPRI', 'Ministry of Defense'],
    originalUrl: 'https://www.sipri.org',
    readTime: '8 min read',
    tags: ['SIPRI', 'UN Peacekeeping', 'Defense Procurement', 'Forces Goal 2030', 'Defense Diplomacy']
  },
  {
    id: 'intel-010',
    title: 'Global Supply Chain Realignment: Why Bangladesh Must Accelerate Industrial Park Logistics',
    source: 'Nikkei Asia',
    sourceTier: 'ir-journals',
    publishedAt: '2026-08-28',
    pillar: 'trade-ldc',
    impactLevel: 'Medium Impact',
    executiveSummary: 'Analyzes multinational corporations "China+1" diversification strategies, comparing industrial SEZs in Vietnam, India, and Bangladesh (Mirasarai/BSMSN) for electronics, technical textiles, and automotive assembly.',
    bangladeshSignificance: 'Identifies specific regulatory bottlenecks in customs clearance and port turnaround times that Dhaka must reform to capture high-value foreign investments fleeing East Asian geopolitical flashpoints.',
    strategicRisks: [
      'Vietnam and India capturing higher shares of electronics manufacturing due to aggressive single-window approvals.',
      'Industrial utility shortages (gas, uninterrupted electricity) raising factory operating costs.',
      'Port dwell time averaging 4-6 days compared to Singapore/Vietnam 1-2 days.'
    ],
    strategicOpportunities: [
      'Developing Bangabandhu Sheikh Mujib Shilpa Nagar (BSMSN) as South Asia\'s largest green industrial eco-city.',
      'Offering tailored tax holidays and zero-tariff capital machinery imports for high-tech joint ventures.',
      'Integrating backward linkages with local light engineering and plastic injection molding clusters.'
    ],
    policyRecommendations: [
      'Digitize 100% of customs declaration, bonded warehouse licensing, and utility connection workflows.',
      'Establish specialized industrial park clusters reserved exclusively for Japanese, Korean, and EU investors.',
      'Establish a Cabinet-level Foreign Investment Fast-Track Cell reporting directly to the Prime Minister / Chief Adviser.'
    ],
    keyActors: ['BEZA (Bangladesh Economic Zones Authority)', 'JETRO', 'Ministry of Commerce', 'BIDA'],
    originalUrl: 'https://asia.nikkei.com',
    readTime: '5 min read',
    tags: ['Supply Chains', 'BEZA', 'FDI', 'China Plus One', 'Industrial Zones', 'BSMSN']
  },
  {
    id: 'intel-011',
    title: 'Bangladesh\'s Quest for ASEAN Sectoral Dialogue Partnership: Strategic Imperatives',
    source: 'IDSA (Manohar Parrikar Institute for Defence Studies and Analyses)',
    sourceTier: 'regional-think-tank',
    publishedAt: '2026-08-25',
    pillar: 'regional-multilateralism',
    impactLevel: 'High Strategic Significance',
    executiveSummary: 'Assesses Dhaka\'s diplomatic campaign to achieve Sectoral Dialogue Partner (SDP) status with ASEAN. Analyzes institutional benefits in maritime security cooperation, digital economy integration, and bilateral trade diversification with Indonesia, Malaysia, and Vietnam.',
    bangladeshSignificance: 'Provides Bangladesh with an institutional anchor in Southeast Asia, balancing continental South Asian dynamics and opening preferential access to a $3.8 trillion economic bloc.',
    strategicRisks: [
      'Myanmar junta utilizing ASEAN procedural consensus rules to stall Bangladesh\'s SDP application.',
      'High trade deficits with major ASEAN commodity exporters (palm oil, coal, electronics).',
      'Complex regulatory harmonization requirements with ASEAN single window standards.'
    ],
    strategicOpportunities: [
      'Garnering strong diplomatic support from Malaysia, Indonesia, and Singapore as key advocates.',
      'Accessing ASEAN-led regional forums, cyber security working groups, and disaster relief exercises.',
      'Creating direct maritime container feeder routes between Chittagong/Matarbari and Port Klang / Tanjung Pelepas.'
    ],
    policyRecommendations: [
      'Deploy targeted diplomatic demarches across ASEAN capitals emphasizing Bangladesh\'s economic synergy.',
      'Conclude bilateral preferential trade agreements (PTAs) with Indonesia and Malaysia as building blocks.',
      'Highlight Bangladesh\'s democratic delta resilience as a strategic asset for ASEAN maritime security.'
    ],
    keyActors: ['ASEAN Secretariat Jakarta', 'MoFA Bangladesh', 'Malaysia Ministry of Foreign Affairs', 'Indonesia Kemlu'],
    originalUrl: 'https://www.idsa.in',
    readTime: '7 min read',
    tags: ['ASEAN', 'Sectoral Dialogue Partner', 'Look East Policy', 'Regional Integration']
  },
  {
    id: 'intel-012',
    title: 'The Geopolitics of Critical Minerals & Semiconductor Backward Linkages in South Asia',
    source: 'Brookings Institution',
    sourceTier: 'global-think-tank',
    publishedAt: '2026-08-22',
    pillar: 'trade-ldc',
    impactLevel: 'Global Systemic Trend',
    executiveSummary: 'Investigates the global race for semiconductor packaging and testing (OSAT), examining how South Asian economies can participate in western de-risking strategies away from concentrated East Asian fabrication hubs.',
    bangladeshSignificance: 'Presents an unprecedented window for Bangladesh to move up the technological complexity index by incentivizing semiconductor design, assembly, and testing in domestic hi-tech parks.',
    strategicRisks: [
      'Heavy initial capital expenditure and specialized cleanroom infrastructure requirements.',
      'Talent deficits in VLSI engineering and advanced material physics requiring overseas training.',
      'Intense regional competition from Indian state semiconductor subsidy programs.'
    ],
    strategicOpportunities: [
      'Leveraging Bangladesh\'s massive pool of software and electrical engineers for chip design and verification.',
      'Collaborating with US International Development Finance Corporation (DFC) for tech infrastructure financing.',
      'Establishing university-industry silicon incubation labs at BUET and leading technical institutions.'
    ],
    policyRecommendations: [
      'Enact a National Semiconductor & Microelectronics Policy offering 15-year tax holidays.',
      'Create a $100M sovereign matching fund for international OSAT joint ventures.',
      'Partner with US CHIPS Act workforce initiatives through bilateral science and technology MOUs.'
    ],
    keyActors: ['Bangladesh Hi-Tech Park Authority', 'US DFC', 'Ministry of ICT', 'Semiconductor Alliances'],
    originalUrl: 'https://www.brookings.edu',
    readTime: '8 min read',
    tags: ['Semiconductors', 'CHIPS Act', 'Hi-Tech Diplomacy', 'OSAT', 'Economic Upgrading']
  },
  {
    id: 'intel-013',
    title: 'Transboundary Energy Diplomacy: BBIN Electricity Wheeling and Renewable Power Grid',
    source: 'CPD (Centre for Policy Dialogue)',
    sourceTier: 'bd-strategic',
    publishedAt: '2026-08-19',
    pillar: 'regional-multilateralism',
    impactLevel: 'High Strategic Significance',
    executiveSummary: 'Comprehensive assessment of the BBIN (Bangladesh, Bhutan, India, Nepal) energy corridor. Details the trilateral power trade mechanism enabling Bangladesh to import Himalayan hydropower through the Indian national transmission grid.',
    bangladeshSignificance: 'Replaces expensive fossil fuel / LNG imports with clean, zero-carbon Himalayan hydro-electricity, slashing national power generation costs by 20% and reducing carbon emissions.',
    strategicRisks: [
      'Transit transmission tariff disagreements across the Indian power corridor.',
      'Seasonal fluctuations in Himalayan hydro-power generation during winter dry periods.',
      'Grid frequency synchronization and cross-border HVDC interconnection maintenance.'
    ],
    strategicOpportunities: [
      'Direct equity investment by Bangladesh in Nepal (e.g., 683 MW Sunkoshi-3) and Bhutan hydro projects.',
      'Creating a unified South Asian Regional Power Market with spot trading on energy exchanges.',
      'Accelerating national renewable energy target of 40% clean power by 2041.'
    ],
    policyRecommendations: [
      'Finalize the long-term 25-year Trilateral Power Trade Agreement with India and Nepal.',
      'Construct dedicated high-voltage direct current (HVDC) transmission lines through the Siliguri corridor.',
      'Establish a regional energy coordination desk under the Power Division and Foreign Ministry.'
    ],
    keyActors: ['Power Division Bangladesh', 'Nepal Electricity Authority', 'India Power Grid Corp', 'CPD'],
    originalUrl: 'https://cpd.org.bd',
    readTime: '6 min read',
    tags: ['BBIN', 'Energy Diplomacy', 'Hydro-power', 'Cross-Border Grid', 'Renewable Energy']
  },
  {
    id: 'intel-014',
    title: 'The Indo-Pacific Outlook (IPO) of Bangladesh: A Normative Framework for Maritime Peace',
    source: 'Foreign Affairs',
    sourceTier: 'ir-journals',
    publishedAt: '2026-08-15',
    pillar: 'power-balancing',
    impactLevel: 'High Strategic Significance',
    executiveSummary: 'Authoritative analysis of Bangladesh\'s 15-point Indo-Pacific Outlook. Explores how Dhaka operationalizes the United Nations Convention on the Law of the Sea (UNCLOS), freedom of navigation, and inclusive regional security without joining military pacts.',
    bangladeshSignificance: 'Articulates Bangladesh\'s sovereign geopolitical manifesto to global powers, ensuring that the country remains an active participant in regional rule-making rather than a passive battleground.',
    strategicRisks: [
      'Misinterpretation of Dhaka\'s non-aligned stance by external security blocs as ambiguity.',
      'Intensified naval presence and surveillance flights in the Bay of Bengal by competing superpowers.',
      'Diplomatic friction when voting on contested multilateral resolutions at the UN General Assembly.'
    ],
    strategicOpportunities: [
      'Promoting the Bay of Bengal as an open, free, and rules-based maritime domain.',
      'Securing international technical cooperation in oceanography, seabed mapping, and marine biotechnology.',
      'Establishing Dhaka as an intellectual hub for track-1.5 strategic dialogues.'
    ],
    policyRecommendations: [
      'Publish an annual "State of the Bay of Bengal" strategic White Paper by the Ministry of Foreign Affairs.',
      'Strengthen bilateral maritime security dialogues with Japan, the US, India, the UK, and France.',
      'Promote multilateral blue economy research partnerships under IORA and IOC-INDIGO.'
    ],
    keyActors: ['MoFA Bangladesh', 'UNCLOS Tribunal (ITLOS)', 'IORA Secretariat', 'US State Dept', 'Chinese MFA'],
    originalUrl: 'https://www.foreignaffairs.com',
    readTime: '9 min read',
    tags: ['Indo-Pacific Outlook', 'UNCLOS', 'Maritime Governance', 'Rule of Law', 'Strategic Non-Alignment']
  },
  {
    id: 'intel-015',
    title: 'Financing the Bangladesh Delta Plan 2100: Global Climate Adaptation Capital Mobilization',
    source: 'World Bank Strategic Reports',
    sourceTier: 'global-media-multilateral',
    publishedAt: '2026-08-11',
    pillar: 'climate-diplomacy',
    impactLevel: 'High Strategic Significance',
    executiveSummary: 'Financial assessment of the $37 billion capital expenditure requirement for the first phase of the Bangladesh Delta Plan 2100. Evaluates blended finance models, green climate bonds, and multilateral concessional lending for coastal polder rehabilitation and mega-river dredging.',
    bangladeshSignificance: 'Directly secures climate resilience for over 170 million citizens, protecting 1% to 1.5% of annual GDP from being erased by catastrophic river erosion and storm surges.',
    strategicRisks: [
      'Escalating sovereign debt service obligations if climate loans are non-concessional.',
      'Execution delays and coordination deficits across 12 different national implementing agencies.',
      'Salinity intrusion in southern coastal belts degrading drinking water and shrimp export farming.'
    ],
    strategicOpportunities: [
      'Attracting Dutch and Danish technical co-investments in advanced hydraulic delta engineering.',
      'Reclaiming over 1,000 square kilometers of new land in the Meghna estuary through trained sedimentation.',
      'Establishing a global Delta Knowledge Hub in Dhaka to train African and Asian coastal hydrologists.'
    ],
    policyRecommendations: [
      'Establish a unified, high-level Delta Plan Implementation Commission chaired by the Head of Government.',
      'Issue Bangladesh\'s first international sovereign Blue-Green Bond listed on London and Singapore exchanges.',
      'Mandate comprehensive environmental and social impact assessments (ESIA) for all coastal infrastructure.'
    ],
    keyActors: ['General Economics Division (GED)', 'World Bank', 'Netherlands Embassy Dhaka', 'ADB'],
    originalUrl: 'https://www.worldbank.org',
    readTime: '7 min read',
    tags: ['Delta Plan 2100', 'Climate Adaptation', 'World Bank', 'Hydraulic Engineering', 'Green Finance']
  },
  {
    id: 'intel-016',
    title: 'Expanding Remittance Corridors & Diplomatic Welfare for Non-Resident Bangladeshis (NRBs)',
    source: 'BIISS (Bangladesh Institute of International and Strategic Studies)',
    sourceTier: 'bd-strategic',
    publishedAt: '2026-08-08',
    pillar: 'trade-ldc',
    impactLevel: 'Medium Impact',
    executiveSummary: 'Strategic policy paper examining the diversification of labor migration corridors into Japan, South Korea, Germany, and the GCC. Highlights the diplomatic imperatives for bilateral social security treaties, digital remittance incentives, and consular legal support.',
    bangladeshSignificance: 'Remittance inflows ($24B+ annually) constitute the single largest sovereign foreign exchange cushion stabilizing Bangladesh\'s balance of payments and import cover.',
    strategicRisks: [
      'Informal "Hundi" hawala channels siphoning 30-40% of overseas worker earnings away from official reserves.',
      'Automation and AI displacing low-skilled manual migrant workers in GCC construction sectors.',
      'Exploitative recruitment intermediaries imposing severe debt burdens on departing migrant workers.'
    ],
    strategicOpportunities: [
      'Transitioning to high-skilled labor export in nursing, software engineering, welding, and elderly care.',
      'Signing Government-to-Government (G2G) recruitment pacts with zero migration fees.',
      'Issuing specialized NRB Foreign Currency Investment Bonds with inflation-adjusted sovereign yields.'
    ],
    policyRecommendations: [
      'Upgrade Technical Training Centers (TTCs) with Japanese and German certified vocational curriculums.',
      'Deploy dedicated Labor Welfare Attaches to all major Bangladeshi embassies in the Gulf and East Asia.',
      'Eliminate all transaction fees for formal digital banking channel remittances.'
    ],
    keyActors: ['Ministry of Expatriates\' Welfare', 'Bangladesh Bank', 'IOM', 'ILO', 'BIISS'],
    originalUrl: 'https://www.biiss.org',
    readTime: '6 min read',
    tags: ['Remittance', 'Labor Diplomacy', 'NRB Welfare', 'Foreign Exchange', 'Vocational Training']
  },
  {
    id: 'intel-017',
    title: 'Strategic Autonomy in Cyberspace: Protecting Critical National Infrastructure (CNI)',
    source: 'BIPSS (Bangladesh Institute of Peace and Security Studies)',
    sourceTier: 'bd-strategic',
    publishedAt: '2026-08-05',
    pillar: 'defense-peacekeeping',
    impactLevel: 'High Strategic Significance',
    executiveSummary: 'Security assessment of state-sponsored cyber threats targeting South Asian financial institutions, power grids, and submarine internet cables. Proposes an integrated national cyber defense architecture with regional CERT collaboration.',
    bangladeshSignificance: 'Guarantees the integrity of Bangladesh\'s digital sovereignty, preventing catastrophic financial breaches and securing sovereign government communications networks.',
    strategicRisks: [
      'Advanced Persistent Threat (APT) groups targeting central banking networks and SWIFT terminals.',
      'Disruption to national electrical SCADA systems during regional geopolitical crises.',
      'Severe domestic shortage of certified offensive-defensive cybersecurity professionals.'
    ],
    strategicOpportunities: [
      'Joining international cyber defense intelligence-sharing networks (FIRST, APCERT).',
      'Establishing a National Cyber Command with dedicated military and civilian rapid response teams.',
      'Mandating domestic data residency and local cloud backup infrastructure for critical national assets.'
    ],
    policyRecommendations: [
      'Enact strict annual red-teaming cyber security audits for all commercial banks and state utilities.',
      'Deploy sovereign quantum-resistant encryption algorithms for all diplomatic and defense channels.',
      'Fund a National Cyber Defense Academy to train 1,000 elite security engineers annually.'
    ],
    keyActors: ['National Cyber Security Agency (NCSA)', 'BIPSS', 'Bangladesh Computer Council', 'Armed Forces'],
    originalUrl: 'https://bipss.org.bd',
    readTime: '6 min read',
    tags: ['Cyber Warfare', 'Critical Infrastructure', 'Digital Sovereignty', 'BIPSS', 'Financial Security']
  },
  {
    id: 'intel-018',
    title: 'The Blue Economy Frontier: Seabed Hydrocarbon, Mariculture, and Ocean Governance',
    source: 'Chatham House',
    sourceTier: 'global-think-tank',
    publishedAt: '2026-08-01',
    pillar: 'bay-of-bengal',
    impactLevel: 'Medium Impact',
    executiveSummary: 'Evaluates the economic potential of Bangladesh\'s 118,813 square kilometer sovereign maritime area resolved via ITLOS verdicts against Myanmar (2012) and India (2014). Analyzes deep-sea gas exploration, offshore wind power, and commercial seaweed biotechnology.',
    bangladeshSignificance: 'Unlocks an estimated $1.2 trillion in maritime economic value, transforming the ocean into a primary driver of post-LDC gross domestic product growth.',
    strategicRisks: [
      'Insufficient deep-water seismic 2D/3D survey data deterring international oil companies (IOCs).',
      'Over-exploitation of coastal fisheries by unregistered commercial trawlers.',
      'Marine pollution and plastic debris accumulation in the Swatch of No Ground marine sanctuary.'
    ],
    strategicOpportunities: [
      'Auctioning offshore shallow and deep-water gas blocks under attractive production sharing contracts (PSCs).',
      'Building utility-scale offshore wind farms along the Kutubdia and Patuakhali coastal shelf.',
      'Developing pharmaceutical and cosmetic bioproducts from marine algae and deep-sea organisms.'
    ],
    policyRecommendations: [
      'Establish a dedicated Maritime & Blue Economy Ministry or Statutory Authority.',
      'Procure an oceanographic multi-purpose scientific research vessel for regular continental shelf mapping.',
      'Provide 10-year fiscal incentives for commercial mariculture, seaweed farming, and eco-tourism.'
    ],
    keyActors: ['Blue Economy Cell (MoFA)', 'Petrobangla', 'Chatham House', 'Chittagong University Marine Sciences'],
    originalUrl: 'https://www.chathamhouse.org',
    readTime: '7 min read',
    tags: ['Blue Economy', 'Offshore Gas', 'Mariculture', 'Ocean Governance', 'ITLOS']
  },
  {
    id: 'intel-019',
    title: 'Cross-Border Railway & Multimodal Connectivity: The Akhaura-Agartala and Khulna-Mongla Corridors',
    source: 'ORF (Observer Research Foundation)',
    sourceTier: 'regional-think-tank',
    publishedAt: '2026-07-28',
    pillar: 'regional-multilateralism',
    impactLevel: 'Medium Impact',
    executiveSummary: 'Reviews the operational performance of newly commissioned dual-gauge rail links between Bangladesh and India. Details freight transit volumes, revenue sharing models, and passenger travel facilitation.',
    bangladeshSignificance: 'Generates recurring sovereign transit fee revenues, slashes transportation times between Dhaka and Northeast India from 31 hours to 10 hours, and binds regional economies in mutual interdependence.',
    strategicRisks: [
      'Unequal bilateral transit benefits if transit fee structures are miscalculated.',
      'Local passenger train congestion on single-track trunk routes awaiting double-tracking.',
      'Customs clearance delays at integrated land checkpoints.'
    ],
    strategicOpportunities: [
      'Connecting Nepal and Bhutan directly to Mongla and Chittagong ports via trans-India rail corridors.',
      'Transforming Bangladesh Railway into a profitable international freight logistics operator.',
      'Expanding industrial supply chains along the border economic zones.'
    ],
    policyRecommendations: [
      'Complete the double-tracking and electrification of the Dhaka-Chittagong-Sylhet rail corridors.',
      'Implement electronic cargo tracking systems (ECTS) for all containerized transit freight.',
      'Review and optimize bilateral transit tariff structures annually to ensure mutual economic win-win.'
    ],
    keyActors: ['Bangladesh Railway', 'Indian Railways', 'Ministry of Railways', 'ORF'],
    originalUrl: 'https://www.orfonline.org',
    readTime: '5 min read',
    tags: ['Rail Diplomacy', 'Transit Corridor', 'Regional Connectivity', 'BBIN', 'Mongla Port']
  },
  {
    id: 'intel-020',
    title: 'Global Geopolitical Realignments and Nuclear Energy Diplomacy: The Rooppur NPP Case',
    source: 'CSIS (Center for Strategic and International Studies)',
    sourceTier: 'global-think-tank',
    publishedAt: '2026-07-24',
    pillar: 'power-balancing',
    impactLevel: 'High Strategic Significance',
    executiveSummary: 'Examines the strategic and technological dimensions of the 2,400 MW Rooppur Nuclear Power Plant constructed with Rosatom. Explores nuclear fuel supply agreements, spent fuel return protocols to Russia, and international safety compliance with the IAEA.',
    bangladeshSignificance: 'Elevates Bangladesh into the prestigious global club of nuclear energy-producing nations, providing baseload electricity while managing complex bilateral financial settlements amid international sanctions.',
    strategicRisks: [
      'International banking sanctions complicating payment settlement mechanisms with Russian entities.',
      'High safety and radiation monitoring requirements requiring permanent technical expertise.',
      'Disposal and secure transport of radioactive spent fuel rods.'
    ],
    strategicOpportunities: [
      'Adding 2,400 MW of reliable, zero-emission baseload power to the national industrial grid.',
      'Developing a world-class cadre of nuclear physicists and safety engineers in Bangladesh.',
      'Exploring small modular reactors (SMRs) for coastal industrial desalination and power.'
    ],
    policyRecommendations: [
      'Maintain strict, transparent compliance with International Atomic Energy Agency (IAEA) safeguards.',
      'Establish a trilateral nuclear safety cooperation pact with India and Russia for emergency readiness.',
      'Diversify financial escrow clearing mechanisms in alternative non-sanctioned reserve currencies.'
    ],
    keyActors: ['Bangladesh Atomic Energy Commission (BAEC)', 'Rosatom', 'IAEA', 'CSIS'],
    originalUrl: 'https://www.csis.org',
    readTime: '8 min read',
    tags: ['Rooppur NPP', 'Nuclear Diplomacy', 'Energy Security', 'IAEA', 'Rosatom']
  },
  {
    id: 'intel-021',
    title: 'Diplomacy of Public Health & Vaccine Sovereignty: Post-Pandemic Biotech Architecture',
    source: 'The Diplomat',
    sourceTier: 'ir-journals',
    publishedAt: '2026-07-20',
    pillar: 'trade-ldc',
    impactLevel: 'Medium Impact',
    executiveSummary: 'Analyzes Bangladesh\'s pharmaceutical manufacturing capability (98% domestic self-sufficiency) and its expansion into mRNA vaccine production, monoclonal antibodies, and active pharmaceutical ingredient (API) synthesis.',
    bangladeshSignificance: 'Establishes Bangladesh as the "pharmacy of the developing world," providing affordable lifesaving medicines to over 140 countries across Africa, Latin America, and Asia.',
    strategicRisks: [
      'Impending post-LDC expiration of TRIPS patent exemptions requiring costly licensing agreements.',
      'Stringent regulatory inspection standards (US FDA, EU GMP, WHO Prequalification) for high-end exports.',
      'Dependence on imported raw chemical active pharmaceutical ingredients from China and India.'
    ],
    strategicOpportunities: [
      'Operationalizing the Munshiganj API Industrial Park to achieve 50% raw chemical self-reliance.',
      'Signing contract manufacturing joint ventures with leading European and American biotech innovators.',
      'Leading global South initiatives for affordable biosimilar medicine distribution.'
    ],
    policyRecommendations: [
      'Establish a National Drug Regulatory Authority with Level 4 WHO Maturity certification.',
      'Create a specialized Intellectual Property Rights (IPR) Legal Advisory Cell in the Commerce Ministry.',
      'Provide R&D matching grants for clinical trials and biologic drug development.'
    ],
    keyActors: ['Directorate General of Drug Administration (DGDA)', 'BAPI', 'WHO', 'The Diplomat'],
    originalUrl: 'https://thediplomat.com',
    readTime: '6 min read',
    tags: ['Pharmaceuticals', 'TRIPS Waiver', 'Vaccine Diplomacy', 'Health Sovereignty', 'API Park']
  },
  {
    id: 'intel-022',
    title: 'Soft Power, Cultural Diplomacy, and Diaspora Engagement in Contemporary Foreign Policy',
    source: 'BIISS (Bangladesh Institute of International and Strategic Studies)',
    sourceTier: 'bd-strategic',
    publishedAt: '2026-07-16',
    pillar: 'regional-multilateralism',
    impactLevel: 'Medium Impact',
    executiveSummary: 'Explores the utilization of International Mother Language Day (February 21), Nobel laureates, world-class cricket, UNESCO intangible heritage (Jamdani, Shital Pati, Rickshaw Art), and second-generation diaspora communities in projecting a progressive global image of Bangladesh.',
    bangladeshSignificance: 'Transforms cultural richness and grassroots innovation into measurable foreign policy influence, goodwill, and international institutional leverage.',
    strategicRisks: [
      'Fragmented cultural promotion efforts across different ministries without a unified national brand.',
      'Insufficient institutional funding for cultural centers in key global capitals (London, New York, Tokyo).',
      'Negative stereotypes regarding natural disasters and poverty in foreign media narratives.'
    ],
    strategicOpportunities: [
      'Establishing "Bangladesh Houses" and Cultural Institutes in leading world metropolitan centers.',
      'Engaging high-achieving diaspora youth in Silicon Valley, Wall Street, and European academia.',
      'Leveraging global recognition of Bangladesh\'s microfinance and social business innovations.'
    ],
    policyRecommendations: [
      'Formulate a comprehensive National Public and Cultural Diplomacy Strategy.',
      'Create an annual "Global Youth Fellowship for Bangladesh Studies" for foreign researchers.',
      'Appoint accomplished diaspora leaders as Honorary Cultural and Investment Ambassadors.'
    ],
    keyActors: ['MoFA Public Diplomacy Wing', 'UNESCO', 'Ministry of Cultural Affairs', 'BIISS'],
    originalUrl: 'https://www.biiss.org',
    readTime: '5 min read',
    tags: ['Soft Power', 'Cultural Diplomacy', 'Public Diplomacy', 'Diaspora', 'Nation Branding']
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

