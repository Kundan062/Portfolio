import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { achievementsData } from '../data';

const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#00eeff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Achievements" 
          subtitle="Recognition and accolades I've received throughout my academic and professional journey."
          center
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-neon-pink/30 transform md:translate-x-[-50%]"></div>
            
            <div className="space-y-12">
              {achievementsData.map((achievement, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`relative flex`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 top-0 w-8 h-8 rounded-full bg-dark-300 border-2 border-neon-pink transform translate-x-[-50%] flex items-center justify-center shadow-[0_0_10px_rgba(255,0,255,0.3)]">
                    <Trophy size={16} className="text-neon-pink" />
                  </div>
                  
                  <div className={`pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:w-1/2' : 'md:pl-12 md:w-1/2'}`}>
                    <div className="bg-dark-200 rounded-lg p-6 border border-gray-800 hover:border-neon-pink transition-colors duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                        <Award size={20} className="text-neon-pink" />
                      </div>
                      
                      <div className="flex items-center mb-4 text-sm">
                        <span className="text-gray-400">{achievement.issuer}</span>
                        <span className="mx-2 text-gray-500">•</span>
                        <span className="text-neon-pink">{achievement.date}</span>
                      </div>
                      
                      <p className="text-gray-300">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Trophy decoration */}
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-neon-pink/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default AchievementsSection;