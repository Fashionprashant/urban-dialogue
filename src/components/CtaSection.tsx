
import React from 'react';
import { Button } from "@/components/ui/button";
import { Zap } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto card-gradient rounded-2xl p-1 shadow-xl shadow-urban-green/20 hover-shadow">
          <div className="bg-urban-darker rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-urban-green/20 blur-3xl animate-float-slow"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-urban-green/10 blur-3xl animate-float"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-block bg-urban-green/20 rounded-full p-3 mb-6 animate-glow">
                <Zap className="w-8 h-8 text-urban-green" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your <span className="gradient-text">Customer Service</span>?
              </h2>
              
              <p className="text-xl text-urban-text-muted mb-8 max-w-2xl mx-auto">
                Get started with UrbanChat.ai today and experience the power of AI-driven customer interactions.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                <Button className="bg-urban-green text-black hover:bg-urban-green-dark hover-shadow text-lg px-8 py-6 flex-1">
                  Start Free Trial
                </Button>
                <Button variant="outline" className="border-urban-green/60 text-urban-text-light hover:bg-urban-green/10 text-lg px-8 py-6 flex-1">
                  Book a Demo
                </Button>
              </div>
              
              <p className="text-urban-text-muted mt-6">
                No credit card required. 14-day free trial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
