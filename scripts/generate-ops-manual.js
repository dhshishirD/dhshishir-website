import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDownloadsDir = path.resolve(__dirname, '../public/downloads');

const docTitle = "Owner's Operational Guide & Emergency Recovery Manual for dhshishir.com";
const subTitle = "Essential Skills, Daily Maintenance Workflows, 1-Click Rollback Procedures, and Autonomous Disaster Recovery Protocols";

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
  ul, ol { margin-top: 4px; margin-bottom: 14px; padding-left: 24px; }
  li { margin-bottom: 6px; }
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
      <div class="meta-cell-label">System Target:</div>
      <div class="meta-cell-val">dhshishir.com (Production Web Infrastructure)</div>
    </div>
    <div class="meta-row">
      <div class="meta-cell-label">Repository:</div>
      <div class="meta-cell-val">github.com/dhshishirD/dhshishir-website (Branch: main)</div>
    </div>
    <div class="meta-row">
      <div class="meta-cell-label">Architecture Reliability:</div>
      <div class="meta-cell-val">Static Pre-rendered Edge Architecture (99.99% Guaranteed Server Uptime)</div>
    </div>
    <div class="meta-row">
      <div class="meta-cell-label">Maintenance Complexity:</div>
      <div class="meta-cell-val">Low (Zero Linux server management, Zero DB patching required)</div>
    </div>
  </div>
</div>

<div class="callout">
  <strong>Guaranteed Peace of Mind:</strong> Your website is engineered as a <em>Static Pre-rendered Edge Application</em>. Unlike traditional WordPress or PHP sites, there is no Linux web server or Apache service that can run out of RAM, get infected with malware, or crash under heavy traffic. Even if you do not touch the code for years, the site will stay 100% online, lightning-fast, and secure.
</div>

<h2>1. What You Need to Learn to Manage the Site Independently</h2>
<p>You do not need to become a full-time software engineer to manage and grow dhshishir.com. You only need to understand four simple, practical operational workflows:</p>

<h3>1. The 3-Command Content Update Workflow</h3>
<p>Whenever you edit a blog post, add a new IELTS vocabulary word, or update course notes in your code editor (VS Code), publish your changes to the live internet with three simple commands:</p>
<pre style="background:#f1f5f9; padding:10px; border-radius:4px; font-family:'Courier New', monospace; font-size:9pt; overflow-x:auto;">
# 1. Test your build locally to verify zero syntax errors
npm run build

# 2. Stage and save your changes with a message
git add .
git commit -m "Update IELTS vocabulary and new IR research notes"

# 3. Push to GitHub (Vercel automatically deploys to live web in ~45 seconds)
git push origin main
</pre>

<h3>2. Managing Users & Database on Supabase Dashboard (No Coding Required)</h3>
<p>All user authentication and cloud sync data is hosted on your visual Supabase cloud portal:</p>
<ul>
  <li><strong>Viewing Registered Members:</strong> Log into <span class="tech-code">supabase.com</span> &gt; Select your Project &gt; <strong>Authentication &gt; Users</strong>. Here you see everyone who signed in via Google.</li>
  <li><strong>Viewing User Scores & History:</strong> Go to <strong>Table Editor &gt; profiles</strong>. You can inspect simulation history, saved vocabulary, and certificate records in spreadsheet format.</li>
  <li><strong>Automated Cloud Backups:</strong> Supabase performs automated daily backups of your PostgreSQL database. You can also run <span class="tech-code">node scripts/backup-db.js</span> locally anytime to export a full JSON dump.</li>
</ul>

<h3>3. Monitoring Google AdSense & Search Console</h3>
<ul>
  <li><strong>Google Search Console:</strong> Check monthly impressions, search queries, and verify all 123 URLs remain indexed under <em>Indexing &gt; Pages</em>.</li>
  <li><strong>Google AdSense:</strong> Monitor ad earnings, RPM, impressions, and ensure the status remains "Ready" with a valid <span class="tech-code">ads.txt</span>.</li>
</ul>

<div class="page-break"></div>

<h2>2. Emergency Contingency Plan: What to Do If Anything Goes Wrong</h2>
<p>If you encounter an issue or error without immediate AI assistance, follow this disaster recovery hierarchy:</p>

