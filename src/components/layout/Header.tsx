
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-3xl font-bold text-dentrix-blue">Dentrix<span className="text-dentrix-teal">Pay</span></span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-10">
          <nav className="hidden lg:flex space-x-8">
            <a href="#features" className="text-dentrix-gray hover:text-dentrix-teal transition-colors font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-dentrix-gray hover:text-dentrix-teal transition-colors font-medium">
              How It Works
            </a>
            <a href="#testimonials" className="text-dentrix-gray hover:text-dentrix-teal transition-colors font-medium">
              Testimonials
            </a>
            <a href="#contact" className="text-dentrix-gray hover:text-dentrix-teal transition-colors font-medium">
              Contact
            </a>
          </nav>
          <Button className="bg-dentrix-teal hover:bg-dentrix-blue text-white font-medium">Request a Demo</Button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="p-2 focus:outline-none">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white py-4 px-4 absolute w-full shadow-md">
          <nav className="flex flex-col space-y-4">
            <a href="#features" className="text-dentrix-gray hover:text-dentrix-teal transition-colors font-medium" onClick={toggleMenu}>
              Features
            </a>
            <a href="#how-it-works" className="text-dentrix-gray hover:text-dentrix-teal transition-colors font-medium" onClick={toggleMenu}>
              How It Works
            </a>
            <a href="#testimonials" className="text-dentrix-gray hover:text-dentrix-teal transition-colors font-medium" onClick={toggleMenu}>
              Testimonials
            </a>
            <a href="#contact" className="text-dentrix-gray hover:text-dentrix-teal transition-colors font-medium" onClick={toggleMenu}>
              Contact
            </a>
            <Button className="bg-dentrix-teal hover:bg-dentrix-blue text-white font-medium">Request a Demo</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
