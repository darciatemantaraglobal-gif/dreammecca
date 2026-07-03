import React from 'react';

const testimonials = [
  {
    initials: 'RH',
    name: 'Ratna Hidayati',
    meta: 'Kloter September 2025',
    quote: 'Pelayanan sangat rapi dari awal daftar sampai pulang. Hotel dekat sekali dengan Masjidil Haram, sesuai janji.',
  },
  {
    initials: 'AF',
    name: 'Ahmad Fauzan',
    meta: 'Kloter Mei 2025',
    quote: 'Pembimbingnya sabar dan jelas, manasiknya benar-benar membantu terutama untuk jamaah lansia seperti orang tua saya.',
  },
  {
    initials: 'SN',
    name: 'Siti Nuraini',
    meta: 'Kloter Januari 2025',
    quote: 'Awalnya was-was karena banyak berita penipuan travel Umroh, tapi Dreammecca transparan soal izin dan itinerary sejak awal.',
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimoni"
      className="px-[7vw] py-[88px]"
      style={{ background: '#1B1B36' }}
    >
      <div className="max-w-[1180px] mx-auto">
        <span
          className="text-[13px] font-bold tracking-[0.14em] uppercase"
          style={{ color: 'rgba(255,255,255,0.55)' }}
        >
          Testimoni Jamaah
        </span>
        <h2
          className="font-bold leading-[1.15] mt-[10px] text-white"
          style={{ fontSize: 'clamp(28px,3.6vw,42px)' }}
        >
          Cerita dari Mereka yang Sudah Berangkat
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] mt-[48px]">
          {testimonials.map(t => (
            <div
              key={t.name}
              className="rounded-xl p-[26px]"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.14)',
              }}
            >
              <div className="text-[13px] tracking-[2px] mb-[14px]" style={{ color: '#fff' }}>
                ★★★★★
              </div>
              <p className="text-[14.5px] leading-[1.65] text-white">"{t.quote}"</p>
              <div className="flex items-center gap-3 mt-[20px]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-[14px] text-white flex-none"
                  style={{ background: 'rgba(255,255,255,0.12)' }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-[13.5px] font-bold text-white">{t.name}</div>
                  <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.66)' }}>
                    {t.meta}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
