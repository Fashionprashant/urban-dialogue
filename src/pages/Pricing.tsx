
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/home/Footer';

const PricingPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('pro');
  const [billingCycle, setBillingCycle] = useState<'monthly'|'annual'>('annual');
  const navigate = useNavigate();
  
  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      description: 'For individuals getting started with AI chatbots',
      price: billingCycle === 'monthly' ? 29 : 19,
      features: [
        '1 AI Chatbot',
        '1,000 messages/month',
        'Basic analytics',
        'Standard response time',
        'Email support',
        'Website integration'
      ],
      notIncluded: [
        'Custom branding',
        'Multiple knowledge bases',
        'Priority support',
        'API access'
      ]
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'For businesses that need powerful AI capabilities',
      price: billingCycle === 'monthly' ? 79 : 59,
      features: [
        '5 AI Chatbots',
        '10,000 messages/month',
        'Advanced analytics',
        'Faster response time',
        'Priority email support',
        'Website integration',
        'Custom branding',
        'Multiple knowledge bases'
      ],
      notIncluded: [
        'API access',
        'Dedicated account manager'
      ],
      popular: true
    },
    {
      id: 'business',
      name: 'Business',
      description: 'For enterprises that need unlimited AI power',
      price: billingCycle === 'monthly' ? 199 : 149,
      features: [
        'Unlimited AI Chatbots',
        '50,000 messages/month',
        'Complete analytics suite',
        'Fastest response time',
        '24/7 priority support',
        'Website integration',
        'Custom branding',
        'Unlimited knowledge bases',
        'API access',
        'Dedicated account manager'
      ],
      notIncluded: []
    }
  ];

  const handleContinue = () => {
    navigate('/dashboard');
  };
  
  return (
    <div className="min-h-screen bg-urban-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Choose</span> Your Plan
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Select the perfect plan for your needs and start creating AI chatbots that transform your customer experience
          </p>

          {/* Billing toggle */}
          <div className="mt-8 inline-flex items-center bg-urban-dark-2 p-1 rounded-lg">
            <button 
              className={`px-4 py-2 rounded-md transition ${billingCycle === 'monthly' ? 'bg-urban-dark-3' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button 
              className={`px-4 py-2 rounded-md transition ${billingCycle === 'annual' ? 'bg-urban-dark-3' : ''}`}
              onClick={() => setBillingCycle('annual')}
            >
              Annual <span className="text-urban-teal text-xs ml-1">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`
                rounded-xl overflow-hidden relative
                ${plan.popular ? 'transform md:-translate-y-4' : ''}
              `}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-urban-teal text-center py-1 text-black font-medium">
                  Most Popular
                </div>
              )}
              <div className={`
                bg-urban-dark-2 border-2 transition-all h-full flex flex-col
                ${selectedPlan === plan.id 
                  ? 'border-urban-teal shadow-lg shadow-urban-teal/20' 
                  : 'border-white/10'
                }
                ${plan.popular ? 'pt-8' : 'pt-6'}
              `}>
                <div className="px-6">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-gray-400 mt-2 min-h-[40px]">{plan.description}</p>
                </div>
                
                <div className="px-6 my-6">
                  <div className="flex items-end">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>
                  {billingCycle === 'annual' && (
                    <p className="text-urban-teal text-sm mt-1">Billed annually</p>
                  )}
                </div>
                
                <div className="px-6 flex-grow">
                  <h4 className="font-medium mb-4">Features included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-urban-teal mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    
                    {plan.notIncluded.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-500">
                        <X className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6">
                  <Button 
                    className={`w-full ${
                      selectedPlan === plan.id 
                        ? 'bg-urban-teal hover:bg-urban-teal/90' 
                        : 'bg-urban-dark-3 hover:bg-urban-dark-3/90'
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="bg-gradient-purple hover:opacity-90 px-12 rounded-full"
            onClick={handleContinue}
          >
            Continue with {plans.find(p => p.id === selectedPlan)?.name} Plan
          </Button>
          
          <p className="text-gray-400 text-sm mt-4">
            14-day money-back guarantee. No credit card required to start.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;
