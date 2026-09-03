import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { createWALink, DEFAULT_MESSAGE } from '@/lib/whatsapp';
import { useSiteContent } from '@/lib/siteContent';
import { useSiteSettings } from '@/lib/useSiteSettings';

export default function Hero() {
  const { data: content } = useSiteContent();
  const { data: settings } = useSiteSettings();
  const hero = content.hero;
  const waLink = createWALink(DEFAULT_MESSAGE, settings?.whatsapp_number);

  return (
    <section
      id="hero"
      className="mobile-hero relative flex min-h-[100dvh] overflow-hidden px-[7vw] pb-[48px] pt-[108px] md:min-h-[780px] md:pb-[70px]"
      style={{ backgroundColor: '#090F3B' }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={hero.posterUrl}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: 'center', transform: 'translateZ(0)' }}
      >
        <source src={hero.videoUrl} type="video/mp4" />
      </video>
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(9,15,59,0.18) 0%, rgba(9,15,59,0.1) 36%, rgba(9,15,59,0.82) 100%), linear-gradient(90deg, rgba(9,15,59,0.35) 0%, rgba(9,15,59,0) 62%)' }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col justify-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[560px] text-left"
        >
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] md:text-[13px]" style={{ color: '#C9ADA7' }}>
            {hero.label}
          </p>
          <h1
            className="hero-heading mt-[12px] font-extrabold leading-[1.02]"
            style={{ fontSize: 'clamp(40px,4.8vw,72px)', color: '#fff', textWrap: 'balance' }}
          >
            {hero.titleFirst}<br />
            {hero.titleSecond}
          </h1>
          <p className="mt-[18px] max-w-[620px] text-[15px] leading-[1.65] md:text-[17px]" style={{ color: 'rgba(255,255,255,0.84)' }}>
            {hero.description}
          </p>
          <div className="mt-[26px] flex flex-wrap items-center gap-[16px]">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-[6px] px-[24px] py-[13px] text-[14px] font-bold no-underline transition-opacity hover:opacity-90 md:px-[30px] md:text-[15px]"
              style={{ background: '#C9ADA7', color: '#090F3B' }}
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
