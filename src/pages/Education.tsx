
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTAButton from '@/components/shared/CTAButton';
import { Play, BookOpen, Calendar, Users, ArrowRight } from 'lucide-react';

const Education = () => {
  const masterclasses = [
    {
      title: "Day Trading Mastery",
      description: "Learn the fundamental and advanced techniques for successful intraday trading in crypto markets.",
      modules: 8,
      duration: "4 weeks",
      level: "Intermediate",
      image: "/placeholder.svg"
    },
    {
      title: "Swing Trading Blueprint",
      description: "Perfect the art of capturing medium-term price movements with our comprehensive swing trading system.",
      modules: 6,
      duration: "3 weeks",
      level: "Beginner",
      image: "/placeholder.svg"
    },
    {
      title: "Crypto Selection Framework",
      description: "Develop a systematic approach to identifying high-potential cryptocurrencies before they surge.",
      modules: 5,
      duration: "2 weeks",
      level: "All Levels",
      image: "/placeholder.svg"
    },
    {
      title: "Risk Management Blueprint",
      description: "Master the most critical aspect of trading with our data-driven approach to position sizing and risk control.",
      modules: 4,
      duration: "2 weeks",
      level: "All Levels",
      image: "/placeholder.svg"
    },
    {
      title: "Technical Analysis Deep Dive",
      description: "Go beyond basic patterns and indicators to develop a nuanced understanding of market structure.",
      modules: 10,
      duration: "5 weeks",
      level: "Advanced",
      image: "/placeholder.svg"
    },
    {
      title: "Psychological Edge",
      description: "Develop the mindset of elite traders and overcome the emotional barriers to consistent profitability.",
      modules: 6,
      duration: "3 weeks",
      level: "All Levels",
      image: "/placeholder.svg"
    }
  ];

  const webinars = [
    {
      title: "Market Cycles & Positioning",
      date: "April 15, 2025",
      host: "Michael Richards",
      registered: 142
    },
    {
      title: "NFT Trading Strategies",
      date: "April 22, 2025",
      host: "Sarah Johnson",
      registered: 98
    },
    {
      title: "Institutional Flow Analysis",
      date: "April 29, 2025",
      host: "David Thompson",
      registered: 176
    }
  ];

  return (
    <>
      <Helmet>
        <title>Education Hub | BLKR Trading Community</title>
        <meta name="description" content="Access premium trading education with BLKR Trading Community's masterclasses, workshops, and personalized learning paths for traders of all levels." />
        <meta name="keywords" content="trading education, crypto masterclass, trading workshops, trading psychology, technical analysis course" />
      </Helmet>
      
      <main className="min-h-screen bg-black text-white">
        <Navbar />
        
        <section className="pt-32 pb-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
                Education <span className="text-blkr-gold">Hub</span>
              </h1>
              <p className="text-lg text-gray-300">
                Comprehensive trading education designed by professionals for serious traders.
                From fundamentals to advanced strategies, our curriculum delivers results.
              </p>
            </div>
            
            <div className="mb-20">
              <h2 className="text-3xl font-playfair font-bold mb-10">Featured Masterclasses</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {masterclasses.map((course, index) => (
                  <div key={index} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 flex flex-col">
                    <div className="aspect-video bg-gray-800 relative">
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                        <button className="w-14 h-14 rounded-full bg-blkr-gold flex items-center justify-center">
                          <Play className="h-6 w-6 text-black" />
                        </button>
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                      <p className="text-gray-400 mb-6 flex-grow">{course.description}</p>
                      <div className="grid grid-cols-3 gap-2 mb-6">
                        <div className="text-center p-2 bg-gray-800 rounded">
                          <p className="text-xs text-gray-400">Modules</p>
                          <p className="font-bold">{course.modules}</p>
                        </div>
                        <div className="text-center p-2 bg-gray-800 rounded">
                          <p className="text-xs text-gray-400">Duration</p>
                          <p className="font-bold">{course.duration}</p>
                        </div>
                        <div className="text-center p-2 bg-gray-800 rounded">
                          <p className="text-xs text-gray-400">Level</p>
                          <p className="font-bold">{course.level}</p>
                        </div>
                      </div>
                      <CTAButton variant="secondary" className="w-full justify-center">
                        View Course
                      </CTAButton>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-20">
              <div className="bg-gradient-to-r from-gray-900 to-black rounded-lg p-10 border border-gray-800">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <h2 className="text-3xl font-playfair font-bold mb-6">Learning Pathways</h2>
                    <p className="text-gray-300 mb-6">
                      Our structured learning paths guide you from foundational knowledge to advanced mastery based on your experience level and goals.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-blkr-gold/20 flex items-center justify-center mr-4">
                          <BookOpen className="w-6 h-6 text-blkr-gold" />
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">Beginner to Intermediate</h3>
                          <p className="text-gray-400 text-sm">0-12 months learning curve</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-blkr-gold/20 flex items-center justify-center mr-4">
                          <BookOpen className="w-6 h-6 text-blkr-gold" />
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">Intermediate to Advanced</h3>
                          <p className="text-gray-400 text-sm">6-18 months learning curve</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-blkr-gold/20 flex items-center justify-center mr-4">
                          <BookOpen className="w-6 h-6 text-blkr-gold" />
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">Professional Development</h3>
                          <p className="text-gray-400 text-sm">Ongoing mastery program</p>
                        </div>
                      </div>
                    </div>
                    
                    <CTAButton withArrow>Explore Learning Paths</CTAButton>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-8">
                    <h3 className="text-xl font-bold mb-6">Upcoming Live Webinars</h3>
                    <div className="space-y-6">
                      {webinars.map((webinar, index) => (
                        <div key={index} className="flex items-start border-b border-gray-700 pb-4 last:border-b-0 last:pb-0">
                          <div className="w-12 h-12 rounded bg-blkr-gold/20 flex items-center justify-center mr-4 flex-shrink-0">
                            <Calendar className="w-6 h-6 text-blkr-gold" />
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-bold mb-1">{webinar.title}</h4>
                            <p className="text-sm text-gray-400 mb-2">{webinar.date} • Host: {webinar.host}</p>
                            <div className="flex items-center">
                              <Users className="w-4 h-4 text-gray-500 mr-1" />
                              <span className="text-xs text-gray-500">{webinar.registered} registered</span>
                            </div>
                          </div>
                          <button className="text-blkr-gold hover:text-blkr-gold/80 transition-colors">Register</button>
                        </div>
                      ))}
                    </div>
                    <button className="w-full mt-6 text-center text-blkr-gold hover:text-blkr-gold/80 transition-colors flex items-center justify-center">
                      View All Webinars <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-20">
              <h2 className="text-3xl font-playfair font-bold mb-10 text-center">Our Teaching Approach</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                  <div className="w-14 h-14 rounded-full bg-blkr-gold/20 flex items-center justify-center mb-6">
                    <BookOpen className="w-7 h-7 text-blkr-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Theory & Principles</h3>
                  <p className="text-gray-300">
                    Core knowledge and frameworks that provide the foundation for all successful trading strategies. Understanding the "why" behind the "what."
                  </p>
                </div>
                
                <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                  <div className="w-14 h-14 rounded-full bg-blkr-gold/20 flex items-center justify-center mb-6">
                    <Play className="w-7 h-7 text-blkr-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Practical Application</h3>
                  <p className="text-gray-300">
                    Hands-on exercises and real-market examples that demonstrate how to apply concepts in live trading environments.
                  </p>
                </div>
                
                <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                  <div className="w-14 h-14 rounded-full bg-blkr-gold/20 flex items-center justify-center mb-6">
                    <Users className="w-7 h-7 text-blkr-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Mentorship & Feedback</h3>
                  <p className="text-gray-300">
                    Personal guidance and trade reviews from experienced mentors who help accelerate your learning and prevent common mistakes.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-blkr-gold/10 rounded-lg p-10 border border-blkr-gold/20 text-center">
              <h2 className="text-3xl font-playfair font-bold mb-6">Ready to Transform Your Trading?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
                Access our complete education library and live training sessions as a BLKR member.
              </p>
              <CTAButton size="lg" withArrow>Apply for Membership</CTAButton>
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
};

export default Education;
