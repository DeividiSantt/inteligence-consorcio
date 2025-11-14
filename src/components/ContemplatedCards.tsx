import { Button } from "@/components/ui/button";
import { Home, Car, Truck, Bike, Star, CheckCircle } from "lucide-react";

const ContemplatedCards = () => {
  const cards = [
    {
      icon: Home,
      title: "Imóveis",
      description: "Apartamentos e casas prontos para morar",
      value: "A partir de R$ 150.000",
      benefits: ["Documentação facilitada", "Entrada reduzida", "Processo rápido"],
    },
    {
      icon: Car,
      title: "Carros",
      description: "Carros 0km e seminovos disponíveis",
      value: "A partir de R$ 40.000",
      benefits: ["Escolha sua marca", "Sem burocracia", "Liberação imediata"],
    },
    {
      icon: Bike,
      title: "Motos",
      description: "Motos 0km e seminovas disponíveis",
      value: "A partir de R$ 15.000",
      benefits: ["Várias marcas", "Processo rápido", "Aprovação facilitada"],
    },
    {
      icon: Truck,
      title: "Caminhões",
      description: "Frota para seu negócio crescer",
      value: "A partir de R$ 200.000",
      benefits: ["Ideal para empresas", "Condições especiais", "Suporte completo"],
    },
  ];

  return (
    <section id="cards" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 text-sm font-semibold mb-4">
            <Star className="w-4 h-4" />
            CARTAS CONTEMPLADAS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Realize seu sonho hoje mesmo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cartas contempladas disponíveis para compra imediata. Sem sorteios, sem espera.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-lg border border-border hover:shadow-2xl transition-all overflow-hidden group"
            >
              <div className="bg-gradient-to-br from-primary to-secondary p-8 text-white">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <card.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <p className="text-white/90 mb-4">{card.description}</p>
                <p className="text-xl font-bold">{card.value}</p>
              </div>

              <div className="p-6 space-y-3">
                {card.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 pt-0">
                <Button
                  className="w-full bg-accent hover:bg-accent/90"
                  onClick={() => {
                    window.open(
                      `https://wa.me/5547989165481?text=Olá!%20Tenho%20interesse%20em%20carta%20contemplada%20de%20${card.title}`,
                      "_blank"
                    );
                  }}
                >
                  Consultar Disponibilidade
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            As cartas contempladas estão sujeitas à disponibilidade. Entre em contato para verificar as opções atuais.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContemplatedCards;
