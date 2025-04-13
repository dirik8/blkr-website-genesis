
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet-async';
import { Play } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import EnhancedUrgencyBanner from '@/components/shared/EnhancedUrgencyBanner';

const Testimonials = () => {
  // State to track which video is currently playing
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  
  // Mock data for 16 video testimonials
  const videoTestimonials = Array.from({ length: 16 }, (_, index) => ({
    id: index + 1,
    title: `Success Story #${index + 1}`,
    description: `How BLKR Trading transformed my financial future`,
    thumbnail: `https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&auto=format&fit=crop&q=80`,
    // Placeholder vimeo link - will be updated by user
    videoUrl: "https://player.vimeo.com/video/76979871", 
  }));

  // Function to handle video click and display modal
  const openVideoModal = (videoId: number) => {
    setActiveVideo(videoId);
  };

  // Function to close the video modal
  const closeVideoModal = () => {
    setActiveVideo(null);
  };

  return (
    <>
      <Helmet>
        <title>Success Stories | BLKR Trading Community</title>
        <meta name="description" content="Real success stories from our members. Watch testimonials from traders who have transformed their financial futures with BLKR Trading Community." />
      </Helmet>
      
      <main className="min-h-screen bg-black text-white">
        <Navbar />
        
        <section className="py-20 pt-32 bg-gradient-to-b from-gray-900 to-black">
          <div className="container-custom">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-blkr-gold text-blkr-gold px-6 py-2 text-lg">
                Success Stories
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4">
                Our <span className="text-blkr-gold">Members</span> Speak
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how BLKR Trading Community has transformed the lives of traders worldwide. 
                Listen to their journeys, strategies, and success stories.
              </p>
            </div>
            
            {/* Urgency Banner */}
            <div className="mb-16">
              <EnhancedUrgencyBanner slotsLeft={2} />
            </div>
            
            {/* Video testimonial grid - 16 videos in 4x4 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {videoTestimonials.map((video) => (
                <div 
                  key={video.id}
                  className="relative rounded-lg overflow-hidden cursor-pointer group animate-fade-in transition-transform duration-300 hover:scale-105"
                  style={{ animationDelay: `${video.id * 0.05}s` }}
                  onClick={() => openVideoModal(video.id)}
                >
                  <div className="aspect-video bg-gray-800 relative">
                    <img 
                      src={video.thumbnail} 
                      alt={`Testimonial ${video.id}`}
                      className="w-full h-full object-cover opacity-70"
                    />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-blkr-gold/80 flex items-center justify-center transition-transform group-hover:scale-110">
                        <Play className="w-6 h-6 text-black ml-1" />
                      </div>
                    </div>
                    
                    {/* Video title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                      <h3 className="font-medium text-white">{video.title}</h3>
                      <p className="text-sm text-gray-300">{video.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Video modal */}
        {activeVideo !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl">
              <button 
                onClick={closeVideoModal}
                className="absolute -top-10 right-0 text-white hover:text-blkr-gold"
              >
                Close
              </button>
              <div className="aspect-video w-full">
                <iframe 
                  src={`${videoTestimonials[activeVideo - 1].videoUrl}?autoplay=1&title=0&byline=0&portrait=0`} 
                  className="w-full h-full" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
        
        <Footer />
      </main>
    </>
  );
};

export default Testimonials;
