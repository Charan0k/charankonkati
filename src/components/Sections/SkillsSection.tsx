
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Award, Terminal, Database, Globe, BrainCircuit, Shield, Layout } from 'lucide-react';

const SkillsSection = () => {
  const programmingSkills = [
    { name: "Python", level: "Expert", icon: Terminal, color: "#3E92CC" },
    { name: "Java", level: "Advanced", icon: Code, color: "#8A63FF" },
    { name: "MySQL", level: "Advanced", icon: Database, color: "#3E92CC" },
    { name: "HTML/CSS", level: "Proficient", icon: Layout, color: "#3E92CC" },
    { name: "JavaScript", level: "Proficient", icon: Globe, color: "#8A63FF" },
    { name: "Git", level: "Proficient", icon: Code, color: "#3E92CC" },
  ];

  const technologies = [
    "NLP", "AI", "AWS", "Flask", "Django"
  ];

  const certifications = [
    "Cisco (Cybersecurity)",
    "Oracle (Java, SQL)",
    "Qlik Sense",
    "Salesforce",
    "HackerRank (Python)",
    "Edunet (AI Transformative learning)"
  ];

  return (
    <section id="skills" className="py-20 bg-[#0c101e] relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-[#8A63FF] to-[#3E92CC] bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My technical toolkit that I've developed and refined through education, projects and
            professional work.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#8A63FF] to-[#3E92CC] mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Languages & Tools */}
          <div className="backdrop-blur-md bg-[#131629]/50 border border-[#8A63FF]/20 rounded-xl p-6 hover:border-[#8A63FF]/60 transition-all transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-white mb-4">Languages & Tools</h3>
            <p className="text-sm text-gray-400 mb-6">Skills I've mastered in this category</p>
            
            <div className="space-y-6">
              {programmingSkills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex items-center mb-2">
                    <div className={`w-10 h-10 rounded-lg bg-[${skill.color}]/10 flex items-center justify-center mr-4 group-hover:bg-[${skill.color}]/20 transition-colors`}>
                      <skill.icon className={`text-[${skill.color}]`} size={20} />
                    </div>
                    <span className="font-medium text-white">{skill.name}</span>
                    <div className="ml-auto">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        skill.level === "Expert" 
                          ? "bg-[#8A63FF]/20 text-[#8A63FF]" 
                          : skill.level === "Advanced"
                          ? "bg-[#3E92CC]/20 text-[#3E92CC]"
                          : "bg-[#4cc9f0]/20 text-[#4cc9f0]"
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  </div>
                  <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        skill.level === "Expert" 
                          ? "bg-gradient-to-r from-[#8A63FF] to-[#3E92CC] w-[95%]" 
                          : skill.level === "Advanced"
                          ? "bg-gradient-to-r from-[#8A63FF] to-[#3E92CC] w-[80%]" 
                          : "bg-gradient-to-r from-[#3E92CC] to-[#4cc9f0] w-[70%]"
                      }`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Technologies */}
          <div className="backdrop-blur-md bg-[#131629]/50 border border-[#8A63FF]/20 rounded-xl p-6 hover:border-[#8A63FF]/60 transition-all transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-white mb-4">Technologies</h3>
            <p className="text-sm text-gray-400 mb-6">Skills I've mastered in this category</p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-gradient-to-r from-[#8A63FF]/20 to-[#3E92CC]/20 border border-[#8A63FF]/30 rounded-full text-white text-sm font-medium hover:from-[#8A63FF]/30 hover:to-[#3E92CC]/30 transition-colors transform hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Areas of Interest</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center group">
                  <div className="w-2 h-2 bg-[#8A63FF] rounded-full mr-2 group-hover:w-3 transition-all"></div>
                  <Shield size={16} className="mr-2 text-[#8A63FF]" /> 
                  <span className="group-hover:text-[#8A63FF] transition-colors">Cybersecurity</span>
                </li>
                <li className="flex items-center group">
                  <div className="w-2 h-2 bg-[#3E92CC] rounded-full mr-2 group-hover:w-3 transition-all"></div>
                  <Layout size={16} className="mr-2 text-[#3E92CC]" /> 
                  <span className="group-hover:text-[#3E92CC] transition-colors">UI & UX Design</span>
                </li>
                <li className="flex items-center group">
                  <div className="w-2 h-2 bg-[#8A63FF] rounded-full mr-2 group-hover:w-3 transition-all"></div>
                  <BrainCircuit size={16} className="mr-2 text-[#8A63FF]" /> 
                  <span className="group-hover:text-[#8A63FF] transition-colors">Artificial Intelligence</span>
                </li>
                <li className="flex items-center group">
                  <div className="w-2 h-2 bg-[#3E92CC] rounded-full mr-2 group-hover:w-3 transition-all"></div>
                  <Globe size={16} className="mr-2 text-[#3E92CC]" /> 
                  <span className="group-hover:text-[#3E92CC] transition-colors">Web Development</span>
                </li>
                <li className="flex items-center group">
                  <div className="w-2 h-2 bg-[#8A63FF] rounded-full mr-2 group-hover:w-3 transition-all"></div>
                  <Database size={16} className="mr-2 text-[#8A63FF]" /> 
                  <span className="group-hover:text-[#8A63FF] transition-colors">Backend Development</span>
                </li>
                <li className="flex items-center group">
                  <div className="w-2 h-2 bg-[#3E92CC] rounded-full mr-2 group-hover:w-3 transition-all"></div>
                  <Code size={16} className="mr-2 text-[#3E92CC]" /> 
                  <span className="group-hover:text-[#3E92CC] transition-colors">Application Development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Certifications */}
        <div className="backdrop-blur-md bg-[#131629]/50 border border-[#8A63FF]/20 rounded-xl p-6 hover:border-[#8A63FF]/60 transition-all transform hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-white mb-4">Certifications</h3>
          <p className="text-sm text-gray-400 mb-6">Professional certifications I've earned</p>
          
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="flex items-center px-4 py-3 rounded-lg bg-[#131629] border border-[#8A63FF]/20 hover:border-[#8A63FF]/40 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#8A63FF] to-[#3E92CC] mr-3 flex items-center justify-center">
                  <Award size={16} className="text-white" />
                </div>
                <span className="text-white group-hover:text-[#8A63FF] transition-colors">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
