import { useEffect, useState } from "react";
import BalanceLogo from "./BalanceLogo";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";
const HeroSection = () => {
  const title = "Kiné'quilibre";
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 400);
    return () => clearTimeout(timer);
  }, []);
  return <section id="accueil" className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-turquoise/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-cyan-light/20 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo animé */}
          <div className="mb-8 animate-fade-up" style={{
          animationDelay: "0.1s"
        }}>
            <BalanceLogo size="lg" className="mx-auto animate-spin-slow" />
          </div>

          {/* Titre principal */}
          <h1 className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-6 text-balance flex justify-center flex-wrap" style={{
          animationDelay: "0.2s"
        }}>
            {title.split("").map((char, i) => (
              <span
                key={i}
                className={animate ? "inline-block animate-flag-wave" : "inline-block opacity-0"}
                style={{
                  animationDelay: `${i * 0.07}s`,
                  whiteSpace: char === " " ? "pre" : undefined,
                }}
              >
                {char}
              </span>
            ))}
          </h1>

          {/* Sous-titre */}
          <p className="text-xl md:text-2xl text-red-accent mb-2 animate-fade-up font-semibold" style={{
          animationDelay: "0.3s"
        }}>
            Mélanie ENSENAT BONARIC
          </p>

          <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-up" style={{
          animationDelay: "0.35s"
        }}>
            Masseur-Kinésithérapeute DE
          </p>

          {/* Description */}
          <p className="text-lg text-red-accent font-medium mb-4 max-w-2xl mx-auto animate-fade-up" style={{
          animationDelay: "0.4s"
        }}>
            Rééducation Vestibulaire · Kiné du sport
          </p>

          {/* Matériel */}
          <p style={{
          animationDelay: "0.45s"
        }} className="text-2xl md:text-3xl font-bold mb-10 max-w-2xl mx-auto animate-fade-up tracking-wide text-lime-500 font-sans">
            MATÉRIEL D'ÉVALUATION ET SUIVI COMPLET
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-up" style={{
          animationDelay: "0.45s"
        }}>
            <span className="px-4 py-2 bg-card/80 rounded-full text-sm text-foreground border border-border/50 shadow-soft">
              Cabinet équipé Réalité Virtuelle
            </span>
            <span className="px-4 py-2 bg-card/80 rounded-full text-sm text-foreground border border-border/50 shadow-soft">
              Matériel innovant & ludique
            </span>
          </div>


          {/* Scroll indicator */}
          <div className="mt-16 animate-fade-up" style={{
          animationDelay: "0.7s"
        }}>
            <a href="#services" className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
              <span className="text-sm mb-2">Découvrir</span>
              <ArrowDown className="animate-bounce" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;