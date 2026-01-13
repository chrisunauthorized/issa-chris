"use client"

import { useEffect, useState } from "react"

const WEDDING_DATE = new Date("2026-06-15T16:00:00")

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
      <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-2xl bg-card border border-border flex items-center justify-center shadow-sm">
        <span className="text-3xl md:text-5xl lg:text-6xl font-light text-foreground">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="mt-3 text-xs md:text-sm uppercase tracking-widest text-muted-foreground">{label}</span>
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
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Counting Down To</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-12">Our Special Day</h2>
          <div className="flex justify-center gap-4 md:gap-8">
            <TimeBlock value={0} label="Days" />
            <TimeBlock value={0} label="Hours" />
            <TimeBlock value={0} label="Minutes" />
            <TimeBlock value={0} label="Seconds" />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="countdown" className="py-24 md:py-32 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Counting Down To</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-12">Our Special Day</h2>

        <div className="flex justify-center gap-4 md:gap-8">
          <TimeBlock value={timeLeft.days} label="Days" />
          <TimeBlock value={timeLeft.hours} label="Hours" />
          <TimeBlock value={timeLeft.minutes} label="Minutes" />
          <TimeBlock value={timeLeft.seconds} label="Seconds" />
        </div>

        <p className="mt-12 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          We can't wait to celebrate this beautiful journey with you. Your presence will make our day complete.
        </p>
      </div>
    </section>
  )
}
