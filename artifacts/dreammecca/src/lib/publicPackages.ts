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
  { id: '7-des-eks-12', date: '2026-12-07', dateLabel: '7 Desember 2026', tier: 'Eksklusif', title: 'Umroh 12 Hari', duration: '12 Hari', airline: 'Qatar Airways', makkah: 'Pullman Zamzam ★5 atau setaraf', madinah: 'Ansr Golden Tulip ★4 atau setaraf', price: '44,9', poster: '/images/paket/7-desember-eksklusif-12-hari.png' },
  { id: '2-nov-eks', date: '2026-11-02', dateLabel: '2 November 2026', tier: 'Eksklusif', title: 'Umroh 9 Hari', duration: '9 Hari', airline: 'Garuda Indonesia', makkah: 'Pullman Zamzam ★5 atau setaraf', madinah: 'Ansr Golden Tulip ★4 atau setaraf', price: '42,9', poster: '/images/paket/2-november-eksklusif.png' },
  { id: '12-nov-eks-35', date: '2026-11-12', dateLabel: '12 November 2026', tier: 'Eksklusif', title: 'Umroh 9 Hari', duration: '9 Hari', airline: 'Maskapai dikonfirmasi admin', makkah: 'AS Suhadda Hotel', madinah: 'Detail hotel dikonfirmasi admin', price: '35', poster: '/images/paket/12-november-eksklusif-35.png' },
  { id: '12-nov-eks', date: '2026-11-12', dateLabel: '12 November 2026', tier: 'Eksklusif', title: 'Umroh 9 Hari', duration: '9 Hari', airline: 'Qatar Airways', makkah: 'Pullman Zamzam ★5 atau setaraf', madinah: 'Ansr Golden Tulip ★4 atau setaraf', price: '38,9', poster: '/images/paket/12-november-eksklusif.png' },
  { id: '6-okt-eks', date: '2026-10-06', dateLabel: '6 Oktober 2026', tier: 'Eksklusif', title: 'Umroh 10 Hari', duration: '10 Hari', airline: 'Garuda Indonesia', makkah: 'Pullman Zamzam ★5', madinah: 'Detail hotel dikonfirmasi admin', price: '39,9', poster: '/images/paket/6-oktober-eksklusif.png' },
  { id: '18-okt-eks', date: '2026-10-18', dateLabel: '18 Oktober 2026', tier: 'Eksklusif', title: 'Umroh 10 Hari', duration: '10 Hari', airline: 'Garuda Indonesia', makkah: 'Pullman Zamzam ★5', madinah: 'Detail hotel dikonfirmasi admin', price: '40,9', poster: '/images/paket/18-oktober-eksklusif.png' },
  { id: '23-sep-eks', date: '2026-09-23', dateLabel: '23 September 2026', tier: 'Eksklusif', title: 'Umroh 12 Hari', duration: '12 Hari', airline: 'Saudi Arabian Airlines', makkah: 'Pullman Zamzam ★5 atau setaraf', madinah: 'Ansr Golden Tulip ★4 atau setaraf', price: '38,9', poster: '/images/paket/23-september-eksklusif.png' },
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

type DatabasePackageWithDepartures = DatabasePackage & {
  departures?: DatabaseDeparture[];
};

function databaseTier(tier: DatabasePackage['tier']): PackageTier {
  return tier === 'Luxury' ? 'Eksklusif' : 'Ekonomis';
}

function databasePackagesToPublic(data: DatabasePackageWithDepartures[]): PublicPackage[] {
  const today = new Date().toISOString().slice(0, 10);

  return data.flatMap((pkg) => (pkg.departures ?? [])
    .filter((departure) => departure.is_active && (!departure.departure_date || departure.departure_date >= today))
    .map((departure) => ({
      id: `${pkg.id}-${departure.id}`,
      date: departure.departure_date ?? '',
      dateLabel: departure.date_label,
      tier: databaseTier(pkg.tier),
      title: pkg.title,
      duration: pkg.duration,
      airline: pkg.flight_type,
      makkah: pkg.hotel_mecca,
      madinah: pkg.hotel_madinah,
      price: new Intl.NumberFormat('id-ID', { maximumFractionDigits: 1 }).format(pkg.price_from / 1000000),
      featured: pkg.featured,
      poster: pkg.poster_url ?? undefined,
    })));
}

export function usePublishedPackages() {
  return useQuery({
    queryKey: ['published-packages'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('packages')
        .select('*, departures(*)')
        .eq('is_active', true)
        .order('sort_order');
      if (error) throw error;
      const mapped = databasePackagesToPublic((data ?? []) as DatabasePackageWithDepartures[]);
      return mapped.length ? mapped : publicPackages;
    },
    initialData: publicPackages,
    staleTime: 60_000,
  });
}
import { useQuery } from '@tanstack/react-query';
import { supabase, type Package as DatabasePackage, type Departure as DatabaseDeparture } from './supabase';
