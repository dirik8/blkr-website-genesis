
import React from 'react';
import { Badge } from '@/components/ui/badge';
import CTAButton from '../shared/CTAButton';
import { 
  BarChart3, 
  TrendingUp, 
  ShieldCheck, 
  BookOpen, 
  Calendar, 
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Expert Coaching",
      description: "One-on-one mentoring sessions with professional traders tailored to your experience level and goals.",
      icon: BookOpen,
      variant: "primary"
    },
    {
      title: "Portfolio Management",
      description: "Custom portfolio strategies designed to optimize returns while managing risk across various market conditions.",
      icon: BarChart3,
      variant: "secondary"
    },
    {
      title: "Technical Analysis",
      description: "Advanced chart pattern recognition and technical indicators to identify high-probability trade setups.",
      icon: TrendingUp,
      variant: "primary"
    },
    {
      title: "Risk Management",
      description: "Comprehensive risk assessment frameworks and position sizing strategies to protect your capital.",
      icon: ShieldCheck,
      variant: "secondary"
    },
    {
      title: "Live Trading Sessions",
      description: "Join live trading sessions where professional traders analyze markets and execute trades in real-time.",
      icon: Calendar,
      variant: "primary"
    },
  ];

  const renderIcon = (Icon: any, variant: string) => (
    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
      variant === "primary" ? "bg-blkr-gold text-black" : "bg-black text-blkr-gold border border-blkr-gold"
    }`}>
      <Icon className="w-6 h-6" />
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-blkr-gold text-blkr-gold px-4 py-1">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Premium Trading <span className="text-blkr-gold">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Access our comprehensive suite of professional trading services designed to elevate your market performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105 animate-fade-in ${
                service.variant === "primary" 
                  ? "bg-black border border-blkr-gold/30"
                  : "bg-gradient-to-br from-gray-900 to-black border border-gray-800"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {renderIcon(service.icon, service.variant)}
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <a 
                href="#" 
                className="text-blkr-gold inline-flex items-center group"
              >
                Learn more 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
          
          <div className="p-8 rounded-lg bg-blkr-gold text-black col-span-1 lg:col-span-3 mt-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-playfair font-bold mb-2">Ready to transform your trading?</h3>
                <p className="opacity-75">Join BLKR Trading Community today and access all our premium services.</p>
              </div>
              <CTAButton className="bg-black text-blkr-gold hover:bg-gray-900 whitespace-nowrap">
                Explore All Services
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
