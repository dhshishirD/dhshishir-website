import React from 'react';

// Set to true when ready to activate Google AdSense across the platform
export const ADSENSE_ENABLED = false;

interface AdSenseSlotProps {
  slotId: string;
  format?: 'auto' | 'rectangle' | 'horizontal';
  className?: string;
  label?: string;
}

export const AdSenseSlot: React.FC<AdSenseSlotProps> = ({
  slotId,
  format = 'auto',
  className = '',
  label = 'Sponsored'
}) => {
  if (!ADSENSE_ENABLED) {
    return null; // Zero layout footprint when disabled
  }

  return (
    <div className={`my-8 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-center ${className}`}>
      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
        {label}
      </div>
      <div className="min-h-[100px] flex items-center justify-center bg-slate-950/80 rounded-xl border border-dashed border-slate-800 text-slate-600 text-xs">
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot={slotId}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
};
