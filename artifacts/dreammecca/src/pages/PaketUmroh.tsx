import React, { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, Hotel, Plane, Search, TrainFront } from 'lucide-react';
import { Link } from 'wouter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import { createWALink } from '@/lib/whatsapp';
import { packageVisual, packageWhatsAppMessage, publicPackages, type PackageTier, type PublicPackage } from '@/lib/publicPackages';

const tiers: Array<'Semua' | PackageTier> = ['Semua', 'Ekonomis', 'Eksklusif'];
const dates = [...new Set(publicPackages.map((pkg) => pkg.dateLabel))];

function CatalogCard({ pkg }: { pkg: PublicPackage }) {
  const visual = packageVisual(pkg.date);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg" style={{ background: '#fff', border: pkg.featured ? '1px solid #F2E9E4' : '1px solid rgba(9,15,59,0.12)', boxShadow: pkg.featured ? '0 16px 36px rgba(9,15,59,0.10)' : '0 2px 8px rgba(9,15,59,0.03)' }}>
      <figure className="relative aspect-[16/10] overflow-hidden" style={{ background: '#090F3B' }}>
        <img src={visual.image} alt="Dokumentasi jamaah Dreammecca" className="h-full w-full object-cover" style={{ objectPosition: visual.position }} loading="lazy" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(9,15,59,0.02), rgba(9,15,59,0.56))' }} />
        <div className="absolute inset-x-[16px] top-[16px] flex items-start justify-between gap-2">
          <span className="rounded-[6px] px-[9px] py-[5px] text-[11px] font-bold" style={{ background: '#090F3B', color: '#F2E9E4' }}>{pkg.tier}</span>
          {pkg.featured && <span className="rounded-[6px] px-[9px] py-[5px] text-[11px] font-bold" style={{ background: '#fff', color: '#090F3B' }}>Paling Untung</span>}
        </div>
        <p className="absolute bottom-[14px] left-[16px] flex items-center gap-[7px] text-[12px]" style={{ color: '#fff' }}><CalendarDays size={15} />Keberangkatan {pkg.dateLabel}</p>
      </figure>

      <div className="flex flex-1 flex-col p-[20px]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[12px]" style={{ color: '#5D5D76' }}>{pkg.duration} · {pkg.tier}</p>
            <h2 className="mt-[6px] text-[24px] leading-[1.16]" style={{ color: '#090F3B', fontWeight: 700 }}>{pkg.title}</h2>
          </div>
          <p className="text-right leading-none" style={{ color: '#090F3B', fontWeight: 700 }}><span className="text-[11px]">Rp</span> <span className="text-[28px]">{pkg.price}</span> <span className="text-[12px]">JT</span></p>
        </div>

        <div className="mt-[18px] space-y-[10px] border-t pt-[16px] text-[13px] leading-[1.45]" style={{ borderColor: 'rgba(9,15,59,0.10)', color: '#4B4F68' }}>
          <p className="flex gap-[9px]"><Plane size={16} className="mt-[1px] flex-none" color="#F2E9E4" />{pkg.airline}</p>
          <p className="flex gap-[9px]"><Hotel size={16} className="mt-[1px] flex-none" color="#F2E9E4" /><span><strong style={{ fontWeight: 600 }}>Makkah:</strong> {pkg.makkah}</span></p>
          <p className="flex gap-[9px]"><Hotel size={16} className="mt-[1px] flex-none" color="#F2E9E4" /><span><strong style={{ fontWeight: 600 }}>Madinah:</strong> {pkg.madinah}</span></p>
          <p className="flex gap-[9px]"><TrainFront size={16} className="mt-[1px] flex-none" color="#F2E9E4" />Kereta Cepat Haramain</p>
        </div>

        <a href={createWALink(packageWhatsAppMessage(pkg))} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex min-h-11 items-center justify-center gap-[8px] rounded-[6px] px-[18px] py-[11px] text-[14px] font-bold no-underline" style={{ background: '#090F3B', color: '#fff' }}>Tanya Program <ArrowRight size={16} /></a>
      </div>
    </article>
  );
}

