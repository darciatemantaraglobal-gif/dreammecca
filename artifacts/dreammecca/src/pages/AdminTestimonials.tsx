import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { useAdminAuth } from '@/lib/useAdminAuth';

interface Testimonial {
  id: string;
  name: string;
  meta: string;
  quote: string;
  rating: number;
  is_active: boolean;
  sort_order: number;
}

interface TestimonialInput {
  name: string;
  meta: string;
  quote: string;
  rating: number;
  is_active: boolean;
  sort_order: number;
}

const emptyForm: TestimonialInput = {
  name: '',
  meta: '',
  quote: '',
  rating: 5,
  is_active: true,
  sort_order: 0,
};

const QUERY_KEY = ['admin-testimonials'];

function useAdminTestimonials() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () => {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('sort_order');
      if (error) throw error;
      return data as Testimonial[];
    },
  });
}

function TestimonialForm({
  initial,
  onCancel,
  onSaved,
}: {
  initial: Testimonial | null;
  onCancel: () => void;
  onSaved: () => void;
}) {
  const [form, setForm] = useState<TestimonialInput>(
    initial
      ? {
          name: initial.name,
          meta: initial.meta,
          quote: initial.quote,
          rating: initial.rating,
          is_active: initial.is_active,
          sort_order: initial.sort_order,
        }
      : emptyForm,
  );
  const [error, setError] = useState('');
  const queryClient = useQueryClient();

  const saveMutation = useMutation({
    mutationFn: async (payload: TestimonialInput) => {
      if (initial) {
        const { error } = await supabase.from('testimonials').update(payload).eq('id', initial.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('testimonials').insert(payload);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY });
      queryClient.invalidateQueries({ queryKey: ['testimonials'] });
      onSaved();
    },
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    try {
      await saveMutation.mutateAsync(form);
    } catch {
      setError('Gagal menyimpan. Cek kembali data yang diisi.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 flex flex-col gap-3 max-w-[560px] mx-auto">
      <h2 className="text-[17px] font-bold" style={{ color: '#1B1B36' }}>
        {initial ? 'Edit Testimoni' : 'Tambah Testimoni'}
      </h2>

      <label className="text-[13px] font-semibold" style={{ color: '#1B1B36' }}>
        Nama
        <input
          required
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          className="w-full mt-1 px-3 py-2 rounded-lg border text-[14px] font-normal"
          style={{ borderColor: 'rgba(27,27,54,0.15)' }}
        />
      </label>

      <label className="text-[13px] font-semibold" style={{ color: '#1B1B36' }}>
        Keterangan (mis: Kloter September 2025)
        <input
          required
          value={form.meta}
          onChange={e => setForm({ ...form, meta: e.target.value })}
          className="w-full mt-1 px-3 py-2 rounded-lg border text-[14px] font-normal"
          style={{ borderColor: 'rgba(27,27,54,0.15)' }}
        />
      </label>

      <label className="text-[13px] font-semibold" style={{ color: '#1B1B36' }}>
        Testimoni
        <textarea
          required
          rows={4}
          value={form.quote}
          onChange={e => setForm({ ...form, quote: e.target.value })}
          className="w-full mt-1 px-3 py-2 rounded-lg border text-[14px] font-normal resize-none"
          style={{ borderColor: 'rgba(27,27,54,0.15)' }}
        />
      </label>

      <div className="grid grid-cols-2 gap-3">
        <label className="text-[13px] font-semibold" style={{ color: '#1B1B36' }}>
          Rating (1–5)
          <input
            type="number"
            min={1}
            max={5}
            value={form.rating}
            onChange={e => setForm({ ...form, rating: Number(e.target.value) })}
            className="w-full mt-1 px-3 py-2 rounded-lg border text-[14px] font-normal"
            style={{ borderColor: 'rgba(27,27,54,0.15)' }}
          />
        </label>
        <label className="text-[13px] font-semibold" style={{ color: '#1B1B36' }}>
          Urutan
          <input
            type="number"
            min={0}
            value={form.sort_order}
            onChange={e => setForm({ ...form, sort_order: Number(e.target.value) })}
            className="w-full mt-1 px-3 py-2 rounded-lg border text-[14px] font-normal"
            style={{ borderColor: 'rgba(27,27,54,0.15)' }}
          />
        </label>
      </div>

      <label className="flex items-center gap-2 text-[13px] font-semibold" style={{ color: '#1B1B36' }}>
        <input
          type="checkbox"
          checked={form.is_active}
          onChange={e => setForm({ ...form, is_active: e.target.checked })}
        />
        Tampilkan di website
      </label>

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

export default function AdminTestimonials() {
  const { isAuthenticated, isLoading } = useAdminAuth();
  const [, navigate] = useLocation();
  const queryClient = useQueryClient();
  const [editing, setEditing] = useState<Testimonial | 'new' | null>(null);

  const { data, isLoading: loadingData } = useAdminTestimonials();

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('testimonials').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY });
      queryClient.invalidateQueries({ queryKey: ['testimonials'] });
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

  const testimonials = data ?? [];

  return (
    <div className="min-h-screen p-8" style={{ background: '#F4F4F7' }}>
      <div className="max-w-[800px] mx-auto">
        <div className="flex gap-[16px] mb-[24px] text-[14px] font-semibold" style={{ color: '#6B6B85' }}>
          <Link href="/admin" style={{ color: '#1B1B36' }}>Paket</Link>
          <Link href="/admin/testimoni" style={{ color: '#1B1B36', textDecoration: 'underline' }}>Testimoni</Link>
          <Link href="/admin/galeri">Galeri Jamaah</Link>
          <Link href="/admin/settings">Settings</Link>
        </div>

        <div className="flex justify-between items-center mb-[32px]">
          <div>
            <h1 className="text-[26px] font-bold" style={{ color: '#1B1B36' }}>Kelola Testimoni</h1>
            <p className="text-[14px] mt-[4px]" style={{ color: '#6B6B85' }}>{testimonials.length} testimoni terdaftar</p>
          </div>
          <button
            onClick={() => setEditing('new')}
            className="px-[18px] py-[11px] rounded-lg text-white font-semibold text-[14px]"
            style={{ background: '#1B1B36' }}
          >
            + Tambah Testimoni
          </button>
        </div>

        {editing && (
          <div className="mb-6">
            <TestimonialForm
              initial={editing === 'new' ? null : editing}
              onCancel={() => setEditing(null)}
              onSaved={() => setEditing(null)}
            />
          </div>
        )}

        <div className="flex flex-col gap-3">
          {loadingData && <p style={{ color: '#6B6B85' }}>Memuat...</p>}
          {!loadingData && testimonials.length === 0 && (
            <p style={{ color: '#6B6B85' }}>Belum ada testimoni. Klik "+ Tambah Testimoni" untuk membuat yang pertama.</p>
          )}
          {testimonials.map(t => (
            <div
              key={t.id}
              className="bg-white rounded-xl p-[16px]"
              style={{ boxShadow: '0 1px 3px rgba(27,27,54,0.06)' }}
            >
              <div className="flex items-start gap-[12px]">
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-[15px]" style={{ color: '#1B1B36' }}>
                    {t.name}
                    <span className="font-medium ml-2" style={{ color: '#6B6B85' }}>· {t.meta}</span>
                    {!t.is_active && (
                      <span className="ml-2 text-[12px] font-semibold" style={{ color: '#B5442E' }}>(nonaktif)</span>
                    )}
                  </div>
                  <div className="text-[12px] mt-[2px]" style={{ color: '#C5A63C' }}>
                    {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
                  </div>
                  <p className="text-[13px] mt-[6px] leading-[1.6]" style={{ color: '#6B6B85' }}>
                    "{t.quote}"
                  </p>
                </div>
                <div className="flex gap-[8px] flex-none">
                  <button
                    onClick={() => setEditing(t)}
                    className="text-[12px] font-semibold px-[12px] py-[7px] rounded-lg border transition-colors hover:bg-black/5"
                    style={{ borderColor: 'rgba(27,27,54,0.2)', color: '#1B1B36' }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      if (confirm('Hapus testimoni ini?')) deleteMutation.mutate(t.id);
                    }}
                    className="text-[12px] font-semibold px-[12px] py-[7px] rounded-lg border transition-colors hover:bg-red-50"
                    style={{ borderColor: 'rgba(181,68,46,0.3)', color: '#B5442E' }}
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
