import Breadcrumb from "@/components/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Skontaktuj się z zespołem NZeTA Polska. Pytania dotyczące NZeTA i podróży do Nowej Zelandii.",
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Kontakt" }]} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#00247D] mb-8">Kontakt</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <p>
            Masz pytania dotyczące NZeTA lub treści na naszej stronie? Skontaktuj się z nami
            za pomocą poniższego formularza lub adresu e-mail.
          </p>

          <div className="bg-[#F0F4FF] rounded-xl p-8 my-10">
            <h2 className="text-xl font-bold text-[#00247D] mb-4">Dane kontaktowe</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="text-sm text-gray-500">E-mail</p>
                  <a href="mailto:info@nzeta-polska.pl" className="text-[#00247D] font-medium">info@nzeta-polska.pl</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
            <h3 className="text-lg font-bold text-amber-800 mb-2">Ważna informacja</h3>
            <p className="text-amber-700">
              <strong>Nie pośredniczymy w składaniu wniosków NZeTA</strong> i nie mamy dostępu
              do systemów Immigration New Zealand. W przypadku pytań dotyczących konkretnego
              wniosku, statusu aplikacji lub problemów technicznych z formularzem NZeTA,
              prosimy o kontakt bezpośrednio z Immigration New Zealand:
            </p>
            <ul className="mt-3 space-y-1 text-amber-700 text-sm">
              <li>E-mail: <a href="mailto:nzeta@mbie.govt.nz" className="underline">nzeta@mbie.govt.nz</a></li>
              <li>Strona: <a href="https://www.immigration.govt.nz" target="_blank" rel="noopener noreferrer" className="underline">www.immigration.govt.nz</a></li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">W jakich sprawach możemy pomóc?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Pytania dotyczące treści na naszej stronie</li>
            <li>Sugestie dotyczące poprawek lub nowych tematów</li>
            <li>Zgłoszenia błędów lub nieaktualnych informacji</li>
            <li>Współpraca i propozycje partnerskie</li>
          </ul>

          <p className="text-sm text-gray-500 mt-8">
            Staramy się odpowiadać na wszystkie wiadomości w ciągu 2-3 dni roboczych.
          </p>
        </div>
      </article>
    </>
  );
}
