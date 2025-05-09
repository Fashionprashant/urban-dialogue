
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { MessageCircle, Clock, Award, BarChart, Users, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CustomerSupport: React.FC = () => {
  return (
    <PageLayout 
      title="Customer Support Solutions" 
      subtitle="24/7 AI-powered assistance for your customers"
    >
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-lg">Transform your customer support with AI chatbots that deliver instant, accurate responses around the clock. Our customer support solutions help businesses reduce response times, handle routine inquiries automatically, and escalate complex issues to human agents when necessary.</p>
        <p className="text-lg">By deploying UrbanChat.AI, companies typically see a 60% reduction in support ticket volume and a 40% improvement in customer satisfaction scores.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
        <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-purple-500/20 text-purple-400 mb-4">
            <Clock className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
          <p className="text-gray-300">Provide round-the-clock support to customers across all time zones without increasing staffing costs.</p>
        </div>

        <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-green-500/20 text-green-400 mb-4">
            <MessageCircle className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Instant Responses</h3>
          <p className="text-gray-300">Eliminate customer wait times with immediate responses to common questions and issues.</p>
        </div>

        <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-blue-500/20 text-blue-400 mb-4">
            <Award className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Consistent Quality</h3>
          <p className="text-gray-300">Deliver the same high-quality service to every customer, every time, without variation.</p>
        </div>

        <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-orange-500/20 text-orange-400 mb-4">
            <BarChart className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Data-Driven Insights</h3>
          <p className="text-gray-300">Gain valuable insights into customer pain points and frequently asked questions.</p>
        </div>

        <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-red-500/20 text-red-400 mb-4">
            <Users className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Human Handoff</h3>
          <p className="text-gray-300">Seamlessly escalate complex issues to human agents while maintaining context and conversation history.</p>
        </div>

        <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-teal-500/20 text-teal-400 mb-4">
            <Monitor className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Omnichannel Support</h3>
          <p className="text-gray-300">Deploy support across website, mobile apps, WhatsApp, Facebook Messenger, and more.</p>
        </div>
      </div>

      <div className="bg-urban-dark-2 p-8 rounded-lg border border-white/10 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-green-400">60%</div>
            <p className="text-gray-300 mt-2">Reduction in support tickets</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400">40%</div>
            <p className="text-gray-300 mt-2">Increase in CSAT scores</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400">85%</div>
            <p className="text-gray-300 mt-2">First-contact resolution rate</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400">30%</div>
            <p className="text-gray-300 mt-2">Reduction in support costs</p>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">Transform your customer support experience</h3>
        <p className="text-lg mb-6 max-w-2xl mx-auto">Join hundreds of companies using UrbanChat.AI to deliver exceptional support experiences</p>
        <Button className="bg-green-500 hover:bg-green-600 px-6">Get Started Free</Button>
      </div>
    </PageLayout>
  );
};

export default CustomerSupport;
