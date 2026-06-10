import { Target, Eye, Heart, Shield, Lightbulb, Leaf, Sparkles, Package, Users, HeartPulse, Recycle } from "lucide-react";

const MissionSection = () => {
  const values = [
    {
      icon: Shield,
      title: "Compromisso com a Saúde Pública",
      description: "Nossa origem está na ciência e no enfrentamento às arboviroses. Mantemos o compromisso de oferecer soluções seguras, eficazes e fundamentadas."
    },
    {
      icon: Lightbulb,
      title: "Inovação Sustentável",
      description: "Unimos tecnologia, pesquisa cosmética e saberes naturais para desenvolver produtos multifuncionais, ecológicos e de baixo impacto ambiental."
    },
    {
      icon: Leaf,
      title: "Valorização da Biodiversidade",
      description: "Utilizamos ativos nativos brasileiros, fomentando a economia local, a conservação e o uso responsável dos recursos naturais."
    },
    {
      icon: Sparkles,
      title: "Naturalidade e Transparência",
      description: "Priorizamos composições 100% naturais, claras, honestas e sem ingredientes tóxicos — da formulação à comunicação com nossos clientes."
    },
    {
      icon: Package,
      title: "Praticidade e Experiência",
      description: "Criamos soluções que se encaixam no dia a dia: fáceis de usar, com fragrância agradável, formato sólido e embalagem sustentável."
    },
    {
      icon: Users,
      title: "Ética e Responsabilidade Social",
      description: "Atuamos com respeito às pessoas, ao meio ambiente e às comunidades envolvidas, buscando impacto social positivo."
    }
  ];

  return (
    <section id="missao" className="py-24">
      <div className="container mx-auto px-4">
        {/* Mission, Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-8 md:p-12 rounded-3xl">
            <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-accent-foreground" />
            </div>
            <h3 className="text-2xl md:text-3xl font-display mb-4">Nossa Missão</h3>
            <p className="text-primary-foreground/90 leading-relaxed">
              Desenvolver e entregar produtos sustentáveis que combinem autocuidado, 
              aroma e proteção contra mosquitos, utilizando ingredientes naturais e 
              ativos nativos. Transformamos pesquisa científica 
              em soluções reais, práticas e eficazes para reduzir os impactos das 
              arboviroses e melhorar a qualidade de vida das pessoas.
            </p>
          </div>

          <div className="bg-gradient-to-br from-accent to-accent/80 text-accent-foreground p-8 md:p-12 rounded-3xl">
            <div className="w-14 h-14 bg-primary-foreground rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-display mb-4">Nossa Visão</h3>
            <p className="text-accent-foreground/90 leading-relaxed">
              Promover um Brasil mais saudável e protegido por meio de soluções 
              naturais e acessíveis, tornando-nos referência nacional em produtos 
              que unem ciência, biodiversidade e bem-estar no combate às arboviroses.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            O que nos guia
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-primary mt-2 mb-4">
            Nossos Valores
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group p-6 bg-muted/50 rounded-2xl border border-border hover:border-accent/50 transition-all hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <value.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-lg font-display text-primary mb-2">{value.title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Sustainability Badge */}
        <div className="mt-16 p-8 bg-gradient-to-r from-muted to-muted/50 rounded-3xl text-center">
          <h3 className="text-xl font-display text-primary mb-4">
            Alinhados com os Objetivos de Desenvolvimento Sustentável
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
              <HeartPulse className="w-5 h-5 text-primary" />
              <span className="text-primary font-semibold">ODS 3</span>
              <span className="text-foreground/70">Saúde e Bem-estar</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-accent/10 rounded-full">
              <Recycle className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold">ODS 12</span>
              <span className="text-foreground/70">Consumo Responsável</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
