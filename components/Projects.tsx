import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-stone-950">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="mb-24 text-center">
          <span className="text-sigil-blue text-xs font-serif tracking-[0.2em] uppercase mb-4 block">As Conquistas</span>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-200 uppercase tracking-widest">Colossos Caídos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <div 
              key={project.id}
              className="group relative bg-stone-900 border border-stone-800 overflow-hidden hover:border-stone-700 transition-all duration-700"
            >
              {/* Image with Desaturation */}
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-stone-900/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover filter grayscale sepia-[50%] brightness-75 group-hover:grayscale-0 group-hover:sepia-0 group-hover:brightness-100 transition-all duration-1000 transform group-hover:scale-110"
                />
                
                {/* Sigil Mark Overlay that appears on hover */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                    <div className="w-12 h-12 border-2 border-sigil-blue rotate-45 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                        <div className="w-2 h-2 bg-sigil-blue shadow-[0_0_10px_rgba(34,211,238,1)]" />
                    </div>
                </div>
              </div>

              <div className="p-8 relative">
                <h3 className="font-serif text-xl text-stone-300 mb-2 uppercase tracking-wide group-hover:text-sigil-blue transition-colors duration-500">
                    {project.title}
                </h3>
                <p className="font-sans text-stone-500 text-sm leading-relaxed mb-6 border-l border-stone-800 pl-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-serif uppercase tracking-widest text-stone-600 border border-stone-800 px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;