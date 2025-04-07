
import { parseString } from 'xml2js';

export interface RssFeedItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
  link: string;
}

export const fetchRssFeed = async (feedUrl: string): Promise<RssFeedItem[]> => {
  try {
    const response = await fetch(feedUrl, {
      headers: {
        'Accept': 'application/rss+xml, application/xml, text/xml',
        'User-Agent': 'Mozilla/5.0 (compatible; BlogReader/1.0)'
      },
      mode: 'cors'
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.status}`);
    }
    
    const xmlText = await response.text();
    
    return new Promise((resolve, reject) => {
      parseString(xmlText, (err, result) => {
        if (err) {
          console.error('Error parsing RSS feed:', err);
          reject(err);
          return;
        }
        
        try {
          // If the RSS feed is unavailable, return mock data
          if (!result || !result.rss || !result.rss.channel) {
            return resolve(generateMockArticles());
          }
          
          const channel = result.rss.channel[0];
          const items = channel.item || [];
          
          const parsedItems: RssFeedItem[] = items.map((item: any, index: number) => {
            // Extract categories and tags
            const categories = item.category ? 
              Array.isArray(item.category) ? item.category : [item.category] 
              : ['Uncategorized'];
            
            // Extract description/excerpt
            let excerpt = '';
            if (item.description && item.description[0]) {
              const desc = item.description[0];
              // Remove HTML tags for excerpt
              excerpt = desc.replace(/<(?:.|\n)*?>/gm, '').substring(0, 150) + '...';
            }
            
            // Extract image
            let image = '/placeholder.svg';
            if (item['media:content'] && item['media:content'][0] && item['media:content'][0]['$']) {
              image = item['media:content'][0]['$'].url;
            } else if (item.enclosure && item.enclosure[0] && item.enclosure[0]['$']) {
              image = item.enclosure[0]['$'].url;
            }
            
            // Extract author
            const author = item['dc:creator'] ? 
              item['dc:creator'][0] : 
              (channel['dc:creator'] ? channel['dc:creator'][0] : 'Unknown Author');
            
            // Format date
            let pubDate = new Date();
            if (item.pubDate && item.pubDate[0]) {
              pubDate = new Date(item.pubDate[0]);
            }
            
            const formattedDate = pubDate.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            });
            
            // Extract link
            const link = item.link ? item.link[0] : '#';
            
            return {
              id: index.toString(),
              title: item.title ? item.title[0] : 'Untitled',
              excerpt,
              category: categories[0],
              author,
              date: formattedDate,
              image,
              tags: categories.slice(0, 3), // Use first 3 categories as tags
              link
            };
          });
          
          resolve(parsedItems);
        } catch (error) {
          console.error('Error processing RSS feed data:', error);
          resolve(generateMockArticles());
        }
      });
    });
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    return generateMockArticles();
  }
};

// Function to generate mock articles when the feed is unavailable
function generateMockArticles(): RssFeedItem[] {
  const mockArticles: RssFeedItem[] = [
    {
      id: '0',
      title: 'Bitcoin Reaches New All-Time High Amid Growing Institutional Adoption',
      excerpt: 'Bitcoin has surpassed its previous all-time high as institutional investors continue to pour capital into the leading cryptocurrency. Market analysts attribute this surge to increasing mainstream acceptance...',
      category: 'Bitcoin',
      author: 'BLKR Research Team',
      date: 'April 7, 2025',
      image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      tags: ['Bitcoin', 'Markets', 'Institutional'],
      link: 'https://example.com/bitcoin-article'
    },
    {
      id: '1',
      title: 'DeFi Protocol Launches Cross-Chain Bridge with Enhanced Security Features',
      excerpt: 'A leading DeFi protocol has unveiled a new cross-chain bridge designed to address vulnerabilities that have plagued similar solutions. The innovative approach incorporates multi-signature validation and time-locked transactions...',
      category: 'DeFi',
      author: 'BLKR Analysis',
      date: 'April 5, 2025',
      image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      tags: ['DeFi', 'Security', 'Cross-Chain'],
      link: 'https://example.com/defi-article'
    },
    {
      id: '2',
      title: 'SEC Approves Spot Ethereum ETF Applications from Major Asset Managers',
      excerpt: 'The Securities and Exchange Commission has approved applications for spot Ethereum ETFs from several major asset management firms. This landmark decision follows the successful launch of Bitcoin ETFs and marks another step toward mainstream crypto adoption...',
      category: 'Regulation',
      author: 'BLKR Legal Team',
      date: 'April 3, 2025',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      tags: ['Ethereum', 'Regulation', 'ETF'],
      link: 'https://example.com/eth-etf-article'
    },
    {
      id: '3',
      title: 'Algorithmic Trading Strategies for Volatile Crypto Markets',
      excerpt: 'As market volatility continues to challenge traders, algorithmic strategies are becoming increasingly important. BLKR Trading Community experts share insights on momentum-based algorithms and volatility filters that have proven effective...',
      category: 'Trading',
      author: 'BLKR Trading Desk',
      date: 'March 30, 2025',
      image: 'https://images.unsplash.com/photo-1642784353782-91d478a3fed7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      tags: ['Trading', 'Algorithms', 'Technical Analysis'],
      link: 'https://example.com/algo-trading-article'
    },
    {
      id: '4',
      title: 'Central Bank Digital Currencies: The Future of Money or Privacy Concern?',
      excerpt: 'As more countries advance their CBDC projects, debates intensify regarding the implications for financial privacy and monetary sovereignty. This analysis explores the technical architectures being proposed and their potential impact...',
      category: 'CBDC',
      author: 'BLKR Macro Research',
      date: 'March 28, 2025',
      image: 'https://images.unsplash.com/photo-1620266757065-5814239881fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      tags: ['CBDC', 'Privacy', 'Regulation'],
      link: 'https://example.com/cbdc-article'
    },
    {
      id: '5',
      title: 'NFTs Evolve Beyond Digital Art with Real-World Asset Tokenization',
      excerpt: 'The next wave of NFT innovation is focusing on tokenizing real-world assets, from real estate to luxury goods. This shift promises to bring liquidity to traditionally illiquid markets while introducing new regulatory considerations...',
      category: 'NFTs',
      author: 'BLKR Innovation Team',
      date: 'March 25, 2025',
      image: 'https://images.unsplash.com/photo-1645339280256-bb4ede553c76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      tags: ['NFT', 'Tokenization', 'RWA'],
      link: 'https://example.com/nft-rwa-article'
    }
  ];
  
  return mockArticles;
}
