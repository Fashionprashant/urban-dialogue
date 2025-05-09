
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';

const LeadsContent: React.FC = () => {
  return (
    <div className="w-full ml-0 md:ml-64 p-6 bg-urban-dark min-h-screen">
      <div className="max-w-full">
        <h1 className="text-2xl font-bold mb-1">Leads Management</h1>
        <p className="text-muted-foreground mb-6">Collect and manage lead information from your chatbot interactions</p>
        
        <Card className="bg-urban-dark-3 border-none">
          <CardContent className="flex flex-col items-center justify-center p-12 text-center">
            <div className="rounded-full bg-urban-dark-2 p-8 mb-6">
              <Users 
                className="h-16 w-16 text-urban-teal"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-2">No Leads Yet</h2>
            <p className="text-gray-400 mb-6 max-w-md">
              Your chatbot hasn't collected any lead information yet. Once visitors interact with your chatbot
              and provide their contact information, it will appear here.
            </p>
            <Button className="bg-urban-teal hover:bg-urban-teal/90">
              Configure Lead Collection
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LeadsContent;
