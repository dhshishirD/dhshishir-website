import React, { useState, useMemo } from 'react';
import { 
  AlertTriangle, RefreshCw, FileText, Sparkles, ArrowRight,
  Search, ShieldCheck, ListChecks, Zap, Copy, Check
} from 'lucide-react';
import confetti from 'canvas-confetti';

// Comprehensive Action Verbs Dictionary
const POWER_ACTION_VERBS = [
  'accelerated', 'achieved', 'administered', 'advised', 'analyzed', 'architected',
  'automated', 'budgeted', 'built', 'championed', 'collaborated', 'configured',
  'consolidated', 'constructed', 'coordinated', 'created', 'customized', 'decreased',
  'delivered', 'deployed', 'designed', 'developed', 'devised', 'directed',
  'doubled', 'drafted', 'engineered', 'enhanced', 'established', 'evaluated',
  'executed', 'expanded', 'expedited', 'facilitated', 'formulated', 'generated',
  'guided', 'headed', 'identified', 'implemented', 'improved', 'increased',
  'initiated', 'innovated', 'inspected', 'instituted', 'integrated', 'invented',
  'launched', 'led', 'managed', 'maximized', 'mentored', 'minimized',
  'mobilized', 'modeled', 'modernized', 'negotiated', 'optimized', 'orchestrated',
  'organized', 'overhauled', 'oversaw', 'partnered', 'pioneered', 'planned',
  'programmed', 'promoted', 'proposed', 'published', 're-engineered', 'reduced',
  'reformed', 'remodeled', 'resolved', 'restructured', 'revamped', 'scaled',
  'secured', 'simplified', 'spearheaded', 'standardized', 'streamlined', 'strengthened',
  'supervised', 'surpassed', 'synthesized', 'systematized', 'trained', 'transformed',
  'upgraded', 'validated', 'won', 'yielded'
];

// Common Weak / Passive Words
const WEAK_WORDS = [
  'responsible for', 'duties included', 'worked on', 'helped with', 'assisted in',
  'tried to', 'handled', 'did', 'various', 'etc', 'hardworking', 'team player',
  'detail-oriented', 'go-getter', 'results-driven', 'self-starter'
];

// Standard Essential Resume Sections
const STANDARD_SECTIONS = [
  { name: 'Contact Information', keywords: ['email', 'phone', 'linkedin', 'github', 'mobile'] },
  { name: 'Professional Summary', keywords: ['summary', 'profile', 'about me', 'objective', 'overview'] },
  { name: 'Work Experience', keywords: ['experience', 'employment', 'work history', 'career', 'professional experience'] },
  { name: 'Education', keywords: ['education', 'academic', 'degree', 'university', 'bachelor', 'master'] },
  { name: 'Skills & Proficiencies', keywords: ['skills', 'technologies', 'competencies', 'proficiencies', 'expertise'] }
];

const SAMPLE_RESUME = `DALOYAR HASSAN
Dhaka, Bangladesh | +8801700000000 | daloyar@example.com | linkedin.com/in/dhshishir

PROFESSIONAL SUMMARY
Strategic Policy Analyst and International Relations specialist with 5+ years of experience conducting quantitative research, bilateral policy modeling, and multilateral intelligence synthesis. Proven track record managing research projects, authoring published policy dossiers, and training 500+ professionals in academic and diplomatic communications.

PROFESSIONAL EXPERIENCE
Senior Research Analyst | South Asian Policy Center | 2023 - Present
- Spearheaded the development of 40+ strategic intelligence dossiers on Bay of Bengal maritime security and regional trade corridors, increasing publication readership by 140%.
- Orchestrated trilateral policy roundtables with 25+ think tanks (BIISS, CSIS, Chatham House), synthesizing key takeaways for ministerial stakeholders.
- Automated data collection workflows using Python and Excel, reducing weekly intelligence aggregation latency by 35%.

Policy Fellow | International Governance Initiative | 2021 - 2023
- Conducted comparative trade impact assessments on Bangladesh post-2026 LDC graduation, analyzing tariff implications across $45B+ garment export portfolios.
- Authored 12 briefing memos presented to parliamentary delegations and foreign trade emissaries.
- Mentored a junior research cohort of 15 analysts in quantitative methodology and structured writing.

EDUCATION
Master of Social Sciences in International Relations | University of Dhaka | CGPA: 3.85 / 4.00
Bachelor of Social Sciences in International Relations | University of Dhaka | CGPA: 3.80 / 4.00

SKILLS & EXPERTISE
Technical: Python, R, Statistical Data Modeling, Advanced Excel, Tableau, GIS Spatial Mapping
Policy & Research: Geopolitical Risk Forecasting, Trade Policy Analysis, UNCLOS Maritime Law, Bilateral Negotiation
Languages: English (Professional Native Fluency, Band 8.5), Bengali (Native)`;

