import React from 'react';
import { motion } from 'framer-motion';

const partners = ['Saudia Airlines', 'Garuda Indonesia', 'Emirates', 'Etihad Airways', 'Qatar Airways'];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative px-[7vw] pt-[100px] pb-[80px] overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(180deg, rgba(27,27,54,0.88), rgba(27,27,54,0.94)), url("/images/patterns/geometric-navy.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundColor: '#1B1B36',
      }}
    >
      <div className="max-w-[1180px] mx-auto">

        {/* VIDEO BESAR — fokus utama paling atas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full rounded-2xl overflow-hidden relative"
          style={{ border: '1px solid rgba(255,255,255,0.12)', paddingTop: '52%' }}
        >
          <video
            autoPlay muted loop playsInline preload="metadata"
            poster="/images/kaabah/kaabah-1.jpg"
            className="absolute inset-0 w-full h-full"
            style={{ objectFit: 'cover', display: 'block' }}
          >
            <source src="/videos/hero-card.mp4" type="video/mp4" />
          </video>
          <div
            className="absolute bottom-0 left-0 right-0 px-[24px] py-[16px]"
            style={{ background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.5))' }}
          >
            <span className="text-[12px] font-semibold uppercase tracking-[0.06em]" style={{ color: '#fff' }}>
              Cuplikan Perjalanan Ibadah
            </span>
          </div>
        </motion.div>

        {/* DUA KOLOM DI BAWAH VIDEO */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-[40px] mt-[48px] items-start">

          {/* KIRI — headline + logo partner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <h1
              className="font-extrabold leading-[1.1]"
              style={{ fontSize: 'clamp(30px,4.2vw,50px)', color: '#fff' }}
            >
              Berangkat Umroh,<br />
              Pulang <span style={{ fontStyle: 'italic', fontWeight: 700 }}>Berkah</span>
            </h1>

            <p className="text-[14px] mt-[28px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Digunakan jamaah dari berbagai kota, terbang bersama maskapai
            </p>
            <div className="flex flex-wrap gap-x-[24px] gap-y-[10px] mt-[12px]">
              {partners.map(p => (
                <span key={p} className="text-[14px] font-semibold" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  {p}
                </span>
              ))}
            </div>
          </motion.div>

          {/* KANAN — paragraf + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
          >
            <p className="text-[15.5px] leading-[1.65]" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Berizin resmi PPIU Kementerian Agama RI. Kami hadir memastikan perjalanan ibadah Umroh Anda, dari konsultasi, dokumen, visa, hingga pendampingan di Tanah Suci, berjalan lancar dan penuh kekhusyukan.
            </p>
            <div className="flex flex-wrap gap-[12px] mt-[24px]">
              <a
                href="#kontak"
                className="inline-flex items-center justify-center px-[26px] py-[14px] rounded-full font-bold text-[14px] no-underline hover:opacity-90 transition-opacity"
                style={{ background: '#fff', color: '#1B1B36' }}
              >
                Konsultasi Gratis
              </a>
              <a
                href="#paket"
                className="inline-flex items-center justify-center px-[26px] py-[14px] rounded-full font-bold text-[14px] no-underline border transition-colors hover:bg-white/10"
                style={{ borderColor: 'rgba(255,255,255,0.35)', color: '#fff' }}
              >
                Lihat Paket
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
