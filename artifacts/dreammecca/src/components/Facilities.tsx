import React from 'react';
import { ShieldCheck, Plane, Building2, Bus, BookOpen, Briefcase, Armchair, Users } from 'lucide-react';

type FacilityIcon = React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;

const facilities: { icon: FacilityIcon; title: string; desc: string }[] = [
  {
    icon: ShieldCheck,
    title: 'Penyelenggara Resmi Ibadah Umroh',
    desc: 'Berizin resmi PPIU Kementerian Agama RI, terdaftar dan diawasi langsung.',
  },
  {
    icon: Plane,
    title: 'Maskapai Internasional',
    desc: 'Penerbangan langsung tanpa transit panjang, bersama maskapai ternama.',
  },
  {
    icon: Building2,
    title: 'Hotel Bintang 4–5 Pilihan',
    desc: 'Lokasi dekat Masjidil Haram & Masjid Nabawi, kenyamanan terjaga.',
  },
  {
    icon: Bus,
    title: 'Transportasi Bus Ber-AC',
    desc: 'Armada modern untuk seluruh rangkaian perjalanan ibadah Anda.',
  },
  {
    icon: BookOpen,
    title: 'Manasik Intensif',
    desc: 'Pembekalan manasik sebelum keberangkatan, dibimbing langsung ustadz.',
  },
  {
    icon: Briefcase,
    title: 'Perlengkapan Umroh Lengkap',
    desc: 'Koper, ihram, mukena, hingga kit kesehatan — sudah disiapkan.',
  },
  {
    icon: Armchair,
    title: 'Layanan Bandara Nyaman',
    desc: 'Pendampingan penuh saat keberangkatan maupun kepulangan di Indonesia.',
  },
  {
    icon: Users,
    title: 'Pembimbing Bersertifikat',
    desc: 'Didampingi ustadz dan muthawif berpengalaman, sesuai sunnah Nabi ﷺ.',
  },
];

export default function Facilities() {
  return (
    <section id="fasilitas" className="px-[7vw] py-[88px]" style={{ background: '#292951' }}>
      <div className="max-w-[1180px] mx-auto">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[20px] mt-[48px]">
          {facilities.map(f => (
            <div
              key={f.title}
              className="rounded-xl p-[26px_22px] bg-[rgba(255,255,255,0.04)] transition-all duration-200 hover:-translate-y-1 hover:bg-[rgba(255,255,255,0.07)]"
              style={{ border: '1px solid rgba(255,255,255,0.14)' }}
            >
              <div className="w-[38px] h-[38px] rounded-[10px] bg-white flex items-center justify-center mb-[16px]">
                <f.icon size={20} color="#1B1B36" strokeWidth={2} />
              </div>
              <h3 className="text-white font-bold text-[16px] leading-[1.3]">{f.title}</h3>
              <p
                className="text-[14px] mt-[8px] leading-[1.55]"
                style={{ color: 'rgba(255,255,255,0.66)' }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
