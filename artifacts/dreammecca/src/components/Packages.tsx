import React, { useMemo, useState } from 'react';
import { ArrowRight, CalendarDays, Clock3, Hotel, Plane, TrainFront } from 'lucide-react';
import { motion } from 'framer-motion';
import { createWALink } from '@/lib/whatsapp';
import { fadeUp, staggerContainer } from '@/lib/animations';

type Month = 'Oktober' | 'November' | 'Desember';

type Package = {
  id: string;
  month: Month;
  date: string;
  dateLabel: string;
  tier: 'Ekonomis' | 'Eksklusif';
  title: string;
  duration: string;
  airline: string;
  makkah: string;
  madinah: string;
  price: string;
  normalPrice?: string;
  featured?: boolean;
};

const packages: Package[] = [
  {
    id: '9-des-eks',
    month: 'Desember',
    date: '2026-12-09',
    dateLabel: 'Keberangkatan 9 Desember 2026',
    tier: 'Eksklusif',
    title: 'Umroh 12 Hari',
    duration: '12 Hari',
    airline: 'Qatar Airways',
    makkah: 'Pullman Zamzam ★5',
    madinah: 'Ansr Golden Tulip ★4 atau setaraf',
    price: '44,9',
    featured: false,
  },
  {
    id: '9-des-eko',
    month: 'Desember',
    date: '2026-12-09',
    dateLabel: 'Keberangkatan 9 Desember 2026',
    tier: 'Ekonomis',
    title: 'Umroh 12 Hari',
    duration: '12 Hari',
    airline: 'Qatar Airways',
    makkah: 'Royal Majestic ★4',
    madinah: 'Ansr Golden Tulip ★4 atau setaraf',
    price: '36,9',
    featured: true,
  },
  {
    id: '7-des-eko',
    month: 'Desember',
    date: '2026-12-07',
    dateLabel: 'Keberangkatan 7 Desember 2026',
    tier: 'Ekonomis',
    title: 'Umroh 9 Hari',
    duration: '9 Hari',
    airline: 'Garuda Indonesia',
    makkah: 'Royal Majestic ★4',
    madinah: 'Ansr Golden Tulip ★4 atau setaraf',
    price: '36,9',
  },
  {
    id: '7-des-eks',
    month: 'Desember',
    date: '2026-12-07',
    dateLabel: 'Keberangkatan 7 Desember 2026',
    tier: 'Eksklusif',
    title: 'Umroh 9 Hari',
    duration: '9 Hari',
    airline: 'Garuda Indonesia',
    makkah: 'Pullman Zamzam ★5',
    madinah: 'Ansr Golden Tulip ★4 atau setaraf',
    price: '42,9',
  },
  {
    id: '12-des-eko',
    month: 'Desember',
    date: '2026-12-12',
    dateLabel: 'Keberangkatan 12 Desember 2026',
    tier: 'Ekonomis',
    title: 'Umroh 9 Hari',
    duration: '9 Hari',
    airline: 'Qatar Airways',
    makkah: 'Royal Majestic ★4',
    madinah: 'Ansr Golden Tulip ★4 atau setaraf',
    price: '36,9',
  },
  {
    id: '12-des-eks',
    month: 'Desember',
    date: '2026-12-12',
    dateLabel: 'Keberangkatan 12 Desember 2026',
    tier: 'Eksklusif',
    title: 'Umroh 9 Hari',
    duration: '9 Hari',
    airline: 'Qatar Airways',
    makkah: 'Pullman Zamzam ★5',
    madinah: 'Ansr Golden Tulip ★4 atau setaraf',
    price: '39,9',
  },
  {
    id: '15-des-eko',
    month: 'Desember',
    date: '2026-12-15',
    dateLabel: 'Keberangkatan 15 Desember 2026',
    tier: 'Ekonomis',
    title: 'Umroh 9 Hari',
    duration: '9 Hari',
    airline: 'Qatar Airways',
    makkah: 'Royal Majestic ★4',
    madinah: 'Ansr Golden Tulip ★4 atau setaraf',
    price: '36,9',
  },
  {
    id: '15-des-eks',
    month: 'Desember',
    date: '2026-12-15',
    dateLabel: 'Keberangkatan 15 Desember 2026',
    tier: 'Eksklusif',
    title: 'Umroh 9 Hari',
    duration: '9 Hari',
    airline: 'Qatar Airways',
    makkah: 'Pullman Zamzam ★5',
    madinah: 'Ansr Golden Tulip ★4 atau setaraf',
    price: '41,9',
  },
  {
    id: '19-des-eko',
    month: 'Desember',
    date: '2026-12-19',
    dateLabel: 'Keberangkatan 19 Desember 2026',
    tier: 'Ekonomis',
    title: 'Umroh 9 Hari',
    duration: '9 Hari',
    airline: 'Qatar Airways',
    makkah: 'Royal Majestic ★4',
    madinah: 'Ansr Golden Tulip ★4 atau setaraf',
    price: '37,9',
  },
  {
    id: '19-des-eks',
    month: 'Desember',
    date: '2026-12-19',
    dateLabel: 'Keberangkatan 19 Desember 2026',
    tier: 'Eksklusif',
    title: 'Umroh 9 Hari',
    duration: '9 Hari',
    airline: 'Qatar Airways',
    makkah: 'Pullman Zamzam ★5',
    madinah: 'Ansr Golden Tulip ★4 atau setaraf',
    price: '45,9',
  },
];

