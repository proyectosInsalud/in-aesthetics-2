"use client";
import { useState } from "react";
import Image from "next/image";

const FAQS = [
  {
    q: "¿Es seguro el tratamiento?",
    a: "Sí. Todos nuestros tratamientos son realizados por médicos especializados utilizando tecnología aprobada internacionalmente. Evaluamos cada caso para garantizar seguridad y resultados naturales.",
  },
  {
    q: "¿El procedimiento es doloroso?",
    a: "La mayoría de tratamientos generan solo una ligera molestia. Dependiendo del procedimiento se puede aplicar anestesia tópica para mayor confort.",
  },
  {
    q: "¿Cuánto dura el tratamiento?",
    a: "La mayoría de sesiones duran entre 30 y 60 minutos, dependiendo del área tratada.",
  },
  {
    q: "¿Necesito una evaluación previa?",
    a: "Sí. Todos los pacientes pasan por una evaluación médica personalizada para determinar el tratamiento más adecuado.",
  },
  {
    q: "¿El tratamiento es personalizado?",
    a: "Absolutamente. Cada paciente recibe un plan estético diseñado según su tipo de piel, edad y objetivos.",
  },
  {
    q: "¿Cómo puedo agendar una cita?",
    a: "Puedes agendar fácilmente a través de WhatsApp, llamada telefónica o formulario en nuestra web.",
  },
  {
    q: "¿Cuánto cuesta el tratamiento?",
    a: "Los costos varían según el tratamiento y el plan personalizado. Durante la evaluación médica se entrega el presupuesto completo.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  const [imgReady, setImgReady] = useState(false);

  return (
    <section id="faq-inlux" className="faq-section">
      {/* FAQ list */}
      <div className="faq-list">
        <h2
          style={{
            fontFamily: "var(--font-in-playfair, Georgia, serif)",
            fontSize: "clamp(24px, 3vw, 34px)",
            fontWeight: 700,
            color: "#231F20",
            marginBottom: 36,
          }}
        >
          Preguntas Frecuentes
        </h2>
        {FAQS.map((faq, i) => (
          <div
            key={faq.q}
            style={{
              borderBottom: "1px solid #f0e8e0",
              paddingBottom: 16,
              marginBottom: 16,
            }}
          >
            <button
              className="faq-button"
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                background: "none",
                border: "none",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                fontFamily: "var(--font-in-poppins, sans-serif)",
                fontSize: "clamp(16px, 2vw, 18px)",
                fontWeight: 600,
                color: open === i ? "#A1706D" : "#684639",
                textAlign: "left",
                padding: 0,
                gap: 12,
                transition: "color 0.2s ease",
              }}
            >
              {faq.q}
              <span
                style={{
                  fontSize: 26,
                  fontWeight: 300,
                  color: "#A1706D",
                  flexShrink: 0,
                  lineHeight: 1,
                  transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                +
              </span>
            </button>
            <div
              style={{
                display: "grid",
                gridTemplateRows: open === i ? "1fr" : "0fr",
                opacity: open === i ? 1 : 0,
                transition: "grid-template-rows 0.35s ease, opacity 0.35s ease",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <p
                  style={{
                    margin: 0,
                    paddingTop: 12,
                    paddingBottom: 4,
                    fontFamily: "var(--font-in-poppins, sans-serif)",
                    fontSize: 15,
                    color: "#A1706D",
                    lineHeight: 1.7,
                  }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .faq-section {
          background: #fff;
          padding: 64px 20px 72px;
          display: flex;
          gap: 36px;
          align-items: flex-start;
          flex-wrap: wrap;
          max-width: 1200px;
          margin: 0 auto;
        }
        .faq-list {
          flex: 1 1 380px;
          min-width: 280px;
        }
        .faq-button {
          text-align: left;
        }
        .image-wrapper {
          flex: 0 0 220px;
          width: 220px;
          height: 320px;
          max-width: 34vw;
          border-radius: 18px;
          overflow: hidden;
          position: relative;
          align-self: center;
          background: #fff;
        }
        @media (max-width: 900px) {
          .faq-section {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 28px;
          }
          .faq-list {
            width: 100%;
            max-width: 640px;
          }
          .faq-button {
            justify-content: center;
          }
          .faq-button span {
            margin-left: 12px;
          }
        }
        @media (max-width: 600px) {
          .faq-section {
            padding: 48px 16px 56px;
            gap: 24px;
          }
          .image-wrapper {
            width: 180px;
            height: 260px;
            max-width: 70vw;
          }
        }
      `}</style>
    </section>
  );
}
