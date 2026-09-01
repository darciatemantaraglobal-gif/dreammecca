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

interface DocumentationPhoto {
  id: string;
  image_url: string;
  caption: string;
  className: string;
  position?: string;
}

const documentationPhotos: DocumentationPhoto[] = [
  {
    id: 'masjidil-haram',
    image_url: '/images/gallery-jamaah/jamaah-masjidil-haram.jpg',
    caption: 'Jamaah Dreammecca di Masjidil Haram',
    className: 'col-span-2 row-span-2 md:col-span-7 md:row-span-2',
    position: 'center 58%',
  },
  {
    id: 'payung-dreammecca',
    image_url: '/images/gallery-jamaah/jamaah-payung-dreammecca.jpg',
    caption: 'Perjalanan di Madinah bersama Dreammecca',
    className: 'col-span-1 row-span-1 md:col-span-5 md:row-span-1',
    position: 'center 50%',
  },
  {
    id: 'madinah',
    image_url: '/images/gallery-jamaah/jamaah-madinah.jpg',
    caption: 'Momen jamaah di Madinah',
    className: 'col-span-1 row-span-1 md:col-span-5 md:row-span-1',
    position: 'center center',
  },
  {
    id: 'pendampingan',
    image_url: '/images/gallery-jamaah/jamaah-pendampingan.jpg',
    caption: 'Pendampingan jamaah di Tanah Suci',
    className: 'col-span-1 row-span-1 md:col-span-4 md:row-span-1',
    position: 'center center',
  },
  {
    id: 'doa',
    image_url: '/images/gallery-jamaah/jamaah-doa.jpg',
    caption: 'Khusyuk menjalani ibadah',
    className: 'col-span-1 row-span-1 md:col-span-4 md:row-span-1',
    position: 'center center',
  },
  {
    id: 'keluarga',
    image_url: '/images/gallery-jamaah/jamaah-keluarga.jpg',
    caption: 'Perjalanan yang berkesan bersama keluarga',
    className: 'col-span-2 row-span-1 md:col-span-4 md:row-span-1',
    position: 'center center',
  },
];

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
  const publishedPhotos = data?.slice(0, 6) ?? [];
  const photos: DocumentationPhoto[] = publishedPhotos.length > 0
    ? publishedPhotos.map((photo, index) => ({
      ...documentationPhotos[index],
      id: photo.id,
      image_url: photo.image_url,
      caption: photo.caption,
    }))
    : documentationPhotos;

  return (
    <section
      id="galeri-jamaah"
      className="px-[7vw] py-[72px] md:py-[128px]"
      style={{
        backgroundImage: 'linear-gradient(180deg, rgba(9,15,59,0.97), rgba(9,15,59,0.92)), url("/images/patterns/geometric-navy.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundColor: '#090F3B',
      }}
    >
      <div className="max-w-[1180px] mx-auto">
        <span className="text-[12px] font-bold tracking-[0.14em] uppercase" style={{ color: '#E2BC6C' }}>
          Dokumentasi Jamaah
        </span>
        <div className="md:flex md:items-end md:justify-between md:gap-[40px]">
          <h2
            className="font-bold leading-[1.12] mt-[12px] max-w-[650px]"
            style={{ fontSize: 'clamp(34px,4vw,54px)', color: '#fff', textWrap: 'balance' }}
          >
            Momen Ibadah yang Kami Dampingi
          </h2>
          <p className="text-[16px] leading-[1.6] mt-[16px] md:mt-0 max-w-[340px]" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Dokumentasi asli perjalanan jamaah Dreammecca di Tanah Suci.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 auto-rows-[148px] md:auto-rows-[202px] gap-[10px] md:gap-[14px] mt-[32px] md:mt-[44px]">
          {photos.map(photo => (
            <a
              key={photo.id}
              href={photo.image_url}
              target="_blank"
              rel="noreferrer"
              className={`${photo.className} group relative overflow-hidden rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E2BC6C]`}
              aria-label={`Buka foto: ${photo.caption}`}
            >
              <img
                src={photo.image_url}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                style={{ objectPosition: photo.position }}
                loading="lazy"
              />
              <div
                className="absolute inset-x-0 bottom-0 px-[12px] py-[10px] md:px-[16px] md:py-[14px]"
                style={{ background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.76))' }}
              >
                <span className="text-[11.5px] md:text-[13px] font-semibold" style={{ color: '#fff' }}>
                  {photo.caption}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
