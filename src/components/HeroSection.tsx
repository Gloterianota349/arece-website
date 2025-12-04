import { ArrowDown } from "lucide-react";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <img 
            src={logo} 
            alt="Arecê" 
            className="w-32 h-32 mx-auto mb-8 animate-scale-in"
          />
          
          <h1 className="text-5xl md:text-7xl font-display text-primary mb-4 animate-fade-in">
            Arecê
          </h1>
          
          <p className="text-xl md:text-2xl text-accent font-medium mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Proteção que vem da raíz
          </p>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Um perfume sólido 100% natural que, além de encantar pelo aroma, 
            protege contra o <strong className="text-primary">Aedes aegypti</strong> graças 
            ao poder repelente do <strong className="text-primary">óleo de copaíba</strong> — 
            um ativo nativo da nossa biodiversidade.
          </p>

          <a 
            href="#produto"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Conhecer o Produto
            <ArrowDown size={20} />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-primary/50" size={32} />
      </div>
    </section>
  );
};

export default HeroSection;
