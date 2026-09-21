import React, { useEffect, useRef } from 'react';

interface AdSenseBannerProps {
  slot?: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal';
  responsive?: boolean;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle?: any[];
  }
}

export const AdSenseBanner: React.FC<AdSenseBannerProps> = ({
  slot = '1234567890',
  format = 'auto',
  responsive = true,
  className = ''
}) => {
  const adRef = useRef<HTMLModElement>(null);
  const isLoaded = useRef(false);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && !isLoaded.current) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        isLoaded.current = true;
      }
    } catch (e) {
      // Ignore Adsbygoogle push error during fast re-renders
    }
  }, []);

  return (
    <div className={`my-6 text-center overflow-hidden ${className}`}>
      <div className="text-[9px] uppercase tracking-widest text-slate-400 mb-1 font-semibold">
        Advertisement
      </div>
      <div className="bg-slate-50/50 border border-slate-200/60 rounded-2xl p-2 min-h-[90px] flex items-center justify-center">
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-6517318043008526"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? 'true' : 'false'}
        />
      </div>
    </div>
  );
};
