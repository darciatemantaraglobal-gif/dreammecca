import React from 'react';

const items = [
  { name: 'Koper & Tas Umroh', slug: 'koper-tas' },
  { name: 'Mukena & Ihram', slug: 'mukena-ihram' },
  { name: 'Sajadah Travel', slug: 'sajadah-travel' },
  { name: 'Buku Doa & Manasik', slug: 'buku-doa-manasik' },
  { name: 'Seragam Kloter', slug: 'seragam-kloter' },
  { name: 'Kit Kesehatan', slug: 'kit-kesehatan' },
];

export default function Gallery() {
  return (
    <section className="px-[7vw] py-[88px] bg-white">
      <div className="max-w-[1180px] mx-auto">
        <span
          className="text-[13px] font-bold tracking-[0.14em] uppercase"
          style={{ color: '#6B6B85' }}
        >
          Perlengkapan Jamaah
        </span>
        <h2
          className="font-bold leading-[1.15] mt-[10px]"
          style={{ fontSize: 'clamp(28px,3.6vw,42px)', color: '#1B1B36' }}
        >
          Perlengkapan Eksklusif, Terlengkap &amp; Berkualitas
        </h2>
        <p
          className="text-[17px] leading-[1.6] mt-[16px] max-w-[620px]"
          style={{ color: '#6B6B85' }}
        >
          Setiap jamaah mendapat perlengkapan ibadah lengkap sebelum keberangkatan — siap pakai, tanpa perlu membeli sendiri.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-[20px] mt-[48px]">
          {items.map(item => (
            <figure key={item.name}>
              <div
                className="rounded-xl overflow-hidden"
                style={{ aspectRatio: '1/1', background: '#F4F4F7' }}
              >
                <img
                  src={`/images/perlengkapan/${item.slug}.jpg`}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.style.background =
                        'repeating-linear-gradient(135deg,rgba(27,27,54,0.045),rgba(27,27,54,0.045) 10px,rgba(27,27,54,0.08) 10px,rgba(27,27,54,0.08) 20px)';
                    }
                  }}
                />
              </div>
              <figcaption
                className="mt-[10px] text-[13.5px] font-semibold"
                style={{ color: '#1B1B36' }}
              >
                {item.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
