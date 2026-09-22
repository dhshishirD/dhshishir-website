import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, Pause, RotateCcw, Volume2, FastForward, 
  CheckCircle2, AlertCircle, HelpCircle, Sparkles, 
  Clock, FileText, Check, Award, RefreshCw, Eye, EyeOff,
  ArrowRight, ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { recordIeltsTestResult } from '../../services/unifiedMemberService';

interface Question {
  id: number;
  section: number;
  type: 'fill' | 'mcq' | 'matching';
  prompt: string;
  options?: string[];
  correctAnswer: string;
  acceptableAnswers?: string[];
  explanation: string;
  audioTimestamp: string;
  distractorTrap: string;
}

const LISTENING_TEST_DATA = {
  testId: 'cambridge-19-sim-1',
  title: 'Cambridge Academic Simulation Test 1: Full 4-Section Listening Exam',
  sections: [
    {
      sectionNumber: 1,
      title: 'Section 1: Community Health & Aquatic Center Registration',
      speakerContext: 'Dialogue between an admissions officer and a new resident.',
      transcriptText: `OFFICER: Good morning! Welcome to the Greenfield Community Aquatic and Wellness Center. How can I help you today?
MEMBER: Hello! I recently relocated to the northern district, and I'd like to register for a monthly aquatic and gym membership.
OFFICER: Excellent! Let me take down your particulars. Could I have your full name, please?
MEMBER: Yes, it's Julian Abernathy. That's A-B-E-R-N-A-T-H-Y.
OFFICER: Thank you, Julian. And what is your primary contact telephone number?
MEMBER: It's 0491-570-823.
OFFICER: Great. Now, regarding membership tiers, we offer Standard, Gold, and Peak Executive. The standard tier gives access on weekdays until 4:00 PM, while Gold is unrestricted.
MEMBER: I work until 5:30 PM, so I will definitely require the Gold tier. How much is the monthly subscription?
MEMBER: OFFICER: The Gold membership is usually sixty-five pounds, but for new residents joining this quarter, we have a promotional rate of forty-eight pounds per month.
MEMBER: Forty-eight pounds sounds very reasonable. Does that include access to the heated hydrotherapy pool?
OFFICER: Yes, all aquatic facilities including the steam room and hydrotherapy pool are included. However, locker access requires an initial refundable deposit of ten pounds.
MEMBER: That is fine. When does the orientation tour take place?
OFFICER: Our fitness coordinator conducts induction sessions every Tuesday morning at nine-thirty AM.
MEMBER: Perfect. I will book Tuesday morning at 9:30. Thank you!`,
      questions: [
        {
          id: 1,
          section: 1,
          type: 'fill' as const,
          prompt: 'Member Surname: [ 1 ]',
          correctAnswer: 'Abernathy',
          acceptableAnswers: ['abernathy', 'ABERNATHY'],
          explanation: 'Spelled out letter by letter: A-B-E-R-N-A-T-H-Y.',
          audioTimestamp: '00:32',
          distractorTrap: 'Listen for exact spelling.'
        },
        {
          id: 2,
          section: 1,
          type: 'fill' as const,
          prompt: 'Selected Membership Tier: [ 2 ]',
          correctAnswer: 'Gold',
          acceptableAnswers: ['gold', 'GOLD'],
          explanation: 'Julian selected Gold because he works until 5:30 PM and Standard ends at 4:00 PM.',
          audioTimestamp: '01:10',
          distractorTrap: 'Standard tier is mentioned first as a distractor.'
        },
        {
          id: 3,
          section: 1,
          type: 'fill' as const,
          prompt: 'Discounted Monthly Fee: £ [ 3 ]',
          correctAnswer: '48',
          acceptableAnswers: ['48', 'forty-eight', 'forty eight'],
          explanation: 'Standard rate is £65, but promotional discount is £48.',
          audioTimestamp: '01:45',
          distractorTrap: '65 is the regular price mentioned first.'
        },
        {
          id: 4,
          section: 1,
          type: 'fill' as const,
          prompt: 'Refundable Locker Deposit: £ [ 4 ]',
          correctAnswer: '10',
          acceptableAnswers: ['10', 'ten'],
          explanation: 'A refundable deposit of ten pounds is required for locker access.',
          audioTimestamp: '02:15',
          distractorTrap: 'Locker deposit is separate from monthly fee.'
        },
        {
          id: 5,
          section: 1,
          type: 'fill' as const,
          prompt: 'Orientation Tour Day: [ 5 ] morning at 9:30 AM',
          correctAnswer: 'Tuesday',
          acceptableAnswers: ['tuesday', 'TUESDAY'],
          explanation: 'Induction takes place every Tuesday morning.',
          audioTimestamp: '02:40',
          distractorTrap: 'Listen for the day of the week.'
        }
      ]
    },
    {
      sectionNumber: 2,
      title: 'Section 2: Highfield Nature Reserve & Botanical Arboretum',
      speakerContext: 'Informational broadcast for visitors and volunteer conservationists.',
      transcriptText: `GUIDE: Welcome everyone to Highfield Nature Reserve. Spread across four hundred hectares of protected wetlands, this sanctuary represents one of the region's most critical biodiversity corridors.
Before we commence our guided expedition along the Kingfisher Boardwalk, I would like to highlight several structural enhancements completed this season.
First, our newly commissioned observation hide overlooks the eastern reedbeds. To minimize acoustic disturbance to nesting migratory waterfowl, we ask all visitors to keep mobile devices on silent mode and avoid flash photography.
Secondly, regarding visitor amenities, the historic windmill located by the northern gate has been restored and now serves as our main educational center. You will find interactive topographical maps and botanical archives on the ground floor, while the café is situated on the second level.
Please note that the southern marsh trail is temporarily closed due to boardwalk reinforcement works following recent rainfall. It is anticipated to reopen next month.
For those interested in our volunteer weekend planting drives, registration forms can be completed at the reception counter. Thank you!`,
      questions: [
        {
          id: 6,
          section: 2,
          type: 'fill' as const,
          prompt: 'Total Reserve Area: [ 6 ] hectares',
          correctAnswer: '400',
          acceptableAnswers: ['400', 'four hundred'],
          explanation: 'The guide explicitly states 400 hectares of protected wetlands.',
          audioTimestamp: '03:15',
          distractorTrap: 'Area specification at the start of monologue.'
        },
        {
          id: 7,
          section: 2,
          type: 'fill' as const,
          prompt: 'The new observation hide overlooks the [ 7 ] reedbeds.',
          correctAnswer: 'eastern',
          acceptableAnswers: ['eastern', 'east'],
          explanation: 'Overlooks the eastern reedbeds.',
          audioTimestamp: '03:45',
          distractorTrap: 'Directional descriptor.'
        },
        {
          id: 8,
          section: 2,
          type: 'fill' as const,
          prompt: 'The restored historic [ 8 ] houses the educational center.',
          correctAnswer: 'windmill',
          acceptableAnswers: ['windmill', 'Windmill'],
          explanation: 'The historic windmill by the northern gate is now the education center.',
          audioTimestamp: '04:15',
          distractorTrap: 'Windmill vs Cafe.'
        },
        {
          id: 9,
          section: 2,
          type: 'fill' as const,
          prompt: 'The café is located on the [ 9 ] level of the building.',
          correctAnswer: 'second',
          acceptableAnswers: ['second', '2nd', 'top'],
          explanation: 'Ground floor has maps; café is on the second level.',
          audioTimestamp: '04:35',
          distractorTrap: 'Ground floor is maps; second is cafe.'
        },
        {
          id: 10,
          section: 2,
          type: 'fill' as const,
          prompt: 'The [ 10 ] marsh trail is currently closed for maintenance.',
          correctAnswer: 'southern',
          acceptableAnswers: ['southern', 'south'],
          explanation: 'The southern marsh trail is temporarily closed.',
          audioTimestamp: '04:55',
          distractorTrap: 'Listen for which specific trail is closed.'
        }
      ]
    },
    {
      sectionNumber: 3,
      title: 'Section 3: Academic Discussion on Subregional Hydrology',
      speakerContext: 'Two environmental engineering students discussing their river delta thesis with Professor Vance.',
      transcriptText: `PROFESSOR: Come in, Liam, Maya. Let us examine your draft methodology for the riparian delta sedimentation project.
LIAM: Thank you, Professor. We wanted to clarify the sampling frequency for the upper tributary sensors.
MAYA: Right. Initially, we planned to collect sediment core samples on a fortnightly schedule. However, after reviewing precipitation data from the meteorological agency, we realized that monsoon flood surges cause dramatic sediment shifts within hours.
PROFESSOR: Indeed. A bi-weekly schedule would completely miss high-velocity pulse events. What is your alternative?
LIAM: We propose installing automated optical turbidity sensors that record continuous telemetry data every fifteen minutes.
PROFESSOR: That is far more robust. What about your secondary data sources regarding agricultural runoff?
MAYA: We obtained historical nitrogen and phosphate records from the provincial environmental department, covering the past twenty-five years.
LIAM: But there is an anomaly between 2012 and 2015 where sampling protocols were altered, causing a false downward trend in synthetic fertilizer metrics.
PROFESSOR: Excellent forensic observation. You must explicitly address that methodological discrepancy in your literature review.`,
      questions: [
        {
          id: 11,
          section: 3,
          type: 'fill' as const,
          prompt: 'Original proposed sampling interval was [ 11 ] (fortnightly).',
          correctAnswer: 'bi-weekly',
          acceptableAnswers: ['bi-weekly', 'fortnightly', 'biweekly', 'two weeks'],
          explanation: 'Maya mentions they initially planned fortnightly sampling.',
          audioTimestamp: '05:40',
          distractorTrap: 'Initial plan vs revised automated sensors.'
        },
        {
          id: 12,
          section: 3,
          type: 'fill' as const,
          prompt: 'Automated turbidity sensors will record data every [ 12 ] minutes.',
          correctAnswer: '15',
          acceptableAnswers: ['15', 'fifteen'],
          explanation: 'Liam proposes recording continuous telemetry every 15 minutes.',
          audioTimestamp: '06:10',
          distractorTrap: 'Frequency number in minutes.'
        },
        {
          id: 13,
          section: 3,
          type: 'fill' as const,
          prompt: 'Historical runoff records span the past [ 13 ] years.',
          correctAnswer: '25',
          acceptableAnswers: ['25', 'twenty-five', 'twenty five'],
          explanation: 'Covering the past twenty-five years.',
          audioTimestamp: '06:35',
          distractorTrap: 'Time span in years.'
        },
        {
          id: 14,
          section: 3,
          type: 'fill' as const,
          prompt: 'Data anomaly occurred due to changes in [ 14 ] protocols.',
          correctAnswer: 'sampling',
          acceptableAnswers: ['sampling', 'measurement'],
          explanation: 'Sampling protocols were altered between 2012 and 2015.',
          audioTimestamp: '07:05',
          distractorTrap: 'Reason for the data discrepancy.'
        },
        {
          id: 15,
          section: 3,
          type: 'fill' as const,
          prompt: 'Professor instructs students to document the anomaly in the [ 15 ] review.',
          correctAnswer: 'literature',
          acceptableAnswers: ['literature', 'Literature'],
          explanation: 'Must explicitly address the discrepancy in their literature review.',
          audioTimestamp: '07:25',
          distractorTrap: 'Academic section name.'
        }
      ]
    },
    {
      sectionNumber: 4,
      title: 'Section 4: University Lecture on Cognitive Neurolinguistics',
      speakerContext: 'Academic lecture on neural plasticity and syntax processing in bilingual brains.',
      transcriptText: `LECTURER: In today's cognitive neurolinguistics seminar, we will examine the neurobiological mechanisms underpinning bilingual language switching.
For decades, classical localization models posited that distinct languages occupied separate anatomical regions in Broca's area. However, contemporary functional magnetic resonance imaging (fMRI) reveals that multiple languages utilize shared neural substrates, moderated primarily by the prefrontal executive control network.
When a bilingual individual communicates, both lexical systems remain perpetually active in a state of simultaneous competition. The basal ganglia and anterior cingulate cortex act as neural gatekeepers, selectively inhibiting non-target lexical items while facilitating target speech.
Crucially, this continuous cognitive demand produces profound structural adaptations. Long-term neuroimaging studies demonstrate an increase in gray matter volume in the left inferior parietal lobule. Furthermore, bilingual older adults exhibit substantial cognitive reserve, delaying the symptomatic onset of neurodegenerative conditions such as Alzheimer's by an average of four to five years.`,
      questions: [
        {
          id: 16,
          section: 4,
          type: 'fill' as const,
          prompt: 'Language switching is moderated by the [ 16 ] executive control network.',
          correctAnswer: 'prefrontal',
          acceptableAnswers: ['prefrontal', 'Prefrontal'],
          explanation: 'Moderated primarily by the prefrontal executive control network.',
          audioTimestamp: '08:15',
          distractorTrap: 'Anatomical cortical region.'
        },
        {
          id: 17,
          section: 4,
          type: 'fill' as const,
          prompt: 'Non-target lexical items are suppressed through neural [ 17 ] by the basal ganglia.',
          correctAnswer: 'inhibition',
          acceptableAnswers: ['inhibition', 'inhibiting'],
          explanation: 'Selectively inhibiting non-target lexical items.',
          audioTimestamp: '08:50',
          distractorTrap: 'Nominal form of inhibit.'
        },
        {
          id: 18,
          section: 4,
          type: 'fill' as const,
          prompt: 'Increased [ 18 ] matter density is observed in the left inferior parietal lobule.',
          correctAnswer: 'gray',
          acceptableAnswers: ['gray', 'grey'],
          explanation: 'Demonstrate an increase in gray matter volume.',
          audioTimestamp: '09:20',
          distractorTrap: 'Gray matter vs white matter.'
        },
        {
          id: 19,
          section: 4,
          type: 'fill' as const,
          prompt: 'Bilingualism delays the onset of cognitive symptoms by [ 19 ] to five years.',
          correctAnswer: 'four',
          acceptableAnswers: ['4', 'four'],
          explanation: 'Delaying onset by an average of four to five years.',
          audioTimestamp: '09:50',
          distractorTrap: 'Range numbers: 4 to 5.'
        },
        {
          id: 20,
          section: 4,
          type: 'fill' as const,
          prompt: 'The protective buffer against degeneration is termed cognitive [ 20 ].',
          correctAnswer: 'reserve',
          acceptableAnswers: ['reserve', 'Reserve'],
          explanation: 'Bilingual older adults exhibit substantial cognitive reserve.',
          audioTimestamp: '10:10',
          distractorTrap: 'Scientific term for brain buffer.'
        }
      ]
    }
  ]
};

