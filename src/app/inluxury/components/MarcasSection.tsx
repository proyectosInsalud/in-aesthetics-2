import Image from "next/image";

const BRANDS = [
  { src: "/svg/uriage.svg", alt: "Uriage" },
  { src: "/svg/medik8.svg", alt: "Medik8" },
  { src: "/svg/hydrafacial.svg", alt: "HydraFacial" },
  { src: "/svg/botox.svg", alt: "Botox Cosmetic" },
];

export function MarcasSection() {
  return (
    <section
      style={{
        background: "#faf6f2",
        padding: "48px 20px 56px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "var(--font-in-playfair, Georgia, serif)",
            fontSize: "clamp(24px, 3vw, 32px)",
            fontWeight: 700,
            color: "var(--color-inluxury-brown-base, #1E1814)",
            marginBottom: 12,
          }}
        >
          Conoce nuestras marcas
        </h2>
        <p
          style={{
            fontFamily: "var(--font-in-poppins, sans-serif)",
            fontSize: 13,
            color: "#999",
            marginBottom: 40,
          }}
        >
          Trabajamos solo con las mejores marcas certificadas internacionalmente
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 32,
            alignItems: "center",
            flexWrap: "wrap",
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          {BRANDS.map((b) => (
            <Image
              key={b.alt}
              src={b.src}
              alt={b.alt}
              width={255}
              height={153}
              style={{ width: 160, height: "auto", objectFit: "contain" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
