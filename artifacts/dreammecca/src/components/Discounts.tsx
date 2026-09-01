import React from 'react';
import { CalendarDays, UsersRound } from 'lucide-react';
import { createWALink } from '@/lib/whatsapp';

const promotionEndsAt = new Date('2026-10-22T23:59:59+07:00');

const offers = [
  {
    icon: CalendarDays,
    title: 'Early Bird',
    amount: 'Rp1 juta',
    detail: 'Daftar dan membayar DP sebelum 22 Oktober 2026.',
  },
  {
    icon: UsersRound,
    title: 'Keluarga',
    amount: 'Rp1 juta',
    detail: 'Per jamaah untuk empat orang atau lebih dalam satu keluarga.',
  },
];

export default function Discounts() {
  if (new Date() > promotionEndsAt) return null;

  const message = 'Assalamu\'alaikum, saya ingin konsultasi potongan harga program Umroh Dreammecca.\n\nNama:\nKota:\nJumlah jamaah:';

  return (
    <section id="diskon" className="px-[7vw] py-[72px] md:py-[112px]" style={{ background: '#090F3B' }}>
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-end gap-[32px] md:grid-cols-[0.8fr_1.2fr] md:gap-[72px]">
        <div>
          <span className="text-[12px] font-bold tracking-[0.14em] uppercase" style={{ color: '#FFD400' }}>Penawaran saat ini</span>
          <h2 className="mt-[12px] font-bold leading-[1.12]" style={{ fontSize: 'clamp(32px,4vw,52px)', color: '#fff', textWrap: 'balance' }}>
            Potongan Harga yang Berlaku
          </h2>
          <p className="mt-[16px] max-w-[460px] text-[16px] leading-[1.7]" style={{ color: '#B5BCDE' }}>
            Kedua potongan dapat digabung dengan maksimum Rp2 juta per jamaah.
          </p>
          <a href={createWALink(message)} target="_blank" rel="noopener noreferrer" className="mt-[24px] inline-flex min-h-11 items-center justify-center rounded-[6px] px-[20px] py-[12px] text-[14px] font-bold no-underline transition-opacity hover:opacity-90" style={{ background: '#FFD400', color: '#090F3B' }}>
            Konsultasi Promo
          </a>
        </div>

        <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2 md:gap-[14px]">
          {offers.map((offer) => (
            <article key={offer.title} className="rounded-lg p-[22px] md:p-[26px]" style={{ background: '#15205A', border: '1px solid rgba(226,188,108,0.28)' }}>
              <offer.icon size={22} color="#FFD400" strokeWidth={1.65} />
              <p className="mt-[28px] text-[13px] font-bold uppercase tracking-[0.12em]" style={{ color: '#FFD400' }}>{offer.title}</p>
              <p className="mt-[8px] text-[29px] font-extrabold leading-none" style={{ color: '#fff' }}>{offer.amount}</p>
              <p className="mt-[12px] text-[14px] leading-[1.6]" style={{ color: '#B5BCDE' }}>{offer.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
