
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

const TermsOfService: React.FC = () => {
  return (
    <PageLayout 
      title="Terms of Service" 
      subtitle="Last updated: May 1, 2025"
    >
      <div className="prose prose-invert max-w-none">
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using UrbanChat.AI ("Service"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you do not have permission to access the Service.</p>
        
        <h2>2. Description of Service</h2>
        <p>UrbanChat.AI provides an AI-powered chatbot platform that allows users to create, customize, and deploy AI chatbots for various business purposes.</p>
        
        <h2>3. User Accounts</h2>
        <p>To use certain features of the Service, you must register for an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
        
        <h2>4. User Content</h2>
        <p>You retain ownership of any content you submit to the Service. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute your content in any existing or future media.</p>
        
        <h2>5. Subscription and Payments</h2>
        <p>Certain aspects of the Service may require a subscription. You agree to pay all fees associated with your subscription plan. All payments are non-refundable unless otherwise specified in our refund policy.</p>
        
        <h2>6. Restrictions</h2>
        <p>You agree not to use the Service for any unlawful purpose or in any way that could damage, disable, overburden, or impair the Service.</p>
        
        <h2>7. Intellectual Property</h2>
        <p>The Service and its original content, features, and functionality are owned by UrbanChat.AI and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
        
        <h2>8. Termination</h2>
        <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms.</p>
        
        <h2>9. Limitation of Liability</h2>
        <p>In no event shall UrbanChat.AI, its officers, directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the Service.</p>
        
        <h2>10. Changes to Terms</h2>
        <p>We reserve the right to modify or replace these Terms at any time. By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.</p>
        
        <h2>11. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at legal@urbanchat.ai.</p>
      </div>
    </PageLayout>
  );
};

export default TermsOfService;