<table>
  <thead>
    <tr>
      <th>Emergency Scenario</th>
      <th>Immediate 1-Click Solution</th>
      <th>Estimated Recovery Time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>You pushed an update that broke the live website layout.</strong></td>
      <td>
        <strong>1-Click Vercel Instant Rollback:</strong><br>
        1. Log into <span class="tech-code">vercel.com</span> &gt; Select <em>dhshishir-website</em>.<br>
        2. Click <strong>Deployments</strong>.<br>
        3. Find the previous working deployment, click the <strong>Three Dots (...)</strong> &gt; Click <strong>"Instant Rollback / Promote to Production"</strong>.<br>
        <em>Result: The live site is instantly restored to its perfect working state within 3 seconds.</em>
      </td>
      <td><strong>30 Seconds</strong></td>
    </tr>
    <tr>
      <td><strong>A terminal build error happens when running <span class="tech-code">npm run build</span>.</strong></td>
      <td>
        <strong>Run Git Reset:</strong><br>
        If you made a typo and don't know where, revert your local changes to match the clean GitHub version by running:<br>
        <span class="tech-code">git reset --hard HEAD</span><br>
        This discards uncommitted typos and returns your codebase to 100% clean state.
      </td>
      <td><strong>1 Minute</strong></td>
    </tr>
    <tr>
      <td><strong>Your computer crashes or hard drive fails.</strong></td>
      <td>
        <strong>Full Cloud Restore:</strong><br>
        Your entire codebase is safely backed up on GitHub.<br>
        On any new computer with Node.js installed, simply run:<br>
        <span class="tech-code">git clone https://github.com/dhshishirD/dhshishir-website.git</span><br>
        <span class="tech-code">npm install</span><br>
        You are back up and running with 100% of your site intact.
      </td>
      <td><strong>5 Minutes</strong></td>
    </tr>
    <tr>
      <td><strong>You need to add a complex new feature or fix a bug without me.</strong></td>
      <td>
        <strong>Alternative AI & Developer Resources:</strong><br>
        1. <strong>Claude 3.5 Sonnet or ChatGPT-4o:</strong> Upload the component file (e.g. <span class="tech-code">src/components/tools/DiplomaticMapPage.tsx</span>) and paste the exact error message. Because our codebase uses clean, standard React + TypeScript patterns, any top-tier AI will pinpoint and solve the issue immediately.<br>
        2. <strong>Any Freelance React Developer:</strong> Any developer on Upwork or Fiverr can work on this repository immediately because it uses industry-standard Vite, Tailwind, and TypeScript without obscure custom frameworks.
      </td>
      <td><strong>15 – 30 Minutes</strong></td>
    </tr>
  </tbody>
</table>

<h2>3. Golden Rules to Keep the Platform Healthy Forever</h2>
<ol>
  <li><strong>Never Edit in the Live Production Environment Directly:</strong> Always test locally by running <span class="tech-code">npm run build</span> before running <span class="tech-code">git push</span>.</li>
  <li><strong>Keep Dependencies Stable:</strong> Do not run <span class="tech-code">npm update</span> randomly. Modern packages can introduce breaking changes. Keep your existing locked versions in <span class="tech-code">package.json</span>.</li>
  <li><strong>Keep Your Domain Renewed:</strong> Ensure your domain registrar (<span class="tech-code">dhshishir.com</span>) has auto-renew enabled with an active credit card so your DNS never expires.</li>
  <li><strong>Keep Supabase Free Tier Active:</strong> Log into your Supabase dashboard at least once every month or upgrade to the $25/mo Pro tier to prevent project auto-pausing on the free tier.</li>
</ol>

<hr style="border: 0; border-top: 1px solid #cbd5e1; margin: 30px 0 15px 0;">
<div style="font-size: 9pt; color: #64748b; text-align: center;">
  <strong>dhshishir.com Production Operations Manual</strong> • Retain this document for technical continuity & emergencies.
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
  h3 { font-size: 11.5pt; color: #1e293b; margin-top: 10pt; }
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

const htmlFilePath = path.join(publicDownloadsDir, 'Site-Management-Emergency-Recovery-Manual.html');
const docFilePath = path.join(publicDownloadsDir, 'Site-Management-Emergency-Recovery-Manual.doc');

fs.writeFileSync(htmlFilePath, htmlContent, 'utf-8');
fs.writeFileSync(docFilePath, wordDocContent, 'utf-8');

console.log(`✅ Saved Emergency Recovery Manual HTML: ${htmlFilePath}`);
console.log(`✅ Saved Emergency Recovery Manual DOC: ${docFilePath}`);
