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
  const [day, month, year] = pkg.dateLabel.split(' ');

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg transition-transform duration-300 hover:-translate-y-1" style={{ background: '#fff', border: pkg.featured ? '1px solid #F2E9E4' : '1px solid rgba(9,15,59,0.12)', boxShadow: pkg.featured ? '0 18px 42px rgba(9,15,59,0.12)' : '0 3px 12px rgba(9,15,59,0.04)' }}>
      <figure className="relative aspect-[16/8] overflow-hidden" style={{ background: '#090F3B' }}>
        <img src={visual.image} alt="Dokumentasi jamaah Dreammecca" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" style={{ objectPosition: visual.position }} loading="lazy" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(9,15,59,0.08), rgba(9,15,59,0.62))' }} />
        <div className="absolute inset-x-[16px] top-[16px] flex items-start justify-between gap-2">
          <span className="rounded-[6px] px-[9px] py-[5px] text-[11px] font-bold" style={{ background: '#090F3B', color: '#F2E9E4' }}>{pkg.tier}</span>
          {pkg.featured && <span className="rounded-[6px] px-[9px] py-[5px] text-[11px] font-bold" style={{ background: '#fff', color: '#090F3B' }}>Paling Untung</span>}
        </div>
        <p className="absolute bottom-[14px] left-[16px] text-[12px]" style={{ color: 'rgba(255,255,255,0.84)' }}>Program Umroh Dreammecca</p>
      </figure>

      <div className="relative flex flex-1 flex-col p-[20px] pt-0">
        <div className="-mt-[26px] grid grid-cols-[64px_1fr] items-center gap-[12px] rounded-[6px] p-[10px] shadow-sm" style={{ background: '#fff', border: '1px solid rgba(9,15,59,0.10)' }}>
          <div className="flex h-[62px] flex-col items-center justify-center rounded-[6px]" style={{ background: '#090F3B', color: '#fff' }}>
            <span className="text-[26px] leading-none" style={{ color: '#F2E9E4', fontWeight: 700 }}>{day}</span>
            <span className="mt-[3px] text-[10px] uppercase tracking-[0.08em]">{month.slice(0, 3)}</span>
          </div>
          <div>
            <p className="flex items-center gap-[6px] text-[11px] uppercase tracking-[0.08em]" style={{ color: '#5D5D76' }}><CalendarDays size={14} color="#F2E9E4" />Keberangkatan</p>
            <p className="mt-[3px] text-[14px]" style={{ color: '#090F3B', fontWeight: 700 }}>{month} {year}</p>
          </div>
        </div>

        <div className="mt-[18px]">
          <h2 className="text-[25px] leading-[1.15]" style={{ color: '#090F3B', fontWeight: 700 }}>{pkg.title}</h2>
          <div className="mt-[12px] grid grid-cols-2 gap-[8px] text-[12px]">
            <p className="flex items-center gap-[7px] rounded-[6px] px-[10px] py-[9px]" style={{ background: '#F7F6F2', color: '#4B4F68' }}><Clock3 size={15} color="#F2E9E4" />{pkg.duration}</p>
            <p className="flex items-center gap-[7px] rounded-[6px] px-[10px] py-[9px]" style={{ background: '#F7F6F2', color: '#4B4F68' }}><Plane size={15} color="#F2E9E4" /><span className="truncate">{pkg.airline}</span></p>
          </div>
        </div>

        <div className="mt-[16px] space-y-[10px] border-t pt-[16px] text-[13px] leading-[1.42]" style={{ borderColor: 'rgba(9,15,59,0.10)', color: '#4B4F68' }}>
          <p className="grid grid-cols-[18px_66px_1fr] gap-[8px]"><Hotel size={16} className="mt-[1px]" color="#F2E9E4" /><span style={{ color: '#5D5D76' }}>Makkah</span><span style={{ color: '#090F3B', fontWeight: 600 }}>{pkg.makkah}</span></p>
          <p className="grid grid-cols-[18px_66px_1fr] gap-[8px]"><Hotel size={16} className="mt-[1px]" color="#F2E9E4" /><span style={{ color: '#5D5D76' }}>Madinah</span><span style={{ color: '#090F3B', fontWeight: 600 }}>{pkg.madinah}</span></p>
          <p className="flex gap-[9px]"><TrainFront size={16} className="mt-[1px] flex-none" color="#F2E9E4" />Kereta Cepat Haramain termasuk</p>
        </div>

        <div className="mt-auto flex items-end justify-between gap-3 pt-[20px]">
          <div><p className="text-[11px]" style={{ color: '#5D5D76' }}>Harga mulai</p><p className="mt-[3px] leading-none" style={{ color: '#090F3B', fontWeight: 700 }}><span className="text-[12px]">Rp</span> <span className="text-[30px]">{pkg.price}</span> <span className="text-[13px]">JT</span></p></div>
          <a href={createWALink(packageWhatsAppMessage(pkg))} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-[8px] rounded-[6px] px-[16px] py-[11px] text-[13px] font-bold no-underline" style={{ background: '#090F3B', color: '#fff' }}>Tanya <ArrowRight size={16} /></a>
        </div>
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
