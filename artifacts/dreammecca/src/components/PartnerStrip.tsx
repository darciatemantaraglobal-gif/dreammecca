import React from 'react';

const logos = [
  { slug: 'saudia', alt: 'Saudia Airlines' },
  { slug: 'garuda-indonesia', alt: 'Garuda Indonesia' },
  { slug: 'emirates', alt: 'Emirates' },
  { slug: 'etihad-airways', alt: 'Etihad Airways' },
  { slug: 'qatar-airways', alt: 'Qatar Airways' },
  { slug: 'turkish-airlines', alt: 'Turkish Airlines' },
];

export default function PartnerStrip() {
  return (
    <section className="px-[7vw] py-[40px] bg-white">
      <div className="max-w-[1180px] mx-auto flex flex-wrap items-center justify-center gap-x-[48px] gap-y-[24px]">
        {logos.map(logo => (
          <div key={logo.slug} className="flex items-center justify-center" style={{ width: 120, height: 44 }}>
            <img
              src={`/images/partners/${logo.slug}.png`}
              alt={logo.alt}
              style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', objectFit: 'contain', opacity: 0.85 }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