const months: Month[] = ['Oktober', 'November', 'Desember'];
const featuredDate = '2026-12-09';
const packageVisuals: Record<string, { image: string; position: string }> = {
  '2026-12-07': { image: '/images/gallery-jamaah/jamaah-payung-dreammecca.jpg', position: 'center 48%' },
  '2026-12-09': { image: '/images/gallery-jamaah/jamaah-masjidil-haram.jpg', position: 'center 57%' },
  '2026-12-12': { image: '/images/gallery-jamaah/jamaah-madinah.jpg', position: 'center center' },
  '2026-12-15': { image: '/images/gallery-jamaah/jamaah-pendampingan.jpg', position: 'center center' },
  '2026-12-19': { image: '/images/gallery-jamaah/jamaah-keluarga.jpg', position: 'center center' },
};

function isUpcoming(date: string) {
  const departure = new Date(`${date}T00:00:00+07:00`);
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return departure >= now;
}

function PackageCard({ pkg }: { pkg: Package }) {
  const message = `Assalamu'alaikum, saya mau tanya program\n${pkg.title} ${pkg.tier} - ${pkg.dateLabel.replace('Keberangkatan ', '')} (Rp${pkg.price} juta).\n\nNama:\nKota:\nJumlah jamaah:`;
  const visual = packageVisuals[pkg.date];

  return (
    <article
      className="relative flex h-full flex-col overflow-hidden rounded-lg"
      style={{
        background: pkg.featured ? '#FFFCF5' : '#fff',
        border: pkg.featured ? '1px solid #FFD400' : '1px solid rgba(27,27,54,0.12)',
        boxShadow: pkg.featured ? '0 18px 44px rgba(9,15,59,0.12)' : 'none',
      }}
    >
      <figure className="relative aspect-[16/9] overflow-hidden" style={{ background: '#090F3B' }}>
        <img src={visual.image} alt="" className="h-full w-full object-cover" style={{ objectPosition: visual.position }} loading="lazy" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(9,15,59,0.04), rgba(9,15,59,0.42))' }} />
        <div className="absolute inset-x-[12px] top-[12px] flex items-start justify-between gap-[8px] md:inset-x-[16px] md:top-[16px]">
          <span className="rounded-md px-[8px] py-[4px] text-[9px] font-bold md:text-[11px]" style={pkg.tier === 'Eksklusif' ? { background: '#F6EEDC', color: '#FFD400' } : { background: '#fff', color: '#090F3B' }}>
            {pkg.tier}
          </span>
          {pkg.featured && <span className="rounded-md px-[8px] py-[4px] text-[9px] font-bold md:text-[11px]" style={{ background: '#090F3B', color: '#fff' }}>Paling Untung</span>}
        </div>
      </figure>

      <div className="flex flex-1 flex-col p-[14px] md:p-[22px]">
        <p className="flex items-center gap-[6px] text-[10px] leading-[1.35] md:gap-[8px] md:text-[13px]" style={{ color: '#5D5D76' }}>
          <CalendarDays size={13} color="#FFD400" />
          {pkg.dateLabel}
        </p>
        <h3 className="mt-[8px] text-[17px] leading-[1.2] md:mt-[10px] md:text-[24px] md:leading-[1.18]" style={{ color: '#090F3B', fontWeight: 700 }}>
          {pkg.title}
        </h3>
        <div className="mt-[14px] space-y-[7px] text-[10px] leading-[1.4] md:mt-[18px] md:space-y-[10px] md:text-[13px] md:leading-[1.45]" style={{ color: '#444761' }}>
          <div className="flex gap-[7px] md:gap-[10px]"><Clock3 size={14} className="mt-[1px] flex-none md:size-4" color="#FFD400" /><span>{pkg.duration}</span></div>
          <div className="flex gap-[7px] md:gap-[10px]"><Plane size={14} className="mt-[1px] flex-none md:size-4" color="#FFD400" /><span>{pkg.airline}</span></div>
          <div className="hidden gap-[7px] md:flex md:gap-[10px]"><Hotel size={16} className="mt-[1px] flex-none" color="#FFD400" /><span>{pkg.makkah}</span></div>
          <div className="hidden gap-[7px] md:flex md:gap-[10px]"><Hotel size={16} className="mt-[1px] flex-none" color="#FFD400" /><span>{pkg.madinah}</span></div>
          <div className="hidden gap-[7px] md:flex md:gap-[10px]"><TrainFront size={16} className="mt-[1px] flex-none" color="#FFD400" /><span>Kereta Cepat Haramain</span></div>
        </div>
        <div className="mt-auto flex items-end justify-between gap-[10px] pt-[18px] md:pt-[24px]">
          <div>
            {pkg.normalPrice && <span className="text-[13px] line-through" style={{ color: '#8B8EA0' }}>Rp{pkg.normalPrice} juta</span>}
            <p className="leading-none" style={{ color: '#090F3B', fontWeight: 700 }}><span className="text-[10px] md:text-[13px]">Rp</span> <span className="text-[25px] md:text-[34px]">{pkg.price}</span> <span className="text-[10px] md:text-[14px]">JT</span></p>
          </div>
          <a
            href={createWALink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-10 flex-none items-center justify-center rounded-[6px] no-underline transition-opacity hover:opacity-80"
            style={{ background: '#090F3B', color: '#fff' }}
            aria-label={`Tanya ${pkg.title} ${pkg.tier}`}
          >
            <ArrowRight size={17} strokeWidth={1.9} />
          </a>
        </div>
      </div>
    </article>
  );
}

