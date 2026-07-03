import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Plane, Building2, Bus, BookOpen, Package, Coffee, Users } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';

const facilities = [
  {
    icon: Shield,
    title: "Penyelenggara Resmi",
    desc: "Terdaftar dan diawasi oleh Kemenag RI sebagai PPIU resmi"
  },
  {
    icon: Plane,
    title: "Maskapai Internasional",
    desc: "Penerbangan direct dengan Saudia Airlines & Garuda Indonesia"
  },
  {
    icon: Building2,
    title: "Hotel Bintang 4-5",
    desc: "Akomodasi premium terdekat dengan Masjidil Haram dan Nabawi"
  },
  {
    icon: Bus,
    title: "Transportasi Bus",
    desc: "AC bus mewah dan nyaman untuk mobilisasi seluruh rangkaian ibadah"
  },
  {
    icon: BookOpen,
    title: "Manasik Eksklusif",
    desc: "Pembekalan manasik intensif bersama ustadz berpengalaman"
  },
  {
    icon: Package,
    title: "Perlengkapan Eksklusif",
    desc: "Koper, mukena/ihram, tas, dan perlengkapan Umroh berkualitas"
  },
  {
    icon: Coffee,
    title: "Ruang Tunggu Nyaman",
    desc: "Lounge eksklusif di bandara dengan fasilitas lengkap"
  },
  {
    icon: Users,
    title: "Full Bimbingan",
    desc: "Pembimbing berdedikasi mendampingi seluruh rangkaian ibadah"
  }
];

export default function Facilities() {
  return (
    <section id="fasilitas" className="py-24 bg-dream-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-dream-gold/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-dream-gold/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-dream-gold/30 text-dream-gold font-semibold text-xs tracking-wider mb-6"
          >
            FASILITAS & LAYANAN
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-serif text-dream-cream"
          >
            Pelayanan Premium untuk <br className="hidden md:block" />
            <span className="text-dream-gold">Kenyamanan Ibadah Anda</span>
          </motion.h2>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {facilities.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-dream-navy-light p-6 rounded-xl border border-white/5 hover:border-dream-gold/40 transition-all duration-300 hover:-translate-y-1 group hover:shadow-[0_4px_20px_rgba(201,164,85,0.1)]"
            >
              <div className="w-12 h-12 bg-dream-navy rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="text-dream-gold" size={24} />
              </div>
              <h3 className="text-lg font-medium text-dream-cream mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-dream-cream/60 leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
