
import React from 'react';
import { Bot, Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const ChatbotListContent: React.FC = () => {
  const navigate = useNavigate();
  const { isMobile } = useIsMobile();
  
  const handleCreateChatbot = () => {
    // Redirect to dashboard with create-chatbot section active
    navigate('/dashboard', { state: { section: 'create-chatbot' } });
  };
  
  return (
    <div className={`w-full p-6 bg-urban-dark min-h-screen ${!isMobile ? 'ml-0 md:ml-64' : ''}`}>
      <div>
        <h1 className="text-2xl font-bold mb-1">AI Chatbots</h1>
        <p className="text-muted-foreground mb-6">Manage your AI chatbot instances</p>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search chatbots..." 
              className="pl-10 bg-urban-dark-3 border-none"
            />
          </div>
          <Button 
            className="bg-urban-teal hover:bg-urban-teal/90 w-full md:w-auto"
            onClick={handleCreateChatbot}
          >
            <Plus className="mr-2 h-4 w-4" />
            Create New Chatbot
          </Button>
        </div>
        
        <div className="flex flex-col items-center justify-center p-12 text-center border border-white/10 rounded-md">
          <div className="rounded-full bg-urban-dark-2 p-8 mb-6">
            <Bot className="h-16 w-16 text-urban-teal" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">No Chatbots Yet</h2>
          <p className="text-gray-400 mb-6 max-w-md">
            Create your first AI chatbot to start engaging with your website visitors. 
            Your chatbots will appear here once created.
          </p>
          <Button 
            className="bg-urban-teal hover:bg-urban-teal/90"
            onClick={handleCreateChatbot}
          >
            <Plus className="mr-2 h-4 w-4" />
            Create Your First Chatbot
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotListContent;
