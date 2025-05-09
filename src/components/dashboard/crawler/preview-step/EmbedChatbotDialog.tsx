
import React from 'react';
import { Button } from '@/components/ui/button';
import { Code } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface EmbedChatbotDialogProps {
  chatbotName: string;
}

const EmbedChatbotDialog: React.FC<EmbedChatbotDialogProps> = ({ chatbotName }) => {
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

export default EmbedChatbotDialog;
