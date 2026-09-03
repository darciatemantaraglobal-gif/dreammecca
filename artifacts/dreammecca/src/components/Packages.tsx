import React from 'react';
import { ArrowRight, CalendarDays, Clock3, Hotel, Plane } from 'lucide-react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { createWALink } from '@/lib/whatsapp';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { packageVisual, packageWhatsAppMessage, type PublicPackage, usePublishedPackages } from '@/lib/publicPackages';
import { useSiteSettings } from '@/lib/useSiteSettings';

function PackagePreviewCard({ pkg, whatsappNumber }: { pkg: PublicPackage; whatsappNumber?: string }) {
  const visual = packageVisual(pkg.date);
  const image = pkg.poster ?? visual.image;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg" style={{ background: '#fff', border: pkg.featured ? '1px solid #C9ADA7' : '1px solid rgba(9,15,59,0.12)', boxShadow: pkg.featured ? '0 14px 32px rgba(9,15,59,0.10)' : 'none' }}>
      <figure className={`relative overflow-hidden ${pkg.poster ? 'aspect-[4/5]' : 'aspect-[16/10]'}`} style={{ background: '#090F3B' }}>
        <img src={image} alt={pkg.poster ? `Poster ${pkg.title} ${pkg.tier}` : ''} className="h-full w-full object-cover" style={pkg.poster ? undefined : { objectPosition: visual.position }} loading="lazy" />
        {!pkg.poster && <><div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(9,15,59,0.02), rgba(9,15,59,0.50))' }} /><div className="absolute inset-x-[14px] top-[14px] flex justify-between gap-2"><span className="rounded-[6px] px-[8px] py-[4px] text-[10px] font-bold" style={{ background: '#090F3B', color: '#C9ADA7' }}>{pkg.tier}</span>{pkg.featured && <span className="rounded-[6px] px-[8px] py-[4px] text-[10px] font-bold" style={{ background: '#fff', color: '#090F3B' }}>Paling Untung</span>}</div></>}
      </figure>

      <div className="flex flex-1 flex-col p-[16px]">
        <p className="flex items-center gap-[6px] text-[12px]" style={{ color: '#5D5D76' }}><CalendarDays size={14} color="#C9ADA7" />{pkg.dateLabel}</p>
        <h3 className="mt-[8px] text-[20px] leading-[1.18]" style={{ color: '#090F3B', fontWeight: 700 }}>{pkg.title}</h3>
        <div className="mt-[14px] space-y-[7px] text-[12px] leading-[1.4]" style={{ color: '#4B4F68' }}>
          <p className="flex gap-[8px]"><Clock3 size={15} className="mt-[1px] flex-none" color="#C9ADA7" />{pkg.duration}</p>
          <p className="flex gap-[8px]"><Plane size={15} className="mt-[1px] flex-none" color="#C9ADA7" />{pkg.airline}</p>
          <p className="flex gap-[8px]"><Hotel size={15} className="mt-[1px] flex-none" color="#C9ADA7" />{pkg.makkah}</p>
        </div>
        <div className="mt-auto flex items-end justify-between gap-3 pt-[20px]">
          <p className="leading-none" style={{ color: '#090F3B', fontWeight: 700 }}><span className="text-[12px]">Rp</span> <span className="text-[30px]">{pkg.price}</span> <span className="text-[13px]">JT</span></p>
          <a href={createWALink(packageWhatsAppMessage(pkg), whatsappNumber)} target="_blank" rel="noopener noreferrer" className="inline-flex size-10 items-center justify-center rounded-[6px] no-underline" style={{ background: '#090F3B', color: '#fff' }} aria-label={`Tanya ${pkg.title} ${pkg.tier}`}><ArrowRight size={18} /></a>
        </div>
      </div>
    </article>
  );
}

export default function Packages() {
  const { data: packages = [] } = usePublishedPackages();
  const { data: settings } = useSiteSettings();
  const previewPackages = packages.filter((pkg) => pkg.date.startsWith('2026-12') && pkg.poster).slice(0, 4);

  return (
    <section id="paket" className="px-[7vw] py-[72px] md:py-[132px]" style={{ background: '#F7F6F2' }}>
      <div className="mx-auto max-w-[1180px]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="flex flex-col justify-between gap-[24px] md:flex-row md:items-end">
          <div className="max-w-[700px]">
            <span className="inline-flex rounded-[6px] px-[9px] py-[5px] text-[11px] font-bold tracking-[0.12em] uppercase" style={{ background: '#090F3B', color: '#C9ADA7' }}>Paket Desember 2026</span>
            <h2 className="mt-[14px] font-bold leading-[1.12]" style={{ fontSize: 'clamp(34px,4vw,54px)', color: '#090F3B', textWrap: 'balance' }}>Pilihan Program Umroh Terdekat</h2>
            <p className="mt-[14px] max-w-[620px] text-[16px] leading-[1.65]" style={{ color: '#5D5D76' }}>Empat program pilihan untuk keberangkatan Desember. Buka katalog untuk melihat semua jadwal dan kelas program yang tersedia.</p>
          </div>
          <Link href="/paket-umroh" className="inline-flex min-h-11 items-center justify-center gap-[9px] rounded-[6px] px-[20px] py-[12px] text-[14px] font-bold no-underline" style={{ background: '#090F3B', color: '#fff' }}>Buka Katalog Lengkap <ArrowRight size={17} /></Link>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer} className="mt-[32px] grid grid-cols-1 gap-[14px] sm:grid-cols-2 lg:grid-cols-4 lg:gap-[16px]">
          {previewPackages.map((pkg) => <motion.div key={pkg.id} variants={fadeUp}><PackagePreviewCard pkg={pkg} whatsappNumber={settings?.whatsapp_number} /></motion.div>)}
        </motion.div>
      </div>
    </section>
  );
}
