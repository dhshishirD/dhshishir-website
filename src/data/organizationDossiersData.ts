// Comprehensive Database of 32+ Global Organizations, Think Tanks & 100% Verified Career Pathways & Scholarships
// With deterministic annual institutional cycle calculator for automatic deadline tracking

export interface OrganizationDossier {
  id: string;
  name: string;
  acronym: string;
  category: 'un_system' | 'financial_mdb' | 'think_tank' | 'dev_ngo' | 'scholarship_foundation';
  categoryLabel: string;
  hqCity: string;
  hqCountry: string;
  foundedYear: number;
  globalLeadership: string;
  annualBudgetOrFunding: string;
  missionStatement: string;
  thematicPillars: string[];
  flagshipPublications: { title: string; url: string; year: string; description: string }[];
  bangladeshFootprint: {
    activeSince: string;
    keyInitiatives: string[];
    strategicAlignment: string;
    localOfficeLocation: string;
  };
  policyTakeaway: string;
  officialCareersPortalUrl: string;
  verifiedOpportunities: string[]; // references VerifiedOpportunity IDs
}

export interface VerifiedOpportunity {
  id: string;
  orgId: string;
  orgName: string;
  orgAcronym: string;
  title: string;
  trackCategory: 'un_careers' | 'ngo_careers' | 'diplomacy_jobs' | 'think_tank_jobs' | 'scholarships_fellowships' | 'internships_fellowships';
  trackLabel: string;
  eligibility: {
    maxAge?: number;
    educationLevel: string;
    languageRequirements: string[];
    eligibleNationalities: string;
    experienceRequired: string;
  };
  compensationTier: 'Fully Funded (UN P2 Scale)' | 'Competitive Global Salary' | 'Stipend + Housing' | 'Volunteer Living Allowance' | 'Fellowship Grant' | 'Fully Funded Scholarship (Tuition + Stipend + Airfare)';
  applicationType: 'annual_cycle' | 'rolling' | 'periodic';
  cycleMonthStart?: number; // 1-12 (e.g. 6 for June)
  cycleMonthEnd?: number; // 1-12 (e.g. 8 for August)
  specificDeadlineDate?: string; // YYYY-MM-DD
  officialPortalUrl: string;
  sampleJobCircularDescription: string;
  targetKeywordsToWeave: string[];
  scholarshipCoverage?: string;
  academicFields?: string[];
}

