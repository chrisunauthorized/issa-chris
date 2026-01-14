import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-2xl md:text-3xl font-light text-foreground mb-4">
          Issa <span className="text-primary">&</span> Chris
        </p>
        <p className="text-muted-foreground mb-6">14 de Marzo de 2026</p>
        
        <div className="mt-8">
          <a 
            href="/geocities" 
            className="text-xs text-muted-foreground hover:text-primary transition-colors"
            title="¿Buscas una versión más... retro? 🌈"
          >
            🕹️ Versión Clásica 90s
          </a>
        </div>
      </div>
    </footer>
  )
}
