// Structured from Fluency Lab Minimal Pairs (70 pairs) and Word Stress List (~270 words)

export interface MinimalPair {
  id: string;
  categoryKey: string;
  categoryLabel: string;
  wordA: string;
  phonemeA: string;
  wordB: string;
  phonemeB: string;
  audioA?: string;
  audioB?: string;
  isClusterDrop?: boolean; // For category 7 single-word correction
  notes?: string;
}

export interface StressedWord {
  id: string;
  word: string;
  section: 'A' | 'B' | 'C' | 'D' | 'E';
  sectionName: string;
  syllableBreakdown: string;
  stressedSyllableIndex: number; // 0-based
  partOfSpeech?: 'noun' | 'verb' | 'adjective' | 'general';
  audioFile?: string;
}

export const MINIMAL_PAIRS_DATA: MinimalPair[] = [
  // 1. /v/ vs /b/
  { id: 'vb-01', categoryKey: 'v_vs_b', categoryLabel: '/v/ vs /b/', wordA: 'van', phonemeA: '/v/', wordB: 'ban', phonemeB: '/b/' },
  { id: 'vb-02', categoryKey: 'v_vs_b', categoryLabel: '/v/ vs /b/', wordA: 'vet', phonemeA: '/v/', wordB: 'bet', phonemeB: '/b/' },
  { id: 'vb-03', categoryKey: 'v_vs_b', categoryLabel: '/v/ vs /b/', wordA: 'vote', phonemeA: '/v/', wordB: 'boat', phonemeB: '/b/' },
  { id: 'vb-04', categoryKey: 'v_vs_b', categoryLabel: '/v/ vs /b/', wordA: 'vest', phonemeA: '/v/', wordB: 'best', phonemeB: '/b/' },
  { id: 'vb-05', categoryKey: 'v_vs_b', categoryLabel: '/v/ vs /b/', wordA: 'vine', phonemeA: '/v/', wordB: 'bine', phonemeB: '/b/' },
  { id: 'vb-06', categoryKey: 'v_vs_b', categoryLabel: '/v/ vs /b/', wordA: 'very', phonemeA: '/v/', wordB: 'berry', phonemeB: '/b/' },
  { id: 'vb-07', categoryKey: 'v_vs_b', categoryLabel: '/v/ vs /b/', wordA: 'vase', phonemeA: '/v/', wordB: 'base', phonemeB: '/b/' },
  { id: 'vb-08', categoryKey: 'v_vs_b', categoryLabel: '/v/ vs /b/', wordA: 'curve', phonemeA: '/v/', wordB: 'curb', phonemeB: '/b/' },
  { id: 'vb-09', categoryKey: 'v_vs_b', categoryLabel: '/v/ vs /b/', wordA: 'marvel', phonemeA: '/v/', wordB: 'marble', phonemeB: '/b/' },
  { id: 'vb-10', categoryKey: 'v_vs_b', categoryLabel: '/v/ vs /b/', wordA: 'cover', phonemeA: '/v/', wordB: 'cobber', phonemeB: '/b/' },

  // 2. /θ/ and /ð/ (th sounds) vs /t/, /d/, /s/, /z/
  { id: 'th-01', categoryKey: 'th_sounds', categoryLabel: 'TH Sounds (/θ/ & /ð/)', wordA: 'think', phonemeA: '/θ/', wordB: 'sink', phonemeB: '/s/' },
  { id: 'th-02', categoryKey: 'th_sounds', categoryLabel: 'TH Sounds (/θ/ & /ð/)', wordA: 'thin', phonemeA: '/θ/', wordB: 'tin', phonemeB: '/t/' },
  { id: 'th-03', categoryKey: 'th_sounds', categoryLabel: 'TH Sounds (/θ/ & /ð/)', wordA: 'thank', phonemeA: '/θ/', wordB: 'tank', phonemeB: '/t/' },
  { id: 'th-04', categoryKey: 'th_sounds', categoryLabel: 'TH Sounds (/θ/ & /ð/)', wordA: 'three', phonemeA: '/θ/', wordB: 'tree', phonemeB: '/t/' },
  { id: 'th-05', categoryKey: 'th_sounds', categoryLabel: 'TH Sounds (/θ/ & /ð/)', wordA: 'bath', phonemeA: '/θ/', wordB: 'bat', phonemeB: '/t/' },
  { id: 'th-06', categoryKey: 'th_sounds', categoryLabel: 'TH Sounds (/θ/ & /ð/)', wordA: 'mouth', phonemeA: '/θ/', wordB: 'mouse', phonemeB: '/s/' },
  { id: 'th-07', categoryKey: 'th_sounds', categoryLabel: 'TH Sounds (/θ/ & /ð/)', wordA: 'this', phonemeA: '/ð/', wordB: 'dis', phonemeB: '/d/' },
  { id: 'th-08', categoryKey: 'th_sounds', categoryLabel: 'TH Sounds (/θ/ & /ð/)', wordA: 'that', phonemeA: '/ð/', wordB: 'dat', phonemeB: '/d/' },
  { id: 'th-09', categoryKey: 'th_sounds', categoryLabel: 'TH Sounds (/θ/ & /ð/)', wordA: 'then', phonemeA: '/ð/', wordB: 'den', phonemeB: '/d/' },
  { id: 'th-10', categoryKey: 'th_sounds', categoryLabel: 'TH Sounds (/θ/ & /ð/)', wordA: 'breathe', phonemeA: '/ð/', wordB: 'breeze', phonemeB: '/z/' },

  // 3. /r/ vs /l/
  { id: 'rl-01', categoryKey: 'r_vs_l', categoryLabel: '/r/ vs /l/', wordA: 'right', phonemeA: '/r/', wordB: 'light', phonemeB: '/l/' },
  { id: 'rl-02', categoryKey: 'r_vs_l', categoryLabel: '/r/ vs /l/', wordA: 'road', phonemeA: '/r/', wordB: 'load', phonemeB: '/l/' },
  { id: 'rl-03', categoryKey: 'r_vs_l', categoryLabel: '/r/ vs /l/', wordA: 'rice', phonemeA: '/r/', wordB: 'lice', phonemeB: '/l/' },
  { id: 'rl-04', categoryKey: 'r_vs_l', categoryLabel: '/r/ vs /l/', wordA: 'correct', phonemeA: '/r/', wordB: 'collect', phonemeB: '/l/' },
  { id: 'rl-05', categoryKey: 'r_vs_l', categoryLabel: '/r/ vs /l/', wordA: 'pray', phonemeA: '/r/', wordB: 'play', phonemeB: '/l/' },
  { id: 'rl-06', categoryKey: 'r_vs_l', categoryLabel: '/r/ vs /l/', wordA: 'free', phonemeA: '/r/', wordB: 'flee', phonemeB: '/l/' },
  { id: 'rl-07', categoryKey: 'r_vs_l', categoryLabel: '/r/ vs /l/', wordA: 'grow', phonemeA: '/r/', wordB: 'glow', phonemeB: '/l/' },
  { id: 'rl-08', categoryKey: 'r_vs_l', categoryLabel: '/r/ vs /l/', wordA: 'crime', phonemeA: '/r/', wordB: 'climb', phonemeB: '/l/' },
  { id: 'rl-09', categoryKey: 'r_vs_l', categoryLabel: '/r/ vs /l/', wordA: 'rock', phonemeA: '/r/', wordB: 'lock', phonemeB: '/l/' },
  { id: 'rl-10', categoryKey: 'r_vs_l', categoryLabel: '/r/ vs /l/', wordA: 'arrive', phonemeA: '/r/', wordB: 'alive', phonemeB: '/l/' },

  // 4. Short vs long vowels
  { id: 'vl-01', categoryKey: 'vowels', categoryLabel: 'Short vs Long Vowels', wordA: 'ship', phonemeA: '/ɪ/', wordB: 'sheep', phonemeB: '/iː/' },
  { id: 'vl-02', categoryKey: 'vowels', categoryLabel: 'Short vs Long Vowels', wordA: 'sit', phonemeA: '/ɪ/', wordB: 'seat', phonemeB: '/iː/' },
  { id: 'vl-03', categoryKey: 'vowels', categoryLabel: 'Short vs Long Vowels', wordA: 'bit', phonemeA: '/ɪ/', wordB: 'beat', phonemeB: '/iː/' },
  { id: 'vl-04', categoryKey: 'vowels', categoryLabel: 'Short vs Long Vowels', wordA: 'live', phonemeA: '/ɪ/', wordB: 'leave', phonemeB: '/iː/' },
  { id: 'vl-05', categoryKey: 'vowels', categoryLabel: 'Short vs Long Vowels', wordA: 'fill', phonemeA: '/ɪ/', wordB: 'feel', phonemeB: '/iː/' },
  { id: 'vl-06', categoryKey: 'vowels', categoryLabel: 'Short vs Long Vowels', wordA: 'full', phonemeA: '/ʊ/', wordB: 'fool', phonemeB: '/uː/' },
  { id: 'vl-07', categoryKey: 'vowels', categoryLabel: 'Short vs Long Vowels', wordA: 'pull', phonemeA: '/ʊ/', wordB: 'pool', phonemeB: '/uː/' },
  { id: 'vl-08', categoryKey: 'vowels', categoryLabel: 'Short vs Long Vowels', wordA: 'bad', phonemeA: '/æ/', wordB: 'bed', phonemeB: '/e/' },
  { id: 'vl-09', categoryKey: 'vowels', categoryLabel: 'Short vs Long Vowels', wordA: 'man', phonemeA: '/æ/', wordB: 'men', phonemeB: '/e/' },
  { id: 'vl-10', categoryKey: 'vowels', categoryLabel: 'Short vs Long Vowels', wordA: 'cat', phonemeA: '/æ/', wordB: 'cut', phonemeB: '/ʌ/' },

  // 5. /p/ vs /f/
  { id: 'pf-01', categoryKey: 'p_vs_f', categoryLabel: '/p/ vs /f/', wordA: 'pan', phonemeA: '/p/', wordB: 'fan', phonemeB: '/f/' },
  { id: 'pf-02', categoryKey: 'p_vs_f', categoryLabel: '/p/ vs /f/', wordA: 'pin', phonemeA: '/p/', wordB: 'fin', phonemeB: '/f/' },
  { id: 'pf-03', categoryKey: 'p_vs_f', categoryLabel: '/p/ vs /f/', wordA: 'pull', phonemeA: '/p/', wordB: 'full', phonemeB: '/f/' },
  { id: 'pf-04', categoryKey: 'p_vs_f', categoryLabel: '/p/ vs /f/', wordA: 'cup', phonemeA: '/p/', wordB: 'cuff', phonemeB: '/f/' },
  { id: 'pf-05', categoryKey: 'p_vs_f', categoryLabel: '/p/ vs /f/', wordA: 'pear', phonemeA: '/p/', wordB: 'fear', phonemeB: '/f/' },
  { id: 'pf-06', categoryKey: 'p_vs_f', categoryLabel: '/p/ vs /f/', wordA: 'pit', phonemeA: '/p/', wordB: 'fit', phonemeB: '/f/' },
  { id: 'pf-07', categoryKey: 'p_vs_f', categoryLabel: '/p/ vs /f/', wordA: 'pool', phonemeA: '/p/', wordB: 'fool', phonemeB: '/f/' },
  { id: 'pf-08', categoryKey: 'p_vs_f', categoryLabel: '/p/ vs /f/', wordA: 'pine', phonemeA: '/p/', wordB: 'fine', phonemeB: '/f/' },
  { id: 'pf-09', categoryKey: 'p_vs_f', categoryLabel: '/p/ vs /f/', wordA: 'copy', phonemeA: '/p/', wordB: 'coffee', phonemeB: '/f/' },
  { id: 'pf-10', categoryKey: 'p_vs_f', categoryLabel: '/p/ vs /f/', wordA: 'leap', phonemeA: '/p/', wordB: 'leaf', phonemeB: '/f/' },

  // 6. /s/ vs /ʃ/ (sh)
  { id: 'ssh-01', categoryKey: 's_vs_sh', categoryLabel: '/s/ vs /ʃ/ (sh)', wordA: 'sip', phonemeA: '/s/', wordB: 'ship', phonemeB: '/ʃ/' },
  { id: 'ssh-02', categoryKey: 's_vs_sh', categoryLabel: '/s/ vs /ʃ/ (sh)', wordA: 'sock', phonemeA: '/s/', wordB: 'shock', phonemeB: '/ʃ/' },
  { id: 'ssh-03', categoryKey: 's_vs_sh', categoryLabel: '/s/ vs /ʃ/ (sh)', wordA: 'sore', phonemeA: '/s/', wordB: 'shore', phonemeB: '/ʃ/' },
  { id: 'ssh-04', categoryKey: 's_vs_sh', categoryLabel: '/s/ vs /ʃ/ (sh)', wordA: 'seat', phonemeA: '/s/', wordB: 'sheet', phonemeB: '/ʃ/' },
  { id: 'ssh-05', categoryKey: 's_vs_sh', categoryLabel: '/s/ vs /ʃ/ (sh)', wordA: 'sell', phonemeA: '/s/', wordB: 'shell', phonemeB: '/ʃ/' },
  { id: 'ssh-06', categoryKey: 's_vs_sh', categoryLabel: '/s/ vs /ʃ/ (sh)', wordA: 'see', phonemeA: '/s/', wordB: 'she', phonemeB: '/ʃ/' },
  { id: 'ssh-07', categoryKey: 's_vs_sh', categoryLabel: '/s/ vs /ʃ/ (sh)', wordA: 'sign', phonemeA: '/s/', wordB: 'shine', phonemeB: '/ʃ/' },
  { id: 'ssh-08', categoryKey: 's_vs_sh', categoryLabel: '/s/ vs /ʃ/ (sh)', wordA: 'mass', phonemeA: '/s/', wordB: 'mash', phonemeB: '/ʃ/' },
  { id: 'ssh-09', categoryKey: 's_vs_sh', categoryLabel: '/s/ vs /ʃ/ (sh)', wordA: 'class', phonemeA: '/s/', wordB: 'clash', phonemeB: '/ʃ/' },
  { id: 'ssh-10', categoryKey: 's_vs_sh', categoryLabel: '/s/ vs /ʃ/ (sh)', wordA: 'gas', phonemeA: '/s/', wordB: 'gash', phonemeB: '/ʃ/' },

  // 7. Word-final consonant clusters
  { id: 'fc-01', categoryKey: 'final_clusters', categoryLabel: 'Final Consonant Clusters', wordA: 'asked', phonemeA: '/skt/', wordB: 'ask', phonemeB: '(dropped -ed)', isClusterDrop: true },
  { id: 'fc-02', categoryKey: 'final_clusters', categoryLabel: 'Final Consonant Clusters', wordA: 'desks', phonemeA: '/sks/', wordB: 'desk', phonemeB: '(dropped -s)', isClusterDrop: true },
  { id: 'fc-03', categoryKey: 'final_clusters', categoryLabel: 'Final Consonant Clusters', wordA: 'fact', phonemeA: '/kt/', wordB: 'fac', phonemeB: '(dropped -t)', isClusterDrop: true },
  { id: 'fc-04', categoryKey: 'final_clusters', categoryLabel: 'Final Consonant Clusters', wordA: 'next', phonemeA: '/kst/', wordB: 'nex', phonemeB: '(dropped -t)', isClusterDrop: true },
  { id: 'fc-05', categoryKey: 'final_clusters', categoryLabel: 'Final Consonant Clusters', wordA: 'friend', phonemeA: '/nd/', wordB: 'fren', phonemeB: '(dropped -d)', isClusterDrop: true },
  { id: 'fc-06', categoryKey: 'final_clusters', categoryLabel: 'Final Consonant Clusters', wordA: 'world', phonemeA: '/rld/', wordB: 'worl', phonemeB: '(dropped -d)', isClusterDrop: true },
  { id: 'fc-07', categoryKey: 'final_clusters', categoryLabel: 'Final Consonant Clusters', wordA: 'told', phonemeA: '/ld/', wordB: 'tol', phonemeB: '(dropped -d)', isClusterDrop: true },
  { id: 'fc-08', categoryKey: 'final_clusters', categoryLabel: 'Final Consonant Clusters', wordA: 'walked', phonemeA: '/kt/', wordB: 'walk', phonemeB: '(dropped -ed)', isClusterDrop: true },
  { id: 'fc-09', categoryKey: 'final_clusters', categoryLabel: 'Final Consonant Clusters', wordA: 'stopped', phonemeA: '/pt/', wordB: 'stop', phonemeB: '(dropped -ed)', isClusterDrop: true },
  { id: 'fc-10', categoryKey: 'final_clusters', categoryLabel: 'Final Consonant Clusters', wordA: 'looked', phonemeA: '/kt/', wordB: 'look', phonemeB: '(dropped -ed)', isClusterDrop: true }
];
