"use client";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { useState } from "react";

const TESTIMONIOS = [
  {
    text: "Me realicé la eliminación de lunares con láser CO2 en Inluxury y la experiencia fue excelente. El procedimiento fue rápido, seguro y la recuperación muy sencilla. Estoy feliz con el resultado y con cómo se ve ahora mi piel.",
    name: "Lucía Benites Cafferata",
  },
  {
    text: "La verdad vine con un poco de miedo porque nunca me había hecho criolipólisis, pero la atención en Inluxury fue demasiado buena. Me explicaron todo paso a paso y me sentí súper tranquila. Además ya estoy viendo cómo se está reduciendo la grasita del abdomen. ¡Feliz con el resultado!",
    name: "Mariana Rengifo",
  },
  {
    text: "Me hice un Hydrafacial en Inluxury y mi piel quedó increíble. Literal salí con la cara súper luminosa y limpia. Lo que más me gustó fue la atención, todo el equipo es súper amable y te explican cada parte del tratamiento.",
    name: "Franky Borja",
  },
];

export function TestimoniosSection() {
  const [current, setCurrent] = useState(0);
  const t = TESTIMONIOS[current];

  return (
    <section
      id="testimonios-inlux"
      style={{
        background: "#f8eedf",
        padding: "64px 20px",
      }}
    >
      {/* Título centrado */}
      <h2
        data-aos="fade-up"
        style={{
          fontFamily: "var(--font-in-playfair, Georgia, serif)",
          fontSize: "clamp(24px, 3vw, 34px)",
          fontWeight: 700,
          textAlign: "center",
          marginBottom: 8,
          color: "#1E1814",
        }}
      >
        Testimonios reales de{" "}
        <span style={{ color: "#684639" }}>nuestros pacientes</span>
      </h2>
      <p
        data-aos="fade-up"
        data-aos-delay="100"
        style={{
          fontFamily: "var(--font-in-poppins, sans-serif)",
          fontSize: 13,
          color: "#A1706D",
          textAlign: "center",
          marginBottom: 48,
        }}
      >
        Conoce los testimonios
      </p>

      {/* Dos columnas */}
      <div
        style={{
          display: "flex",
          gap: 24,
          alignItems: "center",
          flexWrap: "wrap",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Izquierda — tarjeta testimonial */}
        <div
          data-aos="fade-right"
          style={{ flex: "1 1 300px", minWidth: 260 }}
          className="order-2 md:order-1"
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 20,
              padding: "32px 28px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            }}
          >
            {/* Comillas decorativas */}
            <p
              style={{
                fontFamily: "var(--font-in-poppins, sans-serif)",
                fontSize: 14,
                color: "#444",
                lineHeight: 1.75,
                marginBottom: 24,
                fontStyle: "italic",
              }}
            >
              &ldquo;{t.text}&rdquo;
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* Nombre y DNI */}
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-in-poppins, sans-serif)",
                    fontWeight: 700,
                    fontSize: 14,
                    color: "#A1706D",
                    margin: 0,
                    marginBottom: 2,
                  }}
                >
                  {t.name}
                </p>
              </div>

              {/* Paginación */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-in-poppins, sans-serif)",
                    fontSize: 13,
                    color: "#888",
                  }}
                >
                  {current + 1}/{TESTIMONIOS.length}
                </span>
                <button
                  onClick={() => setCurrent((current + 1) % TESTIMONIOS.length)}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "#A1706D",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: 18,
                    lineHeight: 1,
                    transition: "transform 0.2s ease, background 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.15)";
                    e.currentTarget.style.background = "#825a58";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.background = "#A1706D";
                  }}
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Derecha — imagen antes/después */}
        <div
          data-aos="fade-left"
          style={{ flex: "1 1 360px", minWidth: 260, maxWidth: 420, width: "100%" }}
          className="order-1 md:order-2"
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "4 / 5",
              borderRadius: 20,
              overflow: "hidden",
              background: "#d4c5b8",
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
            }}
          >
            <ReactCompareSlider
              style={{
                width: "100%",
                height: "100%",
              }}
              itemOne={
                <ReactCompareSliderImage
                  src="/images/inluxury/antes.png"
                  alt="Antes del tratamiento InLuxury"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src="/images/inluxury/despues.png"
                  alt="Después del tratamiento InLuxury"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              }
            />
            {/* Labels antes/después */}
            <span
              style={{
                position: "absolute",
                top: 14,
                left: 16,
                fontFamily: "var(--font-in-poppins, sans-serif)",
                fontSize: 11,
                fontWeight: 600,
                color: "#fff",
                background: "rgba(0,0,0,0.25)",
                borderRadius: 20,
                padding: "3px 10px",
                zIndex: 2,
              }}
            >
              Antes
            </span>
            <span
              style={{
                position: "absolute",
                top: 14,
                right: 16,
                fontFamily: "var(--font-in-poppins, sans-serif)",
                fontSize: 11,
                fontWeight: 600,
                color: "#fff",
                background: "rgba(0,0,0,0.25)",
                borderRadius: 20,
                padding: "3px 10px",
                zIndex: 2,
              }}
            >
              Después
            </span>
          </div>

          {/* Caption */}
          <p
            style={{
              fontFamily: "var(--font-in-poppins, sans-serif)",
              fontSize: 12,
              color: "#A1706D",
              textAlign: "right",
              marginTop: 10,
            }}
          >
            Arrastra para ver resultados
          </p>
        </div>
      </div>
    </section>
  );
}
