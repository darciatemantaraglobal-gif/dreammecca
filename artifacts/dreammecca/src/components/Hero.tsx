import React from 'react';
import { motion } from 'framer-motion';
import { Plane, ShieldCheck, Users } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { createWALink, DEFAULT_MESSAGE } from '@/lib/whatsapp';

const trustItems = [
  {
    icon: Plane,
    title: 'Direct Flight, Maskapai Ternama',
    desc: 'Saudia Airlines, Garuda Indonesia & FlyDubai, tanpa transit berlebih.',
  },
  {
    icon: ShieldCheck,
    title: 'PPIU Resmi',
    desc: 'Berizin resmi Kementerian Agama RI, diawasi langsung.',
  },
  {
    icon: Users,
    title: 'Melayani Sejak 2025',
    desc: 'Dipercaya jamaah dari berbagai kota di Indonesia.',
    link: true,
  },
];

export default function Hero() {
  const waLink = createWALink(DEFAULT_MESSAGE);

  return (
    <section
      className="relative overflow-hidden px-[7vw] pt-[64px]"
      style={{
        backgroundImage: 'linear-gradient(180deg, rgba(27,27,54,0.55), rgba(27,27,54,0.65)), url(/images/patterns/geometric-navy.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundColor: '#1B1B36',
      }}
    >
      {/* ── Main 2-col grid ── */}
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-[40px] items-start">

        {/* LEFT: giant stacked headline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex flex-col"
        >
          <p
            className="text-[13px] font-bold tracking-[0.18em] uppercase"
            style={{ color: 'rgba(255,255,255,0.50)' }}
          >
            Penyelenggara Ibadah Umroh Resmi
          </p>

          <h1
            className="font-extrabold text-white leading-[0.98] tracking-[-0.02em] mt-[18px]"
            style={{ fontSize: 'clamp(44px, 6vw, 76px)' }}
          >
            Dreammecca<br />Tour &amp; Travel
          </h1>

          <p
            className="mt-[28px] text-[16px] leading-[1.6] max-w-[440px]"
            style={{ color: 'rgba(255,255,255,0.66)' }}
          >
            Berizin resmi PPIU Kementerian Agama RI. Kami hadir memastikan perjalanan ibadah Umroh Anda, dari konsultasi, dokumen, visa, hingga pendampingan di Tanah Suci, berjalan lancar dan penuh kekhusyukan.
          </p>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-[36px] self-start inline-flex items-center bg-white text-[#1B1B36] font-bold text-[14px] uppercase tracking-[0.09em] px-[32px] py-[17px] rounded-full hover:opacity-[0.88] transition-opacity no-underline"
          >
            Konsultasi Gratis
          </a>
        </motion.div>

        {/* RIGHT: floating white card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ delay: 0.15 }}
          className="relative flex flex-col"
        >
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* Card header */}
            <div className="px-[24px] pt-[24px]">
              {/* Pills */}
              <div className="flex gap-[8px] flex-wrap">
                {[
                  { label: 'Umroh', active: false },
                  { label: 'Paket', active: false },
                  { label: 'PPIU', active: true },
                ].map(({ label, active }) => (
                  <span
                    key={label}
                    className="text-[13px] font-semibold px-[14px] py-[7px] rounded-full"
                    style={
                      active
                        ? { background: '#1B1B36', color: '#fff' }
                        : { border: '1px solid rgba(27,27,54,0.20)', color: '#1B1B36' }
                    }
                  >
                    {label}
                  </span>
                ))}
              </div>

              {/* Text + badge row */}
              <div className="flex items-start justify-between gap-3 mt-[18px] mb-[20px]">
                <div>
                  <h2
                    className="font-bold leading-[1.2]"
                    style={{ fontSize: 'clamp(18px, 2vw, 22px)', color: '#1B1B36' }}
                  >
                    Berizin Resmi,<br />Siap Melayani Anda
                  </h2>
                  <p className="text-[13.5px] mt-[6px]" style={{ color: '#6B6B85' }}>
                    Sudah memberangkatkan banyak jamaah sejak 2025, dengan bimbingan penuh dari awal hingga pulang.
                  </p>
                </div>

                {/* PPIU badge */}
                <div
                  className="flex-none rounded-xl px-[14px] py-[11px] text-center"
                  style={{ background: '#292951' }}
                >
                  <div className="text-[10.5px] font-bold uppercase tracking-[0.08em] text-white leading-tight">
                    PPIU<br />RESMI
                  </div>
                </div>
              </div>
            </div>

            {/* Card video — bleeds to bottom */}
            <div className="w-full relative" style={{ paddingTop: '56.25%', overflow: 'hidden' }}>
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/images/kaabah/kaabah-1.jpg"
                className="absolute inset-0 w-full h-full"
                style={{ objectFit: 'cover', display: 'block' }}
              >
                <source src="/videos/hero-card.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Bottom 3-col trust strip ── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[12px] mt-[32px]"
      >
        {trustItems.map((item) => (
          <motion.div
            key={item.title}
            variants={fadeUp}
            className="rounded-xl p-[16px] flex items-start gap-[12px]"
            style={{
              background: 'rgba(255,255,255,0.035)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div
              className="w-[32px] h-[32px] rounded-full flex-none flex items-center justify-center mt-[2px]"
              style={{ background: 'rgba(255,255,255,0.08)' }}
            >
              <item.icon size={14} color="#fff" strokeWidth={1.75} />
            </div>
            <div>
              <h3 className="text-[13px] font-bold leading-[1.3]" style={{ color: '#fff' }}>
                {item.title}
              </h3>
              <p className="text-[12px] leading-[1.5] mt-[4px]" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {item.desc}
              </p>
              {item.link && (
                <a
                  href="#paket"
                  className="inline-flex items-center gap-[4px] text-[11px] font-bold uppercase tracking-[0.04em] mt-[8px] no-underline hover:opacity-75 transition-opacity"
                  style={{ color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.4)', paddingBottom: '1px' }}
                >
                  Lihat Paket
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
