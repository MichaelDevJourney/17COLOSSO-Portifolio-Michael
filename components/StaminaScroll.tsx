import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const StaminaScroll: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Smooth physics for the fill animation, giving it weight like the game
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  
  // Transform progress (0-1) into stroke offset
  const strokeDashoffset = useTransform(smoothProgress, value => circumference - (value * circumference));
  
  // Dynamic glow intensity based on progress
  const glowOpacity = useTransform(smoothProgress, [0.9, 1], [0, 1]);
  const colorShift = useTransform(smoothProgress, [0, 1], ["#57534e", "#22d3ee"]);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="fixed bottom-8 left-8 z-40 hidden md:flex flex-col items-center gap-3 pointer-events-none mix-blend-screen"
    >
      <div className="relative w-20 h-20 flex items-center justify-center">
        
        {/* Pulse Effect at 100% */}
        <motion.div 
          style={{ opacity: glowOpacity }}
          className="absolute inset-0 bg-sigil-blue/30 rounded-full blur-xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />

        <svg className="w-full h-full -rotate-90 transform drop-shadow-lg" viewBox="0 0 70 70">
           {/* Background Ring (Stone) */}
           <circle
             cx="35"
             cy="35"
             r={radius}
             fill="rgba(12, 10, 9, 0.5)" // semi-transparent stone-void
             stroke="#292524" // stone-800
             strokeWidth="3"
           />
           
           {/* Progress Ring (Stamina) */}
           <motion.circle
             cx="35"
             cy="35"
             r={radius}
             fill="transparent"
             stroke={colorShift} 
             strokeWidth="5"
             strokeLinecap="round"
             style={{
               strokeDasharray: circumference,
               strokeDashoffset,
               filter: 'drop-shadow(0 0 2px rgba(34,211,238,0.5))'
             }}
           />
        </svg>

        {/* Center Rune/Diamond */}
        <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              style={{ rotate: useTransform(smoothProgress, [0, 1], [0, 180]) }}
              className="w-3 h-3 bg-stone-500 rotate-45 border border-stone-900 shadow-inner"
            />
        </div>
      </div>
      
      <span className="text-[9px] font-serif tracking-[0.3em] text-stone-600 uppercase opacity-60">
        Escalar
      </span>
    </motion.div>
  );
};

export default StaminaScroll;