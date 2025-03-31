
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-urban-darker/80 backdrop-blur-lg border-b border-white/5">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold gradient-text">UrbanChat.ai</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="#voice-agents" className="text-urban-text-light hover:text-urban-green transition-colors">
            Voice Agents
          </Link>
          <Link to="#chatbots" className="text-urban-text-light hover:text-urban-green transition-colors">
            Chatbots
          </Link>
          <Link to="#pricing" className="text-urban-text-light hover:text-urban-green transition-colors">
            Pricing
          </Link>
          <Link to="#about" className="text-urban-text-light hover:text-urban-green transition-colors">
            About
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-urban-green text-urban-green hover:bg-urban-green hover:text-black">
            Login
          </Button>
          <Button className="bg-urban-green text-black hover:bg-urban-green-dark hover-shadow">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-urban-darker border-t border-white/5 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link 
              to="#voice-agents" 
              className="text-urban-text-light hover:text-urban-green transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Voice Agents
            </Link>
            <Link 
              to="#chatbots" 
              className="text-urban-text-light hover:text-urban-green transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Chatbots
            </Link>
            <Link 
              to="#pricing" 
              className="text-urban-text-light hover:text-urban-green transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="#about" 
              className="text-urban-text-light hover:text-urban-green transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="border-urban-green text-urban-green hover:bg-urban-green hover:text-black w-full">
                Login
              </Button>
              <Button className="bg-urban-green text-black hover:bg-urban-green-dark w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
