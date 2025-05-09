
import React, { useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { UseFormReturn } from 'react-hook-form';
import { CrawlForm } from '../types';
import AdvancedCrawlOptions from './AdvancedCrawlOptions';

interface CrawlWebsiteTabProps {
  form: UseFormReturn<CrawlForm>;
  isCrawling: boolean;
  progress: number;
  handleStartCrawling: () => void;
  handleNextStep: () => void;
  isForKnowledgeBase?: boolean;
}

const CrawlWebsiteTab: React.FC<CrawlWebsiteTabProps> = ({ 
  form, 
  isCrawling, 
  progress,
  handleStartCrawling,
  handleNextStep,
  isForKnowledgeBase
}) => {
  // Log form values for debugging
  useEffect(() => {
    const subscription = form.watch((value) => {
      console.log("Form values changed:", value);
    });
    
    return () => subscription.unsubscribe();
  }, [form]);

  const urlValue = form.watch('url');
  const isUrlEmpty = !urlValue || urlValue.trim() === '';
  
  const handleStartClick = () => {
    console.log("Start button clicked. Form values:", form.getValues());
    handleStartCrawling();
  };

  return (
    <div className="space-y-4 w-full">
      <div>
        <Label htmlFor="url">Website URL</Label>
        <Input
          id="url"
          placeholder="https://example.com"
          className="bg-urban-dark-2 border-urban-dark focus:border-urban-teal"
          {...form.register('url')}
        />
        <p className="text-xs text-muted-foreground mt-1">
          Enter the full URL of the website you want to crawl
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="crawlDepth">Crawl Depth</Label>
          <Select
            value={form.getValues().crawlDepth}
            onValueChange={(value) => form.setValue('crawlDepth', value)}
          >
            <SelectTrigger className="bg-urban-dark-2 border-urban-dark focus:border-urban-teal">
              <SelectValue placeholder="Select crawl depth" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 - Homepage only</SelectItem>
              <SelectItem value="2">2 - Homepage + linked pages</SelectItem>
              <SelectItem value="3">3 - Deep crawl</SelectItem>
              <SelectItem value="4">4 - Very deep crawl</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="requestTimeout">Request Timeout (ms)</Label>
          <Select
            value={form.getValues().requestTimeout}
            onValueChange={(value) => form.setValue('requestTimeout', value)}
          >
            <SelectTrigger className="bg-urban-dark-2 border-urban-dark focus:border-urban-teal">
              <SelectValue placeholder="Select request timeout" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5000">5000 - Fast</SelectItem>
              <SelectItem value="10000">10000 - Normal</SelectItem>
              <SelectItem value="15000">15000 - Slow</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="outputFormat">Output Format</Label>
          <Select
            value={form.getValues().outputFormat}
            onValueChange={(value) => form.setValue('outputFormat', value as 'markdown' | 'text')}
          >
            <SelectTrigger className="bg-urban-dark-2 border-urban-dark focus:border-urban-teal">
              <SelectValue placeholder="Select output format" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="markdown">Markdown</SelectItem>
              <SelectItem value="text">Plain Text</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="urlFilter">URL Filter (optional)</Label>
          <Input
            id="urlFilter"
            placeholder="e.g., /docs/, /blog/"
            className="bg-urban-dark-2 border-urban-dark focus:border-urban-teal"
            {...form.register('urlFilter')}
          />
        </div>
      </div>
      
      <AdvancedCrawlOptions form={form} />
      
      <div className="flex flex-col sm:flex-row gap-3 justify-end items-center mt-6">
        {progress === 100 ? (
          <Button 
            className="bg-urban-purple hover:bg-urban-purple/90 w-full sm:w-auto"
            onClick={handleNextStep}
          >
            {isForKnowledgeBase ? "Save as Knowledge Base" : "Next: Set Up Chatbot"}
          </Button>
        ) : (
          <Button 
            className="bg-urban-teal hover:bg-urban-teal/90 w-full sm:w-auto"
            disabled={isCrawling || isUrlEmpty}
            onClick={handleStartClick}
          >
            {isCrawling ? "Crawling..." : "Start Crawling"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default CrawlWebsiteTab;
