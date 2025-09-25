import React from 'react';
import { Clock, MessageCircle, Shield, Award, Settings, Star } from 'lucide-react';

const Differentials = () => {
  const differentials = [
    {
      icon: Clock,
      title: "Conserto Express",
      description: "Reparos em até 30 minutos para sua comodidade e praticidade",
      highlight: "30 min"
    },
    {
      icon: MessageCircle,
      title: "Atendimento 24h",
      description: "Suporte online sempre disponível via WhatsApp",
      highlight: "24/7"
    },
    {
      icon: Shield,
      title: "Garantia Estendida",
      description: "12 meses de garantia em todos os produtos",
      highlight: "12 meses"
    },
    {
      icon: Award,
      title: "Certificação ISO",
      description: "Qualidade internacional certificada",
      highlight: "ISO"
    },
    {
      icon: Settings,
      title: "Tecnologia de Ponta",
      description: "Equipamentos modernos e tecnologia avançada",
      highlight: "Hi-Tech"
    },
    {
      icon: Star,
      title: "Longa Experiência",
      description: "Mais de 15 anos cuidando da sua visão",
      highlight: "15+ anos"
    }
  ];

  return (
    <section id="diferenciais" className="section-padding bg-secondary/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6 font-serif">
            Nossos Diferenciais
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            O que nos torna únicos no mercado óptico e por que milhares de clientes confiam na Visualité para cuidar da sua visão.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((differential, index) => (
            <div 
              key={index} 
              className="card-differential group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="icon-container-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <differential.icon className="w-6 h-6 text-accent group-hover:text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-primary font-serif">
                      {differential.title}
                    </h3>
                    <span className="text-sm font-bold text-accent bg-accent-light px-2 py-1 rounded-full">
                      {differential.highlight}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {differential.description}
                  </p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg"></div>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-16 text-center hidden md:block">
          <div className="inline-flex items-center space-x-6 bg-white rounded-2xl p-6 shadow-lg border border-accent/20">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
              <span className="text-foreground font-medium">Certificação ISO Ativa</span>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
              <span className="text-foreground font-medium">Atendimento Online</span>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
              <span className="text-foreground font-medium">Tecnologia Avançada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;