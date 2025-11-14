import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Simulator = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    type: "",
    value: "",
    installments: "",
    name: "",
    whatsapp: "",
  });
  const [result, setResult] = useState<number | null>(null);

  const calculateInstallment = () => {
    const value = parseFloat(formData.value);
    const installments = parseInt(formData.installments);

    if (!value || !installments) {
      toast({
        title: "Erro",
        description: "Preencha todos os campos para simular",
        variant: "destructive",
      });
      return;
    }

    // Cálculo: (valor / parcelas) + (valor * 0.20 / parcelas) + (valor * 0.02 / parcelas)
    const baseInstallment = value / installments;
    const adminFee = (value * 0.20) / installments;
    const reserveFund = (value * 0.02) / installments;
    const totalInstallment = baseInstallment + adminFee + reserveFund;

    setResult(totalInstallment);
  };

  const sendToWhatsApp = () => {
    if (!formData.name || !formData.whatsapp || !result) {
      toast({
        title: "Atenção",
        description: "Complete a simulação antes de enviar",
        variant: "destructive",
      });
      return;
    }

    const message = `Olá! Meu nome é ${formData.name}.%0A%0ASimulação de Consórcio:%0ATipo: ${formData.type}%0AValor: R$ ${parseFloat(formData.value).toLocaleString('pt-BR')}%0AParcelas: ${formData.installments}x%0AValor da parcela: R$ ${result.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}%0A%0AGostaria de mais informações!`;
    
    window.open(`https://wa.me/5547989165481?text=${message}`, "_blank");
    
    toast({
      title: "Enviado!",
      description: "Redirecionando para o WhatsApp...",
    });
  };

  return (
    <section id="simulator" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary rounded-full px-4 py-2 text-sm font-semibold mb-4">
            <Calculator className="w-4 h-4" />
            SIMULADOR
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simule sua parcela em segundos
          </h2>
          <p className="text-lg text-muted-foreground">
            Descubra quanto você vai pagar mensalmente
          </p>
        </div>

        <div className="bg-card rounded-3xl shadow-lg p-8 border border-border">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <Label htmlFor="type">Tipo de Consórcio</Label>
              <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="imovel">Imóvel</SelectItem>
                  <SelectItem value="veiculo">Veículo</SelectItem>
                  <SelectItem value="caminhao">Caminhão</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="value">Valor do Bem (R$)</Label>
              <Input
                id="value"
                type="number"
                placeholder="Ex: 200000"
                value={formData.value}
                onChange={(e) => setFormData({ ...formData, value: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="installments">Número de Parcelas</Label>
              <Select value={formData.installments} onValueChange={(value) => setFormData({ ...formData, installments: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="60">60 meses</SelectItem>
                  <SelectItem value="80">80 meses</SelectItem>
                  <SelectItem value="100">100 meses</SelectItem>
                  <SelectItem value="120">120 meses</SelectItem>
                  <SelectItem value="150">150 meses</SelectItem>
                  <SelectItem value="180">180 meses</SelectItem>
                  <SelectItem value="200">200 meses</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="name">Seu Nome</Label>
              <Input
                id="name"
                type="text"
                placeholder="Digite seu nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="md:col-span-2">
              <Label htmlFor="whatsapp">WhatsApp (com DDD)</Label>
              <Input
                id="whatsapp"
                type="tel"
                placeholder="Ex: 47989165481"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              />
            </div>
          </div>

          <Button onClick={calculateInstallment} className="w-full bg-primary hover:bg-primary/90 mb-4" size="lg">
            <Calculator className="mr-2 w-5 h-5" />
            Calcular Parcela
          </Button>

          {result && (
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-6 mb-4 border-2 border-secondary/20">
              <p className="text-sm text-muted-foreground mb-2">Valor estimado da parcela:</p>
              <p className="text-4xl font-bold text-foreground mb-4">
                R$ {result.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
              <p className="text-sm text-muted-foreground">
                * Valores aproximados. Taxa de administração: 20% | Fundo de reserva: 2%
              </p>
            </div>
          )}

          {result && (
            <Button onClick={sendToWhatsApp} className="w-full bg-accent hover:bg-accent/90" size="lg">
              <Send className="mr-2 w-5 h-5" />
              Falar com Consultor via WhatsApp
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Simulator;
