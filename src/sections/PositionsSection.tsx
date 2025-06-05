import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { positionsData } from '../data';

const PositionsSection: React.FC = () => {
  return (
    <section id="positions" className="py-20 bg-dark-200">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Positions of Responsibility" 
          subtitle="Leadership roles and responsibilities I've taken on in various organizations."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {positionsData.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-dark-300 rounded-lg p-6 border border-gray-800 hover:border-neon-green transition-colors duration-300 h-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-neon-green/20 rounded-full flex items-center justify-center mr-3">
                      <Users size={20} className="text-neon-green" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{position.title}</h3>
                      <p className="text-gray-400">{position.organization}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar size={14} className="mr-1" />
                    <span>{position.duration}</span>
                  </div>
                </div>
                
                <ul className="space-y-2 text-gray-300 mt-4">
                  {position.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-neon-green mt-1.5 mr-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-dark-400 to-dark-200 p-6 md:p-8 rounded-lg border border-gray-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">Leadership & Team Collaboration</h3>
              <p className="text-gray-300 mb-4">
                Beyond technical skills, I take pride in my ability to lead teams and collaborate effectively.
                Throughout my academic and professional journey, I've demonstrated leadership in various
                contexts, from coordinating events to guiding project teams.
              </p>
              <p className="text-gray-300">
                I believe in empowering team members, fostering open communication, and driving collective
                success through clear vision and execution.
              </p>
            </div>
            
            <div className="flex flex-col justify-center items-center">
              <div className="w-32 h-32 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-green to-neon-blue rounded-lg opacity-20 animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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

export default PositionsSection;