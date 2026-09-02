export type PackageTier = 'Ekonomis' | 'Eksklusif';

export type PublicPackage = {
  id: string;
  date: string;
  dateLabel: string;
  tier: PackageTier;
  title: string;
  duration: string;
  airline: string;
  makkah: string;
  madinah: string;
  price: string;
  featured?: boolean;
  poster?: string;
};

export const publicPackages: PublicPackage[] = [
  { id: '9-des-eko', date: '2026-12-09', dateLabel: '9 Desember 2026', tier: 'Ekonomis', title: 'Umroh 12 Hari', duration: '12 Hari', airline: 'Qatar Airways', makkah: 'Royal Majestic ★4', madinah: 'Ansr Golden Tulip ★4 atau setaraf', price: '36,9', featured: true, poster: '/images/paket/9-desember-ekonomi.png' },
  { id: '9-des-eks', date: '2026-12-09', dateLabel: '9 Desember 2026', tier: 'Eksklusif', title: 'Umroh 12 Hari', duration: '12 Hari', airline: 'Qatar Airways', makkah: 'Pullman Zamzam ★5', madinah: 'Ansr Golden Tulip ★4 atau setaraf', price: '44,9' },
  { id: '7-des-eko', date: '2026-12-07', dateLabel: '7 Desember 2026', tier: 'Ekonomis', title: 'Umroh 9 Hari', duration: '9 Hari', airline: 'Garuda Indonesia', makkah: 'Royal Majestic ★4', madinah: 'Ansr Golden Tulip ★4 atau setaraf', price: '36,9', poster: '/images/paket/7-desember-ekonomi.png' },
  { id: '7-des-eks', date: '2026-12-07', dateLabel: '7 Desember 2026', tier: 'Eksklusif', title: 'Umroh 9 Hari', duration: '9 Hari', airline: 'Garuda Indonesia', makkah: 'Pullman Zamzam ★5', madinah: 'Ansr Golden Tulip ★4 atau setaraf', price: '42,9', poster: '/images/paket/7-desember-eksklusif.png' },
  { id: '12-des-eko', date: '2026-12-12', dateLabel: '12 Desember 2026', tier: 'Ekonomis', title: 'Umroh 9 Hari', duration: '9 Hari', airline: 'Qatar Airways', makkah: 'Royal Majestic ★4', madinah: 'Ansr Golden Tulip ★4 atau setaraf', price: '36,9', poster: '/images/paket/12-desember-ekonomi.png' },
  { id: '12-des-eks', date: '2026-12-12', dateLabel: '12 Desember 2026', tier: 'Eksklusif', title: 'Umroh 9 Hari', duration: '9 Hari', airline: 'Qatar Airways', makkah: 'Pullman Zamzam ★5', madinah: 'Ansr Golden Tulip ★4 atau setaraf', price: '39,9', poster: '/images/paket/12-desember-eksklusif.png' },
  { id: '15-des-eko', date: '2026-12-15', dateLabel: '15 Desember 2026', tier: 'Ekonomis', title: 'Umroh 9 Hari', duration: '9 Hari', airline: 'Qatar Airways', makkah: 'Royal Majestic ★4', madinah: 'Ansr Golden Tulip ★4 atau setaraf', price: '36,9', poster: '/images/paket/15-desember-ekonomi.png' },
  { id: '15-des-eks', date: '2026-12-15', dateLabel: '15 Desember 2026', tier: 'Eksklusif', title: 'Umroh 9 Hari', duration: '9 Hari', airline: 'Qatar Airways', makkah: 'Pullman Zamzam ★5', madinah: 'Ansr Golden Tulip ★4 atau setaraf', price: '41,9', poster: '/images/paket/15-desember-eksklusif.png' },
  { id: '19-des-eko', date: '2026-12-19', dateLabel: '19 Desember 2026', tier: 'Ekonomis', title: 'Umroh 9 Hari', duration: '9 Hari', airline: 'Qatar Airways', makkah: 'Royal Majestic ★4', madinah: 'Ansr Golden Tulip ★4 atau setaraf', price: '37,9', poster: '/images/paket/19-desember-ekonomi.png' },
  { id: '19-des-eks', date: '2026-12-19', dateLabel: '19 Desember 2026', tier: 'Eksklusif', title: 'Umroh 9 Hari', duration: '9 Hari', airline: 'Qatar Airways', makkah: 'Pullman Zamzam ★5', madinah: 'Ansr Golden Tulip ★4 atau setaraf', price: '45,9', poster: '/images/paket/19-desember-eksklusif.png' },
];

const visuals: Record<string, { image: string; position: string }> = {
  '2026-12-07': { image: '/images/gallery-jamaah/jamaah-payung-dreammecca.jpg', position: 'center 48%' },
  '2026-12-09': { image: '/images/gallery-jamaah/jamaah-masjidil-haram.jpg', position: 'center 57%' },
  '2026-12-12': { image: '/images/gallery-jamaah/jamaah-madinah.jpg', position: 'center center' },
  '2026-12-15': { image: '/images/gallery-jamaah/jamaah-pendampingan.jpg', position: 'center center' },
  '2026-12-19': { image: '/images/gallery-jamaah/jamaah-keluarga.jpg', position: 'center center' },
};

export function packageVisual(date: string) {
  return visuals[date] ?? visuals['2026-12-09'];
}

export function packageWhatsAppMessage(pkg: PublicPackage) {
  return `Assalamu'alaikum, saya mau tanya program ${pkg.title} ${pkg.tier}, keberangkatan ${pkg.dateLabel} (Rp${pkg.price} juta).\n\nNama:\nKota:\nJumlah jamaah:`;
}
