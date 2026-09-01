import React from 'react';
import { motion } from 'framer-motion';
import {
  BadgeCheck,
  BedDouble,
  BookOpenCheck,
  BusFront,
  Luggage,
  Plane,
  ShieldCheck,
  TrainFront,
  UsersRound,
} from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';

type FacilityIcon = React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;

const facilities: { icon: FacilityIcon; title: string; desc: string }[] = [
  { icon: BadgeCheck, title: 'Penyelenggara Resmi', desc: 'Berizin Kemenag dan terdaftar SISKOPATUH.' },
  { icon: Plane, title: 'Maskapai Internasional', desc: 'Direct flight Garuda, Saudia, atau Qatar Airways.' },
  { icon: BedDouble, title: 'Hotel Bintang 4 & 5', desc: 'Dekat Masjidil Haram dan Masjid Nabawi.' },
  { icon: BusFront, title: 'Transportasi Bus Terbaru', desc: 'Bus ber-AC keluaran terbaru selama di Tanah Suci.' },
  { icon: BookOpenCheck, title: 'Manasik Eksklusif', desc: 'Pembekalan sebelum berangkat, dibimbing sesuai sunnah.' },
  { icon: Luggage, title: 'Perlengkapan Eksklusif', desc: 'Terlengkap dan berkualitas, sudah termasuk paket.' },
  { icon: ShieldCheck, title: 'Persiapan Keberangkatan', desc: 'Jamaah berkumpul dan dipersiapkan dengan nyaman sebelum menuju bandara.' },
  { icon: UsersRound, title: 'Full Bimbingan', desc: 'Pembimbing mendampingi penuh sepanjang perjalanan.' },
  { icon: TrainFront, title: 'Kereta Cepat Haramain', desc: 'Makkah ke Madinah pulang pergi, sudah termasuk.' },
];

export default function Facilities() {
  return (
    <section id="fasilitas" className="px-[7vw] py-[72px] md:py-[132px]" style={{ background: '#090F3B' }}>
      <div className="mx-auto max-w-[1180px]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
          <span className="text-[12px] font-bold tracking-[0.14em] uppercase" style={{ color: '#FFD400' }}>
            Fasilitas &amp; Layanan Unggulan
          </span>
          <h2 className="mt-[12px] max-w-[740px] font-bold leading-[1.12] text-white" style={{ fontSize: 'clamp(34px,4vw,54px)', textWrap: 'balance' }}>
            Layanan Terbaik, untuk Perjalanan Ibadah yang Berkesan
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={staggerContainer}
          className="mt-[32px] grid grid-cols-2 gap-[10px] md:mt-[48px] md:grid-cols-12 md:gap-[12px]"
        >
          {facilities.map((facility, index) => {
            const isLead = index === 0;
            return (
            <motion.article
              key={facility.title}
              variants={fadeUp}
              className={`flex flex-col gap-[14px] rounded-lg p-[16px] md:p-[24px] ${isLead ? 'min-h-[176px] justify-between md:col-span-6 md:row-span-2 md:min-h-[324px]' : 'min-h-[176px] md:col-span-3'}`}
              style={{ background: isLead ? '#15205A' : '#11194A', border: '1px solid rgba(207,165,104,0.20)' }}
            >
              <div className={`flex flex-none items-center justify-center rounded-lg ${isLead ? 'h-10 w-10 md:h-12 md:w-12' : 'h-9 w-9 md:h-10 md:w-10'}`} style={{ background: 'rgba(207,165,104,0.12)' }}>
                <facility.icon size={isLead ? 21 : 18} color="#FFD400" strokeWidth={1.65} />
              </div>
              <div>
                <h3 className={isLead ? 'text-[17px] font-bold leading-[1.2] md:text-[24px]' : 'text-[14px] font-semibold leading-[1.3] md:text-[16px]'} style={{ color: '#fff' }}>{facility.title}</h3>
                <p className={`mt-[6px] leading-[1.5] ${isLead ? 'max-w-[340px] text-[12px] md:text-[15px]' : 'text-[12px] md:text-[13px]'}`} style={{ color: '#B5BCDE' }}>{facility.desc}</p>
              </div>
            </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
