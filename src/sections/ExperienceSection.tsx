import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { experienceData } from '../data';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-dark-200">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Professional Experience" 
          subtitle="My work experience and professional roles that have shaped my career."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-dark-300 rounded-lg p-6 border border-gray-800 hover:border-neon-pink transition-colors duration-300 h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-neon-pink/20 rounded-full flex items-center justify-center mr-3">
                      <Briefcase size={20} className="text-neon-pink" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                      <p className="text-gray-400">{experience.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar size={14} className="mr-1" />
                    <span>{experience.duration}</span>
                  </div>
                </div>
                
                <ul className="space-y-2 text-gray-300 mt-4">
                  {experience.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-neon-pink mt-1.5 mr-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;