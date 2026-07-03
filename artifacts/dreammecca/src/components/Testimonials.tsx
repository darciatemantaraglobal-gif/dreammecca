import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';

const testimonials = [
  {
    name: "Bapak Ahmad Fauzi",
    city: "Jakarta Selatan",
    package: "Paket Reguler Ramadan",
    quote: "Alhamdulillah, perjalanan umroh kami sangat lancar. Pembimbing sangat sabar dan profesional. Akan rekomendasikan Dreammecca ke keluarga kami.",
    avatar: "/images/avatar-2.jpg"
  },
  {
    name: "Ibu Siti Rahayu",
    city: "Surabaya",
    package: "Paket Premium Plus",
    quote: "Hotelnya dekat sekali dengan Masjidil Haram. Pelayanan dari Dreammecca dari awal sampai pulang sangat memuaskan. Terima kasih!",
    avatar: "/images/avatar-1.jpg"
  },
  {
    name: "Bapak Hendra Wijaya",
    city: "Bandung",
    package: "Paket VIP Dzulhijjah",
    quote: "Ini umroh pertama saya dan saya sangat puas. Semua kebutuhan terpenuhi, bahkan lebih dari yang dijanjikan. Insya Allah mau umroh lagi dengan Dreammecca."
  },
  {
    name: "Ibu Fatimah Zahra",
    city: "Medan",
    package: "Paket Reguler Syawal",
    quote: "Proses pendaftaran mudah, transparan, dan tidak ada biaya tersembunyi. Sangat recommended untuk keluarga yang baru mau umroh!"
  },
  {
    name: "Bapak Rizki Pratama",
    city: "Makassar",
    package: "Paket Ekonomi Syawal",
    quote: "Paket ekonomi tapi kualitas bintang 4. Luar biasa! Pembimbing selalu sigap dan membantu."
  },
  {
    name: "Ibu Nuraini",
    city: "Semarang",
    package: "Paket Reguler Ramadan",
    quote: "Pengalaman ibadah yang tak terlupakan. Dreammecca benar-benar amanah. Jazakumullahu khairan."
  }
];

function InitialsAvatar({ name }: { name: string }) {
  const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2);
  return (
    <div className="w-12 h-12 rounded-full bg-dream-gold text-dream-navy flex items-center justify-center font-serif font-bold text-lg">
      {initials}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-24 bg-dream-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-dream-navy">
            Kata <span className="text-dream-gold">Jamaah Kami</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto font-light">
            Ribuan jamaah telah mempercayakan perjalanan sucinya bersama Dreammecca.
          </p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testi, i) => (
            <motion.div 
              key={i}
              variants={fadeUp}
              className="bg-white p-6 rounded-2xl shadow-sm border border-black/5 flex flex-col h-full"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-dream-gold text-dream-gold" />
                ))}
              </div>
              
              <p className="text-gray-700 italic flex-grow mb-6">
                "{testi.quote}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100">
                {testi.avatar ? (
                  <img src={testi.avatar} alt={testi.name} className="w-12 h-12 rounded-full object-cover" />
                ) : (
                  <InitialsAvatar name={testi.name} />
                )}
                <div>
                  <div className="font-semibold text-dream-navy text-sm">{testi.name}</div>
                  <div className="text-xs text-gray-500">{testi.city} • {testi.package}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
