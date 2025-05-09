
import React from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ChevronRight } from 'lucide-react';

interface CrawlProgressProps {
  isCrawling: boolean;
  progress: number;
  selectedTab: 'crawl' | 'knowledge';
  handleNextStep: () => void;
}

const CrawlProgress: React.FC<CrawlProgressProps> = ({
  isCrawling,
  progress,
  selectedTab,
  handleNextStep
}) => {
  if (selectedTab !== 'crawl') {
    return null;
  }
  
  return (
    <>
      {isCrawling && (
        <div className="space-y-2">
          <div className="flex justify-between text-sm mb-1">
            <span>Crawling in progress...</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      )}
      
      {progress === 100 && !isCrawling && (
        <Button 
          type="button" 
          className="bg-urban-purple hover:bg-urban-purple/90 w-full"
          onClick={handleNextStep}
        >
          Next
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      )}
    </>
  );
};

export default CrawlProgress;
