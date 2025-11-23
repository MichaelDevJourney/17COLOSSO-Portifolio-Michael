import React from 'react';
import { motion } from 'framer-motion';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4">
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="bg-stone-void/80 backdrop-blur-sm border-b border-stone-800 flex gap-8 rounded-b-2xl shadow-lg shadow-black/50 overflow-x-auto max-w-full px-8 py-4 no-scrollbar"
      >
        {NAV_LINKS.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            className="group relative flex flex-col items-center gap-1 shrink-0"
          >
            <span className="font-serif text-xs md:text-sm tracking-widest text-stone-500 uppercase group-hover:text-sigil-blue transition-colors duration-300 whitespace-nowrap">
              {link.name}
            </span>
            
            {/* The "Grip Meter" indicator */}
            <span className="w-0 h-[2px] bg-sigil-blue shadow-[0_0_8px_rgba(34,211,238,0.8)] group-hover:w-full transition-all duration-500 ease-out" />
          </a>
        ))}
      </motion.nav>
    </div>
  );
};

export default Navbar;