import React from 'react';
import { createWALink, DEFAULT_MESSAGE } from '@/lib/whatsapp';

export default function Hero() {
  const waLink = createWALink(DEFAULT_MESSAGE);

  return (
    <section
      className="relative overflow-hidden px-[7vw] pt-[64px]"
      style={{
        backgroundImage: 'linear-gradient(180deg, rgba(27,27,54,0.88), rgba(27,27,54,0.94)), url(/images/patterns/geometric-navy.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundColor: '#1B1B36',
      }}
    >
      {/* ── Main 2-col grid ── */}
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-[40px] items-start">

        {/* LEFT: giant stacked headline */}
        <div className="flex flex-col">
          <p
            className="text-[13px] font-bold tracking-[0.18em] uppercase"
            style={{ color: 'rgba(255,255,255,0.50)' }}
          >
            Penyelenggara Ibadah Umroh Resmi
          </p>

          <h1
            className="font-extrabold uppercase text-white leading-[0.88] tracking-[-0.025em] mt-[18px]"
            style={{ fontSize: 'clamp(52px, 7vw, 92px)' }}
          >
            DREAM<br />MECCA<br />TOUR &amp;<br />TRAVEL
          </h1>

          <p
            className="mt-[28px] text-[16px] leading-[1.6] max-w-[440px]"
            style={{ color: 'rgba(255,255,255,0.66)' }}
          >
            Berizin resmi PPIU Kementerian Agama RI. Kami hadir memastikan perjalanan ibadah Umroh Anda — dari konsultasi, dokumen, visa, hingga pendampingan di Tanah Suci — berjalan lancar dan penuh kekhusyukan.
          </p>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-[36px] self-start inline-flex items-center bg-white text-[#1B1B36] font-bold text-[14px] uppercase tracking-[0.09em] px-[32px] py-[17px] rounded-full hover:opacity-[0.88] transition-opacity no-underline"
          >
            Konsultasi Gratis
          </a>
        </div>

        {/* RIGHT: floating white card */}
        <div className="relative flex flex-col">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* Card header */}
            <div className="px-[24px] pt-[24px]">
              {/* Pills */}
              <div className="flex gap-[8px] flex-wrap">
                {[
                  { label: 'Umroh', active: false },
                  { label: 'Paket', active: false },
                  { label: 'PPIU', active: true },
                ].map(({ label, active }) => (
                  <span
                    key={label}
                    className="text-[13px] font-semibold px-[14px] py-[7px] rounded-full"
                    style={
                      active
                        ? { background: '#1B1B36', color: '#fff' }
                        : { border: '1px solid rgba(27,27,54,0.20)', color: '#1B1B36' }
                    }
                  >
                    {label}
                  </span>
                ))}
              </div>

              {/* Text + badge row */}
              <div className="flex items-start justify-between gap-3 mt-[18px] mb-[20px]">
                <div>
                  <h2
                    className="font-bold leading-[1.2]"
                    style={{ fontSize: 'clamp(18px, 2vw, 22px)', color: '#1B1B36' }}
                  >
                    12 Tahun Dipercaya<br />Jamaah Indonesia
                  </h2>
                  <p className="text-[13.5px] mt-[6px]" style={{ color: '#6B6B85' }}>
                    Ribuan keberangkatan sejak 2014, nol kloter gagal berangkat.
                  </p>
                </div>

                {/* PPIU badge */}
                <div
                  className="flex-none rounded-xl px-[14px] py-[11px] text-center"
                  style={{ background: '#292951' }}
                >
                  <div className="text-[10.5px] font-bold uppercase tracking-[0.08em] text-white leading-tight">
                    PPIU<br />RESMI
                  </div>
                </div>
              </div>
            </div>

            {/* Card video — bleeds to bottom */}
            <div className="w-full overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/images/kaabah/kaabah-1.jpg"
                className="w-full h-full object-cover"
              >
                <source src="/videos/hero-card.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom 3-col stats strip ── */}
      <div
        className="max-w-[1180px] mx-auto mt-[56px] grid grid-cols-1 md:grid-cols-3"
        style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}
      >
        {/* 1 — Dark accent card */}
        <div
          className="p-[28px_30px] border-b md:border-b-0 md:border-r"
          style={{ background: '#292951', borderColor: 'rgba(255,255,255,0.12)' }}
        >
          <h3 className="font-bold text-white leading-[1.3] text-[18px]">
            Direct Flight, Maskapai<br />Ternama Dunia
          </h3>
          <p className="text-[13px] mt-[8px]" style={{ color: 'rgba(255,255,255,0.50)' }}>
            Saudia Airlines, Garuda Indonesia &amp; FlyDubai — tanpa transit berlebih.
          </p>
        </div>

        {/* 2 — Avatar stack + stat */}
        <div
          className="p-[28px_30px] flex flex-col gap-[12px] border-b md:border-b-0 md:border-r"
          style={{ borderColor: 'rgba(255,255,255,0.12)' }}
        >
          <div className="flex items-center">
            <img
              src="/images/avatar-1.jpg"
              alt=""
              aria-hidden="true"
              className="w-9 h-9 rounded-full object-cover"
              style={{ border: '2px solid #1B1B36' }}
            />
            <img
              src="/images/avatar-2.jpg"
              alt=""
              aria-hidden="true"
              className="w-9 h-9 rounded-full object-cover -ml-3"
              style={{ border: '2px solid #1B1B36' }}
            />
            <span
              className="text-[12.5px] font-medium ml-[10px]"
              style={{ color: 'rgba(255,255,255,0.50)' }}
            >
              dan ribuan jamaah lainnya
            </span>
          </div>
          <div>
            <span
              className="font-extrabold italic text-white leading-none"
              style={{ fontSize: 'clamp(36px, 4vw, 48px)' }}
            >
              8.500+
            </span>
            <p className="text-[13px] mt-[6px]" style={{ color: 'rgba(255,255,255,0.50)' }}>
              Jamaah diberangkatkan
            </p>
          </div>
        </div>

        {/* 3 — Bold right text */}
        <div className="p-[28px_30px]">
          <h3
            className="font-extrabold uppercase text-white leading-[1.1] tracking-[-0.01em]"
            style={{ fontSize: 'clamp(18px, 2.2vw, 26px)' }}
          >
            12+ TAHUN<br />MELAYANI JAMAAH<br />UMROH INDONESIA
          </h3>
          <a
            href="#paket"
            className="inline-block mt-[16px] text-[12.5px] font-bold uppercase tracking-[0.07em] no-underline"
            style={{
              color: 'rgba(255,255,255,0.65)',
              borderBottom: '1px solid rgba(255,255,255,0.35)',
              paddingBottom: '2px',
            }}
          >
            Lihat Paket
          </a>
        </div>
      </div>
    </section>
  );
}
