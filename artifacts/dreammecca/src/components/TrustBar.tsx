import React from 'react';
import { Plane, ShieldCheck, Users } from 'lucide-react';

const trustItems = [
  {
    Icon: Plane,
    title: 'Direct Flight, Maskapai Ternama',
    desc: 'Saudia Airlines, Garuda Indonesia & FlyDubai, tanpa transit berlebih.',
  },
  {
    Icon: ShieldCheck,
    title: 'PPIU Resmi',
    desc: 'Berizin resmi Kementerian Agama RI, diawasi langsung.',
  },
  {
    Icon: Users,
    title: 'Melayani Sejak 2025',
    desc: 'Dipercaya jamaah dari berbagai kota di Indonesia.',
    link: true,
  },
];

export default function TrustBar() {
  return (
    <section
      className="px-[7vw] py-[32px]"
      style={{ background: '#1B1B36' }}
    >
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[12px]">
        {trustItems.map((item) => (
          <div
            key={item.title}
            className="rounded-xl p-[16px] flex items-start gap-[12px]"
            style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div
              className="w-[32px] h-[32px] rounded-full flex-none flex items-center justify-center mt-[2px]"
              style={{ background: 'rgba(255,255,255,0.08)' }}
            >
              <item.Icon size={14} color="#fff" strokeWidth={1.75} />
            </div>
            <div>
              <h4 className="text-[13px] font-bold leading-[1.3]" style={{ color: '#fff' }}>{item.title}</h4>
              <p className="text-[12px] leading-[1.5] mt-[4px]" style={{ color: 'rgba(255,255,255,0.6)' }}>{item.desc}</p>
              {item.link && (
                <a
                  href="#paket"
                  className="inline-flex items-center gap-[4px] text-[11px] font-bold uppercase tracking-[0.04em] mt-[8px] no-underline hover:opacity-75 transition-opacity"
                  style={{ color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.4)', paddingBottom: '1px' }}
                >
                  Lihat Paket
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
