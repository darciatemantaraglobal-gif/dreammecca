import React from 'react';

const photos = [
  { slug: 'jamaah-1', caption: 'Kloter September 2025' },
  { slug: 'jamaah-2', caption: 'Kloter Oktober 2025' },
  { slug: 'jamaah-3', caption: 'Manasik Sebelum Berangkat' },
  { slug: 'jamaah-4', caption: 'Tawaf di Masjidil Haram' },
  { slug: 'jamaah-5', caption: 'Kloter November 2025' },
  { slug: 'jamaah-6', caption: 'Ziarah Masjid Nabawi' },
  { slug: 'jamaah-7', caption: 'Kloter Desember 2025' },
  { slug: 'jamaah-8', caption: 'Kebersamaan di Tanah Suci' },
];

export default function GaleriJamaah() {
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
              key={photo.slug}
              className="rounded-xl overflow-hidden relative group"
              style={{ aspectRatio: '4/5', background: 'rgba(255,255,255,0.05)' }}
            >
              <img
                src={`/images/galeri-jamaah/${photo.slug}.jpg`}
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
