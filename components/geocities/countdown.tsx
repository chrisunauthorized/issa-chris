"use client"

import { useEffect, useState } from "react"

const WEDDING_DATE = new Date("2026-03-14T19:00:00")

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calculateTimeLeft(): TimeLeft {
  const difference = WEDDING_DATE.getTime() - new Date().getTime()

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

function TimeBlock({ value, label, color }: { value: number; label: string; color: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bevel-border bg-[#000033] p-2 md:p-4 min-w-[60px] md:min-w-[80px]" style={{ borderColor: color }}>
        <span className="text-2xl md:text-4xl font-bold font-mono" style={{ color, textShadow: `2px 2px 0 #000000` }}>
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="mt-2 text-xs md:text-sm font-bold text-[#ffff00]">{label}</span>
    </div>
  )
}

export function GeocitiesCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="countdown" className="py-16 px-4 bg-[#330066]">
      <div className="container mx-auto max-w-4xl text-center">
        <hr className="hr-rainbow mb-8" />

        <div className="bevel-border bg-[#000066] p-6 md:p-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">
            <span className="text-[#ff00ff]">⏰</span>
            <span className="rainbow-text"> CuEnTa ReGrEsIvA pArA eL gRaN dÍa!! </span>
            <span className="text-[#ff00ff]">⏰</span>
          </h2>
          <p className="text-[#99ccff] mb-6">TiC tAc TiC tAc...</p>

          {mounted && (
            <div className="flex justify-center gap-2 md:gap-6 flex-wrap">
              <TimeBlock value={timeLeft.days} label="DíAs" color="#ff0000" />
              <TimeBlock value={timeLeft.hours} label="HoRaS" color="#ffff00" />
              <TimeBlock value={timeLeft.minutes} label="MiNs" color="#00ff00" />
              <TimeBlock value={timeLeft.seconds} label="SeGs" color="#00ffff" />
            </div>
          )}

          <p className="mt-8 text-[#ff6600] font-bold text-lg blink">*** ¡¡¡No PoDeMoS eSpErAr A vErTe AhÍ!!! ***</p>
        </div>

        <hr className="hr-rainbow mt-8" />
      </div>
    </section>
  )
}
