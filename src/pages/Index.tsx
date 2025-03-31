
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import VoiceAgentSection from '@/components/VoiceAgentSection';
import ChatbotSection from '@/components/ChatbotSection';
import StatsSection from '@/components/StatsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-urban-dark">
      <Navbar />
      <main>
        <HeroSection />
        <VoiceAgentSection />
        <ChatbotSection />
        <StatsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
