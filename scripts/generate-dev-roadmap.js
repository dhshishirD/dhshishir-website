import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDownloadsDir = path.resolve(__dirname, '../public/downloads');

if (!fs.existsSync(publicDownloadsDir)) {
  fs.mkdirSync(publicDownloadsDir, { recursive: true });
}

console.log('Generating Independent Developer Blueprint & Roadmap Document...');

const docTitle = "The Solo Architect's Roadmap: Building an Enterprise-Grade Academic & Interactive Web Platform";
const subTitle = "A Comprehensive Step-by-Step Technical Blueprint, Toolchain Guide, Time Budget, and Production Architecture for Building dhshishir.com Independently";

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
    font-size: 22pt;
    text-align: center;
    line-height: 1.3;
    margin-bottom: 6px;
    padding-bottom: 12px;
    border-bottom: 2px solid #0f172a;
  }
  .subtitle {
    font-size: 12pt;
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
    margin-bottom: 30px;
    font-size: 10pt;
  }
  .meta-grid {
    display: table;
    width: 100%;
  }
  .meta-row {
    display: table-row;
  }
  .meta-cell-label {
    display: table-cell;
    font-weight: bold;
    color: #334155;
    width: 28%;
    padding: 4px 0;
  }
  .meta-cell-val {
    display: table-cell;
    color: #0f172a;
    padding: 4px 0;
  }
  h2 {
    font-size: 15pt;
    margin-top: 28px;
    margin-bottom: 12px;
    padding-bottom: 4px;
    border-bottom: 1px solid #cbd5e1;
  }
  h3 {
    font-size: 12.5pt;
    margin-top: 20px;
    margin-bottom: 8px;
    color: #1e293b;
  }
  p {
    margin-bottom: 12px;
    text-align: justify;
  }
  ul, ol {
    margin-top: 4px;
    margin-bottom: 14px;
    padding-left: 24px;
  }
  li {
    margin-bottom: 6px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 18px 0 24px 0;
    font-size: 9.5pt;
    page-break-inside: avoid;
  }
  th, td {
    border: 1px solid #94a3b8;
    padding: 8px 10px;
    text-align: left;
    vertical-align: top;
  }
  th {
    background-color: #f1f5f9;
    font-weight: bold;
    color: #0f172a;
  }
  tr:nth-child(even) {
    background-color: #f8fafc;
  }
  .callout {
    background-color: #f8fafc;
    border-left: 4px solid #0f172a;
    padding: 12px 16px;
    margin: 16px 0;
    font-style: italic;
    font-size: 10.5pt;
  }
  .tech-badge {
    font-family: "Courier New", Courier, monospace;
    background-color: #f1f5f9;
    padding: 2px 5px;
    border-radius: 3px;
    font-size: 9.5pt;
    font-weight: 600;
  }
  .page-break {
    page-break-before: always;
  }
</style>
</head>
<body>

<h1>${docTitle}</h1>
<div class="subtitle">${subTitle}</div>

<div class="meta-box">
  <div class="meta-grid">
    <div class="meta-row">
      <div class="meta-cell-label">Document Code:</div>
      <div class="meta-cell-val">TECH-ARCH-ROADMAP-2026</div>
    </div>
    <div class="meta-row">
      <div class="meta-cell-label">Platform Archetype:</div>
      <div class="meta-cell-val">dhshishir.com (Diplomatic, Academic, IELTS & Geopolitical Web Application)</div>
    </div>
    <div class="meta-row">
      <div class="meta-cell-label">Estimated Human Effort:</div>
      <div class="meta-cell-val">650 – 900 Focused Hours (approx. 4 to 7 Calendar Months for a Senior Full-Stack Engineer)</div>
    </div>
    <div class="meta-row">
      <div class="meta-cell-label">Commercial Agency Quote:</div>
      <div class="meta-cell-val">$20,000 – $35,000 USD (৳24,00,000 – ৳42,00,000 BDT)</div>
    </div>
    <div class="meta-row">
      <div class="meta-cell-label">Architecture Paradigm:</div>
      <div class="meta-cell-val">React 18 SPA + Node.js Static Headless Prerendering + Supabase BaaS + Offline Document Engine</div>
    </div>
  </div>
