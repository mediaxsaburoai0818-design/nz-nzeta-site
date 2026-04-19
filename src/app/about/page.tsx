import Breadcrumb from "@/components/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O nas",
  description: "NZeTA Polska — niezależny portal informacyjny o nowozelandzkiej elektronicznej autoryzacji podróży dla obywateli polskich.",
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "O nas" }]} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#00247D] mb-8">O nas</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <p>
            <strong>NZeTA Polska</strong> to niezależny portal informacyjny poświęcony nowozelandzkiemu
            systemowi elektronicznej autoryzacji podróży (NZeTA). Naszym celem jest dostarczanie
            rzetelnych, aktualnych i przystępnych informacji w języku polskim.
          </p>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">Nasza misja</h2>
          <p>
            Pomagamy polskim podróżnym zrozumieć proces uzyskania NZeTA, wymagane dokumenty,
            opłaty i inne aspekty związane z podróżą do Nowej Zelandii. Wierzymy, że dostęp
            do informacji w ojczystym języku ułatwia planowanie podróży.
          </p>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">Co oferujemy</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Aktualne informacje</strong> — regularnie aktualizujemy treści, aby odzwierciedlały najnowsze zmiany w przepisach</li>
            <li><strong>Praktyczne poradniki</strong> — krok po kroku wyjaśniamy proces aplikacji</li>
            <li><strong>Porównania i analizy</strong> — pomagamy wybrać najlepszą metodę składania wniosku</li>
            <li><strong>FAQ</strong> — odpowiadamy na najczęściej zadawane pytania</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">Ważne zastrzeżenie</h2>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
            <p className="text-amber-700">
              NZeTA Polska <strong>nie jest oficjalną stroną rządu Nowej Zelandii</strong>.
              Nie pośredniczymy w składaniu wniosków NZeTA ani nie pobieramy żadnych opłat.
              Wszystkie informacje mają charakter orientacyjny. W celu uzyskania oficjalnych
              informacji prosimy odwiedzić stronę{" "}
              <a href="https://www.immigration.govt.nz" target="_blank" rel="noopener noreferrer" className="text-[#00247D] underline">
                Immigration New Zealand
              </a>.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
