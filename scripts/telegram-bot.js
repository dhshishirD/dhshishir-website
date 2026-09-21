import fs from 'fs';
import path from 'path';

// Bot Configuration
export const BOT_CONFIG = {
  token: process.env.TELEGRAM_BOT_TOKEN || '8869531997:AAEn0Ld2pnnQg8ymnaIjkxh1-as4Ru7g8FU',
  channelId: process.env.TELEGRAM_CHANNEL_ID || '@ieltsenglishfluency',
  siteUrl: 'https://dhshishir.com',
};

const TELEGRAM_API = `https://api.telegram.org/bot${BOT_CONFIG.token}`;

// Helper: Generic API Call
async function callApi(endpoint, payload) {
  try {
    const res = await fetch(`${TELEGRAM_API}/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!data.ok) {
      console.error(`❌ Telegram API Error [${endpoint}]:`, data.description);
    }
    return data;
  } catch (err) {
    console.error(`❌ Network error calling ${endpoint}:`, err);
    return { ok: false, error: err.message };
  }
}

// 1. Setup Bot Profile & Slash Commands
export async function setupBotProfile() {
  console.log('🤖 Configuring @IeltsFluencyLabBot description & commands...');

  await callApi('setMyDescription', {
    description: 'Welcome to English Fluency & IELTS 8.5+ Lab! 🎯 Free interactive speaking simulators, acoustic shadowing, Band 8.5 collocation duels, and Cambridge reading courtroom drills powered by https://dhshishir.com',
  });

  await callApi('setMyShortDescription', {
    short_description: 'Daily Interactive IELTS Band 8.5 & English Fluency Training Hub by Daloyar Hassan Shishir.',
  });

  await callApi('setMyCommands', {
    commands: [
      { command: 'ielts', description: 'Launch IELTS Band 8.5 Master Hub & Simulators' },
      { command: 'fluency', description: 'Start English Fluency Lab Acoustic Shadowing' },
      { command: 'collocation', description: 'Play 60-Second Collocation Duel Arcade' },
      { command: 'courtroom', description: 'Practice Cambridge TFNG Reading Trials' },
      { command: 'radar', description: 'Launch 2-Minute Speaking Flow Radar' },
      { command: 'morpher', description: 'Academic Task 1 Chart Sentence Generator' },
      { command: 'anki', description: 'Export 500+ Band 8.5 Anki Collocation Deck' },
      { command: 'ats', description: 'Free ATS Resume & CV Compliance Checker' },
    ],
  });

  console.log('✅ Bot profile and commands successfully updated!');
}

// 2. Full 7-Day Curated Master Schedule Database
export const WEEKLY_SCHEDULE = {
  // 0: Sunday, 1: Monday, 2: Tuesday, 3: Wednesday, 4: Thursday, 5: Friday, 6: Saturday
  2: { // TUESDAY
    morning: {
      type: 'message',
      text: `⚔️ <b>IELTS BAND 8.5 LEXICAL UPGRADE: Stop Overusing "Important"</b>\n\n` +
        `In IELTS Writing Task 2 and Speaking, repeating "important" holds your Lexical Resource score at Band 6.0.\n\n` +
        `Upgrade your academic register:\n` +
        `❌ <i>Band 5.5:</i> "Education is very important for the country."\n` +
        `✅ <b>Band 8.5:</b> <code>Equitable educational access plays a pivotal, indispensable role in fostering long-term socioeconomic resilience.</code>\n\n` +
        `🎮 <b>Practice on our IELTS Hub:</b>\n` +
        `Test how many Band 8.5 collocations you can master in 60 seconds:\n` +
        `👉 https://dhshishir.com/ielts`,
      buttons: [[{ text: '🎮 Play 60s Collocation Duel', url: 'https://dhshishir.com/ielts' }]]
    },
    afternoon: {
      type: 'poll',
      question: "Passage: 'Preliminary studies indicate that electric vertical aircraft might eventually augment metropolitan transit by 2035.' Statement: 'Electric aircraft have already replaced urban bus networks.'",
      options: ["TRUE", "FALSE", "NOT GIVEN"],
      correct_option_id: 1, // FALSE
      explanation: "'might eventually augment' (future possibility) ≠ 'have already replaced' (past certainty). Contradiction = FALSE!"
    },
    evening: {
      type: 'message',
      text: `🎙️ <b>ACOUSTIC FLUENCY DRILL: Overcoming Hesitation & Pauses</b>\n\n` +
        `Why do candidates pause in IELTS Speaking Part 2? Because we lack connected-speech muscle memory.\n\n` +
        `🎧 <b>Today's 30-Second Practice Sentence:</b>\n` +
        `<blockquote>"The strategic implementation of cross-border infrastructure initiatives will fundamentally redefine regional connectivity."</blockquote>\n\n` +
        `🔑 <b>Phonetic Cadence Focus:</b>\n` +
        `• Linking: <i>cross-border_initiatives</i> (smooth flow)\n` +
        `• Stress: <i>stra-TE-gic im-ple-men-TA-tion</i>\n\n` +
        `🎤 <b>Test your speech rhythm live in our Free Speech Studio:</b>\n` +
        `👉 https://dhshishir.com/english-fluency-lab`,
      buttons: [
        [{ text: '🎙️ Open Speech Studio', url: 'https://dhshishir.com/english-fluency-lab' }],
        [{ text: '🗣️ Join Discussion Hub', url: 'https://t.me/ieltsenglishfluency' }]
      ]
    }
  },

  3: { // WEDNESDAY
    morning: {
      type: 'message',
      text: `📊 <b>WRITING TASK 1 TREND UPGRADE: Describing Rapid Changes</b>\n\n` +
        `Avoid generic phrases like <i>"the line went up very quickly"</i>.\n\n` +
        `Compare these:\n` +
        `❌ <i>Band 6.0:</i> "The number went up very quickly in 2024."\n` +
        `✅ <b>Band 8.5:</b> <code>The metric witnessed an unprecedented exponential surge, peaking at 85% in 2024.</code>\n\n` +
        `🛠️ <b>Generate dynamic Band 8.5 sentences live on our Chart Morpher:</b>\n` +
        `👉 https://dhshishir.com/tools/ielts-task1-chart-morpher`,
      buttons: [[{ text: '📊 Open Chart Morpher', url: 'https://dhshishir.com/tools/ielts-task1-chart-morpher' }]]
    },
    afternoon: {
      type: 'poll',
      question: "Writing Task 1 Data: 'Exports increased from $50M in 2020 to $51M in 2025.' Which Band 8.5 sentence describes this accurately?",
      options: [
        "Exports skyrocketed dramatically over the period.",
        "Exports experienced a marginal increase of $1M.",
        "There was an enormous surge in outbound trade."
      ],
      correct_option_id: 1, // marginal increase
      explanation: "A $1M change (2%) is slight. 'Skyrocketed' or 'enormous surge' is factually inaccurate in IELTS Academic Task 1."
    },
    evening: {
      type: 'message',
      text: `📝 <b>HOW TO WRITE A BAND 9 TASK 1 OVERVIEW IN 2 SENTENCES</b>\n\n` +
        `The Overview is the most critical paragraph in Task 1. Without a clear overview, you cannot score above Band 5.0 in Task Achievement.\n\n` +
        `💡 <b>The 2-Sentence Formula:</b>\n` +
        `1. <b>Sentence 1 (Overall Trajectory):</b> <i>"Overall, it is manifest that while [Category A] experienced a sustained upward trajectory, [Category B] underwent a marked contraction."</i>\n` +
        `2. <b>Sentence 2 (Dominant Point):</b> <i>"Additionally, [Category A] remained the dominant contributor throughout the surveyed timeframe."</i>\n\n` +
        `Master all graph sentence patterns in our interactive simulator:\n` +
        `👉 https://dhshishir.com/tools/ielts-task1-chart-morpher`,
      buttons: [[{ text: '🛠️ Practice with Interactive Graphs', url: 'https://dhshishir.com/tools/ielts-task1-chart-morpher' }]]
    }
  },

  4: { // THURSDAY
    morning: {
      type: 'message',
      text: `⚔️ <b>BAND 8.5 COLLOCATION: Stop Saying "Solve the Problem"</b>\n\n` +
        `Examiners penalize basic verbs like <i>solve, fix, do</i> when writing about complex social issues.\n\n` +
        `Upgrade your lexical precision:\n` +
        `❌ <i>Band 5.5:</i> "Governments should solve environmental problems."\n` +
        `✅ <b>Band 8.5:</b> <code>Policymakers must mitigate adverse ecological repercussions through stringent regulatory frameworks.</code>\n\n` +
        `🎮 <b>Test your vocabulary speed:</b>\n` +
        `👉 https://dhshishir.com/ielts`,
      buttons: [[{ text: '🎮 Play Collocation Duel', url: 'https://dhshishir.com/ielts' }]]
    },
    afternoon: {
      type: 'poll',
      question: "Passage: 'The treaty was unanimously ratified by all European nations in 2024.' Statement: 'Asian nations also supported the treaty in 2024.'",
      options: ["TRUE", "FALSE", "NOT GIVEN"],
      correct_option_id: 2, // NOT GIVEN
      explanation: "The passage mentions only European nations. Zero evidence is given about Asian nations. Absence of evidence = NOT GIVEN."
    },
    evening: {
      type: 'message',
      text: `⚖️ <b>THE #1 CAMBRIDGE READING SECRET: True vs. False vs. Not Given</b>\n\n` +
        `Stop guessing! Use the <b>Courtroom Standard of Evidence</b>:\n` +
        `• <b>TRUE:</b> The fact is 100% corroborated by the text.\n` +
        `• <b>FALSE:</b> The fact directly contradicts the text.\n` +
        `• <b>NOT GIVEN:</b> The text does not confirm OR deny the statement.\n\n` +
        `🔍 <b>Step into the TFNG Courtroom and solve 15 authentic trials:</b>\n` +
        `👉 https://dhshishir.com/tools/ielts-reading-tfng-court`,
      buttons: [[{ text: '⚖️ Launch TFNG Courtroom', url: 'https://dhshishir.com/tools/ielts-reading-tfng-court' }]]
    }
  },

  5: { // FRIDAY
    morning: {
      type: 'message',
      text: `🗣️ <b>SPEAKING BAND 8.5: Natural Discourse Markers</b>\n\n` +
        `Stop beginning every sentence with <i>"Firstly, Secondly, In conclusion"</i>.\n\n` +
        `Use natural native conversational transitions:\n` +
        `✅ <i>"As far as I can gather..."</i> (Expressing perspective)\n` +
        `✅ <i>"When you look at the broader picture..."</i> (Broadening scope)\n` +
        `✅ <i>"It goes without saying that..."</i> (Emphasizing consensus)\n\n` +
        `Master speech rhythm in our Fluency Lab:\n` +
        `👉 https://dhshishir.com/english-fluency-lab`,
      buttons: [[{ text: '🎙️ Open Fluency Lab', url: 'https://dhshishir.com/english-fluency-lab' }]]
    },
    afternoon: {
      type: 'poll',
      question: "In IELTS Speaking Part 2, what is the single biggest factor that drops Fluency & Coherence below Band 6.5?",
      options: [
        "Speaking with a non-British accent",
        "Pausing for >4 seconds to search for complex vocabulary",
        "Using simple transition words like 'and' or 'so'"
      ],
      correct_option_id: 1, // Pausing for >4 seconds
      explanation: "Long mid-sentence hesitations searching for words severely penalize Fluency & Coherence. Flow & natural cadence come first!"
    },
    evening: {
      type: 'message',
      text: `⏱️ <b>FRIDAY SPEAKING RADAR: The 2-Minute Cue Card Challenge</b>\n\n` +
        `🎯 <b>Today's Topic:</b>\n` +
        `<blockquote>"Describe a challenging negotiation or project you successfully completed."</blockquote>\n\n` +
        `📡 <b>Test Your Cadence on the Speaking Flow Radar:</b>\n` +
        `• Real-time Words-Per-Minute (WPM) gauge (Target: 110–140 WPM)\n` +
        `• Instant 4-second silence detection alert\n` +
        `• Built-in 60s prep + 2-minute exam timer\n\n` +
        `👉 <b>Launch Speaking Radar:</b> https://dhshishir.com/tools/ielts-speaking-flow-radar\n\n` +
        `🎤 <i>Drop your 2-minute audio in our Discussion Group for peer review!</i>`,
      buttons: [
        [{ text: '⏱️ Launch Speaking Radar', url: 'https://dhshishir.com/tools/ielts-speaking-flow-radar' }],
        [{ text: '🗣️ Drop Audio in Discussion Group', url: 'https://t.me/ieltsenglishfluency' }]
      ]
    }
  },

  6: { // SATURDAY
    morning: {
      type: 'message',
      text: `💼 <b>CAREER PRECISION: Action Verbs That Beat ATS Filters</b>\n\n` +
        `Generic resumes say: <i>"Responsible for managing the project."</i>\n` +
        `ATS algorithms look for quantifiable impact verbs.\n\n` +
        `Upgrade your CV bullet points:\n` +
        `❌ <i>Basic:</i> "Worked on trade analysis report."\n` +
        `✅ <b>ATS Band 9:</b> <code>Spearheaded multilateral trade analysis, authoring a 40-page intelligence brief for executive stakeholders.</code>\n\n` +
        `📄 <b>Audit your CV for free:</b>\n` +
        `👉 https://dhshishir.com/tools/ats-checker`,
      buttons: [[{ text: '📄 Check Your CV (Free)', url: 'https://dhshishir.com/tools/ats-checker' }]]
    },
    afternoon: {
      type: 'poll',
      question: "Which academic collocation correctly pairs with the verb 'formulate'?",
      options: [
        "Formulate a robust strategic policy",
        "Formulate a quick conversation",
        "Formulate an easy homework"
      ],
      correct_option_id: 0, // Formulate policy
      explanation: "'Formulate' is a formal verb collocated with 'policy', 'strategy', 'hypothesis', or 'framework'."
    },
    evening: {
      type: 'message',
      text: `🎓 <b>HOW TO EMAIL PROFESSORS FOR FUNDED RESEARCH ASSISTANTSHIPS</b>\n\n` +
        `Over 80% of student cold emails are ignored because they sound like generic templates.\n\n` +
        `🔑 <b>The 3 Golden Rules:</b>\n` +
        `1. Reference a specific paper published by the professor in 2024–2026.\n` +
        `2. Clearly articulate how your technical skills solve one of their open lab challenges.\n` +
        `3. Keep the initial email under 200 words with a clean CV attached.\n\n` +
        `📖 <b>Read the Full Winning Email & SOP Templates Guide:</b>\n` +
        `👉 https://dhshishir.com/blog/how-to-email-professors-funded-graduate-research-assistantships-templates`,
      buttons: [[{ text: '📖 Read Scholarship & SOP Guide', url: 'https://dhshishir.com/blog/how-to-email-professors-funded-graduate-research-assistantships-templates' }]]
    }
  },

  0: { // SUNDAY
    morning: {
      type: 'message',
      text: `🎁 <b>SUNDAY FREE RESOURCE: 500+ Band 8.5 Academic Collocations Anki Deck</b>\n\n` +
        `Spaced repetition is the fastest scientific method to permanently memorize vocabulary.\n\n` +
        `We have curated a complete <b>500+ High-Yield Academic Collocations Deck</b> formatted for the free Anki app!\n\n` +
        `📥 <b>Download Your Free Deck (.CSV / Anki):</b>\n` +
        `1. Visit our IELTS Hub: https://dhshishir.com/ielts\n` +
        `2. Scroll to the Collocation Duel section and click <b>"Export Anki Deck (.csv)"</b>.\n` +
        `3. Import into the Anki app and start your daily 5-minute flashcard streak!\n\n` +
        `🚀 <i>Forward this to your study partners and IELTS groups!</i>`,
      buttons: [[{ text: '📥 Export Free Anki Deck (.csv)', url: 'https://dhshishir.com/ielts' }]]
    },
    afternoon: {
      type: 'poll',
      question: "Identify the grammatically precise sentence for Academic Task 2:",
      options: [
        "Despite of the economic growth, inequality rose.",
        "Despite the economic growth, inequality rose.",
        "In spite the economic growth, inequality rose."
      ],
      correct_option_id: 1, // Despite the economic growth
      explanation: "'Despite' takes a noun phrase directly without 'of'. 'In spite' requires 'of' (in spite of)."
    },
    evening: {
      type: 'message',
      text: `🌟 <b>SUNDAY COMMUNITY VOICE DRILL: Weekly Fluency Reflection</b>\n\n` +
        `Tonight's 60-Second Challenge:\n` +
        `Record a voice message answering:\n` +
        `<blockquote>"What is one key academic insight or vocabulary collocation you mastered this week?"</blockquote>\n\n` +
        `🎙️ Check your rhythm on our Fluency Lab first, then drop your voice recording in our Discussion Group!`,
      buttons: [
        [{ text: '🎙️ Practice on Fluency Lab', url: 'https://dhshishir.com/english-fluency-lab' }],
        [{ text: '🗣️ Drop Voice Note in Discussion Group', url: 'https://t.me/ieltsenglishfluency' }]
      ]
    }
  },

  1: { // MONDAY
    morning: {
      type: 'message',
      text: `⚔️ <b>MONDAY SPEED DUEL: Can You Score 100+ Points in 60 Seconds?</b>\n\n` +
        `Kick off your week with high-speed academic vocabulary training!\n\n` +
        `🎮 <b>Play the 60-Second Collocation Duel:</b>\n` +
        `Upgrade Band 5 phrases into Band 9 academic powerhouses before the timer expires!\n\n` +
        `👉 https://dhshishir.com/ielts\n\n` +
        `📸 <i>Screenshot your score and share it in our Discussion Group to claim the weekly leaderboard crown!</i>`,
      buttons: [[{ text: '🎮 Play Collocation Duel', url: 'https://dhshishir.com/ielts' }]]
    },
    afternoon: {
      type: 'poll',
      question: "Passage: 'While early prototypes demonstrated remarkable thermal efficiency, manufacturing costs prevented immediate commercial rollout.' What can be inferred?",
      options: [
        "The prototypes were a total technical failure.",
        "Financial constraints delayed market adoption.",
        "The technology was banned by governments."
      ],
      correct_option_id: 1, // Financial constraints
      explanation: "'Manufacturing costs prevented commercial rollout' directly means financial/cost constraints delayed adoption."
    },
    evening: {
      type: 'message',
      text: `🎙️ <b>MONDAY FLUENCY DRILL: Executive & Diplomatic Discourse</b>\n\n` +
        `🎧 <b>Shadowing Prompt:</b>\n` +
        `<blockquote>"To ensure long-term stability, we must cultivate resilient supply chains and establish robust bilateral partnerships."</blockquote>\n\n` +
        `🔑 <b>Cadence Focus:</b>\n` +
        `• Smooth stress-timing: <i>re-SIL-ient sup-PLY chains</i> ➔ <i>bi-LAT-er-al PART-ner-ships</i>\n\n` +
        `🎤 <b>Practice live in our Speech Studio:</b>\n` +
        `👉 https://dhshishir.com/english-fluency-lab`,
      buttons: [[{ text: '🎙️ Open Speech Studio', url: 'https://dhshishir.com/english-fluency-lab' }]]
    }
  }
};

