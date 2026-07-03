import React from 'react';
import { FileCheck, HeartHandshake, GraduationCap, Building2, Car, Armchair, Stamp, Camera, Plane, Briefcase } from 'lucide-react';

type FacilityIcon = React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;

const facilities: { icon: FacilityIcon; title: string; desc: string }[] = [
  {
    icon: FileCheck,
    title: 'Transparansi Biaya',
    desc: 'Setiap biaya dijelaskan rinci dan terbuka sejak awal, tanpa biaya tersembunyi.',
  },
  {
    icon: HeartHandshake,
    title: 'Ibadah Lebih Personal & Khusyuk',
    desc: 'Perjalanan dirancang agar Bapak/Ibu beribadah dengan tenang dan penuh kekhusyukan.',
  },
  {
    icon: GraduationCap,
    title: 'Bimbingan Ustadz Profesional',
    desc: 'Didampingi ustadz lulusan Al-Azhar Cairo dan Universitas Islam Madinah.',
  },
  {
    icon: Building2,
    title: 'Hotel Bintang 4 & 5',
    desc: 'Lokasi strategis, dekat dengan Masjidil Haram dan Masjid Nabawi.',
  },
  {
    icon: Car,
    title: 'Transportasi Nyaman & Aman',
    desc: 'Bekerja sama dengan penyedia transportasi terpercaya di Arab Saudi.',
  },
  {
    icon: Armchair,
    title: 'Lounge Bandara',
    desc: 'Fasilitas lounge saat keberangkatan & kepulangan, termasuk air zamzam 5 liter.',
  },
  {
    icon: Stamp,
    title: 'Visa Umroh Gratis',
    desc: 'Seluruh proses visa diurus penuh oleh tim kami, tanpa biaya tambahan.',
  },
  {
    icon: Camera,
    title: 'Fotografer Profesional',
    desc: 'Momen ibadah Bapak/Ibu didokumentasikan tim fotografer selama perjalanan.',
  },
  {
    icon: Plane,
    title: 'Maskapai Berstandar Internasional',
    desc: 'Saudia, Garuda, Emirates, Etihad, Qatar Airways & Turkish Airlines.',
  },
  {
    icon: Briefcase,
    title: 'Perlengkapan Umroh Lengkap',
    desc: 'Seluruh perlengkapan ibadah sudah termasuk, tanpa biaya tambahan.',
  },
];

export default function Facilities() {
  return (
    <section id="fasilitas" className="px-[7vw] py-[88px]" style={{
      backgroundImage: 'linear-gradient(180deg, rgba(41,41,81,0.90), rgba(41,41,81,0.95)), url(/images/patterns/geometric-navy.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: '#292951',
    }}>
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
