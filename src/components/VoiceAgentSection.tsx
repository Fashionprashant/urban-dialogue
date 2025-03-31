
import React from 'react';
import { Button } from "@/components/ui/button";
import { PhoneCall, Clock, Calendar, BarChart4, PieChart } from 'lucide-react';

const VoiceAgentSection = () => {
  return (
    <section id="voice-agents" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="card-gradient rounded-xl p-1 shadow-lg shadow-urban-green/10 hover-shadow relative">
              <div className="absolute -top-2 -right-2 bg-urban-green text-black text-xs font-bold px-3 py-1 rounded-full">
                Always Available
              </div>
              <div className="bg-urban-darker rounded-xl p-6 relative overflow-hidden">
                <div className="absolute -right-12 -bottom-12 w-32 h-32 bg-urban-green/5 rounded-full blur-2xl"></div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-urban-green/20 flex items-center justify-center animate-float">
                    <PhoneCall className="w-6 h-6 text-urban-green" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Incoming Call</h3>
                    <p className="text-urban-text-muted text-sm">From: +1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="space-y-6 relative z-10">
                  <div className="ml-14 pl-4 border-l border-urban-green/30">
                    <div className="bg-black/20 rounded-lg p-4">
                      <p className="text-urban-text-light"><span className="text-urban-green">AI Voice Agent:</span> "Thank you for calling Urban Solutions. I'm your AI assistant. How may I help you today?"</p>
                    </div>
                  </div>
                  
                  <div className="ml-14 pl-4 border-l border-white/10">
                    <div className="bg-white/5 rounded-lg p-4">
                      <p className="text-urban-text-light"><span className="text-urban-text-muted">Customer:</span> "I'd like to schedule an appointment for tomorrow."</p>
                    </div>
                  </div>
                  
                  <div className="ml-14 pl-4 border-l border-urban-green/30">
                    <div className="bg-black/20 rounded-lg p-4">
                      <p className="text-urban-text-light"><span className="text-urban-green">AI Voice Agent:</span> "I'd be happy to help you schedule an appointment. We have slots available at 10 AM, 1 PM, and 3 PM tomorrow. Which time works best for you?"</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 flex items-center justify-between">
                  <div className="text-xs text-urban-text-muted">Sentiment Analysis: Positive</div>
                  <div className="text-xs text-urban-text-muted">Call Duration: 1:24</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="gradient-text">AI Voice Agents</span> That Sound Like Real People
              </h2>
              <p className="text-urban-text-muted mb-6">
                Never miss a customer call again. Our AI voice agents handle after-hours and holiday calls with natural-sounding conversations, booking appointments and answering queries just like your best employee would.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-urban-green/20 flex items-center justify-center shrink-0 mt-1">
                    <Clock className="w-5 h-5 text-urban-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-urban-text-light">24/7 Availability</h3>
                    <p className="text-urban-text-muted">Handle calls during nights, weekends, and holidays without hiring additional staff.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-urban-green/20 flex items-center justify-center shrink-0 mt-1">
                    <Calendar className="w-5 h-5 text-urban-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-urban-text-light">Appointment Booking</h3>
                    <p className="text-urban-text-muted">AI agents can schedule appointments directly into your calendar system.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-urban-green/20 flex items-center justify-center shrink-0 mt-1">
                    <BarChart4 className="w-5 h-5 text-urban-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-urban-text-light">Detailed Analytics</h3>
                    <p className="text-urban-text-muted">Get insights on call volumes, durations, sentiment analysis, and common customer questions.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-urban-green/20 flex items-center justify-center shrink-0 mt-1">
                    <PieChart className="w-5 h-5 text-urban-green" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-urban-text-light">Sentiment Analysis</h3>
                    <p className="text-urban-text-muted">Understand customer satisfaction and identify improvement opportunities.</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-urban-green text-black hover:bg-urban-green-dark hover-shadow">
                Learn More About Voice Agents
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 rounded-full bg-urban-green/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-urban-green/10 blur-3xl"></div>
    </section>
  );
};

export default VoiceAgentSection;
