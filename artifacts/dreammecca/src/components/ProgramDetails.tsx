import React from 'react';
import { Check, CircleAlert } from 'lucide-react';
import { createWALink } from '@/lib/whatsapp';
import { useSiteContent } from '@/lib/siteContent';
import { useSiteSettings } from '@/lib/useSiteSettings';

export default function ProgramDetails() {
  const { data: content } = useSiteContent();
  const { data: settings } = useSiteSettings();
  const details = content.details;
  const message = 'Assalamu\'alaikum, saya ingin menanyakan rincian fasilitas dan biaya program Umroh Dreammecca.\n\nNama:\nKota:\nProgram yang diminati:';

  return (
    <section id="rincian-program" className="bg-white px-[7vw] py-[72px] md:py-[112px]">
      <div className="mx-auto max-w-[1180px]">
        <div className="max-w-[680px]">
          <span className="inline-flex rounded-[6px] px-[9px] py-[5px] text-[12px] font-bold tracking-[0.14em] uppercase" style={{ background: '#090F3B', color: '#C9ADA7' }}>{details.eyebrow}</span>
          <h2 className="mt-[12px] font-bold leading-[1.12]" style={{ fontSize: 'clamp(32px,4vw,52px)', color: '#090F3B', textWrap: 'balance' }}>
            {details.title}
          </h2>
          <p className="mt-[16px] max-w-[600px] text-[16px] leading-[1.7]" style={{ color: '#5D5D76' }}>
            {details.body}
          </p>
        </div>

        <div className="mt-[34px] grid grid-cols-1 gap-[12px] md:mt-[44px] md:grid-cols-2 md:gap-[16px]">
          <article className="rounded-lg p-[24px] md:p-[30px]" style={{ background: '#F7F6F2', border: '1px solid #E5DDCC' }}>
            <Check size={22} color="#C9ADA7" strokeWidth={1.7} />
            <h3 className="mt-[18px] text-[22px] font-bold" style={{ color: '#090F3B' }}>Sudah dikonfirmasi</h3>
            <ul className="mt-[18px] space-y-[13px]">
              {details.confirmed.map((item) => <li key={item} className="flex gap-[10px] text-[14px] leading-[1.6]" style={{ color: '#4B4F68' }}><Check className="mt-[3px] flex-none" size={15} color="#C9ADA7" />{item}</li>)}
            </ul>
          </article>
          <article className="rounded-lg p-[24px] md:p-[30px]" style={{ background: '#090F3B' }}>
            <CircleAlert size={22} color="#C9ADA7" strokeWidth={1.7} />
            <h3 className="mt-[18px] text-[22px] font-bold" style={{ color: '#fff' }}>Perlu dikonfirmasi</h3>
            <ul className="mt-[18px] space-y-[13px]">
              {details.toConfirm.map((item) => <li key={item} className="flex gap-[10px] text-[14px] leading-[1.6]" style={{ color: '#C5CBE5' }}><span className="mt-[9px] h-[5px] w-[5px] flex-none rounded-full" style={{ background: '#C9ADA7' }} />{item}</li>)}
            </ul>
            <a href={createWALink(message, settings?.whatsapp_number)} target="_blank" rel="noopener noreferrer" className="mt-[24px] inline-flex min-h-11 items-center justify-center rounded-[6px] px-[18px] py-[11px] text-[14px] font-bold no-underline" style={{ background: '#C9ADA7', color: '#090F3B' }}>
              Tanya Rincian Program
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
