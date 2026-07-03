import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { createWALink, DEFAULT_MESSAGE } from '@/lib/whatsapp';

export default function FinalCTA() {
  return (
    <section className="py-12 md:py-20 bg-dream-navy relative overflow-hidden border-t border-dream-gold/15">

      {/* Soft center glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full bg-dream-gold/5 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-dream-gold/10 border border-dream-gold/20 text-dream-gold font-semibold text-xs tracking-wider mb-8"
          >
            DAFTAR SEKARANG
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif text-white mb-5 leading-tight">
            Siap Memulai Perjalanan{' '}
            <span className="text-dream-gold">Suci Anda?</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-base md:text-lg text-dream-cream/75 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Konsultasi gratis dengan tim kami. Kami siap membantu merencanakan dan mewujudkan ibadah Umroh impian Anda dengan nyaman dan aman.
          </motion.p>

          <motion.div variants={fadeUp}>
            <a
              href={createWALink(DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-dream-gold hover:bg-dream-gold-hover
                         text-dream-navy font-semibold px-8 py-4 rounded-lg
                         transition-all duration-300 text-base md:text-lg
                         shadow-[0_0_24px_rgba(201,164,85,0.25)] hover:shadow-[0_0_36px_rgba(201,164,85,0.4)]
                         hover:-translate-y-0.5 group"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Konsultasi Gratis via WhatsApp
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex items-center justify-center gap-2 text-sm text-dream-cream/65"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
            </span>
            <span>
              Kursi terbatas! Paket Ramadan 2026 tersisa{' '}
              <strong className="text-white font-semibold">8 seat</strong>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
