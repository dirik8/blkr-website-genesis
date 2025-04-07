
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTAButton from '@/components/shared/CTAButton';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | BLKR Trading Community</title>
        <meta name="description" content="Learn about the BLKR Trading Community, our vision for democratizing elite crypto trading, and our commitment to transparency and performance." />
        <meta name="keywords" content="BLKR trading, crypto experts, trading community, about us, trading mentors" />
      </Helmet>
      
      <main className="min-h-screen bg-black text-white">
        <Navbar />
        
        <section className="pt-32 pb-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
                About <span className="text-blkr-gold">BLKR</span> Trading
              </h1>
              <p className="text-lg text-gray-300 mb-12">
                The inner circle of elite traders committed to excellence and results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-3xl font-playfair font-bold mb-6">The Founder's Journey</h2>
                <p className="mb-4 text-gray-300">
                  What started as a CPA's passion for financial markets evolved into a groundbreaking approach to crypto trading. Our founder transitioned from corporate finance to full-time trading after discovering unique patterns in market behavior.
                </p>
                <p className="mb-6 text-gray-300">
                  After years of refining strategies and building a substantial portfolio, the demand for guidance from friends and colleagues grew too large to ignore. BLKR Trading was born from the vision of democratizing access to elite-level trading strategies.
                </p>
                <CTAButton variant="secondary" withArrow>
                  Read the Full Story
                </CTAButton>
              </div>
              <div className="bg-gray-900 aspect-video rounded-lg overflow-hidden flex items-center justify-center">
                <span className="text-gray-600 text-lg">Founder Video</span>
              </div>
            </div>
            
            <div className="mb-20">
              <h2 className="text-3xl font-playfair font-bold text-center mb-12">Our Vision</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-bold mb-4 text-blkr-gold">Transparency</h3>
                  <p className="text-gray-300">
                    Every strategy, signal, and recommendation comes with detailed analysis and rationale. We show our work and take pride in educated decisions.
                  </p>
                </div>
                <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-bold mb-4 text-blkr-gold">Performance</h3>
                  <p className="text-gray-300">
                    Results matter. We measure success by the growth of our members' portfolios and the consistency of positive returns in varying market conditions.
                  </p>
                </div>
                <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-bold mb-4 text-blkr-gold">Independence</h3>
                  <p className="text-gray-300">
                    We teach members to become self-sufficient traders with their own validated strategies, not dependent on signals or alerts indefinitely.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-10 border border-gray-800 mb-20">
              <h2 className="text-3xl font-playfair font-bold text-center mb-12">The BLKR Difference</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex flex-col space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-blkr-gold text-black flex items-center justify-center font-bold flex-shrink-0 mr-4">01</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Exclusive Community</h3>
                      <p className="text-gray-300">Limited membership ensures personalized attention and maintains the quality of our community discussions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-blkr-gold text-black flex items-center justify-center font-bold flex-shrink-0 mr-4">02</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Proprietary Analysis</h3>
                      <p className="text-gray-300">Our methods go beyond technical indicators to include sentiment analysis and institutional flow tracking.</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-blkr-gold text-black flex items-center justify-center font-bold flex-shrink-0 mr-4">03</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Track Record</h3>
                      <p className="text-gray-300">Documented success across bull and bear markets with transparent reporting of all results.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-blkr-gold text-black flex items-center justify-center font-bold flex-shrink-0 mr-4">04</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Practical Education</h3>
                      <p className="text-gray-300">Theory combined with real-world application and mentorship creates traders who succeed long-term.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mb-20">
              <h2 className="text-3xl font-playfair font-bold mb-8">Our Impact By The Numbers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
                  <p className="text-5xl font-bold text-blkr-gold mb-2">1,000+</p>
                  <p className="text-gray-300">Members Served</p>
                </div>
                <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
                  <p className="text-5xl font-bold text-blkr-gold mb-2">87%</p>
                  <p className="text-gray-300">Average ROI Growth</p>
                </div>
                <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
                  <p className="text-5xl font-bold text-blkr-gold mb-2">24/7</p>
                  <p className="text-gray-300">Market Coverage</p>
                </div>
                <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
                  <p className="text-5xl font-bold text-blkr-gold mb-2">12+</p>
                  <p className="text-gray-300">Years of Experience</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blkr-gold/10 rounded-lg p-10 border border-blkr-gold/20 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold mb-6">Ready to Join the Elite?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
                Take the first step toward transforming your trading performance and join a community of like-minded professionals.
              </p>
              <CTAButton size="lg" withArrow>Apply for Membership</CTAButton>
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
};

export default About;
