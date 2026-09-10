import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

export const CgpaConverter: React.FC = () => {
  const [cgpa, setCgpa] = useState<number>(3.50);

  const getPercentageEstimate = (val: number) => {
    return Math.min(100, Math.round((val / 4.0) * 100));
  };

  const getClassification = (val: number) => {
    if (val >= 3.75) return { title: 'First Class with Distinction (Honors)', color: 'text-emerald-400', badge: 'Top Tier' };
    if (val >= 3.00) return { title: 'First Class / Division', color: 'text-blue-400', badge: 'Good Standing' };
    if (val >= 2.50) return { title: 'Second Class (Upper)', color: 'text-amber-400', badge: 'Eligible for Corporate' };
    return { title: 'Pass / Third Division', color: 'text-rose-400', badge: 'Focus on Skills' };
  };

  const info = getClassification(cgpa);

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl text-white">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
        <div className="p-3 bg-amber-500/20 text-amber-400 rounded-2xl border border-amber-500/30">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white">
            Bangladesh CGPA (4.0 Scale) & Marks Converter
          </h3>
          <p className="text-sm text-slate-400">Calculate academic equivalent percentage and corporate eligibility class.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <label className="block text-sm font-semibold text-slate-300">
            Enter or Slide Your CGPA: <span className="text-amber-400 font-bold text-xl">{cgpa.toFixed(2)} / 4.00</span>
          </label>
          <input
            type="range"
            min="2.00"
            max="4.00"
            step="0.01"
            value={cgpa}
            onChange={(e) => setCgpa(parseFloat(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />
          <div className="flex justify-between text-xs text-slate-500">
            <span>2.00</span>
            <span>2.50</span>
            <span>3.00</span>
            <span>3.50</span>
            <span>4.00</span>
          </div>

          <div className="pt-2">
            <span className="text-xs text-slate-400">Pro-Tip for Job Seekers: If your CGPA is below 3.20, heavily emphasize your practical skills, portfolio, and internships on the top section of your CV.</span>
          </div>
        </div>

        <div className="p-6 bg-slate-800/60 rounded-2xl border border-slate-700 text-center">
          <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">Classification Equivalent</span>
          <div className="my-3">
            <div className={`text-2xl font-bold ${info.color}`}>{info.title}</div>
            <div className="text-4xl font-extrabold text-white mt-2">~{getPercentageEstimate(cgpa)}%</div>
            <span className="text-xs text-slate-400">Estimated Marks Equivalent</span>
          </div>
          <div className="mt-4 inline-block px-3 py-1 bg-slate-900 border border-slate-700 rounded-full text-xs font-semibold text-slate-300">
            Status: {info.badge}
          </div>
        </div>
      </div>
    </div>
  );
};
