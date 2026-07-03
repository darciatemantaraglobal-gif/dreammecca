import React from 'react';

const partners = [
  'Saudia Airlines',
  'Garuda Indonesia',
  'FlyDubai',
  'Kementerian Agama RI',
  'HIMPUH',
  'PPIU Resmi',
];

export default function PartnerStrip() {
  return (
    <section
      className="px-[7vw] py-[44px]"
      style={{ background: '#fff', borderBottom: '1px solid rgba(27,27,54,0.10)' }}
    >
      <div className="max-w-[1180px] mx-auto flex justify-between flex-wrap gap-[28px_40px] items-center">
        {partners.map(p => (
          <span
            key={p}
            className="text-[15px] font-bold tracking-[0.01em]"
            style={{ color: '#6B6B85' }}
          >
            {p}
          </span>
        ))}
      </div>
    </section>
  );
}
