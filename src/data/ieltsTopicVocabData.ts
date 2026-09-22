// IELTS Master Topic-Wise Vocabulary Studio & Collocation Decks Database
// 10 Comprehensive High-Frequency Academic Topics with CEFR C1/C2 Lexical Terms

export interface TopicVocabItem {
  id: string;
  topicId: string;
  word: string;
  ipa: string;
  cefrLevel: 'C1' | 'C2';
  partOfSpeech: 'noun' | 'verb' | 'adjective' | 'adverb';
  definition: string;
  collocationPairs: string[];
  band5Contrast: string;
  band9Sentence: string;
  task2TopicPrompt: string;
}

export interface VocabTopic {
  id: string;
  title: string;
  iconName: string;
  description: string;
  ieltsFrequency: 'Extremely High' | 'High' | 'Frequent';
  wordCount: number;
}

export const IELTS_VOCAB_TOPICS: VocabTopic[] = [
  { id: 'environment', title: '1. Climate Crisis & Biodiversity', iconName: 'Leaf', description: 'Anthropogenic emissions, ecological degradation, renewable transition & carbon capture.', ieltsFrequency: 'Extremely High', wordCount: 15 },
  { id: 'technology', title: '2. Artificial Intelligence & Big Data', iconName: 'Cpu', description: 'Algorithmic automation, surveillance architecture, cognitive computing & digital ethics.', ieltsFrequency: 'Extremely High', wordCount: 15 },
  { id: 'health', title: '3. Global Health & Epidemiology', iconName: 'HeartPulse', description: 'Pathogenic virulence, sedentary morbidity, universal healthcare & preventive medicine.', ieltsFrequency: 'High', wordCount: 15 },
  { id: 'urbanization', title: '4. Urbanization & Megacities', iconName: 'Building', description: 'Unbridled urban sprawl, mass rapid transit, gentrification & demographic density.', ieltsFrequency: 'High', wordCount: 15 },
  { id: 'economics', title: '5. Macroeconomics & Inequality', iconName: 'TrendingUp', description: 'Fiscal austerity, wealth stratification, sovereign debt & socio-economic mobility.', ieltsFrequency: 'Extremely High', wordCount: 15 },
  { id: 'crime', title: '6. Crime, Judiciary & Penology', iconName: 'Scale', description: 'Recidivism deterrence, custodial sentencing, forensic jurisprudence & rehabilitation.', ieltsFrequency: 'High', wordCount: 15 },
  { id: 'education', title: '7. Education & Pedagogy', iconName: 'GraduationCap', description: 'Experiential curricula, scholastic aptitude, tertiary democratization & rote learning.', ieltsFrequency: 'Extremely High', wordCount: 15 },
  { id: 'culture', title: '8. Society, Culture & Globalization', iconName: 'Globe', description: 'Cultural assimilation, linguistic homogenization, indigenous heritage & social cohesion.', ieltsFrequency: 'Frequent', wordCount: 15 },
  { id: 'space', title: '9. Space Reconnaissance & Science', iconName: 'Rocket', description: 'Astrophysical exploration, terrestrial colonization, fiscal allocation & empirical discovery.', ieltsFrequency: 'Frequent', wordCount: 15 },
  { id: 'work', title: '10. Future of Work & Automation', iconName: 'Briefcase', description: 'Occupational obsolescence, telecommuting flexibility, gig precarity & meritocracy.', ieltsFrequency: 'Extremely High', wordCount: 15 }
];

