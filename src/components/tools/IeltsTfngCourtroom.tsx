import React, { useState } from 'react';
import { 
  Scale, CheckCircle2, XCircle, HelpCircle, 
  ArrowRight, BookOpen, ShieldCheck, Microscope, Info 
} from 'lucide-react';
import confetti from 'canvas-confetti';

// 1. COURTROOM PASSAGE EVIDENCE CASES
interface ForensicCase {
  id: number;
  domain: string;
  passageTitle: string;
  passageText: string;
  claim: string;
  correctVerdict: 'TRUE' | 'FALSE' | 'NOT GIVEN';
  synonymChain: string;
  trapType: 'Direct Paraphrase' | 'Contradictory Qualifier' | 'Plausible Assumption Trap' | 'Extreme Quantifier';
  examinerForensicProof: string;
}

const FORENSIC_CASES: ForensicCase[] = [
  {
    id: 1,
    domain: 'Archaeology & Engineering',
    passageTitle: 'The Longevity of Roman Marine Concrete',
    passageText: 'Ancient Roman harbor structures built with pozzolana volcanic ash have endured two millennia of corrosive seawater exposure. Chemical analysis reveals that contact with saline water triggered a rare crystalline reaction that actively reinforced the concrete over centuries, unlike modern Portland cement which deteriorates rapidly.',
    claim: 'Seawater chemical interaction made ancient Roman harbor concrete stronger over time.',
    correctVerdict: 'TRUE',
    synonymChain: '"contact with saline water" = "seawater chemical interaction" | "actively reinforced the concrete" = "made concrete stronger over time"',
    trapType: 'Direct Paraphrase',
    examinerForensicProof: 'The passage explicitly states that contact with seawater triggered a reaction that "actively reinforced" the structure over centuries, directly confirming the claim.'
  },
  {
    id: 2,
    domain: 'Renewable Technology',
    passageTitle: 'Solid-State Battery Breakthroughs',
    passageText: 'While solid-state lithium cells demonstrate twice the energy density of conventional lithium-ion batteries in controlled laboratory trials, high manufacturing costs and interfacial resistance currently prevent their widespread deployment in mass-market electric vehicles.',
    claim: 'Solid-state batteries are currently the primary power source in commercial electric automobiles.',
    correctVerdict: 'FALSE',
    synonymChain: '"prevent their widespread deployment in mass-market electric vehicles" contradicts "primary power source in commercial automobiles"',
    trapType: 'Contradictory Qualifier',
    examinerForensicProof: 'The passage explicitly notes that manufacturing obstacles "prevent their widespread deployment in mass-market vehicles". The claim directly contradicts this by asserting they are already the primary power source.'
  },
  {
    id: 3,
    domain: 'Marine Biology',
    passageTitle: 'Cetacean Acoustic Navigation',
    passageText: 'Humpback whales emit low-frequency vocalizations that travel thousands of kilometers across deep ocean basins. Marine biologists have documented these melodic acoustic sequences during mating seasons across both the Northern and Southern hemispheres.',
    claim: 'Female humpback whales prefer longer acoustic songs over louder ones during courtship.',
    correctVerdict: 'NOT GIVEN',
    synonymChain: 'Mating songs are mentioned, but comparative preference between song length vs volume is NEVER stated.',
    trapType: 'Plausible Assumption Trap',
    examinerForensicProof: 'While the text confirms that melodic acoustic sequences occur during mating season, there is zero mention or comparison regarding female preference for song length versus loudness. It is completely unverified.'
  },
  {
    id: 4,
    domain: 'Atmospheric Physics',
    passageTitle: 'Tropospheric Aerosol Cooling',
    passageText: 'Sulfate aerosols suspended in the stratosphere scatter incoming solar radiation back into space, producing a measurable localized cooling effect that temporarily offsets regional greenhouse warming.',
    claim: 'Stratospheric sulfate aerosols permanently reverse global climate change.',
    correctVerdict: 'FALSE',
    synonymChain: '"temporarily offsets regional warming" contradicts "permanently reverse global climate change"',
    trapType: 'Extreme Quantifier',
    examinerForensicProof: 'The passage specifies that cooling is "localized" and "temporarily offsets regional warming". The claim uses the extreme qualifiers "permanently" and "global", creating a direct factual contradiction.'
  },
  {
    id: 5,
    domain: 'History & Medicine',
    passageTitle: 'Alexander Fleming and Penicillin Extraction',
    passageText: 'In 1928, Scottish bacteriologist Alexander Fleming noticed that a Penicillium notatum mold contamination had destroyed Staphylococcus colonies in a discarded Petri dish. However, Fleming struggled to isolate the unstable antibacterial compound in sufficient quantities for human therapeutic trials.',
    claim: 'Fleming immediately conducted extensive clinical trials on human patients following his 1928 discovery.',
    correctVerdict: 'FALSE',
    synonymChain: '"struggled to isolate in sufficient quantities for human trials" contradicts "immediately conducted extensive clinical trials"',
    trapType: 'Contradictory Qualifier',
    examinerForensicProof: 'Fleming was unable to isolate enough stable compound for human therapeutic trials at that time. Therefore, he did NOT immediately conduct extensive clinical trials.'
  }
];

