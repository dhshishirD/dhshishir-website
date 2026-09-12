import React, { useState } from 'react';
import {
  Sliders, Shield, TrendingUp, Globe, Scale, Zap,
  AlertTriangle, CheckCircle2, RotateCcw,
  Sparkles, Printer, Compass
} from 'lucide-react';

interface ScenarioPreset {
  id: string;
  name: string;
  tagline: string;
  description: string;
  badgeColor: string;
  levers: {
    alignment: 'balanced_neutral' | 'indo_pacific_us' | 'eurasian_china' | 'neighborhood_india';
    maritime: 'commercial_open' | 'joint_security' | 'a2ad_fortified';
    waterEnergy: 'subregional_bbin' | 'bilateral_adhoc' | 'sovereign_barrages';
    tradeFinance: 'eu_gsp_cepa' | 'brics_dedollarization' | 'tariff_protectionism';
    frontierSecurity: 'dual_track_ula' | 'junta_exclusive' | 'closed_fortress';
  };
}

const PRESETS: ScenarioPreset[] = [
  {
    id: 'bay_of_bengal_bridge',
    name: 'The Bay of Bengal Bridge (Optimal Multi-Vector)',
    tagline: 'Balanced Multi-Alignment & Sub-Regional Hub',
    description: 'Strict constitutional neutrality, engaging Quad MDA commercially while hosting BRI infrastructure, expanding EU GSP+ trade, and importing BBIN Himalayan clean hydropower.',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    levers: {
      alignment: 'balanced_neutral',
      maritime: 'commercial_open',
      waterEnergy: 'subregional_bbin',
      tradeFinance: 'eu_gsp_cepa',
      frontierSecurity: 'dual_track_ula'
    }
  },
  {
    id: 'eurasian_continental',
    name: 'Deep Eurasian & BRI Integration',
    tagline: 'High Infrastructure Capex with Sanction Exposure',
    description: 'Prioritizing Chinese Belt and Road loans, Russian nuclear grid expansion, BRICS New Development Bank accession, and local currency / RMB debt settlement.',
    badgeColor: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
    levers: {
      alignment: 'eurasian_china',
      maritime: 'commercial_open',
      waterEnergy: 'sovereign_barrages',
      tradeFinance: 'brics_dedollarization',
      frontierSecurity: 'junta_exclusive'
    }
  },
  {
    id: 'indo_pacific_democratic',
    name: 'Indo-Pacific Democratic Alignment',
    tagline: 'Western Export Security & Regional Defense Cooperation',
    description: 'Joining US IPEF supply chains, fast-tracking EU GSP+ labor compliance, Quad maritime intelligence sharing, and bilateral CEPA pacts with Japan and India.',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    levers: {
      alignment: 'indo_pacific_us',
      maritime: 'joint_security',
      waterEnergy: 'subregional_bbin',
      tradeFinance: 'eu_gsp_cepa',
      frontierSecurity: 'dual_track_ula'
    }
  },
  {
    id: 'fortress_autarky',
    name: 'Fortress Sovereignty & Self-Reliance',
    tagline: 'High Defense Readiness with Trade Insulation',
    description: 'Maximizing subsurface A2/AD naval deterrence, unilateral river training (Ganges/Teesta barrages), strict border fortification, and domestic industrial tariffs.',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    levers: {
      alignment: 'balanced_neutral',
      maritime: 'a2ad_fortified',
      waterEnergy: 'sovereign_barrages',
      tradeFinance: 'tariff_protectionism',
      frontierSecurity: 'closed_fortress'
    }
  }
];

