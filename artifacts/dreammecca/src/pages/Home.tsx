import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import QuickLinks from '@/components/QuickLinks';
import AirlineMarquee from '@/components/AirlineMarquee';
import About from '@/components/About';
import Facilities from '@/components/Facilities';
import Gallery from '@/components/Gallery';
import GaleriJamaah from '@/components/GaleriJamaah';
import Packages from '@/components/Packages';
import Discounts from '@/components/Discounts';
import ProgramDetails from '@/components/ProgramDetails';
import FinalCTA from '@/components/FinalCTA';
import TravelFAQ from '@/components/TravelFAQ';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';

export default function Home() {
  return (
    <div className="dreammecca-public min-h-screen font-sans" style={{ background: '#fff' }}>
      <Navbar />
      <Hero />
      <QuickLinks />
      <AirlineMarquee />
      <About />
      <Packages />
      <GaleriJamaah />
      <Facilities />
      <Gallery />
      <Discounts />
      <ProgramDetails />
      <FinalCTA />
      <TravelFAQ />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
