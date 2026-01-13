import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { CountdownSection } from "@/components/countdown-section"
import { EventDetailsSection } from "@/components/event-details-section"
import { RegistrySection } from "@/components/registry-section"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function WeddingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CountdownSection />
      <EventDetailsSection />
      <RegistrySection />
      <FaqSection />
      <Footer />
    </main>
  )
}
