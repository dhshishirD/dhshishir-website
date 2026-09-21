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

  // Set Description
  await callApi('setMyDescription', {
    description: 'Welcome to English Fluency & IELTS 8.5+ Lab! 🎯 Free interactive speaking simulators, acoustic shadowing, Band 8.5 collocation duels, and Cambridge reading courtroom drills powered by https://dhshishir.com',
  });

  // Set Short Description (shown before start)
  await callApi('setMyShortDescription', {
    short_description: 'Daily Interactive IELTS Band 8.5 & English Fluency Training Hub by Daloyar Hassan Shishir.',
  });

  // Set Bot Commands
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

// 2. Curated Content Bank for 30-Day Rotation
export const DRILL_BANK = {
  collocations: [
    {
      bad: "solve a big problem",
      good: "Address the underlying structural dilemma",
      topic: "Global Governance & Economics",
      example: "Policymakers must **address the underlying structural dilemma** before imposing arbitrary fiscal tariffs.",
      tip: "Avoid overusing 'solve' in Academic Writing Task 2."
    },
    {
      bad: "make a big difference",
      good: "Yield a transformative outcome",
      topic: "Technology & Sustainability",
      example: "Subregional cross-border energy integration will **yield a transformative outcome** for South Asian industrial grids.",
      tip: "Use 'transformative outcome' in conclusions to boost Lexical Resource."
    },
    {
      bad: "a rapid increase",
      good: "An unprecedented exponential surge",
      topic: "Academic Task 1 Trends",
      example: "The solar energy adoption metric experienced **an unprecedented exponential surge** between 2020 and 2026.",
      tip: "Pair strong adverbs with vivid nominal phrases for Band 8.5+ Task 1."
    },
    {
      bad: "give important information",
      good: "Impart pivotal strategic insights",
      topic: "Diplomacy & Career",
      example: "The geopolitical intelligence dossier **imparts pivotal strategic insights** into maritime choke-points.",
      tip: "Replace 'give information' with 'impart insights' in formal writing."
    },
    {
      bad: "stop the bad effects",
      good: "Mitigate adverse ecological repercussions",
      topic: "Environmental Policy",
      example: "Global climate agreements seek to **mitigate adverse ecological repercussions** in vulnerable delta regions.",
      tip: "Collocate 'mitigate' with 'repercussions' or 'fallout'."
    }
  ],

  quizzes: [
    {
      question: "Reading Qualifier: 'Research indicates that green hydrogen might eventually replace coal by 2038.' Statement: 'Green hydrogen has already replaced fossil fuels in energy grids.'",
      options: ["TRUE", "FALSE", "NOT GIVEN"],
      correct_option_id: 1, // FALSE
      explanation: "The passage uses 'might eventually' (future probability), while the question states 'has already replaced' (past certainty). Contradiction = FALSE."
    },
    {
      question: "TFNG Trial: 'The treaty was ratified by all European signatories in 2024.' Statement: 'Asian countries also signed the treaty in 2024.'",
      options: ["TRUE", "FALSE", "NOT GIVEN"],
      correct_option_id: 2, // NOT GIVEN
      explanation: "The text specifies European signatories, but gives zero evidence about Asian countries. Absence of fact = NOT GIVEN."
    },
    {
      question: "Lexical Precision: Which collocation represents Band 9 academic register for 'very crowded cities'?",
      options: ["Overly packed towns", "Densely populated metropolitan hubs", "High number living areas", "Big population clusters"],
      correct_option_id: 1, // Densely populated metropolitan hubs
      explanation: "'Densely populated metropolitan hubs' demonstrates sophisticated lexical compounding and precision."
    },
    {
      question: "Writing Task 1 Qualifier: 'Oil prices dropped slightly from $80 to $79.' How should this be reported at Band 8.5?",
      options: ["Prices collapsed dramatically", "Values plummeted sharply", "The commodity experienced a negligible dip of $1", "There was an extreme decline"],
      correct_option_id: 2, // negligible dip
      explanation: "A $1 change from $80 is minor. 'Negligible dip' or 'marginal reduction' reflects accurate data interpretation."
    }
  ],

  shadowing: [
    {
      theme: "Diplomatic Statecraft & Fluency Cadence",
      text: "The proliferation of multilateral trade accords has fundamentally reconfigured regional economic integration across the Global South.",
      phonetics: "Focus on linking 'proliferation-of' and stress on 'fun-da-MEN-tally' and 're-CON-figured'.",
      targetUrl: "https://dhshishir.com/english-fluency-lab"
    },
    {
      theme: "Academic Defense & Argumentation",
      text: "Empirical evidence corroborates the hypothesis that sustainable infrastructure investment accelerates cross-border resilience.",
      phonetics: "Glide smoothly through 'em-PIR-i-cal EV-i-dence' without glottal pauses.",
      targetUrl: "https://dhshishir.com/english-fluency-lab"
    },
    {
      theme: "Executive Speaking & Negotiation",
      text: "We must establish a transparent governance framework before executing high-stake bilateral capital allocations.",
      phonetics: "Emphasize rhythm: 'trans-PAR-ent GOV-ern-ance' ➔ 'bi-LAT-er-al ALL-o-ca-tions'.",
      targetUrl: "https://dhshishir.com/english-fluency-lab"
    }
  ]
};

