import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, MessageCircle } from 'lucide-react';

// Google Icon Component
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Init
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemsPerPage = isMobile ? 1 : 2;
  const totalPages = Math.ceil(TESTIMONIALS.length / itemsPerPage);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const visibleTestimonials = TESTIMONIALS.slice(
    activeIndex * itemsPerPage,
    (activeIndex + 1) * itemsPerPage
  );

  return (
    <section className="py-20 bg-black relative overflow-hidden min-h-[800px] flex flex-col justify-center">
      {/* Background Ambience - Floating Blurred Cards */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         {/* Ghost Card 1 */}
         <div className="absolute top-20 left-[-5%] w-72 h-48 bg-[#151515] opacity-40 blur-[4px] rounded-lg rotate-[-12deg] z-0 hidden lg:block border border-white/5 shadow-2xl">
            <div className="p-4 flex gap-3 opacity-50">
                <div className="w-10 h-10 rounded-full bg-gray-700"></div>
                <div className="h-2 w-20 bg-gray-700 rounded"></div>
            </div>
         </div>
         {/* Ghost Card 2 */}
         <div className="absolute top-32 right-[-2%] w-80 h-52 bg-[#151515] opacity-30 blur-[6px] rounded-lg rotate-[10deg] z-0 hidden lg:block border border-white/5 shadow-2xl">
             <div className="p-4 flex gap-3 opacity-50">
                <div className="w-10 h-10 rounded-full bg-gray-700"></div>
            </div>
         </div>
         {/* Ghost Card 3 */}
         <div className="absolute bottom-40 left-[5%] w-64 h-40 bg-[#151515] opacity-20 blur-[8px] rounded-lg rotate-[-6deg] z-0 hidden lg:block border border-white/5 shadow-2xl"></div>
         {/* Ghost Card 4 */}
         <div className="absolute bottom-20 right-[15%] w-56 h-36 bg-[#151515] opacity-10 blur-[10px] rounded-lg rotate-[8deg] z-0 hidden lg:block border border-white/5 shadow-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight">
            O que nossos <span className="text-brand-gold italic">clientes</span><br/>
            falam sobre nós:
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto mb-16">
           <div className="flex justify-center gap-8 transition-all duration-500">
             {visibleTestimonials.map((testimonial, idx) => (
               <div 
                 key={`${activeIndex}-${idx}`}
                 className="w-full md:w-1/2 bg-[#0F0F0F] border border-[#2A2A2A] rounded-xl p-8 shadow-2xl relative group hover:border-brand-gold/30 transition-all duration-300 hover:bg-[#121212] reveal-scale animate-in fade-in slide-in-from-bottom-4 duration-500"
               >
                  <div className="flex justify-between items-start mb-6">
                     <div className="flex items-center gap-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover border border-white/10" 
                        />
                        <div>
                           <h4 className="text-white font-serif text-lg leading-tight">{testimonial.name}</h4>
                           <span className="text-gray-500 text-xs">@{testimonial.name.toLowerCase().replace(/\s+/g, '')}</span>
                        </div>
                     </div>
                     <div className="opacity-80">
                       <GoogleIcon />
                     </div>
                  </div>

                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#FBBF24] text-[#FBBF24]" />
                    ))}
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {testimonial.text}
                  </p>
               </div>
             ))}
           </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mb-16">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`h-3 rounded-full transition-all duration-300 ${
                activeIndex === i ? 'bg-brand-gold w-8' : 'bg-gray-700 w-3 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center reveal-up delay-200">
          <a 
            href="https://wa.me/5599999999999" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#C69C45] to-[#EFA356] text-white font-medium uppercase tracking-widest text-sm py-4 px-10 rounded shadow-[0_4px_20px_rgba(239,163,86,0.2)] hover:shadow-[0_4px_30px_rgba(239,163,86,0.4)] transition-all transform hover:-translate-y-1 flex items-center gap-3 w-full md:w-auto justify-center hover:brightness-110"
          >
            <MessageCircle size={22} className="fill-white" />
            Quero defesa especializada
          </a>
        </div>

      </div>
    </section>
  );
};
