
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Headphones, MessageCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative hero-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your Customer Service With <span className="gradient-text">AI-Powered Conversations</span>
          </h1>
          <p className="text-xl text-urban-text-muted mb-8 max-w-2xl mx-auto">
            UrbanChat.ai helps businesses handle customer queries 24/7 with human-like AI voice agents and intelligent chatbots.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button className="bg-urban-green text-black hover:bg-urban-green-dark hover-shadow text-lg px-8 py-6 flex items-center gap-2 group">
              Get Started Free
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="border-urban-green/60 text-urban-green hover:bg-urban-green/10 hover:text-urban-green-light text-lg px-8 py-6">
              Watch Demo
            </Button>
          </div>

          <div className="flex justify-center gap-8 mb-12">
            <div className="flex items-center gap-2 animate-float">
              <Headphones className="w-6 h-6 text-urban-green" />
              <span className="text-urban-text-light">Voice AI Agents</span>
            </div>
            <div className="flex items-center gap-2 animate-float-slow">
              <MessageCircle className="w-6 h-6 text-urban-green" />
              <span className="text-urban-text-light">AI Chatbots</span>
            </div>
          </div>
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-urban-green/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-urban-green/5 blur-3xl animate-float-slow"></div>
        
        {/* Mockup */}
        <div className="relative max-w-5xl mx-auto mt-8 glass-card rounded-xl p-1 shadow-2xl shadow-urban-green/20 hover-shadow">
          <div className="shimmer rounded-xl overflow-hidden">
            <div className="bg-urban-darker rounded-xl p-4 relative">
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-urban-green"></div>
                </div>
                <div className="text-sm text-urban-text-muted">UrbanChat Dashboard</div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-black/20 rounded-lg p-4 h-48">
                  <div className="text-sm text-urban-text-muted mb-2">Voice Agent Analytics</div>
                  <div className="h-32 flex items-center justify-center">
                    <div className="w-full h-16 bg-gradient-to-r from-urban-green/20 to-urban-green/40 rounded relative">
                      <div className="absolute top-0 left-0 right-0 h-full">
                        <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                          <path 
                            d="M0,50 C50,30 100,80 150,50 C200,20 250,60 300,40 C350,20 400,50 400,50 L400,100 L0,100 Z" 
                            fill="rgba(74, 222, 128, 0.3)" 
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-black/20 rounded-lg p-4 h-48">
                  <div className="text-sm text-urban-text-muted mb-2">Chatbot Performance</div>
                  <div className="h-32 flex items-center justify-center">
                    <div className="w-full h-16 bg-gradient-to-r from-urban-green/40 to-urban-green/20 rounded relative">
                      <div className="absolute top-0 left-0 right-0 h-full">
                        <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                          <path 
                            d="M0,50 C50,20 100,40 150,20 C200,0 250,40 300,50 C350,60 400,40 400,50 L400,100 L0,100 Z" 
                            fill="rgba(74, 222, 128, 0.3)" 
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
