import Breadcrumb from "@/components/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Czym jest NZeTA? — Nowozelandzka Elektroniczna Autoryzacja Podróży",
  description:
    "NZeTA (New Zealand Electronic Travel Authority) to elektroniczna autoryzacja podróży wymagana od obywateli polskich przy wjeździe do Nowej Zelandii.",
};

export default function WhatIsNzetaPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "O NZeTA", href: "/nzeta-info/what-is-nzeta/" }, { label: "Czym jest NZeTA?" }]} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#00247D] mb-8">
          Czym jest NZeTA?
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <p>
            <strong>NZeTA (New Zealand Electronic Travel Authority)</strong> to elektroniczny system autoryzacji
            podróży wprowadzony przez rząd Nowej Zelandii 1 października 2019 roku. Jest to wymóg dla obywateli
            krajów objętych programem zwolnienia z obowiązku wizowego (Visa Waiver), w tym <strong>Polski</strong>.
          </p>

          <div className="bg-[#F0F4FF] border-l-4 border-[#00247D] p-6 rounded-r-lg">
            <h2 className="text-xl font-bold text-[#00247D] mb-3">Kluczowe informacje</h2>
            <ul className="space-y-2">
              <li>NZeTA jest <strong>wymagana</strong> przed podróżą do Nowej Zelandii</li>
              <li>Dotyczy obywateli <strong>60 krajów</strong>, w tym Polski</li>
              <li>Ważna przez <strong>2 lata</strong> od daty wydania</li>
              <li>Pozwala na pobyt do <strong>90 dni</strong> na jedną wizytę</li>
              <li>Koszt: <strong>NZD $17</strong> (aplikacja) lub <strong>$23</strong> (strona internetowa) + <strong>IVL $100</strong></li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">Kto potrzebuje NZeTA?</h2>
          <p>NZeTA jest wymagane od:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Obywateli krajów objętych programem Visa Waiver podróżujących do Nowej Zelandii</li>
            <li>Pasażerów w tranzycie przez Nową Zelandię (z nielicznymi wyjątkami)</li>
            <li>Pasażerów statków wycieczkowych odwiedzających Nową Zelandię</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">Kto NIE potrzebuje NZeTA?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Obywatele Nowej Zelandii</li>
            <li>Obywatele Australii</li>
            <li>Osoby posiadające ważną wizę nowozelandzką</li>
            <li>Osoby posiadające status rezydenta Nowej Zelandii</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">Jak działa NZeTA?</h2>
          <p>
            NZeTA jest powiązana elektronicznie z Twoim paszportem. Nie musisz drukować żadnego dokumentu —
            linie lotnicze i służby graniczne sprawdzają Twoje NZeTA automatycznie przy odprawie i wjeździe
            do kraju. System jest w pełni cyfrowy.
          </p>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">NZeTA a wiza</h2>
          <p>
            NZeTA <strong>nie jest wizą</strong>. Jest to wstępna autoryzacja podróży, która umożliwia
            wejście na pokład samolotu lub statku do Nowej Zelandii. Ostateczna decyzja o wpuszczeniu
            do kraju należy do służb granicznych (Immigration Officers) na lotnisku.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg mt-8">
            <h3 className="text-lg font-bold text-amber-800 mb-2">Ważna uwaga</h3>
            <p className="text-amber-700">
              Posiadanie NZeTA nie gwarantuje wjazdu do Nowej Zelandii. Funkcjonariusze graniczni mogą
              odmówić wjazdu, jeśli uznają, że podróżny nie spełnia wymogów imigracyjnych.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
