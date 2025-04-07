
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTAButton from '@/components/shared/CTAButton';
import { Check, ArrowRight, Calendar, MessageSquare, BarChart } from 'lucide-react';

const Coaching = () => {
  const coachingBenefits = [
    "Personalized trading plan tailored to your goals",
    "Regular one-on-one sessions with an elite trader",
    "Private signal channel for high-probability setups",
    "Daily trade reviews and performance analysis",
    "Strategy adjustments based on market conditions",
    "Direct messaging access during market hours",
    "Monthly portfolio evaluation and optimization",
    "Specialized training in your areas of interest"
  ];

  const coachingProcess = [
    {
      title: "Initial Assessment",
      description: "We evaluate your current trading skills, knowledge gaps, and specific goals to create a custom development plan.",
      icon: BarChart
    },
    {
      title: "Strategy Development",
      description: "Working together to build or refine your personal trading system that aligns with your personality and schedule.",
      icon: MessageSquare
    },
    {
      title: "Implementation & Practice",
      description: "Guided application of strategies with real-time feedback and adjustments to accelerate your learning curve.",
      icon: Calendar
    }
  ];

  return (
    <>
      <Helmet>
        <title>One-on-One Coaching | BLKR Trading Community</title>
        <meta name="description" content="Accelerate your trading success with personalized coaching from BLKR Trading Community's elite traders. Custom strategies, daily feedback, and direct support." />
        <meta name="keywords" content="trading coach, personal trading mentor, one-on-one trading coaching, crypto coaching, trading guidance" />
      </Helmet>
      
      <main className="min-h-screen bg-black text-white">
        <Navbar />
        
        <section className="pt-32 pb-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto mb-16">
              <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-center">
                One-on-One <span className="text-blkr-gold">Coaching</span>
              </h1>
              <p className="text-lg text-gray-300 text-center mb-10">
                Accelerate your trading performance with personalized guidance from 
                traders who have mastered the markets through years of experience.
              </p>
              
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center mb-8">
                <span className="text-gray-600 text-lg">Coaching Introduction Video</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-3xl font-playfair font-bold mb-6">Elite Coaching Program</h2>
                <p className="text-gray-300 mb-6">
                  Our coaching program offers an unparalleled opportunity to work directly with professional traders who have consistently outperformed the market in all conditions.
                </p>
                <p className="text-gray-300 mb-8">
                  Unlike generic courses or signals, coaching provides customized guidance specifically designed for your unique situation, goals, and challenges.
                </p>
                
                <div className="space-y-3 mb-8">
                  {coachingBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-blkr-gold mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <CTAButton withArrow>
                  Apply for Elite Coaching
                </CTAButton>
              </div>
              
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Coaching Packages</h3>
                  
                  <div className="space-y-6">
                    <div className="border-b border-gray-800 pb-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="font-bold text-lg">Starter Package</h4>
                          <p className="text-gray-400">One month intensive program</p>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold">$3,997</span>
                        </div>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-300 mb-4">
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-blkr-gold mr-2" />
                          4 one-hour sessions
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-blkr-gold mr-2" />
                          Trading plan development
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-blkr-gold mr-2" />
                          Email support between sessions
                        </li>
                      </ul>
                    </div>
                    
                    <div className="border-b border-gray-800 pb-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="font-bold text-lg">Professional Package</h4>
                          <p className="text-gray-400">Three month program</p>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold">$8,997</span>
                        </div>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-300 mb-4">
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-blkr-gold mr-2" />
                          12 one-hour sessions
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-blkr-gold mr-2" />
                          Complete trading system development
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-blkr-gold mr-2" />
                          Direct messaging support
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-blkr-gold mr-2" />
                          Weekly trade reviews
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="font-bold text-lg">Elite Package</h4>
                          <p className="text-gray-400">Six month comprehensive program</p>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold">$14,997</span>
                        </div>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-300 mb-6">
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-blkr-gold mr-2" />
                          24 one-hour sessions
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-blkr-gold mr-2" />
                          Complete trading system mastery
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-blkr-gold mr-2" />
                          24/7 priority support
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-blkr-gold mr-2" />
                          Daily trade reviews
                        </li>
                        <li className="flex items-center">
                          <Check className="h-4 w-4 text-blkr-gold mr-2" />
                          VIP signals access
                        </li>
                      </ul>
                      <CTAButton className="w-full justify-center">
                        Apply Now
                      </CTAButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-20">
              <h2 className="text-3xl font-playfair font-bold mb-10 text-center">The Coaching Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {coachingProcess.map((step, index) => (
                  <div key={index} className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                    <div className="w-14 h-14 rounded-full bg-blkr-gold/20 flex items-center justify-center mb-6">
                      <step.icon className="w-7 h-7 text-blkr-gold" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-20">
              <div className="bg-gradient-to-r from-gray-900 to-black rounded-lg p-10 border border-gray-800">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div className="bg-gray-900 aspect-video rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 text-lg">Testimonial Video</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-playfair font-bold mb-6">Client Success Story</h2>
                    <blockquote className="text-gray-300 mb-6 border-l-4 border-blkr-gold pl-6 italic">
                      "The one-on-one coaching I received completely transformed my approach to trading. In just three months, I went from inconsistent results to a structured system that generates reliable profits. The personalized guidance was exactly what I needed."
                    </blockquote>
                    <div>
                      <p className="font-bold">Michael Crawford</p>
                      <p className="text-sm text-gray-400">Professional Trader, BLKR Member since 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blkr-gold/10 rounded-lg p-10 border border-blkr-gold/20 mb-20">
              <h2 className="text-3xl font-playfair font-bold mb-8 text-center">Meet Our Coaches</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-gray-800 mb-4"></div>
                  <h3 className="text-xl font-bold mb-1">Alex Morgan</h3>
                  <p className="text-sm text-gray-400 mb-4">Head of Day Trading</p>
                  <p className="text-gray-300 text-sm mb-4">
                    Former institutional trader with 12+ years of experience specializing in technical analysis and momentum strategies.
                  </p>
                  <a href="#" className="text-blkr-gold hover:text-blkr-gold/80 text-sm">View Full Profile</a>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-gray-800 mb-4"></div>
                  <h3 className="text-xl font-bold mb-1">Sophia Chen</h3>
                  <p className="text-sm text-gray-400 mb-4">Crypto Strategy Specialist</p>
                  <p className="text-gray-300 text-sm mb-4">
                    Early crypto adopter and algorithmic trader who has developed proprietary indicators for blockchain asset evaluation.
                  </p>
                  <a href="#" className="text-blkr-gold hover:text-blkr-gold/80 text-sm">View Full Profile</a>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-gray-800 mb-4"></div>
                  <h3 className="text-xl font-bold mb-1">Marcus Johnson</h3>
                  <p className="text-sm text-gray-400 mb-4">Psychology & Risk Expert</p>
                  <p className="text-gray-300 text-sm mb-4">
                    Combines trading expertise with a background in behavioral finance to help traders overcome psychological barriers.
                  </p>
                  <a href="#" className="text-blkr-gold hover:text-blkr-gold/80 text-sm">View Full Profile</a>
                </div>
              </div>
              <div className="text-center">
                <CTAButton variant="secondary" withArrow>
                  View All Coaches
                </CTAButton>
              </div>
            </div>
            
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-playfair font-bold mb-6">Ready to Accelerate Your Trading?</h2>
              <p className="text-lg mb-8 text-gray-300">
                Our coaching spots are limited to ensure quality. Submit your application today to be considered for our next coaching cohort.
              </p>
              <CTAButton size="lg" withArrow>
                Apply for Coaching
              </CTAButton>
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
};

export default Coaching;
