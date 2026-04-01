import React, { useEffect, useState, useRef } from 'react';
import { FileText, MessageCircle, CheckCircle, ArrowRight } from 'lucide-react';

const OptimizedHowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      number: "1",
      icon: <FileText className="h-10 w-10 sm:h-12 sm:w-12" />,
      title: "Rellena el formulario",
      description: "Te llamamos sin compromiso.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      number: "2",
      icon: <MessageCircle className="h-10 w-10 sm:h-12 sm:w-12" />,
      title: "Te explicamos sin rodeos",
      description: "Sin letras pequeñas ni ofertas raras.",
      color: "from-purple-400 to-pink-500"
    },
    {
      number: "3",
      icon: <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12" />,
      title: "Firmas digitalmente",
      description: "Y listo. Energía verde desde la próxima factura.",
      color: "from-green-400 to-emerald-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="como-funciona" 
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-32 relative overflow-hidden bg-[#F5F5F0] min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-3 bg-[#A8FF00]/20 px-8 py-4 rounded-full mb-8 border border-[#A8FF00]/50">
            <CheckCircle className="h-6 w-6 text-[#1A1A1A]" />
            <span className="text-[#1A1A1A] font-bold text-xl">Cómo funciona</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-[#1A1A1A] mb-6 sm:mb-8 leading-tight px-2">
            <span className="block sm:inline">Cambiarte a Wasabi es más fácil que decir</span>{' '}
            <span className="text-red-500 line-through decoration-2 sm:decoration-4 decoration-red-500 relative block sm:inline mt-2 sm:mt-0">
              1berdr*la
              <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-red-500 opacity-50 rounded-full" />
            </span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto mb-16 sm:mb-20">
          <div className="relative">
            <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-[#A8FF00] via-[#96E600] to-[#A8FF00] opacity-30 rounded-full" />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`text-center relative group transform transition-all duration-700 ${
                    isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms`, minHeight: '350px' }}
                >
                  <div className="bg-gradient-to-r from-[#A8FF00] to-[#96E600] text-[#1A1A1A] w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-black mx-auto mb-6 sm:mb-8 relative z-10 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  
                  <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#A8FF00] relative overflow-hidden group-hover:-translate-y-2 h-full flex flex-col justify-between">
                    <div className="relative mb-6">
                      <div className={`text-white bg-gradient-to-br ${step.color} w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                        {step.icon}
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#1A1A1A] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed text-base sm:text-lg">
                        {step.description}
                      </p>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-br from-[#A8FF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl sm:rounded-3xl" />
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-32 -right-8 text-[#A8FF00]">
                      <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizedHowItWorks;
