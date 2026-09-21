import React, { useState, useRef } from 'react';
import { 
  Trophy, Download, Copy, Check, X, ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ScorecardData {
  toolTitle: string;
  metricLabel: string;
  metricValue: string;
  bandScore?: string;
  skillName: string;
  streakOrDetail?: string;
  url: string;
}

interface SocialScorecardModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ScorecardData;
}

export const SocialScorecardModal: React.FC<SocialScorecardModalProps> = ({
  isOpen,
  onClose,
  data
}) => {
  const [copied, setCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const shareText = `🎯 Just scored ${data.metricValue} on the ${data.toolTitle} (dhshishir.com)!\n\n🔥 Skill: ${data.skillName} | ${data.bandScore ? `Estimated Band: ${data.bandScore}` : ''}\nPractice free with live IELTS diagnostics: ${data.url}\n\n#IELTS #IELTSPrep #dhshishir`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    confetti({ particleCount: 40, spread: 50, origin: { y: 0.6 } });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShareWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`, '_blank');
  };

  const handleShareTelegram = () => {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(data.url)}&text=${encodeURIComponent(shareText)}`, '_blank');
  };

  const handleShareReddit = () => {
    window.open(`https://reddit.com/r/IELTS/submit?title=${encodeURIComponent(`Scored ${data.metricValue} on free IELTS ${data.skillName} diagnostic tool`)}&url=${encodeURIComponent(data.url)}`, '_blank');
  };

  const handleDownloadPNG = () => {
    // Generate Canvas Badge
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 360;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Background gradient
    const grad = ctx.createLinearGradient(0, 0, 600, 360);
    grad.addColorStop(0, '#0f172a');
    grad.addColorStop(1, '#134e4a');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 600, 360);

    // Decorative Borders
    ctx.strokeStyle = '#2dd4bf';
    ctx.lineWidth = 4;
    ctx.strokeRect(16, 16, 568, 328);

    // Top Title
    ctx.fillStyle = '#2dd4bf';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText('IELTS DIAGNOSTIC ENGINE | DHSHISHIR.COM', 40, 55);

    // Tool Name
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px sans-serif';
    ctx.fillText(data.toolTitle, 40, 95);

    // Metric Box
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.fillRect(40, 120, 240, 100);
    ctx.strokeStyle = 'rgba(45, 212, 191, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(40, 120, 240, 100);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px sans-serif';
    ctx.fillText(data.metricLabel.toUpperCase(), 55, 145);

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'black 32px sans-serif';
    ctx.fillText(data.metricValue, 55, 190);

    // Band Box
    if (data.bandScore) {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(300, 120, 260, 100);
      ctx.strokeRect(300, 120, 260, 100);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '12px sans-serif';
      ctx.fillText('ESTIMATED RATING', 315, 145);

      ctx.fillStyle = '#34d399';
      ctx.font = 'black 32px sans-serif';
      ctx.fillText(data.bandScore, 315, 190);
    }

    // Bottom Verified Tag
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '12px sans-serif';
    ctx.fillText(`Verified candidate score on ${new Date().toLocaleDateString()}`, 40, 260);

    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 14px sans-serif';
    ctx.fillText('dhshishir.com/tools • Free Academic Tools Suite', 40, 300);

    // Trigger download
    const imgUrl = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = imgUrl;
    a.download = `IELTS_Scorecard_${data.skillName.replace(/\s+/g, '_')}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl space-y-6 relative text-slate-900">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="p-3 bg-teal-50 text-teal-800 rounded-2xl border border-teal-200">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-slate-900">Share Your Achievement</h4>
            <p className="text-xs text-slate-600">Download your verified score badge or share directly with your study circle.</p>
          </div>
        </div>

        {/* Visual Badge Preview */}
        <div ref={cardRef} className="p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 text-white rounded-3xl border-2 border-teal-400/40 shadow-xl space-y-4">
          <div className="flex justify-between items-center text-[10px] text-teal-300 font-mono">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> DHSHISHIR.COM DIAGNOSTIC BADGE
            </span>
            <span>{new Date().toLocaleDateString()}</span>
          </div>

          <div>
            <span className="text-xs text-slate-400 font-semibold">{data.skillName}</span>
            <h5 className="text-lg font-black text-white">{data.toolTitle}</h5>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-white/10 rounded-xl border border-white/10">
              <div className="text-[10px] text-slate-400">{data.metricLabel}</div>
              <div className="text-2xl font-black text-teal-300">{data.metricValue}</div>
            </div>
            {data.bandScore && (
              <div className="p-3 bg-white/10 rounded-xl border border-white/10">
                <div className="text-[10px] text-slate-400">Band Rating</div>
                <div className="text-2xl font-black text-emerald-400">{data.bandScore}</div>
              </div>
            )}
          </div>

          <div className="pt-2 border-t border-white/10 flex justify-between items-center text-[10px] text-slate-400">
            <span>Free Browser Assessment</span>
            <span className="text-amber-400 font-bold">dhshishir.com</span>
          </div>
        </div>

        {/* Share Actions Grid */}
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2 text-xs font-bold">
            <button
              onClick={handleDownloadPNG}
              className="py-3 px-4 rounded-xl bg-teal-900 hover:bg-teal-800 text-white transition flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Download className="w-4 h-4" /> Download Badge PNG
            </button>
            <button
              onClick={handleCopyText}
              className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition flex items-center justify-center gap-2 cursor-pointer border border-slate-200"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied to Clipboard!' : 'Copy Share Text'}
            </button>
          </div>

          {/* Social Channels */}
          <div className="flex gap-2 text-xs font-semibold">
            <button
              onClick={handleShareWhatsApp}
              className="flex-1 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 transition text-center cursor-pointer"
            >
              WhatsApp
            </button>
            <button
              onClick={handleShareTelegram}
              className="flex-1 py-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 transition text-center cursor-pointer"
            >
              Telegram
            </button>
            <button
              onClick={handleShareReddit}
              className="flex-1 py-2.5 rounded-xl bg-orange-50 hover:bg-orange-100 text-orange-800 border border-orange-200 transition text-center cursor-pointer"
            >
              r/IELTS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
