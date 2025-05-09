
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Globe, Play, ChevronRight, ChevronDown, ChevronUp, Database } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';
import { CrawlForm, CrawledUrl } from './types';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface CrawlerConfigStepProps {
  form: UseFormReturn<CrawlForm>;
  isCrawling: boolean;
  progress: number;
  crawledUrls: CrawledUrl[];
  handleStartCrawling: () => void;
  handleNextStep: () => void;
}

// Mock knowledge bases for the demo
const MOCK_KNOWLEDGE_BASES = [
  { id: 'kb1', name: 'Product Documentation', documents: 24 },
  { id: 'kb2', name: 'Support FAQ', documents: 12 },
  { id: 'kb3', name: 'Company Policies', documents: 8 },
];

const CrawlerConfigStep: React.FC<CrawlerConfigStepProps> = ({
  form,
  isCrawling,
  progress,
  crawledUrls,
  handleStartCrawling,
  handleNextStep
}) => {
  const [selectedTab, setSelectedTab] = useState<'crawl' | 'knowledge'>('crawl');
  const [selectedKnowledgeBase, setSelectedKnowledgeBase] = useState<string | null>(null);

  return (
    <Card className="bg-urban-dark-3 border-none">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Globe className="mr-2 h-5 w-5 text-urban-teal" />
          Select Data Source
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="flex border-b border-white/10 mb-4">
            <button
              type="button"
              onClick={() => setSelectedTab('crawl')}
              className={`pb-2 px-4 relative ${selectedTab === 'crawl' ? 'text-urban-teal' : 'text-gray-400'}`}
            >
              Website URL
              {selectedTab === 'crawl' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-urban-teal"></span>}
            </button>
            <button
              type="button"
              onClick={() => setSelectedTab('knowledge')}
              className={`pb-2 px-4 relative ${selectedTab === 'knowledge' ? 'text-urban-teal' : 'text-gray-400'}`}
            >
              Connect Knowledge Base
              {selectedTab === 'knowledge' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-urban-teal"></span>}
            </button>
          </div>
          
          {selectedTab === 'crawl' ? (
            <div className="space-y-4">
              <div>
                <Label htmlFor="url">Website URL</Label>
                <Input 
                  id="url" 
                  placeholder="https://example.com" 
                  className="bg-urban-dark-2 border-urban-dark focus:border-urban-teal"
                  {...form.register('url')}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="crawlDepth">Crawl Depth</Label>
                  <Input 
                    id="crawlDepth" 
                    placeholder="2" 
                    type="number"
                    className="bg-urban-dark-2 border-urban-dark focus:border-urban-teal"
                    {...form.register('crawlDepth')}
                  />
                </div>
                <div>
                  <Label htmlFor="requestTimeout">Request Timeout (ms)</Label>
                  <Input 
                    id="requestTimeout" 
                    placeholder="10000" 
                    type="number"
                    className="bg-urban-dark-2 border-urban-dark focus:border-urban-teal"
                    {...form.register('requestTimeout')}
                  />
                </div>
                <div>
                  <Label htmlFor="outputFormat">Output Format</Label>
                  <Select 
                    defaultValue={form.getValues().outputFormat}
                    onValueChange={(value) => form.setValue('outputFormat', value)}
                  >
                    <SelectTrigger className="bg-urban-dark-2 border-urban-dark focus:border-urban-teal">
                      <SelectValue placeholder="Select output format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="plaintext">Plain Text</SelectItem>
                      <SelectItem value="markdown">Markdown</SelectItem>
                      <SelectItem value="html">HTML</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="urlFilter">URL Filter (only crawl URLs containing this text)</Label>
                <Input 
                  id="urlFilter" 
                  placeholder="e.g., /blog or /docs" 
                  className="bg-urban-dark-2 border-urban-dark focus:border-urban-teal"
                  {...form.register('urlFilter')}
                />
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-2">Advanced Options</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-urban-dark-2 p-3 rounded-md">
                  <RadioGroup
                    defaultValue={form.getValues().extractContent ? "extractContent" : 
                                 form.getValues().followExternalLinks ? "followExternalLinks" :
                                 "stealthMode"}
                    onValueChange={(value) => {
                      form.setValue('extractContent', value === "extractContent");
                      form.setValue('followExternalLinks', value === "followExternalLinks");
                      form.setValue('stealthMode', value === "stealthMode");
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="extractContent" id="extractContent" />
                      <Label htmlFor="extractContent">Extract Content</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="followExternalLinks" id="followExternalLinks" />
                      <Label htmlFor="followExternalLinks">Follow External Links</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="stealthMode" id="stealthMode" />
                      <Label htmlFor="stealthMode">Stealth Mode</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              
              {!isCrawling && progress === 0 && (
                <Button 
                  type="button" 
                  className="bg-urban-teal hover:bg-urban-teal/90 w-full"
                  onClick={handleStartCrawling}
                >
                  <Play className="h-4 w-4 mr-2" />
                  Start Crawling
                </Button>
              )}
            </div>
          ) : (
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
          )}
          
          {isCrawling && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm mb-1">
                <span>Crawling in progress...</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}
          
          {progress === 100 && !isCrawling && selectedTab === 'crawl' && (
            <Button 
              type="button" 
              className="bg-urban-purple hover:bg-urban-purple/90 w-full"
              onClick={handleNextStep}
            >
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          )}
        </form>
        
        {crawledUrls.length > 0 && <CrawledUrlsList crawledUrls={crawledUrls} />}
      </CardContent>
    </Card>
  );
};

// Extracted component for the crawled URLs list with expandable content
const CrawledUrlsList: React.FC<{ crawledUrls: CrawledUrl[] }> = ({ crawledUrls }) => {
  return (
    <div className="mt-8">
      <h3 className="text-md font-medium mb-4">Crawled URLs ({crawledUrls.length})</h3>
      <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
        {crawledUrls.map((item, index) => (
          <CrawledUrlItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

// Individual URL item with expandable content
const CrawledUrlItem: React.FC<{ item: CrawledUrl }> = ({ item }) => {
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

export default CrawlerConfigStep;
