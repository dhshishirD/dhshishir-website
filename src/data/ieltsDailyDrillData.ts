// Comprehensive 120-Day IELTS Band 8.5-9.0 Daily Action Plan & Directive Dataset
// Structured across 4 Pedagogical Phases with specific daily skill quotas, tool launchers, and examiner traps

export interface DailyDrillAction {
  day: number;
  phase: 1 | 2 | 3 | 4;
  phaseTitle: string;
  title: string;
  focusSkill: 'Listening' | 'Reading' | 'Writing' | 'Speaking' | 'Lexicon' | 'Full Mock';
  estimatedMinutes: number;
  objectives: string[];
  tasks: {
    id: string;
    description: string;
    toolId?: string; // target tool id to launch
    toolLabel?: string;
  }[];
  examinerTip: string;
  commonTrap: string;
}

export const PHASE_METADATA = {
  1: {
    name: 'Phase 1: Foundation & Receptive Rigor',
    daysRange: 'Days 1–30',
    targetScore: 'Band 7.5 → 8.0',
    description: 'Eliminate acoustic distractor traps, master numerical/spelling precision in Listening, and conquer Reading T/F/NG qualifier microscopes.',
    primaryTools: ['listening-simulator', 'reading-lab', 'tfng-court', 'ielts-vocab']
  },
  2: {
    name: 'Phase 2: Pressure Conditioning & Output',
    daysRange: 'Days 31–75',
    targetScore: 'Band 8.0 → 8.5',
    description: 'Listening at 1.15x speed, timed Reading Passage 3 scientific abstracts, SVG Task 1 chart reporting, and AI OCR handwritten essay grading.',
    primaryTools: ['listening-simulator', 'writing-scanner', 'task1-morpher', 'collocation-duel']
  },
  3: {
    name: 'Phase 3: Cambridge Full Mock Simulations',
    daysRange: 'Days 76–105',
    targetScore: 'Band 8.5 → 9.0',
    description: 'Execute full 3-hour authentic mock exams under strict 60m time budgets. Audit all missed items into the 1:2 Forensic Error Vault.',
    primaryTools: ['listening-simulator', 'reading-lab', 'speaking-radar', 'writing-analyzer']
  },
  4: {
    name: 'Phase 4: Peak Tapering, Cadence & Mastery',
    daysRange: 'Days 106–120',
    targetScore: 'Band 8.5 - 9.0 Verified',
    description: 'Speech Flow Radar cadence tuning, 15s Part 3 reflex drills, error log final audit, and claiming verifiable credential certificates.',
    primaryTools: ['speaking-radar', 'collocation-duel', 'daily-drill-tracker']
  }
};

