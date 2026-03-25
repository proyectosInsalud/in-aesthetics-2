import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import 'swiper/css';
import "swiper/css/effect-fade";
import "@/styles/index.css"; 
import 'aos/dist/aos.css'
import { AOSInit } from "@/components/aosInit/aosInit";
import { Toaster } from "sonner";
import localFont from 'next/font/local'
import { ReactNode } from "react";
import Script from "next/script";

const ProximaNova = localFont({
  src: '../../public/fonts/ele.otf',
  variable: "--font-in-crisfont",
  display: "swap",
  weight: "800",
})

const playfair = Playfair_Display({
  variable: "--font-in-playfair",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-in-poppins",
  subsets: ["latin"],
  weight: ["500", "400"]
});

export const metadata: Metadata = {
  metadataBase: new URL('https://app.inaesthetics.pe'),
  title: "Inaesthetics | Estética Natural y Bienestar en Lima",
  description: "Tratamientos estéticos seguros y naturales en Inaesthetics. Técnicas no invasivas con equipo médico especializado. Belleza y bienestar en un solo lugar.",
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://app.inaesthetics.pe',
  },
  verification: {
    google: '0xvxNQPeLuEebu5LjzOv5Nk90x8A9MdXFA3oe5nmELE',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning  className="h-full scroll-smooth">
      <AOSInit />
      <body suppressHydrationWarning
        className={`${poppins.variable} ${playfair.variable} ${ProximaNova.variable} antialiased flex flex-col min-h-screen`}
      >
      <Script id="google-tag-manager" strategy="afterInteractive">
        {
          `
           (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P5VN8HXJ');
          `
        }
      </Script>
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P5VN8HXJ"
                height="0" width="0" style={{ display: "none", visibility:"hidden"}}>
        </iframe>
      </noscript>
        <Toaster/>
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