const SAMPLE_JOB_DESC = `Job Title: Senior Strategic Policy Specialist
Organization: International Development & Trade Advisory Group
Location: Dhaka, Bangladesh

Requirements & Key Responsibilities:
- Conduct quantitative research, trade policy analysis, and geopolitical risk forecasting across South Asia and the Bay of Bengal.
- Spearhead strategic briefing memos, policy dossiers, and technical publications for executive government stakeholders.
- Advanced proficiency in statistical data modeling using Python, Excel, Tableau, or GIS spatial mapping.
- Lead stakeholder roundtables, bilateral negotiations, and manage collaborative research initiatives with global think tanks.
- Strong educational background in International Relations, Economics, Public Policy, or related disciplines.
- Exceptional English communication, editorial writing, and presentation capabilities.`;

interface AuditQuestion {
  id: string;
  question: string;
  explanation: string;
  category: string;
}

const CHECKLIST_QUESTIONS: AuditQuestion[] = [
  {
    id: 'single_column',
    question: 'Is your CV in a single-column or clean two-column layout without nested text-boxes?',
    explanation: 'Complex floating text boxes, tables, and graphics confuse ATS parsers.',
    category: 'Layout'
  },
  {
    id: 'standard_headings',
    question: 'Do you use standard section headings ("Work Experience", "Education", "Skills")?',
    explanation: 'Unusual creative titles like "Where I have been" cause parsers to misclassify your experience.',
    category: 'Structure'
  },
  {
    id: 'keyword_match',
    question: 'Have you integrated specific skill keywords directly from the target job circular?',
    explanation: 'ATS ranking algorithms score resumes based on exact keyword occurrence rates.',
    category: 'Keywords'
  },
  {
    id: 'measurable_metrics',
    question: 'Do your bullet points include measurable achievements (numbers, % growth, Tk/USD impact)?',
    explanation: 'Metrics like "Increased readership by 140%" dramatically outperform generic task lists.',
    category: 'Impact'
  },
  {
    id: 'clean_contact',
    question: 'Are your phone number, professional email, and LinkedIn profile cleanly placed at the top?',
    explanation: 'ATS needs to instantly extract candidate contact metadata without header/footer traps.',
    category: 'Contact'
  },
  {
    id: 'file_format',
    question: 'Is your primary CV saved in selectable-text .PDF or standard .DOCX (not a scanned image)?',
    explanation: 'Scanned image PDFs are 100% unreadable by ATS scanners.',
    category: 'Format'
  }
];

