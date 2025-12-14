import { Check } from "lucide-react";
import BalanceLogo from "./BalanceLogo";
const features = ["Diplômée en kinésithérapie vestibulaire", "Kiné du sport & Préparatrice physique", "Cabinet équipé Réalité Virtuelle Équilibre", "Matériel innovant et ludique", "Approche personnalisée et bienveillante"];
const AboutSection = () => {
  return <section id="apropos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl gradient-hero overflow-hidden shadow-medium relative">
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-30">
                <svg className="w-full h-full" viewBox="0 0 400 500" fill="none">
                  <circle cx="200" cy="250" r="150" stroke="hsl(170, 65%, 45%)" strokeWidth="1" opacity="0.3" />
                  <circle cx="200" cy="250" r="100" stroke="hsl(170, 65%, 45%)" strokeWidth="1" opacity="0.4" />
                  <circle cx="200" cy="250" r="50" stroke="hsl(170, 65%, 45%)" strokeWidth="1" opacity="0.5" />
                </svg>
              </div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <BalanceLogo size="lg" className="mx-auto mb-6" />
                  <p className="font-cormorant text-2xl text-primary font-semibold">
                    Mélanie ENSENAT BONARIC
                  </p>
                  <p className="text-red-accent mt-2 font-medium">
                    Masseur-Kinésithérapeute DE
                  </p>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Kiné Vestibulaire · Kiné du sport
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-2xl shadow-medium border border-border/50">
              <p className="text-sm text-muted-foreground">Localisation</p>
              <p className="font-semibold text-foreground">25ter route de Nissan</p>
              <p className="text-sm text-foreground">34710 Lespignan</p>
              <p className="text-xs text-primary mt-1">Bassin Biterrois</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-foreground mb-6">
              À propos de
              <span className="text-primary"> Kiné'quilibre</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Située à Lespignan, au cœur du bassin biterrois, Kiné'quilibre 
              vous propose une prise en charge spécialisée des troubles 
              vestibulaires et de l'équilibre.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed text-justify bg-muted">Notre cabinet est équipé de technologies de pointe, tant pour l'évaluation et le suivi: 
 - VNG, VHIT, ... 
  que pour la rééducation.en réalité virtuelle pour une rééducation innovante et ludique. Chaque patient bénéficie d'un programme personnalisé adapté à ses besoins spécifiques.</p>

            {/* Features list */}
            <ul className="space-y-4">
              {features.map(feature => <li key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;