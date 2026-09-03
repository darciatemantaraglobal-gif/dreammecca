import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useSiteContent } from '@/lib/siteContent';

export default function TravelFAQ() {
  const { data: content } = useSiteContent();
  const faq = content.faq;
  const [openItem, setOpenItem] = useState<number | null>(0);

  return (
    <section id="faq" className="mobile-compact-section px-[7vw] py-[72px] md:py-[112px]" style={{ background: '#F7F6F2' }}>
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-[32px] md:grid-cols-[0.75fr_1.25fr] md:gap-[90px]">
        <div>
          <span className="text-[12px] font-bold tracking-[0.14em] uppercase" style={{ color: '#C9ADA7' }}>{faq.eyebrow}</span>
          <h2 className="mobile-section-title mt-[12px] font-bold leading-[1.12]" style={{ fontSize: 'clamp(32px,4vw,52px)', color: '#090F3B', textWrap: 'balance' }}>
            {faq.title}
          </h2>
          <p className="mt-[16px] max-w-[390px] text-[16px] leading-[1.7]" style={{ color: '#5D5D76' }}>
            {faq.body}
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(9,15,59,0.16)' }}>
          {faq.items.map((item, index) => {
            const isOpen = openItem === index;
            return (
              <div key={item.question} style={{ borderBottom: '1px solid rgba(9,15,59,0.16)' }}>
                <button type="button" onClick={() => setOpenItem(isOpen ? null : index)} aria-expanded={isOpen} className="flex min-h-14 w-full items-center justify-between gap-[16px] py-[14px] text-left md:min-h-16 md:gap-[20px] md:py-[18px]" style={{ color: '#090F3B' }}>
                  <span className="text-[16px] font-semibold leading-[1.35]">{item.question}</span>
                  <ChevronDown size={20} className="flex-none transition-transform duration-200" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                </button>
                {isOpen && <p className="max-w-[640px] pb-[20px] text-[15px] leading-[1.7]" style={{ color: '#5D5D76' }}>{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
