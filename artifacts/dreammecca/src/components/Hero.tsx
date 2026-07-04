import React from 'react';
import { motion } from 'framer-motion';

const partners = ['Saudia Airlines', 'Garuda Indonesia', 'Emirates', 'Etihad Airways', 'Qatar Airways'];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative px-[7vw] pt-[140px] pb-[80px] overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(180deg, rgba(27,27,54,0.88), rgba(27,27,54,0.94)), url("/images/patterns/geometric-navy.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundColor: '#1B1B36',
      }}
    >
      <div className="max-w-[1180px] mx-auto text-center">

        {/* JUDUL + DESKRIPSI — rata tengah */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[720px] mx-auto"
        >
          <span className="text-[13px] font-bold tracking-[0.14em] uppercase" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Penyelenggara Ibadah Umroh Resmi
          </span>

          <h1
            className="font-extrabold leading-[1.1] mt-[14px]"
            style={{ fontSize: 'clamp(32px,5vw,58px)', color: '#fff' }}
          >
            Berangkat Umroh,<br />
            Pulang <span style={{ fontStyle: 'italic', fontWeight: 700 }}>Berkah</span>
          </h1>

          <p className="text-[16px] leading-[1.65] mt-[20px] mx-auto" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '580px' }}>
            Berizin resmi PPIU Kementerian Agama RI. Kami hadir memastikan perjalanan ibadah Umroh Anda, dari konsultasi, dokumen, visa, hingga pendampingan di Tanah Suci, berjalan lancar dan penuh kekhusyukan.
          </p>

          <div className="flex flex-wrap justify-center gap-[12px] mt-[28px]">
            <a href="#kontak" className="inline-flex items-center justify-center px-[28px] py-[15px] rounded-full font-bold text-[14px] no-underline hover:opacity-90 transition-opacity" style={{ background: '#fff', color: '#1B1B36' }}>
              Konsultasi Gratis
            </a>
            <a href="#paket" className="inline-flex items-center justify-center px-[28px] py-[15px] rounded-full font-bold text-[14px] no-underline border transition-colors hover:bg-white/10" style={{ borderColor: 'rgba(255,255,255,0.35)', color: '#fff' }}>
              Lihat Paket
            </a>
          </div>
        </motion.div>

        {/* VIDEO — lebar tetap penuh container, caption rata kiri */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="w-full rounded-2xl overflow-hidden relative mt-[40px] text-left"
          style={{ border: '1px solid rgba(255,255,255,0.12)', paddingTop: '52%' }}
        >
          <video autoPlay muted loop playsInline preload="metadata" poster="/images/kaabah/kaabah-1.jpg" className="absolute inset-0 w-full h-full" style={{ objectFit: 'cover', display: 'block' }}>
            <source src="/videos/hero-card.mp4" type="video/mp4" />
          </video>
          <div className="absolute bottom-0 left-0 right-0 px-[24px] py-[16px]" style={{ background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.5))' }}>
            <span className="text-[12px] font-semibold uppercase tracking-[0.06em]" style={{ color: '#fff' }}>
              Cuplikan Perjalanan Ibadah
            </span>
          </div>
        </motion.div>

        {/* LOGO PARTNER — rata tengah */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-[28px]"
        >
          <p className="text-[13px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Digunakan jamaah dari berbagai kota, terbang bersama maskapai
          </p>
          <div className="flex flex-wrap justify-center gap-x-[24px] gap-y-[8px] mt-[10px]">
            {partners.map(p => (
              <span key={p} className="text-[14px] font-semibold" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {p}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
