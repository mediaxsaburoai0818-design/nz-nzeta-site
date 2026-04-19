import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#00247D] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span className="text-2xl">🇳🇿</span> NZeTA Polska
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Kompleksowy przewodnik po nowozelandzkim systemie elektronicznej autoryzacji podroży (NZeTA) dla obywateli polskich.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/80">
              Informacje o NZeTA
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/nzeta-info/what-is-nzeta/" className="text-white/70 hover:text-white transition-colors">Czym jest NZeTA?</Link></li>
              <li><Link href="/nzeta-info/application/" className="text-white/70 hover:text-white transition-colors">Jak aplikować</Link></li>
              <li><Link href="/nzeta-info/fee/" className="text-white/70 hover:text-white transition-colors">Opłaty</Link></li>
              <li><Link href="/nzeta-info/expiration/" className="text-white/70 hover:text-white transition-colors">Ważność</Link></li>
              <li><Link href="/faq/" className="text-white/70 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/80">
              Informacje o stronie
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about/" className="text-white/70 hover:text-white transition-colors">O nas</Link></li>
              <li><Link href="/contact/" className="text-white/70 hover:text-white transition-colors">Kontakt</Link></li>
              <li><Link href="/privacy-policy/" className="text-white/70 hover:text-white transition-colors">Polityka prywatności</Link></li>
              <li><Link href="/agreement/" className="text-white/70 hover:text-white transition-colors">Regulamin</Link></li>
              <li><Link href="/sitemap/" className="text-white/70 hover:text-white transition-colors">Mapa strony</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8">
          <p className="text-center text-xs text-white/50">
            Ta strona nie jest powiązana z rządem Nowej Zelandii. Oficjalna strona: {" "}
            <a
              href="https://www.immigration.govt.nz/visas/new-zealand-electronic-travel-authority-nzeta"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              immigration.govt.nz
            </a>
          </p>
          <p className="text-center text-xs text-white/40 mt-2">
            &copy; {new Date().getFullYear()} NZeTA Polska. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}