function WaitlistCard() {
  const message = "Assalamu'alaikum, saya ingin masuk daftar tunggu program Umroh November 2026.\n\nNama:\nKota:\nJumlah jamaah:";
  return (
    <div className="mt-[40px] max-w-[620px] rounded-xl p-[28px] md:p-[36px]" style={{ background: '#F7F6F2', border: '1px solid #E5DDCC' }}>
      <span className="text-[13px] font-bold tracking-[0.10em] uppercase" style={{ color: '#FFD400' }}>November 2026</span>
      <h3 className="mt-[10px] text-[27px] font-bold leading-[1.2]" style={{ color: '#090F3B' }}>Jadwal November 2026 segera diumumkan.</h3>
      <p className="mt-[10px] text-[15px] leading-[1.65]" style={{ color: '#5D5D76' }}>Hubungi admin untuk masuk daftar tunggu dan mendapat informasi jadwal lebih dahulu.</p>
      <a href={createWALink(message)} target="_blank" rel="noopener noreferrer" className="mt-[20px] inline-flex min-h-11 items-center justify-center rounded-[6px] px-[22px] py-[12px] text-[14px] font-bold no-underline" style={{ background: '#090F3B', color: '#fff' }}>
        Konsultasi Gratis
      </a>
    </div>
  );
}

