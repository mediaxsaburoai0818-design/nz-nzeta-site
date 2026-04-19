import Breadcrumb from "@/components/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regulamin",
  description: "Regulamin korzystania z serwisu NZeTA Polska. Warunki użytkowania, odpowiedzialność i ograniczenia.",
};

export default function AgreementPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Regulamin" }]} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#00247D] mb-8">Regulamin</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <p className="text-sm text-gray-500">Ostatnia aktualizacja: kwiecień 2026</p>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">1. Postanowienia ogólne</h2>
          <p>
            Niniejszy regulamin określa zasady korzystania z serwisu NZeTA Polska.
            Korzystanie z serwisu oznacza akceptację niniejszego regulaminu.
          </p>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">2. Charakter serwisu</h2>
          <p>
            NZeTA Polska jest niezależnym serwisem informacyjnym. Serwis <strong>nie jest
            powiązany z rządem Nowej Zelandii</strong> ani z Immigration New Zealand.
            Serwis nie pośredniczy w składaniu wniosków o NZeTA.
          </p>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">3. Treści</h2>
          <p>
            Informacje zamieszczone w serwisie mają charakter orientacyjny i informacyjny.
            Dokładamy wszelkich starań, aby treści były aktualne i prawidłowe, jednak nie
            gwarantujemy ich kompletności i aktualności.
          </p>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">4. Odpowiedzialność</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Serwis nie ponosi odpowiedzialności za decyzje podjęte na podstawie zamieszczonych informacji</li>
            <li>Użytkownik korzysta z informacji na własną odpowiedzialność</li>
            <li>W celu uzyskania wiążących informacji należy kontaktować się bezpośrednio z Immigration New Zealand</li>
            <li>Serwis nie ponosi odpowiedzialności za działanie stron zewnętrznych, do których prowadzą linki</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">5. Prawa autorskie</h2>
          <p>
            Wszelkie treści zamieszczone w serwisie, w tym teksty, grafiki i układ strony,
            są chronione prawem autorskim. Kopiowanie, rozpowszechnianie lub modyfikowanie
            treści bez zgody administratora jest zabronione.
          </p>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">6. Linki zewnętrzne</h2>
          <p>
            Serwis zawiera linki do stron zewnętrznych, w szczególności do oficjalnych stron
            rządu Nowej Zelandii. Za treść tych stron odpowiadają ich operatorzy.
          </p>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">7. Zmiany regulaminu</h2>
          <p>
            Administrator zastrzega sobie prawo do zmiany regulaminu. O zmianach użytkownicy
            zostaną poinformowani poprzez publikację nowej wersji regulaminu na stronie.
          </p>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">8. Kontakt</h2>
          <p>
            W przypadku pytań dotyczących regulaminu prosimy o kontakt
            pod adresem: <a href="mailto:info@nzeta-polska.pl" className="text-[#00247D] underline">info@nzeta-polska.pl</a>.
          </p>
        </div>
      </article>
    </>
  );
}
