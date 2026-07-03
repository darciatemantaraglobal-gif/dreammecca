import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Plane, Star } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { createWALink, DEFAULT_MESSAGE } from '@/lib/whatsapp';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="relative min-h-[100dvh] flex items-end justify-center bg-dream-navy overflow-hidden">
      {/* Background video / image */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/images/hero/hero-1.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
          width="1920"
          height="1080"
        >
          <source src="/videos/hero-1.mp4" type="video/mp4" />
        </video>

        {/* Simple bottom-heavy gradient — photo breathes at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10" />
      </div>

      {/* Content — sits at the bottom of the hero */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Label */}
          <motion.div variants={fadeUp} className="mb-5">
            <span className="inline-block border border-dream-gold/50 text-dream-gold text-xs font-semibold tracking-widest px-4 py-1.5 uppercase">
              Penyelenggara Umroh Resmi Kemenag RI
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl
                       font-serif text-white leading-[1.05] mb-6"
          >
            Wujudkan Panggilan<br />
            Suci ke{' '}
            <em className="not-italic text-dream-gold">Tanah Haram</em>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-white/65 mb-10 max-w-xl font-light leading-relaxed"
          >
            Perjalanan Umroh nyaman, aman, dan penuh berkah bersama
            pembimbing berpengalaman sejak 2012.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4
                       w-full max-w-sm sm:max-w-none"
          >
            <a
              href={createWALink(DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dream-gold hover:bg-dream-gold-hover text-dream-navy font-semibold
                         px-8 py-4 transition-all duration-300 text-base
                         shadow-[0_0_32px_rgba(201,164,85,0.35)] hover:shadow-[0_0_48px_rgba(201,164,85,0.55)]
                         min-h-[52px] flex items-center justify-center"
            >
              Konsultasi Gratis
            </a>
            <a
              href="#paket"
              className="bg-transparent hover:bg-white/8 border border-white/30 text-white
                         font-medium px-8 py-4 transition-all duration-300 text-base
                         min-h-[52px] flex items-center justify-center"
            >
              Lihat Paket Umroh
            </a>
          </motion.div>
        </motion.div>

        {/* Trust bar — hairline gold rule + icons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-14 pt-6 border-t border-white/10
                     flex flex-wrap items-center gap-x-8 gap-y-3 sm:gap-x-10"
        >
          {[
            { Icon: ShieldCheck, text: 'Terdaftar Resmi Kemenag RI' },
            { Icon: Plane,       text: 'Saudia Airlines & Garuda' },
            { Icon: Star,        text: '4.9/5 Rating Jamaah', fill: true },
          ].map(({ Icon, text, fill }) => (
            <div key={text} className="flex items-center gap-2">
              <Icon
                className={`text-dream-gold flex-shrink-0 ${fill ? 'fill-dream-gold' : ''}`}
                size={16}
              />
              <span className="text-xs sm:text-sm text-white/55 font-medium whitespace-nowrap">
                {text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
