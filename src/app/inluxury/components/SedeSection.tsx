"use client";
import { useState } from "react";
import Image from "next/image";

const SEDES = [
  {
    name: "Jesús María (Sede Pershing)",
    address: "Av. Faustino Sánchez Carrión 615, piso 10",
    status: "Consultar ahora",
  },
];

export function SedeSection() {
  const [selected, setSelected] = useState(0);

  return (
    <section
      id="sedes-inlux"
      style={{
        background: "#faf6f2",
        padding: "72px 20px 84px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2
          data-aos="fade-up"
          style={{
            fontFamily: "var(--font-in-playfair, Georgia, serif)",
            fontSize: "clamp(26px, 3vw, 36px)",
            fontWeight: 700,
            color: "#1E1814",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          ¿Dónde se ubica la <span style={{ color: "#A1706D" }}>sede InLuxury?</span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          style={{
            textAlign: "center",
            fontFamily: "var(--font-in-poppins, sans-serif)",
            fontSize: 14,
            color: "#A1706D",
            marginBottom: 42,
          }}
        >
          Contamos con equipos innovadores, modernos y atención especializada en cada sede.
        </p>

        <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-center justify-center">
          {/* Sede list */}
          <div
            data-aos="fade-right"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              width: "100%",
              maxWidth: 380,
              flexShrink: 0,
            }}
          >
            {SEDES.map((sede, i) => {
              const active = selected === i;
              return (
                <div
                  key={sede.name}
                  onClick={() => setSelected(i)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "20px 22px",
                    borderRadius: 18,
                    background: active ? "#fff" : "#f0e8e0",
                    border: "1px solid #e5d8cc",
                    boxShadow: active
                      ? "0 10px 28px rgba(118,43,6,0.15)"
                      : "0 4px 12px rgba(0,0,0,0.04)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-in-poppins, sans-serif)",
                        fontWeight: 700,
                        fontSize: 15,
                        color: "#A1706D",
                        margin: 0,
                        marginBottom: 6,
                      }}
                    >
                      {sede.name}
                    </p>
                    {active && (
                      <>
                        <p
                          style={{
                            fontFamily: "var(--font-in-poppins, sans-serif)",
                            fontSize: 13,
                            color: "#58656A",
                            margin: 0,
                            marginBottom: 6,
                          }}
                        >
                          {sede.address}
                        </p>
                        {sede.status && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(
                                "https://wa.me/908527116?text=Hola%20vengo%20de%20la%20web%20quisiera%20información%20",
                                "_blank"
                              );
                            }}
                            style={{
                              fontFamily: "var(--font-in-poppins, sans-serif)",
                              fontSize: 12,
                              fontWeight: 700,
                              color: "#A1706D",
                              background: "rgba(118,43,6,0.08)",
                              borderRadius: 12,
                              padding: "5px 10px",
                              display: "inline-block",
                              transition: "all .2s ease",
                              cursor: "pointer",
                              border: "none",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = "rgba(118,43,6,0.15)";
                              e.currentTarget.style.transform = "scale(1.05)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = "rgba(118,43,6,0.08)";
                              e.currentTarget.style.transform = "scale(1)";
                            }}
                          >
                            {sede.status}
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className="flex-1 w-full"
            data-aos="fade-left"
            style={{
              position: "relative",
              borderRadius: 22,
              overflow: "hidden",
              minHeight: 320,
              maxWidth: 480,
              background: "#d8cfc6",
              boxShadow: "0 18px 36px rgba(0,0,0,0.15)",
            }}
          >
            <Image
              src="/images/inluxury/Sedes.png"
              alt={`${SEDES[selected].name} · Interior`}
              fill
              style={{ objectFit: "cover" }}
              sizes="(min-width: 1024px) 800px, 100vw"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(90deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.05) 45%, rgba(0,0,0,0.0) 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
