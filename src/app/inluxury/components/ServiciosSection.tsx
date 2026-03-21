"use client";
import Image from "next/image";
import { useState, type CSSProperties } from "react";

const TABS = ["Faciales", "Ginecológicos", "Tonificadores", "Reductores"];

type ServiceItem = {
  name: string;
  badge?: string;
  imageSrc?: string;
  imageAlt?: string;
};

const SERVICES_BY_TAB: Record<string, ServiceItem[]> = {
  Faciales: [
    {
      name: "Lipopapada sin cirugía",
      imageSrc: "/images/inluxury/facial/lipopada.png",
      imageAlt: "Lipopapada sin cirugía",
    },
    {
      name: "Hydrafacial",
      imageSrc: "/images/inluxury/facial/hydrafacial.png",
      imageAlt: "Hydrafacial",
    },
    {
      name: "Cauterización Láser",
      imageSrc: "/images/inluxury/facial/hydro.avif",
      imageAlt: "Cauterización Láser",
    },
  ],
  Reductores: [
    {
      name: "Criolipolisis",
      imageSrc: "/images/inluxury/corporales/criolipolosis.png",
      imageAlt: "Criolipolisis",
    },
    {
      name: "Enzimas Reductoras",
      imageSrc: "/images/inluxury/corporales/enzimas_reductoras.png",
      imageAlt: "Enzimas Reductoras",
    },
    {
      name: "Exion",
      imageSrc: "/images/inluxury/corporales/exion.png",
      imageAlt: "Exion",
    },
  ],
  Tonificadores: [
    {
      name: "BODYEMSCULPT",
      imageSrc: "/images/inluxury/tonificadores/BODYEMSCULPT.png",
      badge: "Nuevo",
    },
    {
      name: "Toxina Botulínica",
      imageSrc: "/images/inluxury/tonificadores/Toxina_botulinica .png",
    },
    {
      name: "Acido Hialurónico",
      imageSrc: "/images/inluxury/tonificadores/Acido_hialuronico.png",
    },
  ],
  Ginecológicos: [
    {
      name: "Chequeo ginecológico",
      imageAlt: "Chequeo ginecológico",
      imageSrc: "/images/inluxury/ginecologia/chequeo.png",
    },
    {
      name: "Papanicolau",
      imageAlt: "Papanicolau",
      imageSrc: "/images/inluxury/ginecologia/papanicolau.png",
    },
    {
      name: "Vph",
      imageAlt: "Vph",
      imageSrc: "/images/inluxury/ginecologia/vph.png",
    }
  ],
  Revitalizadores: [
    {
      name: "Bioestimuladores",
      imageSrc: "/images/inluxury/revitalizadores/Bioestimuladores.png",
    },
    {
      name: "Exosomas",
      imageSrc: "/images/inluxury/revitalizadores/Exosomas.png",
    },
  ],
};

const CARD_BASE_STYLE: CSSProperties = {
  flex: "1 1 280px",
  minWidth: 240,
  maxWidth: 360,
  borderRadius: 20,
  overflow: "hidden",
  position: "relative",
  height: 340,
  boxShadow: "0 4px 20px rgba(0,0,0,0.09)",
  background: "linear-gradient(135deg, #e8ddd6 0%, #d4c5b8 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  scrollSnapAlign: "start",
};

function ServicePlaceholder({
  label,
  badge,
  imageSrc,
  imageAlt,
  delay = 0,
}: {
  label: string;
  badge?: string;
  imageSrc?: string;
  imageAlt?: string;
  delay?: number;
}) {
  return (
    <div
      className="group transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.15)]"
      data-aos="fade-up"
      data-aos-delay={delay}
      style={CARD_BASE_STYLE}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt ?? label}
          title={imageAlt ?? label}
          fill
          sizes="(max-width: 767px) 80vw, (max-width: 1200px) 33vw, 360px"
          style={{ objectFit: "cover" }}
          className="transition-transform duration-[600ms] group-hover:scale-110"
        />
      ) : null}
      {badge && (
        <div
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            background: "#c57a4a",
            borderRadius: 20,
            padding: "3px 12px",
            fontSize: 11,
            color: "#fff",
            fontFamily: "var(--font-in-poppins, sans-serif)",
            fontWeight: 600,
          }}
        >
          {badge}
        </div>
      )}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "linear-gradient(transparent,rgba(30,24,20,0.72))",
          padding: "28px 20px 18px",
          color: "#fff",
          fontFamily: "var(--font-in-poppins, sans-serif)",
          fontSize: 15,
          fontWeight: 600,
          textAlign: "left",
        }}
      >
        {label}
      </div>
    </div>
  );
}

export function ServiciosSection() {
  const [active, setActive] = useState(0);
  const currentTab = TABS[active];
  const services = SERVICES_BY_TAB[currentTab] ?? [];

  return (
    <section
      id="servicios-inlux"
      style={{
        padding: "80px 20px 70px",
        textAlign: "center",
        background: "#fff",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2
          data-aos="fade-up"
          style={{
            fontFamily: "var(--font-in-playfair, Georgia, serif)",
            fontSize: "clamp(26px,3vw,36px)",
            fontWeight: 700,
            color: "#A1706D",
            marginBottom: 8,
          }}
        >
          Cistitis, Láser CO2, Ácido Hialurónico y más
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          style={{
            fontFamily: "var(--font-in-poppins, sans-serif)",
            fontSize: 13,
            color: "#A1706D",
            marginTop: 0,
            marginBottom: 24,
          }}
        >
          Descubre nuestros tratamientos estéticos y ginecológicos con protocolos avanzados</p>
        {/* Tabs */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          style={{
            display: "inline-flex",
            background: "#f5ede6",
            borderRadius: 32,
            padding: 4,
            gap: 4,
            marginBottom: 32,
            maxWidth: "100%",
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {TABS.map((t, i) => (
            <button
              key={t}
              onClick={() => setActive(i)}
              className="transition-all duration-300 hover:scale-105"
              style={{
                border: "none",
                borderRadius: 28,
                padding: "10px 24px",
                fontFamily: "var(--font-in-poppins, sans-serif)",
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                background: active === i ? "#A1706D" : "transparent",
                color: active === i ? "#fff" : "#684639",
                boxShadow: active === i ? "0 4px 14px rgba(161,112,109,0.35)" : "none",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Cards desktop/tablet */}
        <div
          className="hidden md:grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
            padding: "0 24px",
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          {services.map((s, i) => (
            <ServicePlaceholder
              key={s.name}
              label={s.name}
              badge={s.badge}
              imageSrc={s.imageSrc}
              imageAlt={s.imageAlt}
              delay={i * 100}
            />
          ))}
        </div>

        {/* Cards mobile carousel */}
        <div
          className="md:hidden -mx-4 flex overflow-x-auto px-4 pb-3"
          style={{
            gap: 16,
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {services.map((s, i) => (
            <ServicePlaceholder
              key={s.name}
              label={s.name}
              badge={s.badge}
              imageSrc={s.imageSrc}
              imageAlt={s.imageAlt}
              delay={i * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
