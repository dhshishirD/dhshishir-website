// Executive Communication, Diplomatic Negotiation & Coordination Skills Masterclass Database
// Comprehensive curriculum, interactive exercises, decision trees, and capstone exam

export interface CourseModule {
  id: string;
  moduleNumber: number;
  title: string;
  subtitle: string;
  estimatedMinutes: number;
  thematicFocus: string;
  learningObjectives: string[];
  coreTheory: {
    frameworkName: string;
    origin: string;
    summary: string;
    keyPrinciples: { title: string; explanation: string; practicalRule: string }[];
  };
  interactiveExercise: {
    type: 'bluf_transformer' | 'raci_builder' | 'negotiation_calculator' | 'crisis_branching' | 'prep_builder';
    title: string;
    instructions: string;
  };
  executiveToolkitDownloads: { templateName: string; format: string; description: string }[];
}

export interface CrisisScenario {
  id: string;
  title: string;
  context: string;
  stakeholders: string[];
  initialDilemma: string;
  branches: {
    optionId: string;
    choiceText: string;
    consequence: string;
    diplomaticScore: number; // 0 - 100
    expertFeedback: string;
    followUpOptions?: {
      optionId: string;
      choiceText: string;
      consequence: string;
      diplomaticScore: number;
      expertFeedback: string;
    }[];
  }[];
}

export interface CapstoneQuestion {
  id: number;
  scenario: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  rationale: string;
}

