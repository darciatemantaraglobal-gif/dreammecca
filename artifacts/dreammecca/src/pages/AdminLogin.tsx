import React, { useEffect } from 'react';
import { useLocation } from 'wouter';
import { useAdminAuth } from '@/lib/useAdminAuth';

export default function AdminLogin() {
  const { isAuthenticated, isLoading, login } = useAdminAuth();
  const [, navigate] = useLocation();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate('/admin');
    }
  }, [isLoading, isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#1B1B36' }}>
      <div className="bg-white rounded-xl p-8 w-full max-w-[380px] text-center">
        <h1 className="text-[20px] font-bold mb-2" style={{ color: '#1B1B36' }}>Admin Dreammecca</h1>
        <p className="text-[14px] mb-6" style={{ color: '#6B6B85' }}>
          Masuk untuk mengelola paket umroh dan jadwal keberangkatan.
        </p>
        <button
          onClick={login}
          disabled={isLoading}
          className="w-full py-3 rounded-lg font-bold text-[14px] text-white disabled:opacity-60"
          style={{ background: '#1B1B36' }}
        >
          {isLoading ? 'Memuat...' : 'Masuk'}
        </button>
      </div>
    </div>
  );
}
