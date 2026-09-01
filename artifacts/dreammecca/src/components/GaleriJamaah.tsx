import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';

interface GalleryPhoto {
  id: string;
  image_url: string;
  caption: string;
  sort_order: number;
  is_active: boolean;
}

function useGalleryPhotos() {
  return useQuery({
    queryKey: ['gallery-photos'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('gallery_photos')
        .select('*')
        .eq('is_active', true)
        .order('sort_order');
      if (error) throw error;
      return data as GalleryPhoto[];
    },
  });
}

export default function GaleriJamaah() {
  const { data } = useGalleryPhotos();
  const photos = data?.slice(0, 6) ?? [];

  // Only show published photos. The landing page must never invent jamaah documentation.
  if (photos.length === 0) return null;

  return (
    <section
      id="galeri-jamaah"
      className="px-[7vw] py-[72px] md:py-[128px]"
      style={{
        backgroundImage: 'linear-gradient(180deg, rgba(27,27,54,0.88), rgba(27,27,54,0.94)), url("/images/patterns/geometric-navy.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundColor: '#1B1B36',
      }}
    >
      <div className="max-w-[1180px] mx-auto">
        <span className="text-[12px] font-bold tracking-[0.14em] uppercase" style={{ color: '#E2BC6C' }}>
          Galeri Jamaah
        </span>
        <h2
          className="font-bold leading-[1.12] mt-[12px]"
          style={{ fontSize: 'clamp(34px,4vw,54px)', color: '#fff', textWrap: 'balance' }}
        >
          Mereka Sudah Berangkat Bersama Kami
        </h2>
        <p className="text-[17px] leading-[1.6] mt-[16px] max-w-[560px]" style={{ color: 'rgba(255,255,255,0.65)' }}>
          Dokumentasi asli jamaah Dreammecca, bukan foto stok.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-[10px] md:gap-[14px] mt-[32px] md:mt-[44px]">
          {photos.map(photo => (
            <div
              key={photo.id}
              className="rounded-lg overflow-hidden relative group"
              style={{ aspectRatio: '4/5', background: 'rgba(255,255,255,0.05)' }}
            >
              <img
                src={photo.image_url}
                alt={photo.caption}
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                loading="lazy"
              />
              <div
                className="absolute bottom-0 left-0 right-0 px-[12px] py-[10px]"
                style={{ background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.6))' }}
              >
                <span className="text-[11.5px] font-semibold" style={{ color: '#fff' }}>
                  {photo.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
