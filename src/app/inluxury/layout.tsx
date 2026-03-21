import type { ReactNode } from "react";
import Script from "next/script";

type InLuxuryLayoutProps = {
  children: ReactNode;
};

export default function InLuxuryLayout({
  children,
}: InLuxuryLayoutProps) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17960264537"
        strategy="afterInteractive"
      />
      <Script id="google-ads-inluxury" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17960264537');
        `}
      </Script>
      {children}
    </>
  );
}
