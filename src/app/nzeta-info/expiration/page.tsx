import Breadcrumb from "@/components/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ważność NZeTA — Jak długo jest ważna? Przedłużenie i wygaśnięcie",
  description:
    "NZeTA jest ważna przez 2 lata od daty wydania. Pozwala na wielokrotne wjazdy z pobytem do 90 dni. Dowiedz się o przedłużeniu i wygaśnięciu.",
};

export default function ExpirationPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "O NZeTA", href: "/nzeta-info/what-is-nzeta/" }, { label: "Ważność" }]} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#00247D] mb-8">
          Ważność NZeTA — Okres obowiązywania
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <div className="bg-[#F0F4FF] rounded-xl p-8 text-center mb-10">
            <div className="text-5xl font-bold text-[#00247D] mb-2">2 lata</div>
            <p className="text-lg text-gray-600">od daty wydania NZeTA</p>
          </div>

          <p>
            NZeTA jest ważna przez <strong>2 lata od daty wydania</strong> (nie od daty pierwszego wjazdu).
            W tym okresie możesz wielokrotnie wjeżdżać do Nowej Zelandii, pod warunkiem, że każdy pobyt
            nie przekracza <strong>90 dni</strong>.
          </p>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">Kluczowe zasady</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Wielokrotne wjazdy:</strong> NZeTA umożliwia wielokrotne wjazdy do Nowej Zelandii w okresie ważności</li>
            <li><strong>Maksymalny pobyt:</strong> Każda wizyta nie może przekraczać 90 dni</li>
            <li><strong>Powiązanie z paszportem:</strong> NZeTA jest powiązana z konkretnym paszportem</li>
            <li><strong>Nowy paszport = nowe NZeTA:</strong> Jeśli otrzymasz nowy paszport, musisz uzyskać nowe NZeTA</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">Kiedy NZeTA wygasa?</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Po upływie 2 lat od daty wydania</li>
            <li>Gdy paszport, z którym jest powiązana, wygaśnie lub zostanie wymieniony</li>
            <li>Gdy zmienią się Twoje dane osobowe (np. nazwisko)</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">Jak przedłużyć NZeTA?</h2>
          <p>
            NZeTA <strong>nie podlega przedłużeniu</strong>. Po wygaśnięciu musisz złożyć nowy wniosek
            i uiścić ponowną opłatę (NZeTA + IVL). Proces jest taki sam jak przy pierwszym wniosku.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg mt-8">
            <h3 className="text-lg font-bold text-amber-800 mb-2">Ważna wskazówka</h3>
            <p className="text-amber-700">
              Sprawdź datę ważności swojego NZeTA <strong>przed zarezerwowaniem biletu lotniczego</strong>.
              Jeśli NZeTA wygaśnie w trakcie podróży, nie będziesz mógł wejść na pokład samolotu do Nowej Zelandii.
              NZeTA musi być ważne w dniu wjazdu do kraju.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">NZeTA a paszport</h2>
          <p>
            Twoje NZeTA jest elektronicznie powiązane z numerem paszportu. Jeśli w okresie ważności NZeTA
            wymienisz paszport (np. z powodu wygaśnięcia, uszkodzenia lub zmiany danych), musisz złożyć
            <strong> nowy wniosek o NZeTA</strong> powiązany z nowym paszportem.
          </p>
        </div>
      </article>
    </>
  );
}
