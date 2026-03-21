"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio-inlux" },
  { label: "Servicios", href: "#servicios-inlux" },
  { label: "Promociones", href: "#promos-inlux" },
  { label: "Nosotros", href: "#nosotros-inlux" },
  { label: "Testimonios", href: "#testimonios-inlux" },
  { label: "Sedes", href: "#sedes-inlux" },
  { label: "FAQ", href: "#faq-inlux" },
  { label: "Contacto", href: "#footer-inlux" },
];

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      {/* Promo bar */}
      <div
        style={{ background: "#A1706D" }}
        className="text-center py-[7px] px-6 font-in-poppins text-[12px] tracking-[0.04em]"
      >
        <span style={{ color: "#fafafa" }}>Consultas en medicina estética, nutrición, ginecológica y dermatológica desde s/50</span>
      </div>

      {/* Main nav */}
      <nav
        className="flex items-center justify-between h-16 px-4 sm:px-6 md:px-10"
        style={{
          background: scrolled ? "#1E1814" : "transparent",
          boxShadow: scrolled ? "0 8px 20px rgba(0,0,0,0.18)" : "none",
          transition: "background 180ms ease, box-shadow 180ms ease",
        }}
      >
        {/* Logo */}
        <Link href="/inluxury" className="flex flex-1 items-center justify-start">
          <Image
            src="/logos/logo_inluxury.svg"
            alt="InLuxury"
            width={150}
            height={48}
            priority
            className="w-32 sm:w-36 md:w-40 h-auto"
          />
        </Link>

        {/* Links desktop */}
        <div className="hidden md:flex items-center justify-center gap-4 lg:gap-5 xl:gap-8 font-in-poppins text-[13px]">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="no-underline transition-colors duration-200"
              style={{ color: scrolled ? "#fff" : "rgba(255,255,255,0.85)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = scrolled ? "#f5e7d3" : "#fff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = scrolled ? "#fff" : "rgba(255,255,255,0.85)")
              }
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Hamburguesa mobile */}
        <div className="flex flex-1 items-center justify-end">
          <button
            className="flex md:hidden items-center justify-center p-1 cursor-pointer"
            style={{ background: "none", border: "none" }}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            <Image
              src="/logos/hamburguesa.svg"
              alt="Menú"
              width={30}
              height={15}
              className="w-7 h-auto"
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu desplegable */}
      {menuOpen && (
        <div
          className="flex md:hidden flex-col font-in-poppins text-[15px]"
          style={{
            background: "#1E1814",
            padding: "20px 28px 28px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.18)",
          }}
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block text-left w-full no-underline py-4"
              style={{
                color: "#f5e7d3",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
