import React from 'react';
import { createWALink, DEFAULT_MESSAGE } from '@/lib/whatsapp';

const sections = [
  {
    title: 'Pembiayaan & Pelunasan',
    content: [
      'Pendaftaran disertai uang muka (DP) sebesar Rp 10.000.000 per jamaah.',
      'Pelunasan wajib dilakukan paling lambat 30–35 hari sebelum tanggal keberangkatan (H-30).',
      'Pembayaran dapat dilakukan via transfer bank ke rekening resmi Dreammecca yang diberikan setelah konsultasi.',
      'Bukti transfer wajib dikirimkan kepada tim Dreammecca sebagai konfirmasi pembayaran.',
    ],
  },
  {
    title: 'Penerbangan & Transportasi',
    content: [
      'Penerbangan menggunakan maskapai berstandar internasional: Saudia Airlines, Garuda Indonesia, Emirates, Etihad Airways, Qatar Airways, atau Turkish Airlines, sesuai ketersediaan dan paket yang dipilih.',
      'Jadwal penerbangan dapat berubah sesuai kebijakan maskapai. Dreammecca tidak bertanggung jawab atas keterlambatan, pembatalan, atau perubahan jadwal yang dikeluarkan oleh pihak maskapai.',
      'Transportasi darat di Arab Saudi menggunakan bus ber-AC bersama penyedia terpercaya dan berlisensi.',
      'Bagasi mengikuti ketentuan masing-masing maskapai. Kelebihan bagasi menjadi tanggung jawab jamaah.',
    ],
  },
  {
    title: 'Ketentuan Pembatalan',
    content: [
      'Pembatalan lebih dari 60 hari sebelum keberangkatan: biaya administrasi Rp 500.000.',
      'Pembatalan 45–60 hari sebelum keberangkatan: 25% dari harga paket.',
      'Pembatalan 30–44 hari sebelum keberangkatan: 50% dari harga paket.',
      'Pembatalan 15–29 hari sebelum keberangkatan: 75% dari harga paket.',
      'Pembatalan kurang dari 15 hari sebelum keberangkatan: 100% dari harga paket (tidak ada pengembalian dana).',
      'Semua permintaan pembatalan wajib disampaikan secara tertulis kepada tim Dreammecca.',
    ],
  },
  {
    title: 'Ketentuan Reschedule',
    content: [
      'Permohonan reschedule tanggal atau program dapat diajukan minimal 40 hari sebelum keberangkatan.',
      'Reschedule dikenakan biaya administrasi sesuai kebijakan yang berlaku saat pengajuan.',
      'Selisih harga paket (jika ada) antara paket lama dan baru menjadi tanggung jawab jamaah.',
      'Dreammecca tidak menjamin ketersediaan kursi pada tanggal/program yang diinginkan.',
    ],
  },
  {
    title: 'Force Majeure',
    content: [
      'Dreammecca tidak bertanggung jawab atas kerugian yang timbul akibat kejadian di luar kendali perusahaan, termasuk namun tidak terbatas pada: bencana alam, pandemi, perang, kerusuhan, kebijakan pemerintah Arab Saudi, penutupan Masjidil Haram/Masjid Nabawi, atau pembatalan visa massal oleh otoritas Arab Saudi.',
      'Dalam kondisi force majeure, Dreammecca akan berupaya semaksimal mungkin untuk menjadwalkan ulang keberangkatan atau memberikan solusi terbaik bagi jamaah.',
    ],
  },
  {
    title: 'Kondisi Lapangan',
    content: [
      'Program perjalanan dapat mengalami penyesuaian di lapangan sesuai situasi dan kondisi di Arab Saudi, termasuk kepadatan jamaah, cuaca, atau kebijakan otoritas setempat.',
      'Pembimbing/muthawif berhak mengambil keputusan di lapangan demi keselamatan dan kelancaran ibadah seluruh jamaah.',
      'Dreammecca tidak bertanggung jawab atas barang bawaan jamaah yang hilang atau rusak selama perjalanan.',
    ],
  },
  {
    title: 'Ketentuan Dokumen',
    content: [
      'Paspor harus berlaku minimal 10 bulan sebelum masa kedaluwarsa, dengan minimal 2 suku kata pada nama.',
      'Dokumen yang diperlukan: paspor asli, fotokopi KTP & KK, buku nikah (bagi pasangan), pas foto 4x6 terbaru, dan sertifikat vaksin meningitis.',
      'Biaya vaksin meningitis tidak termasuk dalam harga paket dan menjadi tanggung jawab jamaah.',
      'Dreammecca tidak bertanggung jawab atas penolakan visa akibat dokumen yang tidak lengkap atau tidak memenuhi syarat.',
    ],
  },
  {
    title: 'Ketentuan Umum',
    content: [
      'Jamaah wajib mengikuti seluruh rangkaian manasik yang diadakan Dreammecca sebelum keberangkatan.',
      'Jamaah wajib mematuhi tata tertib dan peraturan yang ditetapkan oleh pembimbing selama perjalanan.',
      'Dreammecca berhak menolak atau membatalkan keikutsertaan jamaah yang terbukti melanggar tata tertib secara serius tanpa pengembalian dana.',
      'Syarat dan ketentuan ini dapat berubah sewaktu-waktu. Versi terbaru selalu berlaku dan akan dikomunikasikan kepada jamaah terdaftar.',
      'Dengan melakukan pendaftaran dan pembayaran DP, jamaah dianggap telah membaca, memahami, dan menyetujui seluruh syarat dan ketentuan ini.',
    ],
  },
];

