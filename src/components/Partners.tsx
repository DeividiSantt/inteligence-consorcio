import { Building2 } from "lucide-react";
import vkn from "@/assets/partners/vkn.webp";
import zema from "@/assets/partners/zema.png";
import volkswagen from "@/assets/partners/volkswagen.png";
import chevrolet from "@/assets/partners/chevrolet.png";
import bancoBrasil from "@/assets/partners/banco-brasil.png";
import cnp from "@/assets/partners/cnp.png";
import bradesco from "@/assets/partners/bradesco.png";
import portoSeguro from "@/assets/partners/porto-seguro.png";
import santander from "@/assets/partners/santander.png";
import itau from "@/assets/partners/itau.png";

const Partners = () => {
  const partners = [
    { name: "VKN", logo: vkn },
    { name: "Zema", logo: zema },
    { name: "Volkswagen", logo: volkswagen },
    { name: "Chevrolet", logo: chevrolet },
    { name: "Banco do Brasil", logo: bancoBrasil },
    { name: "CNP", logo: cnp },
    { name: "Bradesco", logo: bradesco },
    { name: "Porto Seguro", logo: portoSeguro },
    { name: "Santander", logo: santander },
    { name: "Itaú", logo: itau },
  ];

  return (
    <section id="partners" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-semibold mb-4">
            <Building2 className="w-4 h-4" />
            NOSSOS PARCEIROS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trabalhamos com as melhores marcas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Parceiros confiáveis que garantem qualidade e segurança em cada consórcio
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-xl transition-all flex items-center justify-center h-32"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-20 object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
