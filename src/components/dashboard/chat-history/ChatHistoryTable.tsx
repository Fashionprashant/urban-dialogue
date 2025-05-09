
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

interface ChatHistoryTableProps {
  chatLogs: any[];
  onSelectChat: (chatId: string) => void;
  formatDate: (dateString: string) => string;
  getSentimentColor: (score: number) => string;
}

const ChatHistoryTable: React.FC<ChatHistoryTableProps> = ({ 
  chatLogs, 
  onSelectChat, 
  formatDate,
  getSentimentColor
}) => {
  if (chatLogs.length === 0) {
    return (
      <div className="rounded-md overflow-hidden border border-white/10 p-8 text-center">
        <p className="text-muted-foreground">No chat history available yet.</p>
        <p className="text-sm text-muted-foreground mt-2">Chat interactions with your customers will appear here.</p>
      </div>
    );
  }
  
  return (
    <div className="rounded-md overflow-hidden border border-white/10">
      <Table>
        <TableHeader className="bg-urban-dark-2">
          <TableRow className="border-b border-white/10 hover:bg-transparent">
            <TableHead className="text-white">Date/Time</TableHead>
            <TableHead className="text-white">Call ID</TableHead>
            <TableHead className="text-white">Agent</TableHead>
            <TableHead className="text-white">Duration</TableHead>
            <TableHead className="text-white text-right">Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {chatLogs.map((chat) => (
            <TableRow 
              key={chat.id}
              className="border-b border-white/10 hover:bg-urban-dark-2 cursor-pointer"
              onClick={() => onSelectChat(chat.id)}
            >
              <TableCell className="font-medium">{formatDate(chat.timestamp)}</TableCell>
              <TableCell className="text-gray-400 font-mono text-xs">{chat.serialNumber}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${getSentimentColor(chat.sentimentScore)}`}></div>
                  {chat.botName}
                </div>
              </TableCell>
              <TableCell>05:32</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  Details <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ChatHistoryTable;
