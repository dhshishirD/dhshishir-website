import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Clock, CheckCircle2, AlertCircle, 
  Sparkles, RotateCcw, Award, ArrowRight, 
  Highlighter, Check, ExternalLink, ListOrdered
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { recordIeltsTestResult } from '../../services/unifiedMemberService';

interface ReadingQuestion {
  id: number;
  type: 'tfng' | 'heading' | 'fill';
  prompt: string;
  correctAnswer: string;
  acceptableAnswers?: string[];
  options?: string[];
  explanation: string;
  paragraphRef: string;
  logicRule: string;
}

const READING_TEST_DATA = {
  testId: 'cambridge-19-reading-sim-1',
  title: 'Cambridge Academic Reading Simulator 1: Full 3-Passage Forensic Lab',
  passages: [
    {
      passageNumber: 1,
      title: 'Passage 1: Blue Carbon Dynamics in Coastal Mangrove Ecosystems',
      readingTimeRecommended: '15 Minutes',
      paragraphs: [
        {
          letter: 'A',
          text: 'Mangrove forests occupy a critical ecological boundary along tropical and subtropical coastlines, serving as vital buffers against oceanic tidal surges and coastal erosion. In recent decades, biogeochemists have identified these intertidal wetlands as preeminent "blue carbon" repositories—natural coastal environments that sequester atmospheric carbon dioxide at rates significantly exceeding terrestrial rainforests.'
        },
        {
          letter: 'B',
          text: 'The extraordinary carbon storage capacity of mangroves is primarily attributable to their specialized root architecture and the anoxic conditions of waterlogged coastal soils. Unlike terrestrial forest soils where microbial decomposition rapidly converts fallen organic matter back into carbon dioxide, mangrove sediment is continuously inundated with saline or brackish water, inhibiting aerobic bacteria. Consequently, partially decomposed leaves, woody debris, and roots accumulate over millennia, forming deep subterranean carbon sinks that can extend several meters below the surface.'
        },
        {
          letter: 'C',
          text: 'However, anthropogenic coastal developments, aquaculture expansion, and hydrological alteration pose existential threats to these delicate ecosystems. When mangrove forests are cleared for commercial shrimp farming or maritime port expansion, the exposed sediment undergoes rapid oxidation. This disturbance transforms historical carbon reservoirs into acute emission sources, releasing gigatons of greenhouse gases into the atmosphere.'
        },
        {
          letter: 'D',
          text: 'To mitigate these adverse ecological repercussions, international conservation bodies are increasingly integrating blue carbon ecosystems into sovereign carbon credit trading frameworks. By monetizing the verified carbon storage capacity of restored mangrove corridors, developing coastal nations can cultivate sustainable economic incentives for marine biodiversity preservation.'
        }
      ],
      questions: [
        {
          id: 1,
          type: 'tfng' as const,
          prompt: 'Mangrove ecosystems sequester carbon at a faster rate than terrestrial rainforests.',
          correctAnswer: 'TRUE',
          explanation: 'Paragraph A states mangroves sequester carbon "at rates significantly exceeding terrestrial rainforests."',
          paragraphRef: 'Paragraph A',
          logicRule: 'Direct 100% factual synonym match (exceeding = faster).'
        },
        {
          id: 2,
          type: 'tfng' as const,
          prompt: 'Microbial decomposition in mangrove soils is accelerated by oxygen-rich water.',
          correctAnswer: 'FALSE',
          explanation: 'Paragraph B explicitly states mangrove soils have "anoxic [oxygen-depleted] conditions" which "inhibit aerobic bacteria", reducing decomposition, not accelerating it.',
          paragraphRef: 'Paragraph B',
          logicRule: 'Direct factual contradiction (anoxic vs oxygen-rich; inhibited vs accelerated).'
        },
        {
          id: 3,
          type: 'tfng' as const,
          prompt: 'Commercial shrimp farming is the single largest cause of mangrove deforestation worldwide.',
          correctAnswer: 'NOT GIVEN',
          explanation: 'Paragraph C mentions shrimp farming as one cause of clearance alongside port expansion, but never claims it is the "single largest" cause.',
          paragraphRef: 'Paragraph C',
          logicRule: 'Qualifier Trap: The activity is mentioned, but the superlative ranking is absent.'
        },
        {
          id: 4,
          type: 'tfng' as const,
          prompt: 'Restoring mangrove corridors can generate financial revenue through carbon credits.',
          correctAnswer: 'TRUE',
          explanation: 'Paragraph D notes that monetizing verified carbon capacity creates "sustainable economic incentives."',
          paragraphRef: 'Paragraph D',
          logicRule: 'Paraphrase match: economic incentives = financial revenue.'
        },
        {
          id: 5,
          type: 'fill' as const,
          prompt: 'Mangrove soils prevent decay because they are waterlogged and [ 5 ] (lacking oxygen).',
          correctAnswer: 'anoxic',
          acceptableAnswers: ['anoxic', 'Anoxic'],
          explanation: 'Paragraph B specifies "anoxic conditions of waterlogged coastal soils."',
          paragraphRef: 'Paragraph B',
          logicRule: 'Direct lexical extraction from Paragraph B.'
        }
      ]
    },
    {
      passageNumber: 2,
      title: 'Passage 2: Urban Microclimates and Anthropogenic Heat Islands',
      readingTimeRecommended: '18 Minutes',
      paragraphs: [
        {
          letter: 'A',
          text: 'The urban heat island (UHI) effect is a well-documented meteorological phenomenon wherein metropolitan centers experience significantly elevated ambient temperatures relative to surrounding rural hinterlands. This thermal divergence is exacerbated by high concentrations of asphalt, concrete, and thermal mass structures that absorb solar radiation during daylight hours and re-radiate thermal energy throughout the night.'
        },
        {
          letter: 'B',
          text: 'In addition to structural thermal absorption, anthropogenic heat discharges from vehicular exhaust, industrial machinery, and HVAC (heating, ventilation, and air conditioning) systems compound the localized temperature anomaly. During peak summer heatwaves, the compounding effect can elevate metropolitan temperatures by 4°C to 7°C above baseline regional norms.'
        },
        {
          letter: 'C',
          text: 'Urban planners are testing several mitigation paradigms. High-albedo reflective roof coatings, permeable pavements that facilitate evaporative cooling, and extensive urban tree canopy expansion have emerged as primary interventions. Empirical field data suggests that increasing urban canopy coverage by 20% can lower surface pavement temperatures by up to 12°C.'
        }
      ],
      questions: [
        {
          id: 6,
          type: 'tfng' as const,
          prompt: 'Metropolitan temperatures are consistently cooler at night than adjacent rural regions.',
          correctAnswer: 'FALSE',
          explanation: 'Paragraph A states that structures "re-radiate thermal energy throughout the night", keeping urban centers warmer.',
          paragraphRef: 'Paragraph A',
          logicRule: 'Direct contradiction of the UHI definition.'
        },
        {
          id: 7,
          type: 'tfng' as const,
          prompt: 'HVAC systems contribute to localized temperature increases in metropolitan areas.',
          correctAnswer: 'TRUE',
          explanation: 'Paragraph B confirms anthropogenic heat discharges from "HVAC systems compound the localized temperature anomaly."',
          paragraphRef: 'Paragraph B',
          logicRule: 'Direct causal match.'
        },
        {
          id: 8,
          type: 'tfng' as const,
          prompt: 'Permeable pavements are more cost-effective than reflective roof coatings.',
          correctAnswer: 'NOT GIVEN',
          explanation: 'Paragraph C mentions both interventions but provides zero cost-comparison data between them.',
          paragraphRef: 'Paragraph C',
          logicRule: 'Comparison Trap: Both items are listed, but comparative cost data is absent.'
        },
        {
          id: 9,
          type: 'fill' as const,
          prompt: 'Expanding urban tree canopies by 20% can reduce pavement temperatures by [ 9 ] °C.',
          correctAnswer: '12',
          acceptableAnswers: ['12', 'twelve', '12°C'],
          explanation: 'Paragraph C explicitly states "can lower surface pavement temperatures by up to 12°C."',
          paragraphRef: 'Paragraph C',
          logicRule: 'Numerical data extraction.'
        },
        {
          id: 10,
          type: 'fill' as const,
          prompt: 'Reflective roof coatings utilize high [ 10 ] materials to deflect solar energy.',
          correctAnswer: 'albedo',
          acceptableAnswers: ['albedo', 'Albedo'],
          explanation: 'Paragraph C notes "High-albedo reflective roof coatings."',
          paragraphRef: 'Paragraph C',
          logicRule: 'Scientific term extraction.'
        }
      ]
    },
    {
      passageNumber: 3,
      title: 'Passage 3: Cognitive Neural Dynamics of Memory Consolidation',
      readingTimeRecommended: '20 Minutes',
      paragraphs: [
        {
          letter: 'A',
          text: 'Memory consolidation—the biological transformation of labile, temporary experiences into permanent synaptic structures—has historically been viewed through a two-stage anatomical model. The hippocampus rapidly encodes episodic information, while the neocortex gradually assimilates these traces into overarching semantic networks through slow, repeated replays.'
        },
        {
          letter: 'B',
          text: 'Recent advances in optogenetics and high-density neural recording have revolutionized this paradigm. Researchers now recognize that memory replay during slow-wave non-REM sleep is not merely a passive echo, but an active, selective computational filtering process. Synaptic connections corresponding to salient, emotionally relevant information undergo long-term potentiation, while superfluous neural noise is systematically pruned.'
        },
        {
          letter: 'C',
          text: 'Furthermore, disrupted sleep architecture directly correlates with impaired cognitive retention. Sleep-deprived cohorts exhibit acute synaptic saturation, preventing the encoding of novel information on subsequent days. This research underscores that deep sleep is not an inert physiological state, but an indispensable cognitive engine.'
        }
      ],
      questions: [
        {
          id: 11,
          type: 'tfng' as const,
          prompt: 'The traditional memory model posited that the neocortex rapidly encodes temporary memories.',
          correctAnswer: 'FALSE',
          explanation: 'Paragraph A states the hippocampus rapidly encodes temporary memories, while the neocortex assimilates them "gradually" through "slow, repeated replays."',
          paragraphRef: 'Paragraph A',
          logicRule: 'Inverted anatomical role contradiction.'
        },
        {
          id: 12,
          type: 'tfng' as const,
          prompt: 'Memory replay during slow-wave sleep selectively prunes unnecessary neural information.',
          correctAnswer: 'TRUE',
          explanation: 'Paragraph B explicitly states that "superfluous neural noise is systematically pruned" during replay.',
          paragraphRef: 'Paragraph B',
          logicRule: 'Exact synonym match (unnecessary = superfluous; prunes = pruned).'
        },
        {
          id: 13,
          type: 'tfng' as const,
          prompt: 'Optogenetic interventions have fully cured memory degradation in clinical human trials.',
          correctAnswer: 'NOT GIVEN',
          explanation: 'Paragraph B notes optogenetics advanced the research paradigm, but makes no mention of clinical human trials or curing degradation.',
          paragraphRef: 'Paragraph B',
          logicRule: 'Scope Trap: Scientific technique mentioned, clinical human claim is absent.'
        },
        {
          id: 14,
          type: 'fill' as const,
          prompt: 'Episodic memory traces are transformed into permanent [ 14 ] structures.',
          correctAnswer: 'synaptic',
          acceptableAnswers: ['synaptic', 'Synaptic'],
          explanation: 'Paragraph A specifies "permanent synaptic structures."',
          paragraphRef: 'Paragraph A',
          logicRule: 'Direct lexical extraction.'
        },
        {
          id: 15,
          type: 'fill' as const,
          prompt: 'Active memory filtering occurs during slow-wave [ 15 ] sleep.',
          correctAnswer: 'non-REM',
          acceptableAnswers: ['non-REM', 'non-rem', 'non rem', 'NREM'],
          explanation: 'Paragraph B notes "slow-wave non-REM sleep."',
          paragraphRef: 'Paragraph B',
          logicRule: 'Exact scientific classification.'
        }
      ]
    }
  ]
};

