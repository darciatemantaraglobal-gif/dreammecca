import React from 'react';
import { Check, CircleAlert } from 'lucide-react';
import { createWALink } from '@/lib/whatsapp';

const confirmed = [
  'Tanggal keberangkatan, maskapai, hotel, dan harga tampil pada setiap kartu program.',
  'Program Desember mencantumkan Haramain Express 2x.',
  'Manasik dan pendampingan penuh tercantum sebagai fasilitas perjalanan.',
];

const toConfirm = [
  'Rincian isi perlengkapan untuk tier Ekonomis dan Eksklusif sedang disiapkan.',
  'Nominal DP dan batas pelunasan dijelaskan oleh admin sebelum pendaftaran.',
  'Biaya vaksin meningitis berada di luar harga paket.',
];

export default function ProgramDetails() {
  const message = 'Assalamu\'alaikum, saya ingin menanyakan rincian fasilitas dan biaya program Umroh Dreammecca.\n\nNama:\nKota:\nProgram yang diminati:';

  return (
    <section id="rincian-program" className="bg-white px-[7vw] py-[72px] md:py-[112px]">
      <div className="mx-auto max-w-[1180px]">
        <div className="max-w-[680px]">
          <span className="text-[12px] font-bold tracking-[0.14em] uppercase" style={{ color: '#8C661A' }}>Transparansi program</span>
          <h2 className="mt-[12px] font-bold leading-[1.12]" style={{ fontSize: 'clamp(32px,4vw,52px)', color: '#090F3B', textWrap: 'balance' }}>
            Yang Sudah Dikonfirmasi untuk Perjalanan Anda
          </h2>
          <p className="mt-[16px] max-w-[600px] text-[16px] leading-[1.7]" style={{ color: '#5D5D76' }}>
            Kami menampilkan detail yang sudah tersedia agar keputusan Anda didasari informasi yang jelas.
          </p>
        </div>

        <div className="mt-[34px] grid grid-cols-1 gap-[12px] md:mt-[44px] md:grid-cols-2 md:gap-[16px]">
          <article className="rounded-lg p-[24px] md:p-[30px]" style={{ background: '#F7F6F2', border: '1px solid #E5DDCC' }}>
            <Check size={22} color="#8C661A" strokeWidth={1.7} />
            <h3 className="mt-[18px] text-[22px] font-bold" style={{ color: '#090F3B' }}>Sudah dikonfirmasi</h3>
            <ul className="mt-[18px] space-y-[13px]">
              {confirmed.map((item) => <li key={item} className="flex gap-[10px] text-[14px] leading-[1.6]" style={{ color: '#4B4F68' }}><Check className="mt-[3px] flex-none" size={15} color="#8C661A" />{item}</li>)}
            </ul>
          </article>
          <article className="rounded-lg p-[24px] md:p-[30px]" style={{ background: '#090F3B' }}>
            <CircleAlert size={22} color="#E2BC6C" strokeWidth={1.7} />
            <h3 className="mt-[18px] text-[22px] font-bold" style={{ color: '#fff' }}>Perlu dikonfirmasi</h3>
            <ul className="mt-[18px] space-y-[13px]">
              {toConfirm.map((item) => <li key={item} className="flex gap-[10px] text-[14px] leading-[1.6]" style={{ color: '#C5CBE5' }}><span className="mt-[9px] h-[5px] w-[5px] flex-none rounded-full" style={{ background: '#E2BC6C' }} />{item}</li>)}
            </ul>
            <a href={createWALink(message)} target="_blank" rel="noopener noreferrer" className="mt-[24px] inline-flex min-h-11 items-center justify-center rounded-lg px-[18px] py-[11px] text-[14px] font-bold no-underline" style={{ background: '#E2BC6C', color: '#090F3B' }}>
              Tanya Rincian Program
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
