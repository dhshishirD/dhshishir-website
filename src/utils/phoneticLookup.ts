// Phonetic dictionary lookup and rule-based syllabification engine

export interface LookupResult {
  word: string;
  ipa: string;
  syllables: string[];
  stressedIndex: number;
  source: 'studio' | 'cmu_ai';
  meaningBn?: string;
}

// Built-in high-accuracy dictionary for academic & professional words
const PHONETIC_DICT: Record<string, { ipa: string; syllables: string[]; stressedIndex: number }> = {
  'technology': { ipa: '/tɛkˈnɑːlədʒi/', syllables: ['tech', 'NOL', 'o', 'gy'], stressedIndex: 1 },
  'university': { ipa: '/ˌjuːnɪˈvɜːrsəti/', syllables: ['u', 'ni', 'VER', 'si', 'ty'], stressedIndex: 2 },
  'opportunity': { ipa: '/ˌɑːpərˈtuːnəti/', syllables: ['op', 'por', 'TU', 'ni', 'ty'], stressedIndex: 2 },
  'communication': { ipa: '/kəˌmjuːnɪˈkeɪʃən/', syllables: ['com', 'mu', 'ni', 'CA', 'tion'], stressedIndex: 3 },
  'pronunciation': { ipa: '/prəˌnʌnsiˈeɪʃən/', syllables: ['pro', 'nun', 'ci', 'A', 'tion'], stressedIndex: 3 },
  'vocabulary': { ipa: '/vəˈkæbjələri/', syllables: ['vo', 'CAB', 'u', 'la', 'ry'], stressedIndex: 1 },
  'intelligence': { ipa: '/ɪnˈtɛlɪdʒəns/', syllables: ['in', 'TEL', 'li', 'gence'], stressedIndex: 1 },
  'leadership': { ipa: '/ˈliːdərʃɪp/', syllables: ['LEAD', 'er', 'ship'], stressedIndex: 0 },
  'scholarship': { ipa: '/ˈskɑːlərʃɪp/', syllables: ['SCHOL', 'ar', 'ship'], stressedIndex: 0 },
  'experience': { ipa: '/ɪkˈspɪriəns/', syllables: ['ex', 'PE', 'ri', 'ence'], stressedIndex: 1 },
  'generation': { ipa: '/ˌdʒɛnəˈreɪʃən/', syllables: ['gen', 'er', 'A', 'tion'], stressedIndex: 2 },
  'organization': { ipa: '/ˌɔːrɡənəˈzeɪʃən/', syllables: ['or', 'gan', 'i', 'ZA', 'tion'], stressedIndex: 3 },
  'community': { ipa: '/kəˈmjuːnəti/', syllables: ['com', 'MU', 'ni', 'ty'], stressedIndex: 1 },
  'curriculum': { ipa: '/kəˈrɪkjələm/', syllables: ['cur', 'RIC', 'u', 'lum'], stressedIndex: 1 },
  'certificate': { ipa: '/sərˈtɪfɪkət/', syllables: ['cer', 'TIF', 'i', 'cate'], stressedIndex: 1 },
  'management': { ipa: '/ˈmænɪdʒmənt/', syllables: ['MAN', 'age', 'ment'], stressedIndex: 0 },
  'strategy': { ipa: '/ˈstrætədʒi/', syllables: ['STRAT', 'e', 'gy'], stressedIndex: 0 },
  'confidence': { ipa: '/ˈkɑːnfɪdəns/', syllables: ['CON', 'fi', 'dence'], stressedIndex: 0 },
  'presentation': { ipa: '/ˌprɛzənˈteɪʃən/', syllables: ['pres', 'en', 'TA', 'tion'], stressedIndex: 2 },
  'conversation': { ipa: '/ˌkɑːnvərˈseɪʃən/', syllables: ['con', 'ver', 'SA', 'tion'], stressedIndex: 2 },
  'perspective': { ipa: '/pərˈspɛktɪv/', syllables: ['per', 'SPEC', 'tive'], stressedIndex: 1 },
  'environment': { ipa: '/ɪnˈvaɪrənmənt/', syllables: ['en', 'VI', 'ron', 'ment'], stressedIndex: 1 },
  'international': { ipa: '/ˌɪntərˈnæʃənəl/', syllables: ['in', 'ter', 'NA', 'tion', 'al'], stressedIndex: 2 },
  'government': { ipa: '/ˈɡʌvənmənt/', syllables: ['GOV', 'ern', 'ment'], stressedIndex: 0 },
  'performance': { ipa: '/pərˈfɔːrməns/', syllables: ['per', 'FOR', 'mance'], stressedIndex: 1 },
  'analysis': { ipa: '/əˈnæləsɪs/', syllables: ['a', 'NAL', 'y', 'sis'], stressedIndex: 1 },
  'professional': { ipa: '/prəˈfɛʃənəl/', syllables: ['pro', 'FES', 'sion', 'al'], stressedIndex: 1 },
  'creativity': { ipa: '/ˌkrieɪˈtɪvəti/', syllables: ['cre', 'a', 'TIV', 'i', 'ty'], stressedIndex: 2 },
  'individual': { ipa: '/ˌɪndɪˈvɪdʒuəl/', syllables: ['in', 'di', 'VID', 'u', 'al'], stressedIndex: 2 },
  'recommendation': { ipa: '/ˌrɛkəmɛnˈdeɪʃən/', syllables: ['rec', 'om', 'men', 'DA', 'tion'], stressedIndex: 3 }
};

