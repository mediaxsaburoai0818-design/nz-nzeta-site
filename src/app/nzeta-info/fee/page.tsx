import Breadcrumb from "@/components/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opłaty NZeTA i IVL — Ile kosztuje NZeTA w 2025 roku?",
  description:
    "Opłata NZeTA wynosi NZD $17 (aplikacja) lub $23 (online) + IVL $100. Łączny koszt: $117-$123 NZD. Podwyżka IVL od października 2024.",
};

export default function FeePage() {
  return (
    <>
      <Breadcrumb items={[{ label: "O NZeTA", href: "/nzeta-info/what-is-nzeta/" }, { label: "Opłaty" }]} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#00247D] mb-8">
          Opłaty NZeTA i IVL — Ile kosztuje?
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <p>
            Koszt uzyskania NZeTA składa się z <strong>dwóch części</strong>: opłaty za samą autoryzację NZeTA
            oraz obowiązkowego podatku IVL (International Visitor Conservation and Tourism Levy).
          </p>

          {/* Fee Table */}
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#00247D] text-white">
                  <th className="px-6 py-4 text-left font-semibold">Opłata</th>
                  <th className="px-6 py-4 text-center font-semibold">Aplikacja mobilna</th>
                  <th className="px-6 py-4 text-center font-semibold">Strona internetowa</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-[#E8E8E8]">
                  <td className="px-6 py-4 font-medium">Opłata NZeTA</td>
                  <td className="px-6 py-4 text-center font-bold text-[#00247D]">NZD $17</td>
                  <td className="px-6 py-4 text-center font-bold text-[#00247D]">NZD $23</td>
                </tr>
                <tr className="bg-[#F0F4FF] border-b border-[#E8E8E8]">
                  <td className="px-6 py-4 font-medium">Podatek IVL</td>
                  <td className="px-6 py-4 text-center font-bold text-[#00247D]">NZD $100</td>
                  <td className="px-6 py-4 text-center font-bold text-[#00247D]">NZD $100</td>
                </tr>
                <tr className="bg-[#00247D] text-white">
                  <td className="px-6 py-4 font-bold">ŁĄCZNIE</td>
                  <td className="px-6 py-4 text-center font-bold text-2xl">NZD $117</td>
                  <td className="px-6 py-4 text-center font-bold text-2xl">NZD $123</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
            <h3 className="text-lg font-bold text-amber-800 mb-2">Podwyżka IVL od października 2024</h3>
            <p className="text-amber-700">
              Od 1 października 2024 roku podatek IVL wzrósł z <strong>NZD $35</strong> do <strong>NZD $100</strong>.
              Jest to znacząca podwyżka, która zwiększyła łączny koszt NZeTA o NZD $65.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">Dlaczego aplikacja jest tańsza?</h2>
          <p>
            Rząd Nowej Zelandii celowo ustala niższą opłatę za wniosek przez aplikację mobilną,
            aby zachęcić podróżnych do korzystania z niej. Aplikacja umożliwia automatyczne skanowanie
            paszportu i robienie zdjęcia, co przyspiesza proces weryfikacji.
          </p>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">Czym jest podatek IVL?</h2>
          <p>
            IVL (International Visitor Conservation and Tourism Levy) to obowiązkowy podatek nakładany
            na większość zagranicznych turystów odwiedzających Nową Zelandię. Środki z IVL są
            przeznaczane na ochronę środowiska naturalnego i rozwój infrastruktury turystycznej.
          </p>
          <p>
            <a href="/nzeta-info/ivl-tax/" className="text-[#00247D] underline font-medium">
              Dowiedz się więcej o podatku IVL →
            </a>
          </p>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">Kto jest zwolniony z IVL?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Obywatele Australii</li>
            <li>Dzieci poniżej 2 lat</li>
            <li>Posiadacze wiz dyplomatycznych</li>
            <li>Obywatele wysp Pacyfiku objęci specjalnymi umowami</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">Metody płatności</h2>
          <p>Opłatę można uiścić kartą:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Visa</strong></li>
            <li><strong>Mastercard</strong></li>
            <li><strong>UnionPay</strong> (tylko strona internetowa)</li>
          </ul>

          <div className="bg-[#F0F4FF] border-l-4 border-[#00247D] p-6 rounded-r-lg mt-8">
            <h3 className="text-lg font-bold text-[#00247D] mb-2">Brak zwrotu opłaty</h3>
            <p>
              Opłata za NZeTA i IVL <strong>nie podlega zwrotowi</strong>, nawet jeśli wniosek zostanie
              odrzucony lub podróżny zrezygnuje z wyjazdu. Upewnij się, że prawidłowo wypełniasz wniosek
              przed dokonaniem płatności.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
