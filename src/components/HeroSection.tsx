import { ArrowDown } from "lucide-react";
import logo from "@/assets/logo.png";
const HeroSection = () => {
  return <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <img alt="Arecê" className="w-32 h-32 mx-auto mb-8 animate-scale-in" src="/lovable-uploads/b6c8f37d-00e0-4b5d-8afe-08224e7a2630.png" />
          
          <h1 className="text-7xl md:text-7xl font-mon-cheri text-primary mb-4 animate-fade-in">
            Arecê
          </h1>
          
          <p className="text-xl md:text-2xl text-accent font-didact font-medium mb-8 animate-fade-in" style={{
          animationDelay: "0.1s"
        }}>
            Proteção que vem da raíz
          </p>
          
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-12 animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            Um perfume sólido 100% natural que, além de encantar pelo aroma, 
            protege contra o <strong className="text-primary">Aedes aegypti</strong> graças 
            ao seu <strong className="text-primary">poder repelente</strong>&nbsp;— 
            um ativo nativo da nossa biodiversidade.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center max-w-3xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="https://tally.so/r/q4WgRO"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center px-7 py-4 rounded-full text-base font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Lista de Espera
            </a>
            <a
              href="https://areceforkids.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center px-7 py-4 rounded-full text-base font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-all shadow-lg hover:scale-105"
            >
              Arecê for Kids
            </a>
            <a
              href="https://tally.so/r/obzjvx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center px-7 py-4 rounded-full text-base font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Para Investidores
            </a>
          </div>

          <div className="mt-6 flex justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <a href="#produto" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all hover:scale-105">
              Conhecer o Produto
              <ArrowDown size={16} />
            </a>
          </div>

        </div>
      </div>

    </section>;
};
export default HeroSection;