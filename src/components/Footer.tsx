import { Mail, MapPin, Phone } from "lucide-react";
import logoFull from "@/assets/logo-full.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <img src={logoFull} alt="Intelligence Consórcio" className="h-12 mb-4" />
            <p className="text-white/80 mb-4">
              Tecnologia que transforma negócios. Realizando sonhos através de consórcios inteligentes.
            </p>
            <p className="text-sm text-white/60">
              © 2024 Intelligence Consórcio. Todos os direitos reservados.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <button onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("simulator")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">
                  Simulador
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">
                  Sobre
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("cards")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">
                  Cartas Contempladas
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>(47) 98916-5481</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="break-all">intelligenceconsorcio@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Rua Miguel Kuninfas, nº 233 – Itajaí, SC</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6">
          <p className="text-center text-white/60 text-sm">
            Desenvolvido com tecnologia e inovação para oferecer a melhor experiência em consórcios.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
