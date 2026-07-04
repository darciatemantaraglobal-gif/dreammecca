import React, { useState, useMemo } from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'wouter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import { createWALink } from '@/lib/whatsapp';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import type { Package, Departure } from '@/lib/supabase';

function fmt(n: number) {
  return new Intl.NumberFormat('id-ID', { maximumFractionDigits: 1 }).format(n / 1000000);
}

function usePackages() {
  return useQuery({
    queryKey: ['packages'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('packages')
        .select('*, departures(*)')
        .eq('is_active', true)
        .order('sort_order');
      if (error) throw error;
      return data as Package[];
    },
  });
}

function DepartureCard({ pkg, dep }: { pkg: Package; dep: Departure }) {
  const waMsg = `Assalamualaikum, saya tertarik dengan ${pkg.title} (${pkg.tier}, ${pkg.duration}) keberangkatan ${dep.date_label}. Boleh minta info lebih lengkap?`;

  return (
    <div
      className="rounded-xl overflow-hidden flex flex-col h-full transition-all duration-200 hover:-translate-y-1"
      style={{ border: '1px solid rgba(27,27,54,0.10)', background: '#fff', boxShadow: '0 2px 8px rgba(27,27,54,0.04)' }}
    >
      <div className="w-full relative" style={{ aspectRatio: '4/5', background: '#F4F4F7' }}>
        <img
          src={pkg.poster_url || `/images/paket/poster-${pkg.slug}.jpg`}
          alt={`Poster ${pkg.title} ${pkg.tier} ${pkg.duration}`}
          className="w-full h-full object-cover"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <span
          className="absolute top-3 left-3 text-[11px] font-bold uppercase tracking-[0.04em] px-[10px] py-[5px] rounded-full text-white"
          style={{ background: pkg.tier === 'Luxury' ? '#1B1B36' : 'rgba(27,27,54,0.75)' }}
        >
          {pkg.tier}
        </span>
      </div>

      <div className="px-5 pt-4 pb-5 flex-1 flex flex-col">
        <div className="flex items-center gap-[6px] text-[13px] font-medium" style={{ color: '#6B6B85' }}>
          <Calendar size={14} />
          {dep.date_label}
        </div>

        <h3 className="text-[16px] font-bold mt-[6px] leading-[1.3]" style={{ color: '#1B1B36' }}>
          {pkg.title}
        </h3>

        <div className="flex gap-[6px] flex-wrap mt-[10px]">
          {pkg.tags.map(tag => (
            <span
              key={tag}
              className="text-[11px] font-semibold px-[9px] py-[4px] rounded-full"
              style={{ border: '1px solid rgba(27,27,54,0.14)', color: '#1B1B36' }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-[14px] flex flex-col gap-[6px]">
          <div className="flex justify-between text-[12.5px]">
            <span style={{ color: '#6B6B85' }}>Durasi</span>
            <span className="font-semibold" style={{ color: '#1B1B36' }}>{pkg.duration}</span>
          </div>
          <div className="flex justify-between text-[12.5px]">
            <span style={{ color: '#6B6B85' }}>Hotel Makkah</span>
            <span className="font-semibold text-right max-w-[180px]" style={{ color: '#1B1B36' }}>{pkg.hotel_mecca}</span>
          </div>
          <div className="flex justify-between text-[12.5px]">
            <span style={{ color: '#6B6B85' }}>Hotel Madinah</span>
            <span className="font-semibold text-right max-w-[180px]" style={{ color: '#1B1B36' }}>{pkg.hotel_madinah}</span>
          </div>
          <div className="flex justify-between text-[12.5px]">
            <span style={{ color: '#6B6B85' }}>Flight / Landing</span>
            <span className="font-semibold" style={{ color: '#1B1B36' }}>{pkg.flight_type} · {pkg.landing}</span>
          </div>
        </div>

        <div className="mt-auto pt-[16px] flex items-end justify-between gap-3">
          <div>
            <div className="text-[11px]" style={{ color: '#6B6B85' }}>Harga Mulai</div>
            <div className="text-[20px] font-extrabold" style={{ color: '#1B1B36' }}>Rp {fmt(pkg.price_from)} Jt</div>
          </div>
          <a
            href={createWALink(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-[20px] py-[11px] rounded-lg font-bold text-[13px] no-underline hover:opacity-[0.88] transition-opacity flex-none"
            style={{ background: '#1B1B36', color: '#fff' }}
          >
            Booking
          </a>
        </div>
      </div>
    </div>
  );
}

export default function PaketUmroh() {
  const [tierFilter, setTierFilter] = useState<'Semua' | 'Reguler' | 'Luxury'>('Semua');
  const [durFilter, setDurFilter] = useState<'Semua' | '9 Hari' | '12 Hari'>('Semua');
  const { data, isLoading, isError } = usePackages();
  const packageTypes = data ?? [];

  const cards = useMemo(() => {
    return packageTypes
      .filter(p => tierFilter === 'Semua' || p.tier === tierFilter)
      .filter(p => durFilter === 'Semua' || p.duration === durFilter)
      .flatMap(p => (p.departures ?? []).map(dep => ({ pkg: p, dep })));
  }, [packageTypes, tierFilter, durFilter]);

  return (
    <div style={{ background: '#fff' }} className="min-h-screen pb-16 md:pb-0">
      <Navbar />

      <section
        className="px-[7vw] pt-[140px] pb-[48px]"
        style={{
          backgroundImage: 'linear-gradient(180deg, rgba(27,27,54,0.72), rgba(27,27,54,0.80)), url(/images/patterns/geometric-navy.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundColor: '#1B1B36',
        }}
      >
        <div className="max-w-[1180px] mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-[6px] text-[13px] font-semibold no-underline mb-[24px]"
            style={{ color: 'rgba(255,255,255,0.60)' }}
          >
            ← Kembali ke Beranda
          </Link>
          <span className="text-[13px] font-bold tracking-[0.14em] uppercase block" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Paket Umroh
          </span>
          <h1
            className="font-bold leading-[1.15] mt-[10px]"
            style={{ fontSize: 'clamp(28px,4vw,44px)', color: '#fff' }}
          >
            Semua Jadwal &amp; Pilihan Paket
          </h1>
          <p
            className="text-[16px] leading-[1.6] mt-[14px] max-w-[600px]"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            Pilih tier dan durasi sesuai kebutuhan Anda. Semua harga sudah termasuk tiket, visa, hotel, transportasi, manasik, dan perlengkapan.
          </p>
        </div>
      </section>

      <section className="px-[7vw] py-[28px] bg-white sticky top-[72px] z-40" style={{ borderBottom: '1px solid rgba(27,27,54,0.08)', boxShadow: '0 2px 12px rgba(27,27,54,0.04)' }}>
        <div className="max-w-[1180px] mx-auto flex flex-wrap gap-[20px] items-center">
          <div className="flex items-center gap-[8px] flex-wrap">
            <span className="text-[12.5px] font-bold uppercase tracking-[0.08em]" style={{ color: '#6B6B85' }}>Tier</span>
            {(['Semua', 'Reguler', 'Luxury'] as const).map(t => (
              <button
                key={t}
                onClick={() => setTierFilter(t)}
                className="px-[16px] py-[8px] rounded-full text-[13px] font-semibold transition-colors"
                style={{
                  background: tierFilter === t ? '#1B1B36' : '#fff',
                  color: tierFilter === t ? '#fff' : '#1B1B36',
                  border: '1px solid rgba(27,27,54,0.16)',
                }}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-[8px] flex-wrap">
            <span className="text-[12.5px] font-bold uppercase tracking-[0.08em]" style={{ color: '#6B6B85' }}>Durasi</span>
            {(['Semua', '9 Hari', '12 Hari'] as const).map(d => (
              <button
                key={d}
                onClick={() => setDurFilter(d)}
                className="px-[16px] py-[8px] rounded-full text-[13px] font-semibold transition-colors"
                style={{
                  background: durFilter === d ? '#1B1B36' : '#fff',
                  color: durFilter === d ? '#fff' : '#1B1B36',
                  border: '1px solid rgba(27,27,54,0.16)',
                }}
              >
                {d}
              </button>
            ))}
          </div>
          <span className="ml-auto text-[13px]" style={{ color: '#6B6B85' }}>
            {isLoading ? 'Memuat...' : `${cards.length} jadwal tersedia`}
          </span>
        </div>
      </section>

      <section className="px-[7vw] py-[48px] bg-white">
        <div className="max-w-[1180px] mx-auto">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
              {[0, 1, 2, 3].map(i => (
                <div key={i} className="rounded-xl h-[420px] animate-pulse" style={{ background: '#F4F4F7' }} />
              ))}
            </div>
          ) : isError ? (
            <p className="text-center py-[60px]" style={{ color: '#6B6B85' }}>
              Gagal memuat paket. Silakan refresh halaman atau hubungi kami langsung.
            </p>
          ) : cards.length === 0 ? (
            <p className="text-center py-[60px]" style={{ color: '#6B6B85' }}>
              Tidak ada paket yang cocok dengan filter ini. Coba filter lain atau hubungi kami langsung.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] items-stretch">
              {cards.map(({ pkg, dep }, i) => (
                <DepartureCard key={`${pkg.slug}-${i}`} pkg={pkg} dep={dep} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