export default function SyaratKetentuan() {
  const waLink = createWALink(DEFAULT_MESSAGE);

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ background: '#1B1B36' }} className="px-[7vw] py-[56px]">
        <div className="max-w-[820px] mx-auto">
          <a
            href="/"
            className="text-[13px] font-semibold no-underline hover:opacity-80 transition-opacity"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            ← Kembali ke Beranda
          </a>
          <h1
            className="font-bold text-white mt-[20px] leading-[1.15]"
            style={{ fontSize: 'clamp(28px,3.6vw,42px)' }}
          >
            Syarat &amp; Ketentuan
          </h1>
          <p className="text-[16px] mt-[12px] leading-[1.6]" style={{ color: 'rgba(255,255,255,0.66)' }}>
            PT. Dream Mecca International, berlaku untuk seluruh paket perjalanan ibadah Umroh Dreammecca.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-[7vw] py-[64px]">
        <div className="max-w-[820px] mx-auto flex flex-col gap-[44px]">
          {sections.map(section => (
            <div key={section.title}>
              <h2
                className="font-bold text-[20px] mb-[16px] pb-[12px]"
                style={{ color: '#1B1B36', borderBottom: '2px solid rgba(27,27,54,0.10)' }}
              >
                {section.title}
              </h2>
              <ul className="flex flex-col gap-[10px]">
                {section.content.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[15px] leading-[1.65]" style={{ color: '#4B4B6B' }}>
                    <span className="flex-none mt-[6px] w-[6px] h-[6px] rounded-full bg-[#1B1B36] opacity-40" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA */}
          <div
            className="rounded-xl p-[32px] mt-[8px]"
            style={{ background: '#F4F4F7' }}
          >
            <h3 className="font-bold text-[18px]" style={{ color: '#1B1B36' }}>
              Ada pertanyaan tentang syarat & ketentuan?
            </h3>
            <p className="text-[15px] mt-[8px] leading-[1.6]" style={{ color: '#6B6B85' }}>
              Tim Dreammecca siap menjelaskan secara detail sebelum Anda mendaftar. Konsultasi gratis, tanpa tekanan.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-bold text-[15px] px-[24px] py-[14px] rounded-lg mt-[20px] no-underline hover:opacity-[0.88] transition-opacity"
              style={{ background: '#1B1B36', color: '#fff' }}
            >
              Tanya via WhatsApp
            </a>
          </div>

          <p className="text-[13px] text-center" style={{ color: '#9B9BB5' }}>
            Dokumen ini terakhir diperbarui: Juli 2026
          </p>
        </div>
      </div>
    </div>
  );
}
