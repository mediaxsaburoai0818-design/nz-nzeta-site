import Breadcrumb from "@/components/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Polityka prywatności serwisu NZeTA Polska. Informacje o przetwarzaniu danych osobowych i plikach cookies.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Polityka prywatności" }]} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#00247D] mb-8">Polityka prywatności</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <p className="text-sm text-gray-500">Ostatnia aktualizacja: kwiecień 2026</p>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">1. Informacje ogólne</h2>
          <p>
            Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych
            użytkowników serwisu NZeTA Polska. Szanujemy prywatność naszych użytkowników i
            zobowiązujemy się do ochrony ich danych osobowych.
          </p>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">2. Administrator danych</h2>
          <p>
            Administratorem danych osobowych jest NZeTA Polska. Kontakt z administratorem
            jest możliwy pod adresem e-mail: info@nzeta-polska.pl.
          </p>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">3. Zakres zbieranych danych</h2>
          <p>Serwis może zbierać następujące dane:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Adres IP użytkownika</li>
            <li>Typ przeglądarki internetowej</li>
            <li>System operacyjny</li>
            <li>Czas i data wizyty</li>
            <li>Odwiedzane strony w serwisie</li>
            <li>Dane podane dobrowolnie w formularzach kontaktowych</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">4. Cele przetwarzania danych</h2>
          <p>Dane osobowe są przetwarzane w celu:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Świadczenia usług informacyjnych</li>
            <li>Odpowiadania na zapytania użytkowników</li>
            <li>Analizy statystycznej ruchu na stronie</li>
            <li>Zapewnienia bezpieczeństwa serwisu</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">5. Pliki cookies</h2>
          <p>
            Serwis wykorzystuje pliki cookies w celu zapewnienia prawidłowego funkcjonowania
            strony oraz analizy statystycznej. Użytkownik może zarządzać ustawieniami cookies
            w swojej przeglądarce internetowej.
          </p>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">6. Udostępnianie danych</h2>
          <p>
            Dane osobowe nie są udostępniane podmiotom trzecim, z wyjątkiem sytuacji
            przewidzianych prawem lub gdy jest to niezbędne do świadczenia usług
            (np. hosting, analityka).
          </p>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">7. Prawa użytkownika</h2>
          <p>Użytkownik ma prawo do:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Dostępu do swoich danych osobowych</li>
            <li>Sprostowania nieprawidłowych danych</li>
            <li>Usunięcia danych (&quot;prawo do bycia zapomnianym&quot;)</li>
            <li>Ograniczenia przetwarzania danych</li>
            <li>Przenoszenia danych</li>
            <li>Wniesienia sprzeciwu wobec przetwarzania</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">8. Bezpieczeństwo danych</h2>
          <p>
            Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony danych
            osobowych przed nieautoryzowanym dostępem, utratą lub zniszczeniem.
          </p>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">9. Kontakt</h2>
          <p>
            W przypadku pytań dotyczących polityki prywatności prosimy o kontakt
            pod adresem: <a href="mailto:info@nzeta-polska.pl" className="text-[#00247D] underline">info@nzeta-polska.pl</a>.
          </p>
        </div>
      </article>
    </>
  );
}
