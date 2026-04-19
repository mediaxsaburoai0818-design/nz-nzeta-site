import Breadcrumb from "@/components/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sprawdź status wniosku NZeTA — Jak sprawdzić status?",
  description:
    "Jak sprawdzić status wniosku NZeTA? Sprawdź przez aplikację, e-mail potwierdzający lub stronę Immigration New Zealand.",
};

export default function StatusCheckPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "O NZeTA", href: "/nzeta-info/what-is-nzeta/" }, { label: "Sprawdź status" }]} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#00247D] mb-8">
          Sprawdzanie statusu wniosku NZeTA
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <p>
            Po złożeniu wniosku o NZeTA możesz sprawdzić jego status na kilka sposobów.
            Większość wniosków jest rozpatrywana w ciągu <strong>kilku minut do 72 godzin</strong>.
          </p>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">Sposoby sprawdzenia statusu</h2>

          <div className="space-y-6">
            <div className="bg-[#F0F4FF] rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#00247D] mb-3">1. E-mail potwierdzający</h3>
              <p>
                Po rozpatrzeniu wniosku otrzymasz e-mail na adres podany podczas aplikacji.
                Sprawdź folder <strong>spam/junk mail</strong>, jeśli nie widzisz wiadomości.
              </p>
            </div>

            <div className="bg-[#F0F4FF] rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#00247D] mb-3">2. Aplikacja mobilna NZeTA</h3>
              <p>
                Jeśli złożyłeś wniosek przez aplikację, otwórz ją ponownie, aby sprawdzić
                aktualny status. Status będzie wyświetlany na ekranie głównym.
              </p>
            </div>

            <div className="bg-[#F0F4FF] rounded-xl p-6">
              <h3 className="text-lg font-bold text-[#00247D] mb-3">3. Strona Immigration NZ</h3>
              <p>
                Odwiedź oficjalną stronę Immigration New Zealand i zaloguj się na swoje konto,
                aby sprawdzić status wniosku.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">Możliwe statusy wniosku</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-[#00247D] text-white">
                  <th className="px-6 py-4 text-left">Status</th>
                  <th className="px-6 py-4 text-left">Opis</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-[#E8E8E8]">
                  <td className="px-6 py-4 font-medium text-green-700">Approved (Zatwierdzony)</td>
                  <td className="px-6 py-4">NZeTA zostało przyznane. Możesz podróżować.</td>
                </tr>
                <tr className="bg-[#F0F4FF] border-b border-[#E8E8E8]">
                  <td className="px-6 py-4 font-medium text-amber-600">Pending (W trakcie)</td>
                  <td className="px-6 py-4">Wniosek jest rozpatrywany. Poczekaj na decyzję.</td>
                </tr>
                <tr className="bg-white border-b border-[#E8E8E8]">
                  <td className="px-6 py-4 font-medium text-blue-600">More info needed</td>
                  <td className="px-6 py-4">Wymagane dodatkowe informacje lub dokumenty.</td>
                </tr>
                <tr className="bg-[#F0F4FF]">
                  <td className="px-6 py-4 font-medium text-red-600">Declined (Odrzucony)</td>
                  <td className="px-6 py-4">Wniosek został odrzucony. Skontaktuj się z INZ.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">Co zrobić, gdy wniosek jest opóźniony?</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Poczekaj do <strong>72 godzin</strong> — to standardowy czas rozpatrywania</li>
            <li>Sprawdź folder spam/junk mail w swojej skrzynce e-mail</li>
            <li>Upewnij się, że podałeś prawidłowy adres e-mail</li>
            <li>Jeśli minęło więcej niż 72 godziny, skontaktuj się z Immigration New Zealand</li>
          </ul>

          <div className="bg-[#F0F4FF] border-l-4 border-[#00247D] p-6 rounded-r-lg mt-8">
            <h3 className="text-lg font-bold text-[#00247D] mb-2">Kontakt z Immigration NZ</h3>
            <p>
              E-mail: <a href="mailto:nzeta@mbie.govt.nz" className="text-[#00247D] underline">nzeta@mbie.govt.nz</a><br />
              Strona: <a href="https://www.immigration.govt.nz" target="_blank" rel="noopener noreferrer" className="text-[#00247D] underline">www.immigration.govt.nz</a>
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
