
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { useForm } from 'react-hook-form';
import { CrawlForm, CrawledUrl, WebCrawlerStep } from './crawler/types';
import StepNavigation from './crawler/StepNavigation';
import CrawlerConfigStep from './crawler/CrawlerConfigStep';
import ChatbotSetupStep from './crawler/ChatbotSetupStep';
import ChatbotPreviewStep from './crawler/ChatbotPreviewStep';
import { useIsMobile } from '@/hooks/use-mobile';

interface WebCrawlerContentProps {
  skipSetup?: boolean;
}

const WebCrawlerContent: React.FC<WebCrawlerContentProps> = ({ skipSetup }) => {
  const { isMobile } = useIsMobile();
  const [step, setStep] = useState<WebCrawlerStep>(() => skipSetup ? 'crawler' : 'crawler');
  const [isCrawling, setIsCrawling] = useState(false);
  const [progress, setProgress] = useState(0);
  const [crawledUrls, setCrawledUrls] = useState<CrawledUrl[]>([]);
  const [chatbotName, setChatbotName] = useState('');
  const [selectedModel, setSelectedModel] = useState('gpt-4');
  
  const form = useForm<CrawlForm>({
    defaultValues: {
      url: '',
      crawlDepth: '2',
      requestTimeout: '10000',
      outputFormat: 'markdown',
      urlFilter: '',
      extractContent: true,
      followExternalLinks: false,
      stealthMode: false
    },
    mode: 'onChange'
  });

  useEffect(() => {
    // Log form state when it changes for debugging
    const subscription = form.watch((value) => {
      console.log("Web crawler form state:", value);
    });
    
    return () => subscription.unsubscribe();
  }, [form]);

  const handleStartCrawling = () => {
    console.log("Starting crawling with URL:", form.getValues().url);
    
    if (!form.getValues().url) {
      console.log("URL is empty, cannot start crawling");
      return;
    }
    
    setIsCrawling(true);
    setProgress(0);
    setCrawledUrls([]);
    
    // Simulate crawling with incremental progress updates
    const timer = setInterval(() => {
      setProgress(prev => {
        // Generate and add a new crawled URL
        if (prev % 10 === 0 && prev > 0 && prev < 100) {
          const newUrl = `https://example.com/page-${Math.floor(Math.random() * 100)}`;
          setCrawledUrls(urls => [
            ...urls, 
            {
              url: newUrl,
              status: 'completed',
              contentPreview: `Content extracted from ${newUrl}. This is sample text that would be extracted from the webpage...`
            }
          ]);
        }
        
        const newProgress = prev + 2;
        if (newProgress >= 100) {
          clearInterval(timer);
          setIsCrawling(false);
          return 100;
        }
        return newProgress;
      });
    }, 300);
  };

  const handleNextStep = () => {
    if (step === 'crawler') {
      if (skipSetup) {
        // If coming from knowledge base, we'll show a dialog to save knowledge base after crawling
        // This would be implemented in a real application
        console.log('Save as knowledge base after crawling');
      } else {
        setStep('setup');
      }
    } else if (step === 'setup') {
      setStep('preview');
    }
  };

  return (
    <div className={`w-full p-4 sm:p-6 bg-urban-dark min-h-screen ${!isMobile ? 'ml-0 md:ml-64' : ''}`}>
      <Tabs value={step} className="w-full max-w-full">
        <StepNavigation 
          step={step} 
          isCrawling={isCrawling} 
          progress={progress} 
        />
        
        <TabsContent value="crawler" className="mt-0 max-w-full w-full">
          <CrawlerConfigStep 
            form={form}
            isCrawling={isCrawling}
            progress={progress}
            crawledUrls={crawledUrls}
            handleStartCrawling={handleStartCrawling}
            handleNextStep={handleNextStep}
            isForKnowledgeBase={skipSetup}
          />
        </TabsContent>
        
        <TabsContent value="setup" className="mt-0 max-w-full w-full">
          <ChatbotSetupStep 
            form={form}
            chatbotName={chatbotName}
            setChatbotName={setChatbotName}
            selectedModel={selectedModel}
            setSelectedModel={setSelectedModel}
            crawledUrls={crawledUrls}
            handleNextStep={handleNextStep}
          />
        </TabsContent>
        
        <TabsContent value="preview" className="mt-0 max-w-full w-full">
          <ChatbotPreviewStep 
            form={form}
            chatbotName={chatbotName}
            selectedModel={selectedModel}
            crawledUrls={crawledUrls}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WebCrawlerContent;
