
import React from 'react';
import { Facebook, Twitter, Instagram, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const categories = [
    'News', 'Politics', 'Business', 'Sports', 'Entertainment', 'Technology'
  ];

  const quickLinks = [
    'About Us', 'Contact', 'Privacy Policy', 'Terms of Service', 'Advertise'
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: '#', hoverColor: 'hover:bg-blue-600' },
    { name: 'Twitter', icon: Twitter, url: '#', hoverColor: 'hover:bg-blue-400' },
    { name: 'Instagram', icon: Instagram, url: '#', hoverColor: 'hover:bg-pink-600' },
    { name: 'Threads', icon: MessageCircle, url: '#', hoverColor: 'hover:bg-gray-600' },
    { name: 'WhatsApp', icon: MessageCircle, url: '#', hoverColor: 'hover:bg-green-600' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-orange-500 p-2 rounded-lg">
                <span className="text-white font-bold text-xl">BM</span>
              </div>
              <span className="text-2xl font-bold">
                <span className="text-red-500">Blaze</span>
                <span className="text-black">Mtaa</span>
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted source for breaking news, in-depth analysis, and compelling stories from Kenya and around the world.
            </p>
            <div className="flex space-x-4">
              <button className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Facebook size={20} />
              </button>
              <button className="p-2 bg-gray-800 rounded-lg hover:bg-blue-400 transition-colors">
                <Twitter size={20} />
              </button>
              <button className="p-2 bg-gray-800 rounded-lg hover:bg-pink-600 transition-colors">
                <Instagram size={20} />
              </button>
              <button className="p-2 bg-gray-800 rounded-lg hover:bg-red-600 transition-colors">
                <MessageCircle size={20} />
              </button>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    to={`/${category.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="space-y-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group"
                  >
                    <div className={`p-2 bg-gray-800 rounded-lg ${social.hoverColor} transition-colors`}>
                      <IconComponent size={16} />
                    </div>
                    <span>{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-gray-400" />
                <span className="text-gray-300">info@blazemtaa.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-gray-400" />
                <span className="text-gray-300">+254756277823</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-gray-400" />
                <span className="text-gray-300">Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 BlazeMtaa. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
