import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "Qu'est-ce que la rééducation vestibulaire ?",
    answer:
      "La rééducation vestibulaire est une spécialité de la kinésithérapie qui traite les troubles de l'équilibre et les vertiges d'origine vestibulaire (oreille interne). Elle permet de soulager les vertiges positionnels (VPPB), la maladie de Menière, les névrites vestibulaires et autres troubles de l'équilibre.",
  },
  {
    question: "Comment se déroule un bilan vestibulaire ?",
    answer:
      "Le bilan vestibulaire comprend un examen clinique complet avec des outils professionnels : vidéonystagmographie (VNG) et video Head Impulse Test (VHIT). Ces examens permettent d'évaluer précisément le fonctionnement de votre système vestibulaire et d'orienter la rééducation.",
  },
  {
    question: "Faut-il une ordonnance pour consulter un kiné vestibulaire ?",
    answer:
      "Oui, une ordonnance médicale est nécessaire pour consulter un kinésithérapeute. Votre médecin traitant ou un ORL peut vous prescrire des séances de rééducation vestibulaire. Les séances sont prises en charge par la Sécurité sociale et votre mutuelle.",
  },
  {
    question: "Où se situe le cabinet Kiné'quilibre ?",
    answer:
      "Le cabinet Kiné'quilibre est situé au 25ter route de Nissan, 34710 Lespignan, dans le Bassin Biterrois. Facilement accessible depuis Béziers, Colombiers, Nissan-lez-Ensérune, Vendres et Capestang.",
  },
  {
    question: "Quels types de vertiges traitez-vous ?",
    answer:
      "Nous traitons tous les types de vertiges : vertiges positionnels paroxystiques bénins (VPPB), vertiges liés à la maladie de Menière, névrite vestibulaire, migraines vestibulaires, syndrome de l'autoroute, instabilité chronique, vertiges post-traumatiques et troubles de l'équilibre chez la personne âgée.",
  },
  {
    question: "Qu'est-ce que la rééducation en réalité virtuelle ?",
    answer:
      "Notre cabinet est équipé de matériel de réalité virtuelle spécialisé pour la rééducation vestibulaire. Cette technologie innovante permet de reproduire des situations de la vie quotidienne dans un environnement contrôlé, rendant la rééducation plus efficace et ludique.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Tout savoir sur la kinésithérapie vestibulaire et la rééducation des vertiges
            à Lespignan près de Béziers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="gradient-card rounded-2xl border border-border/50 shadow-soft px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
};

export default FAQSection;
