import React, { useState } from 'react';
import { 
  Award, ShieldCheck, Printer, Share2, ExternalLink, 
  CheckCircle2, Sparkles, Copy, Check, Download 
} from 'lucide-react';
import type { IssuedCertificate } from '../../services/unifiedMemberService';
import { generateLinkedInCertificateUrl } from '../../services/certificateVerificationService';
import confetti from 'canvas-confetti';

interface VerifiableCertificateViewerProps {
  certificate: IssuedCertificate;
  showActions?: boolean;
}

export const VerifiableCertificateViewer: React.FC<VerifiableCertificateViewerProps> = ({
  certificate,
  showActions = true
}) => {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(certificate.verificationUrl);
    setCopied(true);
    confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 } });
    setTimeout(() => setCopied(false), 2500);
  };

  const linkedInUrl = generateLinkedInCertificateUrl(certificate);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      
      {/* Top Utility Action Bar */}
      {showActions && (
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-white rounded-2xl border border-slate-200 shadow-xs print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-700">Official Authenticated Credential</span>
            <span className="text-[10px] font-mono bg-teal-50 text-teal-900 border border-teal-200 px-2 py-0.5 rounded-md font-bold">
              {certificate.verificationHash}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-600" />}
              <span>{copied ? 'Link Copied!' : 'Copy Verification Link'}</span>
            </button>

            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0a66c2] hover:bg-[#084e96] text-white rounded-xl text-xs font-bold transition shadow-xs cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Add to LinkedIn</span>
            </a>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-teal-900 hover:bg-teal-800 text-white rounded-xl text-xs font-bold transition shadow-xs cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
          </div>
        </div>
      )}

      {/* Official Certificate Vector Canvas */}
      <div 
        id="printable-certificate"
        className="relative bg-white border-8 border-slate-900 p-8 sm:p-12 rounded-3xl shadow-2xl text-center space-y-6 overflow-hidden print:border-4 print:p-8 print:shadow-none"
      >
        {/* Luxury Gold & Emerald Guilloché Border Effect */}
        <div className="absolute inset-2 border-2 border-amber-500/50 rounded-2xl pointer-events-none" />
        <div className="absolute inset-3 border border-teal-800/30 rounded-xl pointer-events-none" />

        {/* Subtle Background Watermark Seal */}
        <div className="absolute right-4 bottom-4 w-72 h-72 rounded-full bg-amber-500/5 pointer-events-none flex items-center justify-center">
          <Award className="w-48 h-48 text-amber-500/10" />
        </div>

        {/* Certificate Header Branding */}
        <div className="space-y-1.5 relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-black tracking-widest text-amber-600 uppercase">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Diplomatic & Strategic Learning Desk • dhshishir.com
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-widest font-serif">
            Certificate of Completion & Distinction
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 via-teal-800 to-amber-400 mx-auto rounded-full" />
        </div>

        {/* Presentation Statement */}
        <div className="space-y-1 relative z-10">
          <p className="text-xs uppercase tracking-wider text-slate-500 font-bold">This is to officially certify that</p>
          <div className="text-2xl sm:text-4xl font-black text-teal-950 font-serif tracking-tight py-2 border-b border-amber-200/60 max-w-xl mx-auto">
            {certificate.recipientName || 'Executive Scholar'}
          </div>
        </div>

        {/* Course / Milestone Title */}
        <div className="space-y-2 max-w-2xl mx-auto relative z-10">
          <p className="text-xs text-slate-600">has successfully completed all rigorous coursework, practical simulations, and capstone examinations for</p>
          <h3 className="text-base sm:text-lg md:text-xl font-black text-slate-900 font-serif leading-snug">
            {certificate.title}
          </h3>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-black">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" /> {certificate.scoreOrLevel || 'Grade: Pass with Distinction (90%+)'}
          </div>
        </div>

        {/* Skills Verified Badges */}
        {certificate.skillsVerified && certificate.skillsVerified.length > 0 && (
          <div className="space-y-2 relative z-10">
            <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">
              Verified Executive & Academic Competencies
            </div>
            <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-2xl mx-auto">
              {certificate.skillsVerified.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-800 text-[11px] font-semibold rounded-lg flex items-center gap-1"
                >
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Certificate Signatures & Security Footer */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-left relative z-10">
          
          {/* Issue Date & Security Hash */}
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-[11px] text-slate-500">
              <strong>Issue Date:</strong> {certificate.issueDate || new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </div>
            <div className="text-[11px] text-slate-500">
              <strong>Credential ID:</strong> <span className="font-mono font-bold text-teal-900">{certificate.verificationHash}</span>
            </div>
            <div className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1 justify-center sm:justify-start">
              <ShieldCheck className="w-3 h-3" /> Publicly verifiable at dhshishir.com/verify
            </div>
          </div>

          {/* Official Signatory */}
          <div className="text-center sm:text-right space-y-1">
            <div className="font-serif italic font-bold text-slate-900 text-lg sm:text-xl">
              Daloyar Hassan Shishir
            </div>
            <div className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">
              Daloyar Hassan Shishir (দেলোয়ার হাসান শিশির)
            </div>
            <div className="text-[10px] text-slate-500">
              Diplomatic Enthusiast, Policy Analyst & English Educator
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
