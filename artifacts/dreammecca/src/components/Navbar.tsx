import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { createWALink, DEFAULT_MESSAGE } from '@/lib/whatsapp';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll detection for solid background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen]);

  const links = [
    { name: 'Tentang', href: '#tentang' },
    { name: 'Fasilitas', href: '#fasilitas' },
    { name: 'Paket Umroh', href: '#paket' },
    { name: 'Testimoni', href: '#testimoni' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontak', href: '#kontak' },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'bg-dream-navy shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="flex-shrink-0" onClick={closeMenu} aria-label="Dreammecca Tour & Travel — ke atas halaman">
              <span className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wider">
                DREAM<span className="text-dream-gold">MECCA</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-white/90 hover:text-dream-gold transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={createWALink(DEFAULT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dream-gold hover:bg-dream-gold-hover text-dream-navy font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 shadow-sm"
              >
                Konsultasi Gratis
              </a>
            </div>

            {/* Hamburger — 44×44px touch target */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={mobileMenuOpen}
              className="md:hidden w-11 h-11 flex items-center justify-center text-white hover:text-dream-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-dream-gold rounded-lg transition-colors duration-200 -mr-1"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X size={26} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu size={26} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Dark backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 md:hidden"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* Slide-in menu panel from right */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.28, ease: [0.25, 0, 0.25, 1] }}
            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm z-50 bg-dream-navy
                       flex flex-col pt-20 pb-8 px-6 md:hidden overflow-y-auto shadow-2xl"
          >
            {/* Thin gold accent on left edge */}
            <div className="absolute top-0 left-0 bottom-0 w-0.5 bg-dream-gold/30" />

            <nav className="flex flex-col space-y-1 flex-grow">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.25 }}
                  className="flex items-center text-xl font-serif text-white hover:text-dream-gold
                             transition-colors duration-200 py-3 border-b border-white/5 last:border-0
                             min-h-[52px]"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.25 }}
              className="pt-6 mt-4 border-t border-white/10"
            >
              <a
                href={createWALink(DEFAULT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="block text-center bg-dream-gold hover:bg-dream-gold-hover
                           text-dream-navy font-semibold px-6 py-4 rounded-lg
                           transition-all duration-200 shadow-sm text-base min-h-[52px]
                           flex items-center justify-center"
              >
                Konsultasi Gratis
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
