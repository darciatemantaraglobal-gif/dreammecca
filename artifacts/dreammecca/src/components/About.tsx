import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { useSiteContent } from '@/lib/siteContent';

export default function About() {
  const { data: content } = useSiteContent();
  const about = content.about;
  return (
    <section id="tentang" className="bg-white px-[7vw] py-[72px] md:py-[136px]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-[36px] md:grid-cols-[0.9fr_1.1fr] md:gap-[96px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <span className="text-[12px] font-bold tracking-[0.14em] uppercase" style={{ color: '#C9ADA7' }}>
            {about.eyebrow}
          </span>
          <h2
            className="mt-[12px] font-bold leading-[1.12]"
            style={{ fontSize: 'clamp(34px,4vw,54px)', color: '#1B1B36', textWrap: 'balance' }}
          >
            {about.title}
          </h2>
          <div className="mt-[24px] max-w-[560px] space-y-[16px] border-l-2 pl-[20px] text-[16px] leading-[1.72] md:text-[17px]" style={{ color: '#5D5D76', borderColor: '#C9ADA7' }}>
            {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="mt-[30px] grid max-w-[560px] grid-cols-1 gap-y-[16px] sm:grid-cols-3 sm:gap-x-[18px]">
            {about.features.map(({ title, detail }) => (
              <div key={title} className="border-t pt-[12px]" style={{ borderColor: 'rgba(9,15,59,0.14)' }}>
                <p className="text-[14px]" style={{ color: '#090F3B', fontWeight: 700 }}>{title}</p>
                <p className="mt-[3px] text-[12px] leading-[1.45]" style={{ color: '#5D5D76' }}>{detail}</p>
              </div>
            ))}
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
            src={about.imageUrl}
            alt={about.imageAlt}
            className="h-full w-full object-cover"
            style={{ objectPosition: 'center center' }}
          />
          <figcaption className="absolute bottom-0 left-0 px-[18px] py-[12px] text-[12px] font-bold tracking-[0.08em] uppercase" style={{ background: '#090F3B', color: '#C9ADA7' }}>
            {about.caption}
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
