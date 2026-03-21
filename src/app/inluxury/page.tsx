import type { Metadata } from "next";
import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import { ServiciosSection } from "./components/ServiciosSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { PromocionesSection } from "./components/PromocionesSection";
import { MarcasSection } from "./components/MarcasSection";
import { SedeSection } from "./components/SedeSection";
import { TestimoniosSection } from "./components/TestimoniosSection";
import { FaqSection } from "./components/FaqSection";
import { CtaBanner } from "./components/CtaBanner";
import { FooterSection } from "./components/FooterSection";
import { ButtonWsp } from "@/components/ButtonWsp";
import { PromoPopupMount } from "./components/PromoPopupMount";
import { getInluxuryData } from "@/queries/inluxury";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "InLuxury - Medicina Estética Avanzada y Longevidad | Inaesthetics",
  description:
    "Experiencias exclusivas de medicina estética avanzada, nutrición funcional y longevidad. Tratamientos personalizados para una vida más larga y saludable en Lima, Perú.",
  keywords:
    "medicina estética avanzada, longevidad, nutrición funcional, epigenética, medicina hormonal, yoga consciente, tratamientos personalizados Lima",
  authors: [{ name: "Inaesthetics" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://inaesthetics.pe/inluxury",
    title: "InLuxury - Medicina Estética Avanzada y Longevidad",
    description:
      "Experiencias exclusivas de medicina estética avanzada, nutrición funcional y longevidad.",
    siteName: "Inaesthetics",
    images: [{ url: "/images/banner-temporal.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://app.inaesthetics.pe/inluxury" },
};

const WSP_MESSAGE =
  "Hola 👋 Vi su página de medicina estética InLuxury. Quiero más información sobre sus tratamientos.";
const WSP_PHONE = "51997621747";

export default async function InLuxuryPage() {
  const inluxuryData = await getInluxuryData();

  return (
    <>
      <div
        className="inluxury-font"
        style={{ fontFamily: "'Manrope', sans-serif" }}
      >
        <PromoPopupMount popup={inluxuryData?.popup ?? null} />
        {/* Fixed header */}
        <NavBar />

        <main>
          {/* Hero + Stats */}
          <div style={{ paddingTop: 0 }}>
            <HeroSection />
          </div>

          {/* Services with tabs */}
          <ServiciosSection />

          {/* Why choose InLuxury */}
          <BenefitsSection />

          {/* Promotions */}
          <PromocionesSection promotions={inluxuryData?.promotions ?? []} />

          {/* Brands */}
          <MarcasSection />

          {/* Sede */}
          <SedeSection />

          {/* Testimonials */}
          <TestimoniosSection />

          {/* FAQ */}
          <FaqSection />

          {/* Bottom CTA Banner */}
          <CtaBanner message={WSP_MESSAGE} phoneNumber={WSP_PHONE} />
        </main>

        {/* Footer */}
        <FooterSection />

        {/* Floating WhatsApp button */}
        <ButtonWsp message={WSP_MESSAGE} phoneNumber={WSP_PHONE} />
      </div>
    </>
  );
}
