
import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Play, Star } from 'lucide-react';

const Testimonials = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  
  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Day Trader, 2 Years",
      image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=400&h=400&fit=crop&crop=faces&q=80",
      quote: "Before joining BLKR, I was consistently losing money. Their risk management framework completely transformed my approach to the markets. I'm now profitable every month.",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      role: "Crypto Investor, 3 Years",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces&q=80",
      quote: "The technical analysis training and daily signals have been game-changing. I've 10x'd my portfolio in under a year following their strategies.",
      rating: 5,
    },
    {
      name: "Marcus Williams",
      role: "Forex Trader, 5 Years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces&q=80",
      quote: "As someone who's tried multiple trading communities, BLKR stands above the rest. The mentorship program alone is worth the investment.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Professional Trader, 7 Years",
      image: "https://images.unsplash.com/photo-1619008054759-cd58ca933107?w=400&h=400&fit=crop&crop=faces&q=80",
      quote: "Even after years in the industry, the BLKR methods showed me blind spots in my strategy. My win rate has increased by 32% since implementing their framework.",
      rating: 5,
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-blkr-gold text-blkr-gold px-4 py-1">
            Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Our <span className="text-blkr-gold">Members</span> Speak
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear directly from our community members who have transformed their trading careers with BLKR.
          </p>
        </div>
        
        {/* Video testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div 
              key={index}
              className="relative rounded-lg overflow-hidden cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setActiveVideo(index)}
            >
              {/* Placeholder thumbnail - in a real implementation, these would be actual video thumbnails */}
              <div className="aspect-video bg-gray-800 relative">
                <img 
                  src={`https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&auto=format&fit=crop&q=80`} 
                  alt={`Testimonial video ${index}`}
                  className="w-full h-full object-cover opacity-60"
                />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-blkr-gold/80 flex items-center justify-center transition-transform group-hover:scale-110">
                    <Play className="w-6 h-6 text-black ml-1" />
                  </div>
                </div>
                
                {/* Video title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <h3 className="font-medium text-white">Trading Success Story #{index}</h3>
                  <p className="text-sm text-gray-300">BLKR Member Testimonial</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Written testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-lg border border-gray-800 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex gap-1 mb-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-blkr-gold text-blkr-gold" />
                    ))}
                  </div>
                  <p className="italic mb-4 text-gray-300">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
