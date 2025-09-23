import React from 'react';
import { Award, Users, Clock, Shield } from 'lucide-react';
import eyeExamImage from '@/assets/eye-exam.jpg';

const About = () => {
  const stats = [
    { icon: Users, number: "15+", label: "Anos de Experiência" },
    { icon: Award, number: "ISO", label: "Certificação Internacional" },
    { icon: Clock, number: "24h", label: "Atendimento Online" },
    { icon: Shield, number: "12", label: "Meses de Garantia" },
  ];

  return (
    <section id="sobre" className="section-padding bg-secondary/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6 font-serif">
              Sobre a Visualité
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Com mais de 15 anos de experiência no mercado óptico, a <strong>Visualité</strong> é referência em cuidados visuais na cidade de São Paulo. Nossa missão é proporcionar a melhor experiência em saúde visual, combinando tecnologia avançada com atendimento personalizado.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Certificados com padrão ISO internacional, garantimos qualidade excepcional em todos os nossos produtos e serviços. Nossa equipe especializada está sempre pronta para oferecer soluções personalizadas para suas necessidades visuais.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-foreground font-medium">Tecnologia de ponta em equipamentos oftalmológicos</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-foreground font-medium">Atendimento humanizado e personalizado</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-foreground font-medium">Produtos de alta qualidade com garantia estendida</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-foreground font-medium">Localização privilegiada na Avenida Paulista</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="icon-container-accent mx-auto mb-3 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <stat.icon className="w-6 h-6 text-accent group-hover:text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary font-serif">{stat.number}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <img 
                src={eyeExamImage}
                alt="Equipamentos modernos de exame oftalmológico"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
              
              {/* Certificate Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg border border-border/50">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent-light rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-bold text-primary">Certificação ISO</div>
                    <div className="text-sm text-muted-foreground">Qualidade Internacional</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;