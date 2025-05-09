
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

const Enterprise: React.FC = () => {
  return (
    <PageLayout 
      title="Enterprise Solutions" 
      subtitle="Scalable AI communication for large organizations"
    >
      <div className="prose prose-invert max-w-none">
        <p>Our enterprise-grade AI chatbot platform is built to handle the complex needs of large organizations. With robust security features, seamless integration capabilities, and customizable workflows, UrbanChat.AI empowers enterprises to deploy intelligent automation across multiple departments and customer touchpoints.</p>
        <p>Our enterprise solutions include dedicated account management, custom integration services, and advanced analytics to ensure your AI implementation delivers measurable ROI.</p>
      </div>
    </PageLayout>
  );
};

export default Enterprise;
