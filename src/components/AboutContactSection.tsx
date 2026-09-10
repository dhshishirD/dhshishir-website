import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Globe, Phone, Linkedin } from 'lucide-react';

export const AboutContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              About the Creator
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Daloyar Hassan Shishir
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              MA & BA in English Language and Literature from Shahjalal University of Science and Technology (SUST). Senior Lecturer of English at UCC with 7+ years of experience guiding thousands of university aspirants, Young Leaders Program Fellow (China 2025), and dedicated career & skill development mentor.
            </p>

            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 text-indigo-400">
                  <Mail className="w-4 h-4" />
                </div>
                <span>contactwithshishir@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 text-emerald-400">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+880 1627-714636 (WhatsApp Available)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 text-blue-400">
                  <Linkedin className="w-4 h-4" />
                </div>
                <a
                  href="https://www.linkedin.com/in/daloyar-hassan1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition"
                >
                  linkedin.com/in/daloyar-hassan1
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-slate-900 rounded-xl border border-slate-800 text-amber-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Sylhet & Jashore, Bangladesh</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-6 sm:p-8 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message / Career Inquiry</h3>
              <p className="text-xs text-slate-400 mb-6">Have a question about courses, admissions English, CV review, or youth initiatives? Reach out directly.</p>

              {submitted ? (
                <div className="p-6 bg-emerald-950/60 border border-emerald-500/40 rounded-2xl text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Thank you for your message!</h4>
                  <p className="text-xs text-slate-300">I will get back to you at your email as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Tanvir Ahmed"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="you@example.com"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Subject / Inquiry Type</label>
                    <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500">
                      <option>10 Minute School Course Advice</option>
                      <option>Pro ATS CV Review Service</option>
                      <option>UCC / Admission English Coaching</option>
                      <option>Youth Leadership & Policy Dialogue</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Your Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Write your message or question here..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 hover:opacity-95 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-lg transition cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
