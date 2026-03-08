import { Ear, Brain, Activity, Heart, Gamepad2, Dumbbell } from "lucide-react";

const services = [
  {
    icon: Ear,
    title: "Rééducation Vestibulaire",
    description:
      "Traitement spécialisé des vertiges positionnels (VPPB), maladie de Menière, névrite vestibulaire et troubles de l'équilibre d'origine vestibulaire.",
  },
  {
    icon: Brain,
    title: "Bilan Vestibulaire Complet",
    description:
      "Évaluation précise avec matériel professionnel : vidéonystagmographie (VNG), video Head Impulse Test (VHIT) pour un diagnostic fiable.",
  },
  {
    icon: Gamepad2,
    title: "Réalité Virtuelle",
    description:
      "Rééducation innovante et ludique par réalité virtuelle pour traiter les vertiges et améliorer l'équilibre au quotidien.",
  },
  {
    icon: Activity,
    title: "Exercices d'Équilibre",
    description:
      "Programmes personnalisés de rééducation de l'équilibre adaptés à chaque patient, du sportif à la personne âgée.",
  },
  {
    icon: Dumbbell,
    title: "Kiné du Sport",
    description:
      "Kinésithérapie du sport et préparation physique pour sportifs amateurs et professionnels dans le Bassin Biterrois.",
  },
  {
    icon: Heart,
    title: "Suivi Personnalisé",
    description:
      "Accompagnement bienveillant adapté à votre rythme. Prise en charge à Lespignan, près de Béziers, Colombiers et Nissan-lez-Ensérune.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 gradient-soft">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Nos Services de Kinésithérapie
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Cabinet de kinésithérapie spécialisé en rééducation vestibulaire à Lespignan.
            Traitement des vertiges, troubles de l'équilibre et kiné du sport près de Béziers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group gradient-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-1 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-cormorant text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
