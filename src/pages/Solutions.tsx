
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

const Solutions: React.FC = () => {
  return (
    <PageLayout 
      title="Our Solutions" 
      subtitle="Intelligent AI chatbots for every business need"
    >
      <div className="prose prose-invert max-w-none">
        <p>Our comprehensive suite of AI solutions is designed to transform how businesses interact with their customers, streamlining operations and enhancing user experiences across all touchpoints.</p>
        <p>From customer support automation to lead generation and qualification, our platform provides the tools you need to succeed in today's digital-first environment.</p>
      </div>
    </PageLayout>
  );
};

export default Solutions;
