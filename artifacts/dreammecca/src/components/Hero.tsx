import React from 'react';
import { createWALink, DEFAULT_MESSAGE } from '@/lib/whatsapp';

export default function Hero() {
  const waLink = createWALink(DEFAULT_MESSAGE);

  return (
    <section
      className="px-[7vw] py-16 md:py-[72px] relative overflow-hidden"
      style={{ background: '#1B1B36' }}
    >
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-[56px] items-center relative z-[1]">
        {/* Left: text */}
        <div>
          <span
            className="text-[13px] font-bold tracking-[0.14em] uppercase"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            Travel Umroh Resmi · Jakarta Selatan
          </span>

          <h1
            className="font-extrabold leading-[1.08] mt-[18px]"
            style={{ fontSize: 'clamp(34px,5vw,58px)', color: '#fff' }}
          >
            Berangkat Umroh dengan Tenang, Terbimbing Sesuai Sunnah
          </h1>

          <p
            className="text-[18px] leading-[1.6] mt-[20px] max-w-[520px]"
            style={{ color: 'rgba(255,255,255,0.66)' }}
          >
            Dreammecca mendampingi perjalanan ibadah Anda dari konsultasi, manasik, hingga pulang ke tanah air — dengan hotel bintang 4, penerbangan langsung, dan pembimbing bersertifikat.
          </p>

          {/* CTAs */}
          <div className="flex gap-[14px] mt-[32px] flex-wrap">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#1B1B36] font-bold text-[15px] px-[26px] py-[15px] rounded-lg hover:opacity-[0.88] transition-opacity no-underline"
            >
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" fill="#1B1B36" />
                <path d="M6 10.2l2.6 2.6L14.4 7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Konsultasi Gratis via WhatsApp
            </a>
            <a
              href="#paket"
              className="inline-flex items-center bg-transparent text-white font-bold text-[15px] px-[26px] py-[15px] rounded-lg hover:opacity-[0.88] transition-opacity no-underline"
              style={{ border: '1px solid rgba(255,255,255,0.35)' }}
            >
              Lihat Paket &amp; Harga
            </a>
          </div>

          {/* Trust stats */}
          <div className="flex gap-[26px] mt-[44px] flex-wrap">
            {[
              { num: '12+', lbl: 'Tahun beroperasi' },
              { num: '8.500+', lbl: 'Jamaah diberangkatkan' },
              { num: '4.9/5', lbl: 'Rating jamaah' },
              { num: 'PPIU', lbl: 'Izin resmi Kemenag RI' },
            ].map(item => (
              <div key={item.lbl} className="flex flex-col gap-[2px]">
                <span className="text-[24px] font-extrabold text-white">{item.num}</span>
                <span className="text-[12.5px]" style={{ color: 'rgba(255,255,255,0.66)' }}>{item.lbl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Kaabah photo */}
        <div
          className="hidden md:block rounded-xl overflow-hidden"
          style={{ aspectRatio: '4/5', border: '1px solid rgba(255,255,255,0.14)' }}
        >
          <img
            src="/images/kaabah/kaabah-1.jpg"
            alt="Ka'bah — jamaah Dreammecca"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
