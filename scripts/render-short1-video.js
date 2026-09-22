import fs from 'fs';
import path from 'path';
import https from 'https';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDownloadsDir = path.join(rootDir, 'public', 'downloads');
const tempDir = path.join(rootDir, 'scripts', 'temp_short1_build');

if (!fs.existsSync(publicDownloadsDir)) {
  fs.mkdirSync(publicDownloadsDir, { recursive: true });
}
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

const ELEVENLABS_API_KEY = "sk_db62456dfb638d9d7a587440061054f616c65e111ff7bb46";
const VOICE_ID = "pNInz6obpgDQGcFmaJgB"; // Adam (Confident, Clear American Broadcast Narrator)

const shortNarration = "Stop paying for speaking mock tests! Welcome to dhshishir dot com's AI Speech and Fluency Lab. Speak directly into your microphone, see your words transcribed in real time, and get instant Band 8.5 scoring on fluency, pronunciation, grammar, and vocabulary. 100 percent free. Start your practice today at dhshishir dot com.";

function generateElevenLabsAudio(text, outputPath) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      text: text,
      model_id: "eleven_turbo_v2_5",
      voice_settings: {
        stability: 0.55,
        similarity_boost: 0.85,
        style: 0.25,
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
        let err = '';
        res.on('data', d => err += d);
        res.on('end', () => reject(new Error(`ElevenLabs error: ${err}`)));
        return;
      }
      const stream = fs.createWriteStream(outputPath);
      res.pipe(stream);
      stream.on('finish', () => resolve(outputPath));
      stream.on('error', reject);
    });
    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function renderShort1() {
  console.log('🎬 Starting Short 01: AI Speech & Fluency Radar Production Pipeline...');

  // Step 1: Synthesize ElevenLabs Audio
  const audioFile = path.join(tempDir, 'short1_eleven_voice.mp3');
  console.log('🎙️ Synthesizing Studio Voiceover via ElevenLabs API...');
  await generateElevenLabsAudio(shortNarration, audioFile);
  console.log('✅ ElevenLabs Studio Audio Generated!');

  // Step 2: Render 1080p Master Video using Studio Recorder / FFmpeg
  console.log('🎥 Rendering 1080p MP4 Video with FFmpeg...');
  
  // We take the high-res 1920x1080 slide from Edge and loop with audio
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const htmlPath = path.join(rootDir, 'public', 'studio-short1-speech-radar.html');
  const slidePng = path.join(tempDir, 'short1_frame.png');

  execSync(`"${edgePath}" --headless --disable-gpu --screenshot="${slidePng}" --window-size=1920,1080 "file:///${htmlPath.replace(/\\/g, '/')}"`, { stdio: 'ignore' });
  console.log('✅ Captured High-Definition 1080p Frame');

  const finalMp4 = path.join(publicDownloadsDir, 'dhshishir-short01-ai-speech-fluency-radar-1080p.mp4');
  const ffmpegCmd = `ffmpeg -y -loop 1 -framerate 30 -i "${slidePng}" -i "${audioFile}" -c:v libx264 -tune stillimage -c:a aac -b:a 320k -pix_fmt yuv420p -shortest "${finalMp4}"`;

  execSync(ffmpegCmd, { stdio: 'inherit' });
  const stats = fs.statSync(finalMp4);
  const sizeMb = (stats.size / (1024 * 1024)).toFixed(2);

  console.log(`\n======================================================`);
  console.log(`🎉 SUCCESS! Short 01 Master Video Ready!`);
  console.log(`📁 File: ${finalMp4}`);
  console.log(`⚖️  Size: ${sizeMb} MB`);
  console.log(`🌐 Live URL: https://dhshishir.com/downloads/dhshishir-short01-ai-speech-fluency-radar-1080p.mp4`);
  console.log(`======================================================\n`);
}

renderShort1().catch(console.error);
