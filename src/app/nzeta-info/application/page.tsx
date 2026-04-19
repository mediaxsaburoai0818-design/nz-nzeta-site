import Breadcrumb from "@/components/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jak złożyć wniosek o NZeTA — Aplikacja mobilna vs strona internetowa",
  description:
    "Krok po kroku: jak złożyć wniosek o NZeTA przez aplikację mobilną (NZD $17) lub stronę internetową (NZD $23). Przewodnik dla obywateli polskich.",
};

export default function ApplicationPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "O NZeTA", href: "/nzeta-info/what-is-nzeta/" }, { label: "Jak aplikować" }]} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#00247D] mb-8">
          Jak złożyć wniosek o NZeTA
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <p>
            Wniosek o NZeTA można złożyć na <strong>dwa sposoby</strong>: przez oficjalną aplikację mobilną
            lub przez stronę internetową Immigration New Zealand. Każda metoda ma nieco inną opłatę.
          </p>

          {/* Comparison */}
          <div className="grid md:grid-cols-2 gap-6 my-10">
            <div className="bg-[#F0F4FF] rounded-xl p-6 border-2 border-[#00247D]">
              <div className="text-center mb-4">
                <span className="text-4xl">📱</span>
                <h2 className="text-xl font-bold text-[#00247D] mt-2">Aplikacja mobilna</h2>
                <div className="text-3xl font-bold text-[#00247D] mt-2">NZD $17</div>
                <p className="text-sm text-gray-500">+ IVL $100</p>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span> Niższa opłata</li>
                <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span> Automatyczne zdjęcie paszportowe</li>
                <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span> Skanowanie paszportu aparatem</li>
                <li className="flex items-start gap-2"><span className="text-red-600 font-bold">-</span> Wymaga pobrania aplikacji</li>
                <li className="flex items-start gap-2"><span className="text-red-600 font-bold">-</span> Tylko iOS i Android</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#E8E8E8]">
              <div className="text-center mb-4">
                <span className="text-4xl">💻</span>
                <h2 className="text-xl font-bold text-[#00247D] mt-2">Strona internetowa</h2>
                <div className="text-3xl font-bold text-[#00247D] mt-2">NZD $23</div>
                <p className="text-sm text-gray-500">+ IVL $100</p>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span> Bez instalacji aplikacji</li>
                <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span> Dostępna na każdym urządzeniu</li>
                <li className="flex items-start gap-2"><span className="text-green-600 font-bold">+</span> Łatwiejszy upload dokumentów</li>
                <li className="flex items-start gap-2"><span className="text-red-600 font-bold">-</span> Wyższa opłata</li>
                <li className="flex items-start gap-2"><span className="text-red-600 font-bold">-</span> Ręczne wpisywanie danych paszportu</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">Krok po kroku — aplikacja mobilna</h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li>Pobierz aplikację <strong>&quot;NZeTA&quot;</strong> z App Store (iOS) lub Google Play (Android)</li>
            <li>Otwórz aplikację i wybierz <strong>&quot;Request an NZeTA&quot;</strong></li>
            <li>Zeskanuj stronę z danymi w paszporcie aparatem telefonu</li>
            <li>Zrób zdjęcie twarzy (selfie) zgodnie z instrukcjami</li>
            <li>Odpowiedz na pytania dotyczące zdrowia i karalności</li>
            <li>Zapłać opłatę NZeTA (<strong>NZD $17</strong>) i podatek IVL (<strong>NZD $100</strong>)</li>
            <li>Poczekaj na e-mail z potwierdzeniem (zazwyczaj do 72 godzin)</li>
          </ol>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">Krok po kroku — strona internetowa</h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li>Wejdź na oficjalną stronę: <a href="https://nzeta.immigration.govt.nz/" target="_blank" rel="noopener noreferrer" className="text-[#00247D] underline">nzeta.immigration.govt.nz</a></li>
            <li>Kliknij <strong>&quot;Request an NZeTA&quot;</strong></li>
            <li>Wpisz dane z paszportu ręcznie</li>
            <li>Prześlij cyfrowe zdjęcie paszportowe</li>
            <li>Odpowiedz na pytania dotyczące podróży, zdrowia i karalności</li>
            <li>Zapłać opłatę NZeTA (<strong>NZD $23</strong>) i podatek IVL (<strong>NZD $100</strong>)</li>
            <li>Poczekaj na e-mail z potwierdzeniem</li>
          </ol>

          <div className="bg-[#F0F4FF] border-l-4 border-[#00247D] p-6 rounded-r-lg mt-8">
            <h3 className="text-lg font-bold text-[#00247D] mb-2">Zalecenie</h3>
            <p>
              Złóż wniosek o NZeTA <strong>co najmniej 72 godziny przed planowanym wylotem</strong>.
              Chociaż większość wniosków jest rozpatrywana w ciągu kilku minut, niektóre mogą wymagać
              dodatkowej weryfikacji.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">Metody płatności</h2>
          <p>Akceptowane metody płatności to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Visa</li>
            <li>Mastercard</li>
            <li>UnionPay (tylko strona internetowa)</li>
          </ul>
        </div>
      </article>
    </>
  );
}
