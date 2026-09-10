import React from "react";
import { MapPin, Phone, MessageSquare } from "lucide-react";
import { SOCIAL_LINKS } from "../data/portfolioData";

export const AboutContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              About Daloyar Hassan Shishir
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white">
              দেলোয়ার হাসান শিশির
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Shahjalal University of Science and Technology (SUST) English alumnus (MA & BA). Renowned English grammar instructor at UCC with 7+ years of experience, China 2025 Young Leaders Program Delegate, Malaysia 2026 Development Study Tour Fellow, and Vice President (VP) Candidate for the SHAKSU elections.
            </p>

            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 text-emerald-400">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+880 1627-714636 (Direct WhatsApp Call/Chat)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 text-[#1877F2] font-bold">
                  f
                </div>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition"
                >
                  facebook.com/dhshishir0
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 text-[#0a66c2] font-bold">
                  in
                </div>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition"
                >
                  linkedin.com/in/daloyar-hassan1
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 text-amber-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Sylhet & Jashore, Bangladesh</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-6 sm:p-8 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-2">Connect Directly via Social Media & WhatsApp</h3>
              <p className="text-xs text-slate-400 mb-6">Reach out for academic admissions English, 10MS courses, ATS CV reviews, or youth leadership initiatives.</p>

              <div className="space-y-3">
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-lg transition"
                >
                  <MessageSquare className="w-4 h-4" /> Message on WhatsApp (+880 1627-714636)
                </a>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-[#1877F2] hover:opacity-90 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-lg transition"
                >
                  <span className="font-black text-sm">f</span> Send Message on Facebook
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-[#0a66c2] hover:opacity-90 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-lg transition"
                >
                  <span className="font-black text-sm">in</span> Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
