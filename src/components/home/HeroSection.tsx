
import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onPricingClick: () => void;
  onGetStartedClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onPricingClick, onGetStartedClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 z-10 overflow-hidden pt-20">
      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-green-400/20 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/3 -right-20 w-72 h-72 bg-purple-400/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 left-1/3 w-60 h-60 bg-teal-400/20 rounded-full filter blur-3xl"></div>
      
      <div className="wave wave-1"></div>
      <div className="wave wave-2"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-block mb-6 py-1 px-3 rounded-full bg-green-500/20 text-green-400 text-sm font-medium animate-pulse">
          New: Advanced AI Models Now Available
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
          Transform Your <span className="text-green-400 inline-block relative">Customer Service
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9C118.833 3 267.5 3 355 9" stroke="#22C55E" strokeWidth="6" strokeLinecap="round"/>
            </svg>
          </span> <br />with <span className="text-gradient-primary">AI-Powered</span> Chatbots
        </h1>
        
        <h2 className="text-xl md:text-2xl font-light mb-8 text-gray-300 max-w-3xl mx-auto">
          Create customized AI chatbots in minutes — no coding required. 
          Deliver instant support, generate leads, and boost conversions 24/7.
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Button 
            size="lg" 
            className="bg-green-500 hover:bg-green-600 px-8 rounded-full text-lg h-14"
            onClick={onGetStartedClick}
          >
            Get Started For Free
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white/30 hover:bg-white/10 px-8 rounded-full text-lg h-14"
            onClick={onPricingClick}
          >
            View Pricing
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm text-gray-400">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            No credit card required
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            Free 14-day trial
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            Cancel anytime
          </div>
        </div>
        
        <div className="mt-16 flex flex-col items-center">
          <p className="text-gray-400 mb-4">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            <div className="text-white/60 font-bold text-xl">ACME</div>
            <div className="text-white/60 font-bold text-xl">TechCorp</div>
            <div className="text-white/60 font-bold text-xl">GlobalFirm</div>
            <div className="text-white/60 font-bold text-xl">InnovateX</div>
            <div className="text-white/60 font-bold text-xl">FutureTech</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
