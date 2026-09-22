import React, { useState } from 'react';
import { 
  ACHIEVEMENT_BADGES, 
  TIER_CONFIG 
} from '../../data/achievementBadgesData';
import type { 
  AchievementBadge, 
  BadgeCategory, 
  BadgeTier 
} from '../../data/achievementBadgesData';
import { 
  getBadgeProgress 
} from '../../services/unifiedMemberService';
import type { 
  UnifiedMemberProfile 
} from '../../services/unifiedMemberService';
import { 
  Award, Flame, Zap, BookOpen, Globe, Briefcase, Scale, 
  BarChart3, Headphones, ShieldAlert, GraduationCap, FileSearch, 
  Compass, CheckCircle2, Sparkles, Lock, Check, Trophy, Mic
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface AchievementBadgesHubProps {
  profile: UnifiedMemberProfile;
}

// Icon mapper helper
const getBadgeIcon = (name: string, isUnlocked: boolean) => {
  const iconProps = { className: `w-6 h-6 ${isUnlocked ? 'text-amber-500' : 'text-slate-400'}` };
  switch (name) {
    case 'Mic': return <Mic {...iconProps} />;
    case 'Flame': return <Flame {...iconProps} />;
    case 'Zap': return <Zap {...iconProps} />;
    case 'BookOpen': return <BookOpen {...iconProps} />;
    case 'Globe': return <Globe {...iconProps} />;
    case 'Briefcase': return <Briefcase {...iconProps} />;
    case 'Scale': return <Scale {...iconProps} />;
    case 'BarChart3': return <BarChart3 {...iconProps} />;
    case 'Headphones': return <Headphones {...iconProps} />;
    case 'ShieldAlert': return <ShieldAlert {...iconProps} />;
    case 'GraduationCap': return <GraduationCap {...iconProps} />;
    case 'FileSearch': return <FileSearch {...iconProps} />;
    case 'Award': return <Award {...iconProps} />;
    case 'Compass': return <Compass {...iconProps} />;
    case 'CheckCircle2': return <CheckCircle2 {...iconProps} />;
    case 'Sparkles': return <Sparkles {...iconProps} />;
    default: return <Trophy {...iconProps} />;
  }
};

export const AchievementBadgesHub: React.FC<AchievementBadgesHubProps> = ({ profile }) => {
  const [selectedCategory, setSelectedCategory] = useState<BadgeCategory>('all');
  const [activeBadgeModal, setActiveBadgeModal] = useState<AchievementBadge | null>(null);

  const categories: { id: BadgeCategory; label: string }[] = [
    { id: 'all', label: 'All Badges (16)' },
    { id: 'ielts', label: 'IELTS Mastery' },
    { id: 'fluency', label: 'Spoken English' },
    { id: 'executive', label: 'Executive Leadership' },
    { id: 'diplomacy', label: 'Diplomacy & IR' },
    { id: 'mastery', label: 'Polymath & Streaks' }
  ];

  const filteredBadges = ACHIEVEMENT_BADGES.filter(b => 
    selectedCategory === 'all' || b.category === selectedCategory
  );

  const totalUnlockedCount = ACHIEVEMENT_BADGES.filter(b => 
    getBadgeProgress(b, profile).isUnlocked
  ).length;

  const handleBadgeClick = (badge: AchievementBadge) => {
    setActiveBadgeModal(badge);
    const progress = getBadgeProgress(badge, profile);
    if (progress.isUnlocked) {
      confetti({ particleCount: 35, spread: 60, origin: { y: 0.6 } });
    }
  };

  return (
    <div className="space-y-8">
      
      {/* Overview Stat Header */}
      <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" /> Gamified Achievement Passport
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            16-Tier Honor Badges & Milestone Ranks
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Every IELTS simulation, acoustic speech drill, executive negotiation, and strategic dossier you complete unlocks verifiable mastery badges.
          </p>
        </div>

        <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl border border-white/10 backdrop-blur-xs shrink-0">
          <div className="text-center">
            <div className="text-3xl font-black text-amber-400">{totalUnlockedCount} / 16</div>
            <div className="text-[11px] text-slate-300 font-bold uppercase">Badges Unlocked</div>
          </div>
          <div className="h-10 w-px bg-white/20" />
          <div className="text-center">
            <div className="text-3xl font-black text-teal-300">{profile.totalPoints}</div>
            <div className="text-[11px] text-slate-300 font-bold uppercase">Total XP Points</div>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer border ${
              selectedCategory === cat.id
                ? 'bg-teal-900 text-white border-teal-900 shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredBadges.map(badge => {
          const { current, max, isUnlocked, pct } = getBadgeProgress(badge, profile);
          const tier = TIER_CONFIG[badge.tier];

          return (
            <div
              key={badge.id}
              onClick={() => handleBadgeClick(badge)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between group ${
                isUnlocked
                  ? 'bg-white border-amber-300/80 shadow-md hover:shadow-xl hover:-translate-y-1'
                  : 'bg-slate-50/80 border-slate-200/80 opacity-75 hover:opacity-100'
              }`}
            >
              {/* Top Tier Badge & Lock Icon */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full border ${tier.bgClass} ${tier.textClass} ${tier.borderClass}`}>
                  {tier.label}
                </span>
                {isUnlocked ? (
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px]">
                    <Check className="w-3 h-3" />
                  </span>
                ) : (
                  <Lock className="w-4 h-4 text-slate-400" />
                )}
              </div>

              {/* Icon & Title */}
              <div className="space-y-2 mb-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-xs transition group-hover:scale-105 ${
                  isUnlocked ? 'bg-amber-50 border-amber-200' : 'bg-slate-100 border-slate-200'
                }`}>
                  {getBadgeIcon(badge.iconName, isUnlocked)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-teal-900 transition">
                    {badge.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-1">{badge.shortDesc}</p>
                </div>
              </div>

              {/* Progress Bar & Value */}
              <div className="space-y-1.5 pt-3 border-t border-slate-100">
                <div className="flex items-center justify-between text-[10px] font-bold">
                  <span className="text-slate-500">Progress</span>
                  <span className={isUnlocked ? 'text-emerald-700 font-mono' : 'text-slate-600 font-mono'}>
                    {current} / {max} ({pct}%)
                  </span>
                </div>
                <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-500 ${isUnlocked ? 'bg-emerald-500' : 'bg-teal-600'}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Badge Details Modal */}
      {activeBadgeModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-150">
            {(() => {
              const { current, max, isUnlocked, pct } = getBadgeProgress(activeBadgeModal, profile);
              const tier = TIER_CONFIG[activeBadgeModal.tier];

              return (
                <>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-black uppercase px-2.5 py-0.5 rounded-full border ${tier.bgClass} ${tier.textClass} ${tier.borderClass}`}>
                      {tier.label} • +{activeBadgeModal.points} XP
                    </span>
                    <button
                      onClick={() => setActiveBadgeModal(null)}
                      className="text-slate-400 hover:text-slate-700 font-bold text-xs p-1"
                    >
                      ✕ Close
                    </button>
                  </div>

                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto shadow-md">
                      {getBadgeIcon(activeBadgeModal.iconName, isUnlocked)}
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-slate-900">{activeBadgeModal.title}</h3>
                      <p className="text-xs font-semibold text-teal-800">{activeBadgeModal.shortDesc}</p>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200 text-left">
                      <strong>Unlock Requirement:</strong> {activeBadgeModal.criteriaDesc}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-600">Current Progress</span>
                      <span className={isUnlocked ? 'text-emerald-700' : 'text-slate-700'}>
                        {current} / {max} {isUnlocked ? '✅ UNLOCKED' : `(${pct}%)`}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${isUnlocked ? 'bg-emerald-500' : 'bg-teal-600'}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveBadgeModal(null)}
                    className="w-full py-2.5 bg-teal-900 hover:bg-teal-800 text-white rounded-xl text-xs font-bold transition cursor-pointer"
                  >
                    Got It
                  </button>
                </>
              );
            })()}
          </div>
        </div>
      )}

    </div>
  );
};
