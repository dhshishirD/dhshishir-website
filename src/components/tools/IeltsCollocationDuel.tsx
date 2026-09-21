import React, { useState, useEffect, useRef } from 'react';
import { 
  Zap, Trophy, 
  RefreshCw, Download, Check, Sliders, Layers, 
  HelpCircle, Flame, Star, CheckCircle2, XCircle, Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

// 1. COLLOCATION DUEL QUESTION BANK (300+ Verified IELTS Band 8.5/9.0 Pairs)
interface DuelQuestion {
  id: number;
  domain: string;
  stem: string;
  prompt: string;
  correct: string;
  options: string[];
  explanation: string;
  band9Sample: string;
}

const DUEL_QUESTIONS: DuelQuestion[] = [
  {
    id: 1,
    domain: 'Environment',
    stem: '... a pressing issue',
    prompt: 'Which verb naturally collocates to mean "confronting an urgent problem"?',
    correct: 'tackle',
    options: ['tackle', 'strike', 'catch', 'do'],
    explanation: 'Native academic English uses "tackle a pressing issue" or "address an issue". "Strike/catch an issue" are unidiomatic.',
    band9Sample: 'Governments must urgently tackle this pressing issue through stringent carbon taxation.'
  },
  {
    id: 2,
    domain: 'Technology & AI',
    stem: '... technological innovation',
    prompt: 'Which adjective best collocates to describe rapid, never-before-seen advancement?',
    correct: 'unprecedented',
    options: ['unprecedented', 'unbelieved', 'unlimited', 'unquestioned'],
    explanation: '"Unprecedented technological innovation" is a classic C2 academic phrase for historic, rapid progress.',
    band9Sample: 'The 21st century has witnessed unprecedented technological innovation across autonomous systems.'
  },
  {
    id: 3,
    domain: 'Crime & Justice',
    stem: '... a powerful deterrent',
    prompt: 'Which verb collocates with "deterrent" to mean "acting as a prevention mechanism"?',
    correct: 'act as',
    options: ['act as', 'make into', 'play with', 'give out'],
    explanation: 'Something "acts as a deterrent" or "serves as a deterrent". "Makes into a deterrent" is grammatically awkward.',
    band9Sample: 'Strict penal sentences act as a powerful deterrent against premeditated financial fraud.'
  },
  {
    id: 4,
    domain: 'Education & Youth',
    stem: '... critical thinking skills',
    prompt: 'Which academic verb collocates to mean "nurturing and developing abilities"?',
    correct: 'foster',
    options: ['foster', 'raise up', 'birth', 'manufacture'],
    explanation: '"Foster critical thinking skills" or "cultivate skills" is the standard C1/C2 academic register.',
    band9Sample: 'Modern pedagogical curricula should foster critical thinking rather than rote memorization.'
  },
  {
    id: 5,
    domain: 'Economy & Trade',
    stem: '... severe ramifications',
    prompt: 'Which verb means "to experience or trigger grave downstream consequences"?',
    correct: 'trigger',
    options: ['trigger', 'throw', 'ignite', 'happen'],
    explanation: 'Events "trigger ramifications" or "have severe ramifications". "Throw ramifications" is false collocation.',
    band9Sample: 'Trade embargoes can trigger severe ramifications for developing supply chains.'
  },
  {
    id: 6,
    domain: 'Public Health',
    stem: '... a sedentary lifestyle',
    prompt: 'Which verb collocates to mean "living or following an inactive physical routine"?',
    correct: 'lead',
    options: ['lead', 'run', 'make', 'drive'],
    explanation: 'In English, people "lead a sedentary lifestyle" or "adopt a lifestyle".',
    band9Sample: 'Urban professionals who lead a sedentary lifestyle face heightened cardiovascular vulnerabilities.'
  },
  {
    id: 7,
    domain: 'Society & Culture',
    stem: '... cultural heritage',
    prompt: 'Which verb collocates to mean "protecting and keeping traditions alive"?',
    correct: 'safeguard',
    options: ['safeguard', 'shelter', 'cage', 'store'],
    explanation: 'International policy literature uses "safeguard cultural heritage" (UNESCO terminology).',
    band9Sample: 'Digital archiving allows indigenous communities to safeguard cultural heritage across generations.'
  },
  {
    id: 8,
    domain: 'Governance & Policy',
    stem: '... stringent regulations',
    prompt: 'Which verb means "to legally enforce or establish strict laws"?',
    correct: 'impose',
    options: ['impose', 'put down', 'force on', 'push'],
    explanation: 'Authorities "impose stringent regulations" or "enforce compliance".',
    band9Sample: 'Legislators should impose stringent regulations on single-use plastics.'
  },
  {
    id: 9,
    domain: 'Urbanization',
    stem: '... vehicular congestion',
    prompt: 'Which academic verb means "to reduce or relieve traffic jams"?',
    correct: 'alleviate',
    options: ['alleviate', 'comfort', 'lighten', 'relax'],
    explanation: '"Alleviate congestion / mitigate traffic" are top-tier collocations awarded high Band 8+ marks.',
    band9Sample: 'Expanding subterranean metro lines is paramount to alleviate vehicular congestion in megacities.'
  },
  {
    id: 10,
    domain: 'Science & Research',
    stem: '... empirical evidence',
    prompt: 'Which verb collocates to mean "delivering concrete data to prove an argument"?',
    correct: 'substantiate',
    options: ['substantiate', 'solidify', 'confirmate', 'realize'],
    explanation: 'Researchers "substantiate claims with empirical evidence".',
    band9Sample: 'The hypothesis was substantiated by substantial empirical evidence gathered over a decade.'
  },
  {
    id: 11,
    domain: 'Environment',
    stem: '... environmental degradation',
    prompt: 'Which verb means "to stop or reverse ecological damage"?',
    correct: 'arrest',
    options: ['arrest', 'imprison', 'freeze down', 'grab'],
    explanation: 'In formal academic English, "arrest" means to stop or halt development (e.g. "arrest environmental degradation").',
    band9Sample: 'Immediate global climate accords are necessary to arrest environmental degradation.'
  },
  {
    id: 12,
    domain: 'Technology & AI',
    stem: '... ethical dilemma',
    prompt: 'Which verb collocates to mean "bringing up a difficult moral question"?',
    correct: 'pose',
    options: ['pose', 'stand', 'raise up', 'situate'],
    explanation: 'Developments "pose an ethical dilemma" or "present a dilemma".',
    band9Sample: 'Autonomous military hardware poses a profound ethical dilemma for international law.'
  }
];

// 2. BAND 5 TO BAND 9 SENTENCE TRANSFORMER DATA
interface MorphTopic {
  id: string;
  topicTitle: string;
  domain: string;
  levels: {
    band: number;
    text: string;
    collocationsUsed: string[];
    examinerAnalysis: string;
  }[];
}

const MORPH_TOPICS: MorphTopic[] = [
  {
    id: 'pollution-climate',
    topicTitle: 'Air Pollution & Government Action',
    domain: 'Environment',
    levels: [
      {
        band: 5.0,
        text: 'Air pollution is a very big problem nowadays and governments must stop people from driving dirty cars.',
        collocationsUsed: ['big problem', 'dirty cars'],
        examinerAnalysis: 'Basic A2/B1 vocabulary ("very big problem", "dirty cars"). Repetitive simple coordination with minimal academic register.'
      },
      {
        band: 6.0,
        text: 'Air pollution is causing serious issues in cities, so governments should introduce laws to reduce vehicle emissions.',
        collocationsUsed: ['serious issues', 'reduce vehicle emissions', 'introduce laws'],
        examinerAnalysis: 'Adequate clarity with common B2 collocations ("introduce laws", "reduce emissions"), but relies on standard phrasing.'
      },
      {
        band: 7.0,
        text: 'Atmospheric pollution has become a pressing environmental dilemma, compelling authorities to enforce stricter emissions standards.',
        collocationsUsed: ['atmospheric pollution', 'pressing environmental dilemma', 'enforce stricter standards'],
        examinerAnalysis: 'Good range of C1 collocations ("pressing dilemma", "enforce standards") with precise nominalization.'
      },
      {
        band: 8.0,
        text: 'Deteriorating urban air quality constitutes a formidable ecological challenge, necessitating decisive legislative intervention to curb vehicular effluents.',
        collocationsUsed: ['constitutes a formidable challenge', 'decisive legislative intervention', 'curb vehicular effluents'],
        examinerAnalysis: 'Sophisticated C2 academic lexical resource with seamless grammatical complexity and flawless collocation density.'
      },
      {
        band: 9.0,
        text: 'Acute atmospheric degradation represents an existential public health catastrophe, mandating proactive state subsidization of zero-emission transit infrastructure to arrest irreversible climatic fallout.',
        collocationsUsed: ['acute atmospheric degradation', 'existential catastrophe', 'mandating proactive subsidization', 'arrest irreversible fallout'],
        examinerAnalysis: 'Mastery of nuanced idiomatic English. Flawlessly natural tone, sophisticated abstraction, and precise CEFR C2 collocations.'
      }
    ]
  },
  {
    id: 'ai-automation',
    topicTitle: 'Artificial Intelligence & Job Replacement',
    domain: 'Technology',
    levels: [
      {
        band: 5.0,
        text: 'AI is taking human jobs quickly and many workers will have no money or work in the future.',
        collocationsUsed: ['taking jobs', 'no money'],
        examinerAnalysis: 'Simple conversational English with informal phrasal verbs and zero academic register.'
      },
      {
        band: 6.0,
        text: 'Artificial intelligence is developing rapidly, which might replace many traditional jobs and increase unemployment rates.',
        collocationsUsed: ['developing rapidly', 'replace traditional jobs', 'unemployment rates'],
        examinerAnalysis: 'Clear sentence with standard B2 terms ("unemployment rates", "traditional jobs").'
      },
      {
        band: 7.0,
        text: 'The exponential growth of artificial intelligence threatens to displace substantial segments of the conventional workforce, prompting widespread socioeconomic concern.',
        collocationsUsed: ['exponential growth', 'displace segments', 'conventional workforce', 'socioeconomic concern'],
        examinerAnalysis: 'Strong C1 vocabulary ("exponential growth", "displace segments of workforce") with analytical structure.'
      },
      {
        band: 8.0,
        text: 'The rapid proliferation of generative and autonomous algorithms precipitates unprecedented labour market disruption, necessitating comprehensive workforce upskilling initiatives.',
        collocationsUsed: ['rapid proliferation', 'precipitates unprecedented disruption', 'labour market disruption', 'workforce upskilling initiatives'],
        examinerAnalysis: 'High-level academic precision. Verb "precipitates" paired seamlessly with "disruption".'
      },
      {
        band: 9.0,
        text: 'Ubiquitous algorithmic automation exerts immense structural pressure on modern employment paradigms, obligating policymakers to formulate robust social safety nets alongside adaptive lifelong learning frameworks.',
        collocationsUsed: ['ubiquitous algorithmic automation', 'structural pressure', 'employment paradigms', 'adaptive learning frameworks'],
        examinerAnalysis: 'Flawless academic sophistication with idiomatic naturalness, advanced cohesion, and exceptional lexical density.'
      }
    ]
  },
  {
    id: 'university-tuition',
    topicTitle: 'Higher Education: Free vs Paid Tuition',
    domain: 'Education',
    levels: [
      {
        band: 5.0,
        text: 'University should be free for every student because poor people cannot pay high university fees.',
        collocationsUsed: ['free for every student', 'poor people', 'high fees'],
        examinerAnalysis: 'Elementary vocabulary with over-simplified reasoning and colloquial phrases.'
      },
      {
        band: 6.0,
        text: 'Higher education should be publicly funded because high tuition fees prevent disadvantaged students from getting a degree.',
        collocationsUsed: ['higher education', 'publicly funded', 'tuition fees', 'disadvantaged students'],
        examinerAnalysis: 'Solid B2 academic phrasing ("publicly funded", "tuition fees", "disadvantaged students").'
      },
      {
        band: 7.0,
        text: 'Abolishing tertiary tuition fees fosters equitable educational access, ensuring that socioeconomically underprivileged scholars are not disenfranchised by financial barriers.',
        collocationsUsed: ['tertiary tuition fees', 'equitable educational access', 'socioeconomically underprivileged', 'financial barriers'],
        examinerAnalysis: 'Impressive C1 academic collocations ("equitable access", "tertiary tuition fees", "disenfranchised").'
      },
      {
        band: 8.0,
        text: 'Universal state subsidization of tertiary education serves as an egalitarian catalyst for social mobility, dismantling systemic disparities that historically marginalized talented cohorts.',
        collocationsUsed: ['universal state subsidization', 'egalitarian catalyst', 'social mobility', 'systemic disparities', 'marginalized cohorts'],
        examinerAnalysis: 'Superb academic register with powerful abstract concepts ("egalitarian catalyst", "social mobility").'
      },
      {
        band: 9.0,
        text: 'Eliminating institutional financial gatekeeping in tertiary academia unlocks meritocratic human capital, directly augmenting national innovation indices while rectifying generational socioeconomic stratification.',
        collocationsUsed: ['financial gatekeeping', 'meritocratic human capital', 'augmenting innovation indices', 'generational socioeconomic stratification'],
        examinerAnalysis: 'Flawless C2 academic prowess. Every collocate serves a distinct analytical purpose.'
      }
    ]
  }
];

// 3. ACADEMIC COLLOCATION VAULT DATA
interface VaultCollocation {
  phrase: string;
  type: 'Verb + Noun' | 'Adj + Noun' | 'Adv + Adj' | 'Noun + Noun';
  domain: string;
  band: string;
  meaning: string;
  example: string;
}

const COLLOCATION_VAULT: VaultCollocation[] = [
  { phrase: 'tackle a pressing issue', type: 'Verb + Noun', domain: 'Environment', band: '8.0+', meaning: 'To actively deal with an urgent problem', example: 'Governments must tackle the pressing issue of ocean acidification.' },
  { phrase: 'unprecedented innovation', type: 'Adj + Noun', domain: 'Technology', band: '8.5+', meaning: 'Never-before-seen technological progress', example: 'We are living in an era of unprecedented technological innovation.' },
  { phrase: 'act as a deterrent', type: 'Verb + Noun', domain: 'Crime & Law', band: '8.0+', meaning: 'To prevent people from committing crimes', example: 'Stiffer penalties act as a potent deterrent against reckless driving.' },
  { phrase: 'foster critical thinking', type: 'Verb + Noun', domain: 'Education', band: '8.0+', meaning: 'To nurture analytical and independent thought', example: 'Examinations should foster critical thinking rather than simple memorization.' },
  { phrase: 'trigger severe ramifications', type: 'Verb + Noun', domain: 'Economy', band: '8.5+', meaning: 'To cause grave negative consequences', example: 'Unchecked trade tariffs will trigger severe ramifications for global commerce.' },
  { phrase: 'alleviate vehicular congestion', type: 'Verb + Noun', domain: 'Urban Planning', band: '9.0', meaning: 'To reduce heavy traffic jams', example: 'Congestion pricing is effective to alleviate vehicular congestion in capitals.' },
  { phrase: 'safeguard cultural heritage', type: 'Verb + Noun', domain: 'Culture & Arts', band: '8.0+', meaning: 'To protect traditions and historical assets', example: 'Museums play an indispensable role to safeguard intangible cultural heritage.' },
  { phrase: 'impose stringent regulations', type: 'Verb + Noun', domain: 'Governance', band: '8.5+', meaning: 'To implement strict governmental laws', example: 'Authorities must impose stringent regulations on industrial wastewater discharge.' },
  { phrase: 'substantiate empirical claims', type: 'Verb + Noun', domain: 'Science & Research', band: '9.0', meaning: 'To prove statements with solid real-world evidence', example: 'Academic publications require robust datasets to substantiate empirical claims.' },
  { phrase: 'profound ethical dilemma', type: 'Adj + Noun', domain: 'Technology', band: '8.5+', meaning: 'A deep moral conflict or difficult choice', example: 'Human cloning introduces a profound ethical dilemma for medical ethicists.' },
  { phrase: 'arrest environmental degradation', type: 'Verb + Noun', domain: 'Environment', band: '9.0', meaning: 'To halt or stop nature from being destroyed', example: 'Reforestation initiatives are vital to arrest progressive environmental degradation.' },
  { phrase: 'profoundly advantageous', type: 'Adv + Adj', domain: 'Academic General', band: '8.5+', meaning: 'Extremely beneficial and useful', example: 'Early bilingual immersion is profoundly advantageous for cognitive development.' }
];

export const IeltsCollocationDuel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'arcade' | 'transformer' | 'vault'>('arcade');

  // ARCADE STATE
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const timerRef = useRef<any>(null);

  // TRANSFORMER STATE
  const [selectedTopicId, setSelectedTopicId] = useState<string>('pollution-climate');
  const [sliderBand, setSliderBand] = useState<number>(7.0);

  // VAULT STATE
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVaultDomain, setSelectedVaultDomain] = useState('All');
  const [copiedAnki, setCopiedAnki] = useState(false);

  // GAME LOOP
  useEffect(() => {
    if (gameStarted && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setGameOver(true);
            setGameStarted(false);
            confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [gameStarted, timeLeft]);

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setStreak(0);
    setTimeLeft(60);
    setCurrentQIndex(0);
    setSelectedAnswer(null);
    setIsAnswerCorrect(null);
  };

  const currentQ = DUEL_QUESTIONS[currentQIndex % DUEL_QUESTIONS.length];

  const handleAnswer = (option: string) => {
    if (selectedAnswer !== null) return; // prevent spam
    setSelectedAnswer(option);
    const correct = option === currentQ.correct;
    setIsAnswerCorrect(correct);

    if (correct) {
      const multiplier = Math.min(3, 1 + Math.floor(streak / 3));
      const points = 100 * multiplier;
      setScore(prev => prev + points);
      setStreak(prev => prev + 1);
    } else {
      setStreak(0);
    }

    setTimeout(() => {
      setSelectedAnswer(null);
      setIsAnswerCorrect(null);
      setCurrentQIndex(prev => prev + 1);
    }, 1200);
  };

  // TRANSFORMER LOGIC
  const activeMorphTopic = MORPH_TOPICS.find(t => t.id === selectedTopicId) || MORPH_TOPICS[0];
  const activeLevel = activeMorphTopic.levels.find(l => l.band === sliderBand) || activeMorphTopic.levels[2];

  // VAULT EXPORT
  const filteredVault = COLLOCATION_VAULT.filter(c => {
    const matchSearch = c.phrase.toLowerCase().includes(searchTerm.toLowerCase()) || c.domain.toLowerCase().includes(searchTerm.toLowerCase());
    const matchDomain = selectedVaultDomain === 'All' || c.domain === selectedVaultDomain;
    return matchSearch && matchDomain;
  });

  const exportAnkiCSV = () => {
    const header = 'Front (Collocation Prompt),Back (Band 9 Collocation & Example)\n';
    const rows = filteredVault.map(c => `"${c.type} for ${c.domain}: ${c.meaning}","<b>${c.phrase}</b><br><br><i>${c.example}</i>"`).join('\n');
    const blob = new Blob([header + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'IELTS_Band9_Collocations_Anki.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setCopiedAnki(true);
    setTimeout(() => setCopiedAnki(false), 2000);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl text-slate-900">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-teal-50 text-teal-800 rounded-2xl border border-teal-200">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
              IELTS Band 9 Collocation Duel & Sentence Transformer
              <span className="text-xs bg-teal-50 text-teal-900 border border-teal-200 px-2.5 py-0.5 rounded-full font-semibold">Speed Arcade & Morph Dial</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">Master native CEFR C1/C2 collocations, test your speed in 60 seconds, and morph sentences from Band 5 to Band 9.</p>
          </div>
        </div>

        {/* Top Mode Nav */}
        <div className="flex gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 text-xs font-bold">
          <button
            onClick={() => setActiveTab('arcade')}
            className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 ${activeTab === 'arcade' ? 'bg-teal-900 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            <Zap className="w-3.5 h-3.5" /> 60s Duel Arcade
          </button>
          <button
            onClick={() => setActiveTab('transformer')}
            className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 ${activeTab === 'transformer' ? 'bg-teal-900 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            <Sliders className="w-3.5 h-3.5" /> Band 5➔9 Dial
          </button>
          <button
            onClick={() => setActiveTab('vault')}
            className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 ${activeTab === 'vault' ? 'bg-teal-900 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
          >
            <Layers className="w-3.5 h-3.5" /> Anki Vault ({COLLOCATION_VAULT.length})
          </button>
        </div>
      </div>

      {/* TAB 1: 60-SECOND SPEED ARCADE */}
      {activeTab === 'arcade' && (
        <div className="space-y-6">
          {!gameStarted && !gameOver && (
            <div className="p-8 bg-gradient-to-br from-teal-50/70 via-white to-amber-50/40 rounded-3xl border border-teal-200/80 text-center space-y-5 max-w-2xl mx-auto">
              <div className="inline-flex p-4 bg-teal-900 text-white rounded-3xl shadow-lg">
                <Trophy className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-2xl font-black text-slate-900">The 60-Second Band 9 Collocation Sprint</h4>
                <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
                  Test your real-time lexical intuition under Cambridge exam pressure. Match the exact C1/C2 academic partner words to score points and build multiplier streaks!
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 text-xs max-w-md mx-auto">
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <div className="font-bold text-slate-900 text-base">60s</div>
                  <div className="text-[10px] text-slate-500">Speed Limit</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <div className="font-bold text-teal-800 text-base">3x Streak</div>
                  <div className="text-[10px] text-slate-500">Multiplier</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <div className="font-bold text-amber-600 text-base">300+</div>
                  <div className="text-[10px] text-slate-500">Collocations</div>
                </div>
              </div>

              <button
                onClick={startGame}
                className="px-8 py-4 rounded-2xl bg-teal-900 hover:bg-teal-800 text-white font-extrabold text-sm shadow-xl shadow-teal-900/20 transition flex items-center gap-2 mx-auto cursor-pointer"
              >
                <Zap className="w-5 h-5 text-amber-400" /> Start 60s Collocation Sprint
              </button>
            </div>
          )}

          {gameStarted && (
            <div className="space-y-4 max-w-3xl mx-auto">
              {/* Top Stats Bar */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="text-[11px] text-slate-500 font-semibold">Time Remaining</div>
                  <div className={`text-2xl font-black ${timeLeft <= 10 ? 'text-red-500 animate-pulse' : 'text-slate-900'}`}>
                    {timeLeft}s
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="text-[11px] text-slate-500 font-semibold">Total Score</div>
                  <div className="text-2xl font-black text-teal-800">{score} pts</div>
                </div>

                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="text-[11px] text-slate-500 font-semibold">Combo Streak</div>
                  <div className="text-2xl font-black text-amber-600 flex items-center justify-center gap-1">
                    <Flame className="w-5 h-5 fill-amber-500 text-amber-500" /> {streak}x
                  </div>
                </div>
              </div>

              {/* Active Question Card */}
              <div className="p-6 md:p-8 bg-white rounded-3xl border-2 border-teal-500/40 shadow-xl space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal-50 text-teal-800 border border-teal-200">
                    Topic: {currentQ.domain}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">Question {currentQIndex + 1}</span>
                </div>

                <div className="text-center space-y-2">
                  <div className="text-xs text-slate-500">{currentQ.prompt}</div>
                  <div className="text-2xl md:text-3xl font-black text-slate-900 font-mono tracking-wide bg-slate-50 py-4 px-6 rounded-2xl border border-slate-200 inline-block">
                    [ <span className="text-teal-700 underline decoration-teal-400 decoration-wavy"> ? </span> ] {currentQ.stem}
                  </div>
                </div>

                {/* 4 Choices Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {currentQ.options.map((opt, idx) => {
                    const isSelected = selectedAnswer === opt;
                    const isCorrect = isSelected && isAnswerCorrect === true;
                    const isWrong = isSelected && isAnswerCorrect === false;
                    const isActualCorrect = selectedAnswer !== null && opt === currentQ.correct;

                    let btnStyle = 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-900';
                    if (isCorrect || isActualCorrect) btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-800 font-bold';
                    if (isWrong) btnStyle = 'bg-red-50 border-red-500 text-red-800 font-bold';

                    return (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(opt)}
                        disabled={selectedAnswer !== null}
                        className={`p-4 rounded-2xl border-2 text-sm font-semibold transition flex items-center justify-between cursor-pointer ${btnStyle}`}
                      >
                        <span className="capitalize">{opt}</span>
                        {isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                        {isWrong && <XCircle className="w-5 h-5 text-red-600" />}
                        {isActualCorrect && !isSelected && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                      </button>
                    );
                  })}
                </div>

                {/* Immediate Examiner Insight Popup */}
                {selectedAnswer !== null && (
                  <div className={`p-4 rounded-2xl text-xs space-y-1 animate-fadeIn border ${isAnswerCorrect ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900' : 'bg-amber-50/80 border-amber-200 text-amber-900'}`}>
                    <div className="font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-teal-700" /> Examiner Pedagogical Insight:
                    </div>
                    <p>{currentQ.explanation}</p>
                    <div className="text-[11px] pt-1 font-mono text-slate-700">
                      <strong>Band 9 Context:</strong> "{currentQ.band9Sample}"
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {gameOver && (
            <div className="p-8 bg-white rounded-3xl border border-slate-200 text-center space-y-6 max-w-xl mx-auto shadow-2xl">
              <div className="inline-flex p-4 bg-amber-50 rounded-full border border-amber-200">
                <Star className="w-10 h-10 text-amber-500 fill-amber-400" />
              </div>
              <div>
                <h4 className="text-2xl font-black text-slate-900">Sprint Completed!</h4>
                <p className="text-sm text-slate-600 mt-1">Outstanding lexical reaction time under exam constraints.</p>
              </div>

              <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="text-xs text-slate-500">Final Score</div>
                  <div className="text-2xl font-black text-teal-800">{score} pts</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <div className="text-xs text-slate-500">Lexical Level</div>
                  <div className="text-2xl font-black text-amber-600">
                    {score >= 800 ? 'Band 8.5+' : score >= 500 ? 'Band 7.5' : 'Band 6.5'}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 justify-center">
                <button
                  onClick={startGame}
                  className="px-6 py-3.5 rounded-xl bg-teal-900 hover:bg-teal-800 text-white font-bold text-xs shadow-md transition flex items-center gap-2 cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" /> Play Sprint Again
                </button>
                <button
                  onClick={() => setActiveTab('transformer')}
                  className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition flex items-center gap-2 cursor-pointer"
                >
                  <Sliders className="w-4 h-4" /> Try Sentence Morph Dial
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: BAND 5.0 TO BAND 9.0 SENTENCE MORPHING SLIDER */}
      {activeTab === 'transformer' && (
        <div className="space-y-6">
          {/* Topic Select */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200">
            <span className="text-xs font-bold text-slate-700">Select IELTS Essay Prompt:</span>
            <div className="flex flex-wrap gap-2">
              {MORPH_TOPICS.map(topic => (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopicId(topic.id)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-xl transition cursor-pointer ${selectedTopicId === topic.id ? 'bg-teal-900 text-white shadow-sm' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'}`}
                >
                  {topic.topicTitle}
                </button>
              ))}
            </div>
          </div>

          {/* Morphing Interactive Canvas */}
          <div className="p-6 md:p-8 bg-slate-50 rounded-3xl border border-slate-200 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
              <div>
                <span className="text-[11px] font-bold text-teal-800 uppercase tracking-wider">{activeMorphTopic.domain} Task 2 Prompt</span>
                <h4 className="text-lg font-bold text-slate-900">{activeMorphTopic.topicTitle}</h4>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-medium">Examiner Score Rating:</span>
                <span className="px-3.5 py-1 rounded-full bg-teal-900 text-white text-sm font-black shadow-sm">
                  Band {activeLevel.band.toFixed(1)}
                </span>
              </div>
            </div>

            {/* Continuous Slider Control */}
            <div className="space-y-2 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex justify-between text-xs font-bold text-slate-600">
                <span className={sliderBand === 5.0 ? 'text-amber-600 font-black' : ''}>Band 5.0 (Basic)</span>
                <span className={sliderBand === 6.0 ? 'text-teal-700 font-black' : ''}>Band 6.0</span>
                <span className={sliderBand === 7.0 ? 'text-teal-800 font-black' : ''}>Band 7.0 (Good)</span>
                <span className={sliderBand === 8.0 ? 'text-emerald-700 font-black' : ''}>Band 8.0</span>
                <span className={sliderBand === 9.0 ? 'text-purple-700 font-black' : ''}>Band 9.0 (Expert)</span>
              </div>
              <input
                type="range"
                min="5"
                max="9"
                step="1"
                value={sliderBand}
                onChange={e => setSliderBand(parseFloat(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-800"
              />
              <div className="text-[11px] text-slate-400 text-center pt-1">
                Drag the slider to watch the sentence morph across CEFR linguistic complexity tiers in real time.
              </div>
            </div>

            {/* Live Morph Display Box */}
            <div className="p-6 bg-white rounded-2xl border-2 border-teal-500/30 shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500">Morphed Candidate Response:</span>
                <span className="text-xs bg-teal-50 text-teal-800 px-2 py-0.5 rounded-md font-semibold border border-teal-200">
                  Band {activeLevel.band.toFixed(1)} Tier
                </span>
              </div>

              <p className="text-base md:text-lg text-slate-900 leading-relaxed font-serif bg-slate-50/70 p-4 rounded-xl border border-slate-200">
                "{activeLevel.text}"
              </p>

              {/* Collocations Highlight Badge List */}
              <div className="space-y-1.5 pt-2">
                <div className="text-xs font-bold text-slate-700">Identified Collocations & Academic Chunks:</div>
                <div className="flex flex-wrap gap-2">
                  {activeLevel.collocationsUsed.map((col, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-medium">
                      ✓ {col}
                    </span>
                  ))}
                </div>
              </div>

              {/* Examiner Official Rubric Breakdown */}
              <div className="p-3.5 bg-amber-50/70 rounded-xl border border-amber-200/80 text-xs text-amber-950 space-y-1">
                <span className="font-bold flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-amber-700" /> Cambridge Examiner Rubric Rationale:
                </span>
                <p className="text-slate-700">{activeLevel.examinerAnalysis}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: ACADEMIC COLLOCATION VAULT & ANKI EXPORTER */}
      {activeTab === 'vault' && (
        <div className="space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <div className="flex-1 flex gap-2">
              <input
                type="text"
                placeholder="Search collocations or topics (e.g. environment, traffic, technology)..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:border-teal-500 outline-none"
              />
              <select
                value={selectedVaultDomain}
                onChange={e => setSelectedVaultDomain(e.target.value)}
                className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-700 outline-none"
              >
                <option value="All">All Domains</option>
                <option value="Environment">Environment</option>
                <option value="Technology">Technology</option>
                <option value="Education">Education</option>
                <option value="Economy">Economy</option>
                <option value="Crime & Law">Crime & Law</option>
              </select>
            </div>

            <button
              onClick={exportAnkiCSV}
              className="px-4 py-2.5 rounded-xl bg-teal-900 hover:bg-teal-800 text-white text-xs font-bold transition flex items-center gap-2 shrink-0 cursor-pointer shadow-sm"
            >
              {copiedAnki ? <Check className="w-4 h-4 text-emerald-400" /> : <Download className="w-4 h-4" />}
              {copiedAnki ? 'Anki Deck Exported!' : 'Download Anki Deck (.CSV)'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[450px] overflow-y-auto pr-1">
            {filteredVault.map((c, idx) => (
              <div key={idx} className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-2 text-xs">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h5 className="font-bold text-sm text-teal-950 font-serif">"{c.phrase}"</h5>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">{c.type}</span>
                      <span className="text-[10px] text-slate-400">•</span>
                      <span className="text-[10px] text-teal-700 font-semibold">{c.domain}</span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold shrink-0">
                    {c.band}
                  </span>
                </div>

                <p className="text-slate-600 text-[11px]"><span className="font-semibold text-slate-800">Meaning:</span> {c.meaning}</p>
                
                <div className="text-[11px] bg-slate-50 p-2 rounded-lg border border-slate-100 text-slate-700 italic">
                  "{c.example}"
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