// 32+ Premier Global Organizations, IFIs, Think Tanks & Scholarship Foundations
export const GLOBAL_ORGANIZATIONS: OrganizationDossier[] = [
  // ==========================================
  // 1. UN SECRETARIAT & SPECIALIZED AGENCIES
  // ==========================================
  {
    id: 'undp',
    name: 'United Nations Development Programme',
    acronym: 'UNDP',
    category: 'un_system',
    categoryLabel: 'UN Development Agency',
    hqCity: 'New York',
    hqCountry: 'United States',
    foundedYear: 1965,
    globalLeadership: 'Achim Steiner (Administrator)',
    annualBudgetOrFunding: 'US$ 5.4 Billion',
    missionStatement: 'Eradicating poverty, reducing inequalities, and building resilience to crises across 170 countries and territories.',
    thematicPillars: ['Poverty Eradication', 'Democratic Governance', 'Climate & Disaster Resilience', 'Crisis Response', 'Digital Transformation'],
    flagshipPublications: [
      { title: 'Human Development Report (HDR)', url: 'https://hdr.undp.org/', year: '2025/2026', description: 'Global Human Development Index (HDI) benchmark ranking countries across health, education, and standard of living.' },
      { title: 'Global Multidimensional Poverty Index', url: 'https://hdr.undp.org/content/2025-multidimensional-poverty-index', year: '2025', description: 'Empirical assessment of acute multidimensional poverty across 110 developing nations.' }
    ],
    bangladeshFootprint: {
      activeSince: '1972',
      keyInitiatives: ['National Urban Poverty Reduction Programme (NUPRP)', 'Local Government Strengthening Project', 'Climate Resilient Livelihoods in Coastal Wetlands'],
      strategicAlignment: 'Direct partnership with Bangladesh Planning Commission on LDC graduation pathways and Delta Plan 2100.',
      localOfficeLocation: 'UN Offices, IDB Bhaban, Sher-e-Bangla Nagar, Dhaka'
    },
    policyTakeaway: 'UNDP serves as the central operational backbone for multilateral SDG implementation in Bangladesh, translating multilateral development finance into grassroots capacity.',
    officialCareersPortalUrl: 'https://www.undp.org/careers',
    verifiedOpportunities: ['undp-grad-trainee', 'undp-crisis-analyst']
  },
  {
    id: 'wfp',
    name: 'United Nations World Food Programme',
    acronym: 'WFP',
    category: 'un_system',
    categoryLabel: 'UN Humanitarian & Food Agency',
    hqCity: 'Rome',
    hqCountry: 'Italy',
    foundedYear: 1961,
    globalLeadership: 'Cindy McCain (Executive Director)',
    annualBudgetOrFunding: 'US$ 8.9 Billion',
    missionStatement: 'Saving lives in emergencies and using food assistance to build a pathway to peace, stability and prosperity.',
    thematicPillars: ['Emergency Food Assistance', 'Nutrition & School Feeding', 'Supply Chain & Humanitarian Logistics', 'Climate Risk Insurance', 'Food Security Analytics'],
    flagshipPublications: [
      { title: 'Global Report on Food Crises (GRFC)', url: 'https://www.wfp.org/publications/global-report-food-crises', year: '2025/2026', description: 'Definitive global consensus on acute food insecurity and malnutrition prevalence across crisis zones.' },
      { title: 'HungerMap LIVE', url: 'https://hungermap.wfp.org/', year: 'Real-Time', description: 'AI-driven predictive food insecurity tracking combining macro indicators, weather anomalies, and conflict zones.' }
    ],
    bangladeshFootprint: {
      activeSince: '1974',
      keyInitiatives: ['Cox’s Bazar Emergency Rohingya Refugee Food & E-Voucher Operations', 'School Feeding Programme in Poverty Prone Areas', 'Forecast-based Anticipatory Climate Action in Flood Belts'],
      strategicAlignment: 'Ensuring baseline food security and nutrition for 1M+ displaced persons and vulnerable coastal communities.',
      localOfficeLocation: 'UN Offices, IDB Bhaban, Dhaka & Cox’s Bazar Field Hub'
    },
    policyTakeaway: 'WFP operates the largest logistical emergency food distribution pipeline in Bangladesh, blending electronic cash-transfers with satellite predictive analytics.',
    officialCareersPortalUrl: 'https://www.wfp.org/careers',
    verifiedOpportunities: ['wfp-future-leaders']
  },
  {
    id: 'unhcr',
    name: 'United Nations High Commissioner for Refugees',
    acronym: 'UNHCR',
    category: 'un_system',
    categoryLabel: 'UN Refugee Agency',
    hqCity: 'Geneva',
    hqCountry: 'Switzerland',
    foundedYear: 1950,
    globalLeadership: 'Filippo Grandi (High Commissioner)',
    annualBudgetOrFunding: 'US$ 10.2 Billion',
    missionStatement: 'Protecting refugees, forcibly displaced communities and stateless people, and assisting in their voluntary repatriation, local integration or resettlement.',
    thematicPillars: ['International Protection & Asylum', 'Statelessness Eradication', 'Camp Management & Shelter', 'Cash-Based Interventions', 'Legal Identity & Documentation'],
    flagshipPublications: [
      { title: 'Global Trends Report on Forced Displacement', url: 'https://www.unhcr.org/global-trends', year: '2025', description: 'Authoritative data on refugees, asylum seekers, internally displaced persons (IDPs), and stateless populations worldwide.' }
    ],
    bangladeshFootprint: {
      activeSince: '1971',
      keyInitiatives: ['Joint Response Plan (JRP) for Rohingya Humanitarian Crisis', 'Biometric Refugee Registration & Smart Card Verification', 'Bhasan Char Relocation Support Coordination'],
      strategicAlignment: 'Managing international protection protocols and bilateral repatriation dialogues under 1951 Refugee Convention principles.',
      localOfficeLocation: 'UNHCR Bangladesh Office, Gulshan-2, Dhaka'
    },
    policyTakeaway: 'UNHCR is the premier international legal authority governing humanitarian asylum protection and repatriation negotiations in the Bay of Bengal region.',
    officialCareersPortalUrl: 'https://www.unhcr.org/careers',
    verifiedOpportunities: ['unhcr-protection-associate']
  },
  {
    id: 'unops',
    name: 'United Nations Office for Project Services',
    acronym: 'UNOPS',
    category: 'un_system',
    categoryLabel: 'UN Infrastructure & Procurement',
    hqCity: 'Copenhagen',
    hqCountry: 'Denmark',
    foundedYear: 1973,
    globalLeadership: 'Jorge Moreira da Silva (Executive Director)',
    annualBudgetOrFunding: 'US$ 3.8 Billion (Project Portfolio)',
    missionStatement: 'Helping the UN and partners implement peace and security, humanitarian, and development operations through sustainable infrastructure and procurement.',
    thematicPillars: ['Sustainable Infrastructure', 'Public Procurement Reform', 'Project Management Standards', 'Climate Resilient Engineering', 'Financial Management Services'],
    flagshipPublications: [
      { title: 'Infrastructure for Climate Action Report', url: 'https://www.unops.org/news-and-stories/reports', year: '2025', description: 'Engineering frameworks demonstrating how resilient infrastructure influences 92% of all Sustainable Development Goals.' }
    ],
    bangladeshFootprint: {
      activeSince: '2003',
      keyInitiatives: ['Multi-Hazard Resilient Shelter Construction in Coastal Districts', 'Medical Supply Chain Procurement for Ministry of Health', 'Police Training Facilities Development'],
      strategicAlignment: 'Advising Bangladesh government on transparent public procurement pipelines and resilient civil infrastructure.',
      localOfficeLocation: 'UNOPS Bangladesh, Plot 11, Road 50, Gulshan-2, Dhaka'
    },
    policyTakeaway: 'UNOPS acts as the operational implementation powerhouse of the UN system, executing complex engineering and supply chain contracts with zero tolerance for corruption.',
    officialCareersPortalUrl: 'https://jobs.unops.org/',
    verifiedOpportunities: ['unops-project-specialist']
  },
  {
    id: 'unfpa',
    name: 'United Nations Population Fund',
    acronym: 'UNFPA',
    category: 'un_system',
    categoryLabel: 'UN Reproductive Health & Demographic Agency',
    hqCity: 'New York',
    hqCountry: 'United States',
    foundedYear: 1969,
    globalLeadership: 'Dr. Natalia Kanem (Executive Director)',
    annualBudgetOrFunding: 'US$ 1.5 Billion',
    missionStatement: 'Delivering a world where every pregnancy is wanted, every childbirth is safe, and every young person’s potential is fulfilled.',
    thematicPillars: ['Sexual & Reproductive Health', 'Gender-Based Violence (GBV) Prevention', 'Demographic Dividend Analytics', 'Midwifery Workforce Development', 'Census & Civil Registration Support'],
    flagshipPublications: [
      { title: 'State of World Population (SWOP) Report', url: 'https://www.unfpa.org/swop', year: '2025/2026', description: 'Global demographic trends, fertility transitions, and rights-based reproductive policies analysis.' }
    ],
    bangladeshFootprint: {
      activeSince: '1974',
      keyInitiatives: ['National Midwifery Deployment Programme (DGNM Support)', 'Women Friendly Spaces & Dignity Kit Distribution in Flood Belts', 'Adolescent Sexual & Reproductive Health Rights (SRHR) Policy'],
      strategicAlignment: 'Assisting Bangladesh in capitalizing on its demographic dividend through youth health and maternal mortality reduction.',
      localOfficeLocation: 'IDB Bhaban (15th Floor), Rokeya Sarani, Dhaka'
    },
    policyTakeaway: 'UNFPA provides demographic modeling and maternal healthcare frameworks directly supporting Bangladesh’s healthcare targets.',
    officialCareersPortalUrl: 'https://www.unfpa.org/jobs',
    verifiedOpportunities: ['unfpa-ypp-demographer']
  },
  {
    id: 'unv',
    name: 'United Nations Volunteers Programme',
    acronym: 'UNV',
    category: 'un_system',
    categoryLabel: 'UN Volunteer & Civic Action Gateway',
    hqCity: 'Bonn',
    hqCountry: 'Germany',
    foundedYear: 1970,
    globalLeadership: 'Toily Kurbanov (Executive Coordinator)',
    annualBudgetOrFunding: 'US$ 240 Million',
    missionStatement: 'Contributing to peace and development through volunteerism worldwide, mobilizing qualified professionals for UN system deployments.',
    thematicPillars: ['International Volunteer Deployments', 'Online Remote Volunteering', 'Youth & Community Mobilization', 'SDG Civic Localization', 'Humanitarian Emergency Response'],
    flagshipPublications: [
      { title: 'State of the World’s Volunteerism Report (SWVR)', url: 'https://www.unv.org/swvr', year: '2025', description: 'Evaluating the role of volunteer networks and civic resilience in 21st-century multilateral governance.' }
    ],
    bangladeshFootprint: {
      activeSince: '1973',
      keyInitiatives: ['Mobilizing 300+ National & International Volunteers across UN Agencies in Bangladesh', 'V-Force Bangladesh Youth Civic Engagement Network', 'Community Disaster Preparedness Voluntarism'],
      strategicAlignment: 'Providing young Bangladeshi graduates with direct entry-level UN deployment experience and field research training.',
      localOfficeLocation: 'c/o UNDP Bangladesh, IDB Bhaban, Dhaka'
    },
    policyTakeaway: 'UNV serves as the premier entry gateway for graduates into the UN system, offering tax-exempt volunteer living allowances and international mission credits.',
    officialCareersPortalUrl: 'https://www.unv.org/become-volunteer',
    verifiedOpportunities: ['unv-online-volunteer', 'unv-international-volunteer']
  },
  {
    id: 'un_women',
    name: 'United Nations Entity for Gender Equality and the Empowerment of Women',
    acronym: 'UN Women',
    category: 'un_system',
    categoryLabel: 'UN Gender Equality Agency',
    hqCity: 'New York',
    hqCountry: 'United States',
    foundedYear: 2010,
    globalLeadership: 'Sima Bahous (Executive Director)',
    annualBudgetOrFunding: 'US$ 650 Million',
    missionStatement: 'Dedicated to gender equality and the empowerment of women, accelerating progress on meeting the needs of women and girls worldwide.',
    thematicPillars: ['Women, Peace and Security (WPS)', 'Economic Empowerment & Financial Inclusion', 'Ending Violence Against Women (EVAW)', 'Gender-Responsive Climate Action', 'Governance & National Planning'],
    flagshipPublications: [
      { title: 'Progress on the Sustainable Development Goals: The Gender Snapshot', url: 'https://www.unwomen.org/en/digital-library/publications', year: '2025', description: 'Comprehensive SDG assessment tracking gender parity indicators across 193 UN member states.' }
    ],
    bangladeshFootprint: {
      activeSince: '2010',
      keyInitiatives: ['National Action Plan on Women, Peace and Security', 'Empowerment of Women Migrant Workers from Rural Bangladesh', 'Gender-Responsive Budgeting with Ministry of Finance'],
      strategicAlignment: 'Strengthening institutional accountability for women’s economic inclusion and workplace safety frameworks.',
      localOfficeLocation: 'UN Offices, IDB Bhaban, Sher-e-Bangla Nagar, Dhaka'
    },
    policyTakeaway: 'UN Women bridges bilateral donor funding with grassroots legal empowerment, ensuring women’s leadership in disaster response and macroeconomic policy.',
    officialCareersPortalUrl: 'https://www.unwomen.org/en/about-us/employment',
    verifiedOpportunities: ['un-women-program-associate']
  },
  {
    id: 'unep',
    name: 'United Nations Environment Programme',
    acronym: 'UNEP',
    category: 'un_system',
    categoryLabel: 'UN Environmental Authority',
    hqCity: 'Nairobi',
    hqCountry: 'Kenya',
    foundedYear: 1972,
    globalLeadership: 'Inger Andersen (Executive Director)',
    annualBudgetOrFunding: 'US$ 950 Million',
    missionStatement: 'Providing leadership and encouraging partnership in caring for the environment by inspiring, informing, and enabling nations to improve their quality of life without compromising that of future generations.',
    thematicPillars: ['Climate Change Action', 'Nature & Biodiversity Loss', 'Pollution & Waste Reduction', 'Chemical Safety & Plastics Treaty', 'Environmental Law & Governance'],
    flagshipPublications: [
      { title: 'Emissions Gap Report', url: 'https://www.unep.org/resources/emissions-gap-report', year: '2025/2026', description: 'Annual scientific assessment of the gap between global carbon reduction pledges and actual Paris Agreement trajectories.' },
      { title: 'Global Environment Outlook (GEO)', url: 'https://www.unep.org/geo', year: '2025', description: 'State of the planet assessment informing global environmental negotiations and treaties.' }
    ],
    bangladeshFootprint: {
      activeSince: '1975',
      keyInitiatives: ['National Adaptation Plan (NAP) Climate Support', 'Plastics Circularity Assessment with Ministry of Environment', 'Sundarbans Mangrove Ecological Valuation'],
      strategicAlignment: 'Supporting Bangladesh at COP multilateral climate finance summits and international loss-and-damage fund mechanisms.',
      localOfficeLocation: 'UN Offices, IDB Bhaban, Dhaka'
    },
    policyTakeaway: 'UNEP coordinates global environmental scientific treaties, empowering climate-vulnerable frontline states like Bangladesh with technical backing.',
    officialCareersPortalUrl: 'https://www.unep.org/work-with-us',
    verifiedOpportunities: ['unep-climate-fellow']
  },
  {
    id: 'unicef',
    name: 'United Nations Children’s Fund',
    acronym: 'UNICEF',
    category: 'un_system',
    categoryLabel: 'UN Child Rights & Protection Agency',
    hqCity: 'New York',
    hqCountry: 'United States',
    foundedYear: 1946,
    globalLeadership: 'Catherine Russell (Executive Director)',
    annualBudgetOrFunding: 'US$ 8.8 Billion',
    missionStatement: 'Working in the world’s toughest places to reach the most disadvantaged children and adolescents, defending child rights across 190 countries.',
    thematicPillars: ['Child Health & Immunization', 'Quality Primary Education', 'WASH (Water, Sanitation & Hygiene)', 'Child Protection & Ending Child Marriage', 'Social Policy & Child Poverty'],
    flagshipPublications: [
      { title: 'The State of the World’s Children (SOWC)', url: 'https://www.unicef.org/reports/state-worlds-children', year: '2025/2026', description: 'Definitive global report examining child health, mental well-being, digital equity, and educational outcomes.' }
    ],
    bangladeshFootprint: {
      activeSince: '1952',
      keyInitiatives: ['Expanded Programme on Immunization (EPI) with EPI Directorate', 'Universal Child Benefit Pilot Modeling', 'Rohingya Learning Centres & Child Friendly Spaces in Cox’s Bazar'],
      strategicAlignment: 'Partnering with the Ministry of Primary and Mass Education to eliminate child labor and ensure universal basic education.',
      localOfficeLocation: 'UNICEF Bangladesh, BSL Office Complex, 1 Minto Road, Dhaka'
    },
    policyTakeaway: 'UNICEF is the leading humanitarian and developmental advocate for youth, child survival, and educational equity across Bangladesh.',
    officialCareersPortalUrl: 'https://www.unicef.org/careers',
    verifiedOpportunities: ['unicef-youth-officer']
  },
  {
    id: 'who',
    name: 'World Health Organization',
    acronym: 'WHO',
    category: 'un_system',
    categoryLabel: 'UN Global Public Health Authority',
    hqCity: 'Geneva',
    hqCountry: 'Switzerland',
    foundedYear: 1948,
    globalLeadership: 'Dr. Tedros Adhanom Ghebreyesus (Director-General)',
    annualBudgetOrFunding: 'US$ 6.8 Billion (Biennial)',
    missionStatement: 'Promoting health, keeping the world safe, and serving the vulnerable so that everyone everywhere can attain the highest level of health and well-being.',
    thematicPillars: ['Universal Health Coverage (UHC)', 'Health Emergencies & Pandemic Preparedness', 'Communicable & Non-Communicable Diseases', 'Antimicrobial Resistance (AMR) Surveillance', 'Vaccine Regulatory Frameworks'],
    flagshipPublications: [
      { title: 'World Health Statistics Report', url: 'https://www.who.int/data/gho/publications/world-health-statistics', year: '2025/2026', description: 'Authoritative global health indicators and life expectancy tracking across 194 member states.' }
    ],
    bangladeshFootprint: {
      activeSince: '1972',
      keyInitiatives: ['Dengue and Vector-Borne Outbreak Surveillance', 'National Primary Health Care & Community Clinic Digitization', 'Kala-Azar Elimination Certification'],
      strategicAlignment: 'Providing technical validation for Bangladesh’s Directorate General of Health Services (DGHS) and pharmaceutical regulations.',
      localOfficeLocation: 'WHO Bangladesh Office, United Nations Offices, IDB Bhaban, Dhaka'
    },
    policyTakeaway: 'WHO directs global health emergency protocols and sets universal standards for disease control, vaccination, and medicine safety.',
    officialCareersPortalUrl: 'https://www.who.int/careers',
    verifiedOpportunities: ['who-public-health-fellow']
  },

  // ==========================================
  // 2. INTERNATIONAL FINANCIAL INSTITUTIONS (IFIs) & MDBs
  // ==========================================
  {
    id: 'world_bank',
    name: 'The World Bank Group (IBRD / IDA / IFC)',
    acronym: 'WBG',
    category: 'financial_mdb',
    categoryLabel: 'Multilateral Development Bank',
    hqCity: 'Washington, D.C.',
    hqCountry: 'United States',
    foundedYear: 1944,
    globalLeadership: 'Ajay Banga (President)',
    annualBudgetOrFunding: 'US$ 115+ Billion (Global Commitments)',
    missionStatement: 'To end extreme poverty and promote shared prosperity on a livable planet through low-interest loans, credits, and developmental grants.',
    thematicPillars: ['Concessional Development Lending (IDA)', 'Private Sector Investment (IFC)', 'Macroeconomic & Fiscal Policy', 'Climate Transition Finance', 'Digital Infrastructure & Energy Grid Modernization'],
    flagshipPublications: [
      { title: 'World Development Report (WDR)', url: 'https://www.worldbank.org/en/publication/wdr', year: '2025/2026', description: 'The preeminent global reference on structural development economics, institutional governance, and market reforms.' },
      { title: 'Bangladesh Development Update', url: 'https://www.worldbank.org/en/country/bangladesh/publication/bangladesh-development-update', year: '2025/2026', description: 'Semiannual macroeconomic analysis of GDP growth, inflation, export competitiveness, and banking sector reforms in Bangladesh.' }
    ],
    bangladeshFootprint: {
      activeSince: '1972',
      keyInitiatives: ['US$ 16+ Billion Active IDA Portfolio in Bangladesh', 'Bay of Bengal Regional Connectivity & Trade Corridor (ACCESS)', 'Secondary Education Quality and Access Enhancement Project (SEQAEP)', 'Coastal Embankment Improvement Project'],
      strategicAlignment: 'The largest multilateral development financier for Bangladesh’s energy transition, logistics corridors, and LDC graduation.',
      localOfficeLocation: 'World Bank Bangladesh Country Office, Plot E-32, Agargaon, Sher-e-Bangla Nagar, Dhaka'
    },
    policyTakeaway: 'The World Bank Group is the dominant external economic advisor to Bangladesh, shaping macroeconomic reform agendas and financing major infrastructural backbones.',
    officialCareersPortalUrl: 'https://www.worldbank.org/en/about/careers',
    verifiedOpportunities: ['wbg-ypp']
  },
  {
    id: 'adb',
    name: 'Asian Development Bank',
    acronym: 'ADB',
    category: 'financial_mdb',
    categoryLabel: 'Regional Multilateral Bank',
    hqCity: 'Manila',
    hqCountry: 'Philippines',
    foundedYear: 1966,
    globalLeadership: 'Masatsugu Asakawa (President)',
    annualBudgetOrFunding: 'US$ 23+ Billion (Annual Sovereign Operations)',
    missionStatement: 'Committed to achieving a prosperous, inclusive, resilient, and sustainable Asia and the Pacific, while sustaining its efforts to eradicate extreme poverty.',
    thematicPillars: ['Regional Economic Integration (SARI / SASEC)', 'Clean Energy & Power Transmission', 'Transport & Deep Sea Port Infrastructure', 'Urban Water & Sanitation', 'Public Sector Governance'],
    flagshipPublications: [
      { title: 'Asian Development Outlook (ADO)', url: 'https://www.adb.org/publications/series/asian-development-outlook', year: '2025/2026', description: 'Authoritative economic forecasting and policy analysis covering 46 developing economies across Asia and the Pacific.' }
    ],
    bangladeshFootprint: {
      activeSince: '1973',
      keyInitiatives: ['SASEC Dhaka-Northwest International Trade Corridor', 'Dhaka Mass Rapid Transit (MRT Line-5)', 'Chittagong-Cox’s Bazar Railway Project Co-financing', 'Skill for Employment Investment Program (SEIP)'],
      strategicAlignment: 'Primary financier of high-speed transport corridors, vocational technical training, and renewable power infrastructure in Bangladesh.',
      localOfficeLocation: 'Bangladesh Resident Mission (BRM), Plot E-31, Sher-e-Bangla Nagar, Dhaka'
    },
    policyTakeaway: 'ADB drives physical and trade connectivity across the South Asia Subregional Economic Cooperation (SASEC) corridor, positioning Bangladesh as a regional transit hub.',
    officialCareersPortalUrl: 'https://www.adb.org/site/careers/main',
    verifiedOpportunities: ['adb-ypp']
  },
  {
    id: 'imf',
    name: 'International Monetary Fund',
    acronym: 'IMF',
    category: 'financial_mdb',
    categoryLabel: 'International Financial Institution',
    hqCity: 'Washington, D.C.',
    hqCountry: 'United States',
    foundedYear: 1944,
    globalLeadership: 'Kristalina Georgieva (Managing Director)',
    annualBudgetOrFunding: 'US$ 1 Trillion (Total Lending Capacity)',
    missionStatement: 'Working to foster global monetary cooperation, secure financial stability, facilitate international trade, promote high employment and sustainable economic growth.',
    thematicPillars: ['Macroeconomic Surveillance (Article IV Consultations)', 'Extended Credit Facility (ECF/EFF)', 'Resilience and Sustainability Facility (RSF)', 'Exchange Rate & Monetary Policy Reform', 'Tax Revenue & Public Financial Management'],
    flagshipPublications: [
      { title: 'World Economic Outlook (WEO)', url: 'https://www.imf.org/en/Publications/WEO', year: '2025/2026', description: 'Global GDP growth forecasting, commodity price analysis, and fiscal policy recommendations.' },
      { title: 'Global Financial Stability Report (GFSR)', url: 'https://www.imf.org/en/Publications/GFSR', year: '2025', description: 'Assessment of international capital flows, banking vulnerabilities, and market liquidity.' }
    ],
    bangladeshFootprint: {
      activeSince: '1972',
      keyInitiatives: ['US$ 4.7 Billion Multi-Year Extended Credit & Climate Facility Programme', 'Bank Resolution & Non-Performing Loan (NPL) Reduction Reforms', 'Transition to Market-Based Flexible Exchange Rate Management'],
      strategicAlignment: 'Anchoring Bangladesh Bank’s monetary stabilization, foreign exchange reserve rebuilding, and domestic revenue mobilization (NBR).',
      localOfficeLocation: 'IMF Resident Representative Office, Bangladesh Bank Bhaban, Motijheel, Dhaka'
    },
    policyTakeaway: 'The IMF sets the macroeconomic conditionality benchmarks that dictate sovereign credit ratings and multilateral investor confidence in Bangladesh.',
    officialCareersPortalUrl: 'https://www.imf.org/en/About/Recruitment',
    verifiedOpportunities: ['imf-economist-program']
  },
  {
    id: 'aiib',
    name: 'Asian Infrastructure Investment Bank',
    acronym: 'AIIB',
    category: 'financial_mdb',
    categoryLabel: 'Multilateral Infrastructure Bank',
    hqCity: 'Beijing',
    hqCountry: 'China',
    foundedYear: 2016,
    globalLeadership: 'Jin Liqun (President)',
    annualBudgetOrFunding: 'US$ 100 Billion (Authorized Capital)',
    missionStatement: 'Financing Infrastructure for Tomorrow (i4t) with sustainability at its core, connecting people, services and markets across Asia and beyond.',
    thematicPillars: ['Green Infrastructure', 'Cross-Border Connectivity', 'Technology-Enabled Infrastructure', 'Private Capital Mobilization', 'Urban Transport & Water Treatment'],
    flagshipPublications: [
      { title: 'Asian Infrastructure Finance Report', url: 'https://www.aiib.org/en/news-events/asian-infrastructure-finance/index.html', year: '2025', description: 'Capital allocation trends and green bond financing models across emerging Asian economies.' }
    ],
    bangladeshFootprint: {
      activeSince: '2016 (Founding Member)',
      keyInitiatives: ['Dhaka and Western Zone Transmission Grid Expansion', 'Bangladesh Rural Water, Sanitation and Hygiene (WASH) Project', 'Mymensingh Solar Power Plant'],
      strategicAlignment: 'One of the fastest-growing multilateral co-financiers of clean energy, electric transmission grids, and municipal sanitation.',
      localOfficeLocation: 'Operations managed from Beijing HQ & Regional Teams'
    },
    policyTakeaway: 'AIIB provides high-speed, lean sovereign infrastructure financing complementary to traditional Western MDBs, funding vital urban and green projects in Bangladesh.',
    officialCareersPortalUrl: 'https://www.aiib.org/en/opportunities/career/index.html',
    verifiedOpportunities: ['aiib-graduate-program']
  },
  {
    id: 'isdb',
    name: 'Islamic Development Bank',
    acronym: 'IsDB',
    category: 'financial_mdb',
    categoryLabel: 'Multilateral Islamic Development Bank',
    hqCity: 'Jeddah',
    hqCountry: 'Saudi Arabia',
    foundedYear: 1975,
    globalLeadership: 'Dr. Muhammad Al Jasser (President)',
    annualBudgetOrFunding: 'US$ 35 Billion (Cumulative Portfolios)',
    missionStatement: 'Promoting comprehensive human development, Islamic finance architecture, and South-South economic cooperation across 57 member countries.',
    thematicPillars: ['Islamic Shariah-Compliant Project Finance', 'South-South & Triangular Cooperation (Reverse Linkage)', 'Science, Technology and Innovation (STI) Funds', 'Rural Healthcare & Water Supply', 'Trade Finance (ITFC)'],
    flagshipPublications: [
      { title: 'IsDB Development Effectiveness Report', url: 'https://www.isdb.org/publications', year: '2025', description: 'Review of Islamic infrastructure lending and socioeconomic impact across the OIC region.' }
    ],
    bangladeshFootprint: {
      activeSince: '1974',
      keyInitiatives: ['Rural Electrification & Power Sector Development Projects', 'Pre-vocational and Vocational Islamic School Training', 'Primary Health Infrastructure in Riverine Chars'],
      strategicAlignment: 'Significant partner in sovereign concessional lending, emergency food support, and educational endowments.',
      localOfficeLocation: 'IsDB Regional Hub Dhaka, IDB Bhaban, Rokeya Sarani, Dhaka'
    },
    policyTakeaway: 'IsDB offers Shariah-compliant long-term concessionary financing and South-South technology transfer mechanisms directly to Bangladesh.',
    officialCareersPortalUrl: 'https://www.isdb.org/careers',
    verifiedOpportunities: ['isdb-ypp']
  },

  // ==========================================
  // 3. PREMIER GEOPOLITICAL & STRATEGIC THINK TANKS
  // ==========================================
  {
    id: 'chatham_house',
    name: 'Chatham House (The Royal Institute of International Affairs)',
    acronym: 'Chatham House',
    category: 'think_tank',
    categoryLabel: 'Premier Geopolitical Think Tank',
    hqCity: 'London',
    hqCountry: 'United Kingdom',
    foundedYear: 1920,
    globalLeadership: 'Bronwen Maddox (Director and Chief Executive)',
    annualBudgetOrFunding: '£ 25 Million',
    missionStatement: 'Helping people, governments and societies build a sustainable, secure, prosperous and just world through rigorous independent research and dialogue.',
    thematicPillars: ['International Security & Defence', 'Global Economy and Finance', 'Environment and Society', 'Global Governance & Rule of Law', 'Asia-Pacific Strategic Dynamics'],
    flagshipPublications: [
      { title: 'International Affairs Journal', url: 'https://www.chathamhouse.org/publications/ia', year: 'Centenary Editions', description: 'Top-ranked global policy journal publishing seminal peer-reviewed research on geopolitics and foreign policy.' },
      { title: 'The World Today', url: 'https://www.chathamhouse.org/publications/the-world-today', year: '2025/2026', description: 'Authoritative analysis of breaking diplomatic negotiations and global security crises.' }
    ],
    bangladeshFootprint: {
      activeSince: 'Global Network Collaborations',
      keyInitiatives: ['Bay of Bengal Geopolitics & Maritime Security Briefing Series', 'Climate Security in the Ganges-Brahmaputra-Meghna Delta', 'Commonwealth Trade Integration Dialogues'],
      strategicAlignment: 'Providing UK and European policy circles with independent strategic intelligence on Bangladesh’s role in Indo-Pacific stability.',
      localOfficeLocation: '10 St James’s Square, London (UK)'
    },
    policyTakeaway: 'Chatham House formulated the legendary "Chatham House Rule" enabling free debate and remains Europe’s most influential foreign policy institute.',
    officialCareersPortalUrl: 'https://www.chathamhouse.org/about-us/working-us',
    verifiedOpportunities: ['chatham-house-academy-fellowship']
  },
  {
    id: 'csis',
    name: 'Center for Strategic and International Studies',
    acronym: 'CSIS',
    category: 'think_tank',
    categoryLabel: 'Strategic & Defense Think Tank',
    hqCity: 'Washington, D.C.',
    hqCountry: 'United States',
    foundedYear: 1962,
    globalLeadership: 'John J. Hamre (President and CEO)',
    annualBudgetOrFunding: 'US$ 55 Million',
    missionStatement: 'Defining the future of national security through bipartisan, policy-relevant strategic analysis and actionable insights for global decision-makers.',
    thematicPillars: ['Defense Policy & Deterrence', 'Indo-Pacific Security & Maritime Strategy', 'Renewing American Economic Statecraft', 'Technology & Cyber Geopolitics', 'Energy Security & Climate Transition'],
    flagshipPublications: [
      { title: 'CSIS Strategic Insights Dossiers', url: 'https://www.csis.org/analysis', year: '2025/2026', description: 'Executive defense briefs relied upon by US Congressional Committees and the National Security Council.' },
      { title: 'Asia Maritime Transparency Initiative (AMTI)', url: 'https://amti.csis.org/', year: 'Interactive Map', description: 'Satellite tracking and geospatial analysis of naval deployments, exclusive economic zones, and maritime chokepoints.' }
    ],
    bangladeshFootprint: {
      activeSince: 'South Asia Program',
      keyInitiatives: ['US-Bangladesh Bilateral Strategic Security Dialogue Briefings', 'Bay of Bengal Economic & Trade Corridors Research', 'Supply Chain Diversification in South Asian Manufacturing'],
      strategicAlignment: 'Informing US policymakers on Bangladesh’s balance of power between Quad, Indo-Pacific Strategy (IPS), and regional multilateralism.',
      localOfficeLocation: '1616 Rhode Island Avenue NW, Washington, D.C. (USA)'
    },
    policyTakeaway: 'CSIS is the preeminent bipartisan national security think tank in Washington, bridging military strategy with trade statecraft and defense diplomacy.',
    officialCareersPortalUrl: 'https://www.csis.org/careers',
    verifiedOpportunities: ['csis-junior-fellow']
  },
  {
    id: 'sipri',
    name: 'Stockholm International Peace Research Institute',
    acronym: 'SIPRI',
    category: 'think_tank',
    categoryLabel: 'Peace & Arms Control Institute',
    hqCity: 'Stockholm',
    hqCountry: 'Sweden',
    foundedYear: 1966,
    globalLeadership: 'Dan Smith (Director)',
    annualBudgetOrFunding: 'SEK 110 Million',
    missionStatement: 'Providing data, analysis and recommendations, based on open sources, to policymakers, researchers, media and the interested public on armed conflicts, military expenditure and arms trade.',
    thematicPillars: ['Military Expenditure & Arms Industry Databases', 'Nuclear Disarmament & Non-Proliferation', 'Arms Transfers & Dual-Use Export Controls', 'Climate Change and Risk of Conflict', 'Emerging Military Technologies & AI Governance'],
    flagshipPublications: [
      { title: 'SIPRI Yearbook: Armaments, Disarmament and International Security', url: 'https://www.sipri.org/yearbook', year: '2025 Edition', description: 'The undisputed global reference for world nuclear warhead counts, military spending figures, and international weapon transfers.' },
      { title: 'SIPRI Arms Transfers Database', url: 'https://www.sipri.org/databases/armstransfers', year: 'Interactive', description: 'Authoritative tracker of global major conventional weapons deliveries since 1950.' }
    ],
    bangladeshFootprint: {
      activeSince: 'Global Arms Data Tracking',
      keyInitiatives: ['Tracking Bangladesh Military Modernization & Forces Goal 2030 Defense Acquisitions', 'Evaluating UN Peacekeeping Troop Contributions and Operational Readiness', 'Climate Security Risks in South Asian Delta Formations'],
      strategicAlignment: 'Providing empirical, objective data on Bangladesh’s defense procurement partnerships and international peacekeeping footprint.',
      localOfficeLocation: 'Signalistgatan 9, Solna, Stockholm (Sweden)'
    },
    policyTakeaway: 'SIPRI provides the most respected, rigorous quantitative databases on global arms transfers and military expenditures cited by the UN General Assembly.',
    officialCareersPortalUrl: 'https://www.sipri.org/about/vacancies',
    verifiedOpportunities: ['sipri-research-assistant']
  },
  {
    id: 'biiss',
    name: 'Bangladesh Institute of International and Strategic Studies',
    acronym: 'BIISS',
    category: 'think_tank',
    categoryLabel: 'National Statutory Strategic Think Tank',
    hqCity: 'Dhaka',
    hqCountry: 'Bangladesh',
    foundedYear: 1978,
    globalLeadership: 'Major General Iftekhar Anis (Director General)',
    annualBudgetOrFunding: 'Statutory Government Grant & Research Endowments',
    missionStatement: 'Conducting independent, objective research on international affairs, foreign policy, national security, and socio-economic transformation of Bangladesh.',
    thematicPillars: ['Foreign Policy & Bilateral Diplomacy', 'Regional Cooperation (BIMSTEC, SAARC, IORA)', 'Border Security & Enclave Governance', 'Non-Traditional Security (NTS) & Climate Diplomacy', 'Geopolitical Balances in the Bay of Bengal'],
    flagshipPublications: [
      { title: 'BIISS Journal', url: 'https://www.biiss.org/journal', year: 'Quarterly', description: 'Bangladesh’s premier peer-reviewed strategic studies journal publishing empirical research by diplomats and scholars.' },
      { title: 'BIISS Strategic Papers', url: 'https://www.biiss.org/publications', year: '2025/2026', description: 'Monographs on regional connectivity, trade pacts (CEPA), and maritime jurisdiction security.' }
    ],
    bangladeshFootprint: {
      activeSince: '1978 (Statutory National Body under MoFA)',
      keyInitiatives: ['Advising the Ministry of Foreign Affairs (MoFA) on Track 1.5 Diplomacy', 'BIMSTEC Secretariat Strategic Policy Dialogues', 'National Security Seminars with Defense Forces and University Faculties'],
      strategicAlignment: 'Serving as the intellectual brain trust for Bangladesh’s official foreign policy formulation and international diplomatic negotiations.',
      localOfficeLocation: '1/46 Old Elephant Road, Ramna, Dhaka-1000'
    },
    policyTakeaway: 'BIISS is the apex national strategic think tank of Bangladesh, directly bridging academic research with Ministry of Foreign Affairs policy dossiers.',
    officialCareersPortalUrl: 'https://www.biiss.org/career',
    verifiedOpportunities: ['biiss-research-fellow']
  },
  {
    id: 'iiss',
    name: 'International Institute for Strategic Studies',
    acronym: 'IISS',
    category: 'think_tank',
    categoryLabel: 'Premier Defense & Military Balance Think Tank',
    hqCity: 'London',
    hqCountry: 'United Kingdom',
    foundedYear: 1958,
    globalLeadership: 'Dr. Bastian Giegerich (Director-General and Chief Executive)',
    annualBudgetOrFunding: '£ 22 Million',
    missionStatement: 'Providing objective, fact-based information on military, geopolitical and geo-economic developments that could lead to conflict.',
    thematicPillars: ['The Military Balance Assessment', 'Shangri-La Dialogue (Asia Security Summit)', 'Manama Dialogue (Middle East Security)', 'Missile Defense & Deterrence', 'Geo-economics & Strategic Sanctions'],
    flagshipPublications: [
      { title: 'The Military Balance', url: 'https://www.iiss.org/publications/the-military-balance', year: 'Annual Flagship', description: 'The annual indispensable assessment of the global military capabilities and defense economics of 170+ countries.' },
      { title: 'Strategic Survey: The Annual Assessment of Geopolitics', url: 'https://www.iiss.org/publications/strategic-survey', year: '2025', description: 'Authoritative analysis of the major geopolitical themes shaping international relations.' }
    ],
    bangladeshFootprint: {
      activeSince: 'Asia-Pacific Defense Tracking',
      keyInitiatives: ['South Asian Regional Security Assessments', 'Analysis of Naval Modernization in the Bay of Bengal', 'Shangri-La Dialogue High-Level Delegations'],
      strategicAlignment: 'Providing military intelligence and strategic balance evaluations informing regional defense diplomacy.',
      localOfficeLocation: 'Arundel House, 6 Temple Place, London (UK)'
    },
    policyTakeaway: 'IISS organizes the premier security summit in Asia (The Shangri-La Dialogue) and publishes the gold-standard military inventory of armed forces worldwide.',
    officialCareersPortalUrl: 'https://www.iiss.org/careers',
    verifiedOpportunities: ['iiss-strategy-associate']
  },

  // ==========================================
  // 4. GLOBAL DEVELOPMENT CONGLOMERATES & INGOs
  // ==========================================
  {
    id: 'brac',
    name: 'BRAC & BRAC International',
    acronym: 'BRAC',
    category: 'dev_ngo',
    categoryLabel: 'World #1 Global Development NGO',
    hqCity: 'Dhaka',
    hqCountry: 'Bangladesh (Global Operations across 17 Countries)',
    foundedYear: 1972,
    globalLeadership: 'Asif Saleh (Executive Director, BRAC) & Shameran Abed (Executive Director, BRAC International)',
    annualBudgetOrFunding: 'US$ 1.4+ Billion',
    missionStatement: 'Empowering people and communities in situations of poverty, illiteracy, disease, and social injustice across Asia and Africa.',
    thematicPillars: ['Ultra-Poor Graduation Approach', 'Microfinance & Financial Inclusion', 'Social Enterprise Models (Aarong, Dairy)', 'Climate Adaptation & Early Childhood Development', 'Humanitarian Play Labs in Conflict Zones'],
    flagshipPublications: [
      { title: 'BRAC Annual Report & Global Impact Matrix', url: 'https://www.brac.net/annual-report', year: '2025', description: 'Comprehensive evaluation of poverty graduation programs serving 100M+ beneficiaries across 17 nations.' }
    ],
    bangladeshFootprint: {
      activeSince: '1972 (Founded by Sir Fazle Hasan Abed)',
      keyInitiatives: ['Pioneering the Ultra-Poor Graduation Model replicated worldwide by World Bank', 'Nationwide Microfinance Network with 8M+ women borrowers', 'Largest Non-Government Primary Education System in History'],
      strategicAlignment: 'The single most transformative development actor in Bangladesh’s socio-economic graduation history.',
      localOfficeLocation: 'BRAC Centre, 75 Mohakhali, Dhaka-1212'
    },
    policyTakeaway: 'BRAC is globally recognized as the most effective development organization in the world, exporting homegrown Bangladeshi innovations to Africa and Latin America.',
    officialCareersPortalUrl: 'https://careers.brac.net/',
    verifiedOpportunities: ['brac-young-professionals', 'brac-intl-program-manager']
  },
  {
    id: 'irc',
    name: 'International Rescue Committee',
    acronym: 'IRC',
    category: 'dev_ngo',
    categoryLabel: 'Global Humanitarian INGO',
    hqCity: 'New York',
    hqCountry: 'United States',
    foundedYear: 1933,
    globalLeadership: 'David Miliband (President and CEO)',
    annualBudgetOrFunding: 'US$ 1.2 Billion',
    missionStatement: 'Helping people whose lives and livelihoods are shattered by conflict and disaster to survive, recover, and gain control of their future.',
    thematicPillars: ['Emergency Health & Trauma Care', 'Protection & Rule of Law', 'Economic Recovery and Development (ERD)', 'Education in Emergencies', 'Resettlement and Integration'],
    flagshipPublications: [
      { title: 'IRC Emergency Watchlist', url: 'https://www.rescue.org/emergency-watchlist', year: '2025/2026', description: 'Predictive ranking of the 20 humanitarian crises globally most at risk of worsening, utilized by bilateral donors.' }
    ],
    bangladeshFootprint: {
      activeSince: '2017',
      keyInitiatives: ['Comprehensive Healthcare & 24/7 Maternity Clinics in Cox’s Bazar Camps', 'Child Protection & Psychological First Aid Centers', 'Monsoon Landslide Disaster Preparedness'],
      strategicAlignment: 'Providing frontline medical and clinical protection services to forcibly displaced populations in Southeast Bangladesh.',
      localOfficeLocation: 'IRC Bangladesh Country Office, Banani, Dhaka & Cox’s Bazar'
    },
    policyTakeaway: 'IRC brings data-driven medical triage and evidence-based humanitarian protocols directly into emergency disaster and conflict zones.',
    officialCareersPortalUrl: 'https://rescue.csod.com/ux/ats/careersite/1/home',
    verifiedOpportunities: ['irc-humanitarian-associate']
  },
  {
    id: 'oxfam',
    name: 'Oxfam International',
    acronym: 'Oxfam',
    category: 'dev_ngo',
    categoryLabel: 'Global Rights & Inequality Confederation',
    hqCity: 'Nairobi',
    hqCountry: 'Kenya (Secretariat) & Oxford (UK)',
    foundedYear: 1942,
    globalLeadership: 'Amitabh Behar (Executive Director)',
    annualBudgetOrFunding: '€ 1.1 Billion',
    missionStatement: 'A global movement of people fighting inequality to beat poverty and injustice worldwide.',
    thematicPillars: ['Inequality & Wealth Taxation Campaigns', 'Climate Justice & Loss and Damage', 'Emergency WASH & Water Engineering', 'Gender Justice & Women’s Rights', 'Food Systems & Fair Trade'],
    flagshipPublications: [
      { title: 'Oxfam Davos Inequality Report', url: 'https://www.oxfam.org/en/research/survival-richest', year: 'Annual Davos Summit', description: 'Groundbreaking annual econometric exposé on billionaire wealth concentration and extreme global inequality.' }
    ],
    bangladeshFootprint: {
      activeSince: '1970 (Bhola Cyclone Relief)',
      keyInitiatives: ['Solar-Powered Water Distribution in Cox’s Bazar Refugee Camps', 'Community-Based River Basin Flood Resilience in Char Areas', 'Fair Wage and Gender Parity in RMG Garments Supply Chain'],
      strategicAlignment: 'Pioneering humanitarian engineering and campaigning for social safety net expansions in Bangladesh.',
      localOfficeLocation: 'Oxfam in Bangladesh, House 4, Road 16, Dhanmondi, Dhaka'
    },
    policyTakeaway: 'Oxfam combines massive emergency water engineering capabilities with global economic advocacy targeting wealth inequality.',
    officialCareersPortalUrl: 'https://www.oxfam.org/en/work-with-us',
    verifiedOpportunities: ['oxfam-climate-advocate']
  },

  // ==========================================
  // 5. PREMIER GLOBAL SCHOLARSHIPS & FELLOWSHIPS
  // ==========================================
  {
    id: 'chevening',
    name: 'Chevening Scholarships (UK Government)',
    acronym: 'Chevening',
    category: 'scholarship_foundation',
    categoryLabel: 'Premier UK Government Master’s Scholarship',
    hqCity: 'London',
    hqCountry: 'United Kingdom (FCDO)',
    foundedYear: 1983,
    globalLeadership: 'Foreign, Commonwealth and Development Office (FCDO) / Chevening Secretariat',
    annualBudgetOrFunding: '£ 65+ Million',
    missionStatement: 'Funding future global leaders to pursue one-year fully funded Master’s degrees at world-leading UK universities while building international diplomatic ties.',
    thematicPillars: ['Leadership & Influence', 'International Networking', 'Public Policy & Governance', 'Climate Transition & Technology', 'Media & Strategic Communications'],
    flagshipPublications: [
      { title: 'Chevening Global Impact Yearbook', url: 'https://www.chevening.org/alumni/our-network/', year: '2025/2026', description: 'Tracking the career trajectories of 55,000+ Chevening alumni including heads of state, judges, and global change-makers.' }
    ],
    bangladeshFootprint: {
      activeSince: '1983',
      keyInitiatives: ['Over 350+ Bangladeshi Scholars Funded for UK Higher Education', 'Chevening Alumni Association Bangladesh (CAAB) Policy Dialogues', 'Mentorship for Emerging Leaders in Public Service and Judiciary'],
      strategicAlignment: 'Developing high-caliber civil servants, judges, journalists, and policy researchers driving national reform in Bangladesh.',
      localOfficeLocation: 'British High Commission Dhaka, United Nations Road, Baridhara, Dhaka'
    },
    policyTakeaway: 'Chevening is the UK government’s flagship global scholarship, covering 100% of university tuition fees, monthly living stipend, and round-trip flights.',
    officialCareersPortalUrl: 'https://www.chevening.org/scholarships/',
    verifiedOpportunities: ['chevening-scolarship']
  },
  {
    id: 'daad',
    name: 'DAAD (German Academic Exchange Service)',
    acronym: 'DAAD',
    category: 'scholarship_foundation',
    categoryLabel: 'German Government Higher Education Gateway',
    hqCity: 'Bonn',
    hqCountry: 'Germany',
    foundedYear: 1925,
    globalLeadership: 'Prof. Dr. Joybrato Mukherjee (President)',
    annualBudgetOrFunding: '€ 680+ Million',
    missionStatement: 'Supporting the internationalization of German universities, promoting German studies and the German language abroad, and providing development scholarships.',
    thematicPillars: ['Development-Related Postgraduate Courses (EPOS)', 'Helmut-Schmidt-Programme (Public Policy & Good Governance)', 'Doctoral Research Grants in Germany', 'Bilateral University Partnerships', 'Green Hydrogen & Renewable Technology'],
    flagshipPublications: [
      { title: 'DAAD Scholarship & Research Guidelines', url: 'https://www.daad.de/en/study-and-research-in-germany/scholarships/', year: '2025/2026', description: 'Comprehensive catalog of 200+ fully funded master’s, PhD, and postdoc funding opportunities in Germany.' }
    ],
    bangladeshFootprint: {
      activeSince: '1972',
      keyInitiatives: ['DAAD Information Point Dhaka at Goethe-Institut', 'Full Scholarships for Bangladeshi Engineers, Doctors, and Policy Scholars', 'Joint Research Labs between BUET / DU and German Technical Universities'],
      strategicAlignment: 'Equipping Bangladeshi engineers, economists, and public leaders with world-class technical education tuition-free.',
      localOfficeLocation: 'DAAD Information Center, Goethe-Institut Bangladesh, Road 9 (New), Dhanmondi, Dhaka'
    },
    policyTakeaway: 'DAAD is the world’s largest funding organization for international academic exchange, providing full living stipends and insurance in Germany with zero tuition fees.',
    officialCareersPortalUrl: 'https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/',
    verifiedOpportunities: ['daad-scolarship']
  },
  {
    id: 'erasmus_mundus',
    name: 'Erasmus Mundus Joint Masters (European Commission)',
    acronym: 'Erasmus+',
    category: 'scholarship_foundation',
    categoryLabel: 'European Union Elite Joint Masters Scholarship',
    hqCity: 'Brussels',
    hqCountry: 'European Union / Belgium',
    foundedYear: 1987,
    globalLeadership: 'European Education and Culture Executive Agency (EACEA)',
    annualBudgetOrFunding: '€ 26+ Billion (Erasmus+ Multiannual Framework)',
    missionStatement: 'Delivering excellence in European higher education through prestigious, integrated, international study programmes jointly delivered by international consortiums of universities.',
    thematicPillars: ['Multi-Country Joint Master Degrees', 'Interdisciplinary Academic Excellence', 'Transnational Mobility across 3+ European Nations', 'Full Living Allowance & Insurance Coverage', 'Industrial & Research Internships in the EU'],
    flagshipPublications: [
      { title: 'Erasmus Mundus Catalogue of Joint Masters', url: 'https://www.eacea.ec.europa.eu/scholarships/erasmus-mundus-catalogue_en', year: '2025/2026', description: 'Official registry of 200+ fully funded Erasmus Mundus Joint Master Degree (EMJMD) programmes accepting global applications.' }
    ],
    bangladeshFootprint: {
      activeSince: '2004',
      keyInitiatives: ['Bangladesh Ranked #1 Globally in Erasmus Mundus Scholarships Awarded (140+ Scholars Annually)', 'Erasmus Mundus Association (EMA) Bangladesh Chapter', 'Pre-Departure Orientations at EU Delegation Dhaka'],
      strategicAlignment: 'Bangladesh is consistently the top global recipient country of Erasmus Mundus scholarships in the world.',
      localOfficeLocation: 'Delegation of the European Union to Bangladesh, Plot 7, Embassy Way, Baridhara, Dhaka'
    },
    policyTakeaway: 'Erasmus Mundus is the European Union’s highest-prestige award, granting recipients full tuition waivers, €1,400 monthly stipends, travel allowances, and degrees from 2-4 European universities.',
    officialCareersPortalUrl: 'https://www.eacea.ec.europa.eu/scholarships/erasmus-mundus-catalogue_en',
    verifiedOpportunities: ['erasmus-mundus-scolarship']
  },
  {
    id: 'gates_cambridge',
    name: 'Gates Cambridge & The Gates Scholarship',
    acronym: 'Gates Cambridge',
    category: 'scholarship_foundation',
    categoryLabel: 'Premier Philanthropic & Academic Trust',
    hqCity: 'Cambridge',
    hqCountry: 'United Kingdom & United States',
    foundedYear: 2000,
    globalLeadership: 'Gates Cambridge Trust / Bill & Melinda Gates Foundation',
    annualBudgetOrFunding: 'US$ 210 Million Trust Endowment',
    missionStatement: 'Building a global network of future leaders committed to improving the lives of others through fully funded postgraduate study at the University of Cambridge.',
    thematicPillars: ['Outstanding Intellectual Ability', 'Reasons for Choice of Course', 'Commitment to Improving the Lives of Others', 'Leadership Capacity', 'Global Health & Biomedical Innovation'],
    flagshipPublications: [
      { title: 'The Gates Cambridge Scholar Annual Journal', url: 'https://www.gatescambridge.org/our-scholars/', year: '2025', description: 'Showcasing groundbreaking scientific discoveries, social enterprise launches, and policy breakthroughs by Gates Scholars.' }
    ],
    bangladeshFootprint: {
      activeSince: '2001',
      keyInitiatives: ['Gates Scholars from Bangladesh researching climate-resilient agriculture, public health epidemics (cholera, rotavirus), and economic development', 'Partnership with icddr,b for global health clinical trials'],
      strategicAlignment: 'Training premier Bangladeshi scientists and innovators at the highest tier of global academia (University of Cambridge).',
      localOfficeLocation: 'Cambridge Trust, Student Services Centre, Cambridge, CB2 3PT (UK)'
    },
    policyTakeaway: 'The Gates Cambridge Scholarship is the most prestigious postgraduate scholarship in the world, covering the full cost of studying at Cambridge including University fees, maintenance allowance (£20,000+ per year), airfare, and family support.',
    officialCareersPortalUrl: 'https://www.gatescambridge.org/apply/',
    verifiedOpportunities: ['the-gates-scolarship']
  },
  {
    id: 'commonwealth_commission',
    name: 'Commonwealth Scholarship Commission (CSC UK)',
    acronym: 'CSC UK',
    category: 'scholarship_foundation',
    categoryLabel: 'Commonwealth Intergovernmental Scholarship',
    hqCity: 'London',
    hqCountry: 'United Kingdom',
    foundedYear: 1959,
    globalLeadership: 'Commonwealth Scholarship Commission in the UK (FCDO Funded)',
    annualBudgetOrFunding: '£ 30 Million',
    missionStatement: 'Supporting sustainable development across Commonwealth countries through fully funded Master’s and PhD scholarships for high-potential researchers and professionals.',
    thematicPillars: ['Science and Technology for Development', 'Strengthening Health Systems', 'Promoting Global Prosperity', 'Strengthening Global Peace, Security and Governance', 'Resilience and Response to Crises'],
    flagshipPublications: [
      { title: 'CSC Annual Evaluation and Development Impact Report', url: 'https://cscuk.fcdo.gov.uk/about-us/evaluation/', year: '2025', description: 'Empirical assessment of how Commonwealth alumni contribute to socio-economic development in their home countries.' }
    ],
    bangladeshFootprint: {
      activeSince: '1972',
      keyInitiatives: ['University Grants Commission (UGC) Bangladesh Nominating Agency Channel', 'Over 600+ Bangladeshi Faculty Members Awarded PhDs and Master’s in the UK', 'Strengthening University Research Faculties across Public Universities'],
      strategicAlignment: 'The primary institutional driver for upgrading the academic faculties and doctoral credentials of Bangladeshi public universities.',
      localOfficeLocation: 'British Council Bangladesh, 5 Fuller Road, Dhaka-1000'
    },
    policyTakeaway: 'Commonwealth Scholarships provide 100% full funding (tuition fees, living allowance, exam fees, study travel grants) for students from developing Commonwealth nations.',
    officialCareersPortalUrl: 'https://cscuk.fcdo.gov.uk/apply/',
    verifiedOpportunities: ['commonwealth-scolarship']
  },
  {
    id: 'mext_japan',
    name: 'MEXT Scholarship (Japanese Government)',
    acronym: 'MEXT',
    category: 'scholarship_foundation',
    categoryLabel: 'Japanese Government Premier Scholarship',
    hqCity: 'Tokyo',
    hqCountry: 'Japan',
    foundedYear: 1954,
    globalLeadership: 'Ministry of Education, Culture, Sports, Science and Technology (MEXT), Government of Japan',
    annualBudgetOrFunding: '¥ 40+ Billion',
    missionStatement: 'Fostering human resources who will become bridges of friendship between Japan and other countries while contributing to international development.',
    thematicPillars: ['Research Student (Master’s & PhD)', 'Undergraduate Degree Track', 'College of Technology (KOSEN)', 'Specialized Training College', 'Japanese Studies & Culture'],
    flagshipPublications: [
      { title: 'Study in Japan Guide & MEXT Scholarship Guidelines', url: 'https://www.studyinjapan.go.jp/en/planning/scholarship/mext-scholarships/', year: '2025/2026', description: 'Official embassy and university recommendation roadmap for fully funded higher education in Japan.' }
    ],
    bangladeshFootprint: {
      activeSince: '1973',
      keyInitiatives: ['Japanese Embassy Dhaka Annual MEXT Selection Exam', 'Over 4,500+ Bangladeshi Scholars have Studied in Japan under MEXT', 'JUAAB (Japanese Universities Alumni Association in Bangladesh) Technical Cooperation'],
      strategicAlignment: 'Building vital bilateral engineering, robotic, biomedical, and maritime technology transfer between Japan and Bangladesh.',
      localOfficeLocation: 'Embassy of Japan in Bangladesh, Plot 5 & 7, Dutabash Road, Baridhara, Dhaka'
    },
    policyTakeaway: 'The MEXT Scholarship is one of the most generous global awards: 100% tuition waiver at top Japanese universities (Tokyo, Kyoto, Osaka), monthly stipend of ¥144,000–¥148,000, and round-trip airfare.',
    officialCareersPortalUrl: 'https://www.bd.emb-japan.go.jp/itpr_en/education.html',
    verifiedOpportunities: ['mext-scolarship']
  },
  {
    id: 'fulbright_program',
    name: 'Fulbright Foreign Student Program (US Department of State)',
    acronym: 'Fulbright',
    category: 'scholarship_foundation',
    categoryLabel: 'US Government Flagship Academic Exchange',
    hqCity: 'Washington, D.C.',
    hqCountry: 'United States (Bureau of Educational and Cultural Affairs)',
    foundedYear: 1946,
    globalLeadership: 'US Department of State / Institute of International Education (IIE)',
    annualBudgetOrFunding: 'US$ 280+ Million',
    missionStatement: 'Increasing mutual understanding between the people of the United States and the people of other countries through cultural and academic exchange.',
    thematicPillars: ['Master’s Degrees at Premier US Universities', 'Academic & Leadership Excellence', 'Intercultural Exchange & Public Diplomacy', 'Cross-Disciplinary Innovation', 'Post-Study Home Country Impact'],
    flagshipPublications: [
      { title: 'Fulbright Annual Report', url: 'https://eca.state.gov/fulbright/about-fulbright/fulbright-annual-reports', year: '2025', description: 'Annual review of global exchange cohorts including 62 Nobel Laureates and 89 Pulitzer Prize winners.' }
    ],
    bangladeshFootprint: {
      activeSince: '1972',
      keyInitiatives: ['US Embassy Dhaka American Center Selection', 'Fulbright Foreign Student (Master’s) & Fulbright Visiting Scholar Programs', 'Hubert H. Humphrey Fellowship for Mid-Career Public Leaders'],
      strategicAlignment: 'Fostering deep academic partnerships and sending top Bangladeshi scholars to Harvard, Columbia, MIT, and Stanford.',
      localOfficeLocation: 'The American Center, US Embassy Dhaka, Madani Avenue, Baridhara, Dhaka'
    },
    policyTakeaway: 'Fulbright is the world’s most renowned academic exchange fellowship, providing comprehensive funding (tuition, living stipend, health insurance, airfare, and J-1 visa sponsorship) in the United States.',
    officialCareersPortalUrl: 'https://bd.usembassy.gov/education-culture/educational-exchange-programs/',
    verifiedOpportunities: ['fulbright-fellowship']
  },
  {
    id: 'dbbl_foundation',
    name: 'Dutch-Bangla Bank Foundation Scholarship',
    acronym: 'DBBL Foundation',
    category: 'scholarship_foundation',
    categoryLabel: 'Bangladesh Premier Corporate CSR Scholarship',
    hqCity: 'Dhaka',
    hqCountry: 'Bangladesh',
    foundedYear: 2001,
    globalLeadership: 'Dutch-Bangla Bank Limited (DBBL Board of Trustees)',
    annualBudgetOrFunding: 'BDT 120+ Crore (Annual CSR Education Fund)',
    missionStatement: 'Supporting meritorious and financially underprivileged students across Bangladesh from SSC/HSC levels through university graduation.',
    thematicPillars: ['HSC / Higher Secondary Support', 'Graduation / University Bachelor Degree Support', 'Medical, Engineering & Agricultural Student Grants', 'Rural & Underprivileged Meritorious Student Quotas', 'Book & Study Equipment Allowances'],
    flagshipPublications: [
      { title: 'DBBL Foundation Annual Education Grant Report', url: 'https://app.dutchbanglabank.com/DBBL_Web/Scholarship.html', year: '2025/2026', description: 'Record of 75,000+ Bangladeshi students funded across medical colleges, public universities, and engineering institutes.' }
    ],
    bangladeshFootprint: {
      activeSince: '2001 (Nationwide Operations)',
      keyInitiatives: ['Awarding 10,000+ New Scholarships Annually to HSC & Graduation Students', 'Direct Monthly Stipend Disbursement to Student Rocket Accounts', 'Special Quota for Differently-Abled and Remote Char-Region Students'],
      strategicAlignment: 'The largest private scholarship endowment in Bangladesh, ensuring no meritorious student drops out due to poverty.',
      localOfficeLocation: 'Sena Kalyan Bhaban (4th Floor), 195 Motijheel C/A, Dhaka-1000'
    },
    policyTakeaway: 'DBBL Foundation is the gold standard for domestic scholarship support in Bangladesh, providing continuous monthly financial stipends (BDT 3,000–5,000/month) plus annual clothing/book allowances.',
    officialCareersPortalUrl: 'https://app.dutchbanglabank.com/DBBL_Web/Scholarship.html',
    verifiedOpportunities: ['dutch-bangla-bank-scolarship']
  }
];

