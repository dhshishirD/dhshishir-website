import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDownloadsDir = path.resolve(__dirname, '../public/downloads');

const docTitle = "Official IELTS & Academic Statecraft Promotional Video Script & Storyboard";
const subTitle = "Broadcast-Grade Scene-by-Scene Directions, Bilingual English/Bengali Voiceover, Visual Camera Cues, and Multi-Platform Video Marketing Playbook for dhshishir.com";

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${docTitle}</title>
<style>
  @page {
    size: A4 portrait;
    margin: 20mm 20mm 20mm 20mm;
    @bottom-right {
      content: "Page " counter(page);
      font-family: "Georgia", serif;
      font-size: 9pt;
      color: #718096;
    }
  }
  body {
    font-family: "Georgia", "Cambria", "Times New Roman", serif;
    font-size: 11pt;
    line-height: 1.65;
    color: #1a202c;
    background-color: #ffffff;
    max-width: 850px;
    margin: 0 auto;
    padding: 30px;
  }
  h1, h2, h3, h4 {
    font-family: "Georgia", "Cambria", "Times New Roman", serif;
    color: #0f172a;
    font-weight: bold;
    page-break-after: avoid;
  }
  h1 {
    font-size: 20pt;
    text-align: center;
    line-height: 1.3;
    margin-bottom: 6px;
    padding-bottom: 12px;
    border-bottom: 2px solid #0f172a;
  }
  .subtitle {
    font-size: 11pt;
    font-style: italic;
    text-align: center;
    color: #475569;
    margin-bottom: 25px;
    line-height: 1.4;
  }
  .meta-box {
    background-color: #f8fafc;
    border: 1px solid #cbd5e1;
    border-radius: 4px;
    padding: 14px 20px;
    margin-bottom: 25px;
    font-size: 10pt;
  }
  .meta-grid { display: table; width: 100%; }
  .meta-row { display: table-row; }
  .meta-cell-label { display: table-cell; font-weight: bold; color: #334155; width: 30%; padding: 3px 0; }
  .meta-cell-val { display: table-cell; color: #0f172a; padding: 3px 0; }
  h2 {
    font-size: 14pt;
    margin-top: 26px;
    margin-bottom: 10px;
    padding-bottom: 4px;
    border-bottom: 1px solid #cbd5e1;
  }
  h3 { font-size: 12pt; margin-top: 18px; margin-bottom: 6px; color: #1e293b; }
  p { margin-bottom: 12px; text-align: justify; }
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 16px 0 22px 0;
    font-size: 9.5pt;
    page-break-inside: avoid;
  }
  th, td { border: 1px solid #94a3b8; padding: 8px 10px; text-align: left; vertical-align: top; }
  th { background-color: #f1f5f9; font-weight: bold; color: #0f172a; }
  tr:nth-child(even) { background-color: #f8fafc; }
  .callout {
    background-color: #f8fafc;
    border-left: 4px solid #0f172a;
    padding: 12px 16px;
    margin: 16px 0;
    font-style: italic;
    font-size: 10pt;
  }
  .tech-code {
    font-family: "Courier New", Courier, monospace;
    background-color: #f1f5f9;
    padding: 2px 5px;
    border-radius: 3px;
    font-size: 9.5pt;
  }
  .page-break { page-break-before: always; }
</style>
</head>
<body>

<h1>${docTitle}</h1>
<div class="subtitle">${subTitle}</div>

<div class="meta-box">
  <div class="meta-grid">
    <div class="meta-row">
      <div class="meta-cell-label">Production Target:</div>
      <div class="meta-cell-val">IELTS & Diplomatic Portal Promotional Showcase (Video Length: ~45–60 Seconds)</div>
    </div>
    <div class="meta-row">
      <div class="meta-cell-label">Platform Channels:</div>
      <div class="meta-cell-val">YouTube Shorts, Facebook Reels, TikTok, Instagram Video Ads, LinkedIn</div>
    </div>
    <div class="meta-row">
      <div class="meta-cell-label">Target Audience:</div>
      <div class="meta-cell-val">IELTS candidates, BCS/Diplomacy aspirants, higher-study applicants worldwide</div>
    </div>
    <div class="meta-row">
      <div class="meta-cell-label">Core Value Proposition:</div>
      <div class="meta-cell-val">100% Free, AI-Powered Live Speech Lab, Band 9 Examiners & Diplomatic Simulators</div>
    </div>
  </div>
</div>

<div class="callout">
  <strong>How to Use This Blueprint:</strong> You can either use the interactive animated video player already built into the website at <span class="tech-code">dhshishir.com/ielts</span>, or record this video live using OBS Studio / Windows Game Bar (<kbd>Win + G</kbd>) to produce a high-converting promotional video.
</div>

<h2>Scene-by-Scene Broadcast Script & Visual Storyboard</h2>

<table>
  <thead>
    <tr>
      <th style="width: 15%;">Scene & Time</th>
      <th style="width: 25%;">On-Screen Visual Animation</th>
      <th style="width: 30%;">English Voiceover (Professional)</th>
      <th style="width: 30%;">Bengali Voiceover (বাংলা ডাবিং)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Scene 1: Hook</strong><br><em>(00:00 – 00:08)</em></td>
      <td>Dark luxury background with glowing teal rings. Bold animated text: <strong>"Target IELTS Band 8.5+ for Free"</strong>. Red price tag crossing out "$500 Coaching Fees".</td>
      <td>"Stop spending thousands on expensive coaching. Welcome to dhshishir.com — the world's most advanced, 100% free interactive platform for IELTS preparation and academic statecraft."</td>
      <td>"আইইএলটিএস প্রস্তুতির জন্য হাজার হাজার টাকা খরচ করা বন্ধ করুন! dhshishir.com-এ পেয়ে যাচ্ছেন সম্পূর্ণ বিনামূল্যে বিশ্বের সেরা এআই-চালিত আইইএলটিএস এবং ডিপ্লোমেটিক প্র্যাকটিস পোর্টাল।"</td>
    </tr>
    <tr>
      <td><strong>Scene 2: Speech Lab</strong><br><em>(00:08 – 00:18)</em></td>
      <td>Animated microphone with live voice wave. Real-time candidate speech transcription showing instant <strong>Band 8.5 Fluency & Pronunciation</strong> radar breakdown.</td>
      <td>"Practice real speaking cue cards with our live AI speech recognition engine. Speak into your microphone and get instant scoring on Fluency, Pronunciation, and Grammatical range."</td>
      <td>"আমাদের লাইভ স্পিচ রিকগনিশন ল্যাবে কথা বলুন আর সেকেন্ডের মধ্যে ফ্লুয়েন্সি, প্রোনাউনসিয়েশন এবং গ্রামারের ব্যান্ড ৮.৫ স্কোর ব্রেকডাউন জেনে নিন।"</td>
    </tr>
    <tr>
      <td><strong>Scene 3: 4-Skill Mastery</strong><br><em>(00:18 – 00:30)</em></td>
      <td>Split screen carousel showing: 1. Band 9 Essay Examiner, 2. Academic Reading Skim Timer, 3. Multi-Accent Audio Simulator, 4. 1,200+ Smart Vocab Vault.</td>
      <td>"Master all four skills. Analyze Band 9 essays with our AI writing examiner, conquer complex reading passages, and build elite vocabulary with smart audio flashcards."</td>
      <td>"রাইটিং ব্যান্ড ৯ এসে অ্যানালাইজার, রিডিং স্পিড ড্রিলস এবং ব্রিটিশ-আমেরিকান অ্যাকসেন্ট লিসেনিং প্র্যাকটিস—সব পাবেন এক ঠিকানায়।"</td>
    </tr>
    <tr>
      <td><strong>Scene 4: Simulators</strong><br><em>(00:30 – 00:42)</em></td>
      <td>Visual map zooming into maritime sea lanes and the <strong>Bilateral Negotiation Simulator</strong> game tree.</td>
      <td>"Go beyond English tests. Elevate your strategic thinking with real-world bilateral negotiation simulators and complete Master of Arts in International Relations course readers."</td>
      <td>"শুধু ভাষা নয়, আন্তর্জাতিক কূটনীতি ও নেগোসিয়েশন সিমুলেটরে অংশ নিয়ে বাড়ান আপনার স্ট্র্যাটেজিক চিন্তাশক্তি।"</td>
    </tr>
    <tr>
      <td><strong>Scene 5: Verification</strong><br><em>(00:42 – 00:50)</em></td>
      <td>Gold luxury Certificate of Completion appearing on screen with unique SHA-256 cryptographic QR hash.</td>
      <td>"Track your progress on the cloud, download comprehensive course handbooks, and earn verifiable certificates to power your global career."</td>
      <td>"আপনার অগ্রগতি ট্র্যাক করুন ক্লাউডে, ডাউনলোড করুন ২০০ পৃষ্ঠার কমপ্লিট হ্যান্ডবুক এবং অর্জন করুন ভেরিফায়েবল ডিজিটাল সার্টিফিকেট।"</td>
    </tr>
    <tr>
      <td><strong>Scene 6: Call to Action</strong><br><em>(00:50 – 01:00)</em></td>
      <td>Glowing <strong>dhshishir.com</strong> logo, pulsing "Start Free Practice Now" button, and mobile/desktop responsive device mockups.</td>
      <td>"Unlock your global potential today. Visit dhshishir.com. Practice freely, prepare smartly, and achieve your dream band score."</td>
      <td>"আজই শুরু করুন আপনার স্বপ্নপূরণের যাত্রা। ভিজিট করুন dhshishir.com — সম্পূর্ণ বিনামূল্যে প্র্যাকটিস করুন আর অর্জন করুন আপনার কাঙ্ক্ষিত ব্যান্ড স্কোর!"</td>
    </tr>
  </tbody>
</table>

<div class="page-break"></div>

<h2>Recommended Background Music & Audio Direction</h2>
<ul>
  <li><strong>Music Genre:</strong> Cinematic, Uplifting Tech Ambient / Modern Corporate Beats (e.g., Inspiring Future Bass or Ambient Piano + Tech Pulse).</li>
  <li><strong>Pacing:</strong> Steady, energetic, 120–128 BPM.</li>
  <li><strong>Sound Effects (SFX):</strong>
    - Subtle digital whooshes during scene transitions.
    - Soft "ding / positive ping" when the Band 8.5 score card appears.
    - Camera shutter sound during certificate verification.
  </li>
</ul>

<h2>Multi-Platform Promotional Video Strategy</h2>
<ol>
  <li><strong>YouTube Shorts & TikTok (Vertical 9:16):</strong> Hook the viewer in the first 3 seconds with the live speaking test demo. Title: <em>"How I practiced IELTS Speaking Band 8.5 for FREE at home 🎯"</em></li>
  <li><strong>Facebook & LinkedIn (Square 1:1 or Landscape 16:9):</strong> Post the full 60-second video with a direct link to <span class="tech-code">https://dhshishir.com/ielts</span>. Caption: <em>"Bangladesh's first free AI-powered IELTS & Academic Diplomacy portal is now live."</em></li>
</ol>

<hr style="border: 0; border-top: 1px solid #cbd5e1; margin: 30px 0 15px 0;">
<div style="font-size: 9pt; color: #64748b; text-align: center;">
  <strong>dhshishir.com Media Production Dossier</strong> • Published for Marketing & Educational Outreach.
</div>

</body>
</html>
`;

// Word Document XML Wrap
const wordDocContent = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
<meta charset="utf-8">
<title>${docTitle}</title>
<style>
  body { font-family: 'Georgia', 'Times New Roman', serif; font-size: 11pt; line-height: 1.5; color: #111827; }
  h1 { font-size: 18pt; color: #0f172a; text-align: center; border-bottom: 2pt solid #0f172a; padding-bottom: 6pt; }
  h2 { font-size: 13pt; color: #0f172a; border-bottom: 1pt solid #cbd5e1; margin-top: 16pt; }
  table { border-collapse: collapse; width: 100%; margin-top: 8pt; margin-bottom: 12pt; }
  th, td { border: 1pt solid #94a3b8; padding: 6pt 8pt; font-size: 9.5pt; }
  th { background-color: #f1f5f9; font-weight: bold; }
  .callout { background-color: #f8fafc; border-left: 4pt solid #0f172a; padding: 8pt 12pt; margin: 10pt 0; font-style: italic; }
</style>
</head>
<body>
${htmlContent.substring(htmlContent.indexOf('<body>') + 6, htmlContent.indexOf('</body>'))}
</body>
</html>
`;

const htmlFilePath = path.join(publicDownloadsDir, 'IELTS-Mastery-Promotional-Video-Script-and-Storyboard.html');
const docFilePath = path.join(publicDownloadsDir, 'IELTS-Mastery-Promotional-Video-Script-and-Storyboard.doc');

fs.writeFileSync(htmlFilePath, htmlContent, 'utf-8');
fs.writeFileSync(docFilePath, wordDocContent, 'utf-8');

console.log(`✅ Saved Promo Video Script HTML: ${htmlFilePath}`);
console.log(`✅ Saved Promo Video Script DOC: ${docFilePath}`);
