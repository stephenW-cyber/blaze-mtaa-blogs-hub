
import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg p-6 text-white">
      <div className="flex items-center space-x-2 mb-4">
        <Mail size={24} />
        <h3 className="text-xl font-bold">Stay Updated</h3>
      </div>
      
      {subscribed ? (
        <div className="flex items-center space-x-2 text-green-200">
          <CheckCircle size={20} />
          <span>Thank you for subscribing!</span>
        </div>
      ) : (
        <>
          <p className="mb-4">Get the latest news and updates delivered to your inbox.</p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="w-full bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Newsletter;
