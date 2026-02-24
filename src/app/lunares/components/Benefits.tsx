  'use client';

  import Image from "next/image";
  import { Swiper, SwiperSlide } from "swiper/react";
  import { Autoplay } from "swiper/modules";
  import "swiper/css";

  type Benefit = {
    src: string;
    alt: string;
    text: string;
    focalY?: number; // 0..100
  };

  const benefits: Benefit[] = [
    { src: "/images/lunares/new_1.png", alt: "Minimiza el riesgo de cicatrices visibles", text: "Minimiza el riesgo de cicatrices visibles", focalY: 50 },
    { src: "/images/lunares/2.png", alt: "Eliminación definitiva", text: "Eliminación definitiva", focalY: 35 },
    { src: "/images/lunares/3.png", alt: "Procedimiento seguro y preciso", text: "Procedimiento seguro y preciso", focalY: 50 },
    { src: "/images/lunares/resultados-inmediatos.png", alt: "Resultados inmediatos", text: "Resultados inmediatos", focalY: 18 },
  ];

  export const Benefits = () => {
    return (
      <section className="bg-white py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col items-center gap-10 md:gap-12">
          {/* Versión móvil: título + carrusel */}
          <div className="md:hidden w-full flex flex-col items-center gap-6">
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center text-center rounded-full bg-in-pink w-48 h-48 shadow-md px-6">
                <h2 className="text-center text-3xl font-in-playfair text-[#2c2c2c] leading-tight">
                Beneficios y
                <br />
                Características
              </h2>
              </div>
            </div>

            <Swiper
              modules={[Autoplay]}
              spaceBetween={18}
              slidesPerView={"auto"}
              centeredSlides
              loop
              speed={2800}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              className="w-full pb-6"
            >
              {benefits.map((benefit) => (
                <SwiperSlide key={benefit.text} className="!w-[240px]">
                  <BenefitCard {...benefit} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Versión desktop: grid rodeando el título (más cerca del texto) */}
          <div className="hidden md:grid grid-cols-3 grid-rows-[auto_1fr_auto] gap-y-2 gap-x-10 w-full justify-items-center items-center">
            {/* Arriba izquierda / arriba derecha */}
            <div className="col-start-1 row-start-1 flex justify-center w-full">
              <BenefitCard {...benefits[0]} />
            </div>
            <div className="col-start-3 row-start-1 flex justify-center w-full">
              <BenefitCard {...benefits[1]} />
            </div>

            {/* Título centrado */}
            <div className="col-start-2 row-start-2 flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-40 h-64 md:w-48 md:h-72 bg-in-pink rounded-[999px] z-10" />
                <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-in-playfair text-[#2c2c2c] leading-tight relative z-10">
                  Beneficios y
                  <br />
                  Características
                </h2>
              </div>
            </div>

            {/* Abajo izquierda / abajo derecha */}
            <div className="col-start-1 row-start-3 flex justify-center w-full">
              <BenefitCard {...benefits[2]} />
            </div>
            <div className="col-start-3 row-start-3 flex justify-center w-full">
              <BenefitCard {...benefits[3]} />
            </div>
          </div>
        </div>
      </section>
    );
  };

  const BenefitCard = ({ src, alt, text, focalY = 50 }: Benefit) => {
    return (
      <div className="relative w-full max-w-[260px] mx-auto rounded-2xl overflow-hidden shadow-sm bg-white">
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 240px, 260px"
            className="object-cover"
            style={{ objectPosition: `50% ${focalY}%` }}
          />
        </div>

        <div className="absolute inset-x-3 bottom-3">
          <p className="text-center w-full text-in-brown bg-[#FFF3ED]/85 backdrop-blur-sm font-medium rounded-xl py-2 px-4">
            {text}
          </p>
        </div>
      </div>
    );
  };
