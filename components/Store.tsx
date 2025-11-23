import React from 'react';
import { PRODUCTS } from '../constants';
import { Gem, Sword } from 'lucide-react';

const Store: React.FC = () => {
  return (
    <section id="store" className="py-32 relative overflow-hidden">
      {/* Background Symbol */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-stone-900 opacity-20 pointer-events-none">
        <Gem size={400} strokeWidth={0.5} />
      </div>

      <div className="max-w-screen-xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl text-stone-200 uppercase tracking-widest mb-4">Relíquias Ancestrais</h2>
          <p className="font-sans text-stone-400 text-sm tracking-wide">Escolha sua arma para a jornada.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id}
              className={`
                relative p-8 border backdrop-blur-sm transition-all duration-500 flex flex-col group/card
                ${product.isPopular 
                  ? 'bg-stone-900/90 border-sigil-blue shadow-[0_0_40px_rgba(34,211,238,0.1)] md:-translate-y-8 z-10' 
                  : 'bg-stone-900/40 border-stone-800 hover:border-stone-600'}
              `}
            >
              {product.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sigil-blue text-stone-900 px-6 py-1 text-xs font-bold font-serif tracking-widest uppercase shadow-[0_0_20px_rgba(34,211,238,0.6)]">
                  O Escolhido
                </div>
              )}

              <h3 className="font-serif text-lg text-stone-300 mb-2 uppercase tracking-wide text-center group-hover/card:text-sigil-blue transition-colors">
                {product.title}
              </h3>
              
              <div className="my-8 text-center">
                <span className={`font-serif text-4xl md:text-5xl tracking-widest drop-shadow-xl transition-all duration-300 ${product.isPopular ? 'text-sigil-blue scale-105' : 'text-stone-100 group-hover/card:text-stone-300'}`}>
                    {product.price}
                </span>
              </div>

              <p className="font-sans text-xs text-stone-400 text-center leading-relaxed mb-8 px-4 h-12">
                {product.description}
              </p>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-stone-700 to-transparent mb-8" />

              <ul className="space-y-4 mb-10 flex-grow">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs font-serif uppercase tracking-wider text-stone-300">
                    <span className={`w-1.5 h-1.5 rotate-45 ${product.isPopular ? 'bg-sigil-blue shadow-[0_0_5px_#22d3ee]' : 'bg-stone-600'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* THE FINAL BLOW BUTTON */}
              {/* FIXED: Removed specific group-btn class and used standard 'group' class for Tailwind to handle hover state correctly */}
              <button className={`
                relative w-full py-5 text-xs font-bold font-serif tracking-[0.3em] uppercase transition-all duration-500 overflow-hidden group
                ${product.isPopular
                  ? 'bg-sigil-blue text-stone-950 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_50px_rgba(34,211,238,0.8)]'
                  : 'bg-transparent border border-stone-700 text-stone-400 hover:text-stone-100 hover:border-sigil-blue hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]'}
              `}>
                <span className="relative z-10 flex items-center justify-center gap-2">
                   Adquirir Relíquia
                   {product.isPopular && <Sword size={14} className="stroke-2" />}
                </span>
                
                {/* Charging Effect (Fill from bottom) */}
                <div className={`
                    absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0
                    ${product.isPopular ? 'bg-white mix-blend-overlay' : 'bg-sigil-blue/10'}
                `} />
                
                {/* Shine Glare */}
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transition-all duration-700 group-hover:left-[100%]" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Store;