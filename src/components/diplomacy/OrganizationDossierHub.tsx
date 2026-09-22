import React, { useState, useMemo } from 'react';
import { 
  Building2, Globe, Shield, Sparkles, Search, Filter, 
  ExternalLink, Download, FileText, ArrowRight, CheckCircle2, 
  Clock, Award, Briefcase, BookOpen, ChevronRight, HelpCircle, 
  Layers, MapPin, DollarSign, Calendar, Users, Zap, Check, Share2,
  GraduationCap
} from 'lucide-react';
import { 
  GLOBAL_ORGANIZATIONS, 
  VERIFIED_OPPORTUNITIES, 
  getOpportunityCycleStatus 
} from '../../data/organizationDossiersData';
import type { 
  OrganizationDossier, 
  VerifiedOpportunity 
} from '../../data/organizationDossiersData';
import confetti from 'canvas-confetti';

interface OrganizationDossierHubProps {
  onSelectTrackForAts?: (trackPayload: { title: string; orgName: string; keywords: string[]; sampleDescription: string }) => void;
  onNavigateHome?: () => void;
}

export const OrganizationDossierHub: React.FC<OrganizationDossierHubProps> = ({ 
  onSelectTrackForAts,
  onNavigateHome 
}) => {
  const [activeTab, setActiveTab] = useState<'dossiers' | 'careers' | 'scholarships' | 'map'>('dossiers');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCareerTrack, setSelectedCareerTrack] = useState<string>('all');
  const [expandedOrgId, setExpandedOrgId] = useState<string | null>('undp');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  // Filtered Organizations
  const filteredOrgs = useMemo(() => {
    return GLOBAL_ORGANIZATIONS.filter(org => {
      const matchesSearch = org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            org.acronym.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            org.thematicPillars.some(p => p.toLowerCase().includes(searchQuery.toLowerCase())) ||
                            org.hqCity.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            org.hqCountry.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || org.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Filtered Verified Career & Scholarship Pathways
  const filteredCareers = useMemo(() => {
    return VERIFIED_OPPORTUNITIES.filter(opp => {
      const matchesSearch = opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            opp.orgName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            opp.orgAcronym.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            opp.targetKeywordsToWeave.some(k => k.toLowerCase().includes(searchQuery.toLowerCase())) ||
                            (opp.academicFields && opp.academicFields.some(f => f.toLowerCase().includes(searchQuery.toLowerCase())));
      
      let matchesTrack = true;
      if (activeTab === 'scholarships') {
        matchesTrack = opp.trackCategory === 'scholarships_fellowships';
      } else if (selectedCareerTrack !== 'all') {
        matchesTrack = opp.trackCategory === selectedCareerTrack;
      }
      return matchesSearch && matchesTrack;
    });
  }, [searchQuery, selectedCareerTrack, activeTab]);

  // Handle 1-Click Tailor CV in ATS Scanner & Cover Letter Architect
  const handleLaunchAtsOptimization = (opp: VerifiedOpportunity) => {
    if (onSelectTrackForAts) {
      onSelectTrackForAts({
        title: opp.title,
        orgName: opp.orgName,
        keywords: opp.targetKeywordsToWeave,
        sampleDescription: opp.sampleJobCircularDescription
      });
    } else {
      // Fallback navigate to ATS scanner with query params
      const searchParams = new URLSearchParams({
        title: opp.title,
        org: opp.orgName,
        keywords: opp.targetKeywordsToWeave.join(',')
      });
      window.location.href = `/tools/ats-resume?${searchParams.toString()}`;
    }
    confetti({ particleCount: 60, spread: 65, origin: { y: 0.6 } });
  };

  // 1-Click Export Word Dossier (.doc)
  const handleDownloadDossierDoc = (org: OrganizationDossier) => {
    const docHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${org.name} (${org.acronym}) - Strategic Organization Dossier | DH Shishir</title>
  <style>
    @page { size: letter; margin: 0.85in; }
    body { font-family: 'Times New Roman', Georgia, serif; color: #0f172a; line-height: 1.45; font-size: 10pt; }
    .header-box { border-bottom: 2pt solid #0f172a; padding-bottom: 8pt; margin-bottom: 12pt; text-align: center; }
    .org-title { font-size: 18pt; font-weight: bold; text-transform: uppercase; color: #0f172a; margin: 0 0 4pt 0; }
    .org-subtitle { font-size: 10pt; font-weight: bold; color: #475569; margin: 0; font-family: 'Calibri', Arial, sans-serif; }
    .meta-table { width: 100%; border-collapse: collapse; margin-bottom: 12pt; font-size: 9pt; font-family: 'Calibri', Arial, sans-serif; }
    .meta-table td { padding: 4pt 6pt; border: 1pt solid #cbd5e1; }
    .meta-label { font-weight: bold; background-color: #f1f5f9; width: 30%; color: #0f172a; }
    .section-title { font-size: 11pt; font-weight: bold; text-transform: uppercase; border-bottom: 1.25pt solid #0f172a; padding-bottom: 2pt; margin-top: 12pt; margin-bottom: 6pt; color: #0f172a; }
    p { margin: 0 0 6pt 0; text-align: justify; }
    ul { margin: 0 0 6pt 0; padding-left: 16pt; }
    li { margin-bottom: 3pt; }
  </style>
</head>
<body>
  <div class="header-box">
    <div class="org-title">${org.name} (${org.acronym})</div>
    <div class="org-subtitle">Strategic Institutional Dossier & Geopolitical Analysis • DH Shishir Intelligence Desk</div>
  </div>

  <table class="meta-table">
    <tr><td class="meta-label">Headquarters</td><td>${org.hqCity}, ${org.hqCountry}</td></tr>
    <tr><td class="meta-label">Established</td><td>${org.foundedYear}</td></tr>
    <tr><td class="meta-label">Global Leadership</td><td>${org.globalLeadership}</td></tr>
    <tr><td class="meta-label">Annual Budget / Portfolio</td><td>${org.annualBudgetOrFunding}</td></tr>
    <tr><td class="meta-label">Official Careers Gateway</td><td>${org.officialCareersPortalUrl}</td></tr>
  </table>

  <div class="section-title">Institutional Mandate & Mission</div>
  <p>${org.missionStatement}</p>

  <div class="section-title">Core Thematic Pillars</div>
  <ul>
    ${org.thematicPillars.map(p => `<li><strong>${p}</strong></li>`).join('')}
  </ul>

  <div class="section-title">Flagship Publications & Global Indices</div>
  <ul>
    ${org.flagshipPublications.map(f => `<li><strong>${f.title} (${f.year}):</strong> ${f.description} (URL: ${f.url})</li>`).join('')}
  </ul>

  <div class="section-title">Bangladesh & Regional Strategic Footprint</div>
  <p><strong>Active Since:</strong> ${org.bangladeshFootprint.activeSince}</p>
  <p><strong>Local Office:</strong> ${org.bangladeshFootprint.localOfficeLocation}</p>
  <p><strong>Strategic Alignment:</strong> ${org.bangladeshFootprint.strategicAlignment}</p>
  <p><strong>Key Ongoing Initiatives:</strong></p>
  <ul>
    ${org.bangladeshFootprint.keyInitiatives.map(i => `<li>${i}</li>`).join('')}
  </ul>

  <div class="section-title">Diplomatic Takeaway & Policy Assessment</div>
  <p>${org.policyTakeaway}</p>
</body>
</html>`;

    const blob = new Blob(['\ufeff', docHtml], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${org.acronym}_Strategic_Dossier_DH_Shishir.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-10 text-slate-900 animate-in fade-in duration-300">
      
      {/* 1. TOP HEADER BANNER */}
      <div className="p-6 sm:p-10 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 text-white rounded-3xl shadow-2xl relative overflow-hidden space-y-6 border border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5" /> Global Organization Dossiers & Career Gateway
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold flex items-center gap-1">
              <Shield className="w-3.5 h-3.5" /> 100% Direct Official Verification Guarantee
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold flex items-center gap-1">
              <GraduationCap className="w-3.5 h-3.5" /> Fully Funded Global Scholarships
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
            <span className="px-2 py-0.5 bg-white/5 rounded border border-white/10">UN System</span>
            <span className="px-2 py-0.5 bg-white/5 rounded border border-white/10">World Bank</span>
            <span className="px-2 py-0.5 bg-white/5 rounded border border-white/10">ADB</span>
            <span className="px-2 py-0.5 bg-white/5 rounded border border-white/10">Chevening</span>
            <span className="px-2 py-0.5 bg-white/5 rounded border border-white/10">DAAD</span>
            <span className="px-2 py-0.5 bg-white/5 rounded border border-white/10">BRAC</span>
          </div>
        </div>

        <div className="space-y-2 max-w-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
            Global Organization Strategic Dossiers, 100% Verified Careers & Global Scholarships Hub
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Explore comprehensive institutional intelligence on 32+ international organizations, multilateral development banks, and foreign policy think tanks. Discover <strong>100% verified UN jobs, WFP careers, NGO vacancies, and prestigious fully funded global scholarships (Chevening, DAAD, Erasmus Mundus, Gates Cambridge, MEXT, Commonwealth)</strong> with real-time annual deadline calendars and 1-click ATS CV synchronization.
          </p>
        </div>

        {/* TOP SEARCH & FAST FILTERS */}
        <div className="pt-2">
          <div className="relative max-w-2xl">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search UN jobs, UNDP, WFP, World Bank, Chevening, DAAD, Erasmus Mundus, BRAC, scholarships, or keywords..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/10 text-white placeholder-slate-400 border border-white/15 focus:outline-none focus:ring-2 focus:ring-teal-400 text-xs sm:text-sm backdrop-blur-md"
            />
          </div>
        </div>

      </div>

      {/* 2. NAVIGATION TABS: DOSSIERS / VERIFIED CAREERS / GLOBAL SCHOLARSHIPS / MAP */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('dossiers')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 transition cursor-pointer ${
              activeTab === 'dossiers'
                ? 'bg-teal-900 text-white shadow-md'
                : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Building2 className="w-4 h-4 text-teal-300" />
            <span>1. Organization Dossiers ({filteredOrgs.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('careers')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 transition cursor-pointer ${
              activeTab === 'careers'
                ? 'bg-teal-900 text-white shadow-md'
                : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>2. 🛡️ 100% Verified Careers ({filteredCareers.length})</span>
            <span className="px-1.5 py-0.2 rounded-full bg-amber-400 text-slate-950 font-black text-[9px] uppercase">
              LIVE
            </span>
          </button>

          <button
            onClick={() => setActiveTab('scholarships')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 transition cursor-pointer ${
              activeTab === 'scholarships'
                ? 'bg-teal-900 text-white shadow-md'
                : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-amber-300" />
            <span>3. 🎓 Fully Funded Global Scholarships</span>
            <span className="px-1.5 py-0.2 rounded-full bg-emerald-400 text-slate-950 font-black text-[9px] uppercase">
              HOT
            </span>
          </button>

          <button
            onClick={() => setActiveTab('map')}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 transition cursor-pointer ${
              activeTab === 'map'
                ? 'bg-teal-900 text-white shadow-md'
                : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200'
            }`}
          >
            <Globe className="w-4 h-4 text-sky-400" />
            <span>4. Global HQ Directory</span>
          </button>
        </div>

        <div className="text-xs font-mono text-slate-500">
          Showing <strong>{activeTab === 'dossiers' ? filteredOrgs.length : filteredCareers.length}</strong> verified entries
        </div>
      </div>

      {/* TAB 1: ORGANIZATION STRATEGIC DOSSIERS */}
      {activeTab === 'dossiers' && (
        <div className="space-y-6">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Organizations' },
              { id: 'un_system', label: 'UN System & Specialized Agencies' },
              { id: 'financial_mdb', label: 'Development Banks & IFIs' },
              { id: 'think_tank', label: 'Geopolitical Think Tanks' },
              { id: 'dev_ngo', label: 'International NGOs & BRAC' },
              { id: 'scholarship_foundation', label: 'Premier Scholarship Foundations' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border ${
                  selectedCategory === cat.id
                    ? 'bg-teal-900 text-white border-teal-900 shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-900 border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Dossiers Grid */}
          <div className="grid grid-cols-1 gap-5">
            {filteredOrgs.map(org => {
              const isExpanded = expandedOrgId === org.id;
              return (
                <div 
                  key={org.id} 
                  className={`p-6 sm:p-7 bg-white rounded-3xl border transition-all ${
                    isExpanded 
                      ? 'border-teal-500/40 shadow-xl ring-1 ring-teal-500/20' 
                      : 'border-slate-200 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  {/* Top Bar */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-teal-950 text-white flex items-center justify-center font-black text-sm shrink-0 shadow-sm border border-teal-800">
                        {org.acronym.slice(0, 4)}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-base sm:text-lg font-black text-slate-900">
                            {org.name}
                          </h3>
                          <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-bold">
                            {org.categoryLabel}
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 flex items-center gap-3 mt-1 flex-wrap">
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-teal-800" /> {org.hqCity}, {org.hqCountry}</span>
                          <span>•</span>
                          <span>Est. {org.foundedYear}</span>
                          <span>•</span>
                          <span>Leadership: <strong className="text-slate-700">{org.globalLeadership}</strong></span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => handleDownloadDossierDoc(org)}
                        className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                        title="Download Dossier Word Document (.doc)"
                      >
                        <Download className="w-3.5 h-3.5 text-teal-800" />
                        <span className="hidden sm:inline">Export Dossier (.doc)</span>
                      </button>

                      <button
                        onClick={() => setExpandedOrgId(isExpanded ? null : org.id)}
                        className="px-4 py-2 bg-teal-900 hover:bg-teal-800 text-white rounded-xl text-xs font-bold transition flex items-center gap-1 cursor-pointer"
                      >
                        <span>{isExpanded ? 'Collapse' : 'Deep Dossier'}</span>
                        <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      </button>
                    </div>
                  </div>

                  {/* Mission Summary */}
                  <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed pt-3">
                    {org.missionStatement}
                  </p>

                  {/* Thematic Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {org.thematicPillars.map((p, i) => (
                      <span key={i} className="text-[11px] px-2.5 py-0.5 bg-teal-50 text-teal-900 border border-teal-200/80 rounded-lg font-medium">
                        #{p}
                      </span>
                    ))}
                  </div>

                  {/* EXPANDED DEEP DOSSIER SECTION */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-slate-200 space-y-6 animate-in fade-in duration-200">
                      
                      {/* Grid: Publications & Bangladesh Footprint */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* Flagship Publications Box */}
                        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-teal-900 flex items-center gap-1.5">
                            <BookOpen className="w-4 h-4 text-teal-800" /> Flagship Reports & Global Indices
                          </h4>
                          <div className="space-y-2.5">
                            {org.flagshipPublications.map((pub, pi) => (
                              <div key={pi} className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
                                <div className="flex items-center justify-between">
                                  <a 
                                    href={pub.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-xs font-bold text-teal-900 hover:underline flex items-center gap-1"
                                  >
                                    <span>{pub.title}</span>
                                    <ExternalLink className="w-3 h-3 text-slate-400" />
                                  </a>
                                  <span className="text-[10px] font-mono text-slate-400">{pub.year}</span>
                                </div>
                                <p className="text-[11px] text-slate-600 leading-relaxed">
                                  {pub.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Bangladesh Footprint Box */}
                        <div className="p-5 rounded-2xl bg-teal-50/60 border border-teal-200 space-y-3">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-teal-950 flex items-center gap-1.5">
                            <Globe className="w-4 h-4 text-teal-800" /> Bangladesh & Regional Strategic Footprint
                          </h4>
                          <div className="text-xs text-slate-700 space-y-2">
                            <div>
                              <strong className="text-slate-900 block font-bold">Strategic Partnership:</strong>
                              <span className="text-[11px] leading-relaxed">{org.bangladeshFootprint.strategicAlignment}</span>
                            </div>
                            <div>
                              <strong className="text-slate-900 block font-bold">Local Operations Hub:</strong>
                              <span className="text-[11px]">{org.bangladeshFootprint.localOfficeLocation}</span>
                            </div>
                            <div>
                              <strong className="text-slate-900 block font-bold">Active Programs:</strong>
                              <ul className="list-disc pl-4 text-[11px] space-y-0.5 text-slate-600 pt-0.5">
                                {org.bangladeshFootprint.keyInitiatives.map((item, ii) => (
                                  <li key={ii}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                      </div>

                      {/* Policy Takeaway & Career Gateway Bar */}
                      <div className="p-4 bg-slate-900 text-white rounded-2xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="space-y-1">
                          <div className="text-[10px] uppercase font-bold text-teal-300">
                            Diplomatic Analysis Takeaway:
                          </div>
                          <p className="text-xs text-slate-200 max-w-2xl leading-relaxed">
                            {org.policyTakeaway}
                          </p>
                        </div>

                        <a
                          href={org.officialCareersPortalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 bg-teal-600 hover:bg-teal-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 shrink-0 justify-center cursor-pointer shadow-sm"
                        >
                          <span>Official Portal Gateway</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>

                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>
      )}

      {/* TAB 2 & TAB 3: 🛡️ VERIFIED CAREERS & SCHOLARSHIPS */}
      {(activeTab === 'careers' || activeTab === 'scholarships') && (
        <div className="space-y-6">
          
          {/* Track Filter Pills */}
          {activeTab === 'careers' && (
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Verified Opportunities' },
                { id: 'un_careers', label: '🇺🇳 UN & Multilateral YPP (UN Jobs)' },
                { id: 'ngo_careers', label: '🌍 International NGOs & BRAC Careers' },
                { id: 'think_tank_jobs', label: '🏛️ Think Tank Fellowships & Research' },
                { id: 'scholarships_fellowships', label: '🎓 Fully Funded Global Scholarships' }
              ].map(track => (
                <button
                  key={track.id}
                  onClick={() => setSelectedCareerTrack(track.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border ${
                    selectedCareerTrack === track.id
                      ? 'bg-teal-900 text-white border-teal-900 shadow-xs'
                      : 'bg-white text-slate-600 hover:text-slate-900 border-slate-200'
                  }`}
                >
                  {track.label}
                </button>
              ))}
            </div>
          )}

          {/* Opportunities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredCareers.map(opp => {
              const cycle = getOpportunityCycleStatus(opp);
              const isScholarship = opp.trackCategory === 'scholarships_fellowships';

              return (
                <div key={opp.id} className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between hover:border-teal-500/40 transition">
                  
                  {/* Top Metadata */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {opp.orgName} ({opp.orgAcronym})
                      </span>
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${cycle.badgeColor}`}>
                        {cycle.displayMessage}
                      </span>
                    </div>

                    <h3 className="text-base font-black text-slate-900 leading-snug">
                      {opp.title}
                    </h3>
                    <p className="text-xs text-slate-500">
                      Track: <strong>{opp.trackLabel}</strong> • <span className="text-teal-800 font-bold">{opp.compensationTier}</span>
                    </p>
                  </div>

                  {/* Scholarship Specific Full Coverage Box */}
                  {isScholarship && opp.scholarshipCoverage && (
                    <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-1 text-xs">
                      <div className="font-bold text-amber-950 uppercase text-[10px] tracking-wider flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-amber-700" /> Full Scholarship Coverage:
                      </div>
                      <p className="text-[11px] text-amber-900 leading-relaxed font-medium">
                        {opp.scholarshipCoverage}
                      </p>
                    </div>
                  )}

                  {/* Eligibility Checklist */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                    <div className="font-bold text-slate-800 uppercase text-[10px] tracking-wider flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-800" /> Eligibility Checklist:
                    </div>
                    <div className="space-y-1 text-[11px] text-slate-600">
                      <div>🎓 <strong>Academic Requirement:</strong> {opp.eligibility.educationLevel}</div>
                      <div>🌐 <strong>Language Standard:</strong> {opp.eligibility.languageRequirements.join(', ')}</div>
                      <div>⏳ <strong>Experience / Profile:</strong> {opp.eligibility.experienceRequired}</div>
                      <div>📍 <strong>Target Beneficiaries:</strong> {opp.eligibility.eligibleNationalities}</div>
                    </div>
                  </div>

                  {/* Eligible Academic Fields (for scholarships) */}
                  {opp.academicFields && (
                    <div className="space-y-1">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1">
                        <BookOpen className="w-3 h-3 text-slate-500" /> Eligible Disciplines & Fields:
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {opp.academicFields.map((field, fi) => (
                          <span key={fi} className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-700 rounded font-medium">
                            {field}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Target Keywords To Weave */}
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-600" /> ATS & Statement of Purpose Keywords:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {opp.targetKeywordsToWeave.map((kw, ki) => (
                        <span key={ki} className="text-[10px] px-2 py-0.5 bg-amber-50 text-amber-900 border border-amber-200 rounded font-mono">
                          +{kw}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ACTION BAR: 1-CLICK ATS TAILORING & OFFICIAL APPLY */}
                  <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-2">
                    <button
                      onClick={() => handleLaunchAtsOptimization(opp)}
                      className="w-full sm:flex-1 py-2.5 px-4 bg-teal-900 hover:bg-teal-800 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <Zap className="w-3.5 h-3.5 text-amber-300" />
                      <span>🎯 1-Click Tailor CV / SOP</span>
                    </button>

                    <a
                      href={opp.officialPortalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 cursor-pointer border border-slate-200"
                    >
                      <span>Official Portal</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                    </a>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      )}

      {/* TAB 4: GLOBAL HEADQUARTERS DIRECTORY */}
      {activeTab === 'map' && (
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="space-y-1">
            <h3 className="text-base font-black text-slate-900">
              Global Headquarters & Bilateral Diplomatic Hubs
            </h3>
            <p className="text-xs text-slate-500">
              Geographic distribution of global multilateral secretariats, think tanks, regional country offices, and premier scholarship commissions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {GLOBAL_ORGANIZATIONS.map(org => (
              <div key={org.id} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-slate-900">{org.acronym}</span>
                  <span className="text-[10px] font-mono text-teal-800 font-bold">{org.hqCity}</span>
                </div>
                <div className="text-[11px] text-slate-600 line-clamp-1">{org.name}</div>
                <div className="text-[10px] text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-400" /> {org.hqCountry}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. HIGH-CPC SEO EDITORIAL & AUTHORITY SECTION */}
      <section className="pt-8 border-t border-slate-200 space-y-8">
        
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold">
              <Shield className="w-3.5 h-3.5" /> High-Authority Career & Scholarship Guide
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Navigating United Nations Jobs, WFP Careers, NGO Vacancies & Fully Funded Scholarships (Chevening, DAAD, Erasmus Mundus)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
              Applying for <strong>united nations jobs (UN jobs)</strong>, multilateral development bank leadership programs, <strong>international NGO careers (BRAC, IRC, Oxfam)</strong>, or prestigious <strong>scholarships for international students (Chevening scholarship, DAAD scholarship, Erasmus Mundus scholarship, The Gates scholarship, MEXT scholarship, Commonwealth scholarship, Dutch-Bangla Bank scholarship)</strong> requires exact competency alignment and strategic statement of purpose (SOP) drafting. Our 100% verified gateway connects applicants directly with authentic institutional portals, eliminating third-party clickbait and providing real-time annual cycle tracking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="text-sm font-bold text-slate-900">1. UN & Multilateral Gateways</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Learn how to apply through <strong>UN Inspira</strong>, <strong>UNDP career opportunities</strong>, <strong>WFP job openings</strong>, and <strong>UN online volunteer jobs</strong> with tax-exempt international salary scales.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="text-sm font-bold text-slate-900">2. Development & NGO Careers</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Explore <strong>latest NGO vacancies</strong> across <strong>BRAC NGO careers (careers.brac.net)</strong>, International Rescue Committee, and USAID-funded health, climate, and emergency programs worldwide.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="text-sm font-bold text-slate-900">3. Policy & Think Tank Jobs</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Access <strong>remote think tank jobs</strong>, <strong>entry-level think tank jobs</strong>, and academic fellowships with Chatham House, CSIS, SIPRI, and BIISS for policy analysts and researchers.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="text-sm font-bold text-slate-900">4. Fully Funded Scholarships</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Secure <strong>fully funded scolarships</strong> including <strong>chevening scolarship</strong>, <strong>daad scolarship</strong>, <strong>erasmus mundus scolarship</strong>, <strong>the gates scolarship</strong>, <strong>nursing scolarship</strong>, and <strong>mba scolarship</strong> with 100% tuition and living stipends.
              </p>
            </div>
          </div>
        </div>

        {/* FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION) */}
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold">
              <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              United Nations Jobs, NGO Vacancies & Global Scholarships FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'How do I apply for United Nations jobs (UN jobs) and UN internships?',
                a: 'To apply for official United Nations jobs and internships, candidates must apply directly through official UN portals (careers.un.org or inspira.un.org) or specific agency sites such as UNDP (undp.org/careers), WFP (wfp.org/careers), and UNOPS (jobs.unops.org). Ensure your CV matches UN competency-based indicators (Google XYZ format).'
              },
              {
                q: 'What is the difference between Chevening, DAAD, and Erasmus Mundus scholarships?',
                a: 'The Chevening Scholarship (UK) funds a 1-year Master’s degree at any UK university with 100% tuition and living stipends. DAAD (Germany) funds 2-year Master’s and PhD programs at German universities with zero tuition and €934+/month stipends. Erasmus Mundus (EU) offers joint degrees across 2-4 European countries with full tuition waivers and €1,400/month allowances.'
              },
              {
                q: 'What are the requirements for the Gates Cambridge and The Gates Scholarship?',
                a: 'The Gates Cambridge Scholarship covers the full cost of studying at the University of Cambridge, requiring outstanding intellectual ability, leadership potential, a strong commitment to improving the lives of others, and academic alignment with Cambridge faculties.'
              },
              {
                q: 'Are UN online volunteer jobs and UNV positions paid?',
                a: 'UN Online Volunteering (unv.org) is civic and pro-bono, offering global experience credits and verified UN certificates. In-person National and International UN Volunteers (UNV) receive a comprehensive tax-exempt Volunteer Living Allowance (VLA), medical insurance, and resettlement grants.'
              },
              {
                q: 'How can I win Dutch-Bangla Bank (DBBL) Foundation Scholarships in Bangladesh?',
                a: 'DBBL Foundation offers merit-cum-need based scholarships for students who pass SSC or HSC examinations with high GPA (GPA 5.00 in city corporations, 4.80+ in rural districts). Eligible students receive monthly stipends disbursed directly via Rocket mobile banking plus annual book allowances.'
              },
              {
                q: 'How does the 1-Click Tailor CV feature help me pass UN, NGO, and Scholarship screeners?',
                a: 'Our built-in ATS Resume Scanner extracts the exact competency keywords from the target UN, World Bank, NGO, or scholarship circular and dynamically weaves them into your experience bullets using Google XYZ formatting, elevating your compatibility score to 95%+.'
              }
            ].map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden transition bg-slate-50/50">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-slate-900 hover:bg-slate-100 transition cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronRight className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? 'rotate-90 text-teal-800' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </section>

      {/* JSON-LD STRUCTURED DATA FOR SEO & HIGH-CPC SNIPPETS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "name": "Global Organization Strategic Dossiers, Verified Careers & Scholarships Hub",
                "description": "Verified directory of United Nations jobs (UN jobs), WFP careers, NGO vacancies, and prestigious global scholarships including Chevening, DAAD, Erasmus Mundus, Gates Cambridge, and MEXT.",
                "publisher": {
                  "@type": "Person",
                  "name": "Daloyar Hassan Shishir"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How do I apply for United Nations jobs (UN jobs) and UN internships?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Apply directly through official UN portals such as careers.un.org, inspira.un.org, undp.org/careers, or wfp.org/careers using single-column ATS CVs matching competency indicators."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is the difference between Chevening, DAAD, and Erasmus Mundus scholarships?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Chevening covers 1-year UK Master's with full fees and stipend; DAAD covers 2-year German Master's with zero tuition and €934+/mo; Erasmus Mundus covers joint degrees across EU nations with €1,400/mo."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />

    </div>
  );
};