// 5 Comprehensive Interactive Course Modules
export const COMMUNICATION_MODULES: CourseModule[] = [
  {
    id: 'module-1-executive-writing',
    moduleNumber: 1,
    title: 'The Executive Writing & Strategic Email Architecture',
    subtitle: 'Mastering the Pyramid Principle (BLUF), 1-Page Decision Memos & High-Impact Correspondence',
    estimatedMinutes: 25,
    thematicFocus: 'Clarity, Brevity & Upward Alignment',
    learningObjectives: [
      'Apply Barbara Minto’s McKinsey Pyramid Principle to structure complex intelligence into 3-minute executive briefs.',
      'Deploy the BLUF (Bottom Line Up Front) model to increase executive email response rates by 300%.',
      'Eliminate passive fluff, hedging qualifiers, and ambiguous phrasing from high-stakes correspondence.'
    ],
    coreTheory: {
      frameworkName: 'The Minto Pyramid Principle & BLUF (Bottom Line Up Front)',
      origin: 'Developed at McKinsey & Company & US Department of Defense Executive Briefings',
      summary: 'Senior executives and diplomatic decision-makers process information hierarchically. Leading with background narrative causes cognitive overload; leading with the core conclusion enables immediate decision-making.',
      keyPrinciples: [
        {
          title: '1. Lead with the Bottom Line (BLUF)',
          explanation: 'State the required decision, request, or critical recommendation in the first 2 sentences.',
          practicalRule: 'Never bury the ask below the third paragraph.'
        },
        {
          title: '2. The 5 C’s of High-Stakes Coordination',
          explanation: 'Clear (unambiguous terms), Concise (under 150 words), Contextual (why now), Concrete (actionable dates/metrics), Courteous (diplomatic tone).',
          practicalRule: 'Every email must have exactly one primary Call to Action (CTA).'
        },
        {
          title: '3. MECE Categorization (Mutually Exclusive, Collectively Exhaustive)',
          explanation: 'Group supporting arguments into non-overlapping logical pillars.',
          practicalRule: 'Use bulleted categories: (a) Strategic Impact, (b) Fiscal Implication, (c) Risk Mitigation.'
        }
      ]
    },
    interactiveExercise: {
      type: 'bluf_transformer',
      title: 'Live Executive Email Transformer',
      instructions: 'Analyze passive, rambling emails and transform them into crisp, action-oriented BLUF decision memos.'
    },
    executiveToolkitDownloads: [
      { templateName: '1-Page Executive Decision Memo Framework', format: '.DOC / Word', description: 'Standardized layout used by multilateral secretariats and Fortune 500 boards.' },
      { templateName: 'Executive Email Subject Line & BLUF Matrix', format: '.DOC / Word', description: '25 high-conversion email templates for ministers, ambassadors, and CEOs.' }
    ]
  },
  {
    id: 'module-2-raci-coordination',
    moduleNumber: 2,
    title: 'Multilateral Cross-Functional Coordination & RACI Orchestration',
    subtitle: 'Structuring Inter-Agency Stakeholder Governance, Asynchronous Workflows & Meeting Discipline',
    estimatedMinutes: 30,
    thematicFocus: 'Accountability, Inter-Agency Alignment & Workflow Orchestration',
    learningObjectives: [
      'Design comprehensive RACI matrices to eliminate scope ambiguity across multi-stakeholder consortia.',
      'Navigate inter-agency tensions between government ministries, UN missions, and civil society partners.',
      'Enforce ruthless meeting hygiene with pre-alignment (Nemawashi), strict time-boxing, and action trackers.'
    ],
    coreTheory: {
      frameworkName: 'The RACI Matrix & Stakeholder Salience Framework',
      origin: 'Project Management Institute (PMI) & UN Inter-Agency Coordination Models',
      summary: 'Large multi-stakeholder initiatives fail when accountability is diffuse. The RACI framework assigns definitive ownership: exactly one Accountable decision-maker per milestone.',
      keyPrinciples: [
        {
          title: '1. Singular Accountability Principle',
          explanation: 'Multiple people can be Responsible (doers), but only ONE individual must be Accountable (approver).',
          practicalRule: 'If more than one person is Accountable, no one is accountable.'
        },
        {
          title: '2. Pre-Alignment Diplomacy (Nemawashi)',
          explanation: 'Never introduce a controversial proposal in a large plenary meeting without prior 1-on-1 consultations.',
          practicalRule: 'Secure key stakeholder consensus before the formal vote or project sign-off.'
        },
        {
          title: '3. Asynchronous-First Coordination',
          explanation: 'Reserve synchronous meetings strictly for live debate and decision approvals, not passive status reading.',
          practicalRule: 'Distribute pre-read documentation 24 hours in advance with mandatory silent reading.'
        }
      ]
    },
    interactiveExercise: {
      type: 'raci_builder',
      title: 'Interactive Multi-Stakeholder RACI Matrix Builder',
      instructions: 'Build, edit, and export a complete RACI matrix for a real-world multilateral development project.'
    },
    executiveToolkitDownloads: [
      { templateName: 'Multi-Agency RACI Matrix Template', format: '.DOC / Excel', description: 'Fully customizable stakeholder responsibility grid.' },
      { templateName: 'Executive Meeting Action-Item Protocol', format: '.DOC / Word', description: 'Template for 5-minute meeting summaries with hard deadlines and single owners.' }
    ]
  },
  {
    id: 'module-3-principled-negotiation',
    moduleNumber: 3,
    title: 'Strategic Negotiation & Principled Bargaining',
    subtitle: 'Harvard Program on Negotiation (PON): BATNA, ZOPA & Value-Expanding Logrolling',
    estimatedMinutes: 35,
    thematicFocus: 'Win-Win Bargaining, Value Creation & Interest Alignment',
    learningObjectives: [
      'Master the Fisher & Ury "Getting to Yes" model: separate people from the problem and focus on underlying interests.',
      'Calculate precise BATNA (Best Alternative to a Negotiated Agreement) and ZOPA (Zone of Possible Agreement).',
      'Execute multi-issue logrolling to create asymmetrical value without making one-sided concessions.'
    ],
    coreTheory: {
      frameworkName: 'Harvard Principled Negotiation (Fisher, Ury & Patton)',
      origin: 'Harvard Law School Program on Negotiation (PON)',
      summary: 'Positional bargaining results in bitter stalemates. Principled negotiation identifies hidden complementary interests, expanding the pie before dividing it.',
      keyPrinciples: [
        {
          title: '1. Separate the People from the Problem',
          explanation: 'Be soft on the people (respectful, validating emotions) but uncompromisingly hard on the problem (objective criteria).',
          practicalRule: 'Never attack personal motives; critique the structural baseline.'
        },
        {
          title: '2. Focus on Underlying Interests, Not Fixed Positions',
          explanation: 'A position is what a party demands; an interest is the underlying fear, need, or aspiration driving that demand.',
          practicalRule: 'Ask "Why is this timeline critical for your ministry?" instead of "We cannot meet this date."'
        },
        {
          title: '3. Never Negotiate Without a Robust BATNA',
          explanation: 'Your power in any negotiation is directly proportional to the strength of your alternative option.',
          practicalRule: 'Strengthen your Walk-Away Alternative before entering the conference room.'
        }
      ]
    },
    interactiveExercise: {
      type: 'negotiation_calculator',
      title: 'BATNA & ZOPA Diagnostic Range Calculator',
      instructions: 'Calculate buyer/seller reservation values, evaluate overlap zones, and simulate trade-offs across 4 dimensions.'
    },
    executiveToolkitDownloads: [
      { templateName: 'Harvard PON Negotiation Preparation Worksheet', format: '.DOC / Word', description: 'Comprehensive 7-element preparation sheet for high-stakes bilateral talks.' },
      { templateName: 'Multi-Issue Value Creation Trade-Off Matrix', format: '.DOC / Excel', description: 'Logrolling matrix to balance budget, timelines, scope, and public credits.' }
    ]
  },
  {
    id: 'module-4-crisis-de-escalation',
    moduleNumber: 4,
    title: 'Crisis De-escalation & Diplomatic Conflict Resolution',
    subtitle: 'Non-Violent Communication, Blameless Post-Mortems & Multi-Stakeholder Crisis Management',
    estimatedMinutes: 30,
    thematicFocus: 'High-Stakes Mediation, De-escalation & Psychological Safety',
    learningObjectives: [
      'Deploy Marshall Rosenberg’s Non-Violent Communication (NVC) to defuse hostile stakeholder confrontations.',
      'Run Google-style Blameless Post-Mortems following project failures or diplomatic miscommunications.',
      'Navigate multi-branching crisis decision trees under extreme time pressure and contradictory stakeholder demands.'
    ],
    coreTheory: {
      frameworkName: 'De-escalation & Blameless Root Cause Governance',
      origin: 'Consensus Building Institute (CBI) & High-Reliability Organizational (HRO) Studies',
      summary: 'Crises trigger emotional defensiveness and finger-pointing. Professional crisis coordinators shift the focus from assigning personal blame to analyzing system failures and repairing trust.',
      keyPrinciples: [
        {
          title: '1. The OFNR De-escalation Sequence',
          explanation: 'Observation (objective facts without judgment) ➔ Feeling (state impact) ➔ Need (core institutional requirement) ➔ Request (concrete action).',
          practicalRule: 'Replace "You failed to submit the report" with "The donor deadline was missed by 48 hours, creating compliance risk."'
        },
        {
          title: '2. Blameless Post-Mortem Architecture',
          explanation: 'Assume competent actors operating with incomplete information; identify procedural vulnerabilities.',
          practicalRule: 'Ask "What checks in our process allowed this failure?" rather than "Who made the mistake?"'
        },
        {
          title: '3. Tactical Emotional Validation',
          explanation: 'Acknowledge stakeholder frustration before presenting corrective data.',
          practicalRule: 'Say "I understand why this delay is unacceptable for your team; let us examine the immediate containment steps."'
        }
      ]
    },
    interactiveExercise: {
      type: 'crisis_branching',
      title: 'Live Branching Crisis Decision Simulator',
      instructions: 'Make critical choices across 4 real-world humanitarian, financial, and supply chain crisis scenarios.'
    },
    executiveToolkitDownloads: [
      { templateName: 'Incident Post-Mortem & Corrective Action Protocol', format: '.DOC / Word', description: 'Standard operating procedure for documenting failures and preventing recurrence.' },
      { templateName: 'Hostile Stakeholder De-escalation Script Deck', format: '.DOC / Word', description: '10 verbatim phrasing scripts for handling aggressive pushback and scope creep.' }
    ]
  },
  {
    id: 'module-5-verbal-briefing',
    moduleNumber: 5,
    title: 'Executive Verbal Delivery & High-Stakes Briefing',
    subtitle: 'The PREP Framework, Managing Hostile Q&A & Command Presence under Pressure',
    estimatedMinutes: 25,
    thematicFocus: 'Verbal Precision, Cognitive Poise & Impromptu Speaking',
    learningObjectives: [
      'Deliver impromptu 60-second executive responses using the PREP (Point, Reason, Example, Point) framework.',
      'Maintain vocal cadence, strategic pauses, and eradicate tentative weak fillers (e.g., "um", "sort of", "kind of").',
      'Bridge aggressive or off-topic press/parliamentary questions back to core strategic messages without evading.'
    ],
    coreTheory: {
      frameworkName: 'The PREP Structure & Diplomatic Bridging Technique',
      origin: 'Royal Institute of International Affairs & Executive Media Coaching',
      summary: 'When questioned under intense scrutiny, ramble is fatal. The PREP framework ensures your verbal message is anchored in a memorable thesis supported by empirical evidence.',
      keyPrinciples: [
        {
          title: '1. The PREP Quadrant',
          explanation: 'Point (clear assertion) ➔ Reason (underlying logic) ➔ Example (concrete evidence/metric) ➔ Point (reinforce conclusion).',
          practicalRule: 'Limit your impromptu spoken response to under 75 seconds.'
        },
        {
          title: '2. The Diplomatic Bridge (Acknowledge ➔ Pivot ➔ Bridge)',
          explanation: 'Acknowledge the hostile premise ➔ Pivot away from the trap ➔ Bridge to the substantive reform agenda.',
          practicalRule: 'Use: "That highlights the historical challenge; what our current audit proves is..."'
        },
        {
          title: '3. Acoustic Gravitas & The 2-Second Strategic Pause',
          explanation: 'Rushing to speak signals anxiety; pausing for 2 seconds before answering demonstrates commanding executive control.',
          practicalRule: 'Never speak while inhaling; pause, anchor your posture, and speak on the exhale.'
        }
      ]
    },
    interactiveExercise: {
      type: 'prep_builder',
      title: 'Interactive PREP Speech & Q&A Simulator',
      instructions: 'Construct concise, structured verbal arguments for difficult impromptu questions in under 60 seconds.'
    },
    executiveToolkitDownloads: [
      { templateName: 'PREP Verbal Briefing Cue Card', format: '.DOC / PDF', description: 'Pocket-sized printable reference for press briefings and minister meetings.' },
      { templateName: 'Executive Q&A Bridging Phrasebook', format: '.DOC / Word', description: '30 tactical pivot phrases for difficult interviews and hostile board meetings.' }
    ]
  }
];

