import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';

export interface SiteSettings {
  id: number;
  whatsapp_number: string;
  address: string;
  instagram_url: string;
  facebook_url: string;
  youtube_url: string;
  updated_at: string;
}

export function useSiteSettings() {
  return useQuery({
    queryKey: ['site-settings'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('site_settings')
        .select('*')
        .eq('id', 1)
        .single();
      if (error) throw error;
      return data as SiteSettings;
    },
    staleTime: 5 * 60 * 1000,
  });
}
