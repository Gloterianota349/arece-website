import { Sparkles, Leaf, Package, MapPin, Shield, Check } from "lucide-react";
const DifferentialsSection = () => {
  const differentials = [{
    icon: Sparkles,
    title: "Perfume + Repelente",
    description: "Combina a essência e o aroma de um perfume com a proteção de um repelente"
  }, {
    icon: Leaf,
    title: "100% Natural",
    description: "Composto inteiramente de produtos naturais, sem ingredientes tóxicos"
  }, {
    icon: Package,
    title: "Formato Prático",
    description: "Embalagem sustentável em papel kraft, fácil de transportar"
  }, {
    icon: MapPin,
    title: "Origem Brasileira",
    description: "Utiliza óleo de copaíba, um ativo nativo da biodiversidade brasileira"
  }, {
    icon: Shield,
    title: "Proteção Garantida",
    description: "Eficácia comprovada contra o Aedes aegypti e outros mosquitos"
  }];
  const reasons = ["Perfume e repelente no mesmo produto", "Natural e seguro para uso diário", "Fragrância leve e agradável", "Embalagem ecológica", "Fácil de aplicar e transportar", "Baseado em pesquisa científica", "Combate às arboviroses"];
  return <section id="diferenciais" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            O que nos diferencia
          </span>
          <h2 className="text-4xl md:text-5xl font-display mt-2 mb-4">
            Nossos Diferenciais
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Uma solução inovadora que une o melhor da natureza brasileira com a ciência
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {differentials.map((diff, index) => <div key={index} className="p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                <diff.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-display mb-2">{diff.title}</h3>
              <p className="text-primary-foreground/70">{diff.description}</p>
            </div>)}
        </div>

        {/* Why Choose Section */}
        <div className="bg-accent/20 rounded-3xl p-8 md:p-12 border border-accent/30">
          <h3 className="text-3xl font-display text-center mb-8 md:text-4xl text-primary-foreground">
            Por que escolher Arecê?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reasons.map((reason, index) => <div key={index} className="flex items-center gap-3 p-4 bg-accent/10 rounded-xl border border-accent/20">
                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-accent-foreground" />
                </div>
                <span className="text-primary-foreground">{reason}</span>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default DifferentialsSection;