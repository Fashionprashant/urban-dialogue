
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AuthModal } from '@/components/ui/auth-modal';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

interface HeaderProps {
  transparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({ transparent = false }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState<'signin' | 'signup'>('signin');
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const openSignIn = () => {
    setAuthType('signin');
    setIsAuthModalOpen(true);
  };

  const openSignUp = () => {
    setAuthType('signup');
    setIsAuthModalOpen(true);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${transparent ? 'bg-transparent' : 'bg-black/30 backdrop-blur-sm border-b border-white/10'}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold">
            <span className="text-gradient-primary">Urban</span>
            <span className="text-white">Chat.AI</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
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
