import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, MessageCircle } from 'lucide-react';

// Google Icon Component
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
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
    <section className="py-20 bg-black relative overflow-hidden min-h-[850px] flex flex-col justify-center">
      {/* Background Ambience - Stylized Blurred Ghost Cards simulating 'cloud' of reviews */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
         {/* Top Left Cluster */}
         <div className="absolute top-[10%] left-[5%] w-72 h-44 bg-[#0F0F0F] opacity-30 blur-[3px] rounded-xl rotate-[-15deg] border border-white/5 flex flex-col p-6 shadow-2xl z-0">
             <div className="flex gap-3 mb-3"><div className="w-10 h-10 rounded-full bg-white/10"></div><div className="w-32 h-3 bg-white/10 rounded"></div></div>
             <div className="w-full h-2 bg-white/5 rounded mb-2"></div><div className="w-2/3 h-2 bg-white/5 rounded"></div>
         </div>
         <div className="absolute top-[5%] left-[20%] w-64 h-40 bg-[#0F0F0F] opacity-20 blur-[5px] rounded-xl rotate-[5deg] border border-white/5 z-0"></div>

         {/* Top Right Cluster */}
         <div className="absolute top-[15%] right-[8%] w-80 h-48 bg-[#0F0F0F] opacity-40 blur-[4px] rounded-xl rotate-[12deg] border border-white/5 flex flex-col p-6 shadow-2xl z-0">
             <div className="flex justify-between mb-4"><div className="flex gap-3"><div className="w-10 h-10 rounded-full bg-white/10"></div><div className="w-24 h-3 bg-white/10 rounded mt-2"></div></div><div className="w-6 h-6 rounded-full bg-white/5"></div></div>
             <div className="w-full h-2 bg-white/5 rounded mb-2"></div><div className="w-full h-2 bg-white/5 rounded mb-2"></div>
         </div>
         <div className="absolute top-[8%] right-[25%] w-60 h-36 bg-[#0F0F0F] opacity-20 blur-[6px] rounded-xl rotate-[-8deg] border border-white/5 z-0"></div>
         
         {/* Bottom Left Cluster */}
         <div className="absolute bottom-[20%] left-[10%] w-72 h-44 bg-[#0F0F0F] opacity-25 blur-[4px] rounded-xl rotate-[10deg] border border-white/5 z-0"></div>
         <div className="absolute bottom-[10%] left-[2%] w-64 h-40 bg-[#0F0F0F] opacity-15 blur-[8px] rounded-xl rotate-[-5deg] border border-white/5 z-0"></div>

         {/* Bottom Right Cluster */}
         <div className="absolute bottom-[25%] right-[12%] w-76 h-48 bg-[#0F0F0F] opacity-30 blur-[5px] rounded-xl rotate-[-12deg] border border-white/5 flex flex-col p-6 z-0">
              <div className="flex gap-3 mb-3"><div className="w-10 h-10 rounded-full bg-white/10"></div><div className="w-28 h-3 bg-white/10 rounded"></div></div>
         </div>
         <div className="absolute bottom-[10%] right-[5%] w-60 h-36 bg-[#0F0F0F] opacity-20 blur-[10px] rounded-xl rotate-[15deg] border border-white/5 z-0"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 reveal-up relative z-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white leading-tight drop-shadow-lg">
            O que nossos <span className="text-brand-gold italic">clientes</span><br/>
            falam sobre nós:
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto mb-16 z-20">
           <div className="flex justify-center gap-6 md:gap-8 items-stretch">
             {visibleTestimonials.map((testimonial, idx) => (
               <div 
                 key={`${activeIndex}-${idx}`}
                 className="w-full md:w-1/2 bg-[#0F0F0F] border border-[#2A2A2A] rounded-xl p-6 md:p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] relative group hover:border-brand-gold/30 transition-all duration-300 reveal-scale animate-in fade-in slide-in-from-bottom-4 duration-500"
               >
                  <div className="flex justify-between items-start mb-6">
                     <div className="flex items-center gap-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover border border-white/10" 
                        />
                        <div>
                           <h4 className="text-white font-serif text-base md:text-lg leading-tight">{testimonial.name}</h4>
                           <span className="text-gray-500 text-xs">@{testimonial.name.toLowerCase().replace(/\s+/g, '')}</span>
                        </div>
                     </div>
                     <div className="opacity-90">
                       <GoogleIcon />
                     </div>
                  </div>

                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#FBBF24] text-[#FBBF24]" />
                    ))}
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed min-h-[80px]">
                    {testimonial.text}
                  </p>
               </div>
             ))}
           </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mb-16 z-20 relative">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === i ? 'bg-[#F9DBAB] w-8' : 'bg-gray-700 w-2 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center reveal-up delay-200 z-20 relative">
          <a 
            href="https://wa.me/5599999999999" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#C69C45] to-[#EFA356] text-white font-bold uppercase tracking-wider text-sm py-4 px-8 md:px-12 rounded shadow-[0_4px_20px_rgba(239,163,86,0.2)] hover:shadow-[0_4px_30px_rgba(239,163,86,0.4)] transition-all transform hover:-translate-y-1 flex items-center gap-3 w-full md:w-auto justify-center hover:brightness-110"
          >
            <MessageCircle size={24} className="fill-white stroke-none" />
            QUERO DEFESA ESPECIALIZADA
          </a>
        </div>

      </div>
    </section>
  );
};