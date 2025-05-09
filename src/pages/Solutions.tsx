
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Shield, MessageCircle, Users, Database, Globe, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Solutions: React.FC = () => {
  return (
    <PageLayout 
      title="Our Solutions" 
      subtitle="Intelligent AI chatbots for every business need"
    >
      <div className="prose prose-invert max-w-none mb-12">
        <p className="text-lg">Our comprehensive suite of AI solutions is designed to transform how businesses interact with their customers, streamlining operations and enhancing user experiences across all touchpoints.</p>
        <p className="text-lg">From customer support automation to lead generation and qualification, our platform provides the tools you need to succeed in today's digital-first environment.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all hover:shadow-lg">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-purple-500/20 text-purple-400 mb-4">
            <MessageCircle className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
          <p className="text-gray-300 mb-4">Provide 24/7 automated support to resolve customer queries instantly and efficiently.</p>
          <Link to="/customer-support">
            <Button variant="outline" className="border-white/10 hover:bg-white/10">Learn More</Button>
          </Link>
        </div>

        <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all hover:shadow-lg">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-teal-500/20 text-teal-400 mb-4">
            <Globe className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Enterprise Solutions</h3>
          <p className="text-gray-300 mb-4">Tailored AI solutions for large organizations with complex communication needs.</p>
          <Link to="/enterprise">
            <Button variant="outline" className="border-white/10 hover:bg-white/10">Learn More</Button>
          </Link>
        </div>

        <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all hover:shadow-lg">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-green-500/20 text-green-400 mb-4">
            <Database className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">E-Commerce</h3>
          <p className="text-gray-300 mb-4">Boost conversions and enhance customer shopping experiences with intelligent AI.</p>
          <Link to="/e-commerce">
            <Button variant="outline" className="border-white/10 hover:bg-white/10">Learn More</Button>
          </Link>
        </div>

        <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all hover:shadow-lg">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 mb-4">
            <Shield className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
          <p className="text-gray-300 mb-4">HIPAA-compliant solutions for healthcare providers to improve patient engagement.</p>
          <Link to="/healthcare">
            <Button variant="outline" className="border-white/10 hover:bg-white/10">Learn More</Button>
          </Link>
        </div>

        <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all hover:shadow-lg">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-orange-500/20 text-orange-400 mb-4">
            <Users className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Education</h3>
          <p className="text-gray-300 mb-4">Enhance learning experiences and reduce administrative workload for educational institutions.</p>
          <Link to="/education">
            <Button variant="outline" className="border-white/10 hover:bg-white/10">Learn More</Button>
          </Link>
        </div>

        <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all hover:shadow-lg">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-pink-500/20 text-pink-400 mb-4">
            <Sparkles className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Custom AI Solutions</h3>
          <p className="text-gray-300 mb-4">Bespoke AI implementations tailored to your unique business requirements.</p>
          <Link to="/contact">
            <Button variant="outline" className="border-white/10 hover:bg-white/10">Contact Us</Button>
          </Link>
        </div>
      </div>

      <div className="mt-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-8 rounded-lg">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to transform your customer experience?</h3>
          <p className="text-lg mb-6">Join thousands of businesses already using UrbanChat.AI solutions.</p>
          <Button className="bg-green-500 hover:bg-green-600">Start Free Trial</Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Solutions;
