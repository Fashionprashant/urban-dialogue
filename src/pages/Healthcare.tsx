
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

const Healthcare: React.FC = () => {
  return (
    <PageLayout 
      title="Healthcare Solutions" 
      subtitle="Streamline patient communications and administrative processes"
    >
      <div className="prose prose-invert max-w-none">
        <p>Our HIPAA-compliant AI solutions help healthcare providers improve patient engagement, streamline appointment scheduling, provide medical information, and reduce administrative burdens. UrbanChat.AI healthcare chatbots can be deployed across websites, patient portals, and messaging platforms to provide consistent, accurate information to patients.</p>
        <p>Healthcare organizations using our platform report a 40% reduction in administrative phone calls and a significant improvement in patient satisfaction metrics.</p>
      </div>
    </PageLayout>
  );
};

export default Healthcare;
