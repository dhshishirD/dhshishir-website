export interface NegotiationOption {
  id: string;
  responseTitle: string;
  responseDescription: string;
  tacticalStyle: 'Hardline Sovereignty' | 'Asymmetric Hedging' | 'Constructive Compromise' | 'Multilateral Arbitration Threat';
  leverageDelta: number; // -20 to +20
  autonomyDelta: number; // -20 to +20
  economicGainDelta: number; // -20 to +20
  opponentCounterReaction: string;
  evalRationale: string;
}

export interface NegotiationRound {
  roundNumber: number;
  stageTitle: string;
  counterpartSpeaker: string;
  counterpartRole: string;
  counterpartDemand: string;
  tacticalAdvice: string;
  options: NegotiationOption[];
}

export interface NegotiationScenario {
  id: string;
  title: string;
  counterpartNation: string;
  counterpartFlag: string;
  venue: string;
  context: string;
  bangladeshMission: string;
  rounds: NegotiationRound[];
  treatyTemplate: {
    agreementTitle: string;
    signatories: string[];
    corePreamble: string;
    articles: string[];
  };
}

export const NEGOTIATION_SCENARIOS_DATA: NegotiationScenario[] = [
  {
    id: 'teesta-water-accord',
    title: 'Teesta River Comprehensive Water-Sharing & Barrage Protocol',
    counterpartNation: 'Republic of India',
    counterpartFlag: '🇮🇳',
    venue: 'Joint Rivers Commission (JRC) High-Level Plenary, New Delhi / Dhaka',
    context: 'The dry season flow of the Teesta River drops below 1,000 cusecs due to upstream withdrawal at the Gazaldoba Barrage in West Bengal, threatening northern Bangladesh\'s irrigation, agriculture, and ecology.',
    bangladeshMission: 'Secure a minimum guaranteed dry-season release of 37.5% - 40% flow, establish joint hydrological telemetry monitoring, and safeguard sovereign rights to utilize international financing for river restoration.',
    rounds: [
      {
        roundNumber: 1,
        stageTitle: 'Opening Demands on Dry-Season Flow Allocation',
        counterpartSpeaker: 'Joint Secretary, Ministry of Jal Shakti',
        counterpartRole: 'Head of Indian Technical Delegation',
        counterpartDemand: '"Given West Bengal domestic agrarian requirements, our baseline offer is 25% of lean-season flow, conditional upon seasonal upstream availability without punitive baseline guarantees."',
        tacticalAdvice: 'Accepting 25% leaves Rangpur vulnerable to desertification. A hardline rejection without empirical hydrological counter-data risks stalling talks.',
        options: [
          {
            id: 't1_opt1',
            responseTitle: 'Empirical 50-50 Equal Entitlement Counter-Claim',
            responseDescription: 'Present satellite telemetry data and international basin law (1997 UN Watercourses Convention) demanding an equitable 50-50 share of Gazaldoba inflow with an irreducible 37.5% floor.',
            tacticalStyle: 'Hardline Sovereignty',
            leverageDelta: 15,
            autonomyDelta: 10,
            economicGainDelta: 10,
            opponentCounterReaction: 'The Indian side registers the empirical rigour and acknowledges the 1983 ad-hoc baseline, agreeing to shift negotiations toward a 40% compromise threshold.',
            evalRationale: 'Anchoring demands on international riparian law and verifiable telemetry prevents early diplomatic erosion.'
          },
          {
            id: 't1_opt2',
            responseTitle: 'Package Water Allocation with Transshipment Rail Transit Concessions',
            responseDescription: 'Offer expedited regional rail transit protocols for Indian goods to Tripura in exchange for India locking in a 42.5% dry-season water guarantee.',
            tacticalStyle: 'Asymmetric Hedging',
            leverageDelta: 10,
            autonomyDelta: -5,
            economicGainDelta: 15,
            opponentCounterReaction: 'Indian delegation welcomes the logistics connectivity linkage and signals readiness to overrule regional objections on flow allocations.',
            evalRationale: 'Effective cross-issue linkage, though slightly dilutes sovereign separation of transit and water rights.'
          },
          {
            id: 't1_opt3',
            responseTitle: 'Passive Acceptance of 25% with Annual Review Clause',
            responseDescription: 'Accept the 25% baseline proposal to preserve bilateral goodwill, proposing an informal consultative review after three years.',
            tacticalStyle: 'Constructive Compromise',
            leverageDelta: -15,
            autonomyDelta: -15,
            economicGainDelta: -10,
            opponentCounterReaction: 'Counterparts easily lock in the low threshold, cementing permanent dry-season irrigation deficits in northern Bangladesh.',
            evalRationale: 'Severe diplomatic capitulation compromising national food sovereignty.'
          }
        ]
      },
      {
        roundNumber: 2,
        stageTitle: 'River Restoration Financing & Third-Party Engineering Clause',
        counterpartSpeaker: 'Special Envoy, Ministry of External Affairs',
        counterpartRole: 'Chief Political Diplomat',
        counterpartDemand: '"India raises severe strategic objections to Chinese engineering participation in the Teesta River Comprehensive Management Project near the Siliguri Corridor. We demand an exclusive bilateral implementation mechanism."',
        tacticalAdvice: 'Bangladesh needs engineering capital for river dredging. Yielding exclusive rights must be compensated with Indian concessionary grants and binding construction timelines.',
        options: [
          {
            id: 't2_opt1',
            responseTitle: 'Sovereign Multi-Donor Consortium with Transparent Environmental Scrutiny',
            responseDescription: 'Affirm sovereign prerogative to tender contracts transparently, proposing a co-financed multilateral structure (World Bank/ADB/JICA) while inviting Indian engineering firms on merit.',
            tacticalStyle: 'Asymmetric Hedging',
            leverageDelta: 20,
            autonomyDelta: 15,
            economicGainDelta: 15,
            opponentCounterReaction: 'Indian side drops total veto in favor of a joint environmental oversight team, neutralizing the regional security standoff.',
            evalRationale: 'Exemplary omnidirectional diplomacy: defends national sovereignty while maintaining peaceful bilateral relations.'
          },
          {
            id: 't2_opt2',
            responseTitle: 'Grant Exclusive Project Mandate to India with Full Grant Financing',
            responseDescription: 'Agree to exclude non-regional actors if India funds 80% of the Teesta reservoir project through non-repayable grants with a 36-month completion guarantee.',
            tacticalStyle: 'Constructive Compromise',
            leverageDelta: 5,
            autonomyDelta: -10,
            economicGainDelta: 20,
            opponentCounterReaction: 'India accepts the project mandate, though bureaucratic disbursement delays remain an implementation risk.',
            evalRationale: 'Secures vital capital but reduces strategic flexibility regarding China.'
          }
        ]
      },
      {
        roundNumber: 3,
        stageTitle: 'Finalizing Binding Arbitration & Joint Telemetry Verification',
        counterpartSpeaker: 'Foreign Secretary',
        counterpartRole: 'Delegation Leader',
        counterpartDemand: '"We propose that disputes be settled solely through ministerial consultations without third-party technical tribunals or automated telemetry data sharing."',
        tacticalAdvice: 'Non-binding dispute resolution has caused water treaties to fail historically. Insist on automated digital telemetry at border entry points.',
        options: [
          {
            id: 't3_opt1',
            responseTitle: 'Mandate Real-Time IoT Telemetry & Permanent JRC Arbitral Panel',
            responseDescription: 'Insist on an automated digital flow-sensor station at Dalia Barrage with real-time public data transparency and a 3-member technical arbitral tribunal.',
            tacticalStyle: 'Hardline Sovereignty',
            leverageDelta: 15,
            autonomyDelta: 15,
            economicGainDelta: 10,
            opponentCounterReaction: 'Delegation concedes to digital sensor verification, creating the most transparent transboundary river accord in South Asia.',
            evalRationale: 'Transforms water management from political ambiguity into verifiable empirical jurisprudence.'
          }
        ]
      }
    ],
    treatyTemplate: {
      agreementTitle: 'Comprehensive Treaty on the Conservation, Equitable Flow Allocation, and Management of the Teesta River Basin',
      signatories: ['Chief Diplomatic Envoy, Government of Bangladesh', 'Foreign Secretary, Government of India'],
      corePreamble: 'Reaffirming principles of equitable utilization, no significant harm, and transparent transboundary hydrological cooperation under international law.',
      articles: [
        'Article I: Guaranteed Minimum Flow — Bangladesh shall receive a verified dry-season flow allocation of not less than 38.5% at the Dalia border crossing.',
        'Article II: Real-Time IoT Telemetry — Automated joint telemetry sensors shall transmit daily volume data accessible to both delegations.',
        'Article III: River Restoration Consortium — Multilateral financing shall be mobilized for structural dredging, embankment stabilization, and ecological reservoir storage.',
        'Article IV: Dispute Resolution Mechanism — Mandatory referral to a Joint Technical Arbitral Tribunal in the event of unresolved variances exceeding 7 consecutive days.'
      ]
    }
  },
  {
    id: 'cepa-japan-logistics',
    title: 'Bangladesh-Japan CEPA & Bay of Bengal Maritime Energy Gateway',
    counterpartNation: 'Japan',
    counterpartFlag: '🇯🇵',
    venue: 'Ministry of Foreign Affairs (MOFA), Tokyo / Matarbari Port Hub',
    context: 'Negotiating a landmark Comprehensive Economic Partnership Agreement (CEPA) to retain duty-free tariff access post-2026 LDC graduation and institutionalize Japanese investment in Matarbari.',
    bangladeshMission: 'Secure 10-year preferential tariff transition for RMG and pharmaceuticals, unlock $3B in semiconductor and green-energy FDI, and establish Matarbari as a regional energy transshipment hub.',
    rounds: [
      {
        roundNumber: 1,
        stageTitle: 'Tariff Phase-Outs & Rules of Origin Flexibility',
        counterpartSpeaker: 'Director-General for Trade Policy',
        counterpartRole: 'METI Tokyo Leader',
        counterpartDemand: '"Japan requests accelerated zero-tariff entry on Japanese automotive and industrial machinery within 3 years, while applying standard double-transformation rules of origin on Bangladesh textiles."',
        tacticalAdvice: 'Bangladesh needs gradual tariff cuts to protect domestic nascent industries while demanding relaxed single-transformation yarn-forward rules.',
        options: [
          {
            id: 'j1_opt1',
            responseTitle: 'Propose 7-Year Staged Auto Tariff Reduction with Single-Transformation Textile Access',
            responseDescription: 'Offer a phased 7-year glidepath for Japanese automobiles and machinery in exchange for 10-year duty-free garment access under simplified single-transformation rules.',
            tacticalStyle: 'Constructive Compromise',
            leverageDelta: 15,
            autonomyDelta: 10,
            economicGainDelta: 20,
            opponentCounterReaction: 'Japanese delegation enthusiastically accepts, forecasting a 45% surge in bilateral trade over five years.',
            evalRationale: 'Masterclass in win-win geoeconomic bargaining: protects revenue while securing prime export markets.'
          }
        ]
      }
    ],
    treatyTemplate: {
      agreementTitle: 'Comprehensive Economic Partnership Agreement (CEPA) on Trade, Investment, and Maritime Connectivity',
      signatories: ['Minister for Foreign Affairs, Bangladesh', 'Minister of Economy, Trade and Industry, Japan'],
      corePreamble: 'Elevating the Strategic Partnership through rules-based economic integration, green energy logistics, and regional supply chain resilience.',
      articles: [
        'Article I: Preferential Market Access — 10-year tariff exemption on apparel, pharmaceuticals, and leather goods.',
        'Article II: Matarbari Free Port Zone — Japanese corporations granted dedicated logistics terminal rights in exchange for $2B in renewable hydrogen and port infrastructure development.',
        'Article III: Semiconductor Talent Corridor — Bilateral vocational accreditation program training 5,000 Bangladeshi high-tech engineers annually.'
      ]
    }
  }
];
