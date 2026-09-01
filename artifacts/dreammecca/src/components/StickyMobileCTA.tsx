import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { createWALink, DEFAULT_MESSAGE } from '@/lib/whatsapp';

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector('#hero');
    if (!hero) return undefined;

    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      threshold: 0.1,
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <a
      href={createWALink(DEFAULT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Konsultasi lewat WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg md:hidden"
      style={{ background: '#090F3B', color: '#fff', boxShadow: '0 12px 28px rgba(9,15,59,0.28)' }}
    >
      <MessageCircle size={24} strokeWidth={1.9} />
    </a>
  );
}
