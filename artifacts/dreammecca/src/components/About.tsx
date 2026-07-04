import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';

const stats = [
  { num: 'PPIU', lbl: 'Berizin Resmi Kemenag RI', icon: '🕌' },
  { num: '2025', lbl: 'Tahun Mulai Beroperasi', icon: '📅' },
  { num: '100%', lbl: 'Dibimbing Ustadz Bersertifikat', icon: '🎓' },
  { num: 'Sunnah', lbl: 'Sesuai Syariat & Sunnah Nabi ﷺ', icon: '📖' },
];

export default function About() {
  return (
    <section id="tentang" className="px-[7vw] py-[88px] bg-white">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-[64px] items-center">
        {/* Left: photo */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="rounded-xl overflow-hidden"
          style={{ aspectRatio: '1/1' }}
        >
          <img
            src="/images/about.jpg"
            alt="Tim Dreammecca"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right: text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ delay: 0.1 }}
        >
          <span
            className="text-[13px] font-bold tracking-[0.14em] uppercase"
            style={{ color: '#6B6B85' }}
          >
            Tentang Kami
          </span>
          <h2
            className="font-bold leading-[1.15] mt-[10px]"
            style={{ fontSize: 'clamp(28px,3.6vw,42px)', color: '#1B1B36' }}
          >
            Travel Umroh Resmi, Melayani Sejak 2025
          </h2>
          <p
            className="text-[17px] leading-[1.6] mt-[16px] max-w-[620px]"
            style={{ color: '#6B6B85' }}
          >
            PT. Dream Mecca International adalah perusahaan travel umroh terpercaya yang berkomitmen memberikan pengalaman ibadah yang nyaman, aman, dan berkualitas tinggi.
          </p>
          <p
            className="text-[17px] leading-[1.6] mt-[14px] max-w-[620px]"
            style={{ color: '#6B6B85' }}
          >
            Dengan pengalaman luas dan dukungan tim profesional, kami memastikan setiap proses perjalanan umroh, mulai dari konsultasi, pengurusan dokumen, visa, hingga pendampingan di tanah suci, berjalan lancar dan sesuai standar resmi. Kami mengutamakan transparansi, keamanan, dan kepuasan jamaah dengan pelayanan personal yang responsif.
          </p>
          <p
            className="text-[17px] leading-[1.6] mt-[14px] max-w-[620px]"
            style={{ color: '#6B6B85' }}
          >
            Berbasis pada integritas dan regulasi pemerintah, kami siap mendampingi untuk mewujudkan impian ibadah umroh yang penuh berkah, mudah, dan khusyuk.
          </p>

          {/* Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-[12px] mt-[40px]"
          >
            {stats.map(s => (
              <motion.div
                key={s.lbl}
                variants={fadeUp}
                className="rounded-2xl p-[18px] flex flex-col gap-[8px]"
                style={{
                  background: 'linear-gradient(135deg, #1B1B36 0%, #2d2d5e 100%)',
                  boxShadow: '0 4px 20px rgba(27,27,54,0.15)',
                }}
              >
                <span className="text-[22px] leading-none">{s.icon}</span>
                <div className="text-[26px] font-extrabold leading-none mt-[2px]" style={{ color: '#fff' }}>{s.num}</div>
                <div className="text-[12px] leading-[1.4] font-medium" style={{ color: 'rgba(255,255,255,0.65)' }}>{s.lbl}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