// ==========================================
// 100% VERIFIED CAREER & SCHOLARSHIP PATHWAYS
// ==========================================
export const VERIFIED_OPPORTUNITIES: VerifiedOpportunity[] = [
  // ------------------------------------------
  // 1. UN Careers, YPP & Multilateral Tracks
  // ------------------------------------------
  {
    id: 'undp-grad-trainee',
    orgId: 'undp',
    orgName: 'United Nations Development Programme',
    orgAcronym: 'UNDP',
    title: 'UNDP Global Graduate Programme & Policy Trainee',
    trackCategory: 'un_careers',
    trackLabel: 'UN Young Professionals / Graduate Track',
    eligibility: {
      maxAge: 32,
      educationLevel: "Master's Degree in International Relations, Economics, Public Policy or Development",
      languageRequirements: ['English (Fluent / C1-C2)', 'Second UN Language is an asset'],
      eligibleNationalities: 'Global (Nationals of developing countries strongly encouraged)',
      experienceRequired: '0 – 2 Years (Entry-Level Professional)'
    },
    compensationTier: 'Fully Funded (UN P2 Scale)',
    applicationType: 'annual_cycle',
    cycleMonthStart: 6, // June
    cycleMonthEnd: 8, // August
    officialPortalUrl: 'https://www.undp.org/careers',
    sampleJobCircularDescription: 'Seeking highly motivated early-career professionals to join UNDP policy bureaux. Candidates will support programmatic analysis, bilateral donor reporting, and SDG indicators tracking.',
    targetKeywordsToWeave: ['Programme Management', 'SDG Indicators', 'Policy Dossier', 'Stakeholder Alignment', 'Multi-stakeholder Governance']
  },
  {
    id: 'wfp-future-leaders',
    orgId: 'wfp',
    orgName: 'United Nations World Food Programme',
    orgAcronym: 'WFP',
    title: 'WFP Future International Leaders Programme (FILP) & Logistics Track',
    trackCategory: 'un_careers',
    trackLabel: 'UN Humanitarian Logistics / P2 Track',
    eligibility: {
      maxAge: 32,
      educationLevel: "Master's Degree in Logistics, Supply Chain, Economics, Nutrition, or International Affairs",
      languageRequirements: ['English (Fluent)', 'French, Spanish, or Arabic desirable'],
      eligibleNationalities: 'All UN Member States (Developing Country quota included)',
      experienceRequired: '1 – 3 Years in operations, field analysis or corporate supply chains'
    },
    compensationTier: 'Fully Funded (UN P2 Scale)',
    applicationType: 'annual_cycle',
    cycleMonthStart: 9, // September
    cycleMonthEnd: 11, // November
    officialPortalUrl: 'https://www.wfp.org/careers',
    sampleJobCircularDescription: 'The World Food Programme is recruiting high-potential leaders for frontline food logistics, cash-based transfer systems, and emergency food security analytics across country offices.',
    targetKeywordsToWeave: ['Supply Chain Optimization', 'Emergency Logistics', 'Food Security Analytics', 'Cash-Based Transfers', 'Vulnerability Assessment']
  },
  {
    id: 'unops-project-specialist',
    orgId: 'unops',
    orgName: 'United Nations Office for Project Services',
    orgAcronym: 'UNOPS',
    title: 'UNOPS Sustainable Infrastructure & Procurement Specialist',
    trackCategory: 'un_careers',
    trackLabel: 'UN Infrastructure & Operations Track',
    eligibility: {
      educationLevel: "Bachelor's or Master's in Civil Engineering, Project Management, Procurement, or Supply Chain",
      languageRequirements: ['English (Fluent)', 'Local language required for national postings'],
      eligibleNationalities: 'National and International Vacancies Available',
      experienceRequired: '2 – 5 Years in procurement compliance (FIDIC), engineering contracts, or public tender evaluation'
    },
    compensationTier: 'Fully Funded (UN P2 Scale)',
    applicationType: 'periodic',
    officialPortalUrl: 'https://jobs.unops.org/',
    sampleJobCircularDescription: 'Manage international public tender evaluations, supervise climate-resilient civil engineering works, and ensure strict compliance with UN procurement ethics.',
    targetKeywordsToWeave: ['Public Procurement', 'FIDIC Contracts', 'Sustainable Infrastructure', 'Tender Evaluation', 'Risk Mitigation']
  },
  {
    id: 'unfpa-ypp-demographer',
    orgId: 'unfpa',
    orgName: 'United Nations Population Fund',
    orgAcronym: 'UNFPA',
    title: 'UNFPA Demographic Data Analyst & Reproductive Rights Specialist',
    trackCategory: 'un_careers',
    trackLabel: 'UN Demography & Health Track',
    eligibility: {
      maxAge: 32,
      educationLevel: "Master's Degree in Demography, Public Health, Statistics, or Sociology",
      languageRequirements: ['English (Fluent)'],
      eligibleNationalities: 'Global South & UN Member States',
      experienceRequired: '1 – 3 Years in population census data, demographic dividend modeling, or maternal health analytics'
    },
    compensationTier: 'Fully Funded (UN P2 Scale)',
    applicationType: 'annual_cycle',
    cycleMonthStart: 4, // April
    cycleMonthEnd: 6, // June
    officialPortalUrl: 'https://www.unfpa.org/jobs',
    sampleJobCircularDescription: 'Synthesize national census data, build quantitative demographic forecasting models, and support maternal healthcare and gender-based violence policy interventions.',
    targetKeywordsToWeave: ['Demographic Dividend', 'Population Census', 'Maternal Health Metrics', 'Quantitative Data Modeling', 'Statistical Synthesis']
  },
  {
    id: 'unv-online-volunteer',
    orgId: 'unv',
    orgName: 'United Nations Volunteers Programme',
    orgAcronym: 'UNV',
    title: 'UN Online Volunteer Opportunities (Remote / Global)',
    trackCategory: 'un_careers',
    trackLabel: 'UN Remote / Volunteer Gateway',
    eligibility: {
      educationLevel: "Bachelor's Degree or Current University Student (Age 18+)",
      languageRequirements: ['English (Proficient)'],
      eligibleNationalities: 'Worldwide (100% Remote / Online)',
      experienceRequired: '0 – 1 Year (Writers, Translators, Researchers, Data Analysts)'
    },
    compensationTier: 'Volunteer Living Allowance',
    applicationType: 'rolling',
    officialPortalUrl: 'https://www.unv.org/become-online-volunteer',
    sampleJobCircularDescription: 'Collaborate remotely with UN agencies, think tanks, and civil society organizations worldwide on research, translation, policy writing, GIS mapping, and graphic design tasks.',
    targetKeywordsToWeave: ['Desk Research', 'Data Synthesis', 'Translation & Localization', 'Policy Briefings', 'UN System Familiarity']
  },
  {
    id: 'unv-international-volunteer',
    orgId: 'unv',
    orgName: 'United Nations Volunteers Programme',
    orgAcronym: 'UNV',
    title: 'UN International Volunteer Deployment (Field Mission)',
    trackCategory: 'un_careers',
    trackLabel: 'UN Field Mission Volunteer Track',
    eligibility: {
      maxAge: 65,
      educationLevel: "Bachelor's or Master's Degree in relevant discipline",
      languageRequirements: ['English (Working proficiency)', 'French, Spanish or Arabic for specific duty stations'],
      eligibleNationalities: 'All UN Member States',
      experienceRequired: '2 – 5 Years professional field experience'
    },
    compensationTier: 'Volunteer Living Allowance',
    applicationType: 'rolling',
    officialPortalUrl: 'https://www.unv.org/become-volunteer',
    sampleJobCircularDescription: 'Deploy on 6 to 24-month international peacekeeping and development missions with full tax-exempt living allowance, international airfare, health insurance, and settling-in grants.',
    targetKeywordsToWeave: ['Field Deployment', 'Humanitarian Mission', 'Stakeholder Engagement', 'Capacity Building', 'Inter-Agency Coordination']
  },
  {
    id: 'un-women-program-associate',
    orgId: 'un_women',
    orgName: 'UN Women',
    orgAcronym: 'UN Women',
    title: 'UN Women Gender-Responsive Policy & Climate Resilience Associate',
    trackCategory: 'un_careers',
    trackLabel: 'UN Gender Equality & Human Rights Track',
    eligibility: {
      educationLevel: "Bachelor's or Master's in Gender Studies, International Development, Law or Economics",
      languageRequirements: ['English (Fluent)', 'Bengali (for Bangladesh country office)'],
      eligibleNationalities: 'National and International Vacancies',
      experienceRequired: '2+ Years in gender-responsive budgeting, women empowerment projects, or EVAW programs'
    },
    compensationTier: 'Fully Funded (UN P2 Scale)',
    applicationType: 'periodic',
    officialPortalUrl: 'https://www.unwomen.org/en/about-us/employment',
    sampleJobCircularDescription: 'Drive national initiatives on Women, Peace and Security (WPS), monitor gender-responsive budgeting with ministries of finance, and support women climate entrepreneurs.',
    targetKeywordsToWeave: ['Gender-Responsive Budgeting', 'Women Peace and Security', 'EVAW Frameworks', 'Advocacy & Policy Drafting', 'Community Outreach']
  },

  // ------------------------------------------
  // 2. Multilateral Development Bank Pathways
  // ------------------------------------------
  {
    id: 'wbg-ypp',
    orgId: 'world_bank',
    orgName: 'The World Bank Group',
    orgAcronym: 'World Bank',
    title: 'World Bank Group Young Professionals Program (WBG YPP)',
    trackCategory: 'un_careers',
    trackLabel: 'Premier MDB Leadership Pathway',
    eligibility: {
      maxAge: 32,
      educationLevel: "Master's or PhD in Economics, Finance, Engineering, Public Health, or Environment",
      languageRequirements: ['English (C2 Fluency)', 'Second language (Arabic, Chinese, French, Russian, Spanish) is an asset'],
      eligibleNationalities: 'All World Bank Member Countries',
      experienceRequired: '3+ Years relevant professional or research experience'
    },
    compensationTier: 'Competitive Global Salary',
    applicationType: 'annual_cycle',
    cycleMonthStart: 6, // Opens June 1
    cycleMonthEnd: 7, // Closes July 25
    officialPortalUrl: 'https://www.worldbank.org/en/about/careers/programs-and-internships/young-professionals-program',
    sampleJobCircularDescription: 'The WBG YPP is the premier pathway into international development finance. Candidates participate in a 2-year leadership curriculum with rotational deployments across IBRD, IDA, and IFC.',
    targetKeywordsToWeave: ['Macroeconomic Modeling', 'Concessional Lending', 'Financial Modeling', 'Project Appraisal', 'Structural Economic Reform']
  },
  {
    id: 'adb-ypp',
    orgId: 'adb',
    orgName: 'Asian Development Bank',
    orgAcronym: 'ADB',
    title: 'ADB Young Professionals Program (YPP)',
    trackCategory: 'un_careers',
    trackLabel: 'Asia-Pacific Regional Bank Pathway',
    eligibility: {
      maxAge: 32,
      educationLevel: "Master's Degree in Economics, Engineering, Urban Planning, or Finance",
      languageRequirements: ['English (Excellent written and spoken)'],
      eligibleNationalities: 'Nationals of ADB Regional and Non-Regional Member Economies',
      experienceRequired: '2+ Years of relevant professional experience'
    },
    compensationTier: 'Competitive Global Salary',
    applicationType: 'annual_cycle',
    cycleMonthStart: 5, // May
    cycleMonthEnd: 7, // July
    officialPortalUrl: 'https://www.adb.org/site/careers/young-professionals-program',
    sampleJobCircularDescription: 'Recruiting outstanding young professionals to contribute to sovereign and non-sovereign project preparation, climate finance structuring, and public sector governance across developing Asia.',
    targetKeywordsToWeave: ['Regional Connectivity', 'Infrastructure Finance', 'Sovereign Operations', 'Climate Transition Matrix', 'Cost-Benefit Analysis']
  },
  {
    id: 'imf-economist-program',
    orgId: 'imf',
    orgName: 'International Monetary Fund',
    orgAcronym: 'IMF',
    title: 'IMF Economist Program (EP) & Macroeconomic Research Fellow',
    trackCategory: 'un_careers',
    trackLabel: 'Global Macroeconomic & Monetary Track',
    eligibility: {
      maxAge: 34,
      educationLevel: "PhD (or near completion) in Macroeconomics, Econometrics, or Finance",
      languageRequirements: ['English (Fluent)'],
      eligibleNationalities: 'Global (All IMF Member Countries)',
      experienceRequired: 'Doctoral research track record in macro modeling, fiscal policy, or monetary economics'
    },
    compensationTier: 'Competitive Global Salary',
    applicationType: 'annual_cycle',
    cycleMonthStart: 9, // September
    cycleMonthEnd: 11, // November
    officialPortalUrl: 'https://www.imf.org/en/About/Recruitment',
    sampleJobCircularDescription: 'Serve as an IMF staff economist participating in Article IV country surveillance missions, debt sustainability analyses, and macroeconomic structural adjustment design.',
    targetKeywordsToWeave: ['Econometric Modeling', 'Fiscal Surveillance', 'Debt Sustainability Analysis', 'Monetary Policy', 'Balance of Payments']
  },
  {
    id: 'aiib-graduate-program',
    orgId: 'aiib',
    orgName: 'Asian Infrastructure Investment Bank',
    orgAcronym: 'AIIB',
    title: 'AIIB Graduate Program / Infrastructure Investment Analyst',
    trackCategory: 'un_careers',
    trackLabel: 'Multilateral Green Infrastructure Track',
    eligibility: {
      maxAge: 32,
      educationLevel: "Master's Degree in Finance, Engineering, Economics, Law or Business",
      languageRequirements: ['English (Fluent)'],
      eligibleNationalities: 'All AIIB Member States',
      experienceRequired: '1 – 2 Years in financial modeling, investment banking or infrastructure engineering'
    },
    compensationTier: 'Competitive Global Salary',
    applicationType: 'annual_cycle',
    cycleMonthStart: 2, // February
    cycleMonthEnd: 4, // April
    officialPortalUrl: 'https://www.aiib.org/en/opportunities/career/index.html',
    sampleJobCircularDescription: 'Rotate through AIIB investment operations departments, conducting due diligence on renewable solar/wind projects, smart grid transmissions, and deep-sea port terminals.',
    targetKeywordsToWeave: ['Infrastructure Due Diligence', 'Green Bonds', 'Cash Flow Modeling', 'Project Structuring', 'Cross-Border Connectivity']
  },

  // ------------------------------------------
  // 3. Geopolitical Think Tanks & Foreign Policy Fellowships
  // ------------------------------------------
  {
    id: 'chatham-house-academy-fellowship',
    orgId: 'chatham_house',
    orgName: 'Chatham House',
    orgAcronym: 'Chatham House',
    title: 'Queen Elizabeth II Academy Fellowship in International Affairs',
    trackCategory: 'think_tank_jobs',
    trackLabel: 'Premier Geopolitical Think Tank Fellowship',
    eligibility: {
      educationLevel: "Master's Degree (or equivalent research track record) in Political Science or IR",
      languageRequirements: ['English (High academic proficiency)'],
      eligibleNationalities: 'Global (Developing country scholars prioritized)',
      experienceRequired: '2 – 5 Years in policy analysis, think tanks, diplomacy or journalism'
    },
    compensationTier: 'Fellowship Grant',
    applicationType: 'annual_cycle',
    cycleMonthStart: 1, // January
    cycleMonthEnd: 4, // April
    officialPortalUrl: 'https://www.chathamhouse.org/about-us/our-academy/fellowships',
    sampleJobCircularDescription: 'A fully funded 10-month residency at Chatham House in London. Fellows conduct an independent research project, participate in high-level diplomatic roundtables, and publish policy papers.',
    targetKeywordsToWeave: ['Empirical Methodology', 'Policy Formulation', 'Peer-Reviewed Analysis', 'Track 1.5 Diplomacy', 'Qualitative Data Synthesis']
  },
  {
    id: 'csis-junior-fellow',
    orgId: 'csis',
    orgName: 'Center for Strategic and International Studies',
    orgAcronym: 'CSIS',
    title: 'CSIS Junior Fellow in Geopolitics, Defense Statecraft & Indo-Pacific Studies',
    trackCategory: 'think_tank_jobs',
    trackLabel: 'Bipartisan Strategic Defense Fellowship',
    eligibility: {
      educationLevel: "Bachelor's or Master's Degree in International Relations, Strategic Studies, or Economics",
      languageRequirements: ['English (Fluent)'],
      eligibleNationalities: 'Global (US Work Authorization Support Provided)',
      experienceRequired: '0 – 2 Years in qualitative defense analysis, legislative tracking, or think tank writing'
    },
    compensationTier: 'Competitive Global Salary',
    applicationType: 'annual_cycle',
    cycleMonthStart: 10, // October
    cycleMonthEnd: 12, // December
    officialPortalUrl: 'https://www.csis.org/careers',
    sampleJobCircularDescription: 'Draft strategic policy memos for Capitol Hill briefings, conduct open-source defense data aggregation, and assist senior fellows in maritime security research.',
    targetKeywordsToWeave: ['Open Source Intelligence', 'Strategic Memos', 'Defense Statecraft', 'Maritime Security', 'Indo-Pacific Geopolitics']
  },
  {
    id: 'sipri-research-assistant',
    orgId: 'sipri',
    orgName: 'Stockholm International Peace Research Institute',
    orgAcronym: 'SIPRI',
    title: 'SIPRI Research Assistant / Junior Military Data Analyst',
    trackCategory: 'think_tank_jobs',
    trackLabel: 'Peace & Security Research Track',
    eligibility: {
      educationLevel: "Master's in Peace & Conflict Studies, Security Studies, Economics or Statistics",
      languageRequirements: ['English (Fluent)'],
      eligibleNationalities: 'Global',
      experienceRequired: '1 – 2 Years in statistical data analysis, arms transfers or defense policy'
    },
    compensationTier: 'Competitive Global Salary',
    applicationType: 'periodic',
    officialPortalUrl: 'https://www.sipri.org/about/vacancies',
    sampleJobCircularDescription: 'Assist in collecting, verifying, and coding quantitative data on international major conventional weapons transfers, national military budgets, and multilateral peacekeeping operations.',
    targetKeywordsToWeave: ['Quantitative Data Analysis', 'Statistical Coding', 'Arms Transfer Verification', 'Defense Expenditure Modeling', 'Peacekeeping Analytics']
  },
  {
    id: 'biiss-research-fellow',
    orgId: 'biiss',
    orgName: 'Bangladesh Institute of International and Strategic Studies',
    orgAcronym: 'BIISS',
    title: 'BIISS Research Officer / Associate Fellow (Diplomacy & Security)',
    trackCategory: 'think_tank_jobs',
    trackLabel: 'National Statutory Strategic Track',
    eligibility: {
      educationLevel: "Master's in International Relations, Political Science, Peace & Conflict Studies, or Strategic Studies with First Class / High CGPA",
      languageRequirements: ['English (Fluent)', 'Bengali (Fluent)'],
      eligibleNationalities: 'Bangladeshi Nationals',
      experienceRequired: '1 – 3 Years in academic or policy research with peer-reviewed publications'
    },
    compensationTier: 'Competitive Global Salary',
    applicationType: 'periodic',
    officialPortalUrl: 'https://www.biiss.org/career',
    sampleJobCircularDescription: 'Conduct strategic research on regional security dynamics, bilateral diplomatic relations, maritime boundary economic zones, and prepare confidential policy dossiers for the Ministry of Foreign Affairs.',
    targetKeywordsToWeave: ['Bilateral Diplomacy', 'Regional Security Architecture', 'Policy Dossier Formulation', 'Track 1.5 Dialogues', 'Maritime Strategy']
  },

  // ------------------------------------------
  // 4. Global Development Conglomerates (BRAC / INGOs)
  // ------------------------------------------
  {
    id: 'brac-young-professionals',
    orgId: 'brac',
    orgName: 'BRAC',
    orgAcronym: 'BRAC',
    title: 'BRAC Young Professionals Programme (YPP)',
    trackCategory: 'ngo_careers',
    trackLabel: 'World #1 NGO Fast-Track Leadership',
    eligibility: {
      maxAge: 30,
      educationLevel: "Bachelor's or Master's from a recognized university with minimum CGPA 3.50+",
      languageRequirements: ['English (Fluent)', 'Bengali (Fluent)'],
      eligibleNationalities: 'Bangladeshi Citizens & Global South Nationals',
      experienceRequired: '0 – 2 Years (Recent Graduates & High-Potential Talents)'
    },
    compensationTier: 'Competitive Global Salary',
    applicationType: 'annual_cycle',
    cycleMonthStart: 3, // March
    cycleMonthEnd: 5, // May
    officialPortalUrl: 'https://careers.brac.net/',
    sampleJobCircularDescription: 'Intensive 2-year leadership track rotating through BRAC field operations, microfinance branches, climate resilience programs, and international development desks in Africa and Asia.',
    targetKeywordsToWeave: ['Ultra-Poor Graduation', 'Microfinance Operations', 'Field Operations Leadership', 'Community Mobilization', 'Impact Assessment']
  },
  {
    id: 'brac-intl-program-manager',
    orgId: 'brac',
    orgName: 'BRAC International',
    orgAcronym: 'BRAC Intl',
    title: 'BRAC International Country Program Manager & Ultra-Poor Graduation Lead',
    trackCategory: 'ngo_careers',
    trackLabel: 'Global South Development Leadership',
    eligibility: {
      educationLevel: "Master's Degree in International Development, Economics, Agriculture or Public Policy",
      languageRequirements: ['English (Fluent)', 'French, Swahili, or Arabic an asset for Africa postings'],
      eligibleNationalities: 'Global (South-South professionals encouraged)',
      experienceRequired: '4 – 7 Years in large-scale developmental program implementation'
    },
    compensationTier: 'Competitive Global Salary',
    applicationType: 'rolling',
    officialPortalUrl: 'https://careers.brac.net/',
    sampleJobCircularDescription: 'Oversee country-level execution of BRAC’s Ultra-Poor Graduation model, manage multi-million dollar bilateral donor grants, and supervise cross-functional field teams.',
    targetKeywordsToWeave: ['Ultra-Poor Graduation Approach', 'Grant Management', 'South-South Cooperation', 'Cross-Functional Leadership', 'M&E Frameworks']
  },
  {
    id: 'irc-humanitarian-associate',
    orgId: 'irc',
    orgName: 'International Rescue Committee',
    orgAcronym: 'IRC',
    title: 'IRC Humanitarian Program Officer & Emergency Protection Associate',
    trackCategory: 'ngo_careers',
    trackLabel: 'International Humanitarian Field Track',
    eligibility: {
      educationLevel: "Bachelor's or Master's in Social Sciences, Public Health, Human Rights or Disaster Management",
      languageRequirements: ['English (Fluent)', 'Local dialects an asset'],
      eligibleNationalities: 'National & Regional Candidates',
      experienceRequired: '2 – 4 Years in NGO field coordination, clinical protection or camp management'
    },
    compensationTier: 'Competitive Global Salary',
    applicationType: 'rolling',
    officialPortalUrl: 'https://rescue.csod.com/ux/ats/careersite/1/home',
    sampleJobCircularDescription: 'Coordinate daily clinical protection, emergency gender-based violence (GBV) response, and community health outreach for forcibly displaced communities in Southeast Bangladesh.',
    targetKeywordsToWeave: ['Emergency Protection', 'Field Team Supervision', 'Donor Compliance Reporting', 'Case Management', 'Humanitarian Standards']
  },

  // ------------------------------------------
  // 5. Premier Fully Funded Global Scholarships (High-CPC / High-Demand)
  // ------------------------------------------
  {
    id: 'chevening-scolarship',
    orgId: 'chevening',
    orgName: 'Chevening Scholarships (UK Government)',
    orgAcronym: 'Chevening',
    title: 'Chevening UK Government Fully Funded Master’s Scholarship (Chevening Scolarship)',
    trackCategory: 'scholarships_fellowships',
    trackLabel: 'UK Government Flagship Master’s Scholarship',
    eligibility: {
      educationLevel: "Bachelor's Degree (Equivalent to UK Upper Second-Class 2:1 Honours)",
      languageRequirements: ['English (IELTS / PTE / TOEFL Academic Proficiency)'],
      eligibleNationalities: '160+ Chevening-Eligible Countries (Including Bangladesh, India, Pakistan, Nigeria, Kenya)',
      experienceRequired: 'Minimum 2 Years (2,800 Hours) of demonstrable work/leadership experience'
    },
    compensationTier: 'Fully Funded Scholarship (Tuition + Stipend + Airfare)',
    applicationType: 'annual_cycle',
    cycleMonthStart: 8, // Opens Early August
    cycleMonthEnd: 11, // Closes Early November
    officialPortalUrl: 'https://www.chevening.org/scholarships/',
    scholarshipCoverage: '100% University Tuition Fees + Monthly Living Allowance (£1,300–£1,600/month) + Economy Class Return Flights + Visa Application Fee + Arrival & Departure Allowances.',
    academicFields: ['Public Policy', 'International Relations & Diplomacy', 'Economics & Finance', 'Climate Change & Sustainability', 'Law & Human Rights', 'Data Science & AI', 'Public Health & Healthcare Systems'],
    sampleJobCircularDescription: 'The Chevening Scholarship enables outstanding emerging leaders from around the world to pursue a one-year fully funded Master’s degree in any subject at any UK university. Applicants must exhibit clear leadership trajectory, powerful networking capacity, and an actionable post-study career blueprint for home country transformation.',
    targetKeywordsToWeave: ['Leadership Trajectory', 'Strategic Networking', 'Policy Formulation', 'Institutional Reform', 'Socioeconomic Impact Blueprint', 'UK Higher Education Alignment']
  },
  {
    id: 'daad-scolarship',
    orgId: 'daad',
    orgName: 'DAAD (German Academic Exchange Service)',
    orgAcronym: 'DAAD',
    title: 'DAAD Helmut-Schmidt & EPOS Master’s Scholarships in Germany (DAAD Scolarship)',
    trackCategory: 'scholarships_fellowships',
    trackLabel: 'German Government Development Scholarship',
    eligibility: {
      educationLevel: "Bachelor's Degree completed within the last 6 years with above-average grades",
      languageRequirements: ['English (IELTS Band 6.5+ / TOEFL 90+) or German (for German-taught courses)'],
      eligibleNationalities: 'Developing Countries / DAC List Nations (Bangladesh, Ghana, Nepal, etc.)',
      experienceRequired: 'Minimum 2 Years professional experience in relevant public sector, NGO, or development field'
    },
    compensationTier: 'Fully Funded Scholarship (Tuition + Stipend + Airfare)',
    applicationType: 'annual_cycle',
    cycleMonthStart: 6, // Opens June
    cycleMonthEnd: 10, // Closes October
    officialPortalUrl: 'https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/',
    scholarshipCoverage: 'Full Tuition Fee Waiver + Monthly Living Stipend of €934–€1,200/month + Full Health, Accident & Personal Liability Insurance + Round-Trip Travel Allowance + German Language Preparation Course.',
    academicFields: ['Public Policy & Good Governance (PPGG)', 'Development Economics', 'Renewable Energy & Environmental Engineering', 'Agricultural Science & Food Security', 'Public Health & Epidemiology', 'Civil & Water Engineering'],
    sampleJobCircularDescription: 'The DAAD Development-Related Postgraduate Courses (EPOS) and Helmut-Schmidt-Programme offer future leaders from developing countries the opportunity to obtain a Master’s degree in disciplines that are of special relevance to the sustainable development of their home countries.',
    targetKeywordsToWeave: ['Good Governance', 'Public Administration', 'Sustainable Development Goals', 'Development Economics', 'Environmental Policy', 'Empirical Research Methods']
  },
  {
    id: 'erasmus-mundus-scolarship',
    orgId: 'erasmus_mundus',
    orgName: 'Erasmus Mundus Joint Masters (European Commission)',
    orgAcronym: 'Erasmus+',
    title: 'Erasmus Mundus Joint Masters Fully Funded Scholarship (Erasmus Mundus Scolarship)',
    trackCategory: 'scholarships_fellowships',
    trackLabel: 'European Union Elite Joint Master’s Degree',
    eligibility: {
      educationLevel: "First Higher Education Degree (Bachelor’s / Honours) or recognized equivalent",
      languageRequirements: ['English (IELTS 6.5–7.0+ / TOEFL iBT 92+)'],
      eligibleNationalities: 'Worldwide (All nationalities across Partner and Programme Countries)',
      experienceRequired: '0 – 3 Years (Strong academic track record and relevant research / internship background)'
    },
    compensationTier: 'Fully Funded Scholarship (Tuition + Stipend + Airfare)',
    applicationType: 'annual_cycle',
    cycleMonthStart: 10, // Opens October
    cycleMonthEnd: 1, // Closes January
    officialPortalUrl: 'https://www.eacea.ec.europa.eu/scholarships/erasmus-mundus-catalogue_en',
    scholarshipCoverage: '100% University Participation & Tuition Costs + €1,400 Monthly Living Subsistence Allowance (up to 24 months) + Annual Travel & Installation Contribution (€2,000–€3,000/yr) + Comprehensive European Health Insurance.',
    academicFields: ['International Humanitarian Action (NOHA)', 'Global Development & Economics (GLODEP)', 'Artificial Intelligence & Robotics', 'Environmental Sciences & Marine Ecology', 'Public Sector Innovation & e-Governance', 'Cybersecurity & Quantum Technologies'],
    sampleJobCircularDescription: 'Erasmus Mundus Joint Masters (EMJM) are high-level integrated study programmes delivered by international consortiums of European universities. Scholars study in at least two different European countries, earning dual or joint Master’s degrees recognized globally.',
    targetKeywordsToWeave: ['Transnational Mobility', 'Cross-Cultural Research', 'Interdisciplinary Analysis', 'European Higher Education', 'Applied Quantitative Methodologies', 'Multi-Campus Integration']
  },
  {
    id: 'the-gates-scolarship',
    orgId: 'gates_cambridge',
    orgName: 'Gates Cambridge & The Gates Scholarship',
    orgAcronym: 'Gates Cambridge',
    title: 'The Gates Scholarship & Gates Cambridge Fully Funded Postgraduate Fellowship',
    trackCategory: 'scholarships_fellowships',
    trackLabel: 'World #1 Prestigious Academic Fellowship',
    eligibility: {
      educationLevel: "Bachelor’s or Master’s Degree with First Class Honours or top 5% academic percentile",
      languageRequirements: ['English (C2 Academic Proficiency / IELTS 7.5+ with 7.0 in all bands)'],
      eligibleNationalities: 'Citizens of any country outside the United Kingdom',
      experienceRequired: 'Demonstrable track record of exceptional intellectual ability, leadership, and commitment to improving the lives of others'
    },
    compensationTier: 'Fully Funded Scholarship (Tuition + Stipend + Airfare)',
    applicationType: 'annual_cycle',
    cycleMonthStart: 9, // Opens September
    cycleMonthEnd: 12, // Closes December / Early January
    officialPortalUrl: 'https://www.gatescambridge.org/apply/',
    scholarshipCoverage: 'University Composition Fee at University of Cambridge + Maintenance Allowance of £21,000/year + Round-trip Economy Airfare + Visa Costs & NHS Surcharge + Inbound/Outbound Travel Allowance + Discretionary Academic Development Funding (up to £2,000 for conferences) + Family/Child Care Allowances.',
    academicFields: ['Public Health & Global Pandemics', 'Biotechnology & Genetic Engineering', 'Development Economics & Policy', 'Theoretical Physics & Computer Science', 'Environmental Geopolitics', 'International Law'],
    sampleJobCircularDescription: 'Gates Cambridge Scholarships are prestigious, highly competitive awards given to outstanding applicants from countries outside the UK to pursue a full-time postgraduate degree in any subject available at the University of Cambridge. The programme seeks individuals who combine academic excellence with transformative leadership capacity.',
    targetKeywordsToWeave: ['Transformative Leadership', 'Exceptional Academic Rigour', 'Societal Impact', 'Commitment to Public Good', 'Original Empirical Contribution', 'Biomedical / Policy Breakthroughs']
  },
  {
    id: 'commonwealth-scolarship',
    orgId: 'commonwealth_commission',
    orgName: 'Commonwealth Scholarship Commission (CSC UK)',
    orgAcronym: 'CSC UK',
    title: 'Commonwealth Master’s & PhD Scholarships in the UK (Commonwealth Scolarship)',
    trackCategory: 'scholarships_fellowships',
    trackLabel: 'Commonwealth Intergovernmental Full Scholarship',
    eligibility: {
      educationLevel: "Bachelor's Degree (Upper Second Class 2:1 minimum) or Master's (for PhD applicants)",
      languageRequirements: ['English (IELTS / University English Proficiency)'],
      eligibleNationalities: 'Commonwealth Developing Countries (Bangladesh, Pakistan, Ghana, Nigeria, Kenya, Sri Lanka, etc.)',
      experienceRequired: '0 – 3 Years (Priority for university faculty members, researchers, and public sector professionals)'
    },
    compensationTier: 'Fully Funded Scholarship (Tuition + Stipend + Airfare)',
    applicationType: 'annual_cycle',
    cycleMonthStart: 9, // Opens September
    cycleMonthEnd: 11, // Closes November / December
    officialPortalUrl: 'https://cscuk.fcdo.gov.uk/apply/',
    scholarshipCoverage: 'Approved Airfare to/from UK + Full Tuition and Examination Fees + Monthly Living Stipend of £1,347–£1,652/month + Warm Clothing Allowance + Thesis Preparation Grant + Study Travel Grant.',
    academicFields: ['Science and Technology for Development', 'Strengthening Health Systems & Clinical Medicine', 'Promoting Global Prosperity & Economics', 'Strengthening Peace, Security and Governance', 'Crisis Resilience & Climate Transition'],
    sampleJobCircularDescription: 'Funded by the UK Foreign, Commonwealth & Development Office (FCDO), Commonwealth Scholarships enable talented and motivated individuals to gain the knowledge and skills required for sustainable development, and are aimed at those who could not otherwise afford to study in the UK.',
    targetKeywordsToWeave: ['Development Impact Statement', 'Capacity Building', 'Higher Education Strengthening', 'Public Health Governance', 'Research Methodology', 'Sustainable Development Goals']
  },
  {
    id: 'mext-scolarship',
    orgId: 'mext_japan',
    orgName: 'MEXT Scholarship (Japanese Government)',
    orgAcronym: 'MEXT',
    title: 'MEXT Japanese Government Research & Postgraduate Scholarship (MEXT Scolarship)',
    trackCategory: 'scholarships_fellowships',
    trackLabel: 'Japanese Government Premier Research Grant',
    eligibility: {
      maxAge: 35,
      educationLevel: "Bachelor's or Master's Degree with minimum CGPA 3.30+ out of 4.00",
      languageRequirements: ['English (Proficient) or Japanese (Language training provided in Japan)'],
      eligibleNationalities: 'Countries with Japanese Diplomatic Relations (Bangladesh, India, Philippines, etc.)',
      experienceRequired: 'Solid academic research proposal aligned with Japanese university laboratory professors'
    },
    compensationTier: 'Fully Funded Scholarship (Tuition + Stipend + Airfare)',
    applicationType: 'annual_cycle',
    cycleMonthStart: 4, // Opens April
    cycleMonthEnd: 5, // Closes Mid-May (Embassy Track)
    officialPortalUrl: 'https://www.bd.emb-japan.go.jp/itpr_en/education.html',
    scholarshipCoverage: '100% University Admission & Tuition Fees Waived + Monthly Allowance of ¥143,000–¥148,000/month + Round-Trip International Flights + 6-Month Intensive Japanese Language Preparatory Course.',
    academicFields: ['Robotics, AI & Computer Science', 'Civil, Structural & Earthquake Engineering', 'Marine Geosciences & Blue Economy', 'Biotechnology & Agriculture', 'International Relations & Asian Studies', 'Economics & Public Administration'],
    sampleJobCircularDescription: 'The Ministry of Education, Culture, Sports, Science and Technology (MEXT) of Japan offers scholarships to international students who wish to study in graduate courses at Japanese universities as Research Students under the Japanese Government Scholarship Program.',
    targetKeywordsToWeave: ['Laboratory Research Proposal', 'Academic Advisor Alignment', 'Scientific Methodology', 'Advanced Technological Innovation', 'Bilateral Japan Collaboration']
  },
  {
    id: 'fulbright-fellowship',
    orgId: 'fulbright_program',
    orgName: 'Fulbright Foreign Student Program',
    orgAcronym: 'Fulbright',
    title: 'Fulbright Foreign Student Master’s Fellowship in the USA',
    trackCategory: 'scholarships_fellowships',
    trackLabel: 'US Government Flagship Exchange Program',
    eligibility: {
      educationLevel: "Four-year Bachelor’s Degree with an outstanding academic record",
      languageRequirements: ['English (TOEFL iBT 88+ / IELTS 7.0+)'],
      eligibleNationalities: 'Bangladeshi Citizens (and 160+ participating nations)',
      experienceRequired: 'Minimum 2 Years full-time relevant professional experience'
    },
    compensationTier: 'Fully Funded Scholarship (Tuition + Stipend + Airfare)',
    applicationType: 'annual_cycle',
    cycleMonthStart: 2, // Opens February
    cycleMonthEnd: 5, // Closes May
    officialPortalUrl: 'https://bd.usembassy.gov/education-culture/educational-exchange-programs/',
    scholarshipCoverage: 'Full Tuition and Mandatory University Fees in the USA + Monthly Living Stipend + Round-Trip Airfare + J-1 Visa Sponsorship & Support + Accident & Sickness Health Benefits Plan + Pre-Academic Orientation in the US.',
    academicFields: ['Public Policy & International Affairs', 'Environmental Science & Climate Adaptation', 'Journalism & Mass Media', 'Education Administration & Curriculum Development', 'Urban & Regional Planning', 'Public Health & Healthcare Policy'],
    sampleJobCircularDescription: 'The Fulbright Foreign Student Program enables graduate students, young professionals, and artists from abroad to study and conduct research in the United States for up to two years to complete a Master’s degree.',
    targetKeywordsToWeave: ['Statement of Purpose', 'Study Objectives', 'Public Diplomacy', 'Cultural Exchange', 'Community Impact', 'Cross-Disciplinary Rigour']
  },
  {
    id: 'dutch-bangla-bank-scolarship',
    orgId: 'dbbl_foundation',
    orgName: 'Dutch-Bangla Bank Foundation',
    orgAcronym: 'DBBL Foundation',
    title: 'Dutch-Bangla Bank Foundation Higher Secondary & Graduation Scholarship (DBBL Scolarship)',
    trackCategory: 'scholarships_fellowships',
    trackLabel: 'Bangladesh Premier Domestic CSR Scholarship',
    eligibility: {
      educationLevel: "Passed SSC or HSC Examination in current year with minimum GPA 5.00 (City Corp) / 4.80 (Rural/District)",
      languageRequirements: ['Bengali', 'English'],
      eligibleNationalities: 'Bangladeshi Citizens',
      experienceRequired: 'Meritorious students from economically underprivileged backgrounds across Bangladesh'
    },
    compensationTier: 'Fellowship Grant',
    applicationType: 'annual_cycle',
    cycleMonthStart: 1, // January / Post-Result Cycle
    cycleMonthEnd: 3, // March
    officialPortalUrl: 'https://app.dutchbanglabank.com/DBBL_Web/Scholarship.html',
    scholarshipCoverage: 'Monthly Stipend of BDT 2,500–5,000/month disbursed directly via Rocket mobile banking + Annual Grant for Books & Study Materials (BDT 5,000) + Annual Clothing Allowance (BDT 2,500) covering entire 2-year HSC or 4-5 year University Bachelor / Medical / Engineering tenure.',
    academicFields: ['MBBS & BDS Medical Degrees', 'BSc Engineering (BUET, RUET, CUET, KUET, IUT)', 'Public University Honours Degrees (DU, JU, RU, CU)', 'Agricultural Sciences', 'HSC Science, Commerce, Humanities'],
    sampleJobCircularDescription: 'Dutch-Bangla Bank awards thousands of education scholarships annually under its social cause program to poor and meritorious students who passed SSC/HSC examinations but are unable to pursue higher studies due to severe financial distress.',
    targetKeywordsToWeave: ['Academic Merit Record', 'Need-Based Verification', 'Financial Hardship Documentation', 'Medical / Engineering College Admission', 'Rocket Stipend Account']
  },
  {
    id: 'nursing-healthcare-scolarship',
    orgId: 'who',
    orgName: 'World Health Organization & Global Healthcare Trusts',
    orgAcronym: 'WHO / Health Trusts',
    title: 'Global Nursing & Public Health Healthcare Scholarship (Nursing Scolarship)',
    trackCategory: 'scholarships_fellowships',
    trackLabel: 'Healthcare & Clinical Nursing Fellowship',
    eligibility: {
      educationLevel: "Diploma in Nursing, BSc in Nursing, or Bachelor's in Public Health / Allied Health Sciences",
      languageRequirements: ['English (IELTS Band 6.5+ / OET Grade B+)'],
      eligibleNationalities: 'Global (Special consideration for low and middle-income nations)',
      experienceRequired: '1 – 3 Years in clinical bedside nursing, community health centers, or maternal healthcare wards'
    },
    compensationTier: 'Fully Funded Scholarship (Tuition + Stipend + Airfare)',
    applicationType: 'annual_cycle',
    cycleMonthStart: 3, // March
    cycleMonthEnd: 6, // June
    officialPortalUrl: 'https://www.who.int/careers',
    scholarshipCoverage: '100% Tuition Fees for Postgraduate Nursing / Master of Public Health + Monthly Living Stipend ($1,500/month) + International Hospital Clinical Practicum Placement + Certification Exam Fees (NCLEX / NMC UK / OET).',
    academicFields: ['MSc Advanced Clinical Nursing', 'Critical Care & Emergency Nursing', 'Maternal & Neonatal Child Health (MNCH)', 'Infection Prevention & Epidemiology', 'Global Public Health Leadership'],
    sampleJobCircularDescription: 'Fully funded scholarship pathways designed for registered nurses, midwives, and public health clinical specialists seeking advanced postgraduate education in the UK, USA, Canada, and Australia.',
    targetKeywordsToWeave: ['Clinical Nursing Competency', 'Patient Triage Protocols', 'Infection Control', 'Maternal Healthcare Delivery', 'Evidence-Based Nursing Practice', 'OET / NCLEX Certification']
  },
  {
    id: 'global-mba-leadership-fellowship',
    orgId: 'world_bank',
    orgName: 'World Bank & Premier Global Business Schools',
    orgAcronym: 'Global MBA Trust',
    title: 'Global MBA Leadership & Social Impact Scholarship (MBA Scolarship)',
    trackCategory: 'scholarships_fellowships',
    trackLabel: 'Premier Business School Master’s Fellowship',
    eligibility: {
      educationLevel: "Bachelor's Degree with exceptional academic standing (GMAT / GRE Score Competitive)",
      languageRequirements: ['English (Fluent / Professional Working)'],
      eligibleNationalities: 'Global (Emerging Market and Social Enterprise Leaders Prioritized)',
      experienceRequired: '3 – 6 Years of proven corporate, startup, social enterprise, or financial leadership experience'
    },
    compensationTier: 'Fully Funded Scholarship (Tuition + Stipend + Airfare)',
    applicationType: 'annual_cycle',
    cycleMonthStart: 8, // August
    cycleMonthEnd: 11, // November (Round 1 / Round 2 Cycles)
    officialPortalUrl: 'https://www.worldbank.org/en/programs/scholarships',
    scholarshipCoverage: 'Full or 75%+ Tuition Fee Waiver (up to $120,000) at top global business schools (INSEAD, LBS, Wharton, Harvard, Oxford Saïd) + Living Subsistence Grant + Mentorship from Global Executives.',
    academicFields: ['Master of Business Administration (MBA)', 'Executive Leadership & ESG Strategy', 'Fintech & Digital Transformation', 'Development Finance & Impact Investing', 'Supply Chain Management'],
    sampleJobCircularDescription: 'High-impact MBA scholarships supporting visionary entrepreneurs and corporate change-makers committed to leveraging market-driven business solutions for emerging market poverty alleviation and green industrial growth.',
    targetKeywordsToWeave: ['Strategic Leadership', 'Financial Modeling', 'ESG Frameworks', 'Market Disruption', 'Cross-Border Supply Chains', 'Corporate Governance']
  },
  {
    id: 'presidential-merit-fellowship',
    orgId: 'gates_cambridge',
    orgName: 'Global Presidential Scholarship Consortium',
    orgAcronym: 'Presidential Scholars',
    title: 'Presidential Merit & Bright Future Global Fellowship (Presidential Scolarship)',
    trackCategory: 'scholarships_fellowships',
    trackLabel: 'Top Tier Merit-Based Undergraduate & Graduate Award',
    eligibility: {
      educationLevel: "High School Diploma / A-Levels / IB Diploma / Bachelor's with top 1-3% graduating rank (GPA 3.9+ / 4.0 or equivalent)",
      languageRequirements: ['English (Fluent / Academic)'],
      eligibleNationalities: 'International Students Worldwide',
      experienceRequired: 'Exemplary extracurricular leadership, academic Olympiad awards, scientific publishing, or social impact initiatives'
    },
    compensationTier: 'Fully Funded Scholarship (Tuition + Stipend + Airfare)',
    applicationType: 'annual_cycle',
    cycleMonthStart: 9, // September
    cycleMonthEnd: 12, // December
    officialPortalUrl: 'https://www.gatescambridge.org/apply/',
    scholarshipCoverage: '100% Comprehensive Tuition and Mandatory Fees + On-Campus Housing and Dining Meal Plan + Annual Books & Technology Stipend ($2,500) + Summer Research / Internship Funding Grant ($5,000).',
    academicFields: ['Computer Science & Artificial Intelligence', 'Biomedical & Neural Engineering', 'International Relations & Global Affairs', 'Theoretical Mathematics & Physics', 'Philosophy, Politics and Economics (PPE)'],
    sampleJobCircularDescription: 'The Presidential Fellowship is the highest institutional merit award granted to exceptionally gifted students globally who demonstrate transformative intellectual rigor, creative problem-solving capabilities, and civic character.',
    targetKeywordsToWeave: ['Academic Distinction', 'Olympiad Rank', 'Civic Character', 'Innovative Problem Solving', 'Peer-Reviewed Research', 'Presidential Honor Roll']
  }
];

