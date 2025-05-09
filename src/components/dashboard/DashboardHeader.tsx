
import React, { useState } from 'react';
import { Bell, FileText, Laptop, ChevronDown, User, LogOut, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuItem 
} from '@/components/ui/dropdown-menu';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

interface DashboardHeaderProps {
  username: string;
  planExpiry: string;
  planType: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ username, planExpiry, planType }) => {
  const { isMobile } = useIsMobile();
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <header className="bg-urban-dark border-b border-white/10 p-4 flex justify-between items-center fixed top-0 w-full z-50">
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold">
          <span className="text-gradient-primary">Urban</span>
          <span className="text-white">Chat.AI</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="hidden md:block text-sm text-gray-400">
          {planType} · Expires: {planExpiry}
        </div>
        
        <Sheet open={notificationsOpen} onOpenChange={setNotificationsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center bg-urban-purple text-white">1</Badge>
            </Button>
          </SheetTrigger>
          <SheetContent side={isMobile ? "bottom" : "right"} className="bg-urban-dark-2 border-white/10 w-full sm:max-w-md">
            <SheetHeader>
              <SheetTitle className="text-white">Notifications</SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex flex-col gap-4">
              <div className="bg-urban-dark-3 p-4 rounded-md border border-white/10">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-white">Welcome to UrbanChat.AI</h4>
                  <span className="text-xs text-gray-400">Just now</span>
                </div>
                <p className="text-sm text-gray-300 mt-2">
                  Get started by creating your first chatbot or AI voice agent!
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/lovable-uploads/9b335ece-c5a3-45d9-890f-d32b99b8042a.png" />
                <AvatarFallback>{username.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="hidden md:inline text-gray-300">
                {username}
              </span>
              <ChevronDown className="w-4 h-4 ml-1 text-gray-400" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-urban-dark-2 border border-white/10">
            <DropdownMenuLabel className="text-gray-300">My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-white/10" />
            <DropdownMenuItem className="text-gray-300 hover:bg-urban-dark-3 focus:bg-urban-dark-3 cursor-pointer">
              <User className="mr-2 h-4 w-4" /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-300 hover:bg-urban-dark-3 focus:bg-urban-dark-3 cursor-pointer">
              <Settings className="mr-2 h-4 w-4" /> Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-white/10" />
            <DropdownMenuItem className="text-red-500 hover:bg-urban-dark-3 focus:bg-urban-dark-3 cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default DashboardHeader;
