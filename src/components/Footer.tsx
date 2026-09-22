import React from "react";
import { SOCIAL_LINKS } from "../data/portfolioData";
import { Globe, Sparkles } from 'lucide-react';
import type { ViewType } from './Navbar';

interface FooterProps {
  onNavigate?: (view: ViewType, toolId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLink = (e: React.MouseEvent, view: ViewType, toolId?: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(view, toolId);
    }
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand & Bio */}
          <div className="space-y-3">
            <div className="text-lg font-black text-slate-900">
              dhshishir<span className="text-teal-800">.com</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Official personal portal of <strong>Daloyar Hassan Shishir</strong> (দেলোয়ার হাসান শিশির) — Diplomatic Enthusiast, Policy Analyst & English Educator.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#1877F2] font-black hover:scale-105 transition"
                title="Official Facebook"
              >
                f
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#0a66c2] font-black hover:scale-105 transition"
                title="Professional LinkedIn"
              >
                in
              </a>
            </div>
          </div>

          {/* Strategic & Diplomatic Hub */}
          <div>
            <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-teal-800" /> Geopolitics & Foreign Policy
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/organizations" onClick={(e) => handleLink(e, 'organizations')} className="hover:text-teal-800 transition font-bold text-teal-900">
                  🏛️ Organization Dossiers & Career Hub
                </a>
              </li>
              <li>
                <a href="/diplomacy" onClick={(e) => handleLink(e, 'diplomacy')} className="hover:text-teal-800 transition">
                  Daily Think Tank Strategic Stream
                </a>
              </li>
              <li>
                <a href="/diplomatic-map" onClick={(e) => handleLink(e, 'map')} className="hover:text-teal-800 transition">
                  Interactive Diplomatic World Map
                </a>
              </li>
              <li>
                <a href="/diplomacy" onClick={(e) => handleLink(e, 'diplomacy')} className="hover:text-teal-800 transition">
                  Bay of Bengal & Maritime Security
                </a>
              </li>
            </ul>
          </div>

          {/* Education & Innovation */}
          <div>
            <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-teal-800" /> Learning & Tools
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/fluency-lab" onClick={(e) => handleLink(e, 'fluency-lab')} className="hover:text-teal-800 transition">
                  Fluency Lab Interactive Spoken English
                </a>
              </li>
              <li>
                <a href="/tools/ats-checker" onClick={(e) => handleLink(e, 'tools', 'ats-checker')} className="hover:text-teal-800 transition">
                  Free ATS Resume Scanner & Checker
                </a>
              </li>
              <li>
                <a href="/tools/cover-letter" onClick={(e) => handleLink(e, 'tools', 'cover-letter')} className="hover:text-teal-800 transition">
                  AI Cover Letter Studio
                </a>
              </li>
              <li>
                <a href="/tools/ielts-planner" onClick={(e) => handleLink(e, 'tools', 'ielts-planner')} className="hover:text-teal-800 transition">
                  IELTS Study Routine Architect
                </a>
              </li>
            </ul>
          </div>

          {/* Bio & Connect */}
          <div>
            <h4 className="font-bold text-slate-900 mb-3">Portfolio & Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="/leadership" onClick={(e) => handleLink(e, 'leadership')} className="hover:text-slate-800 transition">
                  Global Leadership & Key Engagements
                </a>
              </li>
              <li>
                <a href="/blog" onClick={(e) => handleLink(e, 'blog')} className="hover:text-slate-800 transition">
                  Research Articles & Op-Eds
                </a>
              </li>
              <li>
                <a href="/contact" onClick={(e) => handleLink(e, 'contact')} className="hover:text-slate-800 transition">
                  Contact & Advisory Booking
                </a>
              </li>
              <li>
                <a href="/privacy.html" className="text-slate-600 hover:text-slate-600">
                  Privacy Policy & Terms
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © {new Date().getFullYear()} dhshishir.com • All Rights Reserved by Daloyar Hassan Shishir.
          </div>
          <div className="text-slate-600">
            Strategic Foreign Policy Desk • Fluency Lab Systems • Career Innovation
          </div>
        </div>

      </div>
    </footer>
  );
};
