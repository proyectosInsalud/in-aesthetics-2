import Image from "next/image";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";

type StatItem = {
  icon: string;
  value?: string;
  label: string;
};

const STATS: StatItem[] = [
  {
    icon: "/svg/icon_patient.svg",
    label: "Sede especializada en estética y ginecología",
  },
  {
    icon: "/svg/process.svg",
    value: "+20 000",
    label: "Pacientes tratados",
  },
  {
    icon: "/svg/sede.svg",
    label: "Equipos innovadores aprobados por la FDA",
  },
];

export function HeroSection() {
  return (
    <>
      {/* Hero */}
      <section
        id="inicio-inlux"
        className="relative overflow-hidden"
        style={{
          minHeight: "clamp(520px, 90vh, 760px)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          src="/images/inluxury/hero_inluxury.png"
          alt="InLuxury - Medicina estética avanzada y bienestar"
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
          priority
        />
        {/* gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
          }}
        />

        {/* Content — top padding compensa header fijo (promo ~30px + nav 64px) */}
        <div
          className="relative z-10 max-w-screen-xl mx-auto"
          style={{
            width: "100%",
            padding: "clamp(60px, 10vh, 120px) clamp(16px, 5vw, 72px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 18,
          }}
        >
          <h1
            data-aos="fade-up"
            style={{
              fontFamily: "var(--font-in-playfair, Georgia, serif)",
              fontSize: "clamp(32px, 5.2vw, 58px)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: 22,
              maxWidth: 640,
              textAlign: "left",
              textShadow: "0 2px 10px rgba(0,0,0,0.5)",
            }}
          >
            Centro de salud estética y ginecología en Lima
          </h1>

          {/* CTA alineado a la izquierda */}
          <div className="flex justify-start" style={{ marginTop: 6 }}>
            <Link
              data-aos="fade-up"
              data-aos-delay="150"
              href="/inluxury/reservar"
              className="inline-flex items-center gap-[10px] bg-[#E0D7CD]/20 rounded-[18px] py-3 px-[22px] font-in-poppins text-[14px] font-semibold text-white no-underline backdrop-blur-[6px] tracking-[0.02em] shadow-[0_10px_30px_rgba(0,0,0,0.22)] transition-all duration-300 hover:bg-[#E0D7CD]/30 hover:scale-[1.03] hover:shadow-[0_15px_35px_rgba(0,0,0,0.3)]"
            >
              <CalendarIcon size={18} />
              Agenda tu evaluación
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div
        className="hidden sm:block"
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundImage: "url('/images/inluxury/shadow_cursive.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom center",
          backgroundSize: "120% auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
            padding: "64px 24px 80px",
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="flex items-center gap-4 sm:gap-6 bg-white rounded-[20px] transition-all duration-500 hover:-translate-y-1.5 shadow-[0_8px_24px_rgba(161,112,109,0.08),0_2px_8px_rgba(161,112,109,0.04)] hover:shadow-[0_16px_40px_rgba(161,112,109,0.18),0_4px_12px_rgba(161,112,109,0.08)]"
              style={{
                border: "1px solid rgba(161, 112, 109, 0.2)",
                padding: "20px 24px",
                minHeight: 100,
              }}
            >
              <div style={{ flexShrink: 0 }}>
                <Image
                  src={s.icon}
                  alt={s.label}
                  width={48}
                  height={48}
                  style={{ width: 48, height: 48, objectFit: "contain" }}
                />
              </div>
              <div className="flex flex-col justify-center">
                {s.value && (
                  <div
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontSize: "clamp(24px, 4vw, 30px)",
                      fontWeight: 800,
                      color: "#A1706D",
                      lineHeight: 1.1,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.value}
                  </div>
                )}
                <div
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: s.value ? 13 : "clamp(14px, 1.5vw, 15px)",
                    fontWeight: s.value ? 500 : 700,
                    color: s.value ? "#808B8F" : "#A1706D",
                    lineHeight: 1.4,
                    marginTop: s.value ? 2 : 0,
                  }}
                >
                  {s.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
