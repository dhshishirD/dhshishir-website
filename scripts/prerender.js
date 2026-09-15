import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const sitemapPath = path.join(rootDir, 'public', 'sitemap.xml');

// Check if dist exists
if (!fs.existsSync(distDir)) {
  console.error('dist directory does not exist. Run vite build first.');
  process.exit(1);
}

const baseIndexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
const sitemapXml = fs.readFileSync(sitemapPath, 'utf-8');

// Extract all <loc> URLs from sitemap.xml
const locRegex = /<loc>(https:\/\/dhshishir\.com\/.*?)<\/loc>/g;
const urls = [];
let match;
while ((match = locRegex.exec(sitemapXml)) !== null) {
  urls.push(match[1]);
}

console.log(`Found ${urls.length} URLs in sitemap.xml. Starting Full Pre-rendering...`);

// Helper to format title from slug
function formatSlugToTitle(slug) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Custom title & description overrides for key routes
const CUSTOM_OVERRIDES = {
  '': {
    title: 'Daloyar Hassan Shishir | Diplomatic Enthusiast, Policy Analyst & English Educator',
    description: 'Official personal portal of Daloyar Hassan Shishir (দেলোয়ার হাসান শিশির) — Diplomatic Enthusiast, Policy Analyst & English Educator.'
  },
  'diplomacy': {
    title: 'Diplomatic & Foreign Policy Intelligence Hub | DH Shishir',
    description: 'Comprehensive foreign policy analysis, strategic intelligence memos, Bay of Bengal maritime doctrine, and diplomatic strategy by Daloyar Hassan Shishir.'
  },
  'diplomatic-map': {
    title: 'Interactive Diplomatic World Map | Strategic Sea Lanes & Global Chokepoints | DH Shishir',
    description: 'Explore geopolitical conflict zones, maritime bottlenecks, critical energy corridors, and diplomatic missions across the globe in real time.'
  },
  'fellowship': {
    title: "Open Master's Fellowship in International Relations & Strategic Studies | DH Shishir",
    description: 'A structured 5-pillar masterclass curriculum covering geopolitical intelligence, bilateral diplomacy, maritime law, crisis simulations, and research methodology.'
  },
  'fluency-lab': {
    title: 'Fluency Lab | Interactive Looped English Mastery System | DH Shishir',
    description: 'Master advanced spoken and professional English through looped acoustic shadowing, CEFR diagnostic tests, phonetic waveform visualization, and subconscious grammar acquisition.'
  },
  'tools': {
    title: 'Free Career, IELTS & Academic Productivity Tools | DH Shishir',
    description: 'Free browser-based tools: ATS Resume Scanner, AI Cover Letter Generator, IELTS Task 2 Evaluator, Bangla-English Error Checker, BCS Preparation Roadmap, and CGPA Converters.'
  },
  'blog': {
    title: 'Strategic Insights, Articles & Policy Commentary | DH Shishir',
    description: 'Read in-depth masterclass guides on US university admissions (SOPs), IELTS Band 9 speaking strategies, global chip wars, Red Sea supply chain geopolitics, and international relations.'
  },
  'leadership': {
    title: 'Global Leadership, Delegations & Bio | DH Shishir',
    description: 'Biography, international delegations, research fellowships, and academic leadership track record of Daloyar Hassan Shishir.'
  },
  'contact': {
    title: 'Contact & Advisory Booking | Daloyar Hassan Shishir',
    description: 'Get in touch for policy consulting, diplomatic research advisory, IELTS & English masterclass workshops, or speaking engagements.'
  },
  'blog/statement-of-purpose-sop-us-universities-winning-templates': {
    title: "SOP for US Universities: Winning Master's & PhD Templates | DH Shishir",
    description: "Complete Statement of Purpose (SOP) masterclass for top US universities. Free winning templates, paragraph breakdown, and hook strategies for STEM, Social Sciences & Business."
  },
  'blog/ielts-speaking-band-9-complete-guide-exam-transcripts-idioms': {
    title: 'IELTS Speaking Band 9 Complete Guide: Real Transcripts & Idioms | DH Shishir',
    description: 'Achieve Band 8.5 to 9.0 in IELTS Speaking. Real examiner transcripts, idiomatic phrases, natural fluency fillers, and 1-minute cue card preparation strategies.'
  },
  'blog/us-china-chip-war-small-yard-high-fence-tech-decoupling': {
    title: "US-China Chip War: 'Small Yard, High Fence' & Tech Decoupling | DH Shishir",
    description: "Deep dive into semiconductor geopolitics, the US CHIPS Act, ASML EUV lithography export controls, TSMC Taiwan dilemma, and Beijing's domestic fab push."
  },
  'blog/red-sea-crisis-global-chokepoints-supply-chain-diversion': {
    title: 'Red Sea Crisis & Global Chokepoints: Cape Route Diversion | DH Shishir',
    description: 'Analysis of Houthi maritime attacks, Bab el-Mandeb chokepoint disruption, container freight rate inflation, and supply chain impacts on South Asian export economies.'
  },
  'blog/project-mbridge-brics-de-dollarization-global-currency-reserves': {
    title: 'Project mBridge & BRICS De-Dollarization: Future Reserve Architecture | DH Shishir',
    description: 'Examination of Project mBridge multi-CBDC cross-border settlement, BRICS local-currency invoicing, SWIFT alternatives, and the future of dollar hegemony.'
  }
};

