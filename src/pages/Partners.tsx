
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';

const Partners: React.FC = () => {
  return (
    <PageLayout 
      title="Partner With Us" 
      subtitle="Join the UrbanChat.AI partner ecosystem"
    >
      <div className="prose prose-invert max-w-none mb-8">
        <p>Our partner program is designed to help agencies, integrators, and technology providers deliver exceptional AI solutions to their clients. Whether you're looking to resell our platform, integrate our technology into your products, or build a service offering around UrbanChat.AI, we provide the tools and support you need to succeed.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-green-500/20 text-green-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Solution Partners</h3>
          <p className="text-gray-300 mb-4">Resell UrbanChat.AI to your clients and provide implementation services to help them succeed.</p>
          <Button variant="outline" className="border-white/10 hover:bg-white/10">Learn More</Button>
        </div>
        
        <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-green-500/20 text-green-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M12 8v8"></path><path d="m8.5 12 7 0"></path></svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Technology Partners</h3>
          <p className="text-gray-300 mb-4">Integrate your technology with our platform to deliver enhanced solutions to mutual customers.</p>
          <Button variant="outline" className="border-white/10 hover:bg-white/10">Learn More</Button>
        </div>
        
        <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-green-500/20 text-green-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Referral Partners</h3>
          <p className="text-gray-300 mb-4">Earn commission by referring customers to UrbanChat.AI without managing the relationship.</p>
          <Button variant="outline" className="border-white/10 hover:bg-white/10">Learn More</Button>
        </div>
      </div>
      
      <div className="mt-12 bg-gradient-to-r from-green-500/20 to-purple-500/20 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">Become a Partner</h3>
        <p className="text-lg mb-6 max-w-2xl mx-auto">Join our growing network of partners and help businesses transform their customer experiences with AI.</p>
        <Button className="bg-green-500 hover:bg-green-600 px-6">Apply Now</Button>
      </div>
    </PageLayout>
  );
};

export default Partners;
