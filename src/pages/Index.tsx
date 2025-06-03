
import React from 'react';
import Layout from '../components/Layout';
import SEOHead from '../components/SEOHead';
import ArticleCard from '../components/ArticleCard';
import AdBanner from '../components/AdBanner';
import TrendingTopics from '../components/TrendingTopics';
import Newsletter from '../components/Newsletter';
import { categorizedArticles } from '../data/mockData';
import { ChevronRight, Flame, Clock } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      <SEOHead />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section with Featured Article */}
        <section className="mb-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {categorizedArticles.featured.length > 0 && (
                <ArticleCard 
                  article={categorizedArticles.featured[0]} 
                  variant="featured" 
                />
              )}
            </div>
            
            {/* Sidebar - Trending Topics */}
            <div className="space-y-6">
              <TrendingTopics />
              <AdBanner size="medium" />
            </div>
          </div>
        </section>

        {/* Ad Banner */}
        <section className="mb-12 flex justify-center">
          <AdBanner size="large" />
        </section>

        {/* Latest News */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Clock className="text-blue-600" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Latest News</h2>
            </div>
            <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors">
              <span>View all</span>
              <ChevronRight size={16} />
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categorizedArticles.latest.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        {/* Middle Ad Banner */}
        <section className="mb-12">
          <div className="grid lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <AdBanner size="large" />
            </div>
            <div className="flex justify-center lg:justify-end">
              <AdBanner size="sidebar" />
            </div>
          </div>
        </section>

        {/* Trending Stories */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Flame className="text-orange-500" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Trending Stories</h2>
            </div>
            <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 transition-colors">
              <span>View all</span>
              <ChevronRight size={16} />
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categorizedArticles.trending.map((article) => (
              <ArticleCard key={article.id} article={article} variant="small" />
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mb-12">
          <div className="max-w-md mx-auto">
            <Newsletter />
          </div>
        </section>

        {/* Bottom Ad Space */}
        <section className="flex justify-center">
          <AdBanner size="large" />
        </section>
      </div>
    </Layout>
  );
};

export default Index;
