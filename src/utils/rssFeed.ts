
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
    const response = await fetch(feedUrl);
    const xmlText = await response.text();
    
    return new Promise((resolve, reject) => {
      parseString(xmlText, (err, result) => {
        if (err) {
          console.error('Error parsing RSS feed:', err);
          reject(err);
          return;
        }
        
        try {
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
          reject(error);
        }
      });
    });
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    return [];
  }
};
