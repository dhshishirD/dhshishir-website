import React, { useState } from 'react';
import { BookOpen, CheckCircle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const IeltsWritingAnalyzer: React.FC = () => {
  const [essay, setEssay] = useState('');
  const [prompt, setPrompt] = useState('');
  const [analyzed, setAnalyzed] = useState(false);

  // Analysis metrics
  const words = essay.trim() ? essay.trim().split(/\s+/).length : 0;
  const paragraphs = essay.trim() ? essay.split(/\n\s*\n/).filter(p => p.trim().length > 0).length : 0;
  const sentences = essay.trim() ? essay.split(/[.!?]+/).filter(s => s.trim().length > 0).length : 0;
  const avgSentenceLength = sentences > 0 ? (words / sentences).toFixed(1) : '0';

  // Common linking words
  const linkingWordsList = [
    'furthermore', 'moreover', 'however', 'nonetheless', 'consequently', 'therefore',
    'in addition', 'on the other hand', 'for instance', 'for example', 'in contrast',
    'subsequently', 'as a result', 'in conclusion', 'to summarize', 'firstly', 'secondly'
  ];
  const foundLinkingWords = linkingWordsList.filter(lw => new RegExp(`\\b${lw}\\b`, 'i').test(essay));

  // Estimated Band Calculation
  const calculateEstimatedBand = () => {
    let score = 5.0;
    if (words >= 250) score += 1.0;
    else if (words >= 200) score += 0.5;
    
    if (paragraphs >= 4 && paragraphs <= 5) score += 0.5;
    if (foundLinkingWords.length >= 5) score += 0.5;
    if (foundLinkingWords.length >= 8) score += 0.5;
    if (parseFloat(avgSentenceLength) >= 12 && parseFloat(avgSentenceLength) <= 24) score += 0.5;

    return Math.min(8.5, score).toFixed(1);
  };

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (words < 20) return;
    setAnalyzed(true);
    confetti({ particleCount: 60, spread: 60, origin: { y: 0.7 } });
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl text-slate-900">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
        <div className="p-3 bg-teal-50 text-teal-800 rounded-2xl border border-teal-200">
          <BookOpen className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
            IELTS Writing Task 2 Evaluator & Word Counter
            <span className="text-xs bg-teal-50 text-teal-900 border border-teal-200 px-2 py-0.5 rounded-full font-medium">Official Rubric</span>
          </h3>
          <p className="text-sm text-slate-500">Evaluate word count, paragraphing structure, cohesive devices, and estimated band rating for your essay.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Essay Question / Topic (Optional)</label>
            <input
              type="text"
              placeholder="e.g. Some people believe that university education should be free for all students. Discuss both views and give your opinion."
              value={prompt}
              onChange={e => setPrompt(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:border-indigo-500 outline-none"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-semibold text-slate-600">Your Essay Content (Task 2) *</label>
              <span className={`text-xs font-bold ${words >= 250 ? 'text-teal-800' : 'text-amber-400'}`}>
                {words} / 250 words minimum
              </span>
            </div>
            <textarea
              rows={11}
              required
              placeholder="Paste or type your IELTS Task 2 essay here... (Double line-break between paragraphs)"
              value={essay}
              onChange={e => {
                setEssay(e.target.value);
                if (analyzed) setAnalyzed(false);
              }}
              className="w-full bg-white border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-900 focus:border-emerald-500 outline-none leading-relaxed font-sans"
            />
          </div>

          <button
            onClick={handleAnalyze}
            disabled={words < 20}
            className="w-full py-3.5 rounded-xl bg-teal-900 hover:bg-teal-800 hover:opacity-95 disabled:opacity-50 text-white font-bold text-xs shadow-lg shadow-xs transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" /> Analyze Essay & Estimate Band Rating
          </button>
        </div>

        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-5 space-y-5">
          <h4 className="text-sm font-bold text-slate-900 border-b border-slate-200 pb-3 flex items-center justify-between">
            <span>Diagnostic Breakdown</span>
            {analyzed && (
              <span className="text-xs px-2.5 py-1 rounded-full bg-teal-50 text-teal-800 font-extrabold">
                Band ~{calculateEstimatedBand()}
              </span>
            )}
          </h4>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <div className="text-slate-500">Total Words</div>
              <div className={`text-xl font-black ${words >= 250 ? 'text-teal-800' : 'text-amber-400'}`}>
                {words}
              </div>
              <div className="text-[10px] text-slate-500">{words >= 250 ? '✓ Meets minimum' : '⚠️ Under 250 penalty'}</div>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <div className="text-slate-500">Paragraphs</div>
              <div className={`text-xl font-black ${paragraphs >= 4 && paragraphs <= 5 ? 'text-teal-800' : 'text-teal-800'}`}>
                {paragraphs}
              </div>
              <div className="text-[10px] text-slate-500">{paragraphs === 4 || paragraphs === 5 ? '✓ Ideal (Intro + 2 Body + Concl)' : 'Aim for 4-5 paragraphs'}</div>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <div className="text-slate-500">Total Sentences</div>
              <div className="text-xl font-black text-slate-900">{sentences}</div>
              <div className="text-[10px] text-slate-500">Avg {avgSentenceLength} words/sentence</div>
            </div>

            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <div className="text-slate-500">Cohesive Devices</div>
              <div className="text-xl font-black text-teal-800">{foundLinkingWords.length}</div>
              <div className="text-[10px] text-slate-500">Transitions identified</div>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold text-slate-600 mb-2">Detected Cohesive Transitions:</div>
            {foundLinkingWords.length > 0 ? (
              <div className="flex flex-wrap gap-1.5">
                {foundLinkingWords.map((lw, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded-md bg-teal-50 text-teal-900 text-[11px] font-medium border border-teal-200">
                    {lw}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-xs text-slate-500">None detected yet. Include transitions like "Furthermore", "However", "In conclusion".</p>
            )}
          </div>

          <div className="pt-3 border-t border-slate-200 space-y-2 text-xs">
            <div className="text-slate-600 font-semibold">Examiner Recommendations:</div>
            <ul className="space-y-1.5 text-slate-500 text-[11px]">
              <li className="flex items-start gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-teal-800 shrink-0 mt-0.5" />
                <span>Keep introduction concise (Paraphrase prompt + clear Thesis statement).</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-teal-800 shrink-0 mt-0.5" />
                <span>Ensure each body paragraph begins with a clear Topic Sentence followed by supporting evidence.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
