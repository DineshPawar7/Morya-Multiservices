import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import HowWeWorkSection from './components/HowWeWorkSection';
import CertificatesSection from './components/CertificatesSection';
import TestimonialsSection from './components/TestimonialsSection';
import BlogsSection from './components/BlogsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <HowWeWorkSection />
        {/* <CertificatesSection /> */}
        <TestimonialsSection />
        <BlogsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;