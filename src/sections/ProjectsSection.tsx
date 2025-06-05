import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { ExternalLink, Github } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { projectsData } from '../data';

const defaultTiltOptions = {
  max: 25,
  scale: 1.05,
  speed: 1000,
  glare: true,
  "max-glare": 0.5,
};

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  
  const filteredProjects = filter === 'All' 
    ? projectsData
    : projectsData.filter(project => project.type === filter);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Featured Projects" 
          subtitle="A showcase of my most notable projects and applications I've built."
        />
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-dark-200 p-1 rounded-lg">
            {['All', 'ML', 'Full Stack'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  filter === type 
                    ? 'bg-dark-100 text-neon-blue' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Tilt options={defaultTiltOptions} className="h-full">
                <div className="h-full bg-dark-200 rounded-lg overflow-hidden border border-gray-800 hover:border-neon-blue transition-colors duration-300 group">
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-300 to-transparent opacity-0 group-hover:opacity-60 transition-opacity z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-2 right-2 z-10">
                      <span className="bg-dark-300/80 text-neon-blue px-2 py-1 rounded text-xs backdrop-blur-sm">
                        {project.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-dark-300 text-xs text-gray-300 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center pt-2 border-t border-gray-800">
                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-neon-blue transition-colors"
                          aria-label="GitHub Repository"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      
                      {project.link && (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-neon-blue transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                      
                      {!project.github && !project.link && (
                        <span className="text-gray-500 text-xs">Private Project</span>
                      )}
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com/Kundan062" 
            target="_blank"
            rel="noopener noreferrer"
            className="cyberpunk-btn inline-block"
          >
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;