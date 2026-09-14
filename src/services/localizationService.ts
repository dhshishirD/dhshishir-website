import { useState, useEffect } from 'react';

export type SupportedLanguage = 
  | 'bn' // Bengali
  | 'en' // English (Global / Simplified)
  | 'ar' // Arabic
  | 'es' // Spanish
  | 'fr' // French
  | 'de' // German
  | 'zh' // Chinese (Simplified)
  | 'ja' // Japanese
  | 'hi'; // Hindi

export interface LanguageMeta {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
  flag: string;
  dir: 'ltr' | 'rtl';
  regionHint: string;
}

export const SUPPORTED_LANGUAGES: LanguageMeta[] = [
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇧🇩', dir: 'ltr', regionHint: 'Bangladesh / Bengal' },
  { code: 'en', name: 'English (Global)', nativeName: 'English', flag: '🇬🇧', dir: 'ltr', regionHint: 'Global' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', dir: 'rtl', regionHint: 'Middle East & North Africa' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', dir: 'ltr', regionHint: 'Spain & Latin America' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', dir: 'ltr', regionHint: 'France & Francophonie' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', dir: 'ltr', regionHint: 'Germany & Central Europe' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳', dir: 'ltr', regionHint: 'China & East Asia' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵', dir: 'ltr', regionHint: 'Japan' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳', dir: 'ltr', regionHint: 'India & South Asia' },
];

const STORAGE_KEY = 'dhshishir_preferred_lang';

/**
 * Detect user's language based on browser navigator and timezone heuristics
 */
export function detectUserLanguage(): SupportedLanguage {
  if (typeof window === 'undefined') return 'en';

  // Check manual preference first
  const saved = localStorage.getItem(STORAGE_KEY) as SupportedLanguage | null;
  if (saved && SUPPORTED_LANGUAGES.some(l => l.code === saved)) {
    return saved;
  }

  // Browser language check
  const browserLangs = navigator.languages || [navigator.language || ''];
  for (const lang of browserLangs) {
    const lower = lang.toLowerCase();
    if (lower.startsWith('bn')) return 'bn';
    if (lower.startsWith('ar')) return 'ar';
    if (lower.startsWith('es')) return 'es';
    if (lower.startsWith('fr')) return 'fr';
    if (lower.startsWith('de')) return 'de';
    if (lower.startsWith('zh')) return 'zh';
    if (lower.startsWith('ja')) return 'ja';
    if (lower.startsWith('hi')) return 'hi';
  }

  // Timezone-based geo fallback
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz.includes('Dhaka') || tz.includes('Kolkata')) return 'bn';
    if (tz.includes('Paris') || tz.includes('Brussels') || tz.includes('Geneva')) return 'fr';
    if (tz.includes('Berlin') || tz.includes('Vienna')) return 'de';
    if (tz.includes('Madrid') || tz.includes('Buenos_Aires') || tz.includes('Mexico')) return 'es';
    if (tz.includes('Riyadh') || tz.includes('Dubai') || tz.includes('Cairo')) return 'ar';
    if (tz.includes('Tokyo')) return 'ja';
    if (tz.includes('Shanghai') || tz.includes('Hong_Kong')) return 'zh';
  } catch {
    // Ignore timezone error
  }

  return 'en';
}

export function setPreferredLanguage(lang: SupportedLanguage): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, lang);
  window.dispatchEvent(new CustomEvent('dhshishir_language_changed', { detail: lang }));
}

export function getActiveLanguage(): SupportedLanguage {
  return detectUserLanguage();
}

/**
 * React Hook for real-time reactivity when language changes
 */
export function useLocalization() {
  const [lang, setLang] = useState<SupportedLanguage>(() => detectUserLanguage());

  useEffect(() => {
    const handleLangChange = (e: any) => {
      if (e.detail) {
        setLang(e.detail);
      }
    };

    window.addEventListener('dhshishir_language_changed', handleLangChange);
    return () => window.removeEventListener('dhshishir_language_changed', handleLangChange);
  }, []);

  const changeLanguage = (newLang: SupportedLanguage) => {
    setPreferredLanguage(newLang);
    setLang(newLang);
  };

  const currentMeta = SUPPORTED_LANGUAGES.find(l => l.code === lang) || SUPPORTED_LANGUAGES[0];

  return {
    lang,
    changeLanguage,
    currentMeta,
    supportedLanguages: SUPPORTED_LANGUAGES,
    isRtl: currentMeta.dir === 'rtl',
    isBangla: lang === 'bn',
    isEnglish: lang === 'en'
  };
}

/**
 * Universal localized explanation resolver.
 * If user language is Bangla, returns Bangla text.
 * If user language is another language, returns appropriate explanation.
 */
export function resolveLocalizedText(
  lang: SupportedLanguage,
  banglaText: string,
  englishSummary?: string
): { text: string; languageLabel: string; isRtl: boolean } {
  if (lang === 'bn') {
    return {
      text: banglaText,
      languageLabel: 'বাংলা কৌশলগত বিশ্লেষণ (Bengali Analysis)',
      isRtl: false
    };
  }

  // Multi-language synthesized easy context
  if (lang === 'ar') {
    return {
      text: `ملخص استراتيجي مبسط: ${englishSummary || 'التحليل الاستراتيجي والجيوسياسي المباشر لمصالح السياسة الخارجية والعلاقات الدولية.'}`,
      languageLabel: 'الملخص الاستراتيجي (Arabic Briefing)',
      isRtl: true
    };
  }

  if (lang === 'es') {
    return {
      text: `Resumen estratégico: ${englishSummary || 'Análisis geopolítico y diplomático clave para la política exterior y el orden multilateral.'}`,
      languageLabel: 'Resumen Estratégico (Spanish)',
      isRtl: false
    };
  }

  if (lang === 'fr') {
    return {
      text: `Synthèse stratégique: ${englishSummary || 'Analyse géopolitique et diplomatique pour les relations internationales et les politiques de sécurité.'}`,
      languageLabel: 'Synthèse Stratégique (French)',
      isRtl: false
    };
  }

  if (lang === 'de') {
    return {
      text: `Strategische Zusammenfassung: ${englishSummary || 'Geopolitische und diplomatische Analyse für internationale Beziehungen und staatliche Souveränität.'}`,
      languageLabel: 'Strategischer Überblick (German)',
      isRtl: false
    };
  }

  if (lang === 'zh') {
    return {
      text: `战略概要解读：${englishSummary || '国际关系与地缘政治的核心战略分析与多边外交决策要点。'}`,
      languageLabel: '战略简报 (Chinese Briefing)',
      isRtl: false
    };
  }

  if (lang === 'ja') {
    return {
      text: `戦略的概要：${englishSummary || '国際関係と地政学における重要外交政策および安全保障分析。'}`,
      languageLabel: '戦略的概要 (Japanese Briefing)',
      isRtl: false
    };
  }

  if (lang === 'hi') {
    return {
      text: `सरल रणनीतिक सारांश: ${englishSummary || 'अंतर्राष्ट्रीय संबंध और विदेश नीति विश्लेषण के मुख्य रणनीतिक बिंदु।'}`,
      languageLabel: 'रणनीतिक सारांश (Hindi Briefing)',
      isRtl: false
    };
  }

  return {
    text: englishSummary || banglaText,
    languageLabel: 'Strategic Plain-English Summary',
    isRtl: false
  };
}
