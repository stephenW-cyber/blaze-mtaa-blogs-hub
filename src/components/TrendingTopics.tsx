
import React from 'react';
import { TrendingUp } from 'lucide-react';

const TrendingTopics = () => {
  const topics = [
    '#KenyaElections2024',
    '#TechInnovation',
    '#ClimateChange',
    '#BusinessGrowth',
    '#SportsUpdate',
    '#EntertainmentNews'
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-2 mb-4">
        <TrendingUp className="text-orange-500" size={20} />
        <h3 className="text-lg font-bold text-gray-900">Trending Topics</h3>
      </div>
      
      <div className="space-y-2">
        {topics.map((topic, index) => (
          <button
            key={index}
            className="block w-full text-left px-3 py-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;