</div>

<div class="callout">
  <strong>Executive Summary:</strong> Building a production-grade web portal featuring 123+ pre-rendered SEO pages, interactive negotiation and risk simulators, dynamic IELTS speech labs, cryptographic certificate verification, automated Word/HTML publishing, and Google AdSense compliance from scratch without AI assistance is a multi-stage software engineering endeavor. This document outlines the exact software, toolchains, configurations, phase-by-phase development schedule, and technical pitfalls you would navigate as an independent creator.
</div>

<h2>1. The Required Software, Programs & Development Environment</h2>
<p>To construct, test, and deploy this architecture locally on Windows or macOS, you would install and configure the following specialized software suite:</p>

<table>
  <thead>
    <tr>
      <th>Tool / Program</th>
      <th>Category</th>
      <th>Specific Role in Project</th>
      <th>License & Cost</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Visual Studio Code (VS Code)</strong></td>
      <td>IDE / Editor</td>
      <td>Primary code editor, extensions for ESLint, Prettier, Tailwind CSS IntelliSense, TypeScript.</td>
      <td>Free (Open Source)</td>
    </tr>
    <tr>
      <td><strong>Node.js (v20.x or v22.x LTS)</strong></td>
      <td>Runtime Engine</td>
      <td>JavaScript runtime for Vite development server, package manager (npm), and build/prerender scripts.</td>
      <td>Free (Open Source)</td>
    </tr>
    <tr>
      <td><strong>Git & GitHub Desktop</strong></td>
      <td>Version Control</td>
      <td>Source code versioning, commit history, branch management, and remote repository hosting.</td>
      <td>Free</td>
    </tr>
    <tr>
      <td><strong>Vite (v6 / v8 Rolldown)</strong></td>
      <td>Frontend Bundler</td>
      <td>Next-generation frontend tooling providing lightning-fast HMR (Hot Module Replacement) and optimized production chunking.</td>
      <td>Free (Open Source)</td>
    </tr>
    <tr>
      <td><strong>Supabase CLI & Cloud Dashboard</strong></td>
      <td>Backend / Database</td>
      <td>PostgreSQL database, Row Level Security (RLS), Google OAuth 2.0 authentication, and cloud user sync.</td>
      <td>Free Tier / $25/mo Pro</td>
    </tr>
    <tr>
      <td><strong>Postman / Bruno</strong></td>
      <td>API Testing</td>
      <td>Testing Supabase REST endpoints, webhooks, and third-party integrations.</td>
      <td>Free</td>
    </tr>
    <tr>
      <td><strong>Google Chrome DevTools & Lighthouse</strong></td>
      <td>Audit & Debugging</td>
      <td>Inspecting Core Web Vitals, performance profiling, accessibility audits, and memory leak analysis.</td>
      <td>Free</td>
    </tr>
    <tr>
      <td><strong>Figma</strong></td>
      <td>UI/UX Design</td>
      <td>Creating vector wireframes, design tokens, color harmonies, and responsive component layouts prior to coding.</td>
      <td>Free Tier</td>
    </tr>
    <tr>
      <td><strong>Vercel / Cloudflare Pages CLI</strong></td>
      <td>Hosting & Edge CDN</td>
      <td>Edge network hosting, custom domain SSL provisioning, HTTP caching headers, and automated git deployment.</td>
      <td>Free Tier / Commercial</td>
    </tr>
    <tr>
      <td><strong>Google Search Console & AdSense</strong></td>
      <td>Webmaster & Monetization</td>
      <td>Indexation tracking, sitemap.xml submission, crawler verification, ads.txt validation, and tax compliance.</td>
      <td>Free</td>
    </tr>
  </tbody>
</table>

<h2>1.5. Deep Architectural Justification: Why Choose These Specific Programs vs. Their Alternatives?</h2>
<p>In modern web engineering, selecting the wrong toolchain can result in slow site speed, high server maintenance bills, security vulnerabilities, or vendor lock-in. Below is the precise technical rationale for why each program was chosen over its common market rivals:</p>

