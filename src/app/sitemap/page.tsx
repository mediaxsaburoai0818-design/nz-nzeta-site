import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mapa strony",
  description: "Mapa strony NZeTA Polska — pełna lista wszystkich stron i podstron serwisu.",
};

const sitePages = [
  {
    category: "Strona główna",
    pages: [{ label: "Strona główna", href: "/" }],
  },
  {
    category: "Informacje o NZeTA",
    pages: [
      { label: "Czym jest NZeTA?", href: "/nzeta-info/what-is-nzeta/" },
      { label: "Jak aplikować", href: "/nzeta-info/application/" },
      { label: "Opłaty", href: "/nzeta-info/fee/" },
      { label: "Ważność", href: "/nzeta-info/expiration/" },
      { label: "Sprawdź status", href: "/nzeta-info/status-check/" },
      { label: "Wymagane dokumenty", href: "/nzeta-info/required-documents/" },
      { label: "Oficjalna strona NZ", href: "/nzeta-info/official-nz/" },
      { label: "Podatek IVL", href: "/nzeta-info/ivl-tax/" },
      { label: "Tranzyt", href: "/nzeta-info/transit/" },
    ],
  },
  {
    category: "Informacje o stronie",
    pages: [
      { label: "O nas", href: "/about/" },
      { label: "Kontakt", href: "/contact/" },
      { label: "Polityka prywatności", href: "/privacy-policy/" },
      { label: "Regulamin", href: "/agreement/" },
      { label: "FAQ", href: "/faq/" },
      { label: "Mapa strony", href: "/sitemap/" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Mapa strony" }]} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#00247D] mb-10">Mapa strony</h1>

        <div className="space-y-10">
          {sitePages.map((section) => (
            <div key={section.category}>
              <h2 className="text-xl font-bold text-[#00247D] mb-4 pb-2 border-b-2 border-[#00247D]">
                {section.category}
              </h2>
              <ul className="space-y-2 pl-4">
                {section.pages.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      className="text-gray-700 hover:text-[#00247D] transition-colors flex items-center gap-2"
                    >
                      <svg className="w-4 h-4 text-[#C0C0C0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
