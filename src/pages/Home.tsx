
import React, { useState } from 'react';
import ParticleBackground from '@/components/particles/ParticleBackground';
import HeroSection from '@/components/home/HeroSection';
import UseCasesSection from '@/components/home/UseCasesSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import CtaSection from '@/components/home/CtaSection';
import Footer from '@/components/home/Footer';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import { AuthModal } from '@/components/ui/auth-modal';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState<'signin' | 'signup'>('signup');
  
  // In a real app, this would come from auth state
  const isLoggedIn = false;
  
  const handlePricingClick = () => {
    navigate('/pricing');
  };
  
  const handleGetStartedClick = () => {
    if (isLoggedIn) {
      navigate('/dashboard');
    } else {
      setAuthType('signup');
      setIsAuthModalOpen(true);
    }
  };
  
  return (
    <div className="min-h-screen bg-urban-dark text-white relative overflow-x-hidden">
      <ParticleBackground />
      <Header transparent />
      <HeroSection onPricingClick={handlePricingClick} onGetStartedClick={handleGetStartedClick} />
      <UseCasesSection />
      <FeaturesSection />
      <CtaSection onPricingClick={handlePricingClick} onGetStartedClick={handleGetStartedClick} />
      <Footer />
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        defaultTab={authType}
      />
    </div>
  );
};

export default Home;
