
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative pt-12 pb-8 px-4 sm:px-6 lg:px-8 bg-urban-dark-3 border-t border-white/5 z-10">
      <div className="wave-container">
        <div className="wave wave-1" style={{ bottom: '100%', height: '150px' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center">
              <h2 className="text-2xl font-bold">
                <span className="text-gradient-primary">Urban</span>
                <span className="text-white">Chat.AI</span>
              </h2>
            </div>
            <p className="text-gray-400">
              Transforming conversations with AI-powered intelligence that understands, responds, and evolves.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><Link to="/solutions" className="text-gray-300 hover:text-white transition-colors">Solutions</Link></li>
              <li><Link to="/customer-support" className="text-gray-300 hover:text-white transition-colors">Customer Support</Link></li>
              <li><Link to="/enterprise" className="text-gray-300 hover:text-white transition-colors">Enterprise</Link></li>
              <li><Link to="/e-commerce" className="text-gray-300 hover:text-white transition-colors">E-commerce</Link></li>
              <li><Link to="/healthcare" className="text-gray-300 hover:text-white transition-colors">Healthcare</Link></li>
              <li><Link to="/education" className="text-gray-300 hover:text-white transition-colors">Education</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/partners" className="text-gray-300 hover:text-white transition-colors">Partners</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">Subscribe to our newsletter</h3>
            <p className="text-gray-400 mb-4">The latest news, articles, and resources, sent to your inbox weekly.</p>
            <form className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border-white/10"
              />
              <Button type="submit" className="bg-urban-teal hover:bg-urban-teal/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} UrbanChat.AI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
            <Link to="/cookies-settings" className="text-gray-400 hover:text-white text-sm">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