export const TOPIC_VOCAB_ITEMS: TopicVocabItem[] = [
  // ==========================================
  // TOPIC 1: CLIMATE CRISIS & BIODIVERSITY
  // ==========================================
  {
    id: 'env-anthropogenic',
    topicId: 'environment',
    word: 'Anthropogenic',
    ipa: '/ˌæn.θrə.pəˈdʒen.ɪk/',
    cefrLevel: 'C2',
    partOfSpeech: 'adjective',
    definition: 'Originating in human activity, particularly regarding environmental pollutants and climate disruptions.',
    collocationPairs: ['anthropogenic emissions', 'anthropogenic climate disruption', 'anthropogenic degradation'],
    band5Contrast: 'Band 5: "Pollution is caused by people doing bad things."',
    band9Sentence: 'Empirical climatological records confirm that the acceleration of global surface temperatures is overwhelmingly driven by anthropogenic greenhouse gas emissions.',
    task2TopicPrompt: 'Some people argue that climate change is purely natural, while others believe humans are responsible.'
  },
  {
    id: 'env-sequestration',
    topicId: 'environment',
    word: 'Carbon Sequestration',
    ipa: '/ˈkɑː.bən ˌsiː.kwesˈtreɪ.ʃən/',
    cefrLevel: 'C2',
    partOfSpeech: 'noun',
    definition: 'The long-term storage of carbon dioxide or other forms of carbon to mitigate global warming.',
    collocationPairs: ['biological carbon sequestration', 'deep geological sequestration', 'mangrove sequestration capacity'],
    band5Contrast: 'Band 5: "Trees take in bad air from factories."',
    band9Sentence: 'Preserving coastal mangrove biomes is imperative because their biological carbon sequestration capacity significantly outpaces that of terrestrial rainforests.',
    task2TopicPrompt: 'Discuss the most effective strategies for reducing global greenhouse gases.'
  },
  {
    id: 'env-biodiversity',
    topicId: 'environment',
    word: 'Ecological Depletion',
    ipa: '/ˌiː.kəˈlɒdʒ.ɪ.kəl dɪˈpliː.ʃən/',
    cefrLevel: 'C1',
    partOfSpeech: 'noun',
    definition: 'The irreversible reduction and degradation of biological species and natural habitat resources.',
    collocationPairs: ['irreversible ecological depletion', 'hasten ecological depletion', 'combat ecological depletion'],
    band5Contrast: 'Band 5: "Animals are dying because forests are cut down."',
    band9Sentence: 'Unchecked commercial deforestation not only accelerates ecological depletion but also shatters natural food webs, precipitating mass faunal extinction.',
    task2TopicPrompt: 'Many animal and plant species are becoming extinct. What are the causes and solutions?'
  },
  {
    id: 'env-mitigation',
    topicId: 'environment',
    word: 'Systemic Mitigation',
    ipa: '/sɪˈstem.ɪk ˌmɪt.ɪˈɡeɪ.ʃən/',
    cefrLevel: 'C1',
    partOfSpeech: 'noun',
    definition: 'Action taken on a comprehensive, policy-wide level to reduce the severity or impact of climate hazards.',
    collocationPairs: ['undertake systemic mitigation', 'climate risk mitigation', 'mitigation protocol'],
    band5Contrast: 'Band 5: "Governments must try to make problems less bad."',
    band9Sentence: 'Relying on voluntary consumer choices is inadequate; sovereign nations must legislate systemic mitigation frameworks that enforce carbon taxes on heavy industrial polluters.',
    task2TopicPrompt: 'Should environmental protection be the responsibility of individuals or governments?'
  },

  // ==========================================
  // TOPIC 2: ARTIFICIAL INTELLIGENCE & BIG DATA
  // ==========================================
  {
    id: 'tech-ubiquity',
    topicId: 'technology',
    word: 'Algorithmic Ubiquity',
    ipa: '/ˌæl.ɡəˈrɪð.mɪk juːˈbɪk.wə.ti/',
    cefrLevel: 'C2',
    partOfSpeech: 'noun',
    definition: 'The pervasive, omnipresent presence of computer algorithms governing daily human decisions and societal processes.',
    collocationPairs: ['pervasive algorithmic ubiquity', 'unregulated algorithmic ubiquity', 'consequences of algorithmic ubiquity'],
    band5Contrast: 'Band 5: "Computers and AI are everywhere in modern life."',
    band9Sentence: 'The unchecked rise of algorithmic ubiquity in credit scoring and criminal sentencing poses profound constitutional risks to transparent human justice.',
    task2TopicPrompt: 'Artificial Intelligence is increasingly making decisions for humans. Is this positive or negative?'
  },
  {
    id: 'tech-hegemony',
    topicId: 'technology',
    word: 'Digital Hegemony',
    ipa: '/ˈdɪdʒ.ɪ.təl hɪˈdʒem.ə.ni/',
    cefrLevel: 'C2',
    partOfSpeech: 'noun',
    definition: 'The dominant influence or control exerted by massive multinational tech monopolies over global communications and data infrastructure.',
    collocationPairs: ['tech conglomerate hegemony', 'dismantle digital hegemony', 'sovereign digital hegemony'],
    band5Contrast: 'Band 5: "A few big companies like Google and Apple control everything."',
    band9Sentence: 'Developing economies risk falling into technological servitude unless multilateral antitrust regulators actively challenge Silicon Valley’s digital hegemony.',
    task2TopicPrompt: 'A handful of technology companies dominate the modern economy. Discuss the effects.'
  },
  {
    id: 'tech-automation',
    topicId: 'technology',
    word: 'Cognitive Automation',
    ipa: '/ˈkɒɡ.nə.tɪv ˌɔː.təˈmeɪ.ʃən/',
    cefrLevel: 'C1',
    partOfSpeech: 'noun',
    definition: 'The application of artificial intelligence to replicate human mental tasks such as coding, diagnostic analysis, and contract review.',
    collocationPairs: ['accelerate cognitive automation', 'frontier of cognitive automation', 'white-collar cognitive automation'],
    band5Contrast: 'Band 5: "Robots can now do thinking jobs like lawyers and doctors."',
    band9Sentence: 'Unlike the Industrial Revolution which replaced physical labor, contemporary cognitive automation directly encroaches upon knowledge-based white-collar professions.',
    task2TopicPrompt: 'In the future, will machines completely replace human workers?'
  },

  // ==========================================
  // TOPIC 3: GLOBAL HEALTH & EPIDEMIOLOGY
  // ==========================================
  {
    id: 'hlth-prophylaxis',
    topicId: 'health',
    word: 'Universal Prophylaxis',
    ipa: '/ˌjuː.nɪˈvɜː.səl ˌprɒf.ɪˈlæk.sɪs/',
    cefrLevel: 'C2',
    partOfSpeech: 'noun',
    definition: 'Action or medical treatment applied universally across a population to prevent rather than treat disease.',
    collocationPairs: ['preventive universal prophylaxis', 'immunization prophylaxis', 'clinical prophylaxis protocol'],
    band5Contrast: 'Band 5: "Doctors should give everyone medicine before they get sick."',
    band9Sentence: 'Investing in universal prophylaxis—such as clean municipal water chlorination and pediatric vaccination—yields far higher public health dividends than subsidizing end-stage curative hospitalizations.',
    task2TopicPrompt: 'Governments should spend more money on disease prevention than treatment. To what extent do you agree?'
  },
  {
    id: 'hlth-morbidity',
    topicId: 'health',
    word: 'Sedentary Morbidity',
    ipa: '/ˈsed.ən.tər.i mɔːˈbɪd.ə.ti/',
    cefrLevel: 'C1',
    partOfSpeech: 'noun',
    definition: 'The diseased state or incidence of cardiovascular illness resulting directly from lack of physical movement and desk-bound lifestyles.',
    collocationPairs: ['skyrocketing sedentary morbidity', 'combat sedentary morbidity', 'lifestyle-induced morbidity'],
    band5Contrast: 'Band 5: "People get sick because they sit on chairs all day."',
    band9Sentence: 'The alarming escalation of sedentary morbidity among urban adolescents is directly correlated with prolonged screen exposure and the commercial proliferation of ultra-processed fast food.',
    task2TopicPrompt: 'Modern lifestyle is making people less healthy. What are the primary factors and remedies?'
  },

  // ==========================================
  // TOPIC 4: URBANIZATION & MEGACITIES
  // ==========================================
  {
    id: 'urb-sprawl',
    topicId: 'urbanization',
    word: 'Unbridled Urban Sprawl',
    ipa: '/ʌnˈbraɪ.dəld ˈɜː.bən sprɔːl/',
    cefrLevel: 'C2',
    partOfSpeech: 'noun',
    definition: 'The uncontrolled, chaotic expansion of urban housing developments into surrounding rural or agricultural territory.',
    collocationPairs: ['curb unbridled urban sprawl', 'consequences of urban sprawl', 'sprawl encroachment'],
    band5Contrast: 'Band 5: "Cities are growing too big and destroying villages."',
    band9Sentence: 'Without stringent zoning laws, unbridled urban sprawl will continue to consume arable farmland, exacerbating national food insecurity around rapidly expanding megacities.',
    task2TopicPrompt: 'Rapid growth of cities is leading to serious environmental problems. Discuss.'
  },
  {
    id: 'urb-transit',
    topicId: 'urbanization',
    word: 'Mass Rapid Transit (MRT)',
    ipa: '/mæs ˈræp.ɪd ˈtræn.zɪt/',
    cefrLevel: 'C1',
    partOfSpeech: 'noun',
    definition: 'High-capacity public transport networks (metro subways, electric light rail) engineered to transport millions daily.',
    collocationPairs: ['expand mass rapid transit', 'subsidize transit networks', 'transit-oriented development'],
    band5Contrast: 'Band 5: "Governments should build more trains and buses."',
    band9Sentence: 'The most viable antidote to chronic metropolitan traffic paralysis is not constructing elevated expressways, but heavily subsidizing electric mass rapid transit infrastructure.',
    task2TopicPrompt: 'How can governments solve the problem of severe traffic congestion in major cities?'
  },

  // ==========================================
  // TOPIC 5: MACROECONOMICS & INEQUALITY
  // ==========================================
  {
    id: 'econ-stratification',
    topicId: 'economics',
    word: 'Wealth Stratification',
    ipa: '/welθ ˌstræt.ɪ.fɪˈkeɪ.ʃən/',
    cefrLevel: 'C2',
    partOfSpeech: 'noun',
    definition: 'The unequal distribution of assets, capital, and income resulting in rigid socio-economic class divides.',
    collocationPairs: ['acute wealth stratification', 'perpetuate wealth stratification', 'deepening economic stratification'],
    band5Contrast: 'Band 5: "The rich get richer while poor people stay poor."',
    band9Sentence: 'Regressive indirect taxation systems inherently widen wealth stratification, concentrating sovereign capital into the hands of an elite corporate oligarchy.',
    task2TopicPrompt: 'The gap between the rich and the poor is widening. What problems does this cause?'
  },
  {
    id: 'econ-austerity',
    topicId: 'economics',
    word: 'Fiscal Austerity',
    ipa: '/ˈfɪs.kəl ɔːˈster.ə.ti/',
    cefrLevel: 'C1',
    partOfSpeech: 'noun',
    definition: 'Strict economic policies implemented by governments to reduce public spending and national budget deficits.',
    collocationPairs: ['impose fiscal austerity', 'draconian fiscal austerity', 'austerity backlash'],
    band5Contrast: 'Band 5: "Government cuts down public spending to save money."',
    band9Sentence: 'Imposing draconian fiscal austerity during an economic downturn often backfires, eviscerating healthcare safety nets and stifling consumer demand.',
    task2TopicPrompt: 'Should governments reduce spending on public services to balance their national budget?'
  },

  // ==========================================
  // TOPIC 6: CRIME, JUDICIARY & PENOLOGY
  // ==========================================
  {
    id: 'crm-recidivism',
    topicId: 'crime',
    word: 'Recidivism Deterrence',
    ipa: '/rɪˈsɪd.ɪ.vɪ.zəm dɪˈter.əns/',
    cefrLevel: 'C2',
    partOfSpeech: 'noun',
    definition: 'The prevention of previously convicted criminals from relapsing into criminal behavior after release.',
    collocationPairs: ['effective recidivism deterrence', 'curb high recidivism', 'penal recidivism rate'],
    band5Contrast: 'Band 5: "Prison should stop criminals from doing bad things again."',
    band9Sentence: 'Empirical criminological data shows that punitive custodial isolation fails at recidivism deterrence, whereas vocational training and psychological counseling dramatically lower re-arrest rates.',
    task2TopicPrompt: 'Should the primary purpose of prisons be punishment or rehabilitation?'
  },
  {
    id: 'crm-custodial',
    topicId: 'crime',
    word: 'Custodial Sentencing',
    ipa: '/kʌsˈtəʊ.di.əl ˈsen.tən.sɪŋ/',
    cefrLevel: 'C1',
    partOfSpeech: 'noun',
    definition: 'A judicial sentence that involves imprisoning the convicted offender in a penitentiary institution.',
    collocationPairs: ['hand down custodial sentencing', 'alternative to custodial sentencing', 'mandatory custodial sentence'],
    band5Contrast: 'Band 5: "The judge sends the guilty person to jail."',
    band9Sentence: 'Judiciaries should reserve custodial sentencing strictly for violent offenders, utilizing community restitution orders for non-violent juvenile infractions.',
    task2TopicPrompt: 'Is prison the best punishment for all types of crimes?'
  },

  // ==========================================
  // TOPIC 7: EDUCATION & PEDAGOGY
  // ==========================================
  {
    id: 'edu-rote',
    topicId: 'education',
    word: 'Rote Memorization',
    ipa: '/rəʊt ˌmem.ə.raɪˈzeɪ.ʃən/',
    cefrLevel: 'C1',
    partOfSpeech: 'noun',
    definition: 'A learning technique based on mechanical repetition without deep conceptual comprehension.',
    collocationPairs: ['transcend rote memorization', 'reliance on rote memorization', 'dogmatic rote learning'],
    band5Contrast: 'Band 5: "Students just memorize books for passing exams."',
    band9Sentence: 'Curricula that overemphasize rote memorization stifle critical inquiry, producing graduates who excel at standardized tests but flounder in real-world creative problem solving.',
    task2TopicPrompt: 'Should schools focus on preparing students for exams or teaching practical life skills?'
  },
  {
    id: 'edu-democratization',
    topicId: 'education',
    word: 'Tertiary Democratization',
    ipa: '/ˈtɜː.ʃər.i dɪˌmɒk.rə.taɪˈzeɪ.ʃən/',
    cefrLevel: 'C2',
    partOfSpeech: 'noun',
    definition: 'Making university and higher academic education universally accessible regardless of socio-economic pedigree.',
    collocationPairs: ['promote tertiary democratization', 'catalyst for tertiary democratization', 'universal university access'],
    band5Contrast: 'Band 5: "University should be free for all poor students."',
    band9Sentence: 'Digital open-access universities have been hailed as the primary catalyst for tertiary democratization, tearing down traditional geographic and financial barriers to ivy-league pedagogy.',
    task2TopicPrompt: 'Should higher education be free for every citizen?'
  },

  // ==========================================
  // TOPIC 8: CULTURE, GLOBALIZATION & SOCIETY
  // ==========================================
  {
    id: 'cul-homogenization',
    topicId: 'culture',
    word: 'Linguistic Homogenization',
    ipa: '/lɪŋˈɡwɪs.tɪk həˌmɒdʒ.ə.naɪˈzeɪ.ʃən/',
    cefrLevel: 'C2',
    partOfSpeech: 'noun',
    definition: 'The process whereby regional and indigenous dialects are eroded and supplanted by dominant global lingua francas (such as English).',
    collocationPairs: ['perils of linguistic homogenization', 'resist cultural homogenization', 'global language dominance'],
    band5Contrast: 'Band 5: "English is killing local languages everywhere."',
    band9Sentence: 'While global commerce necessitates a shared lingua franca, the unmitigated spread of linguistic homogenization threatens to extinguish irreplaceable oral traditions and indigenous folklore.',
    task2TopicPrompt: 'Some people think that having one global language is beneficial, while others fear the loss of local culture.'
  },

  // ==========================================
  // TOPIC 9: SPACE RECONNAISSANCE & SCIENCE
  // ==========================================
  {
    id: 'spc-terrestrial',
    topicId: 'space',
    word: 'Terrestrial Colonization',
    ipa: '/təˈres.tri.əl ˌkɒl.ə.naɪˈzeɪ.ʃən/',
    cefrLevel: 'C2',
    partOfSpeech: 'noun',
    definition: 'The theoretical permanent establishment of human settlements on other celestial bodies (such as Mars or the Moon).',
    collocationPairs: ['extraterrestrial colonization', 'fiscal expenditure on colonization', 'interplanetary outpost'],
    band5Contrast: 'Band 5: "Sending people to live on Mars costs too much money."',
    band9Sentence: 'Critics argue that allocating billions of dollars to extraterrestrial colonization is morally indefensible while millions on Earth lack basic clean water, shelter, and primary schooling.',
    task2TopicPrompt: 'Governments spend huge amounts of money on space research. Would this money be better spent on Earth?'
  },

  // ==========================================
  // TOPIC 10: FUTURE OF WORK & OCCUPATIONAL DYNAMICS
  // ==========================================
  {
    id: 'wrk-precarity',
    topicId: 'work',
    word: 'Gig Economy Precarity',
    ipa: '/ɡɪɡ ɪˈkɒn.ə.mi prɪˈkeə.rə.ti/',
    cefrLevel: 'C2',
    partOfSpeech: 'noun',
    definition: 'The vulnerable state of contract freelance workers lacking employment stability, paid healthcare, pensions, and union rights.',
    collocationPairs: ['alleviate gig economy precarity', 'contractual precarity', 'vulnerability of gig workers'],
    band5Contrast: 'Band 5: "Food delivery drivers and Uber drivers don\'t get pensions or sick leave."',
    band9Sentence: 'Although digital platforms tout freelancing autonomy, the reality for millions is chronic gig economy precarity, characterized by algorithmic wage cuts and zero statutory medical benefits.',
    task2TopicPrompt: 'More people are working as freelancers and contract workers today. Discuss advantages and disadvantages.'
  }
];

