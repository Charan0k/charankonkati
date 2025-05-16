
import React from 'react';
import { GithubIcon, Linkedin, Mail, PhoneCall } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Charan Konkati</h3>
            <p className="text-gray-400 mb-4">
              Computer Science Graduate Student and Software Developer 
              specializing in full-stack applications and data-driven platforms.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Charan0k" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors">
                <GithubIcon size={20} />
              </a>
              <a href="https://www.linkedin.com/in/charan-konkati-98910a25a/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:charank0515@gmail.com" className="text-gray-400 hover:text-neon-blue transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+919493405383" className="text-gray-400 hover:text-neon-blue transition-colors">
                <PhoneCall size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-neon-blue transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-neon-blue transition-colors">About</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-neon-blue transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-neon-blue transition-colors">Projects</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-neon-blue transition-colors">Experience</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="text-neon-blue">Email:</span> charank0515@gmail.com
              </li>
              <li className="text-gray-400">
                <span className="text-neon-blue">Phone:</span> +91 9493405383
              </li>
              <li className="text-gray-400">
                <span className="text-neon-blue">Location:</span> Hyderabad, Telangana, India
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Charan Konkati. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
