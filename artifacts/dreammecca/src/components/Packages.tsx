import React from 'react';
import { Calendar } from 'lucide-react';
import { createWALink } from '@/lib/whatsapp';

interface Pkg {
  slug: string;
  tier: 'Reguler' | 'Luxury';
  title: string;
  dateLabel: string;
  duration: string;
  flightType: string;
  landing: string;
  tags: string[];
  priceFrom: number;
  featured: boolean;
}

const packages: Pkg[] = [
  {
    slug: 'reguler-9hari',
    tier: 'Reguler',
    title: 'Umroh Reguler Free Thoif',
    dateLabel: 'GANTI: tanggal terdekat',
    duration: '9 Hari',
    flightType: 'Direct',
    landing: 'Jeddah',
    tags: ['Ziarah Thoif', 'Audio Hajj'],
    priceFrom: 33900000,
    featured: false,
  },
  {
    slug: 'reguler-12hari',
    tier: 'Reguler',
    title: 'Umroh Reguler Free Thoif',
    dateLabel: 'GANTI: tanggal terdekat',
    duration: '12 Hari',
    flightType: 'Direct',
    landing: 'Jeddah',
    tags: ['Ziarah Thoif', 'Unta + ATV'],
    priceFrom: 36900000,
    featured: false,
  },
  {
    slug: 'luxury-9hari',
    tier: 'Luxury',
    title: 'Umroh Luxury Free Thoif',
    dateLabel: 'GANTI: tanggal terdekat',
    duration: '9 Hari',
    flightType: 'Direct',
    landing: 'Jeddah',
    tags: ['Ziarah Thoif', 'Unta + ATV', 'Audio Hajj'],
    priceFrom: 39900000,
    featured: true,
  },
  {
    slug: 'luxury-12hari',
    tier: 'Luxury',
    title: 'Umroh Luxury Free Thoif',
    dateLabel: 'GANTI: tanggal terdekat',
    duration: '12 Hari',
    flightType: 'Direct',
    landing: 'Jeddah',
    tags: ['Ziarah Thoif', 'Unta + ATV', 'Audio Hajj'],
    priceFrom: 43900000,
    featured: false,
  },
];

function fmt(n: number) {
  return new Intl.NumberFormat('id-ID', { maximumFractionDigits: 1 }).format(n / 1000000);
}

function PackageCard({ pkg }: { pkg: Pkg }) {
  const waMsg = `Assalamualaikum, saya tertarik dengan ${pkg.title} (${pkg.tier}, ${pkg.duration}). Boleh minta info lebih lengkap?`;

  return (
    <div
      className="rounded-xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1"
      style={{
        border: pkg.featured ? '1px solid #1B1B36' : '1px solid rgba(27,27,54,0.10)',
        background: '#fff',
        boxShadow: pkg.featured ? '0 16px 40px rgba(27,27,54,0.12)' : '0 2px 8px rgba(27,27,54,0.04)',
      }}
    >
      {/* Poster — rasio 4:5, di-upload manual */}
      <div className="w-full relative" style={{ aspectRatio: '4/5', background: '#F4F4F7' }}>
        <img
          src={`/images/paket/poster-${pkg.slug}.jpg`}
          alt={`Poster ${pkg.title} ${pkg.tier} ${pkg.duration}`}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        {pkg.featured && (
          <span
            className="absolute top-3 left-3 text-[11px] font-bold uppercase tracking-[0.04em] px-[10px] py-[5px] rounded-full text-white"
            style={{ background: '#1B1B36' }}
          >
            Terpopuler
          </span>
        )}
      </div>

      {/* Info terstruktur */}
      <div className="px-5 pt-4 pb-5 flex-1 flex flex-col">
        <div className="flex items-center gap-[6px] text-[13px] font-medium" style={{ color: '#6B6B85' }}>
          <Calendar size={14} />
          {pkg.dateLabel}
        </div>

        <h3 className="text-[17px] font-bold mt-[6px] leading-[1.3]" style={{ color: '#1B1B36' }}>
          {pkg.title} <span style={{ color: '#6B6B85', fontWeight: 500 }}>· {pkg.tier}</span>
        </h3>

        <div className="flex gap-[6px] flex-wrap mt-[10px]">
          {pkg.tags.map(tag => (
            <span
              key={tag}
              className="text-[11.5px] font-semibold px-[10px] py-[4px] rounded-full"
              style={{ border: '1px solid rgba(27,27,54,0.14)', color: '#1B1B36' }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-[16px] flex flex-col gap-[8px]">
          <div className="flex justify-between text-[13px]">
            <span style={{ color: '#6B6B85' }}>Durasi</span>
            <span className="font-semibold" style={{ color: '#1B1B36' }}>{pkg.duration}</span>
          </div>
          <div className="flex justify-between text-[13px]">
            <span style={{ color: '#6B6B85' }}>Flight</span>
            <span className="font-semibold" style={{ color: '#1B1B36' }}>{pkg.flightType}</span>
          </div>
          <div className="flex justify-between text-[13px]">
            <span style={{ color: '#6B6B85' }}>Landing</span>
            <span className="font-semibold" style={{ color: '#1B1B36' }}>{pkg.landing}</span>
          </div>
        </div>

        <div className="mt-auto pt-[18px] flex items-end justify-between gap-3">
          <div>
            <div className="text-[11.5px]" style={{ color: '#6B6B85' }}>Harga Mulai</div>
            <div className="text-[22px] font-extrabold" style={{ color: '#1B1B36' }}>
              Rp {fmt(pkg.priceFrom)} Jt
            </div>
          </div>
          <a
            href={createWALink(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-[22px] py-[12px] rounded-lg font-bold text-[13.5px] no-underline hover:opacity-[0.88] transition-opacity flex-none"
            style={{ background: '#1B1B36', color: '#fff' }}
          >
            Booking
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Packages() {
  return (
    <section id="paket" className="px-[7vw] py-[88px] bg-white">
      <div className="max-w-[1180px] mx-auto">
        <span className="text-[13px] font-bold tracking-[0.14em] uppercase" style={{ color: '#6B6B85' }}>
          Paket Umroh
        </span>
        <h2
          className="font-bold leading-[1.15] mt-[10px]"
          style={{ fontSize: 'clamp(28px,3.6vw,42px)', color: '#1B1B36' }}
        >
          Jadwal Keberangkatan Terdekat, Seat Terbatas
        </h2>
        <p className="text-[17px] leading-[1.6] mt-[16px] max-w-[620px]" style={{ color: '#6B6B85' }}>
          Harga sudah termasuk tiket pesawat, visa, hotel, transportasi, manasik, dan perlengkapan. Jangan sampai kehabisan seat.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] mt-[44px] items-stretch">
          {packages.map(pkg => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>

        <p className="text-center text-[14px] mt-[32px]" style={{ color: '#6B6B85' }}>
          Dapatkan flash sale diskon sesuai syarat &amp; ketentuan yang berlaku — tanya tim kami untuk info promo terbaru.
        </p>
      </div>
    </section>
  );
}
