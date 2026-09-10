import React from 'react';

interface AdSenseSlotProps {
  slotId?: string;
  format?: 'auto' | 'rectangle' | 'horizontal';
  label?: string;
  className?: string;
}

export const AdSenseSlot: React.FC<AdSenseSlotProps> = ({
  slotId = '0000000000',
  label = 'Sponsored Advertisement',
  className = ''
}) => {
  return (
    <div className={`my-8 p-4 bg-slate-900/40 border border-dashed border-slate-700/80 rounded-2xl flex flex-col items-center justify-center text-center overflow-hidden backdrop-blur-sm ${className}`}>
      <span className="text-[11px] font-medium tracking-wider uppercase text-slate-400 mb-2">
        {label}
      </span>
      <div className="w-full min-h-[90px] md:min-h-[100px] flex items-center justify-center bg-slate-800/40 rounded-xl p-3 text-slate-400 text-xs border border-slate-800">
        <div className="flex flex-col items-center gap-1">
          <span className="font-semibold text-slate-300">Google AdSense Space</span>
          <span className="text-[10px] text-slate-500">Slot #{slotId} • Policy Compliant Responsive Unit</span>
        </div>
      </div>
    </div>
  );
};
