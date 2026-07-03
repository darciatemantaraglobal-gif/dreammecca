import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dream-navy pt-16 pb-8 border-t border-dream-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="space-y-6">
            <div>
              <span className="font-serif text-2xl font-bold text-white tracking-wider">
                DREAM<span className="text-dream-gold">MECCA</span>
              </span>
              <p className="text-dream-gold text-sm italic mt-1 font-serif">
                Perjalanan Umroh Bermakna
              </p>
            </div>
            <p className="text-dream-cream/60 text-sm font-light leading-relaxed">
              Penyedia layanan Umroh terpercaya yang berdedikasi membimbing dan melayani jamaah Indonesia menuju Baitullah dengan aman, nyaman, dan sesuai sunnah.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Tautan Cepat</h4>
            <ul className="space-y-3">
              <li><a href="#tentang" className="text-dream-cream/60 hover:text-dream-gold text-sm transition-colors">Tentang Kami</a></li>
              <li><a href="#fasilitas" className="text-dream-cream/60 hover:text-dream-gold text-sm transition-colors">Fasilitas & Layanan</a></li>
              <li><a href="#paket" className="text-dream-cream/60 hover:text-dream-gold text-sm transition-colors">Paket Umroh</a></li>
              <li><a href="#testimoni" className="text-dream-cream/60 hover:text-dream-gold text-sm transition-colors">Testimoni Jamaah</a></li>
              <li><a href="#faq" className="text-dream-cream/60 hover:text-dream-gold text-sm transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Sosial Media</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-dream-cream/20 flex items-center justify-center text-dream-cream/80 hover:bg-dream-gold hover:text-dream-navy hover:border-dream-gold transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-dream-cream/20 flex items-center justify-center text-dream-cream/80 hover:bg-dream-gold hover:text-dream-navy hover:border-dream-gold transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-dream-cream/20 flex items-center justify-center text-dream-cream/80 hover:bg-dream-gold hover:text-dream-navy hover:border-dream-gold transition-all">
                <Youtube size={18} />
              </a>
            </div>
            <div className="mt-6 p-4 bg-dream-navy-light rounded-lg border border-white/5 inline-block">
              <div className="text-xs text-dream-cream/60 mb-1">Terdaftar Resmi</div>
              <div className="text-sm font-semibold text-white">No. Izin PPIU: U.620 Tahun 2023</div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dream-cream/40 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Dreammecca Tour & Travel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
