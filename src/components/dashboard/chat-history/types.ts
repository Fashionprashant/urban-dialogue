
export interface ChatMessage {
  isBot: boolean;
  message: string;
  timestamp: string;
}

export interface ChatHistoryItem {
  id: string;
  botName: string;
  timestamp: string;
  lastMessage: string;
  sentimentScore: number;
  serialNumber: string;
  conversation: ChatMessage[];
}
