"use client";

import Breadcrumb from "@/components/Breadcrumb";
import { useState } from "react";

const faqs = [
  {
    q: "Czym jest NZeTA i czy potrzebuję go jako obywatel Polski?",
    a: "NZeTA (New Zealand Electronic Travel Authority) to elektroniczna autoryzacja podróży wymagana od obywateli krajów objętych programem Visa Waiver, w tym Polski. Jeśli planujesz podróż do Nowej Zelandii na okres do 90 dni, musisz uzyskać NZeTA przed wylotem.",
  },
  {
    q: "Ile kosztuje NZeTA?",
    a: "Opłata za NZeTA wynosi NZD $17 (przez aplikację mobilną) lub NZD $23 (przez stronę internetową). Dodatkowo obowiązkowy jest podatek IVL w wysokości NZD $100. Łączny koszt to $117–$123 NZD.",
  },
  {
    q: "Jak długo jest ważna NZeTA?",
    a: "NZeTA jest ważna przez 2 lata od daty wydania. W tym okresie możesz wielokrotnie wjeżdżać do Nowej Zelandii, pod warunkiem, że każdy pobyt nie przekracza 90 dni.",
  },
  {
    q: "Jak długo trwa rozpatrzenie wniosku?",
    a: "Większość wniosków jest rozpatrywana w ciągu kilku minut. W niektórych przypadkach może to potrwać do 72 godzin. Zalecamy złożenie wniosku co najmniej 72 godziny przed planowanym wylotem.",
  },
  {
    q: "Czy mogę złożyć wniosek o NZeTA na lotnisku?",
    a: "Technicznie jest to możliwe, ale zdecydowanie niezalecane. Bez ważnego NZeTA linia lotnicza może odmówić Ci wejścia na pokład. Złóż wniosek z wyprzedzeniem.",
  },
  {
    q: "Co to jest podatek IVL i dlaczego muszę go zapłacić?",
    a: "IVL (International Visitor Conservation and Tourism Levy) to obowiązkowy podatek przeznaczony na ochronę środowiska naturalnego Nowej Zelandii i rozwój infrastruktury turystycznej. Od października 2024 wynosi NZD $100.",
  },
  {
    q: "Czy potrzebuję NZeTA przy tranzycie przez Nową Zelandię?",
    a: "Tak, w większości przypadków NZeTA jest wymagana nawet przy tranzycie. Jednak pasażerowie tranzytowi mogą być zwolnieni z podatku IVL.",
  },
  {
    q: "Co się stanie, jeśli wymienię paszport?",
    a: "NZeTA jest powiązana z konkretnym paszportem. Jeśli otrzymasz nowy paszport, musisz złożyć nowy wniosek o NZeTA i ponownie uiścić opłatę.",
  },
  {
    q: "Czy mogę przedłużyć NZeTA?",
    a: "Nie, NZeTA nie podlega przedłużeniu. Po wygaśnięciu (po 2 latach) musisz złożyć nowy wniosek i uiścić ponowną opłatę.",
  },
  {
    q: "Czy muszę drukować potwierdzenie NZeTA?",
    a: "Nie, NZeTA jest w pełni elektroniczna i powiązana z Twoim paszportem. Linie lotnicze i służby graniczne sprawdzają ją automatycznie. Jednak warto zachować e-mail potwierdzający na wszelki wypadek.",
  },
  {
    q: "Dlaczego aplikacja mobilna jest tańsza niż strona internetowa?",
    a: "Rząd NZ celowo ustala niższą opłatę ($17 vs $23), aby zachęcić do korzystania z aplikacji. Aplikacja umożliwia automatyczne skanowanie paszportu i robienie zdjęcia, co przyspiesza weryfikację.",
  },
  {
    q: "Co zrobić, jeśli mój wniosek zostanie odrzucony?",
    a: "W przypadku odrzucenia wniosku skontaktuj się z Immigration New Zealand pod adresem nzeta@mbie.govt.nz. Możesz również rozważyć złożenie wniosku o wizę nowozelandzką.",
  },
  {
    q: "Czy dzieci potrzebują osobnego NZeTA?",
    a: "Tak, każda osoba podróżująca do Nowej Zelandii (w tym dzieci) potrzebuje osobnego NZeTA powiązanego z jej paszportem. Dzieci poniżej 2 lat są zwolnione z IVL.",
  },
  {
    q: "Jakie metody płatności są akceptowane?",
    a: "Akceptowane są karty Visa, Mastercard oraz UnionPay (UnionPay tylko przez stronę internetową). Nie ma możliwości płatności gotówką ani przelewem.",
  },
  {
    q: "Czy opłata za NZeTA podlega zwrotowi?",
    a: "Nie, opłata za NZeTA i IVL nie podlega zwrotowi, nawet jeśli wniosek zostanie odrzucony lub podróżny zrezygnuje z wyjazdu.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#E8E8E8] rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-[#F0F4FF] transition-colors"
      >
        <span className="font-medium text-[#00247D] pr-4">{q}</span>
        <svg
          className={`w-5 h-5 flex-shrink-0 text-[#00247D] transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-6 py-4 bg-[#F0F4FF] border-t border-[#E8E8E8]">
          <p className="text-gray-700 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "FAQ" }]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#00247D] mb-4">
          Najczęściej zadawane pytania (FAQ)
        </h1>
        <p className="text-gray-600 mb-10">
          Odpowiedzi na 15 najczęściej zadawanych pytań dotyczących NZeTA dla obywateli polskich.
        </p>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <FaqItem key={idx} q={faq.q} a={faq.a} />
          ))}
        </div>

        <div className="bg-[#F0F4FF] border-l-4 border-[#00247D] p-6 rounded-r-lg mt-10">
          <h3 className="text-lg font-bold text-[#00247D] mb-2">Nie znalazłeś odpowiedzi?</h3>
          <p className="text-gray-700">
            Jeśli masz pytanie, którego tutaj nie uwzględniliśmy, skontaktuj się z nami
            przez stronę <a href="/contact/" className="text-[#00247D] underline font-medium">Kontakt</a> lub
            odwiedź oficjalną stronę{" "}
            <a href="https://www.immigration.govt.nz" target="_blank" rel="noopener noreferrer" className="text-[#00247D] underline font-medium">
              Immigration New Zealand
            </a>.
          </p>
        </div>
      </div>
    </>
  );
}
