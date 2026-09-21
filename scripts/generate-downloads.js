import fs from 'fs';
import path from 'path';

const downloadsDir = path.resolve('public/downloads');
if (!fs.existsSync(downloadsDir)) {
  fs.mkdirSync(downloadsDir, { recursive: true });
}

// 1. Band 9 Academic Collocations CSV for Anki (36+ High-Yield Entries)
const COLLOCATIONS_CSV = `#separator:comma
#html:true
#tags column:4
Front (Academic Phrase),Back (Meaning & Example),Domain,Tags
"address the underlying dilemma","<b>Meaning:</b> Confront and resolve the fundamental root cause of an institutional crisis.<br><br><b>Example:</b> Policymakers must <i>address the underlying dilemma</i> before imposing fiscal tariffs.<br><br><b>Band Upgrade:</b> Replaces 'fix the problem' (Band 5.5).",Governance & Law,IELTS_Band_9 AWL
"enact stringent legislative reforms","<b>Meaning:</b> Pass rigorous, strictly enforced statutory laws or regulatory overhauls.<br><br><b>Example:</b> Parliament was compelled to <i>enact stringent legislative reforms</i> to counteract corporate tax avoidance.<br><br><b>Band Upgrade:</b> Replaces 'make hard laws' (Band 5.5).",Governance & Law,IELTS_Band_9 AWL
"exercise discretionary authority","<b>Meaning:</b> Utilize official decision-making power within legal boundaries.<br><br><b>Example:</b> Municipal judges are permitted to <i>exercise discretionary authority</i> when handling non-violent juvenile offenses.<br><br><b>Band Upgrade:</b> Replaces 'use power to choose' (Band 5.5).",Governance & Law,IELTS_Band_9 AWL
"establish enforceable accountability mechanisms","<b>Meaning:</b> Build systemic checks and balances backed by legal consequences.<br><br><b>Example:</b> International development aid must <i>establish enforceable accountability mechanisms</i> to deter bureaucratic graft.<br><br><b>Band Upgrade:</b> Replaces 'check bad people' (Band 5.5).",Governance & Law,IELTS_Band_9 AWL
"reconcile diametrically opposed viewpoints","<b>Meaning:</b> Harmonize two completely conflicting political or ideological positions.<br><br><b>Example:</b> The diplomatic envoy attempted to <i>reconcile diametrically opposed viewpoints</i> regarding sovereign maritime corridors.<br><br><b>Band Upgrade:</b> Replaces 'bring different sides' (Band 5.5).",Governance & Law,IELTS_Band_9 AWL
"set a legally binding precedent","<b>Meaning:</b> Establish a benchmark judicial ruling that mandates future compliance.<br><br><b>Example:</b> The landmark supreme court verdict will <i>set a legally binding precedent</i> for digital privacy jurisprudence.<br><br><b>Band Upgrade:</b> Replaces 'make example for later' (Band 5.5).",Governance & Law,IELTS_Band_9 AWL
"yield a transformative outcome","<b>Meaning:</b> Generate an overwhelmingly profound and positive structural shift.<br><br><b>Example:</b> Subregional renewable energy integration will <i>yield a transformative outcome</i> for South Asian manufacturing corridors.<br><br><b>Band Upgrade:</b> Replaces 'make big change' (Band 5.5).",Economics & Trade,IELTS_Band_9 AWL
"exercise fiscal prudence","<b>Meaning:</b> Manage public budgets and spending with rigorous caution and discipline.<br><br><b>Example:</b> Central banks in developing nations must <i>exercise fiscal prudence</i> during volatile macroeconomic inflationary cycles.<br><br><b>Band Upgrade:</b> Replaces 'spend money carefully' (Band 5.5).",Economics & Trade,IELTS_Band_9 AWL
"perpetuate systemic economic disparities","<b>Meaning:</b> Reinforce and maintain deep-seated structural income or wealth inequality.<br><br><b>Example:</b> Regressive consumption taxes inadvertently <i>perpetuate systemic economic disparities</i> across working-class demographics.<br><br><b>Band Upgrade:</b> Replaces 'keep rich-poor gap' (Band 5.5).",Economics & Trade,IELTS_Band_9 AWL
"precipitate an acute economic crisis","<b>Meaning:</b> Trigger a sudden, severe, and destabilizing financial downturn.<br><br><b>Example:</b> Unchecked speculative real estate borrowing can <i>precipitate an acute economic crisis</i> within vulnerable banking sectors.<br><br><b>Band Upgrade:</b> Replaces 'cause a bad problem' (Band 5.5).",Economics & Trade,IELTS_Band_9 AWL
"spur domestic industrial competitiveness","<b>Meaning:</b> Stimulate national industries to innovate and rival international exporters.<br><br><b>Example:</b> Targeted tariff exemptions on raw materials are intended to <i>spur domestic industrial competitiveness</i>.<br><br><b>Band Upgrade:</b> Replaces 'help local business' (Band 5.5).",Economics & Trade,IELTS_Band_9 AWL
"curb rampant inflationary pressure","<b>Meaning:</b> Restrain or suppress uncontrolled, rapid escalations in consumer prices.<br><br><b>Example:</b> Aggressive monetary tightening was enacted to <i>curb rampant inflationary pressure</i> across the commodity market.<br><br><b>Band Upgrade:</b> Replaces 'stop fast rising prices' (Band 5.5).",Economics & Trade,IELTS_Band_9 AWL
"accelerate technological obsolescence","<b>Meaning:</b> Hasten the speed at which existing infrastructure becomes outmoded.<br><br><b>Example:</b> Generative algorithmic engines continue to <i>accelerate technological obsolescence</i> in legacy clerical software.<br><br><b>Band Upgrade:</b> Replaces 'make old tools useless' (Band 5.5).",Technology & AI,IELTS_Band_9 AWL
"harness algorithmic predictive capability","<b>Meaning:</b> Utilize machine learning and computational models for future forecasting.<br><br><b>Example:</b> Epidemiologists <i>harnessed algorithmic predictive capability</i> to anticipate viral propagation patterns.<br><br><b>Band Upgrade:</b> Replaces 'use AI to guess' (Band 5.5).",Technology & AI,IELTS_Band_9 AWL
"impart pivotal strategic insights","<b>Meaning:</b> Provide high-level, decisive intelligence or analytical clarity.<br><br><b>Example:</b> Autonomous telemetry systems <i>impart pivotal strategic insights</i> into oceanic shipping container optimization.<br><br><b>Band Upgrade:</b> Replaces 'give good info' (Band 5.5).",Technology & AI,IELTS_Band_9 AWL
"safeguard intellectual property rights","<b>Meaning:</b> Defend patents, proprietary algorithms, and creative works from unauthorized theft.<br><br><b>Example:</b> Comprehensive multilateral accords are essential to <i>safeguard intellectual property rights</i> in biotechnology.<br><br><b>Band Upgrade:</b> Replaces 'protect inventions' (Band 5.5).",Technology & AI,IELTS_Band_9 AWL
"disrupt traditional employment paradigms","<b>Meaning:</b> Radically transform established workplace patterns, roles, and labor structures.<br><br><b>Example:</b> Robotic automation will inevitably <i>disrupt traditional employment paradigms</i> across industrial assembly lines.<br><br><b>Band Upgrade:</b> Replaces 'change normal jobs' (Band 5.5).",Technology & AI,IELTS_Band_9 AWL
"streamline operational logistical pipelines","<b>Meaning:</b> Optimize complex supply chain channels for maximum throughput and low friction.<br><br><b>Example:</b> Smart ports utilize automated freight routing to <i>streamline operational logistical pipelines</i>.<br><br><b>Band Upgrade:</b> Replaces 'make supply faster' (Band 5.5).",Technology & AI,IELTS_Band_9 AWL
"mitigate adverse ecological repercussions","<b>Meaning:</b> Lessen or alleviate destructive environmental consequences.<br><br><b>Example:</b> Mandatory environmental impact assessments are vital to <i>mitigate adverse ecological repercussions</i> of river damming.<br><br><b>Band Upgrade:</b> Replaces 'stop bad eco effects' (Band 5.5).",Environment & Climate,IELTS_Band_9 AWL
"undergo catastrophic degradation","<b>Meaning:</b> Suffer irreversible and devastating ecological destruction.<br><br><b>Example:</b> Vulnerable coral reef ecosystems risk <i>undergoing catastrophic degradation</i> if sea surface temperatures climb by 1.5°C.<br><br><b>Band Upgrade:</b> Replaces 'get ruined badly' (Band 5.5).",Environment & Climate,IELTS_Band_9 AWL
"transition toward decarbonized energy infrastructure","<b>Meaning:</b> Shift systemic power generation away from fossil fuels to zero-carbon sources.<br><br><b>Example:</b> Emerging economies require sovereign green bonds to <i>transition toward decarbonized energy infrastructure</i>.<br><br><b>Band Upgrade:</b> Replaces 'move to green power' (Band 5.5).",Environment & Climate,IELTS_Band_9 AWL
"deplete finite natural reserves","<b>Meaning:</b> Exhaust non-renewable natural resources through unsustainable extraction.<br><br><b>Example:</b> Unregulated mineral extraction threatens to <i>deplete finite natural reserves</i> within the next four decades.<br><br><b>Band Upgrade:</b> Replaces 'use up all gas/oil' (Band 5.5).",Environment & Climate,IELTS_Band_9 AWL
"exacerbate environmental vulnerability","<b>Meaning:</b> Worsen the exposure and susceptibility of communities to ecological hazards.<br><br><b>Example:</b> Deforestation in riparian deltas serves to <i>exacerbate environmental vulnerability</i> during monsoon storm surges.<br><br><b>Band Upgrade:</b> Replaces 'make climate danger worse' (Band 5.5).",Environment & Climate,IELTS_Band_9 AWL
"promote ecological equilibrium","<b>Meaning:</b> Support natural biodiversity and harmonious balance in biological systems.<br><br><b>Example:</b> Reforestation corridors in national parks <i>promote ecological equilibrium</i> and preserve endangered mammalian species.<br><br><b>Band Upgrade:</b> Replaces 'keep nature balanced' (Band 5.5).",Environment & Climate,IELTS_Band_9 AWL
"formulate a robust empirical hypothesis","<b>Meaning:</b> Construct a verifiable, scientifically grounded proposition for testing.<br><br><b>Example:</b> The research cohort <i>formulated a robust empirical hypothesis</i> examining urban microclimate heat islands.<br><br><b>Band Upgrade:</b> Replaces 'make a strong idea' (Band 5.5).",Research & Defense,IELTS_Band_9 AWL
"corroborate quantitative findings","<b>Meaning:</b> Provide independent numerical evidence that confirms initial findings.<br><br><b>Example:</b> Subsequent multi-center clinical trials <i>corroborated the quantitative findings</i> of the original pilot study.<br><br><b>Band Upgrade:</b> Replaces 'prove the numbers' (Band 5.5).",Research & Defense,IELTS_Band_9 AWL
"scrutinize methodological validity","<b>Meaning:</b> Critically inspect experimental design, sampling protocols, and rigor.<br><br><b>Example:</b> Peer reviewers must <i>scrutinize methodological validity</i> before conclusions are accepted into the scientific canon.<br><br><b>Band Upgrade:</b> Replaces 'check test method' (Band 5.5).",Research & Defense,IELTS_Band_9 AWL
"synthesize disparate theoretical frameworks","<b>Meaning:</b> Unite diverging scholarly theories into a coherent, overarching model.<br><br><b>Example:</b> The dissertation successfully <i>synthesizes disparate theoretical frameworks</i> from institutional economics and sociology.<br><br><b>Band Upgrade:</b> Replaces 'combine different ideas' (Band 5.5).",Research & Defense,IELTS_Band_9 AWL
"delineate the scope of investigation","<b>Meaning:</b> Explicitly define the specific parameters and boundaries of an inquiry.<br><br><b>Example:</b> The introductory chapter clearly <i>delineates the scope of investigation</i> to post-war South Asian trade pacts.<br><br><b>Band Upgrade:</b> Replaces 'show study limits' (Band 5.5).",Research & Defense,IELTS_Band_9 AWL
"substantiate qualitative assertions","<b>Meaning:</b> Back subjective arguments with credible observational or documentary evidence.<br><br><b>Example:</b> Candidates must <i>substantiate qualitative assertions</i> with concrete historical case studies in Task 2 essays.<br><br><b>Band Upgrade:</b> Replaces 'give proof for claims' (Band 5.5).",Research & Defense,IELTS_Band_9 AWL
"foster socioeconomic upward mobility","<b>Meaning:</b> Enable individuals to transcend class barriers and improve livelihoods.<br><br><b>Example:</b> Universally accessible tertiary education remains the single most effective vehicle to <i>foster socioeconomic upward mobility</i>.<br><br><b>Band Upgrade:</b> Replaces 'help poor people grow' (Band 5.5).",Society & Education,IELTS_Band_9 AWL
"bridge the pervasive digital divide","<b>Meaning:</b> Close the gap between communities with and without modern technology access.<br><br><b>Example:</b> Subsidized rural fiber-optic broadband is necessary to <i>bridge the pervasive digital divide</i>.<br><br><b>Band Upgrade:</b> Replaces 'give internet to poor' (Band 5.5).",Society & Education,IELTS_Band_9 AWL
"spark heated contentious debate","<b>Meaning:</b> Ignite passionate, widespread disagreement across public discourse.<br><br><b>Example:</b> Proposals to raise statutory retirement thresholds continue to <i>spark heated contentious debate</i> across industrial labor unions.<br><br><b>Band Upgrade:</b> Replaces 'make people argue' (Band 5.5).",Society & Education,IELTS_Band_9 AWL
"dismantle entrenched social prejudices","<b>Meaning:</b> Eradicate deep-seated systemic discrimination and cultural biases.<br><br><b>Example:</b> Community-driven civic workshops are critical to <i>dismantle entrenched social prejudices</i> against marginalized groups.<br><br><b>Band Upgrade:</b> Replaces 'stop old bad beliefs' (Band 5.5).",Society & Education,IELTS_Band_9 AWL
"cultivate civic consciousness","<b>Meaning:</b> Instill social responsibility, ethical engagement, and community awareness.<br><br><b>Example:</b> Secondary school curricula should actively <i>cultivate civic consciousness</i> through mandatory volunteer service.<br><br><b>Band Upgrade:</b> Replaces 'teach good citizenship' (Band 5.5).",Society & Education,IELTS_Band_9 AWL
"inculcate critical thinking faculties","<b>Meaning:</b> Develop analytical, independent, and evaluative reasoning skills in learners.<br><br><b>Example:</b> Modern pedagogies must pivot away from rote memorization to <i>inculcate critical thinking faculties</i>.<br><br><b>Band Upgrade:</b> Replaces 'teach students to think' (Band 5.5).",Society & Education,IELTS_Band_9 AWL
`;

