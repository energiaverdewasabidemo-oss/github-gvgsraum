import React, { useEffect, useState } from 'react';
import { ArrowRight, Shield, Leaf, TrendingDown, Award, Zap, Sparkles, Star } from 'lucide-react';

const OptimizedHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F5F5F0]">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-20 pb-8">
        <div className="max-w-6xl mx-auto">

          {/* LOGO */}
          <div className={`mb-12 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative inline-block group">
              
              <div className="relative bg-white p-16 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 overflow-hidden transform-gpu border-4 border-[#A8FF00]">
                
                {/* Efecto de brillo al hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A8FF00]/30 to-transparent -skew-x-12 transform translate-x-[-200%] group-hover:translate-x-[300%] transition-transform duration-1000 ease-out"></div>
                
                {/* Rayos en esquinas al hover */}
                <div className="absolute -top-4 -left-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce">
                  <Zap className="h-8 w-8 text-[#A8FF00]" />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce" style={{animationDelay: '0.2s'}}>
                  <Sparkles className="h-8 w-8 text-[#A8FF00]" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce" style={{animationDelay: '0.4s'}}>
                  <Star className="h-8 w-8 text-[#A8FF00]" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce" style={{animationDelay: '0.6s'}}>
                  <Zap className="h-8 w-8 text-[#A8FF00]" />
                </div>
                
                {/* Logo */}
                <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src="/wasabi-logo-main.png"
                    alt="Energía Verde Wasabi"
                    className="h-32 w-auto relative z-10 transition-all duration-500"
                    style={{
                      maxWidth: '400px',
                      objectFit: 'contain',
                      filter: 'contrast(2.0) brightness(1.4) saturate(1.6) drop-shadow(0 8px 20px rgba(0,0,0,0.2))'
                    }}
                  />
                </div>
                
                {/* Borde animado */}
                <div className="absolute inset-0 rounded-3xl border-4 border-[#A8FF00] opacity-100 group-hover:border-[#96E600] transition-all duration-500"></div>
              </div>
              
              {/* Resplandor exterior sutil */}
              <div className="absolute -inset-8 bg-[#A8FF00]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            </div>
          </div>

          {/* Headline */}
          <h1 className={`text-4xl sm:text-5xl lg:text-7xl font-black text-[#1A1A1A] mb-8 leading-tight transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            ¿Pagas la luz sin saber{' '}
            <span className="bg-gradient-to-r from-[#6BBF00] via-[#5AAF00] to-[#6BBF00] bg-clip-text text-transparent">
              cuánto te clavan
            </span>
            <span className="text-6xl">?</span>
          </h1>

          {/* Subtítulo */}
          <div className={`text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-16 leading-relaxed max-w-5xl mx-auto transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="mb-6">
              Bienvenido a{' '}
              <strong className="text-3xl font-black bg-gradient-to-r from-[#6BBF00] to-[#5AAF00] bg-clip-text text-transparent">
                Energía Verde Wasabi
              </strong>
              :{' '}
            </p>
            <p className="text-xl">
              energía 100% renovable, sin trampas, sin robots y hasta{' '}
              <strong className="text-[#6BBF00] text-3xl font-black">120 € al año</strong>
              {' '}por cambiarte con nosotros.
            </p>
          </div>

          {/* Beneficios */}
          <div className={`flex flex-wrap justify-center gap-6 mb-16 transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {[
              { icon: Shield, text: "Sin permanencia", color: "from-green-400 to-emerald-500" },
              { icon: Leaf, text: "100% renovable", color: "from-blue-400 to-cyan-500" },
              { icon: TrendingDown, text: "Precios justos", color: "from-purple-400 to-pink-500" },
              { icon: Award, text: "Certificado", color: "from-orange-400 to-red-500" }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="group flex items-center space-x-3 bg-white px-6 py-3 rounded-full border border-gray-200 hover:border-[#A8FF00] transition-all duration-300 hover:scale-110 hover:shadow-md shadow-sm"
              >
                <div className={`p-2 rounded-lg bg-gradient-to-r ${benefit.color} group-hover:scale-125 transition-transform duration-300`}>
                  <benefit.icon className="h-5 w-5 text-white" />
                </div>
                <span className="text-[#1A1A1A] font-semibold group-hover:text-[#1A1A1A] transition-colors">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={`transform transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button
              onClick={scrollToContact}
              className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-[#A8FF00] to-[#96E600] text-[#1A1A1A] px-12 py-6 rounded-full text-2xl font-black hover:shadow-2xl hover:shadow-[#A8FF00]/40 transition-all duration-500 transform hover:scale-110 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#96E600] to-[#A8FF00] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 text-2xl">👉 Quiero pagar lo justo</span>
              <ArrowRight className="relative z-10 h-7 w-7 transition-transform group-hover:translate-x-2 group-hover:scale-125" />
            </button>
          </div>

          {/* Trust indicators */}
          <div className={`mt-12 transform transition-all duration-1000 delay-1200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-wrap justify-center gap-8 text-gray-500 text-lg">
              {["Sin compromiso", "Sin letra pequeña", "Atención humana"].map((text, index) => (
                <span 
                  key={index}
                  className="relative px-4 py-2 rounded-full bg-white border border-gray-200 hover:border-[#A8FF00]/50 hover:text-[#1A1A1A] transition-all duration-300 hover:scale-105 shadow-sm"
                >
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div 
          className="w-8 h-14 border-2 border-[#A8FF00] rounded-full flex justify-center cursor-pointer hover:shadow-lg hover:shadow-[#A8FF00]/30 transition-all duration-300 hover:scale-110"
          onClick={() => document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="w-2 h-4 bg-[#A8FF00] rounded-full mt-3 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default OptimizedHero;