export const GeopoliticalRiskSimulator: React.FC = () => {
  const [selectedPreset, setSelectedPreset] = useState<string>('bay_of_bengal_bridge');
  
  // Levers state
  const [alignment, setAlignment] = useState<ScenarioPreset['levers']['alignment']>('balanced_neutral');
  const [maritime, setMaritime] = useState<ScenarioPreset['levers']['maritime']>('commercial_open');
  const [waterEnergy, setWaterEnergy] = useState<ScenarioPreset['levers']['waterEnergy']>('subregional_bbin');
  const [tradeFinance, setTradeFinance] = useState<ScenarioPreset['levers']['tradeFinance']>('eu_gsp_cepa');
  const [frontierSecurity, setFrontierSecurity] = useState<ScenarioPreset['levers']['frontierSecurity']>('dual_track_ula');

  // Load preset
  const handleSelectPreset = (presetId: string) => {
    const p = PRESETS.find(x => x.id === presetId);
    if (!p) return;
    setSelectedPreset(presetId);
    setAlignment(p.levers.alignment);
    setMaritime(p.levers.maritime);
    setWaterEnergy(p.levers.waterEnergy);
    setTradeFinance(p.levers.tradeFinance);
    setFrontierSecurity(p.levers.frontierSecurity);
  };

  // Calculate dynamic scores
  let sovereigntyScore = 70;
  let tradeResilienceScore = 70;
  let energySecurityScore = 70;
  let frictionScore = 30; // lower is better
  let deterrenceScore = 65;

  // Alignment impacts
  if (alignment === 'balanced_neutral') {
    sovereigntyScore += 18;
    tradeResilienceScore += 12;
    energySecurityScore += 10;
    frictionScore += 5;
    deterrenceScore += 10;
  } else if (alignment === 'indo_pacific_us') {
    sovereigntyScore += 5;
    tradeResilienceScore += 16;
    energySecurityScore += 5;
    frictionScore += 22; // higher friction with China
    deterrenceScore += 12;
  } else if (alignment === 'eurasian_china') {
    sovereigntyScore += 2;
    tradeResilienceScore += 8;
    energySecurityScore += 18;
    frictionScore += 28; // higher friction with US & India
    deterrenceScore += 8;
  } else if (alignment === 'neighborhood_india') {
    sovereigntyScore += 4;
    tradeResilienceScore += 10;
    energySecurityScore += 12;
    frictionScore += 18;
    deterrenceScore += 5;
  }

  // Maritime impacts
  if (maritime === 'commercial_open') {
    sovereigntyScore += 6;
    tradeResilienceScore += 10;
    frictionScore -= 5;
  } else if (maritime === 'joint_security') {
    tradeResilienceScore += 4;
    frictionScore += 12;
    deterrenceScore += 8;
  } else if (maritime === 'a2ad_fortified') {
    sovereigntyScore += 8;
    deterrenceScore += 18;
    frictionScore += 10;
  }

  // Water & Energy impacts
  if (waterEnergy === 'subregional_bbin') {
    energySecurityScore += 14;
    tradeResilienceScore += 8;
    frictionScore -= 4;
  } else if (waterEnergy === 'sovereign_barrages') {
    sovereigntyScore += 10;
    energySecurityScore += 4;
    frictionScore += 8;
  } else if (waterEnergy === 'bilateral_adhoc') {
    energySecurityScore -= 6;
    frictionScore += 6;
  }

  // Trade & Finance impacts
  if (tradeFinance === 'eu_gsp_cepa') {
    tradeResilienceScore += 15;
    sovereigntyScore += 4;
    frictionScore -= 6;
  } else if (tradeFinance === 'brics_dedollarization') {
    tradeResilienceScore += 4;
    sovereigntyScore += 6;
    frictionScore += 15; // OFAC sanctions sensitivity
  } else if (tradeFinance === 'tariff_protectionism') {
    tradeResilienceScore -= 12;
    sovereigntyScore += 8;
  }

  // Frontier Security impacts
  if (frontierSecurity === 'dual_track_ula') {
    sovereigntyScore += 8;
    deterrenceScore += 6;
    frictionScore -= 2;
  } else if (frontierSecurity === 'closed_fortress') {
    deterrenceScore += 12;
    tradeResilienceScore -= 4;
    frictionScore += 8;
  } else if (frontierSecurity === 'junta_exclusive') {
    deterrenceScore -= 8;
    frictionScore += 16;
  }

  // Clamping
  sovereigntyScore = Math.min(99, Math.max(20, sovereigntyScore));
  tradeResilienceScore = Math.min(99, Math.max(20, tradeResilienceScore));
  energySecurityScore = Math.min(99, Math.max(20, energySecurityScore));
  frictionScore = Math.min(99, Math.max(10, frictionScore));
  deterrenceScore = Math.min(99, Math.max(20, deterrenceScore));

  const getScoreColor = (val: number, inverse = false) => {
    if (inverse) {
      if (val <= 30) return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
      if (val <= 55) return 'text-amber-400 bg-amber-500/10 border-amber-500/30';
      return 'text-rose-400 bg-rose-500/10 border-rose-500/30';
    }
    if (val >= 80) return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
    if (val >= 60) return 'text-amber-400 bg-amber-500/10 border-amber-500/30';
    return 'text-rose-400 bg-rose-500/10 border-rose-500/30';
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Sliders className="w-3.5 h-3.5" /> Interactive Geopolitical Engine
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Strategic Scenario & Geopolitical Risk Simulator
            </h2>
            <p className="text-sm text-slate-300 max-w-3xl mt-1.5 leading-relaxed">
              Model multi-vector policy recalibrations for Bangladesh across Great Power diplomacy (US-China-India), Bay of Bengal maritime transit, transboundary energy corridors, and post-LDC trade resilience.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleSelectPreset('bay_of_bengal_bridge')}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl border border-slate-700 transition flex items-center gap-1.5 cursor-pointer shadow"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset Levers
            </button>
            <button
              onClick={() => window.print()}
              className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 cursor-pointer shadow-lg"
            >
              <Printer className="w-3.5 h-3.5" /> Export Simulation Memo
            </button>
          </div>
        </div>
      </div>

      {/* Preset Selector */}
      <div className="space-y-3">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" /> Strategic Scenario Presets
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {PRESETS.map((preset) => {
            const isSelected = selectedPreset === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => handleSelectPreset(preset.id)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-800/90 border-cyan-500 ring-2 ring-cyan-500/30 shadow-lg'
                    : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/50 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${preset.badgeColor}`}>
                      {preset.name.split(' ')[0]}
                    </span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />}
                  </div>
                  <h4 className="text-sm font-black text-white leading-snug">{preset.name}</h4>
                  <div className="text-xs text-cyan-400 font-semibold mt-0.5">{preset.tagline}</div>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed line-clamp-3">{preset.description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Simulation Workspace: Levers (Left) + Real-Time Scores & Great Power Matrix (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Interactive Policy Levers (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Sliders className="w-4 h-4 text-cyan-400" /> Strategic Policy Levers
              </h3>
              <span className="text-xs text-slate-400">5 Calibration Vectors</span>
            </div>

            {/* Lever 1: Great Power Alignment Vector */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
                <span>1. Great Power Alignment Vector</span>
                <span className="text-[11px] text-cyan-400 capitalize">{alignment.replace(/_/g, ' ')}</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { id: 'balanced_neutral', label: 'Balanced Multi-Alignment', sub: 'Non-Aligned Hegemonic Hedging (Recommended)' },
                  { id: 'indo_pacific_us', label: 'Indo-Pacific (US & Quad Tilt)', sub: 'IPEF Trade & Maritime Domain Sharing' },
                  { id: 'eurasian_china', label: 'Eurasian (China BRI & Russia)', sub: 'CIPS Yuan Clearance & Heavy Megaprojects' },
                  { id: 'neighborhood_india', label: 'Neighborhood First (India Tilt)', sub: 'Bilateral Security & Transit Priority' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setAlignment(item.id as any);
                      setSelectedPreset('custom');
                    }}
                    className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                      alignment === item.id
                        ? 'bg-cyan-500/10 border-cyan-500/60 text-white shadow'
                        : 'bg-slate-950/60 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className="text-[11px] opacity-75 mt-0.5 leading-snug">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Lever 2: Maritime Choke-Point Governance */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
                <span>2. Bay of Bengal Port & Maritime Access</span>
                <span className="text-[11px] text-cyan-400 capitalize">{maritime.replace(/_/g, ' ')}</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: 'commercial_open', label: 'Commercial Open Access', sub: 'Strict Civilian Rule (Matarbari/Chattogram)' },
                  { id: 'joint_security', label: 'Multilateral Joint Patrols', sub: 'IORA / Quad Coordinated Maritime Drills' },
                  { id: 'a2ad_fortified', label: 'Subsurface A2/AD Fortification', sub: 'Pekua Submarine Base Deep Deterrence' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setMaritime(item.id as any);
                      setSelectedPreset('custom');
                    }}
                    className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                      maritime === item.id
                        ? 'bg-cyan-500/10 border-cyan-500/60 text-white shadow'
                        : 'bg-slate-950/60 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className="text-[11px] opacity-75 mt-0.5 leading-snug">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Lever 3: Transboundary Water & Energy Strategy */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
                <span>3. Transboundary River & Energy Strategy</span>
                <span className="text-[11px] text-cyan-400 capitalize">{waterEnergy.replace(/_/g, ' ')}</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: 'subregional_bbin', label: 'BBIN Trilateral Clean Grid', sub: 'Nepal/Bhutan Hydro via Indian Corridors' },
                  { id: 'sovereign_barrages', label: 'Domestic Mega-Barrages', sub: 'Ganges Barrage & Teesta Dredging' },
                  { id: 'bilateral_adhoc', label: 'Status-Quo Bilateral Treaties', sub: 'Short-term JRC & Ad-Hoc Releases' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setWaterEnergy(item.id as any);
                      setSelectedPreset('custom');
                    }}
                    className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                      waterEnergy === item.id
                        ? 'bg-cyan-500/10 border-cyan-500/60 text-white shadow'
                        : 'bg-slate-950/60 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className="text-[11px] opacity-75 mt-0.5 leading-snug">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Lever 4: Post-LDC Trade & Financial Architecture */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
                <span>4. Post-2026 LDC Trade & Finance Architecture</span>
                <span className="text-[11px] text-cyan-400 capitalize">{tradeFinance.replace(/_/g, ' ')}</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: 'eu_gsp_cepa', label: 'EU GSP+ & Bilateral CEPAs', sub: 'Japan EPA, India CEPA, High ESG Compliance' },
                  { id: 'brics_dedollarization', label: 'BRICS NDB & Currency Swaps', sub: 'Local Currency Rupee/RMB Liquidity' },
                  { id: 'tariff_protectionism', label: 'Domestic Protective Subsidies', sub: 'Import Substitution & Cash Incentives' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setTradeFinance(item.id as any);
                      setSelectedPreset('custom');
                    }}
                    className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                      tradeFinance === item.id
                        ? 'bg-cyan-500/10 border-cyan-500/60 text-white shadow'
                        : 'bg-slate-950/60 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className="text-[11px] opacity-75 mt-0.5 leading-snug">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Lever 5: Frontier & Refugee Security Policy */}
            <div className="space-y-2.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
                <span>5. Myanmar Frontier & Rohingya Strategy</span>
                <span className="text-[11px] text-cyan-400 capitalize">{frontierSecurity.replace(/_/g, ' ')}</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: 'dual_track_ula', label: 'Dual-Track ULA Engagement', sub: 'Pragmatic Dialogue with Arakan Army' },
                  { id: 'junta_exclusive', label: 'SAC Junta Exclusive Focus', sub: 'Naypyidaw State-to-State Repatriation' },
                  { id: 'closed_fortress', label: 'Militarized Border Sealing', sub: 'Zero-Tolerance Incursion Defense' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setFrontierSecurity(item.id as any);
                      setSelectedPreset('custom');
                    }}
                    className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                      frontierSecurity === item.id
                        ? 'bg-cyan-500/10 border-cyan-500/60 text-white shadow'
                        : 'bg-slate-950/60 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className="text-[11px] opacity-75 mt-0.5 leading-snug">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Real-Time Scoreboard & Great Power Matrix Projections (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Dynamic Scoreboard */}
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Scale className="w-4 h-4 text-cyan-400" /> Real-Time Strategic Scoreboard
              </h3>
              <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-mono">
                Live Index
              </span>
            </div>

            {/* Metrics List */}
            <div className="space-y-4">
              {/* Metric 1 */}
              <div>
                <div className="flex items-center justify-between text-xs mb-1.5 font-bold">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Shield className="w-3.5 h-3.5 text-indigo-400" /> Sovereign Autonomy Index
                  </span>
                  <span className={`px-2 py-0.5 rounded-md border font-mono text-[11px] ${getScoreColor(sovereigntyScore)}`}>
                    {sovereigntyScore} / 100
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-500 rounded-full"
                    style={{ width: `${sovereigntyScore}%` }}
                  />
                </div>
              </div>

              {/* Metric 2 */}
              <div>
                <div className="flex items-center justify-between text-xs mb-1.5 font-bold">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" /> Trade & Macro Resilience
                  </span>
                  <span className={`px-2 py-0.5 rounded-md border font-mono text-[11px] ${getScoreColor(tradeResilienceScore)}`}>
                    {tradeResilienceScore} / 100
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500 rounded-full"
                    style={{ width: `${tradeResilienceScore}%` }}
                  />
                </div>
              </div>

              {/* Metric 3 */}
              <div>
                <div className="flex items-center justify-between text-xs mb-1.5 font-bold">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Zap className="w-3.5 h-3.5 text-amber-400" /> Energy & Base-Load Security
                  </span>
                  <span className={`px-2 py-0.5 rounded-md border font-mono text-[11px] ${getScoreColor(energySecurityScore)}`}>
                    {energySecurityScore} / 100
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 to-yellow-500 transition-all duration-500 rounded-full"
                    style={{ width: `${energySecurityScore}%` }}
                  />
                </div>
              </div>

              {/* Metric 4 */}
              <div>
                <div className="flex items-center justify-between text-xs mb-1.5 font-bold">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Compass className="w-3.5 h-3.5 text-cyan-400" /> Bay of Bengal Deterrence
                  </span>
                  <span className={`px-2 py-0.5 rounded-md border font-mono text-[11px] ${getScoreColor(deterrenceScore)}`}>
                    {deterrenceScore} / 100
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 rounded-full"
                    style={{ width: `${deterrenceScore}%` }}
                  />
                </div>
              </div>

              {/* Metric 5: Geopolitical Friction (Inverse) */}
              <div>
                <div className="flex items-center justify-between text-xs mb-1.5 font-bold">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-400" /> Great Power Friction & Sanction Risk
                  </span>
                  <span className={`px-2 py-0.5 rounded-md border font-mono text-[11px] ${getScoreColor(frictionScore, true)}`}>
                    {frictionScore} / 100 {frictionScore > 50 ? '(Elevated)' : '(Contained)'}
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-500 via-amber-500 to-rose-500 transition-all duration-500 rounded-full"
                    style={{ width: `${frictionScore}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Great Power Response Forecast */}
          <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Globe className="w-4 h-4 text-cyan-400" /> Great Power Strategic Responses
            </h4>

            {/* US Response */}
            <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
              <div className="flex items-center justify-between text-xs font-bold text-slate-200">
                <span>🇺🇸 Washington Posture</span>
                <span className="text-[11px] text-cyan-400 font-normal">
                  {alignment === 'indo_pacific_us' ? 'High Strategic Alignment' : alignment === 'eurasian_china' ? 'Scrutiny & Sanction Pressure' : 'Constructive Engagement'}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {alignment === 'indo_pacific_us'
                  ? 'Expands USAID clean energy funding, fast-tracks CHIPS Act ITSI semiconductor qualification, and integrates Bangladesh Navy into CARAT exercises.'
                  : alignment === 'eurasian_china'
                  ? 'Heightens OFAC secondary sanctions monitoring on Russian nuclear bank transactions and warns against Huawei 5G telecommunication infrastructure.'
                  : 'Maintains GSP+ compliance encouragement, supports democratic governance reforms, and monitors Bay of Bengal maritime open access.'}
              </p>
            </div>

            {/* China Response */}
            <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
              <div className="flex items-center justify-between text-xs font-bold text-slate-200">
                <span>🇨🇳 Beijing Posture</span>
                <span className="text-[11px] text-cyan-400 font-normal">
                  {alignment === 'eurasian_china' ? 'Maximum Capital Deployment' : alignment === 'indo_pacific_us' ? 'Diplomatic Caution' : 'Active Infrastructure Partner'}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {alignment === 'eurasian_china'
                  ? 'Accelerates $1B Teesta River Restoration funding, promotes RMB currency swaps, and bids for Payra/Mongla deep port expansion.'
                  : alignment === 'indo_pacific_us'
                  ? 'Expresses concern over Quad maritime domain intelligence sharing in the Bay of Bengal and tightens terms on bilateral concessional loans.'
                  : 'Sustains competitive turnkey EPC contracts for bridges and power transmission lines while respecting Dhaka’s non-aligned posture.'}
              </p>
            </div>

            {/* India Response */}
            <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
              <div className="flex items-center justify-between text-xs font-bold text-slate-200">
                <span>🇮🇳 New Delhi Posture</span>
                <span className="text-[11px] text-cyan-400 font-normal">
                  {alignment === 'neighborhood_india' ? 'Unprecedented Transit Cooperation' : alignment === 'eurasian_china' ? 'Security Redlines Triggered' : 'Pragmatic Transit Balance'}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {alignment === 'neighborhood_india'
                  ? 'Expands BBIN electricity wheeling corridors, expedites 2026 Ganga Treaty renewal, and integrates multimodal transit to Northeast India.'
                  : alignment === 'eurasian_china'
                  ? 'Enforces strict cross-border power import restrictions on Chinese-contracted plants and opposes Chinese engineering near Siliguri Corridor.'
                  : 'Balances federal water negotiations with West Bengal while ensuring transit through Chattogram and Mongla ports remains commercially viable.'}
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Strategic Synthesis Memo by Daloyar Hassan */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow">
              DH
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Daloyar Hassan — Strategic Synthesis & Policy Directive</h4>
              <div className="text-xs text-cyan-400 font-medium">Lead Foreign Policy & Strategic Affairs Analyst</div>
            </div>
          </div>
          <div className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-950 text-slate-400 border border-slate-800">
            REF: SIM-BD/2026/POLICY-{alignment.toUpperCase()}
          </div>
        </div>

        <div className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3 font-sans">
          <p>
            <strong>Executive Strategic Assessment:</strong> The simulated configuration demonstrates that Bangladesh’s optimal sovereign leverage is achieved not by exclusionary great-power allegiance, but through <em>Dynamic Multi-Vector Hedging</em>. Under the current levers, sovereign autonomy stands at <strong className="text-cyan-400">{sovereigntyScore}/100</strong> with a trade resilience score of <strong className="text-emerald-400">{tradeResilienceScore}/100</strong>.
          </p>
          <p>
            <strong>Primary Policy Directives for MoFA & ERD:</strong>
            <br />
            1. <em>Maintain Strict Port Neutrality:</em> Ensure Matarbari and Payra ports remain rule-based commercial commons open to all global merchant fleets, precluding dual-use military base agreements.
            <br />
            2. <em>Accelerate BBIN Clean Energy Integration:</em> Formalize 25-year trilateral power purchase agreements with Nepal and Bhutan, utilizing Indian grid transit to replace high-cost imported LNG.
            <br />
            3. <em>Sovereign Frontier Containment:</em> Sustain pragmatic dual-track humanitarian communication with the United League of Arakan (ULA) to secure border stability and create verifiable conditions for Rohingya repatriation.
          </p>
        </div>
      </div>
    </div>
  );
};
