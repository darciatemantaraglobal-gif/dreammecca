import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function MapSection() {
  return (
    <section id="kontak" className="py-24 bg-dream-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-dream-navy">
            Temukan <span className="text-dream-gold">Kami</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-black/5">
          
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-serif text-dream-navy mb-6">Kantor Pusat</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-dream-navy/5 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-dream-gold" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dream-navy text-sm mb-1">Alamat</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Jl. Kemang Raya No. 45<br/>
                      Jakarta Selatan, DKI Jakarta 12730
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-dream-navy/5 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-dream-gold" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dream-navy text-sm mb-1">Telepon / WhatsApp</h4>
                    <p className="text-gray-600 text-sm">0812-3456-7890</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-dream-navy/5 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-dream-gold" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dream-navy text-sm mb-1">Email</h4>
                    <p className="text-gray-600 text-sm">info@dreammecca.co.id</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-dream-navy/5 flex items-center justify-center flex-shrink-0">
                    <Clock className="text-dream-gold" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dream-navy text-sm mb-1">Jam Operasional</h4>
                    <p className="text-gray-600 text-sm">Senin – Jumat: 08.00 – 17.00 WIB</p>
                    <p className="text-gray-600 text-sm">Sabtu: 09.00 – 14.00 WIB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 w-full h-[400px] lg:h-full min-h-[400px] rounded-xl overflow-hidden shadow-inner bg-gray-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5!2d106.813!3d-6.261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTUnNDMuMiJTIDEwNsKwNDgnNDcuNiJF!5e0!3m2!1sen!2sid!4v1000000000000" 
              className="w-full h-full border-0"
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Kantor Dreammecca"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
