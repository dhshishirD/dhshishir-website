import fs from 'fs';
import path from 'path';
import { TELEGRAM_POSTS_DATA } from './telegram_posts_dataset.js';

// Configuration
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '8869531997:AAEn0Ld2pnnQg8ymnaIjkxh1-as4Ru7g8FU';
const CHANNEL_ID = process.env.TELEGRAM_CHANNEL_ID || '@ieltsenglishfluency';
const START_DATE = process.env.AUTO_POST_START_DATE || '2026-10-08';

const TELEGRAM_API = `https://api.telegram.org/bot${BOT_TOKEN}`;

/**
 * Determine current slot based on Bangladesh Standard Time (BST = UTC+6)
 */
function getAutoSlot() {
  const now = new Date();
  const utcHours = now.getUTCHours();
  const bstHours = (utcHours + 6) % 24;

  if (bstHours >= 5 && bstHours < 12) {
    return 'morning';
  } else if (bstHours >= 12 && bstHours < 18) {
    return 'afternoon';
  } else {
    return 'evening';
  }
}

/**
 * Determine current day in 15-day cycle
 */
function getAutoDay() {
  const start = new Date(START_DATE).getTime();
  const now = Date.now();
  const diffDays = Math.max(0, Math.floor((now - start) / (1000 * 60 * 60 * 24)));
  return (diffDays % 15) + 1;
}

/**
 * Parse CLI arguments
 */
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    day: null,
    slot: null,
    image: null,
    dryRun: false,
    setup: false
  };

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--day' && args[i + 1]) {
      options.day = parseInt(args[i + 1], 10);
      i++;
    } else if (args[i] === '--slot' && args[i + 1]) {
      options.slot = args[i + 1].toLowerCase();
      i++;
    } else if (args[i] === '--image' && args[i + 1]) {
      options.image = args[i + 1];
      i++;
    } else if (args[i] === '--dry-run' || args[i] === '--preview') {
      options.dryRun = true;
    } else if (args[i] === '--setup') {
      options.setup = true;
    }
  }

  return options;
}

/**
 * Helper: Call Telegram API with JSON
 */
async function callTelegramJson(endpoint, body) {
  const url = `${TELEGRAM_API}/${endpoint}`;
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    return await res.json();
  } catch (error) {
    console.error(`Network error calling ${endpoint}:`, error);
    return { ok: false, description: error.message };
  }
}

/**
 * Helper: Send Photo (supports local file or remote URL)
 */
async function sendTelegramPhoto(channelId, photoPath, caption) {
  const url = `${TELEGRAM_API}/sendPhoto`;

  if (photoPath.startsWith('http://') || photoPath.startsWith('https://')) {
    return await callTelegramJson('sendPhoto', {
      chat_id: channelId,
      photo: photoPath,
      caption: caption,
      parse_mode: 'HTML'
    });
  }

  // Local file upload via FormData
  const resolvedPath = path.isAbsolute(photoPath) ? photoPath : path.resolve(process.cwd(), photoPath);
  if (!fs.existsSync(resolvedPath)) {
    throw new Error(`Photo file not found: ${resolvedPath}`);
  }

  const fileBuffer = fs.readFileSync(resolvedPath);
  const fileBlob = new Blob([fileBuffer]);
  const fileName = path.basename(resolvedPath);

  const formData = new FormData();
  formData.append('chat_id', channelId);
  formData.append('photo', fileBlob, fileName);
  formData.append('caption', caption);
  formData.append('parse_mode', 'HTML');

  try {
    const res = await fetch(url, {
      method: 'POST',
      body: formData
    });
    return await res.json();
  } catch (error) {
    console.error('Network error during sendPhoto:', error);
    return { ok: false, description: error.message };
  }
}

/**
 * Configure Bot Commands and Description
 */
