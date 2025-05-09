
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Play } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';
import { CrawlForm } from '../types';
import AdvancedCrawlOptions from './AdvancedCrawlOptions';

interface CrawlWebsiteTabProps {
  form: UseFormReturn<CrawlForm>;
  isCrawling: boolean;
  progress: number;
  handleStartCrawling: () => void;
  handleNextStep: () => void;
}

const CrawlWebsiteTab: React.FC<CrawlWebsiteTabProps> = ({
  form,
  isCrawling,
  progress,
  handleStartCrawling
}) => {
  return (
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
      
      <AdvancedCrawlOptions form={form} />
      
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
  );
};

export default CrawlWebsiteTab;
