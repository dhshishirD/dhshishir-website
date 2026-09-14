import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Radio, Sparkles, ChevronDown } from 'lucide-react';

export type SoundscapePreset = 'silent' | 'geneva' | 'rain' | 'command';

export const DiplomaticSoundscapes: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [activePreset, setActivePreset] = useState<SoundscapePreset>('silent');
  const [volume, setVolume] = useState<number>(0.4);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const noiseNodeRef = useRef<AudioNode | null>(null);

  // Initialize or clean up procedural sound generator
  const stopAudio = () => {
    if (noiseNodeRef.current) {
      try {
        (noiseNodeRef.current as any).stop?.();
        noiseNodeRef.current.disconnect();
      } catch {
        // Ignored
      }
      noiseNodeRef.current = null;
    }
  };

  const startSoundscape = (preset: SoundscapePreset, vol: number) => {
    stopAudio();
    if (preset === 'silent') return;

    try {
      const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtxClass();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(vol * 0.15, ctx.currentTime);
      gain.connect(ctx.destination);
      gainNodeRef.current = gain;

      // Generate procedural acoustic texture using Web Audio buffer
      const bufferSize = ctx.sampleRate * 2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);

      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        if (preset === 'rain') {
          // Pink noise filter for rain acoustics
          lastOut = (lastOut + 0.02 * white) / 1.02;
          data[i] = lastOut * 3.5;
        } else if (preset === 'command') {
          // Brown noise filter for deep focus resonance
          lastOut = (lastOut + 0.015 * white) / 1.015;
          data[i] = lastOut * 4.0;
        } else {
          // Geneva library warm acoustic resonance
          lastOut = (lastOut + 0.01 * white) / 1.01;
          data[i] = lastOut * 2.5;
        }
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      noise.loop = true;

      // Filter for mellow warm resonance
      const filter = ctx.createBiquadFilter();
      filter.type = preset === 'rain' ? 'bandpass' : 'lowpass';
      filter.frequency.value = preset === 'rain' ? 800 : preset === 'command' ? 250 : 400;

      noise.connect(filter);
      filter.connect(gain);
      noise.start();
      noiseNodeRef.current = noise;
    } catch {
      // Audio fallback
    }
  };

  useEffect(() => {
    startSoundscape(activePreset, volume);
    return () => {
      stopAudio();
    };
  }, [activePreset]);

  const handleVolumeChange = (newVol: number) => {
    setVolume(newVol);
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(newVol * 0.15, audioCtxRef.current.currentTime);
    }
  };

  const getPresetLabel = (preset: SoundscapePreset) => {
    switch (preset) {
      case 'geneva': return '🏛️ Geneva Peace Palace';
      case 'rain': return '🌧️ Embassy Window Rain';
      case 'command': return '🛡️ Command Center Focus';
      default: return '🔇 Silent Focus';
    }
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-2xs ${
          activePreset !== 'silent'
            ? 'bg-teal-900 text-white border-teal-800'
            : 'bg-white text-slate-700 hover:text-teal-900 border-slate-200'
        }`}
        title="Diplomatic Ambient Focus Soundscapes"
      >
        <Radio className={`w-3.5 h-3.5 ${activePreset !== 'silent' ? 'animate-pulse text-teal-200' : 'text-teal-800'}`} />
        <span className="hidden sm:inline">{getPresetLabel(activePreset)}</span>
        <ChevronDown className="w-3 h-3 opacity-60" />
      </button>

      {/* Expandable Soundscape Palette */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-slate-200 rounded-2xl p-4 shadow-2xl space-y-3 z-50 text-xs text-slate-900 animate-fade-in text-left">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="font-bold uppercase tracking-wider text-[11px] text-slate-500 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-teal-800" /> Focus Soundscapes
            </span>
            <span className="text-[10px] text-teal-800 font-mono font-bold">Web Audio</span>
          </div>

          <div className="space-y-1">
            {(['silent', 'geneva', 'rain', 'command'] as const).map(p => (
              <button
                key={p}
                onClick={() => {
                  setActivePreset(p);
                  if (p === 'silent') setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-xl transition cursor-pointer font-semibold flex items-center justify-between ${
                  activePreset === p
                    ? 'bg-teal-50 text-teal-900 border border-teal-200 font-bold'
                    : 'hover:bg-slate-50 text-slate-700'
                }`}
              >
                <span>{getPresetLabel(p)}</span>
                {activePreset === p && <span className="w-2 h-2 rounded-full bg-teal-800"></span>}
              </button>
            ))}
          </div>

          {activePreset !== 'silent' && (
            <div className="pt-2 border-t border-slate-100 space-y-1">
              <div className="flex items-center justify-between text-[11px] text-slate-500">
                <span>Volume: {Math.round(volume * 100)}%</span>
                {volume === 0 ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-800"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
