
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTAButton from '@/components/shared/CTAButton';
import { Twitter, Linkedin, Globe, ArrowRight } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Alexander Morgan",
      title: "Founder & Lead Strategist",
      bio: "Former institutional trader with 15+ years of experience across traditional and crypto markets. Specializes in macro analysis and trend identification.",
      image: "/placeholder.svg",
      social: {
        twitter: "#",
        linkedin: "#",
        website: "#"
      }
    },
    {
      name: "Sophia Chen",
      title: "Head of Technical Analysis",
      bio: "Renowned analyst whose work has been featured in major financial publications. Pioneer in adapting traditional TA techniques to crypto markets.",
      image: "/placeholder.svg",
      social: {
        twitter: "#",
        linkedin: "#",
        website: "#"
      }
    },
    {
      name: "Marcus Johnson",
      title: "DeFi Specialist",
      bio: "Early adopter in the DeFi space with deep expertise in protocol analysis, yield strategies, and smart contract evaluation.",
      image: "/placeholder.svg",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "Priya Sharma",
      title: "Risk Management Expert",
      bio: "Former hedge fund risk officer who developed our proprietary position sizing and portfolio allocation frameworks.",
      image: "/placeholder.svg",
      social: {
        linkedin: "#",
        website: "#"
      }
    },
    {
      name: "James Wilson",
      title: "Psychology Coach",
      bio: "Trading psychologist who helps members overcome emotional barriers and develop the mindset required for consistent profitability.",
      image: "/placeholder.svg",
      social: {
        twitter: "#",
        website: "#"
      }
    },
    {
      name: "Ana Rodriguez",
      title: "Education Director",
      bio: "Curriculum designer who translates complex trading concepts into structured, actionable learning paths for traders of all levels.",
      image: "/placeholder.svg",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      name: "David Kim",
      title: "Algorithmic Trading Expert",
      bio: "Computer scientist and trader specializing in automated strategies and quantitative analysis for both spot and derivatives markets.",
      image: "/placeholder.svg",
      social: {
        linkedin: "#",
        website: "#"
      }
    },
    {
      name: "Lisa Thomson",
      title: "Community Manager",
      bio: "The heart of our community who ensures members connect, collaborate, and get the support they need throughout their journey.",
      image: "/placeholder.svg",
      social: {
        twitter: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team | BLKR Trading Community</title>
        <meta name="description" content="Meet the elite traders and market experts behind the BLKR Trading Community. Our team brings decades of experience from institutional finance, technical analysis, DeFi, and trading psychology." />
        <meta name="keywords" content="trading experts, crypto traders, trading mentors, technical analysts, trading team" />
      </Helmet>
      
      <main className="min-h-screen bg-black text-white">
        <Navbar />
        
        <section className="pt-32 pb-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
                Our <span className="text-blkr-gold">Expert</span> Team
              </h1>
              <p className="text-lg text-gray-300">
                Meet the elite traders and market specialists who guide our community.
                Bringing decades of combined experience from institutional finance to blockchain innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 flex flex-col"
                >
                  <div className="aspect-square bg-gray-800 relative">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-blkr-gold text-sm mb-3">{member.title}</p>
                    <p className="text-gray-400 text-sm mb-6 flex-grow">{member.bio}</p>
                    <div className="flex gap-3">
                      {member.social.twitter && (
                        <a 
                          href={member.social.twitter} 
                          className="p-2 bg-gray-800 text-gray-300 hover:text-blkr-gold rounded-full transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name}'s Twitter`}
                        >
                          <Twitter className="h-4 w-4" />
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a 
                          href={member.social.linkedin}
                          className="p-2 bg-gray-800 text-gray-300 hover:text-blkr-gold rounded-full transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name}'s LinkedIn`}
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      {member.social.website && (
                        <a 
                          href={member.social.website}
                          className="p-2 bg-gray-800 text-gray-300 hover:text-blkr-gold rounded-full transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name}'s Website`}
                        >
                          <Globe className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="max-w-4xl mx-auto mb-20">
              <div className="bg-gradient-to-r from-gray-900 to-black rounded-lg p-10 border border-gray-800">
                <h2 className="text-3xl font-playfair font-bold mb-6 text-center">Our Collective Expertise</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  <div className="bg-black/30 p-6 rounded-lg">
                    <div className="text-4xl font-bold text-blkr-gold mb-2">85+</div>
                    <p className="text-gray-300">Years Combined Experience</p>
                  </div>
                  <div className="bg-black/30 p-6 rounded-lg">
                    <div className="text-4xl font-bold text-blkr-gold mb-2">$500M+</div>
                    <p className="text-gray-300">Assets Managed</p>
                  </div>
                  <div className="bg-black/30 p-6 rounded-lg">
                    <div className="text-4xl font-bold text-blkr-gold mb-2">12+</div>
                    <p className="text-gray-300">Market Specializations</p>
                  </div>
                  <div className="bg-black/30 p-6 rounded-lg">
                    <div className="text-4xl font-bold text-blkr-gold mb-2">24/7</div>
                    <p className="text-gray-300">Global Market Coverage</p>
                  </div>
                  <div className="bg-black/30 p-6 rounded-lg">
                    <div className="text-4xl font-bold text-blkr-gold mb-2">1,000+</div>
                    <p className="text-gray-300">Traders Mentored</p>
                  </div>
                  <div className="bg-black/30 p-6 rounded-lg">
                    <div className="text-4xl font-bold text-blkr-gold mb-2">8</div>
                    <p className="text-gray-300">Published Books</p>
                  </div>
                </div>
                <p className="text-center text-gray-300 mt-6">
                  Our team combines diverse backgrounds from institutional trading, blockchain technology, 
                  academia, and entrepreneurship to provide a holistic approach to market mastery.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <h3 className="text-2xl font-bold mb-6">Our Values</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold mb-2">Performance-Driven</h4>
                    <p className="text-gray-300">
                      We measure our success by your results. Our team is committed to strategies that deliver 
                      consistent performance across market conditions.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Intellectual Honesty</h4>
                    <p className="text-gray-300">
                      Markets change, and so do our approaches. We constantly test our assumptions and adapt 
                      our methods based on empirical results rather than dogma.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Community Focus</h4>
                    <p className="text-gray-300">
                      We believe in the power of collaborative learning. Our experts don't just teach—they 
                      participate actively in our community, learning alongside members.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <h3 className="text-2xl font-bold mb-6">Our Approach</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold mb-2">Multi-Strategy Framework</h4>
                    <p className="text-gray-300">
                      Rather than advocating a single "winning system," we teach multiple complementary strategies 
                      that can be applied based on market conditions and personal preferences.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Risk-First Mentality</h4>
                    <p className="text-gray-300">
                      Before focusing on returns, we ensure members master risk management. Preservation of 
                      capital is always prioritized over pursuit of gains.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Holistic Development</h4>
                    <p className="text-gray-300">
                      We recognize that success requires technical skill, psychological mastery, and proper infrastructure.
                      Our coaching addresses all three dimensions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blkr-gold/10 rounded-lg p-10 border border-blkr-gold/20 text-center mb-20">
              <h2 className="text-3xl font-playfair font-bold mb-6">Join Our Team</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
                We're always looking for exceptional talent to join our community of expert traders.
                If you have a proven track record and passion for education, we'd love to hear from you.
              </p>
              <CTAButton variant="secondary" withArrow>
                View Open Positions
              </CTAButton>
            </div>
            
            <div className="text-center">
              <h2 className="text-3xl font-playfair font-bold mb-6">Learn From Our Experts</h2>
              <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
                Ready to transform your trading under the guidance of our expert team?
                Apply now for membership to access personalized coaching and support.
              </p>
              <CTAButton size="lg" withArrow>
                Apply for Membership
              </CTAButton>
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
};

export default Team;