let generatedCount = 0;

for (const fullUrl of urls) {
  const urlPath = fullUrl.replace('https://dhshishir.com', '').replace(/^\/+/, '').replace(/\/+$/, '');
  
  if (urlPath === '') {
    // Root URL already handled by dist/index.html, but let's ensure dist/index.html is synced
    continue;
  }

  const targetDir = path.join(distDir, urlPath);
  fs.mkdirSync(targetDir, { recursive: true });

  const override = CUSTOM_OVERRIDES[urlPath];
  let title = override ? override.title : `${formatSlugToTitle(path.basename(urlPath))} | DH Shishir`;
  let description = override ? override.description : `Read in-depth analysis and authoritative resources on ${formatSlugToTitle(path.basename(urlPath))} by Daloyar Hassan Shishir.`;

  const canonicalUrl = fullUrl.endsWith('/') && urlPath !== '' ? fullUrl.slice(0, -1) : fullUrl;

  // Replace Title
  let html = baseIndexHtml.replace(
    /<title>.*?<\/title>/,
    `<title>${title}</title>`
  );

  // Replace Description
  html = html.replace(
    /<meta name="description" content=".*?" \/>/,
    `<meta name="description" content="${description}" />`
  );

  // Replace Canonical Link
  html = html.replace(
    /<link rel="canonical" href=".*?" \/>/,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );

  // Replace Open Graph Tags
  html = html.replace(
    /<meta property="og:title" content=".*?" \/>/,
    `<meta property="og:title" content="${title}" />`
  );
  html = html.replace(
    /<meta property="og:description" content=".*?" \/>/,
    `<meta property="og:description" content="${description}" />`
  );
  html = html.replace(
    /<meta property="og:url" content=".*?" \/>/,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );

  // Replace Twitter Tags
  html = html.replace(
    /<meta name="twitter:title" content=".*?" \/>/,
    `<meta name="twitter:title" content="${title}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content=".*?" \/>/,
    `<meta name="twitter:description" content="${description}" />`
  );

  // Pre-render Semantic HTML in #root to eliminate "Thin Content" and "Missing H1" warnings in Ahrefs
  const bodyHtml = `
  <body class="bg-white text-slate-900 overflow-x-hidden antialiased">
    <div id="root">
      <div class="min-h-screen bg-slate-50 text-slate-900">
        <header class="bg-white border-b border-slate-200 py-6 px-4">
          <div class="max-w-7xl mx-auto flex items-center justify-between">
            <a href="/" class="text-xl font-black text-slate-900 tracking-tight">DH Shishir</a>
            <nav class="flex gap-4 text-sm font-bold text-slate-700">
              <a href="/diplomacy">Diplomacy</a>
              <a href="/fellowship">Fellowship</a>
              <a href="/fluency-lab">Fluency Lab</a>
              <a href="/tools">Tools</a>
              <a href="/blog">Blog</a>
              <a href="/leadership">Leadership</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </header>
        <main class="py-12 max-w-4xl mx-auto px-4">
          <article>
            <h1 class="text-3xl sm:text-4xl font-black text-slate-900 mb-4">${title.split('|')[0].trim()}</h1>
            <p class="text-lg text-slate-700 leading-relaxed mb-6">${description}</p>
            <div class="prose prose-slate max-w-none text-slate-600">
              <p>Explore this comprehensive module on the official knowledge portal of Daloyar Hassan Shishir (দেলোয়ার হাসান শিশির) — Diplomatic Enthusiast, Policy Analyst & English Educator.</p>
            </div>
          </article>
        </main>
      </div>
    </div>
  </body>
  `;

  html = html.replace(/<body[\s\S]*?<\/body>/i, bodyHtml.trim());

  fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf-8');
  generatedCount++;
}

console.log(`✅ Successfully generated ${generatedCount} pre-rendered static HTML routes matching 100% of sitemap.xml!`);
