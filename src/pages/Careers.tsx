
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';

const Careers: React.FC = () => {
  return (
    <PageLayout 
      title="Careers at UrbanChat.AI" 
      subtitle="Join us in building the future of conversational AI"
    >
      <div className="prose prose-invert max-w-none mb-8">
        <p>At UrbanChat.AI, we're looking for passionate individuals who are excited about using technology to solve real-world communication challenges. Our team combines expertise in machine learning, natural language processing, software engineering, and customer experience design to build products that millions of people interact with every day.</p>
        <p>We offer competitive compensation, comprehensive benefits, and a flexible work environment that empowers you to do your best work.</p>
      </div>
      
      <div className="border-t border-white/10 pt-8 mt-8">
        <h2 className="text-2xl font-bold mb-6">Open Positions</h2>
        
        <div className="space-y-6">
          <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-xl font-semibold">Senior Machine Learning Engineer</h3>
                <p className="text-green-400 mt-1">Remote • Full-time</p>
              </div>
              <Button className="mt-4 md:mt-0 bg-green-500 hover:bg-green-600">Apply Now</Button>
            </div>
            <p className="text-gray-300 mt-4">Help us improve our NLP models and develop new machine learning capabilities for our platform.</p>
          </div>
          
          <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-xl font-semibold">Frontend Engineer</h3>
                <p className="text-green-400 mt-1">San Francisco • Full-time</p>
              </div>
              <Button className="mt-4 md:mt-0 bg-green-500 hover:bg-green-600">Apply Now</Button>
            </div>
            <p className="text-gray-300 mt-4">Build beautiful, intuitive interfaces for our chatbot creation and management platform.</p>
          </div>
          
          <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-xl font-semibold">Customer Success Manager</h3>
                <p className="text-green-400 mt-1">New York • Full-time</p>
              </div>
              <Button className="mt-4 md:mt-0 bg-green-500 hover:bg-green-600">Apply Now</Button>
            </div>
            <p className="text-gray-300 mt-4">Help our enterprise customers implement and optimize their AI chatbot solutions.</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Careers;
