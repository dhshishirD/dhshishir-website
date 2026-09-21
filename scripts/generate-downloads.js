import fs from 'fs';
import path from 'path';

const downloadsDir = path.resolve('public/downloads');
if (!fs.existsSync(downloadsDir)) {
  fs.mkdirSync(downloadsDir, { recursive: true });
}

// 1. Band 9 Academic Collocations CSV for Anki
const COLLOCATIONS_CSV = `#separator:comma
#html:true
#tags column:4
Front (Academic Phrase),Back (Meaning & Example),Domain,Tags
"address the underlying dilemma","<b>Meaning:</b> Solve or confront the root cause of a complex issue.<br><br><b>Example:</b> Policymakers must <i>address the underlying dilemma</i> before imposing fiscal penalties.<br><br><b>Band Upgrade:</b> Replaces 'fix the problem' (Band 5.5).",Governance & Law,IELTS_Band_9 AWL
"yield a transformative outcome","<b>Meaning:</b> Produce an overwhelmingly positive and profound change.<br><br><b>Example:</b> Subregional renewable energy integration will <i>yield a transformative outcome</i> for South Asian industry.",Economics,IELTS_Band_9 AWL
"unprecedented exponential surge","<b>Meaning:</b> A massive and rapid upward trend never seen before.<br><br><b>Example:</b> The adoption rate witnessed an <i>unprecedented exponential surge</i> between 2020 and 2025.",Task_1_Trends,IELTS_Band_9 AWL
"mitigate adverse ecological repercussions","<b>Meaning:</b> Reduce or lessen harmful environmental consequences.<br><br><b>Example:</b> Stringent regulatory standards are critical to <i>mitigate adverse ecological repercussions</i> in coastal belts.",Environment,IELTS_Band_9 AWL
"impart pivotal strategic insights","<b>Meaning:</b> Provide deeply valuable, high-level analysis or knowledge.<br><br><b>Example:</b> The foreign policy dossier <i>imparts pivotal strategic insights</i> into maritime security.",Diplomacy,IELTS_Band_9 AWL
"spark heated contentious debate","<b>Meaning:</b> Cause intense public disagreement and argument.<br><br><b>Example:</b> The proposal to automate port terminals <i>sparked heated contentious debate</i> among labor unions.",Society,IELTS_Band_9 AWL
"exercise fiscal prudence","<b>Meaning:</b> Manage money and budget with great care and discipline.<br><br><b>Example:</b> Developing economies must <i>exercise fiscal prudence</i> during global inflationary cycles.",Economics,IELTS_Band_9 AWL
"formulate a robust hypothesis","<b>Meaning:</b> Create a strong, well-reasoned scientific explanation.<br><br><b>Example:</b> Researchers <i>formulated a robust hypothesis</i> regarding cross-border climate migration patterns.",Academic_Defense,IELTS_Band_9 AWL
"precipitate an unforeseen crisis","<b>Meaning:</b> Cause an unexpected and severe problem to happen suddenly.<br><br><b>Example:</b> Geopolitical tensions in maritime chokepoints <i>precipitated an unforeseen crisis</i> in international supply lines.",Global_Trade,IELTS_Band_9 AWL
"exhibit marked volatility","<b>Meaning:</b> Show noticeable, continuous up-and-down fluctuations.<br><br><b>Example:</b> Hydrocarbon commodity prices <i>exhibited marked volatility</i> across the second quarter.",Task_1_Trends,IELTS_Band_9 AWL
"cultivate resilient bilateral ties","<b>Meaning:</b> Develop strong, durable diplomatic relationships between two nations.<br><br><b>Example:</b> Both countries sought to <i>cultivate resilient bilateral ties</i> through comprehensive economic partnerships.",Diplomacy,IELTS_Band_9 AWL
"accelerate technological obsolescence","<b>Meaning:</b> Cause older tools or methods to become outdated quickly.<br><br><b>Example:</b> Generative AI algorithms continue to <i>accelerate technological obsolescence</i> in manual data processing.",Technology,IELTS_Band_9 AWL
"reconcile diametrically opposed viewpoints","<b>Meaning:</b> Bring together two completely opposite opinions or parties.<br><br><b>Example:</b> The mediator attempted to <i>reconcile diametrically opposed viewpoints</i> during the boundary dispute.",Negotiation,IELTS_Band_9 AWL
"foster socio-economic mobility","<b>Meaning:</b> Encourage and help individuals improve their financial and social status.<br><br><b>Example:</b> Subsidized tertiary education remains indispensable to <i>foster socio-economic mobility</i>.",Education,IELTS_Band_9 AWL
"perpetuate systemic inequalities","<b>Meaning:</b> Cause existing structural unfairness to continue over time.<br><br><b>Example:</b> Regressive tax structures inadvertently <i>perpetuate systemic inequalities</i>.",Economics,IELTS_Band_9 AWL
`;

fs.writeFileSync(path.join(downloadsDir, 'IELTS-Band-9-Collocations-Anki-Deck.csv'), COLLOCATIONS_CSV);

