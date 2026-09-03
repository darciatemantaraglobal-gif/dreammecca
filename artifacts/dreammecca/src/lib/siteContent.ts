import { useQuery } from '@tanstack/react-query';
import { supabase } from './supabase';

export type ContentItem = { title: string; detail: string; image?: string; position?: string; icon?: string };
export type FaqItem = { question: string; answer: string };

export type SiteContent = {
  hero: { label: string; titleFirst: string; titleSecond: string; description: string; videoUrl: string; posterUrl: string };
  about: { eyebrow: string; title: string; paragraphs: string[]; features: ContentItem[]; imageUrl: string; imageAlt: string; caption: string };
  facilities: { eyebrow: string; title: string; intro: string; items: ContentItem[] };
  equipment: { eyebrow: string; title: string; body: string; imageUrl: string; imageAlt: string };
  promo: { endsAt: string; eyebrow: string; title: string; body: string; offers: ContentItem[] };
  details: { eyebrow: string; title: string; body: string; confirmed: string[]; toConfirm: string[] };
  faq: { eyebrow: string; title: string; body: string; items: FaqItem[] };
  contact: { eyebrow: string; title: string; body: string; officeLabel: string; address: string; mapEmbedUrl: string };
  footer: { companyName: string; description: string; email: string; instagramLabel: string; year: string };
  navigation: Array<{ label: string; href: string }>;
};

