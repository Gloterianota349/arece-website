import { Sparkles, Leaf, Shield, Recycle, Wind, CheckCircle } from "lucide-react";
import productImage from "@/assets/product.png";
import productBox from "@/assets/product-box.png";

const ProductSection = () => {
  const features = [
    { icon: Wind, title: "Fragrância leve e agradável", desc: "Ideal para o uso diário" },
    { icon: Shield, title: "Ação repelente natural", desc: "Baseada em evidências científicas" },
    { icon: Sparkles, title: "Aplicação prática", desc: "Sem vazamentos, fácil de transportar" },
    { icon: Leaf, title: "100% natural", desc: "Gentil com o corpo e meio ambiente" },
    { icon: Recycle, title: "Sustentável", desc: "Da matéria-prima à embalagem" },
  ];

  return (
    <section id="produto" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Nosso Produto
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-primary mt-2 mb-4">
            Perfume Sólido Natural
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A união perfeita entre fragrância, proteção e sustentabilidade
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-2xl" />
            <img 
              src={productImage} 
              alt="Perfume Sólido Arecê" 
              className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-2xl"
            />
          </div>

          <div>
            <h3 className="text-2xl font-display text-primary mb-6">
              O que é o perfume sólido Arecê?
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-8">
              É um produto multifuncional que transforma o cuidado diário em um gesto de proteção — 
              unindo fragrância suave, sustentabilidade e eficácia repelente contra mosquitos, 
              especialmente o <strong>Aedes aegypti</strong>, transmissor da dengue, Zika e Chikungunya.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border/50 hover:border-accent/50 transition-colors"
                >
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    <p className="text-sm text-foreground/60">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Science Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Ciência & Natureza
            </span>
            <h3 className="text-2xl font-display text-primary mb-6">
              A ciência por trás da proteção
            </h3>
            <p className="text-foreground/80 leading-relaxed mb-6">
              O ativo repelente do nosso perfume é extraído de uma <strong>planta nativa brasileira</strong> estudada por suas propriedades insetífugas. 
              Esse composto natural age interferindo na capacidade do mosquito de 
              identificar sinais humanos, criando uma barreira aromática protetiva.
            </p>

            <div className="space-y-3">
              {[
                "Eficácia repelente comprovada cientificamente",
                "Disponibilidade regional e uso tradicional consolidado",
                "Valorização da biodiversidade brasileira",
                "Pesquisa científica aplicada no desenvolvimento"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-gradient-to-tl from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
            <img 
              src={productBox} 
              alt="Embalagem Arecê" 
              className="relative z-10 w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
