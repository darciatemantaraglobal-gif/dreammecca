import React from 'react';
import { motion } from 'framer-motion';
import { createWALink, DEFAULT_MESSAGE } from '@/lib/whatsapp';

export default function Hero() {
  const waLink = createWALink(DEFAULT_MESSAGE);

  return (
    <section
      id="hero"
      className="relative px-[7vw] pt-[100px] pb-[80px] overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(180deg, rgba(27,27,54,0.60), rgba(27,27,54,0.80)), url("/images/patterns/geometric-navy.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
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
          {/* 2. Headline diperbesar */}
          <span className="block text-[22px] md:text-[28px] font-semibold mt-[14px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Selamat Datang di
          </span>
          <h1
            className="font-extrabold leading-[1.1] mt-[8px]"
            style={{ fontSize: 'clamp(48px,7vw,88px)', color: '#fff' }}
          >
            Dreammecca<br />
            Tour &amp; Travel
          </h1>

          {/* 5. maxWidth deskripsi disempitkan */}
          <p className="text-[16px] leading-[1.65] mt-[20px] mx-auto" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '520px' }}>
            Berizin resmi PPIU Kementerian Agama RI. Kami hadir memastikan perjalanan ibadah Umroh Anda, dari konsultasi, dokumen, visa, hingga pendampingan di Tanah Suci, berjalan lancar dan penuh kekhusyukan.
          </p>

          {/* 3. CTA padding & font diperbesar */}
          <div className="flex flex-wrap justify-center gap-[12px] mt-[28px]">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-[34px] py-[17px] rounded-full font-bold text-[15px] no-underline hover:opacity-90 transition-opacity" style={{ background: '#fff', color: '#1B1B36' }}>
              Konsultasi Gratis
            </a>
            <a href="#paket" className="inline-flex items-center justify-center px-[34px] py-[17px] rounded-full font-bold text-[15px] no-underline border transition-colors hover:bg-white/10" style={{ borderColor: 'rgba(255,255,255,0.35)', color: '#fff' }}>
              Lihat Paket
            </a>
          </div>
        </motion.div>

        {/* VIDEO — 4. mt diperbesar, 1. paddingTop dikurangi, caption rata kiri */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="w-full rounded-2xl overflow-hidden relative mt-[56px] text-left"
          style={{ border: '1px solid rgba(255,255,255,0.12)', paddingTop: '42%' }}
        >
          <video autoPlay muted loop playsInline preload="metadata" poster="/images/kaabah/kaabah-1.jpg" className="absolute inset-0 w-full h-full" style={{ objectFit: 'cover', objectPosition: 'center top', display: 'block' }}>
            <source src="/videos/hero-card.mp4" type="video/mp4" />
          </video>
          <div className="absolute bottom-0 left-0 right-0 px-[24px] py-[16px]" style={{ background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.5))' }}>
            <span className="text-[12px] font-semibold uppercase tracking-[0.06em]" style={{ color: '#fff' }}>
              Cuplikan Perjalanan Ibadah
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
