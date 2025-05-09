
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

const About: React.FC = () => {
  return (
    <PageLayout 
      title="About UrbanChat.AI" 
      subtitle="Leading the future of AI-powered conversations"
    >
      <div className="prose prose-invert max-w-none">
        <p>Founded in 2023, UrbanChat.AI is on a mission to transform how businesses communicate with their customers through intelligent, conversational AI. Our team of AI experts, software engineers, and customer experience specialists is dedicated to building technology that makes meaningful connections possible at scale.</p>
        <p>We believe that AI should enhance human interaction, not replace it. That's why our platform is designed to handle routine inquiries efficiently while identifying when human intervention is needed, creating a seamless handoff between AI and your team.</p>
        <p>With headquarters in San Francisco and team members across three continents, we bring a global perspective to solving communication challenges for businesses of all sizes.</p>
      </div>
    </PageLayout>
  );
};

export default About;
