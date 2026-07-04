import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { useAdminAuth } from '@/lib/useAdminAuth';
import { useEffect } from 'react';

interface GalleryPhoto {
  id: string;
  image_url: string;
  caption: string;
  sort_order: number;
  is_active: boolean;
}

const QUERY_KEY = ['admin-gallery'];

function useAdminGallery() {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: async () => {
      const { data, error } = await supabase
        .from('gallery_photos')
        .select('*')
        .order('sort_order');
      if (error) throw error;
      return data as GalleryPhoto[];
    },
  });
}

async function uploadGalleryPhoto(file: File, caption: string) {
  const ext = file.name.split('.').pop();
  const path = `jamaah-${Date.now()}.${ext}`;
  const { error: uploadError } = await supabase.storage
    .from('gallery')
    .upload(path, file);
  if (uploadError) throw uploadError;
  const { data } = supabase.storage.from('gallery').getPublicUrl(path);
  const { error: insertError } = await supabase
    .from('gallery_photos')
    .insert({ image_url: data.publicUrl, caption, is_active: true, sort_order: 0 });
  if (insertError) throw insertError;
}

function UploadButton({ onUploaded }: { onUploaded: () => void }) {
  const [uploading, setUploading] = useState(false);
  const [caption, setCaption] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setSelectedFile(file);
    setShowForm(true);
  }

  async function handleUpload() {
    if (!selectedFile) return;
    setUploading(true);
    try {
      await uploadGalleryPhoto(selectedFile, caption || selectedFile.name);
      setShowForm(false);
      setCaption('');
      setSelectedFile(null);
      if (inputRef.current) inputRef.current.value = '';
      onUploaded();
    } catch (err) {
      alert('Gagal upload foto. Coba lagi.');
      console.error(err);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
      <button
        onClick={() => inputRef.current?.click()}
        className="px-[18px] py-[11px] rounded-lg text-white font-semibold text-[14px]"
        style={{ background: '#1B1B36' }}
      >
        + Upload Foto
      </button>

      {showForm && selectedFile && (
        <div className="mt-4 bg-white rounded-xl p-4 max-w-[400px]" style={{ boxShadow: '0 1px 3px rgba(27,27,54,0.1)' }}>
          <p className="text-[13px] font-semibold mb-2" style={{ color: '#1B1B36' }}>
            File: {selectedFile.name}
          </p>
          <input
            value={caption}
            onChange={e => setCaption(e.target.value)}
            placeholder="Caption foto (opsional)"
            className="w-full px-3 py-2 rounded-lg border text-[14px]"
            style={{ borderColor: 'rgba(27,27,54,0.15)' }}
          />
          <div className="flex gap-2 mt-3">
            <button
              onClick={handleUpload}
              disabled={uploading}
              className="px-4 py-2 rounded-lg text-white font-semibold text-[13px] disabled:opacity-60"
              style={{ background: '#1B1B36' }}
            >
              {uploading ? 'Mengupload...' : 'Upload'}
            </button>
            <button
              onClick={() => { setShowForm(false); setSelectedFile(null); if (inputRef.current) inputRef.current.value = ''; }}
              className="px-4 py-2 rounded-lg font-semibold text-[13px]"
              style={{ border: '1px solid rgba(27,27,54,0.2)', color: '#1B1B36' }}
            >
              Batal
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminGallery() {
  const { isAuthenticated, isLoading } = useAdminAuth();
  const [, navigate] = useLocation();
  const queryClient = useQueryClient();

  const { data, isLoading: loadingData } = useAdminGallery();

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('gallery_photos').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEY });
      queryClient.invalidateQueries({ queryKey: ['gallery-photos'] });
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

  const photos = data ?? [];

  function handleDelete(id: string) {
    if (confirm('Hapus foto ini?')) deleteMutation.mutate(id);
  }

  function invalidateGallery() {
    queryClient.invalidateQueries({ queryKey: QUERY_KEY });
    queryClient.invalidateQueries({ queryKey: ['gallery-photos'] });
  }

  return (
    <div className="min-h-screen p-8" style={{ background: '#F4F4F7' }}>
      <div className="max-w-[1000px] mx-auto">
        <div className="flex gap-[16px] mb-[24px] text-[14px] font-semibold" style={{ color: '#6B6B85' }}>
          <Link href="/admin">Paket</Link>
          <Link href="/admin/testimoni">Testimoni</Link>
          <Link href="/admin/galeri" style={{ color: '#1B1B36', textDecoration: 'underline' }}>Galeri Jamaah</Link>
          <Link href="/admin/settings">Settings</Link>
        </div>

        <div className="flex justify-between items-center mb-[32px]">
          <div>
            <h1 className="text-[26px] font-bold" style={{ color: '#1B1B36' }}>Galeri Jamaah</h1>
            <p className="text-[14px] mt-[4px]" style={{ color: '#6B6B85' }}>{photos.length} foto terdaftar</p>
          </div>
          <UploadButton onUploaded={invalidateGallery} />
        </div>

        {loadingData && <p style={{ color: '#6B6B85' }}>Memuat...</p>}
        {!loadingData && photos.length === 0 && (
          <p style={{ color: '#6B6B85' }}>Belum ada foto. Klik "+ Upload Foto" untuk menambahkan.</p>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[14px]">
          {photos.map(photo => (
            <div
              key={photo.id}
              className="rounded-xl overflow-hidden relative group"
              style={{ aspectRatio: '4/5', background: 'rgba(27,27,54,0.08)' }}
            >
              <img
                src={photo.image_url}
                alt={photo.caption}
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                loading="lazy"
              />
              <div
                className="absolute inset-0 flex flex-col justify-between p-[10px] opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'rgba(0,0,0,0.45)' }}
              >
                <button
                  onClick={() => handleDelete(photo.id)}
                  className="self-end text-[11px] font-bold px-2 py-1 rounded-md"
                  style={{ background: '#B5442E', color: '#fff' }}
                >
                  Hapus
                </button>
                <span className="text-[11px] font-semibold text-white">{photo.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
