import "./geocities.css"
import { GeocitiesNavigation } from "@/components/geocities/navigation"
import { GeocitiesHero } from "@/components/geocities/hero"
import { GeocitiesCountdown } from "@/components/geocities/countdown"
import { GeocitiesEvents } from "@/components/geocities/events"
import { GeocitiesRegistry } from "@/components/geocities/registry"
import { GeocitiesFAQ } from "@/components/geocities/faq"
import { GeocitiesFooter } from "@/components/geocities/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "IsSa & ChRiS - BoDa GeoCities EdItIoN",
  description: "~*~ BiEnVeNiDoS a La PáGiNa OfIcIaL dE lA bOdA dE iSsA & cHrIs - VeRsIóN rEtRo ~*~",
}

export default function GeocitiesPage() {
  return (
    <main className="min-h-screen geocities-body">
      <GeocitiesNavigation />
      <GeocitiesHero />
      <GeocitiesCountdown />
      <GeocitiesEvents />
      <GeocitiesRegistry />
      <GeocitiesFAQ />
      <GeocitiesFooter />
    </main>
  )
}
