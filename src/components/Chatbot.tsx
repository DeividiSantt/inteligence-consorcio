import { useState, useEffect } from "react";
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
  const [messages, setMessages] = useState<Message[]>([]);
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

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([
          { text: "Olá! Sou o assistente virtual da Intelligence Consórcio. 👋", sender: "bot" },
          { text: "Qual tipo de consórcio você deseja simular?\n\n📋 Opções:\n• Imóveis\n• Carros\n• Motos\n• Pesados\n• Serviços\n• Outro\n\nOu pergunte 'como funciona o consórcio' para saber mais!", sender: "bot" },
        ]);
      }, 300);
    }
  }, [isOpen, messages.length]);

  const steps = [
    { question: "Qual tipo de consórcio você deseja simular?\n\n📋 Opções:\n• Imóveis\n• Carros\n• Motos\n• Pesados\n• Serviços\n• Outro\n\nOu pergunte 'como funciona o consórcio' para saber mais!", field: "type" },
    { question: "Qual o valor do bem que você deseja? Digite apenas números. (Ex: 200000)", field: "value" },
    { question: "Em quantas parcelas você gostaria de pagar? Digite apenas números. (Ex: 120)", field: "installments" },
    { question: "É urgente? (Sim ou Não)", field: "urgency" },
    { question: "Qual é o seu nome?", field: "name" },
    { question: "Por favor, informe seu WhatsApp (com DDD):", field: "whatsapp" },
  ];

  const explainConsortium = () => {
    const explanation: Message = {
      text: "📚 Como funciona o consórcio?\n\nConsórcio é um grupo de pessoas que se juntam para comprar um bem (carro, casa, moto, etc.) sem pagar juros! 💰\n\n✨ Vantagens:\n• Sem juros bancários\n• Parcelas fixas\n• Você pode ser contemplado por sorteio ou lance\n• Crédito aprovado sem burocracia\n\n🎯 Você paga mensalmente e quando for contemplado, recebe o valor para comprar seu bem!\n\nVamos simular o seu consórcio agora? Digite 'sim' para começar!",
      sender: "bot",
    };
    return explanation;
  };

  const validateNumericInput = (input: string, fieldName: string): boolean => {
    const numericValue = input.replace(/\D/g, "");
    if (numericValue === "" || isNaN(Number(numericValue))) {
      const errorMessage: Message = {
        text: `❌ Por favor, digite apenas números para ${fieldName}.\n\nExemplo: ${fieldName === "o valor do bem" ? "200000" : "120"}`,
        sender: "bot",
      };
      setMessages((prev) => [...prev, errorMessage]);
      return false;
    }
    return true;
  };

  const handleSend = () => {
    if (!currentInput.trim()) return;

    const userMessage: Message = { text: currentInput, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    const normalizedInput = currentInput.toLowerCase().trim();

    // Verificar se é pergunta sobre funcionamento
    if (
      normalizedInput.includes("como funciona") ||
      normalizedInput.includes("o que é consórcio") ||
      normalizedInput.includes("como funciona consórcio")
    ) {
      setTimeout(() => {
        setMessages((prev) => [...prev, explainConsortium()]);
      }, 500);
      setCurrentInput("");
      return;
    }

    // Se usuário confirma após explicação
    if (step === 0 && (normalizedInput === "sim" || normalizedInput === "s")) {
      setTimeout(() => {
        const botMessage: Message = {
          text: steps[0].question,
          sender: "bot",
        };
        setMessages((prev) => [...prev, botMessage]);
      }, 500);
      setCurrentInput("");
      return;
    }

    const field = steps[step].field as keyof typeof formData;

    // Validação de campos numéricos
    if (field === "value") {
      if (!validateNumericInput(currentInput, "o valor do bem")) {
        setCurrentInput("");
        return;
      }
    }

    if (field === "installments") {
      if (!validateNumericInput(currentInput, "o número de parcelas")) {
        setCurrentInput("");
        return;
      }
    }

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
          text: `Perfeito, ${formData.name}! 🎉\n\nCom base nas suas informações:\n• Tipo: ${formData.type}\n• Valor: R$ ${value.toLocaleString('pt-BR')}\n• Parcelas: ${installments}x\n\nSua parcela estimada será de: R$ ${totalInstallment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\n\nVou enviar essas informações para o nosso consultor e também para o seu WhatsApp! 📱`,
          sender: "bot",
        };
        setMessages((prev) => [...prev, resultMessage]);

        // Mensagem para o consultor
        const consultantMessage = `Novo%20Lead%20-%20Chatbot%0A%0ANome:%20${formData.name}%0AWhatsApp:%20${currentInput}%0ATipo:%20${formData.type}%0AValor:%20R$%20${value.toLocaleString('pt-BR')}%0AParcelas:%20${installments}x%0AUrgente:%20${formData.urgency}%0AParcela%20estimada:%20R$%20${totalInstallment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
        
        // Mensagem para o cliente
        const clientMessage = `Olá%20${formData.name}!%20Aqui%20está%20sua%20simulação:%0A%0ATipo:%20${formData.type}%0AValor:%20R$%20${value.toLocaleString('pt-BR')}%0AParcelas:%20${installments}x%0AParcela%20estimada:%20R$%20${totalInstallment.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}%0A%0ANosso%20consultor%20entrará%20em%20contato%20em%20breve!`;

        // Enviar para WhatsApp do consultor
        window.open(`https://wa.me/5547989165481?text=${consultantMessage}`, "_blank");
        
        // Enviar para WhatsApp do cliente
        setTimeout(() => {
          window.open(`https://wa.me/55${currentInput.replace(/\D/g, '')}?text=${clientMessage}`, "_blank");
        }, 1000);

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
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-card rounded-2xl shadow-2xl border border-border flex flex-col max-h-[600px]">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MessageCircle className="w-6 h-6" />
              <div>
                <h3 className="font-bold">Assistente Virtual</h3>
                <p className="text-xs text-white/80">Intelligence Consórcio</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded-full p-1 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-muted/20">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl whitespace-pre-line ${
                    msg.sender === "user"
                      ? "bg-primary text-white rounded-br-sm"
                      : "bg-card border border-border rounded-bl-sm"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border bg-card rounded-b-2xl">
            <div className="flex gap-2">
              <Input
                placeholder="Digite sua mensagem..."
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
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
