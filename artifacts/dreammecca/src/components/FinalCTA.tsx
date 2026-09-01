import React from 'react';
import { MapPin, MessageCircle } from 'lucide-react';
import { createWALink, DEFAULT_MESSAGE } from '@/lib/whatsapp';

const address = 'Jl. Durian 9A No. 6, RT.6/RW.4, Jagakarsa, Kec. Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12620';

export default function FinalCTA() {
  return (
    <section id="kontak" className="bg-white px-[7vw] py-[72px] md:py-[112px]">
      <div className="mx-auto max-w-[1180px]">
        <div className="max-w-[660px]">
          <span className="text-[13px] font-bold tracking-[0.12em] uppercase" style={{ color: '#6B6B85' }}>Kantor &amp; Lokasi</span>
          <h2 className="mt-[10px] font-bold leading-[1.15]" style={{ fontSize: 'clamp(30px,3.6vw,46px)', color: '#090F3B' }}>
            Dreammecca Tour &amp; Travel
          </h2>
          <p className="mt-[16px] text-[16px] leading-[1.65] md:text-[17px]" style={{ color: '#5D5D76' }}>
            Kantor Pusat Jakarta, silakan datang dan verifikasi langsung.
          </p>
        </div>

        <div className="mt-[40px] grid grid-cols-1 gap-[20px] md:grid-cols-[0.72fr_1.28fr]">
          <div className="flex flex-col justify-between rounded-xl p-[28px] md:p-[34px]" style={{ background: '#090F3B' }}>
            <div>
              <MapPin size={24} color="#C9ADA7" strokeWidth={1.65} />
              <p className="mt-[20px] text-[17px] font-semibold leading-[1.45]" style={{ color: '#fff' }}>Kantor pusat Dreammecca</p>
              <address className="mt-[10px] not-italic text-[14px] leading-[1.7]" style={{ color: 'rgba(255,255,255,0.68)' }}>{address}</address>
            </div>
            <a
              href={createWALink(DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[34px] inline-flex min-h-11 items-center justify-center gap-[9px] rounded-[6px] px-[20px] py-[12px] text-[14px] font-bold no-underline"
              style={{ background: '#fff', color: '#090F3B' }}
            >
              <MessageCircle size={17} />
              Konsultasi Gratis
            </a>
          </div>
          <div className="min-h-[360px] overflow-hidden rounded-xl" style={{ border: '1px solid rgba(27,27,54,0.12)' }}>
            <iframe
              title="Lokasi Kantor Dreammecca"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d963!2d106.8161577!3d-6.3258532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eff5c7266bef%3A0xb73cb09e14d15d7e!2sDreammecca+Tour+%26+Travel!5e0!3m2!1sid!2sid!4v1751605200000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '360px' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
