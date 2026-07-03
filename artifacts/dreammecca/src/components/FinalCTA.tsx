import React from 'react';
import { createWALink, DEFAULT_MESSAGE } from '@/lib/whatsapp';

export default function FinalCTA() {
  const waLink = createWALink(DEFAULT_MESSAGE);

  return (
    <section id="kontak" className="px-[7vw] py-[88px]" style={{ background: '#292951' }}>
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
            Konsultasikan kebutuhan Umroh Anda tanpa biaya — kami bantu pilih jadwal, kamar, dan cara pembayaran yang sesuai.
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
                Jl. Durian Raya, Jagakarsa,<br />
                Jakarta Selatan, DKI Jakarta
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

        {/* Right: Google Maps embed */}
        <div
          className="rounded-xl overflow-hidden w-full"
          style={{
            aspectRatio: '4/3',
            border: '1px solid rgba(255,255,255,0.14)',
          }}
        >
          <iframe
            title="Lokasi Kantor Dreammecca"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0!2d106.8311!3d-6.3500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed5b5a42eb0d%3A0x9d8c4eb5e5f11234!2sJagakarsa%2C%20Jakarta%20Selatan!5e0!3m2!1sid!2sid!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
