import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const ConsultantCTA = () => {
  return (
    <section className="py-8 md:py-12 px-4 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white mb-4">
          <MessageCircle className="w-4 h-4" />
          ATENDIMENTO PERSONALIZADO
        </div>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
          Fale com nossos consultores
        </h2>
        
        <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
          Tire suas dúvidas sobre consórcio de imóveis, carros, motos e caminhões com especialistas
        </p>
        
        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white shadow-xl text-base md:text-lg px-6 md:px-8 w-full sm:w-auto"
            onClick={() => {
              window.open(
                "https://wa.me/5547989165481?text=Olá!%20Gostaria%20de%20falar%20com%20um%20consultor%20sobre%20consórcio.",
                "_blank"
              );
            }}
          >
            <Phone className="mr-2 w-5 h-5" />
            Falar com Consultor Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConsultantCTA;
