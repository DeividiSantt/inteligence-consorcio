import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Zap } from "lucide-react";

const Hero = () => {
  const scrollToSimulator = () => {
    const element = document.getElementById("simulator");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative pt-36 pb-20 px-4 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary -z-10" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-30 -z-10" />
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm font-semibold shadow-lg">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-primary">Tecnologia que transforma negócios!</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900" style={{ textShadow: '2px 2px 4px rgba(255,255,255,0.5)' }}>
              Realize seus objetivos com o consórcio certo
            </h1>
            
            <p className="text-xl text-gray-800" style={{ textShadow: '1px 1px 2px rgba(255,255,255,0.5)' }}>
              Simule agora e descubra como conquistar seu imóvel, veículo ou caminhão de forma inteligente e planejada.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToSimulator}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all font-semibold"
              >
                Simular consórcio agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="bg-white border-2 border-white text-primary hover:bg-white/90 font-semibold shadow-lg"
                onClick={() => {
                  window.open("https://wa.me/5547989165481?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20consórcios.", "_blank");
                }}
              >
                Falar com consultor
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border-2 border-white hover:bg-white transition-all shadow-xl">
              <Shield className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-primary mb-2">Segurança garantida</h3>
              <p className="text-gray-700">Trabalhamos com as maiores administradoras do Brasil</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border-2 border-white hover:bg-white transition-all shadow-xl">
              <TrendingUp className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold text-secondary mb-2">Melhor investimento</h3>
              <p className="text-gray-700">Parcelas que cabem no seu bolso com previsibilidade total</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Developer Watermark */}
      <div className="mt-8 text-center">
        <a 
          href="https://davisantiagocode-solutions.web.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block text-sm text-white/60 hover:text-white/80 transition-colors bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
        >
          Developed by Davi Santiago Code Solutions
        </a>
      </div>
    </section>
  );
};

export default Hero;
