import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { educationData } from '../data';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Education" 
          subtitle="My academic journey and educational background that shaped my skills and knowledge."
        />
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-blue via-neon-pink to-neon-green transform md:translate-x-[-50%]"></div>
          
          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 rounded-full bg-dark-200 border-2 border-neon-blue transform translate-x-[-50%] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-neon-blue"></div>
                </div>
                
                <div className="md:w-1/2"></div>
                
                <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-dark-200 rounded-lg p-6 border border-gray-800 hover:border-neon-blue transition-colors duration-300 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-neon-blue/20 text-neon-blue px-3 py-1 rounded-full text-xs font-semibold">
                        {item.year}
                      </div>
                      <BookOpen size={20} className="text-neon-blue" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-white">{item.degree}</h3>
                    <p className="text-gray-400 mb-4">{item.institution}</p>
                    
                    {item.description && (
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;