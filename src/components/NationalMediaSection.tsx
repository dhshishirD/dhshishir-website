import React, { useState } from 'react';
import { 
  Tv, Play, ExternalLink, ShieldCheck, Newspaper, Sparkles, Filter, 
  Award, Video, X, ChevronRight, MessageSquare, BookOpen, ChevronDown, ChevronUp
} from 'lucide-react';

export interface MediaItem {
  id: string;
  type: 'video' | 'article';
  youtubeId?: string;
  articleUrl?: string;
  title: string;
  publisher: string;
  category: 'national_tv' | 'interview' | 'speech' | 'press_article';
  badge: string;
  description: string;
  isShort?: boolean;
}

export const NATIONAL_MEDIA_ITEMS: MediaItem[] = [
  // --- TELEVISED BROADCASTS & NEWS BULLETINS ---
  {
    id: 'atn-bangla-1',
    type: 'video',
    youtubeId: '_gZLMHEhCTM',
    title: 'শাকসু নির্বাচন নিয়ে সর্বশেষ যা জানালো শিবির প্যানেল ভিপি প্রার্থী | SUCSU Election',
    publisher: 'ATN Bangla News',
    category: 'national_tv',
    badge: 'National TV Broadcast',
    description: 'Special news bulletin and live interview on campus election vision, student welfare, and democratic reforms on ATN Bangla.'
  },
  {
    id: 'samakal-1',
    type: 'video',
    youtubeId: 'slNisrnZlm0',
    title: 'শাকসু নির্বাচন বন্ধের বার্তা ক্যাম্পাসে ঢুকতে দেওয়া হবে না: ভিপি প্রার্থী দেলোয়ার হোসেন শিশির',
    publisher: 'Samakal News',
    category: 'national_tv',
    badge: 'National Daily Press',
    description: 'Exclusive press statement with Daily Samakal on student rights, academic environment, and student union revival at SUST.'
  },
  {
    id: 'daily-campus-1',
    type: 'video',
    youtubeId: '-Y-6okxa_-c',
    title: 'জয়ের ব্যাপারে কতটা আশাবাদী, জানালেন শিবির সমর্থিত শাকসু ভিপি প্রার্থী | SUST',
    publisher: 'The Daily Campus',
    category: 'interview',
    badge: 'Higher Education Media',
    description: 'In-depth interview on youth leadership, campus politics reform, and academic excellence in higher education.'
  },
  {
    id: 'alaap-salaap-full',
    type: 'video',
    youtubeId: 'fW-yScAbCuY',
    title: 'শাকসু ২০২৬: দুর্বার সাস্টিয়ান প্যানেলের ভিশন কী? | Delowar Hassan Shishir | Full Episode',
    publisher: 'আলাপ-সালাপ (Alaap-Salaap)',
    category: 'interview',
    badge: 'Featured Dialogue',
    description: 'Comprehensive 45-minute policy dialogue covering education reform, university autonomy, and leadership roadmap.'
  },
  {
    id: 'banglanews24-1',
    type: 'video',
    youtubeId: 'ki4niIG9wtA',
    title: 'দুই দুইবার পদত্যাগ করে চারজন শিক্ষক রেকর্ড করেছেন: দেলওয়ার হাসান শিশির | ShakSU',
    publisher: 'Banglanews24',
    category: 'national_tv',
    badge: 'National Portal',
    description: 'Press briefing addressing administrative accountability, faculty governance, and campus integrity.'
  },
  {
    id: 'naya-diganta-1',
    type: 'video',
    youtubeId: 'MdIQ4G-7K0k',
    title: 'শাকসুতে নির্বাচিত হলে ক্যাম্পাস উন্নয়নে কাজ করবে দুর্বার সাস্টিয়ান ঐক্য | SHAKSU',
    publisher: 'Naya Diganta',
    category: 'national_tv',
    badge: 'National Daily',
    description: 'Coverage of the 10-point sustainable campus modernization, digital research labs, and student health welfare manifesto.'
  },
  {
    id: 'shomoyer-alo-1',
    type: 'video',
    youtubeId: 'G9Rzq9MdItM',
    title: 'শাকসু নির্বাচন ঘিরে নির্বাচন কমিশনার-শিক্ষার্থী পাল্টাপাল্টি | Shomoyer Alo',
    publisher: 'Shomoyer Alo',
    category: 'national_tv',
    badge: 'Mainstream Press',
    description: 'News report on ensuring fair, transparent, and violence-free election procedures at SUST.'
  },
  {
    id: 'banglaview-1',
    type: 'video',
    youtubeId: 'caPy6M80QbQ',
    title: 'সিলেটে ২০ তারিখে কি হচ্ছে শাকসু নির্বাচন? || SUST || Update News || Banglaviewtv',
    publisher: 'BANGLAVIEW TV',
    category: 'national_tv',
    badge: 'Regional TV Network',
    description: 'Special broadcast report analyzing candidate debates and student voter expectations.'
  },
  {
    id: 'voice24-1',
    type: 'video',
    youtubeId: '2qDzsrXy00s',
    title: 'শাকসু নির্বাচন নিয়ে কড়া বার্তা দিলেন ভিপি পদপ্রার্থী দেলওয়ার হোসাইন শিশির',
    publisher: 'Voice of 24',
    category: 'speech',
    badge: 'Keynote Message',
    description: 'Direct message to students on meritocracy, campus safety, and progressive educational opportunities.',
    isShort: true
  },
  {
    id: 'speech-dhshishir',
    type: 'video',
    youtubeId: '6-dHTfQ4u_w',
    title: 'শাকসুর দাবিতে শিক্ষার্থীদের মানববন্ধনে দেলোয়ার হাসান শিশিরের বক্তব্য | SUST',
    publisher: 'Dh Shishir Official',
    category: 'speech',
    badge: 'Keynote Address',
    description: 'Public keynote speech delivering student demands for university accountability, research funding, and merit-based hostels.'
  },
  {
    id: 'star-news-1',
    type: 'video',
    youtubeId: 'PTevtJejWLc',
    title: 'শাকসু নির্বাচন উপলক্ষে ‘দুর্বার সাস্টিয়ান ঐক্য’-এর ঐতিহাসিক ইশতেহার প্রকাশ',
    publisher: 'Star News',
    category: 'speech',
    badge: 'Manifesto Launch',
    description: 'Public unveiling of the comprehensive 20-point digital transformation and student career development manifesto.'
  },
  {
    id: 'voice24-2',
    type: 'video',
    youtubeId: 'crHOhZDqi68',
    title: 'দেলোয়ার হোসেন শিশির‎ ভিপি পদপ্রার্থী ‘দুর্বার সাস্টিয়ান ঐক্য’ প্যানেল পরিচিতি',
    publisher: 'Voice of 24',
    category: 'interview',
    badge: 'Candidate Profile',
    description: 'Candidate profile discussion highlighting academic excellence, debate achievements, and social service records.'
  },
  {
    id: 'bgn-tv-1',
    type: 'video',
    youtubeId: 'DVxR6Ekzvvk',
    title: 'শাবিপ্রবিতে শাকসু নির্বাচনের আনুষ্ঠানিক শুরু l SUST Election l BGN TV 24',
    publisher: 'News Beat 24 / BGN TV',
    category: 'national_tv',
    badge: 'Broadcast Coverage',
    description: 'Field broadcast reporting from the university premises on student leadership debates.'
  },
  {
    id: 'alaap-salaap-intro',
    type: 'video',
    youtubeId: 'XB9Tts1jC7M',
    title: 'শাকসু ২০২৬: দুর্বার সাস্টিয়ান প্যানেলের ভিশন কী? | Delowar Hassan Shishir | Intro',
    publisher: 'আলাপ-সালাপ (Alaap-Salaap)',
    category: 'interview',
    badge: 'Leadership Intro',
    description: 'Executive introduction and strategic summary of the university transformation blueprint.'
  },
  {
    id: 'campaign-film',
    type: 'video',
    youtubeId: '-2UeqT4obiE',
    title: 'স্বপ্নের ক্যাম্পাস বিনির্মানে দুর্বার অভিযাত্রা || দুর্বার সাস্টিয়ান ঐক্য',
    publisher: 'Campus Media Archive',
    category: 'speech',
    badge: 'Vision Documentary',
    description: 'Documentary overview detailing the vision for a modern, research-driven, and globally competitive university campus.'
  },

  // --- NATIONAL PRINT & DIGITAL PRESS MENTIONS ---
  {
    id: 'prothom-alo-featured',
    type: 'article',
    articleUrl: 'https://www.prothomalo.com/bangladesh/district/n5ggyur619',
    title: 'শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ের ইংরেজি বিভাগের শিক্ষার্থী দেলোয়ার হাসান শিশির',
    publisher: 'Prothom Alo (প্রথম আলো)',
    category: 'press_article',
    badge: 'Featured News',
    description: 'National coverage in Prothom Alo on student academic excellence and university contributions at Shahjalal University of Science & Technology.'
  },
  {
    id: 'daily-campus-election-230711',
    type: 'article',
    articleUrl: 'https://thedailycampus.com/engineering-university/230711',
    title: 'শাকসু নির্বাচনে দুর্বার সাস্টিয়ান ঐক্য প্যানেলের ভিপি (সহ-সভাপতি) প্রার্থী হিসেবে আলোচনা',
    publisher: 'The Daily Campus',
    category: 'press_article',
    badge: 'SUCSU Election Spotlight',
    description: 'Special news analysis on the leadership candidacy and educational reforms proposed by Daloyar Hassan Shishir.'
  },
  {
    id: 'naya-diganta-campus-edu',
    type: 'article',
    articleUrl: 'https://dailynayadiganta.com/bangladesh/education-campus/5BiZDXWi26N8',
    title: 'শাবিপ্রবি শিক্ষার্থী দেলোয়ার হাসান শিশিরের শিক্ষা ও ক্যাম্পাস কার্যক্রম',
    publisher: 'Daily Naya Diganta (নয়া দিগন্ত)',
    category: 'press_article',
    badge: 'Campus & Education',
    description: 'Feature highlighting student welfare leadership, debate achievements, and language training initiatives at SUST.'
  },
  {
    id: 'dhruba-news-leadership',
    type: 'article',
    articleUrl: 'https://www.dhrubanews.com/details/study/1653',
    title: 'সাস্টিয়ান তরুণ নেতৃত্ব ও শিক্ষামূলক উদ্যোগের স্বীকৃতি',
    publisher: 'Dhruba News',
    category: 'press_article',
    badge: 'Youth Leadership',
    description: 'Recognition of progressive youth leadership, international study fellowship representation, and community education.'
  },
  {
    id: 'daily-campus-panel-230722',
    type: 'article',
    articleUrl: 'https://thedailycampus.com/higher-education/230722',
    title: 'শাকসু নির্বাচনে শিবিরের প্যানেলের শীর্ষ ৩ পদে শিশির-মোজাহিদ-শাকিল',
    publisher: 'The Daily Campus',
    category: 'press_article',
    badge: 'Higher Education Press',
    description: 'Official announcement and panel introduction for the 23-member full SUCSU leadership panel at SUST.'
  },
  {
    id: 'kalbela-article',
    type: 'article',
    articleUrl: 'https://www.kalbela.com/dainikshiksha/campus/257885',
    title: 'শাবিপ্রবিতে শিক্ষার্থীদের অধিকার ও ক্যাম্পাস সংস্কারে দেলোয়ার হাসান শিশিরের প্রেস কভারেজ',
    publisher: 'Dainik Kalbela',
    category: 'press_article',
    badge: 'National Daily',
    description: 'In-depth coverage in Dainik Kalbela (Dainik Shiksha) on campus democratization, student welfare, and academic modernization.'
  },
  {
    id: 'naya-diganta-print',
    type: 'article',
    articleUrl: 'https://dailynayadiganta.com/printed-edition/WOStHzVBNt0V',
    title: 'শাকসু নির্বাচন ও ক্যাম্পাসের উন্নয়ন রূপরেখা: দেলোয়ার হাসান শিশির',
    publisher: 'Daily Naya Diganta (Printed Edition)',
    category: 'press_article',
    badge: 'Printed Newspaper',
    description: 'Special printed edition feature covering the 10-point research acceleration, digital library, and career mentorship roadmap.'
  },
  {
    id: 'dhaka-diary-article',
    type: 'article',
    articleUrl: 'https://thedhakadiary.com/news/10431',
    title: 'শাবিপ্রবিতে ছাত্ররাজনীতি ও শিক্ষার্থীবান্ধব রূপরেখা',
    publisher: 'The Dhaka Diary',
    category: 'press_article',
    badge: 'National Portal',
    description: 'Comprehensive journalistic report detailing student leadership, campus healthcare welfare, and university governance.'
  }
];

