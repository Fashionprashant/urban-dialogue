
import React from 'react';

const StatsSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="gradient-text">Companies Worldwide</span>
          </h2>
          <p className="text-urban-text-muted">
            Join hundreds of businesses using UrbanChat.ai to transform their customer service operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="card-gradient rounded-xl p-6 text-center hover-shadow">
            <div className="text-4xl font-bold gradient-text mb-2">95%</div>
            <div className="text-urban-text-muted">Customer Satisfaction</div>
          </div>
          
          <div className="card-gradient rounded-xl p-6 text-center hover-shadow">
            <div className="text-4xl font-bold gradient-text mb-2">70%</div>
            <div className="text-urban-text-muted">Cost Reduction</div>
          </div>
          
          <div className="card-gradient rounded-xl p-6 text-center hover-shadow">
            <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-urban-text-muted">Support Coverage</div>
          </div>
          
          <div className="card-gradient rounded-xl p-6 text-center hover-shadow">
            <div className="text-4xl font-bold gradient-text mb-2">500+</div>
            <div className="text-urban-text-muted">Business Clients</div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
          <div className="h-12 flex items-center justify-center">
            <div className="text-xl font-bold text-white">ACME Corp</div>
          </div>
          <div className="h-12 flex items-center justify-center">
            <div className="text-xl font-bold text-white">TechGiant</div>
          </div>
          <div className="h-12 flex items-center justify-center">
            <div className="text-xl font-bold text-white">FutureWorks</div>
          </div>
          <div className="h-12 flex items-center justify-center">
            <div className="text-xl font-bold text-white">InnovateCo</div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-urban-green/5 blur-3xl"></div>
      <div className="absolute bottom-1/2 right-1/4 w-48 h-48 rounded-full bg-urban-green/10 blur-3xl"></div>
    </section>
  );
};

export default StatsSection;
