import React from 'react';
import { Eye, Glasses, Sun, Contact } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Eye,
      title: "Consultas Oftalmológicas",
      description: "Exames completos com equipamentos de última geração para diagnóstico preciso e tratamento adequado da sua saúde visual.",
      features: ["Exame de refração", "Fundo de olho", "Tonometria", "Biomicroscopia"]
    },
    {
      icon: Glasses,
      title: "Óculos de Grau",
      description: "Ampla variedade de armações modernas e lentes de alta qualidade para proporcionar conforto e estilo no seu dia a dia.",
      features: ["Armações premium", "Lentes multifocais", "Tratamentos especiais", "Ajuste personalizado"]
    },
    {
      icon: Sun,
      title: "Óculos de Sol",
      description: "Proteção UV completa com design elegante. Temos as melhores marcas e modelos para todas as ocasiões e estilos.",
      features: ["Proteção UV 100%", "Lentes polarizadas", "Marcas exclusivas", "Modelos esportivos"]
    },
    {
      icon: Contact,
      title: "Lentes de Contato",
      description: "Soluções em lentes de contato para todas as necessidades, incluindo orientação profissional para uso seguro e confortável.",
      features: ["Lentes diárias", "Multifocais", "Coloridas", "Acompanhamento médico"]
    }
  ];

  return (
    <section id="servicos" className="section-padding">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6 font-serif">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços especializados em saúde visual, 
            sempre com a mais alta qualidade e tecnologia avançada.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card-service group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="icon-container group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>
              
              <h3 className="text-2xl font-bold text-primary mb-4 font-serif group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card border border-accent/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4 font-serif">
              Precisa de um serviço específico?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe especializada está pronta para atender suas necessidades visuais com soluções personalizadas.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contato');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-accent"
            >
              Entre em Contato
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;