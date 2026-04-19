import Image from "next/image";
import InfoCard from "@/components/InfoCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NZeTA Polska — Nowozelandzka Elektroniczna Autoryzacja Podróży",
  description:
    "Wszystko o NZeTA dla Polaków: opłaty NZD $17-23 + IVL $100, ważność 2 lata, pobyt do 90 dni. Przewodnik po wniosku i wymaganych dokumentach.",
};

const stats = [
  { value: "$17–23", label: "Opłata NZeTA (NZD)", sub: "+ IVL $100" },
  { value: "2 lata", label: "Okres ważności", sub: "od daty wydania" },
  { value: "90 dni", label: "Maksymalny pobyt", sub: "na jedną wizytę" },
  { value: "72h", label: "Czas rozpatrzenia", sub: "zazwyczaj krócej" },
];

const infoCards = [
  { title: "Czym jest NZeTA?", description: "Poznaj nowozelandzki system elektronicznej autoryzacji podróży i dowiedz się, kto musi go uzyskać.", href: "/nzeta-info/what-is-nzeta/", icon: "" },
  { title: "Jak aplikować", description: "Krok po kroku: złóż wniosek przez aplikację mobilną lub stronę internetową.", href: "/nzeta-info/application/", icon: "" },
  { title: "Opłaty NZeTA + IVL", description: "Szczegółowy podział kosztów: NZeTA $17-23 + podatek IVL $100.", href: "/nzeta-info/fee/", icon: "" },
  { title: "Okres ważności", description: "NZeTA jest ważna przez 2 lata — dowiedz się o przedłużeniu i wygaśnięciu.", href: "/nzeta-info/expiration/", icon: "📅" },
  { title: "Sprawdź status wniosku", description: "Jak sprawdzić, czy Twoje NZeTA zostało zatwierdzone.", href: "/nzeta-info/status-check/", icon: "" },
  { title: "Wymagane dokumenty", description: "Lista dokumentów potrzebnych do złożenia wniosku NZeTA.", href: "/nzeta-info/required-documents/", icon: "" },
  { title: "Oficjalna strona NZ", description: "Link do oficjalnej strony rządu Nowej Zelandii.", href: "/nzeta-info/official-nz/", icon: "" },
  { title: "Podatek IVL", description: "Czym jest International Visitor Conservation and Tourism Levy.", href: "/nzeta-info/ivl-tax/", icon: "🌿" },
  { title: "NZeTA a tranzyt", description: "Czy potrzebujesz NZeTA przy przesiadce w Nowej Zelandii?", href: "/nzeta-info/transit/", icon: "" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#00247D] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-nz.png"
            alt="Budynek parlamentu Nowej Zelandii"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/70 mb-3">
              Przewodnik dla obywateli polskich
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              NZeTA — Elektroniczna Autoryzacja Podróży do Nowej Zelandii
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
              Planujesz podróż do Nowej Zelandii? Od 1 października 2019 roku obywatele polscy
              muszą uzyskać NZeTA przed wjazdem. Dowiedz się wszystkiego o procesie
              aplikacyjnym, opłatach i wymaganiach.
            </p>
            <a
              href="https://www.immigration.govt.nz/visas/new-zealand-electronic-travel-authority-nzeta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#00247D] font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-lg"
            >
              Oficjalna strona NZeTA
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-[#E8E8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-4 bg-[#F0F4FF] rounded-xl">
                <div className="text-3xl md:text-4xl font-bold text-[#00247D]">{stat.value}</div>
                <div className="text-sm font-medium text-gray-700 mt-1">{stat.label}</div>
                <div className="text-xs text-gray-500 mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="bg-[#F0F4FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#00247D] mb-3">
              Wszystko o NZeTA
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Znajdź odpowiedzi na najważniejsze pytania dotyczące nowozelandzkiej elektronicznej autoryzacji podróży.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infoCards.map((card) => (
              <InfoCard key={card.href} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-[#00247D] text-white rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ważne: Podwyżka podatku IVL
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Od października 2024 roku podatek IVL (International Visitor Conservation and Tourism Levy)
                wzrósł z NZD $35 do <strong className="text-white">NZD $100</strong>. Łączny koszt NZeTA wynosi
                teraz <strong className="text-white">$117–$123 NZD</strong>.
              </p>
              <a
                href="/nzeta-info/ivl-tax/"
                className="inline-flex items-center gap-2 bg-white text-[#00247D] font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Dowiedz się więcej o IVL
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-[#F0F4FF] border-t border-[#E8E8E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            Ta strona jest niezależnym źródłem informacji i nie jest oficjalną stroną rządu Nowej Zelandii.
            Informacje mają charakter orientacyjny. W celu uzyskania oficjalnych informacji prosimy
            odwiedzić stronę{" "}
            <a
              href="https://www.immigration.govt.nz/visas/new-zealand-electronic-travel-authority-nzeta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00247D] underline hover:no-underline"
            >
              Immigration New Zealand
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