// 4 Complex Real-World Crisis Branching Scenarios
export const CRISIS_SCENARIOS: CrisisScenario[] = [
  {
    id: 'humanitarian-supply-crisis',
    title: 'Rohingya Humanitarian Camp Logistics & Cold-Chain Breakdown',
    context: 'A monsoon landslide has severed the main access road to Camp 4 in Cox’s Bazar. 25,000 temperature-sensitive child vaccines are stranded in a refrigerated truck with fuel running out in 6 hours. Local civil administration is demanding immediate relocation of the truck to an unverified military checkpoint, while the lead medical INGO fears vaccine spoilage and breach of humanitarian protocol.',
    stakeholders: ['UNHCR Camp In-Charge (CIC)', 'District Administration (DC Office)', 'Lead Medical INGO (MSF/IRC)', 'Armed Forces Logistics Unit'],
    initialDilemma: 'The DC Office orders you to transfer the cargo immediately to uncooled military transport. The Medical Director warns that without continuous cold-chain monitoring, the vaccines will spoil within 45 minutes.',
    branches: [
      {
        optionId: 'opt-1-agree-transfer',
        choiceText: 'Immediately follow the DC Office directive and transfer the vaccines to open military trucks to clear the road.',
        consequence: 'The vaccines lose cold-chain integrity during the 3-hour muddy transit. 25,000 doses are rendered biologically inert, triggering an international donor investigation and a public health catastrophe.',
        diplomaticScore: 25,
        expertFeedback: 'Unilateral compliance without technical safeguards sacrificed the core medical mission. In humanitarian logistics, technical integrity cannot be compromised for administrative expediency.'
      },
      {
        optionId: 'opt-2-confront-dc',
        choiceText: 'Refuse the DC Office order publicly, citing UN neutrality, and demand an emergency diplomatic standoff until your team fixes the road.',
        consequence: 'The DC Office revokes the INGO’s district access permits. Armed security halts all operations, and the vaccines spoil inside the stalled truck while fuel expires.',
        diplomaticScore: 35,
        expertFeedback: 'Adversarial confrontation with sovereign local authorities paralyzes operational channels. Principled negotiation requires validating the authority’s road clearance concern while proposing technical co-solutions.'
      },
      {
        optionId: 'opt-3-principled-bridge',
        choiceText: 'Propose a Tripartite Rapid Solution: Request military escort for immediate diesel fuel delivery to the refrigerated truck, while deploying a joint military-INGO ATV team with portable cold-boxes to ferry critical batches.',
        consequence: 'The military agrees to refuel the truck generator, extending cold-chain life by 48 hours. The joint ATV convoy safely delivers the first 5,000 urgent infant doses. The District Commissioner commends the collaborative initiative in national media.',
        diplomaticScore: 98,
        expertFeedback: 'Outstanding executive coordination! You satisfied the military’s desire for proactive action, protected the INGO’s cold-chain protocol, and preserved sovereign administrative alignment.'
      }
    ]
  },
  {
    id: 'bilateral-donor-grant-crisis',
    title: 'Bilateral Donor Compliance Audit & Alleged Procurement Variance',
    context: 'A major European donor agency audits a $12M climate adaptation project in coastal Bangladesh. The audit uncovers a $450,000 variance in embankment geotextile tube procurement by a local implementing partner. The donor threatening to freeze all country funding within 72 hours unless the funds are reimbursed immediately by the lead consortium.',
    stakeholders: ['European Bilateral Donor Head of Mission', 'Ministry of Environment & Climate Change', 'Lead Consortium Project Director', 'Local Sub-Contractor'],
    initialDilemma: 'The donor demands immediate public termination of the local partner and sovereign fund clawback. The Ministry warns that terminating the local partner will trigger labor strikes that stall 40km of flood embankments before the hurricane season.',
    branches: [
      {
        optionId: 'opt-b1-deny-audit',
        choiceText: 'Challenge the audit methodology aggressively in a formal press release and claim bureaucratic donor overreach.',
        consequence: 'The donor terminates the entire $12M grant portfolio, places the consortium on an EU-wide blacklist, and withdraws 3 other national development programs.',
        diplomaticScore: 20,
        expertFeedback: 'Aggressive denial of fiduciary audits destroys institutional credibility permanently. Fiduciary concerns require radical forensic transparency.'
      },
      {
        optionId: 'opt-b2-proactive-quarantine',
        choiceText: 'Instantly quarantine the sub-contractor’s disputed component, commission an independent forensic audit with a 48-hour delivery timeline, place the disputed sum into an escrow holding account, and install third-party engineering monitors so embankment construction continues uninterrupted.',
        consequence: 'The donor agrees to suspend the funding freeze while the escrow protects fiduciary liability. Embankment construction continues on schedule, preventing tidal flooding for 80,000 villagers. The forensic audit pinpoints procedural inventory miscoding rather than fraud, saving the partnership.',
        diplomaticScore: 96,
        expertFeedback: 'Exemplary crisis de-escalation! By decoupling the fiduciary risk (via escrow and independent audit) from the operational imperative (embankment construction), you preserved donor trust and community safety.'
      }
    ]
  }
];

