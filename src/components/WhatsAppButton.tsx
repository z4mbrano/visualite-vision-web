import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show button after page loads
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip for first time visitors
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(true);
        // Auto hide tooltip after 5 seconds
        const hideTimer = setTimeout(() => {
          setShowTooltip(false);
        }, 5000);
        return () => clearTimeout(hideTimer);
      }, 2000);
      return () => clearTimeout(tooltipTimer);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de agendar uma consulta na Visualité. Podem me ajudar?"
    );
    const whatsappUrl = `https://wa.me/5551991234567?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleTooltipClose = () => {
    setShowTooltip(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 animate-scale-in">
        <button
          onClick={handleWhatsAppClick}
          className="group relative bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
          aria-label="Falar no WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
          
          {/* Pulse Animation */}
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-30"></div>
          
          {/* Hover Text */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
              Falar no WhatsApp
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </button>
      </div>

      {/* Welcome Tooltip */}
      {showTooltip && (
        <div className="fixed bottom-24 right-6 z-50 animate-fade-in">
          <div className="bg-white border border-border/50 rounded-xl p-4 shadow-xl max-w-sm">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm">Visualité</div>
                  <div className="text-muted-foreground text-xs">Online agora</div>
                </div>
              </div>
              <button
                onClick={handleTooltipClose}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <p className="text-muted-foreground text-sm mb-3">
              Olá! 👋 Precisa de ajuda com seus óculos ou quer agendar uma consulta? 
              Estamos aqui para ajudar!
            </p>
            
            <button
              onClick={handleWhatsAppClick}
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full"
            >
              Iniciar Conversa
            </button>
          </div>
          
          {/* Arrow pointing to WhatsApp button */}
          <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r border-b border-border/50 transform rotate-45"></div>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;