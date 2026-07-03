import React from 'react';
import { motion } from 'framer-motion';
import { Luggage, PersonStanding, Briefcase, Book, Star, Heart } from 'lucide-react';
import { staggerContainer, fadeUp } from '@/lib/animations';

const equipments = [
  { icon: Luggage,         title: "Koper Berkualitas",  desc: "Koper premium 24 inch dengan kunci TSA" },
  { icon: PersonStanding,  title: "Baju Ihram",         desc: "Kain ihram putih berkualitas tinggi" },
  { icon: Briefcase,       title: "Tas Selempang",      desc: "Tas multifungsi eksklusif Dreammecca" },
  { icon: Book,            title: "Buku Panduan",       desc: "Panduan ibadah lengkap & doa-doa" },
  { icon: Star,            title: "Sajadah Portable",   desc: "Sajadah lipat berkualitas premium" },
  { icon: Heart,           title: "Lainnya",            desc: "Masker, sandal, dll termasuk dalam paket" },
];

export default function Gallery() {
  return (
    <section id="perlengkapan" className="py-12 md:py-20 bg-dream-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-dream-navy">
            Perlengkapan <span className="text-dream-gold">Eksklusif Kami</span>
          </h2>
          <p className="mt-4 text-dream-navy/60 max-w-2xl mx-auto font-light">
            Setiap jamaah mendapatkan set perlengkapan eksklusif untuk menunjang kenyamanan ibadah dari tanah air hingga kembali lagi.
          </p>
        </div>

        {/* Mobile: horizontal scroll — Desktop: grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex overflow-x-auto pb-6 md:grid md:grid-cols-3 lg:grid-cols-6 gap-5 snap-x snap-mandatory hide-scrollbar"
        >
          {equipments.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="min-w-[220px] md:min-w-0 flex-shrink-0 snap-center"
            >
              <div
                className="bg-white rounded-xl p-6 h-full border border-black/5 shadow-sm
                           hover:shadow-lg hover:-translate-y-1
                           transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 mb-5 rounded-full bg-gradient-to-br from-dream-navy to-dream-navy-light flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-dream-gold" size={26} />
                </div>
                <h3 className="text-base font-semibold text-dream-navy mb-1.5">{item.title}</h3>
                <p className="text-sm text-dream-navy/55 font-light leading-snug">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      ` }} />
    </section>
  );
}