fs.writeFileSync(path.join(downloadsDir, 'IELTS-Band-9-Collocations-Anki-Deck.csv'), COLLOCATIONS_CSV);

// 2. IELTS Task 1 Preposition & Reporting Matrix Document (Comprehensive Master Cheat Sheet)
const TASK1_MATRIX_DOC = `================================================================================
IELTS ACADEMIC WRITING TASK 1: PREPOSITION & REPORTING MASTER MATRIX
Authored by Daloyar Hassan Shishir | dhshishir.com/ielts
================================================================================

1. THE 6 GOLDEN PREPOSITION RULES (GRAMMAR ACCURACY)
--------------------------------------------------------------------------------
Rule 1: "BY" (Margin / Difference)
  - Syntax: Indicates the numerical difference or amount gained/lost.
  - Example: "Garment exports surged BY 18% (from 42% in 2018 to 60% in 2024)."
  - Example: "Unemployment was curtailed BY 3.5 percentage points."

Rule 2: "TO" (Final Arrival Endpoint)
  - Syntax: Indicates the final destination value reached by the metric.
  - Example: "Renewable power capacity expanded steadily, climbing TO 85 gigawatts by 2025."
  - Example: "Oil consumption plunged abruptly TO a historic low of 12 million barrels."

Rule 3: "OF" (Follows Nominal Trend Nouns)
  - Syntax: Used directly after nominal trend nouns (increase, surge, drop, contraction).
  - Example: "The manufacturing sector registered a marked contraction OF 14 million units."
  - Example: "Urban migration witnessed an unprecedented surge OF 25%."

Rule 4: "AT" (Static Level / Plateau Peak)
  - Syntax: Indicates a static point, an initial starting value, or a stable plateau peak.
  - Example: "In 2010, national literacy stood AT 72%, before ascending progressively."
  - Example: "Electric vehicle sales peaked AT 45,000 units before leveling off."

Rule 5: "IN / OVER / DURING" (Time Horizons)
  - Syntax: Defines the timeframe or duration of movement.
  - Example: "OVER the 15-year surveyed timeframe, solar adoption grew eightfold."
  - Example: "DURING the subsequent five-year interval, consumer spending remained static."

Rule 6: "BETWEEN ... AND ..." vs. "FROM ... TO ..." (Time Boundaries)
  - Syntax: Strict paired boundaries (Never write 'Between 2015 to 2025').
  - Example: "BETWEEN 2015 AND 2025, global shipments exhibited exponential gains."
  - Example: "FROM 2018 TO 2022, revenues underwent a consistent downward slump."

--------------------------------------------------------------------------------
2. DYNAMIC VERB, ADVERB & NOMINAL TAXONOMY (BAND 8.5+)
--------------------------------------------------------------------------------
Trajectory 1: Exponential Surge / Steep Ascent
  - Verbs: soared, skyrocketed, surged exponentially, climbed markedly, escalated sharply
  - Adverbs: exponentially, precipitously, markedly, dramatically, drastically
  - Nouns: an exponential surge, a meteoric rise, a steep upward trajectory

Trajectory 2: Moderate & Consistent Growth
  - Verbs: rose steadily, expanded progressively, registered consistent gains, trended upward
  - Adverbs: steadily, progressively, consistently, incrementally, moderately
  - Nouns: a steady ascent, progressive expansion, consistent growth

Trajectory 3: Severe Collapse & Plunge
  - Verbs: plummeted, slumped, collapsed abruptly, contracted substantially, dove
  - Adverbs: sharply, severely, precipitously, abruptly, dramatically
  - Nouns: a marked contraction, a precipitous slump, a severe collapse

Trajectory 4: Mild / Gradual Reduction
  - Verbs: dipped marginally, contracted slightly, edged down, softened, receded
  - Adverbs: marginally, slightly, modestly, insignificantly, minimally
  - Nouns: a slight downturn, an inconsequential dip, a marginal softening

Trajectory 5: Wild Oscillation & Fluctuation
  - Verbs: oscillated wildly, fluctuated erratically, underwent turbulence
  - Adverbs: erratically, wildly, unpredictably, continuously
  - Nouns: marked volatility, wild oscillations, erratic fluctuations

Trajectory 6: Plateau & Stabilization
  - Verbs: plateaued at, stabilized around, leveled off at, remained unchanged
  - Adverbs: relatively, virtually, essentially, consistently
  - Nouns: a plateau phase, a period of stabilization, a flatline trend

--------------------------------------------------------------------------------
3. EXAMINER TRAP: PERCENT (%) VS. PERCENTAGE POINT (pp) DISTINCTION
--------------------------------------------------------------------------------
If a metric moves from 20% to 30%:
  - Percentage Points: It rose by 10 percentage points (30 - 20 = 10 pp).
  - Percent Growth: It grew by 50 percent [(30 - 20) / 20 * 100 = 50%].

Examiner Model Sentence:
"Although urban electrification increased by only 10 percentage points (from 20% to 30%),
this represented an impressive 50% expansion in total electrified households."

--------------------------------------------------------------------------------
4. THE 5 COMPLETE OVERVIEW FORMULA BLUEPRINTS (BAND 9)
--------------------------------------------------------------------------------
Blueprint 1: Dynamic Two-Trajectory Trend (Time Series)
"Overall, it is immediately manifest that while [Category A] and [Category B] experienced
sustained upward trajectories over the surveyed span, [Category C] underwent a marked
contraction. Furthermore, [Category A] remained the preeminent contributor throughout."

Blueprint 2: Static Comparative Distribution (Pie / Bar Snapshot)
"In summary, what stands out from the data is that [Category A] accounted for the lion's
share of overall figures, dwarfing all other sectors combined, whereas [Category D]
represented an almost negligible fraction."

Blueprint 3: Two-Chart Complex Synthesis (Line Graph + Pie Chart)
"Overall, while the line graph indicates a steady long-term escalation in total expenditure
across all demographics, the accompanying pie chart underscores that housing and food
consumption constituted the vast majority of consumer allocations."

Blueprint 4: Industrial / Natural Process Diagram
"Overall, the process comprises [Number] distinct sequential stages, commencing with the
initial harvesting/intake of [Raw Material] and culminating in the automated distribution
of the refined end product to retail markets."

Blueprint 5: Outlier / Anomaly-Driven Overview
"Overall, across nearly all surveyed territories, renewable adoption registered significant
proportional gains, with [Country X] serving as the sole notable exception by exhibiting
a continuous downward trend."

--------------------------------------------------------------------------------
5. BAND 9 TASK 1 COHESIVE SENTENCE TEMPLATES
--------------------------------------------------------------------------------
1. Participial Clause:
   "Fossil fuels remained the dominant power source throughout the decade, accounting
   for nearly two-thirds (64%) of national energy output in 2020."

2. Comparative Eclipse:
   "In 2021, investments in solar infrastructure eclipsed those in hydroelectric power
   for the first time, climbing to $4.2 billion against $3.8 billion."

3. Proportional Multiplier:
   "Figures for outbound cargo in Port A were nearly triple those registered by Port B
   ($75M and $26M, respectively)."

4. Subordinate Contrast:
   "While the proportion of rural internet users climbed sharply from 15% to 58%,
   the corresponding metric for urban centers experienced a much milder ascent."

5. Temporal Transition:
   "Turning to the latter half of the surveyed period, a sharp divergence occurred as
   manufacturing output contracted to a decade-low of 12,000 units."

================================================================================
Official Study Resource | IELTS Band 8.5 Master Hub | dhshishir.com
================================================================================
`;

