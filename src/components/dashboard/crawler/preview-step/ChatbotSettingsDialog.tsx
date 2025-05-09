
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Settings, Bot, MessageSquare } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface ChatbotSettingsDialogProps {
  chatbotName: string;
  setChatbotName: (name: string) => void;
  welcomeMessage: string;
  setWelcomeMessage: (message: string) => void;
  selectedIcon: string;
  setSelectedIcon: (icon: string) => void;
  setShowChatBubble: (show: boolean) => void;
}

const ChatbotSettingsDialog: React.FC<ChatbotSettingsDialogProps> = ({
  chatbotName,
  setChatbotName,
  welcomeMessage,
  setWelcomeMessage,
  selectedIcon,
  setSelectedIcon,
  setShowChatBubble
}) => {
  const chatbotIcons = [
    { id: 'default', element: <Bot className="h-8 w-8 text-urban-teal" /> },
    { id: 'purple', element: <Bot className="h-8 w-8 text-urban-purple" /> },
    { id: 'blue', element: <MessageSquare className="h-8 w-8 text-blue-500" /> },
    { id: 'green', element: <MessageSquare className="h-8 w-8 text-green-500" /> },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex-1">
          <Settings className="mr-2 h-4 w-4" />
          Change User Interface
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-urban-dark-2 border-white/10">
        <DialogHeader>
          <DialogTitle>Chatbot Settings</DialogTitle>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="chatbotName">Chatbot Name</Label>
            <Input 
              id="chatbotName"
              value={chatbotName}
              onChange={(e) => setChatbotName(e.target.value)}
              className="bg-urban-dark-3 border-white/10"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="welcomeMessage">Welcome Message</Label>
            <Textarea
              id="welcomeMessage"
              value={welcomeMessage}
              onChange={(e) => setWelcomeMessage(e.target.value)}
              className="bg-urban-dark-3 border-white/10 min-h-[80px]"
            />
          </div>
          
          <div className="space-y-2">
            <Label>Chatbot Icon</Label>
            <div className="grid grid-cols-4 gap-2">
              {chatbotIcons.map((icon) => (
                <div
                  key={icon.id}
                  className={`p-3 rounded-md cursor-pointer flex items-center justify-center ${
                    selectedIcon === icon.id ? 'bg-urban-purple/30 border border-urban-purple' : 'bg-urban-dark-3 border border-white/10'
                  }`}
                  onClick={() => setSelectedIcon(icon.id)}
                >
                  {icon.element}
                </div>
              ))}
            </div>
          </div>
          
          <div className="pt-4 flex justify-between">
            <Button 
              variant="outline"
              className="w-1/2"
              onClick={() => setShowChatBubble(true)}
            >
              Preview Bubble
            </Button>
            <Button className="bg-urban-purple hover:bg-urban-purple/90 w-1/2 ml-2">
              Apply Settings
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatbotSettingsDialog;
