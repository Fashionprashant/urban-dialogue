
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Shield, Database, Globe, Users, Lock, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Enterprise: React.FC = () => {
  return (
    <PageLayout 
      title="Enterprise Solutions" 
      subtitle="Scalable AI communication for large organizations"
    >
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-lg">Our enterprise-grade AI chatbot platform is built to handle the complex needs of large organizations. With robust security features, seamless integration capabilities, and customizable workflows, UrbanChat.AI empowers enterprises to deploy intelligent automation across multiple departments and customer touchpoints.</p>
        <p className="text-lg">Our enterprise solutions include dedicated account management, custom integration services, and advanced analytics to ensure your AI implementation delivers measurable ROI.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
        <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 mb-4">
            <Scale className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Enterprise Scalability</h3>
          <p className="text-gray-300">Handle millions of conversations simultaneously with infrastructure designed for global operations.</p>
        </div>

        <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-green-500/20 text-green-400 mb-4">
            <Lock className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Advanced Security</h3>
          <p className="text-gray-300">Enterprise-grade security with SOC 2 compliance, SSO integration, and end-to-end encryption.</p>
        </div>

        <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-purple-500/20 text-purple-400 mb-4">
            <Database className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Seamless Integration</h3>
          <p className="text-gray-300">Connect with your existing tech stack including CRM, ERP, and knowledge management systems.</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-urban-dark-2 to-urban-dark-3 rounded-lg border border-white/10 p-8 my-12">
        <h3 className="text-2xl font-semibold mb-6">Enterprise Features</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-8 w-8 flex items-center justify-center rounded-full bg-green-500/20 text-green-400 mr-3">
                <Shield className="h-4 w-4" />
              </div>
              <span className="text-white">Role-based access control</span>
            </div>
            <div className="flex items-center">
              <div className="h-8 w-8 flex items-center justify-center rounded-full bg-green-500/20 text-green-400 mr-3">
                <Shield className="h-4 w-4" />
              </div>
              <span className="text-white">Single Sign-On (SSO)</span>
            </div>
            <div className="flex items-center">
              <div className="h-8 w-8 flex items-center justify-center rounded-full bg-green-500/20 text-green-400 mr-3">
                <Shield className="h-4 w-4" />
              </div>
              <span className="text-white">Custom data retention policies</span>
            </div>
            <div className="flex items-center">
              <div className="h-8 w-8 flex items-center justify-center rounded-full bg-green-500/20 text-green-400 mr-3">
                <Shield className="h-4 w-4" />
              </div>
              <span className="text-white">Dedicated cloud infrastructure</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-8 w-8 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 mr-3">
                <Users className="h-4 w-4" />
              </div>
              <span className="text-white">Dedicated account management</span>
            </div>
            <div className="flex items-center">
              <div className="h-8 w-8 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 mr-3">
                <Users className="h-4 w-4" />
              </div>
              <span className="text-white">Custom SLAs</span>
            </div>
            <div className="flex items-center">
              <div className="h-8 w-8 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 mr-3">
                <Users className="h-4 w-4" />
              </div>
              <span className="text-white">Premium support</span>
            </div>
            <div className="flex items-center">
              <div className="h-8 w-8 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 mr-3">
                <Users className="h-4 w-4" />
              </div>
              <span className="text-white">Implementation consulting</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 p-8 rounded-lg">
        <div className="md:flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">Ready to scale your AI communications?</h3>
            <p className="text-lg text-gray-300">Contact our enterprise sales team to discuss your specific requirements.</p>
          </div>
          <Button className="bg-green-500 hover:bg-green-600 px-6 mt-4 md:mt-0">Contact Sales</Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Enterprise;
