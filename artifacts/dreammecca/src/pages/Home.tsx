import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PartnerStrip from '@/components/PartnerStrip';
import About from '@/components/About';
import Facilities from '@/components/Facilities';
import Gallery from '@/components/Gallery';
import Packages from '@/components/Packages';
import Testimonials from '@/components/Testimonials';
import Legal from '@/components/Legal';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';

export default function Home() {
  return (
    <div className="min-h-screen font-sans pb-16 md:pb-0" style={{ background: '#fff' }}>
      <Navbar />
      <Hero />
      <PartnerStrip />
      <About />
      <Facilities />
      <Gallery />
      <Packages />
      <Testimonials />
      <Legal />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
