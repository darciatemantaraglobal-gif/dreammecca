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
      <div className="max-w-[1180px] mx-auto grid grid-cols-3 md:grid-cols-6 gap-x-[24px] gap-y-[24px] items-center justify-items-center">
        {logos.map(logo => (
          <div key={logo.slug} className="w-[110px] h-[46px] md:w-[130px] md:h-[54px] flex items-center justify-center flex-none">
            <img
              src={`/images/partners/${logo.slug}.png`}
              alt={logo.alt}
              className="max-w-full max-h-full object-contain"
              style={{ opacity: 0.85 }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
