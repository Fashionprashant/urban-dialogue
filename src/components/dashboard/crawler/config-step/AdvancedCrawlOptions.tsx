
import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { UseFormReturn } from 'react-hook-form';
import { CrawlForm } from '../types';

interface AdvancedCrawlOptionsProps {
  form: UseFormReturn<CrawlForm>;
}

const AdvancedCrawlOptions: React.FC<AdvancedCrawlOptionsProps> = ({ form }) => {
  return (
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
  );
};

export default AdvancedCrawlOptions;
