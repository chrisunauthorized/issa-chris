"use client"

import { useState } from "react"

const faqs = [
  {
    question: "WhAt Is ThE dReSs CoDe??",
    answer: "FoRmAl AtTiRe PlZ! ElEgAnT dReSsEs 4 LaDiEs & SuItS 4 GeNtLeMeN. OuR cOlOrS r LiLaC & IvOrY!",
  },
  {
    question: "ArE kiDs WeLcOmE??",
    answer: "ThIs Is An AdUlT-oNlY pArTy!! HoPe U cAn EnJoY a NiGhT oFf! :)",
  },
  {
    question: "CaN i BrInG a DaTe??",
    answer: "DuE 2 vEnUe CaPaCiTy, OnLy GuEsTs On Ur InViTaTiOn PlZ!! ThX 4 UnDeRsTaNdInG!",
  },
  {
    question: "ArE oUtSiDe DrInKs AlLoWeD??",
    answer: "NoOoPe!! We HaVe A fUlLy StOcKeD oPeN bAr!!! 🍻🍷🍹",
  },
  {
    question: "Is ThErE pArKiNg??",
    answer: "YeS!! FrEe VaLeT pArKiNg AvAiLaBlE + SeLf-PaRkInG lOt NeXt DoOr!",
  },
  {
    question: "InDoOrS oR oUtDoOrS??",
    answer: "CeReMoNy = OuTdOoRs (If WeAtHeR iS nIcE) ★ ReCePtIoN = InDoOrS! BrInG a LiGhT jAcKeT!",
  },
  {
    question: "DiEtArY rEsTrIcTiOnS??",
    answer: "LeT uS kNoW wHeN u RSVP!! VeGaN, VeGeTaRiAn, GlUtEn-FrEe = No PrObLeM!",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-[#ff6600]">❓</span>
            <span className="rainbow-text"> F.A.Q. </span>
            <span className="text-[#ff6600]">❓</span>
          </h2>
          <p className="text-[#99ccff] mt-2">FrEqUeNtLy AsKeD qUeStIoNs</p>
        </div>

        <div className="bevel-border bg-[#000066] p-4">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-2">
              <button
                className="w-full text-left bevel-border bg-[#330066] p-3 hover:bg-[#440077] transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-[#00ffff] font-bold">
                  {openIndex === index ? "▼" : "►"} {faq.question}
                </span>
              </button>
              {openIndex === index && (
                <div className="bevel-inset bg-[#000033] p-4 mt-1">
                  <p className="text-[#ffff00]">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-[#99ccff] mb-4">StIlL hAvE qUeStIoNs??</p>
          <a href="mailto:emma.james.wedding@email.com" className="geocities-btn inline-block">
            ✉️ EmAiL uS ✉️
          </a>
        </div>
      </div>
    </section>
  )
}
