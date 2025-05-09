
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ChatDetailViewProps {
  selectedChatDetails: any;
  onBack: () => void;
  formatDate: (dateString: string) => string;
  getSentimentColor: (score: number) => string;
}

const ChatDetailView: React.FC<ChatDetailViewProps> = ({
  selectedChatDetails,
  onBack,
  formatDate,
  getSentimentColor
}) => {
  if (!selectedChatDetails) return null;

  return (
    <div className="p-6 bg-urban-dark-2 h-screen overflow-y-auto">
      <div className="mb-6 flex items-center">
        <Button 
          variant="ghost" 
          size="icon" 
          className="mr-2"
          onClick={onBack}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h2 className="text-xl font-semibold">{selectedChatDetails.botName}</h2>
          <p className="text-sm text-gray-400">{selectedChatDetails.serialNumber} • {formatDate(selectedChatDetails.timestamp)}</p>
        </div>
      </div>
      
      {/* Call details section */}
      <Card className="mb-6 bg-urban-dark-3 border-none">
        <CardHeader>
          <CardTitle className="text-lg">Call Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg mb-1">Web Call</h3>
              <p className="text-sm text-gray-400">ID: {selectedChatDetails.serialNumber}</p>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-400">Sentiment:</span>
              <Badge className={`${getSentimentColor(selectedChatDetails.sentimentScore)} text-black`}>
                Neutral
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Call recording section */}
      <Card className="mb-6 bg-urban-dark-3 border-none">
        <CardHeader>
          <CardTitle className="text-lg">Call Recording</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <Button variant="outline" size="sm">
              Play
            </Button>
            <Button variant="outline" size="sm">
              Download
            </Button>
          </div>
          <p className="text-sm text-gray-400">No recording available for this call.</p>
        </CardContent>
      </Card>
      
      {/* Call information section */}
      <Card className="bg-urban-dark-3 border-none">
        <CardHeader>
          <CardTitle className="text-lg">Call Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-400 text-sm">Date & Time</p>
              <p>{formatDate(selectedChatDetails.timestamp)}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Duration</p>
              <p>1:11</p>
            </div>
          </div>
          
          <div className="flex justify-between">
            <div>
              <p className="text-gray-400 text-sm">From</p>
              <p>N/A</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">To</p>
              <p>N/A</p>
            </div>
          </div>
          
          <div className="flex justify-between">
            <div>
              <p className="text-gray-400 text-sm">Agent ID</p>
              <p className="font-mono text-xs">{selectedChatDetails.serialNumber}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Agent Name</p>
              <p>{selectedChatDetails.botName.split(' ')[0]}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatDetailView;
