import { Linkedin } from "lucide-react";
import beatriz from "@/assets/beatriz-new.jpg";
import gabriela from "@/assets/gabriela-new.jpg";
import guilherme from "@/assets/guilherme-new.jpg";
import diogoAsset from "@/assets/diogo.png.asset.json";
import igorAsset from "@/assets/igor.png.asset.json";

const TeamSection = () => {
  const team = [
    {
      name: "Beatriz Mota",
      role: "CPO - Chief Product Officer",
      description: "Responsável pelo desenvolvimento e evolução do produto",
      image: beatriz
    },
    {
      name: "Gabriela Salomão",
      role: "COO - Chief Operating Officer",
      description: "Responsável pelas operações e processos da empresa",
      image: gabriela
    },
    {
      name: "Guilherme Andrade",
      role: "CFO - Chief Financial Officer",
      description: "Responsável pela gestão financeira e projeções estratégicas",
      image: guilherme
    },
    {
      name: "Diogo Maia",
      role: "CMO - Chief Marketing Officer",
      description: "Responsável pela estratégia de marketing e marca",
      image: diogoAsset.url
    },
    {
      name: "Igor Felipe Lima",
      role: "CSO - Chief Scientific Officer",
      description: "Responsável pela direção científica e pesquisa",
      image: igorAsset.url
    }
  ];

  return (
    <section id="equipe" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Quem faz acontecer
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-primary mt-2 mb-4">
            Nossa Equipe
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Uma equipe multidisciplinar unida pelo propósito de criar soluções 
            que protegem vidas através da ciência e da natureza
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div 
              key={index}
              className="group text-center w-full sm:w-[260px]"
            >
              <div className="relative mb-6 mx-auto w-48 h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 group-hover:opacity-30 transition-opacity -z-10" />
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border-4 border-background shadow-xl relative z-10"
                />
              </div>
              <h3 className="text-xl font-display text-primary mb-1">{member.name}</h3>
              <p className="text-accent font-semibold text-sm mb-2">{member.role}</p>
              <p className="text-foreground/60 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
