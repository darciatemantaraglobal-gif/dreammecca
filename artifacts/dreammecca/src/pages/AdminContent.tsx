import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useQueryClient } from '@tanstack/react-query';
import { Save } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { fallbackSiteContent, useSiteContent, type SiteContent } from '@/lib/siteContent';
import { useAdminAuth } from '@/lib/useAdminAuth';

type SectionKey = keyof SiteContent;
type UnknownRecord = Record<string, unknown>;

const sections: Array<{ key: SectionKey; label: string; note: string }> = [
  { key: 'hero', label: 'Hero', note: 'Judul, deskripsi, video, dan gambar fallback.' },
  { key: 'about', label: 'Tentang', note: 'Copy, poin kepercayaan, serta media pendampingan.' },
  { key: 'facilities', label: 'Fasilitas', note: 'Judul section dan seluruh fasilitas yang ditampilkan.' },
  { key: 'equipment', label: 'Perlengkapan', note: 'Copy dan gambar perlengkapan.' },
  { key: 'promo', label: 'Promo', note: 'Tanggal berakhir dan daftar potongan harga.' },
  { key: 'details', label: 'Rincian Program', note: 'Informasi yang sudah dan perlu dikonfirmasi.' },
  { key: 'faq', label: 'FAQ', note: 'Pertanyaan dan jawaban yang tampil di landing page.' },
  { key: 'contact', label: 'Kantor & Lokasi', note: 'Alamat, copy kantor, dan Google Maps embed URL.' },
  { key: 'footer', label: 'Footer', note: 'Nama PT, email, Instagram label, dan tahun.' },
  { key: 'navigation', label: 'Navigasi', note: 'Label serta anchor menu header dan footer.' },
];

function labelFor(key: string) {
  return key.replace(/([A-Z])/g, ' $1').replace(/^./, (letter) => letter.toUpperCase());
}

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

function TextField({ name, value, onChange }: { name: string; value: string; onChange: (value: string) => void }) {
  const multiline = /description|body|paragraph|detail|answer|address|embed|video|poster|image|url/i.test(name) || value.length > 70;
  return <label className="block text-[12px] font-semibold" style={{ color: '#1B1B36' }}>{labelFor(name)}
    {multiline ? <textarea value={value} onChange={(event) => onChange(event.target.value)} rows={name === 'description' || name === 'body' ? 4 : 2} className="mt-1 w-full resize-y rounded-[6px] border px-3 py-2 text-[13px] font-normal" style={{ borderColor: 'rgba(27,27,54,0.16)' }} /> : <input value={value} onChange={(event) => onChange(event.target.value)} className="mt-1 w-full rounded-[6px] border px-3 py-2 text-[13px] font-normal" style={{ borderColor: 'rgba(27,27,54,0.16)' }} />}
  </label>;
}

function ValueEditor({ name, value, onChange }: { name: string; value: unknown; onChange: (value: unknown) => void }) {
  if (typeof value === 'string') return <TextField name={name} value={value} onChange={onChange} />;
  if (Array.isArray(value) && value.every((item) => typeof item === 'string')) {
    return <label className="block text-[12px] font-semibold" style={{ color: '#1B1B36' }}>{labelFor(name)}<textarea value={(value as string[]).join('\n')} onChange={(event) => onChange(event.target.value.split('\n').map((item) => item.trim()).filter(Boolean))} rows={Math.max(3, value.length + 1)} className="mt-1 w-full resize-y rounded-[6px] border px-3 py-2 text-[13px] font-normal" style={{ borderColor: 'rgba(27,27,54,0.16)' }} /></label>;
  }
  if (Array.isArray(value)) return <div className="space-y-3"><p className="text-[12px] font-semibold" style={{ color: '#1B1B36' }}>{labelFor(name)}</p>{value.map((item, index) => <div key={index} className="rounded-[6px] border p-3" style={{ borderColor: 'rgba(27,27,54,0.12)', background: '#F7F6F2' }}><ValueEditor name={`${name} ${index + 1}`} value={item} onChange={(next) => { const copy = [...value]; copy[index] = next; onChange(copy); }} /><button type="button" onClick={() => onChange(value.filter((_, itemIndex) => itemIndex !== index))} className="mt-3 text-[12px] font-semibold" style={{ color: '#B5442E' }}>Hapus item</button></div>)}<button type="button" onClick={() => { const first = value[0]; const next = first && typeof first === 'object' ? Object.fromEntries(Object.keys(first as UnknownRecord).map((key) => [key, ''])) : ''; onChange([...value, next]); }} className="rounded-[6px] border px-3 py-2 text-[12px] font-semibold" style={{ borderColor: 'rgba(27,27,54,0.18)', color: '#090F3B' }}>Tambah item</button></div>;
  if (value && typeof value === 'object') return <div className="grid gap-3 sm:grid-cols-2">{Object.entries(value as UnknownRecord).map(([key, child]) => <ValueEditor key={key} name={key} value={child} onChange={(next) => onChange({ ...(value as UnknownRecord), [key]: next })} />)}</div>;
  return <TextField name={name} value="" onChange={onChange} />;
}

