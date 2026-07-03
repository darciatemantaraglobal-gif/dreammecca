import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';

const faqs = [
  {
    q: 'Apakah Dreammecca berizin resmi?',
    a: 'Ya. Dreammecca (PT. Dream Mecca International) terdaftar sebagai Penyelenggara Perjalanan Ibadah Umroh (PPIU) resmi di Kementerian Agama RI dan merupakan anggota HIMPUH.',
  },
  {
    q: 'Berapa uang muka (DP) dan kapan pelunasan?',
    a: 'Pendaftaran disertai DP Rp 10.000.000 per jamaah. Pelunasan wajib dilakukan paling lambat 30-35 hari sebelum keberangkatan (H-30), sesuai jadwal yang disepakati.',
  },
  {
    q: 'Dokumen apa saja yang perlu disiapkan?',
    a: 'Paspor asli (berlaku minimal 10 bulan sebelum kedaluwarsa, minimal 2 suku kata pada nama), fotokopi KTP & KK, buku nikah bagi pasangan suami-istri, pas foto 4x6 terbaru, dan sertifikat vaksin. Tim kami bantu pengecekan dokumen sebelum pendaftaran final.',
  },
  {
    q: 'Apa saja yang termasuk dalam harga paket?',
    a: 'Harga sudah termasuk tiket pesawat PP, visa umroh, hotel, transportasi bus, makan fullboard 3x sehari, manasik, perlengkapan umroh, tour leader dan muthawif berpengalaman, asuransi perjalanan, hingga air zamzam 5 liter.',
  },
  {
    q: 'Bagaimana jika ingin reschedule atau membatalkan?',
    a: 'Reschedule tanggal/program dapat dilakukan dengan pemberitahuan minimal 40 hari sebelum keberangkatan. Untuk pembatalan berlaku biaya pembatalan bertingkat sesuai kedekatan tanggal keberangkatan — detail lengkap dijelaskan saat konsultasi dan tertulis dalam kontrak.',
  },
  {
    q: 'Apakah ada pendampingan selama di Tanah Suci?',
    a: 'Ya, setiap kloter didampingi tour leader berlisensi dan muthawif alumni Timur Tengah, dari keberangkatan hingga kepulangan ke Indonesia.',
  },
  {
    q: 'Apakah wajib vaksin meningitis?',
    a: 'Ya, vaksin meningitis adalah syarat wajib dari otoritas Arab Saudi. Biaya vaksin tidak termasuk dalam harga paket dan menjadi tanggungan jamaah secara terpisah.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="px-[7vw] py-[88px] bg-white">
      <div className="mx-auto" style={{ maxWidth: '820px' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
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
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="mt-[48px] flex flex-col"
          style={{ gap: '0' }}
        >
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
