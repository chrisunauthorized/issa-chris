import { Heart } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image src="/hero-background.jpg" alt="" fill className="object-cover blur-sm scale-105" priority />
        {/* Overlay to ensure text readability with lilac tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/90" />
        <div className="absolute inset-0 bg-primary/10" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-4 md:left-20 w-32 h-32 md:w-48 md:h-48 rounded-full bg-primary/10 blur-3xl z-[1]" />
      <div className="absolute bottom-20 right-4 md:right-20 w-40 h-40 md:w-64 md:h-64 rounded-full bg-accent/30 blur-3xl z-[1]" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-xl uppercase tracking-[0.3em] text-muted-foreground mb-6">
          Nuestra Boda
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-4 text-balance">
          Issa <span className="text-primary">&</span> Chris
        </h1>

        <div className="flex items-center justify-center gap-4 my-8">
          <div className="h-px w-16 md:w-24 bg-border" />
          <Heart className="h-5 w-5 md:h-6 md:w-6 text-primary fill-primary" />
          <div className="h-px w-16 md:w-24 bg-border" />
        </div>

        <div className="text-xl">
          <p className="text-3xl md:text-4xl lg:text-5xl font-light text-muted-foreground mb-2">14 de Marzo de 2026</p>
          <p className="text-2xl md:text-3xl text-muted-foreground">Patio Manku • Guadalajara, Jalisco</p>
        </div>

        <a
          href="#countdown"
          className="inline-block mt-12 px-8 py-3 bg-primary text-primary-foreground rounded-full text-xl uppercase tracking-widest hover:bg-primary/90 transition-colors"
        >
          Cuenta regresiva para el gran día
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground z-10">
        <span className="text-sm md:text-base uppercase tracking-widest">Deslizar</span>
        <div className="w-px h-8 bg-border animate-pulse" />
      </div>
    </section>
  )
}
