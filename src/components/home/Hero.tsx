
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
        {/* Hero background image */}
        <img 
          src="public/lovable-uploads/9f99e2a9-3ad8-4a40-a628-112a47ba97f0.png" 
          alt="Trading background" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Community tag */}
          <div className="inline-block mb-5 px-6 py-2 rounded-full border border-blkr-gold/30 bg-black/70 backdrop-blur-sm">
            <span className="text-blkr-gold font-medium">BLKR Trading Community</span>
          </div>
          
          {/* Main heading */}
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join the <span className="text-blkr-gold">Inner Circle</span> of Elite Traders
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Unlock the Secrets to Financial Freedom
          </motion.p>
          
          {/* CTA buttons - side by side with equal width */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <CTAButton 
              size="lg" 
              withArrow 
              onClick={openForm} 
              className="text-lg py-6 px-12 flex-1 w-full"
            >
              Apply for Membership
            </CTAButton>
            
            <CTAButton 
              variant="secondary" 
              size="lg" 
              href="/programs" 
              className="text-lg py-6 px-12 flex-1 w-full"
            >
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
            <CTAButton variant="outline" href="/blog" className="inline-flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Read Our Latest Market Insights
              <ArrowRight className="w-4 h-4" />
            </CTAButton>
          </motion.div>
          
          {/* Urgency banner */}
          <div className="mb-16 max-w-2xl mx-auto">
            <EnhancedUrgencyBanner slotsLeft={2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
