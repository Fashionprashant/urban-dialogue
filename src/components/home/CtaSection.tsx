
import React from 'react';
import { Button } from '@/components/ui/button';

interface CtaSectionProps {
  onPricingClick: () => void;
  onGetStartedClick: () => void;
}

const CtaSection: React.FC<CtaSectionProps> = ({ onPricingClick, onGetStartedClick }) => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto glass-morphism rounded-2xl p-8 md:p-12 bg-gradient-to-br from-urban-dark-2/80 to-urban-dark-3/80">
        <div className="text-center relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-green-400/30 rounded-full filter blur-xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-400/30 rounded-full filter blur-xl translate-x-1/3 translate-y-1/3"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="text-green-400">Revolutionize</span> Your Customer Experience?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have transformed their customer interactions with UrbanChat.AI. Get started in minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 px-8 rounded-full"
              onClick={onGetStartedClick}
            >
              Start Free Trial
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/30 hover:bg-white/10 px-8 rounded-full"
              onClick={onPricingClick}
            >
              View Pricing Plans
            </Button>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="bg-green-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-medium mb-1">Setup in Minutes</h3>
              <p className="text-sm text-gray-400">Quick and easy implementation with no technical skills required</p>
            </div>
            
            <div className="p-4">
              <div className="bg-green-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-medium mb-1">Enterprise Security</h3>
              <p className="text-sm text-gray-400">Top-tier security protocols to protect your data and conversations</p>
            </div>
            
            <div className="p-4">
              <div className="bg-green-500/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-medium mb-1">24/7 Support</h3>
              <p className="text-sm text-gray-400">Dedicated customer success team to help you every step of the way</p>
            </div>
          </div>
          
          <p className="text-sm text-gray-400 mt-6">
            No credit card required. 14-day free trial with full access.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
