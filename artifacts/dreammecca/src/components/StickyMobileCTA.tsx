import React, { useEffect, useState } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { createWALink, DEFAULT_MESSAGE, WA_NUMBER } from '@/lib/whatsapp';

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden animate-in slide-in-from-bottom-full duration-300">
      <div className="bg-white/90 backdrop-blur-md border-t border-black/10 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] p-3 pb-safe">
        <div className="flex gap-3">
          <a
            href={`tel:+${WA_NUMBER}`}
            className="flex-1 flex items-center justify-center gap-2 bg-dream-navy text-white font-medium py-3 rounded-lg"
          >
            <Phone size={18} />
            <span>Telepon</span>
          </a>
          <a
            href={createWALink(DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-dream-gold text-dream-navy font-semibold py-3 rounded-lg shadow-sm"
          >
            <MessageCircle size={18} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .pb-safe {
          padding-bottom: max(12px, env(safe-area-inset-bottom));
        }
      `}} />
    </div>
  );
}
