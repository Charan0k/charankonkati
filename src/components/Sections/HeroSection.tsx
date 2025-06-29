
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden pt-20 bg-[#0a0d16]"
    >
      {/* Background gradient element */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image moved to left side */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8A63FF] via-[#3E92CC] to-[#8A63FF] animate-gradient-shift blur-md"></div>
              
              <img 
                src="Me.jpg" 
                alt="Charan Konkati" 
                className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-[#8A63FF]/30 relative z-10 animate-float"
              />
            </div>
          </div>
          
          {/* Content on right side */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h3 className="text-xl text-gray-300">Hello, I'm</h3>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-[#8A63FF]">Charan </span>
              <span className="text-[#3E92CC]">Konkati</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-200">
              CS Graduate Student & Software Developer
            </h2>
            
            <p className="text-lg text-gray-300">
              A passionate CS graduate student with strong skills in Python, Java, MySQL, and more. 
              I specialize in developing full-stack applications and data-driven platforms, with a keen interest in cybersecurity, blockchain, and AI.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button className="bg-gradient-to-r from-[#8A63FF] to-[#3E92CC] hover:opacity-80 transition-all transform hover:scale-105 py-6 px-8">
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" className="border-[#8A63FF] text-[#8A63FF] hover:bg-[#8A63FF]/10 py-6 px-8 transition-all transform hover:scale-105">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-6 justify-center lg:justify-start pt-4">
              <a href="https://github.com/Charan0k" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#8A63FF] transition-colors transform hover:scale-110">
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/charan-konkati-98910a25a/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#8A63FF] transition-colors transform hover:scale-110">
                <Linkedin size={28} />
              </a>
              <a href="mailto:charank0515@gmail.com" className="text-gray-300 hover:text-[#8A63FF] transition-colors transform hover:scale-110">
                <Mail size={28} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-gray-300 hover:text-[#8A63FF] transition-colors">
            <ArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
