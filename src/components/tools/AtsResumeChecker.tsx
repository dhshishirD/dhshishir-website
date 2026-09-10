import React, { useState } from 'react';
import { CheckCircle, AlertTriangle, RefreshCw, FileText, Sparkles, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AuditQuestion {
  id: string;
  question: string;
  explanation: string;
  category: string;
}

const QUESTIONS: AuditQuestion[] = [
  {
    id: 'single_column',
    question: 'Is your CV in a single-column or clean two-column layout without nested text-boxes?',
    explanation: 'Complex text boxes and graphics confuse ATS parsers.',
    category: 'Layout'
  },
  {
    id: 'standard_headings',
    question: 'Do you use standard section headings (e.g. "Work Experience", "Education", "Skills")?',
    explanation: 'Unusual titles like "Where I have been" cause parsers to misclassify data.',
    category: 'Structure'
  },
  {
    id: 'keyword_match',
    question: 'Have you integrated specific skill keywords directly from the target job circular?',
    explanation: 'ATS ranks resumes based on exact keyword occurrence rates.',
    category: 'Keywords'
  },
  {
    id: 'measurable_metrics',
    question: 'Do your bullet points include measurable achievements (numbers, % growth, Tk/USD impact)?',
    explanation: 'Metrics like "Boosted sales by 25%" dramatically outperform generic task lists.',
    category: 'Impact'
  },
  {
    id: 'clean_contact',
    question: 'Are your phone number, professional email, and LinkedIn profile cleanly placed at the top?',
    explanation: 'ATS needs to instantly extract contact metadata.',
    category: 'Contact'
  },
  {
    id: 'file_format',
    question: 'Is your primary CV saved in standard .DOCX or selectable text .PDF (not a scanned image)?',
    explanation: 'Scanned image PDFs are 100% unreadable by ATS scanners.',
    category: 'Format'
  }
];

export const AtsResumeChecker: React.FC = () => {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [showResult, setShowResult] = useState(false);

  const toggleAnswer = (id: string, value: boolean) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const calculateScore = () => {
    const total = QUESTIONS.length;
    const yesCount = Object.values(answers).filter(Boolean).length;
    const score = Math.round((yesCount / total) * 100);
    setShowResult(true);

    if (score >= 80) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const resetAudit = () => {
    setAnswers({});
    setShowResult(false);
  };

  const yesCount = Object.values(answers).filter(Boolean).length;
  const score = Math.round((yesCount / QUESTIONS.length) * 100);

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl text-white">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
        <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-2xl border border-indigo-500/30">
          <FileText className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            Interactive ATS Resume Readiness Diagnostic
            <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-medium">Free Tool</span>
          </h3>
          <p className="text-sm text-slate-400">Evaluate whether your CV will pass through automated corporate ATS filters.</p>
        </div>
      </div>

      {!showResult ? (
        <div className="space-y-4">
          {QUESTIONS.map((q, idx) => (
            <div key={q.id} className="p-4 bg-slate-800/40 rounded-2xl border border-slate-800 hover:border-slate-700 transition">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">#{idx + 1} {q.category}</span>
                  </div>
                  <p className="font-medium text-slate-200">{q.question}</p>
                  <p className="text-xs text-slate-400">{q.explanation}</p>
                </div>
                <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                  <button
                    onClick={() => toggleAnswer(q.id, true)}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition flex items-center gap-1.5 cursor-pointer ${
                      answers[q.id] === true
                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    <CheckCircle className="w-4 h-4" /> Yes
                  </button>
                  <button
                    onClick={() => toggleAnswer(q.id, false)}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition flex items-center gap-1.5 cursor-pointer ${
                      answers[q.id] === false
                        ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    <AlertTriangle className="w-4 h-4" /> No
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="pt-4 flex justify-end">
            <button
              onClick={calculateScore}
              disabled={Object.keys(answers).length < QUESTIONS.length}
              className={`px-8 py-3.5 rounded-2xl font-bold text-white shadow-xl flex items-center gap-2 transition ${
                Object.keys(answers).length === QUESTIONS.length
                  ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 hover:scale-[1.02] cursor-pointer'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed'
              }`}
            >
              <Sparkles className="w-5 h-5" /> Calculate My ATS Score
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="p-6 md:p-8 bg-gradient-to-br from-slate-900 to-indigo-950/60 rounded-3xl border border-indigo-500/30 text-center">
            <span className="text-xs uppercase font-bold text-indigo-400 tracking-widest">Diagnostic Result</span>
            <div className="my-4">
              <div className="text-6xl md:text-7xl font-black gradient-text">
                {score}%
              </div>
              <p className="text-lg font-bold text-slate-200 mt-2">
                {score >= 80 ? '🎉 Excellent ATS Readiness! Highly Competitive' : score >= 50 ? '⚠️ Moderate Risk: Improvements Needed' : '🚨 High Risk: ATS Rejection Likely'}
              </p>
              <p className="text-sm text-slate-400 max-w-xl mx-auto mt-1">
                {score >= 80 
                  ? 'Your CV follows the core technical criteria of top corporate recruitment filters.' 
                  : 'Your CV is missing critical ATS parsing structures. Fixing these can 3x your interview callback rate.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-left">
              {QUESTIONS.map((q) => (
                <div key={q.id} className="p-3.5 bg-slate-900/80 rounded-xl border border-slate-800 flex items-start gap-2.5">
                  {answers[q.id] ? (
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <span className="text-xs font-bold text-slate-300 block">{q.category}</span>
                    <span className="text-xs text-slate-400">{answers[q.id] ? 'Optimized' : 'Fix needed: ' + q.explanation}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={resetAudit}
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-semibold flex items-center gap-2 transition text-sm cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" /> Retake Test
              </button>
              <a
                href="#cv-services"
                className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-emerald-900/30 transition text-sm"
              >
                Get Professional CV Review <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
