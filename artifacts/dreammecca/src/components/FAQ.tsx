import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const faqs = [
  {
    q: "Bagaimana proses pendaftaran Umroh?",
    a: "Hubungi kami via WhatsApp/telepon, konsultasi gratis, pilih paket, isi formulir, bayar DP 30%, dan kami akan proses dokumen Anda."
  },
  {
    q: "Apa saja yang termasuk dalam paket?",
    a: "Tiket pesawat PP, akomodasi hotel berbintang, transportasi selama di Tanah Suci, makan 3x sehari, manasik, perlengkapan Umroh, dan pendampingan pembimbing."
  },
  {
    q: "Bagaimana kebijakan pembatalan dan refund?",
    a: "Pembatalan lebih dari 90 hari: refund 80%. 60-90 hari: refund 50%. Kurang dari 60 hari: refund 25%. Syarat dan ketentuan berlaku."
  },
  {
    q: "Apakah ada cicilan pembayaran?",
    a: "Ya, tersedia cicilan tanpa bunga hingga 12 bulan melalui Bank BRI Syariah dan Bank Mandiri Syariah."
  },
  {
    q: "Dokumen apa saja yang diperlukan?",
    a: "Paspor aktif (minimal 7 bulan), KTP, KK, buku nikah/akta lahir, foto 4x6, dan sertifikat vaksin meningitis."
  },
  {
    q: "Apakah vaksin meningitis wajib?",
    a: "Ya, vaksin meningitis wajib berdasarkan peraturan Kerajaan Arab Saudi. Kami dapat membantu mengarahkan ke klinik vaksinasi terdekat."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-dream-navy relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-dream-gold/30 text-dream-gold font-semibold text-xs tracking-wider mb-6">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-dream-cream">
            Pertanyaan yang Sering Ditanyakan
          </h2>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <Accordion.Item 
              key={index} 
              value={`item-${index}`}
              className="bg-dream-navy-light border border-white/5 rounded-xl overflow-hidden"
            >
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center justify-between px-6 py-5 text-left group">
                  <span className="text-dream-cream font-medium pr-4">{faq.q}</span>
                  <ChevronDown className="text-dream-gold transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180 flex-shrink-0" size={20} />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-[slideUp_300ms_ease-out] data-[state=open]:animate-[slideDown_300ms_ease-out]">
                <div className="px-6 pb-5 pt-0 text-dream-cream/70 font-light leading-relaxed border-t border-white/5 mt-2">
                  {faq.a}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideDown {
          from { height: 0; opacity: 0; }
          to { height: var(--radix-accordion-content-height); opacity: 1; }
        }
        @keyframes slideUp {
          from { height: var(--radix-accordion-content-height); opacity: 1; }
          to { height: 0; opacity: 0; }
        }
      `}} />
    </section>
  );
}
