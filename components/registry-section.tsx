"use client"

import { Gift, ExternalLink, Store, Globe, CreditCard, Copy, ShoppingBag } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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
            Mesa de Regalos
          </h2>
          <p className="text-muted-foreground text-xl md:text-2xl max-w-2xl mx-auto text-pretty">
            Tu presencia es el mejor regalo, pero si deseas obsequiarnos algo más, estas son nuestras opciones
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Liverpool Card */}
          <Card className="group bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
            <CardContent className="p-8">
              <div className="w-full h-20 flex items-center justify-center mb-6">
                <ShoppingBag className="w-16 h-16 text-primary" />
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">Liverpool</h3>
                <p className="text-muted-foreground text-lg md:text-xl mb-4">Número de Evento: <span className="font-semibold text-foreground">51852378</span></p>
              </div>

              <div className="space-y-4 mb-6 text-left">
                <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                  <Globe className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1 text-base md:text-lg">Compra en Línea</h4>
                    <p className="text-base md:text-lg text-muted-foreground">Selecciona tus regalos desde cualquier lugar y los recibiremos automáticamente en nuestro domicilio</p>
                  </div>
                </div>
              </div>

              <Button
                asChild
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 mb-6"
              >
                <a
                  href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51852378"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                >
                  Ver Mesa de Regalos
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>

              <div className="text-left">
                <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                  <Store className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1 text-base md:text-lg">Compra en Tienda</h4>
                    <p className="text-base md:text-lg text-muted-foreground">Proporciona el número de evento <span className="font-semibold">51852378</span> en cualquier tienda Liverpool</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* BBVA Card */}
          <Card className="group bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
            <CardContent className="p-8">
              <div className="w-full h-20 flex items-center justify-center mb-6">
                <CreditCard className="w-16 h-16 text-primary" />
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">BBVA</h3>
                <p className="text-muted-foreground text-lg md:text-xl mb-4">Si no sabes qué regalarnos, tu apoyo nos ayudará para nuestra luna de miel</p>
              </div>

              <div className="space-y-4 mb-6 text-left">
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h4 className="font-medium text-foreground mb-2 text-sm">Cuenta</h4>
                  <div className="flex items-center justify-between gap-2 p-3 bg-background/50 rounded-md">
                    <code className="text-sm font-mono text-foreground">155 714 5945</code>
                    <button
                      onClick={() => navigator.clipboard.writeText("012180012345678901234")}
                      className="text-primary hover:text-primary/80 transition-colors"
                      title="Copiar CLABE"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h4 className="font-medium text-foreground mb-2 text-base md:text-lg">CLABE Interbancaria</h4>
                  <div className="flex items-center justify-between gap-2 p-3 bg-background/50 rounded-md">
                    <code className="text-base md:text-lg font-mono text-foreground">012 180 0123 4567 8901 23</code>
                    <button
                      onClick={() => navigator.clipboard.writeText("012180012345678901234")}
                      className="text-primary hover:text-primary/80 transition-colors"
                      title="Copiar CLABE"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <div className="grid grid-cols-2 gap-3 text-base md:text-lg">
                    <div>
                      <p className="text-muted-foreground mb-1">Banco</p>
                      <p className="font-medium text-foreground">BBVA México</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground mb-1">Beneficiario</p>
                      <p className="font-medium text-foreground">Issa & Chris</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-center text-base md:text-lg text-muted-foreground italic">
                Cualquier aportación será muy apreciada ❤️
              </p>
            </CardContent>
          </Card>
        </div>

        <p className="text-center text-muted-foreground text-base md:text-lg mt-10 max-w-lg mx-auto">
          Estamos agradecidos por su amor y apoyo mientras comenzamos este nuevo capítulo juntos
        </p>
      </div>
    </section>
  )
}
