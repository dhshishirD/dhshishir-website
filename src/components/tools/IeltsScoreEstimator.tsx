import React, { useState } from 'react';
import { Award, Check, ArrowRight } from 'lucide-react';

export const IeltsScoreEstimator: React.FC = () => {
  const [targetBand, setTargetBand] = useState<number>(7.0);
  const [dailyHours, setDailyHours] = useState<number>(2);
  const [currentLevel, setCurrentLevel] = useState<string>('Intermediate (SSC/HSC standard)');

  const getRecommendedMonths = () => {
    if (targetBand >= 7.5) {
      return dailyHours >= 3 ? '2.5 - 3 Months' : '4 - 5 Months';
    } else if (targetBand >= 6.5) {
      return dailyHours >= 2 ? '1.5 - 2 Months' : '3 Months';
    } else {
      return '1 - 1.5 Months';
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl text-slate-900">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
        <div className="p-3 bg-teal-50 text-teal-800 rounded-2xl border border-teal-200">
          <Award className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">
            IELTS Study Plan & Target Band Predictor
          </h3>
          <p className="text-sm text-slate-600">Calculate realistic preparation time based on your target score.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-2">
              Select Your Target Band Score: <span className="text-teal-800 font-bold text-lg">{targetBand.toFixed(1)}</span>
            </label>
            <input
              type="range"
              min="5.5"
              max="8.5"
              step="0.5"
              value={targetBand}
              onChange={(e) => setTargetBand(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="flex justify-between text-xs text-slate-600 mt-1">
              <span>Band 5.5</span>
              <span>Band 6.5</span>
              <span>Band 7.5</span>
              <span>Band 8.5</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-2">
              Your Current English Foundation Level:
            </label>
            <select
              value={currentLevel}
              onChange={(e) => setCurrentLevel(e.target.value)}
              className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-teal-200"
            >
              <option>Beginner (Need grammar & basic vocab guidance)</option>
              <option>Intermediate (SSC/HSC standard, can understand basic English)</option>
              <option>Upper-Intermediate (Good reading, need speaking & writing boost)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-600 mb-2">
              Daily Dedicated Study Time: <span className="text-teal-800 font-bold">{dailyHours} Hours/day</span>
            </label>
            <div className="grid grid-cols-5 gap-2">
              {[1, 2, 3, 4, 5].map((hr) => (
                <button
                  key={hr}
                  onClick={() => setDailyHours(hr)}
                  className={`py-2 px-1 text-center rounded-xl text-xs font-bold transition cursor-pointer ${
                    dailyHours === hr
                      ? 'bg-teal-900 text-white font-bold shadow-lg'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-700'
                  }`}
                >
                  {hr} {hr === 1 ? 'Hr' : 'Hrs'}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-100/60 rounded-2xl p-6 border border-slate-200/60 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-wider font-bold text-teal-800">Custom Study Blueprint</span>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-slate-900">
                Timeline: <span className="text-teal-800">{getRecommendedMonths()}</span>
              </div>
              <p className="text-xs text-slate-600 mt-1">Based on daily {dailyHours} hours focused Cambridge practice.</p>
            </div>

            <div className="space-y-2 pt-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-teal-800 shrink-0" />
                <span>Cambridge Practice Books 14 - 19 (Full mock tests)</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-teal-800 shrink-0" />
                <span>Daily 30 mins BBC 6-Minute English listening</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-teal-800 shrink-0" />
                <span>Writing Task 2: 2 Essays per week with peer feedback</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200">
            <a
              href="https://10minuteschool.com/skills/courses/ielts-course-by-munzereen-shahid?aff=dhshishir"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-white border border-slate-200 hover:from-emerald-500 hover:to-teal-500 text-slate-900 rounded-xl font-bold flex items-center justify-center gap-2 text-sm shadow-lg transition"
            >
              Explore 10MS IELTS Course <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
