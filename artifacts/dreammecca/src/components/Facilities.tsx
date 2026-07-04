import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { FileCheck, HeartHandshake, GraduationCap, Building2, Car, Armchair, Stamp, Camera, Plane, Briefcase } from 'lucide-react';

type FacilityIcon = React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;

const facilities: { icon: FacilityIcon; title: string; desc: string }[] = [
  {
    icon: FileCheck,
    title: 'Transparansi Biaya',
    desc: 'Rinci dan terbuka sejak awal, tanpa biaya tersembunyi.',
  },
  {
    icon: HeartHandshake,
    title: 'Ibadah Lebih Khusyuk',
    desc: 'Perjalanan dirancang tenang dan penuh kekhusyukan.',
  },
  {
    icon: GraduationCap,
    title: 'Bimbingan Ustadz',
    desc: 'Lulusan Al-Azhar Cairo dan Universitas Islam Madinah.',
  },
  {
    icon: Building2,
    title: 'Hotel Bintang 4 & 5',
    desc: 'Lokasi dekat Masjidil Haram dan Masjid Nabawi.',
  },
  {
    icon: Car,
    title: 'Transportasi Nyaman',
    desc: 'Bekerja sama dengan penyedia terpercaya di Arab Saudi.',
  },
  {
    icon: Armchair,
    title: 'Lounge Bandara',
    desc: 'Saat keberangkatan & kepulangan, termasuk air zamzam.',
  },
  {
    icon: Stamp,
    title: 'Visa Umroh Gratis',
    desc: 'Diurus penuh oleh tim kami, tanpa biaya tambahan.',
  },
  {
    icon: Camera,
    title: 'Fotografer Profesional',
    desc: 'Momen ibadah Anda didokumentasikan selama perjalanan.',
  },
  {
    icon: Plane,
    title: 'Maskapai Internasional',
    desc: 'Saudia, Garuda, Emirates, Etihad, Qatar & Turkish Airlines.',
  },
  {
    icon: Briefcase,
    title: 'Perlengkapan Lengkap',
    desc: 'Seluruh perlengkapan ibadah sudah termasuk.',
  },
];

export default function Facilities() {
  return (
    <section id="fasilitas" className="px-[7vw] py-[88px]" style={{
      backgroundImage: 'linear-gradient(180deg, rgba(41,41,81,0.55), rgba(41,41,81,0.65)), url(/images/patterns/geometric-navy.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      backgroundColor: '#292951',
    }}>
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
            Fasilitas &amp; Layanan
          </span>
          <h2
            className="font-bold leading-[1.15] mt-[10px] text-white"
            style={{ fontSize: 'clamp(28px,3.6vw,42px)' }}
          >
            Semua Kebutuhan Ibadah, Kami Siapkan
          </h2>
          <p
            className="text-[17px] leading-[1.6] mt-[16px] max-w-[620px]"
            style={{ color: 'rgba(255,255,255,0.66)' }}
          >
            Layanan menyeluruh yang dirancang agar jamaah fokus beribadah, bukan mengurus logistik.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-[12px] md:gap-[20px] mt-[48px] items-stretch"
        >
          {facilities.map(f => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              className="rounded-2xl p-[28px] flex flex-col h-full transition-all duration-200 hover:-translate-y-1 hover:bg-[rgba(255,255,255,0.07)]"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="w-[44px] h-[44px] rounded-xl bg-white flex items-center justify-center mb-[20px] flex-none">
                <f.icon size={20} color="#1B1B36" strokeWidth={1.75} />
              </div>
              <h4 className="text-[15px] md:text-[17px] font-bold leading-[1.3]" style={{ color: '#fff' }}>
                {f.title}
              </h4>
              <p className="text-[12.5px] md:text-[14px] leading-[1.5] mt-[8px]" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
