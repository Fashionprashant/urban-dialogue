
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UseFormReturn } from 'react-hook-form';
import { CrawlForm, CrawledUrl } from '../types';
import ChatbotSettingsDialog from './ChatbotSettingsDialog';
import EmbedChatbotDialog from './EmbedChatbotDialog';

interface ChatbotDetailsProps {
  form: UseFormReturn<CrawlForm>;
  customChatbotName: string;
  selectedModel: string;
  crawledUrls: CrawledUrl[];
  welcomeMessage: string;
  setWelcomeMessage: (message: string) => void;
  selectedIcon: string;
  setSelectedIcon: (icon: string) => void;
  setShowChatBubble: (show: boolean) => void;
  setChatbotName: (name: string) => void;
}

const ChatbotDetails: React.FC<ChatbotDetailsProps> = ({
  form,
  customChatbotName,
  selectedModel,
  crawledUrls,
  welcomeMessage,
  setWelcomeMessage,
  selectedIcon,
  setSelectedIcon,
  setShowChatBubble,
  setChatbotName
}) => {
  return (
    <Card className="bg-urban-dark-3 border-none">
      <CardHeader>
        <CardTitle className="text-lg">Chatbot Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h3 className="font-medium">Configuration</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="text-gray-400">Name:</div>
            <div>{customChatbotName}</div>
            <div className="text-gray-400">Model:</div>
            <div>{selectedModel}</div>
            <div className="text-gray-400">Knowledge Base:</div>
            <div>{form.getValues().url}</div>
            <div className="text-gray-400">URLs Crawled:</div>
            <div>{crawledUrls.length}</div>
          </div>
        </div>
        
        <div className="pt-4 space-y-3">
          <Button className="bg-urban-teal hover:bg-urban-teal/90 w-full">
            Deploy Chatbot
          </Button>
          
          <div className="flex gap-3">
            <ChatbotSettingsDialog 
              chatbotName={customChatbotName}
              setChatbotName={setChatbotName}
              welcomeMessage={welcomeMessage}
              setWelcomeMessage={setWelcomeMessage}
              selectedIcon={selectedIcon}
              setSelectedIcon={setSelectedIcon}
              setShowChatBubble={setShowChatBubble}
            />
            
            <EmbedChatbotDialog chatbotName={customChatbotName} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatbotDetails;
