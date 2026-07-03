import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/animations';

const contactItems = [
  {
    icon: MapPin,
    label: "Alamat",
    lines: ["Jl. Kemang Raya No. 45", "Jakarta Selatan, DKI Jakarta 12730"],
  },
  {
    icon: Phone,
    label: "Telepon / WhatsApp",
    lines: ["0812-3456-7890"],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["info@dreammecca.co.id"],
  },
  {
    icon: Clock,
    label: "Jam Operasional",
    lines: ["Senin – Jumat: 08.00 – 17.00 WIB", "Sabtu: 09.00 – 14.00 WIB"],
  },
];

export default function MapSection() {
  return (
    <section id="kontak" className="py-12 md:py-20 bg-dream-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-dream-navy">
            Temukan <span className="text-dream-gold">Kami</span>
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-stretch
                     bg-white p-5 md:p-8 rounded-xl shadow-sm border border-black/5"
        >
          {/* Contact info */}
          <motion.div variants={fadeUp} className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-serif text-dream-navy mb-6">Kantor Pusat</h3>
            <div className="space-y-5">
              {contactItems.map(({ icon: Icon, label, lines }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-dream-navy/5 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-dream-gold" size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dream-navy text-sm mb-0.5">{label}</h4>
                    {lines.map((line, i) => (
                      <p key={i} className="text-dream-navy/60 text-sm">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Map embed */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-3 w-full min-h-[350px] lg:min-h-0 rounded-xl overflow-hidden shadow-inner bg-gray-100"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.5!2d106.813!3d-6.261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTUnNDMuMiJTIDEwNsKwNDgnNDcuNiJF!5e0!3m2!1sen!2sid!4v1000000000000"
              className="w-full h-full min-h-[350px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Kantor Dreammecca"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
