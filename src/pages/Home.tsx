
import React from 'react';
import ParticleBackground from '@/components/particles/ParticleBackground';
import HeroSection from '@/components/home/HeroSection';
import UseCasesSection from '@/components/home/UseCasesSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import CtaSection from '@/components/home/CtaSection';
import Footer from '@/components/home/Footer';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  
  const handlePricingClick = () => {
    navigate('/pricing');
  };
  
  return (
    <div className="min-h-screen bg-urban-dark text-white relative overflow-x-hidden">
      <ParticleBackground />
      <HeroSection onPricingClick={handlePricingClick} />
      <UseCasesSection />
      <FeaturesSection />
      <CtaSection onPricingClick={handlePricingClick} />
      <Footer />
    </div>
  );
};

export default Home;