// 3. Dispatch Scheduled Drill by Day and Slot
export async function dispatchScheduledDrill(slot = 'morning', dayOfWeek = null) {
  // If no dayOfWeek supplied, calculate current BST day of the week (UTC+6)
  if (dayOfWeek === null || dayOfWeek === undefined) {
    const nowUtc = new Date();
    const bstTime = new Date(nowUtc.getTime() + (6 * 60 * 60 * 1000));
    dayOfWeek = bstTime.getUTCDay();
  }

  const daySchedule = WEEKLY_SCHEDULE[dayOfWeek];
  if (!daySchedule || !daySchedule[slot]) {
    console.error(`❌ No scheduled drill found for Day ${dayOfWeek} (${slot})`);
    return { ok: false };
  }

  const item = daySchedule[slot];
  console.log(`🚀 Dispatching Day ${dayOfWeek} - Slot [${slot.toUpperCase()}]...`);

  if (item.type === 'poll') {
    return callApi('sendPoll', {
      chat_id: BOT_CONFIG.channelId,
      question: item.question.length > 255 ? item.question.substring(0, 252) + '...' : item.question,
      options: item.options,
      type: 'quiz',
      correct_option_id: item.correct_option_id,
      explanation: item.explanation,
      explanation_parse_mode: 'HTML',
      is_anonymous: true
    });
  } else {
    return callApi('sendMessage', {
      chat_id: BOT_CONFIG.channelId,
      text: item.text,
      parse_mode: 'HTML',
      reply_markup: item.buttons ? { inline_keyboard: item.buttons } : undefined
    });
  }
}

// 4. CLI Execution
async function run() {
  const args = process.argv.slice(2);
  const command = args[0] || 'info';

  if (command === 'setup') {
    await setupBotProfile();
  } else if (['morning', 'afternoon', 'evening'].includes(command)) {
    const day = args[1] !== undefined ? parseInt(args[1], 10) : null;
    const res = await dispatchScheduledDrill(command, day);
    console.log(`Dispatched [${command}]:`, res.ok ? 'SUCCESS' : 'FAILED');
  } else {
    const res = await callApi('getMe', {});
    console.log('🤖 Bot Status:', res);
  }
}

if (process.argv[1] && process.argv[1].endsWith('telegram-bot.js')) {
  run();
}