<table>
  <thead>
    <tr>
      <th>Chosen Technology</th>
      <th>Direct Market Alternatives</th>
      <th>Actual Mechanical Function</th>
      <th>Why Chosen Over Alternatives (Critical Advantages)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>React 18 + TypeScript</strong></td>
      <td>• Next.js / Nuxt<br>• Vue.js / Svelte<br>• Angular<br>• Vanilla JavaScript</td>
      <td>Manages reactive UI state, virtual DOM reconciliation, and compile-time type safety across complex interactive simulators.</td>
      <td>
        • <strong>Vs Next.js:</strong> Next.js requires expensive Node.js server runtimes or complex serverless compute. React + custom static prerendering gives 100% free static edge hosting with zero cold-starts.<br>
        • <strong>Vs Vanilla JS:</strong> Managing state across 20 lectures, negotiation simulators, and speech labs in plain JS causes spaghetti code and frequent DOM sync bugs.<br>
        • <strong>Vs TypeScript over Plain JS:</strong> TypeScript catches data shape errors before runtime, critical for multi-round game-theory engines.
      </td>
    </tr>
    <tr>
      <td><strong>Vite (v8 / Rolldown)</strong></td>
      <td>• Webpack<br>• Create React App (CRA)<br>• Turbopack<br>• Parcel</td>
      <td>Compiles and bundles ES modules, provides Hot Module Replacement (HMR) during local development, and creates minified production chunks.</td>
      <td>
        • <strong>Vs Webpack / CRA:</strong> Webpack bundles the entire app into memory before serving (taking 20–40 seconds to start). Vite leverages native browser ES modules to launch instantly (&lt;200ms).<br>
        • <strong>Vs CRA:</strong> CRA is officially deprecated by the React team and produces bloated bundle sizes with slow build times.
      </td>
    </tr>
    <tr>
      <td><strong>Tailwind CSS (v4)</strong></td>
      <td>• Bootstrap 5<br>• Material UI (MUI)<br>• SASS / Pure CSS<br>• Styled Components</td>
      <td>Generates utility-first responsive CSS directly from HTML class names with zero unused styling in production.</td>
      <td>
        • <strong>Vs Bootstrap / MUI:</strong> Bootstrap and MUI impose heavy predefined visual styles and inject massive runtime JavaScript overhead. Tailwind produces bespoke luxury design with zero runtime penalty.<br>
        • <strong>Vs Pure CSS:</strong> Pure CSS leads to bloated 5,000-line stylesheets with naming collisions; Tailwind purges unused rules, keeping the production CSS under 20 KB.
      </td>
    </tr>
    <tr>
      <td><strong>Supabase (PostgreSQL)</strong></td>
      <td>• Google Firebase (Firestore)<br>• MongoDB / Express<br>• AWS Amplify / DynamoDB<br>• MySQL / PHP</td>
      <td>Relational cloud database with built-in Google OAuth 2.0, Row-Level Security (RLS), and real-time user state synchronization.</td>
      <td>
        • <strong>Vs Firebase:</strong> Firebase is NoSQL, making complex relational queries (e.g., student progress across specific IR modules or IELTS scores) difficult and expensive. Supabase is true relational PostgreSQL.<br>
        • <strong>Vs Custom Node/Express API:</strong> With Supabase Row Level Security (RLS), database access rules are enforced directly at the Postgres engine level, eliminating the need to write and maintain a separate backend server.
      </td>
    </tr>
    <tr>
      <td><strong>Custom Node.js Prerenderer</strong></td>
      <td>• Puppeteer / Playwright<br>• Gatsby<br>• Next.js SSG<br>• Prerender.io (Paid)</td>
      <td>Crawls <span class="tech-badge">sitemap.xml</span> during build, generates 123+ static HTML index files, and injects Schema.org JSON-LD microdata for search engines.</td>
      <td>
        • <strong>Vs Puppeteer / Playwright:</strong> Headless browsers require 2–4 GB of RAM and take minutes to render; our custom Node script executes in <strong>under 2 seconds</strong> with zero memory overhead.<br>
        • <strong>Vs Paid Prerender.io:</strong> Saves $20–$100/month in SaaS subscriptions while giving 100% control over injected SEO metadata.
      </td>
    </tr>
    <tr>
      <td><strong>Lucide React & Framer Motion</strong></td>
      <td>• FontAwesome<br>• React-Icons<br>• Lottie Animations<br>• jQuery / CSS Animations</td>
      <td>Provides vector SVG iconography and physics-based fluid layout animations (accordions, modal reveals, score counters).</td>
      <td>
        • <strong>Vs FontAwesome:</strong> FontAwesome loads heavy font files that delay First Contentful Paint (FCP); Lucide provides pure, tree-shakable inline SVGs with zero layout shift.<br>
        • <strong>Vs Lottie:</strong> Lottie uses heavy JSON animations that drain mobile battery; Framer Motion runs on GPU-accelerated hardware transforms.
      </td>
    </tr>
    <tr>
      <td><strong>Vercel / Cloudflare Edge CDN</strong></td>
      <td>• Traditional cPanel / Apache<br>• AWS EC2 / Droplets<br>• Heroku<br>• Dedicated Linux Server</td>
      <td>Distributes the website across 300+ global data centers, serves static assets from edge memory, and manages SSL certificates.</td>
      <td>
        • <strong>Vs cPanel / VPS:</strong> Traditional servers crash under sudden traffic spikes, require manual Linux OS patching, and have high latency for international visitors. Edge CDN serves content in &lt;30ms worldwide for $0 hosting cost.
      </td>
    </tr>
  </tbody>
