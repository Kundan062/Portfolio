import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowDown, Brain } from 'lucide-react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { socialLinks } from '../data';

const HeroSection: React.FC = () => {
  const [text] = useTypewriter({
    words: [
      'AI Researcher',
      'Full Stack Developer',
      'Hackathon Finalist',
      'Leader'
    ],
    loop: 0,
    delaySpeed: 2000,
  });

  // Create a mapping of icon names to their components
  const LucideIcons: { [key: string]: React.ComponentType<any> } = {
    Github,
    Linkedin
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-dark-300 via-dark-400 to-dark-500 -z-10"></div>
      <div 
        className="absolute inset-0 opacity-20 -z-10" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300eeff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>
      
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-left"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-display font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="text-white">Hi, I'm </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-pink">
              Kundan Kumar
            </span>
          </motion.h1>
          
          <motion.div 
            className="text-xl md:text-2xl font-mono mb-6 h-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <span className="mr-2">I'm a</span>
            <span className="text-neon-blue">{text}</span>
            <Cursor cursorColor="#00eeff" />
          </motion.div>
          
          <motion.p 
            className="text-gray-300 text-lg mb-8 max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            B.Tech (AI & DS) Pursuing from LNCT and B.S in Data Science student at IIT Madras,
            passionate about creating intelligent solutions and applications that make a difference.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a 
              href="#projects" 
              className="cyberpunk-btn text-white"
            >
              View Projects
            </a>
            <a 
              href="#resume" 
              className="cyberpunk-btn text-white"
            >
              Resume
            </a>
          </motion.div>
          
          <motion.div 
            className="flex gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {socialLinks.map((link) => {
              const Icon = link.icon ? LucideIcons[link.icon] : null;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-100 text-gray-400 hover:text-neon-blue p-3 rounded-full transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.name}
                >
                  {Icon && <Icon size={20} />}
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative hidden lg:block"
        >
          <div className="w-80 h-80 mx-auto relative">
            <div className="absolute inset-0 rectangle-full bg-gradient-to-r from-neon-blue to-neon-pink opacity-20 blur-2xl animate-pulse"></div>
            <div className="relative w-full h-full rectangle-full overflow-hidden  border-dark-100 shadow-xl">
              <img 
                src="/images/kundanimage.png" 
                alt="Kundan Kumar" 
                className="w-full h-full object-cover scale-110"
              />
              
            </div>
          </div>
          
          <motion.div
            className="absolute -bottom-4 -right-4 bg-dark-200 p-4 rounded-lg border border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Brain className="text-neon-blue h-10 w-10 animate-pulse" />
          </motion.div>
          
          <motion.div
            className="absolute -top-4 -left-4 bg-dark-200 px-4 py-2 rounded-lg border border-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="flex items-center text-neon-green font-mono text-sm">
              <span className="block w-3 h-3 rounded-full bg-neon-green mr-2"></span>
              AI Enthusiast
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 1.5,
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.2
        }}
      >
        <ArrowDown className="text-gray-400 animate-bounce" size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;