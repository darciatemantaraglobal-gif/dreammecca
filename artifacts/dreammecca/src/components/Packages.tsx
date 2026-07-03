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
    badge: { text: "Populer", color: "gold" }
  },
  {
    id: "p2",
    name: "Paket Premium Ramadan Plus",
    duration: "15 Hari",
    month: "Februari 2026",
    airline: "Garuda Indonesia",
    hotel: "Makkah Hilton",
    prices: { Quad: 45000000, Triple: 51000000, Double: 58000000 },
    badge: { text: "Sisa 4 Seat", color: "red" }
  },
  {
    id: "p3",
    name: "Paket Ekonomi Syawal",
    duration: "9 Hari",
    month: "Mei 2026",
    airline: "Saudia Airlines",
    hotel: "Hotel Rawda",
    prices: { Quad: 25000000, Triple: 28000000, Double: 33000000 }
  },
  {
    id: "p4",
    name: "Paket Reguler Syawal",
    duration: "12 Hari",
    month: "Mei 2026",
    airline: "Garuda Indonesia",
    hotel: "Zamzam Tower",
    prices: { Quad: 35000000, Triple: 39000000, Double: 45000000 },
    badge: { text: "Populer", color: "gold" }
  },
  {
    id: "p5",
    name: "Paket VIP Dzulhijjah",
    duration: "12 Hari",
    month: "Juni 2026",
    airline: "Saudia Airlines",
    hotel: "Hilton Madinah",
    prices: { Quad: 55000000, Triple: 62000000, Double: 72000000 },
    badge: { text: "Sisa 2 Seat", color: "red" }
  },
  {
    id: "p6",
    name: "Paket Plus Madinah Extended",
    duration: "15 Hari",
    month: "Juli 2026",
    airline: "Garuda Indonesia",
    hotel: "Pullman ZamZam",
    prices: { Quad: 48000000, Triple: 54000000, Double: 62000000 }
  }
];

function PackageCard({ pkg }: { pkg: Package }) {
  const [room, setRoom] = useState<RoomType>('Quad');
  const formatPrice = (price: number) => 
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(price);

  return (
    <motion.div 
      variants={fadeUp}
      className="bg-dream-navy-light rounded-2xl overflow-hidden border border-white/5 flex flex-col h-full"
    >
      {/* Card Header Image / Gradient */}
      <div className="h-32 relative bg-gradient-to-br from-dream-navy to-dream-navy-light flex items-center justify-center overflow-hidden">
        {/* Islamic pattern overlay */}
        <div className="absolute inset-0 opacity-20" 
             style={{ 
               backgroundImage: 'linear-gradient(45deg, #C9A455 25%, transparent 25%, transparent 75%, #C9A455 75%, #C9A455), linear-gradient(45deg, #C9A455 25%, transparent 25%, transparent 75%, #C9A455 75%, #C9A455)',
               backgroundSize: '20px 20px',
               backgroundPosition: '0 0, 10px 10px'
             }} 
        />
        <Moon className="text-dream-gold opacity-50 relative z-10" size={48} />
        
        {pkg.badge && (
          <div className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full z-20 shadow-md
            ${pkg.badge.color === 'gold' ? 'bg-dream-gold text-dream-navy' : 'bg-red-500 text-white animate-pulse'}`}>
            {pkg.badge.text}
          </div>
        )}
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-xl text-white leading-tight">{pkg.name}</h3>
        </div>
        
        <div className="flex gap-3 mb-6">
          <span className="inline-flex items-center text-xs text-dream-cream/80 bg-white/5 px-2 py-1 rounded">
            <Calendar className="w-3 h-3 mr-1 text-dream-gold" />
            {pkg.duration}
          </span>
          <span className="inline-flex items-center text-xs text-dream-cream/80 bg-white/5 px-2 py-1 rounded">
            {pkg.month}
          </span>
        </div>

        <div className="space-y-3 mb-6 flex-grow">
          <div className="flex items-center text-sm text-dream-cream/70">
            <Plane className="w-4 h-4 mr-3 text-dream-gold" />
            {pkg.airline}
          </div>
          <div className="flex items-center text-sm text-dream-cream/70">
            <Building2 className="w-4 h-4 mr-3 text-dream-gold" />
            {pkg.hotel}
          </div>
        </div>

        {/* Room Toggle */}
        <div className="bg-dream-navy rounded-lg p-1 flex mb-4">
          {(['Quad', 'Triple', 'Double'] as RoomType[]).map((type) => (
            <button
              key={type}
              onClick={() => setRoom(type)}
              className={`flex-1 text-xs py-1.5 rounded-md transition-colors ${
                room === type 
                  ? 'bg-dream-gold text-dream-navy font-semibold' 
                  : 'text-dream-cream/60 hover:text-white'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="mb-6">
          <div className="text-xs text-dream-cream/60 mb-1">Harga per pax ({room})</div>
          <div className="text-2xl font-bold text-dream-gold">
            {formatPrice(pkg.prices[room])}
          </div>
        </div>

        <a
          href={createWALink(`Assalamualaikum, saya ingin konsultasi mengenai ${pkg.name} untuk bulan ${pkg.month}`)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block text-center bg-dream-gold hover:bg-dream-gold-hover text-dream-navy font-semibold py-3 rounded-lg transition-colors mt-auto"
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

  const months = ['Semua Bulan', ...Array.from(new Set(packages.map(p => p.month)))];
  
  const filteredPackages = packages.filter(p => {
    if (filterMonth !== 'Semua Bulan' && p.month !== filterMonth) return false;
    
    if (filterBudget === 'Di bawah 30 Juta') return p.prices.Quad < 30000000;
    if (filterBudget === '30 - 45 Juta') return p.prices.Quad >= 30000000 && p.prices.Quad <= 45000000;
    if (filterBudget === 'Di atas 45 Juta') return p.prices.Quad > 45000000;
    
    return true;
  });

  return (
    <section id="paket" className="py-24 bg-dream-navy relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              Paket Umroh <span className="text-dream-gold">Terdekat</span>
            </h2>
            <p className="text-dream-cream/70 max-w-xl font-light">
              Pilih paket perjalanan yang sesuai dengan rencana dan kenyamanan Anda. Harga jujur tanpa biaya tersembunyi.
            </p>
          </div>
          
          <div className="flex gap-4 w-full md:w-auto">
            <select 
              value={filterMonth}
              onChange={(e) => setFilterMonth(e.target.value)}
              className="bg-dream-navy-light border border-dream-gold/30 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-dream-gold flex-1 md:w-40 appearance-none"
            >
              {months.map(m => <option key={m} value={m}>{m}</option>)}
            </select>
            
            <select 
              value={filterBudget}
              onChange={(e) => setFilterBudget(e.target.value)}
              className="bg-dream-navy-light border border-dream-gold/30 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-dream-gold flex-1 md:w-48 appearance-none"
            >
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
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredPackages.length > 0 ? (
            filteredPackages.map(pkg => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-dream-cream/60">
              Tidak ada paket yang sesuai dengan filter yang dipilih.
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}
