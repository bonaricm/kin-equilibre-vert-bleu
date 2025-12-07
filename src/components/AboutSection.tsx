import { Check } from "lucide-react";

const features = [
  "Diplômée en kinésithérapie vestibulaire",
  "Approche douce et personnalisée",
  "Cabinet moderne et accessible",
  "Prise en charge des vertiges et troubles de l'équilibre",
];

const AboutSection = () => {
  return (
    <section id="apropos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl gradient-hero overflow-hidden shadow-medium relative">
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-30">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 400 500"
                  fill="none"
                >
                  <circle
                    cx="200"
                    cy="250"
                    r="150"
                    stroke="hsl(152, 45%, 45%)"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                  <circle
                    cx="200"
                    cy="250"
                    r="100"
                    stroke="hsl(152, 45%, 45%)"
                    strokeWidth="1"
                    opacity="0.4"
                  />
                  <circle
                    cx="200"
                    cy="250"
                    r="50"
                    stroke="hsl(152, 45%, 45%)"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                </svg>
              </div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full gradient-primary mx-auto mb-6 flex items-center justify-center shadow-glow">
                    <span className="text-4xl font-cormorant text-primary-foreground font-semibold">
                      K
                    </span>
                  </div>
                  <p className="font-cormorant text-2xl text-foreground font-medium">
                    Kinésithérapeute
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Spécialiste vestibulaire
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-2xl shadow-medium border border-border/50">
              <p className="text-sm text-muted-foreground">Localisation</p>
              <p className="font-semibold text-foreground">Lespignan</p>
              <p className="text-xs text-primary">Bassin Biterrois</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-foreground mb-6">
              À propos de
              <span className="text-primary"> Kin'équilibre</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Située à Lespignan, au cœur du bassin biterrois, Kin'équilibre 
              vous propose une prise en charge spécialisée des troubles 
              vestibulaires et de l'équilibre.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Notre approche combine expertise technique et accompagnement 
              bienveillant pour vous aider à retrouver une vie quotidienne 
              sans vertige ni instabilité. Chaque patient bénéficie d'un 
              programme de rééducation adapté à ses besoins spécifiques.
            </p>

            {/* Features list */}
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
