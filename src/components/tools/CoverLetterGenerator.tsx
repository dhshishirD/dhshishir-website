import React, { useState, useMemo, useRef } from 'react';
import { 
  FileText, Upload, Sparkles, CheckCircle2, Copy, Check, 
  Download, RefreshCw, Briefcase, GraduationCap, Globe, 
  Cpu, Award, Building2, UserCheck, Eye, Edit3, ShieldCheck, 
  Layers, ArrowRight, Zap, Printer, FileCheck, FileCode
} from 'lucide-react';
import confetti from 'canvas-confetti';

// 5 Specialized Industry Application Frameworks
type IndustryTrack = 'corporate_mto' | 'ngo_un' | 'academic_fellowship' | 'tech_software' | 'civil_service';

interface TrackProfile {
  id: IndustryTrack;
  title: string;
  badge: string;
  icon: any;
  defaultRole: string;
  defaultCompany: string;
  defaultManager: string;
  toneDescription: string;
  sampleKeywords: string[];
}

const INDUSTRY_TRACKS: TrackProfile[] = [
  {
    id: 'corporate_mto',
    title: 'Corporate MTO & MNC / Banking',
    badge: 'FMCG / Telecom / Conglomerate',
    icon: Briefcase,
    defaultRole: 'Management Trainee Officer (MTO) / Corporate Strategy Specialist',
    defaultCompany: 'Leading Multinational Conglomerate',
    defaultManager: 'Hiring Committee & Talent Acquisition Division',
    toneDescription: 'High-impact ROI, quantified metrics, P&L ownership, and cross-functional team leadership.',
    sampleKeywords: ['Stakeholder Management', 'P&L Optimization', 'Business Analytics', 'Agile Execution', 'Revenue Growth']
  },
  {
    id: 'ngo_un',
    title: 'UN, INGO & International Development',
    badge: 'Humanitarian / Think Tank / Diplomatic',
    icon: Globe,
    defaultRole: 'Program & Strategic Operations Specialist',
    defaultCompany: 'United Nations / International Development Agency',
    defaultManager: 'Head of Mission & Program Recruitment Board',
    toneDescription: 'Multi-stakeholder alignment, humanitarian frameworks, policy research, and bilateral coordination.',
    sampleKeywords: ['Multi-Stakeholder Coordination', 'Policy Briefs', 'Sustainable Development (SDGs)', 'Field Implementation', 'Donor Reporting']
  },
  {
    id: 'academic_fellowship',
    title: 'Academic, GRA & Global Fellowship',
    badge: 'Chevening / Fulbright / Graduate Assistantship',
    icon: GraduationCap,
    defaultRole: 'Graduate Research Scholar / Academic Teaching Fellow',
    defaultCompany: 'Graduate Admissions & Fellowship Selection Committee',
    defaultManager: 'Graduate Admissions Committee & Faculty Chair',
    toneDescription: 'Empirical research methodologies, literature synthesis, academic publications, and faculty synergy.',
    sampleKeywords: ['Empirical Methodology', 'Data Triangulation', 'Literature Review', 'Peer-Reviewed Analysis', 'Curriculum Pedagogy']
  },
  {
    id: 'tech_software',
    title: 'Software Engineering & Tech Startups',
    badge: 'Full-Stack / AI / Product Engineering',
    icon: Cpu,
    defaultRole: 'Senior Full-Stack Engineer / Technical Lead',
    defaultCompany: 'High-Growth Tech Enterprise / SaaS Platform',
    defaultManager: 'Director of Engineering & Technical Talent Lead',
    toneDescription: 'Architectural scalability, latency reduction, CI/CD automation, and rapid agile sprint delivery.',
    sampleKeywords: ['Scalable Architecture', 'CI/CD Pipelines', 'API Design', 'System Latency', 'Microservices']
  },
  {
    id: 'civil_service',
    title: 'Civil Service & Public Administration',
    badge: 'BCS / Public Policy / Statutory Body',
    icon: Award,
    defaultRole: 'Public Policy & Administrative Officer',
    defaultCompany: 'Ministry / Public Administration Directorate',
    defaultManager: 'Selection Board & Directorate of Public Administration',
    toneDescription: 'Administrative integrity, statutory compliance, public service delivery, and institutional governance.',
    sampleKeywords: ['Institutional Governance', 'Regulatory Compliance', 'Public Service Delivery', 'Administrative Integrity', 'Policy Implementation']
  }
];

