import React, { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { useQueryClient } from '@tanstack/react-query';
import {
  useListAdminPackages,
  useCreatePackage,
  useUpdatePackage,
  useDeletePackage,
  useCreateDeparture,
  useUpdateDeparture,
  useDeleteDeparture,
  getListAdminPackagesQueryKey,
} from '@workspace/api-client-react';
import type { Package as Pkg, PackageInput, Departure } from '@workspace/api-client-react';
import { useAdminAuth } from '@/lib/useAdminAuth';

const emptyForm: PackageInput = {
  slug: '',
  tier: 'Reguler',
  duration: '9 Hari',
  title: '',
  hotelMecca: '',
  hotelMadinah: '',
  flightType: 'Direct',
  landing: 'Jeddah',
  tags: [],
  priceFrom: 0,
  posterUrl: null,
  featured: false,
  isActive: true,
  sortOrder: 0,
};

function fmt(n: number) {
  return new Intl.NumberFormat('id-ID', { maximumFractionDigits: 1 }).format(n / 1000000);
}

function PackageForm({
  initial,
  onCancel,
  onSaved,
}: {
  initial: Pkg | null;
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
          hotelMecca: initial.hotelMecca,
          hotelMadinah: initial.hotelMadinah,
          flightType: initial.flightType,
          landing: initial.landing,
          tags: initial.tags,
          priceFrom: initial.priceFrom,
          posterUrl: initial.posterUrl,
          featured: initial.featured,
          isActive: initial.isActive,
          sortOrder: initial.sortOrder,
        }
      : emptyForm,
  );
  const [tagsInput, setTagsInput] = useState(form.tags?.join(', ') ?? '');
  const [error, setError] = useState('');

  const createMutation = useCreatePackage();
  const updateMutation = useUpdatePackage();
  const saving = createMutation.isPending || updateMutation.isPending;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    const payload: PackageInput = {
      ...form,
      tags: tagsInput.split(',').map(t => t.trim()).filter(Boolean),
      priceFrom: Number(form.priceFrom),
    };
    try {
      if (initial) {
        await updateMutation.mutateAsync({ id: initial.id, data: payload });
      } else {
        await createMutation.mutateAsync({ data: payload });
      }
      onSaved();
    } catch (err) {
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
            value={form.hotelMecca}
            onChange={e => setForm({ ...form, hotelMecca: e.target.value })}
            className="w-full mt-1 px-3 py-2 rounded-lg border text-[14px] font-normal"
            style={{ borderColor: 'rgba(27,27,54,0.15)' }}
          />
        </label>
        <label className="text-[13px] font-semibold" style={{ color: '#1B1B36' }}>
          Hotel Madinah
          <input
            required
            value={form.hotelMadinah}
            onChange={e => setForm({ ...form, hotelMadinah: e.target.value })}
            className="w-full mt-1 px-3 py-2 rounded-lg border text-[14px] font-normal"
            style={{ borderColor: 'rgba(27,27,54,0.15)' }}
          />
        </label>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <label className="text-[13px] font-semibold" style={{ color: '#1B1B36' }}>
          Flight
          <input
            value={form.flightType}
            onChange={e => setForm({ ...form, flightType: e.target.value })}
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
          value={form.priceFrom}
          onChange={e => setForm({ ...form, priceFrom: Number(e.target.value) })}
          className="w-full mt-1 px-3 py-2 rounded-lg border text-[14px] font-normal"
          style={{ borderColor: 'rgba(27,27,54,0.15)' }}
        />
      </label>

      <label className="text-[13px] font-semibold" style={{ color: '#1B1B36' }}>
        URL Poster (opsional)
        <input
          value={form.posterUrl ?? ''}
          onChange={e => setForm({ ...form, posterUrl: e.target.value || null })}
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
            checked={form.isActive}
            onChange={e => setForm({ ...form, isActive: e.target.checked })}
          />
          Aktif (tampil di website)
        </label>
      </div>

      {error && <p className="text-[13px]" style={{ color: '#B5442E' }}>{error}</p>}

      <div className="flex gap-3 mt-2">
        <button
          type="submit"
          disabled={saving}
          className="px-4 py-2 rounded-lg text-white font-semibold text-[14px] disabled:opacity-60"
          style={{ background: '#1B1B36' }}
        >
          {saving ? 'Menyimpan...' : 'Simpan'}
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

function DepartureManager({ pkg }: { pkg: Pkg }) {
  const [newLabel, setNewLabel] = useState('');
  const createDep = useCreateDeparture();
  const updateDep = useUpdateDeparture();
  const deleteDep = useDeleteDeparture();
  const queryClient = useQueryClient();

  function invalidate() {
    queryClient.invalidateQueries({ queryKey: getListAdminPackagesQueryKey() });
  }

  async function addDeparture() {
    if (!newLabel.trim()) return;
    await createDep.mutateAsync({
      packageId: pkg.id,
      data: { dateLabel: newLabel.trim(), quotaLabel: 'Hubungi untuk sisa seat', isActive: true, sortOrder: pkg.departures.length + 1 },
    });
    setNewLabel('');
    invalidate();
  }

  async function toggleDep(dep: Departure) {
    await updateDep.mutateAsync({
      id: dep.id,
      data: { dateLabel: dep.dateLabel, quotaLabel: dep.quotaLabel, isActive: !dep.isActive, sortOrder: dep.sortOrder },
    });
    invalidate();
  }

  async function removeDep(dep: Departure) {
    if (!confirm('Hapus jadwal keberangkatan ini?')) return;
    await deleteDep.mutateAsync({ id: dep.id });
    invalidate();
  }

  return (
    <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(27,27,54,0.08)' }}>
      <div className="text-[12.5px] font-bold uppercase tracking-[0.06em] mb-2" style={{ color: '#6B6B85' }}>
        Jadwal Keberangkatan
      </div>
      <div className="flex flex-col gap-2">
        {pkg.departures.map(dep => (
          <div key={dep.id} className="flex items-center justify-between text-[13px] px-3 py-2 rounded-lg" style={{ background: '#F4F4F7' }}>
            <span style={{ color: dep.isActive ? '#1B1B36' : '#B0B0C0' }}>
              {dep.dateLabel} {!dep.isActive && '(nonaktif)'}
            </span>
            <div className="flex gap-2">
              <button onClick={() => toggleDep(dep)} className="text-[12px] font-semibold underline" style={{ color: '#1B1B36' }}>
                {dep.isActive ? 'Nonaktifkan' : 'Aktifkan'}
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
  const [editing, setEditing] = useState<Pkg | 'new' | null>(null);
  const [managingDeparturesFor, setManagingDeparturesFor] = useState<string | null>(null);

  const { data, isLoading: loadingPackages } = useListAdminPackages({
    query: { enabled: isAuthenticated, queryKey: getListAdminPackagesQueryKey() },
  });
  const deleteMutation = useDeletePackage();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isLoading, isAuthenticated, navigate]);

  if (isLoading || (!isAuthenticated && !isLoading)) {
    return <div className="p-8 text-center">Memuat...</div>;
  }

  const packages = data?.packages ?? [];

  function invalidate() {
    queryClient.invalidateQueries({ queryKey: getListAdminPackagesQueryKey() });
  }

  async function handleDelete(id: string) {
    if (!confirm('Yakin hapus paket ini beserta semua tanggal keberangkatannya?')) return;
    await deleteMutation.mutateAsync({ id });
    invalidate();
  }

  return (
    <div className="min-h-screen p-8" style={{ background: '#F4F4F7' }}>
      <div className="flex justify-between items-center mb-6 max-w-[1000px] mx-auto">
        <h1 className="text-[22px] font-bold" style={{ color: '#1B1B36' }}>Kelola Paket Umroh</h1>
        <div className="flex gap-3">
          <button
            onClick={() => setEditing('new')}
            className="px-4 py-2 rounded-lg text-white font-semibold text-[14px]"
            style={{ background: '#1B1B36' }}
          >
            + Tambah Paket
          </button>
          <button
            onClick={logout}
            className="px-4 py-2 rounded-lg font-semibold text-[14px]"
            style={{ border: '1px solid rgba(27,27,54,0.2)', color: '#1B1B36' }}
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
            onSaved={() => {
              setEditing(null);
              invalidate();
            }}
          />
        </div>
      )}

      <div className="max-w-[1000px] mx-auto flex flex-col gap-3">
        {loadingPackages && <p style={{ color: '#6B6B85' }}>Memuat paket...</p>}
        {!loadingPackages && packages.length === 0 && (
          <p style={{ color: '#6B6B85' }}>Belum ada paket. Klik "Tambah Paket" untuk membuat yang pertama.</p>
        )}
        {packages.map(pkg => (
          <div key={pkg.id} className="bg-white rounded-xl p-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-bold text-[15px]" style={{ color: '#1B1B36' }}>
                  {pkg.title} — {pkg.tier} · {pkg.duration}{' '}
                  {!pkg.isActive && <span style={{ color: '#B5442E' }}>(nonaktif)</span>}
                </div>
                <div className="text-[13px] mt-1" style={{ color: '#6B6B85' }}>
                  Rp {fmt(pkg.priceFrom)} Jt · {pkg.departures.length} jadwal keberangkatan
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setManagingDeparturesFor(managingDeparturesFor === pkg.id ? null : pkg.id)}
                  className="px-3 py-2 rounded-lg text-[13px] font-semibold"
                  style={{ border: '1px solid rgba(27,27,54,0.2)', color: '#1B1B36' }}
                >
                  Jadwal
                </button>
                <button
                  onClick={() => setEditing(pkg)}
                  className="px-3 py-2 rounded-lg text-[13px] font-semibold"
                  style={{ border: '1px solid rgba(27,27,54,0.2)', color: '#1B1B36' }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(pkg.id)}
                  className="px-3 py-2 rounded-lg text-[13px] font-semibold"
                  style={{ border: '1px solid rgba(181,68,46,0.3)', color: '#B5442E' }}
                >
                  Hapus
                </button>
              </div>
            </div>
            {managingDeparturesFor === pkg.id && <DepartureManager pkg={pkg} />}
          </div>
        ))}
      </div>
    </div>
  );
}
