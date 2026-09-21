import React, { useState } from 'react';
import { BookOpen, CheckCircle, Sparkles, BarChart3, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

// Academic Word List (AWL) and C1/C2 Academic Vocabulary
const ACADEMIC_VOCABULARY = [
  'accommodate', 'accumulate', 'adjacent', 'advocate', 'aggregate', 'allocate', 'ambiguity', 'analogy',
  'anticipate', 'arbitrary', 'articulates', 'attain', 'attribute', 'augment', 'autonomous', 'coherent',
  'coincide', 'commensurate', 'compatible', 'compensate', 'comprehensive', 'conceive', 'concomitant',
  'concurrent', 'confine', 'conform', 'conjecture', 'constitute', 'constrain', 'contemporary', 'contradict',
  'crucial', 'culminate', 'delineate', 'demonstrate', 'depict', 'derive', 'deteriorate', 'detrimental',
  'deviate', 'diminish', 'discrepancy', 'discrete', 'discriminate', 'disperse', 'disproportionate', 'disseminate',
  'divergent', 'diversify', 'elucidate', 'empirical', 'endow', 'engender', 'enhance', 'entity',
  'equitable', 'eradicate', 'erroneous', 'escalate', 'exemplify', 'exacerbate', 'exponential', 'facilitate',
  'feasible', 'fluctuate', 'foster', 'framework', 'fundamental', 'hierarchy', 'homogeneous', 'hypothesis',
  'imperative', 'implicit', 'impose', 'incentive', 'incline', 'incorporate', 'indispensable', 'inherent',
  'inhibit', 'initiate', 'innovative', 'inquire', 'integral', 'integrate', 'intrinsic', 'invariable',
  'invoke', 'irreversible', 'juxtaposition', 'manifest', 'marginal', 'mediocre', 'mitigate', 'monopolize',
  'multifaceted', 'necessitate', 'negligible', 'notwithstanding', 'nuance', 'obsolete', 'offset', 'optimal',
  'paradigm', 'paramount', 'perceive', 'pervasive', 'plausible', 'postulate', 'pragmatic', 'precedent',
  'predominant', 'preliminary', 'prevalent', 'profound', 'proliferate', 'propensity', 'prospective', 'qualitative',
  'quantitative', 'radical', 'rationale', 'reciprocal', 'refine', 'reinforce', 'reluctance', 'repertoire',
  'salient', 'scrutinize', 'sequential', 'simultaneous', 'sophisticated', 'stimulate', 'subsequent', 'substantial',
  'substantiate', 'supplement', 'surpass', 'susceptible', 'sustainable', 'tangible', 'tentative', 'terminate',
  'threshold', 'transcend', 'transform', 'ubiquitous', 'underlying', 'undermine', 'unequivocal', 'unprecedented',
  'utilize', 'validate', 'viable', 'vindicate', 'vulnerable', 'yield'
];

// 6 Functional Categories of Cohesive Transitions
const COHESIVE_DEVICES = {
  addition: ['furthermore', 'moreover', 'in addition', 'additionally', 'not only that', 'besides', 'along with'],
  contrast: ['however', 'nevertheless', 'nonetheless', 'on the other hand', 'in contrast', 'conversely', 'despite this', 'whereas', 'while', 'alternatively'],
  cause_effect: ['consequently', 'therefore', 'as a result', 'thus', 'hence', 'accordingly', 'leading to', 'owing to', 'due to'],
  exemplification: ['for instance', 'for example', 'to illustrate', 'such as', 'a case in point is', 'notably', 'in particular'],
  sequencing: ['firstly', 'secondly', 'subsequently', 'finally', 'initially', 'to begin with', 'in the first place'],
  summary: ['in conclusion', 'to summarize', 'overall', 'to conclude', 'all things considered', 'in summary', 'in essence']
};

// Common informal / weak words with high-band academic alternatives
const WEAK_WORDS_MAP: { [key: string]: string[] } = {
  'good': ['beneficial', 'advantageous', 'meritorious', 'favorable', 'constructive'],
  'bad': ['detrimental', 'adverse', 'deleterious', 'harmful', 'counterproductive'],
  'big': ['substantial', 'considerable', 'monumental', 'extensive', 'prominent'],
  'a lot of': ['a multitude of', 'an abundance of', 'numerous', 'copious', 'substantial numbers of'],
  'get': ['acquire', 'obtain', 'attain', 'derive', 'procure'],
  'show': ['demonstrate', 'elucidate', 'exemplify', 'illustrate', 'manifest'],
  'thing': ['aspect', 'factor', 'phenomenon', 'element', 'consideration'],
  'important': ['paramount', 'pivotal', 'indispensable', 'vital', 'imperative'],
  'very': ['exceptionally', 'exceedingly', 'remarkably', 'profoundly', 'considerably']
};

interface SubScore {
  score: number;
  label: string;
  feedback: string;
  status: 'good' | 'warning' | 'danger';
}

export const IeltsWritingAnalyzer: React.FC = () => {
  const [essay, setEssay] = useState('');
  const [prompt, setPrompt] = useState('');
  const [analyzed, setAnalyzed] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'lexical' | 'cohesion' | 'checklist'>('overview');
  const [copied, setCopied] = useState(false);

  // Raw metrics
  const words = essay.trim() ? essay.trim().split(/\s+/).length : 0;
  const rawParagraphs = essay.trim() ? essay.split(/\n\s*\n/).filter(p => p.trim().length > 0) : [];
  const paragraphCount = rawParagraphs.length;
  const sentences = essay.trim() ? essay.split(/[.!?]+/).filter(s => s.trim().length > 0) : [];
  const sentenceCount = sentences.length;
  const avgSentenceLength = sentenceCount > 0 ? (words / sentenceCount).toFixed(1) : '0';

  // Academic words found
  const lowerEssay = essay.toLowerCase();
  const detectedAcademicWords = ACADEMIC_VOCABULARY.filter(w => new RegExp(`\\b${w}\\b`, 'i').test(lowerEssay));
  
  // Cohesive devices analysis
  const detectedCohesion: { category: string; word: string }[] = [];
  const categoryCounts: { [cat: string]: number } = {};
  
  Object.entries(COHESIVE_DEVICES).forEach(([category, wordsList]) => {
    categoryCounts[category] = 0;
    wordsList.forEach(w => {
      if (new RegExp(`\\b${w}\\b`, 'i').test(lowerEssay)) {
        detectedCohesion.push({ category, word: w });
        categoryCounts[category]++;
      }
    });
  });

  // Weak words detected
  const detectedWeakWords: { word: string; suggestions: string[]; count: number }[] = [];
  Object.entries(WEAK_WORDS_MAP).forEach(([weak, suggestions]) => {
    const match = lowerEssay.match(new RegExp(`\\b${weak}\\b`, 'gi'));
    if (match && match.length > 0) {
      detectedWeakWords.push({ word: weak, suggestions, count: match.length });
    }
  });

  // Complex sentence structures detection
  const complexMarkers = ['although', 'even though', 'while', 'whereas', 'because', 'since', 'unless', 'provided that', 'if', 'which', 'who', 'whom', 'whose', 'in order that', 'despite', 'in spite of'];
  const complexSentenceCount = sentences.filter(s => {
    const ls = s.toLowerCase();
    return complexMarkers.some(m => new RegExp(`\\b${m}\\b`, 'i').test(ls));
  }).length;
  const complexRatio = sentenceCount > 0 ? Math.round((complexSentenceCount / sentenceCount) * 100) : 0;

  // 4-Pillar Sub-score calculation
  const calculateRubric = (): { tr: SubScore; cc: SubScore; lr: SubScore; gra: SubScore; overall: number } => {
    // 1. Task Response
    let trScore = 5.0;
    let trFeedback = '';
    let trStatus: 'good' | 'warning' | 'danger' = 'warning';
    if (words < 200) {
      trScore = 4.5;
      trFeedback = 'Severe penalty for word count under 200 words.';
      trStatus = 'danger';
    } else if (words < 250) {
      trScore = 5.5;
      trFeedback = 'Under 250-word minimum threshold (typically capped at Band 5.5/6.0).';
      trStatus = 'warning';
    } else if (words >= 250 && words <= 360) {
      trScore = paragraphCount >= 4 ? 7.5 : 6.5;
      trFeedback = paragraphCount >= 4 ? 'Optimal word count (250-360) and standard 4-5 paragraph structure.' : 'Good word count, but paragraph structure needs development.';
      trStatus = paragraphCount >= 4 ? 'good' : 'warning';
    } else {
      trScore = 7.0;
      trFeedback = 'Lengthy response (>360 words). Ensure time was not wasted and ideas remain focused.';
      trStatus = 'good';
    }

    // 2. Coherence & Cohesion
    let ccScore = 5.0;
    let ccFeedback = '';
    let ccStatus: 'good' | 'warning' | 'danger' = 'warning';
    const categoriesUsed = Object.values(categoryCounts).filter(c => c > 0).length;
    if (paragraphCount < 3) {
      ccScore = 5.0;
      ccFeedback = 'Insufficient paragraph division; lacks clear progression.';
      ccStatus = 'danger';
    } else if (detectedCohesion.length >= 6 && categoriesUsed >= 4 && (paragraphCount === 4 || paragraphCount === 5)) {
      ccScore = 8.0;
      ccFeedback = `Varied cohesive devices across ${categoriesUsed} categories with clear 4-5 paragraph layout.`;
      ccStatus = 'good';
    } else if (detectedCohesion.length >= 4 && (paragraphCount >= 3)) {
      ccScore = 6.5;
      ccFeedback = 'Reasonable flow; expand transition diversity (add contrast & consequence transitions).';
      ccStatus = 'warning';
    } else {
      ccScore = 5.5;
      ccFeedback = 'Over-relying on basic transitions or missing logical connective tissue between arguments.';
      ccStatus = 'warning';
    }

    // 3. Lexical Resource
    let lrScore = 5.0;
    let lrFeedback = '';
    let lrStatus: 'good' | 'warning' | 'danger' = 'warning';
    const awlCount = detectedAcademicWords.length;
    if (awlCount >= 10 && detectedWeakWords.length <= 2) {
      lrScore = 8.0;
      lrFeedback = `Rich academic vocabulary with ${awlCount} high-band AWL terms detected.`;
      lrStatus = 'good';
    } else if (awlCount >= 5) {
      lrScore = 7.0;
      lrFeedback = `${awlCount} academic words identified. Replace remaining generic words with academic synonyms.`;
      lrStatus = 'good';
    } else if (awlCount >= 2) {
      lrScore = 6.0;
      lrFeedback = 'Adequate everyday vocabulary; upgrade colloquial phrasing to CEFR C1/C2 terms.';
      lrStatus = 'warning';
    } else {
      lrScore = 5.0;
      lrFeedback = 'Limited formal academic register. Incorporate more analytical vocabulary.';
      lrStatus = 'danger';
    }

    // 4. Grammatical Range & Accuracy
    let graScore = 5.5;
    let graFeedback = '';
    let graStatus: 'good' | 'warning' | 'danger' = 'warning';
    const avgLen = parseFloat(avgSentenceLength);
    if (complexRatio >= 45 && avgLen >= 14 && avgLen <= 26) {
      graScore = 8.0;
      graFeedback = `Excellent syntactic variety: ${complexRatio}% complex/compound sentences (Avg: ${avgSentenceLength} w/s).`;
      graStatus = 'good';
    } else if (complexRatio >= 25 && avgLen >= 10) {
      graScore = 6.5;
      graFeedback = `Moderate sentence complexity (${complexRatio}% compound). Strive for more subordinate clauses.`;
      graStatus = 'warning';
    } else {
      graScore = 5.0;
      graFeedback = 'Predominantly simple sentences or excessive short fragments.';
      graStatus = 'danger';
    }

    const overall = Math.round(((trScore + ccScore + lrScore + graScore) / 4) * 2) / 2;

    return {
      tr: { score: trScore, label: 'Task Response', feedback: trFeedback, status: trStatus },
      cc: { score: ccScore, label: 'Coherence & Cohesion', feedback: ccFeedback, status: ccStatus },
      lr: { score: lrScore, label: 'Lexical Resource', feedback: lrFeedback, status: lrStatus },
      gra: { score: graScore, label: 'Grammar & Accuracy', feedback: graFeedback, status: graStatus },
      overall: Math.min(9.0, Math.max(3.0, overall))
    };
  };

  const rubric = calculateRubric();

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (words < 20) return;
    setAnalyzed(true);
    confetti({ particleCount: 60, spread: 60, origin: { y: 0.7 } });
  };

  const loadSampleBand8 = () => {
    setPrompt('Some people argue that technological development leads to the loss of traditional cultures, while others believe modern technology enhances and preserves cultural heritage. Discuss both views and give your opinion.');
    setEssay(`In the contemporary era, the rapid acceleration of technological innovation has sparked considerable debate regarding its ramifications on cultural heritage. While critics contend that globalization facilitated by digital tools erodes traditional customs, I firmly believe that modern technology serves as an indispensable instrument for preserving and revitalizing cultural traditions.

On the one hand, opponents argue that digital homogenization threatens indigenous practices. The pervasive influence of global social media platforms promotes Western consumerism, which frequently supplants traditional folklore, native dialects, and community rituals among younger generations. For instance, many regional languages in developing nations are experiencing a sharp decline as digital communication predominantly utilizes English. Consequently, this cultural dilution undermines centuries-old societal values.

On the other hand, cutting-edge technology offers unprecedented mechanisms for cultural preservation and dissemination. High-definition archiving, virtual reality museum tours, and AI-driven linguistic documentation allow endangered languages and historical monuments to be digitized with extraordinary precision. Furthermore, social platforms provide local artisans and performers with an international audience, thereby transforming localized art forms into sustainable economic enterprises. A case in point is the digital reconstruction of historical artifacts, which enables global audiences to engage with cultural heritage without geographical constraints.

In conclusion, although the proliferation of modern technology may pose tangible risks of cultural uniformity, its proactive application as an educational and preservation repository is profoundly advantageous. Therefore, governments should utilize technological frameworks to safeguard intangible heritage for prospective generations.`);
    setAnalyzed(false);
  };

  const copyFeedback = () => {
    const text = `IELTS Task 2 Diagnostic Summary\nEstimated Overall Band: ~${rubric.overall.toFixed(1)}\n- Task Response: Band ${rubric.tr.score} (${rubric.tr.feedback})\n- Coherence & Cohesion: Band ${rubric.cc.score} (${rubric.cc.feedback})\n- Lexical Resource: Band ${rubric.lr.score} (${rubric.lr.feedback})\n- Grammatical Range: Band ${rubric.gra.score} (${rubric.gra.feedback})\n\nWord Count: ${words} | Paragraphs: ${paragraphCount} | Complex Sentence Ratio: ${complexRatio}%`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl text-slate-900">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-teal-50 text-teal-800 rounded-2xl border border-teal-200">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
              IELTS Writing Task 2 Evaluator & Rubric Analyzer
              <span className="text-xs bg-teal-50 text-teal-900 border border-teal-200 px-2.5 py-0.5 rounded-full font-semibold">Official 4-Pillar Rubric</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">Analyze Task Response, Coherence & Cohesion, Academic Lexical Density, and Grammatical Complexity.</p>
          </div>
        </div>
        <button
          onClick={loadSampleBand8}
          className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-900 border border-teal-200 transition flex items-center gap-1.5 self-start md:self-auto cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-teal-700" /> Load Band 8.5 Sample Essay
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Inputs */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Essay Question / Topic (Optional)</label>
            <input
              type="text"
              placeholder="e.g. Some people believe that university education should be free for all students. Discuss both views and give your opinion."
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:border-teal-500 focus:bg-white outline-none transition"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold text-slate-700">Your Essay Content (Task 2) *</label>
              <div className="flex items-center gap-2 text-xs">
                <span className={`font-bold px-2 py-0.5 rounded ${words >= 250 ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'}`}>
                  {words} / 250 words
                </span>
                <span className="text-slate-400">|</span>
                <span className="text-slate-600">{paragraphCount} paragraphs</span>
              </div>
            </div>
            <textarea
              rows={12}
              required
              placeholder="Paste or write your IELTS Task 2 essay here... (Leave a blank line between paragraphs for accurate cohesion scoring)"
              value={essay}
              onChange={e => {
                setEssay(e.target.value);
                if (analyzed) setAnalyzed(false);
              }}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-900 focus:border-teal-500 focus:bg-white outline-none leading-relaxed font-sans transition"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleAnalyze}
              disabled={words < 20}
              className="flex-1 py-3.5 rounded-xl bg-teal-900 hover:bg-teal-800 disabled:opacity-50 text-white font-bold text-xs shadow-md shadow-teal-900/20 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" /> Run Deep 4-Pillar IELTS Analysis
            </button>
            <button
              onClick={() => {
                setEssay('');
                setPrompt('');
                setAnalyzed(false);
              }}
              className="px-4 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Right Column: Dynamic Diagnosis & Rubric Breakdown */}
        <div className="lg:col-span-5 bg-slate-50 rounded-2xl border border-slate-200 p-5 flex flex-col justify-between">
          <div>
            {/* Header & Tabs */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-teal-800" /> Examiner Diagnosis
              </h4>
              {analyzed && (
                <div className="flex items-center gap-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-teal-900 text-white font-extrabold shadow-sm">
                    Band ~{rubric.overall.toFixed(1)}
                  </span>
                  <button
                    onClick={copyFeedback}
                    className="p-1 rounded bg-white hover:bg-slate-100 border border-slate-200 text-slate-600 text-xs flex items-center"
                    title="Copy breakdown"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              )}
            </div>

            {/* Sub-nav Tabs */}
            <div className="flex gap-1 mb-4 bg-slate-200/70 p-1 rounded-xl text-[11px] font-semibold">
              <button
                onClick={() => setActiveTab('overview')}
                className={`flex-1 py-1.5 rounded-lg transition ${activeTab === 'overview' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              >
                4 Pillars
              </button>
              <button
                onClick={() => setActiveTab('lexical')}
                className={`flex-1 py-1.5 rounded-lg transition ${activeTab === 'lexical' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              >
                AWL Vocab ({detectedAcademicWords.length})
              </button>
              <button
                onClick={() => setActiveTab('cohesion')}
                className={`flex-1 py-1.5 rounded-lg transition ${activeTab === 'cohesion' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Cohesion ({detectedCohesion.length})
              </button>
              <button
                onClick={() => setActiveTab('checklist')}
                className={`flex-1 py-1.5 rounded-lg transition ${activeTab === 'checklist' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Checklist
              </button>
            </div>

            {/* Tab 1: 4 Pillars Overview */}
            {activeTab === 'overview' && (
              <div className="space-y-3">
                {/* 4 Score Cards */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-slate-500 font-semibold">Task Response</span>
                      <span className={`font-extrabold ${rubric.tr.score >= 7 ? 'text-emerald-700' : 'text-amber-600'}`}>B~{rubric.tr.score.toFixed(1)}</span>
                    </div>
                    <p className="text-[10px] text-slate-600 line-clamp-2">{rubric.tr.feedback}</p>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-slate-500 font-semibold">Coherence & Cohesion</span>
                      <span className={`font-extrabold ${rubric.cc.score >= 7 ? 'text-emerald-700' : 'text-amber-600'}`}>B~{rubric.cc.score.toFixed(1)}</span>
                    </div>
                    <p className="text-[10px] text-slate-600 line-clamp-2">{rubric.cc.feedback}</p>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-slate-500 font-semibold">Lexical Resource</span>
                      <span className={`font-extrabold ${rubric.lr.score >= 7 ? 'text-emerald-700' : 'text-amber-600'}`}>B~{rubric.lr.score.toFixed(1)}</span>
                    </div>
                    <p className="text-[10px] text-slate-600 line-clamp-2">{rubric.lr.feedback}</p>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-slate-200">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] text-slate-500 font-semibold">Grammar Range</span>
                      <span className={`font-extrabold ${rubric.gra.score >= 7 ? 'text-emerald-700' : 'text-amber-600'}`}>B~{rubric.gra.score.toFixed(1)}</span>
                    </div>
                    <p className="text-[10px] text-slate-600 line-clamp-2">{rubric.gra.feedback}</p>
                  </div>
                </div>

                {/* Live Structural Statistics */}
                <div className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-2 text-xs">
                  <div className="font-bold text-slate-800 text-[11px] flex items-center justify-between">
                    <span>Structural Diagnostics</span>
                    <span className="text-[10px] text-slate-400">Live text metrics</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                      <div className="text-[10px] text-slate-500">Avg Sentence</div>
                      <div className="font-bold text-slate-900">{avgSentenceLength} w</div>
                    </div>
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                      <div className="text-[10px] text-slate-500">Complex Ratio</div>
                      <div className="font-bold text-teal-800">{complexRatio}%</div>
                    </div>
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                      <div className="text-[10px] text-slate-500">AWL Density</div>
                      <div className="font-bold text-emerald-700">{words > 0 ? ((detectedAcademicWords.length / words) * 100).toFixed(1) : 0}%</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: AWL Vocabulary */}
            {activeTab === 'lexical' && (
              <div className="space-y-3 text-xs">
                <div>
                  <div className="font-bold text-slate-800 mb-1.5 flex items-center justify-between">
                    <span>Detected Academic Vocabulary (AWL):</span>
                    <span className="text-emerald-700 font-bold">{detectedAcademicWords.length} words</span>
                  </div>
                  {detectedAcademicWords.length > 0 ? (
                    <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto p-2 bg-white rounded-xl border border-slate-200">
                      {detectedAcademicWords.map((w, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-medium">
                          {w}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-slate-500 text-[11px] p-3 bg-white rounded-xl border border-slate-200">
                      No Academic Word List (AWL) terms detected yet. Incorporate analytical verbs like <em>facilitate, substantiate, diminish, eradicate</em>.
                    </p>
                  )}
                </div>

                {/* Overused Words Alert */}
                <div>
                  <div className="font-bold text-slate-800 mb-1.5 flex items-center justify-between">
                    <span>Generic / Informal Words to Upgrade:</span>
                    <span className="text-amber-600 font-bold">{detectedWeakWords.length}</span>
                  </div>
                  {detectedWeakWords.length > 0 ? (
                    <div className="space-y-1.5 max-h-36 overflow-y-auto">
                      {detectedWeakWords.map((item, idx) => (
                        <div key={idx} className="p-2 bg-white rounded-lg border border-amber-200 text-[11px] space-y-0.5">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-amber-700 capitalize">"{item.word}" (used {item.count}x)</span>
                            <span className="text-[10px] text-slate-400">Upgrade to C1/C2</span>
                          </div>
                          <div className="text-slate-600">
                            Try: <span className="font-semibold text-teal-800">{item.suggestions.join(', ')}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-emerald-700 text-[11px] p-2.5 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5" /> No common low-band overused words detected!
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Tab 3: Cohesion Explorer */}
            {activeTab === 'cohesion' && (
              <div className="space-y-3 text-xs">
                <div className="font-bold text-slate-800 flex items-center justify-between">
                  <span>Cohesive Devices Breakdown</span>
                  <span className="text-teal-800 font-bold">{detectedCohesion.length} transitions</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(categoryCounts).map(([cat, count]) => (
                    <div key={cat} className="p-2 bg-white rounded-lg border border-slate-200 flex items-center justify-between">
                      <span className="capitalize text-[11px] text-slate-600">{cat.replace('_', ' ')}</span>
                      <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${count > 0 ? 'bg-teal-50 text-teal-800 border border-teal-200' : 'bg-slate-100 text-slate-400'}`}>
                        {count}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                  <div className="text-[11px] font-semibold text-slate-700 mb-1.5">Detected Linkers:</div>
                  {detectedCohesion.length > 0 ? (
                    <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto">
                      {detectedCohesion.map((d, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded-md bg-teal-50 text-teal-900 border border-teal-200 text-[11px]">
                          {d.word} <span className="text-[9px] text-teal-600">({d.category.slice(0, 4)})</span>
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-slate-500 text-[11px]">Add transitions like <em>"Furthermore"</em>, <em>"In contrast"</em>, <em>"Consequently"</em>, <em>"For instance"</em>.</p>
                  )}
                </div>
              </div>
            )}

            {/* Tab 4: Examiner Checklist */}
            {activeTab === 'checklist' && (
              <div className="space-y-2 text-xs">
                <div className="font-bold text-slate-800 mb-1">Band 7.5+ Examiner Rule Checklist:</div>
                <ul className="space-y-2 text-[11px] text-slate-600">
                  <li className={`p-2 rounded-lg border flex items-start gap-2 ${words >= 250 ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-amber-50 border-amber-200 text-amber-800'}`}>
                    <CheckCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span><strong>Word Count:</strong> At least 250 words (Current: {words} words).</span>
                  </li>
                  <li className={`p-2 rounded-lg border flex items-start gap-2 ${paragraphCount === 4 || paragraphCount === 5 ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-amber-50 border-amber-200 text-amber-800'}`}>
                    <CheckCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span><strong>Paragraphing:</strong> 4 or 5 distinct paragraphs with 1 blank line between them (Current: {paragraphCount}).</span>
                  </li>
                  <li className={`p-2 rounded-lg border flex items-start gap-2 ${detectedCohesion.length >= 5 ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
                    <CheckCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span><strong>Cohesive Flow:</strong> Diverse transitions connecting causes, contrasts, and examples ({detectedCohesion.length} detected).</span>
                  </li>
                  <li className={`p-2 rounded-lg border flex items-start gap-2 ${detectedAcademicWords.length >= 6 ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
                    <CheckCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span><strong>Lexical Sophistication:</strong> 6+ Academic Word List (AWL) terms used naturally ({detectedAcademicWords.length} found).</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Footer note */}
          <div className="pt-3 mt-4 border-t border-slate-200 text-[10px] text-slate-500 flex items-center justify-between">
            <span>Official Cambridge/IDP Scoring Matrix Criteria</span>
            <span>UCC English Pedagogy</span>
          </div>
        </div>
      </div>
    </div>
  );
};
