
import React, { useEffect, useState } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CTAButton from '@/components/shared/CTAButton';
import { Calendar, User, Tag, ArrowLeft, BookOpen, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchRssFeed, RssFeedItem } from '@/utils/rssFeed';
import { Card, CardContent } from '@/components/ui/card';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<RssFeedItem | null>(null);
  const rssUrl = 'https://cryptoslate.com/feed/';

  const { data: posts, isLoading, isError } = useQuery({
    queryKey: ['rssFeed'],
    queryFn: () => fetchRssFeed(rssUrl)
  });

  useEffect(() => {
    if (posts && posts.length > 0) {
      const foundPost = posts.find(item => item.id === id);
      if (foundPost) {
        setPost(foundPost);
      }
    }
  }, [posts, id]);

  // Get related posts (same category or tags)
  const relatedPosts = posts?.filter(p => 
    p.id !== id && (
      p.category === post?.category || 
      p.tags.some(tag => post?.tags.includes(tag))
    )
  ).slice(0, 3) || [];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blkr-gold mx-auto"></div>
          <p className="mt-4 text-gray-300">Loading article...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">Error loading article</p>
          <Link to="/blog" className="text-blkr-gold hover:underline">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | BLKR Trading Community</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ')} />
      </Helmet>
      
      <main className="min-h-screen bg-black text-white">
        <Navbar />
        
        <section className="pt-32 pb-16">
          <div className="container-custom">
            <Link 
              to="/blog" 
              className="flex items-center text-blkr-gold hover:text-blkr-gold/80 mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Articles
            </Link>
            
            <article className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center text-sm text-gray-400 mb-8">
                <div className="flex items-center mr-6 mb-2">
                  <User className="h-4 w-4 mr-1" />
                  {post.author}
                </div>
                <div className="flex items-center mr-6 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
                <div className="flex items-center mb-2">
                  <Tag className="h-4 w-4 mr-1" />
                  {post.category}
                </div>
              </div>
              
              <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden mb-8 border border-gray-800">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/placeholder.svg';
                  }}
                />
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-gray-300 mb-6">{post.excerpt}</p>
                
                <div className="my-8 p-6 bg-gray-900 rounded-lg border border-gray-800">
                  <p className="font-medium mb-4">
                    This article is sourced from an external RSS feed. To read the full article:
                  </p>
                  <CTAButton
                    href={post.link}
                    externalLink={true}
                    className="inline-flex"
                  >
                    <BookOpen className="mr-2" />
                    Read Full Article
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </CTAButton>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-800">
                <h3 className="text-xl font-bold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {relatedPosts.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <Card key={relatedPost.id} className="bg-gray-900 border border-gray-800">
                        <div className="aspect-video">
                          <img 
                            src={relatedPost.image} 
                            alt={relatedPost.title} 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = '/placeholder.svg';
                            }} 
                          />
                        </div>
                        <CardContent className="p-4">
                          <div className="text-xs text-blkr-gold mb-2">{relatedPost.category}</div>
                          <h4 className="font-bold mb-2 hover:text-blkr-gold transition-colors">
                            <Link to={`/blog/${relatedPost.id}`}>{relatedPost.title}</Link>
                          </h4>
                          <div className="flex items-center text-xs text-gray-400">
                            <Calendar className="h-3 w-3 mr-1" />
                            {relatedPost.date}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 mt-12">
                <h3 className="text-xl font-bold mb-4">Want More Trading Insights?</h3>
                <p className="text-gray-300 mb-6">
                  Join the BLKR Trading Community for exclusive content, personalized guidance, and access to our premium trading strategies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <CTAButton withArrow href="/contact">
                    Apply for Membership
                  </CTAButton>
                  <CTAButton variant="secondary" href="/blog">
                    Explore More Articles
                  </CTAButton>
                </div>
              </div>
            </article>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
};

export default BlogPost;