export const AtsResumeChecker: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'live-parser' | 'checklist'>('live-parser');
  
  // Live Parser State
  const [resumeText, setResumeText] = useState('');
  const [jobDescText, setJobDescText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasParsed, setHasParsed] = useState(false);
  const [copiedReport, setCopiedReport] = useState(false);

  // Checklist State
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [showChecklistResult, setShowChecklistResult] = useState(false);

  // Live Analysis Computation
  const analysisResults = useMemo(() => {
    if (!resumeText.trim()) return null;

    const resumeLower = resumeText.toLowerCase();
    const resumeWords = resumeLower.match(/\b[a-z0-9+#.-]+\b/g) || [];
    const resumeWordsSet = new Set(resumeWords);

    // 1. Extract Keywords from Job Description
    let matchedKeywords: string[] = [];
    let missingKeywords: string[] = [];
    let keywordMatchRate = 100;

    if (jobDescText.trim()) {
      const jdLower = jobDescText.toLowerCase();
      // Filter out short stop-words
      const stopWords = new Set(['and', 'the', 'for', 'with', 'that', 'this', 'from', 'have', 'are', 'was', 'were', 'will', 'been', 'about', 'into', 'over', 'more', 'such', 'across', 'using', 'your', 'with', 'must', 'should', 'their', 'work', 'role', 'team', 'year', 'years', 'high', 'strong', 'key']);
      const jdWords = (jdLower.match(/\b[a-z0-9+#.-]{3,}\b/g) || [])
        .filter(w => !stopWords.has(w) && isNaN(Number(w)));

      // Get frequency map
      const freq: Record<string, number> = {};
      jdWords.forEach(w => { freq[w] = (freq[w] || 0) + 1; });

      // Sort top 20 keywords by frequency
      const topJdKeywords = Object.keys(freq)
        .sort((a, b) => freq[b] - freq[a])
        .slice(0, 18);

      topJdKeywords.forEach(kw => {
        if (resumeWordsSet.has(kw) || resumeLower.includes(kw)) {
          matchedKeywords.push(kw);
        } else {
          missingKeywords.push(kw);
        }
      });

      if (topJdKeywords.length > 0) {
        keywordMatchRate = Math.round((matchedKeywords.length / topJdKeywords.length) * 100);
      }
    }

    // 2. Action Verbs Detection
    const foundActionVerbs = POWER_ACTION_VERBS.filter(v => resumeWordsSet.has(v));
    const actionVerbScore = Math.min(100, Math.round((foundActionVerbs.length / 8) * 100));

    // 3. Quantifiable Metrics (Numbers, %, $, Tk)
    const metricMatches = resumeText.match(/\b\d+(?:\.\d+)?%|\$\d+(?:,\d{3})*(?:\.\d+)?|tk\.?\s*\d+|\b\d{2,}\b/gi) || [];
    const metricsScore = Math.min(100, Math.round((metricMatches.length / 5) * 100));

    // 4. Section Structure Check
    const foundSections: string[] = [];
    const missingSections: string[] = [];
    STANDARD_SECTIONS.forEach(sec => {
      const hasSec = sec.keywords.some(k => resumeLower.includes(k));
      if (hasSec) foundSections.push(sec.name);
      else missingSections.push(sec.name);
    });
    const structureScore = Math.round((foundSections.length / STANDARD_SECTIONS.length) * 100);

    // 5. Weak Words / Clichés Check
    const foundWeakWords = WEAK_WORDS.filter(w => resumeLower.includes(w));

    // 6. Overall Weighted ATS Score (0 - 100)
    let overallScore = 0;
    if (jobDescText.trim()) {
      overallScore = Math.round(
        (keywordMatchRate * 0.40) +
        (actionVerbScore * 0.20) +
        (metricsScore * 0.20) +
        (structureScore * 0.20)
      );
    } else {
      overallScore = Math.round(
        (actionVerbScore * 0.35) +
        (metricsScore * 0.35) +
        (structureScore * 0.30)
      );
    }

    return {
      overallScore: Math.min(100, Math.max(10, overallScore)),
      keywordMatchRate,
      matchedKeywords,
      missingKeywords,
      foundActionVerbs,
      metricMatches,
      foundSections,
      missingSections,
      foundWeakWords,
      wordCount: resumeWords.length
    };
  }, [resumeText, jobDescText]);

  const handleRunParser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeText.trim()) return;
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setHasParsed(true);
      if (analysisResults && analysisResults.overallScore >= 75) {
        confetti({ particleCount: 70, spread: 70, origin: { y: 0.6 } });
      }
    }, 400);
  };

  const handleLoadSample = () => {
    setResumeText(SAMPLE_RESUME);
    setJobDescText(SAMPLE_JOB_DESC);
    setHasParsed(false);
  };

  const handleCopyReport = () => {
    if (!analysisResults) return;
    const text = `ATS RESUME AUDIT REPORT (dhshishir.com/tools/ats-checker)
Overall ATS Match Score: ${analysisResults.overallScore}/100
Word Count: ${analysisResults.wordCount} words
Detected Power Verbs: ${analysisResults.foundActionVerbs.length} (${analysisResults.foundActionVerbs.slice(0, 5).join(', ')}...)
Quantifiable Metrics Found: ${analysisResults.metricMatches.length}
Matched Target Keywords: ${analysisResults.matchedKeywords.join(', ') || 'N/A'}
Missing Target Keywords: ${analysisResults.missingKeywords.join(', ') || 'None'}
Weak Words Flagged: ${analysisResults.foundWeakWords.join(', ') || 'None'}
Audit powered by Daloyar Hassan Shishir Career Suite.`;

    navigator.clipboard.writeText(text);
    setCopiedReport(true);
    setTimeout(() => setCopiedReport(false), 2500);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl text-slate-900">
      
      {/* Tool Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-teal-50 text-teal-800 rounded-2xl border border-teal-200">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-black text-slate-900 flex items-center gap-2">
              ATS Resume Readiness & Keyword Matcher
              <span className="text-xs bg-teal-50 text-teal-800 border border-teal-200 px-2 py-0.5 rounded-full font-bold">PRO ENGINE</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Live text parser evaluating keyword density, quantifiable metrics, power action verbs, and hiring filter compliance.
            </p>
          </div>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200">
          <button
            type="button"
            onClick={() => setActiveMode('live-parser')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeMode === 'live-parser'
                ? 'bg-teal-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Live Text & Job Matcher</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveMode('checklist')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
              activeMode === 'checklist'
                ? 'bg-teal-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ListChecks className="w-3.5 h-3.5" />
            <span>10-Point Checklist</span>
          </button>
        </div>
      </div>

      {/* MODE 1: LIVE RESUME PARSER */}
      {activeMode === 'live-parser' && (
        <div className="space-y-6">
          <form onSubmit={handleRunParser} className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Step 1: Paste Resume & Target Job Circular
              </span>
              <button
                type="button"
                onClick={handleLoadSample}
                className="text-xs text-teal-800 hover:text-teal-950 font-bold underline flex items-center gap-1 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Load Model Sample</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">
                  Your Resume / CV Content *
                </label>
                <textarea
                  required
                  rows={8}
                  placeholder="Paste your resume text here (Summary, Experience, Education, Skills)..."
                  value={resumeText}
                  onChange={(e) => { setResumeText(e.target.value); setHasParsed(false); }}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700 font-mono resize-none leading-relaxed"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">
                  Target Job Circular / Description <span className="text-slate-500 font-normal">(Optional for Keyword Matching)</span>
                </label>
                <textarea
                  rows={8}
                  placeholder="Paste the target job circular requirements and responsibilities to calculate match rate..."
                  value={jobDescText}
                  onChange={(e) => { setJobDescText(e.target.value); setHasParsed(false); }}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700 font-mono resize-none leading-relaxed"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-500">
                {resumeText.trim() ? `${resumeText.trim().split(/\s+/).length} words entered` : 'Paste text above to begin'}
              </span>

              <button
                type="submit"
                disabled={!resumeText.trim() || isAnalyzing}
                className="px-6 py-3 bg-teal-900 hover:bg-teal-800 disabled:opacity-50 text-white font-bold text-xs sm:text-sm rounded-xl transition flex items-center gap-2 cursor-pointer shadow-xs"
              >
                {isAnalyzing ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                <span>{isAnalyzing ? 'Analyzing ATS Vectors...' : 'Audit Resume & Match Keywords'}</span>
              </button>
            </div>
          </form>

          {/* ANALYSIS RESULTS DASHBOARD */}
          {hasParsed && analysisResults && (
            <div className="mt-8 space-y-6 animate-fade-in pt-6 border-t border-slate-200">
              
              {/* Top Score Banner */}
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
                <div className="flex items-center gap-5">
                  <div className={`w-20 h-20 rounded-2xl flex flex-col items-center justify-center font-black text-2xl border shadow-inner ${
                    analysisResults.overallScore >= 80
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                      : analysisResults.overallScore >= 60
                      ? 'bg-amber-50 text-amber-800 border-amber-200'
                      : 'bg-rose-50 text-rose-800 border-rose-200'
                  }`}>
                    <span>{analysisResults.overallScore}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">/ 100</span>
                  </div>

                  <div>
                    <h4 className="text-lg sm:text-xl font-extrabold text-slate-900">
                      {analysisResults.overallScore >= 80 ? '🟢 Strong ATS Compatibility' : analysisResults.overallScore >= 60 ? '🟡 Moderate Match (Action Required)' : '🔴 High Risk of ATS Filtration'}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 max-w-lg leading-relaxed">
                      {analysisResults.overallScore >= 80
                        ? 'Your resume incorporates strong action verbs, quantifiable impact metrics, and structural sections aligned with automated corporate hiring filters.'
                        : 'Your resume needs specific keyword additions, higher metric density, and stronger action verbs to pass top-tier recruitment thresholds.'}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyReport}
                  className="px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-bold rounded-xl transition flex items-center gap-1.5 shrink-0 cursor-pointer shadow-xs"
                >
                  {copiedReport ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedReport ? 'Report Copied!' : 'Copy Summary Report'}</span>
                </button>
              </div>

              {/* 4 Diagnostic Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* 1. Keyword Overlap */}
                <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Target Keyword Match</div>
                  <div className="text-2xl font-black text-teal-900">{analysisResults.keywordMatchRate}%</div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    {analysisResults.matchedKeywords.length} matched / {analysisResults.missingKeywords.length} missing
                  </p>
                </div>

                {/* 2. Action Verbs */}
                <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Power Action Verbs</div>
                  <div className="text-2xl font-black text-teal-900">{analysisResults.foundActionVerbs.length} Verbs</div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    {analysisResults.foundActionVerbs.length >= 6 ? '✓ Excellent leadership density' : 'Target at least 6+ verbs'}
                  </p>
                </div>

                {/* 3. Quantifiable Metrics */}
                <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Measurable Metrics</div>
                  <div className="text-2xl font-black text-teal-900">{analysisResults.metricMatches.length} Numbers/Tk</div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    {analysisResults.metricMatches.length >= 3 ? '✓ Strong quantifiable proof' : 'Add % growth & Tk/USD results'}
                  </p>
                </div>

                {/* 4. Section Structure */}
                <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Standard Sections</div>
                  <div className="text-2xl font-black text-teal-900">{analysisResults.foundSections.length} / 5 Found</div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    {analysisResults.missingSections.length === 0 ? '✓ 100% Core sections complete' : `Missing: ${analysisResults.missingSections.join(', ')}`}
                  </p>
                </div>
              </div>

              {/* Keywords Breakdown (Matched vs Missing) */}
              {jobDescText.trim() && (
                <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3 shadow-xs">
                  <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <Search className="w-3.5 h-3.5 text-teal-800" /> Target Job Keyword Breakdown
                  </h5>

                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-xs font-bold text-emerald-800 mr-1">Matched in Resume:</span>
                      {analysisResults.matchedKeywords.length > 0 ? (
                        analysisResults.matchedKeywords.map((kw, i) => (
                          <span key={i} className="text-xs bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded-lg font-medium">
                            ✓ {kw}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-slate-400 italic">No direct keyword overlap found</span>
                      )}
                    </div>

                    {analysisResults.missingKeywords.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5 pt-2">
                        <span className="text-xs font-bold text-rose-800 mr-1">Missing from Resume:</span>
                        {analysisResults.missingKeywords.map((kw, i) => (
                          <span key={i} className="text-xs bg-rose-50 text-rose-800 border border-rose-200 px-2.5 py-0.5 rounded-lg font-medium">
                            + {kw}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Detected Action Verbs & Weak Words */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                  <h5 className="text-xs font-bold text-teal-900 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-teal-800" /> Detected Power Action Verbs ({analysisResults.foundActionVerbs.length})
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {analysisResults.foundActionVerbs.length > 0 ? (
                      analysisResults.foundActionVerbs.map((v, i) => (
                        <span key={i} className="text-xs bg-teal-50 text-teal-900 border border-teal-200 px-2.5 py-0.5 rounded-lg font-medium">
                          {v}
                        </span>
                      ))
                    ) : (
                      <p className="text-xs text-slate-500 italic">No strong action verbs identified. Replace passive phrasing with verbs like "Spearheaded", "Optimized", "Architected".</p>
                    )}
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
                  <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-amber-600" /> Weak Clichés & Filler Words
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {analysisResults.foundWeakWords.length > 0 ? (
                      analysisResults.foundWeakWords.map((w, i) => (
                        <span key={i} className="text-xs bg-amber-50 text-amber-900 border border-amber-200 px-2.5 py-0.5 rounded-lg font-medium">
                          ⚠️ "{w}"
                        </span>
                      ))
                    ) : (
                      <p className="text-xs text-emerald-700 font-medium">✓ Clean resume! No common passive clichés detected.</p>
                    )}
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>
      )}

      {/* MODE 2: 10-POINT CHECKLIST AUDIT */}
      {activeMode === 'checklist' && (
        <div className="space-y-6">
          {!showChecklistResult ? (
            <div className="space-y-4">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Audit your layout and formatting compliance
              </div>

              {CHECKLIST_QUESTIONS.map((q) => (
                <div key={q.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 hover:border-teal-200 transition">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600">
                          {q.category}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">{q.question}</h4>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">{q.explanation}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => setAnswers(prev => ({ ...prev, [q.id]: true }))}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border ${
                          answers[q.id] === true
                            ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        ✓ Yes
                      </button>
                      <button
                        type="button"
                        onClick={() => setAnswers(prev => ({ ...prev, [q.id]: false }))}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border ${
                          answers[q.id] === false
                            ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        ✗ No
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={() => setShowChecklistResult(true)}
                  disabled={Object.keys(answers).length < CHECKLIST_QUESTIONS.length}
                  className="px-6 py-3 bg-teal-900 hover:bg-teal-800 disabled:opacity-50 text-white font-bold text-xs sm:text-sm rounded-xl transition flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Calculate Readiness Score</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {(() => {
                const yesCount = Object.values(answers).filter(Boolean).length;
                const score = Math.round((yesCount / CHECKLIST_QUESTIONS.length) * 100);
                return (
                  <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 text-center space-y-4">
                    <div className="text-4xl font-black text-teal-900">{score}%</div>
                    <h4 className="text-lg font-extrabold text-slate-900">
                      {score >= 80 ? '🟢 Excellent Structural Compliance' : '🟡 Recommended Layout Fixes Needed'}
                    </h4>
                    <p className="text-xs text-slate-600 max-w-md mx-auto">
                      You passed {yesCount} out of {CHECKLIST_QUESTIONS.length} critical automated ATS parser criteria.
                    </p>
                    <button
                      type="button"
                      onClick={() => setShowChecklistResult(false)}
                      className="px-4 py-2 bg-white border border-slate-200 text-slate-700 text-xs font-bold rounded-xl hover:bg-slate-100 transition cursor-pointer"
                    >
                      Reset Checklist
                    </button>
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      )}

    </div>
  );
};

export default AtsResumeChecker;
