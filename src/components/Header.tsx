import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoIcon from "@/assets/logo-icon.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src={logoIcon} alt="Intelligence Consórcio" className="h-10" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">Intelligence</span>
              <span className="text-sm font-semibold text-secondary">Consórcio</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection("simulator")} className="text-foreground hover:text-primary transition-colors">
              Simulador
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors">
              Sobre
            </button>
            <button onClick={() => scrollToSection("cards")} className="text-foreground hover:text-primary transition-colors">
              Cartas Contempladas
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors">
              Contato
            </button>
            <Button onClick={() => scrollToSection("simulator")} className="bg-accent hover:bg-accent/90">
              Simular Agora
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-colors text-left">
                Início
              </button>
              <button onClick={() => scrollToSection("simulator")} className="text-foreground hover:text-primary transition-colors text-left">
                Simulador
              </button>
              <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors text-left">
                Sobre
              </button>
              <button onClick={() => scrollToSection("cards")} className="text-foreground hover:text-primary transition-colors text-left">
                Cartas Contempladas
              </button>
              <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors text-left">
                Contato
              </button>
              <Button onClick={() => scrollToSection("simulator")} className="bg-accent hover:bg-accent/90 w-full">
                Simular Agora
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
