import { MapPin, Clock, Calendar, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const events = [
  {
    title: "The Ceremony",
    time: "4:00 PM",
    location: "The Rose Garden",
    address: "Rosewood Gardens, 1234 Vineyard Lane",
    description: "Join us as we exchange our vows in the beautiful rose garden surrounded by nature.",
    icon: Sparkles,
  },
  {
    title: "Cocktail Hour",
    time: "5:00 PM",
    location: "The Terrace",
    address: "Rosewood Gardens, 1234 Vineyard Lane",
    description: "Enjoy drinks and appetizers while mingling with other guests on the terrace.",
    icon: Clock,
  },
  {
    title: "Reception & Dinner",
    time: "6:30 PM",
    location: "The Grand Ballroom",
    address: "Rosewood Gardens, 1234 Vineyard Lane",
    description: "Dinner, dancing, and celebration will continue into the night.",
    icon: Calendar,
  },
]

export function EventDetailsSection() {
  return (
    <section id="details" className="py-24 md:py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Join Us</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">Event Details</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Monday, June 15th, 2026 • Napa Valley, California</p>
        </div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {events.map((event) => (
            <Card key={event.title} className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <event.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-card-foreground mb-2">{event.title}</h3>
                <p className="text-primary font-medium mb-4">{event.time}</p>
                <p className="text-sm text-muted-foreground mb-2">{event.location}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Venue Map */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          <div className="p-6 md:p-8 border-b border-border">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-card-foreground mb-1">Rosewood Gardens</h3>
                <p className="text-muted-foreground">1234 Vineyard Lane, Napa Valley, CA 94558</p>
              </div>
            </div>
          </div>
          <div className="aspect-[16/9] md:aspect-[21/9] bg-muted relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.8476033676196!2d-122.32539482427!3d38.29726547185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085063c4a8f5c67%3A0x1a8!2sNapa%20Valley%2C%20CA!5e0!3m2!1sen!2sus!4v1705000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding Venue Location"
              className="absolute inset-0"
            />
          </div>
          <div className="p-4 md:p-6 text-center">
            <a
              href="https://maps.google.com/?q=Napa+Valley+California"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
