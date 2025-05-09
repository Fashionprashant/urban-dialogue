
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';
import { CrawlForm, CrawledUrl } from './types';
import CrawlWebsiteTab from './config-step/CrawlWebsiteTab';
import KnowledgeBaseTab from './config-step/KnowledgeBaseTab';
import CrawlProgress from './config-step/CrawlProgress';
import CrawledUrlsList from './config-step/CrawledUrlsList';
import { Form } from '@/components/ui/form';

interface CrawlerConfigStepProps {
  form: UseFormReturn<CrawlForm>;
  isCrawling: boolean;
  progress: number;
  crawledUrls: CrawledUrl[];
  handleStartCrawling: () => void;
  handleNextStep: () => void;
  isForKnowledgeBase?: boolean;
}

const CrawlerConfigStep: React.FC<CrawlerConfigStepProps> = ({
  form,
  isCrawling,
  progress,
  crawledUrls,
  handleStartCrawling,
  handleNextStep,
  isForKnowledgeBase
}) => {
  const [selectedTab, setSelectedTab] = useState<'crawl' | 'knowledge'>('crawl');
  const [selectedKnowledgeBase, setSelectedKnowledgeBase] = useState<string | null>(null);

  return (
    <Card className="bg-urban-dark-3 border-none w-full max-w-full">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Globe className="mr-2 h-5 w-5 text-urban-teal" />
          {isForKnowledgeBase ? "Create Knowledge Base" : "Select Data Source"}
        </CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <Form {...form}>
          <div className="space-y-6 w-full">
            <div className="flex border-b border-white/10 mb-4 overflow-x-auto">
              <button
                type="button"
                onClick={() => setSelectedTab('crawl')}
                className={`pb-2 px-4 relative whitespace-nowrap ${selectedTab === 'crawl' ? 'text-urban-teal' : 'text-gray-400'}`}
              >
                Website URL
                {selectedTab === 'crawl' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-urban-teal"></span>}
              </button>
              {!isForKnowledgeBase && (
                <button
                  type="button"
                  onClick={() => setSelectedTab('knowledge')}
                  className={`pb-2 px-4 relative whitespace-nowrap ${selectedTab === 'knowledge' ? 'text-urban-teal' : 'text-gray-400'}`}
                >
                  Connect Knowledge Base
                  {selectedTab === 'knowledge' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-urban-teal"></span>}
                </button>
              )}
            </div>
            
            <div className="w-full">
              {selectedTab === 'crawl' ? (
                <CrawlWebsiteTab 
                  form={form} 
                  isCrawling={isCrawling} 
                  progress={progress}
                  handleStartCrawling={handleStartCrawling}
                  handleNextStep={handleNextStep}
                  isForKnowledgeBase={isForKnowledgeBase}
                />
              ) : (
                <KnowledgeBaseTab
                  selectedKnowledgeBase={selectedKnowledgeBase}
                  setSelectedKnowledgeBase={setSelectedKnowledgeBase}
                  handleNextStep={handleNextStep}
                />
              )}
            </div>
            
            <CrawlProgress 
              isCrawling={isCrawling}
              progress={progress}
              selectedTab={selectedTab}
              handleNextStep={handleNextStep}
            />
          </div>
        </Form>
        
        {crawledUrls.length > 0 && <CrawledUrlsList crawledUrls={crawledUrls} />}
      </CardContent>
    </Card>
  );
};

export default CrawlerConfigStep;
