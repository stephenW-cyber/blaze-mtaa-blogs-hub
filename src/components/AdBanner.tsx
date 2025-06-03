
import React from 'react';

interface AdBannerProps {
  size: 'large' | 'medium' | 'small' | 'sidebar';
  className?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ size, className = '' }) => {
  const sizeConfigs = {
    large: { width: '728px', height: '90px', text: 'Advertisement - 728x90' },
    medium: { width: '300px', height: '250px', text: 'Advertisement - 300x250' },
    small: { width: '320px', height: '50px', text: 'Advertisement - 320x50' },
    sidebar: { width: '160px', height: '600px', text: 'Advertisement - 160x600' }
  };

  const config = sizeConfigs[size];

  return (
    <div 
      className={`bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-500 text-sm ${className}`}
      style={{ width: config.width, height: config.height, maxWidth: '100%' }}
    >
      {config.text}
    </div>
  );
};

export default AdBanner;
