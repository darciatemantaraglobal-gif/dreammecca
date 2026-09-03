import React from 'react';
import { CalendarDays, ChevronRight, MessageCircle, ShieldCheck } from 'lucide-react';
import { createWALink, DEFAULT_MESSAGE } from '@/lib/whatsapp';
import { useSiteSettings } from '@/lib/useSiteSettings';

export default function QuickLinks() {
  const { data: settings } = useSiteSettings();
  const links = [
    { icon: CalendarDays, label: 'Program Umroh', detail: 'Jadwal Oktober hingga Desember 2026', href: '#paket' },
    { icon: ShieldCheck, label: 'Layanan Perjalanan', detail: 'Fasilitas dan pendampingan jamaah', href: '#fasilitas' },
    { icon: MessageCircle, label: 'Konsultasi Gratis', detail: 'Tanya program sesuai rencana Anda', href: createWALink(DEFAULT_MESSAGE, settings?.whatsapp_number), external: true },
  ];
  return (
    <section className="mobile-quick-links bg-white px-[7vw] py-[20px] md:py-[24px]" aria-label="Akses cepat">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 divide-y md:grid-cols-3 md:divide-x md:divide-y-0" style={{ borderColor: 'rgba(9,15,59,0.12)' }}>
        {links.map(({ icon: Icon, label, detail, href, external }) => (
          <a
            key={label}
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className="group flex min-h-[82px] items-center gap-[13px] py-[15px] no-underline first:pt-0 last:pb-0 md:px-[24px] md:py-0 md:first:pl-0 md:last:pr-0"
            style={{ color: '#090F3B' }}
          >
            <Icon size={19} strokeWidth={1.7} color="#C9ADA7" className="flex-none" />
            <span className="min-w-0 flex-1">
              <span className="block text-[14px] font-semibold">{label}</span>
              <span className="mt-[3px] block text-[12px] leading-[1.45]" style={{ color: '#5D5D76' }}>{detail}</span>
            </span>
            <ChevronRight size={18} strokeWidth={1.7} className="flex-none transition-transform group-hover:translate-x-1" />
          </a>
        ))}
      </div>
    </section>
  );
}
