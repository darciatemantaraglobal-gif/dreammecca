import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { createWALink, DEFAULT_MESSAGE } from '@/lib/whatsapp';

const links = [
  { name: 'Tentang', href: '#tentang' },
  { name: 'Fasilitas', href: '#fasilitas' },
  { name: 'Paket Umroh', href: '#paket' },
  { name: 'Perlengkapan', href: '#perlengkapan' },
  { name: 'Kontak', href: '#kontak' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [overHero, setOverHero] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const hero = document.querySelector('#hero');
    if (!hero) return undefined;

    setOverHero(true);
    const observer = new IntersectionObserver(([entry]) => setOverHero(entry.isIntersecting), {
      threshold: 0.1,
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const waLink = createWALink(DEFAULT_MESSAGE);

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-[7vw] py-[16px] transition-colors duration-300"
      style={{
        background: overHero ? 'linear-gradient(180deg, rgba(9,15,59,0.48), rgba(9,15,59,0))' : '#090F3B',
        borderBottom: 'none',
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
          className="h-[40px] w-auto"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-[28px] list-none m-0 p-0">
        {links.map(l => (
          <li key={l.name}>
            <a
              href={l.href}
              className="text-white/80 hover:text-white no-underline text-[14px] font-semibold transition-colors duration-150"
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
        className="hidden md:inline-flex min-h-11 items-center rounded-[6px] px-[25px] py-[12px] text-[14px] font-bold no-underline transition-opacity hover:opacity-[0.90]"
        style={{ background: '#FFD400', color: '#090F3B' }}
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
            background: '#090F3B',
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
            className="inline-flex min-h-11 justify-center rounded-[6px] px-6 py-3 text-[15px] font-bold no-underline"
            style={{ background: '#FFD400', color: '#090F3B' }}
          >
            Konsultasi Gratis
          </a>
        </div>
      )}
    </nav>
  );
}
