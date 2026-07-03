import React from 'react';

const facilities = [
  {
    icon: '🏛️',
    title: 'Penyelenggara Resmi Ibadah Umroh',
    desc: 'Berizin resmi PPIU dari Kementerian Agama RI, terdaftar dan diawasi.',
  },
  {
    icon: '✈️',
    title: 'Maskapai Internasional',
    desc: 'Penerbangan langsung setaraf internasional, tanpa transit panjang.',
  },
  {
    icon: '🏨',
    title: 'Hotel Bintang 4 Terbaik',
    desc: 'Jarak dekat Masjidil Haram & Masjid Nabawi, fasilitas nyaman.',
  },
  {
    icon: '🚌',
    title: 'Transportasi Bus Terbaru',
    desc: 'Armada bus ber-AC untuk seluruh rangkaian perjalanan ibadah.',
  },
  {
    icon: '📖',
    title: 'Manasik Eksklusif',
    desc: 'Pembekalan manasik intensif sebelum keberangkatan.',
  },
  {
    icon: '🎒',
    title: 'Perlengkapan Eksklusif',
    desc: 'Perlengkapan Umroh terlengkap dan berkualitas untuk tiap jamaah.',
  },
  {
    icon: '🛋️',
    title: 'Ruang Tunggu Nyaman',
    desc: 'Fasilitas keberangkatan & kepulangan di bandara Indonesia.',
  },
  {
    icon: '🤝',
    title: 'Full Bimbingan',
    desc: 'Didampingi pembimbing bersertifikat, sesuai sunnah Nabi ﷺ.',
  },
];

export default function Facilities() {
  return (
    <section id="fasilitas" className="px-[7vw] py-[88px]" style={{ background: '#292951' }}>
      <div className="max-w-[1180px] mx-auto">
        <span
          className="text-[13px] font-bold tracking-[0.14em] uppercase"
          style={{ color: 'rgba(255,255,255,0.55)' }}
        >
          Fasilitas &amp; Layanan
        </span>
        <h2
          className="font-bold leading-[1.15] mt-[10px] text-white"
          style={{ fontSize: 'clamp(28px,3.6vw,42px)' }}
        >
          Semua Kebutuhan Ibadah, Kami Siapkan
        </h2>
        <p
          className="text-[17px] leading-[1.6] mt-[16px] max-w-[620px]"
          style={{ color: 'rgba(255,255,255,0.66)' }}
        >
          Layanan menyeluruh yang dirancang agar jamaah fokus beribadah, bukan mengurus logistik.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[20px] mt-[48px]">
          {facilities.map(f => (
            <div
              key={f.title}
              className="rounded-xl p-[26px_22px]"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.14)',
              }}
            >
              <div
                className="w-[38px] h-[38px] rounded-[10px] bg-white flex items-center justify-center mb-[16px] text-[18px]"
              >
                {f.icon}
              </div>
              <h3 className="text-white font-bold text-[16px] leading-[1.3]">{f.title}</h3>
              <p
                className="text-[14px] mt-[8px] leading-[1.55]"
                style={{ color: 'rgba(255,255,255,0.66)' }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
