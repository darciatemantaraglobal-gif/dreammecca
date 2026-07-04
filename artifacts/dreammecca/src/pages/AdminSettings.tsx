import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { useAdminAuth } from '@/lib/useAdminAuth';
import { useSiteSettings } from '@/lib/useSiteSettings';

interface SettingsForm {
  whatsapp_number: string;
  address: string;
  instagram_url: string;
  facebook_url: string;
  youtube_url: string;
}

export default function AdminSettings() {
  const { isAuthenticated, isLoading } = useAdminAuth();
  const [, navigate] = useLocation();
  const queryClient = useQueryClient();
  const { data: settings, isLoading: loadingSettings } = useSiteSettings();

  const [form, setForm] = useState<SettingsForm>({
    whatsapp_number: '',
    address: '',
    instagram_url: '',
    facebook_url: '',
    youtube_url: '',
  });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isLoading, isAuthenticated, navigate]);

  useEffect(() => {
    if (settings) {
      setForm({
        whatsapp_number: settings.whatsapp_number ?? '',
        address: settings.address ?? '',
        instagram_url: settings.instagram_url ?? '',
        facebook_url: settings.facebook_url ?? '',
        youtube_url: settings.youtube_url ?? '',
      });
    }
  }, [settings]);

  if (isLoading || (!isAuthenticated && !isLoading)) {
    return <div className="p-8 text-center">Memuat...</div>;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError('');
    setSaved(false);
    try {
      const { error: err } = await supabase
        .from('site_settings')
        .update({ ...form, updated_at: new Date().toISOString() })
        .eq('id', 1);
      if (err) throw err;
      queryClient.invalidateQueries({ queryKey: ['site-settings'] });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err) {
      console.error(err);
      setError('Gagal menyimpan. Coba lagi.');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="min-h-screen p-8" style={{ background: '#F4F4F7' }}>
      <div className="max-w-[600px] mx-auto">
        <div className="flex gap-[16px] mb-[24px] text-[14px] font-semibold" style={{ color: '#6B6B85' }}>
          <Link href="/admin">Paket</Link>
          <Link href="/admin/testimoni">Testimoni</Link>
          <Link href="/admin/galeri">Galeri Jamaah</Link>
          <Link href="/admin/settings" style={{ color: '#1B1B36', textDecoration: 'underline' }}>Settings</Link>
        </div>

        <div className="mb-[32px]">
          <h1 className="text-[26px] font-bold" style={{ color: '#1B1B36' }}>Setting Umum</h1>
          <p className="text-[14px] mt-[4px]" style={{ color: '#6B6B85' }}>Nomor WA, alamat, dan media sosial</p>
        </div>

        {loadingSettings ? (
          <p style={{ color: '#6B6B85' }}>Memuat pengaturan...</p>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 flex flex-col gap-4" style={{ boxShadow: '0 1px 3px rgba(27,27,54,0.06)' }}>
            <label className="text-[13px] font-semibold" style={{ color: '#1B1B36' }}>
              Nomor WhatsApp (tanpa +, contoh: 6281225740093)
              <input
                required
                value={form.whatsapp_number}
                onChange={e => setForm({ ...form, whatsapp_number: e.target.value })}
                placeholder="6281225740093"
                className="w-full mt-1 px-3 py-2 rounded-lg border text-[14px] font-normal"
                style={{ borderColor: 'rgba(27,27,54,0.15)' }}
              />
            </label>

            <label className="text-[13px] font-semibold" style={{ color: '#1B1B36' }}>
              Alamat Kantor
              <textarea
                rows={3}
                value={form.address}
                onChange={e => setForm({ ...form, address: e.target.value })}
                className="w-full mt-1 px-3 py-2 rounded-lg border text-[14px] font-normal resize-none"
                style={{ borderColor: 'rgba(27,27,54,0.15)' }}
              />
            </label>

            <label className="text-[13px] font-semibold" style={{ color: '#1B1B36' }}>
              URL Instagram (lengkap, contoh: https://instagram.com/dreammecca.id)
              <input
                value={form.instagram_url}
                onChange={e => setForm({ ...form, instagram_url: e.target.value })}
                className="w-full mt-1 px-3 py-2 rounded-lg border text-[14px] font-normal"
                style={{ borderColor: 'rgba(27,27,54,0.15)' }}
              />
            </label>

            <label className="text-[13px] font-semibold" style={{ color: '#1B1B36' }}>
              URL Facebook
              <input
                value={form.facebook_url}
                onChange={e => setForm({ ...form, facebook_url: e.target.value })}
                className="w-full mt-1 px-3 py-2 rounded-lg border text-[14px] font-normal"
                style={{ borderColor: 'rgba(27,27,54,0.15)' }}
              />
            </label>

            <label className="text-[13px] font-semibold" style={{ color: '#1B1B36' }}>
              URL YouTube
              <input
                value={form.youtube_url}
                onChange={e => setForm({ ...form, youtube_url: e.target.value })}
                className="w-full mt-1 px-3 py-2 rounded-lg border text-[14px] font-normal"
                style={{ borderColor: 'rgba(27,27,54,0.15)' }}
              />
            </label>

            {error && <p className="text-[13px]" style={{ color: '#B5442E' }}>{error}</p>}
            {saved && <p className="text-[13px] font-semibold" style={{ color: '#2D7A4F' }}>✓ Pengaturan berhasil disimpan!</p>}

            <button
              type="submit"
              disabled={saving}
              className="px-[18px] py-[11px] rounded-lg text-white font-semibold text-[14px] disabled:opacity-60 w-fit"
              style={{ background: '#1B1B36' }}
            >
              {saving ? 'Menyimpan...' : 'Simpan Pengaturan'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
