import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { createWALink, DEFAULT_MESSAGE } from '@/lib/whatsapp';

export default function Hero() {
  const waLink = createWALink(DEFAULT_MESSAGE);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-end overflow-hidden px-[7vw] pb-[72px] pt-[116px] md:min-h-[780px] md:pb-[112px]"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center 58%',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#1B1B36',
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero.jpg"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: 'center' }}
      >
        <source src="/videos/hero-1.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(90deg, rgba(9,15,59,0.78) 0%, rgba(9,15,59,0.48) 48%, rgba(9,15,59,0.15) 100%), linear-gradient(0deg, rgba(9,15,59,0.72) 0%, rgba(9,15,59,0) 50%)' }}
      />
      <div className="relative z-10 mx-auto w-full max-w-[1180px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[690px]"
        >
          <div className="mb-[18px] flex items-center gap-[12px] text-[12px] font-bold uppercase tracking-[0.14em]" style={{ color: '#E2BC6C' }}>
            <span className="h-px w-[42px]" style={{ background: '#E2BC6C' }} />
            Dreammecca Tour &amp; Travel
          </div>
          <h1
            className="font-extrabold leading-[1.08]"
            style={{ fontSize: 'clamp(44px,5.8vw,80px)', color: '#fff', textWrap: 'balance' }}
          >
            Perjalanan Ibadah,<br />
            Penuh Berkah
          </h1>
          <p className="mt-[22px] max-w-[570px] text-[16px] leading-[1.7] md:text-[18px]" style={{ color: 'rgba(255,255,255,0.84)' }}>
            Umroh berizin resmi, tanggal pasti, pendampingan penuh dari manasik sampai pulang.
          </p>
          <div className="mt-[30px] flex flex-wrap items-center gap-[18px]">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-none px-[24px] py-[13px] text-[14px] font-bold no-underline transition-opacity hover:opacity-90 md:px-[30px] md:text-[15px]"
              style={{ background: '#CFA568', color: '#090F3B' }}
            >
              Konsultasi Gratis
            </a>
            <a href="#paket" className="inline-flex min-h-11 items-center gap-[8px] text-[14px] font-bold no-underline md:text-[15px]" style={{ color: '#fff' }}>
              Lihat Paket
              <ArrowRight size={17} strokeWidth={1.9} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
