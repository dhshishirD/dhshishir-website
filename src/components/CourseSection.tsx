import { useState } from 'react';
import { COURSES_DATA } from '../data/coursesData';
import { Search, Star, ExternalLink, Tag, Check } from 'lucide-react';

export const CourseSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProvider, setSelectedProvider] = useState<string>('All');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const categories = ['All', 'English', 'Career & Corporate', 'Tech & Freelancing', 'Govt & BCS'];
  const providers = ['All', '10 Minute School', 'Bohubrihi', 'Ostad'];

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesProvider = selectedProvider === 'All' || course.provider === selectedProvider;
    return matchesSearch && matchesCategory && matchesProvider;
  });

  const copyPromo = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section id="courses" className="py-20 bg-slate-950/60 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-wider">
            Verified Bangladesh EdTech Courses
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            10 Minute School & Top Courses
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Enroll with exclusive discount promo codes and affiliate benefits verified by Daloyar Hassan Shishir.
          </p>
        </div>

        <div className="bg-slate-900/80 p-5 rounded-3xl border border-slate-800 mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            <div className="md:col-span-6 relative">
              <Search className="w-5 h-5 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses (e.g. Spoken English, Excel, BCS)..."
                className="w-full bg-slate-950 border border-slate-800 rounded-2xl pl-12 pr-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="md:col-span-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-500"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>{c === 'All' ? 'All Categories' : c}</option>
                ))}
              </select>
            </div>

            <div className="md:col-span-3">
              <select
                value={selectedProvider}
                onChange={(e) => setSelectedProvider(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-500"
              >
                {providers.map((p) => (
                  <option key={p} value={p}>{p === 'All' ? 'All Providers' : p}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-slate-900/90 rounded-3xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 hover:shadow-2xl transition group"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-950">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  
                  {course.badge && (
                    <div className="absolute top-3 left-3 bg-indigo-600 text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-lg">
                      {course.badge}
                    </div>
                  )}

                  <div className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded-xl text-xs font-semibold text-emerald-400 border border-emerald-500/30">
                    {course.provider}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-semibold text-indigo-400">{course.category}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span className="font-bold text-slate-200">{course.rating}</span>
                      <span>({course.studentsCount})</span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white line-clamp-2 leading-snug">
                    {course.title}
                  </h3>

                  <p className="text-xs text-slate-400">
                    Instructor: <span className="text-slate-300 font-medium">{course.instructor}</span>
                  </p>

                  <div className="space-y-1.5 pt-2">
                    {course.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-3 border-t border-slate-800/80 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-black text-emerald-400">৳ {course.discountPrice}</span>
                    <span className="text-xs text-slate-500 line-through ml-2">৳ {course.originalPrice}</span>
                  </div>

                  {course.promoCode && (
                    <button
                      onClick={() => copyPromo(course.promoCode!)}
                      className="text-[11px] font-bold text-indigo-400 hover:text-indigo-300 bg-indigo-950/60 px-2.5 py-1 rounded-lg border border-indigo-800/60 flex items-center gap-1 cursor-pointer"
                    >
                      <Tag className="w-3 h-3" />
                      <span>{copiedCode === course.promoCode ? 'Copied!' : course.promoCode}</span>
                    </button>
                  )}
                </div>

                <a
                  href={course.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 hover:opacity-95 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-indigo-950 transition"
                >
                  <span>Enroll with Discount</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
