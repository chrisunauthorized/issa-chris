const events = [
  {
    title: "💒 ThE CeReMoNy 💒",
    time: "4:00 PM",
    location: "ThE RoSe GaRdEn",
    description: "JoIn Us As We ExChAnGe OuR vOwS!!",
    color: "#ff00ff",
  },
  {
    title: "🍸 CoCkTaiL HoUr 🍸",
    time: "5:00 PM",
    location: "ThE TeRrAcE",
    description: "DrInKs & ApPeTiZeRs FoR eVeRyOnE!",
    color: "#00ffff",
  },
  {
    title: "🎉 ReCePtiOn & DiNnEr 🎉",
    time: "6:30 PM",
    location: "ThE GrAnD BaLlRoOm",
    description: "DiNnEr, DaNcInG & FuN aLl NiGhT!",
    color: "#ffff00",
  },
]

export function EventDetailsSection() {
  return (
    <section id="details" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="rainbow-text">~*~ EvEnT DeTaiLs ~*~</span>
          </h2>
          <p className="text-[#99ccff] mt-2">MoNdAy, JuNe 15tH, 2026</p>
        </div>

        {/* Event Table - 90s style! */}
        <div className="bevel-border bg-[#000066] p-2 overflow-x-auto">
          <table className="w-full" style={{ borderCollapse: "separate", borderSpacing: "4px" }}>
            <thead>
              <tr className="bg-[#ff00ff]">
                <th className="bevel-border bg-[#9900cc] p-2 text-[#ffff00] text-left">EvEnT</th>
                <th className="bevel-border bg-[#9900cc] p-2 text-[#ffff00]">TiMe</th>
                <th className="bevel-border bg-[#9900cc] p-2 text-[#ffff00]">LoCaTiOn</th>
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
          <h3 className="text-xl font-bold text-[#00ffff] text-center mb-4">📍 HoW 2 GeT ThErE 📍</h3>
          <div className="bevel-inset bg-[#000033] p-2">
            <p className="text-[#ffff00] font-bold text-center mb-2">RoSeWoOd GaRdEnS</p>
            <p className="text-[#99ccff] text-center text-sm mb-4">1234 ViNeYaRd LaNe, NaPa VaLlEy, CA 94558</p>
            <div className="aspect-video bevel-inset">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3126.8476033676196!2d-122.32539482427!3d38.29726547185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085063c4a8f5c67%3A0x1a8!2sNapa%20Valley%2C%20CA!5e0!3m2!1sen!2sus!4v1705000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Wedding Venue Location"
              />
            </div>
          </div>
          <div className="text-center mt-4">
            <a
              href="https://maps.google.com/?q=Napa+Valley+California"
              target="_blank"
              rel="noopener noreferrer"
              className="geocities-btn inline-block"
            >
              🗺️ GeT DiReCtIoNs 🗺️
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
