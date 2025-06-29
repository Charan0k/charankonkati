
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Skills", href: "#skills" },
    { text: "Projects", href: "#projects" },
    { text: "Experience", href: "#experience" },
    { text: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md bg-navy/80 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-white">
            <span className="text-neon-blue">Charan</span>Konkati
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="text-gray-200 hover:text-neon-blue transition-colors"
              >
                {link.text}
              </a>
            ))}
            <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90">
              <a href="https://drive.google.com/file/d/1KF4KCLpbhCGVZobTlLSQ61pcpQWg7dCl/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download Resume</a>
            </Button>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-charcoal-light rounded-lg animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="text-white hover:text-neon-blue transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </a>
              ))}
              <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 w-full">
                <a href="https://drive.google.com/file/d/1TQTV5j5du09DvTlvnh9BkhrfBN-FxEmv/view" target="_blank" rel="noopener noreferrer">Download Resume</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
