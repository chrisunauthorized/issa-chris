"use client"

const registries = [
  {
    name: "LiVeRpOoL",
    description: "¡¡ArTíCuLoS pArA nUeStRo HoGaR!!",
    url: "https://mesaderegalos.liverpool.com.mx/milistaderegalos/51852378",
    emoji: "🛍️",
    eventNumber: "51852378",
  },
  {
    name: "BBVA",
    description: "¡¡ApOyO pArA nUeStRa LuNa dE mIeL!!",
    url: "#",
    emoji: "💳",
    clabe: "012 180 0123 4567 8901 23",
    account: "155 714 5945",
  },
]

export function GeocitiesRegistry() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text.replace(/\s/g, ""))
  }

  return (
    <section id="registry" className="py-16 px-4 bg-[#330066]">
      <div className="container mx-auto max-w-4xl">
        <hr className="hr-rainbow mb-8" />

        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-4xl bounce-rotate inline-block">🎁</span>
            <span className="rainbow-text"> MeSa dE rEgAlOs </span>
            <span className="text-4xl bounce-rotate inline-block">🎁</span>
          </h2>
          <p className="text-[#99ccff] mt-4 max-w-xl mx-auto">
            ¡¡Tu PrEsEnCiA eS eL mEjOr ReGaLo!! PeRo Si QuIeReS oBoSeQuIaRnOs AlGo MáS...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {registries.map((registry) => (
            <div
              key={registry.name}
              className="bevel-border bg-[#000066] p-4 text-center hover:bg-[#000099] transition-colors"
            >
              <div className="text-5xl mb-4 bounce-rotate">{registry.emoji}</div>
              
              <h3 className="text-xl font-bold text-[#ff00ff] mb-2">{registry.name}</h3>
              <p className="text-[#99ccff] text-sm mb-4">{registry.description}</p>

              {registry.eventNumber && (
                <div className="mb-4">
                  <p className="text-[#ffff00] text-sm">NúMeRo dE eVeNtO:</p>
                  <p className="text-[#00ff00] font-bold text-lg">{registry.eventNumber}</p>
                </div>
              )}

              {registry.clabe && (
                <div className="text-left mb-4 bevel-inset bg-[#000033] p-3">
                  <p className="text-[#ffff00] text-xs mb-1">CLABE:</p>
                  <div className="flex items-center justify-between gap-2">
                    <code className="text-[#00ff00] text-xs font-mono">{registry.clabe}</code>
                    <button
                      onClick={() => copyToClipboard(registry.clabe!)}
                      className="text-[#ff00ff] hover:text-[#ff66ff] text-xs"
                    >
                      📋
                    </button>
                  </div>
                  <p className="text-[#ffff00] text-xs mt-2 mb-1">CuEnTa:</p>
                  <code className="text-[#00ff00] text-xs font-mono">{registry.account}</code>
                </div>
              )}

              {registry.url !== "#" && (
                <a
                  href={registry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="geocities-btn inline-block text-sm"
                >
                  VeR mEsA dE rEgAlOs ➔
                </a>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-[#ffff00] mt-6 blink text-sm">*** ¡¡¡GrAcIaS pOr Tu AmOr Y aPoYo!!! ***</p>

        <hr className="hr-rainbow mt-8" />
      </div>
    </section>
  )
}
