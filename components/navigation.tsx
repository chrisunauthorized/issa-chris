"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const navLinks = [
  { href: "#home", label: "Inicio" },
  { href: "#countdown", label: "Cuenta regresiva" },
  { href: "#details", label: "Detalles" },
  { href: "#registry", label: "Registro" },
  { href: "#faq", label: "Preguntas frecuentes" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 overflow-hidden">
      {/* Floral Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image src="/nav-floral-bg.jpg" alt="" fill className="object-cover" priority />
        {/* Semi-transparent lilac overlay */}
        <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm" />
      </div>

      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-2 text-lg md:text-xl font-semibold text-white tracking-wide drop-shadow-sm"
          >
            <span>Issa</span>
            <span className="text-white/80 font-light">&</span>
            <span>Chris</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm uppercase tracking-widest text-white/90 hover:text-white transition-colors drop-shadow-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/20"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <ul className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-white/30 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm uppercase tracking-widest text-white/90 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
