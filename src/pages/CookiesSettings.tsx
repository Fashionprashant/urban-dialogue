
import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

const CookiesSettings: React.FC = () => {
  const [essentialCookies, setEssentialCookies] = useState(true);
  const [analyticsCookies, setAnalyticsCookies] = useState(true);
  const [marketingCookies, setMarketingCookies] = useState(false);
  const [functionalCookies, setFunctionalCookies] = useState(true);
  
  const handleSaveSettings = () => {
    // In a real app, this would save the cookie preferences
    alert("Cookie preferences saved!");
  };
  
  return (
    <PageLayout 
      title="Cookies Settings" 
      subtitle="Manage your cookie preferences"
    >
      <div className="prose prose-invert max-w-none mb-8">
        <p>We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. You can manage your cookie preferences below.</p>
      </div>
      
      <div className="space-y-6">
        <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Essential Cookies</h3>
            <p className="text-gray-300 text-sm mt-1">These cookies are necessary for the website to function and cannot be switched off.</p>
          </div>
          <Switch checked={essentialCookies} onCheckedChange={setEssentialCookies} disabled />
        </div>
        
        <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Analytics Cookies</h3>
            <p className="text-gray-300 text-sm mt-1">These cookies help us understand how visitors interact with our website.</p>
          </div>
          <Switch checked={analyticsCookies} onCheckedChange={setAnalyticsCookies} />
        </div>
        
        <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Marketing Cookies</h3>
            <p className="text-gray-300 text-sm mt-1">These cookies are used to track visitors across websites to display relevant advertisements.</p>
          </div>
          <Switch checked={marketingCookies} onCheckedChange={setMarketingCookies} />
        </div>
        
        <div className="bg-urban-dark-2 p-6 rounded-lg border border-white/10 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Functional Cookies</h3>
            <p className="text-gray-300 text-sm mt-1">These cookies enable personalized features and functionality on our website.</p>
          </div>
          <Switch checked={functionalCookies} onCheckedChange={setFunctionalCookies} />
        </div>
      </div>
      
      <div className="flex justify-end gap-4 mt-8">
        <Button variant="outline" className="border-white/10 hover:bg-white/10">
          Reject All
        </Button>
        <Button className="bg-green-500 hover:bg-green-600" onClick={handleSaveSettings}>
          Save Preferences
        </Button>
        <Button className="bg-gradient-purple hover:opacity-90">
          Accept All
        </Button>
      </div>
    </PageLayout>
  );
};

export default CookiesSettings;
