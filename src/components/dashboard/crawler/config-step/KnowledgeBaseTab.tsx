
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Database } from 'lucide-react';

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
  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-400 mb-4">
        Select an existing knowledge base to create a chatbot from
      </div>
      <div className="space-y-4">
        {MOCK_KNOWLEDGE_BASES.map((kb) => (
          <div 
            key={kb.id}
            className={`p-4 rounded-lg border cursor-pointer transition-all ${
              selectedKnowledgeBase === kb.id 
                ? 'border-urban-teal bg-urban-dark-2' 
                : 'border-white/10 bg-urban-dark-2/50 hover:border-white/30'
            }`}
            onClick={() => setSelectedKnowledgeBase(kb.id)}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Database className="h-5 w-5 mr-3 text-urban-teal" />
                <div>
                  <h3 className="font-medium">{kb.name}</h3>
                  <p className="text-xs text-gray-400">{kb.documents} documents</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full ${
                  selectedKnowledgeBase === kb.id ? 'bg-urban-teal' : 'border border-white/30'
                }`}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <Button 
        type="button" 
        className="bg-urban-purple hover:bg-urban-purple/90 w-full"
        onClick={handleNextStep}
        disabled={!selectedKnowledgeBase}
      >
        Next
        <ChevronRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};

export default KnowledgeBaseTab;
