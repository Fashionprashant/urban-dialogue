
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bot, MessageSquare } from 'lucide-react';

interface FloatingChatBubbleProps {
  customChatbotName: string;
  welcomeMessage: string;
  chatExpanded: boolean;
  setChatExpanded: (expanded: boolean) => void;
}

const FloatingChatBubble: React.FC<FloatingChatBubbleProps> = ({
  customChatbotName,
  welcomeMessage,
  chatExpanded,
  setChatExpanded
}) => {
  return (
    <div className="fixed bottom-20 right-6 z-50">
      {!chatExpanded ? (
        <Button
          className="h-14 w-14 rounded-full bg-urban-teal hover:bg-urban-teal/90 shadow-lg flex items-center justify-center"
          onClick={() => setChatExpanded(true)}
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      ) : (
        <div className="bg-urban-dark-3 border border-white/10 rounded-lg shadow-xl w-80 h-96 flex flex-col">
          <div className="p-3 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center">
              <Bot className="h-5 w-5 mr-2 text-urban-teal" />
              <h3 className="font-medium">{customChatbotName}</h3>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8" 
              onClick={() => setChatExpanded(false)}
            >
              <span className="sr-only">Close</span>
              &times;
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <div className="bg-urban-dark-2 p-3 rounded-lg max-w-[80%]">
              <p className="text-sm">{welcomeMessage}</p>
            </div>
          </div>
          <div className="p-3 border-t border-white/10">
            <div className="flex gap-2">
              <Input 
                placeholder="Type your message..." 
                className="bg-urban-dark-2 border-urban-dark text-sm"
                size={1}
              />
              <Button size="sm" className="bg-urban-purple hover:bg-urban-purple/90">
                Send
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingChatBubble;
