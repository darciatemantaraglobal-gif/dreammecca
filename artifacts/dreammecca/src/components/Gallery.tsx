import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';

const items = [
  { name: 'Kain Ihram', slug: 'kain-ihram', note: 'Official Dreammecca' },
  { name: 'Siskopatuh', slug: 'siskopatuh', note: 'Resmi Kemenag' },
  { name: 'Tas Serut', slug: 'tas-serut', note: 'Parasut Premium' },
  { name: 'Tumbler', slug: 'tumbler', note: 'Official Dreammecca' },
  { name: 'Cover Paspor', slug: 'cover-paspor', note: 'Official Dreammecca' },
  { name: 'Payung', slug: 'payung', note: 'Official Dreammecca' },
  { name: 'Buku Panduan', slug: 'buku-panduan', note: 'Mudah & Lengkap' },
  { name: 'Lanyard', slug: 'lanyard', note: 'Official Dreammecca' },
  { name: 'Souvenir', slug: 'souvenir', note: 'Official Dreammecca' },
  { name: 'Paper Bag', slug: 'paper-bag', note: 'Official Dreammecca' },
  { name: 'Koper', slug: 'koper', note: 'Official Dreammecca' },
];

export default function Gallery() {
  return (
    <section className="px-[7vw] py-[88px] bg-white">
      <div className="max-w-[1180px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <span
            className="text-[13px] font-bold tracking-[0.14em] uppercase"
            style={{ color: '#6B6B85' }}
          >
            Perlengkapan Jamaah
          </span>
          <h2
            className="font-bold leading-[1.15] mt-[10px]"
            style={{ fontSize: 'clamp(28px,3.6vw,42px)', color: '#1B1B36' }}
          >
            Perlengkapan Eksklusif, Terlengkap &amp; Berkualitas
          </h2>
          <p
            className="text-[17px] leading-[1.6] mt-[16px] max-w-[620px]"
            style={{ color: '#6B6B85' }}
          >
            Setiap jamaah mendapat perlengkapan ibadah lengkap sebelum keberangkatan, siap pakai, tanpa perlu membeli sendiri.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-[20px] mt-[48px]"
        >
          {items.map(item => (
            <motion.figure key={item.name} variants={fadeUp}>
              <div
                className="rounded-xl overflow-hidden"
                style={{ aspectRatio: '1/1', background: '#F4F4F7' }}
              >
                <img
                  src={`/images/perlengkapan/${item.slug}.jpg`}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.parentElement) {
                      e.currentTarget.parentElement.style.background =
                        'repeating-linear-gradient(135deg,rgba(27,27,54,0.045),rgba(27,27,54,0.045) 10px,rgba(27,27,54,0.08) 10px,rgba(27,27,54,0.08) 20px)';
                    }
                  }}
                />
              </div>
              <figcaption className="mt-[10px] text-[13.5px] font-semibold" style={{ color: '#1B1B36' }}>
                {item.name}
              </figcaption>
              <p className="text-[11.5px] mt-[2px]" style={{ color: '#6B6B85' }}>
                {item.note}
              </p>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
