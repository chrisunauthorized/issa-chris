"use client"

import { useState } from "react"

const faqs = [
  {
    question: "¿¿CuÁl Es El CóDiGo dE vEsTiMeNtA??",
    answer:
      "¡¡VeStImEnTa FoRmAl PoR fAvOr!! PiEnSa En VeStIdOs dE cÓcTeL eLegAnTeS pArA dAmAs Y tRaJeS o SmOkInG pArA cAbAlLeRoS. PoR fAvOr EvItA uSaR lIlA o BlAnCo, YA qUe sOn LoS cOlOrEs ReSeRvAdOs PaRa La BoDA. ¡¡UsA lO qUe Te HaGa SeNtIr HeRmOsA/o!!",
  },
  {
    question: "¿¿PuEdO lLeVaR aCoMpAÑaNtE??",
    answer:
      "DeBiDo A lA cApAcIdAd DeL lUgAr, SoLo PoDeM oS aCoMoDaR a LoS iNvItAdOs FoRmAlMeNtE iNcLuIdOs En Tu InViTaCiÓn. PoR fAvOr CoNsUlTa Tu InViTaCiÓn PaRa MáS dEtAlLeS!!",
  },
  {
    question: "¿¿LoS nIÑoS sOn BiEnVeNiDoS??",
    answer:
      "¡¡¡SÍ!!! LoS nIÑoS sOn BiEnVeNiDoS sIeMpRe Y cUaNdO eStÉn InClUiDoS fOrMaLmEnTe En Tu InViTaCiÓn. PoR fAvOr VeRiFiCa Tu InViTaCiÓn PaRa CoNfIrMaR qUiÉnEs EsTáN iNvItAdOs!!",
  },
  {
    question: "¿¿Se PeRmItEn BebiDaS dE fUeRa??",
    answer:
      "¡¡NoOoOo!! TeNdReMoS uNa BaRrA lIbRe CoMpLeTaMeNte SuRtiDa DuRaNte ToDa La VeLaDa!! 🍻🍷🍹",
  },
  {
    question: "¿¿HaY eStAcIoNaMiEnTo DiSpOnIbLe??",
    answer:
      "¡¡¡SÍ!!! HaBrÁ SeRvIcIo dE vAlEt PaRkInG dIsPonIbLe. El VaLeT eStAcIoNaRá Tu VeHíCuLo En LaS cAlLeS aLeDaÑaS!!",
  },
  {
    question: "¿¿La BoDa SeRá En InTeRiOr O eXtErIoR??",
    answer:
      "La BoDa CoMpLeTa Se LleVaRá A cAbO aL aIrE lIbRe En Un HeRmOsO jArDíN!! CoN eL cLiMa PrImAvErAl dE mArZo En GuAdAlAjArA, EsPerAmOs UnA tEmPeRaTuRa AgRaDabLe. ReCOMeNdAMoS tRaEr UnA cHaMaRrA lIgErA pArA lA nOcHe!!",
  },
  {
    question: "¿¿HaY rEgIsTrO dE rEgAlOs??",
    answer:
      "¡¡Tu PrEsEnCiA eS eL mEjOr ReGaLo!! SiN eMbArGo, Si DeSe As HoNrArNoS cOn Un ObSeQuIo, TeNeMoS nUeStRa MeSa dE rEgAlOs En LiVeRpOoL y TaMbIéN pUeDeS cOnTrIbUiR a NuEsTrO fOnDo dE lUnA dE mIeL vÍa BBVA!!",
  },
]

export function GeocitiesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-[#ff6600]">❓</span>
            <span className="rainbow-text"> P.M.F. </span>
            <span className="text-[#ff6600]">❓</span>
          </h2>
          <p className="text-[#99ccff] mt-2">PrEgUnTaS mÁs FrEcUeNtEs</p>
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
                  <p className="text-[#ffff00] text-sm">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
