import Breadcrumb from "@/components/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NZeTA a tranzyt — Czy potrzebujesz NZeTA przy przesiadce?",
  description:
    "Czy potrzebujesz NZeTA przy tranzycie przez Nową Zelandię? Dowiedz się o wymaganiach dla pasażerów w tranzycie i wyjątkach.",
};

export default function TransitPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "O NZeTA", href: "/nzeta-info/what-is-nzeta/" }, { label: "Tranzyt" }]} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#00247D] mb-8">
          NZeTA a tranzyt przez Nową Zelandię
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <div className="bg-[#F0F4FF] border-l-4 border-[#00247D] p-6 rounded-r-lg">
            <h2 className="text-xl font-bold text-[#00247D] mb-3">Krótka odpowiedź</h2>
            <p className="text-lg">
              <strong>Tak</strong> — w większości przypadków potrzebujesz NZeTA nawet przy tranzycie
              (przesiadce) w Nowej Zelandii, jeśli nie masz ważnej wizy nowozelandzkiej.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">Kiedy NZeTA jest wymagana przy tranzycie?</h2>
          <p>
            NZeTA jest wymagana od pasażerów tranzytowych z krajów objętych programem Visa Waiver
            (w tym Polski), którzy:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Przesiadają się na inny lot w Nowej Zelandii</li>
            <li>Przebywają na lotnisku w oczekiwaniu na lot łączący</li>
            <li>Muszą opuścić strefę tranzytową (np. przy długim oczekiwaniu)</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">Wyjątki — kiedy NZeTA NIE jest wymagana?</h2>
          <p>NZeTA nie jest wymagana przy tranzycie, jeśli:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Posiadasz ważną wizę nowozelandzką</li>
            <li>Jesteś obywatelem Australii</li>
            <li>Jesteś obywatelem Nowej Zelandii</li>
            <li>Spełniasz szczególne warunki zwolnienia z NZeTA dla pasażerów tranzytowych (bardzo ograniczone przypadki)</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">Opłata IVL przy tranzycie</h2>
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <p className="text-green-800">
              <strong>Dobra wiadomość:</strong> Pasażerowie w tranzycie, którzy nie opuszczają strefy
              tranzytowej lotniska, mogą być <strong>zwolnieni z podatku IVL</strong>. W takim przypadku
              płacisz tylko opłatę NZeTA (NZD $17 lub $23), bez IVL.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">Popularne trasy tranzytowe przez NZ</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Europa → Auckland → Wyspy Pacyfiku (Fiji, Samoa, Tonga)</li>
            <li>Azja → Auckland → Australia (w niektórych przypadkach)</li>
            <li>Ameryka Południowa → Auckland → Australia/Azja</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">Jak złożyć wniosek o NZeTA tranzytową?</h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li>Złóż standardowy wniosek o NZeTA (aplikacja lub strona internetowa)</li>
            <li>W pytaniu o cel podróży wybierz <strong>&quot;Transit&quot;</strong></li>
            <li>Podaj informacje o locie łączącym</li>
            <li>Zapłać opłatę NZeTA (IVL może nie być wymagana)</li>
          </ol>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg mt-8">
            <h3 className="text-lg font-bold text-amber-800 mb-2">Ważna wskazówka</h3>
            <p className="text-amber-700">
              Nawet jeśli planujesz tylko krótką przesiadkę, złóż wniosek o NZeTA <strong>co najmniej
              72 godziny przed wylotem</strong>. Bez ważnego NZeTA linia lotnicza może odmówić
              Ci wejścia na pokład samolotu.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
