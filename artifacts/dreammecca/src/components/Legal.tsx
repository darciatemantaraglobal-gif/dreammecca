import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';

const points = [
  {
    title: 'Izin PPIU Kemenag RI',
    desc: 'Terdaftar resmi sebagai Penyelenggara Perjalanan Ibadah Umroh. Nomor izin dapat diverifikasi di Kementerian Agama.',
  },
  {
    title: 'Anggota HIMPUH',
    desc: 'Tergabung dalam asosiasi penyelenggara Umroh untuk standar layanan dan perlindungan jamaah.',
  },
  {
    title: 'Kontrak & Itinerary Tertulis',
    desc: 'Setiap jamaah menerima kontrak perjanjian dan jadwal perjalanan tertulis sebelum pelunasan.',
  },
  {
    title: 'Kantor Fisik di Jakarta Selatan',
    desc: 'Kantor dapat dikunjungi langsung, bukan travel online tanpa alamat jelas.',
  },
];

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="flex-none mt-[2px]">
      <circle cx="10" cy="10" r="9" fill="#1B1B36" />
      <path d="M6 10.2l2.6 2.6L14.4 7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Legal() {
  return (
    <section className="px-[7vw] py-[88px] bg-white">
      <div className="max-w-[1180px] mx-auto">
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
            Legalitas &amp; Keamanan
          </span>
          <h2
            className="font-bold leading-[1.15] mt-[10px]"
            style={{ fontSize: 'clamp(28px,3.6vw,42px)', color: '#1B1B36' }}
          >
            Kredibilitas yang Bisa Anda Verifikasi Sendiri
          </h2>
          <p
            className="text-[17px] leading-[1.6] mt-[16px] max-w-[620px]"
            style={{ color: '#6B6B85' }}
          >
            Industri Umroh rawan penipuan, karena itu kami transparan soal legalitas kami. Jangan ragu memverifikasi izin kami langsung ke Kementerian Agama RI.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-[40px]"
        >
          {points.map(p => (
            <motion.div key={p.title} variants={fadeUp} className="flex gap-3 max-w-[340px]">
              <CheckIcon />
              <div>
                <h3 className="text-[15px] font-bold" style={{ color: '#1B1B36' }}>{p.title}</h3>
                <p className="text-[13.5px] mt-[5px] leading-[1.6]" style={{ color: '#6B6B85' }}>
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
