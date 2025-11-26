import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  color?: 'dark' | 'white';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  align = 'center',
  color = 'dark'
}) => {
  const textColor = color === 'white' ? 'text-white' : 'text-primary';
  const subtitleColor = color === 'white' ? 'text-gray-300' : 'text-gray-600';
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`mb-12 ${alignClass} max-w-3xl`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`text-3xl md:text-4xl font-bold mb-4 ${textColor}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`text-lg ${subtitleColor}`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={`h-1 w-20 bg-secondary mt-4 ${align === 'center' ? 'mx-auto' : ''}`}
      />
    </div>
  );
};

export default SectionTitle;