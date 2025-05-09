
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

const CustomerSupport: React.FC = () => {
  return (
    <PageLayout 
      title="Customer Support Solutions" 
      subtitle="24/7 AI-powered assistance for your customers"
    >
      <div className="prose prose-invert max-w-none">
        <p>Transform your customer support with AI chatbots that deliver instant, accurate responses around the clock. Our customer support solutions help businesses reduce response times, handle routine inquiries automatically, and escalate complex issues to human agents when necessary.</p>
        <p>By deploying UrbanChat.AI, companies typically see a 60% reduction in support ticket volume and a 40% improvement in customer satisfaction scores.</p>
      </div>
    </PageLayout>
  );
};

export default CustomerSupport;