</table>

<div class="page-break"></div>

<h2>2. Core Technology Stack & Library Matrix</h2>
<p>An enterprise project of this magnitude requires a cohesive, tightly coupled set of libraries rather than ad-hoc scripts. Below is the precise architectural stack power-housing the site:</p>

<ul>
  <li><strong>Frontend Framework:</strong> <span class="tech-badge">React 18</span> with <span class="tech-badge">TypeScript 5</span> for strict compile-time type safety.</li>
  <li><strong>Styling & Layout:</strong> <span class="tech-badge">Tailwind CSS 3</span> with custom typography plugins and responsive grid utilities.</li>
  <li><strong>Icons & Visual Assets:</strong> <span class="tech-badge">Lucide React</span> (over 100+ SVG icons for diplomatic, education, and UI state indicators).</li>
  <li><strong>Animation & Interaction:</strong> <span class="tech-badge">Framer Motion</span> (smooth page transitions, accordions, and interactive scenario reveals) and <span class="tech-badge">canvas-confetti</span>.</li>
  <li><strong>Math & Academic Rendering:</strong> <span class="tech-badge">KaTeX</span> (LaTeX formula rendering for diplomatic risk models and game theory).</li>
  <li><strong>Speech & Audio:</strong> Native Web Speech API (<span class="tech-badge">webkitSpeechRecognition</span> and <span class="tech-badge">SpeechSynthesis</span>) for the interactive IELTS Fluency Lab.</li>
  <li><strong>Document Generation:</strong> Custom Node.js file streams generating Microsoft Word (<span class="tech-badge">.doc</span> with Word-compliant XML namespaces) and print-optimized HTML (<span class="tech-badge">@media print</span> CSS rules).</li>
  <li><strong>Static SEO Prerenderer:</strong> Custom headless crawler (<span class="tech-badge">scripts/prerender.js</span>) reading <span class="tech-badge">sitemap.xml</span> and outputting 123+ static HTML index files with rich schema (<span class="tech-badge">schema.org</span> JSON-LD).</li>
</ul>

<h2>3. Phase-by-Phase Development Journey (Timeline: 6–7 Months)</h2>
<p>If you were to execute this entire project single-handedly, here is how your calendar and engineering sprints would be structured across 6 distinct phases:</p>

