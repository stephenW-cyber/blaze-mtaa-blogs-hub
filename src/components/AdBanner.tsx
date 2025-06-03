
import React from 'react';

interface AdBannerProps {
  size: 'large' | 'medium' | 'small' | 'sidebar';
  className?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({ size, className = '' }) => {
  const sizeConfigs = {
    large: { 
      width: 'w-full max-w-4xl', 
      height: 'h-20 sm:h-24 md:h-28', 
      text: 'Advertisement - 728x90',
      responsive: 'block'
    },
    medium: { 
      width: 'w-full max-w-sm', 
      height: 'h-40 sm:h-48 md:h-64', 
      text: 'Advertisement - 300x250',
      responsive: 'block'
    },
    small: { 
      width: 'w-full max-w-sm', 
      height: 'h-12 sm:h-16', 
      text: 'Advertisement - 320x50',
      responsive: 'block sm:hidden'
    },
    sidebar: { 
      width: 'w-full max-w-xs', 
      height: 'h-96 sm:h-[600px]', 
      text: 'Advertisement - 160x600',
      responsive: 'hidden lg:block'
    }
  };

  const config = sizeConfigs[size];

  return (
    <div 
      className={`${config.responsive} bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-500 text-xs sm:text-sm mx-auto ${config.width} ${config.height} ${className}`}
    >
      <span className="text-center px-2">{config.text}</span>
    </div>
  );
};

export default AdBanner;
