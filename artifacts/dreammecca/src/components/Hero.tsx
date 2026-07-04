import React from 'react';
import { motion } from 'framer-motion';
import { Plane, ShieldCheck, Users } from 'lucide-react';
import { createWALink, DEFAULT_MESSAGE } from '@/lib/whatsapp';

const trustItems = [
  {
    Icon: Plane,
    title: 'Direct Flight, Maskapai Ternama',
    desc: 'Saudia Airlines, Garuda Indonesia & FlyDubai, tanpa transit berlebih.',
  },
  {
    Icon: ShieldCheck,
    title: 'PPIU Resmi',
    desc: 'Berizin resmi Kementerian Agama RI, diawasi langsung.',
  },
  {
    Icon: Users,
    title: 'Melayani Sejak 2025',
    desc: 'Dipercaya jamaah dari berbagai kota di Indonesia.',
    link: true,
  },
];

export default function Hero() {
  const waLink = createWALink(DEFAULT_MESSAGE);

  return (
    <section
      id="hero"
      className="relative px-[7vw] pt-[140px] pb-[64px] overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(180deg, rgba(27,27,54,0.88), rgba(27,27,54,0.94)), url("/images/patterns/geometric-navy.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundColor: '#1B1B36',
      }}
    >
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-[48px] items-start">

        {/* KIRI — headline & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[13px] font-bold tracking-[0.14em] uppercase" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Penyelenggara Ibadah Umroh Resmi
          </span>

          <h1
            className="font-extrabold leading-[1.05] mt-[16px]"
            style={{ fontSize: 'clamp(36px,5.5vw,68px)', color: '#fff' }}
          >
            Berangkat Umroh,<br />Pulang Berkah
          </h1>

          <p className="text-[17px] leading-[1.65] mt-[24px] max-w-[480px]" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Berizin resmi PPIU Kementerian Agama RI. Kami hadir memastikan perjalanan ibadah Umroh Anda, dari konsultasi, dokumen, visa, hingga pendampingan di Tanah Suci, berjalan lancar dan penuh kekhusyukan.
          </p>

          <div className="flex flex-wrap gap-[14px] mt-[32px]">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-[30px] py-[16px] rounded-full font-bold text-[14px] no-underline hover:opacity-90 transition-opacity"
              style={{ background: '#fff', color: '#1B1B36' }}
            >
              Konsultasi Gratis
            </a>
            <a
              href="#paket"
              className="inline-flex items-center justify-center px-[30px] py-[16px] rounded-full font-bold text-[14px] no-underline border transition-colors hover:bg-white/10"
              style={{ borderColor: 'rgba(255,255,255,0.35)', color: '#fff' }}
            >
              Lihat Paket Umroh
            </a>
          </div>
        </motion.div>

        {/* KANAN — satu kartu utuh: video di atas, info strip di bawah */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl overflow-hidden"
          style={{ background: '#fff', boxShadow: '0 24px 60px rgba(0,0,0,0.25)' }}
        >
          {/* Video 16:9, full width kartu, jadi elemen visual utama */}
          <div className="w-full relative" style={{ paddingTop: '56.25%', overflow: 'hidden', background: '#1B1B36' }}>
            <video
              autoPlay muted loop playsInline preload="metadata"
              poster="/images/kaabah/kaabah-1.jpg"
              className="absolute inset-0 w-full h-full"
              style={{ objectFit: 'cover', display: 'block' }}
            >
              <source src="/videos/hero-card.mp4" type="video/mp4" />
            </video>
            {/* Caption overlay di pojok kiri bawah video */}
            <div
              className="absolute bottom-0 left-0 right-0 px-[20px] py-[14px]"
              style={{ background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.55))' }}
            >
              <span className="text-[12px] font-semibold uppercase tracking-[0.06em]" style={{ color: '#fff' }}>
                Cuplikan Perjalanan Ibadah
              </span>
            </div>
          </div>

          {/* Info strip bawah — bagian dari kartu yang sama */}
          <div className="px-[26px] py-[22px] flex items-start justify-between gap-[16px]">
            <div>
              <h3 className="text-[17px] font-bold leading-[1.3]" style={{ color: '#1B1B36' }}>
                Berizin Resmi, Siap Melayani Anda
              </h3>
              <p className="text-[13.5px] leading-[1.5] mt-[6px]" style={{ color: '#6B6B85' }}>
                Sudah memberangkatkan banyak jamaah sejak 2025, dengan bimbingan penuh dari awal hingga pulang.
              </p>
            </div>
            <span
              className="flex-none text-[11px] font-bold text-center leading-[1.3] px-[12px] py-[8px] rounded-full text-white"
              style={{ background: '#1B1B36' }}
            >
              PPIU<br />RESMI
            </span>
          </div>
        </motion.div>
      </div>

      {/* Trust bar 3 kolom */}
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[12px] mt-[40px]">
        {trustItems.map((item) => (
          <div
            key={item.title}
            className="rounded-xl p-[16px] flex items-start gap-[12px]"
            style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div
              className="w-[32px] h-[32px] rounded-full flex-none flex items-center justify-center mt-[2px]"
              style={{ background: 'rgba(255,255,255,0.08)' }}
            >
              <item.Icon size={14} color="#fff" strokeWidth={1.75} />
            </div>
            <div>
              <h4 className="text-[13px] font-bold leading-[1.3]" style={{ color: '#fff' }}>{item.title}</h4>
              <p className="text-[12px] leading-[1.5] mt-[4px]" style={{ color: 'rgba(255,255,255,0.6)' }}>{item.desc}</p>
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
          </div>
        ))}
      </div>
    </section>
  );
}
