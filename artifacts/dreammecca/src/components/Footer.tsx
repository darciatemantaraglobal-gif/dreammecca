import React from 'react';
import { Instagram, Mail, MapPin, MessageCircle } from 'lucide-react';
import { createWALink, DEFAULT_MESSAGE } from '@/lib/whatsapp';
import { useSiteSettings } from '@/lib/useSiteSettings';

const links = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Fasilitas', href: '#fasilitas' },
  { label: 'Paket Umroh', href: '#paket' },
  { label: 'Kontak', href: '#kontak' },
];

export default function Footer() {
  const { data: settings } = useSiteSettings();
  const whatsappNumber = settings?.whatsapp_number || '6281225740093';
  const address = settings?.address || 'Jl. Durian 9A No. 6, Jagakarsa, Jakarta Selatan 12620';
  const instagramUrl = settings?.instagram_url || 'https://instagram.com/dreammecca.id';

  return (
    <footer style={{ background: '#090F3B' }}>
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-[40px] px-[7vw] py-[56px] md:grid-cols-[1.15fr_0.85fr_0.85fr]">
        <div>
          <img src="/images/logo.png" alt="Dreammecca" className="h-[42px] w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
          <p className="mt-[14px] text-[13px]" style={{ color: 'rgba(255,255,255,0.78)' }}>PT Dream Mecca International</p>
          <p className="mt-[18px] max-w-[350px] text-[14px] leading-[1.65]" style={{ color: 'rgba(255,255,255,0.63)' }}>
            Teman perjalanan umroh dan wisata halal Anda, dari manasik sampai pulang.
          </p>
          <a href={createWALink(DEFAULT_MESSAGE, whatsappNumber)} target="_blank" rel="noopener noreferrer" className="mt-[22px] inline-flex min-h-11 items-center rounded-[6px] px-[18px] py-[11px] text-[14px] font-bold no-underline" style={{ background: '#fff', color: '#090F3B' }}>
            Konsultasi Gratis
          </a>
        </div>

        <div>
          <h2 className="text-[14px] font-bold" style={{ color: '#fff' }}>Navigasi</h2>
          <nav className="mt-[16px] flex flex-col items-start gap-[10px]">
            {links.map((link) => <a key={link.href} href={link.href} className="text-[14px] no-underline transition-opacity hover:opacity-100" style={{ color: 'rgba(255,255,255,0.63)' }}>{link.label}</a>)}
          </nav>
        </div>

        <div>
          <h2 className="text-[14px] font-bold" style={{ color: '#fff' }}>Hubungi Kami</h2>
          <div className="mt-[16px] flex flex-col gap-[12px] text-[14px] leading-[1.55]" style={{ color: 'rgba(255,255,255,0.63)' }}>
            <a href={createWALink(DEFAULT_MESSAGE, whatsappNumber)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-[9px] no-underline" style={{ color: 'inherit' }}><MessageCircle size={16} /> WhatsApp +{whatsappNumber.slice(0, 2)} {whatsappNumber.slice(2, 5)}-{whatsappNumber.slice(5, 9)}-{whatsappNumber.slice(9)}</a>
            <a href="mailto:dreammecca@gmail.com" className="flex items-center gap-[9px] no-underline" style={{ color: 'inherit' }}><Mail size={16} /> dreammecca@gmail.com</a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-[9px] no-underline" style={{ color: 'inherit' }}><Instagram size={16} /> @dreammecca.id</a>
            <a href="https://www.google.com/maps/search/?api=1&query=Dreammecca+Tour+%26+Travel" target="_blank" rel="noopener noreferrer" className="flex items-start gap-[9px] no-underline" style={{ color: 'inherit' }}><MapPin size={16} className="mt-[3px] flex-none" /> {address}</a>
          </div>
        </div>
      </div>
      <div className="px-[7vw] py-[18px] text-[12px]" style={{ borderTop: '1px solid rgba(255,255,255,0.10)', color: 'rgba(255,255,255,0.45)' }}>
        © 2026 PT Dream Mecca International.
      </div>
    </footer>
  );
}
