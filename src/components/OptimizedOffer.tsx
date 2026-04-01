import React, { useEffect, useState, useRef } from 'react';
import { Euro, Zap, Building, Award, TrendingUp, Gift } from 'lucide-react';

const OptimizedOffer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const offers = [
    {
      icon: <Zap className="h-12 w-12" />,
      amount: "30",
      symbol: "%",
      title: "en el consumo anual por traer tu luz",
      description: "Ahorra un 30% en tu consumo anual al cambiar tu suministro eléctrico a energía 100% renovable certificada",
      color: "from-yellow-400 to-orange-500",
      target: 30
    },
    {
      icon: <Zap className="h-12 w-12" />,
      amount: "30",
      symbol: "%",
      title: "en el consumo anual por traer tu gas",
      description: "Ahorra un 30% adicional en tu consumo anual al contratar también nuestro suministro de gas natural",
      color: "from-blue-400 to-cyan-500",
      target: 30
    },
    {
      icon: <Building className="h-12 w-12" />,
      amount: "30",
      symbol: "%",
      title: "de descuento en consumo si tienes un negocio",
      description: "Tarifa especial para pequeñas y medianas empresas con consumo optimizado",
      color: "from-purple-400 to-pink-500",
      target: 30
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="oferta"
      ref={sectionRef}
      className="py-32 relative overflow-hidden bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-4 bg-[#A8FF00]/20 px-10 py-5 rounded-full mb-10 border border-[#A8FF00]/50">
            <Gift className="h-8 w-8 text-[#1A1A1A]" />
            <span className="text-[#1A1A1A] font-black text-2xl">Nuestra oferta</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black text-[#1A1A1A] mb-12 leading-tight">
            💶{' '}
            <span className="bg-gradient-to-r from-[#6BBF00] to-[#5AAF00] bg-clip-text text-transparent">
              Cambiarte tiene premio
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {offers.map((offer, index) => (
            <div 
              key={index}
              className={`group relative transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative bg-[#F5F5F0] border border-gray-200 rounded-3xl p-10 text-center hover:border-[#A8FF00] transition-all duration-500 hover:shadow-2xl hover:shadow-[#A8FF00]/20 hover:-translate-y-4 overflow-hidden h-full shadow-md">
                
                <div className="relative mb-10">
                  <div className={`bg-gradient-to-br ${offer.color} w-24 h-24 rounded-3xl flex items-center justify-center text-white mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {offer.icon}
                  </div>
                </div>

                <div className="relative mb-8">
                  <div className="text-7xl font-black text-[#A8FF00] mb-4" style={{textShadow: '0 2px 4px rgba(0,0,0,0.15)'}}>
                    {offer.amount}
                    <span className="text-5xl ml-2">{offer.symbol}</span>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-[#1A1A1A] mb-6">
                  {offer.title}
                </h3>
                
                <p className="text-gray-500 text-xl leading-relaxed">
                  {offer.description}
                </p>

                <div className="absolute inset-0 bg-gradient-to-br from-[#A8FF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              </div>

              <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-r from-[#A8FF00] to-[#96E600] rounded-full flex items-center justify-center text-[#1A1A1A] opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 shadow-2xl">
                <Euro className="h-10 w-10" />
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-[#A8FF00]/10 border border-[#A8FF00]/30 rounded-3xl p-8 text-center max-w-4xl mx-auto">
            <p className="text-gray-600 text-lg leading-relaxed">
              (Energía 100% renovable, con garantía de origen y sin permanencia)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizedOffer;
