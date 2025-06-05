import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { skillsData, coursesData } from '../data';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-dark-200">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Skills & Expertise" 
          subtitle="Technologies and tools I've worked with and courses I've completed to enhance my skills."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h3 className="text-xl font-bold mb-6 text-white">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillsData.map((skillGroup, groupIndex) => (
                <motion.div 
                  key={groupIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                  className="bg-dark-300 p-6 rounded-lg border border-gray-800 hover:border-neon-blue transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold mb-4 text-neon-blue">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-dark-100 text-gray-300 text-sm rounded-full border border-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 text-white">Courses & Certifications</h3>
            <div className="space-y-4">
              {coursesData.map((course, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-dark-300 p-4 rounded-lg border border-gray-800 hover:border-neon-green transition-all duration-300"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-white">{course.title}</h4>
                      <p className="text-sm text-gray-400">{course.provider}</p>
                    </div>
                    <span className="text-xs text-neon-green">{course.year}</span>
                  </div>
                  
                  {course.certificate && (
                    <a 
                      href={course.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-neon-blue hover:underline mt-2 inline-block"
                    >
                      View Certificate
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-dark-300 to-dark-100 p-6 md:p-8 rounded-lg border border-gray-800"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">Continuously Learning & Improving</h3>
              <p className="text-gray-300">
                I'm constantly expanding my skill set through courses, tutorials, and hands-on projects.
                My passion for technology drives me to stay updated with the latest advancements and best practices.
              </p>
            </div>
            
            <div className="md:w-1/3 flex justify-center">
              <div className="w-32 h-32 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-pink rounded-full opacity-20 animate-ping"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;