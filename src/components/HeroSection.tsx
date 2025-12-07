import BalanceLogo from "./BalanceLogo";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="accueil"
      className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sage/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-mint/20 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo animé */}
          <div className="mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <BalanceLogo size="lg" className="mx-auto" />
          </div>

          {/* Titre principal */}
          <h1
            className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-6 animate-fade-up text-balance"
            style={{ animationDelay: "0.2s" }}
          >
            Kin'équilibre
          </h1>

          {/* Sous-titre */}
          <p
            className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-up font-light"
            style={{ animationDelay: "0.3s" }}
          >
            Kinésithérapie Vestibulaire
          </p>

          {/* Description */}
          <p
            className="text-lg text-muted-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Retrouvez votre équilibre au cœur du bassin biterrois. 
            Soins spécialisés pour les troubles vestibulaires à Lespignan.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Button variant="hero" size="lg">
              Prendre rendez-vous
            </Button>
            <Button variant="outline" size="lg">
              En savoir plus
            </Button>
          </div>

          {/* Scroll indicator */}
          <div
            className="mt-16 animate-fade-up"
            style={{ animationDelay: "0.7s" }}
          >
            <a
              href="#services"
              className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-sm mb-2">Découvrir</span>
              <ArrowDown className="animate-bounce" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
