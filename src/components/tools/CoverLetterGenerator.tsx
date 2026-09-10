import React, { useState } from 'react';
import { FileText, Copy, Check, Download, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CoverLetterGenerator: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    emailOrPhone: '',
    jobTitle: '',
    companyName: '',
    experienceYears: '1-3',
    keySkills: '',
    industryTone: 'Corporate & MNC',
    customNotes: ''
  });

  const [generatedLetter, setGeneratedLetter] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    const { fullName, emailOrPhone, jobTitle, companyName, experienceYears, keySkills, industryTone } = formData;
    
    const name = fullName.trim() || 'Candidate Name';
    const contact = emailOrPhone.trim() || 'contact@example.com | +880 1XXXXXXXXX';
    const role = jobTitle.trim() || 'Executive Professional';
    const company = companyName.trim() || 'Hiring Team';
    const skills = keySkills.trim() || 'strategic communication, project management, and analytical problem-solving';

    let toneIntro = '';
    let toneClosing = '';

    if (industryTone.includes('MNC') || industryTone.includes('Corporate')) {
      toneIntro = `I am writing to express my strong enthusiasm and formal application for the position of ${role} at ${company}. Having tracked ${company}'s standard of excellence in the market, I am eager to leverage my ${experienceYears} years of experience and domain knowledge to drive measurable impact for your team.`;
      toneClosing = `Thank you for your time and consideration. I welcome the opportunity to discuss how my competencies in ${skills} align with ${company}'s strategic goals in a formal interview.`;
    } else if (industryTone.includes('NGO') || industryTone.includes('Development')) {
      toneIntro = `I am deeply inspired to submit my application for the ${role} opening at ${company}. My background of ${experienceYears} years in high-impact initiatives has reinforced my commitment to mission-driven execution and stakeholder empowerment.`;
      toneClosing = `I look forward to the privilege of discussing how my dedication and background in ${skills} can contribute to ${company}'s humanitarian and developmental mandates.`;
    } else {
      toneIntro = `I am excited to apply for the ${role} position at ${company}. With ${experienceYears} years of hands-on experience and a passion for rapid innovation, I thrive in agile environments where execution speed and problem-solving are paramount.`;
      toneClosing = `I would love the opportunity to connect and demonstrate how my skillset in ${skills} can immediately contribute to ${company}'s growth milestones.`;
    }

    const letter = `${name}
${contact}
Date: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}

To:
The Hiring Manager / HR Department
${company}

Subject: Application for the Position of ${role}

Dear Hiring Manager,

${toneIntro}

Throughout my professional journey, I have cultivated specialized expertise in ${skills}. My focus has always remained on delivering quantifiable outcomes, streamlining workflow processes, and collaborating across multidisciplinary teams to exceed organizational benchmarks.

Key qualifications that make me a strong fit for ${company} include:
• Proven track record of operational execution and analytical rigor with ${experienceYears} years of active experience.
• Core proficiencies in ${skills}, applied directly to solve complex organizational challenges.
• Strong communication, leadership mindset, and rapid adaptability in fast-paced corporate environments.

${toneClosing}

Sincerely,

${name}
${role} Candidate`;

    setGeneratedLetter(letter);
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLetter);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const downloadText = () => {
    const element = document.createElement("a");
    const file = new Blob([generatedLetter], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = `${(formData.jobTitle || 'Cover_Letter').replace(/\s+/g, '_')}_Cover_Letter.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl text-white">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
        <div className="p-3 bg-blue-500/20 text-blue-400 rounded-2xl border border-blue-500/30">
          <FileText className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            AI-Style Professional Cover Letter Generator
            <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-medium">BD Job Market Ready</span>
          </h3>
          <p className="text-sm text-slate-400">Generate an ATS-compliant, tailored cover letter for corporate, NGO, bank, and tech job circulars.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <form onSubmit={handleGenerate} className="lg:col-span-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Delowar Hassan"
                value={formData.fullName}
                onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-indigo-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Email or Phone *</label>
              <input
                type="text"
                required
                placeholder="e.g. yourname@gmail.com | 017XXXXXXXX"
                value={formData.emailOrPhone}
                onChange={e => setFormData({ ...formData, emailOrPhone: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-indigo-500 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Target Job Title *</label>
              <input
                type="text"
                required
                placeholder="e.g. Management Trainee / English Faculty"
                value={formData.jobTitle}
                onChange={e => setFormData({ ...formData, jobTitle: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-indigo-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Company / Organization *</label>
              <input
                type="text"
                required
                placeholder="e.g. Grameenphone / BRAC / UCC"
                value={formData.companyName}
                onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-indigo-500 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Experience Level</label>
              <select
                value={formData.experienceYears}
                onChange={e => setFormData({ ...formData, experienceYears: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-indigo-500 outline-none"
              >
                <option value="Fresher / Entry Level">Fresher / Recent Graduate</option>
                <option value="1-3">1 to 3 Years (Junior / Mid)</option>
                <option value="4-7">4 to 7 Years (Mid / Senior)</option>
                <option value="7+">7+ Years (Lead / Executive)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Industry / Tone</label>
              <select
                value={formData.industryTone}
                onChange={e => setFormData({ ...formData, industryTone: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-indigo-500 outline-none"
              >
                <option value="Corporate & MNC">Corporate, Bank & MNC</option>
                <option value="NGO & Development">NGO, INGO & Development</option>
                <option value="Tech & Startup">Tech, Startup & EdTech</option>
                <option value="Academic & Teaching">Academic, University & Coaching</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Key Skills & Core Strengths (Comma separated) *</label>
            <textarea
              required
              rows={2}
              placeholder="e.g. English pedagogy, curriculum design, leadership communication, IELTS training"
              value={formData.keySkills}
              onChange={e => setFormData({ ...formData, keySkills: e.target.value })}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white focus:border-indigo-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 hover:opacity-95 text-white font-bold text-xs shadow-lg shadow-indigo-950/40 transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4" /> Generate Professional Cover Letter
          </button>
        </form>

        <div className="lg:col-span-6 flex flex-col justify-between bg-slate-950/90 rounded-2xl border border-slate-800 p-5">
          {generatedLetter ? (
            <>
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-bold text-emerald-400">Generated Cover Letter Preview</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={copyToClipboard}
                      className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                    <button
                      onClick={downloadText}
                      className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition"
                    >
                      <Download className="w-3.5 h-3.5" /> Download
                    </button>
                  </div>
                </div>
                <div className="max-h-[380px] overflow-y-auto pr-2 text-xs text-slate-300 whitespace-pre-line leading-relaxed font-mono">
                  {generatedLetter}
                </div>
              </div>
            </>
          ) : (
            <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center p-6 space-y-3 text-slate-500">
              <FileText className="w-12 h-12 stroke-[1.2] text-slate-700" />
              <div className="text-sm font-semibold text-slate-400">Ready to Draft Your Cover Letter</div>
              <p className="text-xs max-w-xs text-slate-500">Fill in the job circular details on the left to generate an authentic, ATS-tested draft.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
