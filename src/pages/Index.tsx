import React, { useEffect } from 'react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import HeroSection from '@/components/Sections/HeroSection';
import AboutSection from '@/components/Sections/AboutSection';
import SkillsSection from '@/components/Sections/SkillsSection';
import ProjectsSection from '@/components/Sections/ProjectsSection';
import ExperienceSection from '@/components/Sections/ExperienceSection';
import ContactSection from '@/components/Sections/ContactSection';
import { ArrowUp } from 'lucide-react';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  // Function to handle scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            // Use setAttribute instead of directly setting style.opacity
            entry.target.setAttribute('style', 'opacity: 1');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const animationElements = document.querySelectorAll('.animate-on-scroll');
    animationElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      animationElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen antialiased overflow-x-hidden bg-[#0a0d16]">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      
      <Footer />
      
      {/* Scroll to top button */}
      <ScrollToTopButton />
      
      {/* Toast notifications */}
      <Toaster />
    </div>
  );
};

// Scroll to Top Button Component
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top coordinate to scroll to
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 z-50 p-3 rounded-full bg-gradient-to-r from-[#8A63FF] to-[#3E92CC] text-white shadow-lg transition-all duration-300 transform hover:scale-110 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default Index;
