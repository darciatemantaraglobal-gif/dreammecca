import React from 'react';

const airlines = [
  { name: 'Garuda Indonesia', src: '/images/partners/garuda-indonesia.png' },
  { name: 'Saudia', src: '/images/partners/saudia.png' },
  { name: 'Qatar Airways', src: '/images/partners/qatar-airways.png' },
];

export default function AirlineMarquee() {
  const items = [...airlines, ...airlines, ...airlines, ...airlines];

  return (
    <section aria-label="Maskapai penerbangan pilihan" className="overflow-hidden border-y" style={{ background: '#F7F6F2', borderColor: '#E5DDCC' }}>
      <div className="mx-auto max-w-[1440px] px-[7vw] py-[12px] md:py-[14px]">
        <div className="overflow-hidden">
          <div className="airline-marquee-track flex w-max items-center gap-[26px] md:gap-[40px]">
            {items.map((airline, index) => (
              <img
                key={`${airline.name}-${index}`}
                src={airline.src}
                alt={airline.name}
                className="h-[34px] w-[74px] flex-none object-contain md:h-[40px] md:w-[92px]"
                loading={index > airlines.length ? 'lazy' : 'eager'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
