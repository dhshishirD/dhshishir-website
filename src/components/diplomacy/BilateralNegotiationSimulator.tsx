import React, { useState } from 'react';
import { NEGOTIATION_SCENARIOS_DATA } from '../../data/negotiationScenariosData';
import type { NegotiationOption } from '../../data/negotiationScenariosData';
import { 
  RotateCcw, 
  CheckCircle2, 
  Printer
} from 'lucide-react';

interface BilateralNegotiationSimulatorProps {
  onScenarioCompleted?: (scenarioId: string, finalScore: number) => void;
}

export const BilateralNegotiationSimulator: React.FC<BilateralNegotiationSimulatorProps> = ({
  onScenarioCompleted
}) => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(NEGOTIATION_SCENARIOS_DATA[0].id);
  const activeScenario = NEGOTIATION_SCENARIOS_DATA.find(s => s.id === selectedScenarioId) || NEGOTIATION_SCENARIOS_DATA[0];

  const [currentRoundIdx, setCurrentRoundIdx] = useState<number>(0);
  const [leverageScore, setLeverageScore] = useState<number>(60);
  const [autonomyScore, setAutonomyScore] = useState<number>(65);
  const [economicGainScore, setEconomicGainScore] = useState<number>(55);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [activeFeedback, setActiveFeedback] = useState<string | null>(null);

  const currentRound = activeScenario.rounds[currentRoundIdx];

  const handleSelectOption = (opt: NegotiationOption) => {
    const newLeverage = Math.min(100, Math.max(10, leverageScore + opt.leverageDelta));
    const newAutonomy = Math.min(100, Math.max(10, autonomyScore + opt.autonomyDelta));
    const newEconomic = Math.min(100, Math.max(10, economicGainScore + opt.economicGainDelta));

    setLeverageScore(newLeverage);
    setAutonomyScore(newAutonomy);
    setEconomicGainScore(newEconomic);
    setActiveFeedback(opt.opponentCounterReaction);

    if (currentRoundIdx < activeScenario.rounds.length - 1) {
      setTimeout(() => {
        setCurrentRoundIdx(prev => prev + 1);
        setActiveFeedback(null);
      }, 2000);
    } else {
      setTimeout(() => {
        setIsCompleted(true);
        const compositeScore = Math.round((newLeverage + newAutonomy + newEconomic) / 3);
        if (onScenarioCompleted) {
          onScenarioCompleted(activeScenario.id, compositeScore);
        }
      }, 2000);
    }
  };

  const handleReset = () => {
    setCurrentRoundIdx(0);
    setLeverageScore(60);
    setAutonomyScore(65);
    setEconomicGainScore(55);
    setIsCompleted(false);
    setActiveFeedback(null);
  };

  const compositeScore = Math.round((leverageScore + autonomyScore + economicGainScore) / 3);

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Scenario Switcher Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-2 bg-slate-100 rounded-2xl border border-slate-200">
        {NEGOTIATION_SCENARIOS_DATA.map((sc, idx) => (
          <button
            key={sc.id}
            onClick={() => {
              setSelectedScenarioId(sc.id);
              handleReset();
            }}
            className={`flex-1 min-w-[220px] px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
              selectedScenarioId === sc.id
                ? 'bg-teal-900 text-white shadow-xs'
                : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200'
            }`}
          >
            <span>{sc.counterpartFlag}</span>
            <span>Table {idx + 1}: {sc.title.split('&')[0].trim()}</span>
          </button>
        ))}
      </div>

      {/* Diplomatic Mission Briefing Card */}
      <div className="p-6 sm:p-8 bg-white border border-slate-200 rounded-3xl space-y-4 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="px-3.5 py-1 rounded-full bg-teal-50 text-teal-900 text-xs font-bold border border-teal-200 flex items-center gap-1.5">
            <span>{activeScenario.counterpartFlag}</span> Bilateral Track-II Table • {activeScenario.counterpartNation}
          </span>
          <span className="text-xs text-slate-500 font-mono">{activeScenario.venue}</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-black text-slate-950 font-serif-title">
          {activeScenario.title}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {activeScenario.context}
        </p>
        <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-teal-950 font-medium">
          <strong className="text-teal-900">Bangladesh Envoy Mission Directive: </strong>{activeScenario.bangladeshMission}
        </div>
      </div>

      {/* Live Statecraft Gauges */}
      <div className="grid grid-cols-3 gap-3">
        <div className="p-4 bg-white rounded-2xl border border-slate-200 text-center shadow-2xs space-y-1">
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Diplomatic Leverage</div>
          <div className="text-xl sm:text-2xl font-black text-teal-900">{leverageScore}%</div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div className="bg-teal-800 h-full transition-all duration-300" style={{ width: `${leverageScore}%` }} />
          </div>
        </div>

        <div className="p-4 bg-white rounded-2xl border border-slate-200 text-center shadow-2xs space-y-1">
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Sovereign Autonomy</div>
          <div className="text-xl sm:text-2xl font-black text-teal-900">{autonomyScore}%</div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div className="bg-teal-700 h-full transition-all duration-300" style={{ width: `${autonomyScore}%` }} />
          </div>
        </div>

        <div className="p-4 bg-white rounded-2xl border border-slate-200 text-center shadow-2xs space-y-1">
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Economic Concession Gain</div>
          <div className="text-xl sm:text-2xl font-black text-teal-900">{economicGainScore}%</div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div className="bg-teal-900 h-full transition-all duration-300" style={{ width: `${economicGainScore}%` }} />
          </div>
        </div>
      </div>

      {!isCompleted && currentRound ? (
        /* ACTIVE ROUND DIALOG */
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 space-y-6 shadow-xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="text-xs font-bold text-teal-900 uppercase tracking-wider">
              Round {currentRound.roundNumber} of {activeScenario.rounds.length}: {currentRound.stageTitle}
            </div>
            <span className="text-xs text-slate-500 font-mono">Negotiation in Progress</span>
          </div>

          {/* Counterpart Demand Box */}
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
              <span>{activeScenario.counterpartFlag}</span>
              <span>{currentRound.counterpartSpeaker} ({currentRound.counterpartRole})</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-800 italic leading-relaxed font-serif-title">
              {currentRound.counterpartDemand}
            </p>
            <div className="text-[11px] text-teal-900 bg-white p-2.5 rounded-xl border border-teal-200 font-medium">
              <strong>Tactical Intelligence Advice: </strong>{currentRound.tacticalAdvice}
            </div>
          </div>

          {/* Feedback popup after selection */}
          {activeFeedback && (
            <div className="p-4 bg-teal-50 border border-teal-300 rounded-2xl space-y-1 animate-fade-in text-xs text-teal-950 font-medium">
              <div className="font-bold text-teal-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-800" /> Counterpart Reaction & Strategic Shift:
              </div>
              <p>{activeFeedback}</p>
            </div>
          )}

          {/* Diplomatic Options */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              Select Your Diplomatic Response & Strategic Counter-Proposal:
            </div>
            {currentRound.options.map(opt => (
              <button
                key={opt.id}
                onClick={() => handleSelectOption(opt)}
                disabled={!!activeFeedback}
                className="w-full p-5 rounded-2xl bg-white hover:bg-teal-50/60 border border-slate-200 hover:border-teal-300 text-left space-y-2 transition cursor-pointer group shadow-2xs disabled:opacity-50"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900 group-hover:text-teal-900 text-sm">{opt.responseTitle}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-teal-50 text-teal-900 border border-teal-200 font-bold">
                    {opt.tacticalStyle}
                  </span>
                </div>
                <p className="text-xs text-slate-600">{opt.responseDescription}</p>
                <div className="flex items-center gap-3 text-[10px] text-slate-400 font-mono">
                  <span>Leverage: {opt.leverageDelta >= 0 ? `+${opt.leverageDelta}` : opt.leverageDelta}%</span>
                  <span>Autonomy: {opt.autonomyDelta >= 0 ? `+${opt.autonomyDelta}` : opt.autonomyDelta}%</span>
                  <span>Economic: {opt.economicGainDelta >= 0 ? `+${opt.economicGainDelta}` : opt.economicGainDelta}%</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : isCompleted ? (
        /* CONCLUDED COMMUNIQUE SCREEN */
        <div className="p-6 sm:p-8 bg-white border border-teal-300 rounded-3xl space-y-6 shadow-sm animate-fade-in text-center">
          <div className="w-14 h-14 bg-teal-50 text-teal-900 rounded-2xl flex items-center justify-center mx-auto border border-teal-200">
            <CheckCircle2 className="w-8 h-8 text-teal-800" />
          </div>

          <div className="space-y-2">
            <div className="text-xs font-bold text-teal-900 uppercase tracking-widest">
              Bilateral Negotiation Concluded • Diplomatic Accord Reached
            </div>
            <h3 className="text-2xl font-black text-slate-950 font-serif-title">
              Joint Diplomatic Communiqué & Strategic Accord
            </h3>
            <p className="text-xs text-slate-600 max-w-lg mx-auto">
              Negotiations concluded with a Composite Strategic Score of <strong className="text-teal-900">{compositeScore}%</strong>.
            </p>
          </div>

          {/* Official Signed Communiqué Document */}
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl text-left space-y-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 text-xs font-mono text-slate-500">
              <span>{activeScenario.counterpartNation} — Bangladesh Joint Working Group</span>
              <span>{activeScenario.venue}</span>
            </div>
            <h4 className="font-serif-title font-bold text-base text-slate-900">
              {activeScenario.treatyTemplate.agreementTitle}
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed italic">
              "{activeScenario.treatyTemplate.corePreamble}"
            </p>
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-teal-950 uppercase tracking-wider block">Agreed Articles:</span>
              <ul className="space-y-1.5 text-xs text-slate-700 list-disc list-inside">
                {activeScenario.treatyTemplate.articles.map((art: string, i: number) => (
                  <li key={i}>{art}</li>
                ))}
              </ul>
            </div>
            <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
              <span>Signatory: <strong>Daloyar Hassan Shishir (Chief Negotiator)</strong></span>
              <span>Signatory: <strong>{activeScenario.rounds[0].counterpartSpeaker}</strong></span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-xl text-xs font-bold text-slate-800 flex items-center gap-1.5 transition cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Accord</span>
            </button>
            <button
              onClick={handleReset}
              className="px-5 py-2 bg-teal-900 hover:bg-teal-800 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer shadow-xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restart Scenario</span>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
