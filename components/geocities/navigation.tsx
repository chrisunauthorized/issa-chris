"use client"

import { useState } from "react"

export function GeocitiesNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "#home", label: "InIcIo" },
    { href: "#countdown", label: "CuEnTa ReGrEsIvA" },
    { href: "#details", label: "DeTaLLeS" },
    { href: "#registry", label: "ReGaLoS" },
    { href: "#faq", label: "P.M.F." },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bevel-border bg-[#000066] shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-[#ff00ff] font-bold text-xl">
            <span className="sparkle">💖</span> IsSa & ChRiS <span className="sparkle">💖</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="geocities-btn text-xs px-3 py-2"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden geocities-btn text-sm px-3 py-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block geocities-btn text-sm px-3 py-2 mb-2 text-center"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
