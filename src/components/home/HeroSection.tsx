
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { AuthModal } from "@/components/ui/auth-modal";
import { useNavigate } from "react-router-dom";

interface HeroSectionProps {
  onPricingClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onPricingClick }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 z-10 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-green-400/20 rounded-full filter blur-3xl"></div>
      <div className="absolute top-1/3 -right-20 w-72 h-72 bg-purple-400/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 left-1/3 w-60 h-60 bg-teal-400/20 rounded-full filter blur-3xl"></div>
      <div className="wave wave-1"></div>
      <div className="wave wave-2"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-block mb-6 py-1 px-3 rounded-full bg-green-500/20 text-green-400 text-sm font-medium animate-pulse">
          Meet Your AI Recruiting Assistant
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
          Reinvent <span className="text-green-400 inline-block relative">Hiring
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 358 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9C118.833 3 267.5 3 355 9" stroke="#22C55E" strokeWidth="6" strokeLinecap="round"/>
            </svg>
          </span>
          <br />
          with <span className="text-gradient-primary">AI-Powered Recruitment</span>
        </h1>

        <h2 className="text-xl md:text-2xl font-light mb-8 text-gray-300 max-w-3xl mx-auto">
          UrbanRecruiter.AI shortlists, interviews, and ranks applicants — so you can hire the best, faster. Replace hiring chaos with clarity.
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 px-8 rounded-full text-lg h-14"
            onClick={() => setIsAuthModalOpen(true)}
          >
            Build Your AI Recruiter Now
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/30 hover:bg-white/10 px-8 rounded-full text-lg h-14"
            onClick={onPricingClick}
          >
            See Plans
          </Button>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm text-gray-400">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            Try it free – no credit card needed
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            Lightning-fast candidate screening
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            Interview, qualify & rank on autopilot
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <p className="text-gray-400 mb-4">Empowering next-generation hiring teams</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            <div className="text-white/60 font-bold text-xl">ACME Software</div>
            <div className="text-white/60 font-bold text-xl">TalentGen</div>
            <div className="text-white/60 font-bold text-xl">VirtuTech</div>
            <div className="text-white/60 font-bold text-xl">ScaleUpHR</div>
            <div className="text-white/60 font-bold text-xl">NextHirePro</div>
          </div>
        </div>
      </div>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </section>
  );
};

export default HeroSection;
