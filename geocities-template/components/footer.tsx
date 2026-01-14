export function Footer() {
  return (
    <footer className="py-8 px-4 bevel-border bg-[#000066]">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Animated divider */}
        <div className="flex justify-center gap-2 mb-4 text-2xl">
          <span className="sparkle">💕</span>
          <span className="bounce-rotate">💒</span>
          <span className="sparkle">💕</span>
          <span className="bounce-rotate">💍</span>
          <span className="sparkle">💕</span>
        </div>

        <p className="text-2xl font-bold">
          <span className="rainbow-text">EmMa & JaMeS</span>
        </p>
        <p className="text-[#ff00ff] mt-2">JuNe 15, 2026</p>

        <hr className="hr-rainbow my-4 w-48 mx-auto" />

        <p className="text-[#99ccff] text-sm">MaDe WiTh 💖 fOr OuR sPeCiAl DaY!!</p>

        {/* 90s badges */}
        <div className="flex justify-center gap-4 mt-4 flex-wrap">
          <div className="bevel-border bg-[#000033] px-2 py-1">
            <span className="text-[#00ff00] text-xs font-mono">HTML 3.2</span>
          </div>
          <div className="bevel-border bg-[#000033] px-2 py-1">
            <span className="text-[#ffff00] text-xs font-mono">NETSCAPE NOW!</span>
          </div>
          <div className="bevel-border bg-[#000033] px-2 py-1">
            <span className="text-[#ff00ff] text-xs font-mono">BEST @ 800x600</span>
          </div>
        </div>

        <p className="mt-6 text-[#ff6600] font-bold blink">#EmMaAnDjAmEs2026</p>

        <p className="mt-4 text-[#666699] text-xs">© 1999-2026 GeOcItIeS wEdDiNg PaGe</p>
      </div>
    </footer>
  )
}
