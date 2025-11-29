import React, { useState } from 'react';
import { Button } from './Button';
import { Shield, Target } from 'lucide-react';

export const Hero: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    phone: '',
    email: '',
    type: 'PESSOA FÍSICA'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Consulta enviada com sucesso! Entraremos em contato em breve.');
  };

  return (
    <section className="relative min-h-screen flex flex-col md:block bg-brand-dark overflow-hidden">
      
      {/* 1. Mobile Image Block (Visible only on mobile) */}
      <div className="md:hidden relative w-full h-[65vh] shrink-0 reveal-scale">
        <img 
          src="https://brendaprinskadvogada.com/wp-content/uploads/2025/08/bg-mobile.webp" 
          alt="Brenda Prinsk" 
          className="w-full h-full object-cover object-top"
        />
        {/* Gradient to blend image into the dark content background */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent"></div>
      </div>

      {/* 2. Desktop Background (Visible only on desktop) */}
      <div className="hidden md:block absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-transparent z-10" />
        <img 
          src="https://brendaprinskadvogada.com/wp-content/uploads/2025/08/Group-43-scaled.webp" 
          alt="Brenda Prinsk Background" 
          className="w-full h-full object-cover object-right animate-[pulse_10s_ease-in-out_infinite]"
        />
      </div>

      {/* 3. Content Container */}
      <div className="container mx-auto px-4 relative z-10 flex-1">
        <div className="grid lg:grid-cols-2 gap-12 items-center md:min-h-screen pb-16 md:pb-0">
          
          {/* Left Content (Text + Form) */}
          {/* Negative margin on mobile to pull it up over the gradient slightly */}
          <div className="text-white space-y-6 md:space-y-8 -mt-20 md:mt-0 relative z-20 pt-4 md:pt-32">
            <div>
              {/* Typewriter Effect on small title */}
              <span className="text-brand-gold uppercase tracking-widest text-xs md:text-sm font-semibold mb-2 block typewriter-effect">
                Registre sua marca
              </span>
              
              {/* Typewriter Effect on big title (modified for responsiveness) */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight drop-shadow-lg md:drop-shadow-none">
                <span className="md:typewriter-effect typewriter-effect-multiline">
                  Garanta a <span className="text-brand-gold italic">segurança</span> da sua marca agora
                </span>
              </h1>
            </div>
            
            <p className="text-gray-200 md:text-gray-300 text-base md:text-lg max-w-md border-l-2 border-brand-gold pl-4 leading-relaxed drop-shadow-md md:drop-shadow-none reveal-up delay-200">
              Evite problemas jurídicos, proteja o que é seu com quem realmente entende do assunto.
            </p>

            {/* Form Container */}
            <div className="bg-brand-card/95 md:bg-brand-card/80 backdrop-blur-sm p-5 md:p-8 rounded-lg border border-brand-border shadow-2xl mt-6 md:mt-8 reveal-up delay-300">
              <h3 className="text-lg md:text-xl font-serif mb-4 md:mb-6">Descubra se sua marca está em uso:</h3>
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Digite seu nome:" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-brand-border/40 border border-brand-border rounded-sm p-3 md:p-3 text-sm md:text-base text-white placeholder-gray-400 focus:border-brand-gold focus:outline-none transition-colors"
                  required
                />
                <input 
                  type="text" 
                  name="brand" 
                  placeholder="Digite o nome da sua marca:" 
                  value={formData.brand}
                  onChange={handleChange}
                  className="w-full bg-brand-border/40 border border-brand-border rounded-sm p-3 md:p-3 text-sm md:text-base text-white placeholder-gray-400 focus:border-brand-gold focus:outline-none transition-colors"
                  required
                />
                 <input 
                  type="tel" 
                  name="phone" 
                  placeholder="(XX) X XXXX-XXXX:" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-brand-border/40 border border-brand-border rounded-sm p-3 md:p-3 text-sm md:text-base text-white placeholder-gray-400 focus:border-brand-gold focus:outline-none transition-colors"
                  required
                />
                 <input 
                  type="email" 
                  name="email" 
                  placeholder="Digite seu melhor e-mail:" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-brand-border/40 border border-brand-border rounded-sm p-3 md:p-3 text-sm md:text-base text-white placeholder-gray-400 focus:border-brand-gold focus:outline-none transition-colors"
                  required
                />
                
                <div className="space-y-2 text-xs md:text-sm text-gray-300 py-1">
                  {['PESSOA FÍSICA', 'MEI E PEQUENAS EMPRESAS', 'MÉDIAS E GRANDES EMPRESAS'].map((option) => (
                    <label key={option} className="flex items-center gap-2 cursor-pointer hover:text-brand-gold transition-colors py-1 md:py-0">
                      <input 
                        type="radio" 
                        name="type" 
                        value={option}
                        checked={formData.type === option}
                        onChange={handleChange}
                        className="accent-brand-gold"
                      />
                      {option}
                    </label>
                  ))}
                </div>

                <div className="pt-2">
                   <Button type="submit" fullWidth className="text-base">Consultar</Button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Content - Badges only (Image is in background on desktop) */}
          <div className="hidden lg:block relative h-full min-h-[600px]">
             {/* Floating badges with Glassmorphism and Slow Float Animation */}
             <div className="absolute top-1/4 -left-8 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-lg flex items-center gap-3 shadow-2xl z-20 animate-float">
                <Target className="text-brand-gold w-6 h-6" />
                <span className="text-sm font-bold uppercase tracking-wider text-white">Estratégia</span>
             </div>
             
             <div className="absolute bottom-1/3 -right-4 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-lg flex items-center gap-3 shadow-2xl z-20 animate-float" style={{ animationDelay: '2s' }}>
                <Shield className="text-brand-gold w-6 h-6" />
                <span className="text-sm font-bold uppercase tracking-wider text-white">Proteção</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};