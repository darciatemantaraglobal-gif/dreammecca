import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL || 'https://pdvvaeuluymsdroojzyp.supabase.co';
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkdnZhZXVsdXltc2Ryb29qenlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg0MTg4NTEsImV4cCI6MjEwMzk5NDg1MX0.oTqVXmrVF7eFh5_h_XR636NPfq8pUbKXprDYnUk45MM';

export const supabase = createClient(url, anonKey);

export interface Departure {
  id: string;
  package_id: string;
  date_label: string;
  departure_date?: string | null;
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
