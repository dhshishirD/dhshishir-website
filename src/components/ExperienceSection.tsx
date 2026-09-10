import React from 'react';
import { EXPERIENCES, EDUCATION_DATA, CERTIFICATIONS } from '../data/portfolioData';
import { Briefcase, GraduationCap, Award, Globe, CheckCircle, ExternalLink, Calendar, MapPin } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-wider">
            Verified Career & Leadership Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Experience, Leadership & Education
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Track record of international diplomacy, public university teaching, and student welfare leadership.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
              <Briefcase className="w-5 h-5 text-emerald-400" />
              <span>Professional & Leadership Positions</span>
            </h3>

            <div className="space-y-6">
              {EXPERIENCES.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-900/90 rounded-3xl border border-slate-800 p-6 sm:p-7 hover:border-slate-700 transition"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-base font-bold text-white">{item.role}</h4>
                      <div className="text-sm font-semibold text-emerald-400">{item.organization}</div>
                    </div>
                    {item.badge && (
                      <span className="self-start sm:self-center text-[11px] font-bold bg-indigo-950 text-indigo-300 border border-indigo-800/60 px-3 py-1 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mb-4 pb-3 border-b border-slate-800/60">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-slate-500" /> {item.period}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-slate-500" /> {item.location}</span>
                  </div>

                  <ul className="space-y-2">
                    {item.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications Column */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Education */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
                <span>Academic Education</span>
              </h3>

              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="p-5 bg-slate-900/80 rounded-2xl border border-slate-800 space-y-2">
                  <h4 className="text-sm font-bold text-white">{edu.degree}</h4>
                  <div className="text-xs font-semibold text-indigo-400">{edu.institution}</div>
                  <div className="text-[11px] text-slate-500">{edu.period}</div>
                  <p className="text-xs text-slate-300 pt-1 leading-relaxed">{edu.details}</p>
                </div>
              ))}
            </div>

            {/* Certifications & Honors */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span>Fellowships & Honors</span>
              </h3>

              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="p-5 bg-slate-900/80 rounded-2xl border border-slate-800 space-y-1.5">
                  <h4 className="text-xs font-bold text-white">{cert.title}</h4>
                  <div className="text-xs text-amber-400 font-medium">{cert.issuer}</div>
                  <div className="text-[11px] text-slate-500">{cert.date}</div>
                  <div className="text-[11px] text-slate-400 font-mono bg-slate-950 p-1.5 rounded-lg">
                    {cert.skills}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
