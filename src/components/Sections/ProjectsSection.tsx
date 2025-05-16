
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { GithubIcon, Code, Database, BarChart2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "GrowTube",
      description: "A collaborative YouTube monetization platform connecting content creators with investors for mutual growth and revenue sharing.",
      image: "/lovable-uploads/9a867ca2-2b8e-429e-aff8-7f1b652b7bb2.png",
      techStack: ["Python", "Flask", "SQLite", "HTML/CSS", "JavaScript"],
      githubLink: "https://github.com/Charan0k/GrowTube",
      icon: Code
    },
    {
      title: "YouTube Sentiment Analysis",
      description: "An NLP-driven analysis tool that evaluates audience sentiment from YouTube comments to enhance content strategy.",
      image: "/lovable-uploads/dcb5f81c-dac0-493f-8b71-bd42a830a6a5.png",
      techStack: ["Python", "NLP", "Pandas", "Matplotlib", "Youtube API"],
      githubLink: "https://github.com/Charan0k/Sentiment_Analysis",
      icon: BarChart2
    },
    {
      title: "Blockchain Access Framework",
      description: "Secure cloud access solution using blockchain technology to manage and authenticate user permissions with immutable records.",
      image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1632&auto=format&fit=crop",
      techStack: ["Python", "Django", "Blockchain", "Web3", "AWS"],
      githubLink: "https://github.com/Charan0k",
      icon: Database
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">My <span className="highlight-gradient">Projects</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glass-card overflow-hidden border-white/10 hover:border-neon-blue/50 transition-all duration-300 h-full flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-navy opacity-50"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center">
                  {React.createElement(project.icon, { size: 18, className: "text-white" })}
                </div>
              </div>
              
              <CardHeader className="px-6 pt-6 pb-0">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </CardHeader>
              
              <CardContent className="px-6 py-4 flex-grow">
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="px-6 pt-0 pb-6">
                <Button variant="outline" size="sm" className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 w-full">
                  <GithubIcon size={16} className="mr-2" />
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
