import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Read irAcademyData.ts file
const irDataPath = path.join(rootDir, 'src', 'data', 'irAcademyData.ts');
const irDataContent = fs.readFileSync(irDataPath, 'utf-8');

// We will parse or import the irAcademyData
// Since it's typescript, let's create a bundle or dynamic evaluation, or read the exported objects
async function generateHandbook() {
  console.log('Generating Complete Classic Masters in IR Course Handbook...');

  // Let's import the compiled or data via node or tsx
  // Let's create an elegant, master academic handbook generator
  const irAcademyModule = await import('../src/data/irAcademyData.ts');
  const { 
    IR_FELLOWSHIP_TITLE, 
    IR_FELLOWSHIP_CODE, 
    GLOSSARY_TERMS, 
    PILLARS_DATA, 
    CRISIS_SCENARIOS, 
    QUIZ_QUESTIONS 
  } = irAcademyModule;

  let htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${IR_FELLOWSHIP_TITLE} (${IR_FELLOWSHIP_CODE}) - Complete Academic Course Handbook</title>
  <style>
    @page {
      size: A4;
      margin: 20mm 18mm 20mm 18mm;
      @bottom-right {
        content: counter(page);
      }
    }
    *, *:before, *:after {
      box-sizing: border-box;
    }
    body {
      font-family: 'Georgia', 'Cambria', 'Times New Roman', serif;
      color: #111827;
      background: #ffffff;
      line-height: 1.6;
      font-size: 10.5pt;
      margin: 0;
      padding: 24px;
    }
    .cover-page {
      text-align: center;
      padding: 60px 20px 40px 20px;
      page-break-after: always;
      border: 3px double #111827;
      margin-bottom: 30px;
    }
    .inst-title {
      font-size: 12pt;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #374151;
      margin-bottom: 24px;
    }
    .main-title {
      font-size: 24pt;
      font-weight: 900;
      line-height: 1.25;
      color: #111827;
      margin: 20px 0;
      text-transform: uppercase;
      letter-spacing: -0.5px;
    }
    .sub-title {
      font-size: 13pt;
      font-style: italic;
      color: #4b5563;
      margin-bottom: 36px;
    }
    .code-badge {
      display: inline-block;
      border: 1.5px solid #111827;
      padding: 4px 16px;
      font-size: 10pt;
      font-weight: 700;
      letter-spacing: 1px;
      margin-bottom: 40px;
    }
    .author-block {
      margin-top: 60px;
      border-top: 1px solid #9ca3af;
      padding-top: 20px;
      font-size: 10.5pt;
    }
    .author-name {
      font-size: 14pt;
      font-weight: 800;
      color: #111827;
    }
    .author-title {
      font-size: 10pt;
      color: #4b5563;
      margin-top: 4px;
    }
    .toc {
      page-break-after: always;
      margin-bottom: 40px;
      padding: 20px;
      border: 1px solid #e5e7eb;
      background: #fafafa;
    }
    .toc h2 {
      text-transform: uppercase;
      font-size: 14pt;
      border-bottom: 2px solid #111827;
      padding-bottom: 6px;
      margin-top: 0;
    }
    .toc ul {
      list-style-type: none;
      padding-left: 0;
    }
    .toc li {
      margin-bottom: 8px;
      border-bottom: 1px dotted #d1d5db;
      padding-bottom: 4px;
      display: flex;
      justify-content: space-between;
      font-size: 10pt;
    }
    .toc a {
      color: #111827;
      text-decoration: none;
      font-weight: 600;
    }
    .section-break {
      page-break-before: always;
      margin-top: 30px;
    }
    h1 {
      font-size: 16pt;
      font-weight: 800;
      text-transform: uppercase;
      border-bottom: 2px solid #111827;
      padding-bottom: 6px;
      margin-top: 30px;
      margin-bottom: 16px;
      color: #111827;
    }
    h2 {
      font-size: 13pt;
      font-weight: 700;
      color: #1f2937;
      margin-top: 24px;
      margin-bottom: 10px;
      border-bottom: 1px solid #d1d5db;
      padding-bottom: 3px;
    }
    h3 {
      font-size: 11pt;
      font-weight: 700;
      color: #374151;
      margin-top: 16px;
      margin-bottom: 6px;
    }
    p {
      margin-bottom: 12px;
      text-align: justify;
    }
    .lecture-card {
      border: 1px solid #d1d5db;
      padding: 18px;
      margin-bottom: 24px;
      background: #ffffff;
      page-break-inside: avoid;
    }
    .lecture-header {
      border-bottom: 1.5px solid #111827;
      padding-bottom: 8px;
      margin-bottom: 12px;
    }
    .lecture-num {
      font-size: 9pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #4b5563;
    }
    .lecture-title {
      font-size: 13pt;
      font-weight: 800;
      color: #111827;
      margin: 4px 0;
    }
    .lecture-sub {
      font-size: 10pt;
      font-style: italic;
      color: #4b5563;
    }
    .framework-box {
      background: #f9fafb;
      border-left: 3px solid #374151;
      padding: 10px 14px;
      margin: 12px 0;
      font-size: 9.5pt;
    }
    .framework-title {
      font-weight: 700;
      color: #111827;
    }
    .case-box {
      border: 1px dashed #9ca3af;
      padding: 12px 14px;
      margin: 14px 0;
      background: #ffffff;
      font-size: 9.5pt;
    }
    .case-title {
      font-weight: 800;
      text-transform: uppercase;
      font-size: 9.5pt;
      color: #111827;
      margin-bottom: 4px;
    }
    .bangla-box {
      background: #f3f4f6;
      border: 1px solid #e5e7eb;
      padding: 10px 14px;
      margin: 12px 0;
      font-family: 'SolaimanLipi', 'SutonnyMJ', 'Segoe UI', serif;
      font-size: 9.5pt;
      color: #1f2937;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 14px 0;
      font-size: 9pt;
    }
    th, td {
      border: 1px solid #d1d5db;
      padding: 6px 10px;
      text-align: left;
      vertical-align: top;
    }
    th {
      background: #f3f4f6;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 8pt;
      color: #111827;
    }
    .glossary-row {
      page-break-inside: avoid;
      margin-bottom: 14px;
      border-bottom: 1px solid #e5e7eb;
      padding-bottom: 10px;
    }
    .glossary-term {
      font-size: 11pt;
      font-weight: 800;
      color: #111827;
    }
    .glossary-ipa {
      font-size: 9pt;
      font-family: monospace;
      color: #4b5563;
      margin-left: 8px;
    }
    .glossary-cat {
      display: inline-block;
      font-size: 7.5pt;
      text-transform: uppercase;
      border: 1px solid #9ca3af;
      padding: 1px 6px;
      margin-left: 8px;
      font-weight: 700;
    }
    .page-footer {
      border-top: 1px solid #d1d5db;
      margin-top: 40px;
      padding-top: 10px;
      font-size: 8pt;
      color: #6b7280;
      display: flex;
      justify-content: space-between;
    }
    @media print {
      body { padding: 0; font-size: 10pt; }
      .lecture-card { border-color: #999; }
      a { color: #000; text-decoration: none; }
    }
  </style>
</head>
<body>

  <!-- COVER PAGE -->
  <div class="cover-page">
    <div class="inst-title">DH SHISHIR ACADEMIC & RESEARCH FELLOWSHIP</div>
    <div class="code-badge">${IR_FELLOWSHIP_CODE} • ACADEMIC CURRICULUM HANDBOOK</div>
    
    <div class="main-title">${IR_FELLOWSHIP_TITLE}</div>
    <div class="sub-title">A Comprehensive Postgraduate & Executive Syllabus in Classical Realism, Cognitive Political Psychology, Maritime Law, and Sovereign Statecraft</div>

    <div style="margin: 40px auto; max-width: 500px; font-size: 10pt; line-height: 1.7; color: #374151;">
      Four Advanced Pillars • 20 Core Theoretical Lectures • Socratic Seminar Inquiries • Transboundary Hydro-Diplomacy • Complete Diplomatic Lexicon • Formative Crisis Case Studies
    </div>

    <div class="author-block">
      <div class="author-name">Daloyar Hassan Shishir (দেলোয়ার হাসান শিশির)</div>
      <div class="author-title">Diplomatic Enthusiast, Foreign Policy Analyst & Senior English Educator</div>
      <div class="author-title">Director, Open Master's Fellowship in IR & Strategic Studies (OMF-IRSS)</div>
      <div class="author-title" style="margin-top: 6px; font-weight: bold;">https://dhshishir.com • Dhaka, Bangladesh</div>
    </div>
  </div>

  <!-- TABLE OF CONTENTS -->
  <div class="toc">
    <h2>Course Curriculum Architecture</h2>
    <ul>
      <li><a href="#pillar1">Pillar I: Theories of International Relations & Sovereign Statecraft</a> <span>Lectures 1.1 – 1.5</span></li>
      <li><a href="#pillar2">Pillar II: Cognitive Political Psychology & Foreign Policy Decision Systems</a> <span>Lectures 2.1 – 2.5</span></li>
      <li><a href="#pillar3">Pillar III: International Law, UNCLOS & Maritime Geopolitics</a> <span>Lectures 3.1 – 3.5</span></li>
      <li><a href="#pillar4">Pillar IV: The 2026 Bangladesh Sovereign Foreign Policy Paradigm</a> <span>Lectures 4.1 – 4.5</span></li>
      <li><a href="#glossary">Comprehensive Diplomatic & IR Lexicon (Terms & Frameworks)</a> <span>Bilingual Index</span></li>
      <li><a href="#scenarios">Executive Crisis Simulation Scenarios & Decision Briefings</a> <span>Strategic Playbook</span></li>
      <li><a href="#assessment">Postgraduate Examination & Analytical Essay Frameworks</a> <span>Comprehensive Prompts</span></li>
    </ul>
  </div>

  <!-- PILLARS & LECTURES -->
`;

  PILLARS_DATA.forEach((pillar) => {
    htmlContent += `
  <div id="pillar${pillar.pillarNumber}" class="section-break">
    <div style="font-size: 9pt; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: #4b5563;">PILLAR 0${pillar.pillarNumber}</div>
    <h1>${pillar.title}</h1>
    <div style="font-size: 10pt; font-style: italic; color: #374151; margin-bottom: 16px;">
      <strong>Core Focus:</strong> ${pillar.academicObjective}
    </div>
    <div style="font-size: 9.5pt; margin-bottom: 20px; padding: 10px; background: #f3f4f6; border: 1px solid #e5e7eb;">
      <strong>Primary Competency:</strong> ${pillar.competencyArea} | <strong>Module Category:</strong> ${pillar.categoryBadge}
    </div>
`;

    pillar.lectures.forEach((lec) => {
      htmlContent += `
    <div class="lecture-card">
      <div class="lecture-header">
        <div class="lecture-num">Lecture ${lec.lectureNumber} • ${lec.readTimeMinutes} Min Academic Reading</div>
        <div class="lecture-title">${lec.title}</div>
        <div class="lecture-sub">${lec.subtitle}</div>
      </div>

      <p><strong>Executive Overview:</strong> ${lec.overview}</p>

      <div style="margin: 12px 0;">
        <h3 style="text-transform: uppercase; font-size: 9.5pt; border-bottom: 1px solid #e5e7eb; padding-bottom: 2px;">Theoretical Frameworks & Paradigms</h3>
        ${lec.theoreticalFrameworks.map(tf => `
        <div class="framework-box">
          <div class="framework-title">${tf.name}</div>
          <div><strong>Core Concept:</strong> ${tf.concept}</div>
          <div><strong>Statecraft Application:</strong> ${tf.application}</div>
        </div>
        `).join('')}
      </div>

      ${lec.statecraftCaseStudy ? `
      <div class="case-box">
        <div class="case-title">🏛️ Historical Case Study: ${lec.statecraftCaseStudy.title}</div>
        <div><strong>Historical Context:</strong> ${lec.statecraftCaseStudy.historicalContext}</div>
        <div><strong>Strategic Analysis:</strong> ${lec.statecraftCaseStudy.strategicAnalysis}</div>
        <div style="margin-top: 4px;"><strong>Statecraft Takeaway:</strong> <em>${lec.statecraftCaseStudy.lessonsForStatecraft}</em></div>
      </div>
      ` : ''}

      ${lec.banglaDiplomaticSummary ? `
      <div class="bangla-box">
        <strong>কূটনৈতিক সারসংক্ষেপ (Bangla Executive Digest):</strong><br>
        ${lec.banglaDiplomaticSummary}
      </div>
      ` : ''}

      <div style="margin-top: 12px; font-size: 9.5pt;">
        <strong>Socratic Seminar Questions for Deep Inquiry:</strong>
        <ul style="margin-top: 4px; padding-left: 20px;">
          ${lec.analyticalSeminarQuestions.map(q => `<li>${q}</li>`).join('')}
        </ul>
      </div>

      <div style="margin-top: 10px; font-size: 9pt; color: #4b5563; border-top: 1px dotted #d1d5db; padding-top: 6px;">
        <strong>Essential Academic Reading:</strong> 
        ${lec.keyReadings.map(r => `<em>${r.title}</em> by ${r.author} (${r.sourceType}) — ${r.coreConcept}`).join('; ')}
      </div>

    </div>
`;
    });

    htmlContent += `  </div>\n`;
  });

  // GLOSSARY SECTION
  htmlContent += `
  <div id="glossary" class="section-break">
    <h1>Comprehensive Diplomatic & IR Lexicon</h1>
    <p>A rigorous bilingual reference dictionary of essential theoretical constructs, international legal doctrines, and diplomatic paradigms.</p>

    <div style="margin-top: 20px;">
`;

  GLOSSARY_TERMS.forEach((term) => {
    htmlContent += `
      <div class="glossary-row">
        <div>
          <span class="glossary-term">${term.term}</span>
          <span class="glossary-ipa">${term.pronunciationIpa}</span>
          <span class="glossary-cat">${term.category}</span>
        </div>
        <div style="margin-top: 4px; font-size: 9.5pt; color: #111827;">
          <strong>Definition:</strong> ${term.definition}
        </div>
        <div style="margin-top: 3px; font-size: 9.5pt; color: #1f2937; font-family: 'Segoe UI', serif;">
          <strong>বাংলা অর্থ ও তাৎপর্য:</strong> ${term.banglaMeaning}
        </div>
        <div style="margin-top: 3px; font-size: 9pt; color: #4b5563; font-style: italic;">
          <strong>Diplomatic Context:</strong> ${term.diplomaticContext}
        </div>
      </div>
`;
  });

  htmlContent += `    </div>
  </div>\n`;

  // CRISIS SCENARIOS SECTION
  if (CRISIS_SCENARIOS && CRISIS_SCENARIOS.length > 0) {
    htmlContent += `
  <div id="scenarios" class="section-break">
    <h1>Executive Crisis Simulation Scenarios & Decision Briefings</h1>
    <p>Real-world strategic simulations modeling high-stakes decision-making, escalatory risks, and diplomatic containment.</p>

    <div>
`;
    CRISIS_SCENARIOS.forEach((sc, idx) => {
      htmlContent += `
      <div class="lecture-card">
        <div class="lecture-header">
          <div class="lecture-num">Simulation Scenario 0${idx + 1} • ${sc.category || 'Strategic Crisis'}</div>
          <div class="lecture-title">${sc.title}</div>
        </div>
        <p><strong>Geopolitical Situation:</strong> ${sc.situation || sc.context || sc.description}</p>
        
        ${sc.options ? `
        <div style="margin: 12px 0;">
          <strong>Diplomatic Decision Pathways:</strong>
          <ul style="margin-top: 6px; padding-left: 20px; font-size: 9.5pt;">
            ${sc.options.map(opt => `<li><strong>${opt.title || opt.label || 'Option'}:</strong> ${opt.description || opt.text || ''}</li>`).join('')}
          </ul>
        </div>
        ` : ''}

        ${sc.lessonsLearned ? `<div style="font-size: 9pt; font-style: italic; color: #4b5563;"><strong>Strategic Lesson:</strong> ${sc.lessonsLearned}</div>` : ''}
      </div>
`;
    });
    htmlContent += `    </div>
  </div>\n`;
  }

  // ASSESSMENT & ESSAY PROMPTS SECTION
  htmlContent += `
  <div id="assessment" class="section-break">
    <h1>Postgraduate Examination & Analytical Essay Prompts</h1>
    <p>Comprehensive research questions designed for comprehensive examination evaluation and master's thesis preparation.</p>

    <table>
      <thead>
        <tr>
          <th style="width: 15%;">Module</th>
          <th style="width: 55%;">Advanced Research Essay Prompt</th>
          <th style="width: 30%;">Evaluative Criteria</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Pillar I</strong></td>
          <td>Critically evaluate whether the contemporary multipolar transition in the Indo-Pacific adheres to Kenneth Waltz's structural balancing or John Mearsheimer's offensive regional hegemony thesis. Assess the implications for littoral middle powers.</td>
          <td>Theoretical precision, empirical evidence from South China Sea / Bay of Bengal, balance-of-power rigor.</td>
        </tr>
        <tr>
          <td><strong>Pillar II</strong></td>
          <td>Using Robert Jervis's perception frameworks and Daniel Kahneman's prospect theory, analyze a recent international diplomatic standoff. How did cognitive heuristics and groupthink distort intelligence assessments?</td>
          <td>Psychological model synthesis, cognitive bias identification, decision-tree mapping.</td>
        </tr>
        <tr>
          <td><strong>Pillar III</strong></td>
          <td>Examine the role of international tribunals (ITLOS and PCA) in resolving maritime boundary disputes in the Bay of Bengal. Assess how UNCLOS provisions defend sovereign exclusive economic zones (EEZs) against unilateral regional claims.</td>
          <td>Treaty article citations, delimitation methodology, blue economy governance.</td>
        </tr>
        <tr>
          <td><strong>Pillar IV</strong></td>
          <td>Formulate a comprehensive foreign policy blueprint for post-2024 Bangladesh based on the 'Bangladesh First' doctrine. Address transboundary water diplomacy, omnidirectional economic hedging, and subsea cable security.</td>
          <td>Strategic autonomy viability, multilateral balancing, sovereign reciprocity.</td>
        </tr>
      </tbody>
    </table>

    <div class="page-footer">
      <div>Open Master's Fellowship in International Relations & Strategic Studies (OMF-IRSS)</div>
      <div>Official Course Handbook • Daloyar Hassan Shishir (dhshishir.com)</div>
    </div>
  </div>

</body>
</html>
`;

  // Write out HTML file
  const outHtmlPath = path.join(rootDir, 'public', 'downloads', 'Masters-in-International-Relations-Complete-Course-Handbook.html');
  fs.writeFileSync(outHtmlPath, htmlContent, 'utf-8');
  console.log(`✅ Saved HTML Handbook: ${outHtmlPath}`);

  // Write out Word .DOC file (Word can open clean HTML with .doc extension seamlessly)
  const outDocPath = path.join(rootDir, 'public', 'downloads', 'Masters-in-International-Relations-Complete-Course-Handbook.doc');
  fs.writeFileSync(outDocPath, '\ufeff' + htmlContent, 'utf-8');
  console.log(`✅ Saved Word (.DOC) Handbook: ${outDocPath}`);
}

generateHandbook().catch(err => {
  console.error('Error generating handbook:', err);
  process.exit(1);
});
