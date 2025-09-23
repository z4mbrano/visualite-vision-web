import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send, CheckCircle, Clock, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    preferredTime: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const services = [
    "Consultas Oftalmológicas",
    "Óculos de Grau",
    "Óculos de Sol", 
    "Lentes de Contato",
    "Conserto de Óculos",
    "Outros"
  ];

  const timeSlots = [
    "Manhã (9h às 12h)",
    "Tarde (12h às 17h)",
    "Noite (17h às 19h)",
    "Não tenho preferência"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve. Obrigado!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        preferredTime: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato via WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="section-padding bg-secondary/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6 font-serif">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atender você! Agende sua consulta ou tire suas dúvidas. 
            Nossa equipe especializada está à sua disposição.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-border/50 animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome Completo *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Seu nome completo"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefone *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="(11) 99999-9999"
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  E-mail *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="seu@email.com"
                  required
                  className="w-full"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Serviço de Interesse *
                  </label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um serviço" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service, index) => (
                        <SelectItem key={index} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-foreground mb-2">
                    Horário Preferido
                  </label>
                  <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um horário" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot, index) => (
                        <SelectItem key={index} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Conte-nos como podemos ajudá-lo..."
                  rows={4}
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-hero w-full"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full w-5 h-5 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-in space-y-8">
            {/* Quick Contact */}
            <div className="bg-gradient-card border border-border/50 rounded-xl p-6 shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-6 font-serif">Fale Conosco Agora</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-success-light rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">WhatsApp</div>
                    <div className="text-muted-foreground">(51) 99123-4567</div>
                  </div>
                </div>

                <a
                  href="https://wa.me/5551991234567?text=Olá! Gostaria de agendar uma consulta na Visualité"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent w-full block text-center"
                >
                  Chamar no WhatsApp
                </a>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-card border border-accent/20 rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-primary mb-4 font-serif">Por que escolher a Visualité?</h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">Resposta rápida em até 2 horas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">Agendamento online facilitado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">Equipe especializada e experiente</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">Localização privilegiada</span>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">Horários Especiais</h4>
                  <p className="text-muted-foreground text-sm mb-3">
                    Oferecemos horários estendidos para sua conveniência:
                  </p>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Seg-Sex:</span>
                      <span className="font-medium text-foreground">9h às 19h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sábados:</span>
                      <span className="font-medium text-foreground">9h às 17h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Domingos:</span>
                      <span className="font-medium text-foreground">10h às 16h</span>
                    </div>
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

export default Contact;