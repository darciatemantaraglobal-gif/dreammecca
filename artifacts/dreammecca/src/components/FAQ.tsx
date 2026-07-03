import React, { useState } from 'react';

const faqs = [
  {
    q: 'Apakah Dreammecca berizin resmi?',
    a: 'Ya. Dreammecca terdaftar sebagai Penyelenggara Perjalanan Ibadah Umroh (PPIU) resmi di Kementerian Agama RI dan merupakan anggota HIMPUH.',
  },
  {
    q: 'Bagaimana sistem pembayaran dan cicilan?',
    a: 'Pembayaran dapat dilakukan bertahap dengan DP awal, dan pelunasan sebelum keberangkatan sesuai jadwal yang disepakati dalam kontrak.',
  },
  {
    q: 'Apa saja yang termasuk dalam harga paket?',
    a: 'Harga sudah termasuk tiket pesawat, hotel, transportasi darat, manasik, perlengkapan Umroh, dan pembimbing selama perjalanan.',
  },
  {
    q: 'Bagaimana jika ingin reschedule atau membatalkan?',
    a: 'Kami memiliki kebijakan reschedule dan pembatalan tertulis dalam kontrak, dijelaskan detail saat konsultasi awal.',
  },
  {
    q: 'Apakah ada pendampingan selama di Tanah Suci?',
    a: 'Ya, setiap kloter didampingi pembimbing dan tim muthawif dari keberangkatan hingga kepulangan ke Indonesia.',
  },
  {
    q: 'Apakah wajib vaksin meningitis?',
    a: 'Ya, vaksin meningitis adalah syarat wajib dari otoritas Arab Saudi untuk seluruh jamaah Umroh. Kami bantu arahkan ke fasilitas vaksinasi resmi terdekat.',
  },
  {
    q: 'Berapa lama proses pembuatan visa?',
    a: 'Proses visa Umroh biasanya memakan waktu 7–14 hari kerja setelah seluruh dokumen dan pelunasan lengkap kami terima.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="px-[7vw] py-[88px] bg-white">
      <div className="mx-auto" style={{ maxWidth: '820px' }}>
        <span
          className="text-[13px] font-bold tracking-[0.14em] uppercase"
          style={{ color: '#6B6B85' }}
        >
          FAQ
        </span>
        <h2
          className="font-bold leading-[1.15] mt-[10px]"
          style={{ fontSize: 'clamp(28px,3.6vw,42px)', color: '#1B1B36' }}
        >
          Pertanyaan yang Sering Ditanyakan
        </h2>

        <div className="mt-[48px] flex flex-col" style={{ gap: '0' }}>
          {faqs.map((f, i) => (
            <div
              key={i}
              style={{ borderTop: '1px solid rgba(27,27,54,0.10)' }}
              className={i === faqs.length - 1 ? 'border-b border-[rgba(27,27,54,0.10)]' : ''}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center py-[22px] text-left gap-4"
                style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
              >
                <span className="text-[16px] font-semibold" style={{ color: '#1B1B36' }}>
                  {f.q}
                </span>
                <span
                  className="text-[22px] font-light flex-none transition-transform duration-200"
                  style={{
                    color: '#1B1B36',
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                    lineHeight: 1,
                  }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div
                  className="pb-[22px] text-[15px] leading-[1.65]"
                  style={{ color: '#6B6B85' }}
                >
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
