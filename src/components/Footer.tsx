import { Leaf, Instagram, Mail } from "lucide-react";
import logo from "@/assets/logo-transparent.png";
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Arecê" className="h-10 w-auto brightness-0 invert" />
              <span className="font-display text-2xl">Arecê</span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed">
              Proteção que vem da raíz. Um perfume sólido natural que une 
              fragrância, sustentabilidade e proteção contra mosquitos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-primary-foreground/70 hover:text-accent transition-colors">Início</a></li>
              <li><a href="#produto" className="text-primary-foreground/70 hover:text-accent transition-colors">Produto</a></li>
              <li><a href="#diferenciais" className="text-primary-foreground/70 hover:text-accent transition-colors">Por que Arecê?</a></li>
              <li><a href="#missao" className="text-primary-foreground/70 hover:text-accent transition-colors">Nossos Pilares</a></li>
              <li><a href="#equipe" className="text-primary-foreground/70 hover:text-accent transition-colors">Equipe</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-4">Contato</h4>
            <div className="space-y-3">
              <a className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors" href="mailto:arece.cosmeticos@gmail.com">
                <Mail size={18} />
                arece.cosmeticos@gmail.com
              </a>
              
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Arecê. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
            <Leaf size={16} className="text-accent" />
            Feito com amor pela biodiversidade brasileira
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;