import { Benefits } from "./components/Benefits";
import { Header } from "./components/Header";
import { HeroContact } from "./components/HeroContact";
import { InfoEnzimas } from "./components/InfoEnzimas";
import { Reviews } from "./components/Reviews";
import { Questions } from "./components/Questions";
import { CtaWhatsApp } from "./components/CtaWhatsApp";
import { PromoBanner } from "./components/PromoBanner";
import { Metadata } from "next";
import { ButtonWsp } from "@/components/ButtonWsp";
import { Footer } from "@/components/Footer";
// import { PromoModal } from "@/components/PromoModal";

export const metadata: Metadata = {
  title: 'Inaesthetics | Reducción de celulitis y grasa localizada',
  description: 'Moldea tu cuerpo sin cirugía con nuestro tratamiento de Enzimas Recombinantes. Elimina grasa localizada de forma rápida y efectiva en abdomen, brazos, piernas y papada.',
  keywords: ['reducción de celulitis', 'Enzimas Recombinantes', 'grasa localizada', 'tratamiento no invasivo', 'moldear cuerpo', 'Inaesthetics', 'lipolítico', 'sin cirugía', 'reducción de papada', 'tratamiento corporal Lima'],

  // Canonical y robots
  alternates: {
    canonical: 'https://app.inaesthetics.pe/enzimas',
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
    title: 'Inaesthetics | Moldea tu cuerpo sin cirugía con Enzimas Recombinantes',
    description: 'Moldea tu cuerpo sin cirugía con nuestro tratamiento de Enzimas Recombinantes. Elimina grasa localizada de forma rápida y efectiva en abdomen, brazos, piernas y papada.',
    url: 'https://inaesthetics.pe/enzimas',
    siteName: 'Inaesthetics',
    images: [
      {
        url: '/images/reduccion/encimas-pb-serum.png',
        width: 1200,
        height: 630,
        alt: 'Tratamiento de reducción de celulitis con Enzimas Recombinantes en Inaesthetics',
      },
    ],
    locale: 'es_PE',
    type: 'website',
  },

  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    title: 'Inaesthetics | Moldea tu cuerpo sin cirugía',
    description: 'Elimina grasa localizada de forma rápida y efectiva con Enzimas Recombinantes. Los resultados pueden apreciarse de forma progresiva a lo largo del protocolo de tratamiento (según evaluación médica individual).',
    site: '@InaestheticsPE',
    images: ['/images/reduccion/encimas-pb-serum.png'],
  },

  // Favicon y color
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

};


export default function Enzimas() {
  return (
    <div>
      {/* 
      <PromoModal
         imageUrl="/images/popups/promo_enzimas.png"
         title="¡Oferta Especial en Tratamiento de Enzimas!"
         actionUrl="https://wa.me/+51997621747?text=InAesthetics%20-%20Enzimas%0AHola%20%F0%9F%91%8B%20Vi%20su%20p%C3%A1gina%20sobre%20el%20tratamiento%20con%20enzimas%20para%20eliminar%20grasa%20localizada%20y%20estoy%20interesado.%20%C2%BFMe%20pueden%20dar%20m%C3%A1s%20informaci%C3%B3n%3F"
         showAfter={3000}
         showOnce={true}
         storageKey="enzimas-promo-shown"
         width="550px"
         id="pop-up-enzimas"
      /> */}
      <Header />
      <PromoBanner />
      <HeroContact />
      <InfoEnzimas />
      <Benefits />
      <Reviews />
      <Questions />
      <CtaWhatsApp />
      <ButtonWsp message="Hola 👋 Vi su página sobre el tratamiento con enzimas para eliminar grasa localizada y estoy interesado. ¿Me pueden dar más información?" />
      <Footer />
    </div>
  );
}