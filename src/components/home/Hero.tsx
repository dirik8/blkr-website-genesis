
import React from 'react';
import CTAButton from '../shared/CTAButton';
import { ArrowRight, BookOpen } from 'lucide-react';
import EnhancedUrgencyBanner from '../shared/EnhancedUrgencyBanner';
import { useApplicationForm } from '@/contexts/ApplicationFormContext';
import { motion } from 'framer-motion';

const Hero = () => {
  const { openForm } = useApplicationForm();
  
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background with hero image and gradient overlay */}
      <div className="absolute inset-0 z-0">
        {/* Hero background image - using a dark trading/finance themed image */}
        <img 
          src="https://images.unsplash.com/photo-1639322537288-639122f8ec16?q=80&w=2070&auto=format&fit=crop" 
          alt="Trading background" 
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black"></div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMzMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXYxaC0xdi0xem0yLTJoMXYxaC0xVjI4em0tMiAyaDF2MWgtMXYtMXptLTItMmgxdjFoLTF2LTF6TTM0IDI4aDR2MWgtNHYtMXptMCAwaDR2NGgtNHYtNHptMiAyaC0ydjJoMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Community tag - styled like in the example */}
          <div className="inline-block mb-5 px-6 py-2 rounded-full border border-blkr-gold/30 bg-black/70 backdrop-blur-sm">
            <span className="text-blkr-gold font-medium">BLKR Trading Community</span>
          </div>
          
          {/* Main heading - with Inner Circle highlighted */}
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join the <span className="text-blkr-gold">Inner Circle</span> of Elite <br /> Traders
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Unlock the Secrets to Financial Freedom
          </motion.p>
          
          {/* CTA buttons - larger and more spaced as per design */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <CTAButton size="lg" withArrow onClick={openForm} className="text-lg py-6 px-12 w-full sm:w-auto">
              Apply for Membership
            </CTAButton>
            <CTAButton variant="secondary" size="lg" href="/programs" className="text-lg py-6 px-12 w-full sm:w-auto">
              Explore Programs
            </CTAButton>
          </motion.div>

          {/* Blog button */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <CTAButton variant="outline" href="/blog" className="inline-flex items-center">
              <BookOpen className="w-4 h-4 mr-2" />
              Read Our Latest Market Insights
              <ArrowRight className="w-4 h-4 ml-2" />
            </CTAButton>
          </motion.div>
          
          {/* Add urgency banner - aligned with the design */}
          <div className="mb-16 max-w-2xl mx-auto">
            <EnhancedUrgencyBanner slotsLeft={2} />
          </div>
          
          {/* Floating stats */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
