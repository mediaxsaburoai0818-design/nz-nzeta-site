"use client";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    label: "O NZeTA",
    children: [
      { label: "Czym jest NZeTA?", href: "/nzeta-info/what-is-nzeta/" },
      { label: "Jak aplikować", href: "/nzeta-info/application/" },
      { label: "Opłaty", href: "/nzeta-info/fee/" },
      { label: "Ważność", href: "/nzeta-info/expiration/" },
      { label: "Sprawdź status", href: "/nzeta-info/status-check/" },
      { label: "Wymagane dokumenty", href: "/nzeta-info/required-documents/" },
      { label: "Strona oficjalna NZ", href: "/nzeta-info/official-nz/" },
      { label: "Podatek IVL", href: "/nzeta-info/ivl-tax/" },
      { label: "Tranzyt", href: "/nzeta-info/transit/" },
    ],
  },
  { label: "FAQ", href: "/faq/" },
  { label: "O nas", href: "/about/" },
  { label: "Kontakt", href: "/contact/" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-[#00247D] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-wide">
            <span className="text-2xl">🇳🇿</span>
            <span>NZeTA Polska</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-1">
                    {item.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-0 w-56 bg-white text-gray-800 rounded-b-lg shadow-xl py-2 border-t-2 border-[#00247D]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm hover:bg-[#F0F4FF] hover:text-[#00247D] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-white/10"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-[#001a5e] border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-white/60">
                    {item.label}
                  </p>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-6 py-2 text-sm hover:bg-white/10 rounded-md"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className="block px-3 py-2 text-sm hover:bg-white/10 rounded-md"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
