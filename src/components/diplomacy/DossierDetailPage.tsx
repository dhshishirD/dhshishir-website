import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Globe, Compass, Bookmark, BookmarkCheck, Share2, 
  Copy, FileText, CheckCircle2, AlertTriangle, 
  TrendingUp, ExternalLink, Calendar, Clock, BookOpen, 
  Printer, ArrowUpRight, Award, Layers
} from 'lucide-react';
import { INITIAL_INTEL_FEED } from '../../data/diplomacyData';
import { getLocalBookmarks, toggleLocalBookmark, syncBookmarkToCloud } from '../../services/diplomacyService';

interface DossierDetailPageProps {
  slug: string;
  user: any;
  onNavigateHome: () => void;
  onNavigateDiplomacy: () => void;
  onNavigateDossier: (slug: string) => void;
}

export const DossierDetailPage: React.FC<DossierDetailPageProps> = ({
  slug,
  user,
  onNavigateHome,
  onNavigateDiplomacy,
  onNavigateDossier
}) => {
  const dossier = INITIAL_INTEL_FEED.find(item => item.slug === slug || item.id === slug) || INITIAL_INTEL_FEED[0];
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);
  const [selectedCitationStyle, setSelectedCitationStyle] = useState<'APA' | 'Harvard' | 'Chicago'>('APA');

  useEffect(() => {
    setBookmarks(getLocalBookmarks());
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.title = `${dossier.title} | Strategic Intelligence Dossier | DH Shishir`;

    // Inject Schema.org ScholarlyArticle JSON-LD
    const scriptId = 'dossier-schema-ld';
    let existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      existingScript = document.createElement('script');
      existingScript.id = scriptId;
      existingScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(existingScript);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "ScholarlyArticle",
      "headline": dossier.title,
      "description": dossier.executiveSummary,
      "author": {
        "@type": "Person",
        "name": "Daloyar Hassan Shishir",
        "url": "https://dhshishir.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Diplomatic & Foreign Policy Intelligence Desk",
        "url": "https://dhshishir.com/diplomacy"
      },
      "datePublished": dossier.publishedAt,
      "mainEntityOfPage": `https://dhshishir.com/diplomacy/${dossier.slug || dossier.id}`,
      "keywords": dossier.tags.join(', ')
    };

    existingScript.textContent = JSON.stringify(schemaData);

    return () => {
      const scriptToRemove = document.getElementById(scriptId);
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, [dossier]);

  const isSaved = bookmarks.includes(dossier.id);

  const handleToggleSave = () => {
    const updated = toggleLocalBookmark(dossier.id);
    setBookmarks(updated);
    if (user) {
      syncBookmarkToCloud(user.id, dossier.id, !isSaved);
    }
  };

  const getCitation = (style: 'APA' | 'Harvard' | 'Chicago') => {
    const author = 'Shishir, D. H.';
    const year = new Date(dossier.publishedAt).getFullYear() || 2026;
    const title = dossier.title;
    const url = `https://dhshishir.com/diplomacy/${dossier.slug || dossier.id}`;

    if (style === 'APA') {
      return `${author} (${year}). ${title}. Foreign Policy & Strategic Intelligence Desk. Retrieved from ${url}`;
    } else if (style === 'Harvard') {
      return `${author}, ${year}. ${title}. [online] Foreign Policy & Strategic Intelligence Desk. Available at: <${url}> [Accessed ${new Date().toLocaleDateString('en-GB')}].`;
    } else {
      return `${author} "${title}." Foreign Policy & Strategic Intelligence Desk, ${dossier.publishedAt}. ${url}.`;
    }
  };

  const handleCopyCitation = () => {
    const text = getCitation(selectedCitationStyle);
    navigator.clipboard.writeText(text);
    setCopiedFormat(selectedCitationStyle);
    setTimeout(() => setCopiedFormat(null), 3000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: dossier.title,
        text: dossier.executiveSummary,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Dossier URL copied to clipboard');
    }
  };

  const relatedDossiers = INITIAL_INTEL_FEED.filter(
    item => item.id !== dossier.id && item.pillar === dossier.pillar
  ).slice(0, 3);

  return (
    <div className="pt-24 pb-28 min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white">
      
      {/* Top Academic Breadcrumb Navigation */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800/80 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <button onClick={onNavigateHome} className="hover:text-cyan-400 font-semibold transition cursor-pointer">
              dhshishir.com
            </button>
            <span>/</span>
            <button onClick={onNavigateDiplomacy} className="hover:text-cyan-400 font-semibold transition cursor-pointer">
              diplomacy
            </button>
            <span>/</span>
            <span className="text-cyan-400 font-bold truncate max-w-[200px] sm:max-w-xs">{dossier.slug || dossier.id}</span>
          </div>

          <button
            onClick={onNavigateDiplomacy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition font-semibold cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Intelligence Desk</span>
          </button>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Document Header & Metadata Badge */}
        <header className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-bold tracking-wide">
              <Globe className="w-3.5 h-3.5" /> {dossier.source}
            </span>
            <span className="px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-bold">
              ● {dossier.impactLevel}
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-medium">
              Strategic Pillar: {dossier.pillar.toUpperCase()}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
            {dossier.title}
          </h1>

          {/* Author & Publication Bylines */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-3.5 border-y border-slate-800/80 text-xs text-slate-400">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-xs shadow-md">
                DH
              </div>
              <div>
                <div className="font-bold text-white text-sm">Daloyar Hassan Shishir</div>
                <div className="text-[11px] text-cyan-400">Strategic Affairs & Foreign Policy Analyst</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span>Published: {dossier.publishedAt}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>{dossier.readTime}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Action Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 bg-slate-900/60 border border-slate-800/80 p-3 rounded-2xl">
          <div className="flex items-center gap-2">
            <button
              onClick={handleToggleSave}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border ${
                isSaved
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:text-white border-slate-700'
              }`}
            >
              {isSaved ? <BookmarkCheck className="w-4 h-4 text-cyan-400" /> : <Bookmark className="w-4 h-4 text-slate-400" />}
              <span>{isSaved ? 'Saved in Research Binder' : 'Save Dossier'}</span>
            </button>

            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white text-xs font-bold transition cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>

            <button
              onClick={() => window.print()}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white text-xs font-bold transition cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Brief</span>
            </button>
          </div>

          <a
            href={dossier.originalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-bold px-3 py-1.5 bg-cyan-950/50 hover:bg-cyan-900/60 rounded-xl border border-cyan-500/30 transition"
          >
            <span>Primary Think Tank Source</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Executive Summary & National Interest Callout */}
        <section className="mb-10 space-y-4">
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-cyan-400" /> Executive Intelligence Summary
            </h3>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              {dossier.executiveSummary}
            </p>
          </div>

          <div className="bg-gradient-to-r from-emerald-950/60 via-teal-950/40 to-slate-950/70 border-l-4 border-emerald-400 rounded-r-2xl p-5 shadow-lg">
            <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-emerald-400" /> Significance for Bangladesh National Interest
            </h3>
            <p className="text-sm sm:text-base text-emerald-100 leading-relaxed font-medium">
              {dossier.bangladeshSignificance}
            </p>
          </div>
        </section>

        {/* Section 1: Strategic Background & Genesis */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-800">
            <span className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold">1</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Strategic Background & Historical Genesis
            </h2>
          </div>
          <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              {dossier.detailedAnalysis?.backgroundAndGenesis || dossier.executiveSummary}
            </p>
          </div>
        </section>

        {/* Section 2: Great Power Interests Matrix */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-800">
            <span className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold">2</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Great Power Interests & Strategic Postures
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
              <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                🇺🇸 Washington (US Posture)
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {dossier.detailedAnalysis?.greatPowerInterests?.us || 
                 'Prioritizes freedom of navigation in the Bay of Bengal, maritime domain awareness, and ensuring open commercial sea lanes under UNCLOS principles.'}
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
              <div className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                🇨🇳 Beijing (China Posture)
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {dossier.detailedAnalysis?.greatPowerInterests?.china || 
                 'Monitors regional transport connectivity relative to the Belt and Road Initiative (BRI) and the China-Myanmar Economic Corridor (CMEC) access.'}
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                🇮🇳 New Delhi (India Posture)
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {dossier.detailedAnalysis?.greatPowerInterests?.india || 
                 'Focuses on transit connectivity for its landlocked Northeast states (Seven Sisters), cross-border security coordination, and coastal radar integration.'}
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Vulnerabilities & Economic Impact */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-800">
            <span className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold">3</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Strategic Vulnerabilities & Macroeconomic Impact for Bangladesh
            </h2>
          </div>

          <div className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
            <p>
              {dossier.detailedAnalysis?.vulnerabilitiesAndEconomicImpact || dossier.bangladeshSignificance}
            </p>
          </div>

          {/* Risks vs Opportunities Dual Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {dossier.strategicRisks && dossier.strategicRisks.length > 0 && (
              <div className="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-5">
                <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-rose-400" /> Key Strategic Risks & Vulnerabilities
                </h4>
                <ul className="space-y-2">
                  {dossier.strategicRisks.map((risk, i) => (
                    <li key={i} className="text-xs sm:text-sm text-rose-100 flex items-start gap-2">
                      <span className="text-rose-400 font-bold">•</span>
                      <span>{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {dossier.strategicOpportunities && dossier.strategicOpportunities.length > 0 && (
              <div className="bg-teal-950/20 border border-teal-500/30 rounded-2xl p-5">
                <h4 className="text-xs font-bold text-teal-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-teal-400" /> Strategic Opportunities & Levers
                </h4>
                <ul className="space-y-2">
                  {dossier.strategicOpportunities.map((opp, i) => (
                    <li key={i} className="text-xs sm:text-sm text-teal-100 flex items-start gap-2">
                      <span className="text-teal-400 font-bold">•</span>
                      <span>{opp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* Section 4: Actionable Ministerial Policy Directives */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-800">
            <span className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold">4</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Actionable Policy Directives for MoFA, ERD & Line Ministries
            </h2>
          </div>

          <div className="bg-slate-900 border border-cyan-500/30 rounded-2xl p-6 shadow-xl space-y-4">
            {(dossier.detailedAnalysis?.policyDirectives || dossier.policyRecommendations || [
              'Establish dedicated bilateral consultation taskforces.',
              'Accelerate regulatory reforms and compliance mechanisms.',
              'Coordinate with regional multilateral secretariats.'
            ]).map((directive, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <div className="w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-bold shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div className="leading-relaxed font-medium">
                  {directive}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Academic Citations & Citation Generator */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-800">
            <span className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xs font-bold">5</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Primary Citations & Think Tank Sources
            </h2>
          </div>

          {/* Citations List */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 mb-6 space-y-3">
            {(dossier.detailedAnalysis?.academicCitations || [
              {
                title: `${dossier.source} Official Policy Paper on South Asian Strategic Architecture`,
                authorOrBody: dossier.source,
                publication: 'International Strategic Studies Series',
                year: '2026',
                url: dossier.originalUrl
              }
            ]).map((cite, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 pb-3 border-b border-slate-800/60 last:border-0 last:pb-0">
                <FileText className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <span className="font-bold text-white">{cite.authorOrBody} ({cite.year}).</span>{' '}
                  <span className="italic">{cite.title}.</span>{' '}
                  <span className="text-slate-400">{cite.publication}.</span>{' '}
                  {cite.url && (
                    <a href={cite.url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-0.5">
                      <span>[Source Link]</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Citation Generator */}
          <div className="bg-slate-900 border border-cyan-500/40 rounded-2xl p-5 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-4 h-4 text-cyan-400" /> Academic Citation Generator (Cite this Dossier)
              </div>
              
              <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
                {(['APA', 'Harvard', 'Chicago'] as const).map(style => (
                  <button
                    key={style}
                    onClick={() => setSelectedCitationStyle(style)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                      selectedCitationStyle === style
                        ? 'bg-cyan-600 text-white shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs text-slate-300 font-mono leading-relaxed select-all">
              {getCitation(selectedCitationStyle)}
            </div>

            <div className="flex justify-end mt-3">
              <button
                onClick={handleCopyCitation}
                className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white text-xs font-bold rounded-xl transition flex items-center gap-1.5 cursor-pointer shadow-lg shadow-cyan-950"
              >
                {copiedFormat ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedFormat ? `Copied ${copiedFormat} Citation!` : `Copy ${selectedCitationStyle} Citation`}</span>
              </button>
            </div>
          </div>
        </section>

        {/* Key Actors Tag Cloud */}
        <section className="mb-12 pt-6 border-t border-slate-800">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
            Primary Stakeholders & Intergovernmental Bodies:
          </div>
          <div className="flex flex-wrap gap-2">
            {dossier.keyActors.map(actor => (
              <span key={actor} className="text-xs bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1.5 rounded-xl font-medium">
                {actor}
              </span>
            ))}
          </div>
        </section>

        {/* Related Dossiers in Same Strategic Pillar */}
        {relatedDossiers.length > 0 && (
          <section className="pt-8 border-t border-slate-800">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" /> Related Strategic Dossiers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedDossiers.map(rel => (
                <div
                  key={rel.id}
                  onClick={() => onNavigateDossier(rel.slug || rel.id)}
                  className="bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-4 transition cursor-pointer flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    <span className="text-[10px] font-extrabold text-cyan-400 uppercase tracking-wider block mb-1">
                      {rel.source}
                    </span>
                    <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition line-clamp-2">
                      {rel.title}
                    </h4>
                  </div>
                  <div className="mt-3 text-[11px] text-slate-400 flex items-center justify-between pt-2 border-t border-slate-800/60">
                    <span>{rel.publishedAt}</span>
                    <span className="text-cyan-400 font-bold group-hover:translate-x-0.5 transition">Read Brief →</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </article>

    </div>
  );
};
