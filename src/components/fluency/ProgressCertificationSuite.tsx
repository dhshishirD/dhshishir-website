import React, { useState, useEffect } from 'react';
import { getFluencyProfile } from '../../services/fluencyProfileService';
import type { FluencyUserProfile, WeakPatternKey } from '../../types/fluencyLab';
import { 
  Award, 
  Printer, 
  CheckCircle2, 
  ShieldCheck, 
  Star, 
  FileText
} from 'lucide-react';

export const ProgressCertificationSuite: React.FC = () => {
  const [profile, setProfile] = useState<FluencyUserProfile>(getFluencyProfile());

  useEffect(() => {
    setProfile(getFluencyProfile());
  }, []);

  const cefrLevel = profile.currentCefrLevel || 'B2';
  const learnerName = profile.userAlias || 'Learner Space';
  const issueDate = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const allCompetencies = [
    { name: '/v/ vs /b/ Labiodental Contrast', key: 'v_b_confusion', desc: 'Accurate upper-teeth to lower-lip friction distinction.' },
    { name: 'TH Dental Fricatives (/θ/ & /ð/)', key: 'th_dental_fricatives', desc: 'Interdental breath release without dental plosive substitution.' },
    { name: 'Syllable Stress & Metric Timing', key: 'syllable_stress', desc: 'Stress-timed rhythm with appropriate syllable peak prominence.' },
    { name: 'Short vs Long Vowel Lengths', key: 'short_long_vowels', desc: 'Crisp /ɪ/ vs sustained /iː/ duration contrast.' },
    { name: 'Consonant Cluster Preservation', key: 'consonant_clusters', desc: 'Clean burst articulation without epenthetic vowel insertion.' },
    { name: 'Uncountable Noun Quantification', key: 'uncountable_nouns', desc: 'Standard collocations without erroneous pluralization.' },
    { name: 'Complex Tense Harmony', key: 'tense_harmony', desc: 'Grammatical cohesion across conditional and past clauses.' },
    { name: 'Prepositional Verb Collocations', key: 'prepositional_collocations', desc: 'Standard English verb-preposition pairings.' }
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950/40 to-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" /> Stage 7 • Certification & Spoken Portfolio
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Official Spoken Fluency Certification & Portfolio
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
            Generate and export your verified CEFR Spoken English Calibration Certificate and comprehensive phonetic competence report.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl text-xs font-bold flex items-center gap-2 shadow-lg shadow-emerald-900/40 transition cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save PDF Certificate</span>
          </button>
        </div>
      </div>

      {/* Official Certificate Card Preview */}
      <div className="p-8 sm:p-12 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/40 rounded-3xl border-2 border-amber-500/40 shadow-2xl space-y-8 text-center relative overflow-hidden">
        
        {/* Subtle Background Seal */}
        <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-amber-500/5 border border-amber-500/10 pointer-events-none flex items-center justify-center">
          <Award className="w-32 h-32 text-amber-500/10" />
        </div>

        {/* Certificate Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            Daloyar Hassan Spoken English & Phonetic Lab
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-wider font-serif">
            Certificate of Spoken English Proficiency
          </h1>
          <p className="text-xs text-slate-400 max-w-lg mx-auto">
            This credential verifies that the candidate has completed diagnostic phonetic calibration and spoken fluency benchmarking.
          </p>
        </div>

        {/* Candidate & Level Details */}
        <div className="py-6 border-y border-amber-500/20 max-w-2xl mx-auto space-y-4">
          <div className="text-xs text-slate-400 uppercase tracking-wider">This is proudly presented to</div>
          <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 font-serif">
            {learnerName}
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <div className="px-4 py-2 bg-slate-900 rounded-xl border border-amber-500/30 text-xs">
              <span className="text-slate-400">Calibrated Benchmark: </span>
              <span className="font-bold text-emerald-400 text-sm">CEFR {cefrLevel}</span>
            </div>
            <div className="px-4 py-2 bg-slate-900 rounded-xl border border-slate-800 text-xs">
              <span className="text-slate-400">Issue Date: </span>
              <span className="font-bold text-slate-200">{issueDate}</span>
            </div>
            <div className="px-4 py-2 bg-slate-900 rounded-xl border border-slate-800 text-xs">
              <span className="text-slate-400">Status: </span>
              <span className="font-bold text-emerald-400">Verified by Fluency Engine</span>
            </div>
          </div>
        </div>

        {/* Signatures & Seal */}
        <div className="flex flex-col sm:flex-row items-center justify-between max-w-2xl mx-auto gap-6 pt-4 text-xs text-slate-400">
          <div className="text-center sm:text-left space-y-1">
            <div className="font-serif italic font-bold text-amber-300 text-base">Daloyar Hassan Shishir</div>
            <div className="text-[11px] text-slate-500">Founder & Diplomatic Research Director</div>
            <div className="text-[10px] text-slate-600">dhshishir.com • Spoken Fluency Hub</div>
          </div>

          <div className="w-20 h-20 rounded-full border-2 border-dashed border-amber-500/40 p-1 flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-amber-500/10 flex flex-col items-center justify-center text-amber-400 text-[9px] font-bold uppercase">
              <Star className="w-4 h-4 fill-amber-400" />
              <span>Verified</span>
            </div>
          </div>
        </div>

      </div>

      {/* Comprehensive Phonetic Competency Portfolio */}
      <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-6 sm:p-8 space-y-6 shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-indigo-400" />
              Comprehensive Phonetic Competence Portfolio
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Individual audit of all 8 core spoken competencies assessed across the 6-stage loop.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allCompetencies.map((comp, idx) => {
            const isFlagged = profile.flaggedWeakPatterns.includes(comp.key as WeakPatternKey);
            return (
              <div
                key={idx}
                className={`p-4 rounded-2xl border flex items-start justify-between gap-3 ${
                  isFlagged
                    ? 'bg-amber-950/20 border-amber-500/30'
                    : 'bg-slate-950/70 border-slate-800/80'
                }`}
              >
                <div className="space-y-1">
                  <div className="text-xs font-bold text-white flex items-center gap-2">
                    <span>{comp.name}</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {comp.desc}
                  </p>
                </div>

                <div className="shrink-0">
                  {isFlagged ? (
                    <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                      In Practice
                    </span>
                  ) : (
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Mastered
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
