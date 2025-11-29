import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 bg-[#151515]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Title Column */}
            <div className="lg:col-span-4 text-center lg:text-left">
                <div className="lg:sticky lg:top-24">
                    <span className="text-brand-gold uppercase tracking-widest text-xs md:text-sm font-semibold">FAQ</span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif mt-2 mb-4">Ficou com alguma dúvida?</h2>
                    <p className="text-gray-400 text-sm md:text-base">Confira as perguntas mais frequentes e tire suas dúvidas sobre o registro de marca.</p>
                </div>
            </div>

            {/* Questions Column */}
            <div className="lg:col-span-8">
                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <div 
                            key={index} 
                            className={`border border-brand-border rounded-lg transition-colors ${openIndex === index ? 'bg-brand-card border-brand-gold/30' : 'bg-brand-card/30'}`}
                        >
                            <button 
                                className="w-full px-4 py-4 md:px-6 md:py-5 flex justify-between items-center text-left focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className={`font-serif text-base md:text-lg pr-4 ${openIndex === index ? 'text-brand-gold' : 'text-white'}`}>
                                    {faq.question}
                                </span>
                                {openIndex === index ? 
                                    <ChevronUp className="text-brand-gold shrink-0 ml-2 md:ml-4 h-5 w-5" /> : 
                                    <ChevronDown className="text-gray-500 shrink-0 ml-2 md:ml-4 h-5 w-5" />
                                }
                            </button>
                            
                            <div 
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="px-4 pb-4 md:px-6 md:pb-6 text-sm md:text-base text-gray-300 leading-relaxed border-t border-brand-border/30 pt-4">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};