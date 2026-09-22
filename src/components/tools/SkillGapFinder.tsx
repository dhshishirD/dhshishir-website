import React, { useState, useMemo, useEffect } from 'react';
import { 
  Compass, CheckCircle2, Circle, ExternalLink, Search, 
  Filter, Tag, Globe, Sparkles, Building2, BookOpen, 
  Briefcase, Award, Cpu, ShieldCheck, ArrowRight, Copy, Check
} from 'lucide-react';
import { 
  BANGLADESH_AFFILIATE_COURSES, 
  GLOBAL_INTERNATIONAL_COURSES, 
  CAREER_TRACKS_DIRECTORY 
} from '../../data/affiliateCoursesData';
import type { AffiliateCourse, CareerTrackInfo } from '../../data/affiliateCoursesData';

export const SkillGapFinder: React.FC = () => {
  // Region & Geo-Targeting State (Defaults to BD if in Bangladesh timezone/locale)
  const [regionMode, setRegionMode] = useState<'bd' | 'global'>('bd');
  
  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      const isBdTz = tz.includes('Dhaka') || tz.includes('Kolkata');
      const isBdLang = navigator.language?.toLowerCase().includes('bn') || navigator.language?.toLowerCase().includes('bd');
      if (isBdTz || isBdLang) {
        setRegionMode('bd');
      } else {
        setRegionMode('global');
      }
    } catch {
      setRegionMode('bd');
    }
  }, []);

  // Career Track & Filter States
  const [selectedTrackId, setSelectedTrackId] = useState<string>('corporate_exec');
  const [selectedProvider, setSelectedProvider] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [checkedSkills, setCheckedSkills] = useState<Record<string, boolean>>({});
  const [copiedPromoId, setCopiedPromoId] = useState<string | null>(null);

  const activeTrack = CAREER_TRACKS_DIRECTORY.find(c => c.id === selectedTrackId) || CAREER_TRACKS_DIRECTORY[0];

  // Toggle user-checked skill to evaluate personal skill gap
  const handleToggleSkill = (skill: string) => {
    setCheckedSkills(prev => ({
      ...prev,
      [skill]: !prev[skill]
    }));
  };

  const masteredCount = activeTrack.keySkills.filter(s => checkedSkills[s]).length;
  const gapCount = activeTrack.keySkills.length - masteredCount;

  // Filter Courses based on Region, Track, Provider, and Search
  const filteredCourses = useMemo(() => {
    const baseList = regionMode === 'bd' ? BANGLADESH_AFFILIATE_COURSES : GLOBAL_INTERNATIONAL_COURSES;

    return baseList.filter(course => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchName = course.name.toLowerCase().includes(query);
        const matchCat = course.category.toLowerCase().includes(query);
        const matchProv = course.provider.toLowerCase().includes(query);
        if (!matchName && !matchCat && !matchProv) return false;
      }

      // 2. Track Filter (Only if not searching globally)
      if (!searchQuery.trim() && course.track !== selectedTrackId && regionMode === 'bd') {
        // Show courses belonging to track or top picks
        if (!course.isTopPick && course.track !== selectedTrackId) {
          return false;
        }
      }

      // 3. Provider Filter
      if (selectedProvider !== 'all' && course.provider !== selectedProvider) {
        return false;
      }

      return true;
    });
  }, [regionMode, selectedTrackId, selectedProvider, searchQuery]);

  const handleCopyPromo = (courseId: string, promo: string) => {
    navigator.clipboard.writeText(promo);
    setCopiedPromoId(courseId);
    setTimeout(() => setCopiedPromoId(null), 2000);
  };

  return (
    <div className="space-y-8 text-slate-900 animate-in fade-in duration-300">
      
      {/* HEADER: GEO-TARGETED CAREER & COURSE MATCHER */}
      <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 text-white rounded-3xl shadow-2xl relative overflow-hidden space-y-6 border border-slate-800">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" /> Skill-to-Career Roadmap & Master Course Directory
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold">
              {regionMode === 'bd' ? '200+ Verified Courses Across 6 BD Platforms' : 'Global Fellowships & Open-Access Hubs'}
            </span>
          </div>

          {/* Geo Region Switcher */}
          <div className="flex bg-white/10 p-1 rounded-2xl border border-white/10 text-xs font-bold">
            <button
              onClick={() => setRegionMode('bd')}
              className={`px-3 py-1.5 rounded-xl transition cursor-pointer flex items-center gap-1.5 ${
                regionMode === 'bd' ? 'bg-teal-400 text-slate-950 shadow-sm' : 'text-slate-300 hover:text-white'
              }`}
            >
              <span>🇧🇩 Bangladesh Directory (200+)</span>
            </button>
            <button
              onClick={() => setRegionMode('global')}
              className={`px-3 py-1.5 rounded-xl transition cursor-pointer flex items-center gap-1.5 ${
                regionMode === 'global' ? 'bg-teal-400 text-slate-950 shadow-sm' : 'text-slate-300 hover:text-white'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>🌍 Global Pathways & Free Hubs</span>
            </button>
          </div>
        </div>

        <div className="space-y-2 max-w-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
            Personalized Career Skill Gap Navigator
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {regionMode === 'bd' 
              ? 'Select your target career path below. Audit your current competencies against industry requirements, discover your missing skill gaps, and explore 200+ curated courses across 10 Minute School, Ostad, Learning Bangladesh, MSB Academy, Bohubrihi, and Shikho.'
              : 'Explore international career pathways, global scholarship fellowships (Chevening, Fulbright), Google Professional Certificates, and our 100% free open-access IELTS and English Fluency portals.'}
          </p>
        </div>

        {/* 8 CAREER TRACK SELECTOR */}
        <div className="space-y-2 pt-2">
          <div className="text-[11px] font-bold uppercase tracking-wider text-teal-300">
            Choose Your Target Career Horizon:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-2.5">
            {CAREER_TRACKS_DIRECTORY.map(track => {
              const isSelected = selectedTrackId === track.id;
              return (
                <button
                  key={track.id}
                  onClick={() => setSelectedTrackId(track.id)}
                  className={`p-3 rounded-2xl border text-left transition cursor-pointer space-y-1 ${
                    isSelected
                      ? 'bg-teal-900/60 border-teal-400 text-white shadow-lg ring-1 ring-teal-400'
                      : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold truncate text-white">{track.title}</span>
                    <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded shrink-0 ml-1 ${isSelected ? 'bg-teal-400 text-slate-950' : 'bg-white/10 text-slate-400'}`}>
                      {track.badge}
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400 line-clamp-1">{track.roleDescription}</div>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* SKILL GAP AUDIT CARD */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-teal-800">
              Interactive Competency Check: {activeTrack.title}
            </div>
            <p className="text-xs text-slate-500 mt-0.5">{activeTrack.roleDescription}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold">
              ✓ {masteredCount} Mastered
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold">
              ⚡ {gapCount} Skill Gaps Identified
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-xs font-bold text-slate-700">
            Tick the skills you have already mastered to isolate your exact skill gaps:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {activeTrack.keySkills.map((skill, idx) => {
              const isChecked = Boolean(checkedSkills[skill]);
              return (
                <div
                  key={idx}
                  onClick={() => handleToggleSkill(skill)}
                  className={`p-3 rounded-xl border flex items-center justify-between gap-2 cursor-pointer transition ${
                    isChecked 
                      ? 'bg-emerald-50/60 border-emerald-300 text-emerald-950 font-semibold' 
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-teal-300'
                  }`}
                >
                  <span className="text-xs">{skill}</span>
                  {isChecked ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <Circle className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* FILTER & SEARCH BAR */}
      <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by course name, skill, or keyword..."
              className="w-full pl-9.5 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:border-teal-400 outline-none"
            />
          </div>

          {/* Platform Provider Filter Buttons (for BD) */}
          {regionMode === 'bd' ? (
            <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold text-slate-600">
              <span className="text-[11px] font-bold text-slate-400 mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Provider:
              </span>
              {[
                { id: 'all', label: 'All (200+)' },
                { id: '10 Minute School', label: '10 Minute School' },
                { id: 'Learning Bangladesh', label: 'Learning BD' },
                { id: 'MSB Academy', label: 'MSB Academy' },
                { id: 'Bohubrihi', label: 'Bohubrihi' },
                { id: 'Ostad', label: 'Ostad' },
                { id: 'Shikho', label: 'Shikho' }
              ].map(p => (
                <button
                  key={p.id}
                  onClick={() => setSelectedProvider(p.id)}
                  className={`px-2.5 py-1 rounded-lg transition cursor-pointer text-xs ${
                    selectedProvider === p.id 
                      ? 'bg-teal-900 text-white font-bold shadow-2xs' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          ) : (
            <div className="text-xs font-semibold text-teal-800">
              Showing Global Masterclasses & Open-Access Portals
            </div>
          )}

        </div>
      </div>

      {/* CURATED COURSE DIRECTORY GRID */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-teal-800" />
            <span>Recommended Courses to Bridge Skill Gaps ({filteredCourses.length})</span>
          </h2>
          <span className="text-xs text-slate-500 font-medium">
            Special verified affiliate discounts included
          </span>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-teal-400 p-5 shadow-2xs hover:shadow-md transition flex flex-col justify-between group space-y-4"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-teal-50 border border-teal-200 text-teal-900 text-[10px] font-bold uppercase tracking-wider truncate max-w-[160px]">
                      {course.provider}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 shrink-0">
                      {course.price}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-teal-900 transition line-clamp-2 leading-snug">
                    {course.name}
                  </h3>

                  <div className="text-[11px] text-slate-500 font-medium flex items-center gap-1.5">
                    <Tag className="w-3 h-3 text-slate-400" />
                    <span className="truncate">{course.category}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                  {/* Promo Code if present */}
                  {course.promoCode && (
                    <div className="flex items-center justify-between bg-amber-50/70 border border-amber-200/80 rounded-xl px-2.5 py-1 text-[11px]">
                      <span className="font-semibold text-amber-900">Promo: <strong>{course.promoCode}</strong></span>
                      <button
                        onClick={() => handleCopyPromo(course.id, course.promoCode!)}
                        className="text-amber-800 hover:text-amber-950 font-bold flex items-center gap-1 cursor-pointer"
                      >
                        {copiedPromoId === course.id ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedPromoId === course.id ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  )}

                  <a
                    href={course.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 rounded-xl bg-teal-900 hover:bg-teal-800 text-white text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>{course.isGlobal && course.price.includes('Free') ? 'Access Free Hub' : 'Enroll with Discount'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 bg-white border border-slate-200 rounded-2xl text-center space-y-2">
            <div className="text-sm font-bold text-slate-700">No courses match your specific search filter</div>
            <p className="text-xs text-slate-500">Try clearing the search query or selecting "All Platforms" above.</p>
          </div>
        )}
      </div>

    </div>
  );
};
