import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!url || !anonKey) {
  console.error('Supabase env vars belum diset. Cek VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY.');
}

export const supabase = createClient(url, anonKey);

export interface Departure {
  id: string;
  package_id: string;
  date_label: string;
  quota_label: string;
  is_active: boolean;
  sort_order: number;
}

export interface Package {
  id: string;
  slug: string;
  tier: 'Reguler' | 'Luxury';
  duration: string;
  title: string;
  hotel_mecca: string;
  hotel_madinah: string;
  flight_type: string;
  landing: string;
  tags: string[];
  price_from: number;
  poster_url: string | null;
  featured: boolean;
  is_active: boolean;
  sort_order: number;
  departures?: Departure[];
}