export const NationalMediaSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'national_tv' | 'interview' | 'speech' | 'press_article'>('all');
  const [selectedVideo, setSelectedVideo] = useState<MediaItem | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredItems = NATIONAL_MEDIA_ITEMS.filter(item => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const visibleItems = isExpanded ? filteredItems : filteredItems.slice(0, 6);

  return (
    <section id="media-presence" className="py-20 bg-slate-900 text-white relative overflow-hidden border-t border-b border-slate-800">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-500/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/90 border border-teal-500/30 text-teal-400 text-xs font-bold uppercase tracking-wider shadow-lg">
            <Tv className="w-3.5 h-3.5 text-teal-400 animate-pulse" />
            <span>National Media Presence & Press Mentions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Broadcast Interviews & <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">National Media Presence</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Featured in leading national dailies, television networks, and campus media for academic, diplomatic, and leadership contributions.
          </p>
        </div>

        {/* Media Channel Press Bar */}
        <div className="mb-12 bg-slate-800/60 border border-slate-700/60 rounded-2xl p-4 sm:p-6 backdrop-blur-md">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider text-center mb-4">
            Featured Across National Television & Mainstream Press Networks
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs sm:text-sm font-bold text-slate-300">
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 rounded-lg border border-slate-700/60">
              <span className="w-2 h-2 rounded-full bg-rose-500" /> Prothom Alo
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 rounded-lg border border-slate-700/60">
              <span className="w-2 h-2 rounded-full bg-red-500" /> ATN Bangla News
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 rounded-lg border border-slate-700/60">
              <span className="w-2 h-2 rounded-full bg-blue-500" /> Daily Samakal
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 rounded-lg border border-slate-700/60">
              <span className="w-2 h-2 rounded-full bg-emerald-500" /> The Daily Campus
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 rounded-lg border border-slate-700/60">
              <span className="w-2 h-2 rounded-full bg-amber-500" /> Banglanews24
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 rounded-lg border border-slate-700/60">
              <span className="w-2 h-2 rounded-full bg-orange-500" /> Dainik Kalbela
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 rounded-lg border border-slate-700/60">
              <span className="w-2 h-2 rounded-full bg-cyan-500" /> Naya Diganta
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 rounded-lg border border-slate-700/60">
              <span className="w-2 h-2 rounded-full bg-indigo-500" /> Dhruba News
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 rounded-lg border border-slate-700/60">
              <span className="w-2 h-2 rounded-full bg-purple-500" /> Shomoyer Alo
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 rounded-lg border border-slate-700/60">
              <span className="w-2 h-2 rounded-full bg-teal-500" /> The Dhaka Diary
            </span>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => { setActiveCategory('all'); setIsExpanded(false); }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20'
                : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
            }`}
          >
            <span>All Media Presence</span>
          </button>

          <button
            onClick={() => { setActiveCategory('national_tv'); setIsExpanded(false); }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
              activeCategory === 'national_tv'
                ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20'
                : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
            }`}
          >
            <Tv className="w-3.5 h-3.5" />
            <span>National TV Broadcasts</span>
          </button>

          <button
            onClick={() => { setActiveCategory('press_article'); setIsExpanded(false); }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
              activeCategory === 'press_article'
                ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20'
                : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
            }`}
          >
            <Newspaper className="w-3.5 h-3.5" />
            <span>Press & News Mentions</span>
          </button>

          <button
            onClick={() => { setActiveCategory('interview'); setIsExpanded(false); }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
              activeCategory === 'interview'
                ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20'
                : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>In-Depth Interviews</span>
          </button>

          <button
            onClick={() => { setActiveCategory('speech'); setIsExpanded(false); }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
              activeCategory === 'speech'
                ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20'
                : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
            }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>Keynote Speeches</span>
          </button>
        </div>

        {/* Media Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800/80 border border-slate-700/70 hover:border-teal-500/60 rounded-3xl overflow-hidden shadow-xl transition duration-300 group flex flex-col justify-between"
            >
              {/* Media Visual Container */}
              {item.type === 'video' && item.youtubeId ? (
                <div 
                  className="relative aspect-video w-full overflow-hidden bg-slate-950 cursor-pointer" 
                  onClick={() => setSelectedVideo(item)}
                >
                  <img
                    src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/shishir-photo-focused.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-teal-500/90 group-hover:bg-teal-400 text-slate-950 flex items-center justify-center shadow-lg shadow-teal-500/30 group-hover:scale-110 transition duration-300">
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    </div>
                  </div>

                  {/* Badge Top Left */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/80 text-[11px] font-bold text-teal-300 backdrop-blur-md flex items-center gap-1.5">
                    <ShieldCheck className="w-3 h-3 text-teal-400" />
                    <span>{item.badge}</span>
                  </div>

                  {/* Channel Name Bottom Left */}
                  <div className="absolute bottom-3 left-3 text-xs font-semibold text-slate-300 bg-slate-900/70 px-2.5 py-1 rounded-md backdrop-blur-xs">
                    {item.publisher}
                  </div>
                </div>
              ) : (
                /* Press Article Card Header */
                <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 border-b border-slate-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center">
                      <Newspaper className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-teal-300 uppercase tracking-wider">{item.publisher}</div>
                      <div className="text-[11px] text-slate-400 font-medium">{item.badge}</div>
                    </div>
                  </div>
                  <a
                    href={item.articleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                    title="Read Original Article"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}

              {/* Text Content */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-white line-clamp-2 leading-snug group-hover:text-teal-300 transition">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between">
                  {item.type === 'video' ? (
                    <button
                      onClick={() => setSelectedVideo(item)}
                      className="text-xs font-bold text-teal-400 hover:text-teal-300 flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Watch Full Video</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <a
                      href={item.articleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-teal-400 hover:text-teal-300 flex items-center gap-1.5"
                    >
                      <span>Read Article</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <span className="text-[11px] font-semibold text-slate-400">
                    {item.publisher}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EXPAND / SHOW MORE ARCHIVE TOGGLE BUTTON */}
        {filteredItems.length > 6 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-6 py-3.5 rounded-2xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-teal-500/20 transition inline-flex items-center gap-2 cursor-pointer"
            >
              <span>
                {isExpanded 
                  ? 'Show Less (Compact View)' 
                  : `Explore Full Archive (${filteredItems.length} Broadcasts & News Coverage)`}
              </span>
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}
      </div>

      {/* Interactive Video Modal */}
      {selectedVideo && selectedVideo.youtubeId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl relative">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-teal-500/10 text-teal-400 border border-teal-500/20 text-xs font-bold">
                  {selectedVideo.publisher}
                </span>
                <span className="text-sm font-semibold text-white truncate max-w-md">
                  {selectedVideo.title}
                </span>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Responsive YouTube Embed */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-slate-950/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
              <p className="max-w-xl">{selectedVideo.description}</p>
              <a
                href={`https://www.youtube.com/watch?v=${selectedVideo.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold flex items-center gap-1.5 transition shrink-0"
              >
                <span>View on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
