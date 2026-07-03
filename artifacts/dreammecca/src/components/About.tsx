import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

function AnimatedCounter({ value, label, suffix = "" }: { value: number, label: string, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = (duration / end) * 2;
      
      // Different logic for decimal vs integer
      if (value % 1 !== 0) {
        // Decimal (like 4.9)
        const timer = setInterval(() => {
          start += 0.1;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Number(start.toFixed(1)));
          }
        }, 40);
        return () => clearInterval(timer);
      } else {
        // Integer or large number (jump in larger chunks)
        const step = Math.ceil(end / 50);
        const timer = setInterval(() => {
          start += step;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(start);
          }
        }, 40);
        return () => clearInterval(timer);
      }
    }
  }, [value, isInView]);

  return (
    <div ref={ref} className="text-center p-4 bg-white rounded-xl shadow-sm border border-dream-cream">
      <div className="text-3xl md:text-4xl font-serif font-bold text-dream-gold mb-1">
        {count.toLocaleString('id-ID')}{suffix}
      </div>
      <div className="text-xs md:text-sm text-dream-navy/70 font-medium">
        {label}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="tentang" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="order-2 lg:order-1"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-dream-cream text-dream-gold font-semibold text-xs tracking-wider mb-6">
              TENTANG KAMI
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif text-dream-navy mb-6 leading-tight">
              Perjalanan Berkesan, <br/>
              <span className="text-dream-gold">Ibadah Bermakna</span>
            </h2>
            
            <div className="space-y-4 text-gray-600 mb-10 text-lg font-light leading-relaxed">
              <p>
                Didirikan sejak 2012, Dreammecca hadir sebagai sahabat setia dalam merajut mimpi suci Anda menuju Baitullah. Kami memahami bahwa Umroh bukan sekadar perjalanan fisik, melainkan perjalanan spiritual yang mendalam.
              </p>
              <p>
                Sebagai penyelenggara resmi yang terdaftar di Kementerian Agama RI, kami berkomitmen memberikan pelayanan sepenuh hati, fasilitas premium, dan bimbingan ibadah yang sesuai sunnah—memastikan Anda dapat beribadah dengan tenang, khusyuk, dan paripurna.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <AnimatedCounter value={5000} label="Jamaah Diberangkatkan" suffix="+" />
              <AnimatedCounter value={12} label="Tahun Pengalaman" />
              <AnimatedCounter value={4.9} label="Rating Jamaah" suffix="/5" />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            {/* Decorative background block */}
            <div className="absolute -inset-4 bg-dream-cream rounded-2xl transform rotate-3 -z-10"></div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img 
                src="/images/about.jpg" 
                alt="Masjid Nabawi" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dream-navy/60 to-transparent"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-dream-navy p-6 rounded-xl shadow-xl border-l-4 border-dream-gold max-w-[200px]">
              <p className="text-white font-serif text-lg leading-tight">
                "Sebaik-baik perjalanan adalah menuju Rumah-Nya."
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
