import React from 'react';
import { motion } from 'framer-motion';
import { Luggage, PersonStanding, Briefcase, Book, Star, Heart } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';

const equipments = [
  {
    icon: Luggage,
    title: "Koper Berkualitas",
    desc: "Koper premium 24 inch dengan kunci TSA"
  },
  {
    icon: PersonStanding,
    title: "Baju Ihram",
    desc: "Kain ihram putih berkualitas tinggi"
  },
  {
    icon: Briefcase,
    title: "Tas Selempang",
    desc: "Tas multifungsi eksklusif Dreammecca"
  },
  {
    icon: Book,
    title: "Buku Panduan",
    desc: "Panduan ibadah lengkap & doa-doa"
  },
  {
    icon: Star,
    title: "Sajadah Portable",
    desc: "Sajadah lipat berkualitas premium"
  },
  {
    icon: Heart,
    title: "Lainnya",
    desc: "Masker, sandal, dll termasuk dalam paket"
  }
];

export default function Gallery() {
  return (
    <section id="perlengkapan" className="py-24 bg-dream-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-dream-navy">
            Perlengkapan <span className="text-dream-gold">Eksklusif Kami</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Setiap jamaah akan mendapatkan set perlengkapan eksklusif untuk menunjang kenyamanan ibadah dari tanah air hingga kembali lagi.
          </p>
        </div>

        {/* Mobile horizontal scroll / Desktop grid */}
        <div className="flex overflow-x-auto pb-8 md:grid md:grid-cols-3 lg:grid-cols-6 gap-6 snap-x snap-mandatory hide-scrollbar">
          {equipments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[240px] md:min-w-0 flex-shrink-0 snap-center"
            >
              <div className="bg-white rounded-2xl p-6 h-full border border-black/5 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center group">
                <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-dream-navy to-dream-navy-light flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-dream-gold" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-dream-navy mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 font-light">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