export default function AdminContent() {
  const { isAuthenticated, isLoading } = useAdminAuth();
  const { data: initialContent } = useSiteContent();
  const [, navigate] = useLocation();
  const queryClient = useQueryClient();
  const [activeSection, setActiveSection] = useState<SectionKey>('hero');
  const [draft, setDraft] = useState<SiteContent>(fallbackSiteContent);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!isLoading && !isAuthenticated) navigate('/admin/login');
  }, [isAuthenticated, isLoading, navigate]);

  useEffect(() => {
    if (initialContent) setDraft(clone(initialContent));
  }, [initialContent]);

  const active = useMemo(() => sections.find((section) => section.key === activeSection)!, [activeSection]);

  async function save() {
    setSaving(true);
    setMessage('');
    const { error } = await supabase.from('site_content').upsert({ id: 1, content: draft, updated_at: new Date().toISOString() });
    setSaving(false);
    if (error) {
      setMessage('Gagal menyimpan konten. Coba lagi.');
      return;
    }
    queryClient.setQueryData(['site-content'], draft);
    setMessage('Perubahan tersimpan dan langsung dipakai di website.');
  }

  if (isLoading || !isAuthenticated) return <div className="p-8 text-center">Memuat...</div>;

  return <div className="min-h-screen px-[5vw] py-8" style={{ background: '#F4F4F7' }}>
    <div className="mx-auto max-w-[1180px]">
      <nav className="mb-8 flex flex-wrap gap-x-4 gap-y-2 text-[14px] font-semibold" style={{ color: '#6B6B85' }}>
        <Link href="/admin">Paket</Link><Link href="/admin/konten" style={{ color: '#1B1B36', textDecoration: 'underline' }}>Konten Website</Link><Link href="/admin/testimoni">Testimoni</Link><Link href="/admin/galeri">Galeri Jamaah</Link><Link href="/admin/settings">Settings</Link>
      </nav>
      <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><h1 className="text-[30px] font-bold" style={{ color: '#1B1B36' }}>Konten Website</h1><p className="mt-1 text-[14px]" style={{ color: '#6B6B85' }}>Kelola seluruh copy, media URL, daftar, dan informasi landing page.</p></div><button type="button" onClick={save} disabled={saving} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[6px] px-5 py-3 text-[14px] font-bold disabled:opacity-60" style={{ background: '#090F3B', color: '#fff' }}><Save size={17} />{saving ? 'Menyimpan...' : 'Simpan Perubahan'}</button></div>
      <div className="grid gap-5 lg:grid-cols-[250px_1fr]">
        <aside className="h-fit rounded-lg border bg-white p-2" style={{ borderColor: 'rgba(27,27,54,0.10)' }}>{sections.map((section) => <button key={section.key} type="button" onClick={() => setActiveSection(section.key)} className="w-full rounded-[6px] px-3 py-3 text-left text-[13px] font-semibold" style={activeSection === section.key ? { background: '#090F3B', color: '#fff' } : { color: '#4B4F68' }}>{section.label}</button>)}</aside>
        <section className="rounded-lg border bg-white p-5 md:p-7" style={{ borderColor: 'rgba(27,27,54,0.10)' }}><h2 className="text-[22px] font-bold" style={{ color: '#1B1B36' }}>{active.label}</h2><p className="mt-1 mb-6 text-[13px]" style={{ color: '#6B6B85' }}>{active.note}</p><ValueEditor name={active.label} value={draft[activeSection]} onChange={(next) => setDraft({ ...draft, [activeSection]: next } as SiteContent)} />{message && <p className="mt-5 text-[13px] font-semibold" style={{ color: message.startsWith('Perubahan') ? '#2D7A4F' : '#B5442E' }}>{message}</p>}</section>
      </div>
    </div>
  </div>;
}