export const lookupPhonetics = (inputWord: string): LookupResult => {
  const clean = inputWord.trim().toLowerCase();
  
  // 1. Check if word exists in built-in dictionary
  if (PHONETIC_DICT[clean]) {
    const entry = PHONETIC_DICT[clean];
    return {
      word: clean,
      ipa: entry.ipa,
      syllables: entry.syllables,
      stressedIndex: entry.stressedIndex,
      source: 'cmu_ai'
    };
  }

  // 2. Rule-based Algorithmic Syllabifier & Stress Analyzer for arbitrary English words
  const syllableRegex = /[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi;
  const matches = clean.match(syllableRegex);
  const rawSyllables = matches && matches.length > 0 ? matches : [clean];

  let stressedIdx = 0;
  if (rawSyllables.length === 2) {
    // 2 syllables: default to 1st
    stressedIdx = 0;
  } else if (rawSyllables.length === 3) {
    stressedIdx = 1; // e.g. com-PU-ter
  } else if (rawSyllables.length >= 4) {
    // Suffix checks: -tion, -ic, -ity shift stress to penultimate
    if (clean.endsWith('tion') || clean.endsWith('sion') || clean.endsWith('ic') || clean.endsWith('ity')) {
      stressedIdx = rawSyllables.length - 2;
    } else {
      stressedIdx = rawSyllables.length - 2;
    }
  }

  const formattedSyllables = rawSyllables.map((s, idx) => {
    return idx === stressedIdx ? s.toUpperCase() : s.toLowerCase();
  });

  const approximateIpa = '/' + clean
    .replace(/ph/g, 'f')
    .replace(/th/g, 'θ')
    .replace(/sh/g, 'ʃ')
    .replace(/ch/g, 'tʃ')
    .replace(/tion/g, 'ʃən')
    .replace(/sion/g, 'ʒən')
    .replace(/ee|ea/g, 'iː')
    .replace(/oo/g, 'uː')
    .replace(/ay|ai|ey/g, 'eɪ')
    .replace(/igh|y$/g, 'aɪ')
    .replace(/ow|ou/g, 'aʊ')
    + '/';

  return {
    word: clean,
    ipa: approximateIpa,
    syllables: formattedSyllables,
    stressedIndex: stressedIdx,
    source: 'cmu_ai'
  };
};
