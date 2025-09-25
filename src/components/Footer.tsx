import React from 'react';
import { MapPin, Phone, Mail, Clock, Shield, Award } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="section-container section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl font-serif">V</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-serif">Visualité</h3>
                <p className="text-white/70 text-sm">Sua Visão é Nossa Prioridade</p>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              Há mais de 15 anos cuidando da saúde visual de nossos clientes com tecnologia avançada, 
              atendimento humanizado e certificação internacional.
            </p>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-white/70 text-sm">Certificação ISO</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-accent" />
                <span className="text-white/70 text-sm">15+ Anos</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 font-serif">Links Rápidos</h4>
            <div className="space-y-3">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="block text-white/80 hover:text-accent transition-colors text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="block text-white/80 hover:text-accent transition-colors text-left"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="block text-white/80 hover:text-accent transition-colors text-left"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('diferenciais')}
                className="block text-white/80 hover:text-accent transition-colors text-left"
              >
                Diferenciais
              </button>
              <button 
                onClick={() => scrollToSection('localizacao')}
                className="block text-white/80 hover:text-accent transition-colors text-left"
              >
                Localização
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="block text-white/80 hover:text-accent transition-colors text-left"
              >
                Contato
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 font-serif">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white/90">Avenida Paulista, 1000</div>
                  <div className="text-white/70 text-sm">Bela Vista - São Paulo, SP</div>
                  <div className="text-white/70 text-sm">CEP: 01310-100</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <div>
                  <div className="text-white/90">(51) 98922-8808</div>
                  <div className="text-white/70 text-sm">WhatsApp disponível 24h</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <div className="text-white/90 text-sm">visualiteotica@gmail.com</div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-xl font-bold mb-6 font-serif">Horários</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 text-sm">Seg - Sex:</span>
                    <span className="text-white/90 font-medium text-sm">9h às 19h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 text-sm">Sábados:</span>
                    <span className="text-white/90 font-medium text-sm">9h às 17h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 text-sm">Domingos:</span>
                    <span className="text-white/90 font-medium text-sm">10h às 16h</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-3 mt-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-accent font-medium text-sm">Atendimento Online</span>
                </div>
                <p className="text-white/70 text-xs">
                  Suporte 24h via WhatsApp para emergências e dúvidas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/70 text-sm">
              © 2024 Visualité - Todos os direitos reservados
            </div>
            
            <div className="flex items-center space-x-6 text-white/70 text-sm">
              <span>Desenvolvido com ❤️ para sua visão</span>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>ISO Certificado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;