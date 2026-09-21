import React, { useState } from 'react';
import { 
  BarChart3, TrendingUp, Sparkles, CheckCircle2, XCircle, 
  Shuffle, Zap, LineChart, ArrowRight, PieChart, FileText, Info 
} from 'lucide-react';
import confetti from 'canvas-confetti';

// 1. OVERVIEW TRAP MINI-GAME DATA
interface OverviewScenario {
  id: number;
  chartType: string;
  topic: string;
  chartSummary: string;
  options: {
    text: string;
    isCorrect: boolean;
    examinerNote: string;
    bandRating: string;
  }[];
}

const OVERVIEW_SCENARIOS: OverviewScenario[] = [
  {
    id: 1,
    chartType: 'Line Graph',
    topic: 'Renewable vs Fossil Fuel Energy Consumption (2000–2025)',
    chartSummary: 'Fossil fuel started at 85% and declined steadily to 45%. Renewable energy started at 15% and surged rapidly to 55%, overtaking fossil fuels in 2020.',
    options: [
      {
        text: 'Overall, it is clear that while fossil fuel consumption underwent a progressive downward trajectory over the 25-year timeframe, renewable energy experienced a substantial upsurge, ultimately eclipsing traditional energy sources.',
        isCorrect: true,
        examinerNote: 'Perfect Band 9.0 Overview! Outlines general contrasting trends, identifies the key crossover point without cluttering the overview with raw percentage figures.',
        bandRating: 'Band 9.0'
      },
      {
        text: 'Overall, fossil fuels started at 85% in 2000 and dropped to 45% in 2025, while renewable energy was 15% in 2000 and increased to 55% in 2025.',
        isCorrect: false,
        examinerNote: 'Fatal Data Clutter Trap! Citing raw numbers in the overview prevents it from being a summary overview. Examiners penalize this down to Band 5.0 for Task Achievement.',
        bandRating: 'Band 5.5'
      },
      {
        text: 'In conclusion, energy is very important for the whole world and governments should definitely spend more money on solar power.',
        isCorrect: false,
        examinerNote: 'Task 2 Opinion Error! Task 1 requires objective factual reporting only. Never include personal opinions, recommendations, or moral judgments.',
        bandRating: 'Band 5.0'
      },
      {
        text: 'Overall, renewable energy was higher than fossil fuels throughout the entire period shown.',
        isCorrect: false,
        examinerNote: 'Factual Inaccuracy Trap! Renewable energy was lower for the first 20 years and only overtook fossil fuels around 2020.',
        bandRating: 'Band 5.0'
      }
    ]
  },
  {
    id: 2,
    chartType: 'Bar Chart',
    topic: 'University Graduates in STEM Fields Across 4 European Nations (2024)',
    chartSummary: 'Germany produced the highest total graduates in Engineering and Computer Science, while Spain recorded the lowest across all surveyed disciplines.',
    options: [
      {
        text: 'Overall, Germany dominated tertiary STEM graduate output by a considerable margin across all sectors, whereas Spain consistently accounted for the lowest proportion of graduates throughout the survey.',
        isCorrect: true,
        examinerNote: 'Flawless Band 9.0 Overview! Identifies the clear high and low leaders without listing individual numerical figures.',
        bandRating: 'Band 9.0'
      },
      {
        text: 'Overall, Germany had 120,000 engineering graduates and 80,000 CS graduates, whereas Spain had only 20,000 graduates.',
        isCorrect: false,
        examinerNote: 'Raw Figure Penalty! Overviews must capture the overarching pattern, not mechanical data listings.',
        bandRating: 'Band 5.5'
      },
      {
        text: 'Overall, engineering was popular in Germany and Spain is a warm Mediterranean country with good universities.',
        isCorrect: false,
        examinerNote: 'Irrelevant External Knowledge Trap! Stick exclusively to what is illustrated on the chart.',
        bandRating: 'Band 5.0'
      }
    ]
  }
];

