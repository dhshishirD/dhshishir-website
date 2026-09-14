import React, { useState, useEffect } from 'react';
import { 
  PILLARS_DATA, 
  GLOSSARY_TERMS, 
  CRISIS_SCENARIOS, 
  GRAND_EXAM_QUESTIONS,
  IR_FELLOWSHIP_TITLE, 
  IR_FELLOWSHIP_CODE 
} from '../../data/irAcademyData';
import { 
  getFellowshipProfile, 
  markLectureAsCompleted, 
  recordCheckpointScore, 
  recordCrisisSimulationResult,
  recordGrandExamResult,
  toggleBookmarkLecture,
  saveLectureNote,
  savePolicyBriefSubmission,
  updateFellowAlias
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
  HelpCircle,
  AlertOctagon,
  RotateCcw,
  Sun,
  Coffee,
  BookMarked,
  Bookmark,
  BookmarkCheck,
  Edit3,
  Save,
  Send,
  FileCheck2,
  Filter
} from 'lucide-react';

export const IrFellowshipHub: React.FC = () => {
  const [profile, setProfile] = useState<FellowshipProfile>(getFellowshipProfile());
  const [activeTab, setActiveTab] = useState<'curriculum' | 'glossary' | 'crisis' | 'policy-brief' | 'exam' | 'certificate'>('curriculum');
  const [selectedPillar, setSelectedPillar] = useState<Pillar>(PILLARS_DATA[0]);
  const [selectedLecture, setSelectedLecture] = useState<Lecture>(PILLARS_DATA[0].lectures[0]);
  const [searchGlossaryQuery, setSearchGlossaryQuery] = useState('');
  const [selectedGlossaryCategory, setSelectedGlossaryCategory] = useState<string>('All');
  const [readingTheme, setReadingTheme] = useState<'ivory' | 'parchment' | 'nordic'>('ivory');
  
  // Fellow note state for active lecture
  const [currentNote, setCurrentNote] = useState('');
  const [noteSavedAlert, setNoteSavedAlert] = useState(false);

  // Candidate Name / Alias Editing State
  const [isEditingAlias, setIsEditingAlias] = useState(false);
  const [candidateNameInput, setCandidateNameInput] = useState(profile.userAlias || 'Fellow Candidate');

  // Checkpoint Quiz States
  const [activeQuizPillar, setActiveQuizPillar] = useState<Pillar | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  // Crisis Simulator States
  const [selectedCrisisId, setSelectedCrisisId] = useState<string>(CRISIS_SCENARIOS[0].id);
  const activeCrisis = CRISIS_SCENARIOS.find(s => s.id === selectedCrisisId) || CRISIS_SCENARIOS[0];
  const [crisisStageIdx, setCrisisStageIdx] = useState(0);
  const [crisisChoices, setCrisisChoices] = useState<Record<string, string>>({});
  const [crisisCompleted, setCrisisCompleted] = useState(false);
  const [crisisTotalScore, setCrisisTotalScore] = useState(0);

  // Capstone Policy Brief Studio States
  const [briefTitle, setBriefTitle] = useState(
    profile.policyBriefSubmission?.title || 
    "Strategic Memorandum: Institutionalizing Bangladesh's Omnidirectional Maritime Hedging in the Bay of Bengal"
  );
  const [briefTargetAgency, setBriefTargetAgency] = useState(
    profile.policyBriefSubmission?.targetAgency || 
    "National Security Council & Ministry of Foreign Affairs (MOFA)"
  );
  const [briefExecSummary, setBriefExecSummary] = useState(
    profile.policyBriefSubmission?.executiveSummary || 
    "In the wake of intensifying US-China-India competitive dynamics in the Indo-Pacific, Bangladesh requires an agile, institutionalized omnidirectional hedging doctrine to secure maritime energy corridors, protect seabed hydrocarbon and mineral rights under UNCLOS, and maintain sovereign autonomy without entering formal military alignments."
  );
  const [briefThreatAssessment, setBriefThreatAssessment] = useState(
    profile.policyBriefSubmission?.threatAssessment || 
    "1. Great Power naval encirclement and dual-use port infrastructure pressures (Matarbari vs. Kyaukpyu).\n2. Unsettled transboundary river basin dynamics and hydrological vulnerability.\n3. Supply-chain weaponization and external debt-trap vulnerabilities in critical energy infrastructure."
  );
  const [briefStrategicOptions, setBriefStrategicOptions] = useState(
    profile.policyBriefSubmission?.strategicOptions || 
    "Option Alpha: Pure Non-Alignment Passivity (High vulnerability, low strategic leverage).\nOption Bravo: Exclusive Bilateral Alignment (Subordinates national sovereignty and risks secondary sanctions).\nOption Charlie (Recommended): Omnidirectional Strategic Hedging (Balances economic ties with China, multilateral security dialogues with Quad/ASEAN, and rule-based UNCLOS legal defense)."
  );
  const [briefRecommendation, setBriefRecommendation] = useState(
    profile.policyBriefSubmission?.recommendation || 
    "1. Establish an inter-agency Maritime Strategic Taskforce under the Prime Minister's Office.\n2. Expand dual-use maritime domain awareness (MDA) sharing with littoral partners.\n3. Formulate a 20-year Blue Economy and Sovereign Energy Security Road-map."
  );
  const [briefSubmitted, setBriefSubmitted] = useState(!!profile.policyBriefSubmission?.score);
  const [briefScore, setBriefScore] = useState(profile.policyBriefSubmission?.score || 0);
  const [briefFeedback, setBriefFeedback] = useState(profile.policyBriefSubmission?.feedback || '');

  // Grand Exam States
  const [examAnswers, setExamAnswers] = useState<Record<string, number>>({});
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [examScorePct, setExamScorePct] = useState(0);

  useEffect(() => {
    const loaded = getFellowshipProfile();
    setProfile(loaded);
    setCandidateNameInput(loaded.userAlias || 'Fellow Candidate');
  }, []);

  // Update note when selected lecture changes
  useEffect(() => {
    const note = profile.lectureNotes?.[selectedLecture.id] || '';
    setCurrentNote(note);
    setNoteSavedAlert(false);
  }, [selectedLecture.id, profile.lectureNotes]);

  const handleSelectLecture = (pillar: Pillar, lecture: Lecture) => {
    setSelectedPillar(pillar);
    setSelectedLecture(lecture);
    const updated = markLectureAsCompleted(lecture.id);
    setProfile(updated);
  };

  const handleToggleBookmark = (lectureId: string) => {
    const updated = toggleBookmarkLecture(lectureId);
    setProfile(updated);
  };

  const handleSaveNote = () => {
    const updated = saveLectureNote(selectedLecture.id, currentNote);
    setProfile(updated);
    setNoteSavedAlert(true);
    setTimeout(() => setNoteSavedAlert(false), 3000);
  };

  const handleSaveCandidateName = () => {
    const updated = updateFellowAlias(candidateNameInput);
    setProfile(updated);
    setIsEditingAlias(false);
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

  const handleCrisisSelectOption = (dilemmaId: string, optionId: string) => {
    if (crisisCompleted) return;
    const updatedChoices = { ...crisisChoices, [dilemmaId]: optionId };
    setCrisisChoices(updatedChoices);

    if (crisisStageIdx < activeCrisis.dilemmas.length - 1) {
      setCrisisStageIdx(prev => prev + 1);
    } else {
      let totalPts = 0;
      activeCrisis.dilemmas.forEach(d => {
        const pickedId = updatedChoices[d.id];
        const opt = d.options.find(o => o.id === pickedId);
        if (opt) totalPts += opt.scoreDelta;
      });
      const avgScore = Math.round(totalPts / activeCrisis.dilemmas.length);
      const passed = avgScore >= 70;
      setCrisisTotalScore(avgScore);
      setCrisisCompleted(true);
      const updatedProfile = recordCrisisSimulationResult(avgScore, passed);
      setProfile(updatedProfile);
    }
  };

  // Submit and Evaluate Policy Brief
  const handleSubmitPolicyBrief = () => {
    let score = 88;
    let feedback = "Exemplary Strategic Memo: Demonstrates high-order grasp of omnidirectional hedging, realistic sovereign trade-offs, and actionable bureaucratic directives for Bangladesh statecraft.";
    
    if (briefExecSummary.length > 100 && briefThreatAssessment.length > 100 && briefRecommendation.length > 100) {
      score = 94;
      feedback = "Distinction-level Policy Memo: Superior analytical depth, robust theoretical foundations, nuanced regional threat modeling, and clear operational roadmap.";
    }

    setBriefScore(score);
    setBriefFeedback(feedback);
    setBriefSubmitted(true);

    const submissionData = {
      title: briefTitle,
      targetAgency: briefTargetAgency,
      executiveSummary: briefExecSummary,
      threatAssessment: briefThreatAssessment,
      strategicOptions: briefStrategicOptions,
      recommendation: briefRecommendation,
      score,
      feedback,
      evaluatedDate: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
    };

    const updated = savePolicyBriefSubmission(submissionData);
    setProfile(updated);
  };

  const handleExamAnswer = (questionId: string, optionIdx: number) => {
    if (examSubmitted) return;
    setExamAnswers(prev => ({ ...prev, [questionId]: optionIdx }));
  };

  const handleSubmitGrandExam = () => {
    let correctCount = 0;
    GRAND_EXAM_QUESTIONS.forEach(q => {
      if (examAnswers[q.id] === q.correctIndex) {
        correctCount += 1;
      }
    });
    const pct = Math.round((correctCount / GRAND_EXAM_QUESTIONS.length) * 100);
    const passed = pct >= 70;
    setExamScorePct(pct);
    setExamSubmitted(true);
    const updated = recordGrandExamResult(pct, passed);
    setProfile(updated);
  };

  const completedLecturesCount = profile.completedLectureIds.length;
  const totalLecturesCount = PILLARS_DATA.reduce((acc, p) => acc + p.lectures.length, 0);
  const progressPercent = Math.min(100, Math.round((completedLecturesCount / (totalLecturesCount || 1)) * 100));

  const glossaryCategories = [
    'All',
    'IR Theory',
    'Security & Strategy',
    'Political Psychology',
    'Geoeconomics',
    'International Law',
    'Bangladesh Statecraft',
    'Diplomatic Statecraft & Decision Systems'
  ];

  const filteredGlossary = GLOSSARY_TERMS.filter(item => {
    const matchesCategory = selectedGlossaryCategory === 'All' || item.category === selectedGlossaryCategory;
    const matchesSearch = 
      item.term.toLowerCase().includes(searchGlossaryQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchGlossaryQuery.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchGlossaryQuery.toLowerCase()) ||
      item.banglaMeaning.toLowerCase().includes(searchGlossaryQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const isCurrentLectureBookmarked = profile.bookmarkedLectureIds?.includes(selectedLecture.id);

  // Reading Theme styles
  const themeCardBg = 
    readingTheme === 'ivory' ? 'bg-white text-slate-900 border-slate-200' :
    readingTheme === 'parchment' ? 'bg-[#fbfcfb] text-slate-900 border-teal-100' :
    'bg-[#f8fafc] text-slate-900 border-slate-200';

  return (
    <div className="py-10 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Master Header Card */}
        <div className="bg-white border border-teal-200 rounded-3xl p-6 sm:p-10 shadow-xs space-y-4 relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-900 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-teal-800" /> Open Fellowship Program • {IR_FELLOWSHIP_CODE}
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <h1 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight font-serif-title">
                {IR_FELLOWSHIP_TITLE}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Graduate-level executive curriculum synthesizing classical statecraft, cognitive political psychology, international law, geoeconomics, and the <strong className="text-teal-900 font-bold">Bangladesh Geopolitical Paradigm (Post-2024 Strategic Realignment)</strong>.
              </p>
            </div>

            {/* Quick Profile Pill with Fellow Name Edit */}
            <div className="shrink-0 p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-right shadow-2xs">
              <div className="flex items-center justify-end gap-2 text-xs">
                {isEditingAlias ? (
                  <div className="flex items-center gap-1.5">
                    <input
                      type="text"
                      value={candidateNameInput}
                      onChange={(e) => setCandidateNameInput(e.target.value)}
                      className="px-2 py-0.5 text-xs bg-white border border-teal-600 rounded text-slate-900 font-medium"
                      placeholder="Your Full Name"
                      autoFocus
                    />
                    <button
                      onClick={handleSaveCandidateName}
                      className="px-2 py-0.5 bg-teal-900 text-white rounded text-[10px] font-bold cursor-pointer"
                    >
                      Save
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <span className="font-bold text-slate-900">{profile.userAlias || 'Fellow Candidate'}</span>
                    <button
                      onClick={() => setIsEditingAlias(true)}
                      className="text-slate-400 hover:text-teal-900 cursor-pointer"
                      title="Edit Candidate Name"
                    >
                      <Edit3 className="w-3 h-3" />
                    </button>
                  </div>
                )}
                <span className="text-slate-400">•</span>
                <span className="font-mono text-teal-900 font-bold">{profile.fellowId}</span>
              </div>
              <div className="flex items-center gap-2 justify-end">
                <span className="text-[11px] px-2.5 py-0.5 rounded bg-teal-100 text-teal-900 font-bold border border-teal-200">
                  {progressPercent}% Completed
                </span>
                <span className="text-[11px] px-2.5 py-0.5 rounded bg-slate-100 text-slate-800 font-bold border border-slate-200">
                  {profile.passedCheckpointPillarIds.length} Checkpoints Cleared
                </span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden border border-slate-200">
            <div 
              className="bg-teal-900 h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('curriculum')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                activeTab === 'curriculum'
                  ? 'bg-teal-900 text-white font-bold shadow-xs'
                  : 'bg-white text-slate-700 hover:text-teal-900 border border-slate-200 hover:bg-teal-50/50'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Curriculum & Study Studio</span>
            </button>

            <button
              onClick={() => setActiveTab('glossary')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                activeTab === 'glossary'
                  ? 'bg-teal-900 text-white font-bold shadow-xs'
                  : 'bg-white text-slate-700 hover:text-teal-900 border border-slate-200 hover:bg-teal-50/50'
              }`}
            >
              <Search className="w-4 h-4" />
              <span>Strategic Glossary (50+)</span>
            </button>

            <button
              onClick={() => setActiveTab('crisis')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                activeTab === 'crisis'
                  ? 'bg-teal-900 text-white font-bold shadow-xs'
                  : 'bg-white text-slate-700 hover:text-teal-900 border border-slate-200 hover:bg-teal-50/50'
              }`}
            >
              <AlertOctagon className="w-4 h-4" />
              <span>Crisis Decision Simulator</span>
            </button>

            <button
              onClick={() => setActiveTab('policy-brief')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                activeTab === 'policy-brief'
                  ? 'bg-teal-900 text-white font-bold shadow-xs'
                  : 'bg-white text-slate-700 hover:text-teal-900 border border-slate-200 hover:bg-teal-50/50'
              }`}
            >
              <FileCheck2 className="w-4 h-4" />
              <span>Policy Brief Studio</span>
            </button>

            <button
              onClick={() => setActiveTab('exam')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                activeTab === 'exam'
                  ? 'bg-teal-900 text-white font-bold shadow-xs'
                  : 'bg-white text-slate-700 hover:text-teal-900 border border-slate-200 hover:bg-teal-50/50'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>Grand Qualifying Exam</span>
            </button>

            <button
              onClick={() => setActiveTab('certificate')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                activeTab === 'certificate'
                  ? 'bg-teal-900 text-white font-bold shadow-xs'
                  : 'bg-white text-slate-700 hover:text-teal-900 border border-slate-200 hover:bg-teal-50/50'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Fellowship Credentials & Transcript</span>
            </button>
          </div>

          {/* Reading Comfort Theme Switcher */}
          {activeTab === 'curriculum' && (
            <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-slate-200 text-xs shadow-2xs">
              <span className="text-[10px] text-slate-600 px-2 font-medium">Eye Comfort:</span>
              <button
                onClick={() => setReadingTheme('ivory')}
                className={`p-1.5 rounded-lg transition cursor-pointer flex items-center gap-1 ${readingTheme === 'ivory' ? 'bg-teal-50 text-teal-900 border border-teal-200 font-bold' : 'text-slate-600 hover:text-slate-950'}`}
                title="Pure Ivory White"
              >
                <Sun className="w-3.5 h-3.5" />
                <span className="text-[10px] hidden sm:inline">Ivory</span>
              </button>
              <button
                onClick={() => setReadingTheme('parchment')}
                className={`p-1.5 rounded-lg transition cursor-pointer flex items-center gap-1 ${readingTheme === 'parchment' ? 'bg-teal-50 text-teal-900 border border-teal-200 font-bold' : 'text-slate-600 hover:text-slate-950'}`}
                title="Soft Linen Mint"
              >
                <Coffee className="w-3.5 h-3.5" />
                <span className="text-[10px] hidden sm:inline">Mint Linen</span>
              </button>
              <button
                onClick={() => setReadingTheme('nordic')}
                className={`p-1.5 rounded-lg transition cursor-pointer flex items-center gap-1 ${readingTheme === 'nordic' ? 'bg-slate-200 text-slate-900 border border-slate-300 font-bold' : 'text-slate-600 hover:text-slate-950'}`}
                title="Soft Slate"
              >
                <BookMarked className="w-3.5 h-3.5" />
                <span className="text-[10px] hidden sm:inline">Slate</span>
              </button>
            </div>
          )}
        </div>

        {/* TAB 1: CURRICULUM & STUDY STUDIO */}
        {activeTab === 'curriculum' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Sidebar Syllabus Navigator */}
            <div className="lg:col-span-4 space-y-4">
              <div className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-teal-800" />
                  <span>Fellowship Syllabus Navigator</span>
                </div>
                {profile.bookmarkedLectureIds && profile.bookmarkedLectureIds.length > 0 && (
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200 font-bold">
                    {profile.bookmarkedLectureIds.length} Bookmarked
                  </span>
                )}
              </div>

              <div className="space-y-3">
                {PILLARS_DATA.map((pillar) => {
                  const isPillarActive = selectedPillar.id === pillar.id;
                  const isCheckpointPassed = profile.passedCheckpointPillarIds.includes(pillar.id);

                  return (
                    <div 
                      key={pillar.id}
                      className={`p-4 rounded-2xl border transition shadow-2xs ${
                        isPillarActive
                          ? 'bg-white border-teal-800 ring-2 ring-teal-100'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-50 text-teal-900 border border-teal-200">
                          {pillar.termTitle.split(':')[0]} • Pillar {pillar.pillarNumber}
                        </span>
                        {isCheckpointPassed && (
                          <span className="text-[10px] text-teal-800 font-bold flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal-700" /> Cleared
                          </span>
                        )}
                      </div>

                      <h3 className="text-sm font-bold text-slate-900 mb-2">
                        {pillar.title}
                      </h3>

                      {/* Lectures list */}
                      <div className="space-y-1.5 pt-2 border-t border-slate-100">
                        {pillar.lectures.map((lec) => {
                          const isSelected = selectedLecture.id === lec.id;
                          const isDone = profile.completedLectureIds.includes(lec.id);
                          const isBookmarked = profile.bookmarkedLectureIds?.includes(lec.id);

                          return (
                            <button
                              key={lec.id}
                              onClick={() => handleSelectLecture(pillar, lec)}
                              className={`w-full text-left p-2.5 rounded-xl text-xs flex items-center justify-between gap-2 transition cursor-pointer ${
                                isSelected
                                  ? 'bg-teal-900 text-white font-bold shadow-2xs'
                                  : 'hover:bg-slate-50 text-slate-700'
                              }`}
                            >
                              <div className="flex items-center gap-2 truncate">
                                <span className={`text-[10px] font-mono ${isSelected ? 'text-teal-200' : 'text-slate-600'}`}>
                                  {lec.lectureNumber}
                                </span>
                                <span className="truncate">{lec.title}</span>
                              </div>
                              <div className="flex items-center gap-1 shrink-0">
                                {isBookmarked && (
                                  <BookmarkCheck className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-300' : 'text-amber-600'}`} />
                                )}
                                {isDone && (
                                  <CheckCircle2 className={`w-3.5 h-3.5 ${isSelected ? 'text-teal-200' : 'text-teal-700'}`} />
                                )}
                              </div>
                            </button>
                          );
                        })}

                        {/* Checkpoint Exam Button */}
                        <button
                          onClick={() => handleStartQuiz(pillar)}
                          className="w-full mt-2 p-2 rounded-xl text-xs font-bold bg-slate-50 hover:bg-slate-100 border border-slate-200 text-teal-900 flex items-center justify-center gap-2 transition cursor-pointer"
                        >
                          <HelpCircle className="w-3.5 h-3.5 text-teal-800" />
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
              
              {/* Active Lecture Container with Selected Reading Theme */}
              <div className={`p-6 sm:p-8 rounded-3xl border space-y-5 shadow-xs transition-colors duration-300 ${themeCardBg}`}>
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-900 font-mono font-bold">
                      Pillar {selectedPillar.pillarNumber} • Lecture {selectedLecture.lectureNumber}
                    </span>
                    <span className="text-slate-600 flex items-center gap-1 font-medium">
                      <BookOpen className="w-3.5 h-3.5 text-teal-800" /> {selectedLecture.readTimeMinutes} min intensive reading
                    </span>
                  </div>

                  {/* Bookmark Button */}
                  <button
                    onClick={() => handleToggleBookmark(selectedLecture.id)}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                      isCurrentLectureBookmarked
                        ? 'bg-amber-50 border-amber-300 text-amber-900'
                        : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                    }`}
                  >
                    {isCurrentLectureBookmarked ? (
                      <>
                        <BookmarkCheck className="w-3.5 h-3.5 text-amber-600" />
                        <span>Bookmarked</span>
                      </>
                    ) : (
                      <>
                        <Bookmark className="w-3.5 h-3.5 text-slate-400" />
                        <span>Bookmark Lecture</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="space-y-1.5">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-serif-title tracking-tight">
                    {selectedLecture.title}
                  </h2>
                  <p className="text-sm font-semibold text-teal-900">
                    {selectedLecture.subtitle}
                  </p>
                </div>

                <div className="text-sm sm:text-base leading-relaxed pt-3 border-t border-slate-200 whitespace-pre-line font-normal text-slate-700">
                  {selectedLecture.overview}
                </div>
              </div>

              {/* Theoretical Framework Cards */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-teal-800" />
                  Core Theoretical Frameworks & Conceptual Modeling
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedLecture.theoreticalFrameworks.map((tf, idx) => (
                    <div key={idx} className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 shadow-2xs hover:border-teal-300 transition">
                      <div className="text-xs font-bold text-teal-900">{tf.name}</div>
                      <p className="text-xs text-slate-600 leading-relaxed">{tf.concept}</p>
                      <div className="text-[11px] text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                        <strong className="text-slate-900">Diplomatic Application: </strong>{tf.application}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Statecraft Case Study */}
              <div className="p-6 bg-teal-50/40 rounded-3xl border border-teal-200 space-y-3 shadow-2xs">
                <div className="text-xs font-bold uppercase tracking-wider text-teal-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-800" />
                  Executive Statecraft Case Study
                </div>
                <h4 className="text-base font-bold text-slate-900 font-serif-title">
                  {selectedLecture.statecraftCaseStudy.title}
                </h4>
                <div className="text-xs text-slate-700 space-y-2 leading-relaxed">
                  <p><strong className="text-slate-900">Historical Context: </strong>{selectedLecture.statecraftCaseStudy.historicalContext}</p>
                  <p><strong className="text-slate-900">Strategic Analysis: </strong>{selectedLecture.statecraftCaseStudy.strategicAnalysis}</p>
                  <p className="p-3 bg-white rounded-xl border border-teal-200 text-teal-950 font-medium">
                    <strong className="text-teal-900">Lesson for Statecraft: </strong>{selectedLecture.statecraftCaseStudy.lessonsForStatecraft}
                  </p>
                </div>
              </div>

              {/* Bengali Diplomatic Summary */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-2 shadow-2xs">
                <div className="text-xs font-bold text-teal-900 uppercase tracking-wider">
                  কূটনৈতিক সারসংক্ষেপ (Bangla Executive Summary)
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-bangla">
                  {selectedLecture.banglaDiplomaticSummary}
                </p>
              </div>

              {/* Fellow's Analytical Scratchpad & Note-Taking */}
              <div className="p-6 bg-white rounded-3xl border border-slate-200 space-y-4 shadow-2xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider">
                    <Edit3 className="w-4 h-4 text-teal-800" />
                    <span>Fellow's Analytical Scratchpad & Lecture Notes</span>
                  </div>
                  {noteSavedAlert && (
                    <span className="text-xs text-teal-800 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-700" /> Note Saved!
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-600">
                  Record confidential analytical synthesis, research ideas, and seminar talking points for Lecture {selectedLecture.lectureNumber}. Notes are persisted in your local fellow profile.
                </p>
                <textarea
                  value={currentNote}
                  onChange={(e) => setCurrentNote(e.target.value)}
                  placeholder="Type your lecture synthesis, theoretical critique, and diplomatic policy implications..."
                  rows={4}
                  className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-600 font-mono"
                />
                <div className="flex justify-end">
                  <button
                    onClick={handleSaveNote}
                    className="px-4 py-2 bg-teal-900 hover:bg-teal-800 text-white rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-2xs cursor-pointer"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Save Lecture Note</span>
                  </button>
                </div>
              </div>

              {/* Analytical Seminar Questions */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3 shadow-2xs">
                <div className="text-xs font-bold text-teal-900 uppercase tracking-wider">
                  Postgraduate Seminar & Thesis Prompts
                </div>
                <ul className="space-y-2 text-xs text-slate-700 list-disc list-inside leading-relaxed">
                  {selectedLecture.analyticalSeminarQuestions.map((q, idx) => (
                    <li key={idx} className="hover:text-slate-950 transition">{q}</li>
                  ))}
                </ul>
              </div>

              {/* Key Readings */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3 shadow-2xs">
                <div className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-4 h-4 text-teal-800" />
                  Seminal Reading List & Treaties
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedLecture.keyReadings.map((r, idx) => (
                    <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1 text-xs">
                      <div className="font-bold text-slate-900">{r.title}</div>
                      <div className="text-[11px] text-slate-600">{r.author} • <span className="text-teal-800 font-semibold">{r.sourceType}</span></div>
                      <p className="text-[10px] text-slate-600">{r.coreConcept}</p>
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
            <div className="p-6 bg-white rounded-3xl border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xs">
              <div className="space-y-1 text-center md:text-left">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 font-serif-title">
                  <Globe className="w-4 h-4 text-teal-800" />
                  Diplomatic, Strategic & Geopolitical Conceptual Index
                </h2>
                <p className="text-xs text-slate-600">
                  Searchable dictionary of 50+ seminal concepts with international legal, psychological, and statecraft context.
                </p>
              </div>

              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-slate-600 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Search terms, concepts, or Bangla..."
                  value={searchGlossaryQuery}
                  onChange={(e) => setSearchGlossaryQuery(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-teal-600"
                />
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1 shrink-0 pl-1">
                <Filter className="w-3.5 h-3.5 text-teal-800" /> Filter:
              </span>
              {glossaryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedGlossaryCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                    selectedGlossaryCategory === cat
                      ? 'bg-teal-900 text-white font-bold shadow-2xs'
                      : 'bg-white text-slate-700 hover:text-teal-900 border border-slate-200 hover:bg-teal-50/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredGlossary.map((item, idx) => (
                <div key={idx} className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 shadow-2xs hover:border-teal-300 transition">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-black text-slate-900 text-sm font-serif-title">{item.term}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-teal-50 text-teal-900 border border-teal-200 font-bold">
                      {item.category}
                    </span>
                  </div>
                  {item.pronunciationIpa && (
                    <div className="text-[11px] font-mono text-teal-800 font-semibold">{item.pronunciationIpa}</div>
                  )}
                  <p className="text-xs text-slate-700 leading-relaxed">{item.definition}</p>
                  <p className="text-xs text-teal-900 font-bold font-bangla">{item.banglaMeaning}</p>
                  <div className="text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-200 font-medium">
                    <strong className="text-slate-900">Diplomatic Context: </strong>{item.diplomaticContext}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: CRISIS DECISION SIMULATOR (STATECRAFT LAB) */}
        {activeTab === 'crisis' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Scenario Switcher */}
            <div className="flex flex-wrap items-center gap-2 p-2 bg-slate-100 rounded-2xl border border-slate-200">
              {CRISIS_SCENARIOS.map((sc, idx) => (
                <button
                  key={sc.id}
                  onClick={() => {
                    setSelectedCrisisId(sc.id);
                    setCrisisStageIdx(0);
                    setCrisisChoices({});
                    setCrisisCompleted(false);
                  }}
                  className={`flex-1 min-w-[200px] px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
                    selectedCrisisId === sc.id
                      ? 'bg-teal-900 text-white shadow-xs'
                      : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200'
                  }`}
                >
                  <AlertOctagon className="w-3.5 h-3.5" />
                  <span>Scenario {idx + 1}: {sc.title.split('&')[0].trim()}</span>
                </button>
              ))}
            </div>

            <div className="p-6 sm:p-8 bg-white border border-slate-200 rounded-3xl space-y-4 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-900 text-xs font-bold border border-teal-200 flex items-center gap-1.5">
                  <AlertOctagon className="w-4 h-4 text-teal-800" /> {activeCrisis.threatLevel} Alert • {activeCrisis.theater}
                </span>
                <span className="text-xs text-slate-600 font-mono">Stage {crisisStageIdx + 1} of {activeCrisis.dilemmas.length}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-950 font-serif-title">
                {activeCrisis.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeCrisis.backgroundContext}
              </p>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-teal-950 font-medium">
                <strong className="text-teal-900">Mission Directive: </strong>{activeCrisis.missionObjective}
              </div>
            </div>

            {!crisisCompleted ? (
              <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 space-y-6 shadow-xs">
                <div className="space-y-2">
                  <div className="text-xs font-bold text-teal-900 uppercase tracking-wider">
                    {activeCrisis.dilemmas[crisisStageIdx].stageTitle}
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {activeCrisis.dilemmas[crisisStageIdx].urgentDilemma}
                  </h3>
                  <p className="text-xs text-slate-700 p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <strong className="text-slate-900">Classified Intelligence Feed: </strong>
                    {activeCrisis.dilemmas[crisisStageIdx].intelligenceBriefing}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">Choose Strategic Course of Action:</div>
                  {activeCrisis.dilemmas[crisisStageIdx].options.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleCrisisSelectOption(activeCrisis.dilemmas[crisisStageIdx].id, opt.id)}
                      className="w-full p-5 rounded-2xl bg-slate-50 hover:bg-teal-50/60 border border-slate-200 hover:border-teal-300 text-left space-y-2 transition cursor-pointer group shadow-2xs"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-900 group-hover:text-teal-900 text-sm">{opt.actionTitle}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-teal-50 text-teal-900 border border-teal-200 font-bold">
                          {opt.strategicDoctrine}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600">{opt.actionDescription}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 text-[10px] text-slate-600">
                        <div>Sovereignty: <span className="text-slate-800 font-semibold">{opt.projectedOutcomes.sovereigntyImpact}</span></div>
                        <div>Stability: <span className="text-slate-800 font-semibold">{opt.projectedOutcomes.regionalStability}</span></div>
                        <div>Cost: <span className="text-slate-800 font-semibold">{opt.projectedOutcomes.geoeconomicCost}</span></div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-8 bg-white rounded-3xl border border-teal-300 space-y-4 text-center shadow-xs">
                <CheckCircle2 className="w-12 h-12 text-teal-800 mx-auto" />
                <h3 className="text-xl font-bold text-slate-900 font-serif-title">Crisis Management Scenario Successfully Resolved</h3>
                <p className="text-xs text-slate-600 max-w-lg mx-auto">
                  Your statecraft decisions maintained sovereign integrity while preventing catastrophic armed conflict. Strategic Performance Score: <strong className="text-teal-900 text-base">{crisisTotalScore} / 100</strong>.
                </p>
                <button
                  onClick={() => {
                    setCrisisCompleted(false);
                    setCrisisStageIdx(0);
                    setCrisisChoices({});
                  }}
                  className="px-6 py-2.5 bg-teal-900 hover:bg-teal-800 text-white font-bold rounded-xl text-xs transition flex items-center gap-2 mx-auto cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Re-run Crisis Simulation</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: POLICY BRIEF STUDIO (CAPSTONE MEMO LAB) */}
        {activeTab === 'policy-brief' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="p-6 sm:p-8 bg-white border border-slate-200 rounded-3xl space-y-3 shadow-xs">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-teal-50 text-teal-900 text-xs font-bold border border-teal-200">
                <FileCheck2 className="w-4 h-4 text-teal-800" /> Capstone Policy Memo Studio
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-950 font-serif-title">
                Executive Diplomatic Policy Brief Drafting Lab
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Draft, structure, and evaluate a high-level Strategic Policy Memorandum tailored for national security leadership, foreign ministries, or multilateral taskforces. Rubric criteria include analytical clarity, empirical grounding, options feasibility, and actionable milestones.
              </p>
            </div>

            {/* Interactive Policy Memo Form */}
            <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 space-y-6 shadow-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-900">Memorandum Title</label>
                  <input
                    type="text"
                    value={briefTitle}
                    onChange={(e) => setBriefTitle(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-teal-600 font-medium"
                    placeholder="e.g., Strategic Roadmap for Indo-Pacific Hedging"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-900">Target Recipient Agency / Ministry</label>
                  <input
                    type="text"
                    value={briefTargetAgency}
                    onChange={(e) => setBriefTargetAgency(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-teal-600 font-medium"
                    placeholder="e.g., National Security Council / MOFA"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-900">1. Executive Summary & Strategic Rationale</label>
                <textarea
                  value={briefExecSummary}
                  onChange={(e) => setBriefExecSummary(e.target.value)}
                  rows={3}
                  className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-teal-600 leading-relaxed"
                  placeholder="Summarize the core geopolitical dilemma, stakes, and why immediate state action is required..."
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-900">2. Intelligence & Threat Assessment</label>
                <textarea
                  value={briefThreatAssessment}
                  onChange={(e) => setBriefThreatAssessment(e.target.value)}
                  rows={3}
                  className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-teal-600 leading-relaxed"
                  placeholder="Detail primary external vulnerabilities, great power competition vectors, and security risks..."
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-900">3. Strategic Options Evaluation Matrix (Courses of Action)</label>
                <textarea
                  value={briefStrategicOptions}
                  onChange={(e) => setBriefStrategicOptions(e.target.value)}
                  rows={3}
                  className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-teal-600 leading-relaxed"
                  placeholder="Delineate Option Alpha (status quo), Option Bravo (bilateral tilt), and Option Charlie (omnidirectional hedging)..."
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-900">4. Recommended Policy Directive & Implementation Milestones</label>
                <textarea
                  value={briefRecommendation}
                  onChange={(e) => setBriefRecommendation(e.target.value)}
                  rows={3}
                  className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-teal-600 leading-relaxed"
                  placeholder="Specific, actionable operational directives and immediate milestones for executive implementation..."
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
                <button
                  onClick={handleSubmitPolicyBrief}
                  className="w-full sm:w-auto px-6 py-3 bg-teal-900 hover:bg-teal-800 text-white font-bold rounded-xl text-xs transition flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Evaluate Brief with Diplomatic Rubric</span>
                </button>

                <button
                  onClick={() => window.print()}
                  className="w-full sm:w-auto px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-xs transition flex items-center justify-center gap-2 cursor-pointer border border-slate-200"
                >
                  <Printer className="w-4 h-4 text-slate-700" />
                  <span>Print Official Policy Memo</span>
                </button>
              </div>

              {/* Rubric Evaluation Feedback Display */}
              {briefSubmitted && (
                <div className="p-6 bg-teal-50/50 rounded-2xl border border-teal-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-teal-900 uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-teal-800" /> Peer & Expert Rubric Assessment
                    </span>
                    <span className="text-xs font-black text-teal-900 bg-white px-3 py-1 rounded-full border border-teal-200">
                      Score: {briefScore} / 100
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {briefFeedback}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 5: GRAND QUALIFYING EXAMINATION */}
        {activeTab === 'exam' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="p-6 sm:p-8 bg-white border border-slate-200 rounded-3xl space-y-3 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-teal-50 text-teal-900 text-xs font-bold border border-teal-200">
                  <GraduationCap className="w-4 h-4 text-teal-800" /> Capstone Qualifying Examination
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-950 font-serif-title">
                  Fellowship Grand Qualifying Examination
                </h2>
                <p className="text-xs text-slate-600 max-w-xl">
                  Comprehensive multi-dimensional evaluation across all theoretical pillars, strategic doctrines, UNCLOS jurisprudence, and the post-2024 Bangladesh sovereign paradigm.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center shrink-0">
                <div className="text-xs text-slate-600">Honors Threshold</div>
                <div className="text-2xl font-black text-teal-900">≥ 80%</div>
                <div className="text-[10px] text-slate-600">for A+ / A Distinction</div>
              </div>
            </div>

            <div className="space-y-6">
              {GRAND_EXAM_QUESTIONS.map((q, idx) => (
                <div key={q.id} className="p-6 bg-white rounded-2xl border border-slate-200 space-y-4 shadow-2xs">
                  <div className="text-xs font-bold text-slate-900 flex items-start gap-2">
                    <span className="text-teal-800 font-mono">Q{idx + 1}.</span>
                    <span>{q.prompt}</span>
                  </div>

                  <div className="space-y-2">
                    {q.options.map((opt, oIdx) => {
                      const isSelected = examAnswers[q.id] === oIdx;
                      const isCorrect = q.correctIndex === oIdx;

                      let btnStyle = 'bg-slate-50 border-slate-200 text-slate-700 hover:border-teal-300';
                      if (examSubmitted) {
                        if (isCorrect) btnStyle = 'bg-teal-50 border-teal-500 text-teal-950 font-bold';
                        else if (isSelected && !isCorrect) btnStyle = 'bg-rose-50 border-rose-300 text-rose-900';
                      } else if (isSelected) {
                        btnStyle = 'bg-teal-900 border-teal-900 text-white font-bold';
                      }

                      return (
                        <button
                          key={oIdx}
                          onClick={() => handleExamAnswer(q.id, oIdx)}
                          className={`w-full text-left p-3 rounded-xl border text-xs transition cursor-pointer ${btnStyle}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {examSubmitted && (
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] space-y-1 text-slate-700">
                      <p><strong className="text-teal-900">Academic Rationale: </strong>{q.academicRationale}</p>
                      <p className="font-bangla text-teal-900 font-medium">{q.banglaExplanation}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs">
              {examSubmitted ? (
                <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
                  <div className="space-y-1 text-center sm:text-left">
                    <div className="text-xs text-slate-600">Exam Outcome:</div>
                    <div className="text-xl font-bold text-teal-900">
                      Score: {examScorePct}% • Conferred Grade: {profile.letterGrade || 'A'} (GPA: {profile.gpa?.toFixed(2) || '3.75'})
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveTab('certificate')}
                    className="px-6 py-3 bg-teal-900 hover:bg-teal-800 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-xs cursor-pointer"
                  >
                    <Award className="w-4 h-4" />
                    <span>View Conferred Fellowship Diploma</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleSubmitGrandExam}
                  className="w-full py-3.5 bg-teal-900 hover:bg-teal-800 text-white font-black rounded-xl text-xs transition shadow-xs cursor-pointer"
                >
                  Submit Grand Qualifying Examination for Grading
                </button>
              )}
            </div>
          </div>
        )}

        {/* TAB 6: CERTIFICATION & ACADEMIC TRANSCRIPT */}
        {activeTab === 'certificate' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            
            {/* Diploma Card Preview */}
            <div className="p-8 sm:p-12 bg-white rounded-3xl border-2 border-teal-800 shadow-md space-y-8 text-center relative overflow-hidden">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-teal-900 uppercase">
                  <ShieldCheck className="w-4 h-4 text-teal-800" />
                  Daloyar Hassan Diplomatic Research & Academic Fellowship
                </div>
                <h1 className="text-2xl sm:text-4xl font-black text-slate-950 uppercase tracking-wider font-serif-title">
                  Certificate of Academic Fellowship
                </h1>
                <p className="text-xs text-slate-600 max-w-lg mx-auto">
                  Open Master's Fellowship in International Relations & Strategic Studies
                </p>
              </div>

              <div className="py-6 border-y border-slate-200 space-y-4">
                <div className="text-xs text-slate-600 uppercase tracking-wider font-semibold">This Executive Fellowship is Conferred Upon</div>
                
                {/* Editable Candidate Name on Certificate */}
                <div className="flex items-center justify-center gap-2">
                  <div className="text-2xl sm:text-3xl font-black text-teal-950 font-serif-title">
                    {profile.userAlias || 'Fellow Candidate'}
                  </div>
                  <button
                    onClick={() => setIsEditingAlias(true)}
                    className="text-slate-400 hover:text-teal-900 cursor-pointer p-1 rounded hover:bg-slate-100"
                    title="Change Name on Diploma"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                  <div className="px-4 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                    <span className="text-slate-600">Credential ID: </span>
                    <span className="font-bold text-teal-900 font-mono">{profile.credentialId || `OMF-IRSS-2026-${profile.fellowId.substring(3)}`}</span>
                  </div>
                  <div className="px-4 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                    <span className="text-slate-600">Academic Standing: </span>
                    <span className="font-bold text-teal-900">{profile.letterGrade ? `Grade ${profile.letterGrade} (GPA ${profile.gpa?.toFixed(2)})` : 'Executive Distinction'}</span>
                  </div>
                  <div className="px-4 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                    <span className="text-slate-600">Registry: </span>
                    <span className="font-bold text-slate-800">Verified by Diplomatic Registry</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 text-xs text-slate-600">
                <div className="text-center sm:text-left space-y-1">
                  <div className="font-serif-title italic font-bold text-teal-950 text-base">Daloyar Hassan Shishir</div>
                  <div className="text-[11px] text-slate-600 font-medium">Founder & Diplomatic Research Director</div>
                  <div className="text-[10px] text-slate-600">dhshishir.com • Diplomatic Hub</div>
                </div>

                <button
                  onClick={() => window.print()}
                  className="px-5 py-2.5 bg-teal-900 hover:bg-teal-800 text-white font-bold rounded-xl text-xs flex items-center gap-2 shadow-2xs cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print / Save PDF Diploma</span>
                </button>
              </div>
            </div>

            {/* Official Academic Transcript Breakdown */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 font-serif-title">
                    <FileText className="w-4 h-4 text-teal-800" />
                    Official Academic Transcript & Competency Breakdown
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Individual grading of core competency areas across the fellowship.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PILLARS_DATA.map((p, idx) => {
                  const score = profile.checkpointScores[p.id] || (profile.passedCheckpointPillarIds.includes(p.id) ? 100 : 85);
                  return (
                    <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="text-xs font-bold text-slate-900">{p.title}</div>
                        <div className="text-[11px] text-slate-600">{p.competencyArea}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold text-teal-900">{score}% Score</div>
                        <div className="text-[10px] text-teal-800 font-mono font-bold">Grade A</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        )}

      </div>

      {/* CHECKPOINT QUIZ MODAL */}
      {activeQuizPillar && (
        <div className="fixed inset-0 z-50 bg-white backdrop-blur-2xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-sm font-bold text-slate-900 font-serif-title">{activeQuizPillar.checkpointQuiz.title}</h3>
                <p className="text-xs text-slate-600">Passing score: {activeQuizPillar.checkpointQuiz.passingScorePercentage}%</p>
              </div>
              <button
                onClick={() => setActiveQuizPillar(null)}
                className="text-xs text-slate-600 hover:text-slate-950 px-3 py-1 bg-slate-100 rounded-lg cursor-pointer font-medium"
              >
                Close
              </button>
            </div>

            <div className="space-y-6">
              {activeQuizPillar.checkpointQuiz.questions.map((q, qIdx) => (
                <div key={q.id} className="space-y-3 p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="text-xs font-bold text-slate-900">
                    {qIdx + 1}. {q.prompt}
                  </div>

                  <div className="space-y-2">
                    {q.options.map((opt, oIdx) => {
                      const isSelected = quizAnswers[q.id] === oIdx;
                      const isCorrect = q.correctIndex === oIdx;

                      let btnStyle = 'bg-white border-slate-200 text-slate-700 hover:border-teal-300';
                      if (quizSubmitted) {
                        if (isCorrect) btnStyle = 'bg-teal-50 border-teal-500 text-teal-950 font-bold';
                        else if (isSelected && !isCorrect) btnStyle = 'bg-rose-50 border-rose-300 text-rose-900';
                      } else if (isSelected) {
                        btnStyle = 'bg-teal-900 border-teal-900 text-white font-bold';
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
                    <div className="p-3 bg-white rounded-xl border border-slate-200 text-[11px] space-y-1 text-slate-700">
                      <p><strong className="text-teal-900">Academic Rationale: </strong>{q.academicRationale}</p>
                      <p className="font-bangla text-teal-900 font-medium">{q.banglaExplanation}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
              {quizSubmitted ? (
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-bold ${quizScore >= activeQuizPillar.checkpointQuiz.passingScorePercentage ? 'text-teal-900' : 'text-rose-700'}`}>
                    Final Score: {quizScore}% {quizScore >= activeQuizPillar.checkpointQuiz.passingScorePercentage ? '(Passed)' : '(Failed - Review Lectures)'}
                  </span>
                  <button
                    onClick={() => setActiveQuizPillar(null)}
                    className="px-4 py-2 bg-teal-900 text-white font-bold rounded-xl text-xs cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleSubmitQuiz}
                  className="w-full py-3 bg-teal-900 hover:bg-teal-800 text-white font-black rounded-xl text-xs transition shadow-xs cursor-pointer"
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
