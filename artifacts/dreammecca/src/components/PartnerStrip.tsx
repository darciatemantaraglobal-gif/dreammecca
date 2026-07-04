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
      <div className="max-w-[1180px] mx-auto grid grid-cols-3 md:grid-cols-6 gap-x-[32px] gap-y-[28px] items-center justify-items-center">
        {logos.map(logo => (
          <div key={logo.slug} className="flex items-center justify-center" style={{ width: '100%', height: 40 }}>
            <img
              src={`/images/partners/${logo.slug}.png`}
              alt={logo.alt}
              style={{ height: '40px', width: 'auto', maxWidth: '120px', objectFit: 'contain', opacity: 0.8 }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
