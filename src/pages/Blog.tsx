import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTAButton from '@/components/shared/CTAButton';
import { Search, Calendar, User, Tag, ArrowRight, ExternalLink, BookOpen } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchRssFeed, RssFeedItem } from '@/utils/rssFeed';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination';
import BlogArticleCard from '@/components/blog/BlogArticleCard';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState('');
  const postsPerPage = 4;
  
  const rssUrl = 'https://cryptoslate.com/feed/';
  
  const { data: blogPosts = [], isLoading, isError } = useQuery({
    queryKey: ['rssFeed'],
    queryFn: () => fetchRssFeed(rssUrl)
  });
  
  const newsFeeds = [
    {
      title: "Bitcoin Surpasses Previous All-Time High Amid Institutional Buying",
      source: "CoinTelegraph",
      time: "2 hours ago",
      url: "https://cointelegraph.com/news/bitcoin-price-ath-institutional-buyers"
    },
    {
      title: "SEC Approves New Crypto ETF Applications from Major Asset Managers",
      source: "CoinTelegraph",
      time: "4 hours ago",
      url: "https://cointelegraph.com/news/sec-approves-etf-applications"
    },
    {
      title: "DeFi Protocol Launches Cross-Chain Bridge with Enhanced Security Features",
      source: "CoinTelegraph",
      time: "6 hours ago",
      url: "https://cointelegraph.com/news/defi-cross-chain-bridge-security"
    },
    {
      title: "Central Bank Digital Currencies: Country X Announces Pilot Program",
      source: "CoinTelegraph",
      time: "12 hours ago",
      url: "https://cointelegraph.com/news/cbdc-pilot-program-launch"
    }
  ];
  
  const categoriesMap = blogPosts.reduce((acc: {[key: string]: number}, post) => {
    if (post.category) {
      acc[post.category] = (acc[post.category] || 0) + 1;
    }
    return acc;
  }, {});
  
  const categories = Object.keys(categoriesMap).map(name => ({
    name,
    count: categoriesMap[name]
  }));
  
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
  };
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribing email:", email);
      alert(`Thank you for subscribing with ${email}!`);
      setEmail('');
    } else {
      alert("Please enter your email address");
    }
  };

  const featuredPost = blogPosts[0];

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
              <form onSubmit={handleSearch} className="flex mt-8 max-w-lg mx-auto">
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
                <CTAButton type="submit" className="ml-2">
                  Search
                </CTAButton>
              </form>
            </div>

            {featuredPost && !searchQuery && currentPage === 1 && (
              <div className="mb-16 bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-video lg:aspect-auto lg:h-full bg-gray-800">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="inline-block mb-3 bg-blkr-gold/20 px-3 py-1 rounded text-sm">
                      <span className="text-blkr-gold font-medium">{featuredPost.category}</span>
                    </div>
                    <h2 className="text-3xl font-bold mb-4 hover:text-blkr-gold transition-colors">
                      <a href={featuredPost.link} target="_blank" rel="noopener noreferrer">{featuredPost.title}</a>
                    </h2>
                    <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-400 mb-6">
                      <div className="flex items-center mr-4">
                        <User className="h-4 w-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {featuredPost.date}
                      </div>
                    </div>
                    <CTAButton 
                      variant="secondary" 
                      href={featuredPost.link}
                      externalLink={true}
                      withArrow
                    >
                      <BookOpen className="h-4 w-4 mr-1" />
                      Read Featured Article
                    </CTAButton>
                  </div>
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-playfair font-bold mb-8">
                  {searchQuery ? `Search Results for "${searchQuery}"` : "Latest Articles"}
                </h2>
                
                {isLoading ? (
                  <div className="flex justify-center items-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blkr-gold"></div>
                  </div>
                ) : isError ? (
                  <div className="bg-gray-900 rounded-lg p-8 text-center">
                    <p className="text-xl mb-4">Could not load articles</p>
                    <p className="text-gray-400">Please try again later</p>
                  </div>
                ) : filteredPosts.length === 0 ? (
                  <div className="bg-gray-900 rounded-lg p-8 text-center">
                    <p className="text-xl mb-4">No articles found</p>
                    <p className="text-gray-400">Try adjusting your search terms</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-10">
                    {currentPosts.map((post) => (
                      <BlogArticleCard key={post.id} post={post} />
                    ))}
                  </div>
                )}
                
                {totalPages > 1 && (
                  <Pagination className="mt-10">
                    <PaginationContent>
                      {currentPage > 1 && (
                        <PaginationItem>
                          <PaginationPrevious 
                            onClick={() => handlePageChange(currentPage - 1)}
                            className="cursor-pointer"
                          />
                        </PaginationItem>
                      )}
                      
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <PaginationItem key={page}>
                          <PaginationLink
                            isActive={page === currentPage}
                            onClick={() => handlePageChange(page)}
                            className="cursor-pointer"
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                      
                      {currentPage < totalPages && (
                        <PaginationItem>
                          <PaginationNext 
                            onClick={() => handlePageChange(currentPage + 1)} 
                            className="cursor-pointer"
                          />
                        </PaginationItem>
                      )}
                    </PaginationContent>
                  </Pagination>
                )}
              </div>
              
              <div className="space-y-8">
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-bold mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.length > 0 ? (
                      categories.map((category, index) => (
                        <li key={index}>
                          <button 
                            onClick={() => {
                              setSearchQuery(category.name);
                              setCurrentPage(1);
                            }} 
                            className="flex justify-between items-center w-full py-2 text-left hover:text-blkr-gold transition-colors"
                          >
                            <span>{category.name}</span>
                            <span className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full">
                              {category.count}
                            </span>
                          </button>
                        </li>
                      ))
                    ) : (
                      <li className="text-gray-400">Loading categories...</li>
                    )}
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
                  <form onSubmit={handleSubscribe} className="space-y-3">
                    <Input 
                      type="email" 
                      placeholder="Your email address"
                      className="bg-gray-800/50 border-gray-700 text-white"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <CTAButton type="submit" className="w-full justify-center">
                      Subscribe
                    </CTAButton>
                  </form>
                </div>
                
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 text-center">
                  <h3 className="text-xl font-bold mb-3">Want More Insights?</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Join BLKR Trading Community for exclusive content and personalized trading guidance.
                  </p>
                  <CTAButton variant="secondary" withArrow className="w-full justify-center" href="/contact">
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
