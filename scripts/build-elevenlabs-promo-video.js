import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDownloadsDir = path.join(rootDir, 'public', 'downloads');
const tempDir = path.join(rootDir, 'scripts', 'temp_elevenlabs_build');

if (!fs.existsSync(publicDownloadsDir)) {
  fs.mkdirSync(publicDownloadsDir, { recursive: true });
}
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

const ELEVENLABS_API_KEY = "sk_db62456dfb638d9d7a587440061054f616c65e111ff7bb46";
// Adam Voice ID (Deep, authoritative, confident American broadcast narrator)
const VOICE_ID = "pNInz6obpgDQGcFmaJgB";

console.log('🎙️ Initializing Studio-Grade ElevenLabs AI Voice & 1080p Video Generator...');

const scenes = [
  {
    id: 1,
    badge: "DHSHISHIR.COM • GLOBAL ACADEMIC PORTAL",
    tagline: "100% FREE OPEN ACCESS • ZERO SUBSCRIPTIONS",
    title: "Master IELTS Band 8.5+ & Academic Statecraft",
    subtitle: "Stop spending thousands of dollars on coaching. Experience Bangladesh's premier AI-powered learning portal.",
    highlights: [
      { label: "AI Speech Recognition Lab", desc: "Live microphone feedback with Band 8.5 fluency scoring" },
      { label: "Examiner Writing Evaluator", desc: "Task 1 and Task 2 paragraph-by-paragraph breakdown" },
      { label: "20+ Master's IR Lectures", desc: "Comprehensive course readers and geopolitical treatises" }
    ],
    voiceover: "Stop spending thousands of dollars on expensive coaching. Welcome to dhshishir dot com — the world's premier, 100 percent free interactive platform for IELTS preparation, academic diplomacy, and strategic communication."
  },
  {
    id: 2,
    badge: "LIVE AI SPEECH & FLUENCY LAB",
    tagline: "Speech Recognition • Pronunciation Radar • Lexical Cohesion",
    title: "Real-Time Speaking Mock Tests with Instant Feedback",
    subtitle: "Speak naturally into your microphone and receive instant evaluation across all official Cambridge assessment criteria.",
    highlights: [
      { label: "Fluency & Coherence", desc: "Real-time pacing and filler-word detection (Band 8.5+)" },
      { label: "Lexical Resource", desc: "Instant suggestions for academic collocations and C1/C2 upgrades" },
      { label: "Grammar & Accuracy", desc: "Syntactic structure analysis with examiner feedback" }
    ],
    voiceover: "Practice real speaking cue cards with our live AI speech recognition engine. Speak directly into your microphone and get instant scoring on fluency, pronunciation, grammar, and vocabulary."
  },
  {
    id: 3,
    badge: "FULL 4-SKILL PREPARATION SUITE",
    tagline: "Writing • Reading • Listening • 1,200+ Smart Vocab Vault",
    title: "Conquer Every Section of the Exam with Confidence",
    subtitle: "From Band 9 essay models to high-speed academic reading drills and multi-accent listening tests.",
    highlights: [
      { label: "Band 9 Essay Examiner", desc: "Analyze Task 1 charts and Task 2 argumentative essays" },
      { label: "Academic Reading Drills", desc: "True, False, Not Given logic traps and skimming timers" },
      { label: "Multi-Accent Audio Lab", desc: "British, Australian, American, and Canadian accents" }
    ],
    voiceover: "Master all four skills. Analyze Band 9 essays with our AI writing examiner, conquer complex reading passages, and build elite vocabulary with our smart cloud-synchronized flashcards."
  },
  {
    id: 4,
    badge: "ACADEMIC DIPLOMACY & GEOPOLITICS",
    tagline: "Statecraft • Bilateral Negotiations • Maritime Lawfare",
    title: "Interactive Simulators & Master of Arts IR Course",
    subtitle: "Elevate your strategic thinking with real-world negotiation game trees and 20-lecture textbook treatises.",
    highlights: [
      { label: "Bilateral Negotiation Game", desc: "Interactive tactical decisions and diplomatic concessions" },
      { label: "Geopolitical Risk Simulator", desc: "Multi-variable maritime and transboundary water scenarios" },
      { label: "200-Page IR Course Reader", desc: "Printable offline Word documents and academic treatises" }
    ],
    voiceover: "Go beyond English tests. Elevate your strategic thinking with real-world bilateral negotiation simulators and complete Master of Arts in International Relations course readers."
  },
  {
    id: 5,
    badge: "VERIFIABLE CREDENTIALS & CLOUD SYNC",
    tagline: "SHA-256 Cryptographic Verification • Cloud Progress Tracking",
    title: "Track Your Growth & Earn Verifiable Certificates",
    subtitle: "Sign in with Google to save your simulation history, vocab vault, and share verifiable credentials on your CV and LinkedIn.",
    highlights: [
      { label: "1-Click Google Sign-In", desc: "Instant progress sync across all your devices" },
      { label: "Verifiable SHA-256 Hashes", desc: "Tamper-proof digital certificates of completion" },
      { label: "1-Click Document Exports", desc: "Downloadable PDF, Word, and print-ready handbooks" }
    ],
    voiceover: "Track your progress on the cloud, download comprehensive course handbooks, and earn verifiable certificates to power your global career."
  },
  {
    id: 6,
    badge: "START YOUR SUCCESS JOURNEY TODAY",
    tagline: "dhshishir.com • Free Forever • Accessible Globally",
    title: "Your Dream Band Score Is Just One Click Away",
    subtitle: "Join ambitious students and scholars worldwide. No subscription or credit card required.",
    highlights: [
      { label: "Universal Compatibility", desc: "Optimized for Desktop, Tablet, and Mobile devices" },
      { label: "100% Free Forever", desc: "Full access to all 10+ interactive learning tools" },
      { label: "Visit Today", desc: "https://dhshishir.com" }
    ],
    voiceover: "Unlock your global potential today. Visit dhshishir dot com. Practice freely, prepare smartly, and achieve your dream band score."
  }
];

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

