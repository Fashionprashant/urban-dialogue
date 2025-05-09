
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

const Blog: React.FC = () => {
  return (
    <PageLayout 
      title="Our Blog" 
      subtitle="Insights and updates from the UrbanChat.AI team"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-urban-dark-2 rounded-lg overflow-hidden border border-white/10">
          <div className="h-48 bg-gradient-to-br from-purple-500/30 to-blue-500/30"></div>
          <div className="p-6">
            <span className="text-xs text-green-400">AI Trends</span>
            <h3 className="text-xl font-semibold mt-2">The Future of Conversational AI in Customer Service</h3>
            <p className="text-gray-300 mt-2 text-sm">Explore how AI is transforming customer service operations and what to expect in the coming years.</p>
            <p className="text-gray-400 text-xs mt-4">May 4, 2025 • 5 min read</p>
          </div>
        </div>
        
        <div className="bg-urban-dark-2 rounded-lg overflow-hidden border border-white/10">
          <div className="h-48 bg-gradient-to-br from-teal-500/30 to-green-500/30"></div>
          <div className="p-6">
            <span className="text-xs text-green-400">Case Study</span>
            <h3 className="text-xl font-semibold mt-2">How TechCorp Reduced Support Tickets by 65%</h3>
            <p className="text-gray-300 mt-2 text-sm">A detailed look at how one enterprise client transformed their customer support with UrbanChat.AI.</p>
            <p className="text-gray-400 text-xs mt-4">April 28, 2025 • 8 min read</p>
          </div>
        </div>
        
        <div className="bg-urban-dark-2 rounded-lg overflow-hidden border border-white/10">
          <div className="h-48 bg-gradient-to-br from-orange-500/30 to-red-500/30"></div>
          <div className="p-6">
            <span className="text-xs text-green-400">Tutorial</span>
            <h3 className="text-xl font-semibold mt-2">Building Your First AI Chatbot: A Beginner's Guide</h3>
            <p className="text-gray-300 mt-2 text-sm">Step-by-step instructions for creating and deploying your first AI chatbot with our platform.</p>
            <p className="text-gray-400 text-xs mt-4">April 15, 2025 • 12 min read</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog;