export const IeltsTask1ChartMorpher: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sandbox' | 'overview_game' | 'lexicon'>('sandbox');

  // SANDBOX STATE
  const [chartType, setChartType] = useState<'line' | 'bar'>('line');
  const [pointStartA, setPointStartA] = useState<number>(20);
  const [pointEndA, setPointEndA] = useState<number>(85);
  const [pointStartB, setPointStartB] = useState<number>(80);
  const [pointEndB, setPointEndB] = useState<number>(30);

  // OVERVIEW GAME STATE
  const [gameScenarioIdx, setGameScenarioIdx] = useState(0);
  const [selectedOptionIdx, setSelectedOptionIdx] = useState<number | null>(null);
  const [hasSubmittedAnswer, setHasSubmittedAnswer] = useState(false);
  const [gameScore, setGameScore] = useState(0);

  // DYNAMIC SENTENCE SYNTHESIZER
  const diffA = pointEndA - pointStartA;
  const diffB = pointEndB - pointStartB;

  const getTrendVerbA = () => {
    if (diffA > 40) return { verb: 'witnessed an exponential surge', prep: 'from', prepEnd: 'to', adj: 'an extraordinary escalation' };
    if (diffA > 15) return { verb: 'demonstrated a steady upward trajectory', prep: 'from', prepEnd: 'to', adj: 'a moderate increase' };
    if (diffA > -15) return { verb: 'remained relatively constant and plateaued', prep: 'around', prepEnd: 'to', adj: 'minimal fluctuations' };
    if (diffA > -40) return { verb: 'experienced a noticeable downward trend', prep: 'from', prepEnd: 'to', adj: 'a moderate reduction' };
    return { verb: 'plummeted precipitously', prep: 'from', prepEnd: 'to', adj: 'a catastrophic plunge' };
  };

  const getTrendVerbB = () => {
    if (diffB > 40) return { verb: 'surged dramatically', prep: 'from', prepEnd: 'to' };
    if (diffB > 15) return { verb: 'rose steadily', prep: 'from', prepEnd: 'to' };
    if (diffB > -15) return { verb: 'hovered consistently around', prep: 'near', prepEnd: 'to' };
    if (diffB > -40) return { verb: 'decreased moderately', prep: 'from', prepEnd: 'to' };
    return { verb: 'plummeted sharply', prep: 'from', prepEnd: 'to' };
  };

  const trendA = getTrendVerbA();
  const trendB = getTrendVerbB();

  const isCrossover = (pointStartA < pointStartB && pointEndA > pointEndB) || (pointStartA > pointStartB && pointEndA < pointEndB);

  // OVERVIEW GAME HANDLER
  const currentScenario = OVERVIEW_SCENARIOS[gameScenarioIdx % OVERVIEW_SCENARIOS.length];

  const handleGameSelect = (idx: number) => {
    if (hasSubmittedAnswer) return;
    setSelectedOptionIdx(idx);
    setHasSubmittedAnswer(true);
    if (currentScenario.options[idx].isCorrect) {
      setGameScore(prev => prev + 100);
      confetti({ particleCount: 50, spread: 50, origin: { y: 0.6 } });
    }
  };

  const nextScenario = () => {
    setSelectedOptionIdx(null);
    setHasSubmittedAnswer(false);
    setGameScenarioIdx(prev => prev + 1);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl text-slate-900">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-teal-50 text-teal-800 rounded-2xl border border-teal-200">
            <BarChart3 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
              IELTS Writing Task 1 Academic Chart-Morpher & Live Reporter
              <span className="text-xs bg-teal-50 text-teal-900 border border-teal-200 px-2.5 py-0.5 rounded-full font-semibold">SVG Data Sandbox</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">Drag interactive graph nodes to generate live Band 8.5 reporting sentences, master prepositions, and spot overview traps.</p>
          </div>
        </div>

        {/* Mode Selector */}
        <div className="flex gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 text-xs font-bold">
          <button
            onClick={() => setActiveTab('sandbox')}
            className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer ${activeTab === 'sandbox' ? 'bg-teal-900 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            <TrendingUp className="w-3.5 h-3.5" /> SVG Chart Sandbox
          </button>
          <button
            onClick={() => setActiveTab('overview_game')}
            className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer ${activeTab === 'overview_game' ? 'bg-teal-900 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            <Zap className="w-3.5 h-3.5" /> Overview Trap Game
          </button>
          <button
            onClick={() => setActiveTab('lexicon')}
            className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer ${activeTab === 'lexicon' ? 'bg-teal-900 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            <BarChart3 className="w-3.5 h-3.5" /> Task 1 Cheat Sheet
          </button>
        </div>
      </div>

      {/* TAB 1: INTERACTIVE SVG DATA SANDBOX */}
      {activeTab === 'sandbox' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Interactive Visual Canvas */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between bg-slate-50 p-3 rounded-2xl border border-slate-200">
              <span className="text-xs font-bold text-slate-700">Chart Visualization:</span>
              <div className="flex gap-1">
                <button
                  onClick={() => setChartType('line')}
                  className={`px-3 py-1 rounded-xl text-xs font-semibold transition cursor-pointer ${chartType === 'line' ? 'bg-teal-900 text-white' : 'bg-white text-slate-600 border border-slate-200'}`}
                >
                  <LineChart className="w-3.5 h-3.5 inline mr-1" /> Dynamic Line
                </button>
                <button
                  onClick={() => setChartType('bar')}
                  className={`px-3 py-1 rounded-xl text-xs font-semibold transition cursor-pointer ${chartType === 'bar' ? 'bg-teal-900 text-white' : 'bg-white text-slate-600 border border-slate-200'}`}
                >
                  <BarChart3 className="w-3.5 h-3.5 inline mr-1" /> Comparative Bar
                </button>
              </div>
            </div>

            {/* SVG Interactive Canvas */}
            <div className="p-6 bg-slate-900 rounded-3xl border border-slate-800 text-white relative shadow-xl overflow-hidden">
              <div className="flex justify-between text-xs text-slate-400 mb-2 font-mono">
                <span>Clean Energy vs Fossil Fuels (2000–2025)</span>
                <span>Values in % Share</span>
              </div>

              {/* Vector Graph Display */}
              <svg className="w-full h-48 sm:h-56 overflow-visible" viewBox="0 0 300 160">
                {/* Background Grid Lines */}
                <line x1="30" y1="20" x2="290" y2="20" stroke="#334155" strokeDasharray="3 3" />
                <line x1="30" y1="60" x2="290" y2="60" stroke="#334155" strokeDasharray="3 3" />
                <line x1="30" y1="100" x2="290" y2="100" stroke="#334155" strokeDasharray="3 3" />
                <line x1="30" y1="140" x2="290" y2="140" stroke="#475569" />

                {/* Y Axis Labels */}
                <text x="5" y="24" fill="#94a3b8" fontSize="9">100%</text>
                <text x="12" y="64" fill="#94a3b8" fontSize="9">60%</text>
                <text x="12" y="104" fill="#94a3b8" fontSize="9">30%</text>
                <text x="18" y="144" fill="#94a3b8" fontSize="9">0%</text>

                {/* X Axis Labels */}
                <text x="45" y="156" fill="#94a3b8" fontSize="9">2000</text>
                <text x="155" y="156" fill="#94a3b8" fontSize="9">2012</text>
                <text x="260" y="156" fill="#94a3b8" fontSize="9">2025</text>

                {chartType === 'line' ? (
                  <>
                    {/* Line A: Solar / Clean Energy (Teal) */}
                    <path
                      d={`M 55 ${140 - pointStartA * 1.2} Q 160 ${140 - ((pointStartA + pointEndA) / 2) * 1.2} 270 ${140 - pointEndA * 1.2}`}
                      fill="none"
                      stroke="#2dd4bf"
                      strokeWidth="4"
                      className="transition-all duration-300"
                    />
                    {/* Line B: Fossil Fuel (Amber) */}
                    <path
                      d={`M 55 ${140 - pointStartB * 1.2} Q 160 ${140 - ((pointStartB + pointEndB) / 2) * 1.2} 270 ${140 - pointEndB * 1.2}`}
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="4"
                      className="transition-all duration-300"
                    />

                    {/* Nodes for Line A */}
                    <circle cx="55" cy={140 - pointStartA * 1.2} r="6" fill="#2dd4bf" className="animate-pulse" />
                    <circle cx="270" cy={140 - pointEndA * 1.2} r="6" fill="#2dd4bf" className="animate-pulse" />

                    {/* Nodes for Line B */}
                    <circle cx="55" cy={140 - pointStartB * 1.2} r="6" fill="#f59e0b" className="animate-pulse" />
                    <circle cx="270" cy={140 - pointEndB * 1.2} r="6" fill="#f59e0b" className="animate-pulse" />
                  </>
                ) : (
                  <>
                    {/* Bar A: 2000 vs 2025 */}
                    <rect x="45" y={140 - pointStartA * 1.2} width="18" height={pointStartA * 1.2} fill="#2dd4bf" rx="3" />
                    <rect x="68" y={140 - pointStartB * 1.2} width="18" height={pointStartB * 1.2} fill="#f59e0b" rx="3" />

                    <rect x="245" y={140 - pointEndA * 1.2} width="18" height={pointEndA * 1.2} fill="#2dd4bf" rx="3" />
                    <rect x="268" y={140 - pointEndB * 1.2} width="18" height={pointEndB * 1.2} fill="#f59e0b" rx="3" />
                  </>
                )}
              </svg>

              {/* Legend */}
              <div className="flex justify-center gap-6 text-xs mt-3 pt-2 border-t border-slate-800">
                <span className="flex items-center gap-1.5 text-teal-300 font-semibold">
                  <span className="w-3 h-3 rounded-full bg-teal-400 inline-block" /> Clean Energy ({pointEndA}%)
                </span>
                <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
                  <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" /> Fossil Fuel ({pointEndB}%)
                </span>
              </div>
            </div>

            {/* Interactive Node Sliders */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-xs">
              <div className="font-bold text-slate-800 flex items-center justify-between">
                <span>Adjust Data Nodes (Drag to Morph Trends):</span>
                <button
                  onClick={() => {
                    setPointStartA(Math.floor(Math.random() * 40) + 10);
                    setPointEndA(Math.floor(Math.random() * 50) + 50);
                    setPointStartB(Math.floor(Math.random() * 40) + 60);
                    setPointEndB(Math.floor(Math.random() * 40) + 10);
                  }}
                  className="text-[11px] text-teal-800 hover:text-teal-900 font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <Shuffle className="w-3 h-3" /> Randomize Trends
                </button>
              </div>

              {/* Clean Energy Sliders */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] text-slate-600">
                  <span className="font-semibold text-teal-800">Clean Energy (2000): {pointStartA}%</span>
                  <span className="font-semibold text-teal-800">Clean Energy (2025): {pointEndA}%</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="range"
                    min="5"
                    max="95"
                    value={pointStartA}
                    onChange={e => setPointStartA(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                  />
                  <input
                    type="range"
                    min="5"
                    max="95"
                    value={pointEndA}
                    onChange={e => setPointEndA(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
                  />
                </div>
              </div>

              {/* Fossil Fuel Sliders */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] text-slate-600">
                  <span className="font-semibold text-amber-700">Fossil Fuel (2000): {pointStartB}%</span>
                  <span className="font-semibold text-amber-700">Fossil Fuel (2025): {pointEndB}%</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="range"
                    min="5"
                    max="95"
                    value={pointStartB}
                    onChange={e => setPointStartB(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                  />
                  <input
                    type="range"
                    min="5"
                    max="95"
                    value={pointEndB}
                    onChange={e => setPointEndB(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Semantic Sentence Synthesizer */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-teal-800" /> Synthesized Band 8.5+ Reporting Phrases
                </h4>
                <span className="text-[10px] bg-teal-50 text-teal-900 border border-teal-200 px-2.5 py-0.5 rounded-full font-bold">
                  Live Grammar Engine
                </span>
              </div>

              {/* Synthesized Trend Sentences */}
              <div className="space-y-3">
                {/* Sentence 1: Dynamic Trend reporting */}
                <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    1. Trend Sentence (Clean Energy):
                  </div>
                  <p className="text-sm text-slate-900 font-serif leading-relaxed">
                    "Between 2000 and 2025, renewable energy consumption{' '}
                    <span className="font-bold text-teal-800 underline decoration-teal-300">{trendA.verb}</span>{' '}
                    {trendA.prep} <span className="font-mono font-bold text-slate-800">{pointStartA}%</span> to{' '}
                    <span className="font-mono font-bold text-slate-800">{pointEndA}%</span>, representing an overall change of{' '}
                    <span className="font-mono font-bold text-emerald-700">{Math.abs(diffA)} percentage points</span>."
                  </p>
                </div>

                {/* Sentence 2: Comparative / Crossover reporting */}
                <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    2. Comparative Conjunction & Fossil Fuel Trend:
                  </div>
                  <p className="text-sm text-slate-900 font-serif leading-relaxed">
                    "In stark contrast, fossil fuel utilization{' '}
                    <span className="font-bold text-amber-700 underline decoration-amber-300">{trendB.verb}</span>{' '}
                    {trendB.prep} <span className="font-mono font-bold text-slate-800">{pointStartB}%</span> to{' '}
                    <span className="font-mono font-bold text-slate-800">{pointEndB}%</span>
                    {isCrossover ? (
                      <span className="font-semibold text-purple-800">
                        , with renewable energy definitively overtaking conventional fuels by the close of the period
                      </span>
                    ) : (
                      <span> over the identical timeframe</span>
                    )}."
                  </p>
                </div>

                {/* Sentence 3: Band 9.0 General Overview Formula */}
                <div className="p-4 bg-teal-900 text-white rounded-2xl shadow-md space-y-2">
                  <div className="text-[11px] font-bold text-teal-300 uppercase tracking-wider flex items-center justify-between">
                    <span>3. Examiner-Ready Overview Paragraph:</span>
                    <span className="text-[10px] bg-teal-800 px-2 py-0.5 rounded text-teal-200">Zero Raw Figures</span>
                  </div>
                  <p className="text-xs sm:text-sm font-serif leading-relaxed text-slate-100">
                    "Overall, it is manifest that while renewable energy underwent an impressive upward trajectory, fossil fuel reliance experienced a pronounced decline{isCrossover ? ', culminating in a fundamental crossover in global energy dependency' : ''}."
                  </p>
                </div>
              </div>

              {/* Mathematical Preposition Master Box */}
              <div className="p-4 bg-white rounded-2xl border border-slate-200 text-xs space-y-2">
                <div className="font-bold text-slate-800 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-teal-800" /> Crucial Preposition Formula Matrix:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
                  <div className="p-2 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="font-bold text-teal-800 block">Rose BY (Difference):</span>
                    <span>Rose <strong>by {Math.abs(diffA)}%</strong> (amount of change)</span>
                  </div>
                  <div className="p-2 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="font-bold text-teal-800 block">Rose TO (Destination):</span>
                    <span>Rose <strong>to {pointEndA}%</strong> (final level reached)</span>
                  </div>
                  <div className="p-2 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="font-bold text-teal-800 block">An increase OF:</span>
                    <span>An increase <strong>of {Math.abs(diffA)}%</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: OVERVIEW TRAP SPOTTER MINI-GAME */}
      {activeTab === 'overview_game' && (
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex items-center justify-between bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div>
              <span className="text-[11px] font-bold text-teal-800 uppercase tracking-wider">
                Scenario {gameScenarioIdx + 1} of {OVERVIEW_SCENARIOS.length}
              </span>
              <h4 className="text-base font-bold text-slate-900">{currentScenario.topic}</h4>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-500">Total Score:</span>
              <div className="text-xl font-black text-teal-800">{gameScore} pts</div>
            </div>
          </div>

          {/* Scenario Context Box */}
          <div className="p-5 bg-teal-50/70 rounded-2xl border border-teal-200 text-xs text-slate-700 space-y-1">
            <span className="font-bold text-teal-950 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-teal-800" /> Chart Data Summary:
            </span>
            <p className="leading-relaxed">{currentScenario.chartSummary}</p>
          </div>

          {/* 4 Candidate Overviews */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-slate-700 block">Select the only Band 9.0 examiner-compliant Overview statement:</span>
            {currentScenario.options.map((opt, idx) => {
              const isSelected = selectedOptionIdx === idx;
              let style = 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800';
              if (hasSubmittedAnswer) {
                if (opt.isCorrect) style = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-medium';
                else if (isSelected) style = 'bg-red-50 border-red-500 text-red-950';
              }

              return (
                <div
                  key={idx}
                  onClick={() => handleGameSelect(idx)}
                  className={`p-4 rounded-2xl border-2 transition cursor-pointer space-y-2 ${style}`}
                >
                  <div className="flex items-start justify-between gap-3 text-xs sm:text-sm font-serif">
                    <p className="leading-relaxed">"{opt.text}"</p>
                    {hasSubmittedAnswer && opt.isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />}
                    {hasSubmittedAnswer && isSelected && !opt.isCorrect && <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />}
                  </div>

                  {hasSubmittedAnswer && isSelected && (
                    <div className="pt-2 border-t border-slate-200/60 text-xs space-y-1">
                      <div className="font-bold flex items-center justify-between">
                        <span>{opt.isCorrect ? '✓ Examiner Assessment:' : '⚠️ Penalty Trap Detected:'}</span>
                        <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${opt.isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
                          {opt.bandRating}
                        </span>
                      </div>
                      <p className="text-slate-600 text-[11px]">{opt.examinerNote}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {hasSubmittedAnswer && (
            <button
              onClick={nextScenario}
              className="w-full py-3.5 rounded-2xl bg-teal-900 hover:bg-teal-800 text-white font-bold text-xs transition flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              Next Challenge Scenario <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      )}

      {/* TAB 3: TASK 1 VOCABULARY & PREPOSITION CHEAT SHEET */}
      {activeTab === 'lexicon' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Column 1: Upward Trends */}
            <div className="p-5 bg-emerald-50/60 rounded-3xl border border-emerald-200 space-y-3 text-xs">
              <h5 className="font-bold text-emerald-950 flex items-center gap-1.5 text-sm">
                <TrendingUp className="w-4 h-4 text-emerald-700" /> Upward Trend Lexicon
              </h5>
              <ul className="space-y-2 text-slate-700 text-[11px]">
                <li className="p-2 bg-white rounded-xl border border-emerald-100">
                  <span className="font-bold text-emerald-900">surged dramatically</span> — Rapid, sharp jump
                </li>
                <li className="p-2 bg-white rounded-xl border border-emerald-100">
                  <span className="font-bold text-emerald-900">witnessed an upsurge</span> — Elegant nominalization
                </li>
                <li className="p-2 bg-white rounded-xl border border-emerald-100">
                  <span className="font-bold text-emerald-900">peaked at a high of</span> — Reached highest vertex
                </li>
                <li className="p-2 bg-white rounded-xl border border-emerald-100">
                  <span className="font-bold text-emerald-900">climbed exponentially</span> — Continuous acceleration
                </li>
              </ul>
            </div>

            {/* Column 2: Downward & Fluctuations */}
            <div className="p-5 bg-amber-50/60 rounded-3xl border border-amber-200 space-y-3 text-xs">
              <h5 className="font-bold text-amber-950 flex items-center gap-1.5 text-sm">
                <TrendingUp className="w-4 h-4 text-amber-700 rotate-180" /> Downward & Stability
              </h5>
              <ul className="space-y-2 text-slate-700 text-[11px]">
                <li className="p-2 bg-white rounded-xl border border-amber-100">
                  <span className="font-bold text-amber-900">plummeted precipitously</span> — Sudden, catastrophic drop
                </li>
                <li className="p-2 bg-white rounded-xl border border-amber-100">
                  <span className="font-bold text-amber-900">hit a trough of</span> — Reached the lowest point
                </li>
                <li className="p-2 bg-white rounded-xl border border-amber-100">
                  <span className="font-bold text-amber-900">plateaued / leveled off</span> — Flatlined after movement
                </li>
                <li className="p-2 bg-white rounded-xl border border-amber-100">
                  <span className="font-bold text-amber-900">fluctuated erratically</span> — Inconsistent waves
                </li>
              </ul>
            </div>

            {/* Column 3: Proportions & Static Shares */}
            <div className="p-5 bg-teal-50/60 rounded-3xl border border-teal-200 space-y-3 text-xs">
              <h5 className="font-bold text-teal-950 flex items-center gap-1.5 text-sm">
                <PieChart className="w-4 h-4 text-teal-800" /> Proportions & Slices
              </h5>
              <ul className="space-y-2 text-slate-700 text-[11px]">
                <li className="p-2 bg-white rounded-xl border border-teal-100">
                  <span className="font-bold text-teal-900">accounted for the lion's share</span> — Vast majority
                </li>
                <li className="p-2 bg-white rounded-xl border border-teal-100">
                  <span className="font-bold text-teal-900">comprised a negligible percentage</span> — Very small part
                </li>
                <li className="p-2 bg-white rounded-xl border border-teal-100">
                  <span className="font-bold text-teal-900">eclipsed by a factor of</span> — Substantially surpassed
                </li>
                <li className="p-2 bg-white rounded-xl border border-teal-100">
                  <span className="font-bold text-teal-900">constituted approximately half</span> — ~50% share
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