export default function Packages() {
  const [activeMonth, setActiveMonth] = useState<Month>('Desember');
  const visiblePackages = useMemo(
    () => packages
      .filter((pkg) => pkg.month === activeMonth && isUpcoming(pkg.date))
      .sort((a, b) => {
        const featuredDateOrder = Number(b.date === featuredDate) - Number(a.date === featuredDate);
        if (featuredDateOrder !== 0) return featuredDateOrder;

        const dateOrder = a.date.localeCompare(b.date);
        if (dateOrder !== 0) return dateOrder;

        return a.tier === 'Ekonomis' ? -1 : 1;
      }),
    [activeMonth],
  );

  return (
    <section id="paket" className="px-[7vw] py-[72px] md:py-[132px]" style={{ background: '#F7F6F2' }}>
      <div className="mx-auto max-w-[1180px]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
          <span className="text-[12px] font-bold tracking-[0.14em] uppercase" style={{ color: '#FFD400' }}>Jadwal Umroh</span>
          <h2 className="mt-[12px] max-w-[700px] font-bold leading-[1.12]" style={{ fontSize: 'clamp(34px,4vw,54px)', color: '#090F3B', textWrap: 'balance' }}>
            Pilihan Jadwal Umroh Terdekat
          </h2>
          <p className="mt-[16px] max-w-[620px] text-[16px] leading-[1.65] md:text-[17px]" style={{ color: '#5D5D76' }}>
            Lihat program Oktober sampai Desember 2026 dan pilih bulan keberangkatan yang sesuai rencana Anda.
          </p>
        </motion.div>

        <div className="mt-[34px] inline-flex rounded-lg p-[4px]" style={{ background: '#F2F2F4' }} role="tablist" aria-label="Pilih bulan keberangkatan">
          {months.map((month) => (
            <button
              key={month}
              type="button"
              role="tab"
              aria-selected={activeMonth === month}
              onClick={() => setActiveMonth(month)}
              className="min-h-10 rounded-md px-[15px] text-[13px] font-semibold transition-colors md:px-[20px] md:text-[14px]"
              style={activeMonth === month ? { background: '#090F3B', color: '#fff' } : { background: 'transparent', color: '#5D5D76' }}
            >
              {month}
            </button>
          ))}
        </div>

        {activeMonth === 'November' && <WaitlistCard />}

        {activeMonth === 'Oktober' && (
          <div className="mt-[40px] max-w-[620px] rounded-xl p-[28px] md:p-[36px]" style={{ background: '#F7F6F2', border: '1px solid #E5DDCC' }}>
            <h3 className="text-[24px] font-bold" style={{ color: '#090F3B' }}>Jadwal Oktober sedang diverifikasi.</h3>
            <p className="mt-[10px] text-[15px] leading-[1.65]" style={{ color: '#5D5D76' }}>Detail hotel sedang dikonfirmasi agar informasi program yang tampil tetap lengkap dan akurat.</p>
          </div>
        )}

        {activeMonth === 'Desember' && visiblePackages.length > 0 && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          className="mt-[32px] grid grid-cols-2 gap-[10px] md:mt-[42px] md:grid-cols-2 md:gap-[16px]"
          >
            {visiblePackages.map((pkg) => <motion.div key={pkg.id} variants={fadeUp}><PackageCard pkg={pkg} /></motion.div>)}
          </motion.div>
        )}

        {activeMonth === 'Desember' && visiblePackages.length === 0 && (
          <p className="py-[42px] text-[16px]" style={{ color: '#5D5D76' }}>Tidak ada jadwal Desember yang masih tersedia.</p>
        )}
      </div>
    </section>
  );
}
