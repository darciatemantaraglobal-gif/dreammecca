import React from 'react';

const partners = [
  'Kemenag RI',
  'Saudia Airlines',
  'Garuda Indonesia',
  'Makkah Hilton',
  'Zamzam Tower',
  'Bank BRI Syariah',
  'BPIH',
  'Madinah Hilton',
];

export default function PartnerStrip() {
  return (
    <div className="bg-dream-cream py-7 border-b border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-5">
        <h3 className="text-center text-xs font-semibold text-dream-navy/50 uppercase tracking-widest">
          Dipercaya &amp; Bermitra Dengan
        </h3>
      </div>

      {/*
        Two identical rows so the marquee loops perfectly.
        CSS animation only — no JS, no touch events needed.
        Will-change: transform tells mobile GPU to composite this layer.
      */}
      <div
        className="relative flex overflow-hidden"
        aria-label="Daftar mitra Dreammecca"
        aria-hidden="true"   /* decorative for accessibility */
      >
        <div
          className="flex gap-4 animate-partner-marquee"
          style={{ willChange: 'transform' }}
        >
          {[...partners, ...partners, ...partners].map((partner, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-5 py-2 rounded-full border border-dream-navy/15
                         text-dream-navy/75 font-semibold text-sm bg-white/70 whitespace-nowrap
                         select-none"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes partnerMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        .animate-partner-marquee {
          animation: partnerMarquee 28s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-partner-marquee { animation: none; }
        }
      ` }} />
    </div>
  );
}
