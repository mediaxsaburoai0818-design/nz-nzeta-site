import Breadcrumb from "@/components/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oficjalna strona rządu Nowej Zelandii — NZeTA Immigration NZ",
  description:
    "Oficjalne źródła informacji o NZeTA: strona Immigration New Zealand, aplikacja NZeTA, kontakt z ambasadą i przydatne linki.",
};

export default function OfficialNzPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "O NZeTA", href: "/nzeta-info/what-is-nzeta/" }, { label: "Strona oficjalna NZ" }]} />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#00247D] mb-8">
          Oficjalna strona rządu Nowej Zelandii
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <p>
            Poniżej znajdziesz linki do oficjalnych źródeł informacji o NZeTA i podróżowaniu
            do Nowej Zelandii. Zawsze korzystaj z oficjalnych stron rządowych jako głównego
            źródła informacji.
          </p>

          <div className="space-y-6 my-10">
            <a
              href="https://www.immigration.govt.nz/visas/new-zealand-electronic-travel-authority-nzeta"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#00247D] text-white rounded-xl p-6 hover:bg-[#001a5e] transition-colors no-underline"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">🏛️</span>
                <div>
                  <h3 className="text-lg font-bold mb-1">Immigration New Zealand — NZeTA</h3>
                  <p className="text-white/70 text-sm">Oficjalna strona NZeTA z informacjami o wniosku, opłatach i wymaganiach</p>
                  <p className="text-white/50 text-xs mt-1">immigration.govt.nz</p>
                </div>
                <svg className="w-6 h-6 ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>

            <a
              href="https://nzeta.immigration.govt.nz/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#F0F4FF] text-[#00247D] rounded-xl p-6 border border-[#E8E8E8] hover:border-[#00247D] transition-colors no-underline"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">📝</span>
                <div>
                  <h3 className="text-lg font-bold mb-1">Formularz wniosku NZeTA online</h3>
                  <p className="text-gray-600 text-sm">Złóż wniosek o NZeTA przez stronę internetową</p>
                  <p className="text-gray-400 text-xs mt-1">nzeta.immigration.govt.nz</p>
                </div>
                <svg className="w-6 h-6 ml-auto flex-shrink-0 text-[#00247D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>

            <a
              href="https://www.immigration.govt.nz/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#F0F4FF] text-[#00247D] rounded-xl p-6 border border-[#E8E8E8] hover:border-[#00247D] transition-colors no-underline"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">🌐</span>
                <div>
                  <h3 className="text-lg font-bold mb-1">Immigration New Zealand — strona główna</h3>
                  <p className="text-gray-600 text-sm">Ogólne informacje o wizach i imigracji do Nowej Zelandii</p>
                  <p className="text-gray-400 text-xs mt-1">immigration.govt.nz</p>
                </div>
                <svg className="w-6 h-6 ml-auto flex-shrink-0 text-[#00247D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>

            <a
              href="https://www.newzealand.com/pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#F0F4FF] text-[#00247D] rounded-xl p-6 border border-[#E8E8E8] hover:border-[#00247D] transition-colors no-underline"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">🗺️</span>
                <div>
                  <h3 className="text-lg font-bold mb-1">Tourism New Zealand</h3>
                  <p className="text-gray-600 text-sm">Oficjalna strona turystyczna Nowej Zelandii</p>
                  <p className="text-gray-400 text-xs mt-1">newzealand.com</p>
                </div>
                <svg className="w-6 h-6 ml-auto flex-shrink-0 text-[#00247D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          </div>

          <h2 className="text-2xl font-bold text-[#00247D] mt-10">Aplikacja mobilna NZeTA</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="https://apps.apple.com/app/nzeta/id1458555981"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white rounded-xl p-4 flex items-center gap-3 hover:bg-gray-800 transition-colors no-underline"
            >
              <span className="text-2xl">🍎</span>
              <div>
                <p className="text-xs text-gray-400">Pobierz z</p>
                <p className="font-bold">App Store</p>
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=nz.govt.mbie.nzeta"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white rounded-xl p-4 flex items-center gap-3 hover:bg-gray-800 transition-colors no-underline"
            >
              <span className="text-2xl">🤖</span>
              <div>
                <p className="text-xs text-gray-400">Pobierz z</p>
                <p className="font-bold">Google Play</p>
              </div>
            </a>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg mt-8">
            <h3 className="text-lg font-bold text-amber-800 mb-2">Uwaga na oszustwa</h3>
            <p className="text-amber-700">
              Korzystaj <strong>wyłącznie z oficjalnych stron</strong> rządu Nowej Zelandii (domeny .govt.nz).
              Istnieją nieoficjalne strony, które pobierają znacznie wyższe opłaty za pośrednictwo
              w składaniu wniosków NZeTA. Oficjalna opłata to NZD $17-23 + IVL $100.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
