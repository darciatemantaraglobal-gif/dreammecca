import React from 'react';
import { motion } from 'framer-motion';
import { Luggage, PersonStanding, Briefcase, Book, Star, Heart } from 'lucide-react';

const equipments = [
  { icon: Luggage,        title: 'Koper Berkualitas', desc: 'Koper premium 24 inch dengan kunci TSA' },
  { icon: PersonStanding, title: 'Baju Ihram',        desc: 'Kain ihram putih berkualitas tinggi' },
  { icon: Briefcase,      title: 'Tas Selempang',     desc: 'Tas multifungsi eksklusif Dreammecca' },
  { icon: Book,           title: 'Buku Panduan',      desc: 'Panduan ibadah lengkap & doa-doa' },
  { icon: Star,           title: 'Sajadah Portable',  desc: 'Sajadah lipat berkualitas premium' },
  { icon: Heart,          title: 'Lainnya',           desc: 'Masker, sandal, dll termasuk dalam paket' },
];

export default function Gallery() {
  return (
    <section id="perlengkapan" className="py-12 md:py-20 bg-dream-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-dream-navy">
            Perlengkapan <span className="text-dream-gold">Eksklusif Kami</span>
          </h2>
          <p className="mt-4 text-dream-navy/60 max-w-2xl mx-auto font-light text-sm sm:text-base">
            Setiap jamaah mendapatkan set perlengkapan eksklusif untuk menunjang kenyamanan ibadah dari tanah air hingga kembali lagi.
          </p>
        </div>

        {/*
          Mobile: horizontal scroll carousel with snap
          Desktop (md+): 3-col grid; Desktop lg+: 6-col grid
        */}
        <div
          className="flex gap-4 overflow-x-auto pb-4
                     md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:pb-0
                     lg:grid-cols-6
                     snap-x snap-mandatory
                     scroll-pl-4 md:scroll-pl-0"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {equipments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.08, duration: 0.45, ease: 'easeOut' }}
              /* each card: fixed 72% of viewport on mobile, full column on desktop */
              className="min-w-[72vw] sm:min-w-[240px] md:min-w-0 flex-shrink-0
                         snap-start first:ml-0"
            >
              <div
                className="bg-white rounded-xl p-5 sm:p-6 h-full border border-black/5 shadow-sm
                           hover:shadow-lg hover:-translate-y-1
                           transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 mb-4 rounded-full bg-gradient-to-br from-dream-navy to-dream-navy-light
                               flex items-center justify-center
                               group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <item.icon className="text-dream-gold" size={24} aria-hidden="true" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-dream-navy mb-1">{item.title}</h3>
                <p className="text-xs sm:text-sm text-dream-navy/55 font-light leading-snug">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Swipe hint — only visible on mobile */}
        <p className="mt-4 text-center text-xs text-dream-navy/40 md:hidden">
          Geser untuk melihat semua &rarr;
        </p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* hide scrollbar but keep scrolling */
        #perlengkapan .snap-x::-webkit-scrollbar { display: none; }
        #perlengkapan .snap-x { -ms-overflow-style: none; scrollbar-width: none; }
      ` }} />
    </section>
  );
}
