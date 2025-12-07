import { Ear, Brain, Activity, Heart } from "lucide-react";

const services = [
  {
    icon: Ear,
    title: "Rééducation Vestibulaire",
    description:
      "Traitement spécialisé des vertiges et troubles de l'équilibre d'origine vestibulaire.",
  },
  {
    icon: Brain,
    title: "Bilan Vestibulaire",
    description:
      "Évaluation complète de votre système vestibulaire pour un diagnostic précis.",
  },
  {
    icon: Activity,
    title: "Exercices d'Équilibre",
    description:
      "Programmes personnalisés pour améliorer votre stabilité au quotidien.",
  },
  {
    icon: Heart,
    title: "Suivi Personnalisé",
    description:
      "Accompagnement adapté à votre rythme et vos besoins spécifiques.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 gradient-soft">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Nos Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Une approche spécialisée pour traiter les troubles de l'équilibre
            et vous accompagner vers une vie plus sereine.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
