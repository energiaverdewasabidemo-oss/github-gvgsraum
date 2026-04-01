import React, { useEffect, useState, useRef } from 'react';
import { Check, Zap, Users, FileText, Leaf, TrendingUp } from 'lucide-react';

const OptimizedBenefits = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const benefits = [
    {
      icon: <Leaf className="h-10 w-10" />,
      title: "Energía verde de verdad",
      description: "100% renovable con garantía de origen certificada. Contribuyes activamente a la sostenibilidad del planeta.",
      color: "from-emerald-400 to-green-500",
      bgColor: "from-emerald-50 to-green-100"
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: "Precios indexados: pagas lo que vale, ni un euro más",
      description: "Transparencia total. Pagas el precio real del mercado energético sin márgenes ocultos.",
      color: "from-blue-400 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-100"
    },
    {
      icon: <FileText className="h-10 w-10" />,
      title: "Sin letra pequeña",
      description: "Contratos claros y transparentes. Todo comprensible desde el primer día, sin cláusulas abusivas.",
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-50 to-pink-100"
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Atención humana, de verdad",
      description: "Equipo humano especializado que entiende tus necesidades energéticas específicas. Nada de robots.",
      color: "from-orange-400 to-red-500",
      bgColor: "from-orange-50 to-red-100"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            benefits.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="beneficios" 
      ref={sectionRef}
      className="py-32 relative overflow-hidden bg-[#F5F5F0]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-3 bg-[#A8FF00]/20 px-8 py-4 rounded-full mb-8 border border-[#A8FF00]/50">
            <Check className="h-6 w-6 text-[#1A1A1A]" />
            <span className="text-[#1A1A1A] font-bold text-xl">Por qué cambiarte</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#1A1A1A] mb-8 leading-tight">
            La luz no tiene por qué ser{' '}
            <span className="text-red-500 line-through decoration-4 decoration-red-500 relative">
              un lío
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-red-500 opacity-50 rounded-full" />
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-2xl text-gray-600 leading-relaxed mb-8">
              Llevas años pagando facturas que no entiendes, con subidas que nadie te avisa, 
              hablando con máquinas y sin saber qué estás pagando.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`group relative transform transition-all duration-700 ${
                visibleCards.includes(index) 
                  ? 'translate-y-0 opacity-100 scale-100' 
                  : 'translate-y-20 opacity-0 scale-95'
              }`}
            >
              <div className="relative bg-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-[#A8FF00] hover:-translate-y-4 overflow-hidden h-full shadow-md">
                
                <div className="relative mb-8">
                  <div className={`bg-gradient-to-br ${benefit.color} w-20 h-20 rounded-3xl flex items-center justify-center text-white mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {benefit.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6 group-hover:text-[#1A1A1A] transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed text-lg">
                  {benefit.description}
                </p>

                <div className="absolute inset-0 bg-gradient-to-br from-[#A8FF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              </div>

              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#A8FF00] rounded-full flex items-center justify-center text-[#1A1A1A] opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 shadow-xl">
                <Check className="h-6 w-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OptimizedBenefits;
