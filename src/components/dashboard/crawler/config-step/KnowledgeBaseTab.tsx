
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Plus, AlertCircle } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';

// Mock knowledge bases for the demo
const MOCK_KNOWLEDGE_BASES = [
  { id: 'kb1', name: 'Product Documentation', documents: 24 },
  { id: 'kb2', name: 'Support FAQ', documents: 12 },
  { id: 'kb3', name: 'Company Policies', documents: 8 },
];

interface KnowledgeBaseTabProps {
  selectedKnowledgeBase: string | null;
  setSelectedKnowledgeBase: (id: string) => void;
  handleNextStep: () => void;
}

const KnowledgeBaseTab: React.FC<KnowledgeBaseTabProps> = ({
  selectedKnowledgeBase,
  setSelectedKnowledgeBase,
  handleNextStep
}) => {
  const hasKnowledgeBases = MOCK_KNOWLEDGE_BASES.length > 0;

  return (
    <div className="space-y-4 w-full">
      <div className="text-sm text-gray-400 mb-4">
        Select an existing knowledge base to create a chatbot from
      </div>

      {hasKnowledgeBases ? (
        <>
          <div className="w-full">
            <Select 
              value={selectedKnowledgeBase || ''}
              onValueChange={setSelectedKnowledgeBase}
            >
              <SelectTrigger className="bg-urban-dark-2 border-urban-dark focus:border-urban-teal w-full">
                <SelectValue placeholder="Select a knowledge base" />
              </SelectTrigger>
              <SelectContent className="bg-urban-dark-2 border-urban-dark">
                {MOCK_KNOWLEDGE_BASES.map(kb => (
                  <SelectItem key={kb.id} value={kb.id} className="focus:bg-urban-dark-3 hover:bg-urban-dark-3">
                    {kb.name} ({kb.documents} documents)
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {selectedKnowledgeBase && (
            <div className="p-4 border border-urban-teal/20 rounded-lg bg-urban-dark-3/50">
              <p className="text-sm">
                Selected knowledge base: {MOCK_KNOWLEDGE_BASES.find(kb => kb.id === selectedKnowledgeBase)?.name}
              </p>
            </div>
          )}
        </>
      ) : (
        <Card className="bg-urban-dark-2/50 border-white/10">
          <CardContent className="p-6 flex flex-col items-center">
            <div className="rounded-full bg-amber-900/20 p-3 mb-4">
              <AlertCircle className="h-6 w-6 text-amber-500" />
            </div>
            <h3 className="text-lg font-medium mb-2">No Knowledge Bases Available</h3>
            <p className="text-sm text-gray-400 text-center mb-4">
              You don't have any knowledge bases yet. Create one by crawling a website.
            </p>
          </CardContent>
        </Card>
      )}
      
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Button 
          type="button"
          variant="outline" 
          className="border-urban-teal text-urban-teal hover:bg-urban-teal/10 w-full sm:w-auto"
          onClick={() => window.location.href = '/dashboard?section=knowledge-base'}
        >
          <Plus className="h-4 w-4 mr-2" />
          Create New Knowledge Base
        </Button>

        {hasKnowledgeBases && (
          <Button 
            type="button" 
            className="bg-urban-purple hover:bg-urban-purple/90 w-full sm:w-auto"
            onClick={handleNextStep}
            disabled={!selectedKnowledgeBase}
          >
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default KnowledgeBaseTab;
