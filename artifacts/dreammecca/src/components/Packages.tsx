import React, { useMemo, useState } from 'react';
import { CalendarDays, Check, Clock3, Plane, TrainFront } from 'lucide-react';
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

function isUpcoming(date: string) {
  const departure = new Date(`${date}T00:00:00+07:00`);
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return departure >= now;
}

function PackageCard({ pkg }: { pkg: Package }) {
  const message = `Assalamu'alaikum, saya mau tanya program\n${pkg.title} ${pkg.tier} - ${pkg.dateLabel.replace('Keberangkatan ', '')} (Rp${pkg.price} juta).\n\nNama:\nKota:\nJumlah jamaah:`;

  return (
    <article
      className="relative flex h-full flex-col rounded-lg p-[16px] md:p-[26px]"
      style={{
        background: pkg.featured ? '#FFFCF5' : '#fff',
        border: pkg.featured ? '1px solid #CFA568' : '1px solid rgba(27,27,54,0.12)',
        boxShadow: pkg.featured ? '0 18px 44px rgba(9,15,59,0.12)' : 'none',
      }}
    >
      {pkg.featured && (
        <span className="absolute right-[12px] top-[12px] rounded-md px-[7px] py-[4px] text-[9px] font-bold md:right-[18px] md:top-[18px] md:px-[9px] md:py-[5px] md:text-[11px]" style={{ background: '#090F3B', color: '#fff' }}>
          Paling Untung
        </span>
      )}
      <div className="flex items-center gap-[9px]">
        <span
          className="rounded-md px-[7px] py-[4px] text-[9px] font-bold md:px-[9px] md:py-[5px] md:text-[11px]"
          style={pkg.tier === 'Eksklusif' ? { background: '#F6EEDC', color: '#8C661A' } : { background: '#F1F2F5', color: '#575A67' }}
        >
          {pkg.tier}
        </span>
      </div>
      <p className="mt-[14px] flex items-center gap-[6px] text-[10px] font-semibold leading-[1.35] md:mt-[18px] md:gap-[8px] md:text-[13px]" style={{ color: '#5D5D76' }}>
        <CalendarDays size={13} color="#CFA568" />
        {pkg.dateLabel}
      </p>
      <h3 className="mt-[9px] pr-[62px] text-[18px] font-bold leading-[1.2] md:mt-[10px] md:pr-[90px] md:text-[24px] md:leading-[1.18]" style={{ color: '#090F3B' }}>
        {pkg.title}
      </h3>
      <div className="mt-[16px] space-y-[8px] text-[11px] leading-[1.4] md:mt-[22px] md:space-y-[12px] md:text-[13px] md:leading-[1.45]" style={{ color: '#444761' }}>
        <div className="flex gap-[7px] md:gap-[10px]"><Clock3 size={14} className="mt-[1px] flex-none md:size-4" color="#CFA568" /><span><strong style={{ color: '#090F3B' }}>Durasi:</strong> {pkg.duration}</span></div>
        <div className="flex gap-[7px] md:gap-[10px]"><Plane size={14} className="mt-[1px] flex-none md:size-4" color="#CFA568" /><span><strong style={{ color: '#090F3B' }}>Maskapai:</strong> {pkg.airline}</span></div>
        <div className="hidden gap-[7px] md:flex md:gap-[10px]"><Check size={16} className="mt-[1px] flex-none" color="#CFA568" /><span><strong style={{ color: '#090F3B' }}>Makkah:</strong> {pkg.makkah}</span></div>
        <div className="hidden gap-[7px] md:flex md:gap-[10px]"><Check size={16} className="mt-[1px] flex-none" color="#CFA568" /><span><strong style={{ color: '#090F3B' }}>Madinah:</strong> {pkg.madinah}</span></div>
        <div className="hidden gap-[7px] md:flex md:gap-[10px]"><TrainFront size={16} className="mt-[1px] flex-none" color="#CFA568" /><span>Haramain Express 2x sudah termasuk.</span></div>
      </div>
      <div className="mt-auto pt-[20px] md:pt-[28px]">
        {pkg.normalPrice && <span className="text-[13px] line-through" style={{ color: '#8B8EA0' }}>Rp{pkg.normalPrice} juta</span>}
        <p className="leading-none" style={{ color: '#090F3B' }}><span className="text-[10px] font-semibold md:text-[13px]">Rp</span> <span className="text-[27px] font-extrabold md:text-[34px]">{pkg.price}</span> <span className="text-[11px] font-bold md:text-[14px]">JT</span></p>
        <a
          href={createWALink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-[14px] inline-flex min-h-11 w-full items-center justify-center rounded-lg px-[10px] py-[10px] text-[11px] font-bold no-underline transition-opacity hover:opacity-90 md:mt-[18px] md:px-[18px] md:py-[12px] md:text-[14px]"
          style={{ background: '#090F3B', color: '#fff' }}
        >
          Konsultasi Gratis
        </a>
      </div>
    </article>
  );
}

function WaitlistCard() {
  const message = "Assalamu'alaikum, saya ingin masuk daftar tunggu program Umroh November 2026.\n\nNama:\nKota:\nJumlah jamaah:";
  return (
    <div className="mt-[40px] max-w-[620px] rounded-xl p-[28px] md:p-[36px]" style={{ background: '#F7F6F2', border: '1px solid #E5DDCC' }}>
      <span className="text-[13px] font-bold tracking-[0.10em] uppercase" style={{ color: '#8C661A' }}>November 2026</span>
      <h3 className="mt-[10px] text-[27px] font-bold leading-[1.2]" style={{ color: '#090F3B' }}>Jadwal November 2026 segera diumumkan.</h3>
      <p className="mt-[10px] text-[15px] leading-[1.65]" style={{ color: '#5D5D76' }}>Hubungi admin untuk masuk daftar tunggu dan mendapat informasi jadwal lebih dahulu.</p>
      <a href={createWALink(message)} target="_blank" rel="noopener noreferrer" className="mt-[20px] inline-flex min-h-11 items-center justify-center rounded-lg px-[22px] py-[12px] text-[14px] font-bold no-underline" style={{ background: '#090F3B', color: '#fff' }}>
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
      .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || a.date.localeCompare(b.date)),
    [activeMonth],
  );

  return (
    <section id="paket" className="px-[7vw] py-[72px] md:py-[132px]" style={{ background: '#F7F6F2' }}>
      <div className="mx-auto max-w-[1180px]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
          <span className="text-[12px] font-bold tracking-[0.14em] uppercase" style={{ color: '#8C661A' }}>Jadwal Umroh</span>
          <h2 className="mt-[12px] max-w-[700px] font-bold leading-[1.12]" style={{ fontSize: 'clamp(34px,4vw,54px)', color: '#090F3B', textWrap: 'balance' }}>
            Pilihan Jadwal Umroh Terdekat
          </h2>
          <p className="mt-[16px] max-w-[620px] text-[16px] leading-[1.65] md:text-[17px]" style={{ color: '#5D5D76' }}>
            Tanggal sudah pasti, seat sudah diblok. Oktober sampai Desember 2026.
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
          className="mt-[32px] grid grid-cols-2 gap-[10px] md:mt-[42px] md:grid-cols-2 md:gap-[16px] xl:grid-cols-3"
          >
            {visiblePackages.map((pkg) => <motion.div key={pkg.id} variants={fadeUp} className={pkg.featured ? 'xl:col-span-2' : ''}><PackageCard pkg={pkg} /></motion.div>)}
          </motion.div>
        )}

        {activeMonth === 'Desember' && visiblePackages.length === 0 && (
          <p className="py-[42px] text-[16px]" style={{ color: '#5D5D76' }}>Tidak ada jadwal Desember yang masih tersedia.</p>
        )}
      </div>
    </section>
  );
}
