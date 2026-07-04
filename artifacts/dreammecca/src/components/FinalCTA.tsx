import React from 'react';
import { createWALink, DEFAULT_MESSAGE } from '@/lib/whatsapp';

export default function FinalCTA() {
  const waLink = createWALink(DEFAULT_MESSAGE);

  return (
    <section id="kontak" className="px-[7vw] py-[88px]" style={{
      backgroundImage: 'linear-gradient(180deg, rgba(41,41,81,0.55), rgba(41,41,81,0.65)), url(/images/patterns/geometric-navy.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      backgroundColor: '#292951',
    }}>
      <div
        className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[56px] items-center"
      >
        {/* Left: contact info */}
        <div>
          <span
            className="text-[13px] font-bold tracking-[0.14em] uppercase"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            Konsultasi Gratis
          </span>
          <h2
            className="font-bold leading-[1.15] mt-[10px] text-white"
            style={{ fontSize: 'clamp(28px,3.6vw,42px)' }}
          >
            Siap Berangkat? Tim Kami Siap Membantu
          </h2>
          <p
            className="text-[17px] leading-[1.6] mt-[16px]"
            style={{ color: 'rgba(255,255,255,0.66)' }}
          >
            Konsultasikan kebutuhan Umroh Anda tanpa biaya, kami bantu pilih jadwal, kamar, dan cara pembayaran yang sesuai.
          </p>

          <div className="mt-[28px]">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-[#1B1B36] font-bold text-[15px] px-[26px] py-[15px] rounded-lg hover:opacity-[0.88] transition-opacity no-underline"
            >
              Chat via WhatsApp
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 mt-[40px]">
            <div>
              <h3 className="text-white font-bold text-[15px]">Alamat Kantor</h3>
              <p className="text-[14px] mt-1 leading-[1.6]" style={{ color: 'rgba(255,255,255,0.66)' }}>
                Jl. Durian No. 9H, RT 008/005,<br />
                Kel. Jagakarsa, Kec. Jagakarsa,<br />
                Jakarta Selatan 12620
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold text-[15px]">WhatsApp Admin</h3>
              <p className="text-[14px] mt-1 leading-[1.6]" style={{ color: 'rgba(255,255,255,0.66)' }}>
                +62 812-2574-0093<br />
                <span className="text-[13px]" style={{ color: 'rgba(255,255,255,0.45)' }}>Kak Alya Azizah</span>
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold text-[15px]">Email</h3>
              <p className="text-[14px] mt-1" style={{ color: 'rgba(255,255,255,0.66)' }}>
                dreammecca@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Right: Google Maps embed + Instagram */}
        <div className="flex flex-col gap-[16px]">
          <div
            className="rounded-xl overflow-hidden w-full"
            style={{
              aspectRatio: '4/3',
              border: '1px solid rgba(255,255,255,0.14)',
            }}
          >
            <iframe
              title="Lokasi Kantor Dreammecca"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d963!2d106.8161577!3d-6.3258532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eff5c7266bef%3A0xb73cb09e14d15d7e!2sDreammecca+Tour+%26+Travel!5e0!3m2!1sid!2sid!4v1751605200000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href="https://instagram.com/dreammecca.id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-[10px] no-underline hover:opacity-75 transition-opacity"
            style={{ color: 'rgba(255,255,255,0.65)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span className="text-[14px] font-medium">@dreammecca.id</span>
          </a>
        </div>
      </div>
    </section>
  );
}
