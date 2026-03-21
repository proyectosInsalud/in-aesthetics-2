"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, type CSSProperties } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { InluxuryPromotion } from "@/types/inluxury";

interface Props {
  promotions?: InluxuryPromotion[];
}

function isExternalUrl(url: string) {
  return /^https?:\/\//i.test(url);
}

export function PromocionesSection({ promotions = [] }: Props) {
  const promosToShow = promotions.filter(
    (promotion) => Boolean(promotion.image?.trim())
  );
  const [docReady, setDocReady] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="promos-inlux" style={{ background: "#fff", padding: "64px 20px 72px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
          <h2
            data-aos="fade-up"
            style={{
              fontFamily: "var(--font-in-playfair, Georgia, serif)",
              fontSize: "clamp(26px, 3vw, 36px)",
              fontWeight: 700,
              color: "var(--color-inluxury-brown-base, #1E1814)",
              margin: 0,
            }}
          >
            Promociones
          </h2>
          {promosToShow.length > 3 && (
            <div style={{ display: "flex", gap: 12 }}>
              <button
                onClick={() => scroll("left")}
                aria-label="Anterior"
                style={{
                  background: "#f5ede6",
                  border: "none",
                  borderRadius: "50%",
                  width: 44,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#A1706D",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#A1706D";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#f5ede6";
                  e.currentTarget.style.color = "#A1706D";
                }}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Siguiente"
                style={{
                  background: "#f5ede6",
                  border: "none",
                  borderRadius: "50%",
                  width: 44,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#A1706D",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#A1706D";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#f5ede6";
                  e.currentTarget.style.color = "#A1706D";
                }}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>

        {promosToShow.length > 0 ? (
          <div
            ref={scrollRef}
            className="promos-scroll-container"
            style={{
              display: "flex",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              gap: 20,
              marginBottom: 56,
              paddingBottom: 20, // space for scrollbar
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            {promosToShow.map((promotion) => {
              const href = promotion.url?.trim();
              const itemStyle: CSSProperties = {
                flex: "0 0 calc(33.333% - 14px)",
                flexShrink: 0,
                minWidth: 280,
                scrollSnapAlign: "start",
                display: "block",
                textDecoration: "none",
              };

              const card = (
                <div
                  style={{
                    width: "100%",
                    borderRadius: 20,
                    overflow: "hidden",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                  }}
                >
                  <img
                    src={promotion.image}
                    alt={promotion.alt || "Promocion InLuxury"}
                    style={{
                      display: "block",
                      width: "100%",
                      height: 300,
                      objectFit: "cover",
                      opacity: 0,
                      transition: "opacity 200ms ease",
                    }}
                    loading="lazy"
                    onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                  />
                </div>
              );

              if (!href) {
                return (
                  <div key={promotion._key} style={itemStyle}>
                    {card}
                  </div>
                );
              }

              return (
                <a
                  key={promotion._key}
                  href={href}
                  target={isExternalUrl(href) ? "_blank" : undefined}
                  rel={isExternalUrl(href) ? "noopener noreferrer" : undefined}
                  style={itemStyle}
                >
                  {card}
                </a>
              );
            })}
          </div>
        ) : (
          <p
            style={{
              margin: "0 0 56px",
              fontFamily: "var(--font-in-poppins, sans-serif)",
              fontSize: 14,
              color: "#6f625b",
              textAlign: "center",
            }}
          >
            No hay promociones publicadas en este momento.
          </p>
        )}

        <div
          className="promo-cta"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(36px, 8vw, 80px)",
            flexWrap: "wrap",
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          <div className="promo-copy" style={{ flex: "1 1 300px", maxWidth: 500 }} data-aos="fade-right">
            <h3
              style={{
                fontFamily: "var(--font-in-playfair, Georgia, serif)",
                fontSize: "clamp(28px, 3.5vw, 42px)",
                fontWeight: 700,
                lineHeight: 1.25,
                marginBottom: 16,
              }}
            >
              <span style={{ color: "#A1706D" }}>
                Centro de salud
                <br />
                con expertos,{" "}
              </span>
              <span style={{ color: "#231F20" }}>
                listos
                <br />
                para atenderte.
              </span>
            </h3>

            <p
              style={{
                fontFamily: "var(--font-in-poppins, sans-serif)",
                fontSize: 14,
                color: "#A1706D",
                marginBottom: 28,
                lineHeight: 1.6,
              }}
            >
              Atiéndete con uno de nuestros especialistas en ginecología o estética.
            </p>

            <Link
              href="/inluxury/reservar"
              className="promo-btn transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{
                display: "inline-block",
                textAlign: "center",
                textDecoration: "none",
                background: "#A1706D",
                color: "#fff",
                border: "none",
                borderRadius: 24,
                padding: "13px 32px",
                fontFamily: "var(--font-in-poppins, sans-serif)",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Agendar mi cita
            </Link>
          </div>

          <div
            className="promo-visual"
            data-aos="fade-left"
            style={{
              flex: "0 0 auto",
              position: "relative",
              width: 280,
              height: 280,
            }}
          >
            <Image
              src="/svg/border_rounded.svg"
              alt=""
              width={340}
              height={340}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "100%",
                height: "100%",
                objectFit: "contain",
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 260,
                height: 260,
                borderRadius: "50%",
                overflow: "hidden",
                zIndex: 1,
              }}
            >
              <Image
                src="/images/inluxury/doctora.png"
                alt="Doctora InLuxury"
                fill
                style={{
                  objectFit: "contain",
                  opacity: docReady ? 1 : 0,
                  transition: "opacity 200ms ease",
                }}
                onLoadingComplete={() => setDocReady(true)}
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 720px) {
          .promos-scroll-container {
            gap: 16px !important;
          }
          .promos-scroll-container > * {
            flex: 0 0 calc(85% - 16px) !important;
          }
          .promo-cta {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 18px;
          }
          .promo-copy {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .promo-copy button,
          .promo-copy .promo-btn {
            width: 100%;
            max-width: 220px;
          }
          .promo-visual {
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
