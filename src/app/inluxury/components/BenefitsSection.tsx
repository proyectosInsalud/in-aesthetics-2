import { cdn } from "@/utils/cdn";
import Image from "next/image";

const BENEFITS = [
  "Más de 40,000 procedimiento realizados.",
  "Especialistas disponibles en Lima-Perú.",
  "Certificaciones internacionales en calidad médica.",
  "Líderes en tratamientos estéticos y ginecológicos.",
  "Equipos de alta tecnología aprobados por la FDA.",
];

export function BenefitsSection() {
  return (
    <section
      id="nosotros-inlux"
      style={{
        padding: "64px 20px 72px",
        display: "flex",
        gap: 36,
        alignItems: "center",
        flexWrap: "wrap",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      {/* Text side */}
      <div style={{ flex: "1 1 340px", minWidth: 260 }}>
        <h2
          data-aos="fade-up"
          style={{
            fontFamily: "var(--font-in-playfair, Georgia, serif)",
            fontSize: "clamp(26px, 3vw, 36px)",
            fontWeight: 700,
            marginBottom: 28,
            lineHeight: 1.2,
          }}
        >
          <span style={{ color: "#1E1814" }}>¿Por qué elegir </span>
          <span style={{ color: "#A1706D" }}>In Luxury?</span>
        </h2>

        <ul style={{ listStyle: "none", padding: 0, margin: 0, marginBottom: 28 }}>
          {BENEFITS.map((b, i) => (
            <li
              key={b}
              data-aos="fade-right"
              data-aos-delay={i * 100}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 16,
              }}
            >
              <Image
                src={cdn("/inluxury/assets/images/sections/main/u-brown-start.svg")}
                alt=""
                width={18}
                height={18}
                style={{ width: 18, height: 18, flexShrink: 0 }}
              />
              <p
                style={{
                  fontFamily: "var(--font-in-poppins, sans-serif)",
                  fontSize: 14,
                  color: "#A1706D",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                {b}
              </p>
            </li>
          ))}
        </ul>

        {/* Trust badge */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="group transition-transform duration-300 hover:-translate-y-1"
          style={{ display: "inline-flex", alignItems: "center", gap: 14 }}
        >
          <Image
            src="/svg/qualidade-seguranca-certificado-fda-wheaton.jpg 1.svg"
            alt="FDA Approved - Certificado de seguridad y calidad"
            width={64}
            height={64}
            style={{ width: 64, height: 64, objectFit: "contain", flexShrink: 0 }}
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <div>
            <p
              style={{
                fontFamily: "var(--font-in-poppins, sans-serif)",
                fontWeight: 700,
                fontSize: 15,
                color: "#A1706D",
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              Certificado de
            </p>
            <p
              style={{
                fontFamily: "var(--font-in-poppins, sans-serif)",
                fontWeight: 700,
                fontSize: 15,
                color: "#A1706D",
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              seguridad y calidad
            </p>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-left"
        style={{
          flex: "1 1 320px",
          borderRadius: 24,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <video
          src="/video/inluxury-pillars.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls
          poster="/video/inluxury-pillars.mp4"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          title="Tratamientos InLuxury"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
          }}
        />
      </div>
    </section>
  );
}