export const IeltsReadingExamEngine: React.FC = () => {
  const [activePassage, setActivePassage] = useState<number>(1);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  
  // Independent passage submission tracking
  const [submittedPassages, setSubmittedPassages] = useState<{ [passageNum: number]: boolean }>({});
  const [secondsRemaining, setSecondsRemaining] = useState<number>(3600); // 60 mins

  const allPassagesSubmitted = [1, 2, 3].every(p => submittedPassages[p]);

  // Pacing Timer
  useEffect(() => {
    let timer: any;
    if (!allPassagesSubmitted && secondsRemaining > 0) {
      timer = setInterval(() => {
        setSecondsRemaining(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [allPassagesSubmitted, secondsRemaining]);

  const handleSelectAnswer = (qId: number, val: string) => {
    setUserAnswers(prev => ({ ...prev, [qId]: val }));
  };

  const isQuestionCorrect = (q: ReadingQuestion) => {
    const userVal = (userAnswers[q.id] || '').trim().toLowerCase();
    if (!userVal) return false;
    const acceptable = [q.correctAnswer.toLowerCase(), ...(q.acceptableAnswers?.map(a => a.toLowerCase()) || [])];
    return acceptable.includes(userVal);
  };

  const calculateBand = (raw: number, total: number = 15) => {
    const scaled = (raw / total) * 40;
    if (scaled >= 39) return 9.0;
    if (scaled >= 37) return 8.5;
    if (scaled >= 35) return 8.0;
    if (scaled >= 32) return 7.5;
    if (scaled >= 30) return 7.0;
    if (scaled >= 26) return 6.5;
    if (scaled >= 23) return 6.0;
    return 5.5;
  };

  // Submit single passage
  const handleSubmitPassage = (passageNum: number) => {
    setSubmittedPassages(prev => ({ ...prev, [passageNum]: true }));
    
    const passageData = READING_TEST_DATA.passages.find(p => p.passageNumber === passageNum);
    const passageCorrect = (passageData?.questions || []).filter(isQuestionCorrect).length;

    if (passageCorrect > 0) {
      confetti({ particleCount: 40, spread: 50, origin: { y: 0.6 } });
    }

    const newSubmittedMap = { ...submittedPassages, [passageNum]: true };
    const allDone = [1, 2, 3].every(p => newSubmittedMap[p]);
    if (allDone) {
      syncFullExamTelemetry();
    }
  };

  // Submit all passages at once
  const handleSubmitAllPassages = () => {
    const allMap: { [key: number]: boolean } = { 1: true, 2: true, 3: true };
    setSubmittedPassages(allMap);
    syncFullExamTelemetry();
    confetti({ particleCount: 70, spread: 70, origin: { y: 0.5 } });
  };

  const syncFullExamTelemetry = () => {
    const allQuestions = READING_TEST_DATA.passages.flatMap(p => p.questions);
    const totalCorrect = allQuestions.filter(isQuestionCorrect).length;
    const band = calculateBand(totalCorrect, allQuestions.length);

    recordIeltsTestResult({
      type: 'reading',
      title: 'Cambridge Academic Simulation (3-Passage Split-Screen Reading Lab)',
      rawScore: totalCorrect,
      maxScore: allQuestions.length,
      bandScore: band,
      percentage: Math.round((totalCorrect / allQuestions.length) * 100),
      details: {
        secondsRemaining
      }
    });
  };

  // Reset single passage
  const handleResetPassage = (passageNum: number) => {
    const passageData = READING_TEST_DATA.passages.find(p => p.passageNumber === passageNum);
    if (passageData) {
      setUserAnswers(prev => {
        const next = { ...prev };
        passageData.questions.forEach(q => {
          delete next[q.id];
        });
        return next;
      });
    }
    setSubmittedPassages(prev => ({ ...prev, [passageNum]: false }));
  };

  // Retake entire test
  const handleRetakeFullTest = () => {
    setSubmittedPassages({});
    setUserAnswers({});
    setSecondsRemaining(3600);
    setActivePassage(1);
  };

  // Proceed to next passage smoothly without refreshing
  const handleProceedToNextPassage = () => {
    if (activePassage < 3) {
      setActivePassage(prev => prev + 1);
    }
  };

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const currentPassageData = READING_TEST_DATA.passages.find(p => p.passageNumber === activePassage) || READING_TEST_DATA.passages[0];
  const isCurrentPassageSubmitted = !!submittedPassages[activePassage];
  
  // Passage calculations
  const currentPassageQuestions = currentPassageData.questions;
  const currentPassageCorrect = currentPassageQuestions.filter(isQuestionCorrect).length;
  
  // Overall calculations
  const allQuestions = READING_TEST_DATA.passages.flatMap(p => p.questions);
  const totalCorrectAll = allQuestions.filter(isQuestionCorrect).length;
  const totalAnsweredAll = Object.keys(userAnswers).filter(k => (userAnswers[Number(k)] || '').trim().length > 0).length;
  const completedPassagesCount = Object.values(submittedPassages).filter(Boolean).length;

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      
      {/* HEADER BAR */}
      <div className="p-6 bg-gradient-to-br from-teal-950 via-slate-900 to-teal-900 text-white rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" /> Split-Screen Academic Reading Lab
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold">
              Forensic T/F/NG Logic Gate
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">{READING_TEST_DATA.title}</h2>
          <p className="text-xs text-slate-300">
            Practice passage-by-passage with instant logic evaluation, or complete all 3 passages.
          </p>
        </div>

        {/* Pacing Timer & Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="p-3 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-xs flex items-center gap-2 font-mono text-sm text-teal-200">
            <Clock className="w-4 h-4 text-amber-300" />
            <span>Time Left: {formatTimer(secondsRemaining)}</span>
          </div>
          {!allPassagesSubmitted && (
            <button
              onClick={handleSubmitAllPassages}
              className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-bold text-xs transition shadow-md cursor-pointer"
            >
              Grade Full Test
            </button>
          )}
        </div>
      </div>

      {/* PROGRESS STEPPER BAR */}
      <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
          <ListOrdered className="w-4 h-4 text-teal-700" />
          <span>Progress: {completedPassagesCount} of 3 Passages Evaluated</span>
          <span className="text-slate-400 font-normal">({totalAnsweredAll}/15 questions answered)</span>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="w-full sm:w-48 h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
            <div 
              className="h-full bg-gradient-to-r from-teal-600 to-emerald-500 transition-all duration-500"
              style={{ width: `${(completedPassagesCount / 3) * 100}%` }}
            />
          </div>
          <span className="text-xs font-mono font-bold text-teal-900 shrink-0">
            {Math.round((completedPassagesCount / 3) * 100)}%
          </span>
        </div>
      </div>

      {/* PASSAGE SELECTION TABS WITH COMPLETION BADGES */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        {READING_TEST_DATA.passages.map(p => {
          const isPassSubmitted = !!submittedPassages[p.passageNumber];
          const passQs = p.questions;
          const passScore = passQs.filter(isQuestionCorrect).length;
          const isCurrent = activePassage === p.passageNumber;

          return (
            <button
              key={p.passageNumber}
              onClick={() => setActivePassage(p.passageNumber)}
              className={`p-3.5 rounded-2xl border-2 text-left transition cursor-pointer space-y-1.5 relative ${
                isCurrent 
                  ? 'border-teal-700 bg-teal-50 text-teal-950 shadow-md ring-2 ring-teal-600/20' 
                  : isPassSubmitted
                    ? 'border-emerald-300 bg-emerald-50/40 text-slate-800'
                    : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1">
                  Passage {p.passageNumber}
                  {isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-ping" />}
                </span>

                {isPassSubmitted ? (
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold flex items-center gap-1 border border-emerald-200">
                    <Check className="w-3 h-3 text-emerald-700" /> {passScore}/5
                  </span>
                ) : (
                  <span className="text-[10px] text-slate-400 font-medium">Fresh (5 Qs)</span>
                )}
              </div>

              <div className="text-xs font-bold truncate">{p.title.split(':')[1] || p.title}</div>
            </button>
          );
        })}
      </div>

      {/* SPLIT-SCREEN WORKSPACE: PASSAGE ON LEFT | QUESTIONS ON RIGHT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT PANE: AUTHENTIC ACADEMIC PASSAGE (7 Cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-6 max-h-[75vh] overflow-y-auto">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h3 className="text-base font-black text-slate-900">{currentPassageData.title}</h3>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <Highlighter className="w-3.5 h-3.5 text-teal-800" /> Digital Highlighter
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-800 leading-relaxed font-serif">
            {currentPassageData.paragraphs.map(p => (
              <div key={p.letter} className="p-3 bg-slate-50/50 rounded-2xl border border-slate-100 hover:border-slate-300 transition space-y-1">
                <span className="inline-block font-sans text-xs font-black px-2 py-0.5 rounded bg-teal-900 text-white mr-2">
                  [{p.letter}]
                </span>
                <span>{p.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PANE: QUESTIONS & FORENSIC LOGIC GATES (5 Cols) */}
        <div className="lg:col-span-5 p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-6 max-h-[75vh] overflow-y-auto">
          
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-teal-800" /> Questions {currentPassageData.questions[0].id}–{currentPassageData.questions[currentPassageData.questions.length - 1].id}
            </div>
            <div className="flex items-center gap-2">
              {isCurrentPassageSubmitted && (
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold border border-emerald-300">
                  {currentPassageCorrect}/5 Correct
                </span>
              )}
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">
                {currentPassageData.questions[0].type === 'tfng' ? 'T / F / NG' : 'Comprehension'}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {currentPassageData.questions.map(q => {
              const userVal = userAnswers[q.id] || '';
              const isCorrect = isQuestionCorrect(q);

              return (
                <div 
                  key={q.id}
                  className={`p-4 rounded-2xl border transition space-y-3 ${
                    isCurrentPassageSubmitted 
                      ? isCorrect 
                        ? 'bg-emerald-50/70 border-emerald-300' 
                        : 'bg-rose-50/70 border-rose-300' 
                      : 'bg-slate-50 border-slate-200 focus-within:border-teal-600 focus-within:bg-teal-50/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">Question {q.id}</span>
                    {isCurrentPassageSubmitted && (
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                        isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                      }`}>
                        {isCorrect ? <CheckCircle2 className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                        {isCorrect ? 'Correct' : 'Incorrect'}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-800 font-medium leading-relaxed">{q.prompt}</p>

                  {/* T/F/NG 3-Pill Logic Selector */}
                  {q.type === 'tfng' ? (
                    <div className="grid grid-cols-3 gap-1.5">
                      {['TRUE', 'FALSE', 'NOT GIVEN'].map(choice => (
                        <button
                          key={choice}
                          disabled={isCurrentPassageSubmitted}
                          onClick={() => handleSelectAnswer(q.id, choice)}
                          className={`py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                            userVal === choice 
                              ? 'bg-teal-900 text-white shadow-xs' 
                              : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 disabled:opacity-80'
                          }`}
                        >
                          {choice}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <input
                      type="text"
                      disabled={isCurrentPassageSubmitted}
                      value={userVal}
                      onChange={(e) => handleSelectAnswer(q.id, e.target.value)}
                      placeholder={isCurrentPassageSubmitted ? 'No answer' : 'Type extracted word...'}
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-teal-700 disabled:bg-slate-100 disabled:text-slate-700"
                    />
                  )}

                  {/* Forensic Review Breakdown (Only visible when THIS passage is submitted) */}
                  {isCurrentPassageSubmitted && (
                    <div className="text-[11px] space-y-1.5 pt-2 border-t border-slate-200">
                      <div className="font-bold text-emerald-900">
                        Correct Answer: <span className="font-mono">{q.correctAnswer}</span> ({q.paragraphRef})
                      </div>
                      <div className="text-slate-700 text-[10px] leading-relaxed">
                        📖 <strong>Reason:</strong> {q.explanation}
                      </div>
                      <div className="text-amber-900 text-[10px] font-semibold bg-amber-50 p-2 rounded-lg border border-amber-200">
                        ⚖️ <strong>Logic Rule:</strong> {q.logicRule}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* PASSAGE ACTION CONTROLS */}
          <div className="pt-3 border-t border-slate-200 space-y-3">
            {!isCurrentPassageSubmitted ? (
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleSubmitPassage(activePassage)}
                  className="w-full py-3 bg-teal-900 hover:bg-teal-800 text-white rounded-2xl font-bold text-xs transition flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4 text-teal-300" />
                  <span>Check Passage {activePassage} Answers (5 Qs)</span>
                </button>
              </div>
            ) : (
              <div className="p-4 bg-slate-900 text-white rounded-2xl space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-teal-300 font-bold">
                      Passage {activePassage} Result
                    </div>
                    <div className="text-base font-black text-white">
                      {currentPassageCorrect} / 5 Correct ({Math.round((currentPassageCorrect / 5) * 100)}%)
                    </div>
                  </div>

                  <button
                    onClick={() => handleResetPassage(activePassage)}
                    className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-bold transition flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Retake Passage
                  </button>
                </div>

                {activePassage < 3 ? (
                  <button
                    onClick={handleProceedToNextPassage}
                    className="w-full py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-black text-xs transition flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                  >
                    <span>Proceed to Passage {activePassage + 1} (Fresh)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmitAllPassages}
                    className="w-full py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-black text-xs transition flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                  >
                    <span>Finish Full Academic Reading Exam</span>
                    <Sparkles className="w-4 h-4" />
                  </button>
                )}
              </div>
            )}
          </div>

        </div>

      </div>

      {/* FULL EXAM OVERALL SUMMARY CARD (SHOWN WHEN ALL 3 PASSAGES ARE EVALUATED) */}
      {completedPassagesCount === 3 && (
        <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-950 text-white rounded-3xl shadow-xl space-y-6 border border-teal-500/30 animate-in zoom-in-95 duration-400">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 w-fit mx-auto sm:mx-0">
                <Award className="w-3.5 h-3.5" /> Full Academic Reading Exam Completed
              </span>
              <h3 className="text-2xl font-black text-white">
                Cumulative Result: {totalCorrectAll} / 15 Correct (Scaled /40: {Math.round((totalCorrectAll / 15) * 40)}/40)
              </h3>
              <p className="text-xs text-slate-300">
                Performance recorded to your candidate telemetry log.
              </p>
            </div>

            <div className="px-6 py-4 bg-amber-400 text-slate-950 font-black rounded-2xl text-2xl text-center shadow-lg">
              <div className="text-[10px] uppercase font-bold text-slate-800 tracking-wider">Official Band</div>
              Band {calculateBand(totalCorrectAll, 15)}
            </div>
          </div>

          {/* Passage Breakdown Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {READING_TEST_DATA.passages.map(p => {
              const pScore = p.questions.filter(isQuestionCorrect).length;
              return (
                <div key={p.passageNumber} className="p-3.5 bg-white/5 rounded-2xl border border-white/10 space-y-1">
                  <div className="text-[10px] font-bold uppercase text-teal-300">Passage {p.passageNumber}</div>
                  <div className="text-base font-black text-white">{pScore} / 5 Correct</div>
                  <div className="text-[10px] text-slate-400 font-medium">({Math.round((pScore / 5) * 100)}%)</div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-end pt-3 border-t border-slate-800">
            <button
              onClick={handleRetakeFullTest}
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" /> Reset Entire Reading Lab
            </button>
          </div>
        </div>
      )}

      {/* RECOMMENDED 10MS PREPARATION ENGINES */}
      <div className="p-6 bg-gradient-to-r from-teal-950 via-slate-900 to-teal-900 text-white rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-teal-800/40">
        <div className="space-y-1.5 text-center md:text-left">
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
            Official Recommended Resources
          </span>
          <h4 className="text-base sm:text-lg font-black text-white">
            Looking for Timed Academic Reading & Listening Mock Tests?
          </h4>
          <p className="text-xs text-slate-300 max-w-xl">
            Access authentic full-length timed tests with automated scoring, detailed logic rationales, or join live coaching.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
          <a
            href="https://10ms.io/eKLSMe"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-black text-xs transition flex items-center gap-1.5 shadow-md"
          >
            <span>📝 10MS Reading & Listening Mocks</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://10ms.io/hKLSB8"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-teal-800 hover:bg-teal-700 text-white rounded-xl font-bold text-xs transition flex items-center gap-1.5 border border-teal-600"
          >
            <span>🔥 IELTS LIVE Batch</span>
            <ArrowRight className="w-3.5 h-3.5 text-teal-300" />
          </a>
        </div>
      </div>

    </div>
  );
};
