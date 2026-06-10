import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-transparent.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Produto", href: "#produto" },
    { label: "Por que Arecê?", href: "#diferenciais" },
    { label: "Nossos Pilares", href: "#missao" },
    { label: "Equipe", href: "#equipe" },
  ];

  const ctaItems = [
    { label: "Lista de Espera", href: "https://tally.so/r/q4WgRO", highlight: false },
    { label: "Investidores", href: "https://tally.so/r/obzjvx", highlight: false },
    { label: "Arecê for Kids", href: "https://areceforkids.lovable.app", highlight: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between gap-4">
          <a href="#inicio" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="Arecê Logo" className="h-10 w-auto" />
            <span className="font-display text-2xl text-primary">Arecê</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            {ctaItems.map((cta) => (
              <a
                key={cta.href}
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  cta.highlight
                    ? "px-4 py-2 rounded-full text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-md"
                    : "px-4 py-2 rounded-full text-sm font-semibold border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                }
              >
                {cta.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 animate-fade-in">
            <ul className="space-y-3 mb-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-foreground/80 hover:text-primary transition-colors font-medium py-1"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              {ctaItems.map((cta) => (
                <a
                  key={cta.href}
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className={
                    cta.highlight
                      ? "w-full text-center px-4 py-3 rounded-full text-sm font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-all"
                      : "w-full text-center px-4 py-3 rounded-full text-sm font-semibold border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  }
                >
                  {cta.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
