import React from 'react';
import { STEPS } from '../constants';
import { Button } from './Button';

export const Steps: React.FC = () => {
  return (
    <section id="steps" className="py-16 md:py-20 bg-[#151515] relative overflow-hidden scroll-mt-20 md:scroll-mt-28">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            {/* Left Column: Image (Bio Style) */}
            <div className="lg:col-span-5 order-1 reveal-left">
                <div className="relative max-w-md mx-auto lg:max-w-none">
                    {/* Border Frame - Mirrored to translate left since image is on left */}
                    <div className="absolute inset-0 border-2 border-brand-gold -translate-x-4 translate-y-4 rounded-lg hidden md:block"></div>
                    
                    <div className="relative z-10 rounded-lg shadow-2xl overflow-hidden group">
                        <img 
                            src="https://storage.googleapis.com/site-zylumia/Gemini_Generated_Image_fkpq1cfkpq1cfkpq.png" 
                            alt="Estátua da Justiça" 
                            className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 object-cover"
                        />
                        {/* Bottom Shadow Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-7 order-2 flex flex-col">
                <div className="mb-8 md:mb-10 text-center lg:text-left reveal-up delay-100">
                    <span className="text-brand-gold uppercase tracking-widest text-xs md:text-sm font-semibold">Simples e 100% Online</span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif mt-2">Etapas de um registro de marca</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                    {STEPS.map((step, index) => (
                        <div key={step.number} className={`bg-brand-card/50 border border-brand-border p-5 md:p-6 rounded hover:bg-brand-card transition-colors duration-300 reveal-up`} style={{ transitionDelay: `${index * 100}ms` }}>
                            <span className="text-3xl md:text-4xl font-serif text-white mb-2 block">{step.number}<span className="text-brand-gold">.</span></span>
                            <h3 className="text-lg md:text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 md:mt-12 flex flex-col md:flex-row items-center lg:justify-start justify-center gap-8 border-t border-brand-border pt-8 reveal-up delay-300">
                    <Button href="https://wa.me/5599999999999" className="w-full md:w-auto">Solicitar Registro</Button>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 text-[10px] uppercase tracking-wider text-brand-gold">
                        <span className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-gold rounded-full"></div>Sem Burocracia</span>
                        <span className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-gold rounded-full"></div>Sem sair de casa</span>
                        <span className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-gold rounded-full"></div>Sem dor de cabeça</span>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};