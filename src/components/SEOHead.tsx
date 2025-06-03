
import React from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'BlazeMtaa - Breaking News, Politics, Business & Entertainment',
  description = 'Stay informed with BlazeMtaa - Your trusted source for breaking news, politics, business, sports and entertainment from Kenya and around the world.',
  keywords = 'Kenya news, breaking news, politics, business, sports, entertainment, technology, BlazeMtaa',
  image = '/og-image.jpg',
  url = 'https://blazemtaa.com',
  type = 'website'
}) => {
  React.useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', 'BlazeMtaa', true);
    
    // Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    
    // Additional SEO tags
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('author', 'BlazeMtaa');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    
  }, [title, description, keywords, image, url, type]);

  return null;
};

export default SEOHead;
