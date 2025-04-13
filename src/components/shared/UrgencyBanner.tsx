
import React, { useState, useEffect } from 'react';
import { AlertCircle, Clock, Sparkles } from 'lucide-react';
import CTAButton from './CTAButton';

interface UrgencyBannerProps {
  slotsLeft: number;
  href: string;
  className?: string;
}

const UrgencyBanner: React.FC<UrgencyBannerProps> = ({ slotsLeft, href, className }) => {
  const [isBlinking, setIsBlinking] = useState(false);
  
  // Blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking(prev => !prev);
    }, 800);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative overflow-hidden rounded-lg border-2 border-red-500 bg-black/90 p-6 ${className}`}>
      {/* Animated sparks in corners */}
      <div className="absolute -top-1 -left-1">
        <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
      </div>
      <div className="absolute -top-1 -right-1">
        <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" style={{ animationDelay: "0.3s" }} />
      </div>
      <div className="absolute -bottom-1 -left-1">
        <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" style={{ animationDelay: "0.6s" }} />
      </div>
      <div className="absolute -bottom-1 -right-1">
        <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" style={{ animationDelay: "0.9s" }} />
      </div>
      
      {/* Border glow effect */}
      <div className="absolute inset-0 border-2 border-red-500/30 rounded-lg animate-pulse"></div>
      
      <div className="flex flex-col items-center text-center z-10 relative">
        <div className="flex items-center gap-2 mb-2">
          <AlertCircle className={`h-5 w-5 ${isBlinking ? 'text-red-500' : 'text-red-400'} transition-colors`} />
          <h3 className={`font-bold text-lg ${isBlinking ? 'text-red-500' : 'text-red-400'} transition-colors`}>
            URGENT: Limited Availability
          </h3>
          <AlertCircle className={`h-5 w-5 ${isBlinking ? 'text-red-500' : 'text-red-400'} transition-colors`} />
        </div>
        
        <p className="text-white mb-4">
          Only <span className="text-red-500 font-bold text-lg">{slotsLeft} slots</span> remaining for new members this month
        </p>
        
        <div className="flex items-center gap-2 mb-4 text-gray-300">
          <Clock className="h-4 w-4 text-blkr-gold" />
          <span className="text-sm">Applications close soon</span>
        </div>
        
        <CTAButton href={href} size="lg" className="animate-bounce" withArrow>
          Secure Your Spot Now
        </CTAButton>
      </div>
    </div>
  );
};

export default UrgencyBanner;
