
import React, { useState } from 'react';
import { CrawledUrl } from '../types';
import CrawledUrlItem from './CrawledUrlItem';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable';
import { Card, CardContent } from '@/components/ui/card';

interface CrawledUrlsListProps {
  crawledUrls: CrawledUrl[];
}

const CrawledUrlsList: React.FC<CrawledUrlsListProps> = ({ crawledUrls }) => {
  const [selectedUrl, setSelectedUrl] = useState<CrawledUrl | null>(
    crawledUrls.length > 0 ? crawledUrls[0] : null
  );

  return (
    <div className="w-full mt-8">
      <h3 className="text-md font-medium mb-4">Crawled URLs ({crawledUrls.length})</h3>
      <ResizablePanelGroup direction="horizontal" className="min-h-[350px] rounded-lg border border-white/10">
        {/* Left panel - URL list */}
        <ResizablePanel defaultSize={40} minSize={30}>
          <div className="h-full overflow-y-auto p-2">
            <div className="space-y-2 pr-2">
              {crawledUrls.map((item, index) => (
                <div 
                  key={index} 
                  onClick={() => setSelectedUrl(item)}
                  className={`cursor-pointer transition-colors rounded-md p-3 ${selectedUrl === item ? 'bg-urban-dark-2 border border-urban-teal/30' : 'hover:bg-urban-dark-2'}`}
                >
                  <h4 className="text-sm font-medium truncate">{item.url}</h4>
                </div>
              ))}
            </div>
          </div>
        </ResizablePanel>
        
        <ResizableHandle withHandle />
        
        {/* Right panel - Content preview */}
        <ResizablePanel defaultSize={60}>
          <div className="h-full overflow-y-auto p-3 bg-urban-dark-2 rounded-tr-lg rounded-br-lg">
            {selectedUrl ? (
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium">{selectedUrl.url}</h3>
                  <span className="text-xs py-1 px-2 bg-green-500/20 text-green-500 rounded-md">
                    {selectedUrl.status}
                  </span>
                </div>
                <div className="mt-3 bg-urban-dark-3 p-3 rounded-md border border-white/10">
                  <h5 className="text-xs font-medium mb-2">Extracted Content:</h5>
                  <div className="text-xs text-gray-300 whitespace-pre-wrap">
                    {selectedUrl.contentPreview}
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
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                No URL selected or no URLs have been crawled yet
              </div>
            )}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default CrawledUrlsList;
