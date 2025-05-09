
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Bot } from 'lucide-react';

interface ChatbotPreviewProps {
  customChatbotName: string;
  welcomeMessage: string;
}

const ChatbotPreview: React.FC<ChatbotPreviewProps> = ({
  customChatbotName,
  welcomeMessage
}) => {
  return (
    <Card className="bg-urban-dark-3 border-none h-[500px] flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center">
          <Bot className="mr-2 h-5 w-5 text-urban-teal" />
          {customChatbotName}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto">
        <div className="space-y-4">
          <div className="flex justify-start">
            <div className="bg-urban-dark-2 p-3 rounded-lg max-w-[80%]">
              <p>{welcomeMessage}</p>
            </div>
          </div>
        </div>
      </CardContent>
      <div className="p-4 border-t border-white/10">
        <div className="flex gap-2">
          <Input 
            placeholder="Type your message..." 
            className="bg-urban-dark-2 border-urban-dark focus:border-urban-teal"
          />
          <Button className="bg-urban-purple hover:bg-urban-purple/90">
            Send
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ChatbotPreview;
