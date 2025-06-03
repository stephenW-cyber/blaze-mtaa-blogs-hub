
import React from 'react';
import { Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ArticleCardProps {
  article: {
    id: string;
    title: string;
    excerpt: string;
    author: string;
    publishedAt: string;
    category: string;
    imageUrl?: string;
    featured?: boolean;
  };
  variant?: 'featured' | 'normal' | 'small';
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, variant = 'normal' }) => {
  const getCardClasses = () => {
    switch (variant) {
      case 'featured':
        return 'md:col-span-2 lg:col-span-3';
      case 'small':
        return 'col-span-1';
      default:
        return 'col-span-1';
    }
  };

  const getImageClasses = () => {
    switch (variant) {
      case 'featured':
        return 'h-64 md:h-80';
      case 'small':
        return 'h-32';
      default:
        return 'h-48';
    }
  };

  return (
    <article className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${getCardClasses()}`}>
      <Link to={`/article/${article.id}`}>
        <div className={`relative ${getImageClasses()} bg-gray-200`}>
          {article.imageUrl ? (
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <span>Image placeholder</span>
            </div>
          )}
          <div className="absolute top-2 left-2">
            <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
              {article.category}
            </span>
          </div>
          {/* BlazeMtaa Watermark */}
          <div className="absolute top-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs font-medium">
            <span className="text-red-400">Blaze</span>
            <span className="text-white">Mtaa</span>
          </div>
        </div>
      </Link>
      
      <div className="p-4">
        <Link to={`/article/${article.id}`}>
          <h2 className={`font-bold text-gray-900 hover:text-red-600 transition-colors mb-2 ${
            variant === 'featured' ? 'text-xl md:text-2xl' : 'text-lg'
          }`}>
            {article.title}
          </h2>
        </Link>
        
        <p className="text-gray-600 mb-3 line-clamp-2">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User size={14} />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock size={14} />
              <span>{article.publishedAt}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
