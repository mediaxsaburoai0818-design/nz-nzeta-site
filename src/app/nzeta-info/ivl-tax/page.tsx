import Breadcrumb from "@/components/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podatek IVL — International Visitor Conservation and Tourism Levy",
  description:
    "Podatek IVL wzrósł do NZD $100 od października 2024. Dowiedz się, czym jest IVL, kto musi go zapłacić i na co są przeznaczane środki.",
};

export default function IvlTaxPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "O NZeTA", href: "/nzeta-info/what-is-nzeta/" }, { label: "Podatek IVL" }]} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#00247D] mb-8">
          Podatek IVL — International Visitor Conservation and Tourism Levy
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
            <h3 className="text-lg font-bold text-amber-800 mb-2">Podwyżka od października 2024</h3>
            <p className="text-amber-700">
              Od 1 października 2024 roku podatek IVL wzrósł z <strong>NZD $35</strong> do <strong>NZD $100</strong>.
              To prawie trzykrotna podwyżka, która znacząco wpływa na łączny koszt podróży do Nowej Zelandii.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">Czym jest IVL?</h2>
          <p>
            IVL (International Visitor Conservation and Tourism Levy) to obowiązkowy podatek wprowadzony
            przez rząd Nowej Zelandii 1 lipca 2019 roku. Jest nakładany na większość zagranicznych
            turystów i podróżnych odwiedzających Nową Zelandię.
          </p>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">Na co przeznaczane są środki z IVL?</h2>
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-[#F0F4FF] rounded-xl p-6">
              <div className="text-3xl mb-3">🌿</div>
              <h3 className="text-lg font-bold text-[#00247D] mb-2">Ochrona środowiska</h3>
              <p className="text-sm text-gray-600">
                Ochrona unikalnej przyrody Nowej Zelandii, parków narodowych, rezerwatów i ekosystemów morskich.
              </p>
            </div>
            <div className="bg-[#F0F4FF] rounded-xl p-6">
              <div className="text-3xl mb-3">🏗️</div>
              <h3 className="text-lg font-bold text-[#00247D] mb-2">Infrastruktura turystyczna</h3>
              <p className="text-sm text-gray-600">
                Rozwój i utrzymanie szlaków turystycznych, schronisk, toalet publicznych i punktów informacyjnych.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">Historia zmian opłaty IVL</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#00247D] text-white">
                  <th className="px-6 py-4 text-left">Okres</th>
                  <th className="px-6 py-4 text-center">Kwota IVL</th>
                  <th className="px-6 py-4 text-left">Uwagi</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-[#E8E8E8]">
                  <td className="px-6 py-4">Lipiec 2019 — Wrzesień 2024</td>
                  <td className="px-6 py-4 text-center font-bold">NZD $35</td>
                  <td className="px-6 py-4">Początkowa kwota</td>
                </tr>
                <tr className="bg-[#F0F4FF]">
                  <td className="px-6 py-4 font-medium">Od października 2024</td>
                  <td className="px-6 py-4 text-center font-bold text-[#00247D] text-xl">NZD $100</td>
                  <td className="px-6 py-4">Podwyżka o 186%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">Kto musi zapłacić IVL?</h2>
          <p>IVL jest wymagane od:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Podróżnych ubiegających się o NZeTA (obywatele krajów Visa Waiver, w tym Polska)</li>
            <li>Podróżnych ubiegających się o wizę turystyczną do Nowej Zelandii</li>
            <li>Pasażerów statków wycieczkowych</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">Kto jest zwolniony z IVL?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Obywatele Nowej Zelandii i Australii</li>
            <li>Dzieci poniżej 2 lat</li>
            <li>Posiadacze wiz dyplomatycznych i urzędowych</li>
            <li>Obywatele wybranych państw wyspiarskich Pacyfiku</li>
            <li>Posiadacze wiz pracowniczych i studenckich</li>
            <li>Osoby ubiegające się o status uchodźcy</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">Jak zapłacić IVL?</h2>
          <p>
            Podatek IVL jest pobierany automatycznie podczas składania wniosku o NZeTA. Nie musisz
            płacić go oddzielnie — jest on doliczany do opłaty za NZeTA w jednej transakcji.
          </p>

          <div className="bg-[#F0F4FF] rounded-xl p-8 text-center mt-8">
            <p className="text-sm text-gray-500 mb-2">Łączny koszt NZeTA + IVL</p>
            <div className="text-4xl font-bold text-[#00247D]">NZD $117 — $123</div>
            <p className="text-sm text-gray-500 mt-2">
              NZeTA ($17 aplikacja / $23 online) + IVL ($100)
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
