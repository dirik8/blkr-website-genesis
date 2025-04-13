
import React, { useState, useEffect } from 'react';
import { AlertCircle, Clock, Sparkles, TrendingUp, Zap } from 'lucide-react';
import CTAButton from './CTAButton';
import { useApplicationForm } from '@/contexts/ApplicationFormContext';
import { motion } from 'framer-motion';

interface EnhancedUrgencyBannerProps {
  slotsLeft: number;
  className?: string;
}

const EnhancedUrgencyBanner: React.FC<EnhancedUrgencyBannerProps> = ({ slotsLeft, className }) => {
  const { openForm } = useApplicationForm();
  const [timerHours, setTimerHours] = useState(23);
  const [timerMinutes, setTimerMinutes] = useState(59);
  const [timerSeconds, setTimerSeconds] = useState(59);
  
  // Countdown timer effect
  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (timerSeconds > 0) {
        setTimerSeconds(timerSeconds - 1);
      } else if (timerMinutes > 0) {
        setTimerMinutes(timerMinutes - 1);
        setTimerSeconds(59);
      } else if (timerHours > 0) {
        setTimerHours(timerHours - 1);
        setTimerMinutes(59);
        setTimerSeconds(59);
      }
    }, 1000);
    
    return () => clearInterval(timerInterval);
  }, [timerHours, timerMinutes, timerSeconds]);

  // Pulse effect variants
  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      boxShadow: [
        "0 0 0 0 rgba(239, 68, 68, 0.2)",
        "0 0 0 10px rgba(239, 68, 68, 0.2)",
        "0 0 0 0 rgba(239, 68, 68, 0.2)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop" // Properly typed as "loop" (one of the allowed values)
      }
    }
  };

  return (
    <motion.div 
      className={`relative overflow-hidden rounded-lg border-2 border-red-500 bg-black/90 p-6 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      variants={pulseVariants}
      whileInView="pulse"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-yellow-900/20 to-red-900/20 animate-gradient-x z-0"></div>
      
      {/* Border flash effect */}
      <div className="absolute inset-0 border-2 border-red-500/30 rounded-lg animate-pulse"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="absolute -top-2 -left-2">
          <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse" />
        </div>
        <div className="absolute -top-2 -right-2">
          <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse" style={{ animationDelay: "0.5s" }} />
        </div>
        
        <div className="flex flex-col items-center text-center">
          <motion.div 
            className="flex items-center gap-2 mb-3"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <AlertCircle className="h-6 w-6 text-red-500" />
            <h3 className="font-bold text-xl text-red-500 uppercase tracking-wider">
              Last Chance: Only {slotsLeft} Slots Remaining!
            </h3>
            <AlertCircle className="h-6 w-6 text-red-500" />
          </motion.div>
          
          <p className="text-white text-lg mb-4 max-w-md">
            Exclusive membership spots are almost gone. Don't miss your opportunity to join our elite trading community.
          </p>
          
          {/* Timer */}
          <div className="grid grid-cols-3 gap-4 mb-6 w-full max-w-xs">
            <div className="bg-gray-800/80 p-3 rounded-lg border border-gray-700 text-center">
              <div className="text-2xl font-bold text-white">{timerHours.toString().padStart(2, '0')}</div>
              <div className="text-xs text-gray-400">Hours</div>
            </div>
            <div className="bg-gray-800/80 p-3 rounded-lg border border-gray-700 text-center">
              <div className="text-2xl font-bold text-white">{timerMinutes.toString().padStart(2, '0')}</div>
              <div className="text-xs text-gray-400">Minutes</div>
            </div>
            <div className="bg-gray-800/80 p-3 rounded-lg border border-gray-700 text-center">
              <div className="text-2xl font-bold text-white">{timerSeconds.toString().padStart(2, '0')}</div>
              <div className="text-xs text-gray-400">Seconds</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
            <div className="flex items-center text-yellow-400 text-sm">
              <TrendingUp className="w-4 h-4 mr-1" />
              <span>98% success rate for early members</span>
            </div>
            
            <div className="flex items-center text-yellow-400 text-sm">
              <Clock className="w-4 h-4 mr-1" />
              <span>Applications closing soon</span>
            </div>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CTAButton 
              onClick={openForm} 
              size="lg" 
              className="font-bold text-lg group relative overflow-hidden"
            >
              <Zap className="mr-2 h-5 w-5 group-hover:animate-ping" />
              Secure Your Spot Now
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-400/50 rounded-md transition-all duration-300"></div>
            </CTAButton>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default EnhancedUrgencyBanner;
