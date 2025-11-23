import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Store from './components/Store';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AudioAmbience from './components/AudioAmbience';
import CustomCursor from './components/CustomCursor';
import StaminaScroll from './components/StaminaScroll';

function App() {
  return (
    <div className="min-h-screen bg-stone-void text-stone-300 font-sans selection:bg-sigil-blue selection:text-black relative overflow-x-hidden">
      
      {/* Texture: Film Grain (Noise) */}
      <div className="fixed inset-0 z-0 bg-grain opacity-20 pointer-events-none" />

      {/* Atmosphere: Fog/Mist Layers */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-transparent via-stone-800/20 to-transparent animate-fog-drift" />
      </div>

      {/* UX: Custom Game-Style Cursor */}
      <CustomCursor />

      {/* UX: Stamina Scroll Indicator */}
      <StaminaScroll />

      {/* Sound Controller */}
      <AudioAmbience />

      {/* Main Content */}
      <div className="relative z-10 pb-20"> 
        <Navbar />
        <Hero />
        <TechStack />
        <About />
        <Projects />
        <Store />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;