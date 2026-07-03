import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PartnerStrip from '@/components/PartnerStrip';
import About from '@/components/About';
import Facilities from '@/components/Facilities';
import Gallery from '@/components/Gallery';
import Packages from '@/components/Packages';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-dream-cream text-dream-navy font-sans selection:bg-dream-gold selection:text-dream-navy pb-20 md:pb-0">
      <Navbar />
      <Hero />
      <PartnerStrip />
      <About />
      <Facilities />
      <Gallery />
      <Packages />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <MapSection />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
