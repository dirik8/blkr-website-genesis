
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Benefits from '@/components/home/Benefits';
import Services from '@/components/home/Services';
import ExpertBio from '@/components/home/ExpertBio';
import Testimonials from '@/components/home/Testimonials';
import Metrics from '@/components/home/Metrics';
import { Helmet } from 'react-helmet';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>BLKR Trading Community | Elite Strategies. Exclusive Access.</title>
        <meta name="description" content="Join the inner circle of elite traders at BLKR Trading Community. Unlock premium trading strategies, expert mentorship, and exclusive market insights." />
        <meta name="keywords" content="elite trading community, high-ticket crypto coaching, trading mentorship, day trading strategies, crypto portfolio guide" />
      </Helmet>
      
      <main className="min-h-screen bg-black text-white">
        <Navbar />
        <Hero />
        <Benefits />
        <Services />
        <ExpertBio />
        <Testimonials />
        <Metrics />
        <Footer />
      </main>
    </>
  );
};

export default Index;