// 10-Question Comprehensive Capstone Assessment
export const CAPSTONE_QUESTIONS: CapstoneQuestion[] = [
  {
    id: 1,
    scenario: 'You are submitting an urgent request to the Ministry of Finance to approve a $2.5M emergency counterpart funding reallocation for a coastal flood barrier before fiscal year-end.',
    question: 'According to the Minto Pyramid Principle and BLUF framework, how should your executive memo begin?',
    options: [
      'A chronological recap of the 2022 flood damages and all bilateral meetings held over the past 18 months.',
      'A direct statement in the first 2 sentences requesting the $2.5M counterpart funding reallocation, followed by the specific fiscal code and the deadline for signature.',
      'A philosophical discussion on climate justice and historical global emissions trajectories.',
      'A polite opening praising the Minister’s leadership, leaving the financial request for the final concluding paragraph.'
    ],
    correctAnswerIndex: 1,
    rationale: 'The BLUF (Bottom Line Up Front) model mandates stating the concrete decision or request in the first 2 sentences, allowing decision-makers to immediately grasp the ask and its urgency.'
  },
  {
    id: 2,
    scenario: 'In a multi-agency UN and Government task force, three different directors claim they have the final decision-making power over which geographic districts receive solar microgrid subsidies.',
    question: 'According to RACI governance rules, how must this structural breakdown be resolved?',
    options: [
      'Designate all three directors as Accountable (A) to prevent political friction.',
      'Eliminate the Accountable role entirely and make decisions by unanimous majority vote in every meeting.',
      'Assign exactly ONE director as Accountable (A), while designating the other two as Consulted (C) or Responsible (R).',
      'Delegate accountability down to entry-level field interns.'
    ],
    correctAnswerIndex: 2,
    rationale: 'Under RACI principles, exactly ONE person must be Accountable (A) for each milestone. Having multiple Accountable owners diffuses responsibility and guarantees decision paralysis.'
  },
  {
    id: 3,
    scenario: 'During bilateral trade negotiations, the opposing delegation stubbornly insists on a 0% tariff on electrical machinery, which your government’s domestic industry heavily opposes.',
    question: 'How should a principled negotiator apply Fisher & Ury’s Harvard PON framework here?',
    options: [
      'Walk out of the negotiation room immediately and cut off all diplomatic communications.',
      'Inquire into the underlying interests behind the 0% tariff demand (e.g., green transition equipment availability) and explore multi-issue logrolling (e.g., phased tariff reductions tied to local assembly quotas).',
      'Surrender completely and agree to 0% tariffs without securing any reciprocal concessions.',
      'Attack the opposing lead negotiator personally in the media.'
    ],
    correctAnswerIndex: 1,
    rationale: 'Principled negotiation moves beyond rigid positional demands to explore underlying interests, creating trade-offs that satisfy both parties’ strategic goals.'
  },
  {
    id: 4,
    scenario: 'You are preparing for a difficult negotiation with an international IT vendor who has a near-monopoly on your organization’s core database software.',
    question: 'What is the single most effective way to increase your bargaining power before entering the room?',
    options: [
      'Show aggressive body language and raise your voice during opening remarks.',
      'Strengthen your BATNA by developing a fully viable alternative open-source migration plan and obtaining quotes from secondary vendors.',
      'Pretend you have unlimited budget to impress the vendor.',
      'Refuse to sign any confidentiality agreements.'
    ],
    correctAnswerIndex: 1,
    rationale: 'Bargaining power in negotiation derives directly from the strength and credibility of your BATNA (Best Alternative to a Negotiated Agreement).'
  },
  {
    id: 5,
    scenario: 'A project director misses a vital donor milestone for the second time, causing reputational damage to your consortium.',
    question: 'Applying Non-Violent Communication (NVC) and de-escalation principles, how should you initiate the performance conversation?',
    options: [
      '"You are completely irresponsible and always jeopardize our donor funding."',
      '"When the donor milestone was not met on Friday [Observation], I felt concerned about our compliance standing [Feeling], because our consortium needs predictable reporting [Need]. Can we review the workflow bottlenecks together and agree on a daily check-in protocol [Request]?"',
      'Send a passive-aggressive email copying all 45 consortium staff members.',
      'Ignore the issue completely and hope the donor forgets.'
    ],
    correctAnswerIndex: 1,
    rationale: 'The NVC sequence (Observation, Feeling, Need, Request) eliminates inflammatory accusations and focuses on verifiable facts and constructive corrective action.'
  },
  {
    id: 6,
    scenario: 'During a parliamentary committee hearing, an aggressive politician asks you: "Isn’t it true that your organization completely wasted public funds on useless overseas workshops?"',
    question: 'How should you apply the Diplomatic Bridging technique to answer?',
    options: [
      'Say: "No comment, that is none of your business."',
      'Acknowledge the public concern for fiscal accountability, pivot to the audit facts, and bridge to the tangible training outcomes: "We share the committee’s commitment to strict financial stewardship; our independent audit verified that 94% of grant funds went directly to local clinics, training 1,200 emergency midwives who reduced neonatal deaths by 28%."',
      'Admit that all workshops were useless and apologize publicly.',
      'Start arguing about the politician’s personal expenses.'
    ],
    correctAnswerIndex: 1,
    rationale: 'The Diplomatic Bridge acknowledges the underlying value (fiscal stewardship), reframes the premise, and delivers verifiable empirical evidence without becoming defensive.'
  },
  {
    id: 7,
    scenario: 'Your project team experiences a major data corruption failure during a national survey.',
    question: 'What is the central purpose of conducting a "Blameless Post-Mortem"?',
    options: [
      'To identify the junior software engineer responsible and terminate their contract immediately.',
      'To identify systemic, procedural, and tooling vulnerabilities that allowed the failure to occur, establishing automated guardrails so the error cannot repeat.',
      'To draft a public excuse that conceals the failure from stakeholders.',
      'To hold a 4-hour meeting where team members argue over who made the mistake.'
    ],
    correctAnswerIndex: 1,
    rationale: 'Blameless post-mortems treat failures as organizational learning opportunities, focusing on strengthening systems rather than penalizing individuals.'
  },
  {
    id: 8,
    scenario: 'You have exactly 60 seconds to brief an Ambassador on a breaking regional maritime crisis in the hallway.',
    question: 'How should you structure your spontaneous spoken brief using the PREP framework?',
    options: [
      'Point (State the core event and urgent policy recommendation) ➔ Reason (Explain the geopolitical risk) ➔ Example (Cite the specific vessel coordinates and radar telemetry) ➔ Point (Restate the recommended immediate diplomatic communication).',
      'Spend 50 seconds giving historical context of 19th-century naval treaties, then run out of time.',
      'Ask the Ambassador 10 rhetorical questions without offering any answer.',
      'Apologize repeatedly for being nervous.'
    ],
    correctAnswerIndex: 0,
    rationale: 'The PREP framework (Point, Reason, Example, Point) delivers a structured, compelling argument in under 60 seconds.'
  },
  {
    id: 9,
    scenario: 'In cross-cultural diplomatic negotiations with Asian and European counterparts, what does the Japanese concept of "Nemawashi" emphasize?',
    question: 'What is the strategic purpose and mechanism of Nemawashi in multi-stakeholder consensus-building?',
    options: [
      'Aggressive legal posturing during open plenary debates.',
      'The practice of quiet, informal pre-alignment and 1-on-1 consensus-building before formal public voting takes place.',
      'Refusing to speak during meetings to create tension.',
      'Submitting proposals exclusively in handwritten calligraphy.'
    ],
    correctAnswerIndex: 1,
    rationale: 'Nemawashi is the indispensable diplomatic art of pre-aligning key stakeholders privately before introducing proposals publicly, preventing embarrassment and gridlock.'
  },
  {
    id: 10,
    scenario: 'When negotiating a multi-year consultancy agreement, you realize the counterparty cannot increase the financial fee due to strict institutional salary caps.',
    question: 'How can you apply "Value Creation Logrolling" to reach a mutually advantageous agreement?',
    options: [
      'Refuse to work and terminate negotiations immediately.',
      'Trade the fixed salary constraint for high-value asymmetrical concessions: remote working flexibility, research publication authorship credits, international conference travel grants, and performance milestone bonuses.',
      'Agree to work for free out of politeness.',
      'Threaten legal action against the institutional salary cap.'
    ],
    correctAnswerIndex: 1,
    rationale: 'Logrolling trades low-cost, high-value concessions across multiple dimensions when a single dimension (such as base salary) is constrained by rigid caps.'
  }
];
