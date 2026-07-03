import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';

const faqs = [
  {
    q: "Bagaimana proses pendaftaran Umroh?",
    a: "Hubungi kami via WhatsApp atau telepon untuk konsultasi gratis. Setelah memilih paket, isi formulir pendaftaran, bayar DP 30%, dan kami akan segera memproses semua dokumen Anda.",
  },
  {
    q: "Apa saja yang termasuk dalam paket?",
    a: "Tiket pesawat pulang-pergi, akomodasi hotel berbintang 4-5, transportasi selama di Tanah Suci, makan 3x sehari, manasik intensif, perlengkapan Umroh eksklusif, dan pendampingan pembimbing ibadah berpengalaman.",
  },
  {
    q: "Bagaimana kebijakan pembatalan dan refund?",
    a: "Pembatalan lebih dari 90 hari sebelum keberangkatan: refund 80%. Pembatalan 60–90 hari: refund 50%. Pembatalan kurang dari 60 hari: refund 25%. Syarat dan ketentuan berlaku.",
  },
  {
    q: "Apakah ada cicilan pembayaran?",
    a: "Ya, tersedia program cicilan tanpa bunga hingga 12 bulan melalui Bank BRI Syariah dan Bank Mandiri Syariah. Hubungi tim kami untuk informasi lebih lanjut.",
  },
  {
    q: "Dokumen apa saja yang diperlukan?",
    a: "Paspor aktif (minimal berlaku 7 bulan dari tanggal keberangkatan), KTP, Kartu Keluarga, buku nikah atau akta lahir, pas foto 4×6, dan sertifikat vaksin meningitis.",
  },
  {
    q: "Apakah vaksin meningitis wajib?",
    a: "Ya, vaksin meningitis wajib berdasarkan peraturan Kerajaan Arab Saudi bagi seluruh jamaah yang memasuki wilayah Hejaz. Tim kami dapat membantu mengarahkan Anda ke klinik vaksinasi yang ditunjuk.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-12 md:py-20 bg-dream-navy relative">
      {/* Subtle top border glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-dream-gold/20 to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-dream-gold/30 text-dream-gold font-semibold text-xs tracking-wider mb-6"
          >
            FAQ
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-serif text-dream-cream"
          >
            Pertanyaan yang Sering Ditanyakan
          </motion.h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Accordion.Root type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={fadeUp}>
                <Accordion.Item
                  value={`item-${index}`}
                  className="bg-dream-navy-light border border-white/5 rounded-xl overflow-hidden"
                >
                  <Accordion.Header>
                    <Accordion.Trigger
                      className="flex w-full items-center justify-between px-6 py-5 text-left group
                                 hover:bg-white/5 transition-colors duration-200"
                    >
                      <span className="text-dream-cream font-medium pr-4 text-sm md:text-base leading-snug">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className="text-dream-gold flex-shrink-0 transition-transform duration-300
                                   ease-[cubic-bezier(0.87,0,0.13,1)] group-data-[state=open]:rotate-180"
                        size={18}
                      />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden data-[state=closed]:animate-[accordionUp_280ms_ease-out] data-[state=open]:animate-[accordionDown_280ms_ease-out]">
                    <div className="px-6 pb-5 pt-0 text-dream-cream/70 font-light leading-relaxed border-t border-white/5 text-sm md:text-base">
                      {faq.a}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes accordionDown {
          from { height: 0; opacity: 0; }
          to   { height: var(--radix-accordion-content-height); opacity: 1; }
        }
        @keyframes accordionUp {
          from { height: var(--radix-accordion-content-height); opacity: 1; }
          to   { height: 0; opacity: 0; }
        }
      ` }} />
    </section>
  );
}
