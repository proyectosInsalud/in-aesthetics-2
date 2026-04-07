
import { HeroLaserTreatment } from "./components/HeroLaserTreatment";
import { Benefits } from "./components/Benefits";
import { CtaTreatmentWsp } from "./components/CtaTreatmentWsp";
import { Questions } from "./components/Questions";
import { ButtonWsp } from "@/components/ButtonWsp";
import { Metadata } from "next";
import { Testimonials } from "./components/testimonials/Testimonials";
import { HeaderLunares } from "./components/HeaderLunares";
import { Hero } from "./components/Hero";
import { Footer } from "@/components/Footer";
import { AnchoredVideos } from "./components/AnchoredVideos";
import { PreAssessment } from "./components/PreAssessment";

export const metadata: Metadata = {
  title: 'Inaesthetics | Eliminación de lunares, verrugas y acrocordones con láser CO2',
  description: 'Eliminación de lunares, verrugas y acrocordones con láser CO2 DEKA sin dolor ni marcas. Procedimiento rápido, seguro y eficaz realizado por especialistas en estética avanzada.',
  keywords: ['eliminación lunares', 'eliminación verrugas', 'acrocordones', 'láser CO2', 'DEKA', 'tratamiento sin cicatrices', 'eliminación definitiva', 'procedimiento seguro', 'resultados inmediatos', 'Inaesthetics Lima', 'dermatología estética'],

  // Canonical y robots
  alternates: {
    canonical: 'https://app.inaesthetics.pe/lunares',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    title: 'Inaesthetics | Eliminación de lunares y verrugas con láser CO2 DEKA',
    description: 'Elimina lunares, verrugas y acrocordones sin dolor ni marcas con nuestro tratamiento láser CO2 DEKA. Sin cicatrices, procedimiento seguro y con resultados inmediatos.',
    url: 'https://inaesthetics.pe/lunares',
    siteName: 'Inaesthetics',
    images: [
      {
        url: '/images/hero_image.png',
        width: 1200,
        height: 630,
        alt: 'Tratamiento con láser CO2 DEKA para eliminación de lunares y verrugas en Inaesthetics',
      },
    ],
    locale: 'es_PE',
    type: 'website',
  },

  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: 'Inaesthetics | Eliminación de lunares y verrugas sin cicatrices',
    description: 'Tecnología láser CO2 DEKA para eliminar lunares, verrugas y acrocordones sin dolor ni marcas. Resultados inmediatos y definitivos.',
    site: '@InaestheticsPE',
    images: ['/images/hero_image.png'],
  },
};


export default function LunaresPage() {
  return (
    <>
      {/* <PromoModal
         imageUrl="/images/popups/promo_lunares.png"
         title="¡Oferta Especial en Eliminación de Lunares!"
         actionUrl="https://wa.me/+51997621747?text=InAesthetics%20-%20Lunares%0AHola%20%F0%9F%91%8B%20Vi%20su%20p%C3%A1gina%20sobre%20el%20tratamiento%20con%20l%C3%A1ser%20para%20eliminar%20verrugas%20y%20lunares%20y%20estoy%20interesado.%20%C2%BFMe%20pueden%20dar%20m%C3%A1s%20informaci%C3%B3n%3F"
         showAfter={3000}
         showOnce={true}
         storageKey="lunares-promo-shown"
         width="550px"
         id="pop-up-lunares"
      /> */}
      <HeaderLunares />
      <Hero />
      <AnchoredVideos />
      <HeroLaserTreatment />
      <PreAssessment />
      <Benefits />
      <Testimonials />
      {/* <Comparator /> */}
      <Questions />
      <CtaTreatmentWsp />
      <ButtonWsp message="Hola 👋 Vi su página sobre el tratamiento con láser para eliminar verrugas y lunares y estoy interesado. ¿Me pueden dar más información?" />
      <Footer />
    </>
  );
}
