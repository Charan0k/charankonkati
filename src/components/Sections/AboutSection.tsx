
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { School, Calendar, Award } from 'lucide-react';

const AboutSection = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Vidya Jyothi Institute of Technology",
      period: "2022–2025",
      grade: "CGPA: 7.97",
      icon: School,
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Mahaveer Institute of Science and Technology",
      period: "2019–2022",
      grade: "CGPA: 7.91",
      icon: School,
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Removed the transparent overlay div that was here */}
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">About <span className="highlight-gradient">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              Computer Science Graduate Student & Software Developer
            </h3>
            
            <p className="text-gray-300">
              I am a dedicated Computer Science student with a passion for developing innovative solutions
              using cutting-edge technologies. My academic journey has equipped me with strong fundamentals
              in programming, data structures, algorithms, and various software development frameworks.
            </p>
            
            <p className="text-gray-300">
              I am particularly interested in cybersecurity, blockchain technology, and artificial intelligence.
              My goal is to use my technical skills to create impactful applications that solve real-world problems.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="text-neon-blue font-semibold">Problem Solving</span>
                <span className="text-gray-400">Analytical approach to technical challenges</span>
              </div>
              <div className="flex flex-col">
                <span className="text-neon-blue font-semibold">Communication</span>
                <span className="text-gray-400">Clear and effective collaborator</span>
              </div>
              <div className="flex flex-col">
                <span className="text-neon-blue font-semibold">Planning</span>
                <span className="text-gray-400">Strategic project management</span>
              </div>
              <div className="flex flex-col">
                <span className="text-neon-blue font-semibold">Detail Orientation</span>
                <span className="text-gray-400">Meticulous in development work</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Education</h3>
            
            <div className="space-y-6">
              {education.map((item, index) => (
                <Card key={index} className="glass-card overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 bg-gradient-to-br from-neon-blue to-neon-purple p-3 rounded-lg">
                        <item.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">{item.degree}</h4>
                        <p className="text-gray-300">{item.institution}</p>
                        <div className="flex items-center mt-2 text-sm text-gray-400">
                          <Calendar size={14} className="mr-2" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center mt-1 text-sm text-neon-blue">
                          <Award size={14} className="mr-2" />
                          <span>{item.grade}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