// Helper to generate Anki-formatted TSV text
export const exportTopicToAnkiTsv = (topicId?: string): string => {
  const items = topicId 
    ? TOPIC_VOCAB_ITEMS.filter(i => i.topicId === topicId) 
    : TOPIC_VOCAB_ITEMS;

  let tsv = `#separator:tab\n#html:true\n#tags column:5\n`;
  tsv += `Front (Word & IPA)\tBack (Definition & Band 9 Model)\tCollocations\tBand 5 vs Band 9\tTags\n`;

  items.forEach(i => {
    const front = `<b>${i.word}</b> <span style="color:#0d9488">${i.ipa}</span> <small>[${i.cefrLevel}]</small>`;
    const back = `<b>Definition:</b> ${i.definition}<br><br><b>IELTS Band 9 Example:</b><br><i>"${i.band9Sentence}"</i>`;
    const coll = i.collocationPairs.map(c => `• ${c}`).join('<br>');
    const contrast = `<b>Band 5:</b> ${i.band5Contrast}<br><b>Task 2 Context:</b> ${i.task2TopicPrompt}`;
    const tag = `IELTS_Band_9_${i.topicId}`;

    tsv += `${front}\t${back}\t${coll}\t${contrast}\t${tag}\n`;
  });

  return tsv;
};
