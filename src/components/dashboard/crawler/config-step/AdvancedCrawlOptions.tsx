
import React from 'react';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { UseFormReturn } from 'react-hook-form';
import { CrawlForm } from '../types';
import { FormField, FormItem, FormControl } from '@/components/ui/form';

interface AdvancedCrawlOptionsProps {
  form: UseFormReturn<CrawlForm>;
}

const AdvancedCrawlOptions: React.FC<AdvancedCrawlOptionsProps> = ({ form }) => {
  console.log('Advanced options form values:', form.getValues());
  
  return (
    <div>
      <h3 className="text-sm font-medium mb-2">Advanced Options</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-urban-dark-2 p-3 rounded-md">
        <FormField
          control={form.control}
          name="extractContent"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center space-x-2 space-y-0">
              <FormControl>
                <Checkbox
                  id="extractContent"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <Label htmlFor="extractContent" className="cursor-pointer">
                Extract Content
              </Label>
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="followExternalLinks"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center space-x-2 space-y-0">
              <FormControl>
                <Checkbox
                  id="followExternalLinks"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <Label htmlFor="followExternalLinks" className="cursor-pointer">
                Follow External Links
              </Label>
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="stealthMode"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center space-x-2 space-y-0">
              <FormControl>
                <Checkbox
                  id="stealthMode"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <Label htmlFor="stealthMode" className="cursor-pointer">
                Stealth Mode
              </Label>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default AdvancedCrawlOptions;
