export interface MemoryCard {
  id: string;
  category: 'IR Thinkers & Theories' | 'Seminal Treaties & Accords' | 'Chokepoints & Flashpoints' | 'Diplomatic Doctrines';
  termOrTitle: string;
  pronunciationIpa?: string;
  frontSummary: string;
  backDeepDive: {
    coreDefinition: string;
    banglaMeaning: string;
    diplomaticApplication: string;
    seminalThinkerOrYear: string;
    keyFact: string;
  };
}

export const MEMORY_VAULT_DATA: MemoryCard[] = [
  {
    id: 'card_unclos',
    category: 'Seminal Treaties & Accords',
    termOrTitle: 'UNCLOS 1982',
    pronunciationIpa: '/ˈʌnklɒs/',
    frontSummary: 'The comprehensive constitution for the oceans establishing territorial seas, EEZs, and continental shelf rights.',
    backDeepDive: {
      coreDefinition: 'United Nations Convention on the Law of the Sea codifying 12nm territorial waters, 24nm contiguous zones, and 200nm Exclusive Economic Zones.',
      banglaMeaning: 'জাতিসংঘ সমুদ্র আইন কনভেনশন ১৯৮২ — সমুদ্রসীমা ও সামুদ্রিক সম্পদের আন্তর্জাতিক আইনি দলিল।',
      diplomaticApplication: 'Legal foundation used by Bangladesh to win historic maritime boundary arbitrations against Myanmar (ITLOS 2012) and India (PCA 2014).',
      seminalThinkerOrYear: 'Concluded in 1982 at Montego Bay, Jamaica; entered into force 1994.',
      keyFact: 'Secured 118,813 sq km of sovereign maritime waters and 200nm continental shelf rights for Bangladesh.'
    }
  },
  {
    id: 'card_thucydides',
    category: 'IR Thinkers & Theories',
    termOrTitle: 'Thucydides Trap',
    pronunciationIpa: '/θjuːˈsɪdɪdiːz træp/',
    frontSummary: 'Structural propensity toward conflict when a rising power threatens to displace an established ruling hegemon.',
    backDeepDive: {
      coreDefinition: 'Historical paradigm formulated by Graham Allison from Thucydides\' History of the Peloponnesian War: "It was the rise of Athens and the fear that this instilled in Sparta that made war inevitable."',
      banglaMeaning: 'থুসিডাইডিস ট্র্যাপ — উদীয়মান শক্তির উত্থানে বিদ্যমান পরাশক্তির মধ্যে ভীতি ও অবশ্যম্ভাবী সংঘাতের প্রবণতা।',
      diplomaticApplication: 'Applied to current US-China systemic competition in the Indo-Pacific, Taiwan Strait, and South China Sea.',
      seminalThinkerOrYear: 'Graham Allison (2017) / Thucydides (431 BC).',
      keyFact: 'Out of 16 historical cases of rising vs ruling powers over 500 years, 12 resulted in war.'
    }
  },
  {
    id: 'card_siliguri',
    category: 'Chokepoints & Flashpoints',
    termOrTitle: "Siliguri Corridor ('Chicken's Neck')",
    pronunciationIpa: '/ˌsɪlɪˈɡʊəri ˈkɒrɪdɔːr/',
    frontSummary: '22-km wide strategic terrestrial bottleneck connecting mainland India to its eight northeastern states.',
    backDeepDive: {
      coreDefinition: 'Narrow strip of land in West Bengal bordered by Bangladesh, Nepal, and Bhutan, vulnerable to Chinese interdiction from the Chumbi Valley.',
      banglaMeaning: 'শিলিগুড়ি করিডোর — ভারতের মূল ভূখণ্ডের সাথে উত্তর-পূর্ব রাজ্যগুলোর সংযোগকারী অতি-সংবেদনশীল ভূখণ্ড।',
      diplomaticApplication: 'Gives Bangladesh profound structural leverage as India\'s vital alternative transit corridor to the Seven Sisters.',
      seminalThinkerOrYear: 'Geopolitical border established during the 1947 partition of Bengal.',
      keyFact: 'Proximate to Doklam plateau; India deploys extensive military formations to defend this single transit line.'
    }
  },
  {
    id: 'card_hedging',
    category: 'Diplomatic Doctrines',
    termOrTitle: 'Omnidirectional Hedging',
    pronunciationIpa: '/ˌɒmnɪdəˈrɛkʃənl ˈhɛdʒɪŋ/',
    frontSummary: 'Strategic statecraft doctrine avoiding formal military alliances while engaging multiple rival powers.',
    backDeepDive: {
      coreDefinition: 'A middle-power grand strategy combining economic engagement, security cooperation, and institutional balancing to maximize national autonomy.',
      banglaMeaning: 'সর্বমুখী কৌশলগত হেজিং — কোনো একক পরাশক্তির ওপর নির্ভরশীল না হয়ে বহুপাক্ষিক সুষম সম্পর্কের নীতি।',
      diplomaticApplication: 'Operational doctrine of Bangladesh diplomacy balancing relations with the US, China, India, Japan, and the EU.',
      seminalThinkerOrYear: 'Cheng-Chwee Kuik / Contemporary Middle-Power Statecraft.',
      keyFact: 'Translates Bangabandhu\'s "Friendship to all, malice towards none" into modern agile strategic statecraft.'
    }
  },
  {
    id: 'card_montreux',
    category: 'Seminal Treaties & Accords',
    termOrTitle: 'Montreux Convention 1936',
    pronunciationIpa: '/mɒnˈtrɜː kənˈvɛnʃən/',
    frontSummary: 'International treaty governing the transit of naval and merchant vessels through the Turkish Straits (Bosphorus & Dardanelles).',
    backDeepDive: {
      coreDefinition: 'Gives Turkey sovereign control over the Turkish Straits, limiting naval vessel tonnage for non-Black Sea nations and permitting closure during wartime.',
      banglaMeaning: 'মন্ট্রেক্স কনভেনশন ১৯৩৬ — তুর্কি প্রণালী (বসফরাস ও দার্দানেলেস) দিয়ে জাহাজ চলাচলের আন্তর্জাতিক চুক্তি।',
      diplomaticApplication: 'Invoked by Turkey in 2022 to block Russian warships from entering the Black Sea during the Russia-Ukraine War.',
      seminalThinkerOrYear: 'Signed in 1936 in Montreux, Switzerland.',
      keyFact: 'Secures civilian merchant transit of grain and fertilizers from the Black Sea directly to Chittagong port.'
    }
  },
  {
    id: 'card_security_dilemma',
    category: 'IR Thinkers & Theories',
    termOrTitle: 'Security Dilemma',
    pronunciationIpa: '/sɪˈkjʊərɪti dɪˈlɛmə/',
    frontSummary: 'Defensive actions by one state inadvertently make other states feel insecure, driving reciprocal arms spirals.',
    backDeepDive: {
      coreDefinition: 'Structural condition in an anarchic international system where defensive measures are perceived as offensive threats, triggering arms races.',
      banglaMeaning: 'নিরাপত্তা সংকট (সিকিউরিটি ডিলেমা) — আত্মরক্ষার পদক্ষেপে অপরের মনে ভীতি ও পাল্টা অস্ত্র প্রতিযোগিতার সৃষ্টি।',
      diplomaticApplication: 'Explains naval modernization and missile procurement spirals in the Indo-Pacific and Bay of Bengal.',
      seminalThinkerOrYear: 'John Herz (1950) / Robert Jervis (1978).',
      keyFact: 'Core premise: In anarchy, no state can be completely certain of another state\'s benign intentions.'
    }
  }
];