// Helper function to synthesize speech using ElevenLabs API
function generateElevenLabsAudio(text, outputPath) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      text: text,
      model_id: "eleven_turbo_v2_5",
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.85,
        style: 0.2,
        use_speaker_boost: true
      }
    });

    const options = {
      hostname: 'api.elevenlabs.io',
      path: `/v1/text-to-speech/${VOICE_ID}`,
      method: 'POST',
      headers: {
        'Accept': 'audio/mpeg',
        'xi-api-key': ELEVENLABS_API_KEY,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = https.request(options, (res) => {
      if (res.statusCode !== 200) {
        let errData = '';
        res.on('data', chunk => errData += chunk);
        res.on('end', () => reject(new Error(`ElevenLabs API Error (${res.statusCode}): ${errData}`)));
        return;
      }

      const fileStream = fs.createWriteStream(outputPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => resolve(outputPath));
      fileStream.on('error', reject);
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function runPipeline() {
  const pngPaths = [];
  const audioPaths = [];

  console.log('🎨 Step 1: Rendering 1920x1080 Ultra-HD Graphic Slides...');

  for (let i = 0; i < scenes.length; i++) {
    const scene = scenes[i];
    const index = i;

    const htmlContent = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 1920px;
    height: 1080px;
    background: radial-gradient(circle at 85% 15%, #0f766e 0%, #0f172a 45%, #020617 100%);
    color: #f8fafc;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 90px 140px;
    overflow: hidden;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 10px 24px;
    background: rgba(20, 184, 166, 0.15);
    border: 2px solid rgba(45, 212, 191, 0.5);
    border-radius: 999px;
    font-size: 18px;
    font-weight: 800;
    letter-spacing: 2px;
    color: #2dd4bf;
    text-transform: uppercase;
  }
  .dot { width: 10px; height: 10px; border-radius: 50%; background: #2dd4bf; }
  .scene-tag {
    padding: 10px 22px;
    background: rgba(30, 41, 59, 0.8);
    border: 1px solid #334155;
    border-radius: 999px;
    font-size: 17px;
    font-weight: 700;
    color: #94a3b8;
  }
  .main {
    margin: 25px 0;
  }
  .tagline {
    font-size: 20px;
    font-weight: 700;
    color: #38bdf8;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 12px;
  }
  .title {
    font-size: 64px;
    font-weight: 900;
    line-height: 1.15;
    color: #ffffff;
    letter-spacing: -1.5px;
    margin-bottom: 18px;
    max-width: 1550px;
  }
  .subtitle {
    font-size: 26px;
    font-weight: 400;
    line-height: 1.4;
    color: #94a3b8;
    max-width: 1400px;
  }
  .highlights-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    margin-top: 40px;
  }
  .card {
    background: rgba(15, 23, 42, 0.75);
    border: 1.5px solid rgba(51, 65, 85, 0.8);
    border-radius: 20px;
    padding: 26px 30px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  }
  .card-label {
    font-size: 22px;
    font-weight: 800;
    color: #2dd4bf;
    margin-bottom: 8px;
  }
  .card-desc {
    font-size: 17px;
    color: #cbd5e1;
    line-height: 1.4;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1.5px solid #1e293b;
    padding-top: 25px;
  }
  .brand {
    font-size: 26px;
    font-weight: 900;
    color: #ffffff;
  }
  .brand-sub {
    font-size: 18px;
    color: #64748b;
    margin-left: 12px;
    font-weight: 500;
  }
  .cta-btn {
    padding: 12px 32px;
    background: linear-gradient(135deg, #14b8a6, #0284c7);
    color: #020617;
    font-size: 20px;
    font-weight: 800;
    border-radius: 14px;
  }
</style>
</head>
<body>
  <div class="header">
    <div class="badge"><div class="dot"></div>${scene.badge}</div>
    <div class="scene-tag">SCENE 0${index + 1} / 06</div>
  </div>

  <div class="main">
    <div class="tagline">${scene.tagline}</div>
    <div class="title">${scene.title}</div>
    <div class="subtitle">${scene.subtitle}</div>

    <div class="highlights-grid">
      ${scene.highlights.map(h => `
        <div class="card">
          <div class="card-label">✓ ${h.label}</div>
          <div class="card-desc">${h.desc}</div>
        </div>
      `).join('')}
    </div>
  </div>

  <div class="footer">
    <div>
      <span class="brand">dhshishir.com</span>
      <span class="brand-sub">• Bangladesh's Premier Free IELTS & Academic Statecraft Portal</span>
    </div>
    <div class="cta-btn">Start Free Practice ➔</div>
  </div>
</body>
</html>`;

    const htmlFile = path.join(tempDir, `slide_${index + 1}.html`);
    const pngFile = path.join(tempDir, `slide_${index + 1}.png`);
    fs.writeFileSync(htmlFile, htmlContent, 'utf-8');

    // Render HTML to PNG via Edge
    const edgeCmd = `"${edgePath}" --headless --disable-gpu --screenshot="${pngFile}" --window-size=1920,1080 "file:///${htmlFile.replace(/\\/g, '/')}"`;
    try {
      execSync(edgeCmd, { stdio: 'ignore' });
      pngPaths.push(pngFile);
      console.log(`   ✓ Rendered 1080p Slide 0${index + 1}`);
    } catch (err) {
      console.error(`Failed to render slide ${index + 1}:`, err);
    }

    // Synthesize Audio via ElevenLabs
    const mp3File = path.join(tempDir, `eleven_voice_${index + 1}.mp3`);
    try {
      console.log(`   🎙️ Generating ElevenLabs Studio Audio for Scene 0${index + 1}...`);
      await generateElevenLabsAudio(scene.voiceover, mp3File);
      audioPaths.push(mp3File);
      console.log(`   ✓ ElevenLabs Studio Audio 0${index + 1} Synthesized!`);
    } catch (err) {
      console.error(`ElevenLabs error on scene ${index + 1}:`, err.message);
    }
  }

  // Step 2: Encode Video Segments
  console.log('\n🎥 Step 2: Encoding 1080p MP4 Segments with FFmpeg...');
  const segmentMp4s = [];

  for (let i = 0; i < scenes.length; i++) {
    const pngFile = pngPaths[i];
    const mp3File = audioPaths[i];
    const segMp4 = path.join(tempDir, `eleven_scene_${i + 1}.mp4`);

    // Combine 1080p slide with studio ElevenLabs audio
    const cmd = `ffmpeg -y -loop 1 -framerate 30 -i "${pngFile}" -i "${mp3File}" -c:v libx264 -tune stillimage -c:a aac -b:a 256k -pix_fmt yuv420p -shortest "${segMp4}"`;
    try {
      execSync(cmd, { stdio: 'ignore' });
      segmentMp4s.push(segMp4);
      console.log(`   ✓ Encoded Broadcast Segment 0${i + 1}`);
    } catch (err) {
      console.error(`Failed to encode segment ${i + 1}:`, err);
    }
  }

  // Step 3: Concat into Master Broadcast Video
  if (segmentMp4s.length === scenes.length) {
    console.log('\n🎬 Step 3: Stitching Final Master Broadcast 1080p MP4 Video...');
    const concatListPath = path.join(tempDir, 'concat_eleven_master.txt');
    const concatContent = segmentMp4s.map(p => `file '${p.replace(/\\/g, '/')}'`).join('\n');
    fs.writeFileSync(concatListPath, concatContent, 'utf-8');

    const finalMp4Output = path.join(publicDownloadsDir, 'dhshishir-ielts-promotional-video-1080p-broadcast-master.mp4');
    const mergeCmd = `ffmpeg -y -f concat -safe 0 -i "${concatListPath}" -c copy "${finalMp4Output}"`;

    try {
      execSync(mergeCmd, { stdio: 'inherit' });
      const stats = fs.statSync(finalMp4Output);
      const sizeMb = (stats.size / (1024 * 1024)).toFixed(2);
      console.log(`\n================================================================`);
      console.log(`🎉 SUCCESS! Studio-Grade 1080p Broadcast Master Video Generated!`);
      console.log(`📁 Local File: ${finalMp4Output}`);
      console.log(`⚖️  Size: ${sizeMb} MB`);
      console.log(`🎙️ Voice: Ultra-Realistic ElevenLabs Studio AI Voice`);
      console.log(`🌐 Live URL: https://dhshishir.com/downloads/dhshishir-ielts-promotional-video-1080p-broadcast-master.mp4`);
      console.log(`================================================================\n`);
    } catch (err) {
      console.error('Failed to merge final video:', err);
    }
  }
}

runPipeline().catch(console.error);
