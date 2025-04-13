
import React, { useState, useEffect } from 'react';
import { AlertCircle, Clock, Zap } from 'lucide-react';
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

  return (
    <motion.div 
      className={`relative overflow-hidden rounded-lg border border-red-500 bg-black/90 p-4 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-red-800/20 to-red-900/20 z-0"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            className="flex items-center gap-2 mb-2"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <AlertCircle className="h-5 w-5 text-red-500" />
            <h3 className="font-bold text-lg text-red-500 uppercase tracking-wider">
              Last Chance: Only {slotsLeft} Slots Remaining!
            </h3>
            <AlertCircle className="h-5 w-5 text-red-500" />
          </motion.div>
          
          <p className="text-white text-sm mb-3">
            Don't miss your opportunity to join our elite trading community.
          </p>
          
          <div className="grid grid-cols-3 gap-3 mb-4 w-full max-w-xs">
            <div className="bg-gray-800/80 p-2 rounded-lg border border-gray-700 text-center">
              <div className="text-xl font-bold text-white">{timerHours.toString().padStart(2, '0')}</div>
              <div className="text-xs text-gray-400">Hours</div>
            </div>
            <div className="bg-gray-800/80 p-2 rounded-lg border border-gray-700 text-center">
              <div className="text-xl font-bold text-white">{timerMinutes.toString().padStart(2, '0')}</div>
              <div className="text-xs text-gray-400">Minutes</div>
            </div>
            <div className="bg-gray-800/80 p-2 rounded-lg border border-gray-700 text-center">
              <div className="text-xl font-bold text-white">{timerSeconds.toString().padStart(2, '0')}</div>
              <div className="text-xs text-gray-400">Seconds</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 mb-3 text-xs">
            <span className="text-yellow-400">✓ 98% success rate for early members</span>
            <span className="text-yellow-400">
              <Clock className="w-3 h-3 inline mr-1" />
              Applications closing soon
            </span>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CTAButton 
              onClick={openForm} 
              size="default" 
              className="font-bold group bg-blkr-gold text-black px-6 py-3"
            >
              <Zap className="mr-2 h-4 w-4" />
              Secure Your Spot Now
            </CTAButton>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default EnhancedUrgencyBanner;