// 3. Post Morning Collocation Duel
export async function postMorningCollocation(channelId = BOT_CONFIG.channelId) {
  const index = Math.floor(Math.random() * DRILL_BANK.collocations.length);
  const item = DRILL_BANK.collocations[index];

  const text = `⚔️ <b>MORNING COLLOCATION DUEL: Band 5 ➔ Band 8.5</b>\n\n` +
    `Upgrade your lexical precision in 5 seconds:\n\n` +
    `❌ <i>Band 5.5:</i> "${item.bad}"\n` +
    `✅ <b>Band 8.5:</b> <code>${item.good}</code>\n\n` +
    `📚 <b>Academic Example:</b>\n<i>"${item.example}"</i>\n\n` +
    `💡 <b>Pro Tip:</b> ${item.tip}\n\n` +
    `🎮 <b>Play the 60-Second Speed Arcade on our IELTS Hub:</b>\n` +
    `Test how many collocations you can morph before the clock runs out!`;

  return callApi('sendMessage', {
    chat_id: channelId,
    text: text,
    parse_mode: 'HTML',
    reply_markup: {
      inline_keyboard: [
        [
          { text: '🎮 Play Collocation Duel (Free)', url: 'https://dhshishir.com/ielts' },
          { text: '📥 Export Anki Deck', url: 'https://dhshishir.com/ielts' }
        ],
        [
          { text: '💬 Join Discussion & Peer Drills', url: 'https://t.me/ieltsenglishfluency' }
        ]
      ]
    }
  });
}

// 4. Post Cambridge Quiz Poll (Native Telegram Quiz)
export async function postCambridgeQuiz(channelId = BOT_CONFIG.channelId) {
  const index = Math.floor(Math.random() * DRILL_BANK.quizzes.length);
  const quiz = DRILL_BANK.quizzes[index];

  return callApi('sendPoll', {
    chat_id: channelId,
    question: quiz.question.length > 255 ? quiz.question.substring(0, 252) + '...' : quiz.question,
    options: quiz.options,
    type: 'quiz',
    correct_option_id: quiz.correct_option_id,
    explanation: quiz.explanation,
    explanation_parse_mode: 'HTML',
    is_anonymous: true
  });
}

// 5. Post Nightly Acoustic Speech Shadowing
export async function postNightlyShadowing(channelId = BOT_CONFIG.channelId) {
  const index = Math.floor(Math.random() * DRILL_BANK.shadowing.length);
  const item = DRILL_BANK.shadowing[index];

  const text = `🎙️ <b>NIGHTLY ACOUSTIC FLUENCY DRILL: Eliminate MTI & Hesitation</b>\n\n` +
    `Train your vocal muscle memory and stress-timed English rhythm:\n\n` +
    `🎯 <b>Theme:</b> ${item.theme}\n\n` +
    `🎧 <b>Read Aloud 3 Times Without Pause:</b>\n` +
    `<blockquote>"${item.text}"</blockquote>\n\n` +
    `🔑 <b>Acoustic Cadence Focus:</b>\n${item.phonetics}\n\n` +
    `🎤 <b>Practice with Live Waveform Feedback in our Speech Studio:</b>`;

  return callApi('sendMessage', {
    chat_id: channelId,
    text: text,
    parse_mode: 'HTML',
    reply_markup: {
      inline_keyboard: [
        [
          { text: '🎙️ Open Speech Studio (Free)', url: 'https://dhshishir.com/english-fluency-lab' }
        ],
        [
          { text: '🗣️ Send Voice Note in Discussion Group', url: 'https://t.me/ieltsenglishfluency' }
        ]
      ]
    }
  });
}

// 6. CLI Execution Dispatcher
async function run() {
  const args = process.argv.slice(2);
  const command = args[0] || 'info';

  if (command === 'setup') {
    await setupBotProfile();
  } else if (command === 'collocation') {
    const res = await postMorningCollocation();
    console.log('Sent Collocation Drill:', res.ok ? 'SUCCESS' : 'FAILED');
  } else if (command === 'quiz') {
    const res = await postCambridgeQuiz();
    console.log('Sent Cambridge Quiz Poll:', res.ok ? 'SUCCESS' : 'FAILED');
  } else if (command === 'shadowing') {
    const res = await postNightlyShadowing();
    console.log('Sent Shadowing Drill:', res.ok ? 'SUCCESS' : 'FAILED');
  } else {
    // Default: Check Bot Info
    const res = await callApi('getMe', {});
    console.log('🤖 Bot Status:', res);
  }
}

if (process.argv[1] && process.argv[1].endsWith('telegram-bot.js')) {
  run();
}