export const IeltsListeningExamEngine: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(1);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number>(0);
  const [showTranscript, setShowTranscript] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const synthRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Timer simulation
  useEffect(() => {
    let timer: any;
    if (isPlaying && !submitted) {
      timer = setInterval(() => {
        setElapsedTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, submitted]);

  const handleAnswerChange = (qId: number, val: string) => {
    setUserAnswers(prev => ({ ...prev, [qId]: val }));
  };

  // Web Speech synthesis for multi-accent audio simulation
  const handlePlayAudio = () => {
    if ('speechSynthesis' in window) {
      if (isPlaying) {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
        return;
      }

      window.speechSynthesis.cancel();
      const currentSecData = LISTENING_TEST_DATA.sections.find(s => s.sectionNumber === activeSection);
      if (currentSecData) {
        const utter = new SpeechSynthesisUtterance(currentSecData.transcriptText);
        utter.rate = playbackSpeed;
        
        // Select British/English voice if available
        const voices = window.speechSynthesis.getVoices();
        const ukVoice = voices.find(v => v.lang.includes('en-GB') || v.lang.includes('en-AU') || v.lang.includes('en-US'));
        if (ukVoice) utter.voice = ukVoice;

        utter.onend = () => setIsPlaying(false);
        utter.onerror = () => setIsPlaying(false);

        synthRef.current = utter;
        window.speechSynthesis.speak(utter);
        setIsPlaying(true);
      }
    }
  };

  const handleSpeedChange = (speed: number) => {
    setPlaybackSpeed(speed);
    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    }
  };

  const handleSubmitTest = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);

    let correctCount = 0;
    const allQuestions = LISTENING_TEST_DATA.sections.flatMap(s => s.questions);
    allQuestions.forEach(q => {
      const ans = (userAnswers[q.id] || '').trim().toLowerCase();
      const acceptable = [q.correctAnswer.toLowerCase(), ...(q.acceptableAnswers?.map(a => a.toLowerCase()) || [])];
      if (acceptable.includes(ans)) {
        correctCount += 1;
      }
    });

    const band = calculateBand(correctCount, allQuestions.length);
    setScore(correctCount);
    setSubmitted(true);
    setShowTranscript(true);

    // Synchronize score to unified member dashboard & telemetry
    recordIeltsTestResult({
      type: 'listening',
      title: 'Cambridge Academic Simulation 1 (Full 4-Section Listening)',
      rawScore: correctCount,
      maxScore: allQuestions.length,
      bandScore: band,
      percentage: Math.round((correctCount / allQuestions.length) * 100),
      details: {
        playbackSpeed,
        elapsedTimeSeconds: elapsedTime
      }
    });

    confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
  };

  const calculateBand = (raw: number, total: number = 20) => {
    const percentage = (raw / total) * 40; // Scale to /40
    if (percentage >= 39) return 9.0;
    if (percentage >= 37) return 8.5;
    if (percentage >= 35) return 8.0;
    if (percentage >= 32) return 7.5;
    if (percentage >= 30) return 7.0;
    if (percentage >= 26) return 6.5;
    if (percentage >= 23) return 6.0;
    return 5.5;
  };

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const currentSectionData = LISTENING_TEST_DATA.sections.find(s => s.sectionNumber === activeSection) || LISTENING_TEST_DATA.sections[0];

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      
      {/* HEADER SECTION */}
      <div className="p-6 sm:p-8 bg-gradient-to-br from-teal-950 via-slate-900 to-teal-900 text-white rounded-3xl shadow-xl relative overflow-hidden space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Volume2 className="w-3.5 h-3.5" /> Full 4-Section Listening Exam
            </span>
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold">
              Variable Speed: 1.0x - 1.25x
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-teal-200 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
            <Clock className="w-3.5 h-3.5 text-amber-300" /> Exam Time: {formatTime(elapsedTime)}
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            {LISTENING_TEST_DATA.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            Practice with authentic 4-section Cambridge acoustic pacing. Use 1.15x or 1.25x speed to sharpen reflex comprehension and overcome Section 3/4 multi-speaker distractor traps.
          </p>
        </div>
      </div>

      {/* AUDIO CONTROLLER BAR */}
      <div className="p-5 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <button
            onClick={handlePlayAudio}
            className={`px-5 py-3 rounded-2xl font-bold text-xs transition flex items-center gap-2 cursor-pointer shadow-sm ${
              isPlaying 
                ? 'bg-rose-600 hover:bg-rose-700 text-white animate-pulse' 
                : 'bg-teal-900 hover:bg-teal-800 text-white'
            }`}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-teal-300" />}
            <span>{isPlaying ? 'Pause Section Audio' : `Play Section ${activeSection} Audio`}</span>
          </button>

          <div className="text-xs font-semibold text-slate-600 hidden sm:block">
            {currentSectionData.title}
          </div>
        </div>

        {/* Playback Speed Toggles */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-500 flex items-center gap-1">
            <FastForward className="w-3.5 h-3.5 text-teal-800" /> Speed:
          </span>
          {[1.0, 1.15, 1.25].map(speed => (
            <button
              key={speed}
              onClick={() => handleSpeedChange(speed)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                playbackSpeed === speed 
                  ? 'bg-teal-900 text-white shadow-xs' 
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {speed}x {speed === 1.25 ? '⚡' : ''}
            </button>
          ))}
        </div>

      </div>

      {/* SECTION NAVIGATION TABS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {LISTENING_TEST_DATA.sections.map(sec => (
          <button
            key={sec.sectionNumber}
            onClick={() => {
              if (isPlaying) {
                window.speechSynthesis.cancel();
                setIsPlaying(false);
              }
              setActiveSection(sec.sectionNumber);
            }}
            className={`p-3 rounded-2xl border-2 text-left transition cursor-pointer space-y-1 ${
              activeSection === sec.sectionNumber 
                ? 'border-teal-700 bg-teal-50 text-teal-950 shadow-sm' 
                : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
            }`}
          >
            <div className="text-[10px] font-bold uppercase tracking-wider text-teal-800">
              Section {sec.sectionNumber}
            </div>
            <div className="text-xs font-bold truncate">{sec.title.split(':')[1] || sec.title}</div>
          </button>
        ))}
      </div>

      {/* QUESTIONS PANEL */}
      <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-6">
        
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div>
            <h3 className="text-base font-black text-slate-900">{currentSectionData.title}</h3>
            <p className="text-xs text-slate-500 mt-0.5">{currentSectionData.speakerContext}</p>
          </div>
          <span className="text-xs font-mono font-bold bg-teal-50 text-teal-800 px-3 py-1 rounded-full border border-teal-200">
            Questions {currentSectionData.questions[0].id}–{currentSectionData.questions[currentSectionData.questions.length - 1].id}
          </span>
        </div>

        {/* Question Inputs */}
        <div className="space-y-4">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
            Instructions: Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentSectionData.questions.map(q => {
              const currentVal = userAnswers[q.id] || '';
              const isCorrect = (userAnswers[q.id] || '').trim().toLowerCase() === q.correctAnswer.toLowerCase() ||
                                q.acceptableAnswers?.some(a => a.toLowerCase() === (userAnswers[q.id] || '').trim().toLowerCase());

              return (
                <div 
                  key={q.id} 
                  className={`p-4 rounded-2xl border transition space-y-2 ${
                    submitted 
                      ? isCorrect 
                        ? 'bg-emerald-50/60 border-emerald-300' 
                        : 'bg-rose-50/60 border-rose-300' 
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800">Question {q.id}</span>
                    {submitted && (
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                        isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                      }`}>
                        {isCorrect ? <CheckCircle2 className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                        {isCorrect ? 'Correct' : 'Incorrect'}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-700 font-medium">{q.prompt}</p>

                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      disabled={submitted}
                      value={currentVal}
                      onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                      placeholder="Type answer here..."
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-teal-700 focus:border-teal-700 disabled:bg-slate-100"
                    />
                  </div>

                  {submitted && (
                    <div className="text-[11px] space-y-1 pt-1 border-t border-slate-200">
                      <div className="font-bold text-emerald-800">
                        Correct: <span className="font-mono">{q.correctAnswer}</span>
                      </div>
                      <div className="text-slate-600 text-[10px] leading-relaxed">
                        💡 {q.explanation}
                      </div>
                      <div className="text-amber-800 text-[10px] font-medium">
                        ⚠️ Trap: {q.distractorTrap} (Timestamp: {q.audioTimestamp})
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* TEST SUBMIT BAR */}
        {!submitted ? (
          <div className="flex items-center justify-end pt-4 border-t border-slate-200">
            <button
              onClick={handleSubmitTest}
              className="px-6 py-3 bg-teal-900 hover:bg-teal-800 text-white rounded-2xl font-bold text-xs transition flex items-center gap-2 shadow-md cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4 text-teal-300" />
              <span>Submit & Grade Listening Exam</span>
            </button>
          </div>
        ) : (
          <div className="p-6 bg-slate-900 text-white rounded-2xl space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300">
                  Official Score Output
                </span>
                <h4 className="text-xl font-black text-white">
                  Exam Result: {score} / 20 Correct (Scaled /40: {score * 2}/40)
                </h4>
              </div>
              <div className="px-5 py-2.5 bg-amber-400 text-slate-950 font-black rounded-2xl text-xl">
                Band {calculateBand(score, 20)}
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-800">
              <button
                onClick={() => setShowTranscript(!showTranscript)}
                className="text-xs font-bold text-teal-300 hover:text-teal-200 flex items-center gap-1.5 cursor-pointer"
              >
                {showTranscript ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                <span>{showTranscript ? 'Hide Synced Transcript' : 'View Full Synced Transcript & Distractors'}</span>
              </button>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setUserAnswers({});
                  setScore(0);
                  setShowTranscript(false);
                  setElapsedTime(0);
                }}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Retake Test
              </button>
            </div>
          </div>
        )}

      </div>

      {/* SYNCHRONIZED TRANSCRIPT VIEWER (UNLOCKED AFTER TEST) */}
      {submitted && showTranscript && (
        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-4 animate-in fade-in duration-300">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <FileText className="w-4 h-4 text-teal-800" /> Section {activeSection} Synchronized Transcript & Distractor Cues
            </div>
            <span className="text-xs text-slate-500 font-mono">Audio Script Verified</span>
          </div>

          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 font-mono text-xs text-slate-800 whitespace-pre-line leading-relaxed">
            {currentSectionData.transcriptText}
          </div>
        </div>
      )}

      {/* RECOMMENDED 10MS PREPARATION ENGINES */}
      <div className="p-6 bg-gradient-to-r from-teal-950 via-slate-900 to-teal-900 text-white rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-teal-800/40">
        <div className="space-y-1.5 text-center md:text-left">
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
            Official Recommended Resources
          </span>
          <h4 className="text-base sm:text-lg font-black text-white">
            Need Full-Length Cambridge Mock Exams with Live Feedback?
          </h4>
          <p className="text-xs text-slate-300 max-w-xl">
            Level up your Listening & Reading speed with full-length computer-delivered mock tests and live interactive coaching.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
          <a
            href="https://10ms.io/eKLSMe"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl font-black text-xs transition flex items-center gap-1.5 shadow-md"
          >
            <span>📝 10MS Mock Tests</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://10ms.io/hKLSB8"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-teal-800 hover:bg-teal-700 text-white rounded-xl font-bold text-xs transition flex items-center gap-1.5 border border-teal-600"
          >
            <span>🔥 IELTS LIVE Batch</span>
            <ArrowRight className="w-3.5 h-3.5 text-teal-300" />
          </a>
        </div>
      </div>

    </div>
  );
};
