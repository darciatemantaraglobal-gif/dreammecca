import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';

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
    className: 'col-span-2 row-span-2 md:col-span-8 md:row-span-2',
    position: 'center 58%',
  },
  {
    id: 'payung-dreammecca',
    image_url: '/images/gallery-jamaah/jamaah-payung-dreammecca.jpg',
    caption: 'Perjalanan di Madinah bersama Dreammecca',
    className: 'col-span-2 row-span-2 md:col-span-4 md:row-span-2',
    position: 'center 50%',
  },
  {
    id: 'doa',
    image_url: '/images/gallery-jamaah/jamaah-doa.jpg',
    caption: 'Khusyuk menjalani ibadah',
    className: 'col-span-1 row-span-2 md:col-span-4 md:row-span-2',
    position: 'center center',
  },
  {
    id: 'pendampingan',
    image_url: '/images/gallery-jamaah/jamaah-pendampingan.jpg',
    caption: 'Pendampingan jamaah di Tanah Suci',
    className: 'col-span-1 row-span-2 md:col-span-4 md:row-span-2',
    position: 'center center',
  },
  {
    id: 'madinah',
    image_url: '/images/gallery-jamaah/jamaah-madinah.jpg',
    caption: 'Momen jamaah di Madinah',
    className: 'col-span-2 row-span-2 md:col-span-4 md:row-span-2',
    position: 'center center',
  },
  {
    id: 'keluarga',
    image_url: '/images/gallery-jamaah/jamaah-keluarga.jpg',
    caption: 'Perjalanan yang berkesan bersama keluarga',
    className: 'col-span-2 row-span-2 md:col-span-12 md:row-span-2',
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
  const [selectedPhoto, setSelectedPhoto] = useState<DocumentationPhoto | null>(null);
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
      className="mobile-compact-section px-[7vw] py-[72px] md:py-[128px]"
      style={{
        background: '#fff',
      }}
    >
      <div className="max-w-[1180px] mx-auto">
        <span className="text-[12px] font-bold tracking-[0.14em] uppercase" style={{ color: '#C9ADA7' }}>
          Dokumentasi Jamaah
        </span>
        <div className="md:flex md:items-end md:justify-between md:gap-[40px]">
          <h2
            className="mobile-section-title font-bold leading-[1.12] mt-[12px] max-w-[650px]"
            style={{ fontSize: 'clamp(38px,5.4vw,72px)', color: '#090F3B', textWrap: 'balance' }}
          >
            Momen Ibadah yang Kami Dampingi
          </h2>
          <p className="text-[16px] leading-[1.6] mt-[16px] md:mt-0 max-w-[300px]" style={{ color: '#5D5D76' }}>
            Dokumentasi asli perjalanan jamaah Dreammecca di Tanah Suci.
          </p>
        </div>

        <div className="gallery-grid grid grid-cols-2 md:grid-cols-12 auto-rows-[148px] md:auto-rows-[190px] gap-[10px] md:gap-[14px] mt-[32px] md:mt-[48px]">
          {photos.map(photo => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setSelectedPhoto(photo)}
              className={`${photo.className} group relative overflow-hidden rounded-lg text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C9ADA7]`}
              aria-label={`Perbesar foto: ${photo.caption}`}
            >
              <img
                src={photo.image_url}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                style={{ objectPosition: photo.position }}
                loading="lazy"
              />
              <div
                className="absolute inset-x-0 bottom-0 px-[12px] py-[10px] md:px-[16px] md:py-[14px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                style={{ background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.76))' }}
              >
                <span className="text-[11.5px] md:text-[13px] font-semibold" style={{ color: '#fff' }}>
                  {photo.caption}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={selectedPhoto !== null} onOpenChange={(open) => !open && setSelectedPhoto(null)}>
        <DialogContent className="w-[min(92vw,1100px)] max-w-none max-h-[90dvh] overflow-visible border-0 bg-transparent p-0 shadow-none [&>button]:-right-3 [&>button]:-top-3 [&>button]:rounded-full [&>button]:bg-white [&>button]:p-2 [&>button]:text-[#090F3B] [&>button]:opacity-100 [&>button]:shadow-lg [&>button]:focus-visible:ring-[#C9ADA7]">
          <DialogTitle className="sr-only">{selectedPhoto?.caption ?? 'Foto dokumentasi jamaah'}</DialogTitle>
          {selectedPhoto && (
            <figure className="relative max-h-[90dvh] overflow-hidden rounded-lg bg-[#090F3B]">
              <img
                src={selectedPhoto.image_url}
                alt={selectedPhoto.caption}
                className="max-h-[90dvh] w-full object-contain"
              />
              <figcaption className="absolute inset-x-0 bottom-0 px-[16px] py-[14px] text-[13px]" style={{ background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.78))', color: '#fff' }}>
                {selectedPhoto.caption}
              </figcaption>
            </figure>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
