
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Briefcase, Code, BarChart2, Globe, Database, Cloud, BrainCircuit, Monitor, PieChart, Pencil } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "AI: Transformative Learning Internship",
      company: "TechSaksham (Microsoft & SAP)",
      period: "Jan 2025 – Feb 2025",
      description: [
        "Image generation using Stable Diffusion & Comfy UI",
        "AI concepts, prompt engineering, and real-time generative inference",
        "Developed applications leveraging generative AI technologies"
      ],
      technologies: ["AI", "Stable Diffusion", "Prompt Engineering"],
      icon: BrainCircuit
    },
    {
      title: "Salesforce Developer Intern",
      company: "Smart Bridge (Virtual)",
      period: "Jul 2024 – Aug 2024",
      description: [
        "Salesforce development, customization and automation",
        "UI development using Lightning components",
        "Integration of Salesforce with external systems"
      ],
      technologies: ["Salesforce", "Lightning Components", "Apex", "SOQL"],
      icon: Cloud
    },
    {
      title: "Industrial Training",
      company: "NSIC Technical Services Centre",
      period: "Aug 2021 – Feb 2022",
      description: [
        "Hands-on work with Python programming language",
        "Android application development",
        "Java programming and Data Science foundations",
        "Practical implementations of theoretical concepts"
      ],
      technologies: ["Python", "Android", "Java", "Data Science"],
      icon: Code
    }
  ];

  return (
    <section id="experience" className="py-20 bg-charcoal relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-navy to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="highlight-gradient">Experience</span> & Training
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-blue"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 border-navy bg-neon-blue"></div>
                
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  {/* Date */}
                  <div className="md:w-1/2 mb-6 md:mb-0 text-center">
                    <div className="inline-flex items-center gap-2 py-2 px-6 bg-neon-blue/20 text-neon-blue font-semibold rounded-full">
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-1/2 md:pl-10 md:pr-10">
                    <Card className="glass-card overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                            <Briefcase size={20} className="text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                            <p className="text-neon-blue">{exp.company}</p>
                          </div>
                        </div>
                        
                        <ul className="space-y-2 mb-4 mt-4">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              <span className="text-gray-300">{item}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span key={i} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Services Section */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-white text-center mb-12">Services I Offer</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Web Development", icon: Globe },
              { name: "UI & UX Design", icon: Pencil },
              { name: "Backend Development", icon: Database },
              { name: "Application Development", icon: Code },
              { name: "Frontend Development", icon: Monitor },
              { name: "Data Analysis and Automation Scripts", icon: BarChart2 },
              { name: "Sentiment Analysis Tools", icon: PieChart }
            ].map((service, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-xl border border-neon-blue/20 hover:border-neon-blue transition-all duration-300"
              >
                <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                  {React.createElement(service.icon, { size: 20, className: "text-white" })}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                <div className="w-12 h-1 bg-neon-blue rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-navy to-transparent"></div>
    </section>
  );
};

export default ExperienceSection;
