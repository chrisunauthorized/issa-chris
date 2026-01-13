import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is the dress code?",
    answer:
      "We kindly request formal attire. Think elegant cocktail dresses for ladies and suits or tuxedos for gentlemen. Our wedding colors are lilac and ivory, but please wear whatever makes you feel beautiful!",
  },
  {
    question: "Are children welcome?",
    answer:
      "While we love your little ones, we have chosen to make this an adult-only celebration. We hope you understand and can enjoy a night off!",
  },
  {
    question: "Can I bring a date or plus-one?",
    answer:
      "Due to venue capacity, we can only accommodate those guests formally invited on your invitation. Please refer to your invitation for details.",
  },
  {
    question: "Are outside drinks allowed?",
    answer:
      "We will have a fully stocked open bar throughout the evening. We kindly ask that guests do not bring outside beverages to the venue.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes! Free valet parking will be available at the venue. There is also a parking lot adjacent to the venue for self-parking.",
  },
  {
    question: "Will the wedding be indoors or outdoors?",
    answer:
      "The ceremony will be held outdoors in the rose garden (weather permitting), and the reception will be indoors in the Grand Ballroom. We recommend bringing a light layer for the evening.",
  },
  {
    question: "What if I have dietary restrictions?",
    answer:
      "Please let us know about any dietary restrictions or allergies when you RSVP. Our caterer will be happy to accommodate vegetarian, vegan, gluten-free, and other dietary needs.",
  },
  {
    question: "Is there a gift registry?",
    answer:
      "Your presence is the greatest gift! However, if you wish to honor us with a gift, we have a small registry linked on our invitations. We also gratefully accept contributions to our honeymoon fund.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-24 md:py-32 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Questions</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">Everything you need to know about our special day</p>
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

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="mailto:emma.james.wedding@email.com"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
