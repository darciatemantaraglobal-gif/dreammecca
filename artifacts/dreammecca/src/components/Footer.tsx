import React from 'react';
import { createWALink, DEFAULT_MESSAGE } from '@/lib/whatsapp';

export default function Footer() {
  const waLink = createWALink(DEFAULT_MESSAGE);

  return (
    <footer style={{
      backgroundImage: 'linear-gradient(180deg, rgba(27,27,54,0.65), rgba(27,27,54,0.75)), url(/images/patterns/geometric-navy.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      backgroundColor: '#1B1B36',
      borderTop: '1px solid rgba(255,255,255,0.14)',
    }}>
      {/* Top row */}
      <div
        className="max-w-[1180px] mx-auto px-[7vw] py-[44px] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6"
      >
        <div>
          <div className="text-white font-extrabold text-[19px] tracking-tight">Dreammecca</div>
          <p
            className="text-[14px] mt-2 max-w-[420px] leading-[1.6]"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            PT. Dream Mecca International, penyelenggara ibadah Umroh resmi berizin PPIU Kementerian Agama RI. Bersama kami, wujudkan perjalanan ibadah yang aman, nyaman, dan penuh berkah.
          </p>
          <p className="text-[13px] mt-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Jl. Durian No. 9H, RT 008/005, Kel. Jagakarsa, Kec. Jagakarsa, Jakarta Selatan 12620
          </p>
        </div>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-bold text-[15px] px-[26px] py-[15px] rounded-lg hover:opacity-[0.88] transition-opacity no-underline text-white flex-none"
          style={{ border: '1px solid rgba(255,255,255,0.35)', background: 'transparent' }}
        >
          Konsultasi Gratis
        </a>
      </div>

      {/* Bottom row */}
      <div
        className="px-[7vw] py-[20px] flex flex-col sm:flex-row justify-between gap-2"
        style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
      >
        <span className="text-[13px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
          © 2026 Dreammecca Tour &amp; Travel. All rights reserved.
        </span>
        <div className="flex items-center gap-4">
          <a href="/syarat-ketentuan" className="text-[12px] hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Syarat &amp; Ketentuan
          </a>
          <span className="text-[13px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
            dreammecca@gmail.com
          </span>
        </div>
      </div>
    </footer>
  );
}
