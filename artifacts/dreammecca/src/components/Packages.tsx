import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plane, Building2, Calendar, Moon } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { createWALink } from '@/lib/whatsapp';

type RoomType = 'Quad' | 'Triple' | 'Double';

interface Package {
  id: string;
  name: string;
  duration: string;
  month: string;
  airline: string;
  hotel: string;
  prices: Record<RoomType, number>;
  badge?: { text: string; color: 'gold' | 'red' };
}

const packages: Package[] = [
  {
    id: "p1",
    name: "Paket Reguler Ramadan",
    duration: "12 Hari",
    month: "Februari 2026",
    airline: "Saudia Airlines",
    hotel: "Hotel Ajyad",
    prices: { Quad: 32500000, Triple: 36000000, Double: 42000000 },
    badge: { text: "Populer", color: "gold" },
  },
  {
    id: "p2",
    name: "Paket Premium Ramadan Plus",
    duration: "15 Hari",
    month: "Februari 2026",
    airline: "Garuda Indonesia",
    hotel: "Makkah Hilton",
    prices: { Quad: 45000000, Triple: 51000000, Double: 58000000 },
    badge: { text: "Sisa 4 Seat", color: "red" },
  },
  {
    id: "p3",
    name: "Paket Ekonomi Syawal",
    duration: "9 Hari",
    month: "Mei 2026",
    airline: "Saudia Airlines",
    hotel: "Hotel Rawda",
    prices: { Quad: 25000000, Triple: 28000000, Double: 33000000 },
  },
  {
    id: "p4",
    name: "Paket Reguler Syawal",
    duration: "12 Hari",
    month: "Mei 2026",
    airline: "Garuda Indonesia",
    hotel: "Zamzam Tower",
    prices: { Quad: 35000000, Triple: 39000000, Double: 45000000 },
    badge: { text: "Populer", color: "gold" },
  },
  {
    id: "p5",
    name: "Paket VIP Dzulhijjah",
    duration: "12 Hari",
    month: "Juni 2026",
    airline: "Saudia Airlines",
    hotel: "Hilton Madinah",
    prices: { Quad: 55000000, Triple: 62000000, Double: 72000000 },
    badge: { text: "Sisa 2 Seat", color: "red" },
  },
  {
    id: "p6",
    name: "Paket Plus Madinah Extended",
    duration: "15 Hari",
    month: "Juli 2026",
    airline: "Garuda Indonesia",
    hotel: "Pullman ZamZam",
    prices: { Quad: 48000000, Triple: 54000000, Double: 62000000 },
  },
];

