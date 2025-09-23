import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Location = () => {
  const schedules = [
    { day: "Segunda a Sexta", hours: "9h às 19h" },
    { day: "Sábados", hours: "9h às 17h" },
    { day: "Domingos", hours: "10h às 16h" }
  ];

  return (
    <section id="localizacao" className="section-padding">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6 font-serif">
            Nossa Localização
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos estrategicamente localizados na Avenida Paulista, no coração de São Paulo, 
            com fácil acesso e estacionamento disponível.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Map */}
          <div className="animate-fade-in">
            <div className="bg-gradient-card border border-border/50 rounded-2xl p-2 shadow-lg">
              <div className="relative h-96 bg-muted rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0657749511424!2d-46.65844892494843!3d-23.561684978779353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt!2sbr!4v1695000000000!5m2!1spt!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                  title="Localização da Visualité na Avenida Paulista"
                ></iframe>
                
                {/* Location Pin Overlay */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <div className="bg-primary text-white p-3 rounded-full shadow-lg animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Information */}
          <div className="animate-slide-in space-y-8">
            {/* Address */}
            <div className="bg-gradient-card border border-border/50 rounded-xl p-6 shadow-md">
              <div className="flex items-start space-x-4">
                <div className="icon-container-accent">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2 font-serif">Endereço</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Avenida Paulista, 1000</p>
                    <p>Bela Vista - São Paulo, SP</p>
                    <p>CEP: 01310-100</p>
                    <p className="text-accent font-medium">Galeria Shopping Center - Loja 142</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-gradient-card border border-border/50 rounded-xl p-6 shadow-md">
              <div className="flex items-start space-x-4">
                <div className="icon-container-accent">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4 font-serif">Horários de Funcionamento</h3>
                  <div className="space-y-3">
                    {schedules.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-muted-foreground">{schedule.day}:</span>
                        <span className="font-medium text-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                      <span className="text-success font-medium">Atendimento online 24h via WhatsApp</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Quick Info */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-card border border-border/50 rounded-xl p-4 shadow-md">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <div>
                    <div className="text-sm text-muted-foreground">Telefone</div>
                    <div className="font-medium text-foreground">(51) 99123-4567</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-card border border-border/50 rounded-xl p-4 shadow-md">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <div>
                    <div className="text-sm text-muted-foreground">E-mail</div>
                    <div className="font-medium text-foreground text-sm">guilherrme.bohn@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <div className="text-center">
                <h4 className="font-bold text-primary mb-2">Como Chegar?</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Estamos no coração da Avenida Paulista, com fácil acesso por metrô, ônibus e carro.
                </p>
                <a
                  href="https://maps.google.com/?q=Avenida+Paulista+1000+São+Paulo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent inline-block"
                >
                  Ver Rotas no Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;