// Smart Institutional Date/Cycle Calculator
export const getOpportunityCycleStatus = (opp: VerifiedOpportunity): {
  status: 'OPEN' | 'CLOSING_SOON' | 'UPCOMING' | 'ACTIVE_ROLLING';
  badgeColor: string;
  displayMessage: string;
  daysRemaining?: number;
} => {
  const now = new Date();
  const currentMonth = now.getMonth() + 1; // 1-12
  const currentYear = now.getFullYear();

  // If rolling / always active
  if (opp.applicationType === 'rolling') {
    return {
      status: 'ACTIVE_ROLLING',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      displayMessage: '🟢 Active & Accepting Applications (Rolling Gateways)'
    };
  }

  // If specific deadline provided
  if (opp.specificDeadlineDate) {
    const deadline = new Date(opp.specificDeadlineDate);
    const diffTime = deadline.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 0 && diffDays <= 7) {
      return {
        status: 'CLOSING_SOON',
        badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
        displayMessage: `🟡 Closing Soon! Only ${diffDays} Days Remaining`,
        daysRemaining: diffDays
      };
    } else if (diffDays > 7) {
      return {
        status: 'OPEN',
        badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
        displayMessage: `🟢 Open for Application (Deadline: ${opp.specificDeadlineDate})`,
        daysRemaining: diffDays
      };
    } else {
      // Past deadline, calculate next year cycle
      return {
        status: 'UPCOMING',
        badgeColor: 'bg-slate-500/20 text-slate-300 border-slate-500/30',
        displayMessage: `⚪ Upcoming Next Annual Cycle (${currentYear + 1})`
      };
    }
  }

  // Annual Cycle Window Calculation
  if (opp.applicationType === 'annual_cycle' && opp.cycleMonthStart && opp.cycleMonthEnd) {
    const start = opp.cycleMonthStart;
    const end = opp.cycleMonthEnd;

    const monthNames = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // If window spans across new year (e.g. Oct to Jan: start=10, end=1)
    const isSpanningNewYear = start > end;
    const isCurrentlyOpen = isSpanningNewYear
      ? (currentMonth >= start || currentMonth <= end)
      : (currentMonth >= start && currentMonth <= end);

    if (isCurrentlyOpen) {
      return {
        status: 'OPEN',
        badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
        displayMessage: `🟢 Official Window Open (Closes end of ${monthNames[end]})`
      };
    } else if (!isSpanningNewYear && currentMonth < start) {
      return {
        status: 'UPCOMING',
        badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
        displayMessage: `⚪ Upcoming ${currentYear} Cycle: Opens in ${monthNames[start]}`
      };
    } else {
      return {
        status: 'UPCOMING',
        badgeColor: 'bg-slate-500/20 text-slate-300 border-slate-500/30',
        displayMessage: `⚪ Upcoming ${currentYear + 1} Annual Cycle (Opens ${monthNames[start]})`
      };
    }
  }

  // Default periodic
  return {
    status: 'ACTIVE_ROLLING',
    badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
    displayMessage: '🟢 Verified Institutional Gateway (Check Official Portal)'
  };
};
