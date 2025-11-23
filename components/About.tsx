import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 border-y border-stone-900 bg-stone-950/50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <div className="mb-12">
          <span className="font-serif text-6xl text-stone-800 opacity-50 block mb-4">❝</span>
        </div>

        <p className="font-serif text-2xl md:text-4xl text-stone-300 leading-relaxed mb-12">
          Para trazer a alma de volta aos seus projetos... <br/>
          <span className="text-stone-500 italic">você pode ter que pagar um preço alto.</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left font-sans text-stone-500 text-sm md:text-base leading-loose tracking-wide">
          <p>
            Assim como o <span className="text-stone-300">Viajante</span> entra na Terra Proibida sem medo, eu mergulho na complexidade do Full Stack. Minha espada é o <strong className="text-sigil-blue font-normal">React</strong>, meu escudo é o <strong className="text-sigil-blue font-normal">TypeScript</strong>.
          </p>
          <p>
            Não busco apenas escrever linhas de código. Busco derrubar os gigantes da lentidão e da má interface. Cada projeto é um Colosso a ser escalado, analisado e conquistado com precisão cirúrgica.
          </p>
        </div>

        <div className="mt-16">
            <div className="h-16 w-px bg-gradient-to-b from-stone-800 to-transparent mx-auto" />
        </div>

      </div>
    </section>
  );
};

export default About;