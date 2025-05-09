
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

const Education: React.FC = () => {
  return (
    <PageLayout 
      title="Education Solutions" 
      subtitle="Enhance learning experiences with AI assistance"
    >
      <div className="prose prose-invert max-w-none">
        <p>UrbanChat.AI helps educational institutions provide 24/7 support to students, answer frequently asked questions, assist with enrollment processes, and deliver personalized learning experiences. Our education-focused chatbots integrate with existing learning management systems and student information platforms to provide seamless assistance.</p>
        <p>Educational institutions using our platform see improved student engagement, reduced administrative workload, and enhanced communication across all stakeholders.</p>
      </div>
    </PageLayout>
  );
};

export default Education;
