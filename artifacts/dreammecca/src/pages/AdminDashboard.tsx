import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import type { Package, Departure } from '@/lib/supabase';
import { useAdminAuth } from '@/lib/useAdminAuth';

interface PackageInput {
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
}

const emptyForm: PackageInput = {
  slug: '',
  tier: 'Reguler',
  duration: '9 Hari',
  title: '',
  hotel_mecca: '',
  hotel_madinah: '',
  flight_type: 'Direct',
  landing: 'Jeddah',
  tags: [],
  price_from: 0,
  poster_url: null,
  featured: false,
  is_active: true,
  sort_order: 0,
};

const ADMIN_PACKAGES_KEY = ['admin-packages'];

function fmt(n: number) {
  return new Intl.NumberFormat('id-ID', { maximumFractionDigits: 1 }).format(n / 1000000);
}

async function uploadPoster(file: File, packageSlug: string): Promise<string> {
  const ext = file.name.split('.').pop();
  const path = `${packageSlug}-${Date.now()}.${ext}`;
  const { error: uploadError } = await supabase.storage
    .from('posters')
    .upload(path, file, { upsert: true, cacheControl: '3600' });
  if (uploadError) throw uploadError;
  const { data } = supabase.storage.from('posters').getPublicUrl(path);
  return data.publicUrl;
}

function PosterUploadButton({
  pkg,
  onUploaded,
}: {
  pkg: Package;
  onUploaded: () => void;
}) {
  const [uploading, setUploading] = useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const url = await uploadPoster(file, pkg.slug);
      await supabase.from('packages').update({ poster_url: url }).eq('id', pkg.id);
      onUploaded();
    } catch (err) {
      alert('Gagal upload poster. Coba lagi.');
      console.error(err);
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = '';
    }
  }

  return (
    <>
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
      <button
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        className="text-[12px] font-semibold px-[12px] py-[7px] rounded-lg border transition-colors hover:bg-black/5 disabled:opacity-50"
        style={{ borderColor: 'rgba(27,27,54,0.2)', color: '#1B1B36' }}
      >
        {uploading ? 'Mengupload...' : pkg.poster_url ? 'Ganti Poster' : 'Upload Poster'}
      </button>
    </>
  );
}

function useAdminPackages() {
  return useQuery({
    queryKey: ADMIN_PACKAGES_KEY,
    queryFn: async () => {
      const { data, error } = await supabase
        .from('packages')
        .select('*, departures(*)')
        .order('sort_order');
      if (error) throw error;
      return data as Package[];
    },
  });
}

