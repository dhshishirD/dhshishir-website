import React from 'react';
import { EXPERIENCES, EDUCATION_DATA, CERTIFICATIONS, MEDIA_MENTIONS } from '../data/portfolioData';
import { Briefcase, GraduationCap, Award, CheckCircle, Calendar, MapPin, Newspaper, ExternalLink } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-900 text-xs font-bold uppercase tracking-wider">
            Verified Career & Leadership Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Experience, Leadership & Public Service
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Track record of international diplomacy, central student union representation, public university teaching, and national media coverage.
          </p>
        </div>

        {/* Media & Press Mentions Banner */}
        <div className="mb-16 bg-white border border-teal-200 rounded-3xl p-6 sm:p-8 shadow-2xs">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
            <div className="p-2.5 bg-teal-100 text-teal-900 rounded-xl border border-teal-200">
              <Newspaper className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">National Media Coverage & Press Mentions</h3>
              <p className="text-xs text-slate-600">Featured in leading national dailies and campus media for academic and leadership contributions.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MEDIA_MENTIONS.map((media) => (
              <a
                key={media.id}
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-teal-400 hover:shadow-xs transition flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold text-teal-900">{media.outlet}</span>
                    <span className="text-[10px] bg-slate-100 text-slate-700 font-semibold px-2 py-0.5 rounded-full">{media.dateBadge}</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-800 line-clamp-2 group-hover:text-teal-900 transition">
                    {media.title}
                  </p>
                </div>
                <div className="pt-3 flex items-center gap-1 text-[11px] font-bold text-teal-800 group-hover:text-teal-950">
                  <span>Read Article</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-6">
              <Briefcase className="w-5 h-5 text-teal-800" />
              <span>Professional & Leadership Positions</span>
            </h3>

            <div className="space-y-6">
              {EXPERIENCES.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 hover:border-slate-300 shadow-2xs transition"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-base font-bold text-slate-900">{item.role}</h4>
                      <div className="text-sm font-semibold text-teal-900">{item.organization}</div>
                    </div>
                    {item.badge && (
                      <span className="self-start sm:self-center text-[11px] font-bold bg-teal-50 text-teal-900 border border-teal-200 px-3 py-1 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 mb-4 pb-3 border-b border-slate-100">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-slate-600" /> {item.period}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-slate-600" /> {item.location}</span>
                  </div>

                  <ul className="space-y-2">
                    {item.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-teal-800 shrink-0 mt-0.5" />
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
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-teal-800" />
                <span>Academic Education</span>
              </h3>

              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-2">
                  <h4 className="text-sm font-bold text-slate-900">{edu.degree}</h4>
                  <div className="text-xs font-bold text-teal-900">{edu.institution}</div>
                  <div className="text-[11px] text-slate-600 font-medium">{edu.period}</div>
                  <p className="text-xs text-slate-600 pt-1 leading-relaxed">{edu.details}</p>
                </div>
              ))}
            </div>

            {/* Certifications & Honors */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Award className="w-5 h-5 text-teal-800" />
                <span>Fellowships & Honors</span>
              </h3>

              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="p-5 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-1.5">
                  <h4 className="text-xs font-bold text-slate-900">{cert.title}</h4>
                  <div className="text-xs text-teal-900 font-bold">{cert.issuer}</div>
                  <div className="text-[11px] text-slate-600">{cert.date}</div>
                  <div className="text-[11px] text-slate-600 font-mono bg-slate-50 p-1.5 rounded-lg border border-slate-100">
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
