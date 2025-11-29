import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        // Altura do header para compensar o scroll
        const headerOffset = 90; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled || mobileMenuOpen
          ? 'bg-brand-dark/50 backdrop-blur-xl border-white/10 py-3 md:py-4 shadow-lg' 
          : 'bg-transparent border-transparent py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 group relative z-50">
                <div className="h-9 w-9 md:h-10 md:w-10 border border-brand-gold flex items-center justify-center rounded-sm transition-colors group-hover:bg-brand-gold/10">
                    <span className="font-serif text-brand-gold text-lg md:text-xl font-bold">B</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-white font-serif uppercase tracking-widest text-xs md:text-sm leading-none group-hover:text-brand-gold transition-colors">Brenda Prinsk</span>
                    <span className="text-gray-400 text-[9px] md:text-[10px] uppercase tracking-[0.2em] leading-none mt-1">Advogada</span>
                </div>
            </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-xs uppercase tracking-widest text-gray-300 hover:text-brand-gold transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-brand-gold after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <Button 
            href="https://wa.me/5599999999999" 
            variant="outline" 
            className="!py-2 !px-4 !text-xs hover:bg-brand-gold/10"
            icon={<MessageCircle size={14} />}
          >
            Contato
          </Button>
        </nav>

        {/* Mobile Actions */}
        <div className="flex items-center gap-4 md:hidden relative z-50">
           {/* Mobile WhatsApp Button */}
           <a 
             href="https://wa.me/5599999999999" 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-brand-gold hover:text-white transition-colors"
             aria-label="WhatsApp"
           >
             <MessageCircle size={26} />
           </a>

           {/* Mobile Toggle */}
            <button 
              className="text-white active:scale-95 transition-transform"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={28} className="text-brand-gold" /> : <Menu size={28} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu Content */}
      <div 
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[300px] bg-[#1a1a1a]/95 backdrop-blur-xl border-l border-brand-border shadow-2xl transform transition-transform duration-300 ease-out md:hidden z-40 flex flex-col pt-24 px-6 pb-8 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
         <div className="flex flex-col gap-6">
           {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-base uppercase tracking-widest text-gray-300 hover:text-brand-gold border-b border-white/5 pb-4 transition-colors"
            >
              {item.label}
            </a>
          ))}
         </div>
         
         <div className="mt-auto">
           <Button 
            href="https://wa.me/5599999999999" 
            variant="primary" 
            fullWidth
            onClick={() => setMobileMenuOpen(false)}
            icon={<MessageCircle size={18} />}
          >
            Falar no WhatsApp
          </Button>
          <div className="mt-6 text-center text-xs text-gray-600">
            © 2025 Brenda Prinsk
          </div>
         </div>
      </div>
    </header>
  );
};