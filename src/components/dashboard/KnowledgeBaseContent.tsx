
import React from 'react';
import { Book, Search, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const KnowledgeBaseContent: React.FC = () => {
  return (
    <div className="w-full ml-0 md:ml-64 p-6 bg-urban-dark min-h-screen">
      <div>
        <h1 className="text-2xl font-bold mb-1">Knowledge Base</h1>
        <p className="text-muted-foreground mb-6">Manage your chatbot's knowledge sources</p>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search knowledge bases..." 
              className="pl-10 bg-urban-dark-3 border-none"
            />
          </div>
          <Button className="bg-urban-teal hover:bg-urban-teal/90 w-full md:w-auto">
            <Plus className="mr-2 h-4 w-4" />
            Add Knowledge Base
          </Button>
        </div>
        
        <div className="flex flex-col items-center justify-center p-12 text-center border border-white/10 rounded-md">
          <div className="rounded-full bg-urban-dark-2 p-8 mb-6">
            <Book className="h-16 w-16 text-urban-purple" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">No Knowledge Bases Yet</h2>
          <p className="text-gray-400 mb-6 max-w-md">
            Add your first knowledge base to train your AI chatbots.
            Your knowledge sources will appear here once created.
          </p>
          <Button className="bg-urban-teal hover:bg-urban-teal/90">
            <Plus className="mr-2 h-4 w-4" />
            Create Your First Knowledge Base
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBaseContent;
