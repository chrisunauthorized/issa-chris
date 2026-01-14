import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cuál es el código de vestimenta?",
    answer:
      "Solicitamos vestimenta formal. Piensa en vestidos de cóctel elegantes para damas y trajes o smoking para caballeros. Por favor evita usar lila o blanco, ya que son los colores reservados para la boda. ¡Usa lo que te haga sentir hermosa/o!",
  },
  {
    question: "¿Puedo llevar acompañante?",
    answer:
      "Debido a la capacidad del lugar, solo podemos acomodar a los invitados formalmente incluidos en tu invitación. Por favor consulta tu invitación para más detalles.",
  },
  {
    question: "¿Los niños son bienvenidos?",
    answer:
      "¡Sí! Los niños son bienvenidos siempre y cuando estén incluidos formalmente en tu invitación. Por favor verifica tu invitación para confirmar quiénes están invitados.",
  },
  {
    question: "¿Se permiten bebidas de fuera?",
    answer:
      "Tendremos una barra libre completamente surtida durante toda la velada. Pedimos amablemente que los invitados no traigan bebidas externas al lugar.",
  },
  {
    question: "¿Hay estacionamiento disponible?",
    answer:
      "¡Sí! Habrá servicio de valet parking disponible. El valet estacionará tu vehículo en las calles aledañas y estarán al pendiente del cuidado de tu auto durante todo el evento.",
  },
  {
    question: "¿La boda será en interior o exterior?",
    answer:
      "La boda completa se llevará a cabo al aire libre en un hermoso jardín. Con el clima primaveral de marzo en Guadalajara, esperamos una temperatura agradable. Recomendamos traer una chamarra ligera para la noche.",
  },
  {
    question: "¿Hay registro de regalos?",
    answer:
      "¡Tu presencia es el mejor regalo! Sin embargo, si deseas honrarnos con un obsequio, tenemos nuestra mesa de regalos en Liverpool y también puedes contribuir a nuestro fondo de luna de miel vía BBVA. Encuentra toda la información en la sección de Mesa de Regalos de este sitio web.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-24 md:py-32 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Preguntas</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-muted-foreground">Todo lo que necesitas saber sobre nuestro gran día</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-sm"
            >
              <AccordionTrigger className="text-left text-base md:text-lg font-medium text-card-foreground hover:text-primary py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
