import { Target, Eye, Rocket, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-semibold mb-4">
            <Award className="w-4 h-4" />
            SOBRE NÓS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tecnologia que transforma negócios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Somos especialistas em consórcio com foco em tecnologia e atendimento humanizado
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card rounded-2xl p-8 shadow-md border border-border hover:shadow-xl transition-all">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Nossa Missão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Facilitar a realização de sonhos através de consórcios inteligentes, combinando tecnologia e consultoria personalizada.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-md border border-border hover:shadow-xl transition-all">
            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Nossa Visão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser referência em consórcios através da inovação tecnológica e excelência no atendimento ao cliente.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-md border border-border hover:shadow-xl transition-all">
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
              <Rocket className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Nosso Diferencial</h3>
            <p className="text-muted-foreground leading-relaxed">
              Plataforma digital completa com simulações em tempo real, atendimento ágil e acompanhamento personalizado.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary via-primary/95 to-secondary rounded-3xl p-12 text-white">
          <div className="max-w-3xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Por que escolher a Intelligence Consórcio?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0" />
                <p className="text-lg">
                  <strong>Tecnologia de ponta:</strong> Simulações precisas e rápidas
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0" />
                <p className="text-lg">
                  <strong>Transparência total:</strong> Sem taxas ocultas ou surpresas
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0" />
                <p className="text-lg">
                  <strong>Atendimento personalizado:</strong> Suporte em cada etapa
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0" />
                <p className="text-lg">
                  <strong>Cartas contempladas:</strong> Acesso imediato ao seu bem
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
