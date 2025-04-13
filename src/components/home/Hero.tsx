
import React from 'react';
import CTAButton from '../shared/CTAButton';
import { ArrowRight, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xVjI4em0tMiAyaDF2MWgtMXYtMXptLTItMmgxdjFoLTF2LTF6TTM0IDI4aDR2MWgtNHYtMXptMCAwaDR2NGgtNHYtNHptMiAyaC0ydjJoMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-3 bg-blkr-gold/10 px-4 py-1 rounded-full border border-blkr-gold/20">
            <span className="text-blkr-gold font-medium">BLKR Trading Community</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 tracking-tight">
            Join the <span className="text-blkr-gold">Inner Circle</span> of Elite Traders
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Unlock the Secrets to Financial Freedom
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton size="lg" withArrow href="/contact#contact-form">
              Apply for Membership
            </CTAButton>
            <CTAButton variant="secondary" size="lg" href="/programs">
              Explore Programs
            </CTAButton>
          </div>

          {/* Blog button */}
          <div className="mt-6">
            <CTAButton variant="outline" href="/blog" className="inline-flex items-center">
              <BookOpen className="w-4 h-4 mr-2" />
              Read Our Latest Market Insights
              <ArrowRight className="w-4 h-4 ml-2" />
            </CTAButton>
          </div>
          
          {/* Floating stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { value: "1,000+", label: "Community Members" },
              { value: "$100M+", label: "Profits Generated" },
              { value: "24/7", label: "Trading Support" },
              { value: "92%", label: "Success Rate" }
            ].map((stat, index) => (
              <div key={index} className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 lg:p-6 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-blkr-gold font-bold text-2xl lg:text-3xl">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowRight size={24} className="rotate-90 text-blkr-gold/70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
