import { cdn } from "@/utils/cdn";
import Image from "next/image";

const PILLARS = [
  "Medicina Estética Avanzada",
  "Nutrición Funcional & Longevidad",
  "Epigenética y Medicina Predictiva",
  "Yoga & Movimiento Consciente",
  "Medicina Hormonal y Salud Femenina",
  "Experiencias InLuxury Exclusivas",
  "Programas de Bienestar Combinados",
];

export function PillarSection() {
  return (
    <section
      style={{
        background: "#faf6f2",
        padding: "80px 80px",
        display: "flex",
        gap: 64,
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {/* Text */}
      <div style={{ flex: "1 1 340px" }}>
        <h2
          style={{
            fontFamily: "var(--font-in-playfair, Georgia, serif)",
            fontSize: "clamp(26px, 3vw, 38px)",
            fontWeight: 700,
            color: "var(--color-inluxury-brown-base, #1E1814)",
            marginBottom: 16,
          }}
        >
          Los 7 Pilares InLuxury
        </h2>
        <p
          style={{
            fontFamily: "var(--font-in-poppins, sans-serif)",
            fontSize: 14,
            color: "#666",
            lineHeight: 1.7,
            marginBottom: 24,
          }}
        >
          Es un enfoque integral y profundamente personalizado que trasciende la estética y entra al corazón del bienestar: tu longevidad.
        </p>
        <p
          style={{
            fontFamily: "var(--font-in-poppins, sans-serif)",
            fontSize: 14,
            color: "#666",
            lineHeight: 1.7,
            marginBottom: 32,
          }}
        >
          Nuestros 7 pilares no son servicios aislados. Son una sinfonía cuidadosamente orquestada para que te sientas y te veas en tu mejor versión, por dentro y por fuera.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {PILLARS.map((p, i) => (
            <div
              key={p}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                fontFamily: "var(--font-in-poppins, sans-serif)",
                fontSize: 14,
                color: "var(--color-inluxury-brown-base, #1E1814)",
              }}
            >
              <span
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "var(--color-inluxury-brown-base, #1E1814)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </span>
              {p}
            </div>
          ))}
        </div>
      </div>

      {/* Pillar infographic image */}
      <div style={{ flex: "1 1 300px", display: "flex", justifyContent: "center" }}>
        <Image
          src={cdn("/inluxury/assets/images/sections/main/pilares-inluxuri.png")}
          alt="Los 7 Pilares InLuxury"
          width={480}
          height={480}
          priority
          quality={100}
          style={{ width: "100%", maxWidth: 480, height: "auto" }}
        />
      </div>
    </section>
  );
}
