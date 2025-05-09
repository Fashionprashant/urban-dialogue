
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { CrawledUrl } from '../types';

interface CrawledUrlItemProps {
  item: CrawledUrl;
}

const CrawledUrlItem: React.FC<CrawledUrlItemProps> = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <Card className="bg-urban-dark-2 border-none">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-sm font-medium truncate max-w-[70%]">{item.url}</h4>
          <div className="flex items-center">
            <Badge className="bg-green-500/20 text-green-500 mr-2">
              {item.status}
            </Badge>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-6 w-6"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        
        {!expanded && (
          <p className="text-xs text-gray-400 line-clamp-2">{item.contentPreview}</p>
        )}
        
        {expanded && (
          <div className="mt-3 bg-urban-dark-3 p-3 rounded-md border border-white/10">
            <h5 className="text-xs font-medium mb-2">Extracted Content:</h5>
            <div className="text-xs text-gray-300 whitespace-pre-wrap">
              {item.contentPreview}
              {/* Add more detailed content here in a real implementation */}
              <p className="mt-2">
                This is the full extracted content from the page. In a real implementation,
                this would contain all the text, headings, and other content scraped from the webpage.
              </p>
              <p className="mt-2">
                You can use this content to train your AI chatbot to answer questions
                about this specific page or topic.
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CrawledUrlItem;
