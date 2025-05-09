
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';
import { CrawlForm, CrawledUrl } from './types';
import ChatbotPreview from './preview-step/ChatbotPreview';
import ChatbotDetails from './preview-step/ChatbotDetails';
import FloatingChatBubble from './preview-step/FloatingChatBubble';

interface ChatbotPreviewStepProps {
  form: UseFormReturn<CrawlForm>;
  chatbotName: string;
  selectedModel: string;
  crawledUrls: CrawledUrl[];
}

const ChatbotPreviewStep: React.FC<ChatbotPreviewStepProps> = ({
  form,
  chatbotName,
  selectedModel,
  crawledUrls
}) => {
  const [showChatBubble, setShowChatBubble] = useState(false);
  const [chatExpanded, setChatExpanded] = useState(false);
  const [customChatbotName, setCustomChatbotName] = useState(chatbotName);
  const [welcomeMessage, setWelcomeMessage] = useState(`Hello! I'm ${chatbotName}. How can I assist you today?`);
  const [selectedIcon, setSelectedIcon] = useState('default');

  const handleChangeChatbotName = (name: string) => {
    setCustomChatbotName(name);
    setWelcomeMessage(`Hello! I'm ${name}. How can I assist you today?`);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
      <ChatbotPreview 
        customChatbotName={customChatbotName}
        welcomeMessage={welcomeMessage}
      />
      
      <ChatbotDetails
        form={form}
        customChatbotName={customChatbotName}
        selectedModel={selectedModel}
        crawledUrls={crawledUrls}
        welcomeMessage={welcomeMessage}
        setWelcomeMessage={setWelcomeMessage}
        selectedIcon={selectedIcon}
        setSelectedIcon={setSelectedIcon}
        setShowChatBubble={setShowChatBubble}
        setChatbotName={handleChangeChatbotName}
      />

      {showChatBubble && (
        <FloatingChatBubble
          customChatbotName={customChatbotName}
          welcomeMessage={welcomeMessage}
          chatExpanded={chatExpanded}
          setChatExpanded={setChatExpanded}
        />
      )}
    </div>
  );
};

export default ChatbotPreviewStep;
