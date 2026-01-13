import { Gift, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const registries = [
  {
    name: "Amazon",
    description: "A wide selection of items for our new home",
    url: "https://www.amazon.com/wedding",
    logo: "/amazon-logo.png",
  },
  {
    name: "Liverpool",
    description: "Artículos selectos para nuestro hogar",
    url: "https://www.liverpool.com.mx/mesaderegalos",
    logo: "/liverpool-mexico-store-logo.jpg",
  },
  {
    name: "Mercado Libre",
    description: "Regalos con entrega a todo México",
    url: "https://www.mercadolibre.com.mx",
    logo: "/mercadolibre-logo.jpg",
  },
]

export function RegistrySection() {
  return (
    <section id="registry" className="py-20 md:py-28 relative overflow-hidden">
      {/* Elegant lilac and whitish gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-accent/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Gift className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 text-balance">
            Wedding Registry
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto text-pretty">
            Your presence is the greatest gift, but if you wish to honor us with something more, we&apos;ve registered
            at these stores
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {registries.map((registry) => (
            <Card
              key={registry.name}
              className="group bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="w-full h-16 flex items-center justify-center mb-4 grayscale group-hover:grayscale-0 transition-all duration-300">
                  <img
                    src={registry.logo || "/placeholder.svg"}
                    alt={`${registry.name} logo`}
                    className="max-h-12 w-auto object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{registry.name}</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">{registry.description}</p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 bg-transparent"
                >
                  <a
                    href={registry.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    View Registry
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-10 max-w-lg mx-auto">
          We are grateful for your love and support as we begin this new chapter together
        </p>
      </div>
    </section>
  )
}
