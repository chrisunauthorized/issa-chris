const events = [
  {
    title: "💒 ReCePcIóN 💒",
    time: "7:00 PM",
    location: "PaTiO mAnKu",
    description: "¡¡Te DaMoS lA bIeNvEnIdA a NuEsTrA cElEbRaCiÓn!!",
    color: "#ff00ff",
  },
  {
    title: "💑 CeReMoNiA CiViL 💑",
    time: "7:15 PM",
    location: "PaTiO mAnKu",
    description: "¡¡AcOmPáÑaNoS a UnIr NuEsTrAs ViDaS!!",
    color: "#00ffff",
  },
  {
    title: "🍸 CoCteL y FoToS 🍸",
    time: "7:40 PM",
    location: "PaTiO mAnKu",
    description: "¡¡BebiDaS y CaPtUrA dE rEcUeRdOs!!",
    color: "#ffff00",
  },
  {
    title: "🎉 InGrEsO fIeStA 🎉",
    time: "8:00 PM",
    location: "PaTiO mAnKu",
    description: "¡¡BaiLe, CeNa Y fIeStA tOdA lA nOcHe!!",
    color: "#00ff00",
  },
]

export function GeocitiesEvents() {
  return (
    <section id="details" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="rainbow-text">~*~ DeTaLLeS dEl EvEnTo ~*~</span>
          </h2>
          <p className="text-[#99ccff] mt-2">ViErNeS, 14 dE mArZo, 2026</p>
        </div>

        {/* Event Table - 90s style! */}
        <div className="bevel-border bg-[#000066] p-2 overflow-x-auto">
          <table className="w-full" style={{ borderCollapse: "separate", borderSpacing: "4px" }}>
            <thead>
              <tr className="bg-[#ff00ff]">
                <th className="bevel-border bg-[#9900cc] p-2 text-[#ffff00] text-left">EvEnTo</th>
                <th className="bevel-border bg-[#9900cc] p-2 text-[#ffff00]">HoRa</th>
                <th className="bevel-border bg-[#9900cc] p-2 text-[#ffff00]">LuGaR</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={index}>
                  <td className="bevel-inset bg-[#000033] p-3">
                    <p className="font-bold text-sm md:text-base" style={{ color: event.color }}>
                      {event.title}
                    </p>
                    <p className="text-[#99ccff] text-xs md:text-sm mt-1">{event.description}</p>
                  </td>
                  <td className="bevel-inset bg-[#000033] p-3 text-center">
                    <span className="text-[#00ff00] font-bold font-mono">{event.time}</span>
                  </td>
                  <td className="bevel-inset bg-[#000033] p-3 text-center">
                    <span className="text-[#ff6600]">{event.location}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Map Section */}
        <div className="mt-8 bevel-border bg-[#000066] p-4">
          <h3 className="text-xl font-bold text-[#00ffff] text-center mb-4">📍 CóMo LLeGaR 📍</h3>
          <div className="bevel-inset bg-[#000033] p-2">
            <p className="text-[#ffff00] font-bold text-center mb-2">PaTiO mAnKu</p>
            <p className="text-[#99ccff] text-center text-sm mb-4">Av. de la Paz 2557, Arcos Vallarta, 44130 Guadalajara, Jal.</p>
            <div className="aspect-video bevel-inset">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.9406094148962!2d-103.381576!3d20.6719951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae0d29939551%3A0x3743904425db5961!2sPatio%20Manku!5e0!3m2!1sen!2smx!4v1768348569199!5m2!1sen!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Ubicación del Lugar"
              />
            </div>
          </div>
          <div className="text-center mt-4">
            <a
              href="https://maps.app.goo.gl/QxmrQWsiS8s99tuCA"
              target="_blank"
              rel="noopener noreferrer"
              className="geocities-btn inline-block"
            >
              🗺️ ObtEnEr DiReCcIoNeS 🗺️
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
