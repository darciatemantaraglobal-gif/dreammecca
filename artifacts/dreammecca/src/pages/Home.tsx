import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import PartnerStrip from '@/components/PartnerStrip';
import About from '@/components/About';
import Facilities from '@/components/Facilities';
import Gallery from '@/components/Gallery';
import Packages from '@/components/Packages';
import GaleriJamaah from '@/components/GaleriJamaah';
import Testimonials from '@/components/Testimonials';
import Legal from '@/components/Legal';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';

export default function Home() {
  return (
    <div className="min-h-screen font-sans" style={{ background: '#fff' }}>
      <Navbar />
      <Hero />
      <TrustBar />
      <PartnerStrip />
      <About />
      <SectionDivider overlayColor="41,41,81" clipId="divider-2" />
      <Facilities />
      <Gallery />
      <Packages />
      <GaleriJamaah />
      <Testimonials />
      <Legal />
      <FAQ />
      <SectionDivider overlayColor="41,41,81" clipId="divider-5" />
      <FinalCTA />
      <Footer />
    </div>
  );
}
