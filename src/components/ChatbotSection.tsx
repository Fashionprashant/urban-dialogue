
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, Clock, Award, PieChart, Users } from 'lucide-react';

const ChatbotSection = () => {
  return (
    <section id="chatbots" className="py-20 relative overflow-hidden bg-urban-darker">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Deploy <span className="gradient-text">AI Chatbots</span> in Just 3 Minutes
              </h2>
              <p className="text-urban-text-muted mb-6">
                Create personalized chatbots that integrate with your website, WhatsApp, Facebook, and Instagram. Capture leads, answer FAQs, and provide 24/7 support while your team focuses on high-value tasks.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-urban-green/20 flex items-center justify-center shrink-0 mt-1">
                    <Clock className="w-5 h-5 text-urban-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-urban-text-light">Quick Implementation</h3>
                    <p className="text-urban-text-muted">Get your AI chatbot up and running in minutes, not weeks.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-urban-green/20 flex items-center justify-center shrink-0 mt-1">
                    <Award className="w-5 h-5 text-urban-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-urban-text-light">Multi-Platform Integration</h3>
                    <p className="text-urban-text-muted">Connect with customers on their preferred channels - web, WhatsApp, Facebook, and Instagram.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-urban-green/20 flex items-center justify-center shrink-0 mt-1">
                    <Users className="w-5 h-5 text-urban-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-urban-text-light">Lead Generation</h3>
                    <p className="text-urban-text-muted">Automatically collect visitor information and qualify leads.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-urban-green/20 flex items-center justify-center shrink-0 mt-1">
                    <PieChart className="w-5 h-5 text-urban-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-urban-text-light">Detailed Analytics</h3>
                    <p className="text-urban-text-muted">Gain insights into customer questions, needs, and engagement patterns.</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-urban-green text-black hover:bg-urban-green-dark hover-shadow">
                Start Building Your Chatbot
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="card-gradient rounded-xl p-1 shadow-lg shadow-urban-green/10 hover-shadow relative">
              <div className="absolute -top-2 -right-2 bg-urban-green text-black text-xs font-bold px-3 py-1 rounded-full">
                Live Preview
              </div>
              <div className="bg-urban-dark rounded-xl p-6 relative overflow-hidden">
                <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-urban-green/5 rounded-full blur-3xl"></div>
                
                <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-urban-green/20 flex items-center justify-center animate-float">
                      <MessageSquare className="w-4 h-4 text-urban-green" />
                    </div>
                    <h3 className="font-semibold">UrbanChat</h3>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-urban-green animate-pulse"></div>
                    <div className="text-xs text-urban-text-muted">Online</div>
                  </div>
                </div>
                
                <div className="space-y-4 max-h-[320px] overflow-y-auto no-scrollbar relative z-10">
                  <div className="flex justify-start">
                    <div className="bg-urban-green/20 text-urban-text-light rounded-lg rounded-tl-none p-3 max-w-[80%]">
                      <p>Hello! 👋 I'm your AI assistant. How can I help you today?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-white/10 text-urban-text-light rounded-lg rounded-tr-none p-3 max-w-[80%]">
                      <p>Do you offer integration with Shopify?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-urban-green/20 text-urban-text-light rounded-lg rounded-tl-none p-3 max-w-[80%]">
                      <p>Yes, we offer seamless integration with Shopify! Our chatbot can help with product recommendations, order status updates, and customer support for your Shopify store. Would you like to learn more about our Shopify integration features?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-white/10 text-urban-text-light rounded-lg rounded-tr-none p-3 max-w-[80%]">
                      <p>Sounds good. What's the pricing?</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-urban-green/20 text-urban-text-light rounded-lg rounded-tl-none p-3 max-w-[80%]">
                      <p>We offer several pricing tiers starting at $29/month for our Basic plan, which includes Shopify integration. Would you like me to collect your email so a team member can send you our detailed pricing information?</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 relative">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-4 text-urban-text-light focus:outline-none focus:ring-1 focus:ring-urban-green"
                  />
                  <Button className="absolute right-1 top-1 bg-urban-green text-black hover:bg-urban-green-dark p-1 h-8 w-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </Button>
                </div>
                
                <div className="mt-4 text-xs text-urban-text-muted text-center">
                  Powered by UrbanChat.ai
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/3 right-0 w-64 h-64 rounded-full bg-urban-green/5 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-72 h-72 rounded-full bg-urban-green/10 blur-3xl"></div>
    </section>
  );
};

export default ChatbotSection;
