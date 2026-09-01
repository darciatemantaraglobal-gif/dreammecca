import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';

export default function About() {
  return (
    <section id="tentang" className="bg-white px-[7vw] py-[72px] md:py-[136px]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-[36px] md:grid-cols-[0.9fr_1.1fr] md:gap-[96px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <span className="text-[12px] font-bold tracking-[0.14em] uppercase" style={{ color: '#8C661A' }}>
            Tentang Dreammecca
          </span>
          <h2
            className="mt-[12px] font-bold leading-[1.12]"
            style={{ fontSize: 'clamp(34px,4vw,54px)', color: '#1B1B36', textWrap: 'balance' }}
          >
            Mendampingi Perjalanan Ibadah Anda
          </h2>
          <div className="mt-[24px] max-w-[560px] space-y-[16px] border-l-2 pl-[20px] text-[16px] leading-[1.72] md:text-[17px]" style={{ color: '#5D5D76', borderColor: '#D9B35E' }}>
            <p>
              Dreammecca mendampingi perjalanan umroh dan wisata halal, dari persiapan manasik hingga kepulangan. Kami menata setiap tahap perjalanan dengan informasi yang jelas dan perhatian pada kenyamanan jamaah.
            </p>
            <p>
              Kami percaya perjalanan ibadah yang tenang dimulai dari pendampingan yang dekat, komunikasi yang responsif, dan pelayanan yang tertata.
            </p>
          </div>
        </motion.div>

        <motion.figure
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ delay: 0.1 }}
          className="relative overflow-hidden rounded-lg"
          style={{ aspectRatio: '4 / 3', background: '#F4F3EF', boxShadow: '16px 16px 0 #EDE5D5' }}
        >
          <img
            src="/images/gallery-jamaah/jamaah-pendampingan.jpg"
            alt="Pembimbing Dreammecca mendampingi jamaah di Tanah Suci"
            className="h-full w-full object-cover"
            style={{ objectPosition: 'center center' }}
          />
          <figcaption className="absolute bottom-0 left-0 px-[18px] py-[12px] text-[12px] font-bold tracking-[0.08em] uppercase" style={{ background: '#090F3B', color: '#E2BC6C' }}>
            Pendampingan Jamaah Dreammecca
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
