import React, { useState } from 'react';
import { createWALink } from '@/lib/whatsapp';

type Room = 'Quad' | 'Triple' | 'Double';

interface Pkg {
  badge: string;
  name: string;
  period: string;
  days: string;
  flights: string;
  hotel_mecca: string;
  hotel_madinah: string;
  rooms: Record<Room, number>;
  quota: string;
  featured: boolean;
}

const packages: Pkg[] = [
  {
    badge: 'Reguler',
    name: 'Paket Umroh Reguler',
    period: 'Sep – Okt 2025',
    days: '9 Hari 7 Malam',
    flights: 'Saudia Airlines / Garuda Indonesia',
    hotel_mecca: 'Hotel Setaraf Bintang 4',
    hotel_madinah: 'Hotel Setaraf Bintang 4',
    rooms: { Quad: 29500000, Triple: 34500000, Double: 42000000 },
    quota: 'Sisa 12 seat',
    featured: false,
  },
  {
    badge: 'Plus',
    name: 'Paket Umroh Plus',
    period: 'Nov – Des 2025',
    days: '10 Hari 8 Malam',
    flights: 'Saudia Airlines / FlyDubai',
    hotel_mecca: 'Hotel Bintang 4 Azka Makkah',
    hotel_madinah: 'Hotel Bintang 4 Wahid Madinah',
    rooms: { Quad: 34500000, Triple: 40000000, Double: 49000000 },
    quota: 'Sisa 8 seat',
    featured: true,
  },
  {
    badge: 'Ramadan',
    name: 'Paket Umroh Ramadan',
    period: 'Feb – Mar 2026',
    days: '12 Hari 10 Malam',
    flights: 'Saudia Airlines',
    hotel_mecca: 'Hotel Bintang 5 Swissotel Makkah',
    hotel_madinah: 'Hotel Bintang 4 Madinah',
    rooms: { Quad: 44500000, Triple: 51000000, Double: 63000000 },
    quota: 'Sisa 5 seat',
    featured: false,
  },
];

const rooms: Room[] = ['Quad', 'Triple', 'Double'];

function fmt(n: number) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);
}

function PackageCard({ pkg }: { pkg: Pkg }) {
  const [room, setRoom] = useState<Room>('Quad');
  const waMsg = `Assalamualaikum, saya tertarik dengan ${pkg.name} (${pkg.period}). Boleh minta info lebih lengkap?`;

  return (
    <div
      className={`rounded-xl overflow-hidden flex flex-col transition-all duration-200${!pkg.featured ? ' hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(27,27,54,0.10)]' : ''}`}
      style={{
        border: pkg.featured ? '1px solid #1B1B36' : '1px solid rgba(27,27,54,0.10)',
        background: '#fff',
        boxShadow: pkg.featured ? '0 16px 40px rgba(27,27,54,0.12)' : 'none',
      }}
    >
      {/* Header */}
      <div className="px-6 pt-6 pb-5" style={{ background: '#1B1B36', color: '#fff' }}>
        <span
          className="inline-block text-[11.5px] font-bold tracking-[0.04em] uppercase px-[10px] py-[5px] rounded-full mb-3"
          style={{ background: 'rgba(255,255,255,0.14)' }}
        >
          {pkg.badge}
        </span>
        <div className="text-[20px] font-bold">{pkg.name}</div>
        <div className="text-[13.5px] mt-[6px]" style={{ color: 'rgba(255,255,255,0.66)' }}>
          {pkg.period}
        </div>
      </div>

      {/* Body */}
      <div className="px-6 py-[22px] flex-1 flex flex-col gap-4">
        {[
          { k: 'Durasi', v: pkg.days },
          { k: 'Penerbangan', v: pkg.flights },
          { k: 'Hotel Makkah', v: pkg.hotel_mecca },
          { k: 'Hotel Madinah', v: pkg.hotel_madinah },
        ].map(row => (
          <div
            key={row.k}
            className="flex justify-between gap-3 text-[13.5px] pb-[10px]"
            style={{ borderBottom: '1px dashed rgba(27,27,54,0.10)' }}
          >
            <span style={{ color: '#6B6B85' }}>{row.k}</span>
            <span className="font-semibold text-right" style={{ color: '#1B1B36' }}>{row.v}</span>
          </div>
        ))}

        {/* Room toggle */}
        <div>
          <div className="text-[12.5px] font-bold uppercase tracking-[0.04em] mb-2" style={{ color: '#6B6B85' }}>
            Tipe Kamar
          </div>
          <div className="flex gap-2">
            {rooms.map(r => (
              <button
                key={r}
                onClick={() => setRoom(r)}
                className="flex-1 py-[10px] rounded-lg text-[13px] font-semibold border transition-all duration-150"
                style={
                  room === r
                    ? { background: '#1B1B36', borderColor: '#1B1B36', color: '#fff' }
                    : { background: '#fff', borderColor: 'rgba(27,27,54,0.10)', color: '#1B1B36' }
                }
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Price */}
        <div>
          <span className="text-[30px] font-extrabold" style={{ color: '#1B1B36' }}>
            {fmt(pkg.rooms[room])}
          </span>
          <span className="text-[12.5px] font-medium ml-1" style={{ color: '#6B6B85' }}>
            / jamaah · {room}
          </span>
          <div className="text-[12.5px] font-semibold mt-1" style={{ color: '#B5442E' }}>
            {pkg.quota}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="px-6 pb-6">
        <a
          href={createWALink(waMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center w-full py-[15px] rounded-lg font-bold text-[15px] no-underline hover:opacity-[0.88] transition-opacity"
          style={{ background: '#1B1B36', color: '#fff' }}
        >
          Konsultasi Paket Ini
        </a>
      </div>
    </div>
  );
}

export default function Packages() {
  return (
    <section id="paket" className="px-[7vw] py-[88px] bg-white">
      <div className="max-w-[1180px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 flex-wrap">
          <div>
            <span
              className="text-[13px] font-bold tracking-[0.14em] uppercase"
              style={{ color: '#6B6B85' }}
            >
              Paket Umroh
            </span>
            <h2
              className="font-bold leading-[1.15] mt-[10px]"
              style={{ fontSize: 'clamp(28px,3.6vw,42px)', color: '#1B1B36' }}
            >
              Pilihan Jadwal Umroh Terdekat
            </h2>
            <p
              className="text-[17px] leading-[1.6] mt-[16px] max-w-[620px]"
              style={{ color: '#6B6B85' }}
            >
              Harga sudah termasuk tiket pesawat, hotel, transportasi, manasik, dan perlengkapan. Pilih tipe kamar untuk melihat harga per jamaah.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] mt-[44px] items-start">
          {packages.map(pkg => (
            <PackageCard key={pkg.name} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
