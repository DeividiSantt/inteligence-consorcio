import { Card } from "@/components/ui/card";
import { Home, Car, Truck, Zap } from "lucide-react";
import carImage from "@/assets/car-image.jpg";
import houseImage from "@/assets/house-image.jpg";
import truckImage from "@/assets/truck-image.jpg";

const ConsortiumShowcase = () => {
  const showcaseItems = [
    {
      icon: Car,
      title: "Carros e Motos",
      image: carImage,
      description: "Conquiste o veículo dos seus sonhos",
    },
    {
      icon: Home,
      title: "Imóveis",
      image: houseImage,
      description: "Realize o sonho da casa própria",
    },
    {
      icon: Truck,
      title: "Caminhões",
      image: truckImage,
      description: "Expanda seu negócio com qualidade",
    },
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent rounded-full px-4 py-2 text-sm font-semibold mb-4">
            <Zap className="w-4 h-4" />
            TECNOLOGIA QUE TRANSFORMA NEGÓCIOS!
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tipos de Consórcio Disponíveis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o consórcio ideal para realizar seus objetivos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-white/90">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsortiumShowcase;