// 2. IELTS Task 1 Preposition & Reporting Matrix Document
const TASK1_MATRIX_DOC = `================================================================================
IELTS ACADEMIC WRITING TASK 1: PREPOSITION & REPORTING MATRIX
Authored by Daloyar Hassan Shishir | dhshishir.com/ielts
================================================================================

1. THE GOLDEN PREPOSITION MATRIX
--------------------------------------------------------------------------------
Rule 1: "BY" (Margin of difference)
  - Example: "Exports increased BY 15% (from 50% to 65%)."
  - Meaning: Indicates the exact difference/amount gained or lost.

Rule 2: "TO" (Final destination endpoint)
  - Example: "Exports rose TO 65% in 2025."
  - Meaning: Indicates where the metric arrived.

Rule 3: "OF" (Used after a noun)
  - Example: "The industry witnessed a growth OF 15%."
  - Example: "There was a contraction OF 8 million units."

Rule 4: "AT" (Static point in time or plateau)
  - Example: "The unemployment rate stood AT 4.5% in 2020."
  - Example: "Solar adoption peaked AT 88% before stabilizing."

Rule 5: "BETWEEN ... AND ..." / "FROM ... TO ..." (Time periods)
  - Example: "Between 2015 and 2025..." (NOT Between 2015 to 2025)
  - Example: "From 2015 to 2025..."

2. DYNAMIC VERB & ADVERB TAXONOMY (BAND 8.5+)
--------------------------------------------------------------------------------
Rapid Increase:
  - skyrocketed, surged exponentially, climbed markedly, escalated sharply.
  - "The metric experienced an unprecedented exponential surge."

Moderate Growth:
  - rose steadily, expanded progressively, registered consistent gains.
  - "Inbound tourism exhibited progressive growth throughout the timeframe."

Plummet / Decline:
  - collapsed abruptly, contracted substantially, plummeted to an all-time low.
  - "Fossil fuel investments underwent a severe contraction of 42%."

Fluctuation & Plateau:
  - oscillated wildly, exhibited marked volatility, plateaued at, stabilized around.
  - "Commodity prices displayed marked volatility before leveling off at $75."

3. THE 2-SENTENCE BAND 9 OVERVIEW FORMULA
--------------------------------------------------------------------------------
Sentence 1 (Main Trend / Trajectory):
  "Overall, it is manifest that while [Category A] experienced a sustained upward
  trajectory, [Category B] underwent a marked downward trend over the surveyed span."

Sentence 2 (Dominant Category or Anomaly):
  "Additionally, [Category A] remained the preeminent contributor throughout the period,
  despite a transient dip in 2022."

================================================================================
Official Study Resource | IELTS Band 8.5 Master Hub | dhshishir.com
================================================================================
`;

fs.writeFileSync(path.join(downloadsDir, 'IELTS-Task-1-Preposition-Reporting-Matrix.txt'), TASK1_MATRIX_DOC);

// 3. IELTS Speaking Band 9 Discourse Markers & Idioms Document
const SPEAKING_GUIDE_DOC = `================================================================================
IELTS SPEAKING BAND 9: DISCOURSE MARKERS & IDIOMATIC TRANSITIONS
Authored by Daloyar Hassan Shishir | dhshishir.com/english-fluency-lab
================================================================================

1. NATURAL PERSPECTIVE & OPINION FRAMING
--------------------------------------------------------------------------------
❌ Avoid: "In my opinion...", "I think that..."
✅ Band 9 Alternatives:
  - "From where I stand, it seems abundantly clear that..."
  - "As far as I can gather, the prevailing consensus suggests..."
  - "If you look at the broader socioeconomic picture..."
  - "I'm inclined to believe that..."

2. BUILT-IN 2-SECOND THINKING FILLERS (AVOID AWKWARD SILENCE)
--------------------------------------------------------------------------------
❌ Avoid: Long pauses "Ummm... errr... silence"
✅ Band 9 Natural Connectors:
  - "That is a multifaceted question, but looking at the immediate evidence..."
  - "To be completely candid, I haven't contemplated that deeply before, but..."
  - "That depends heavily on the specific context, however generally speaking..."

3. PART 3 ABSTRACT ARGUMENTATION CONNECTORS
--------------------------------------------------------------------------------
Concession & Nuance:
  - "While there is some validity to that premise, one cannot overlook..."
  - "Notwithstanding the initial benefits, the long-term repercussions remain..."

Hypothetical & Speculative Speech:
  - "Had governments acted proactively, the current fallout might have been averted."
  - "Were modern cities to prioritize pedestrian zones, emissions would decline."

================================================================================
Official Study Resource | English Fluency Lab | dhshishir.com
================================================================================
`;

fs.writeFileSync(path.join(downloadsDir, 'IELTS-Speaking-Band-9-Discourse-Markers.txt'), SPEAKING_GUIDE_DOC);

console.log('✅ Generated all candidate downloadable documents in public/downloads/');
