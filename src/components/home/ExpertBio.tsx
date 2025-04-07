
import React from 'react';
import { Badge } from '@/components/ui/badge';
import CTAButton from '../shared/CTAButton';

const ExpertBio = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xVjI4em0tMiAyaDF2MWgtMXYtMXptLTItMmgxdjFoLTF2LTF6TTM0IDI4aDR2MWgtNHYtMXptMCAwaDR2NGgtNHYtNHptMiAyaC0ydjJoMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blkr-gold/30 to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image column */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Main image with border */}
              <div className="rounded-lg overflow-hidden border-2 border-blkr-gold/50 shadow-xl shadow-blkr-gold/10">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="BLKR Trading Expert" 
                  className="w-full object-cover aspect-[4/5]" 
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 border-t-2 border-r-2 border-blkr-gold/30"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-b-2 border-l-2 border-blkr-gold/30"></div>
              
              {/* Stats cards floating over image */}
              <div className="absolute top-6 -right-10 bg-black/90 backdrop-blur-sm p-4 rounded-lg border border-gray-800 shadow-lg">
                <p className="text-sm text-gray-400">Trading Performance</p>
                <p className="text-xl font-bold text-blkr-gold">+412%</p>
                <p className="text-xs text-gray-500">Last 12 months</p>
              </div>
              
              <div className="absolute -bottom-6 left-10 bg-black/90 backdrop-blur-sm p-4 rounded-lg border border-gray-800 shadow-lg">
                <p className="text-sm text-gray-400">Students Mentored</p>
                <p className="text-xl font-bold text-blkr-gold">500+</p>
                <p className="text-xs text-gray-500">Globally</p>
              </div>
            </div>
          </div>
          
          {/* Content column */}
          <div className="order-1 lg:order-2">
            <Badge variant="outline" className="mb-4 border-blkr-gold text-blkr-gold px-4 py-1">
              Meet The Expert
            </Badge>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Top Blockchain Expert <span className="text-blkr-gold">In The Industry</span>
            </h2>
            
            <div className="space-y-6 text-gray-300">
              <p>
                With over a decade of experience in traditional markets and blockchain technology, our lead strategist has helped hundreds of traders transform their approach and achieve consistent profitability.
              </p>
              
              <p>
                Starting as a CPA managing portfolios for high-net-worth individuals, they pivoted to cryptocurrency trading in 2013, becoming one of the early adopters and educators in the space.
              </p>
              
              <p>
                Their unique methodology combines fundamental analysis, technical indicators, and risk management systems that have been proven effective across multiple market cycles.
              </p>
            </div>
            
            {/* Credentials */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
                <p className="text-sm text-gray-400">Certifications</p>
                <p className="font-medium">CFA, Series 7, Crypto Certified</p>
              </div>
              <div className="p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
                <p className="text-sm text-gray-400">Featured In</p>
                <p className="font-medium">Forbes, Bloomberg, CoinDesk</p>
              </div>
            </div>
            
            <div className="mt-8">
              <CTAButton withArrow>Book a Strategy Session</CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertBio;
