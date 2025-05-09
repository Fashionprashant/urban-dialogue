
import React from 'react';
import { Info, Users, MessageSquare, CreditCard } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

// Empty data for charts
const emptyMessageData = [
  { name: 'Jan', value: 0 },
  { name: 'Feb', value: 0 },
  { name: 'Mar', value: 0 },
  { name: 'Apr', value: 0 },
  { name: 'May', value: 0 },
  { name: 'Jun', value: 0 },
  { name: 'Jul', value: 0 },
];

const emptyPeakTimeData = [
  { name: '9 AM', value: 0 },
  { name: '10 AM', value: 0 },
  { name: '11 AM', value: 0 },
  { name: '12 PM', value: 0 },
  { name: '1 PM', value: 0 },
  { name: '2 PM', value: 0 },
  { name: '3 PM', value: 0 },
];

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  infoTooltip?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, infoTooltip }) => {
  return (
    <Card className="bg-urban-dark-3 border-none">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
          {title}
          {infoTooltip && (
            <Button variant="ghost" size="icon" className="ml-1 h-4 w-4">
              <Info className="h-3 w-3" />
            </Button>
          )}
        </CardTitle>
        <div className="text-urban-purple">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
};

const DashboardContent: React.FC = () => {
  return (
    <div className="ml-0 md:ml-64 p-6 bg-urban-dark min-h-screen">
      <div>
        <h1 className="text-2xl font-bold mb-1">AI Chatbot Dashboard</h1>
        <p className="text-muted-foreground mb-6">View and manage your chatbot analytics and performance</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard 
            title="Total Chats" 
            value="0" 
            icon={<MessageSquare className="h-4 w-4" />} 
            infoTooltip="Total number of chat conversations initiated with your AI chatbot" 
          />
          <StatCard 
            title="Total Leads" 
            value="0" 
            icon={<Users className="h-4 w-4" />} 
            infoTooltip="Number of unique visitors who provided contact information" 
          />
          <StatCard 
            title="Tokens Used" 
            value="0" 
            icon={<MessageSquare className="h-4 w-4" />} 
            infoTooltip="Total AI tokens consumed by your chatbot instances" 
          />
          <StatCard 
            title="Remaining Tokens" 
            value="0" 
            icon={<CreditCard className="h-4 w-4" />} 
            infoTooltip="Available tokens in your current plan" 
          />
        </div>
        
        <Card className="mb-8 bg-urban-dark-3 border-none">
          <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <CardTitle className="text-lg font-medium">Message Activity</CardTitle>
              <Button variant="ghost" size="icon" className="ml-1 h-5 w-5">
                <Info className="h-4 w-4" />
              </Button>
            </div>
            
            <Tabs defaultValue="messages" className="w-full sm:w-auto">
              <TabsList className="bg-urban-dark-2 w-full sm:w-auto">
                <TabsTrigger value="messages" className="flex-1 sm:flex-initial">Messages</TabsTrigger>
                <TabsTrigger value="tokens" className="flex-1 sm:flex-initial">Tokens</TabsTrigger>
                <TabsTrigger value="sessions" className="flex-1 sm:flex-initial">Sessions</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={emptyMessageData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorPurple" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6b46c1" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#6b46c1" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#888' }}  
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#888' }}
                    domain={[0, 10]}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1e1e1e', 
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '6px'
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#6b46c1" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorPurple)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-urban-dark-3 border-none">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center">
                <CardTitle className="text-lg font-medium">Peak Message Times</CardTitle>
                <Button variant="ghost" size="icon" className="ml-1 h-5 w-5">
                  <Info className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="h-60">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={emptyPeakTimeData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false}
                      tick={{ fill: '#888' }}  
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#888' }}
                      domain={[0, 10]}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1e1e1e', 
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '6px'
                      }} 
                    />
                    <Bar 
                      dataKey="value" 
                      fill="#00b3b3" 
                      radius={[4, 4, 0, 0]} 
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-urban-dark-3 border-none">
            <CardHeader>
              <CardTitle className="text-lg font-medium">Unique Visitors</CardTitle>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <div className="text-sm text-muted-foreground">Last 7 days</div>
                  <div className="font-medium">0</div>
                </div>
                
                <div className="flex justify-between">
                  <div className="text-sm text-muted-foreground">Last 30 days</div>
                  <div className="font-medium">0</div>
                </div>
                
                <div className="flex justify-between items-center pt-4">
                  <div className="text-sm text-muted-foreground">Growth</div>
                  <div className="font-medium text-green-500">0%</div>
                </div>
                
                <Button className="w-full bg-urban-teal hover:bg-urban-teal/90">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
