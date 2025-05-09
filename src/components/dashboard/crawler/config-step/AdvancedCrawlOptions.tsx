
import React from 'react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
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
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="extractContent" 
            checked={form.getValues().extractContent}
            onCheckedChange={(checked) => {
              form.setValue('extractContent', checked === true);
            }}
          />
          <Label htmlFor="extractContent">Extract Content</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="followExternalLinks"
            checked={form.getValues().followExternalLinks}
            onCheckedChange={(checked) => {
              form.setValue('followExternalLinks', checked === true);
            }}
          />
          <Label htmlFor="followExternalLinks">Follow External Links</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="stealthMode"
            checked={form.getValues().stealthMode}
            onCheckedChange={(checked) => {
              form.setValue('stealthMode', checked === true);
            }}
          />
          <Label htmlFor="stealthMode">Stealth Mode</Label>
        </div>
      </div>
    </div>
  );
};

export default AdvancedCrawlOptions;