export default function PaketUmroh() {
  const [query, setQuery] = useState('');
  const [tier, setTier] = useState<'Semua' | PackageTier>('Semua');
  const [date, setDate] = useState('Semua');

  const filteredPackages = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return publicPackages.filter((pkg) => {
      const matchesQuery = !normalizedQuery || [pkg.title, pkg.airline, pkg.makkah, pkg.madinah, pkg.tier, pkg.dateLabel].join(' ').toLowerCase().includes(normalizedQuery);
      return matchesQuery && (tier === 'Semua' || pkg.tier === tier) && (date === 'Semua' || pkg.dateLabel === date);
    });
  }, [date, query, tier]);

  return (
    <div className="dreammecca-public min-h-screen bg-white pb-16 font-sans md:pb-0">
      <Navbar />

      <main>
        <section className="px-[7vw] pb-[54px] pt-[132px] md:pb-[72px] md:pt-[152px]" style={{ background: '#090F3B' }}>
          <div className="mx-auto max-w-[1180px]">
            <Link href="/" className="inline-flex items-center gap-[7px] text-[14px] no-underline" style={{ color: 'rgba(255,255,255,0.72)' }}><ArrowLeft size={16} />Kembali ke Beranda</Link>
            <div className="mt-[30px] grid gap-[24px] lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
              <div>
                <span className="inline-flex rounded-[6px] px-[9px] py-[5px] text-[11px] font-bold tracking-[0.12em] uppercase" style={{ background: 'rgba(242,233,228,0.14)', color: '#F2E9E4' }}>Katalog Digital</span>
                <h1 className="mt-[16px] max-w-[760px] font-bold leading-[1.08]" style={{ color: '#fff', fontSize: 'clamp(38px,5vw,64px)', textWrap: 'balance' }}>Koleksi Program Umroh Dreammecca</h1>
                <p className="mt-[16px] max-w-[680px] text-[16px] leading-[1.65]" style={{ color: 'rgba(255,255,255,0.76)' }}>Bandingkan jadwal, kelas program, hotel, maskapai, dan harga dari seluruh pilihan Desember 2026.</p>
              </div>
              <div className="grid grid-cols-2 gap-[10px] text-[13px]">
                <div className="rounded-[6px] p-[16px]" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff' }}><span className="block text-[28px]" style={{ color: '#F2E9E4', fontWeight: 700 }}>{publicPackages.length}</span>Program tersedia</div>
                <div className="rounded-[6px] p-[16px]" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff' }}><span className="block text-[28px]" style={{ color: '#F2E9E4', fontWeight: 700 }}>5</span>Tanggal berangkat</div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-[7vw] py-[48px] md:py-[64px]" style={{ background: '#F7F6F2' }}>
          <div className="mx-auto max-w-[1180px]">
            <div className="rounded-lg p-[16px] md:p-[22px]" style={{ background: '#fff', border: '1px solid rgba(9,15,59,0.10)' }}>
              <div className="grid gap-[18px] lg:grid-cols-[1fr_auto_auto] lg:items-end">
                <label className="block"><span className="mb-[8px] block text-[11px] font-bold tracking-[0.10em] uppercase" style={{ color: '#5D5D76' }}>Cari Program</span><span className="flex min-h-11 items-center gap-[10px] rounded-[6px] px-[13px]" style={{ background: '#F7F6F2', border: '1px solid rgba(9,15,59,0.10)' }}><Search size={17} color="#F2E9E4" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari paket, hotel, atau maskapai" className="min-w-0 flex-1 bg-transparent text-[14px] outline-none" style={{ color: '#090F3B' }} /></span></label>
                <div><span className="mb-[8px] block text-[11px] font-bold tracking-[0.10em] uppercase" style={{ color: '#5D5D76' }}>Kelas Program</span><div className="flex flex-wrap gap-[7px]">{tiers.map((item) => <button key={item} type="button" onClick={() => setTier(item)} className="min-h-10 rounded-[6px] px-[13px] text-[13px]" style={tier === item ? { background: '#090F3B', color: '#fff' } : { background: '#F7F6F2', color: '#090F3B', border: '1px solid rgba(9,15,59,0.10)' }}>{item}</button>)}</div></div>
                <label className="block"><span className="mb-[8px] block text-[11px] font-bold tracking-[0.10em] uppercase" style={{ color: '#5D5D76' }}>Keberangkatan</span><select value={date} onChange={(event) => setDate(event.target.value)} className="min-h-10 rounded-[6px] px-[12px] text-[13px] outline-none" style={{ background: '#F7F6F2', color: '#090F3B', border: '1px solid rgba(9,15,59,0.10)' }}><option>Semua</option>{dates.map((item) => <option key={item}>{item}</option>)}</select></label>
              </div>
            </div>

            <div className="mt-[34px] flex items-center justify-between gap-4"><h2 className="text-[28px]" style={{ color: '#090F3B', fontWeight: 700 }}>Koleksi Desember 2026</h2><p className="text-[14px]" style={{ color: '#5D5D76' }}>{filteredPackages.length} program ditemukan</p></div>
            {filteredPackages.length ? <div className="mt-[20px] grid gap-[16px] sm:grid-cols-2 xl:grid-cols-3">{filteredPackages.map((pkg) => <CatalogCard key={pkg.id} pkg={pkg} />)}</div> : <div className="mt-[20px] rounded-lg p-[36px] text-center" style={{ background: '#fff', color: '#5D5D76', border: '1px solid rgba(9,15,59,0.10)' }}>Tidak ada program yang sesuai dengan pencarian atau filter Anda.</div>}
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
