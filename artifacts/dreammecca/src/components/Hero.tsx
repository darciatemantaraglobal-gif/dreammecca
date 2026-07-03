import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Plane, Star, ChevronDown } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { createWALink, DEFAULT_MESSAGE } from '@/lib/whatsapp';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Note: video autoplays via the autoPlay attribute.
  // No JS play() call needed — avoids unnecessary error on mobile browsers.

  return (
    <div className="relative min-h-[100dvh] flex items-center justify-center bg-dream-navy overflow-hidden">
      {/* Background: video with image poster fallback */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="none"          /* mobile-friendly: don't load any data until playback */
          poster="/images/hero/hero-1.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
          width="1920"             /* explicit dimensions prevent CLS */
          height="1080"
        >
          {/* Replace src with your actual Kaabah video: public/videos/hero.mp4 */}
          <source src="/videos/hero-1.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay — legibility over both image and video */}
        <div className="absolute inset-0 bg-gradient-to-t from-dream-navy via-dream-navy/75 to-dream-navy/40" />

        {/* Subtle Islamic dot pattern — CPU-cheap on mobile */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#C9A455 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
          aria-hidden="true"
        />
      </div>

      {/* Main content — mt smaller on mobile so trust bar doesn't get pushed below fold */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
                      flex flex-col items-center text-center
                      pt-24 pb-12 sm:pt-28 md:pt-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full max-w-4xl"
        >
          {/* Headline — capped at 28px on 375px to prevent overflow */}
          <motion.h1
            variants={fadeUp}
            className="text-[1.75rem] leading-tight sm:text-4xl md:text-[3.5rem] lg:text-7xl
                       font-serif text-white mb-4 sm:mb-6"
          >
            Wujudkan Panggilan Suci ke{' '}
            <span className="text-dream-gold">Tanah Haram</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg md:text-xl text-dream-cream/90 mb-8 sm:mb-10
                       max-w-2xl mx-auto font-light"
          >
            Perjalanan Umroh nyaman, aman, dan penuh berkah bersama pembimbing berpengalaman
          </motion.p>

          {/* CTAs — full-width on mobile, auto-width on sm+ */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-stretch sm:items-center
                       justify-center gap-3 sm:gap-4 mb-10 sm:mb-14
                       w-full max-w-sm sm:max-w-none mx-auto"
          >
            <a
              href={createWALink(DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Konsultasi Gratis via WhatsApp"
              className="bg-dream-gold hover:bg-dream-gold-hover text-dream-navy font-semibold
                         px-8 py-4 rounded-lg transition-all duration-300 text-base sm:text-lg
                         shadow-[0_0_20px_rgba(201,164,85,0.3)] hover:shadow-[0_0_30px_rgba(201,164,85,0.5)]
                         min-h-[52px] flex items-center justify-center"
            >
              Konsultasi Gratis
            </a>
            <a
              href="#paket"
              aria-label="Lihat Paket Umroh"
              className="bg-transparent hover:bg-white/5 border border-white/40 text-white
                         font-medium px-8 py-4 rounded-lg transition-all duration-300
                         text-base sm:text-lg backdrop-blur-sm
                         min-h-[52px] flex items-center justify-center"
            >
              Lihat Paket Umroh
            </a>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3
                       sm:gap-x-10 md:gap-x-12
                       pt-6 sm:pt-8 border-t border-white/10"
          >
            {[
              { Icon: ShieldCheck, text: 'Terdaftar Resmi Kemenag RI' },
              { Icon: Plane,       text: 'Saudia Airlines & Garuda' },
              { Icon: Star,        text: '4.9/5 Rating Jamaah', fill: true },
            ].map(({ Icon, text, fill }) => (
              <div key={text} className="flex items-center gap-1.5 sm:gap-2">
                <Icon
                  className={`text-dream-gold flex-shrink-0 ${fill ? 'fill-dream-gold' : ''}`}
                  size={18}
                />
                <span className="text-xs sm:text-sm text-dream-cream/80 font-medium whitespace-nowrap">
                  {text}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator — hidden on very small height screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2
                   hidden xs:flex flex-col items-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown className="text-dream-gold/60" size={26} />
        </motion.div>
      </motion.div>
    </div>
  );
}
