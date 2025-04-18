
import React from 'react';
import { Calendar, User } from 'lucide-react';
import { RssFeedItem } from '@/utils/rssFeed';
import { Button } from '@/components/ui/button';

interface BlogArticleCardProps {
  post: RssFeedItem;
}

const BlogArticleCard = ({ post }: BlogArticleCardProps) => {
  const handleReadMore = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(post.link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-blkr-gold/30 transition-all">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="aspect-video md:aspect-square bg-gray-800 md:h-full">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback image if the original fails to load
              (e.target as HTMLImageElement).src = '/placeholder.svg';
            }}
          />
        </div>
        <div className="p-6 md:col-span-2">
          <div className="flex items-center mb-3">
            <span className="text-xs font-medium bg-blkr-gold/20 text-blkr-gold px-2 py-1 rounded">
              {post.category}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-3 hover:text-blkr-gold transition-colors">
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              {post.title}
            </a>
          </h3>
          <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, index) => (
              <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between">
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
            <Button 
              variant="ghost" 
              className="text-blkr-gold hover:text-blkr-gold/80 hover:bg-blkr-gold/10"
              onClick={handleReadMore}
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArticleCard;
