import React from 'react';
import { TECH_STACK } from '../constants';
import { motion } from 'framer-motion';

const TechStack: React.FC = () => {
  return (
    <section id="tech" className="py-32 relative border-t border-stone-900">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl text-stone-400 uppercase tracking-[0.2em] mb-20 opacity-80">
          Glifos de Poder
        </h2>

        <div className="flex flex-wrap justify-center gap-16 md:gap-24">
          {TECH_STACK.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group flex flex-col items-center gap-6 cursor-crosshair"
            >
              <div className="relative">
                {/* The "Sigil" Effect */}
                <div className="absolute inset-0 bg-sigil-blue blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-full" />
                
                <tech.icon 
                  strokeWidth={1} 
                  className="w-12 h-12 md:w-16 md:h-16 text-stone-600 group-hover:text-sigil-blue transition-all duration-700 ease-out transform group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" 
                />
              </div>
              
              <span className="font-serif text-[10px] tracking-[0.3em] uppercase text-stone-700 group-hover:text-stone-300 transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;