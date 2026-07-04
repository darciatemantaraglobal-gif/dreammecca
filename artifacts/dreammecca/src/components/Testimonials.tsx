import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';

interface Testimonial {
  id: string;
  name: string;
  meta: string;
  quote: string;
  rating: number;
}

function useTestimonials() {
  return useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_active', true)
        .order('sort_order');
      if (error) throw error;
      return data as Testimonial[];
    },
  });
}

function getInitials(name: string) {
  return name
    .split(' ')
    .map(w => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function renderStars(rating: number) {
  return '★'.repeat(Math.min(5, Math.max(1, rating)));
}

const fallbackTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ratna Hidayati',
    meta: 'Kloter September 2025',
    quote: 'Dari daftar sampai pulang, semuanya rapi dan sesuai jadwal. Hotelnya beneran dekat Masjidil Haram, persis seperti yang dijanjikan di awal.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Ahmad Fauzan',
    meta: 'Kloter Mei 2025',
    quote: 'Pembimbingnya sabar banget jelasinnya, dan manasiknya kepakai betul di lapangan. Orang tua saya yang sudah lansia jadi lebih siap dan tenang.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Siti Nuraini',
    meta: 'Kloter Januari 2025',
    quote: 'Jujur awalnya was-was, banyak berita penipuan travel Umroh akhir-akhir ini. Tapi Dreammecca transparan soal izin dan itinerary sejak konsultasi pertama.',
    rating: 5,
  },
];

export default function Testimonials() {
  const { data } = useTestimonials();
  const testimonials = (data && data.length > 0) ? data : fallbackTestimonials;

  return (
    <section
      id="testimoni"
      className="px-[7vw] py-[88px]"
      style={{
        backgroundImage: 'linear-gradient(180deg, rgba(27,27,54,0.55), rgba(27,27,54,0.65)), url(/images/patterns/geometric-navy.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundColor: '#1B1B36',
      }}
    >
      <div className="max-w-[1180px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <span
            className="text-[13px] font-bold tracking-[0.14em] uppercase"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            Testimoni Jamaah
          </span>
          <h2
            className="font-bold leading-[1.15] mt-[10px] text-white"
            style={{ fontSize: 'clamp(28px,3.6vw,42px)' }}
          >
            Cerita dari Mereka yang Sudah Berangkat
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-[24px] mt-[48px]"
        >
          {testimonials.map(t => (
            <motion.div
              key={t.id}
              variants={fadeUp}
              className="rounded-xl p-[26px] bg-[rgba(255,255,255,0.04)] transition-all duration-200 hover:-translate-y-1 hover:bg-[rgba(255,255,255,0.07)]"
              style={{ border: '1px solid rgba(255,255,255,0.14)' }}
            >
              <div className="text-[13px] tracking-[2px] mb-[14px]" style={{ color: '#fff' }}>
                {renderStars(t.rating)}
              </div>
              <p className="text-[14.5px] leading-[1.65] text-white">"{t.quote}"</p>
              <div className="flex items-center gap-3 mt-[20px]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-[14px] text-white flex-none"
                  style={{ background: 'rgba(255,255,255,0.12)' }}
                >
                  {getInitials(t.name)}
                </div>
                <div>
                  <div className="text-[13.5px] font-bold text-white">{t.name}</div>
                  <div className="text-[12px]" style={{ color: 'rgba(255,255,255,0.66)' }}>
                    {t.meta}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
