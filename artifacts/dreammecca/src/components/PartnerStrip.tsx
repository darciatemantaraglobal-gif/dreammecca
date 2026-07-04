import React from 'react';

const logos = [
  { slug: 'saudia', alt: 'Saudia Airlines' },
  { slug: 'garuda-indonesia', alt: 'Garuda Indonesia' },
  { slug: 'emirates', alt: 'Emirates' },
  { slug: 'etihad-airways', alt: 'Etihad Airways' },
  { slug: 'qatar-airways', alt: 'Qatar Airways' },
  { slug: 'turkish-airlines', alt: 'Turkish Airlines' },
];

const textPartners = ['Kementerian Agama RI', 'HIMPUH'];

export default function PartnerStrip() {
  return (
    <section className="px-[7vw] py-[40px] bg-white">
      <div className="max-w-[1180px] mx-auto flex flex-wrap items-center justify-center gap-x-[48px] gap-y-[24px]">
        {logos.map(logo => (
          <img
            key={logo.slug}
            src={`/images/partners/${logo.slug}.png`}
            alt={logo.alt}
            className="h-[28px] md:h-[34px] w-auto object-contain"
            style={{ opacity: 0.85 }}
          />
        ))}
        {textPartners.map(name => (
          <span key={name} className="text-[15px] font-semibold" style={{ color: '#6B6B85' }}>
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