<table>
  <thead>
    <tr>
      <th>Phase & Duration</th>
      <th>Key Focus Areas</th>
      <th>Deliverables & Milestones</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Phase 1: Architecture & UI System</strong><br><em>(Weeks 1–4 / ~120 Hours)</em></td>
      <td>Design tokens, typography, component library, routing layout.</td>
      <td>
        • Vite + React + TypeScript repository setup.<br>
        • Tailwind design system: dark/light theme, custom buttons, cards, navbar, and footer.<br>
        • Responsive navigation shell with mobile drawers.
      </td>
    </tr>
    <tr>
      <td><strong>Phase 2: Academic & Diplomatic Modules</strong><br><em>(Weeks 5–10 / ~180 Hours)</em></td>
      <td>Course curricula, geopolitical dossiers, policy papers, publications.</td>
      <td>
        • 20-lecture Master of Arts in IR curriculum repository.<br>
        • Interactive Diplomatic Map with country treaties, embassies, and trade routes.<br>
        • Publication engine with dynamic reading filters and research citations.
      </td>
    </tr>
    <tr>
      <td><strong>Phase 3: Interactive Simulators & Tools</strong><br><em>(Weeks 11–16 / ~200 Hours)</em></td>
      <td>Decision-tree simulators, IELTS testing suite, speech lab.</td>
      <td>
        • Bilateral Negotiation Simulator with state scoring and AI/algorithmic concessions.<br>
        • Geopolitical Risk Simulator with multi-variable outcome calculation.<br>
        • IELTS Vocab Builder & Voice Speech-to-Text Fluency Lab.<br>
        • SHA-256 Hash Certificate Verification System with downloadable credential view.
      </td>
    </tr>
    <tr>
      <td><strong>Phase 4: Backend, Database & Auth</strong><br><em>(Weeks 17–20 / ~110 Hours)</em></td>
      <td>Supabase Postgres, Google OAuth, user profiles, progress sync.</td>
      <td>
        • PostgreSQL tables with Row Level Security (RLS) for learner progress and bookmarks.<br>
        • Supabase client integration with Google OAuth popup / redirect handling.<br>
        • Cloud Sync banner alerting guest users to persist their simulation scores.
      </td>
    </tr>
    <tr>
      <td><strong>Phase 5: SEO Prerendering & Document Generators</strong><br><em>(Weeks 21–24 / ~140 Hours)</em></td>
      <td>Static site generation, automated Word/HTML builders, schema markup.</td>
      <td>
        • Node.js prerender script executing sitemap URLs into 123+ crawlable HTML files.<br>
        • JSON-LD semantic schema injection on every single page.<br>
        • Automated document generation scripts outputting 200+ page textbook Word & HTML treatises into public downloads.
      </td>
    </tr>
    <tr>
      <td><strong>Phase 6: Compliance, Monetization & Launch</strong><br><em>(Weeks 25–28 / ~90 Hours)</em></td>
      <td>AdSense compliance, legal docs, ads.txt, DNS, CDN performance.</td>
      <td>
        • GDPR, CCPA, COPPA Privacy Policy, Terms of Service, Disclaimers.<br>
        • ads.txt verification, custom domain DNS record wiring (A, CNAME, TXT).<br>
        • Lighthouse 95+ performance optimization and Google Search Console submission.
      </td>
    </tr>
  </tbody>
</table>

<div class="page-break"></div>

<h2>4. Step-by-Step Practical Configuration Guide</h2>
<p>Here is the exact technical execution playbook for anyone setting up this platform from a blank terminal:</p>

<h3>Step 1: Project Initialization & Dependency Installation</h3>
<p>Open your command line and initialize the project using Vite and npm:</p>
<pre style="background:#f1f5f9; padding:12px; border-radius:4px; font-family:'Courier New', monospace; font-size:9pt; overflow-x:auto;">
# 1. Create project with Vite React-TS template
npm create vite@latest dhshishir-website -- --template react-ts

# 2. Enter directory and install core libraries
cd dhshishir-website
npm install lucide-react clsx tailwind-merge framer-motion canvas-confetti katex @supabase/supabase-js

# 3. Install dev tooling
npm install -D tailwindcss postcss autoprefixer @types/canvas-confetti @types/katex

# 4. Initialize Tailwind configuration
npx tailwindcss init -p
</pre>

