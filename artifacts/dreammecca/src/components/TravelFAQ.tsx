import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Bagaimana cara memilih program yang sesuai?',
    answer: 'Bandingkan durasi, maskapai, hotel, dan harga pada kartu jadwal. Admin akan membantu menjelaskan pilihan yang paling sesuai dengan rencana keberangkatan Anda.',
  },
  {
    question: 'Dokumen apa yang perlu disiapkan?',
    answer: 'Paspor asli yang masih berlaku minimal 10 bulan, fotokopi KTP dan KK, buku nikah bagi pasangan, pas foto 4x6 terbaru, serta sertifikat vaksin meningitis.',
  },
  {
    question: 'Apakah vaksin meningitis diperlukan?',
    answer: 'Ya. Vaksin meningitis merupakan persyaratan perjalanan. Biayanya berada di luar harga paket dan menjadi tanggungan jamaah.',
  },
  {
    question: 'Apakah ada pendampingan selama perjalanan?',
    answer: 'Setiap perjalanan mendapat pembimbing yang mendampingi jamaah dari keberangkatan hingga kepulangan, termasuk pembekalan manasik sebelum berangkat.',
  },
  {
    question: 'Bagaimana mengetahui detail hotel dan penerbangan?',
    answer: 'Detail hotel Makkah, hotel Madinah, maskapai, dan tanggal keberangkatan dicantumkan pada setiap kartu program. Silakan hubungi admin untuk penjelasan sebelum mendaftar.',
  },
];

export default function TravelFAQ() {
  const [openItem, setOpenItem] = useState<number | null>(0);

  return (
    <section id="faq" className="px-[7vw] py-[72px] md:py-[112px]" style={{ background: '#F7F6F2' }}>
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-[32px] md:grid-cols-[0.75fr_1.25fr] md:gap-[90px]">
        <div>
          <span className="text-[12px] font-bold tracking-[0.14em] uppercase" style={{ color: '#8C661A' }}>FAQ</span>
          <h2 className="mt-[12px] font-bold leading-[1.12]" style={{ fontSize: 'clamp(32px,4vw,52px)', color: '#090F3B', textWrap: 'balance' }}>
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <p className="mt-[16px] max-w-[390px] text-[16px] leading-[1.7]" style={{ color: '#5D5D76' }}>
            Informasi awal sebelum Anda menentukan jadwal perjalanan.
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(9,15,59,0.16)' }}>
          {faqs.map((faq, index) => {
            const isOpen = openItem === index;
            return (
              <div key={faq.question} style={{ borderBottom: '1px solid rgba(9,15,59,0.16)' }}>
                <button type="button" onClick={() => setOpenItem(isOpen ? null : index)} aria-expanded={isOpen} className="flex min-h-16 w-full items-center justify-between gap-[20px] py-[18px] text-left" style={{ color: '#090F3B' }}>
                  <span className="text-[16px] font-semibold leading-[1.35]">{faq.question}</span>
                  <ChevronDown size={20} className="flex-none transition-transform duration-200" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                </button>
                {isOpen && <p className="max-w-[640px] pb-[20px] text-[15px] leading-[1.7]" style={{ color: '#5D5D76' }}>{faq.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
