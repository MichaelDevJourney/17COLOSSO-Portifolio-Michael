import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Light Beam (Sword Reflection Effect) */}
      <motion.div 
        initial={{ opacity: 0, height: '0%' }}
        animate={{ opacity: 1, height: '100%' }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-sigil-blue to-transparent opacity-50 shadow-[0_0_40px_2px_rgba(34,211,238,0.3)] pointer-events-none h-full"
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center gap-8"
        >
          <span className="font-serif tracking-[0.3em] text-sm md:text-base text-stone-500 uppercase border-b border-stone-800 pb-2">
            O 17º Colosso
          </span>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-200 uppercase tracking-widest leading-none drop-shadow-2xl">
            Michael <br /> 
            <span className="text-stone-400">Douglas</span>
          </h1>

          <p className="font-sans text-stone-400 max-w-lg mx-auto leading-relaxed text-sm md:text-base tracking-wide border-t border-stone-800 pt-6 mt-2">
            Nas terras proibidas do desenvolvimento web, eu caço problemas complexos e ergo monumentos digitais.
          </p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-12 flex flex-col md:flex-row gap-8 items-center"
          >
            <a href="#projects" className="relative px-8 py-3 border border-stone-700 hover:border-sigil-blue text-stone-300 hover:text-sigil-blue transition-all duration-500 uppercase font-serif tracking-widest text-xs hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] bg-stone-void/50 backdrop-blur-sm">
              Caçar Colossos
            </a>
            
            <a href="#store" className="text-xs font-serif tracking-widest text-stone-500 hover:text-stone-300 transition-colors uppercase">
              Ver Oferendas
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 text-stone-600"
      >
        <ArrowDown size={24} strokeWidth={1} />
      </motion.div>
    </section>
  );
};

export default Hero;