<h3>Step 2: Configuring Database & Authentication in Supabase</h3>
<ol>
  <li>Create an account on <strong>supabase.com</strong> and launch a new project.</li>
  <li>Navigate to <strong>Authentication &gt; Providers &gt; Google</strong>. Set up Google Cloud Console OAuth 2.0 Client ID & Secret, pasting the redirect URI provided by Supabase.</li>
  <li>Run SQL migrations in the Supabase SQL Editor to establish user profile tracking:
<pre style="background:#f1f5f9; padding:10px; border-radius:4px; font-family:'Courier New', monospace; font-size:8.5pt; overflow-x:auto;">
create table public.profiles (
  id uuid references auth.users not null primary key,
  email text,
  full_name text,
  avatar_url text,
  ielts_scores jsonb default '{}'::jsonb,
  simulation_history jsonb default '[]'::jsonb,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.profiles enable row level security;
create policy "Users can view and update own profile" on public.profiles
  for all using (auth.uid() = id);
</pre>
  </li>
  <li>Store <span class="tech-badge">VITE_SUPABASE_URL</span> and <span class="tech-badge">VITE_SUPABASE_ANON_KEY</span> in your local <span class="tech-badge">.env</span> file.</li>
</ol>

<h3>Step 3: Building the Custom Static SEO Prerendering Pipeline</h3>
<p>Standard Single Page Applications (SPAs) deliver an empty <span class="tech-badge">&lt;div id="root"&gt;&lt;/div&gt;</span> to Googlebot, causing poor indexation. To solve this without migrating to heavy SSR frameworks like Next.js, an independent engineer writes a custom Node.js prerendering script (<span class="tech-badge">scripts/prerender.js</span>):</p>
<ul>
  <li>Reads all paths defined in <span class="tech-badge">public/sitemap.xml</span>.</li>
  <li>Loads the production <span class="tech-badge">dist/index.html</span> template.</li>
  <li>Injects dedicated semantic HTML content (title, meta description, 500+ words of structured article text, and JSON-LD structured schema) into the HTML body before client-side hydration.</li>
  <li>Writes static <span class="tech-badge">index.html</span> files in target route directories (e.g., <span class="tech-badge">dist/diplomacy/index.html</span>), ensuring instant 100/100 crawlability for search engines.</li>
</ul>

<h3>Step 4: Automated Offline Document Generation Engine</h3>
<p>To produce instant, printable, high-legibility Word (<span class="tech-badge">.doc</span>) and HTML course handbooks directly during the build step, you create <span class="tech-badge">scripts/generate-ir-handbook.js</span>. This script aggregates deep theoretical lectures, diplomatic glossaries, and examination prompts, formatting them with classic academic typography and saving them to <span class="tech-badge">public/downloads/</span> ready for one-click student downloading.</p>

<div class="page-break"></div>

<h2>5. The True Cost Comparison: Independent Human vs. AI-Assisted Development</h2>

<table>
  <thead>
    <tr>
      <th>Dimension</th>
      <th>Independent Solo Human Developer</th>
      <th>Traditional Digital Software Agency</th>
      <th>Human Architect + AI Pair Programmer</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Total Time to Market</strong></td>
      <td>5 to 7 Months of continuous full-time coding and research.</td>
      <td>3 to 5 Months (team of 3: Designer, Frontend, Content Writer).</td>
      <td><strong>1 to 2 Weeks</strong> (Rapid iterative generation & live testing).</td>
    </tr>
    <tr>
      <td><strong>Financial Capital Required</strong></td>
      <td>$0 direct cash (requires 800+ hours of personal unpaid labor).</td>
      <td><strong>$20,000 – $35,000 USD</strong> (৳24,00,000 – ৳42,00,000 BDT).</td>
      <td>Standard subscription ($20–$100/month).</td>
    </tr>
    <tr>
      <td><strong>Academic Depth & Volume</strong></td>
      <td>Extremely slow; researching 20 deep theoretical lectures takes months.</td>
      <td>Often superficial placeholder text; requires hiring an IR domain specialist.</td>
      <td><strong>Immediate synthesis</strong> of advanced international law, game theory, and case studies.</td>
    </tr>
    <tr>
      <td><strong>Bug Resolution & Refactoring</strong></td>
      <td>Manual debugging of complex React state, CORS errors, and build bundlers.</td>
      <td>Billed hourly for revision cycles and bug fixing.</td>
      <td><strong>Instant root-cause detection</strong> and automated codebase-wide refactoring.</td>
    </tr>
    <tr>
      <td><strong>SEO & Compliance Rigor</strong></td>
      <td>Easy to overlook legal edge-cases (e.g., DART cookies, COPPA, sitemap parity).</td>
      <td>Often charges extra for dedicated SEO audits and AdSense alignment.</td>
      <td><strong>100% complete</strong> with 123 pre-rendered routes, full schema, and zero policy oversights.</td>
    </tr>
  </tbody>
</table>

<h2>6. Key Technical Lessons for Future Projects</h2>
<ol>
  <li><strong>Static Prerendering Beats Heavy SSR for Content-Rich Portals:</strong> Using a Vite SPA with a custom headless Node prerender step gives you the best of both worlds: zero server maintenance costs, instant static edge caching, and perfect Googlebot crawlability.</li>
  <li><strong>Decouple State from UI:</strong> Interactive tools (like the IELTS Speech Lab or Diplomatic Simulators) should isolate their scoring algorithms from UI components so they can easily be unit tested and ported across platforms.</li>
  <li><strong>Automate Document Outputs:</strong> Never manually format PDF/Word versions of courses. Write a single source script that compiles markdown or JSON into formatted web pages, Word documents, and printable HTML in one pass.</li>
  <li><strong>Compliance from Day One:</strong> Always establish clear, explicit Privacy, Terms, and Disclaimer pages before applying to advertising networks like Google AdSense to avoid review rejections.</li>
</ol>

<hr style="border: 0; border-top: 1px solid #cbd5e1; margin: 30px 0 15px 0;">
<div style="font-size: 9pt; color: #64748b; text-align: center;">
  <strong>dhshishir.com Engineering Architecture Series</strong> • Published for Education & Technical Archiving • Dhaka, Bangladesh
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
  body {
    font-family: 'Georgia', 'Times New Roman', serif;
    font-size: 11pt;
    line-height: 1.5;
    color: #111827;
  }
  h1 {
    font-size: 20pt;
    color: #0f172a;
    text-align: center;
    border-bottom: 2pt solid #0f172a;
    padding-bottom: 8pt;
  }
  h2 {
    font-size: 14pt;
    color: #0f172a;
    border-bottom: 1pt solid #cbd5e1;
    margin-top: 18pt;
  }
  h3 {
    font-size: 12pt;
    color: #1e293b;
    margin-top: 12pt;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 10pt;
    margin-bottom: 15pt;
  }
  th, td {
    border: 1pt solid #94a3b8;
    padding: 6pt 8pt;
    font-size: 9.5pt;
  }
  th {
    background-color: #f1f5f9;
    font-weight: bold;
  }
  .callout {
    background-color: #f8fafc;
    border-left: 4pt solid #0f172a;
    padding: 8pt 12pt;
    margin: 12pt 0;
    font-style: italic;
  }
</style>
</head>
<body>
${htmlContent.substring(htmlContent.indexOf('<body>') + 6, htmlContent.indexOf('</body>'))}
</body>
</html>
`;

const htmlFilePath = path.join(publicDownloadsDir, 'How-to-Build-a-Full-Scale-Diplomatic-Academic-Portal-Independent-Roadmap.html');
const docFilePath = path.join(publicDownloadsDir, 'How-to-Build-a-Full-Scale-Diplomatic-Academic-Portal-Independent-Roadmap.doc');

fs.writeFileSync(htmlFilePath, htmlContent, 'utf-8');
fs.writeFileSync(docFilePath, wordDocContent, 'utf-8');

console.log(`✅ Saved Roadmap HTML: ${htmlFilePath}`);
console.log(`✅ Saved Roadmap DOC: ${docFilePath}`);
