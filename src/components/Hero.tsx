import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Clock, Award } from 'lucide-react';
import heroImage from '@/assets/hero-glasses.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Óculos elegantes da Visualité"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-container">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif leading-tight">
            Sua Visão é Nossa
            <span className="block text-gradient-accent">Prioridade</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl">
            Na Visualité, combinamos tecnologia de ponta com atendimento humanizado para cuidar da sua saúde visual com excelência e precisão.
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center space-x-2 text-white/90">
              <Shield className="w-5 h-5 text-accent" />
              <span className="font-medium">Certificação ISO</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <Clock className="w-5 h-5 text-accent" />
              <span className="font-medium">Conserto Express</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <Award className="w-5 h-5 text-accent" />
              <span className="font-medium">Garantia 12 Meses</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => scrollToSection('contato')}
              className="btn-hero group"
            >
              Agendar Consulta
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              onClick={() => scrollToSection('servicos')}
              variant="outline"
              className="btn-outline border-white text-primary"
            >
              Nossos Serviços
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;