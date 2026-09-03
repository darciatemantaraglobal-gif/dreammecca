import React from 'react';
import { CalendarDays, UsersRound } from 'lucide-react';
import { createWALink } from '@/lib/whatsapp';
import { useSiteContent } from '@/lib/siteContent';
import { useSiteSettings } from '@/lib/useSiteSettings';

const offerIcons = { CalendarDays, UsersRound };

export default function Discounts() {
  const { data: content } = useSiteContent();
  const { data: settings } = useSiteSettings();
  const promo = content.promo;
  if (new Date() > new Date(promo.endsAt)) return null;

  const message = 'Assalamu\'alaikum, saya ingin konsultasi potongan harga program Umroh Dreammecca.\n\nNama:\nKota:\nJumlah jamaah:';

  return (
    <section id="diskon" className="px-[7vw] py-[72px] md:py-[112px]" style={{ background: '#090F3B' }}>
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-end gap-[32px] md:grid-cols-[0.8fr_1.2fr] md:gap-[72px]">
        <div>
          <span className="text-[12px] font-bold tracking-[0.14em] uppercase" style={{ color: '#C9ADA7' }}>{promo.eyebrow}</span>
          <h2 className="mt-[12px] font-bold leading-[1.12]" style={{ fontSize: 'clamp(32px,4vw,52px)', color: '#fff', textWrap: 'balance' }}>
            {promo.title}
          </h2>
          <p className="mt-[16px] max-w-[460px] text-[16px] leading-[1.7]" style={{ color: '#B5BCDE' }}>
            {promo.body}
          </p>
          <a href={createWALink(message, settings?.whatsapp_number)} target="_blank" rel="noopener noreferrer" className="mt-[24px] inline-flex min-h-11 items-center justify-center rounded-[6px] px-[20px] py-[12px] text-[14px] font-bold no-underline transition-opacity hover:opacity-90" style={{ background: '#C9ADA7', color: '#090F3B' }}>
            Konsultasi Promo
          </a>
        </div>

        <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2 md:gap-[14px]">
          {promo.offers.map((offer) => {
            const Icon = offerIcons[offer.icon as keyof typeof offerIcons] ?? CalendarDays;
            return (
            <article key={offer.title} className="rounded-lg p-[22px] md:p-[26px]" style={{ background: '#15205A', border: '1px solid rgba(226,188,108,0.28)' }}>
              <Icon size={22} color="#C9ADA7" strokeWidth={1.65} />
              <p className="mt-[28px] text-[13px] font-bold uppercase tracking-[0.12em]" style={{ color: '#C9ADA7' }}>{offer.title}</p>
              <p className="mt-[8px] text-[29px] font-extrabold leading-none" style={{ color: '#fff' }}>{offer.image}</p>
              <p className="mt-[12px] text-[14px] leading-[1.6]" style={{ color: '#B5BCDE' }}>{offer.detail}</p>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
