import React from 'react';
import { Gift, Luggage, MessageCircle } from 'lucide-react';
import { createWALink, DEFAULT_MESSAGE } from '@/lib/whatsapp';

export default function Gallery() {
  return (
    <section id="perlengkapan" className="bg-[#F7F6F2] px-[7vw] py-[72px] md:py-[112px]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-[32px] md:grid-cols-[0.95fr_1.05fr] md:gap-[72px]">
        <div>
          <span className="text-[13px] font-bold tracking-[0.12em] uppercase" style={{ color: '#6B6B85' }}>Perlengkapan Eksklusif</span>
          <h2 className="mt-[10px] max-w-[530px] font-bold leading-[1.15]" style={{ fontSize: 'clamp(30px,3.6vw,46px)', color: '#090F3B' }}>
            Semua yang Anda butuhkan, sudah kami siapkan
          </h2>
          <p className="mt-[18px] max-w-[520px] text-[16px] leading-[1.65] md:text-[17px]" style={{ color: '#5D5D76' }}>
            Tim kami menyiapkan kebutuhan perjalanan sebelum keberangkatan agar Anda dapat fokus pada persiapan ibadah.
          </p>
          <a
            href={createWALink(DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-[28px] inline-flex min-h-11 items-center gap-[9px] rounded-lg px-[22px] py-[12px] text-[14px] font-bold no-underline"
            style={{ background: '#090F3B', color: '#fff' }}
          >
            <MessageCircle size={17} />
            Konsultasi Gratis
          </a>
        </div>

        <div className="grid grid-cols-2 gap-[12px]">
          <div className="col-span-2 overflow-hidden rounded-xl" style={{ aspectRatio: '16 / 8', background: '#090F3B' }}>
            <img src="/images/hero.jpg" alt="Masjidil Haram" className="h-full w-full object-cover opacity-85" style={{ objectPosition: 'center 64%' }} />
          </div>
          <div className="flex min-h-[128px] flex-col justify-between rounded-xl p-[20px]" style={{ background: '#fff', border: '1px solid #E5DDCC' }}>
            <Luggage size={23} color="#CFA568" strokeWidth={1.65} />
            <p className="text-[14px] font-semibold" style={{ color: '#090F3B' }}>Disiapkan sebelum keberangkatan</p>
          </div>
          <div className="flex min-h-[128px] flex-col justify-between rounded-xl p-[20px]" style={{ background: '#fff', border: '1px solid #E5DDCC' }}>
            <Gift size={23} color="#CFA568" strokeWidth={1.65} />
            <p className="text-[14px] font-semibold" style={{ color: '#090F3B' }}>Rincian paket dijelaskan oleh admin</p>
          </div>
        </div>
      </div>
    </section>
  );
}
