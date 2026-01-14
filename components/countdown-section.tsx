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

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-2xl bg-card border border-border flex items-center justify-center shadow-sm">
        <span className="text-2xl md:text-4xl lg:text-5xl font-light text-foreground">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="mt-3 text-sm md:text-base uppercase tracking-widest text-muted-foreground">{label}</span>
    </div>
  )
}

export function CountdownSection() {
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

  if (!mounted) {
    return (
      <section id="countdown" className="py-24 md:py-32 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-base md:text-lg uppercase tracking-[0.3em] text-muted-foreground mb-4">Cuenta Regresiva Para</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-12">Nuestro Gran Día</h2>
          <div className="flex justify-center gap-4 md:gap-8">
            <TimeBlock value={0} label="Días" />
            <TimeBlock value={0} label="Horas" />
            <TimeBlock value={0} label="Minutos" />
            <TimeBlock value={0} label="Segundos" />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="countdown" className="py-24 md:py-32 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-base md:text-lg uppercase tracking-[0.3em] text-muted-foreground mb-4">Cuenta Regresiva Para</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-12">Nuestro Gran Día</h2>

        <div className="flex justify-center gap-4 md:gap-8">
          <TimeBlock value={timeLeft.days} label="Días" />
          <TimeBlock value={timeLeft.hours} label="Horas" />
          <TimeBlock value={timeLeft.minutes} label="Minutos" />
          <TimeBlock value={timeLeft.seconds} label="Segundos" />
        </div>

        <p className="mt-12 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          No podemos esperar para celebrar este hermoso camino con ustedes. Su presencia hará que nuestro día sea perfecto.
        </p>
      </div>
    </section>
  )
}
