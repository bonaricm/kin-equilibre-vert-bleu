import { MapPin, Phone, Clock, Mail } from "lucide-react";

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

        {/* Contact Info */}
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6">
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
      </div>
    </section>
  );
};

export default ContactSection;
