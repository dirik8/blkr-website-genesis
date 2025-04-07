
import React from 'react';
import { Check } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      title: "Elite Trading Signals",
      description: "Access to premium, high-probability trading signals across forex, crypto, and commodities markets with detailed entry, exit, and risk management parameters."
    },
    {
      title: "Personalized Strategy",
      description: "Custom-tailored trading plans designed specifically for your financial goals, risk tolerance, and available capital to maximize your potential returns."
    },
    {
      title: "Direct Mentorship",
      description: "One-on-one coaching sessions with professional traders who have proven track records, guiding you through complex market scenarios."
    },
    {
      title: "Exclusive Community",
      description: "Join a selective network of serious traders sharing insights, strategies, and support in a premium environment free from noise and distractions."
    },
    {
      title: "Advanced Analytics",
      description: "Leverage cutting-edge technical analysis tools and proprietary market indicators developed through years of professional trading experience."
    },
    {
      title: "Risk Management Mastery",
      description: "Learn the critical discipline of capital preservation through our proven risk management frameworks that protect and grow your portfolio."
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-80 z-0"></div>
      
      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blkr-gold/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blkr-gold/30 to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Amazing Benefits <span className="text-blkr-gold">With Us</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join the BLKR Trading Community and gain access to exclusive benefits that will transform your trading career and financial future.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 transition-all duration-300 hover:border-blkr-gold/50 hover:shadow-lg hover:shadow-blkr-gold/5 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 p-2 rounded-full bg-blkr-gold/10 w-10 h-10 flex items-center justify-center">
                <Check className="w-5 h-5 text-blkr-gold" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