// Generates comprehensive daily directives for all 120 days
export const generateDailyDrillData = (): DailyDrillAction[] => {
  const actions: DailyDrillAction[] = [];

  for (let day = 1; day <= 120; day++) {
    let phase: 1 | 2 | 3 | 4 = 1;
    let phaseTitle = PHASE_METADATA[1].name;
    let focusSkill: DailyDrillAction['focusSkill'] = 'Listening';
    let estimatedMinutes = 90;
    let title = '';
    let objectives: string[] = [];
    let tasks: DailyDrillAction['tasks'] = [];
    let examinerTip = '';
    let commonTrap = '';

    if (day <= 30) {
      phase = 1;
      phaseTitle = PHASE_METADATA[1].name;
      const cycle = (day - 1) % 5;
      
      if (cycle === 0) {
        focusSkill = 'Listening';
        title = `Day ${day}: Section 1 Acoustic Traps & Numerical Spelling`;
        objectives = [
          'Identify telephone, postal code, and surname spelling distractors in Section 1 dialogues.',
          'Differentiate between initial price quotes and discounted final figures.',
          'Build note-taking reflex for currency symbols and measurement units.'
        ];
        tasks = [
          { id: `d${day}-t1`, description: 'Complete Cambridge Simulation Section 1 (Abernathy Aquatic Registration)', toolId: 'listening-simulator', toolLabel: 'Launch Listening Exam (1.0x)' },
          { id: `d${day}-t2`, description: 'Review Section 1 Audio Transcript & Distractor Explanations' },
          { id: `d${day}-t3`, description: 'Log any numerical or spelling errors into 1:2 Forensic Error Vault', toolId: 'daily-drill-tracker', toolLabel: 'Open Error Vault' }
        ];
        examinerTip = 'Speakers frequently correct themselves (e.g. "It was twenty pounds... actually, with tax it came to twenty-four"). Always write the final confirmed number.';
        commonTrap = 'Writing the initial number mentioned before the speaker corrects themselves.';
      } else if (cycle === 1) {
        focusSkill = 'Reading';
        title = `Day ${day}: Forensic True / False / Not Given Logic Court`;
        objectives = [
          'Master mathematical set theory logic for Reading Passages 1 and 2.',
          'Recognize 100% truth qualifiers (always, never, solely) vs probabilistic qualifiers (often, can, likely).',
          'Eliminate "Plausible World Knowledge" assumption traps.'
        ];
        tasks = [
          { id: `d${day}-t1`, description: 'Execute Split-Screen Reading Lab Passage 1 (Neural Plasticity & Memory Consolidation)', toolId: 'reading-lab', toolLabel: 'Launch Reading Lab' },
          { id: `d${day}-t2`, description: 'Solve 3 forensic cases in the T/F/NG Logic Courtroom', toolId: 'tfng-court', toolLabel: 'Open T/F/NG Court' },
          { id: `d${day}-t3`, description: 'Highlighter analysis of paragraph topic sentences and keyword synonyms' }
        ];
        examinerTip = 'NOT GIVEN does not mean the topic is absent; it means the specific claim or comparative relationship cannot be proven from the text alone.';
        commonTrap = 'Assuming a statement is TRUE just because it is scientifically true in real life, even when not stated in the passage.';
      } else if (cycle === 2) {
        focusSkill = 'Lexicon';
        title = `Day ${day}: Band 9 Academic Collocation Duel & Topic Lexicon`;
        objectives = [
          'Master 15 CEFR C1/C2 collocations in AI, Climate Transition, and Public Policy.',
          'Transform Band 5.5 simplistic verbs into Band 8.5+ examiner-level predicates.',
          'Save new lexical items directly into your Personal Vocab Vault.'
        ];
        tasks = [
          { id: `d${day}-t1`, description: 'Play 60-Second Band 9 Speed Collocation Duel (Target: Score 10+)', toolId: 'collocation-duel', toolLabel: 'Play Collocation Duel' },
          { id: `d${day}-t2`, description: 'Explore AI & Environmental Policy Lexicon Decks in Topic Studio', toolId: 'ielts-vocab', toolLabel: 'Open Topic Vocab Studio' },
          { id: `d${day}-t3`, description: 'Save 5 high-impact academic collocations to Personal Vocab Vault' }
        ];
        examinerTip = 'Examiners award Band 9 for Lexical Resource based on natural collocation precision (e.g. "precipitate a crisis" instead of "make a bad problem").';
        commonTrap = 'Using archaic thesaurus synonyms (like "plethora", "myriad") in unnatural syntactic contexts.';
      } else if (cycle === 3) {
        focusSkill = 'Writing';
        title = `Day ${day}: Task 1 Academic Chart Morpher & Preposition Blueprints`;
        objectives = [
          'Master the 6 Golden Preposition Rules (at, to, by, of, in, between).',
          'Craft standard 2-sentence Overview Blueprints highlighting macro trajectories.',
          'Differentiate Percentage (proportion) from Percentage Points (absolute difference).'
        ];
        tasks = [
          { id: `d${day}-t1`, description: 'Drag SVG chart nodes in Task 1 Chart Morpher to generate live Band 8.5 sentences', toolId: 'task1-morpher', toolLabel: 'Open Task 1 Morpher' },
          { id: `d${day}-t2`, description: 'Write 1 complete Task 1 Overview paragraph and check preposition accuracy' },
          { id: `d${day}-t3`, description: 'Review the 5 Overview Blueprints in the Masterclass guide' }
        ];
        examinerTip = 'Never include specific data numbers in the Overview paragraph. The overview must describe only general trends and key features.';
        commonTrap = 'Confusing "increased BY 10%" with "increased TO 10%".';
      } else {
        focusSkill = 'Speaking';
        title = `Day ${day}: Speaking Flow Radar & Speech Cadence Alignment`;
        objectives = [
          'Calibrate spoken rhythm to 125–145 Words-Per-Minute (WPM).',
          'Eliminate unnatural pauses with acoustic thought-group chunking.',
          'Practice 2-minute Part 2 monologue with 60-second preparation buffer.'
        ];
        tasks = [
          { id: `d${day}-t1`, description: 'Record 2-minute Part 2 cue card with live Speaking Flow Radar visualizer', toolId: 'speaking-radar', toolLabel: 'Launch Speaking Flow Radar' },
          { id: `d${day}-t2`, description: 'Check silence alert threshold (eliminate any silence > 2.5 seconds)' },
          { id: `d${day}-t3`, description: 'Practice 3 Part 3 abstract discussion questions with natural fluency fillers' }
        ];
        examinerTip = 'Native speakers do not speak at high speed without pause; they group words into acoustic thought chunks and emphasize content words.';
        commonTrap = 'Pausing in the middle of a prepositional phrase or verb-noun collocation.';
      }

    } else if (day <= 75) {
      phase = 2;
      phaseTitle = PHASE_METADATA[2].name;
      estimatedMinutes = 105;
      const cycle = (day - 31) % 4;

      if (cycle === 0) {
        focusSkill = 'Listening';
        title = `Day ${day}: 1.15x Speed Audio Conditioning & Section 3/4 Focus`;
        objectives = [
          'Train cognitive listening reflex at 1.15x accelerated playback speed.',
          'Track multi-speaker university seminar dialogues in Section 3.',
          'Filter out distractors when 3 speakers debate research methodologies.'
        ];
        tasks = [
          { id: `d${day}-t1`, description: 'Complete Full 4-Section Listening Exam at 1.15x playback speed', toolId: 'listening-simulator', toolLabel: 'Launch Listening (1.15x)' },
          { id: `d${day}-t2`, description: 'Analyze Section 3 research distractor traps in synchronized transcript' },
          { id: `d${day}-t3`, description: 'Log any missed Section 3/4 items to the 1:2 Forensic Vault', toolId: 'daily-drill-tracker', toolLabel: 'Open Error Vault' }
        ];
        examinerTip = 'Training at 1.15x speed makes regular 1.0x exam audio feel noticeably relaxed and easily comprehended on test day.';
        commonTrap = 'Losing place in Section 4 monologues. Always read 2 questions ahead.';
      } else if (cycle === 1) {
        focusSkill = 'Writing';
        title = `Day ${day}: Handwritten Essay OCR Scanner & 4-Pillar Rubric Audit`;
        objectives = [
          'Write a full 250-word Task 2 essay on paper within 40 minutes.',
          'Scan and grade Task Achievement, Coherence, Lexical Resource, and Grammar.',
          'Compare student drafting against Band 9.0 model paragraph structures.'
        ];
        tasks = [
          { id: `d${day}-t1`, description: 'Upload handwritten photo or paste draft into AI Essay Scanner', toolId: 'writing-scanner', toolLabel: 'Open Essay OCR Scanner' },
          { id: `d${day}-t2`, description: 'Review paragraph coherence score & AWL academic word density' },
          { id: `d${day}-t3`, description: 'Rewrite 2 weakest sentences using Band 9 model suggestions' }
        ];
        examinerTip = 'Under Task Achievement, each body paragraph must contain a clear central topic sentence, detailed explanation, and concrete illustrative example.';
        commonTrap = 'Writing vague 1-sentence examples that do not support the primary argument.';
      } else if (cycle === 2) {
        focusSkill = 'Reading';
        title = `Day ${day}: Passage 3 Dense Scientific & Philosophical Texts`;
        objectives = [
          'Skim and scan 900-word dense scientific literature in under 18 minutes.',
          'Master matching sentence endings and global writer opinions.',
          'Eliminate inverted anatomical and causal reasoning traps.'
        ];
        tasks = [
          { id: `d${day}-t1`, description: 'Complete Split-Screen Reading Lab Passage 2 & 3', toolId: 'reading-lab', toolLabel: 'Launch Reading Lab' },
          { id: `d${day}-t2`, description: 'Use interactive color highlighters for topic contrast markers' },
          { id: `d${day}-t3`, description: 'Review forensic logic explanations for all incorrect choices' }
        ];
        examinerTip = 'In Passage 3, questions appear in chronological order 80% of the time. Use headings and capital letters as anchor landmarks.';
        commonTrap = 'Reading every word of the passage before looking at the question prompts.';
      } else {
        focusSkill = 'Speaking';
        title = `Day ${day}: Part 3 Abstract Defense & 15-Second Reflex Drill`;
        objectives = [
          'Respond to complex social, ethical, and economic questions in under 15 seconds.',
          'Use 3-part PREP structure: Point, Reason, Example/Evidence, Point.',
          'Maintain steady 130 WPM cadence without audible hesitation.'
        ];
        tasks = [
          { id: `d${day}-t1`, description: 'Execute 15-Second Reflex Drill in Speaking Flow Radar', toolId: 'speaking-radar', toolLabel: 'Open Speaking Radar' },
          { id: `d${day}-t2`, description: 'Record answers to 5 abstract questions on Globalization & AI', toolId: 'ielts-vocab', toolLabel: 'Review Topic Lexicon' },
          { id: `d${day}-t3`, description: 'Audit speech recordings for filler words ("um", "like", "you know")' }
        ];
        examinerTip = 'In Part 3, never give personal examples (e.g. "My brother did this..."). Speak about society, institutions, historical trends, and demographics.';
        commonTrap = 'Giving short, 1-sentence answers in Part 3. Aim for 4–5 sentences per prompt.';
      }

    } else if (day <= 105) {
      phase = 3;
      phaseTitle = PHASE_METADATA[3].name;
      estimatedMinutes = 150;
      focusSkill = (day % 2 === 0) ? 'Full Mock' : 'Writing';
      title = `Day ${day}: Authentic Cambridge Simulation & 1:2 Error Re-Test`;
      objectives = [
        'Complete timed multi-section practice simulating authentic exam fatigue.',
        'Target 38–40/40 in Listening and Reading.',
        'Execute mandatory 48-hour re-tests on all logged Error Vault items.'
      ];
      tasks = [
        { id: `d${day}-t1`, description: 'Take Full 4-Section Listening Exam (Target: 38+/40)', toolId: 'listening-simulator', toolLabel: 'Launch Listening Exam' },
        { id: `d${day}-t2`, description: 'Take 3-Passage Split-Screen Reading Lab (60-minute strict timer)', toolId: 'reading-lab', toolLabel: 'Launch Reading Lab' },
        { id: `d${day}-t3`, description: 'Re-test 5 previous missed questions in 1:2 Forensic Error Vault', toolId: 'daily-drill-tracker', toolLabel: 'Open Error Vault' }
      ];
      examinerTip = 'Exam stamina is physical. Doing Reading immediately after Listening without breaks trains brain focus under cognitive fatigue.';
      commonTrap = 'Failing to re-test missed questions. What you don’t review, you will repeat.';

    } else {
      phase = 4;
      phaseTitle = PHASE_METADATA[4].name;
      estimatedMinutes = 60;
      focusSkill = 'Speaking';
      title = `Day ${day}: Peak Tapering, Cadence Radar & Credential Certification`;
      objectives = [
        'Taper practice intensity to prevent cognitive burnout before official test date.',
        'Polish native speech cadence, intonation peaks, and confidence.',
        'Verify your official credentials and claim your digital Band 8.5+ certificate.'
      ];
      tasks = [
        { id: `d${day}-t1`, description: '15-minute Speaking Cadence warm-up with Flow Radar', toolId: 'speaking-radar', toolLabel: 'Launch Flow Radar' },
        { id: `d${day}-t2`, description: 'Play 1 round of Band 9 Collocation Speed Duel for lexical activation', toolId: 'collocation-duel', toolLabel: 'Play Collocation Duel' },
        { id: `d${day}-t3`, description: 'Audit Learner Dashboard and claim Verifiable Certificate of Mastery', toolId: 'daily-drill-tracker', toolLabel: 'View Dashboard & Certs' }
      ];
      examinerTip = 'In the final days before the exam, focus on confidence, pronunciation clarity, and sleep. Do not take stressful high-volume tests the night before.';
      commonTrap = 'Over-cramming in the final 48 hours leading to mental fatigue during Section 3/4.';
    }

    actions.push({
      day,
      phase,
      phaseTitle,
      title,
      focusSkill,
      estimatedMinutes,
      objectives,
      tasks,
      examinerTip,
      commonTrap
    });
  }

  return actions;
};

export const ALL_120_DAYS_DATA: DailyDrillAction[] = generateDailyDrillData();
