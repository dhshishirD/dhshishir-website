import React from 'react';
import { 
  X, 
  Award, 
  CheckCircle2, 
  Printer, 
  Sparkles, 
  Lock, 
  Anchor, 
  Scale, 
  Brain, 
  TrendingUp, 
  Compass 
} from 'lucide-react';
import type { FellowshipProfile } from '../../types/irAcademy';

interface DiplomatPassportModalProps {
  isOpen?: boolean;
  profile: FellowshipProfile;
  onClose: () => void;
}

export const DiplomatPassportModal: React.FC<DiplomatPassportModalProps> = ({
  isOpen = true,
  profile,
  onClose
}) => {
  if (!isOpen) return null;

  // Define all available dynamic visa stamps and their unlock condition
  const visaStamps = [
    {
      id: 'stamp_maritime',
      title: 'Bay of Bengal Sovereign Maritime Seal',
      authority: 'Department of Maritime Affairs & Coast Guard',
      icon: Anchor,
      isUnlocked: profile.completedLectureIds.some(id => id.includes('8.')) || profile.passedCheckpointPillarIds.includes('pillar8_regional_bangladesh'),
      requirement: 'Complete Pillar 8 or Resolve Bay of Bengal Crisis'
    },
    {
      id: 'stamp_unclos',
      title: 'UNCLOS & ITLOS Maritime Jurist Visa',
      authority: 'International Law & Maritime Delimitation Commission',
      icon: Scale,
      isUnlocked: profile.passedCheckpointPillarIds.includes('pillar6_intl_law'),
      requirement: 'Clear Pillar 6 International Law Checkpoint'
    },
    {
      id: 'stamp_realism',
      title: 'Structural Realism & Balance of Power Stamp',
      authority: 'Council on Grand Strategic Studies',
      icon: Compass,
      isUnlocked: profile.passedCheckpointPillarIds.includes('pillar1_theories'),
      requirement: 'Clear Pillar 1 Classical Statecraft Checkpoint'
    },
    {
      id: 'stamp_psychology',
      title: 'Cognitive Political Psychology Visa',
      authority: 'Executive Decision Systems Directorate',
      icon: Brain,
      isUnlocked: profile.passedCheckpointPillarIds.includes('pillar3_polpsych_individual') || profile.passedCheckpointPillarIds.includes('pillar4_polpsych_group'),
      requirement: 'Clear Pillar 3 or 4 Crisis Psychology Checkpoints'
    },
    {
      id: 'stamp_geoeconomics',
      title: 'Geoeconomic Hedging & Post-LDC Visa',
      authority: 'International Trade & Multilateral Monetary Desk',
      icon: TrendingUp,
      isUnlocked: profile.passedCheckpointPillarIds.includes('pillar5_geoeconomics'),
      requirement: 'Clear Pillar 5 Geoeconomics Checkpoint'
    },
    {
      id: 'stamp_diplomatic_crisis',
      title: 'Special Envoy Crisis Command Seal',
      authority: 'National Security Council War Room',
      icon: Award,
      isUnlocked: !!profile.crisisSimulationPassed,
      requirement: 'Successfully Resolve Diplomatic Crisis Room'
    }
  ];

  const unlockedCount = visaStamps.filter(s => s.isUnlocked).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-amber-500/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative text-white max-h-[90vh] overflow-y-auto">
        
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-amber-500/20 pb-4">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" /> Official Diplomatic Credential Document
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Passport Booklet Identity Page */}
        <div className="p-6 rounded-2xl bg-slate-950 border border-amber-500/30 space-y-5 relative overflow-hidden">
          {/* Subtle watermarked emblem */}
          <div className="absolute right-4 top-4 opacity-10 pointer-events-none text-amber-300">
            <Award className="w-32 h-32" />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold">
                PEOPLE'S REPUBLIC OF BANGLADESH / ACADEMY OF FOREIGN SERVICE
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-amber-200 tracking-tight mt-0.5">
                FELLOW DIPLOMATIC PASSPORT
              </h3>
            </div>
            <div className="text-right">
              <span className="text-[10px] uppercase font-mono text-slate-400 block">Candidate ID</span>
              <span className="text-sm font-mono font-black text-amber-400">{profile.fellowId}</span>
            </div>
          </div>

          {/* Fellow Identification Data Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">Full Name of Bearer</span>
              <span className="font-bold text-white text-sm">{profile.userAlias || 'Diplomatic Candidate'}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">Accreditation Code</span>
              <span className="font-mono text-amber-300 font-bold">IR-MA-FELLOW</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">Academic Rank</span>
              <span className="font-bold text-teal-300">Fellow In-Residence</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">Date of Matriculation</span>
              <span className="font-mono text-slate-300">{profile.enrolledDate}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">Grand Exam Status</span>
              <span className="font-bold text-amber-300">
                {profile.grandExamScore ? `${profile.grandExamScore}% (Cleared)` : 'In Progress'}
              </span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-semibold block">Visa Stamps Earned</span>
              <span className="font-bold text-amber-400">{unlockedCount} / {visaStamps.length} Granted</span>
            </div>
          </div>
        </div>

        {/* Dynamic Visa Stamps Gallery */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-amber-300 uppercase tracking-wider">
            <span>Diplomatic Milestone Visa Stamps & Endorsements</span>
            <span className="font-mono text-[11px] text-slate-400">{unlockedCount} Granted</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {visaStamps.map(stamp => {
              const IconComp = stamp.icon;
              return (
                <div
                  key={stamp.id}
                  className={`p-4 rounded-2xl border transition-all ${
                    stamp.isUnlocked
                      ? 'bg-amber-950/20 border-amber-500/40 text-amber-100 shadow-sm'
                      : 'bg-slate-950/50 border-slate-800 text-slate-500 opacity-60'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      stamp.isUnlocked
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : 'bg-slate-800 text-slate-600 border border-slate-700'
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="space-y-1 text-left flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-bold text-xs truncate">{stamp.title}</span>
                        {stamp.isUnlocked ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        ) : (
                          <Lock className="w-3 h-3 text-slate-600 shrink-0" />
                        )}
                      </div>
                      <div className="text-[10px] text-slate-400 truncate">{stamp.authority}</div>
                      <div className="text-[9px] font-mono text-amber-400/80">
                        {stamp.isUnlocked ? '✓ OFFICIAL VISA GRANTED' : `Req: ${stamp.requirement}`}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save Passport PDF</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold transition cursor-pointer"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