function PackageCard({ pkg }: { pkg: Package }) {
  const [room, setRoom] = useState<RoomType>('Quad');
  const formatPrice = (price: number) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(price);

  return (
    <motion.div
      variants={fadeUp}
      className="bg-dream-navy-light rounded-xl overflow-hidden border border-white/5
                 hover:border-dream-gold/30 hover:-translate-y-1
                 hover:shadow-[0_12px_32px_rgba(201,164,85,0.08)]
                 transition-all duration-300 flex flex-col h-full"
    >
      {/* Card header graphic */}
      <div className="h-28 relative bg-gradient-to-br from-dream-navy to-dream-navy-light flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              'linear-gradient(45deg,#C9A455 25%,transparent 25%,transparent 75%,#C9A455 75%),linear-gradient(45deg,#C9A455 25%,transparent 25%,transparent 75%,#C9A455 75%)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0,10px 10px',
          }}
        />
        <Moon className="text-dream-gold opacity-40 relative z-10" size={44} />

        {pkg.badge && (
          <div
            className={`absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-lg z-20 shadow-md
              ${pkg.badge.color === 'gold'
                ? 'bg-dream-gold text-dream-navy'
                : 'bg-red-500 text-white animate-pulse'}`}
          >
            {pkg.badge.text}
          </div>
        )}
      </div>

      <div className="p-5 flex-grow flex flex-col">
        <h3 className="font-serif text-lg text-white leading-snug mb-2">{pkg.name}</h3>

        <div className="flex gap-2 mb-5 flex-wrap">
          <span className="inline-flex items-center text-xs text-dream-cream/80 bg-white/5 px-2.5 py-1 rounded-lg">
            <Calendar className="w-3 h-3 mr-1.5 text-dream-gold" />
            {pkg.duration}
          </span>
          <span className="inline-flex items-center text-xs text-dream-cream/80 bg-white/5 px-2.5 py-1 rounded-lg">
            {pkg.month}
          </span>
        </div>

        <div className="space-y-2.5 mb-5 flex-grow">
          <div className="flex items-center text-sm text-dream-cream/75">
            <Plane className="w-3.5 h-3.5 mr-2.5 text-dream-gold flex-shrink-0" />
            {pkg.airline}
          </div>
          <div className="flex items-center text-sm text-dream-cream/75">
            <Building2 className="w-3.5 h-3.5 mr-2.5 text-dream-gold flex-shrink-0" />
            {pkg.hotel}
          </div>
        </div>

        {/* Room type toggle */}
        <div className="bg-dream-navy rounded-lg p-1 flex mb-4 gap-0.5">
          {(['Quad', 'Triple', 'Double'] as RoomType[]).map((type) => (
            <button
              key={type}
              onClick={() => setRoom(type)}
              className={`flex-1 text-xs py-1.5 rounded-md transition-all duration-200 font-medium ${
                room === type
                  ? 'bg-dream-gold text-dream-navy shadow-sm'
                  : 'text-dream-cream/55 hover:text-dream-cream/90'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="mb-5">
          <div className="text-xs text-dream-cream/55 mb-1">Harga per pax ({room})</div>
          <div className="text-2xl font-bold text-dream-gold tracking-tight">
            {formatPrice(pkg.prices[room])}
          </div>
        </div>

        <a
          href={createWALink(
            `Assalamualaikum, saya ingin konsultasi mengenai ${pkg.name} untuk bulan ${pkg.month}`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block text-center bg-dream-gold hover:bg-dream-gold-hover text-dream-navy font-semibold py-3 rounded-lg transition-all duration-300 mt-auto hover:-translate-y-0.5 hover:shadow-md text-sm"
        >
          Konsultasi Paket Ini
        </a>
      </div>
    </motion.div>
  );
}

export default function Packages() {
  const [filterMonth, setFilterMonth] = useState('Semua Bulan');
  const [filterBudget, setFilterBudget] = useState('Semua Budget');

  const months = ['Semua Bulan', ...Array.from(new Set(packages.map((p) => p.month)))];

  const filteredPackages = packages.filter((p) => {
    if (filterMonth !== 'Semua Bulan' && p.month !== filterMonth) return false;
    if (filterBudget === 'Di bawah 30 Juta') return p.prices.Quad < 30000000;
    if (filterBudget === '30 - 45 Juta') return p.prices.Quad >= 30000000 && p.prices.Quad <= 45000000;
    if (filterBudget === 'Di atas 45 Juta') return p.prices.Quad > 45000000;
    return true;
  });

  const selectClass =
    "bg-dream-navy-light border border-dream-gold/30 text-white rounded-lg px-4 py-2.5 text-sm " +
    "focus:outline-none focus:border-dream-gold focus:ring-1 focus:ring-dream-gold/30 " +
    "flex-1 md:w-40 appearance-none cursor-pointer transition-colors duration-200 hover:border-dream-gold/60";

  return (
    <section id="paket" className="py-12 md:py-20 bg-dream-navy relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header + filters */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-14 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-3">
              Paket Umroh <span className="text-dream-gold">Terdekat</span>
            </h2>
            <p className="text-dream-cream/65 max-w-xl font-light text-sm md:text-base">
              Pilih paket yang sesuai dengan rencana dan kenyamanan Anda. Harga jujur tanpa biaya tersembunyi.
            </p>
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            <select value={filterMonth} onChange={(e) => setFilterMonth(e.target.value)} className={selectClass}>
              {months.map((m) => <option key={m} value={m}>{m}</option>)}
            </select>
            <select value={filterBudget} onChange={(e) => setFilterBudget(e.target.value)} className={selectClass + " md:w-48"}>
              <option value="Semua Budget">Semua Budget</option>
              <option value="Di bawah 30 Juta">Di bawah 30 Juta</option>
              <option value="30 - 45 Juta">30 - 45 Juta</option>
              <option value="Di atas 45 Juta">Di atas 45 Juta</option>
            </select>
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filteredPackages.length > 0 ? (
            filteredPackages.map((pkg) => <PackageCard key={pkg.id} pkg={pkg} />)
          ) : (
            <div className="col-span-full py-16 text-center text-dream-cream/50">
              Tidak ada paket yang sesuai dengan filter yang dipilih.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
