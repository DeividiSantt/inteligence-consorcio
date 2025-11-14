import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

const Consultant = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-gradient-to-br from-primary via-primary/95 to-secondary rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-12">
            <div className="text-white space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <MessageCircle className="w-4 h-4" />
                ATENDIMENTO ESPECIALIZADO
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold">
                Fale com nossos consultores
              </h2>
              
              <p className="text-white/90 text-lg">
                Nossa equipe está pronta para ajudar você a realizar seus objetivos através do consórcio ideal.
              </p>
              
              <div className="space-y-4">
                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70">WhatsApp / Telefone</p>
                      <p className="font-semibold">(47) 98916-5481</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70">E-mail</p>
                      <p className="font-semibold break-all">intelligenceconsorcio@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-white/70">Endereço</p>
                      <p className="font-semibold">Rua Miguel Kuninfas, nº 233 – Itajaí, SC</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">Atendimento Personalizado</h3>
                <p className="text-white/80 mb-4">
                  Tire suas dúvidas e receba orientação especializada para escolher o melhor consórcio para você.
                </p>
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-white"
                  size="lg"
                  onClick={() => {
                    window.open(
                      "https://wa.me/5547989165481?text=Olá!%20Gostaria%20de%20falar%20com%20um%20consultor%20sobre%20consórcio.",
                      "_blank"
                    );
                  }}
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Falar no WhatsApp
                </Button>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">Envie um E-mail</h3>
                <p className="text-white/80 mb-4">
                  Prefere se comunicar por e-mail? Envie sua mensagem e retornaremos em breve.
                </p>
                <Button
                  variant="outline"
                  className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20"
                  size="lg"
                  onClick={() => {
                    window.location.href = "mailto:intelligenceconsorcio@gmail.com";
                  }}
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Enviar E-mail
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultant;
