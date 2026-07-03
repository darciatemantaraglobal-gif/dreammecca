import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { createWALink, DEFAULT_MESSAGE } from '@/lib/whatsapp';

export default function FinalCTA() {
  return (
    <section className="py-24 bg-dream-navy relative overflow-hidden border-t border-dream-gold/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" 
           style={{ 
             backgroundImage: `radial-gradient(circle at center, #C9A455 2px, transparent 2px)`,
             backgroundSize: '30px 30px'
           }} 
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-dream-gold/10 text-dream-gold font-semibold text-xs tracking-wider mb-8">
          DAFTAR SEKARANG
        </div>
        
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
          Siap Memulai Perjalanan <span className="text-dream-gold">Suci Anda?</span>
        </h2>
        
        <p className="text-lg text-dream-cream/80 font-light mb-10 max-w-2xl mx-auto">
          Konsultasi gratis dengan tim kami. Kami siap membantu merencanakan dan mewujudkan ibadah Umroh impian Anda dengan nyaman dan aman.
        </p>
        
        <a
          href={createWALink(DEFAULT_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-dream-gold hover:bg-dream-gold-hover text-dream-navy font-semibold px-8 py-4 rounded-xl transition-all text-lg shadow-[0_0_20px_rgba(201,164,85,0.3)] hover:-translate-y-1 group"
        >
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
          Konsultasi Gratis via WhatsApp
        </a>
        
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-dream-cream/70">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          <span>Kursi terbatas! Paket Ramadan 2026 tersisa <strong className="text-white">8 seat</strong></span>
        </div>
      </div>
    </section>
  );
}
