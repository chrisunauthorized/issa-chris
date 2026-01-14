const registries = [
  {
    name: "AmAzOn",
    description: "LoTs Of StUfF 4 OuR nEw HoMe!!",
    url: "https://www.amazon.com/wedding",
    emoji: "📦",
  },
  {
    name: "LiVeRpOoL",
    description: "ArTíCuLoS pArA nUeStRo HoGaR!",
    url: "https://www.liverpool.com.mx/mesaderegalos",
    emoji: "🛍️",
  },
  {
    name: "MeRcAdO LiBrE",
    description: "ReGaLoS cOn EnTrEgA a ToDo MéXiCo!",
    url: "https://www.mercadolibre.com.mx",
    emoji: "🎁",
  },
]

export function RegistrySection() {
  return (
    <section id="registry" className="py-16 px-4 bg-[#330066]">
      <div className="container mx-auto max-w-4xl">
        <hr className="hr-rainbow mb-8" />

        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-4xl bounce-rotate inline-block">🎁</span>
            <span className="rainbow-text"> GiFt ReGiStRy </span>
            <span className="text-4xl bounce-rotate inline-block">🎁</span>
          </h2>
          <p className="text-[#99ccff] mt-4 max-w-xl mx-auto">
            Ur PrEsEnCe Is ThE gReAtEsT gIfT!! BuT iF u WaNt 2 GeT uS sOmEtHiNg...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {registries.map((registry) => (
            <div
              key={registry.name}
              className="bevel-border bg-[#000066] p-4 text-center hover:bg-[#000099] transition-colors"
            >
              <div className="text-5xl mb-4 bounce-rotate">{registry.emoji}</div>
              <h3 className="text-xl font-bold text-[#ff00ff] mb-2">{registry.name}</h3>
              <p className="text-[#99ccff] text-sm mb-4">{registry.description}</p>
              <a
                href={registry.url}
                target="_blank"
                rel="noopener noreferrer"
                className="geocities-btn inline-block text-sm"
              >
                ViEw ReGiStRy ➔
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-[#ffff00] mt-6 blink text-sm">*** ThAnK u 4 Ur LoVe & SuPpOrT!!! ***</p>

        <hr className="hr-rainbow mt-8" />
      </div>
    </section>
  )
}
