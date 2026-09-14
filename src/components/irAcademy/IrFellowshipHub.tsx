import React, { useState, useEffect } from 'react';
import { 
  PILLARS_DATA, 
  GLOSSARY_TERMS, 
  IR_FELLOWSHIP_TITLE, 
  IR_FELLOWSHIP_CODE 
} from '../../data/irAcademyData';
import { 
  getFellowshipProfile, 
  markLectureAsCompleted, 
  recordCheckpointScore 
} from '../../services/irFellowshipProfileService';
import type { FellowshipProfile, Pillar, Lecture } from '../../types/irAcademy';
import { 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Search, 
  Sparkles, 
  FileText, 
  GraduationCap, 
  ShieldCheck, 
  Globe, 
  Printer, 
  Layers, 
  HelpCircle 
} from 'lucide-react';

export const IrFellowshipHub: React.FC = () => {
  const [profile, setProfile] = useState<FellowshipProfile>(getFellowshipProfile());
  const [activeTab, setActiveTab] = useState<'curriculum' | 'glossary' | 'exam' | 'certificate'>('curriculum');
  const [selectedPillar, setSelectedPillar] = useState<Pillar>(PILLARS_DATA[0]);
  const [selectedLecture, setSelectedLecture] = useState<Lecture>(PILLARS_DATA[0].lectures[0]);
  const [searchGlossaryQuery, setSearchGlossaryQuery] = useState('');
  const [activeQuizPillar, setActiveQuizPillar] = useState<Pillar | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  useEffect(() => {
    setProfile(getFellowshipProfile());
  }, []);

  const handleSelectLecture = (pillar: Pillar, lecture: Lecture) => {
    setSelectedPillar(pillar);
    setSelectedLecture(lecture);
    const updated = markLectureAsCompleted(lecture.id);
    setProfile(updated);
  };

  const handleStartQuiz = (pillar: Pillar) => {
    setActiveQuizPillar(pillar);
    setQuizAnswers({});
    setQuizSubmitted(false);
    setQuizScore(0);
  };

  const handleAnswerSelect = (questionId: string, optionIdx: number) => {
    if (quizSubmitted) return;
    setQuizAnswers(prev => ({ ...prev, [questionId]: optionIdx }));
  };

  const handleSubmitQuiz = () => {
    if (!activeQuizPillar) return;
    const questions = activeQuizPillar.checkpointQuiz.questions;
    let correctCount = 0;
    questions.forEach(q => {
      if (quizAnswers[q.id] === q.correctIndex) {
        correctCount += 1;
      }
    });
    const pct = Math.round((correctCount / questions.length) * 100);
    const passed = pct >= activeQuizPillar.checkpointQuiz.passingScorePercentage;
    setQuizScore(pct);
    setQuizSubmitted(true);
    const updated = recordCheckpointScore(activeQuizPillar.id, pct, passed);
    setProfile(updated);
  };

  const completedLecturesCount = profile.completedLectureIds.length;
  const totalLecturesCount = PILLARS_DATA.reduce((acc, p) => acc + p.lectures.length, 0);
  const progressPercent = Math.min(100, Math.round((completedLecturesCount / (totalLecturesCount || 1)) * 100));

  const filteredGlossary = GLOSSARY_TERMS.filter(item => 
    item.term.toLowerCase().includes(searchGlossaryQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchGlossaryQuery.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchGlossaryQuery.toLowerCase()) ||
    item.banglaMeaning.toLowerCase().includes(searchGlossaryQuery.toLowerCase())
  );

  return (
    <div className="py-12 bg-slate-950 text-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Master Header */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-4 relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-indigo-400" /> Open Fellowship Program • {IR_FELLOWSHIP_CODE}
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                {IR_FELLOWSHIP_TITLE}
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Graduate-level executive scholarship synthesizing classical statecraft, cognitive political psychology, international law, geoeconomics, and the <strong className="text-amber-400">Bangladesh Geopolitical Paradigm (Post-2024 Strategic Realignment)</strong>.
              </p>
            </div>

            {/* Quick Profile Pill */}
            <div className="shrink-0 p-4 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-2 text-right">
              <div className="text-xs text-slate-400">Fellow ID: <span className="font-mono text-indigo-400 font-bold">{profile.fellowId}</span></div>
              <div className="flex items-center gap-2 justify-end">
                <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                  {progressPercent}% Completed
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/30">
                  {profile.passedCheckpointPillarIds.length} Checkpoints Cleared
                </span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
            <div 
              className="bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4">
          <button
            onClick={() => setActiveTab('curriculum')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
              activeTab === 'curriculum'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-950'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Curriculum & Study Studio</span>
          </button>

          <button
            onClick={() => setActiveTab('glossary')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
              activeTab === 'glossary'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-950'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Search className="w-4 h-4" />
            <span>Strategic & Diplomatic Glossary (50+)</span>
          </button>

          <button
            onClick={() => setActiveTab('certificate')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
              activeTab === 'certificate'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>Fellowship Credentials & Transcript</span>
          </button>
        </div>

        {/* TAB 1: CURRICULUM & STUDY STUDIO */}
        {activeTab === 'curriculum' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Sidebar Syllabus Navigator */}
            <div className="lg:col-span-4 space-y-4">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" />
                <span>Fellowship Syllabus Navigator</span>
              </div>

              <div className="space-y-3">
                {PILLARS_DATA.map((pillar) => {
                  const isPillarActive = selectedPillar.id === pillar.id;
                  const isCheckpointPassed = profile.passedCheckpointPillarIds.includes(pillar.id);

                  return (
                    <div 
                      key={pillar.id}
                      className={`p-4 rounded-2xl border transition ${
                        isPillarActive
                          ? 'bg-slate-900/90 border-indigo-500/80 ring-1 ring-indigo-500/40'
                          : 'bg-slate-950/80 border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                          {pillar.termTitle.split(':')[0]} • Pillar {pillar.pillarNumber}
                        </span>
                        {isCheckpointPassed && (
                          <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Exam Passed
                          </span>
                        )}
                      </div>

                      <h3 className="text-sm font-bold text-white mb-2">
                        {pillar.title}
                      </h3>

                      {/* Lectures list */}
                      <div className="space-y-1.5 pt-2 border-t border-slate-800">
                        {pillar.lectures.map((lec) => {
                          const isSelected = selectedLecture.id === lec.id;
                          const isDone = profile.completedLectureIds.includes(lec.id);

                          return (
                            <button
                              key={lec.id}
                              onClick={() => handleSelectLecture(pillar, lec)}
                              className={`w-full text-left p-2.5 rounded-xl text-xs flex items-center justify-between gap-2 transition cursor-pointer ${
                                isSelected
                                  ? 'bg-indigo-600 text-white font-bold'
                                  : 'hover:bg-slate-800 text-slate-300'
                              }`}
                            >
                              <div className="flex items-center gap-2 truncate">
                                <span className={`text-[10px] font-mono ${isSelected ? 'text-indigo-200' : 'text-slate-500'}`}>
                                  {lec.lectureNumber}
                                </span>
                                <span className="truncate">{lec.title}</span>
                              </div>
                              {isDone && (
                                <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-white' : 'text-emerald-400'}`} />
                              )}
                            </button>
                          );
                        })}

                        {/* Checkpoint Exam Button */}
                        <button
                          onClick={() => handleStartQuiz(pillar)}
                          className="w-full mt-2 p-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 flex items-center justify-center gap-2 transition cursor-pointer"
                        >
                          <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
                          <span>{isCheckpointPassed ? 'Retake Checkpoint Exam' : 'Take Pillar Checkpoint Exam'}</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Main Lecture Study Reader */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Active Lecture Header */}
              <div className="p-6 sm:p-8 bg-slate-900/90 rounded-3xl border border-slate-800 space-y-4 shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-mono font-bold">
                    Pillar {selectedPillar.pillarNumber} • Lecture {selectedLecture.lectureNumber}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-400" /> {selectedLecture.readTimeMinutes} min intensive reading
                  </span>
                </div>

                <div className="space-y-1">
                  <h2 className="text-xl sm:text-3xl font-black text-white">
                    {selectedLecture.title}
                  </h2>
                  <p className="text-sm font-semibold text-indigo-400">
                    {selectedLecture.subtitle}
                  </p>
                </div>

                <div className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2 border-t border-slate-800 whitespace-pre-line">
                  {selectedLecture.overview}
                </div>
              </div>

              {/* Theoretical Framework Cards */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  Core Theoretical Frameworks & Conceptual Modeling
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedLecture.theoreticalFrameworks.map((tf, idx) => (
                    <div key={idx} className="p-5 bg-slate-900/80 rounded-2xl border border-cyan-500/30 space-y-2 shadow-lg">
                      <div className="text-xs font-bold text-cyan-300">{tf.name}</div>
                      <p className="text-xs text-slate-300 leading-relaxed">{tf.concept}</p>
                      <div className="text-[11px] text-slate-400 bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                        <strong className="text-slate-200">Diplomatic Application: </strong>{tf.application}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Statecraft Case Study */}
              <div className="p-6 bg-gradient-to-br from-amber-950/20 via-slate-900 to-slate-950 rounded-3xl border border-amber-500/40 space-y-3 shadow-xl">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  Executive Statecraft Case Study
                </div>
                <h4 className="text-base font-bold text-white">
                  {selectedLecture.statecraftCaseStudy.title}
                </h4>
                <div className="text-xs text-slate-300 space-y-2 leading-relaxed">
                  <p><strong className="text-slate-200">Historical Context: </strong>{selectedLecture.statecraftCaseStudy.historicalContext}</p>
                  <p><strong className="text-slate-200">Strategic Analysis: </strong>{selectedLecture.statecraftCaseStudy.strategicAnalysis}</p>
                  <p className="p-3 bg-slate-950 rounded-xl border border-amber-500/30 text-amber-200 font-medium">
                    <strong className="text-amber-400">Lesson for Statecraft: </strong>{selectedLecture.statecraftCaseStudy.lessonsForStatecraft}
                  </p>
                </div>
              </div>

              {/* Bengali Diplomatic Summary */}
              <div className="p-6 bg-slate-900/80 rounded-2xl border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  কূটনৈতিক সারসংক্ষেপ (Bangla Executive Summary)
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-bangla">
                  {selectedLecture.banglaDiplomaticSummary}
                </p>
              </div>

              {/* Analytical Seminar Questions */}
              <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
                <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                  Postgraduate Seminar & Thesis Prompts
                </div>
                <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                  {selectedLecture.analyticalSeminarQuestions.map((q, idx) => (
                    <li key={idx} className="hover:text-white transition">{q}</li>
                  ))}
                </ul>
              </div>

              {/* Key Readings */}
              <div className="p-6 bg-slate-900/60 rounded-2xl border border-slate-800 space-y-3">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-4 h-4 text-indigo-400" />
                  Seminal Reading List & Treaties
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedLecture.keyReadings.map((r, idx) => (
                    <div key={idx} className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 space-y-1 text-xs">
                      <div className="font-bold text-white">{r.title}</div>
                      <div className="text-[11px] text-slate-400">{r.author} • <span className="text-indigo-400">{r.sourceType}</span></div>
                      <p className="text-[10px] text-slate-500">{r.coreConcept}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: GLOSSARY SEARCH INDEX */}
        {activeTab === 'glossary' && (
          <div className="space-y-6">
            <div className="p-6 bg-slate-900 rounded-3xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Globe className="w-4 h-4 text-indigo-400" />
                  Diplomatic, Strategic & Geopolitical Conceptual Index
                </h2>
                <p className="text-xs text-slate-400">
                  Searchable dictionary of 50+ seminal concepts with international legal and statecraft context.
                </p>
              </div>

              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Search terms or concepts..."
                  value={searchGlossaryQuery}
                  onChange={(e) => setSearchGlossaryQuery(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredGlossary.map((item, idx) => (
                <div key={idx} className="p-5 bg-slate-900/80 rounded-2xl border border-slate-800 space-y-2 shadow-lg hover:border-slate-700 transition">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-black text-white text-sm">{item.term}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                      {item.category}
                    </span>
                  </div>
                  {item.pronunciationIpa && (
                    <div className="text-[11px] font-mono text-cyan-400">{item.pronunciationIpa}</div>
                  )}
                  <p className="text-xs text-slate-300 leading-relaxed">{item.definition}</p>
                  <p className="text-xs text-emerald-300/90 font-bangla">{item.banglaMeaning}</p>
                  <div className="text-[11px] text-slate-400 bg-slate-950 p-2.5 rounded-xl border border-slate-800 font-medium">
                    <strong className="text-slate-300">Diplomatic Context: </strong>{item.diplomaticContext}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: CERTIFICATION & TRANSCRIPT */}
        {activeTab === 'certificate' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="p-8 sm:p-12 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/40 rounded-3xl border-2 border-amber-500/40 shadow-2xl space-y-8 text-center relative overflow-hidden">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  Daloyar Hassan Diplomatic Research & Academic Fellowship
                </div>
                <h1 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-wider font-serif">
                  Certificate of Academic Fellowship
                </h1>
                <p className="text-xs text-slate-400 max-w-lg mx-auto">
                  Open Master\\'s Fellowship in International Relations & Strategic Studies
                </p>
              </div>

              <div className="py-6 border-y border-amber-500/20 space-y-4">
                <div className="text-xs text-slate-400 uppercase tracking-wider">This Executive Fellowship is Conferred Upon</div>
                <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 font-serif">
                  {profile.userAlias || 'Fellow Candidate'}
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                  <div className="px-4 py-2 bg-slate-900 rounded-xl border border-amber-500/30 text-xs">
                    <span className="text-slate-400">Credential ID: </span>
                    <span className="font-bold text-amber-300 font-mono">{profile.credentialId || `OMF-IRSS-2026-${profile.fellowId.substring(3)}`}</span>
                  </div>
                  <div className="px-4 py-2 bg-slate-900 rounded-xl border border-slate-800 text-xs">
                    <span className="text-slate-400">Academic Status: </span>
                    <span className="font-bold text-emerald-400">Verified by Diplomatic Registry</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 text-xs text-slate-400">
                <div className="text-center sm:text-left space-y-1">
                  <div className="font-serif italic font-bold text-amber-300 text-base">Daloyar Hassan Shishir</div>
                  <div className="text-[11px] text-slate-500">Founder & Diplomatic Research Director</div>
                  <div className="text-[10px] text-slate-600">dhshishir.com • Diplomatic Hub</div>
                </div>

                <button
                  onClick={() => window.print()}
                  className="px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print PDF Diploma</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* CHECKPOINT QUIZ MODAL */}
      {activeQuizPillar && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-sm font-bold text-white">{activeQuizPillar.checkpointQuiz.title}</h3>
                <p className="text-xs text-slate-400">Passing score: {activeQuizPillar.checkpointQuiz.passingScorePercentage}%</p>
              </div>
              <button
                onClick={() => setActiveQuizPillar(null)}
                className="text-xs text-slate-400 hover:text-white px-3 py-1 bg-slate-800 rounded-lg cursor-pointer"
              >
                Close
              </button>
            </div>

            <div className="space-y-6">
              {activeQuizPillar.checkpointQuiz.questions.map((q, qIdx) => (
                <div key={q.id} className="space-y-3 p-4 bg-slate-950 rounded-2xl border border-slate-800">
                  <div className="text-xs font-bold text-white">
                    {qIdx + 1}. {q.prompt}
                  </div>

                  <div className="space-y-2">
                    {q.options.map((opt, oIdx) => {
                      const isSelected = quizAnswers[q.id] === oIdx;
                      const isCorrect = q.correctIndex === oIdx;

                      let btnStyle = 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700';
                      if (quizSubmitted) {
                        if (isCorrect) btnStyle = 'bg-emerald-950/80 border-emerald-500 text-emerald-300 font-bold';
                        else if (isSelected && !isCorrect) btnStyle = 'bg-rose-950/80 border-rose-500 text-rose-300';
                      } else if (isSelected) {
                        btnStyle = 'bg-indigo-600 border-indigo-500 text-white font-bold';
                      }

                      return (
                        <button
                          key={oIdx}
                          onClick={() => handleAnswerSelect(q.id, oIdx)}
                          className={`w-full text-left p-3 rounded-xl border text-xs transition cursor-pointer ${btnStyle}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {quizSubmitted && (
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-[11px] space-y-1 text-slate-300">
                      <p><strong className="text-indigo-400">Academic Rationale: </strong>{q.academicRationale}</p>
                      <p className="font-bangla text-emerald-400/90">{q.banglaExplanation}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-800">
              {quizSubmitted ? (
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-bold ${quizScore >= activeQuizPillar.checkpointQuiz.passingScorePercentage ? 'text-emerald-400' : 'text-rose-400'}`}>
                    Final Score: {quizScore}% {quizScore >= activeQuizPillar.checkpointQuiz.passingScorePercentage ? '(Passed)' : '(Failed - Review Lectures)'}
                  </span>
                  <button
                    onClick={() => setActiveQuizPillar(null)}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleSubmitQuiz}
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition shadow-lg cursor-pointer"
                >
                  Submit Examination
                </button>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
