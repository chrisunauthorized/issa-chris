export function GeocitiesHero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-16 text-center">
      {/* Under Construction GIF placeholder */}
      <div className="mb-4 text-4xl bounce-rotate">🚧</div>

      {/* Welcome Banner */}
      <div className="bevel-border bg-[#000066] p-4 mb-6 max-w-2xl">
        <p className="blink text-[#ff0000] text-xl font-bold mb-2">★ NUEVO ★</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-2">
          <span className="rainbow-text">~*~BiEnVeNiDoS~*~</span>
        </h1>
        <p className="text-[#ffff00] text-lg">A lA pÁgInA oFiCiAl De La BoDA dE</p>
      </div>

      {/* Names with Hearts */}
      <div className="my-6">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <span className="text-4xl sparkle">💕</span>
          <h2
            className="text-4xl md:text-6xl font-bold text-[#ff00ff]"
            style={{ textShadow: "3px 3px 0 #000066, -1px -1px 0 #ffffff" }}
          >
            IsSa
          </h2>
          <span className="text-5xl bounce-rotate">💖</span>
          <h2
            className="text-4xl md:text-6xl font-bold text-[#00ffff]"
            style={{ textShadow: "3px 3px 0 #000066, -1px -1px 0 #ffffff" }}
          >
            ChRiS
          </h2>
          <span className="text-4xl sparkle">💕</span>
        </div>
      </div>

      <hr className="hr-rainbow w-64 mx-auto" />

      {/* Wedding Info */}
      <div className="bevel-inset bg-[#330066] p-6 my-6 max-w-md">
        <p className="text-[#00ff00] text-xl font-bold mb-2">📅 GuArDa La FeCha 📅</p>
        <p className="text-[#ffff00] text-2xl md:text-3xl font-bold blink">14 dE mArZo, 2026</p>
        <p className="text-[#ff6600] mt-2">@ PaTiO mAnKu</p>
        <p className="text-[#99ccff]">GuAdAlAjArA, JaLiScO</p>
      </div>

      {/* Animated Icons */}
      <div className="flex gap-4 mt-4 text-3xl">
        <span className="bounce-rotate">💐</span>
        <span className="sparkle">💍</span>
        <span className="bounce-rotate">🥂</span>
        <span className="sparkle">🎂</span>
        <span className="bounce-rotate">💐</span>
      </div>

      {/* Visitor Counter */}
      <div className="mt-8 bevel-border bg-[#000000] p-2">
        <p className="text-[#00ff00] text-xs font-mono">
          TuU eReS eL vIsItAnTe #<span className="text-[#ff0000] font-bold">001337</span>
          DeSdE eNeRo 1999
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="mt-8 text-[#ffff00]">
        <p className="text-sm">👇 DeSliZa HaCiA aBaJo PaRa MáS iNfO 👇</p>
      </div>
    </section>
  )
}
