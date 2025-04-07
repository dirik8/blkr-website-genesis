
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTAButton from '@/components/shared/CTAButton';
import { Search, Calendar, User, Tag, ArrowRight, ExternalLink } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const blogPosts = [
    {
      id: 1,
      title: "The Ultimate Guide to Trading in Bear Markets",
      excerpt: "Learn the essential strategies to not only survive but thrive during extended market downturns.",
      category: "Market Analysis",
      author: "Michael Richards",
      date: "April 2, 2025",
      image: "/placeholder.svg",
      tags: ["Bear Market", "Risk Management", "Strategy"]
    },
    {
      id: 2,
      title: "Understanding Liquidity Pools in DeFi Trading",
      excerpt: "A comprehensive exploration of how decentralized finance liquidity works and how to leverage it.",
      category: "DeFi",
      author: "Sarah Johnson",
      date: "March 28, 2025",
      image: "/placeholder.svg",
      tags: ["DeFi", "Liquidity", "Yield Farming"]
    },
    {
      id: 3,
      title: "5 Technical Indicators Most Traders Use Incorrectly",
      excerpt: "Common mistakes and misconceptions when applying popular technical analysis tools to crypto markets.",
      category: "Technical Analysis",
      author: "David Thompson",
      date: "March 21, 2025",
      image: "/placeholder.svg",
      tags: ["Technical Analysis", "Indicators", "Strategy"]
    },
    {
      id: 4,
      title: "The Psychology of FOMO: How to Stay Rational in Bull Runs",
      excerpt: "Psychological techniques to maintain discipline and avoid emotional trading during market euphoria.",
      category: "Psychology",
      author: "Anna Martinez",
      date: "March 15, 2025",
      image: "/placeholder.svg",
      tags: ["Psychology", "Bull Market", "Discipline"]
    },
    {
      id: 5,
      title: "Implementing Dollar-Cost Averaging in Volatile Markets",
      excerpt: "How to structure a systematic DCA strategy for long-term cryptocurrency portfolio growth.",
      category: "Strategy",
      author: "James Wilson",
      date: "March 10, 2025",
      image: "/placeholder.svg",
      tags: ["DCA", "Portfolio", "Long-term"]
    },
    {
      id: 6,
      title: "Crypto Regulation: What Traders Need to Know in 2025",
      excerpt: "The latest regulatory developments across major markets and how they impact trading strategies.",
      category: "Regulation",
      author: "Lisa Chen",
      date: "March 5, 2025",
      image: "/placeholder.svg",
      tags: ["Regulation", "Compliance", "Global Markets"]
    }
  ];
  
  const newsFeeds = [
    {
      title: "Bitcoin Surpasses Previous All-Time High Amid Institutional Buying",
      source: "CoinTelegraph",
      time: "2 hours ago",
      url: "#"
    },
    {
      title: "SEC Approves New Crypto ETF Applications from Major Asset Managers",
      source: "CoinTelegraph",
      time: "4 hours ago",
      url: "#"
    },
    {
      title: "DeFi Protocol Launches Cross-Chain Bridge with Enhanced Security Features",
      source: "CoinTelegraph",
      time: "6 hours ago",
      url: "#"
    },
    {
      title: "Central Bank Digital Currencies: Country X Announces Pilot Program",
      source: "CoinTelegraph",
      time: "12 hours ago",
      url: "#"
    }
  ];
  
  const categories = [
    { name: "Market Analysis", count: 24 },
    { name: "Technical Analysis", count: 18 },
    { name: "DeFi", count: 15 },
    { name: "Psychology", count: 12 },
    { name: "Strategy", count: 22 },
    { name: "Regulation", count: 9 }
  ];

  return (
    <>
      <Helmet>
        <title>Blog | BLKR Trading Community</title>
        <meta name="description" content="Expert insights, market analysis, and trading strategies from BLKR Trading Community. Stay informed with our latest articles on cryptocurrency and trading." />
        <meta name="keywords" content="trading blog, crypto analysis, market insights, trading strategies, investment education" />
      </Helmet>
      
      <main className="min-h-screen bg-black text-white">
        <Navbar />
        
        <section className="pt-32 pb-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
                The <span className="text-blkr-gold">BLKR</span> Blog
              </h1>
              <p className="text-lg text-gray-300">
                Expert insights, market analysis, and strategic perspectives to enhance your trading knowledge.
              </p>
              <div className="flex mt-8 max-w-lg mx-auto">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input 
                    type="text" 
                    placeholder="Search articles..."
                    className="pl-10 bg-gray-900 border-gray-700 text-white w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <CTAButton className="ml-2">
                  Search
                </CTAButton>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-playfair font-bold mb-8">Latest Articles</h2>
                <div className="grid grid-cols-1 gap-10">
                  {blogPosts.map((post) => (
                    <div key={post.id} className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                      <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="aspect-video md:aspect-square bg-gray-800 md:h-full">
                          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-6 md:col-span-2">
                          <div className="flex items-center mb-3">
                            <span className="text-xs font-medium bg-blkr-gold/20 text-blkr-gold px-2 py-1 rounded">
                              {post.category}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold mb-3 hover:text-blkr-gold transition-colors">
                            <a href={`/blog/${post.id}`}>{post.title}</a>
                          </h3>
                          <p className="text-gray-400 mb-4">{post.excerpt}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag, index) => (
                              <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <div className="flex items-center mr-4">
                              <User className="h-4 w-4 mr-1" />
                              {post.author}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {post.date}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10 flex justify-center">
                  <CTAButton variant="secondary" withArrow>
                    Load More Articles
                  </CTAButton>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-bold mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <a href="#" className="flex justify-between items-center py-2 hover:text-blkr-gold transition-colors">
                          <span>{category.name}</span>
                          <span className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full">
                            {category.count}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    Crypto News Updates
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </h3>
                  <div className="space-y-4">
                    {newsFeeds.map((news, index) => (
                      <div key={index} className="border-b border-gray-800 pb-4 last:border-b-0 last:pb-0">
                        <a 
                          href={news.url} 
                          className="text-sm font-medium hover:text-blkr-gold transition-colors block mb-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {news.title}
                        </a>
                        <div className="flex items-center text-xs text-gray-400">
                          <span>{news.source}</span>
                          <span className="mx-2">•</span>
                          <span>{news.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <a 
                    href="https://cointelegraph.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 text-blkr-gold hover:text-blkr-gold/80 text-sm flex items-center"
                  >
                    View All News <ArrowRight className="ml-1 h-3 w-3" />
                  </a>
                </div>
                
                <div className="bg-blkr-gold/10 p-6 rounded-lg border border-blkr-gold/20">
                  <h3 className="text-xl font-bold mb-3">Join Our Newsletter</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Get weekly trading insights and market analysis directly to your inbox.
                  </p>
                  <div className="space-y-3">
                    <Input 
                      type="email" 
                      placeholder="Your email address"
                      className="bg-gray-800/50 border-gray-700 text-white"
                    />
                    <CTAButton className="w-full justify-center">
                      Subscribe
                    </CTAButton>
                  </div>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center">
                  <h3 className="text-xl font-bold mb-3">Want More Insights?</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Join BLKR Trading Community for exclusive content and personalized trading guidance.
                  </p>
                  <CTAButton variant="secondary" withArrow className="w-full justify-center">
                    Apply Now
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
};

export default Blog;
