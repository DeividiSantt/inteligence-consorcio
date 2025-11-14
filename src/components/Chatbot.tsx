import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  text: string;
  sender: "bot" | "user";
}

const Chatbot = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Olá! Sou o assistente virtual da Intelligence Consórcio. Como posso ajudar você hoje?", sender: "bot" },
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    type: "",
    value: "",
    installments: "",
    urgency: "",
    name: "",
    whatsapp: "",
  });

  const steps = [
    { question: "Qual tipo de consórcio você procura? (Imóvel, Veículo ou Caminhão)", field: "type" },
    { question: "Qual o valor do bem que você deseja? (Ex: 200000)", field: "value" },
    { question: "Em quantas parcelas você gostaria de pagar? (Ex: 120)", field: "installments" },
    { question: "É urgente? (Sim ou Não)", field: "urgency" },
    { question: "Qual é o seu nome?", field: "name" },
    { question: "Por favor, informe seu WhatsApp (com DDD):", field: "whatsapp" },
  ];

  const handleSend = () => {
    if (!currentInput.trim()) return;

    const userMessage: Message = { text: currentInput, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    const field = steps[step].field as keyof typeof formData;
    setFormData({ ...formData, [field]: currentInput });

    if (step < steps.length - 1) {
      setTimeout(() => {
        const botMessage: Message = {
          text: steps[step + 1].question,
          sender: "bot",
        };
        setMessages((prev) => [...prev, botMessage]);
        setStep(step + 1);
      }, 500);
    } else {
      // Cálculo final
      const value = parseFloat(formData.value);
      const installments = parseInt(formData.installments);
      const baseInstallment = value / installments;
      const adminFee = (value * 0.20) / installments;
      const reserveFund = (value * 0.02) / installments;
      const totalInstallment = baseInstallment + adminFee + reserveFund;

      setTimeout(() => {
        const resultMessage: Message = {
          text: `Perfeito, ${formData.name}! 🎉\n\nCom base nas suas informações:\n• Tipo: ${formData.type}\n• Valor: R$ ${value.toLocaleString('pt-BR')}\n• Parcelas: ${installments}x\n\nSua parcela estimada será de: R$ ${totalInstallment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n\nVou enviar essas informações para o nosso consultor Cleyson e também para o seu WhatsApp!`,
          sender: "bot",
        };
        setMessages((prev) => [...prev, resultMessage]);

        // Enviar para WhatsApp do consultor
        const consultantMessage = `Novo%20Lead%20-%20Chatbot%0A%0ANome:%20${formData.name}%0AWhatsApp:%20${currentInput}%0ATipo:%20${formData.type}%0AValor:%20R$%20${value.toLocaleString('pt-BR')}%0AParcelas:%20${installments}x%0AUrgente:%20${formData.urgency}%0AParcela%20estimada:%20R$%20${totalInstallment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
        
        window.open(`https://wa.me/5547989165481?text=${consultantMessage}`, "_blank");

        toast({
          title: "Simulação concluída!",
          description: "Redirecionando para o WhatsApp...",
        });
      }, 1000);
    }

    setCurrentInput("");
  };

  return (
    <>
      {/* Chatbot Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] bg-card rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col max-h-[600px]">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold">Assistente Virtual</h3>
                <p className="text-xs text-white/80">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-muted/20">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.sender === "user"
                      ? "bg-primary text-white"
                      : "bg-card border border-border text-foreground"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 bg-card border-t border-border">
            <div className="flex gap-2">
              <Input
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Digite sua resposta..."
                className="flex-1"
              />
              <Button onClick={handleSend} size="icon" className="bg-secondary hover:bg-secondary/90">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
