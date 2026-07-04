import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { createWALink, DEFAULT_MESSAGE } from '@/lib/whatsapp';

const links = [
  { name: 'Tentang', href: '#tentang' },
  { name: 'Fasilitas', href: '#fasilitas' },
  { name: 'Paket Umroh', href: '#paket' },
  { name: 'Testimoni', href: '#testimoni' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Kontak', href: '#kontak' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);
  const waLink = createWALink(DEFAULT_MESSAGE);

  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-[7vw] py-[18px]"
      style={{
        backgroundImage: 'linear-gradient(180deg, rgba(27,27,54,0.75), rgba(27,27,54,0.82)), url(/images/patterns/geometric-navy.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundColor: '#1B1B36',
        borderBottom: '1px solid rgba(255,255,255,0.14)',
      }}
    >
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        className="flex items-center no-underline"
        aria-label="Dreammecca, kembali ke atas"
      >
        <img
          src="/images/logo.png"
          alt="Dreammecca"
          className="h-[36px] w-auto"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-[30px] list-none m-0 p-0">
        {links.map(l => (
          <li key={l.name}>
            <a
              href={l.href}
              className="text-white/70 hover:text-white no-underline text-[14.5px] font-medium transition-colors duration-150"
            >
              {l.name}
            </a>
          </li>
        ))}
      </ul>

      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex items-center bg-white text-[#1B1B36] font-bold text-[15px] px-[26px] py-[15px] rounded-lg hover:opacity-[0.88] transition-opacity no-underline"
      >
        Konsultasi Gratis
      </a>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden w-11 h-11 flex items-center justify-center text-white"
        aria-label={open ? 'Tutup menu' : 'Buka menu'}
        aria-expanded={open}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col px-[7vw] pb-6 pt-4 gap-5"
          style={{
            backgroundImage: 'linear-gradient(180deg, rgba(27,27,54,0.75), rgba(27,27,54,0.82)), url(/images/patterns/geometric-navy.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundColor: '#1B1B36',
            borderBottom: '1px solid rgba(255,255,255,0.14)',
          }}
        >
          {links.map(l => (
            <a
              key={l.name}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white text-[15px] font-medium no-underline"
            >
              {l.name}
            </a>
          ))}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="inline-flex justify-center bg-white text-[#1B1B36] font-bold px-6 py-3 rounded-lg text-[15px] no-underline"
          >
            Konsultasi Gratis
          </a>
        </div>
      )}
    </nav>
  );
}
