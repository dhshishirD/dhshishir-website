import React, { useState } from 'react';
import { SpellCheck, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';

interface ErrorRule {
  pattern: RegExp;
  title: string;
  explanation: string;
  correction: string;
}

const COMMON_BD_RULES: ErrorRule[] = [
  {
    pattern: /\bI am agree\b/i,
    title: 'Misuse of "I am agree"',
    explanation: '"Agree" is a verb in English, not an adjective. You do not need the auxiliary "am".',
    correction: 'I agree (or "I agree with you")'
  },
  {
    pattern: /\bdiscuss about\b/i,
    title: 'Redundant Preposition after "Discuss"',
    explanation: '"Discuss" is a transitive verb that directly takes an object. Adding "about" is redundant in standard English.',
    correction: 'discuss the matter (instead of "discuss about the matter")'
  },
  {
    pattern: /\bsenior than\b/i,
    title: 'Preposition Error with Latin Adjectives',
    explanation: 'Adjectives of Latin origin ending in -ior (senior, junior, superior, inferior, prior) take "to", not "than".',
    correction: 'senior to me (instead of "senior than me")'
  },
  {
    pattern: /\ba good advice\b/i,
    title: 'Uncountable Noun "Advice"',
    explanation: '"Advice" is uncountable in English. It cannot take the indefinite article "a".',
    correction: 'good advice OR a piece of advice'
  },
  {
    pattern: /\bprefer (.*?) than\b/i,
    title: 'Preposition after "Prefer"',
    explanation: '"Prefer" takes the preposition "to", not "than" (e.g. prefer tea to coffee).',
    correction: 'prefer X to Y'
  },
  {
    pattern: /\bcope up with\b/i,
    title: 'Collocation Error "Cope up with"',
    explanation: 'The standard English idiom is "cope with", not "cope up with".',
    correction: 'cope with the situation'
  },
  {
    pattern: /\bpassed (matric|hsc|ssc|bachelor) in\b/i,
    title: 'Year vs Exam Phrasing',
    explanation: 'Say "passed HSC in 2020" or "graduated from university". Avoid informal literal translations.',
    correction: 'passed the examination in [Year]'
  },
  {
    pattern: /\baccording to me\b/i,
    title: 'Informal literal translation for opinion',
    explanation: '"According to" is used for third parties or facts. For your own opinion, use "In my opinion" or "From my perspective".',
    correction: 'In my opinion / From my perspective'
  },
  {
    pattern: /\blook forward to meet\b/i,
    title: 'Gerund after "Look forward to"',
    explanation: 'The phrase "look forward to" requires a gerund (-ing form), because "to" here is a preposition.',
    correction: 'look forward to meeting you'
  }
];

export const BanglaMistakeChecker: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [matchedErrors, setMatchedErrors] = useState<ErrorRule[]>([]);
  const [hasScanned, setHasScanned] = useState(false);

  const handleScan = () => {
    if (!inputText.trim()) return;
    const found: ErrorRule[] = [];
    COMMON_BD_RULES.forEach(rule => {
      if (rule.pattern.test(inputText)) {
        found.push(rule);
      }
    });
    setMatchedErrors(found);
    setHasScanned(true);
  };

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl text-white">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
        <div className="p-3 bg-amber-500/20 text-amber-400 rounded-2xl border border-amber-500/30">
          <SpellCheck className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            Bangladeshi English Common Mistake Scanner
            <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-medium">UCC 7+ Yrs Pedagogy</span>
          </h3>
          <p className="text-sm text-slate-400">Detect typical Bengali-speaker grammatical habits, false collocations, and preposition mismatches.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Enter your English paragraph or sentence to scan:
            </label>
            <textarea
              rows={7}
              placeholder="e.g. I am agree with your proposal. We need to discuss about the budget because he is senior than me and gave me a good advice."
              value={inputText}
              onChange={e => {
                setInputText(e.target.value);
                if (hasScanned) setHasScanned(false);
              }}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs sm:text-sm text-white focus:border-amber-500 outline-none leading-relaxed"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleScan}
              disabled={!inputText.trim()}
              className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-amber-600 via-orange-600 to-indigo-600 hover:opacity-95 disabled:opacity-50 text-white font-bold text-xs shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" /> Scan for Typical Errors
            </button>
            <button
              onClick={() => {
                setInputText('');
                setMatchedErrors([]);
                setHasScanned(false);
              }}
              className="px-4 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-bold"
            >
              Clear
            </button>
          </div>

          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-slate-400">
            <span className="font-bold text-slate-200">Try quick test examples: </span>
            <button
              onClick={() => setInputText("I am agree with your decision. We should discuss about this.")}
              className="text-amber-400 underline ml-1 cursor-pointer"
            >
              Example 1
            </button>
            {" • "}
            <button
              onClick={() => setInputText("He is senior than me and gave me a good advice to cope up with pressure.")}
              className="text-amber-400 underline cursor-pointer"
            >
              Example 2
            </button>
          </div>
        </div>

        <div className="lg:col-span-6 bg-slate-950/90 rounded-2xl border border-slate-800 p-5">
          <h4 className="text-sm font-bold text-white border-b border-slate-800 pb-3 flex items-center justify-between">
            <span>Diagnostic Results</span>
            {hasScanned && (
              <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${matchedErrors.length === 0 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
                {matchedErrors.length === 0 ? '✓ No Common Errors' : `${matchedErrors.length} Issue(s) Found`}
              </span>
            )}
          </h4>

          <div className="mt-4 space-y-3 max-h-[350px] overflow-y-auto pr-1">
            {hasScanned ? (
              matchedErrors.length > 0 ? (
                matchedErrors.map((err, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-900 rounded-xl border border-amber-500/30 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                      <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{err.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-300">{err.explanation}</p>
                    <div className="text-[11px] font-mono bg-slate-950 p-2 rounded border border-slate-800 text-emerald-400">
                      Correct usage: <span className="font-bold">{err.correction}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-6 text-center space-y-2 text-slate-400">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <div className="text-sm font-bold text-white">Clean Structure Detected!</div>
                  <p className="text-xs text-slate-500">No standard Bangladeshi English grammatical traps found in this excerpt.</p>
                </div>
              )
            ) : (
              <div className="py-12 text-center text-slate-500 text-xs">
                Enter your text and click "Scan for Typical Errors" to see instant grammatical diagnosis.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
