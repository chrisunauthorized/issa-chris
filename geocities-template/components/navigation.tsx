"use client"

import { useState } from "react"

const navLinks = [
  { href: "#home", label: "~HoMe~" },
  { href: "#countdown", label: "CouNtDoWn" },
  { href: "#details", label: "DeTaiLs" },
  { href: "#registry", label: "GiFtS" },
  { href: "#faq", label: "F.A.Q." },
  { href: "#guestbook", label: "GuEsTbOoK" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#000066] bevel-border">
      {/* Marquee Banner */}
      <div className="bg-[#ff00ff] py-1 overflow-hidden">
        <p className="marquee-text whitespace-nowrap text-[#ffff00] font-bold text-sm">
          ★彡 WeLcOmE tO EmMa & JaMeS wEdDiNg PaGe!!! ★彡 YoU aRe ViSiToR #1337 ★彡 LaSt UpDaTeD: JaNuArY 2026 ★彡 BeSt
          ViEwEd In NeTsCaPe NaViGaToR 4.0 ★彡 SiGn OuR gUeStBoOk!!! ★彡
        </p>
      </div>

      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span className="text-2xl">💒</span>
            <span className="rainbow-text font-bold text-lg md:text-xl">~*~EmMa & JaMeS~*~</span>
            <span className="text-2xl">💒</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <li key={link.href} className="flex items-center">
                <a
                  href={link.href}
                  className="px-3 py-1 text-[#00ffff] hover:text-[#ffff00] hover:bg-[#ff00ff] font-bold text-sm"
                >
                  {link.label}
                </a>
                {index < navLinks.length - 1 && <span className="text-[#ff00ff]">|</span>}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden geocities-btn text-sm" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "X CLosE X" : "☰ MeNu ☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <ul className="md:hidden mt-2 bevel-inset bg-[#000033] p-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-[#00ffff] hover:text-[#ffff00] hover:bg-[#ff00ff] font-bold py-1 px-2"
                  onClick={() => setIsOpen(false)}
                >
                  ➤ {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