function PackageForm({
  initial,
  onCancel,
  onSaved,
}: {
  initial: Package | null;
  onCancel: () => void;
  onSaved: () => void;
}) {
  const [form, setForm] = useState<PackageInput>(
    initial
      ? {
          slug: initial.slug,
          tier: initial.tier,
          duration: initial.duration,
          title: initial.title,
          hotel_mecca: initial.hotel_mecca,
          hotel_madinah: initial.hotel_madinah,
          flight_type: initial.flight_type,
          landing: initial.landing,
          tags: initial.tags,
          price_from: initial.price_from,
          poster_url: initial.poster_url,
          featured: initial.featured,
          is_active: initial.is_active,
          sort_order: initial.sort_order,
        }
      : emptyForm,
  );
  const [tagsInput, setTagsInput] = useState(form.tags?.join(', ') ?? '');
  const [error, setError] = useState('');
  const queryClient = useQueryClient();

  const saveMutation = useMutation({
    mutationFn: async (payload: PackageInput) => {
      if (initial) {
        const { error } = await supabase.from('packages').update(payload).eq('id', initial.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('packages').insert(payload);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ADMIN_PACKAGES_KEY });
      onSaved();
    },
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    const payload: PackageInput = {
      ...form,
      tags: tagsInput.split(',').map(t => t.trim()).filter(Boolean),
      price_from: Number(form.price_from),
    };
    try {
      await saveMutation.mutateAsync(payload);
    } catch {
      setError('Gagal menyimpan paket. Cek kembali data yang diisi.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 flex flex-col gap-3 max-w-[560px] mx-auto">
      <h2 className="text-[17px] font-bold" style={{ color: '#1B1B36' }}>
        {initial ? 'Edit Paket' : 'Tambah Paket Baru'}
      </h2>

      <label className="text-[13px] font-semibold" style={{ color: '#1B1B36' }}>
        Slug (unik, tanpa spasi)
        <input
          required
          value={form.slug}
          onChange={e => setForm({ ...form, slug: e.target.value })}
          className="w-full mt-1 px-3 py-2 rounded-lg border text-[14px] font-normal"
          style={{ borderColor: 'rgba(27,27,54,0.15)' }}
        />
      </label>

      <div className="grid grid-cols-2 gap-3">
        <label className="text-[13px] font-semibold" style={{ color: '#1B1B36' }}>
          Tier
          <select
            value={form.tier}
            onChange={e => setForm({ ...form, tier: e.target.value as 'Reguler' | 'Luxury' })}
            className="w-full mt-1 px-3 py-2 rounded-lg border text-[14px] font-normal"
            style={{ borderColor: 'rgba(27,27,54,0.15)' }}
          >
            <option value="Reguler">Reguler</option>
            <option value="Luxury">Luxury</option>
          </select>
        </label>
        <label className="text-[13px] font-semibold" style={{ color: '#1B1B36' }}>
          Durasi
          <input
            required
            value={form.duration}
            onChange={e => setForm({ ...form, duration: e.target.value })}
            className="w-full mt-1 px-3 py-2 rounded-lg border text-[14px] font-normal"
            style={{ borderColor: 'rgba(27,27,54,0.15)' }}
          />
        </label>
      </div>

      <label className="text-[13px] font-semibold" style={{ color: '#1B1B36' }}>
        Judul Paket
        <input
          required
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
          className="w-full mt-1 px-3 py-2 rounded-lg border text-[14px] font-normal"
          style={{ borderColor: 'rgba(27,27,54,0.15)' }}
        />
      </label>

      <div className="grid grid-cols-2 gap-3">
        <label className="text-[13px] font-semibold" style={{ color: '#1B1B36' }}>
          Hotel Makkah
          <input
            required
            value={form.hotel_mecca}
            onChange={e => setForm({ ...form, hotel_mecca: e.target.value })}
            className="w-full mt-1 px-3 py-2 rounded-lg border text-[14px] font-normal"
            style={{ borderColor: 'rgba(27,27,54,0.15)' }}
          />
        </label>
        <label className="text-[13px] font-semibold" style={{ color: '#1B1B36' }}>
          Hotel Madinah
          <input
            required
            value={form.hotel_madinah}
            onChange={e => setForm({ ...form, hotel_madinah: e.target.value })}
            className="w-full mt-1 px-3 py-2 rounded-lg border text-[14px] font-normal"
            style={{ borderColor: 'rgba(27,27,54,0.15)' }}
          />
        </label>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <label className="text-[13px] font-semibold" style={{ color: '#1B1B36' }}>
          Flight
          <input
            value={form.flight_type}
            onChange={e => setForm({ ...form, flight_type: e.target.value })}
            className="w-full mt-1 px-3 py-2 rounded-lg border text-[14px] font-normal"
            style={{ borderColor: 'rgba(27,27,54,0.15)' }}
          />
        </label>
        <label className="text-[13px] font-semibold" style={{ color: '#1B1B36' }}>
          Landing
          <input
            value={form.landing}
            onChange={e => setForm({ ...form, landing: e.target.value })}
            className="w-full mt-1 px-3 py-2 rounded-lg border text-[14px] font-normal"
            style={{ borderColor: 'rgba(27,27,54,0.15)' }}
          />
        </label>
      </div>

      <label className="text-[13px] font-semibold" style={{ color: '#1B1B36' }}>
        Tags (pisahkan dengan koma)
        <input
          value={tagsInput}
          onChange={e => setTagsInput(e.target.value)}
          placeholder="Ziarah Thoif, Unta + ATV"
          className="w-full mt-1 px-3 py-2 rounded-lg border text-[14px] font-normal"
          style={{ borderColor: 'rgba(27,27,54,0.15)' }}
        />
      </label>

      <label className="text-[13px] font-semibold" style={{ color: '#1B1B36' }}>
        Harga Mulai (Rupiah, angka penuh)
        <input
          required
          type="number"
          min={0}
          value={form.price_from}
          onChange={e => setForm({ ...form, price_from: Number(e.target.value) })}
          className="w-full mt-1 px-3 py-2 rounded-lg border text-[14px] font-normal"
          style={{ borderColor: 'rgba(27,27,54,0.15)' }}
        />
      </label>

      <label className="text-[13px] font-semibold" style={{ color: '#1B1B36' }}>
        URL Poster (opsional)
        <input
          value={form.poster_url ?? ''}
          onChange={e => setForm({ ...form, poster_url: e.target.value || null })}
          placeholder="https://..."
          className="w-full mt-1 px-3 py-2 rounded-lg border text-[14px] font-normal"
          style={{ borderColor: 'rgba(27,27,54,0.15)' }}
        />
      </label>

      <div className="flex gap-5 mt-1">
        <label className="flex items-center gap-2 text-[13px] font-semibold" style={{ color: '#1B1B36' }}>
          <input
            type="checkbox"
            checked={form.featured}
            onChange={e => setForm({ ...form, featured: e.target.checked })}
          />
          Tandai Terpopuler
        </label>
        <label className="flex items-center gap-2 text-[13px] font-semibold" style={{ color: '#1B1B36' }}>
          <input
            type="checkbox"
            checked={form.is_active}
            onChange={e => setForm({ ...form, is_active: e.target.checked })}
          />
          Aktif (tampil di website)
        </label>
      </div>

      {error && <p className="text-[13px]" style={{ color: '#B5442E' }}>{error}</p>}

      <div className="flex gap-3 mt-2">
        <button
          type="submit"
          disabled={saveMutation.isPending}
          className="px-4 py-2 rounded-lg text-white font-semibold text-[14px] disabled:opacity-60"
          style={{ background: '#1B1B36' }}
        >
          {saveMutation.isPending ? 'Menyimpan...' : 'Simpan'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded-lg font-semibold text-[14px]"
          style={{ border: '1px solid rgba(27,27,54,0.2)', color: '#1B1B36' }}
        >
          Batal
        </button>
      </div>
    </form>
  );
}

function DepartureManager({ pkg }: { pkg: Package }) {
  const [newLabel, setNewLabel] = useState('');
  const queryClient = useQueryClient();

  function invalidate() {
    queryClient.invalidateQueries({ queryKey: ADMIN_PACKAGES_KEY });
  }

  async function addDeparture() {
    if (!newLabel.trim()) return;
    const { error } = await supabase.from('departures').insert({
      package_id: pkg.id,
      date_label: newLabel.trim(),
      quota_label: 'Hubungi untuk sisa seat',
      is_active: true,
      sort_order: (pkg.departures?.length ?? 0) + 1,
    });
    if (!error) {
      setNewLabel('');
      invalidate();
    }
  }

  async function toggleDep(dep: Departure) {
    await supabase.from('departures').update({ is_active: !dep.is_active }).eq('id', dep.id);
    invalidate();
  }

  async function removeDep(dep: Departure) {
    if (!confirm('Hapus jadwal keberangkatan ini?')) return;
    await supabase.from('departures').delete().eq('id', dep.id);
    invalidate();
  }

  return (
    <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(27,27,54,0.08)' }}>
      <div className="text-[12.5px] font-bold uppercase tracking-[0.06em] mb-2" style={{ color: '#6B6B85' }}>
        Jadwal Keberangkatan
      </div>
      <div className="flex flex-col gap-2">
        {(pkg.departures ?? []).map(dep => (
          <div key={dep.id} className="flex items-center justify-between text-[13px] px-3 py-2 rounded-lg" style={{ background: '#F4F4F7' }}>
            <span style={{ color: dep.is_active ? '#1B1B36' : '#B0B0C0' }}>
              {dep.date_label} {!dep.is_active && '(nonaktif)'}
            </span>
            <div className="flex gap-2">
              <button onClick={() => toggleDep(dep)} className="text-[12px] font-semibold underline" style={{ color: '#1B1B36' }}>
                {dep.is_active ? 'Nonaktifkan' : 'Aktifkan'}
              </button>
              <button onClick={() => removeDep(dep)} className="text-[12px] font-semibold underline" style={{ color: '#B5442E' }}>
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-2">
        <input
          value={newLabel}
          onChange={e => setNewLabel(e.target.value)}
          placeholder="Tanggal keberangkatan baru"
          className="flex-1 px-3 py-2 rounded-lg border text-[13px]"
          style={{ borderColor: 'rgba(27,27,54,0.15)' }}
        />
        <button
          onClick={addDeparture}
          className="px-3 py-2 rounded-lg text-white font-semibold text-[13px]"
          style={{ background: '#1B1B36' }}
        >
          + Tambah
        </button>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const { isAuthenticated, isLoading, logout } = useAdminAuth();
  const [, navigate] = useLocation();
  const queryClient = useQueryClient();
  const [editing, setEditing] = useState<Package | 'new' | null>(null);
  const [managingDeparturesFor, setManagingDeparturesFor] = useState<string | null>(null);

  const { data, isLoading: loadingPackages } = useAdminPackages();

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await supabase.from('departures').delete().eq('package_id', id);
      const { error } = await supabase.from('packages').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ADMIN_PACKAGES_KEY });
    },
  });

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isLoading, isAuthenticated, navigate]);

  if (isLoading || (!isAuthenticated && !isLoading)) {
    return <div className="p-8 text-center">Memuat...</div>;
  }

  const packages = data ?? [];

  async function handleDelete(id: string) {
    if (!confirm('Yakin hapus paket ini beserta semua tanggal keberangkatannya?')) return;
    await deleteMutation.mutateAsync(id);
  }

  async function duplicatePackage(pkg: Package) {
    const newSlug = `${pkg.slug}-copy-${Date.now()}`;
    const { departures, id, ...rest } = pkg as any;
    await supabase.from('packages').insert({ ...rest, slug: newSlug, title: `${pkg.title} (Copy)` });
    queryClient.invalidateQueries({ queryKey: ADMIN_PACKAGES_KEY });
  }

  return (
    <div className="min-h-screen p-8" style={{ background: '#F4F4F7' }}>
      <div className="max-w-[1000px] mx-auto flex gap-[16px] mb-[24px] text-[14px] font-semibold" style={{ color: '#6B6B85' }}>
        <Link href="/admin" style={{ color: '#1B1B36', textDecoration: 'underline' }}>Paket</Link>
        <Link href="/admin/testimoni">Testimoni</Link>
        <Link href="/admin/galeri">Galeri Jamaah</Link>
        <Link href="/admin/settings">Settings</Link>
      </div>
      <div className="flex justify-between items-center mb-[32px] max-w-[1000px] mx-auto">
        <div>
          <h1 className="text-[26px] font-bold" style={{ color: '#1B1B36' }}>Kelola Paket Umroh</h1>
          <p className="text-[14px] mt-[4px]" style={{ color: '#6B6B85' }}>{packages.length} paket terdaftar</p>
        </div>
        <div className="flex gap-[10px]">
          <button
            onClick={() => setEditing('new')}
            className="px-[18px] py-[11px] rounded-lg text-white font-semibold text-[14px]"
            style={{ background: '#1B1B36' }}
          >
            + Tambah Paket
          </button>
          <button
            onClick={logout}
            className="px-[18px] py-[11px] rounded-lg font-semibold text-[14px] border"
            style={{ borderColor: 'rgba(27,27,54,0.2)', color: '#1B1B36' }}
          >
            Keluar
          </button>
        </div>
      </div>

      {editing && (
        <div className="mb-6">
          <PackageForm
            initial={editing === 'new' ? null : editing}
            onCancel={() => setEditing(null)}
            onSaved={() => setEditing(null)}
          />
        </div>
      )}

      <div className="max-w-[1000px] mx-auto flex flex-col gap-3">
        {loadingPackages && <p style={{ color: '#6B6B85' }}>Memuat paket...</p>}
        {!loadingPackages && packages.length === 0 && (
          <p style={{ color: '#6B6B85' }}>Belum ada paket. Klik "Tambah Paket" untuk membuat yang pertama.</p>
        )}
        {packages.map(pkg => (
          <div key={pkg.id} className="bg-white rounded-xl" style={{ boxShadow: '0 1px 3px rgba(27,27,54,0.06)' }}>
            <div className="p-[16px] flex items-center gap-[16px]">
              {/* Thumbnail poster */}
              <div
                className="rounded-lg overflow-hidden flex-none"
                style={{ width: '64px', height: '80px', background: '#F4F4F7' }}
              >
                {pkg.poster_url ? (
                  <img src={pkg.poster_url} alt={pkg.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[10px]" style={{ color: '#9CA0AC' }}>
                    No poster
                  </div>
                )}
              </div>

              {/* Info paket */}
              <div className="flex-1 min-w-0">
                <div className="font-bold text-[15px]" style={{ color: '#1B1B36' }}>
                  {pkg.title}
                  <span className="font-medium" style={{ color: '#6B6B85' }}> · {pkg.tier} · {pkg.duration}</span>
                  {!pkg.is_active && (
                    <span className="ml-[8px] text-[12px] font-semibold" style={{ color: '#B5442E' }}>(nonaktif)</span>
                  )}
                </div>
                <div className="text-[13px] mt-[4px]" style={{ color: '#6B6B85' }}>
                  Rp {fmt(pkg.price_from)} Jt · {pkg.departures?.length ?? 0} jadwal keberangkatan
                </div>
              </div>

              {/* Tombol aksi */}
              <div className="flex gap-[8px] flex-none flex-wrap justify-end">
                <PosterUploadButton
                  pkg={pkg}
                  onUploaded={() => queryClient.invalidateQueries({ queryKey: ADMIN_PACKAGES_KEY })}
                />
                <button
                  onClick={() => duplicatePackage(pkg)}
                  className="text-[12px] font-semibold px-[12px] py-[7px] rounded-lg border transition-colors hover:bg-black/5"
                  style={{ borderColor: 'rgba(27,27,54,0.2)', color: '#1B1B36' }}
                >
                  Salin
                </button>
                <button
                  onClick={() => setManagingDeparturesFor(managingDeparturesFor === pkg.id ? null : pkg.id)}
                  className="text-[12px] font-semibold px-[12px] py-[7px] rounded-lg border transition-colors hover:bg-black/5"
                  style={{ borderColor: 'rgba(27,27,54,0.2)', color: '#1B1B36' }}
                >
                  Jadwal
                </button>
                <button
                  onClick={() => setEditing(pkg)}
                  className="text-[12px] font-semibold px-[12px] py-[7px] rounded-lg border transition-colors hover:bg-black/5"
                  style={{ borderColor: 'rgba(27,27,54,0.2)', color: '#1B1B36' }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(pkg.id)}
                  className="text-[12px] font-semibold px-[12px] py-[7px] rounded-lg border transition-colors hover:bg-red-50"
                  style={{ borderColor: 'rgba(181,68,46,0.3)', color: '#B5442E' }}
                >
                  Hapus
                </button>
              </div>
            </div>
            {managingDeparturesFor === pkg.id && (
              <div className="px-[16px] pb-[16px]">
                <DepartureManager pkg={pkg} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
