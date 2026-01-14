import { MapPin, Clock, Calendar, Sparkles, Users, Heart, Camera, Music } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const events = [
  {
    title: "Recepción",
    time: "7:00 PM",
    location: "Patio Manku",
    address: "Av. de la Paz 2557, Arcos Vallarta, 44130 Guadalajara, Jal.",
    description: "Te damos la bienvenida a nuestra celebración. Encuentra tu lugar para disfrutar de la ceremonia civil.",
    icon: Users,
  },
  {
    title: "Ceremonia Civil",
    time: "7:15 PM",
    location: "Patio Manku",
    address: "Av. de la Paz 2557, Arcos Vallarta, 44130 Guadalajara, Jal.",
    description: "Acompáñanos mientras unimos nuestras vidas en matrimonio con el compromiso legal de amarnos por siempre.",
    icon: Heart,
  },
  {
    title: "Coctel y Fotos",
    time: "7:40 PM",
    location: "Patio Manku",
    address: "Av. de la Paz 2557, Arcos Vallarta, 44130 Guadalajara, Jal.",
    description: "Disfruta de bebidas y aperitivos mientras capturamos los mejores momentos de esta noche inolvidable.",
    icon: Camera,
  },
  {
    title: "Ingreso Fiesta",
    time: "8:00 PM",
    location: "Patio Manku",
    address: "Av. de la Paz 2557, Arcos Vallarta, 44130 Guadalajara, Jal.",
    description: "¡Comienza la fiesta! Baile, cena y celebración hasta que el cuerpo aguante. Prepárate para disfrutar al máximo.",
    icon: Music,
  },
]

export function EventDetailsSection() {
  return (
    <section id="details" className="py-24 md:py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Únete a Nosotros</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">Detalles del Evento</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Viernes, 14 de Marzo de 2026 • Guadalajara, Jalisco</p>
        </div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {events.map((event) => (
            <Card key={event.title} className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <event.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-card-foreground mb-2">{event.title}</h3>
                <p className="text-primary font-medium mb-4">{event.time}</p>
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
                <h3 className="text-xl font-medium text-card-foreground mb-1">Patio Manku</h3>
                <p className="text-muted-foreground">Av. de la Paz 2557, Arcos Vallarta, 44130 Guadalajara, Jal.</p>
              </div>
            </div>
          </div>
          <div className="aspect-[16/9] md:aspect-[21/9] bg-muted relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.9406094148962!2d-103.381576!3d20.6719951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae0d29939551%3A0x3743904425db5961!2sPatio%20Manku!5e0!3m2!1sen!2smx!4v1768348569199!5m2!1sen!2smx"
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
              href="https://maps.app.goo.gl/QxmrQWsiS8s99tuCA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
            >
              <MapPin className="w-4 h-4" />
              Ver Mapa
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
