
export const mockArticles = [
  {
    id: '1',
    title: 'Kenya Unveils New Digital Infrastructure Plan to Boost Economic Growth',
    excerpt: 'The government announces a comprehensive digital transformation strategy aimed at modernizing key sectors and creating opportunities for tech innovation.',
    author: 'Sarah Kimani',
    publishedAt: '2 hours ago',
    category: 'Business',
    imageUrl: '/api/placeholder/800/400',
    views: 12500,
    featured: true
  },
  {
    id: '2',
    title: 'Breaking: Parliament Passes Landmark Climate Action Bill',
    excerpt: 'Legislators approve new environmental legislation that sets ambitious targets for carbon reduction and renewable energy adoption.',
    author: 'John Mwangi',
    publishedAt: '4 hours ago',
    category: 'Politics',
    imageUrl: '/api/placeholder/800/400',
    views: 8900,
    featured: false
  },
  {
    id: '3',
    title: 'Tech Startup Scene Thrives as Investment Reaches Record High',
    excerpt: 'Local and international investors pour millions into Kenyan startups, signaling confidence in the innovation ecosystem.',
    author: 'Grace Wanjiku',
    publishedAt: '6 hours ago',
    category: 'Technology',
    imageUrl: '/api/placeholder/800/400',
    views: 6700,
    featured: false
  },
  {
    id: '4',
    title: 'Sports: Harambee Stars Secure Qualification for Continental Cup',
    excerpt: 'The national football team books their spot in the prestigious tournament after a thrilling victory in the final qualifier.',
    author: 'Michael Ochieng',
    publishedAt: '8 hours ago',
    category: 'Sports',
    imageUrl: '/api/placeholder/800/400',
    views: 15200,
    featured: false
  },
  {
    id: '5',
    title: 'Entertainment Industry Celebrates Record-Breaking Film Festival',
    excerpt: 'Local filmmakers showcase their talent at the annual festival, attracting international attention and distribution deals.',
    author: 'Faith Njeri',
    publishedAt: '12 hours ago',
    category: 'Entertainment',
    imageUrl: '/api/placeholder/800/400',
    views: 4300,
    featured: false
  },
  {
    id: '6',
    title: 'Economic Report Shows Strong Recovery in Tourism Sector',
    excerpt: 'Latest data reveals significant growth in visitor numbers and revenue, boosting optimism for the hospitality industry.',
    author: 'David Kariuki',
    publishedAt: '1 day ago',
    category: 'Business',
    imageUrl: '/api/placeholder/800/400',
    views: 7800,
    featured: false
  }
];

export const categorizedArticles = {
  featured: mockArticles.filter(article => article.featured),
  latest: mockArticles.slice(0, 3),
  trending: mockArticles.sort((a, b) => b.views - a.views).slice(0, 4)
};
