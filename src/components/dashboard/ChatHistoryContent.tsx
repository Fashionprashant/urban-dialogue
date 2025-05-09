
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import ChatHistoryFilter from './chat-history/ChatHistoryFilter';
import ChatHistoryTable from './chat-history/ChatHistoryTable';
import ChatDetailView from './chat-history/ChatDetailView';
import { ChatHistoryItem } from './chat-history/types';

// Empty initial state
const emptyChatLogs: ChatHistoryItem[] = [];

const getSentimentColor = (score: number): string => {
  if (score >= 0.7) return 'bg-green-500';
  if (score >= 0.4) return 'bg-yellow-500';
  return 'bg-red-500';
};

interface ChatHistoryContentProps {
  selectedChat: string | null;
  onSelectChat: (chatId: string | null) => void;
}

const ChatHistoryContent: React.FC<ChatHistoryContentProps> = ({ selectedChat, onSelectChat }) => {
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [chatLogs, setChatLogs] = useState<ChatHistoryItem[]>(emptyChatLogs);
  const [selectedChatDetails, setSelectedChatDetails] = useState<ChatHistoryItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { isMobile } = useIsMobile();

  useEffect(() => {
    if (selectedChat) {
      const chatDetails = chatLogs.find(chat => chat.id === selectedChat) || null;
      setSelectedChatDetails(chatDetails);
    } else {
      setSelectedChatDetails(null);
    }
  }, [selectedChat, chatLogs]);

  useEffect(() => {
    // Filter chat logs based on search query
    let filteredLogs = [...emptyChatLogs];
    
    if (searchQuery && filteredLogs.length > 0) {
      filteredLogs = filteredLogs.filter(chat => 
        chat.botName.toLowerCase().includes(searchQuery.toLowerCase()) || 
        chat.serialNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Sort chat logs based on sort order
    filteredLogs.sort((a, b) => {
      const dateA = new Date(a.timestamp).getTime();
      const dateB = new Date(b.timestamp).getTime();
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });
    
    setChatLogs(filteredLogs);
  }, [sortOrder, searchQuery]);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Mobile view handling
  if (isMobile && selectedChat && selectedChatDetails) {
    return (
      <div className="ml-0 md:ml-64 bg-urban-dark min-h-screen">
        <ChatDetailView 
          selectedChatDetails={selectedChatDetails}
          onBack={() => onSelectChat(null)}
          formatDate={formatDate}
          getSentimentColor={getSentimentColor}
        />
      </div>
    );
  }

  return (
    <div className={`ml-0 md:ml-64 bg-urban-dark min-h-screen ${selectedChat && !isMobile ? 'flex' : 'block'}`}>
      <div className={`${selectedChat && !isMobile ? 'w-full md:w-1/2 border-r border-white/10' : 'w-full'} p-6`}>
        <div>
          <h1 className="text-2xl font-bold mb-1">Chat History</h1>
          <p className="text-muted-foreground mb-6">View and analyze your chat conversations</p>
          
          <ChatHistoryFilter 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />
          
          <ChatHistoryTable 
            chatLogs={chatLogs}
            onSelectChat={onSelectChat}
            formatDate={formatDate}
            getSentimentColor={getSentimentColor}
          />

          {chatLogs.length > 0 && (
            <div className="mt-4 text-center text-sm text-gray-400">
              Showing {chatLogs.length} of {emptyChatLogs.length} results
            </div>
          )}
        </div>
      </div>
      
      {selectedChat && selectedChatDetails && !isMobile && (
        <div className="hidden md:block w-1/2">
          <ChatDetailView 
            selectedChatDetails={selectedChatDetails}
            onBack={() => onSelectChat(null)}
            formatDate={formatDate}
            getSentimentColor={getSentimentColor}
          />
        </div>
      )}
    </div>
  );
};

export default ChatHistoryContent;
