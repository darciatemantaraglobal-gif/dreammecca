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
        <div className="flex flex-col sm:flex-row items-start gap-[20px]">
          <img
            src="/images/logo.png"
            alt="Dreammecca"
            className="w-[88px] h-[88px] object-contain flex-none rounded-lg"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <div>
            <h3 className="text-[20px] font-bold" style={{ color: '#fff' }}>
              Dreammecca
            </h3>
            <p className="text-[13px] mt-[10px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Jl. Durian No. 9H, RT 008/005, Kel. Jagakarsa, Kec. Jagakarsa, Jakarta Selatan 12620
            </p>
            <a
              href="https://instagram.com/dreammecca.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-[8px] mt-[14px] no-underline hover:opacity-75 transition-opacity"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @dreammecca.id
            </a>
          </div>
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
