
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

const ECommerce: React.FC = () => {
  return (
    <PageLayout 
      title="E-Commerce Solutions" 
      subtitle="Boost conversions and enhance the shopping experience"
    >
      <div className="prose prose-invert max-w-none">
        <p>Drive more sales and improve customer satisfaction with AI chatbots designed specifically for e-commerce. Our solutions help online retailers provide personalized product recommendations, answer pre-purchase questions, handle order inquiries, and guide customers through the buying process.</p>
        <p>E-commerce businesses using UrbanChat.AI typically see a 25% increase in conversion rates and a 30% reduction in cart abandonment.</p>
      </div>
    </PageLayout>
  );
};

export default ECommerce;
