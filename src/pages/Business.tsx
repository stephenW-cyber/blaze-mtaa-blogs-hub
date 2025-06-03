
import React from 'react';
import Layout from '../components/Layout';
import SEOHead from '../components/SEOHead';
import ArticleCard from '../components/ArticleCard';
import AdBanner from '../components/AdBanner';
import { categorizedArticles } from '../data/mockData';

const Business = () => {
  const businessArticles = categorizedArticles.latest.filter(article => 
    article.category === 'Business'
  );

  return (
    <Layout>
      <SEOHead 
        title="Business - BlazeMtaa"
        description="Business news, market updates and economic analysis - BlazeMtaa"
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Business</h1>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {businessArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>

            <div className="flex justify-center mb-8">
              <AdBanner size="large" />
            </div>
          </div>

          <div className="lg:w-1/4 space-y-6">
            <AdBanner size="sidebar" />
            <AdBanner size="medium" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Business;
