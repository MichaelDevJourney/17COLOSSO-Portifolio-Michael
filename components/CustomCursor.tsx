import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePos = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over interactive elements
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.tagName === 'INPUT' ||
        target.classList.contains('cursor-crosshair');
        
      setIsHovering(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePos);
    window.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePos);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
      animate={{
        x: mousePos.x,
        y: mousePos.y,
      }}
      transition={{
        type: "tween",
        ease: "linear",
        duration: 0
      }}
    >
      {/* 
        ANCIENT SWORD CONTAINER
        Rotated to align tip with top-left (0,0) position.
      */}
      <motion.div
        className="relative"
        animate={{
          rotate: -45, // Aligns the long blade to point Top-Left naturally
          scale: isHovering ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* LIGHT BEAM MECHANIC (The Guidance) */}
        {/* Only appears intensely on hover, focusing the light */}
        <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 origin-bottom bg-gradient-to-t from-sigil-blue via-sigil-blue/50 to-transparent"
            initial={{ height: 0, width: 0, opacity: 0 }}
            animate={{ 
                height: isHovering ? 800 : 0, // Long beam on hover
                width: isHovering ? 6 : 0,    // Focused beam
                opacity: isHovering ? 0.6 : 0,
                bottom: '80%' // Starts slightly down the blade
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ filter: 'blur(6px)' }}
        />

        {/* 
          CUSTOM SVG: The Ancient Sword 
          Designed to be slender, with a crossguard, resembling the game asset.
          Increased size to w-16 h-16 (approx 64px) for visual impact.
          Adjusted top/left offsets to align the tip (11.5, 2) with the mouse origin after -45deg rotation.
        */}
        <div className="relative -top-10 -left-6 w-16 h-16">
          <svg 
            viewBox="0 0 24 24" 
            className={`drop-shadow-lg transition-all duration-300 ${isHovering ? 'filter drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]' : ''}`}
            style={{ overflow: 'visible' }}
          >
            <motion.path
              d="M11.5 2 L12.5 2 L13 14 L16 14 L16 16 L13 16 L13 20 L14 21 L14 22 L10 22 L10 21 L11 20 L11 16 L8 16 L8 14 L11 14 Z"
              fill={isHovering ? "#e7e5e4" : "#57534e"} // Light stone when active, dark stone when idle
              stroke={isHovering ? "#22d3ee" : "#292524"} // Sigil blue stroke on hover
              strokeWidth="0.5"
              animate={{
                fill: isHovering ? "#ecfeff" : "#57534e",
                stroke: isHovering ? "#22d3ee" : "#1c1917"
              }}
            />
            
            {/* Runes/Sigils on the blade */}
            <motion.path
                d="M12 4 L12 12"
                stroke={isHovering ? "#22d3ee" : "#292524"}
                strokeWidth="0.5"
                opacity={isHovering ? 1 : 0.3}
            />
          </svg>
        </div>

        {/* IMPACT FLARE (Contact Point) */}
        <motion.div
            className="absolute top-[-4px] left-[-4px] w-2 h-2 rounded-full bg-sigil-blue"
            animate={{ 
                scale: isHovering ? [1, 2, 1] : 0,
                opacity: isHovering ? 1 : 0
            }}
            transition={{ repeat: Infinity, duration: 1 }}
            style={{ filter: 'blur(2px)' }}
        />

      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;