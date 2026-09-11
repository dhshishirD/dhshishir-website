// Dual-layer Audio Engine: Attempts custom studio MP3s first, falls back to Web Speech Synthesis

export const playAudioWithFallback = (audioUrl?: string, fallbackText?: string, slow: boolean = false): Promise<void> => {
  return new Promise((resolve) => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.onended = () => resolve();
      audio.onerror = () => {
        // Fallback to Web Speech API if file doesn't exist
        speakText(fallbackText || '', slow, resolve);
      };
      audio.play().catch(() => {
        speakText(fallbackText || '', slow, resolve);
      });
    } else if (fallbackText) {
      speakText(fallbackText, slow, resolve);
    } else {
      resolve();
    }
  });
};

export const speakText = (text: string, slow: boolean = false, onEnd?: () => void) => {
  if (!('speechSynthesis' in window)) {
    if (onEnd) onEnd();
    return;
  }

  // Cancel any ongoing utterance
  window.speechSynthesis.cancel();

  // Clean phoneme symbols if passed (e.g. /v/ -> "v sound")
  let cleanText = text;
  if (text.startsWith('/') && text.endsWith('/')) {
    const raw = text.replace(/\//g, '');
    cleanText = `${raw}`;
  }

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.rate = slow ? 0.75 : 0.95;
  utterance.pitch = 1.0;
  utterance.lang = 'en-US';

  // Attempt to select high-quality English voice
  const voices = window.speechSynthesis.getVoices();
  const naturalVoice = voices.find(v => (v.lang === 'en-US' || v.lang === 'en-GB') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Premium')));
  if (naturalVoice) {
    utterance.voice = naturalVoice;
  }

  utterance.onend = () => {
    if (onEnd) onEnd();
  };
  utterance.onerror = () => {
    if (onEnd) onEnd();
  };

  window.speechSynthesis.speak(utterance);
};
