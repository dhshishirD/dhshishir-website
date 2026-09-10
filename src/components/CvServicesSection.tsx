import React from "react";
import { CV_SERVICES_DATA } from "../data/cvTemplatesData";
import { Check, MessageSquare } from "lucide-react";
import { SOCIAL_LINKS } from "../data/portfolioData";

export const CvServicesSection: React.FC = () => {
  return (
    <section id="cv-services" className="py-20 bg-slate-950/60 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
            CV Writing & Career Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            ATS-Friendly CV Formats & Pro Services
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Download our free verified template or connect directly on social media with Daloyar Hassan Shishir to engineer an interview-winning CV.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {CV_SERVICES_DATA.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition ${
                plan.badge
                  ? "bg-gradient-to-b from-slate-900 to-indigo-950/80 border-2 border-indigo-500/60 shadow-2xl shadow-indigo-950/40 relative"
                  : "bg-slate-900/80 border border-slate-800"
              }`}
            >
              <div>
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-emerald-500 text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-lg">
                    {plan.badge}
                  </div>
                )}

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <div className="text-3xl font-black text-emerald-400">{plan.price}</div>
                  <p className="text-xs text-slate-400">{plan.tagline}</p>
                </div>

                <div className="my-6 space-y-2.5">
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2">
                <p className="text-[11px] text-slate-400 text-center font-medium">
                  Ideal for: <span className="text-slate-200 font-semibold">{plan.recommendedFor}</span>
                </p>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition ${
                    plan.id === "free-template"
                      ? "bg-slate-800 hover:bg-slate-700 text-white"
                      : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-95 text-white"
                  }`}
                >
                  <MessageSquare className="w-4 h-4" /> {plan.ctaText}
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
