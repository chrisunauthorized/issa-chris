import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-2xl md:text-3xl font-light text-foreground mb-4">
          Emma <span className="text-primary">&</span> James
        </p>
        <p className="text-muted-foreground mb-6">June 15, 2026</p>
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <span className="text-sm">Made with</span>
          <Heart className="w-4 h-4 text-primary fill-primary" />
          <span className="text-sm">for our special day</span>
        </div>
        <p className="mt-8 text-xs text-muted-foreground/60">#EmmaAndJames2026</p>
      </div>
    </footer>
  )
}
