import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import logoImage from '@/assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border/50">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 text-sm">
        <div className="section-container flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>(51) 99123-4567</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Av. Paulista, 1000 - São Paulo</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Atendimento 24h via WhatsApp</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="section-container py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg overflow-hidden">
              <img 
                src={logoImage} 
                alt="Visualité Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gradient-primary font-serif">Visualité</h1>
              <p className="text-sm text-muted-foreground">Sua Visão é Nossa Prioridade</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('diferenciais')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Diferenciais
            </button>
            <button 
              onClick={() => scrollToSection('localizacao')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Localização
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => scrollToSection('contato')}
              className="btn-hero"
            >
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-secondary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border/50 pt-4">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-left px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('diferenciais')}
                className="text-left px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Diferenciais
              </button>
              <button 
                onClick={() => scrollToSection('localizacao')}
                className="text-left px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Localização
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left px-3 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Contato
              </button>
              <div className="pt-3">
                <Button 
                  onClick={() => scrollToSection('contato')}
                  className="btn-hero w-full"
                >
                  Agendar Consulta
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;