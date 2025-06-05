import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { navigationLinks, socialLinks } from '../data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // Create a mapping of icon names to their components
  const LucideIcons: { [key: string]: React.ComponentType<any> } = {
    Github,
    Linkedin,
    Mail
  };

  return (
    <footer className="bg-dark-400 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">
              <span className="text-neon-blue">K</span>
              <span className="text-neon-pink">K</span>
            </h3>
            <p className="text-gray-400 mb-6">
              AI Researcher & Full Stack Developer passionate about creating intelligent solutions and innovative applications.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon ? LucideIcons[link.icon] : null;
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-dark-300 text-gray-400 hover:text-neon-blue p-2 rounded-full transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.name}
                  >
                    {Icon && <Icon size={18} />}
                  </motion.a>
                );
              })}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {navigationLinks.slice(0, 6).map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-neon-blue transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Bhopal, Madhya Pradesh, India</li>
              <li>
                <a 
                  href="mailto:kundankumargupta800@gmail.com"
                  className="hover:text-neon-blue transition-colors"
                >
                  kundankumargupta800@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} Kundan Kumar. All rights reserved.</p>
          <p className="mt-2">
            Designed with 
            <span className="text-neon-pink mx-1">♥</span> 
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;