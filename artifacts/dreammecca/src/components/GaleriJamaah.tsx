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

const fallbackPhotos = [
  { id: '1', image_url: '/images/galeri-jamaah/jamaah-1.jpg', caption: 'Kloter September 2025' },
  { id: '2', image_url: '/images/galeri-jamaah/jamaah-2.jpg', caption: 'Kloter Oktober 2025' },
  { id: '3', image_url: '/images/galeri-jamaah/jamaah-3.jpg', caption: 'Manasik Sebelum Berangkat' },
  { id: '4', image_url: '/images/galeri-jamaah/jamaah-4.jpg', caption: 'Tawaf di Masjidil Haram' },
  { id: '5', image_url: '/images/galeri-jamaah/jamaah-5.jpg', caption: 'Kloter November 2025' },
  { id: '6', image_url: '/images/galeri-jamaah/jamaah-6.jpg', caption: 'Ziarah Masjid Nabawi' },
  { id: '7', image_url: '/images/galeri-jamaah/jamaah-7.jpg', caption: 'Kloter Desember 2025' },
  { id: '8', image_url: '/images/galeri-jamaah/jamaah-8.jpg', caption: 'Kebersamaan di Tanah Suci' },
];

export default function GaleriJamaah() {
  const { data } = useGalleryPhotos();
  const photos = (data && data.length > 0) ? data : fallbackPhotos;

  return (
    <section
      id="galeri-jamaah"
      className="px-[7vw] py-[88px]"
      style={{
        backgroundImage: 'linear-gradient(180deg, rgba(27,27,54,0.88), rgba(27,27,54,0.94)), url("/images/patterns/geometric-navy.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundColor: '#1B1B36',
      }}
    >
      <div className="max-w-[1180px] mx-auto">
        <span className="text-[13px] font-bold tracking-[0.14em] uppercase" style={{ color: 'rgba(255,255,255,0.55)' }}>
          Galeri Jamaah
        </span>
        <h2
          className="font-bold leading-[1.15] mt-[10px]"
          style={{ fontSize: 'clamp(28px,3.6vw,42px)', color: '#fff' }}
        >
          Momen Ibadah Bersama Dreammecca
        </h2>
        <p className="text-[17px] leading-[1.6] mt-[16px] max-w-[560px]" style={{ color: 'rgba(255,255,255,0.65)' }}>
          Sebagian dokumentasi jamaah yang sudah berangkat bersama kami, dari manasik hingga tiba di Tanah Suci.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[14px] mt-[40px]">
          {photos.map(photo => (
            <div
              key={photo.id}
              className="rounded-xl overflow-hidden relative group"
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
