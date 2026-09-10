import React, { useState } from 'react';
import { Compass, CheckCircle, ExternalLink } from 'lucide-react';

interface CareerPath {
  id: string;
  title: string;
  roleDescription: string;
  keySkills: string[];
  recommendedCourses: { name: string; provider: string; url: string; price: string }[];
}

const CAREER_PATHS: CareerPath[] = [
  {
    id: 'corporate_exec',
    title: 'Corporate Management Trainee (MTO) / Executive',
    roleDescription: 'Targeting MNCs, FMCG (Unilever, BAT), and top Bangladeshi conglomerates (Square, PRAN, Beximco).',
    keySkills: ['Advanced Excel & Dashboards', 'PowerPoint Presentation Pitching', 'Corporate Business English', 'Business Case Solving'],
    recommendedCourses: [
      { name: 'Ghore Boshe Spoken English', provider: '10 Minute School', url: 'https://10minuteschool.com/skills/courses/ghore-boshe-spoken-english?aff=dhshishir', price: '৳ ৯৫০' },
      { name: 'Microsoft Excel Masterclass', provider: '10 Minute School', url: 'https://10minuteschool.com/skills/courses/microsoft-excel?aff=dhshishir', price: '৳ ১,০৫০' },
      { name: 'PowerPoint & Presentation Mastery', provider: '10 Minute School', url: 'https://10minuteschool.com/skills/courses/powerpoint-presentation?aff=dhshishir', price: '৳ ৮৫০' }
    ]
  },
  {
    id: 'govt_bcs',
    title: 'BCS & Bangladesh Bank / Govt Job Aspirant',
    roleDescription: 'Targeting 47th/48th BCS Cadre and Bank Officer recruitment examinations.',
    keySkills: ['English Grammar & Literature', 'Bangladesh & International Affairs', 'Mental Ability & Quantitative Aptitude', 'Bangla Essay & Grammar'],
    recommendedCourses: [
      { name: 'BCS Preliminary Master Course', provider: '10 Minute School', url: 'https://10minuteschool.com/skills/courses/bcs-preli?aff=dhshishir', price: '৳ ৩,৫০০' }
    ]
  },
  {
    id: 'freelance_tech',
    title: 'Remote Web Developer & Tech Freelancer',
    roleDescription: 'Targeting high-paying international remote jobs on Upwork, Fiverr, and global startups.',
    keySkills: ['Full Stack MERN (React + Node.js)', 'Git & GitHub Collaboration', 'Client Communication English', 'Portfolio Project Building'],
    recommendedCourses: [
      { name: 'Full Stack MERN Career Track', provider: 'Bohubrihi', url: 'https://bohubrihi.com/courses/full-stack-web-development/?ref=dhshishir', price: '৳ ১৪,৫০০' },
      { name: 'Digital Marketing Bootcamp', provider: 'Ostad', url: 'https://ostad.app/course/digital-marketing?aff=dhshishir', price: '৳ ৭,৫০০' }
    ]
  }
];

export const SkillGapFinder: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('corporate_exec');
  const activePath = CAREER_PATHS.find(c => c.id === selectedId) || CAREER_PATHS[0];

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl text-white">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
        <div className="p-3 bg-blue-500/20 text-blue-400 rounded-2xl border border-blue-500/30">
          <Compass className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white">
            Skill-to-Career Roadmap & Course Matcher
          </h3>
          <p className="text-sm text-slate-400">Identify exact skills needed for your dream career and find top-rated courses.</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Choose Your Target Path:</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {CAREER_PATHS.map((cp) => (
              <button
                key={cp.id}
                onClick={() => setSelectedId(cp.id)}
                className={`p-4 rounded-2xl text-left border transition cursor-pointer ${
                  selectedId === cp.id
                    ? 'bg-indigo-600/30 border-indigo-500 text-white shadow-lg'
                    : 'bg-slate-800/50 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="font-bold text-sm text-white">{cp.title}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 bg-slate-800/40 rounded-2xl border border-slate-800">
          <p className="text-sm text-slate-300 mb-4">{activePath.roleDescription}</p>

          <div className="mb-6">
            <span className="text-xs uppercase font-bold text-indigo-400 tracking-wider block mb-2">Core Skills You Must Master:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {activePath.keySkills.map((sk, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 bg-slate-900/60 rounded-xl text-xs text-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{sk}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider block mb-3">Curated Top Courses with Special Discount:</span>
            <div className="space-y-2.5">
              {activePath.recommendedCourses.map((c, idx) => (
                <div key={idx} className="p-3 bg-slate-900/90 rounded-xl border border-slate-700/60 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold text-white block">{c.name}</span>
                    <span className="text-[11px] text-slate-400">{c.provider} • <span className="text-emerald-400 font-semibold">{c.price}</span></span>
                  </div>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg flex items-center gap-1 transition"
                  >
                    Enroll Now <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
