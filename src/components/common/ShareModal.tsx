import React, { useState } from 'react';
import { Share2, Copy, Check, X, MessageSquare, Send, Globe } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  url: string;
  summary?: string;
  category?: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  title,
  url,
  summary = 'Explore high-yield geopolitical intelligence, English mastery loops, and career tools on Daloyar Hassan Shishir\'s portal.',
  category = 'Knowledge Portal'
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Add referral tag for tracking
  const fullUrl = url.includes('?') ? `${url}&ref=referral` : `${url}?ref=referral`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareText = encodeURIComponent(`${title} - ${summary}\n\n`);
  const encodedUrl = encodeURIComponent(fullUrl);

  const twitterUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${encodedUrl}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${shareText}${encodedUrl}`;
  const telegramUrl = `https://t.me/share/url?url=${encodedUrl}&text=${shareText}`;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-md w-full p-6 sm:p-7 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-600 cursor-pointer transition"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="space-y-1.5 mb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-900 text-xs font-bold uppercase tracking-wider">
            <Share2 className="w-3.5 h-3.5 text-teal-800" /> Share & Refer {category}
          </div>
          <h3 className="text-lg font-black text-slate-900 leading-snug">
            {title}
          </h3>
          <p className="text-xs text-slate-600">
            Share this resource with scholars, peers, and candidates to invite them to learn together.
          </p>
        </div>

        {/* Social Share Grid */}
        <div className="grid grid-cols-4 gap-2.5 mb-5">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-3 rounded-2xl bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 transition group cursor-pointer"
          >
            {/* LinkedIn SVG */}
            <svg className="w-5 h-5 mb-1 group-hover:scale-110 transition fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v7.6H9.2v-7.6H6.46M7.83 6.25a1.63 1.63 0 0 0-1.64 1.63c0 .9.74 1.63 1.64 1.63a1.63 1.63 0 0 0 1.63-1.63c0-.9-.73-1.63-1.63-1.63Z" />
            </svg>
            <span className="text-[11px] font-bold">LinkedIn</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 transition group cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 mb-1 group-hover:scale-110 transition" />
            <span className="text-[11px] font-bold">WhatsApp</span>
          </a>

          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 transition group cursor-pointer"
          >
            {/* X (Twitter) SVG */}
            <svg className="w-5 h-5 mb-1 group-hover:scale-110 transition fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span className="text-[11px] font-bold">X</span>
          </a>

          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-3 rounded-2xl bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 transition group cursor-pointer"
          >
            <Send className="w-5 h-5 mb-1 group-hover:scale-110 transition" />
            <span className="text-[11px] font-bold">Telegram</span>
          </a>
        </div>

        {/* Copy Link Section */}
        <div className="space-y-2">
          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Direct Referral Link</label>
          <div className="flex items-center gap-2 p-2 bg-slate-50 border border-slate-200 rounded-2xl">
            <Globe className="w-4 h-4 text-slate-400 ml-2 shrink-0" />
            <input
              type="text"
              readOnly
              value={fullUrl}
              className="bg-transparent text-xs text-slate-700 w-full focus:outline-none font-mono"
            />
            <button
              onClick={handleCopy}
              className="px-3.5 py-2 rounded-xl bg-teal-900 hover:bg-teal-950 text-white font-bold text-xs flex items-center gap-1.5 shrink-0 transition cursor-pointer shadow-xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
