
import React, { ReactNode, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/home/Footer';
import ParticleBackground from '@/components/particles/ParticleBackground';
import { useLocation } from 'react-router-dom';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title, subtitle }) => {
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-urban-dark text-white relative overflow-x-hidden">
      <ParticleBackground />
      <Header />
      
      <main className="pt-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            {subtitle && <p className="text-xl text-gray-300 max-w-3xl mx-auto">{subtitle}</p>}
          </div>
          
          <div className="glass-morphism rounded-lg p-6 md:p-8">
            {children}
          </div>
        </div>
      </main>
      
      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
};

export default PageLayout;
