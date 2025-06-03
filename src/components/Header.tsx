
import React, { useState } from 'react';
import { Menu, X, Search, User, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAdmin = true; // Set this to your admin check logic

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'News', href: '/news' },
    { name: 'Politics', href: '/politics' },
    { name: 'Business', href: '/business' },
    { name: 'Sports', href: '/sports' },
    { name: 'Entertainment', href: '/entertainment' },
    { name: 'Technology', href: '/technology' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Banner - Ad Space */}
      <div className="bg-gray-100 h-16 sm:h-20 flex items-center justify-center border-b">
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <AdBanner size="large" className="mx-auto" />
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-red-600 to-black p-2 rounded-lg">
              <span className="text-white font-bold text-xl">BM</span>
            </div>
            <span className="text-2xl font-bold">
              <span className="text-red-600">Blaze</span>
              <span className="text-black">Mtaa</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-red-600 transition-colors">
              <Search size={20} />
            </button>
            {isAdmin && (
              <Link
                to="/write"
                className="hidden sm:flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                <PenTool size={16} />
                <span>Write</span>
              </Link>
            )}
            <button className="p-2 text-gray-600 hover:text-red-600 transition-colors">
              <User size={20} />
            </button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {isAdmin && (
                <Link
                  to="/write"
                  className="flex items-center space-x-2 mx-4 mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <PenTool size={16} />
                  <span>Write Article</span>
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Import AdBanner component locally for the header
const AdBanner = ({ size, className = '' }: { size: string; className?: string }) => {
  const sizeConfigs: { [key: string]: { width: string; height: string; text: string } } = {
    large: { width: '100%', height: '60px', text: 'Advertisement - 728x90' },
  };

  const config = sizeConfigs[size] || sizeConfigs.large;

  return (
    <div 
      className={`bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-500 text-sm ${className}`}
      style={{ width: config.width, height: config.height, maxWidth: '100%' }}
    >
      {config.text}
    </div>
  );
};

export default Header;
