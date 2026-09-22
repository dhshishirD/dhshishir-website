import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Search, Award, CheckCircle2, ArrowLeft, 
  ExternalLink, Printer, Share2, Sparkles, AlertTriangle 
} from 'lucide-react';
import { verifyCertificateById } from '../../services/certificateVerificationService';
import type { VerificationResult } from '../../services/certificateVerificationService';
import { VerifiableCertificateViewer } from '../certificates/VerifiableCertificateViewer';

interface CertificateVerificationPageProps {
  onNavigateHome: () => void;
}

export const CertificateVerificationPage: React.FC<CertificateVerificationPageProps> = ({
  onNavigateHome
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [result, setResult] = useState<VerificationResult | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = 'Universal Certificate & Credential Verification Registry | DH Shishir';

    // Parse URL parameter ?id=... or ?cert=...
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get('id') || urlParams.get('cert') || urlParams.get('hash');
    
    if (idParam) {
      setSearchQuery(idParam);
      const res = verifyCertificateById(idParam);
      setResult(res);
      setHasSearched(true);
    } else {
      // Default to standard sample verification query for instant preview
      const defaultId = 'DHS-CERT-2026-COMM-7890';
      const res = verifyCertificateById(defaultId);
      setResult(res);
      setHasSearched(true);
      setSearchQuery(defaultId);
    }
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const res = verifyCertificateById(searchQuery);
    setResult(res);
    setHasSearched(true);

    // Update browser URL without reload
    const newUrl = `${window.location.pathname}?id=${encodeURIComponent(searchQuery.trim())}`;
    window.history.pushState(null, '', newUrl);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation Breadcrumb Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <button
            onClick={onNavigateHome}
            className="text-xs text-teal-800 hover:text-teal-950 font-bold inline-flex items-center gap-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Main Homepage (dhshishir.com)
          </button>
          
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" /> Official Verification Registry
          </div>
        </div>

        {/* Hero Header & Verification Lookup Input */}
        <div className="p-8 sm:p-12 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white rounded-3xl shadow-xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 100% Cryptographically Verified Records
          </div>

          <div className="space-y-2 max-w-2xl mx-auto">
            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Universal Credential Verification Registry
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Verify digital certificates of completion, IELTS vocabulary credentials, CEFR spoken fluency reports, and Executive Communication certifications issued by Daloyar Hassan Shishir.
            </p>
          </div>

          {/* Search Box */}
          <form onSubmit={handleSearch} className="max-w-xl mx-auto flex gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter Credential ID (e.g. DHS-CERT-2026-COMM-7890)"
                className="w-full pl-10 pr-4 py-3 bg-white/10 text-white placeholder-slate-400 rounded-2xl border border-white/20 focus:outline-hidden focus:border-amber-400 font-mono text-xs sm:text-sm transition"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-2xl text-xs sm:text-sm shadow-md transition cursor-pointer shrink-0"
            >
              Verify Record
            </button>
          </form>
        </div>

        {/* Verification Result Display */}
        {hasSearched && result && (
          <div className="space-y-6">
            {result.isValid && result.certificate ? (
              <div className="space-y-6">
                {/* Official Status Banner */}
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-emerald-900">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-black flex items-center gap-1.5">
                        <span>AUTHENTIC DIGITAL CREDENTIAL VERIFIED</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-950 uppercase font-black">VALID</span>
                      </div>
                      <p className="text-xs text-emerald-800">
                        Matches official cryptographic ledger issued by {result.issuer.organization}
                      </p>
                    </div>
                  </div>

                  <div className="text-right text-xs font-mono text-emerald-800">
                    <div><strong>Checked:</strong> {new Date().toLocaleDateString()}</div>
                    <div><strong>ID:</strong> {result.securityHash}</div>
                  </div>
                </div>

                {/* Render Official Certificate Component */}
                <VerifiableCertificateViewer certificate={result.certificate} showActions={true} />
              </div>
            ) : (
              <div className="p-8 bg-white border border-rose-200 rounded-3xl text-center space-y-3 max-w-lg mx-auto shadow-sm">
                <AlertTriangle className="w-12 h-12 text-rose-500 mx-auto" />
                <h3 className="text-lg font-bold text-slate-900">Credential Not Found</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We could not find an official record matching ID <code className="bg-slate-100 px-2 py-0.5 rounded text-rose-600 font-mono">{searchQuery}</code>. Please double-check the credential ID or contact the issuing authority.
                </p>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
