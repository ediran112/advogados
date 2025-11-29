import React from 'react';
import { Button } from './Button';
import { Instagram, Linkedin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-darker pt-16 md:pt-20 pb-10 border-t border-brand-border">
      <div className="container mx-auto px-4">
        {/* CTA Section */}
        <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-16 space-y-6 reveal-scale">
            <span className="text-brand-gold uppercase tracking-widest text-xs md:text-sm font-semibold">Não perca tempo</span>
            <p className="text-xl md:text-2xl font-serif px-4">Vamos registrar a sua marca?</p>
            <Button href="https://wa.me/5599999999999">Solicitar Registro</Button>
        </div>

        <div className="border-t border-brand-border/50 my-8 md:my-10 reveal-up"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 reveal-up delay-100">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
                {/* Logo Mark */}
                <div className="h-10 w-10 md:h-12 md:w-12 border border-brand-gold flex items-center justify-center rounded-sm">
                    <span className="font-serif text-brand-gold text-xl md:text-2xl font-bold">B</span>
                </div>
                <div>
                    <span className="block text-white font-serif text-base md:text-lg">Brenda Prinsk</span>
                    <span className="block text-gray-500 text-[10px] md:text-xs mt-1">© 2025 TODOS OS DIREITOS RESERVADOS</span>
                </div>
            </div>

            <div className="flex flex-col-reverse md:flex-row items-center gap-6">
                <button 
                    onClick={scrollToTop}
                    className="flex items-center gap-2 text-[10px] md:text-xs text-gray-400 hover:text-brand-gold transition-colors uppercase tracking-widest"
                >
                    Voltar ao topo <ArrowUp size={14} />
                </button>

                <div className="flex gap-6">
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors">
                        <Instagram size={20} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors">
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};