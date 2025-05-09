
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AuthModal } from '@/components/ui/auth-modal';
import { Link } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface HeaderProps {
  transparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({ transparent = false }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState<'signin' | 'signup'>('signin');

  const openSignIn = () => {
    setAuthType('signin');
    setIsAuthModalOpen(true);
  };

  const openSignUp = () => {
    setAuthType('signup');
    setIsAuthModalOpen(true);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${transparent ? 'bg-transparent' : 'glass-morphism border-b border-white/10'}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold">
            <span className="text-gradient-primary">Urban</span>
            <span className="text-white">Chat.AI</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-gray-300 hover:text-white flex items-center gap-1">
                Solutions <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="glass-morphism bg-urban-dark-2/95 border-white/10 w-48">
              <DropdownMenuItem className="hover:bg-white/10">
                <Link to="/solutions" className="w-full">All Solutions</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10">
                <Link to="/customer-support" className="w-full">Customer Support</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10">
                <Link to="/enterprise" className="w-full">Enterprise</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10">
                <Link to="/e-commerce" className="w-full">E-Commerce</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10">
                <Link to="/healthcare" className="w-full">Healthcare</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10">
                <Link to="/education" className="w-full">Education</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-gray-300 hover:text-white flex items-center gap-1">
                Company <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="glass-morphism bg-urban-dark-2/95 border-white/10 w-48">
              <DropdownMenuItem className="hover:bg-white/10">
                <Link to="/about" className="w-full">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10">
                <Link to="/blog" className="w-full">Blog</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10">
                <Link to="/careers" className="w-full">Careers</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10">
                <Link to="/contact" className="w-full">Contact</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-white/10">
                <Link to="/partners" className="w-full">Partners</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors px-3 py-2">
            Pricing
          </Link>

          <div className="flex items-center space-x-2 ml-4">
            <Button 
              variant="ghost" 
              className="text-gray-300 hover:text-white"
              onClick={openSignIn}
            >
              Sign In
            </Button>
            <Button 
              className="bg-green-500 hover:bg-green-600 text-white"
              onClick={openSignUp}
            >
              Sign Up Free
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-300">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="glass-morphism bg-urban-dark-2/95 border-white/10">
              <div className="flex flex-col space-y-1 pt-10">
                <div className="border-b border-white/10 pb-2 mb-2">
                  <div className="px-1 pb-1 text-sm font-medium text-gray-400">Solutions</div>
                  <Link to="/solutions" className="block text-gray-300 hover:text-white hover:bg-white/5 transition-colors py-2 px-3 rounded-md">
                    All Solutions
                  </Link>
                  <Link to="/customer-support" className="block text-gray-300 hover:text-white hover:bg-white/5 transition-colors py-2 px-3 rounded-md">
                    Customer Support
                  </Link>
                  <Link to="/enterprise" className="block text-gray-300 hover:text-white hover:bg-white/5 transition-colors py-2 px-3 rounded-md">
                    Enterprise
                  </Link>
                  <Link to="/e-commerce" className="block text-gray-300 hover:text-white hover:bg-white/5 transition-colors py-2 px-3 rounded-md">
                    E-Commerce
                  </Link>
                  <Link to="/healthcare" className="block text-gray-300 hover:text-white hover:bg-white/5 transition-colors py-2 px-3 rounded-md">
                    Healthcare
                  </Link>
                  <Link to="/education" className="block text-gray-300 hover:text-white hover:bg-white/5 transition-colors py-2 px-3 rounded-md">
                    Education
                  </Link>
                </div>
                
                <div className="border-b border-white/10 pb-2 mb-2">
                  <div className="px-1 pb-1 text-sm font-medium text-gray-400">Company</div>
                  <Link to="/about" className="block text-gray-300 hover:text-white hover:bg-white/5 transition-colors py-2 px-3 rounded-md">
                    About
                  </Link>
                  <Link to="/blog" className="block text-gray-300 hover:text-white hover:bg-white/5 transition-colors py-2 px-3 rounded-md">
                    Blog
                  </Link>
                  <Link to="/careers" className="block text-gray-300 hover:text-white hover:bg-white/5 transition-colors py-2 px-3 rounded-md">
                    Careers
                  </Link>
                  <Link to="/contact" className="block text-gray-300 hover:text-white hover:bg-white/5 transition-colors py-2 px-3 rounded-md">
                    Contact
                  </Link>
                  <Link to="/partners" className="block text-gray-300 hover:text-white hover:bg-white/5 transition-colors py-2 px-3 rounded-md">
                    Partners
                  </Link>
                </div>
                
                <Link to="/pricing" className="block text-gray-300 hover:text-white hover:bg-white/5 transition-colors py-2 px-3 rounded-md">
                  Pricing
                </Link>
                
                <div className="pt-4 flex flex-col gap-2">
                  <Button 
                    variant="outline" 
                    className="border-white/10 hover:bg-white/5 w-full justify-start"
                    onClick={openSignIn}
                  >
                    Sign In
                  </Button>
                  <Button 
                    className="bg-green-500 hover:bg-green-600 text-white w-full"
                    onClick={openSignUp}
                  >
                    Sign Up Free
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        defaultTab={authType}
      />
    </header>
  );
};

export default Header;
