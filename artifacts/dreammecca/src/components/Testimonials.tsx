import React from 'react';

const testimonials = [
  {
    initials: 'RH',
    name: 'Ratna Hidayati',
    meta: 'Kloter September 2025',
    quote: 'Dari daftar sampai pulang, semuanya rapi dan sesuai jadwal. Hotelnya beneran dekat Masjidil Haram, persis seperti yang dijanjikan di awal.',
  },
  {
    initials: 'AF',
    name: 'Ahmad Fauzan',
    meta: 'Kloter Mei 2025',
    quote: 'Pembimbingnya sabar banget jelasinnya, manasiknya kepakai betul di lapangan — orang tua saya yang sudah lansia jadi lebih siap dan tenang.',
  },
  {
    initials: 'SN',
    name: 'Siti Nuraini',
    meta: 'Kloter Januari 2025',
    quote: 'Jujur awalnya was-was, banyak berita penipuan travel Umroh akhir-akhir ini. Tapi Dreammecca transparan soal izin dan itinerary sejak konsultasi pertama.',
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
              className="rounded-xl p-[26px] bg-[rgba(255,255,255,0.04)] transition-all duration-200 hover:-translate-y-1 hover:bg-[rgba(255,255,255,0.07)]"
              style={{ border: '1px solid rgba(255,255,255,0.14)' }}
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
