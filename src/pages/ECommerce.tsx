
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { ShoppingCart, Search, CreditCard, Package, Truck, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ECommerce: React.FC = () => {
  return (
    <PageLayout 
      title="E-Commerce Solutions" 
      subtitle="Boost conversions and enhance the shopping experience"
    >
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-lg">Drive more sales and improve customer satisfaction with AI chatbots designed specifically for e-commerce. Our solutions help online retailers provide personalized product recommendations, answer pre-purchase questions, handle order inquiries, and guide customers through the buying process.</p>
        <p className="text-lg">E-commerce businesses using UrbanChat.AI typically see a 25% increase in conversion rates and a 30% reduction in cart abandonment.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
        <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-8 rounded-lg border border-white/10">
          <h3 className="text-xl font-semibold mb-4">Pre-Purchase Support</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="h-8 w-8 flex items-center justify-center rounded-full bg-purple-500/20 text-purple-400 mr-3 mt-1">
                <ShoppingCart className="h-4 w-4" />
              </div>
              <div>
                <span className="font-medium text-purple-300">Product Recommendations</span>
                <p className="text-gray-300 mt-1">Recommend relevant products based on customer preferences and browsing history.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="h-8 w-8 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 mr-3 mt-1">
                <Search className="h-4 w-4" />
              </div>
              <div>
                <span className="font-medium text-blue-300">Product Specifications</span>
                <p className="text-gray-300 mt-1">Answer detailed questions about product features, dimensions, materials, and compatibility.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="h-8 w-8 flex items-center justify-center rounded-full bg-green-500/20 text-green-400 mr-3 mt-1">
                <CreditCard className="h-4 w-4" />
              </div>
              <div>
                <span className="font-medium text-green-300">Payment Options</span>
                <p className="text-gray-300 mt-1">Guide customers through available payment methods and financing options.</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-br from-teal-500/10 to-green-500/10 p-8 rounded-lg border border-white/10">
          <h3 className="text-xl font-semibold mb-4">Post-Purchase Support</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="h-8 w-8 flex items-center justify-center rounded-full bg-teal-500/20 text-teal-400 mr-3 mt-1">
                <Package className="h-4 w-4" />
              </div>
              <div>
                <span className="font-medium text-teal-300">Order Tracking</span>
                <p className="text-gray-300 mt-1">Provide real-time updates on order status and shipping information.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="h-8 w-8 flex items-center justify-center rounded-full bg-orange-500/20 text-orange-400 mr-3 mt-1">
                <Truck className="h-4 w-4" />
              </div>
              <div>
                <span className="font-medium text-orange-300">Returns and Exchanges</span>
                <p className="text-gray-300 mt-1">Simplify the return process with step-by-step guidance and policy information.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="h-8 w-8 flex items-center justify-center rounded-full bg-red-500/20 text-red-400 mr-3 mt-1">
                <Star className="h-4 w-4" />
              </div>
              <div>
                <span className="font-medium text-red-300">Product Support</span>
                <p className="text-gray-300 mt-1">Assist with product usage, troubleshooting, and warranty information.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-urban-dark-2 p-8 rounded-lg border border-white/10 my-12">
        <h3 className="text-2xl font-semibold mb-6 text-center">How UrbanChat.AI Transforms E-Commerce</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">25%</div>
            <p className="text-gray-300">Increase in conversion rates</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">30%</div>
            <p className="text-gray-300">Reduction in cart abandonment</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
            <p className="text-gray-300">More product discoveries</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">15%</div>
            <p className="text-gray-300">Increase in average order value</p>
          </div>
        </div>
      </div>
      
      <div className="mt-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to boost your online sales?</h3>
        <p className="text-lg mb-6">Join leading e-commerce brands using UrbanChat.AI to create exceptional shopping experiences.</p>
        <Button className="bg-green-500 hover:bg-green-600 px-6">Start Free Trial</Button>
      </div>
    </PageLayout>
  );
};

export default ECommerce;
