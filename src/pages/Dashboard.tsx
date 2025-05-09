
import React, { useState, useEffect } from 'react';
import { PageTransition } from '@/components/ui/page-transition';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardContent from '@/components/dashboard/DashboardContent';
import ChatHistoryContent from '@/components/dashboard/ChatHistoryContent';
import ChatbotListContent from '@/components/dashboard/ChatbotListContent';
import LeadsContent from '@/components/dashboard/LeadsContent';
import WebCrawlerContent from '@/components/dashboard/WebCrawlerContent';
import KnowledgeBaseContent from '@/components/dashboard/KnowledgeBaseContent';
import ComingSoonContent from '@/components/dashboard/ComingSoonContent';
import { Skeleton } from '@/components/ui/skeleton';

const Dashboard: React.FC = () => {
  // In a real app, this would come from an auth provider
  const user = {
    name: "Alex Morgan",
    plan: "Pro Plan",
    expiry: "June 30"
  };

  const [activeSection, setActiveSection] = useState('dashboard');
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [activeSection]);

  const renderContent = () => {
    if (loading) {
      return <DashboardSkeleton />;
    }
    
    switch (activeSection) {
      case 'dashboard':
        return <DashboardContent />;
      case 'history':
        return <ChatHistoryContent selectedChat={selectedChat} onSelectChat={setSelectedChat} />;
      case 'leads':
        return <LeadsContent />;
      case 'chatbots':
        return <ChatbotListContent />;
      case 'create-chatbot':
        return <WebCrawlerContent />;
      case 'knowledge-base':
        return <KnowledgeBaseContent />;
      case 'api':
        return <ComingSoonContent title="API Management" />;
      case 'white-label':
        return <ComingSoonContent title="White Label Service" />;
      case 'settings':
        return <ComingSoonContent title="Settings" />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="min-h-screen bg-urban-dark text-white">
      <DashboardHeader 
        username={user.name} 
        planType={user.plan}
        planExpiry={user.expiry}
      />
      <div className="flex pt-[73px]"> {/* Add padding top for fixed header */}
        <DashboardSidebar activeSection={activeSection} onSectionChange={(section) => {
          setLoading(true);
          setActiveSection(section);
          setSelectedChat(null);
        }} />
        <PageTransition>
          {renderContent()}
        </PageTransition>
      </div>
    </div>
  );
};

const DashboardSkeleton = () => {
  return (
    <div className="ml-64 p-6 bg-urban-dark min-h-screen">
      <div>
        <Skeleton className="h-8 w-64 mb-1" />
        <Skeleton className="h-5 w-96 mb-6" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {Array(4).fill(null).map((_, i) => (
            <Skeleton key={i} className="h-32" shimmer />
          ))}
        </div>
        
        <Skeleton className="h-80 mb-8" shimmer />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Skeleton className="h-60" shimmer />
          <Skeleton className="h-60" shimmer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
