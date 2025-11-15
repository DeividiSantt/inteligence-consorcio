import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Atenção",
        description: "Preencha todos os campos obrigatórios",
        variant: "destructive",
      });
      return;
    }

    const whatsappMessage = `Olá!%0A%0ANome: ${formData.name}%0AE-mail: ${formData.email}%0ATelefone: ${formData.phone || "Não informado"}%0A%0AMensagem: ${formData.message}`;
    
    window.open(`https://wa.me/5547989165481?text=${whatsappMessage}`, "_blank");
    
    toast({
      title: "Mensagem enviada!",
      description: "Redirecionando para o WhatsApp...",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-12 md:py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4 md:px-0">
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-semibold mb-4">
            <Send className="w-4 h-4" />
            CONTATO
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Entre em contato conosco
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Estamos prontos para ajudar você a realizar seus objetivos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="contact-name">Nome completo *</Label>
                <Input
                  id="contact-name"
                  type="text"
                  placeholder="Digite seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="contact-email">E-mail *</Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="contact-phone">Telefone / WhatsApp</Label>
                <Input
                  id="contact-phone"
                  type="tel"
                  placeholder="(47) 98916-5481"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="contact-message">Mensagem *</Label>
                <Textarea
                  id="contact-message"
                  placeholder="Como podemos ajudar você?"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                <Send className="mr-2 w-5 h-5" />
                Enviar mensagem
              </Button>
            </form>
          </div>

          <div className="space-y-6 w-full">
            <div className="bg-card rounded-2xl p-6 shadow-md border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Endereço</h3>
                  <p className="text-muted-foreground">
                    Rua Miguel Kuninfas, nº 233<br />
                    Itajaí, SC
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-md border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Telefone</h3>
                  <p className="text-muted-foreground">
                    (47) 98916-5481
                  </p>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-secondary hover:text-secondary/80"
                    onClick={() => window.open("https://wa.me/5547989165481", "_blank")}
                  >
                    Abrir no WhatsApp
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-md border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">E-mail</h3>
                  <p className="text-muted-foreground break-words text-sm md:text-base">
                    intelligenceconsorcio@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 border border-primary/20">
              <h3 className="font-bold text-foreground mb-3">Horário de Atendimento</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 9h às 13h</p>
                <p className="text-sm mt-2">* Atendimento via WhatsApp disponível 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;