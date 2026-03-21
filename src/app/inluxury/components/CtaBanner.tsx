"use client";

import Image from "next/image";
import { useState } from "react";

interface CtaBannerProps {
  message?: string;
  phoneNumber?: string;
}

export function CtaBanner({
  message = "Hola 👋 Vi su página de medicina estética InLuxury. Quiero más información sobre sus tratamientos.",
  phoneNumber = "51908527116",
}: CtaBannerProps) {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  const [imgReady, setImgReady] = useState(false);

  return (
    <div className="container mx-auto max-w-6xl px-4 md:pt-0 pb-12">
      <section 
        data-aos="zoom-in" 
        data-aos-delay="0" 
        className="bg-[#A1706D] py-6 px-6 md:py-8 md:grid md:grid-cols-12 lg:py-12 lg:px-16 rounded-[34px] relative shadow-[0_10px_28px_rgba(0,0,0,0.12)]"
        style={{ fontFamily: "var(--font-in-poppins, sans-serif)" }}
      >
        <div className="absolute hidden md:block bottom-0 left-1/2 -translate-x-1/2 md:left-32 w-[200px] h-[200px]">
          <Image 
            alt="Paciente InLuxury" 
            src="/images/inluxury/girl_banner.png"
            fill
            style={{ objectFit: "contain", objectPosition: "bottom" }}
            sizes="(max-width: 768px) 0vw, 200px"
          />
        </div>
        <div className="md:col-start-3 md:col-span-full z-10 relative">
          <div className="flex flex-col lg:flex-row items-center md:items-end lg:items-center justify-end lg:gap-16 space-y-4 lg:space-y-0">
            <p className="text-xl md:text-2xl lg:text-3xl text-center md:text-left md:pl-16 text-white font-medium lg:w-2/3 lg:pl-4 m-0 leading-snug">
              Donde la verdadera belleza se vive con lujo y sofisticación.
            </p>
            <a 
              className="flex items-center justify-center gap-3 bg-[#f5e7d3] py-3 px-6 rounded-full lg:w-1/3 transition duration-200 hover:-translate-y-1 hover:shadow-xl" 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#A1706D" className="shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.523 5.84L.057 23.486a.5.5 0 00.609.61l5.801-1.525A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.001-1.373l-.359-.214-3.717.977.992-3.618-.235-.372A9.808 9.808 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
              </svg>
              <p className="font-bold text-[#A1706D] m-0 text-sm md:text-base">¡Agendar una cita!</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