// 2. QUALIFIER MICROSCOPE INTERACTIVE DATA
interface QualifierLevel {
  category: 'Absolute (100%)' | 'Predominant (75%)' | 'Moderate (50%)' | 'Cautious/Hedging (25%)';
  sampleStatement: string;
  resultingVerdict: 'TRUE' | 'FALSE' | 'NOT GIVEN';
  explanation: string;
}

const QUALIFIER_SLIDER: QualifierLevel[] = [
  {
    category: 'Absolute (100%)',
    sampleStatement: 'All solar panels lose 100% of their operational efficiency in overcast weather.',
    resultingVerdict: 'FALSE',
    explanation: 'Extreme universal quantifiers (all, always, every, solely) are almost always FALSE unless the text explicitly confirms zero exceptions.'
  },
  {
    category: 'Predominant (75%)',
    sampleStatement: 'Solar panels predominantly experience reduced power generation during heavy overcast conditions.',
    resultingVerdict: 'TRUE',
    explanation: 'Corresponds with typical academic findings (power output drops significantly during cloudy skies, but does not stop completely).'
  },
  {
    category: 'Moderate (50%)',
    sampleStatement: 'Solar panels can occasionally produce usable electrical energy even on cloudy days.',
    resultingVerdict: 'TRUE',
    explanation: 'Cautious modal auxiliary "can occasionally" matches passage evidence regarding diffuse solar radiation.'
  },
  {
    category: 'Cautious/Hedging (25%)',
    sampleStatement: 'Future photovoltaic materials will plausibly make rooftop panels cheaper than grid power by 2040.',
    resultingVerdict: 'NOT GIVEN',
    explanation: 'Speculation regarding year 2040 cost superiority is a future prediction absent from current passage measurements.'
  }
];

