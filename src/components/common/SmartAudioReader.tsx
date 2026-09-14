import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Play, 
  Pause, 
  Square, 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  Gauge, 
  Radio,
  ChevronDown
} from 'lucide-react';

export interface AudioSection {
  id: string;
  label: string;
  text: string;
}

interface SmartAudioReaderProps {
  title?: string;
  subtitle?: string;
  sections: AudioSection[];
  initialSectionId?: string;
  theme?: 'light' | 'warm' | 'nordic' | 'dark';
  className?: string;
}

export const SmartAudioReader: React.FC<SmartAudioReaderProps> = ({
  title = 'Executive Audio Dossier Briefing',
  subtitle = 'Native speech synthesis with Oxford & US Diplomatic accents for listening & pronunciation mastery',
  sections,
  initialSectionId,
  theme = 'light',
  className = ''
}) => {
  const [activeSectionId, setActiveSectionId] = useState<string>(
    initialSectionId || (sections[0]?.id ?? 'full')
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1.0);
  const [selectedVoiceUri, setSelectedVoiceUri] = useState<string>('');
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [chunkIndex, setChunkIndex] = useState<number>(0);
  const [totalChunks, setTotalChunks] = useState<number>(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // References to handle speech state smoothly without closure stale references
  const chunksRef = useRef<string[]>([]);
  const chunkIndexRef = useRef<number>(0);
  const isPlayingRef = useRef<boolean>(false);
  const isPausedRef = useRef<boolean>(false);
  const rateRef = useRef<number>(1.0);
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);

  // Synchronize refs
  isPlayingRef.current = isPlaying;
  isPausedRef.current = isPaused;
  rateRef.current = playbackRate;
  chunkIndexRef.current = chunkIndex;

  // Active section data
  const currentSection = useMemo(() => {
    return sections.find(s => s.id === activeSectionId) || sections[0] || { id: 'empty', label: 'Briefing', text: '' };
  }, [sections, activeSectionId]);

  // Load and filter English voices
  useEffect(() => {
    if (!('speechSynthesis' in window)) return;

    const updateVoices = () => {
      const allVoices = window.speechSynthesis.getVoices();
      const englishVoices = allVoices.filter(v => v.lang.startsWith('en') || v.lang.includes('US') || v.lang.includes('GB') || v.lang.includes('AU'));
      setAvailableVoices(englishVoices.length > 0 ? englishVoices : allVoices);

      // Default to best natural or UK/US voice
      if (!selectedVoiceUri && englishVoices.length > 0) {
        const preferred = englishVoices.find(v => 
          v.name.includes('Natural') || 
          v.name.includes('Google') || 
          v.name.includes('UK') || 
          v.name.includes('Great Britain') || 
          v.name.includes('Daniel') || 
          v.name.includes('Oliver') ||
          v.lang === 'en-GB'
        ) || englishVoices[0];
        
        if (preferred) {
          setSelectedVoiceUri(preferred.voiceURI);
          voiceRef.current = preferred;
        }
      }
    };

    updateVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }

    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Set active voice object when uri changes
  useEffect(() => {
    const v = availableVoices.find(item => item.voiceURI === selectedVoiceUri) || null;
    voiceRef.current = v;
  }, [selectedVoiceUri, availableVoices]);

  // Split section text into manageable speech chunks (~100-200 characters or sentences)
  const prepareChunks = (rawText: string): string[] => {
    if (!rawText.trim()) return [];
    
    // Clean markdown hashes, bullet points, asterisks
    const cleaned = rawText
      .replace(/[#*`_~]/g, '')
      .replace(/\n+/g, '. ')
      .replace(/\s+/g, ' ')
      .trim();

    // Split on sentence boundaries
    const sentences = cleaned.match(/[^.!?]+[.!?]+(\s|$)|[^.!?]+$/g) || [cleaned];
    const chunks: string[] = [];

    let current = '';
    for (const s of sentences) {
      const trimmed = s.trim();
      if (!trimmed) continue;

      if ((current + ' ' + trimmed).length > 200) {
        if (current) chunks.push(current.trim());
        current = trimmed;
      } else {
        current = current ? `${current} ${trimmed}` : trimmed;
      }
    }
    if (current) chunks.push(current.trim());
    return chunks.length > 0 ? chunks : [cleaned];
  };

  // Play specific chunk by index
  const speakChunk = (idx: number) => {
    if (!('speechSynthesis' in window)) return;
    if (idx >= chunksRef.current.length || !isPlayingRef.current) {
      setIsPlaying(false);
      setIsPaused(false);
      setChunkIndex(0);
      return;
    }

    setChunkIndex(idx);
    const chunkText = chunksRef.current[idx];

    const utterance = new SpeechSynthesisUtterance(chunkText);
    utterance.rate = rateRef.current;
    utterance.pitch = 1.0;
    utterance.volume = isMuted ? 0 : 1.0;

    if (voiceRef.current) {
      utterance.voice = voiceRef.current;
    } else {
      utterance.lang = 'en-US';
    }

    utterance.onend = () => {
      if (isPlayingRef.current && !isPausedRef.current) {
        speakChunk(idx + 1);
      }
    };

    utterance.onerror = (e) => {
      // Ignore errors caused by user intentional cancel
      if (e.error !== 'canceled' && isPlayingRef.current) {
        speakChunk(idx + 1);
      }
    };

    window.speechSynthesis.speak(utterance);
  };

  const handleStartPlay = () => {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported on this browser.');
      return;
    }

    window.speechSynthesis.cancel();
    const chunks = prepareChunks(currentSection.text);
    chunksRef.current = chunks;
    setTotalChunks(chunks.length);
    setIsPlaying(true);
    setIsPaused(false);
    isPlayingRef.current = true;
    isPausedRef.current = false;

    speakChunk(0);
  };

  const handlePause = () => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.pause();
    setIsPaused(true);
    isPausedRef.current = true;
  };

  const handleResume = () => {
    if (!('speechSynthesis' in window)) return;
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    } else {
      speakChunk(chunkIndexRef.current);
    }
    setIsPaused(false);
    isPausedRef.current = false;
  };

  const handleStop = () => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    isPlayingRef.current = false;
    isPausedRef.current = false;
    setChunkIndex(0);
  };

  const handleRestart = () => {
    handleStop();
    setTimeout(() => {
      handleStartPlay();
    }, 100);
  };

  const handleSectionChange = (sectionId: string) => {
    handleStop();
    setActiveSectionId(sectionId);
  };

  const handleSpeedChange = (newRate: number) => {
    setPlaybackRate(newRate);
    rateRef.current = newRate;
    if (isPlaying && !isPaused) {
      // Re-trigger current chunk at new speed
      window.speechSynthesis.cancel();
      speakChunk(chunkIndexRef.current);
    }
  };

  // Progress percentage
  const progressPercent = totalChunks > 0 ? Math.round(((chunkIndex + 1) / totalChunks) * 100) : 0;

  // Theme styling
  const containerBg = 
    theme === 'warm' ? 'bg-[#fbf7ee] border-[#e6dbc5] text-[#2c2825]' :
    theme === 'nordic' ? 'bg-[#f8fafc] border-slate-200 text-slate-900' :
    theme === 'dark' ? 'bg-slate-900 border-slate-800 text-white' :
    'bg-white border-teal-200 text-slate-900';

  const pillActiveBg = 
    theme === 'dark' ? 'bg-teal-600 text-white' : 'bg-teal-900 text-white shadow-2xs';

  const pillInactiveBg = 
    theme === 'warm' ? 'bg-[#f3ecd9] text-[#4a4238] hover:bg-[#eae1c8] border border-[#ded4bd]' :
    theme === 'dark' ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700' :
    'bg-slate-50 text-slate-700 hover:bg-teal-50 hover:text-teal-900 border border-slate-200';

  return (
    <div className={`p-4 sm:p-6 rounded-3xl border shadow-xs transition-all ${containerBg} ${className}`}>
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-900 shrink-0">
            <Radio className={`w-4 h-4 ${isPlaying && !isPaused ? 'animate-pulse text-teal-700' : 'text-teal-800'}`} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider text-slate-900 font-serif-title">
                {title}
              </span>
              <span className="text-[10px] px-2 py-0.2 rounded-full bg-teal-100 text-teal-900 font-bold border border-teal-200 font-mono">
                Smart Audio
              </span>
            </div>
            <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Quick Voice & Audio Toggle */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="px-2.5 py-1 rounded-xl text-[11px] font-semibold bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 flex items-center gap-1.5 cursor-pointer"
          >
            <Gauge className="w-3.5 h-3.5 text-teal-800" />
            <span>{playbackRate}x</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </button>

          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`p-1.5 rounded-xl border text-xs transition cursor-pointer ${isMuted ? 'bg-rose-50 text-rose-700 border-rose-200' : 'bg-slate-50 text-slate-700 border-slate-200 hover:text-slate-950'}`}
            title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Expandable Voice & Speed Settings */}
      {showSettings && (
        <div className="py-3 px-4 my-3 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-xs">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Speed selection */}
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-slate-600">Narration Speed:</span>
              {[0.85, 1.0, 1.15, 1.25, 1.5].map((rate) => (
                <button
                  key={rate}
                  onClick={() => handleSpeedChange(rate)}
                  className={`px-2 py-0.5 rounded-lg text-[11px] font-bold transition cursor-pointer ${
                    playbackRate === rate
                      ? 'bg-teal-900 text-white shadow-2xs'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {rate}x
                </button>
              ))}
            </div>

            {/* Voice Accent Picker */}
            {availableVoices.length > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-slate-600">English Accent:</span>
                <select
                  value={selectedVoiceUri}
                  onChange={(e) => setSelectedVoiceUri(e.target.value)}
                  className="bg-white border border-slate-200 rounded-lg px-2 py-1 text-[11px] text-slate-900 max-w-[200px] truncate focus:outline-none focus:border-teal-600"
                >
                  {availableVoices.map((v) => (
                    <option key={v.voiceURI} value={v.voiceURI}>
                      {v.name} ({v.lang})
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Section Switcher Pills */}
      {sections.length > 1 && (
        <div className="flex items-center gap-1.5 overflow-x-auto py-3 scrollbar-none">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => handleSectionChange(sec.id)}
              className={`px-3 py-1 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 ${
                activeSectionId === sec.id ? pillActiveBg : pillInactiveBg
              }`}
            >
              <span>{sec.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Audio Player Controller Bar */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Playback Action Buttons */}
        <div className="flex items-center gap-2">
          {!isPlaying ? (
            <button
              onClick={handleStartPlay}
              className="px-5 py-2.5 bg-teal-900 hover:bg-teal-800 text-white font-bold rounded-2xl text-xs transition flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Listen to {currentSection.label}</span>
            </button>
          ) : isPaused ? (
            <button
              onClick={handleResume}
              className="px-5 py-2.5 bg-teal-900 hover:bg-teal-800 text-white font-bold rounded-2xl text-xs transition flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Resume Audio</span>
            </button>
          ) : (
            <button
              onClick={handlePause}
              className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-2xl text-xs transition flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <Pause className="w-4 h-4 fill-current" />
              <span>Pause Audio</span>
            </button>
          )}

          {isPlaying && (
            <button
              onClick={handleStop}
              className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl border border-slate-200 transition cursor-pointer"
              title="Stop Narration"
            >
              <Square className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={handleRestart}
            className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl border border-slate-200 transition cursor-pointer"
            title="Restart from Beginning"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Live Audio Waveform & Status Indicator */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          {isPlaying && !isPaused && (
            <div className="flex items-end gap-1 h-5 px-2">
              <span className="w-1 bg-teal-800 rounded-full animate-bounce [animation-delay:0ms] h-3"></span>
              <span className="w-1 bg-teal-700 rounded-full animate-bounce [animation-delay:150ms] h-5"></span>
              <span className="w-1 bg-teal-900 rounded-full animate-bounce [animation-delay:300ms] h-4"></span>
              <span className="w-1 bg-teal-600 rounded-full animate-bounce [animation-delay:450ms] h-5"></span>
              <span className="w-1 bg-teal-800 rounded-full animate-bounce [animation-delay:200ms] h-3"></span>
            </div>
          )}

          {isPlaying && (
            <div className="text-right">
              <span className="text-[11px] font-mono font-bold text-teal-900">
                {progressPercent}%
              </span>
              <span className="text-[10px] text-slate-500 ml-1">
                (Part {chunkIndex + 1}/{totalChunks})
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Progress Bar (Visible while playing) */}
      {isPlaying && (
        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-3 border border-slate-200">
          <div 
            className="bg-teal-900 h-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      )}
    </div>
  );
};
