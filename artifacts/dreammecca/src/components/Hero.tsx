import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Plane, Star, ChevronDown } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { createWALink, DEFAULT_MESSAGE } from '@/lib/whatsapp';

export default function Hero() {
  return (
    <div className="relative min-h-[100dvh] flex items-center justify-center bg-dream-navy overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg"
          alt="Kaabah Mecca at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dream-navy via-dream-navy/80 to-dream-navy/40" />
        
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay" 
             style={{ 
               backgroundImage: `radial-gradient(#C9A455 1px, transparent 1px)`,
               backgroundSize: '40px 40px'
             }} 
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.h1 
            variants={fadeUp}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6"
          >
            Wujudkan Panggilan Suci ke <span className="text-dream-gold">Tanah Haram</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeUp}
            className="text-lg md:text-xl text-dream-cream/90 mb-10 max-w-2xl mx-auto font-light"
          >
            Perjalanan Umroh nyaman, aman, dan penuh berkah bersama pembimbing berpengalaman
          </motion.p>

          <motion.div 
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a
              href={createWALink(DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-dream-gold hover:bg-dream-gold-hover text-dream-navy font-semibold px-8 py-4 rounded-lg transition-all text-lg shadow-[0_0_20px_rgba(201,164,85,0.3)] hover:shadow-[0_0_30px_rgba(201,164,85,0.5)]"
            >
              Konsultasi Gratis
            </a>
            <a
              href="#paket"
              className="w-full sm:w-auto bg-transparent hover:bg-white/5 border border-white/30 text-white font-medium px-8 py-4 rounded-lg transition-all text-lg backdrop-blur-sm"
            >
              Lihat Paket Umroh
            </a>
          </motion.div>

          <motion.div 
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-12 pt-8 border-t border-white/10"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-dream-gold" size={24} />
              <span className="text-sm md:text-base text-dream-cream/80 font-medium">Terdaftar Resmi Kemenag RI</span>
            </div>
            <div className="flex items-center gap-2">
              <Plane className="text-dream-gold" size={24} />
              <span className="text-sm md:text-base text-dream-cream/80 font-medium">Saudia Airlines & Garuda</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="text-dream-gold" size={24} />
              <span className="text-sm md:text-base text-dream-cream/80 font-medium">4.9/5 Rating Jamaah</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/50 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="text-dream-gold" size={24} />
        </motion.div>
      </motion.div>
    </div>
  );
}
