import React from 'react';
import { Button } from './Button';

export const Bio: React.FC = () => {
  return (
    <section id="bio" className="py-16 md:py-20 bg-brand-dark scroll-mt-20 md:scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
           {/* Image - First on mobile, Second on Desktop */}
           <div className="lg:col-span-5 order-1 lg:order-2 reveal-right">
            <div className="relative max-w-md mx-auto lg:max-w-none">
                {/* Border only visible on desktop to avoid spacing issues on mobile */}
                <div className="absolute inset-0 border-2 border-brand-gold translate-x-4 translate-y-4 rounded-lg hidden md:block"></div>
                
                <div className="relative z-10 rounded-lg shadow-2xl overflow-hidden group">
                    <img 
                        src="https://brendaprinskadvogada.com/wp-content/uploads/2025/06/photo-brenda-bio.webp" 
                        alt="Brenda Prinsk Bio" 
                        className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                     {/* Bottom Shadow Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                </div>
            </div>
          </div>

          {/* Text Content - Second on mobile, First on Desktop */}
          <div className="lg:col-span-7 order-2 lg:order-1 text-center md:text-left reveal-left delay-100">
            <span className="text-brand-gold uppercase tracking-widest text-xs md:text-sm font-semibold mb-2 block">Quem sou eu?</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 md:mb-8">Brenda Prinsk</h2>
            
            <div className="space-y-4 md:space-y-6 text-gray-300 leading-relaxed text-sm md:text-base md:text-justify text-left">
                <p>
                    Advogada, goiana e apaixonada por proteger histórias que merecem ser lembradas.
                    Brenda é especialista em registro de marcas, com sólida formação jurídica e destaque como uma das melhores de sua turma. 
                    Sua trajetória combina excelência acadêmica, espírito empreendedor e um olhar sensível para a importância da proteção intelectual no mundo dos negócios.
                </p>
                <p>
                    Movida pelo propósito de transformar o direito em uma verdadeira ferramenta de proteção, reconhecimento e legado, 
                    fundou sua própria empresa — um espaço onde o conhecimento jurídico se alia à empatia e à visão estratégica.
                </p>
                <p>
                    Sua missão é clara: ajudar empreendedores, criadores e visionários a fortalecerem suas marcas, 
                    garantindo a segurança necessária para que possam inovar e crescer com confiança.
                </p>
            </div>

            <div className="mt-8 flex justify-center md:justify-start">
                 <Button href="https://wa.me/5599999999999">Entrar em contato</Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};