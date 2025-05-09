
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CrawledUrl } from '../types';

interface CrawledUrlItemProps {
  item: CrawledUrl;
  isSelected?: boolean;
  onClick?: () => void;
}

const CrawledUrlItem: React.FC<CrawledUrlItemProps> = ({ item, isSelected, onClick }) => {
  return (
    <Card 
      className={`bg-urban-dark-2 border-none cursor-pointer hover:bg-urban-dark-3 transition-colors ${isSelected ? 'ring-1 ring-urban-teal' : ''}`}
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex justify-between items-center">
          <h4 className="text-sm font-medium truncate max-w-[70%]">{item.url}</h4>
          <Badge className="bg-green-500/20 text-green-500">
            {item.status}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default CrawledUrlItem;
