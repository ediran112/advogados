import React from 'react';
import { SERVICES } from '../constants';
import { Button } from './Button';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-20 bg-brand-dark scroll-mt-20 md:scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16 reveal-up">
          <span className="text-brand-gold uppercase tracking-widest text-xs md:text-sm font-semibold">Escolha seu atendimento</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif mt-2">Outros serviços que ofereço</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-lg md:max-w-none mx-auto">
          {SERVICES.map((service, index) => (
            <div key={index} className={`group bg-brand-card border border-brand-border p-6 md:p-8 rounded-lg hover:-translate-y-2 transition-transform duration-300 reveal-up`} style={{ transitionDelay: `${index * 150}ms` }}>
              <div className="mb-6 p-4 bg-brand-dark rounded-lg inline-block border border-brand-border group-hover:border-brand-gold/50 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-serif font-bold mb-4 min-h-[auto] md:min-h-[56px]">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                {service.description}
              </p>
              <Button variant="text" className="pl-0 text-brand-gold text-xs">
                Entrar em contato
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};