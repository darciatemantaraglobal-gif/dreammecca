import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { createWALink, DEFAULT_MESSAGE, WA_NUMBER } from '@/lib/whatsapp';

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="sticky-cta"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ type: 'tween', duration: 0.25, ease: [0.25, 0, 0.25, 1] }}
          /* z-30 — above page content, but BELOW navbar backdrop (z-40) and menu panel (z-50)
             so the hamburger menu always sits on top when open */
          className="fixed bottom-0 left-0 right-0 z-30 md:hidden"
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          {/* Subtle shadow strip */}
          <div className="bg-white/95 backdrop-blur-sm border-t border-black/8
                          shadow-[0_-4px_16px_rgba(0,0,0,0.10)] px-3 pt-3 pb-3">
            <div className="flex gap-2.5 max-w-sm mx-auto">
              {/* Telepon — 44px min height */}
              <a
                href={`tel:+${WA_NUMBER}`}
                aria-label="Telepon Dreammecca"
                className="flex-1 flex items-center justify-center gap-2
                           bg-dream-navy text-white font-semibold
                           rounded-lg transition-all duration-200
                           min-h-[48px] text-sm active:scale-95"
              >
                <Phone size={17} aria-hidden="true" />
                <span>Telepon</span>
              </a>

              {/* WhatsApp — 44px min height, primary action */}
              <a
                href={createWALink(DEFAULT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat WhatsApp Dreammecca"
                className="flex-1 flex items-center justify-center gap-2
                           bg-dream-gold text-dream-navy font-bold
                           rounded-lg transition-all duration-200
                           min-h-[48px] text-sm shadow-sm active:scale-95"
              >
                <MessageCircle size={17} aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
