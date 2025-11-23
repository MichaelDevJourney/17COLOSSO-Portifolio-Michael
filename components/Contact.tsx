import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-screen-md mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl text-stone-300 uppercase tracking-widest mb-2">Enviar uma Pomba</h2>
          <p className="font-sans text-xs text-stone-600 tracking-widest uppercase">Inicie sua prece / Contato</p>
        </div>
        
        <form className="space-y-16">
          <div className="group relative">
            <input 
              type="text" 
              required
              className="w-full bg-transparent border-b border-stone-800 py-4 text-xl font-serif text-stone-300 placeholder-transparent focus:outline-none focus:border-sigil-blue transition-colors text-center"
              placeholder="Name"
            />
            <label className="absolute left-1/2 -translate-x-1/2 top-4 text-stone-600 font-serif text-sm tracking-widest uppercase transition-all duration-300 pointer-events-none group-focus-within:-top-6 group-focus-within:text-[10px] group-focus-within:text-sigil-blue">
              Seu Nome
            </label>
          </div>
          
          <div className="group relative">
            <input 
              type="email" 
              required
              className="w-full bg-transparent border-b border-stone-800 py-4 text-xl font-serif text-stone-300 placeholder-transparent focus:outline-none focus:border-sigil-blue transition-colors text-center"
              placeholder="Contact"
            />
            <label className="absolute left-1/2 -translate-x-1/2 top-4 text-stone-600 font-serif text-sm tracking-widest uppercase transition-all duration-300 pointer-events-none group-focus-within:-top-6 group-focus-within:text-[10px] group-focus-within:text-sigil-blue">
              Seu Email
            </label>
          </div>

          <div className="pt-8 flex justify-center">
            <button className="relative px-12 py-4 border border-stone-800 text-stone-400 font-serif text-xs tracking-[0.3em] uppercase hover:bg-stone-900 hover:text-sigil-blue hover:border-sigil-blue hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-500">
              Enviar Mensagem
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;