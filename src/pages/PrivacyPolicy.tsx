
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

const PrivacyPolicy: React.FC = () => {
  return (
    <PageLayout 
      title="Privacy Policy" 
      subtitle="Last updated: May 1, 2025"
    >
      <div className="prose prose-invert max-w-none">
        <h2>Introduction</h2>
        <p>This Privacy Policy describes how UrbanChat.AI ("we," "our," or "us") collects, uses, and shares your personal information when you use our website, products, or services.</p>
        
        <h2>Information We Collect</h2>
        <p>We collect information you provide directly to us, such as when you create an account, update your profile, use our interactive features, participate in surveys, contests, or promotions, make a purchase, communicate with us, or otherwise interact with our services.</p>
        
        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to provide, maintain, and improve our services, process transactions, send you related information, communicate with you, and personalize your experience.</p>
        
        <h2>Information Sharing</h2>
        <p>We may share your information with third-party vendors, service providers, and other business partners who need access to such information to help us provide our services. We may also share information in response to legal requests, to protect our rights, or in connection with a merger, sale of company assets, financing, or acquisition.</p>
        
        <h2>Data Storage and Security</h2>
        <p>We use industry-standard technical and organizational security measures to protect your data. While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure.</p>
        
        <h2>Your Rights and Choices</h2>
        <p>Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, delete, or export your data, or to object to or restrict certain processing activities.</p>
        
        <h2>Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website.</p>
        
        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at privacy@urbanchat.ai.</p>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicy;
