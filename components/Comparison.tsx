import React from 'react';
import { COMPARISON_WITH, COMPARISON_WITHOUT } from '../constants';
import { Check, X } from 'lucide-react';
import { Button } from './Button';

export const Comparison: React.FC = () => {
  const brands = ['AMBEV', 'HAVAIANAS', 'NATURA', 'NESTLÉ', 'OBOTICÁRIO', 'ADIDAS'];
  
  // Duplicating the array to create the infinite scroll effect seamlessly
  const marqueeBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="py-16 md:py-20 bg-brand-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16 px-2 reveal-up">
          <span className="text-brand-gold uppercase tracking-widest text-xs md:text-sm font-semibold">Evite Riscos</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif mt-2 mb-4 leading-tight">Por que registrar a sua marca?</h2>
          <p className="text-gray-400 text-sm md:text-base">Registrar a sua marca é o primeiro passo para proteger a identidade do seu negócio</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* With Registration */}
          <div className="bg-brand-card border border-brand-border rounded-lg p-6 md:p-8 hover:border-brand-gold/50 transition-colors duration-300 reveal-left delay-200">
            <h3 className="text-lg md:text-xl font-serif mb-6 pb-4 border-b border-brand-border text-white">Com registro</h3>
            <ul className="space-y-4 mb-8">
              {COMPARISON_WITH.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full border border-brand-gold/30 flex items-center justify-center bg-brand-gold/10 shrink-0">
                    <Check size={12} className="text-brand-gold" />
                  </div>
                  <span className="text-gray-300 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
             <Button href="https://wa.me/5599999999999" variant="text" className="pl-0 text-brand-gold">
               Agendar um bate-papo
             </Button>
          </div>

           {/* Without Registration */}
           <div className="bg-brand-card border border-brand-border rounded-lg p-6 md:p-8 hover:border-red-900/50 transition-colors duration-300 reveal-right delay-200">
            <h3 className="text-lg md:text-xl font-serif mb-6 pb-4 border-b border-brand-border text-white">Sem registro</h3>
            <ul className="space-y-4 mb-8">
              {COMPARISON_WITHOUT.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full border border-gray-600 flex items-center justify-center bg-gray-800 shrink-0">
                    <X size={12} className="text-gray-400" />
                  </div>
                  <span className="text-gray-400 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
             <Button href="https://wa.me/5599999999999" variant="text" className="pl-0 text-gray-400 hover:text-white">
               Agendar um bate-papo
             </Button>
          </div>
        </div>

        {/* Brand Logos Infinite Marquee */}
        <div className="mt-16 md:mt-20 pt-10 border-t border-brand-border reveal-up delay-300">
          <p className="text-center text-[10px] md:text-xs uppercase tracking-widest text-gray-500 mb-8">Algumas empresas que possuem marca registrada no Brasil</p>
          
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
             <div className="flex items-center justify-center md:justify-start [&_span]:mx-4 md:[&_span]:mx-8 animate-marquee group">
                {marqueeBrands.map((brand, index) => (
                   <span 
                    key={index} 
                    className="text-lg md:text-2xl font-serif font-bold text-gray-600 cursor-pointer whitespace-nowrap transition-colors duration-300 hover:text-brand-gold group-hover:[animation-play-state:paused]"
                   >
                     {brand}
                   </span>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};