fs.writeFileSync(path.join(downloadsDir, 'IELTS-Task-1-Preposition-Reporting-Matrix.txt'), TASK1_MATRIX_DOC);

// 3. IELTS Speaking Band 9 Discourse Markers & Idioms Document
const SPEAKING_GUIDE_DOC = `================================================================================
IELTS SPEAKING BAND 9: DISCOURSE MARKERS, THINKING BUFFERS & IDIOMS
Authored by Daloyar Hassan Shishir | dhshishir.com/english-fluency-lab
================================================================================

1. ABSTRACT PERSPECTIVE & OPINION FRAMING (REPLACING "I THINK / IN MY OPINION")
--------------------------------------------------------------------------------
- "From where I stand, it seems abundantly clear that..."
- "As far as I can gather, prevailing consensus suggests..."
- "If one examines the broader socioeconomic landscape, it becomes evident that..."
- "I am firmly of the conviction that..."
- "Looking at this through a pragmatic lens, one could argue that..."
- "It is widely recognized among sociologists that..."
- "From an empirical standpoint, the general trajectory indicates that..."
- "I am inclined to believe that while initial appearances suggest X, reality favors Y..."

--------------------------------------------------------------------------------
2. NATIVE 2-SECOND THINKING BUFFERS (ZERO AWKWARD SILENCE)
--------------------------------------------------------------------------------
- "That is a remarkably multifaceted question, but looking at the immediate evidence..."
- "To be completely candid, I haven't contemplated that specific angle deeply before, but..."
- "That depends heavily on the societal context, however generally speaking..."
- "That is an intriguing dilemma; let me unpack the most salient dimension first..."
- "Well, there are two distinct ways to look at this issue..."
- "Off the top of my head, I would say the most prominent factor is..."

--------------------------------------------------------------------------------
3. PART 3 NUANCE, COUNTER-ARGUMENT & CONCESSION CONNECTORS
--------------------------------------------------------------------------------
- "While there is indisputable validity to that premise, one cannot overlook..."
- "Notwithstanding the immediate economic windfall, the long-term ecological fallout..."
- "That policy holds substantial merit on paper; however, in practical execution..."
- "It would be a gross oversimplification to attribute this solely to..."
- "While that may hold true in metropolitan centers, the dynamic in rural communities..."
- "To put that into sharper perspective, if we look at historical parallels..."

--------------------------------------------------------------------------------
4. INVERTED & SPECULATIVE CONDITIONALS FOR SPEAKING (BAND 9 GRAMMAR)
--------------------------------------------------------------------------------
- Inverted Past Unfulfilled:
  "Had governments enacted stricter emissions regulations a decade ago, urban air
  pollution wouldn't be anywhere near as severe today."

- Inverted Hypothetical Present:
  "Were municipal authorities to heavily subsidize electric public transport, private
  vehicular congestion would diminish rapidly."

- Inverted Future Possibility:
  "Should global temperatures continue to rise unabated, low-lying coastal cities will
  inevitably face existential displacement."

- Personal Policy Speculation:
  "Were I placed in a policymaking capacity, my immediate priority would be restructuring
  vocational apprenticeships for youth."

--------------------------------------------------------------------------------
5. TOP 12 HIGH-SCORING IDIOMATIC PHRASAL CHUNKS & METAPHORS
--------------------------------------------------------------------------------
1. A double-edged sword: "Social media is undeniably a double-edged sword—it democratizes
   information while fueling misinformation."
2. A watershed moment: "The transition to online education during the pandemic marked
   a watershed moment for global pedagogy."
3. A silver bullet: "Electric vehicles are important, but they are certainly not a silver
   bullet for overall carbon reduction."
4. Weather the storm: "Only enterprises with agile digital infrastructure were able to
   weather the economic storm."
5. A catalyst for change: "Youth-led grassroots activism has acted as a potent catalyst
   for change in climate policy."
6. A zero-sum game: "International trade negotiations should aim for win-win synergy
   rather than treating commerce as a zero-sum game."
7. Tip the balance: "Targeted student mentorship programs could tip the balance in favor
   of marginalized university applicants."
8. A cautionary tale: "The rapid collapse of single-industry factory towns stands as a
   sobering cautionary tale for modern urban planners."
9. Pave the way for: "Breakthroughs in battery energy density will pave the way for
   zero-emission commercial aviation."
10. Strike a delicate balance: "Urban authorities must strike a delicate balance between
    preserving historical architecture and building modern housing."
11. At the eleventh hour: "Environmental treaties are often finalized at the eleventh hour
    due to protracted diplomatic negotiations."
12. Reap the dividends: "Countries that invested early in STEM education are now reaping
    immense economic dividends."

================================================================================
Official Study Resource | English Fluency Lab | dhshishir.com
================================================================================
`;

fs.writeFileSync(path.join(downloadsDir, 'IELTS-Speaking-Band-9-Discourse-Markers.txt'), SPEAKING_GUIDE_DOC);

console.log('✅ Generated all candidate downloadable documents in public/downloads/');
