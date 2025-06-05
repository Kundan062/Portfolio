import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import AnimatedText from '../components/AnimatedText';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-dark-200">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to know me better and what drives my passion for technology and innovation."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="w-full h-80 lg:h-96 relative z-10 rounded-lg overflow-hidden neon-border">
                <img 
                  src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Kundan Kumar working" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-gradient-to-r from-neon-blue to-neon-pink rounded-lg -z-10 opacity-30 blur-lg"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">
              <AnimatedText text="AI Researcher & Full Stack Developer" className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-pink" />
            </h3>
            
            <div className="space-y-4 text-gray-300">
              <p>
                I'm Kundan Kumar, a dedicated student with a passion for artificial intelligence, 
                machine learning, and web development. Currently pursuing a dual education in 
                B.Tech (AI & DS) at LNCT and B.S in Data Science at IIT Madras.
              </p>
              
              <p>
                My journey in technology is driven by a desire to create solutions that make a 
                positive impact. I specialize in developing AI models that solve real-world problems 
                and building responsive, user-friendly web applications.
              </p>
              
              <p>
                Beyond coding, I'm an active participant in hackathons and tech competitions, 
                where I've had the opportunity to lead teams and showcase innovative solutions. 
                I believe in continuous learning and pushing the boundaries of what's possible with technology.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="border border-gray-700 rounded-lg p-4 bg-dark-300">
                <h4 className="text-neon-blue font-mono mb-1 text-lg">2+</h4>
                <p className="text-sm text-gray-400">Years of Coding Experience</p>
              </div>
              <div className="border border-gray-700 rounded-lg p-4 bg-dark-300">
                <h4 className="text-neon-pink font-mono mb-1 text-lg">5+</h4>
                <p className="text-sm text-gray-400">Completed Projects</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;