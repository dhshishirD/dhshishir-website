import React, { useState } from 'react';
import { Award, CheckSquare, Square, Compass } from 'lucide-react';

interface CadreModule {
  subject: string;
  marks: number;
  topics: string[];
}

const BCS_PRELI_MODULES: CadreModule[] = [
  { subject: 'English Language & Literature', marks: 35, topics: ['Parts of Speech & Syntax', 'Idioms, Phrases & Clauses', 'Vocabulary & Synonyms/Antonyms', 'English Literature (Elizabethan to Modern Periods)'] },
  { subject: 'Bangla Language & Literature', marks: 35, topics: ['Grammar & Orthography', 'Ancient & Medieval Bengali Literature', 'Modern Literature (Tagore, Nazrul, 30s Poets)'] },
  { subject: 'Bangladesh Affairs', marks: 30, topics: ['Liberation War 1971 History', 'Constitution of Bangladesh', 'Economy & Development Megaprojects', 'Geography & Demographics'] },
  { subject: 'International Affairs', marks: 20, topics: ['Global Geopolitics & Treaties', 'International Organizations (UN, NDB, ASEAN, BIMSTEC)', 'Global Economics & Environment'] },
  { subject: 'Mathematical Reasoning & Mental Ability', marks: 30, topics: ['Arithmetic & Algebra Formulas', 'Geometry & Trigonometry', 'Mental Ability & Analytical Reasoning'] },
  { subject: 'General Science & ICT', marks: 30, topics: ['Physics, Chemistry & Biology Fundamentals', 'Computer Architecture & Internet Tech', 'Cybersecurity & Modern ICT Trends'] },
  { subject: 'Ethics, Values & Good Governance', marks: 10, topics: ['Moral Philosophy & Values', 'Governance Indicators & Anti-Corruption Mechanisms'] }
];

export const BcsRoadmapTracker: React.FC = () => {
  const [selectedCadre, setSelectedCadre] = useState('Foreign Affairs');
  const [completedTopics, setCompletedTopics] = useState<Record<string, boolean>>({});

  const toggleTopic = (topicKey: string) => {
    setCompletedTopics(prev => ({ ...prev, [topicKey]: !prev[topicKey] }));
  };

  const totalTopics = BCS_PRELI_MODULES.reduce((acc, m) => acc + m.topics.length, 0);
  const checkedCount = Object.values(completedTopics).filter(Boolean).length;
  const progressPercent = Math.round((checkedCount / totalTopics) * 100);

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl text-slate-900">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
        <div className="p-3 bg-teal-50 text-teal-800 rounded-2xl border border-teal-200">
          <Award className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
            BCS Preparation Roadmap & Syllabus Tracker
            <span className="text-xs bg-teal-50 text-teal-800 border border-teal-200 px-2 py-0.5 rounded-full font-medium">BPSC Syllabus 200 Marks</span>
          </h3>
          <p className="text-sm text-slate-600">Track your preparation across 200 marks for BCS Preliminary, Written, and Viva stages.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-2">Select Your 1st Choice Cadre:</label>
              <select
                value={selectedCadre}
                onChange={e => setSelectedCadre(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 outline-none focus:border-teal-200"
              >
                <option value="Foreign Affairs">BCS (Foreign Affairs / পররাষ্ট্র ক্যাডার)</option>
                <option value="Administration">BCS (Administration / প্রশাসন ক্যাডার)</option>
                <option value="Police">BCS (Police / পুলিশ ক্যাডার)</option>
                <option value="General Education">BCS (General Education / সাধারণ শিক্ষা)</option>
                <option value="Audit & Accounts">BCS (Audit & Accounts / অডিট)</option>
              </select>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-600">Preparation Progress</span>
                <span className="font-extrabold text-teal-800">{progressPercent}%</span>
              </div>
              <div className="w-full bg-white rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-white border border-slate-200 h-full rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="text-[11px] text-slate-600">{checkedCount} of {totalTopics} core syllabus topics covered</div>
            </div>

            <div className="text-xs text-slate-600 space-y-2 pt-2 border-t border-slate-200">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-teal-800" />
                <span>{selectedCadre} Strategy Tips</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                {selectedCadre === 'Foreign Affairs' && 'Master English descriptive writing and International geopolitics (NDB, global trade routes, diplomatic treaties).'}
                {selectedCadre === 'Administration' && 'Emphasize Bangladesh Constitution, administrative acts, land revenue reforms, and public policy formulation.'}
                {selectedCadre === 'Police' && 'Focus on criminal procedure code basics, law and order governance, cyber security laws, and physical viva agility.'}
                {selectedCadre === 'General Education' && 'Deepen subject-specific mastery alongside strong foundational scores in English & Bengali literature.'}
                {selectedCadre === 'Audit & Accounts' && 'Focus on national budget analysis, financial accountability, macroeconomic indicators, and tax policies.'}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-5 space-y-4 max-h-[500px] overflow-y-auto">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Preliminary 200 Marks Syllabus Matrix</span>
            <button
              onClick={() => setCompletedTopics({})}
              className="text-[11px] text-teal-800 hover:text-teal-900"
            >
              Reset Checklist
            </button>
          </div>

          <div className="space-y-3">
            {BCS_PRELI_MODULES.map((mod, idx) => (
              <div key={idx} className="p-3.5 bg-white rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-900">
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-teal-50 text-teal-800 flex items-center justify-center text-[10px]">
                      {idx + 1}
                    </span>
                    {mod.subject}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px]">
                    {mod.marks} Marks
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {mod.topics.map((top, tIdx) => {
                    const key = `${mod.subject}_${top}`;
                    const isDone = !!completedTopics[key];
                    return (
                      <button
                        key={tIdx}
                        onClick={() => toggleTopic(key)}
                        className={`p-2 rounded-lg text-left text-[11px] transition flex items-center gap-2 cursor-pointer ${
                          isDone
                            ? 'bg-white border border-teal-200 text-teal-900'
                            : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-800'
                        }`}
                      >
                        {isDone ? (
                          <CheckSquare className="w-3.5 h-3.5 text-teal-800 shrink-0" />
                        ) : (
                          <Square className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                        )}
                        <span className="truncate">{top}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
