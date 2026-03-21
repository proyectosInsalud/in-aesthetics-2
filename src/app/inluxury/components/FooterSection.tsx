"use client";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  "Contacta con nosotros",
  "Preguntas frecuentes",
  "Términos y condiciones",
  "Política de privacidad",
];

const SOCIAL = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/inluxury.estetica/",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17" cy="7" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@inluxury.estetica",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M18 7.3c-1.3-.3-2.5-1.2-3.1-2.4v9.2c0 2.7-2.2 4.9-4.9 4.9S5.1 16.8 5.1 14c0-2.6 2-4.8 4.6-4.9v2.6c-1.1.1-2 .9-2 2.1 0 1.2.9 2.1 2.1 2.1s2.1-.9 2.1-2.1V2h2.7c.1.8.5 1.6 1.1 2.2.7.7 1.7 1.2 2.7 1.2v1.9z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61551865799048&locale=es_LA",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M13.5 21v-7h2.3l.4-3h-2.7V8.6c0-.9.3-1.5 1.6-1.5H16V4.4c-.6-.1-1.4-.2-2.1-.2-2.2 0-3.6 1.3-3.6 3.7V11H8v3h2.3v7h3.2z" />
      </svg>
    ),
  },
];

export function FooterSection() {
  return (
    <footer
      id="footer-inlux"
      style={{
        background: "#fff",
        padding: "48px 80px 24px",
        borderTop: "1px solid #f0e8e0",
      }}
    >
      {/* Main row */}
      <div
        style={{
          display: "flex",
          gap: 48,
          flexWrap: "wrap",
          marginBottom: 40,
          alignItems: "flex-start",
        }}
      >
        {/* Logo + tagline */}
        <div style={{ flex: "1 1 220px" }}>
          <Image
            src="/svg/logo_footer.svg"
            alt="InLuxury"
            width={90}
            height={90}
            style={{ width: 90, height: 90, marginBottom: 20, objectFit: "contain" }}
          />
          <p
            style={{
              fontFamily: "var(--font-in-poppins, sans-serif)",
              fontWeight: 600,
              fontSize: 15,
              color: "#A1706D",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            Recupera la belleza de tu piel con un procedimiento rápido y seguro.
          </p>
        </div>

        {/* Nav links */}
        <div style={{ flex: "1 1 180px" }}>
          {NAV_LINKS.map((l) => (
            <Link
              key={l}
              href={
                l === "Términos y condiciones"
                  ? "/pdf/TERMINOS_Y_CONDICIONES.pdf"
                  : l === "Política de privacidad"
                    ? "/pdf/TERMINOS_Y_CONDICIONES.pdf"
                    : l === "Contacta con nosotros"
                      ? "https://wa.me/51922527739"
                      : "#"
              }
              target={
                l === "Términos y condiciones" || l === "Política de privacidad" || l === "Contacta con nosotros"
                  ? "_blank"
                  : undefined
              }
              style={{
                display: "block",
                fontFamily: "var(--font-in-poppins, sans-serif)",
                fontSize: 13,
                color: "#A1706D",
                textDecoration: "none",
                marginBottom: 14,
              }}
            >
              {l}
            </Link>
          ))}
        </div>

        {/* Contact info */}
        <div style={{ flex: "1 1 220px" }}>
          <a
            href="https://maps.google.com/?q=Av.+Faustino+Sánchez+Carrión+615,+Jesús+María,+Lima"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              fontFamily: "var(--font-in-poppins, sans-serif)",
              fontSize: 13,
              color: "#A1706D",
              lineHeight: 1.65,
              marginBottom: 10,
              textDecoration: "none",
            }}
          >
            Av.Faustino Sánchez Carrión Nro. 615 Of. 1004 / 1005- Jesús María, Lima, Perú
          </a>
          <a
            href="mailto:Info@inaesthetics.pe"
            style={{
              display: "block",
              fontFamily: "var(--font-in-poppins, sans-serif)",
              fontSize: 13,
              color: "#A1706D",
              marginBottom: 6,
              textDecoration: "none",
            }}
          >
            Info@inaesthetics.pe
          </a>
          <a
            href="https://wa.me/51922527739"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              fontFamily: "var(--font-in-poppins, sans-serif)",
              fontSize: 13,
              color: "#A1706D",
              textDecoration: "none",
            }}
          >
            922 527 739
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid #f0e8e0",
          paddingTop: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-in-poppins, sans-serif)",
            fontSize: 12,
            color: "#A1706D",
            margin: 0,
          }}
        >
          © INLUXURY
        </p>

        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <Link
            href="/pdf/TERMINOS_Y_CONDICIONES.pdf"
            target="_blank"
            style={{
              fontFamily: "var(--font-in-poppins, sans-serif)",
              fontSize: 12,
              color: "#A1706D",
              textDecoration: "none",
            }}
          >
            Términos y condiciones
          </Link>
          <Link
            href="/pdf/TERMINOS_Y_CONDICIONES.pdf"
            target="_blank"
            style={{
              fontFamily: "var(--font-in-poppins, sans-serif)",
              fontSize: 12,
              color: "#A1706D",
              textDecoration: "none",
            }}
          >
            Política de privacidad
          </Link>
        </div>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            {SOCIAL.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                target="_blank"
                aria-label={s.name}
                className="social-link"
              >
                {s.icon}
              </Link>
            ))}
          </div>
          <p
            style={{
              fontFamily: "var(--font-in-poppins, sans-serif)",
              fontSize: 12,
              color: "#A1706D",
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
            Created by Inaesthetics
          </p>
        </div>
      </div>
      <style jsx>{`
        .social-link {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1.5px solid #A1706D;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #A1706D;
          background: rgba(161, 112, 109, 0.05);
          text-decoration: none;
          transition: transform 120ms ease, background 120ms ease;
        }
        .social-link:hover {
          transform: translateY(-1px);
          background: rgba(161, 112, 109, 0.12);
        }
      `}</style>
    </footer>
  );
}
