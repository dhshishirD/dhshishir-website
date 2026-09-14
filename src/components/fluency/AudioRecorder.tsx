import React, { useState, useRef, useEffect } from 'react';
import { Mic, Square, RotateCcw, AlertCircle, Volume2 } from 'lucide-react';

interface AudioRecorderProps {
  onRecordingComplete: (blob: Blob, url: string, duration: number) => void;
  onClearRecording?: () => void;
  isRecordingDisabled?: boolean;
}

export const AudioRecorder: React.FC<AudioRecorderProps> = ({
  onRecordingComplete,
  onClearRecording,
  isRecordingDisabled = false
}) => {
  const [recordingState, setRecordingState] = useState<'idle' | 'requesting' | 'recording' | 'recorded' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [duration, setDuration] = useState(0);
  const [audioLevel, setAudioLevel] = useState(0);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioStreamRef = useRef<MediaStream | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const timerIntervalRef = useRef<any>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const recordedBlobRef = useRef<Blob | null>(null);
  const recordedUrlRef = useRef<string | null>(null);

  useEffect(() => {
    return () => {
      cleanupResources();
    };
  }, []);

  const cleanupResources = () => {
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    if (audioStreamRef.current) {
      audioStreamRef.current.getTracks().forEach(t => t.stop());
      audioStreamRef.current = null;
    }
    if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
      audioContextRef.current.close().catch(() => {});
      audioContextRef.current = null;
    }
  };

  const getBestMimeType = (): string => {
    if (typeof MediaRecorder === 'undefined') return '';
    const candidates = [
      'audio/webm;codecs=opus',
      'audio/webm',
      'audio/mp4',
      'audio/aac',
      'audio/ogg;codecs=opus',
      'audio/wav'
    ];
    for (const type of candidates) {
      if (MediaRecorder.isTypeSupported(type)) {
        return type;
      }
    }
    return '';
  };

  const startRecording = async () => {
    try {
      setErrorMessage(null);
      setRecordingState('requesting');
      setDuration(0);

      // 1. Request Microphone stream with noise suppression & echo cancellation
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        }
      });
      audioStreamRef.current = stream;

      // 2. Set up AudioContext for live VU visualizer
      try {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioCtx) {
          const ctx = new AudioCtx();
          audioContextRef.current = ctx;
          const analyser = ctx.createAnalyser();
          analyser.fftSize = 64;
          analyserRef.current = analyser;
          const source = ctx.createMediaStreamSource(stream);
          source.connect(analyser);

          const dataArray = new Uint8Array(analyser.frequencyBinCount);
          const updateAudioLevel = () => {
            if (analyserRef.current) {
              analyserRef.current.getByteFrequencyData(dataArray);
              let sum = 0;
              for (let i = 0; i < dataArray.length; i++) {
                sum += dataArray[i];
              }
              const avg = sum / dataArray.length;
              setAudioLevel(Math.min(100, Math.round((avg / 128) * 100)));
              animFrameRef.current = requestAnimationFrame(updateAudioLevel);
            }
          };
          updateAudioLevel();
        }
      } catch (err) {
        console.warn('Audio visualization not supported in current environment', err);
      }

      // 3. Set up MediaRecorder
      const mimeType = getBestMimeType();
      const options = mimeType ? { mimeType } : undefined;
      const mediaRecorder = new MediaRecorder(stream, options);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const finalMime = mimeType || 'audio/webm';
        const blob = new Blob(audioChunksRef.current, { type: finalMime });
        const url = URL.createObjectURL(blob);
        recordedBlobRef.current = blob;
        recordedUrlRef.current = url;
        setRecordingState('recorded');

        if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
        if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        if (audioStreamRef.current) {
          audioStreamRef.current.getTracks().forEach(t => t.stop());
          audioStreamRef.current = null;
        }

        onRecordingComplete(blob, url, duration);
      };

      mediaRecorder.start(100);
      setRecordingState('recording');

      // Timer tracking
      timerIntervalRef.current = setInterval(() => {
        setDuration(prev => {
          if (prev >= 60) {
            stopRecording();
            return 60;
          }
          return prev + 1;
        });
      }, 1000);

    } catch (err: any) {
      console.error('Microphone access failed:', err);
      setRecordingState('error');
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        setErrorMessage('Microphone permission was denied. Please allow microphone access in your browser settings.');
      } else if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
        setErrorMessage('No microphone detected on your device. Please connect a microphone.');
      } else {
        setErrorMessage('Failed to initialize audio recording. Please check your browser audio settings.');
      }
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
  };

  const handleReset = () => {
    cleanupResources();
    setRecordingState('idle');
    setDuration(0);
    setAudioLevel(0);
    if (recordedUrlRef.current) {
      URL.revokeObjectURL(recordedUrlRef.current);
      recordedUrlRef.current = null;
    }
    recordedBlobRef.current = null;
    if (onClearRecording) {
      onClearRecording();
    }
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins}:${remainder < 10 ? '0' : ''}${remainder}`;
  };

  return (
    <div className="space-y-4">
      {/* Recorder Action Box */}
      <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-inner flex flex-col items-center justify-center text-center space-y-4">
        
        {/* Animated Waveform / Status Display */}
        {recordingState === 'recording' ? (
          <div className="w-full max-w-sm space-y-3">
            <div className="flex items-center justify-center gap-1.5 h-12">
              {[...Array(16)].map((_, i) => {
                const heightPercent = Math.max(15, Math.min(100, audioLevel * (0.5 + Math.sin(i * 0.5 + duration) * 0.5)));
                return (
                  <div
                    key={i}
                    className="w-1.5 rounded-full bg-white border border-slate-200 transition-all duration-75"
                    style={{ height: `${heightPercent}%` }}
                  />
                );
              })}
            </div>
            <div className="flex items-center justify-center gap-2 text-teal-900 font-mono text-sm font-bold animate-pulse">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-700 animate-ping" />
              <span>RECORDING • {formatTime(duration)}</span>
            </div>
          </div>
        ) : recordingState === 'recorded' ? (
          <div className="space-y-1">
            <div className="text-teal-800 font-bold text-sm flex items-center justify-center gap-1.5">
              <Volume2 className="w-4 h-4" /> Recording Ready ({formatTime(duration)})
            </div>
            <p className="text-slate-600 text-xs">Play back below to compare your articulation with the studio model.</p>
          </div>
        ) : (
          <div className="space-y-1">
            <div className="text-slate-600 font-bold text-sm">Microphone Ready</div>
            <p className="text-slate-600 text-xs">Press the button below, speak the phrase clearly, and press stop.</p>
          </div>
        )}

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {recordingState === 'idle' && (
            <button
              onClick={startRecording}
              disabled={isRecordingDisabled}
              className="px-6 py-3.5 bg-teal-900 hover:bg-teal-800 disabled:opacity-50 text-white rounded-2xl font-bold text-sm flex items-center gap-2 shadow-xs transition transform active:scale-95 cursor-pointer"
            >
              <Mic className="w-4 h-4" />
              <span>Start Recording Take</span>
            </button>
          )}

          {recordingState === 'requesting' && (
            <button
              disabled
              className="px-6 py-3.5 bg-slate-100 text-slate-600 rounded-2xl font-bold text-sm flex items-center gap-2 cursor-wait"
            >
              <Mic className="w-4 h-4 animate-spin" />
              <span>Accessing Mic...</span>
            </button>
          )}

          {recordingState === 'recording' && (
            <button
              onClick={stopRecording}
              className="px-6 py-3.5 bg-slate-100 hover:bg-slate-700 text-rose-400 border border-rose-500/40 rounded-2xl font-bold text-sm flex items-center gap-2 shadow-lg transition transform active:scale-95 cursor-pointer"
            >
              <Square className="w-4 h-4 fill-rose-400" />
              <span>Stop Recording</span>
            </button>
          )}

          {recordingState === 'recorded' && (
            <button
              onClick={handleReset}
              className="px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 rounded-2xl font-bold text-xs flex items-center gap-1.5 transition cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Record New Take</span>
            </button>
          )}
        </div>

        {/* Error Notification */}
        {errorMessage && (
          <div className="p-3.5 bg-rose-950/70 border border-rose-500/40 rounded-xl text-rose-300 text-xs flex items-start gap-2 text-left max-w-md">
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <div>{errorMessage}</div>
          </div>
        )}

      </div>
    </div>
  );
};