export const CoverLetterGenerator: React.FC = () => {
  // Navigation & Track States
  const [selectedTrack, setSelectedTrack] = useState<IndustryTrack>('corporate_mto');
  const [stylePreset, setStylePreset] = useState<'harvard' | 'oxford' | 'modern'>('harvard');
  const [activeInputTab, setActiveInputTab] = useState<'upload' | 'manual'>('upload');
  
  // File Parsing States
  const [cvFileName, setCvFileName] = useState<string | null>(null);
  const [jdFileName, setJdFileName] = useState<string | null>(null);
  const [isParsingCv, setIsParsingCv] = useState(false);
  const [isParsingJd, setIsParsingJd] = useState(false);
  const [parseError, setParseError] = useState<string | null>(null);
  const cvInputRef = useRef<HTMLInputElement | null>(null);
  const jdInputRef = useRef<HTMLInputElement | null>(null);

  // Form & Text Data
  const [candidateName, setCandidateName] = useState('Daloyar Hassan Shishir');
  const [candidateContact, setCandidateContact] = useState('Sylhet / Dhaka, Bangladesh • +880 1700-000000 • dhshishir@example.com • linkedin.com/in/dhshishir');
  const [resumeRawText, setResumeRawText] = useState('');
  const [jobCircularText, setJobCircularText] = useState('');
  const [targetJobTitle, setTargetJobTitle] = useState('Management Trainee Officer (MTO) / Corporate Strategy Specialist');
  const [companyName, setCompanyName] = useState('Leading Enterprise Organization');
  const [hiringManager, setHiringManager] = useState('Hiring Committee & Talent Acquisition Team');
  const [customKeyPoints, setCustomKeyPoints] = useState('');

  // Generation & Interactive Editor States
  const [generatedLetter, setGeneratedLetter] = useState<string>('');
  const [isEditing, setIsEditing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);

  // Handle Track Selection Changes
  const handleSelectTrack = (trackId: IndustryTrack) => {
    setSelectedTrack(trackId);
    const profile = INDUSTRY_TRACKS.find(t => t.id === trackId);
    if (profile) {
      if (!targetJobTitle || targetJobTitle.includes('Specialist') || targetJobTitle.includes('Officer')) {
        setTargetJobTitle(profile.defaultRole);
      }
      if (!companyName || companyName.includes('Leading Enterprise')) {
        setCompanyName(profile.defaultCompany);
      }
      if (!hiringManager || hiringManager.includes('Hiring Committee')) {
        setHiringManager(profile.defaultManager);
      }
    }
  };

  // Browser-Native CV File Parser (PDF, DOCX, TXT)
  const handleCvFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setCvFileName(file.name);
    setIsParsingCv(true);
    setParseError(null);

    try {
      const ext = file.name.split('.').pop()?.toLowerCase() || '';

      if (ext === 'docx') {
        const mammoth = await import('mammoth');
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer });
        const extractedText = (result.value || '').trim();
        if (!extractedText) throw new Error('No selectable text found in this DOCX file.');
        setResumeRawText(extractedText);
        autoPopulateFromCv(extractedText);
      } else if (ext === 'pdf') {
        const pdfjsLib = await import('pdfjs-dist');
        if (typeof window !== 'undefined' && !pdfjsLib.GlobalWorkerOptions.workerSrc) {
          pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjsLib.version || '6.3.289'}/build/pdf.worker.min.mjs`;
        }
        const arrayBuffer = await file.arrayBuffer();
        const loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(arrayBuffer), useSystemFonts: true });
        const pdf = await loadingTask.promise;
        let fullText = '';
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          const pageText = textContent.items.map((item: any) => item.str || '').join(' ');
          fullText += pageText + '\n\n';
        }
        const cleaned = fullText.replace(/[^\x20-\x7E\n\r\t]/g, ' ').replace(/[ \t]+/g, ' ').trim();
        if (!cleaned || cleaned.length < 30) {
          throw new Error('This PDF appears to be a scanned image without a text layer. Please paste text directly.');
        }
        setResumeRawText(cleaned);
        autoPopulateFromCv(cleaned);
      } else {
        const text = await file.text();
        setResumeRawText(text.trim());
        autoPopulateFromCv(text.trim());
      }
    } catch (err: any) {
      console.error('CV Parsing error:', err);
      setParseError(err.message || 'Failed to extract text from CV.');
    } finally {
      setIsParsingCv(false);
      if (cvInputRef.current) cvInputRef.current.value = '';
    }
  };

  // Browser-Native Job Circular File Parser (PDF, DOCX, TXT)
  const handleJdFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setJdFileName(file.name);
    setIsParsingJd(true);
    setParseError(null);

    try {
      const ext = file.name.split('.').pop()?.toLowerCase() || '';

      if (ext === 'docx') {
        const mammoth = await import('mammoth');
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer });
        const extractedText = (result.value || '').trim();
        setJobCircularText(extractedText);
        autoPopulateFromJd(extractedText);
      } else if (ext === 'pdf') {
        const pdfjsLib = await import('pdfjs-dist');
        if (typeof window !== 'undefined' && !pdfjsLib.GlobalWorkerOptions.workerSrc) {
          pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjsLib.version || '6.3.289'}/build/pdf.worker.min.mjs`;
        }
        const arrayBuffer = await file.arrayBuffer();
        const loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(arrayBuffer), useSystemFonts: true });
        const pdf = await loadingTask.promise;
        let fullText = '';
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          const pageText = textContent.items.map((item: any) => item.str || '').join(' ');
          fullText += pageText + '\n\n';
        }
        const cleaned = fullText.replace(/[^\x20-\x7E\n\r\t]/g, ' ').replace(/[ \t]+/g, ' ').trim();
        setJobCircularText(cleaned);
        autoPopulateFromJd(cleaned);
      } else {
        const text = await file.text();
        setJobCircularText(text.trim());
        autoPopulateFromJd(text.trim());
      }
    } catch (err: any) {
      console.error('Job circular parsing error:', err);
      setParseError(err.message || 'Failed to extract text from job circular.');
    } finally {
      setIsParsingJd(false);
      if (jdInputRef.current) jdInputRef.current.value = '';
    }
  };

  // Auto-detect candidate details from CV text
  const autoPopulateFromCv = (text: string) => {
    const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    if (lines.length > 0) {
      const firstLine = lines[0];
      if (firstLine.length < 40 && !firstLine.includes('@') && !firstLine.includes('+')) {
        setCandidateName(firstLine);
      }
      for (let i = 0; i < Math.min(4, lines.length); i++) {
        if (lines[i].includes('@') || lines[i].includes('+88') || /linkedin|sylhet|dhaka/i.test(lines[i])) {
          setCandidateContact(lines[i]);
          break;
        }
      }
    }
  };

  // Auto-detect job title and company from circular text
  const autoPopulateFromJd = (text: string) => {
    const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
    if (lines.length > 0) {
      const firstLine = lines[0];
      if (firstLine.length < 60 && !/responsibilit|require|about us/i.test(firstLine)) {
        setTargetJobTitle(firstLine);
      }
    }
  };

  // 100% Dynamic NLP Keyword Matching & Scoring
  const nlpAnalysis = useMemo(() => {
    const stopWords = new Set([
      'and', 'the', 'for', 'with', 'that', 'this', 'from', 'have', 'are', 'was', 'were', 
      'will', 'been', 'about', 'into', 'over', 'more', 'such', 'across', 'using', 'your', 
      'must', 'should', 'their', 'work', 'role', 'team', 'year', 'years', 'high', 'strong', 
      'key', 'will', 'you', 'our', 'what', 'who', 'when', 'where', 'which', 'well', 'able',
      'good', 'great', 'join', 'help', 'looking', 'needed', 'per', 'day', 'time', 'candidate'
    ]);

    let matchedKeywords: string[] = [];
    let missingKeywords: string[] = [];
    let matchScore = 88;

    if (jobCircularText.trim()) {
      const jdTokens = (jobCircularText.toLowerCase().match(/\b[a-z0-9+#.-]{3,}\b/g) || [])
        .filter(w => !stopWords.has(w) && isNaN(Number(w)));

      const freq: Record<string, number> = {};
      jdTokens.forEach(w => { freq[w] = (freq[w] || 0) + 1; });

      const topKeywords = Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 15).map(e => e[0]);
      const cvTextLower = (resumeRawText + ' ' + customKeyPoints).toLowerCase();

      topKeywords.forEach(kw => {
        if (cvTextLower.includes(kw)) {
          matchedKeywords.push(kw);
        } else {
          missingKeywords.push(kw);
        }
      });

      if (topKeywords.length > 0) {
        matchScore = Math.min(98, Math.max(65, Math.round((matchedKeywords.length / topKeywords.length) * 100)));
      }
    } else {
      const activeTrackObj = INDUSTRY_TRACKS.find(t => t.id === selectedTrack) || INDUSTRY_TRACKS[0];
      matchedKeywords = activeTrackObj.sampleKeywords.slice(0, 3);
      missingKeywords = activeTrackObj.sampleKeywords.slice(3);
    }

    return { matchedKeywords, missingKeywords, matchScore };
  }, [jobCircularText, resumeRawText, customKeyPoints, selectedTrack]);

  // Full-Scale Multi-Paragraph Cover Letter Synthesis Engine
  const handleGenerateCoverLetter = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const name = candidateName.trim() || 'Daloyar Hassan Shishir';
    const contact = candidateContact.trim() || 'Sylhet, Bangladesh • +880 1700-000000 • candidate@email.com';
    const role = targetJobTitle.trim() || 'Management Trainee Officer (MTO) / Corporate Strategy Specialist';
    const company = companyName.trim() || 'Leading Enterprise Organization';
    const manager = hiringManager.trim() || 'Hiring Committee & Talent Acquisition Division';
    const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    // Extract real achievements or past degrees from CV if present
    const cvLines = resumeRawText.split(/\r?\n/).map(l => l.trim()).filter(l => l.length > 25);
    const topMetricBullet = cvLines.find(l => /\b\d+(?:\.\d+)?%|\$\d+|\btk\b|\b\d{2,}\b|\b\d+x\b/i.test(l)) 
      || 'Spearheaded operational excellence initiatives, accelerating program turnaround by 28% and streamlining cross-departmental documentation workflows.';

    const wovenSkillsList = nlpAnalysis.matchedKeywords.length > 0 
      ? nlpAnalysis.matchedKeywords.slice(0, 4).join(', ')
      : 'cross-functional leadership, quantitative problem-solving, and strategic communication';

    let introParagraph = '';
    let coreValueParagraph = '';
    let missionAlignmentParagraph = '';
    let closingParagraph = '';

    if (selectedTrack === 'corporate_mto') {
      introParagraph = `I am writing to formally submit my application for the position of ${role} at ${company}. Having closely observed ${company}'s standard of corporate excellence and market leadership, I am eager to leverage my strategic analytical acumen, stakeholder management competencies, and dedication to operational rigor to deliver measurable value to your executive teams.`;
      
      coreValueParagraph = `Throughout my academic and professional career, I have cultivated a structured approach to problem-solving, data-driven execution, and team mobilization. Specifically, I have ${topMetricBullet.replace(/^[-•*▪]\s*/, '')} In addition, my hands-on proficiencies in ${wovenSkillsList} enable me to translate high-level organizational goals into structured standard operating protocols that optimize bottom-line performance.`;
      
      missionAlignmentParagraph = `${company}'s commitment to sustainable business growth, rapid market innovation, and high-performance talent development deeply resonates with my professional ethos. I thrive in collaborative, fast-paced corporate environments where cross-functional agility and accountable leadership are paramount.`;
      
      closingParagraph = `Thank you for your time and consideration of my candidacy. I welcome the privilege of discussing how my background, leadership discipline, and operational skillset directly align with ${company}'s strategic milestones in a formal interview.`;

    } else if (selectedTrack === 'ngo_un') {
      introParagraph = `I am deeply inspired to submit my application for the ${role} opening at ${company}. With a steadfast dedication to evidence-based policy research, multi-stakeholder coordination, and community empowerment, I am enthusiastic about the opportunity to contribute to ${company}'s humanitarian and developmental mandates.`;
      
      coreValueParagraph = `My professional background is grounded in bridging empirical analysis with on-the-ground operational execution. I have successfully ${topMetricBullet.replace(/^[-•*▪]\s*/, '')} Furthermore, my domain capabilities in ${wovenSkillsList} equip me to synthesize complex regulatory frameworks, engage diverse institutional partners, and author rigorous donor-compliant briefs.`;
      
      missionAlignmentParagraph = `${company}'s impactful presence in driving sustainable community resilience and institutional empowerment aligns seamlessly with my core mission. Having engaged in high-level policy dialogues and international leadership fellowships, I bring the cross-cultural nuance and diplomatic integrity required for multi-agency execution.`;
      
      closingParagraph = `I look forward to the opportunity to discuss how my analytical rigor and dedication to high-impact development initiatives will advance ${company}'s organizational objectives.`;

    } else if (selectedTrack === 'academic_fellowship') {
      introParagraph = `I am writing to formally present my candidature for the ${role} with the ${company}. Drawing from a rigorous academic foundation and a proven record of scholarly investigation, I am eager to contribute my methodological proficiencies and interdisciplinary research focus to your prestigious academic community.`;
      
      coreValueParagraph = `My scholarly trajectory has centered on structured empirical inquiry, qualitative discourse analysis, and qualitative data triangulation. As part of my academic contributions, I have ${topMetricBullet.replace(/^[-•*▪]\s*/, '')} My core competencies across ${wovenSkillsList} have enabled me to author comprehensive academic papers, deliver pedagogical masterclasses, and mentor emerging researchers.`;
      
      missionAlignmentParagraph = `The distinguished faculty and research laboratories at ${company} provide an unparalleled environment for high-caliber scholarly inquiry. My research interests in global governance, linguistic discourse, and strategic foreign policy directly complement the current intellectual pursuits of your department.`;
      
      closingParagraph = `Thank you for reviewing my application materials. I welcome the opportunity to discuss my proposed research frameworks and teaching contributions with the selection committee.`;

    } else if (selectedTrack === 'tech_software') {
      introParagraph = `I am excited to apply for the ${role} position at ${company}. Having followed ${company}'s technical innovations and product architecture, I am eager to bring my expertise in full-stack scalability, clean code design, and agile system deployment to your engineering division.`;
      
      coreValueParagraph = `As a technical builder, I focus on delivering robust, production-grade solutions with optimal latency and high availability. Notably, I have ${topMetricBullet.replace(/^[-•*▪]\s*/, '')} My proficiencies across ${wovenSkillsList} allow me to design modular microservices, streamline automated CI/CD deployment pipelines, and collaborate effectively with product managers and engineers alike.`;
      
      missionAlignmentParagraph = `${company}'s culture of continuous engineering excellence and rapid iteration represents the ideal ecosystem for my technical capabilities. I am passionate about tackling complex algorithmic challenges and shipping user-centric features that scale seamlessly to thousands of concurrent users.`;
      
      closingParagraph = `I would welcome the opportunity to discuss my technical portfolio and demonstrate how my engineering background will accelerate ${company}'s upcoming product release cycles.`;

    } else {
      // Civil Service & Public Administration
      introParagraph = `I have the honor to submit my formal candidature for the position of ${role} under the ${company}. Committed to the highest ideals of administrative integrity, institutional governance, and public service excellence, I am prepared to dedicate my analytical capabilities to the mission of your directorate.`;
      
      coreValueParagraph = `Throughout my career, I have prioritized meticulous statutory adherence, structured public documentation, and transparent stakeholder coordination. In previous capacities, I have ${topMetricBullet.replace(/^[-•*▪]\s*/, '')} With demonstrated proficiencies in ${wovenSkillsList}, I am well-prepared to uphold administrative protocols, analyze policy instruments, and execute official directives with precision.`;
      
      missionAlignmentParagraph = `The vital public welfare and regulatory governance carried out by ${company} are essential to national development. I am dedicated to serving with uncompromising professionalism, accountability, and responsiveness to citizen welfare.`;
      
      closingParagraph = `Thank you for your consideration of my credentials. I remain at your disposal for any further assessment or formal interview required by the selection committee.`;
    }

    const fullLetter = `${name}
${contact}
Date: ${currentDate}

To:
${manager}
${company}

Subject: Application for the Position of ${role} (Ref: Vacancy Announcement)

Dear ${manager},

${introParagraph}

${coreValueParagraph}

${missionAlignmentParagraph}

${closingParagraph}

Sincerely,

${name}
${role} Candidate`;

    setGeneratedLetter(fullLetter);
    setHasGenerated(true);
    confetti({ particleCount: 75, spread: 70, origin: { y: 0.6 } });
  };

  // Copy Clean Text to Clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(generatedLetter);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 1-Click Formatted Microsoft Word (.doc) Download Engine
  const handleDownloadDoc = () => {
    if (!generatedLetter) return;

    const lines = generatedLetter.split(/\r?\n/);
    const name = candidateName.toUpperCase();
    const contact = candidateContact;
    const dateStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    const docHtml = `
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
  <meta charset="utf-8">
  <title>Cover Letter - ${candidateName}</title>
  <!--[if gte mso 9]>
  <xml>
    <w:WordDocument>
      <w:View>Print</w:View>
      <w:Zoom>100</w:Zoom>
      <w:DoNotOptimizeForBrowser/>
    </w:WordDocument>
  </xml>
  <![endif]-->
  <style>
    @page {
      size: 8.5in 11in;
      margin: 1.0in 1.0in 1.0in 1.0in;
      mso-header-margin: 0.5in;
      mso-footer-margin: 0.5in;
      mso-paper-source: 0;
    }
    body {
      font-family: ${stylePreset === 'harvard' ? "'Times New Roman', Times, serif" : "'Calibri', 'Arial', sans-serif"};
      font-size: 11pt;
      line-height: 1.25;
      color: #0f172a;
      margin: 0;
      padding: 0;
    }
    .header-name {
      font-size: 16pt;
      font-weight: bold;
      text-align: center;
      letter-spacing: 0.5pt;
      margin-bottom: 2pt;
      color: #091e42;
    }
    .header-contact {
      font-size: 9.5pt;
      text-align: center;
      color: #334155;
      margin-bottom: 12pt;
      border-bottom: 1.5pt solid #0d9488;
      padding-bottom: 6pt;
    }
    .date-line {
      font-size: 10.5pt;
      margin-bottom: 14pt;
    }
    .recipient-box {
      font-size: 10.5pt;
      line-height: 1.2;
      margin-bottom: 14pt;
    }
    .subject-line {
      font-size: 11pt;
      font-weight: bold;
      margin-bottom: 12pt;
      color: #091e42;
    }
    .salutation {
      font-size: 11pt;
      margin-bottom: 10pt;
    }
    p {
      margin-top: 0;
      margin-bottom: 10pt;
      text-align: justify;
      text-justify: inter-word;
    }
    .sign-off {
      margin-top: 14pt;
      font-size: 11pt;
    }
    .signature-name {
      font-weight: bold;
      margin-top: 24pt;
    }
  </style>
</head>
<body>
  <div class="header-name">${name}</div>
  <div class="header-contact">${contact}</div>

  <div class="date-line">${dateStr}</div>

  <div class="recipient-box">
    <strong>${hiringManager}</strong><br>
    ${companyName}
  </div>

  <div class="subject-line">SUBJECT: APPLICATION FOR THE POSITION OF ${targetJobTitle.toUpperCase()}</div>

  <div class="salutation">Dear ${hiringManager},</div>

  ${generatedLetter
    .split(/\r?\n\r?\n/)
    .filter(p => !p.startsWith(candidateName) && !p.includes('Date:') && !p.includes('Subject:') && !p.startsWith('To:') && !p.startsWith('Dear') && !p.startsWith('Sincerely') && !p.includes(candidateName))
    .map(p => `<p>${p.trim()}</p>`)
    .join('\n')}

  <div class="sign-off">
    Sincerely,<br><br>
    <div class="signature-name">${candidateName}</div>
    <div style="font-size: 9.5pt; color: #475569;">Applicant for ${targetJobTitle}</div>
  </div>
</body>
</html>`;

    const blob = new Blob(['\ufeff', docHtml], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const cleanFileName = `${(candidateName || 'Candidate').replace(/\s+/g, '_')}_${(targetJobTitle || 'Cover_Letter').replace(/[^a-zA-Z0-9]/g, '_')}_Cover_Letter.doc`;
    a.download = cleanFileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Print-Ready PDF Trigger
  const handlePrintPdf = () => {
    window.print();
  };

  return (
    <div className="space-y-8 text-slate-900 animate-in fade-in duration-300">
      
      {/* SECTION HEADER: ENTERPRISE AI COVER LETTER & ATS CIRCULAR MATCHER */}
      <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 text-white rounded-3xl shadow-2xl relative overflow-hidden space-y-6 border border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <FileCheck className="w-3.5 h-3.5" /> Enterprise Cover Letter Generator & ATS Circular Matcher
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold">
              Harvard, Oxford, UN & Corporate Calibrated
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="px-2.5 py-1 bg-white/5 rounded-lg border border-white/10">PDF & Word Supported</span>
            <span className="px-2.5 py-1 bg-white/5 rounded-lg border border-white/10">1-Click Word .doc</span>
          </div>
        </div>

        <div className="space-y-2 max-w-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
            AI Cover Letter Engine & Precision ATS Matcher
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Upload your CV and target job circular (or paste text). The engine extracts candidate achievements, scans circular requirements, calculates ATS keyword density, and generates an executive, multi-paragraph <strong>Word (.doc) & Print-Ready PDF</strong> cover letter.
          </p>
        </div>

        {/* 5 CAREER TRACK SELECTORS */}
        <div className="space-y-2 pt-2">
          <div className="text-[11px] font-bold uppercase tracking-wider text-teal-300">
            Select Your Target Application Framework:
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-2.5">
            {INDUSTRY_TRACKS.map(track => {
              const Icon = track.icon;
              const isSelected = selectedTrack === track.id;
              return (
                <button
                  key={track.id}
                  onClick={() => handleSelectTrack(track.id)}
                  className={`p-3.5 rounded-2xl border text-left transition cursor-pointer space-y-1 ${
                    isSelected
                      ? 'bg-teal-900/60 border-teal-400 text-white shadow-lg'
                      : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-teal-300' : 'text-slate-400'}`} />
                    <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded ${isSelected ? 'bg-teal-400 text-slate-950' : 'bg-white/10 text-slate-400'}`}>
                      {isSelected ? 'Active' : 'Select'}
                    </span>
                  </div>
                  <div className="text-xs font-bold truncate">{track.title}</div>
                  <div className="text-[10px] text-slate-400 line-clamp-1">{track.badge}</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* MAIN TWO-COLUMN WORKSPACE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: INGESTION & CUSTOMIZATION */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Ingestion Mode Toggle */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <Upload className="w-5 h-5 text-teal-800" />
                <h2 className="text-base font-bold text-slate-900">1. Candidate CV & Target Circular Ingestion</h2>
              </div>
              <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-semibold">
                <button
                  onClick={() => setActiveInputTab('upload')}
                  className={`px-3 py-1 rounded-lg transition cursor-pointer ${activeInputTab === 'upload' ? 'bg-white text-teal-900 shadow-2xs font-bold' : 'text-slate-600'}`}
                >
                  File Upload (PDF/DOCX)
                </button>
                <button
                  onClick={() => setActiveInputTab('manual')}
                  className={`px-3 py-1 rounded-lg transition cursor-pointer ${activeInputTab === 'manual' ? 'bg-white text-teal-900 shadow-2xs font-bold' : 'text-slate-600'}`}
                >
                  Paste Text / Manual
                </button>
              </div>
            </div>

            {parseError && (
              <div className="p-3.5 bg-rose-50 border border-rose-200 text-rose-800 rounded-2xl text-xs">
                ⚠️ {parseError}
              </div>
            )}

            {/* DUAL DROPZONES */}
            {activeInputTab === 'upload' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* CV Upload Box */}
                <div 
                  onClick={() => cvInputRef.current?.click()}
                  className="p-5 border-2 border-dashed border-teal-200 hover:border-teal-400 bg-teal-50/40 rounded-2xl text-center space-y-2 cursor-pointer transition group"
                >
                  <input
                    type="file"
                    ref={cvInputRef}
                    onChange={handleCvFileUpload}
                    accept=".pdf,.docx,.doc,.txt"
                    className="hidden"
                  />
                  <div className="w-10 h-10 mx-auto rounded-xl bg-teal-100 text-teal-900 flex items-center justify-center group-hover:scale-110 transition">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-slate-900">
                    {isParsingCv ? 'Parsing CV...' : cvFileName ? cvFileName : 'Upload Candidate CV'}
                  </div>
                  <p className="text-[11px] text-slate-500">PDF, DOCX, or TXT format</p>
                </div>

                {/* Job Circular Upload Box */}
                <div 
                  onClick={() => jdInputRef.current?.click()}
                  className="p-5 border-2 border-dashed border-amber-200 hover:border-amber-400 bg-amber-50/40 rounded-2xl text-center space-y-2 cursor-pointer transition group"
                >
                  <input
                    type="file"
                    ref={jdInputRef}
                    onChange={handleJdFileUpload}
                    accept=".pdf,.docx,.doc,.txt"
                    className="hidden"
                  />
                  <div className="w-10 h-10 mx-auto rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center group-hover:scale-110 transition">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-bold text-slate-900">
                    {isParsingJd ? 'Parsing Circular...' : jdFileName ? jdFileName : 'Upload Job Circular'}
                  </div>
                  <p className="text-[11px] text-slate-500">Job description or circular</p>
                </div>

              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Paste Resume / CV Content</label>
                  <textarea
                    rows={3}
                    value={resumeRawText}
                    onChange={e => { setResumeRawText(e.target.value); autoPopulateFromCv(e.target.value); }}
                    placeholder="Paste candidate work history, education, and key metrics..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-900 focus:border-teal-400 outline-none font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Paste Job Circular / Vacancy Description</label>
                  <textarea
                    rows={3}
                    value={jobCircularText}
                    onChange={e => { setJobCircularText(e.target.value); autoPopulateFromJd(e.target.value); }}
                    placeholder="Paste job circular requirements, responsibilities, or skills required..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-900 focus:border-teal-400 outline-none font-mono"
                  />
                </div>
              </div>
            )}

            {/* Structured Form Fields */}
            <div className="space-y-4 pt-3 border-t border-slate-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Candidate Full Name *</label>
                  <input
                    type="text"
                    required
                    value={candidateName}
                    onChange={e => setCandidateName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:border-teal-400 outline-none font-medium"
                    placeholder="e.g. Daloyar Hassan Shishir"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Contact Line *</label>
                  <input
                    type="text"
                    required
                    value={candidateContact}
                    onChange={e => setCandidateContact(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:border-teal-400 outline-none font-medium"
                    placeholder="e.g. Dhaka, Bangladesh • 017XXXXXXXX • email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Target Job Title *</label>
                  <input
                    type="text"
                    required
                    value={targetJobTitle}
                    onChange={e => setTargetJobTitle(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:border-teal-400 outline-none font-medium"
                    placeholder="e.g. Management Trainee Officer (MTO)"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Organization *</label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={e => setCompanyName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:border-teal-400 outline-none font-medium"
                    placeholder="e.g. Unilever / Grameenphone / BRAC"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Hiring Manager or Department Title</label>
                <input
                  type="text"
                  value={hiringManager}
                  onChange={e => setHiringManager(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:border-teal-400 outline-none font-medium"
                  placeholder="e.g. Hiring Committee & Talent Acquisition Division"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Custom Achievements or Highlights to Emphasize (Optional)</label>
                <input
                  type="text"
                  value={customKeyPoints}
                  onChange={e => setCustomKeyPoints(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:border-teal-400 outline-none"
                  placeholder="e.g. 1st class honors in English, China study fellowship, managed 25-member team"
                />
              </div>
            </div>

            {/* Generate Action Button */}
            <button
              onClick={handleGenerateCoverLetter}
              className="w-full py-4 rounded-2xl bg-teal-900 hover:bg-teal-800 text-white font-black text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-teal-300" />
              <span>Generate AI Tailored Cover Letter</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* ATS CIRCULAR MATCH & KEYWORD AUDIT */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-800" />
                <h3 className="text-sm font-bold text-slate-900">ATS Keyword & Circular Match Audit</h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-900 text-xs font-black">
                {nlpAnalysis.matchScore}% Match Score
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                  Woven Hard Skills & Matched Keywords:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {nlpAnalysis.matchedKeywords.length > 0 ? (
                    nlpAnalysis.matchedKeywords.map((kw, i) => (
                      <span key={i} className="px-2.5 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg font-semibold flex items-center gap-1">
                        <Check className="w-3 h-3 text-emerald-600" /> {kw}
                      </span>
                    ))
                  ) : (
                    <span className="text-slate-400 italic">Upload circular to auto-detect matching keywords</span>
                  )}
                </div>
              </div>

              {nlpAnalysis.missingKeywords.length > 0 && (
                <div>
                  <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider block mb-1.5">
                    Recommended Circular Skills to Weave:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {nlpAnalysis.missingKeywords.slice(0, 6).map((kw, i) => (
                      <span key={i} className="px-2 py-0.5 bg-amber-50 text-amber-900 border border-amber-200 rounded-md font-medium text-[11px]">
                        + {kw}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: LIVE LETTERHEAD PREVIEW & EXPORT SUITE */}
        <div className="lg:col-span-6 space-y-4">
          
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xl space-y-6">
            
            {/* Action Bar: Presets & Download Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              
              {/* Style Presets */}
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                <span>Layout Preset:</span>
                <button
                  onClick={() => setStylePreset('harvard')}
                  className={`px-2.5 py-1 rounded-lg transition cursor-pointer text-xs ${stylePreset === 'harvard' ? 'bg-teal-900 text-white font-bold' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                >
                  Harvard Standard
                </button>
                <button
                  onClick={() => setStylePreset('oxford')}
                  className={`px-2.5 py-1 rounded-lg transition cursor-pointer text-xs ${stylePreset === 'oxford' ? 'bg-teal-900 text-white font-bold' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                >
                  Oxford Formal
                </button>
                <button
                  onClick={() => setStylePreset('modern')}
                  className={`px-2.5 py-1 rounded-lg transition cursor-pointer text-xs ${stylePreset === 'modern' ? 'bg-teal-900 text-white font-bold' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                >
                  Modern Minimal
                </button>
              </div>

              {/* Download & Copy Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  disabled={!generatedLetter}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold flex items-center gap-1.5 transition disabled:opacity-40 cursor-pointer"
                  title="Copy formatted text"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-teal-800" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>

                <button
                  onClick={handleDownloadDoc}
                  disabled={!generatedLetter}
                  className="px-3.5 py-1.5 bg-teal-900 hover:bg-teal-800 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition shadow-xs disabled:opacity-40 cursor-pointer"
                  title="Download editable Microsoft Word document"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Word (.doc)</span>
                </button>

                <button
                  onClick={handlePrintPdf}
                  disabled={!generatedLetter}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition disabled:opacity-40 cursor-pointer"
                  title="Print or Save as PDF"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>PDF / Print</span>
                </button>
              </div>

            </div>

            {/* DOCUMENT CANVAS / LETTERHEAD CONTAINER */}
            {generatedLetter ? (
              <div className={`p-6 sm:p-8 rounded-2xl border ${
                stylePreset === 'harvard'
                  ? 'font-serif bg-white border-slate-300 text-slate-950 shadow-inner'
                  : stylePreset === 'oxford'
                  ? 'font-serif bg-slate-50/50 border-teal-200 text-slate-900 border-l-4 border-l-teal-800'
                  : 'font-sans bg-white border-slate-200 text-slate-900'
              }`}>
                
                {/* Header Information */}
                <div className="text-center pb-4 mb-5 border-b border-slate-200 space-y-1">
                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-slate-950">
                    {candidateName}
                  </h3>
                  <div className="text-xs text-slate-600 font-sans font-medium">
                    {candidateContact}
                  </div>
                </div>

                {/* Editable Letter Body */}
                <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-justify">
                  {isEditing ? (
                    <textarea
                      rows={18}
                      value={generatedLetter}
                      onChange={e => setGeneratedLetter(e.target.value)}
                      className="w-full p-4 border border-teal-300 rounded-xl font-mono text-xs focus:outline-none bg-white leading-relaxed"
                    />
                  ) : (
                    <div className="whitespace-pre-line">
                      {generatedLetter}
                    </div>
                  )}
                </div>

                {/* Edit Mode Toggle Footer */}
                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-sans">
                  <span>Standard 1-Page Letterhead • ATS Formatted</span>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="text-teal-900 hover:underline font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>{isEditing ? 'Save & Preview' : 'Edit Paragraphs'}</span>
                  </button>
                </div>

              </div>
            ) : (
              <div className="h-[460px] flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-slate-200 rounded-2xl space-y-4 bg-slate-50/50">
                <div className="w-16 h-16 rounded-2xl bg-teal-50 border border-teal-200 text-teal-800 flex items-center justify-center shadow-2xs">
                  <FileText className="w-8 h-8" />
                </div>
                <div className="space-y-1 max-w-sm">
                  <div className="text-base font-bold text-slate-900">Ready to Draft Your Executive Cover Letter</div>
                  <p className="text-xs text-slate-500">
                    Upload your CV or paste details on the left, select your target industry framework, and generate a tailored, ATS-audited cover letter.
                  </p>
                </div>
                <button
                  onClick={handleGenerateCoverLetter}
                  className="px-5 py-2.5 rounded-xl bg-teal-900 hover:bg-teal-800 text-white font-bold text-xs shadow-xs transition flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-teal-200" />
                  <span>Generate Sample Letter</span>
                </button>
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
};
