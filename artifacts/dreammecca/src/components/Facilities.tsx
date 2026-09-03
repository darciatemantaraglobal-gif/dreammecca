import React, { useState } from 'react';
import { ChevronRight, type LucideIcon } from 'lucide-react';
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
import { motion } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import { useSiteContent } from '@/lib/siteContent';

type Facility = {
  icon: LucideIcon;
  title: string;
  desc: string;
  image: string;
  position: string;
};

const fallbackFacilities: Facility[] = [
  { icon: BadgeCheck, title: 'Penyelenggara Resmi', desc: 'Berizin Kemenag dan terdaftar SISKOPATUH untuk perjalanan ibadah yang lebih tenang.', image: '/images/gallery-jamaah/jamaah-masjidil-haram.jpg', position: 'center 58%' },
  { icon: Plane, title: 'Maskapai Internasional', desc: 'Pilihan penerbangan Garuda Indonesia dan Qatar Airways sesuai jadwal program.', image: '/images/gallery-jamaah/jamaah-payung-dreammecca.jpg', position: 'center 50%' },
  { icon: BedDouble, title: 'Hotel Bintang 4 & 5', desc: 'Akomodasi Makkah dan Madinah yang dipilih untuk kenyamanan waktu istirahat jamaah.', image: '/images/gallery-jamaah/jamaah-madinah.jpg', position: 'center center' },
  { icon: BusFront, title: 'Transportasi Bus Terbaru', desc: 'Mobilitas perjalanan di Tanah Suci menggunakan bus ber-AC yang nyaman.', image: '/images/gallery-jamaah/jamaah-keluarga.jpg', position: 'center center' },
  { icon: BookOpenCheck, title: 'Manasik Eksklusif', desc: 'Pembekalan sebelum berangkat dengan bimbingan yang jelas dan sesuai sunnah.', image: '/images/gallery-jamaah/jamaah-doa.jpg', position: 'center center' },
  { icon: Luggage, title: 'Perlengkapan Eksklusif', desc: 'Kebutuhan perjalanan disiapkan lebih awal agar jamaah dapat fokus beribadah.', image: '/images/gallery-jamaah/jamaah-pendampingan.jpg', position: 'center center' },
  { icon: ShieldCheck, title: 'Persiapan Keberangkatan', desc: 'Jamaah berkumpul dan dipersiapkan dengan nyaman sebelum menuju bandara.', image: '/images/hero.jpg', position: 'center 64%' },
  { icon: UsersRound, title: 'Full Bimbingan', desc: 'Pembimbing mendampingi perjalanan dari manasik, keberangkatan, hingga kepulangan.', image: '/images/gallery-jamaah/jamaah-pendampingan.jpg', position: 'center center' },
  { icon: TrainFront, title: 'Kereta Cepat Haramain', desc: 'Makkah ke Madinah pulang pergi sudah termasuk dalam program yang tersedia.', image: '/images/gallery-jamaah/jamaah-madinah.jpg', position: 'center center' },
];

const iconMap: Record<string, LucideIcon> = { BadgeCheck, Plane, BedDouble, BusFront, BookOpenCheck, Luggage, ShieldCheck, UsersRound, TrainFront };

export default function Facilities() {
  const { data: content } = useSiteContent();
  const facilities: Facility[] = content.facilities.items.map((item) => ({
    icon: iconMap[item.icon ?? ''] ?? BadgeCheck,
    title: item.title,
    desc: item.detail,
    image: item.image ?? '/images/hero.jpg',
    position: item.position ?? 'center center',
  }));
  const [activeIndex, setActiveIndex] = useState(0);
  const active = facilities[activeIndex] ?? facilities[0] ?? fallbackFacilities[0];

  return (
    <section id="fasilitas" className="mobile-compact-section px-[7vw] py-[72px] md:py-[132px]" style={{ background: '#F7F6F2' }}>
      <div className="mx-auto max-w-[1180px]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="grid gap-[24px] md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <span className="text-[12px] font-bold tracking-[0.14em] uppercase" style={{ color: '#9A8C98' }}>{content.facilities.eyebrow}</span>
            <h2 className="mobile-section-title mt-[12px] font-bold leading-[1.12]" style={{ fontSize: 'clamp(34px,4vw,54px)', color: '#090F3B', textWrap: 'balance' }}>{content.facilities.title}</h2>
          </div>
          <p className="max-w-[540px] text-[16px] leading-[1.7] md:justify-self-end" style={{ color: '#5D5D76' }}>{content.facilities.intro}</p>
        </motion.div>

        <div className="mt-[34px] grid gap-[24px] md:mt-[48px] md:grid-cols-[0.94fr_1.06fr] md:gap-[72px]">
          <motion.figure initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="facility-showcase relative min-h-[360px] overflow-hidden rounded-lg md:min-h-[620px]" style={{ background: '#090F3B' }}>
            <img key={active.image} src={active.image} alt={active.title} className="h-full w-full object-cover" style={{ objectPosition: active.position }} />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(9,15,59,0.04), rgba(9,15,59,0.82))' }} />
            <figcaption className="absolute inset-x-[20px] bottom-[20px] md:inset-x-[30px] md:bottom-[30px]">
              <active.icon size={24} color="#C9ADA7" strokeWidth={1.55} />
              <h3 className="mt-[14px] text-[28px] leading-[1.15] md:text-[36px]" style={{ color: '#fff', fontWeight: 700 }}>{active.title}</h3>
              <p className="mt-[10px] max-w-[480px] text-[14px] leading-[1.6] md:text-[16px]" style={{ color: 'rgba(255,255,255,0.78)' }}>{active.desc}</p>
            </figcaption>
          </motion.figure>

          <div className="facility-list border-t" style={{ borderColor: 'rgba(9,15,59,0.16)' }}>
            {facilities.map((facility, index) => {
              const isActive = index === activeIndex;
              return (
                <button key={facility.title} type="button" onClick={() => setActiveIndex(index)} className="group flex w-full items-center gap-[14px] border-b py-[17px] text-left transition-colors md:gap-[18px] md:py-[19px]" style={{ borderColor: 'rgba(9,15,59,0.16)', color: isActive ? '#090F3B' : '#5D5D76' }} aria-pressed={isActive}>
                  <span className="flex size-9 flex-none items-center justify-center rounded-[6px]" style={{ background: isActive ? '#090F3B' : '#fff', border: isActive ? '1px solid #090F3B' : '1px solid rgba(9,15,59,0.12)' }}><facility.icon size={18} color={isActive ? '#C9ADA7' : '#4A4E69'} strokeWidth={1.65} /></span>
                  <span className="min-w-0 flex-1"><span className="block text-[15px] leading-[1.25] md:text-[17px]" style={{ fontWeight: isActive ? 700 : 400 }}>{facility.title}</span>{isActive && <span className="mt-[6px] block max-w-[480px] text-[13px] leading-[1.55]" style={{ color: '#5D5D76' }}>{facility.desc}</span>}</span>
                  <ChevronRight size={18} className="flex-none transition-transform duration-200" style={{ color: isActive ? '#090F3B' : '#9A8C98', transform: isActive ? 'rotate(90deg)' : 'rotate(0deg)' }} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
