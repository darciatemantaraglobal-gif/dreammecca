import React from 'react';

export default function PartnerStrip() {
  const partners = [
    "Kemenag RI",
    "Saudia Airlines",
    "Garuda Indonesia",
    "Makkah Hilton",
    "Zamzam Tower",
    "Bank BRI Syariah",
    "BPIH",
    "Madinah Hilton"
  ];

  return (
    <div className="bg-dream-cream py-8 border-b border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <h3 className="text-center text-sm font-medium text-dream-navy/60 uppercase tracking-wider">
          Dipercaya & Bermitra Dengan
        </h3>
      </div>
      
      <div className="relative flex overflow-hidden">
        {/* We need two identical arrays to create seamless infinite loop */}
        <div className="flex animate-marquee whitespace-nowrap">
          {[...partners, ...partners].map((partner, index) => (
            <div 
              key={index}
              className="mx-4 px-6 py-2 rounded-full border border-dream-navy/20 text-dream-navy font-semibold text-sm bg-white/50 backdrop-blur-sm"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </div>
  );
}