export const IeltsTfngCourtroom: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'courtroom' | 'microscope' | 'rulebook'>('courtroom');

  // COURTROOM STATE
  const [caseIdx, setCaseIdx] = useState(0);
  const [selectedVerdict, setSelectedVerdict] = useState<'TRUE' | 'FALSE' | 'NOT GIVEN' | null>(null);
  const [hasDeliveredVerdict, setHasDeliveredVerdict] = useState(false);
  const [trialScore, setTrialScore] = useState(0);

  // MICROSCOPE STATE
  const [microscopeStep, setMicroscopeStep] = useState(1);

  const activeCase = FORENSIC_CASES[caseIdx % FORENSIC_CASES.length];

  const handleVerdict = (verdict: 'TRUE' | 'FALSE' | 'NOT GIVEN') => {
    if (hasDeliveredVerdict) return;
    setSelectedVerdict(verdict);
    setHasDeliveredVerdict(true);
    if (verdict === activeCase.correctVerdict) {
      setTrialScore(prev => prev + 100);
      confetti({ particleCount: 50, spread: 50, origin: { y: 0.6 } });
    }
  };

  const nextCase = () => {
    setSelectedVerdict(null);
    setHasDeliveredVerdict(false);
    setCaseIdx(prev => prev + 1);
  };

  const activeQualifier = QUALIFIER_SLIDER[microscopeStep];

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl text-slate-900">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-amber-50 text-amber-700 rounded-2xl border border-amber-200">
            <Scale className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
              IELTS Reading True / False / Not Given Forensic Courtroom
              <span className="text-xs bg-amber-50 text-amber-900 border border-amber-200 px-2.5 py-0.5 rounded-full font-semibold">Evidence Logic Gates</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">Dismantle the #1 score-killer in IELTS Reading. Test passage evidence versus claim assumptions with mathematical logic.</p>
          </div>
        </div>

        {/* Mode Selector */}
        <div className="flex gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 text-xs font-bold">
          <button
            onClick={() => setActiveTab('courtroom')}
            className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer ${activeTab === 'courtroom' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            <Scale className="w-3.5 h-3.5" /> Evidence Trial ({caseIdx + 1}/{FORENSIC_CASES.length})
          </button>
          <button
            onClick={() => setActiveTab('microscope')}
            className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer ${activeTab === 'microscope' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            <Microscope className="w-3.5 h-3.5" /> Qualifier Microscope
          </button>
          <button
            onClick={() => setActiveTab('rulebook')}
            className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer ${activeTab === 'rulebook' ? 'bg-slate-900 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            <BookOpen className="w-3.5 h-3.5" /> T/F/NG vs Y/N/NG Rules
          </button>
        </div>
      </div>

      {/* TAB 1: FORENSIC COURTROOM TRIAL */}
      {activeTab === 'courtroom' && (
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Trial Score Bar */}
          <div className="flex items-center justify-between bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div>
              <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider">
                Case File #{activeCase.id}: {activeCase.domain}
              </span>
              <h4 className="text-base font-bold text-slate-900">{activeCase.passageTitle}</h4>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-500">Judicial Score:</span>
              <div className="text-xl font-black text-amber-800">{trialScore} pts</div>
            </div>
          </div>

          {/* Prosecution Evidence Box (Passage Text) */}
          <div className="p-6 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-xl space-y-3">
            <div className="flex items-center justify-between text-xs text-amber-300 font-mono">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> Official Passage Evidence (Exhibit A)
              </span>
              <span>Cambridge Benchmark</span>
            </div>
            <p className="text-sm md:text-base leading-relaxed font-serif text-slate-200 bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
              "{activeCase.passageText}"
            </p>
          </div>

          {/* Test Claim Box */}
          <div className="p-5 bg-amber-50/70 rounded-3xl border-2 border-amber-300/80 space-y-2">
            <div className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center justify-between">
              <span>Test Statement / Claim Under Investigation:</span>
              <span className="text-[10px] bg-amber-200/80 text-amber-900 px-2 py-0.5 rounded font-bold">
                {activeCase.trapType}
              </span>
            </div>
            <p className="text-base font-bold text-slate-900 font-serif">
              "{activeCase.claim}"
            </p>
          </div>

          {/* 3 Forensic Verdict Buttons */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-slate-700 block">Deliver your Judicial Verdict:</span>
            <div className="grid grid-cols-3 gap-3">
              {(['TRUE', 'FALSE', 'NOT GIVEN'] as const).map(verdict => {
                const isSelected = selectedVerdict === verdict;
                const isCorrect = verdict === activeCase.correctVerdict;

                let btnStyle = 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800';
                if (hasDeliveredVerdict) {
                  if (isCorrect) btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                  else if (isSelected) btnStyle = 'bg-red-50 border-red-500 text-red-950 font-bold';
                }

                return (
                  <button
                    key={verdict}
                    onClick={() => handleVerdict(verdict)}
                    disabled={hasDeliveredVerdict}
                    className={`py-4 px-3 rounded-2xl border-2 text-xs sm:text-sm font-extrabold transition flex flex-col items-center justify-center gap-1 cursor-pointer shadow-xs ${btnStyle}`}
                  >
                    <span>{verdict}</span>
                    {hasDeliveredVerdict && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                    {hasDeliveredVerdict && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-red-600" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Forensic Evidence Breakdown Popup */}
          {hasDeliveredVerdict && (
            <div className={`p-6 rounded-3xl border-2 space-y-3 animate-fadeIn ${selectedVerdict === activeCase.correctVerdict ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950' : 'bg-red-50/90 border-red-300 text-red-950'}`}>
              <div className="flex items-center justify-between font-bold text-sm">
                <span>
                  {selectedVerdict === activeCase.correctVerdict ? '✓ Correct Verdict Delivered!' : '⚠️ Judicial Error: Incorrect Verdict!'}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-mono">
                  Correct: {activeCase.correctVerdict}
                </span>
              </div>

              <div className="text-xs space-y-2 text-slate-700">
                <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block">Linguistic Paraphrase & Logic Gate Chain:</span>
                  <p className="font-mono text-[11px] text-teal-900 bg-teal-50 p-2 rounded border border-teal-200">
                    {activeCase.synonymChain}
                  </p>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
                  <span className="font-bold text-slate-900 block">Examiner Forensic Rationale:</span>
                  <p className="leading-relaxed text-[11px]">{activeCase.examinerForensicProof}</p>
                </div>
              </div>

              <button
                onClick={nextCase}
                className="w-full py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition flex items-center justify-center gap-2 cursor-pointer shadow-md mt-2"
              >
                Proceed to Next Evidence File <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: QUALIFIER MICROSCOPE (SET THEORY SLIDER) */}
      {activeTab === 'microscope' && (
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-teal-800 uppercase tracking-wider">Linguistic Scope Slider</span>
                <h4 className="text-base font-bold text-slate-900">How Qualifiers Instantly Shift Verdicts</h4>
              </div>
              <span className="px-3 py-1 rounded-full bg-teal-900 text-white text-xs font-bold font-mono">
                {activeQualifier.category}
              </span>
            </div>

            <div className="space-y-2 bg-white p-5 rounded-2xl border border-slate-200">
              <div className="flex justify-between text-xs font-bold text-slate-600">
                <span className={microscopeStep === 0 ? 'text-red-600 font-black' : ''}>1. All / Always</span>
                <span className={microscopeStep === 1 ? 'text-teal-700 font-black' : ''}>2. Predominantly</span>
                <span className={microscopeStep === 2 ? 'text-emerald-700 font-black' : ''}>3. Occasionally</span>
                <span className={microscopeStep === 3 ? 'text-amber-600 font-black' : ''}>4. Plausibly (Future)</span>
              </div>
              <input
                type="range"
                min="0"
                max="3"
                step="1"
                value={microscopeStep}
                onChange={e => setMicroscopeStep(parseInt(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-800"
              />
              <div className="text-[11px] text-slate-400 text-center pt-1">
                Slide the qualifier to watch how single modifier words alter the mathematical truth value of an IELTS reading question.
              </div>
            </div>

            {/* Microscopic Sentence Display */}
            <div className="p-6 bg-white rounded-2xl border-2 border-teal-500/40 shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">Modified Claim Under Microscope:</span>
                <span className={`px-3 py-0.5 rounded-full text-xs font-black ${activeQualifier.resultingVerdict === 'TRUE' ? 'bg-emerald-100 text-emerald-900' : activeQualifier.resultingVerdict === 'FALSE' ? 'bg-red-100 text-red-900' : 'bg-amber-100 text-amber-900'}`}>
                  Result: {activeQualifier.resultingVerdict}
                </span>
              </div>

              <p className="text-base md:text-lg text-slate-900 font-serif leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
                "{activeQualifier.sampleStatement}"
              </p>

              <div className="p-3.5 bg-teal-50/70 rounded-xl border border-teal-200 text-xs space-y-1 text-slate-700">
                <span className="font-bold text-teal-950 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-teal-800" /> Set Theory & Logic Gate Explanation:
                </span>
                <p className="leading-relaxed text-[11px]">{activeQualifier.explanation}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: GOLDEN RULEBOOK & CHEAT SHEET */}
      {activeTab === 'rulebook' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 bg-emerald-50/70 rounded-3xl border border-emerald-200 space-y-3 text-xs">
              <h5 className="font-bold text-emerald-950 flex items-center gap-1.5 text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" /> When is it TRUE / YES?
              </h5>
              <ul className="space-y-2 text-slate-700 text-[11px]">
                <li className="p-2 bg-white rounded-xl border border-emerald-100">
                  <strong>Complete Synonym Paraphrase:</strong> Every single variable in the claim matches passage concepts with 100% agreement.
                </li>
                <li className="p-2 bg-white rounded-xl border border-emerald-100">
                  <strong>Identical Scope:</strong> If the text says "most", the claim says "the majority" or "predominantly".
                </li>
              </ul>
            </div>

            <div className="p-5 bg-red-50/70 rounded-3xl border border-red-200 space-y-3 text-xs">
              <h5 className="font-bold text-red-950 flex items-center gap-1.5 text-sm">
                <XCircle className="w-4 h-4 text-red-700" /> When is it FALSE / NO?
              </h5>
              <ul className="space-y-2 text-slate-700 text-[11px]">
                <li className="p-2 bg-white rounded-xl border border-red-100">
                  <strong>Explicit Contradiction:</strong> The passage explicitly says X, but the claim states opposite of X (e.g. temporary vs permanent).
                </li>
                <li className="p-2 bg-white rounded-xl border border-red-100">
                  <strong>Reversed Causation:</strong> Passage says A caused B, claim asserts B caused A.
                </li>
              </ul>
            </div>

            <div className="p-5 bg-amber-50/70 rounded-3xl border border-amber-200 space-y-3 text-xs">
              <h5 className="font-bold text-amber-950 flex items-center gap-1.5 text-sm">
                <HelpCircle className="w-4 h-4 text-amber-700" /> When is it NOT GIVEN?
              </h5>
              <ul className="space-y-2 text-slate-700 text-[11px]">
                <li className="p-2 bg-white rounded-xl border border-amber-100">
                  <strong>The Plausible Assumption Trap:</strong> An idea that sounds true to common sense in the real world, but the author NEVER verified it.
                </li>
                <li className="p-2 bg-white rounded-xl border border-amber-100">
                  <strong>Missing Comparison:</strong> Both items are mentioned, but no comparative superiority was stated.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
