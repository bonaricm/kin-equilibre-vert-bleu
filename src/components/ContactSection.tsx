import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Button } from "./ui/button";

const contactInfo = [
  {
    icon: MapPin,
    label: "Adresse",
    value: "25ter route de Nissan",
    subvalue: "34710 Lespignan",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "07.81.98.24.87",
    subvalue: "Sur rendez-vous",
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Du lundi au vendredi",
    subvalue: "9h - 19h",
  },
  {
    icon: Mail,
    label: "Email",
    value: "kinequilibre34@outlook.fr",
    subvalue: "Réponse sous 24h",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 gradient-soft">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Contactez-nous
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Prenez rendez-vous pour retrouver votre équilibre.
            Nous sommes à votre écoute.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="flex items-start gap-4 p-6 gradient-card rounded-2xl border border-border/50 shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {info.label}
                  </p>
                  <p className="font-semibold text-foreground">{info.value}</p>
                  <p className="text-sm text-muted-foreground">{info.subvalue}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="gradient-card p-8 rounded-3xl border border-border/50 shadow-medium">
            <h3 className="font-cormorant text-2xl font-semibold text-foreground mb-6">
              Demande de rendez-vous
            </h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Prénom
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Votre nom"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="06 00 00 00 00"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Décrivez brièvement votre motif de consultation..."
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                Envoyer ma demande
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