async function setupBot() {
  console.log('🤖 Updating @IeltsFluencyLabBot profile, description, and slash commands...');

  const descRes = await callTelegramJson('setMyDescription', {
    description: 'Welcome to English Fluency & IELTS 8.5+ Lab! 🎯 Free interactive speaking simulators, acoustic shadowing, Band 8.5 collocation duels, and Cambridge reading courtroom drills powered by https://dhshishir.com'
  });
  console.log('Set description status:', descRes.ok ? '✅ Success' : descRes.description);

  const shortDescRes = await callTelegramJson('setMyShortDescription', {
    short_description: 'Daily Interactive IELTS Band 8.5 & English Fluency Training Hub by Daloyar Hassan Shishir.'
  });
  console.log('Set short description status:', shortDescRes.ok ? '✅ Success' : shortDescRes.description);

  const cmdRes = await callTelegramJson('setMyCommands', {
    commands: [
      { command: 'ielts', description: 'Launch IELTS Band 8.5 Master Hub & Simulators' },
      { command: 'fluency', description: 'Start English Fluency Lab Acoustic Shadowing' },
      { command: 'collocation', description: 'Play 60-Second Collocation Duel Arcade' },
      { command: 'courtroom', description: 'Practice Cambridge TFNG Reading Trials' },
      { command: 'radar', description: 'Launch 2-Minute Speaking Flow Radar' },
      { command: 'morpher', description: 'Academic Task 1 Chart Sentence Generator' },
      { command: 'anki', description: 'Export 500+ Band 8.5 Anki Collocation Deck' },
      { command: 'ats', description: 'Free ATS Resume & CV Compliance Checker' }
    ]
  });
  console.log('Set commands status:', cmdRes.ok ? '✅ Success' : cmdRes.description);
}

/**
 * Main Dispatcher
 */
async function main() {
  const options = parseArgs();

  if (options.setup) {
    await setupBot();
    return;
  }

  const targetDay = options.day || getAutoDay();
  const targetSlot = options.slot || getAutoSlot();

  console.log(`\n========================================`);
  console.log(`🚀 Telegram Auto-Poster Dispatcher`);
  console.log(`📅 Target Day:  Day ${targetDay} / 15`);
  console.log(`⏰ Target Slot: ${targetSlot.toUpperCase()}`);
  console.log(`📢 Channel:     ${CHANNEL_ID}`);
  console.log(`========================================\n`);

  const dayData = TELEGRAM_POSTS_DATA.find((d) => d.day === targetDay);
  if (!dayData) {
    console.error(`❌ Error: Day ${targetDay} not found in dataset.`);
    process.exit(1);
  }

  const slotData = dayData[targetSlot];
  if (!slotData || !slotData.text) {
    console.error(`❌ Error: Slot '${targetSlot}' not found for Day ${targetDay}.`);
    process.exit(1);
  }

  const postText = slotData.text.trim();
  const photoPath = options.image || slotData.image || null;

  if (options.dryRun) {
    console.log('🧪 DRY RUN PREVIEW (Message will NOT be sent):');
    console.log('----------------------------------------');
    if (photoPath) console.log(`[ATTACHED PHOTO]: ${photoPath}`);
    console.log(postText);
    console.log('----------------------------------------\n');
    console.log('✅ Dry run completed successfully.');
    return;
  }

  let result;
  if (photoPath) {
    console.log(`📡 Sending photo post (${photoPath}) to Telegram channel...`);
    result = await sendTelegramPhoto(CHANNEL_ID, photoPath, postText);
  } else {
    console.log('📡 Sending text post to Telegram channel...');
    result = await callTelegramJson('sendMessage', {
      chat_id: CHANNEL_ID,
      text: postText,
      parse_mode: 'HTML',
      disable_web_page_preview: true
    });
  }

  if (result && result.ok) {
    console.log(`🎉 SUCCESS! Message ID: ${result.result.message_id} posted to ${CHANNEL_ID}`);
  } else {
    console.error(`❌ FAILED to send message:`, result?.description || result);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