export const fallbackSiteContent: SiteContent = {
  hero: {
    label: 'Dreammecca Tour & Travel',
    titleFirst: 'Perjalanan Ibadah',
    titleSecond: 'Penuh Berkah',
    description: '“Ikutkanlah umroh kepada haji, karena keduanya menghilangkan kemiskinan dan dosa-dosa sebagaimana pembakaran menghilangkan karat pada besi, emas, dan perak. Sementara tidak ada pahala bagi haji yang mabrur kecuali surga.” (HR. An Nasai, Tirmidzi dan Ahmad)',
    videoUrl: '/videos/hero-1.mp4',
    posterUrl: '/images/hero.jpg',
  },
  about: {
    eyebrow: 'Mengapa Memilih Dreammecca',
    title: 'Perjalanan Ibadah yang Lebih Tenang dan Tertata',
    paragraphs: [
      'Dreammecca mendampingi perjalanan umroh dan wisata halal, dari persiapan manasik hingga kepulangan. Kami menata setiap tahap perjalanan dengan informasi yang jelas dan perhatian pada kenyamanan jamaah.',
      'Kami percaya perjalanan ibadah yang tenang dimulai dari pendampingan yang dekat, komunikasi yang responsif, dan pelayanan yang tertata.',
    ],
    features: [
      { title: 'Resmi', detail: 'Berizin dan terdaftar' },
      { title: 'Terarah', detail: 'Informasi program jelas' },
      { title: 'Mendampingi', detail: 'Dari manasik sampai pulang' },
    ],
    imageUrl: '/images/gallery-jamaah/jamaah-pendampingan.jpg',
    imageAlt: 'Pembimbing Dreammecca mendampingi jamaah di Tanah Suci',
    caption: 'Pendampingan Jamaah Dreammecca',
  },
  facilities: {
    eyebrow: 'Fasilitas Lengkap',
    title: 'Setiap Perjalanan Disiapkan dengan Penuh Perhatian',
    intro: 'Pilih layanan untuk melihat bagaimana Dreammecca menjaga kenyamanan jamaah sejak persiapan hingga kembali ke Tanah Air.',
    items: [
      { icon: 'BadgeCheck', title: 'Penyelenggara Resmi', detail: 'Berizin Kemenag dan terdaftar SISKOPATUH untuk perjalanan ibadah yang lebih tenang.', image: '/images/gallery-jamaah/jamaah-masjidil-haram.jpg', position: 'center 58%' },
      { icon: 'Plane', title: 'Maskapai Internasional', detail: 'Pilihan penerbangan Garuda Indonesia dan Qatar Airways sesuai jadwal program.', image: '/images/gallery-jamaah/jamaah-payung-dreammecca.jpg', position: 'center 50%' },
      { icon: 'BedDouble', title: 'Hotel Bintang 4 & 5', detail: 'Akomodasi Makkah dan Madinah yang dipilih untuk kenyamanan waktu istirahat jamaah.', image: '/images/gallery-jamaah/jamaah-madinah.jpg', position: 'center center' },
      { icon: 'BusFront', title: 'Transportasi Bus Terbaru', detail: 'Mobilitas perjalanan di Tanah Suci menggunakan bus ber-AC yang nyaman.', image: '/images/gallery-jamaah/jamaah-keluarga.jpg', position: 'center center' },
      { icon: 'BookOpenCheck', title: 'Manasik Eksklusif', detail: 'Pembekalan sebelum berangkat dengan bimbingan yang jelas dan sesuai sunnah.', image: '/images/gallery-jamaah/jamaah-doa.jpg', position: 'center center' },
      { icon: 'Luggage', title: 'Perlengkapan Eksklusif', detail: 'Kebutuhan perjalanan disiapkan lebih awal agar jamaah dapat fokus beribadah.', image: '/images/gallery-jamaah/jamaah-pendampingan.jpg', position: 'center center' },
      { icon: 'ShieldCheck', title: 'Persiapan Keberangkatan', detail: 'Jamaah berkumpul dan dipersiapkan dengan nyaman sebelum menuju bandara.', image: '/images/hero.jpg', position: 'center 64%' },
      { icon: 'UsersRound', title: 'Full Bimbingan', detail: 'Pembimbing mendampingi perjalanan dari manasik, keberangkatan, hingga kepulangan.', image: '/images/gallery-jamaah/jamaah-pendampingan.jpg', position: 'center center' },
      { icon: 'TrainFront', title: 'Kereta Cepat Haramain', detail: 'Makkah ke Madinah pulang pergi sudah termasuk dalam program yang tersedia.', image: '/images/gallery-jamaah/jamaah-madinah.jpg', position: 'center center' },
    ],
  },
  equipment: { eyebrow: 'Perlengkapan Eksklusif', title: 'Semua yang Anda butuhkan, sudah kami siapkan', body: 'Tim kami menyiapkan kebutuhan perjalanan sebelum keberangkatan agar Anda dapat fokus pada persiapan ibadah.', imageUrl: '/images/perlengkapan/perlengkapan-dreammecca.png', imageAlt: 'Perlengkapan umroh eksklusif Dreammecca' },
  promo: { endsAt: '2026-10-22T23:59:59+07:00', eyebrow: 'Penawaran saat ini', title: 'Potongan Harga yang Berlaku', body: 'Kedua potongan dapat digabung dengan maksimum Rp2 juta per jamaah.', offers: [{ icon: 'CalendarDays', title: 'Early Bird', detail: 'Daftar dan membayar DP sebelum 22 Oktober 2026.', image: 'Rp1 juta' }, { icon: 'UsersRound', title: 'Keluarga', detail: 'Per jamaah untuk empat orang atau lebih dalam satu keluarga.', image: 'Rp1 juta' }] },
  details: { eyebrow: 'Transparansi program', title: 'Yang Sudah Dikonfirmasi untuk Perjalanan Anda', body: 'Kami menampilkan detail yang sudah tersedia agar keputusan Anda didasari informasi yang jelas.', confirmed: ['Tanggal keberangkatan, maskapai, hotel, dan harga tampil pada setiap kartu program.', 'Program Desember mencantumkan Kereta Cepat Haramain.', 'Manasik dan pendampingan penuh tercantum sebagai fasilitas perjalanan.'], toConfirm: ['Rincian isi perlengkapan untuk tier Ekonomis dan Eksklusif sedang disiapkan.', 'Nominal DP dan batas pelunasan dijelaskan oleh admin sebelum pendaftaran.', 'Biaya vaksin meningitis berada di luar harga paket.'] },
  faq: { eyebrow: 'FAQ', title: 'Pertanyaan yang Sering Ditanyakan', body: 'Informasi awal sebelum Anda menentukan jadwal perjalanan.', items: [{ question: 'Bagaimana cara memilih program yang sesuai?', answer: 'Bandingkan durasi, maskapai, hotel, dan harga pada kartu jadwal. Admin akan membantu menjelaskan pilihan yang paling sesuai dengan rencana keberangkatan Anda.' }, { question: 'Dokumen apa yang perlu disiapkan?', answer: 'Paspor asli yang masih berlaku minimal 10 bulan, fotokopi KTP dan KK, buku nikah bagi pasangan, pas foto 4x6 terbaru, serta sertifikat vaksin meningitis.' }, { question: 'Apakah vaksin meningitis diperlukan?', answer: 'Ya. Vaksin meningitis merupakan persyaratan perjalanan. Biayanya berada di luar harga paket dan menjadi tanggungan jamaah.' }, { question: 'Apakah ada pendampingan selama perjalanan?', answer: 'Setiap perjalanan mendapat pembimbing yang mendampingi jamaah dari keberangkatan hingga kepulangan, termasuk pembekalan manasik sebelum berangkat.' }, { question: 'Bagaimana mengetahui detail hotel dan penerbangan?', answer: 'Detail hotel Makkah, hotel Madinah, maskapai, dan tanggal keberangkatan dicantumkan pada setiap kartu program. Silakan hubungi admin untuk penjelasan sebelum mendaftar.' }] },
  contact: { eyebrow: 'Kantor & Lokasi', title: 'Dreammecca Tour & Travel', body: 'Kantor Pusat Jakarta, silakan datang dan verifikasi langsung.', officeLabel: 'Kantor pusat Dreammecca', address: 'Jl. Durian 9A No. 6, RT.6/RW.4, Jagakarsa, Kec. Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12620', mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d963!2d106.8161577!3d-6.3258532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eff5c7266bef%3A0xb73cb09e14d15d7e!2sDreammecca+Tour+%26+Travel!5e0!3m2!1sid!2sid!4v1751605200000' },
  footer: { companyName: 'PT Dream Mecca International', description: 'Teman perjalanan umroh dan wisata halal Anda, dari manasik sampai pulang.', email: 'dreammecca@gmail.com', instagramLabel: '@dreammecca.id', year: '2026' },
  navigation: [{ label: 'Tentang', href: '#tentang' }, { label: 'Fasilitas', href: '#fasilitas' }, { label: 'Paket Umroh', href: '#paket' }, { label: 'Perlengkapan', href: '#perlengkapan' }, { label: 'Kontak', href: '#kontak' }],
};

function mergeContent(stored?: Partial<SiteContent>): SiteContent {
  if (!stored) return fallbackSiteContent;
  return {
    ...fallbackSiteContent,
    ...stored,
    hero: { ...fallbackSiteContent.hero, ...stored.hero },
    about: { ...fallbackSiteContent.about, ...stored.about },
    facilities: { ...fallbackSiteContent.facilities, ...stored.facilities },
    equipment: { ...fallbackSiteContent.equipment, ...stored.equipment },
    promo: { ...fallbackSiteContent.promo, ...stored.promo },
    details: { ...fallbackSiteContent.details, ...stored.details },
    faq: { ...fallbackSiteContent.faq, ...stored.faq },
    contact: { ...fallbackSiteContent.contact, ...stored.contact },
    footer: { ...fallbackSiteContent.footer, ...stored.footer },
  };
}

export function useSiteContent() {
  return useQuery({
    queryKey: ['site-content'],
    queryFn: async () => {
      const { data, error } = await supabase.from('site_content').select('content').eq('id', 1).maybeSingle();
      if (error) throw error;
      return mergeContent(data?.content as Partial<SiteContent> | undefined);
    },
    initialData: fallbackSiteContent,
    staleTime: 60_000,
  });
}
