import React from 'react';
import { MapPin, MessageCircle } from 'lucide-react';
import { createWALink, DEFAULT_MESSAGE } from '@/lib/whatsapp';
import { useSiteContent } from '@/lib/siteContent';
import { useSiteSettings } from '@/lib/useSiteSettings';

export default function FinalCTA() {
  const { data: content } = useSiteContent();
  const { data: settings } = useSiteSettings();
  const contact = content.contact;
  return (
    <section id="kontak" className="bg-white px-[7vw] py-[72px] md:py-[112px]">
      <div className="mx-auto max-w-[1180px]">
        <div className="max-w-[660px]">
          <span className="text-[13px] font-bold tracking-[0.12em] uppercase" style={{ color: '#6B6B85' }}>{contact.eyebrow}</span>
          <h2 className="mt-[10px] font-bold leading-[1.15]" style={{ fontSize: 'clamp(30px,3.6vw,46px)', color: '#090F3B' }}>
            {contact.title}
          </h2>
          <p className="mt-[16px] text-[16px] leading-[1.65] md:text-[17px]" style={{ color: '#5D5D76' }}>
            {contact.body}
          </p>
        </div>

        <div className="mt-[40px] grid grid-cols-1 gap-[20px] md:grid-cols-[0.72fr_1.28fr]">
          <div className="flex flex-col justify-between rounded-xl p-[28px] md:p-[34px]" style={{ background: '#090F3B' }}>
            <div>
              <MapPin size={24} color="#C9ADA7" strokeWidth={1.65} />
              <p className="mt-[20px] text-[17px] font-semibold leading-[1.45]" style={{ color: '#fff' }}>{contact.officeLabel}</p>
              <address className="mt-[10px] not-italic text-[14px] leading-[1.7]" style={{ color: 'rgba(255,255,255,0.68)' }}>{contact.address}</address>
            </div>
            <a
              href={createWALink(DEFAULT_MESSAGE, settings?.whatsapp_number)}
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
              src={contact.mapEmbedUrl}
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
