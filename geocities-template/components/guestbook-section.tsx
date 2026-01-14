"use client"

import type React from "react"

import { useState } from "react"

export function GuestbookSection() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="guestbook" className="py-16 px-4 bg-[#330066]">
      <div className="container mx-auto max-w-2xl">
        <hr className="hr-rainbow mb-8" />

        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-4xl sparkle inline-block">📝</span>
            <span className="rainbow-text"> SiGn OuR gUeStBoOk!! </span>
            <span className="text-4xl sparkle inline-block">📝</span>
          </h2>
          <p className="text-[#99ccff] mt-2">LeAvE uS a MeSsAgE!!</p>
        </div>

        <div className="bevel-border bg-[#000066] p-6">
          {submitted ? (
            <div className="text-center py-8">
              <p className="text-4xl mb-4">🎉</p>
              <p className="text-[#00ff00] font-bold text-xl blink">ThAnK u 4 SiGnInG!!!</p>
              <p className="text-[#ffff00] mt-2">Ur MeSsAgE hAs BeEn SaVeD!!</p>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setName("")
                  setMessage("")
                }}
                className="geocities-btn mt-4"
              >
                SiGn AgAiN?
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[#00ffff] font-bold mb-2">Ur NaMe:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bevel-inset bg-[#000033] p-3 text-[#ffff00] font-mono focus:outline-none focus:ring-2 focus:ring-[#ff00ff]"
                  placeholder="TyPe Ur NaMe HeRe..."
                />
              </div>
              <div>
                <label className="block text-[#00ffff] font-bold mb-2">Ur MeSsAgE:</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="w-full bevel-inset bg-[#000033] p-3 text-[#ffff00] font-mono resize-none focus:outline-none focus:ring-2 focus:ring-[#ff00ff]"
                  placeholder="LeAvE a MeSsAgE 4 ThE hApPy CoUpLe!!"
                />
              </div>
              <div className="text-center">
                <button type="submit" className="geocities-btn text-lg px-8">
                  ✍️ SiGn It!! ✍️
                </button>
              </div>
            </form>
          )}
        </div>

        <hr className="hr-rainbow mt-8" />
      </div>
    </section>
  )
}
