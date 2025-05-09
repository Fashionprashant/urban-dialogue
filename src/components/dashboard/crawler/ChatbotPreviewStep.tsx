
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bot, Settings, MessageSquare, Code } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';
import { CrawlForm, CrawledUrl } from './types';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

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
      {/* Chatbot Preview */}
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
      
      {/* Chatbot Details */}
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
                setChatbotName={handleChangeChatbotName}
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

      {/* Floating Chat Bubble */}
      {showChatBubble && (
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
      )}
    </div>
  );
};

// Chatbot Settings Dialog
const ChatbotSettingsDialog: React.FC<{
  chatbotName: string;
  setChatbotName: (name: string) => void;
  welcomeMessage: string;
  setWelcomeMessage: (message: string) => void;
  selectedIcon: string;
  setSelectedIcon: (icon: string) => void;
  setShowChatBubble: (show: boolean) => void;
}> = ({
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

// Embed Chatbot Dialog
const EmbedChatbotDialog: React.FC<{ chatbotName: string }> = ({ chatbotName }) => {
  const embedCode = `<!-- ${chatbotName} Chatbot Code -->
<script>
  (function(w, d, s, o, f, js, fjs) {
    w['${chatbotName.replace(/\s+/g, '')}Widget'] = o;
    w[o] = w[o] || function() {
      (w[o].q = w[o].q || []).push(arguments);
    };
    js = d.createElement(s);
    fjs = d.getElementsByTagName(s)[0];
    js.id = o;
    js.src = f;
    js.async = 1;
    fjs.parentNode.insertBefore(js, fjs);
  }(window, document, 'script', 'ai', 'https://app.example.com/widget.js'));
  ai('init', { botId: 'BOT12345' });
</script>`;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex-1">
          <Code className="mr-2 h-4 w-4" />
          Embed Chatbot
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] glass-morphism bg-black/40 backdrop-blur-xl border-white/10">
        <DialogHeader>
          <DialogTitle>Embed {chatbotName} on Your Website</DialogTitle>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <p className="text-sm text-gray-300">
            Copy and paste this code into the footer of your website to add the chatbot to your pages.
          </p>
          
          <div className="bg-urban-dark-3 p-4 rounded-md overflow-auto">
            <pre className="text-xs text-gray-300 whitespace-pre-wrap">{embedCode}</pre>
          </div>
          
          <Button 
            className="w-full bg-urban-purple hover:bg-urban-purple/90"
            onClick={() => {
              navigator.clipboard.writeText(embedCode);
              // In a real app, you would want to show a toast notification here
            }}
          >
            Copy Code to Clipboard
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatbotPreviewStep;
