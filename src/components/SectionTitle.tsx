import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  center = false 
}) => {
  return (
    <motion.div 
      className={`mb-12 ${center ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
        <span className="title-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-gray-400 max-w-2xl mt-4">
          {subtitle}
        </p>
      )}
      <div className="h-1 w-20 bg-gradient-to-r from-neon-blue to-neon-pink mt-4"></div>
    </motion.div>
  );
};

export default SectionTitle;