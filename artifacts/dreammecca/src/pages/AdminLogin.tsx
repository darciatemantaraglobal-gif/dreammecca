import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { supabase } from '@/lib/supabase';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [, navigate] = useLocation();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (authError) {
      setError('Email atau password salah.');
      return;
    }
    navigate('/admin');
  }

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#1B1B36' }}>
      <form onSubmit={handleLogin} className="bg-white rounded-xl p-8 w-full max-w-[380px]">
        <h1 className="text-[20px] font-bold mb-2" style={{ color: '#1B1B36' }}>Admin Dreammecca</h1>
        <p className="text-[14px] mb-6" style={{ color: '#6B6B85' }}>
          Masuk untuk mengelola paket umroh dan jadwal keberangkatan.
        </p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full mb-3 px-4 py-3 rounded-lg border text-[14px]"
          style={{ borderColor: 'rgba(27,27,54,0.15)' }}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-3 rounded-lg border text-[14px]"
          style={{ borderColor: 'rgba(27,27,54,0.15)' }}
          required
        />
        {error && <p className="text-[13px] mb-3" style={{ color: '#B5442E' }}>{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg font-bold text-[14px] text-white disabled:opacity-60"
          style={{ background: '#1B1B36' }}
        >
          {loading ? 'Masuk...' : 'Masuk'}
        </button>
      </form>
    </div>
  );
}
